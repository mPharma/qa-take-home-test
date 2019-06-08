import React, { Component } from 'react';
import { UserCardContainer, UserIcon, UserInfo, AllCardsContainer } from './styles';

class RightPanel extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>User List</h1>
        <AllCardsContainer>
          {Array(10)
            .fill('')
            .map((user, id) => (
              <UserCardContainer key={id}>
                <UserIcon>JD</UserIcon>
                <UserInfo>
                  <h4>John Doe Asante</h4>
                  <p>ADDRESS: East Legon. James Street Hse No. 12321</p>
                  <p>DOB: 2nd March 1993</p>
                </UserInfo>
              </UserCardContainer>
            ))}
        </AllCardsContainer>
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
    marginTop: 100,
    marginBottom: 50
  }
};

export default RightPanel;
