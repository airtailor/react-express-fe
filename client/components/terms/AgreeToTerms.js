import React, { Component } from 'react';
import TermsOfService from './TermsOfService';
import WithSectionHeader from '../HOC/WithSectionHeader';

class AgreeToTerms extends Component {
  render(){
    return (
      <div style={{width: "90%", margin: "50px auto", height: "500px", textAlign: "center"}}>
        <div style={{overflow: "scroll", height: "90%"}}>
          <TermsOfService />
        </div>

        <input 
          type="submit" 
          className="short-button"
          value="Agree To Terms" 
          onClick={() => console.log('agreed to terms')} />
      </div>
   );
  }
}

export default WithSectionHeader(AgreeToTerms);
