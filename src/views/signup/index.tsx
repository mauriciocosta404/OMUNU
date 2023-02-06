import * as S from './style'
import Button from '../../components/button/button';
import Logo from '../../components/logo';
import Image from 'next/image'
import Input from '../../components/input';
import { socialMediaMock } from '../../mock/mock';

const SignUp=()=>{
    return(
        <S.Container>
            <S.BollTopContainer>
                <Logo/>     
            </S.BollTopContainer>

            <S.Form>
                <S.Title>Criar seu Perfil</S.Title>
                <Input type='text' placeholder='Nome (Opcional)'/>
                <Input type='text' placeholder='data de nascimento'/>
                <Input type='email' placeholder='email'/>
                <Input type='password' placeholder='senha'/>
                <Button type='submit' children='criar conta' />
                <S.BorderContainer>
                    <hr /> OU <hr />
                </S.BorderContainer>
                <S.SocialMediaIcons>
                    {socialMediaMock.map(({src,alt},index)=>(
                        <Image key={index} width={60} height={60} alt={alt} src={src}/>))
                    }
                </S.SocialMediaIcons>
            </S.Form>
            <S.BollBottomContainer/>
        </S.Container>
    )
}

export default SignUp;