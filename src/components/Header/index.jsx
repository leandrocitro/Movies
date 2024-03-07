import { Container } from './styles';

export function Header() {
    return (
        <Container>
            <a href="/">Movies</a>

            <div className='menu'>
                <a href="/">Home</a>
                <a href="/Movies">Movies</a>
                <a href="/Profile">Profile</a>
            </div>

            <div className='search'>
            <a href="/Search">Search</a>
            </div>
        </Container>
    )

}