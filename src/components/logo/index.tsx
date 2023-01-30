import * as S from './styles'
import Image from 'next/image'
import lightBook from '../../assets/images/lampadaBook.png'

const Logo=()=>{
    return(
        <S.Container>
            <Image src={lightBook} alt="book"/>
            <h2>OMUNU</h2>
        </S.Container>
    )
}
export default Logo
