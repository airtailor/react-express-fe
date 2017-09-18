import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {removeGrowler} from '../../actions';
import {isEmpty} from 'lodash';

class Growler extends Component {
  setTimer() {
    setTimeout(() => {
      this.props.removeGrowler();
    }, 4000);
  }

  render() {
    if (!isEmpty(this.props.growl)) {
      this.setTimer();
      const {kind, message} = this.props.growl;
      const titleClass = `growl-title ${kind}-growl`;
      const messageClass = `growl-text ${kind}-growl`;
      return (
        <div onClick={() => this.props.removeGrowler()} className="growl">
          <div className="growl-header">
            <h4 className={titleClass}>{kind}</h4>
          </div>
          <div className="growl-body">
            <h3 className={messageClass}>{message}</h3>
          </div>
        </div>
      );
    } else {
      return <div className="empty-div" />;
    }
  }
}

const mapStateToProps = store => {
  return {
    growl: store.growl,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({removeGrowler}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Growler);
