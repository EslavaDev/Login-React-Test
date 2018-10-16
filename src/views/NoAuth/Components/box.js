import React from 'react';


const styles = {
    box: {
        backgroundColor: 'white',
        border: '1px solid #e6e6e6',
        textAlign: 'center',
        marginBottom: '1em',
        padding: '2em',
    }
}

const Box = props => {
  return (
    <div style={styles.box}>
      {props.children}
    </div>
  )
}

export default Box
