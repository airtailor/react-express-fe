webpackJsonp([8],{689:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),c=n(l),f=(r(8),r(15)),d=r(19),p=r(25),b=r(691),m=(n(b),r(323)),w=n(m),h=r(324),v=r(705),y=(n(v),r(704)),_=(n(y),function(e){return{user:e.currentUser}}),P=function(e){return(0,d.bindActionCreators)({updatePassword:p.updatePassword,setGrowler:p.setGrowler},e)},E=function(e){function t(){o(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.updateState=function(t,r){e.setState(a({},t,r),function(){e.validatePasswords(e.state.password,e.state.passwordConfirmation)})},e.handleSubmit=function(t){t.preventDefault();var r=e.state,n=r.password,a=r.passwordConfirmation;if(n===a){var o=e.props.user.user.id;e.props.updatePassword({id:o,password:n,password_confirmation:a}).then(function(t){e.props.setGrowler({kind:"success",message:"Password Updated"}),e.setState({password:"",passwordConfirmation:"",submitDisabled:!0})}).catch(function(e){return console.log("err",e)})}},e.state={password:"",passwordConfirmation:"",submitDisabled:!0},e}return s(t,e),i(t,[{key:"validatePasswords",value:function(e,t){if(e===t&&(0,h.ValidatePassword)(e))return void this.setState({submitDisabled:!1});this.setState({submitDisabled:!0})}},{key:"render",value:function(){var e=this.state;e.password,e.passwordConfirmation,e.submitDisabled;return c.default.createElement("div",null,c.default.createElement("h2",null," Edit User "),c.default.createElement("p",null," Full Functionality Available Soon "))}}]),t}(l.Component);t.default=(0,f.connect)(_,P)((0,w.default)(E))},691:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(e){var t=e.title,r=e.value,n=e.fieldName,o=e.onChange,u=e.className,s=e.type,i=s||"text";return a.default.createElement("div",null,a.default.createElement("label",{className:"form-label"},t),a.default.createElement("br",null),a.default.createElement("input",{type:i,className:"form-input "+u,size:"50",value:r,onChange:function(e){return o(n,e.target.value)}}),a.default.createElement("br",null),a.default.createElement("br",null))};t.default=o},692:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(e){return[{id:"",name:"Please Select"}].concat(e)},u=function(e){var t=o(e.options);return a.default.createElement("div",null,a.default.createElement("label",null,e.title),a.default.createElement("br",null),a.default.createElement("select",{value:e.value,onChange:function(t){return e.onChange(e.fieldName,t.target.value)}},s(t)),a.default.createElement("br",null),a.default.createElement("br",null))},s=function(e){return e.map(function(e,t){return a.default.createElement("option",{key:t,value:e.id},e.name)})};t.default=u},704:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),l=n(i),c=r(692),f=n(c),d=r(4),p=n(d),b=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,r=e.role;if(r&&"admin"==r)return l.default.createElement("div",null);var n=[{id:"tailor",name:"Tailor"},{id:"retailer",name:"Retailer"}];return l.default.createElement("div",{className:"SelectRole"},l.default.createElement("h3",null,"Roles"),l.default.createElement(f.default,{value:r,options:n,fieldName:"role",title:"Select Role:",onChange:t}))}}]),t}(i.Component);b.propTypes={onChange:p.default.func.isRequired,role:p.default.string.isRequired},t.default=b},705:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),c=n(l),f=(r(8),r(15)),d=r(19),p=r(25),b=r(691),m=n(b),w=r(324),h=function(e){return{user:e.currentUser}},v=function(e){return(0,d.bindActionCreators)({updatePassword:p.updatePassword,setGrowler:p.setGrowler},e)},y=function(e){function t(){o(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.updateState=function(t,r){e.setState(a({},t,r),function(){e.validatePasswords(e.state.password,e.state.passwordConfirmation)})},e.handleSubmit=function(t){t.preventDefault();var r=e.state,n=r.password,a=r.passwordConfirmation;if(n===a){var o=e.props.user.user.id;e.props.updatePassword({id:o,password:n,password_confirmation:a}).then(function(t){e.props.setGrowler({kind:"success",message:"Password Updated"}),e.setState({password:"",passwordConfirmation:"",submitDisabled:!0})}).catch(function(e){return console.log("err",e)})}},e.state={password:"",passwordConfirmation:"",submitDisabled:!0},e}return s(t,e),i(t,[{key:"validatePasswords",value:function(e,t){if(e===t&&(0,w.ValidatePassword)(e))return void this.setState({submitDisabled:!1});this.setState({submitDisabled:!0})}},{key:"storeIdMatch",value:function(){var e=this.props;return e.user.user.store_id==e.match.params.store_id}},{key:"userIdMatch",value:function(){var e=this.props;return e.user.user.id==e.match.params.user_id}},{key:"render",value:function(){if(this.storeIdMatch()||this.userIdMatch()){var e=this.state,t=e.password,r=e.passwordConfirmation,n=e.submitDisabled;return c.default.createElement("div",null,c.default.createElement("form",{onSubmit:this.handleSubmit},c.default.createElement(m.default,{value:t,type:"password",fieldName:"password",title:"New Password",onChange:this.updateState}),c.default.createElement(m.default,{value:r,fieldName:"passwordConfirmation",title:"Password Confirmation",type:"password",onChange:this.updateState}),c.default.createElement("input",{disabled:n,type:"submit",value:"Update Password",className:"short-button"})))}return c.default.createElement("div",null)}}]),t}(l.Component);t.default=(0,f.connect)(h,v)(y)}});