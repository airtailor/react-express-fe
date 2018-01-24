webpackJsonp([5],{676:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),c=n(l),f=(r(11),r(16)),d=r(24),p=r(28),b=r(679),m=(n(b),r(681)),h=n(m),v=r(322),w=r(690),y=(n(w),r(689)),_=(n(y),function(e){return{user:e.currentUser}}),E=function(e){return(0,d.bindActionCreators)({updatePassword:p.updatePassword,setGrowler:p.setGrowler},e)},P=function(e){function t(){a(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.updateState=function(t,r){e.setState(o({},t,r),function(){e.validatePasswords(e.state.password,e.state.passwordConfirmation)})},e.handleSubmit=function(t){t.preventDefault();var r=e.state,n=r.password,o=r.passwordConfirmation;if(n===o){var a=e.props.user.user.id;e.props.updatePassword({id:a,password:n,password_confirmation:o}).then(function(t){e.props.setGrowler({kind:"success",message:"Password Updated"}),e.setState({password:"",passwordConfirmation:"",submitDisabled:!0})}).catch(function(e){return console.log("err",e)})}},e.state={password:"",passwordConfirmation:"",submitDisabled:!0},e}return i(t,e),s(t,[{key:"validatePasswords",value:function(e,t){if(e===t&&(0,v.ValidatePassword)(e))return void this.setState({submitDisabled:!1});this.setState({submitDisabled:!0})}},{key:"render",value:function(){var e=this.state;e.password,e.passwordConfirmation,e.submitDisabled;return c.default.createElement("div",null,c.default.createElement("h2",null," Edit User "),c.default.createElement("p",null," Full Functionality Available Soon "))}}]),t}(l.Component);t.default=(0,f.connect)(_,E)((0,h.default)(P))},678:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n),a=r(16),u=r(24),i=r(11),s=r(28),l=function(e){var t=e.rotate,r=(e.userRoles,e.includeLink,e.link),n=void 0;if(t&&0!==t.length?n=function(){return e.resetCart()}:(r="/orders/new",n=function(){return console.log("")}),e.userRoles.admin||e.userRoles.retailer)return o.default.createElement(i.Link,{className:"cart-ribbon",to:r},o.default.createElement("h1",{className:"cart-ribbon-sign "+t,onClick:n},"+"),o.default.createElement("div",{className:"cart-ribbon-triangle"}))},c=function(e){return o.default.createElement("div",{className:"section-header"},o.default.createElement("h2",null,e.text),l(e))},f=function(e){return{currentUser:e.currentUser,userRoles:e.userRoles}},d=function(e){return(0,u.bindActionCreators)({resetCart:s.resetCart},e)};t.default=(0,a.connect)(f,d)(c)},679:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n),a=function(e){var t=e.title,r=e.value,n=e.fieldName,a=e.onChange,u=e.className,i=e.type,s=i||"text";return o.default.createElement("div",null,o.default.createElement("label",{className:"form-label"},t),o.default.createElement("br",null),o.default.createElement("input",{type:s,className:"form-input "+u,size:"50",value:r,onChange:function(e){return a(n,e.target.value)}}),o.default.createElement("br",null),o.default.createElement("br",null))};t.default=a},680:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getSectionHeaderText=function(e){var t=e.match.path;return"/admin/reports"===t?"Air Tailor / Reports":"/admin/reports/orders"===t?"Air Tailor / Order Reports":"/stores/new"===t?"Stores / New":"/users/:user_id/edit"===t?"Edit User":"/orders/new"===t?"Agree To Terms":"/site/terms_of_service"===t?"":void 0}},681:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return function(t){function r(){o(this,r);var e=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.state={text:""},e}return u(r,t),s(r,[{key:"componentDidMount",value:function(){var e=(0,p.getSectionHeaderText)(this.props);this.setState({text:e})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(d.default,{text:this.state.text}),c.default.createElement(e,this.props))}}]),r}(l.Component)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),c=n(l),f=r(678),d=n(f),p=r(680);t.default=i},682:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n),a=function(e){return[{id:"",name:"Please Select"}].concat(e)},u=function(e){var t=a(e.options);return o.default.createElement("div",null,o.default.createElement("label",null,e.title),o.default.createElement("br",null),o.default.createElement("select",{value:e.value,onChange:function(t){return e.onChange(e.fieldName,t.target.value)}},i(t)),o.default.createElement("br",null),o.default.createElement("br",null))},i=function(e){return e.map(function(e,t){return o.default.createElement("option",{key:t,value:e.id},e.name)})};t.default=u},689:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(1),l=n(s),c=r(682),f=n(c),d=r(4),p=n(d),b=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,r=e.role;if(r&&"admin"==r)return l.default.createElement("div",null);var n=[{id:"tailor",name:"Tailor"},{id:"retailer",name:"Retailer"}];return l.default.createElement("div",{className:"SelectRole"},l.default.createElement("h3",null,"Roles"),l.default.createElement(f.default,{value:r,options:n,fieldName:"role",title:"Select Role:",onChange:t}))}}]),t}(s.Component);b.propTypes={onChange:p.default.func.isRequired,role:p.default.string.isRequired},t.default=b},690:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),c=n(l),f=(r(11),r(16)),d=r(24),p=r(28),b=r(679),m=n(b),h=r(322),v=function(e){return{user:e.currentUser}},w=function(e){return(0,d.bindActionCreators)({updatePassword:p.updatePassword,setGrowler:p.setGrowler},e)},y=function(e){function t(){a(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.updateState=function(t,r){e.setState(o({},t,r),function(){e.validatePasswords(e.state.password,e.state.passwordConfirmation)})},e.handleSubmit=function(t){t.preventDefault();var r=e.state,n=r.password,o=r.passwordConfirmation;if(n===o){var a=e.props.user.user.id;e.props.updatePassword({id:a,password:n,password_confirmation:o}).then(function(t){e.props.setGrowler({kind:"success",message:"Password Updated"}),e.setState({password:"",passwordConfirmation:"",submitDisabled:!0})}).catch(function(e){return console.log("err",e)})}},e.state={password:"",passwordConfirmation:"",submitDisabled:!0},e}return i(t,e),s(t,[{key:"validatePasswords",value:function(e,t){if(e===t&&(0,h.ValidatePassword)(e))return void this.setState({submitDisabled:!1});this.setState({submitDisabled:!0})}},{key:"storeIdMatch",value:function(){var e=this.props;return e.user.user.store_id==e.match.params.store_id}},{key:"userIdMatch",value:function(){var e=this.props;return e.user.user.id==e.match.params.user_id}},{key:"render",value:function(){if(this.storeIdMatch()||this.userIdMatch()){var e=this.state,t=e.password,r=e.passwordConfirmation,n=e.submitDisabled;return c.default.createElement("div",null,c.default.createElement("h3",null,"Edit Password"),c.default.createElement("form",{onSubmit:this.handleSubmit},c.default.createElement(m.default,{value:t,type:"password",fieldName:"password",title:"Reset Password:",onChange:this.updateState}),c.default.createElement(m.default,{value:r,fieldName:"passwordConfirmation",title:"Password Confirmation:",type:"password",onChange:this.updateState}),c.default.createElement("input",{disabled:n,type:"submit",value:"Update Password",className:"short-button"})))}return c.default.createElement("div",null)}}]),t}(l.Component);t.default=(0,f.connect)(v,w)(y)}});