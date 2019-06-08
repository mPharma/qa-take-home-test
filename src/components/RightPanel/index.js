import React, { Component } from 'react';

class RightPanel extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>User List</h1>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '50vw',
    height: '100vh',
    backgroundColor: '#F9F9F9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    marginTop: 100
  }
};

export default RightPanel;
