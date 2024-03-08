import { Container, Form, Background} from './styles';

import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/input';
import { Button } from '../../components/Button';


export function SignIn(){
    return(
        <Container>
            <Form>
            <h1>Movies</h1>
                <p>Aplicação para acompanhar tudo o que assistir</p>

                <h2>Faça seu Login</h2>

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

                <Button title="Entrar" />
                
                <a to="/register">
                    Criar Conta
                </a>
                


            </Form>
            <Background />
        </Container>
        
    )
}