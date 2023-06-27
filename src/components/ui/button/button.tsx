import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>

//ElementType - специальный тип из реакта, это, можно сказать тег (jsx элемент)
export const Button = <T extends ElementType = 'button'>(
  //уберем из дефолтных пропсов переданного компонента те, которые будут называться, как наши, а  останутся только те, которые в наших пропсах (в нашем случае className)
  //TODO мне кажется, что типизацию с Omit-keyof нужно закинуть в тип ButtonProps и тогда здесь можно будет просто указать props: ButtonProps<T> ????
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props

  return (
    <Component
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className ?? ''}`}
      {...rest}
    />
  )
}
