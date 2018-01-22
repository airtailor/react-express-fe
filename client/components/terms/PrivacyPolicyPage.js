import React, { Component } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import WithSectionHeader from '../HOC/WithSectionHeader';
import LogoMessage from '../LogoMessage';

class PrivacyPolicyPage extends Component {
  render() {
    return (
      <div
        style={{
          width: '80%',
          margin: '50px auto',
          height: '800px',
          textAlign: 'center',
          paddingBottom: '100px',
        }}
      >
        <LogoMessage
          className="sign-in-logo"
          text="Hi! Here's our Privacy Policy"
        />

        <div style={{ overflow: 'scroll', paddingBottom: '500px' }}>
          <PrivacyPolicy />
        </div>
      </div>
    );
  }
}
export default WithSectionHeader(PrivacyPolicyPage);
