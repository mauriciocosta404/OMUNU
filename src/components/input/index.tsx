import React, {useState} from 'react'
import * as S from './styles'
import { InputContainerProps } from './type'

const Input: React.FC<InputContainerProps> = ({
  type,
  placeholder,
  ...rest
}) => {
  const [passwordType, setPasswordType] = useState<'password'|'text'>('password');

  return (
    <S.Container type={type === 'password' ? passwordType: type} placeholder={placeholder} {...rest} required >
    </S.Container>
  )
}

export default Input
