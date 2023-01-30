import { ButtonHTMLAttributes } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: React.ReactNode
} & ButtonTypes
