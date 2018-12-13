import React from 'react';
import {Divider, Form, Button, Icon} from 'semantic-ui-react';
import Box from './box';
import '../noAuth.css';
const Login = ({handleClick, handleChange, handleSubmit}) => {
  return (
    <div>
      <Box>
          <img src='images/LogoColor.png ' alt="logo" />
          <Form onSubmit={(ev) => handleSubmit(ev)}>
              <Form.Field>
                  <Form.Input name='email' onChange={handleChange} placeholder='Teléfono, Email o Nombre de usuario'icon={<Icon color='green' size='large' name="check circle outline"/>}/>
              </Form.Field>
              <Form.Field>
                  <Form.Input name='password' onChange={handleChange} type='password' placeholder='Contraseña' icon={<Icon color='red' size='large' name="times circle outline"/>}/>
              </Form.Field>
              <Button primary fluid type='submit'>Entrar</Button>
              <Divider horizontal> O </Divider>
              <Button color="google plus">
                <p> <Icon name="google" />  Iniciar sesión con Google </p>
              </Button>
          </Form>
      </Box>
      <Box>
          <p>¿No tienes una cuenta? <button onClick={handleClick}>Registrate</button></p> 
      </Box>
    </div>
  )
}

export default Login
