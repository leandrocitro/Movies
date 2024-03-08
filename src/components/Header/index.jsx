import { Container } from './styles';
import { Input } from '../input'

export function Header() {
    return (
        <Container>
            <a href="/">Movies</a>
            <Input />
            <div className='Profile'>
            <a href="/Search">Search</a>
            </div>
        </Container>
    )

}