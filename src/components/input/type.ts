import {InputHTMLAttributes} from 'react'

type InputTypes=InputHTMLAttributes<HTMLElement>

export type InputContainerProps = {
  type:string,
  placeholder:string,
} & InputTypes