import { Container, Form, Background } from './styles';

import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Input } from '../../components/input';
import { Button } from '../../components/Button';

export function SignUp() {
    return (
        <Container>
            <Background />
            <Form>
                <h1>Notes</h1>
                <p>Aplicação para acompanhar tudo o que assistir</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar" />

                <a to="/">
                    Voltar para o login
                </a>


            </Form>

        </Container>

    )
}