/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavbarOverridesProps = {
    Navbar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "Star 1"?: PrimitiveOverrideProps<IconProps>;
    "Q&A"?: PrimitiveOverrideProps<TextProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    "New Question"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavbarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavbarOverridesProps | undefined | null;
}>;
export default function Navbar(props: NavbarProps): React.ReactElement;
