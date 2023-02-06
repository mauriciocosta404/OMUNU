import * as S from './styles'
import Image from 'next/image';
import peopleReadding from '../../assets/images/peopleReadding.png';

const Banner=()=>{
    return(
        <S.MainContainer>
            <S.Container>
                <S.BollBottomContainer/>
                <Image width={300} height={480} src={peopleReadding} alt='readding'/>
                <S.ButtonsContainer>
                    <S.Button color='#385A64'>Entrar</S.Button>
                    <S.Button color='#FFC801'>Criar Conta</S.Button>
                </S.ButtonsContainer>
                <S.Footer>
                    @ 2023 OMUNU
                </S.Footer>
            </S.Container>
        </S.MainContainer>
    )
}
export default Banner;