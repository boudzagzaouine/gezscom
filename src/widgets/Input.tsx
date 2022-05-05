import cn from 'classnames'
import type { FC, InputHTMLAttributes } from 'react'
import { InputProps } from './TypeWidgets'
const calculClass = ({ className }: InputHTMLAttributes<HTMLInputElement>) => {
    return cn(className)
}

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
    className,
    ...props
}) => {
    return <input className={calculClass({ className })} {...props} />
}

export default Input
