import BookCategory from '../../components/bookCategory'
import Header from '../../components/header/header'
import * as S from './styles'
import { FaBook } from 'react-icons/fa'

const Books=()=>{
    return(
        <S.Container>
            <Header 
            avatarInfo={true} 
            searchInput={false} 
            bollTop={false} 
            />

            <BookCategory title='Manuais de apoio escolar' Icon={<FaBook/>}/>
        </S.Container>
    )
}

export default Books