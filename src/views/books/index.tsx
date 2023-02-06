import BookCategory from '../../components/bookCategory'
import Header from '../../components/header/header'
import * as S from './styles'
import { booksCategoryMock } from '../../mock/booksCategoryMock'

const Books=()=>{
    return(
        <S.Container>
            <Header 
            avatarInfo={true} 
            searchInput={false} 
            bollTop={false} 
            />

            <h2>Procurar Categoria</h2>
             <S.Books>    
                {
                    booksCategoryMock.map(({title,IconCategory},key)=>
                        <BookCategory key={key} title={title} Icon={<IconCategory/>}/>
                    )
                }
            </S.Books>   
        </S.Container>
    )
}

export default Books