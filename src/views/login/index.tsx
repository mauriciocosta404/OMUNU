import * as S from './style'
import Button from '../../components/button/button';
import Logo from '../../components/logo';
import Image from 'next/image'
import Input from '../../components/input';
import { socialMediaMock } from './mock';

const Login=()=>{
    return(
        <S.Container>
            <S.BollTopContainer>
                <Logo/>     
            </S.BollTopContainer>

            <S.Form>
                <S.Title>Login</S.Title>
                <Input type='text' placeholder='Email'/>
                <Input type='password' placeholder='password'/>
                <Button type='submit' children='Entrar' />
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

export default Login;