import React, { Component } from 'react';


class LazyLoad extends Component {
  componentWillMount() {
    const { load } = this.props;
    load.then((comp) => {
      this.comp = comp;
      this.forceUpdate();
    });
  }

  render() {
    return this.comp ? <this.comp.default /> : null;
  }
}


export default dynamicImport => () => (
  <LazyLoad load={dynamicImport()} />
);
