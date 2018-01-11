import React, { Component } from 'react';
import TermsOfService from './TermsOfService';
import WithSectionHeader from '../HOC/WithSectionHeader';
import LogoMessage from '../LogoMessage';


class TermsOfServicePage extends Component {
  render(){
    return (
      <div style={{width: "80%", margin: "50px auto", height: "800px", textAlign: "center", paddingBottom: "100px"}}>
        <LogoMessage
          className="sign-in-logo"
          text="Hi! Here's our Terms of Service"
        />

        <div style={{overflow: "scroll", paddingBottom: "500px"}}>
          <TermsOfService />
        </div>
      </div>
   );
  }
}
export default WithSectionHeader(TermsOfServicePage);
