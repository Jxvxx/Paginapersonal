/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateAnswerFormInputValues = {
    text?: string;
    author?: string;
};
export declare type CreateAnswerFormValidationValues = {
    text?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateAnswerFormOverridesProps = {
    CreateAnswerFormGrid?: PrimitiveOverrideProps<GridProps>;
    text?: PrimitiveOverrideProps<TextAreaFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateAnswerFormProps = React.PropsWithChildren<{
    overrides?: CreateAnswerFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateAnswerFormInputValues) => CreateAnswerFormInputValues;
    onSuccess?: (fields: CreateAnswerFormInputValues) => void;
    onError?: (fields: CreateAnswerFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateAnswerFormInputValues) => CreateAnswerFormInputValues;
    onValidate?: CreateAnswerFormValidationValues;
} & React.CSSProperties>;
export default function CreateAnswerForm(props: CreateAnswerFormProps): React.ReactElement;
