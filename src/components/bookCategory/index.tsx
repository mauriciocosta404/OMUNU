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
            {Icon}
        </S.Container>
    )
}

export default BookCategory;