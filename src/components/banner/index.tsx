import * as S from './styles'
import Image from 'next/image';
import peopleReadding from '../../assets/images/peopleReadding.png';

const Banner=()=>{
    return(
        <S.MainContainer>
            <S.Container>
                <S.BollTopContainer/>
                <Image width={550} height={500} src={peopleReadding} alt='readding'/>
                <S.ButtonsContainer>
                    <S.Button color='#385A64'>Entrar</S.Button>
                    <S.Button color='#FFC801'>Criar Conta</S.Button>
                </S.ButtonsContainer>
            </S.Container>
        </S.MainContainer>
    )
}
export default Banner;