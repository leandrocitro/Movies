import { Container } from './styles';

import linkedin from '../../assets/icons/linkedin.png'
import gitHub from '../../assets/icons/github.png'
import instagram from '../../assets/icons/instagram.png'

export function Footer() {
    return (
        <Container>
            <a href="/">Movies</a>

            <div className='menu'>
                <a href="https://linkedin.com/in/leandro-citro-600bab32" target="_blank"><img src={linkedin} alt="Linkedin" /></a>
                <a href="https://github.com/leandrocitro" target="_blank"><img src={gitHub} alt="" /></a>
                <a href="https://www.instagram.com/leandrocitro11?igsh=ZWR2NDV5cXR4emkx" target="_blank"><img src={instagram} alt="" /></a>
            </div>

            <div className='search'>
            <a href="/Search">Search</a>
            </div>
        </Container>
    )

}