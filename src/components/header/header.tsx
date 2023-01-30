import * as S from './style';
import Image from 'next/image';
import Logo from '../logo';
import { HeaderProps } from './type';
import avatar from '../../assets/images/profilecircle.png'
import {FaSearch} from 'react-icons/fa'

const Header=({avatarInfo,searchInput}:HeaderProps)=>{
    return(
        <S.MainContainer>
           <Logo/>
           <S.LinksContainer>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Livros</a>
                    </li>
                    <li>
                        <a href="">Sobre</a>
                    </li>
                </ul>
           </S.LinksContainer>

           {searchInput && 
                <S.SearchInputContainer>
                    <FaSearch/>
                    <input type="search" name="" id="" placeholder='Buscar'/>
                </S.SearchInputContainer>
           }

            {avatarInfo &&
                <S.AvatarInfo>
                    <Image src={avatar} width={50} height={50} alt='avatar'/>
                    <h3>JoelMarcolinoVisualG</h3> 
                </S.AvatarInfo>           
            }
        </S.MainContainer>
    )
}
export default Header;