import * as S from './styles'
import React from 'react'
import { BookCategoryType } from './type'

const BookCategory:React.FC<BookCategoryType> =({
    title,
    Icon
})=>{
    return(
        <S.Container>
            <span>{title}</span>
            <S.IconContainer>
                {Icon}
            </S.IconContainer>
        </S.Container>
    )
}

export default BookCategory;