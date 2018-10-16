import React from 'react';
import {Divider, Form, Button, Icon} from 'semantic-ui-react';
import Box from './box';
const Register = (props) => {
  return (
<div>
      <Box>
        {/* <img src='images/logoInst.png' /> */}
        <h3>Regístrate para ver fotos y vídeos de tus amigos.</h3>
        <Form onSubmit={(ev) => props.handleSubmit(ev)}>
            <Button color="google plus">
                <p> <Icon name="google" />  Iniciar sesión con Google </p>
            </Button>
            <Divider horizontal> O </Divider>
            <Form.Field>
                  <Form.Input name='email' onChange={props.handleChange} placeholder='Número de móvil o correo electrónico'/>
            </Form.Field>
            <Form.Field>
                  <Form.Input name='nombre' onChange={props.handleChange} placeholder='Nombre Completo'/>
            </Form.Field>
            <Form.Field>
                  <Form.Input placeholder='Nombre de usuario'/>
            </Form.Field>
            <Form.Field>
                  <Form.Input name='password' onChange={props.handleChange} type='password' placeholder='Contraseña'/>
            </Form.Field>
            <Button primary fluid type='submit'>Registrarse</Button>
        </Form>
        <h3>Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.</h3>
      </Box>
      <Box>
      <p>¿Tienes una cuenta? <a href="" onClick={props.handleClick}>Inicia Sesión</a></p> 
      </Box>
    </div>
  )
}

export default Register;
