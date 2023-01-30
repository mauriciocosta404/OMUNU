import React from 'react'
import * as S from './styles'
import { ButtonProps } from './type'

const button: React.FC<ButtonProps> = ({
    type = 'submit',
    onClick,
    children
}) => {
    return (
        <S.Container type={type} onClick={onClick} className="button">
            {children}
        </S.Container>
    )
}

export default button;
