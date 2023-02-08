import Logo from '../../components/logo'
import * as S from './styles'
import Image from 'next/image'
import aboutImage from '../../assets/images/about.png'

const About=()=>{
    return(
        <S.Container>
            <Logo/>
            <S.Title>
                Sobre
            </S.Title>
            <S.Content>
                <S.Description>
                    Entra na onda e descobre a magia infantil com frases e livros para alunos 
                    vinculado no âmbito da educação para o desenvolvimento de escrituras dando
                    assim aberturas para leitores infantis no contexto e nos exercícios propostos
                    na educação infantil, com a finalmente de criar crianças com incentivo de 
                    inovação no processo da educação.
                </S.Description>
                <Image src={aboutImage} alt=''/>
            </S.Content>
        </S.Container>
    )
}
export default About;