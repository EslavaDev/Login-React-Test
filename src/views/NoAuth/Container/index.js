import React, { Component } from 'react';
import {Grid, Card, Responsive} from 'semantic-ui-react';
import SignIn from '../Components/login';
import SignUp from '../Components/register';
import Box from '../Components/box';
const items = [
    {
      key:  1,
      header: 'Project Report - April',
      description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
      meta: 'ROI: 30%',
    },
    {
        key:  2,
      header: 'Project Report - May',
      description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'ROI: 34%',
    },
    {
        key:  3,
      header: 'Project Report - June',
      description:
        'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
      meta: 'ROI: 27%',
    },
    {
        key:  4,
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
      },
  ]
export default class ContainerPureNoAuth extends Component {

    state = {
        visible: 0,
        args:{}
    }

    showRegister = (ev) => {
        ev.preventDefault();
        this.setState({
            visible:1
        });
    }
    showLogin = (ev) => {
        ev.preventDefault();
        this.setState({
            visible:0
        });
    }
    handleChange = (ev, item) => {
        const { args } = this.state;
        const {name, value} = item;
        const obj = {...args,[name]:value};
        this.setState({args: obj});
    }

    handleSubmitLogin = (ev) => {
        console.log(this.state.args)
    }
  render() {
      const { visible } = this.state;
    return (
        <Grid columns="2" centered verticalAlign="middle" style={styles.grid} >
            <Grid.Row centered stretched>
                <Grid.Column mobile={3} tablet={8} computer={6} >
                <div style={styles.scroll}>
                    <Box>
                    <Card.Group centered items={items} />
                    </Box>
                    </div>
                </Grid.Column>
                <Grid.Column mobile={6} tablet={8} computer={7} >
                    {(visible === 0) && <SignIn handleChange={this.handleChange} handleClick={this.showRegister} handleSubmit={this.handleSubmitLogin}/>}
                    {(visible === 1) && <SignUp handleClick={this.showLogin} handleChange={this.handleChange} handleSubmit={this.handleSubmitLogin}/>}
                    {/* {showLostPassword && <LostPassword/>} */}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
  }
}

const styles = {
    grid: {
        height:  '100%',
        width: '900px',
        margin: '0 auto',
    },
    scroll: {
        height:'450px',
        marginBottom: '4%',
        overflow:'scroll',
    },
}