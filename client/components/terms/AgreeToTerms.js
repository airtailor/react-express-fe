import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TermsOfService from './TermsOfService';
import WithSectionHeader from '../HOC/WithSectionHeader';
import { 
  updateStore, 
  getCurrentStore, 
  setGrowler,  
  setLoader,
  removeLoader,
} from '../stores/edit/ducks/actions';

const mapStateToProps = store => {
  return {
    store: store.currentStore,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCurrentStore,
      updateStore,
      setGrowler,
      setLoader,
      removeLoader,
    },
    dispatch
  );
};

class AgreeToTerms extends Component {
  submitAgreeToTerms = () => {
    const store = this.props.currentStore;
    const agreedStore = {...store, agrees_to_terms: true};

    this.props.setLoader();
    this.props.updateStore({store: agreedStore})
      .then(res => {
        this.props.getCurrentStore(store.id)
          .then(res => {
            this.props.removeLoader();
            const kind = "success";
            const message = "Thanks! You've agreed to the terms!";
            this.props.setGrowler({kind, message});
          });
      });
  }

  render(){
    return (
      <div style={{width: "90%", margin: "50px auto", height: "800px", textAlign: "center"}}>
        <div style={{overflow: "scroll", height: "90%"}}>
          <TermsOfService />
        </div>

        <input 
          type="submit" 
          className="short-button"
          value="Agree To Terms" 
          onClick={this.submitAgreeToTerms} />
      </div>
   );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithSectionHeader(AgreeToTerms));

