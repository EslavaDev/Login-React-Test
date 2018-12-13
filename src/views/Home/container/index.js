import React from "react";
import { Divider, Form, Button, Icon, Select } from "semantic-ui-react";

const Prueba = () => (
  <div className="App">
    <h1 style={{ textAlign: "center" }}>Formulario para solicitar servicio</h1>

    <Form
      // onSubmit={
      //   // (ev) => props.handleSubmit(ev)
      //   }
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Form.Field
      style={{ width: "60%" }}>
        
        <Select placeholder='Selecciona un servicio' 
        options={
          [
            { key: 'PeerPet', value: 'PeerPet',  text: 'PeerPet - $ 10.000' }, 
            { key: 'PeerSmall', value: 'PeerSmall',  text: 'PeerSmall - $ 20.000' }, 
            { key: 'PeerStandard', value: 'PeerStandard',  text: 'PeerStandard - $ 45.000' }, 
            { key: 'PeerStandarPlus', value: 'PeerStandarPlus',  text: 'PeerStandarPlus - $ 50.000' }, 
            { key: 'PeerCopper', value: 'PeerCopper',  text: 'PeerCopper - $ 57.000' }, 
            { key: 'PeerSilver', value: 'PeerSilver',  text: 'PeerSilver - % 67.000' }, 
        ]}
        value={"hola"}
          // style={{color:'red', }}
        />   
      </Form.Field >
      <Form.Field style={{ width: "60%" }}>
        <Form.Input
          name="Descripcion"
          // onChange={props.handleChange}
          placeholder="Descripcion del servicio"
        />
      </Form.Field>
      <Form.Field style={{ width: "60%" }}d>
        <Form.Input placeholder="Sector del servicio" />
      </Form.Field>
      <Form.Field style={{ width: "60%" }}>
        <Form.Input
          name="Direccion"
          // onChange={props.handleChange}
          placeholder="Direccion del servicio"
        />
      </Form.Field>
      <Form.Field style={{ width: "60%" }}>
        <Form.Input
          name="Fecha"
          // onChange={props.handleChange}
          placeholder="Fecha y hora del servicio que desea "
        />
      </Form.Field>
      <Button primary fluid type="submit" style={{ width: "30%" }}>
        Solicitar servicio
      </Button>
    </Form>
  </div>
);

export default Prueba;
