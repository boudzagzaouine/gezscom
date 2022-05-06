import type { LinkProps as NLinkProps } from 'next/link'
import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ElementType,
    LabelHTMLAttributes,
    OptionHTMLAttributes,
    ReactElement,
    ReactNode,
    TableHTMLAttributes,
    TdHTMLAttributes,
    ThHTMLAttributes,
} from 'react'
import React from 'react'
import type {
    Control,
    FieldValues,
    SubmitHandler,
    UseControllerProps,
    UseFormProps,
    UseFormReturn,
} from 'react-hook-form'
import type { UrlObject } from 'url'

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
export type ExtendableProps<
    ExtendedProps = {},
    OverrideProps = {}
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>

//declare type Url = string | UrlObject;

export type ObjectIterator = (value: any, key: any) => void
// Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
// A more precise version of just React.ComponentPropsWithoutRef on its own
export type PropsOf<
    C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>

type AsProp<C extends React.ElementType> = {
    /**
     * An override of the default HTML tag. Can also be another React component.
     */
    as?: C
}

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
export type InheritableElementProps<
    C extends React.ElementType,
    Props = {}
> = ExtendableProps<PropsOf<C>, Props>

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
export type PolymorphicComponentProps<
    C extends React.ElementType,
    Props = {}
> = InheritableElementProps<C, Props & AsProp<C>>
/**
 * Utility type to extract the `ref` prop from a polymorphic component
 */
export type PolymorphicRef<C extends React.ElementType> =
    React.ComponentPropsWithRef<C>['ref']
/**
 * A wrapper of `PolymorphicComponentProps` that also includes the `ref`
 * prop for the polymorphic component
 */
export type PolymorphicComponentPropsWithRef<
    C extends React.ElementType,
    Props = {}
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> }

export type LayoutName = 'main' | 'centered' | 'empty'

export type LayoutProps = {
    children: React.ReactNode
    name?: LayoutName
}

export type ViewProps<C extends ElementType> = PolymorphicComponentProps<
    C,
    {
        col?: boolean
        row?: boolean
    }
>

export type TextProps<C extends ElementType> = PolymorphicComponentProps<
    C,
    {
        children?: ReactNode
    }
>

export type LinkProps<C extends ElementType = 'a'> = PolymorphicComponentProps<
    C,
    Omit<NLinkProps, 'as'>
>

export interface AnchorProps<T extends HTMLAnchorElement = HTMLAnchorElement>
    extends AnchorHTMLAttributes<T> {}

export type ValueType =
    | string
    | ReadonlyArray<string>
    | number
    | undefined
    | boolean

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
export interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

export type FormControlProps<C extends ElementType> =
    PolymorphicComponentPropsWithRef<
        C,
        {
            value?: ValueType
            defaultValue?: ValueType
        }
    >

export type InputProps<C extends ElementType> = FormControlProps<C> & {
    label?: string
    inputClass?: string
    labelClass?: string
    prepend?: ReactNode
    append?: ReactNode
    row?: boolean
    meta?: FieldMetaProps
}

export type FieldProps<
    C extends ElementType,
    TValues extends FieldValues
> = InputProps<C> & UseControllerProps<TValues>

export interface FieldMetaProps {
    touched: boolean
    invalid?: boolean
    error?: string
}

export interface ErrorProps extends LabelProps {
    meta?: FieldMetaProps
}
export type FormProps<T extends FieldValues> = UseFormProps<T> & {
    children:
        | React.ReactNode
        | ((methods: UseFormReturn<T>) => React.ReactElement)
    onSubmit?: SubmitHandler<T>
    resetOnSuccessfulSubmit?: boolean
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    confirm?: string
    variant?: 'primary' | 'secondary'
    size?: string
    label?: string
    backgroundColor?: string
    full?: boolean
}

export type TableProps = {
    thead?: React.ReactNode
} & TableHTMLAttributes<HTMLTableElement>
export type TrProps = {
    variant?: string
    className?: string
    children?: React.ReactNode
}
export type ThProps = {
    action?: boolean
} & ThHTMLAttributes<HTMLTableCaptionElement>
export type TdProps = {
    action?: boolean
} & TdHTMLAttributes<HTMLTableDataCellElement>

export type { FieldValues, SubmitHandler, Control, UseFormReturn }

export type Url = NLinkProps['href']

export type MenuBarItemProps<C extends ElementType = 'a'> = LinkProps<C> & {
    icon?: React.ReactElement
    title?: string
    badge?: number
}
export type MenuItems={
    icon:ReactElement<any, any>
    text:string 
    action:()=>void
    }