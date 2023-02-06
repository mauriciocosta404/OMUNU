import Header from '../../components/header/header'
import * as S from './styles'

const Books=()=>{
    return(
        <S.Container>
            <Header 
            avatarInfo={true} 
            searchInput={false} 
            bollTop={false} 
            />
        </S.Container>
    )
}

export default Books