import React, { Component } from 'react';
import { connect } from 'react-redux';

class Songlist extends Component {
  render() {
      console.log(this.props);

      return (
         <div>Songlist</div>
      );
  };
}

const mapStateToProps = state => {
    return { songs: state.songs}
}

export default connect(mapStateToProps)(Songlist);