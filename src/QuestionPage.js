import { useParams } from "react-router-dom";
import { AnswerCardViewCollection, CreateAnswerForm, QuestionCardSingle } from "./ui-components";
import { useState, useEffect } from "react";
import { DataStore, SortDirection } from "aws-amplify";
import { Answer, Question } from "./models";
import { Button } from "@aws-amplify/ui-react";

const QuestionPage = () => {
    const {id} = useParams();
    const [question, setQuestion] = useState(null);
    const [answersList, setAnswerList] = useState([]);
    const [showAnswerForm, setShowAnswerForm] = useState(false);

    useEffect( () => {
        async function queryQuestion(id){
            const questionFromBackend = await DataStore.query(Question, id);
            setQuestion(questionFromBackend);
        }

        if(id){
            queryQuestion(id)
        }

    }, [id]) ;


    async function queryAnswers(id){
        const answersFromBackend = await DataStore.query(Answer, c => c.questionID.eq(id),
        {
            sort: s => s.createdAt(SortDirection.DESCENDING),
        }
        );
        if (answersFromBackend){
            const formattedAnswers = answersFromBackend.map(ans => {
                
                const updatedObject = Object.assign({}, ans)
                const date = ans.createdAt ? new Date(ans.createdAt): new Date();
                updatedObject["createdAt"] = date.toLocaleDateString();
                updatedObject["author"] = ans.author? ans.author: "anonymous"
                return updatedObject;

            })

            setAnswerList(formattedAnswers);

        }
        
    }

    useEffect( () => {
        

        if(question){
            queryAnswers(question.id)
        }

    }, [question]) ;


    if(!question){
        return <div>loading</div>
    }

    

    return (
        <div className="App">
            <QuestionCardSingle question={question}/>
            <Button onClick={() =>  setShowAnswerForm(true)} marginBottom="10px">Responder Pregunta</Button>

                {showAnswerForm && (<CreateAnswerForm
                width={"60%"}
                onSubmit={(fieds) => {
                    const updatedFields = {...fieds}
                    updatedFields["questionID"] = question.id;
                    return updatedFields;
                }}
                onSuccess={() => {
                    setShowAnswerForm(false)
                    setTimeout(async ()=> await queryAnswers(question.id), 1000)
                }}

                />)}

            <AnswerCardViewCollection items={answersList}/>
        </div>

    )
}

export default QuestionPage;