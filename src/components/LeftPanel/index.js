import React, { Component } from 'react';
import { TextInput, TextInputLabel, TextInputGroup, TextArea, Button } from './styles';

class LeftPanel extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Data Test App</h1>
        <p>Please complete the form below to continue</p>

        <main style={styles.textInputContainer}>
          <TextInputGroup>
            <TextInputLabel>First Name</TextInputLabel>
            <TextInput type="text" placeholder="eg. John" fullWidth data-test-id="first-name" />
          </TextInputGroup>

          <section style={styles.group}>
            <TextInputGroup>
              <TextInputLabel>Middle Name</TextInputLabel>
              <TextInput type="text" placeholder="eg. Kwesi" width={190} data-test-id="middle-name" />
            </TextInputGroup>

            <TextInputGroup>
              <TextInputLabel>Last Name</TextInputLabel>
              <TextInput type="text" placeholder="eg. Doe" data-test-id="last-name" />
            </TextInputGroup>
          </section>

          <TextInputGroup>
            <TextInputLabel>Phone Number</TextInputLabel>
            <TextInput type="number" placeholder="eg. 023-234-2343" fullWidth data-test-id="phone-number" />
          </TextInputGroup>

          <TextInputGroup>
            <TextInputLabel>Date of Birth</TextInputLabel>
            <TextInput type="date" placeholder="eg. dd - mm - yy" fullWidth error data-test-id="dob" />
          </TextInputGroup>

          <TextInputGroup>
            <TextInputLabel>Address</TextInputLabel>
            <TextArea placeholder="Enter Address here…" fullWidth data-test-id="address" />
          </TextInputGroup>
        </main>

        <div>
          <Button type="sumbit" data-test-id="submit-btn" tabIndex="0">
            Add New User
          </Button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '50vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    marginTop: 100
  },
  textInputContainer: {
    width: '60%'
  },
  group: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

export default LeftPanel;
