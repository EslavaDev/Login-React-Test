import React, { Component } from 'react';
import { Header, Icon, Grid, Menu } from 'semantic-ui-react';

class MainLayout extends Component {
    constructor(){
      super();
      this.state = {
        activeItem: 'bio'
      }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Header as="h2" icon textAlign="left" style={{backgroundColor: 'red'}}>
          <Icon name="users" circular />
          <Header.Content>Friends</Header.Content>
        </Header>
        <Grid columns={2}>
                <Grid.Column width={4} style={{backgroundColor: 'red'}}>
          <Menu fluid vertical>
            <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
            <Menu.Item name='pics' active={activeItem === 'pics'} onClick={this.handleItemClick} />
            <Menu.Item
              name='companies'
              active={activeItem === 'companies'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            />
          </Menu>
          </Grid.Column>
          <Grid.Column width={11}>
            {this.props.children}
            <h1>TEST</h1>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default MainLayout;
