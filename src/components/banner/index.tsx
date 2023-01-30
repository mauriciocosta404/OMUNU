import * as S from './styles'
import Image from 'next/image';
import peopleReadding from '../../assets/images/peopleReadding.png';

const Banner=()=>{
    return(
        <S.Container>
            <Image width={600} height={600} src={peopleReadding} alt='readding'/>
        </S.Container>
    )
}
export default Banner;