webpackJsonp([7],{672:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),s=n(l),d=r(16),c=r(24),f=r(4),p=n(f),m=r(51),h=n(m),v=(r(11),r(324)),b=r(686),y=r(679),_=n(y),E=r(678),w=n(E),g=r(690),S=n(g),C=r(684),O=n(C),P=r(329),j=n(P),T=function(e){return{store:e.editStore,tailors:e.tailorList,userRoles:e.userRoles,currentUser:e.currentUser}},k=function(e){return(0,c.bindActionCreators)({getEditStore:b.getEditStore,updateStore:b.updateStore,updateEditStore:b.updateEditStore,setGrowler:b.setGrowler,setLoader:b.setLoader,removeLoader:b.removeLoader},e)},N=function(e){function t(){var e,r,n,u;a(this,t);for(var i=arguments.length,l=Array(i),s=0;s<i;s++)l[s]=arguments[s];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.updateState=function(e,t){n.props.updateEditStore(e,t)},n.handleSubmit=function(e){e.preventDefault();var t=n,r=n.props.store;n.props.setLoader(),n.props.updateStore({store:r}).then(function(e){if(n.props.removeLoader(),e.data.body.errors){var r=e.data.body.errors[0];t.setState(t.props.store),t.props.setGrowler({kind:"warning",message:r})}else if(e.data.body){n.props.setGrowler({kind:"success",message:"Store Updated Successfully!"})}}).catch(function(e){console.log(e)})},u=r,o(n,u)}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getEditStore,r=e.match.params.store_id,n=e.currentUser.user.store_id;t(e.userRoles.admin?r:n).catch(function(e){return console.log(e)})}},{key:"renderTailorSelect",value:function(e,t){if(t)return s.default.createElement(O.default,{onChange:this.updateState,fieldName:"default_tailor_id",headerText:"Set Default Tailor",tailorId:e})}},{key:"renderForm",value:function(){var e=this,t=this.props.store,r=t.name,n=t.phone,a=t.street,o=t.unit,u=t.city,i=t.state_province,l=t.zip_code,d=t.default_tailor_id,c=(0,v.formatPhone)(n),f=this.props.userRoles.admin,p=d||"";return s.default.createElement("div",null,s.default.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},s.default.createElement(_.default,{value:r,fieldName:"name",title:"Name",onChange:this.updateState}),s.default.createElement(_.default,{value:c,fieldName:"phone",title:"Phone",onChange:this.updateState}),this.renderTailorSelect(p,f),s.default.createElement(_.default,{value:a,fieldName:"street",title:"Street",onChange:this.updateState}),s.default.createElement(_.default,{value:o,fieldName:"unit",title:"Unit, Suite, Etc. (optional)",onChange:this.updateState}),s.default.createElement(_.default,{value:u,fieldName:"city",title:"City",onChange:this.updateState}),s.default.createElement(_.default,{value:i,fieldName:"state_province",title:"State",onChange:this.updateState}),s.default.createElement(_.default,{value:l,fieldName:"zip_code",title:"Zip",onChange:this.updateState}),s.default.createElement("input",{className:"short-button",type:"submit",value:"Update Store"})))}},{key:"render",value:function(){var e=this.props.store;return(0,h.default)(e)?s.default.createElement("div",null,"Loading..."):s.default.createElement("div",{className:"pos-rel"},s.default.createElement(w.default,{text:"Account / "+e.name}),s.default.createElement("div",{className:"form-container edit-account"},this.renderForm(),s.default.createElement("br",null),s.default.createElement("hr",null),s.default.createElement("br",null),s.default.createElement(S.default,{match:this.props.match})),s.default.createElement(j.default,null))}}]),t}(l.Component);N.propTypes={store:p.default.object.isRequired,userRoles:p.default.object.isRequired,currentUser:p.default.object.isRequired,getEditStore:p.default.func.isRequired,updateStore:p.default.func.isRequired,updateEditStore:p.default.func.isRequired,setGrowler:p.default.func.isRequired,setLoader:p.default.func.isRequired,removeLoader:p.default.func.isRequired},t.default=(0,d.connect)(T,k)(N)},678:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o=r(16),u=r(24),i=r(11),l=r(28),s=function(e){var t=e.rotate,r=(e.userRoles,e.includeLink,e.link),n=void 0;if(t&&0!==t.length?n=function(){return e.resetCart()}:(r="/orders/new",n=function(){return console.log("")}),e.userRoles.admin||e.userRoles.retailer)return a.default.createElement(i.Link,{className:"cart-ribbon",to:r},a.default.createElement("h1",{className:"cart-ribbon-sign "+t,onClick:n},"+"),a.default.createElement("div",{className:"cart-ribbon-triangle"}))},d=function(e){return a.default.createElement("div",{className:"section-header"},a.default.createElement("h2",null,e.text),s(e))},c=function(e){return{currentUser:e.currentUser,userRoles:e.userRoles}},f=function(e){return(0,u.bindActionCreators)({resetCart:l.resetCart},e)};t.default=(0,o.connect)(c,f)(d)},679:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(e){var t=e.title,r=e.value,n=e.fieldName,o=e.onChange,u=e.className,i=e.type,l=i||"text";return a.default.createElement("div",null,a.default.createElement("label",{className:"form-label"},t),a.default.createElement("br",null),a.default.createElement("input",{type:l,className:"form-input "+u,size:"50",value:r,onChange:function(e){return o(n,e.target.value)}}),a.default.createElement("br",null),a.default.createElement("br",null))};t.default=o},682:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(e){return[{id:"",name:"Please Select"}].concat(e)},u=function(e){var t=o(e.options);return a.default.createElement("div",null,a.default.createElement("label",null,e.title),a.default.createElement("br",null),a.default.createElement("select",{value:e.value,onChange:function(t){return e.onChange(e.fieldName,t.target.value)}},i(t)),a.default.createElement("br",null),a.default.createElement("br",null))},i=function(e){return e.map(function(e,t){return a.default.createElement("option",{key:t,value:e.id},e.name)})};t.default=u},684:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),s=n(l),d=r(16),c=r(24),f=r(51),p=n(f),m=r(4),h=n(m),v=r(28),b=r(682),y=n(b),_=function(e){return{tailors:e.tailorList}},E=function(e){return(0,c.bindActionCreators)({getTailorList:v.getTailorList},e)},w=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.getTailorList().catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.props,t=e.tailors,r=e.onChange,n=e.tailorId,a=(e.handleSubmit,e.fieldName,e.title),o=void 0===a?"Tailor Shop:":a,u=e.headerText,i=void 0===u?"Select Tailor":u;return(0,p.default)(t)?s.default.createElement("div",null):s.default.createElement("div",{className:"SelectTailor"},s.default.createElement("h3",null,i),s.default.createElement(y.default,{value:n,options:t,fieldName:"provider_id",title:o,onChange:r}))}}]),t}(l.Component);w.propTypes={tailors:h.default.array.isRequired,getTailorList:h.default.func.isRequired,onChange:h.default.func.isRequired,provider_id:h.default.string},t.default=(0,d.connect)(_,E)(w)},686:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){var t=(e.store,e.store),r=t.id,n=t.street,a=t.unit,u=t.city,s=t.state_province,d=t.zip_code,c=(t.agrees_to_terms,l.expressApi+"/stores/"+r),f=o({},e.store);return f.address={street:n,street_two:a,city:u,state_province:s,zip_code:d},function(e){return m(e).then(h).then(function(){return i.default.put(c,{store:f}).then(function(t){return t.data.body.errors||e(v(f)),t}).catch(function(e){return e})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.updateEditStore=t.getEditStore=t.setTokens=t.validateToken=t.removeLoader=t.setLoader=t.setGrowler=t.getCurrentStore=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.updateStore=a;var u=r(52),i=function(e){return e&&e.__esModule?e:{default:e}}(u),l=r(326),s=r(28),d=s.getCurrentStore,c=s.setGrowler,f=s.setLoader,p=s.removeLoader,m=s.validateToken,h=s.setTokens;t.getCurrentStore=d,t.setGrowler=c,t.setLoader=f,t.removeLoader=p,t.validateToken=m,t.setTokens=h;var v=(t.getEditStore=function(e){var t=l.expressApi+"/stores/"+e;return function(e){return m().then(h).then(function(){return i.default.get(t).then(function(t){return e(v(t.data.body)),t}).catch(function(e){})})}},function(e){return{type:l.SET_EDIT_STORE,store:e}});t.updateEditStore=function(e,t){return"provider_id"===e&&(e="default_tailor_id"),{type:l.UPDATE_EDIT_STORE,store:n({},e,t)}}},690:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(1),d=n(s),c=(r(11),r(16)),f=r(24),p=r(28),m=r(679),h=n(m),v=r(322),b=function(e){return{user:e.currentUser}},y=function(e){return(0,f.bindActionCreators)({updatePassword:p.updatePassword,setGrowler:p.setGrowler},e)},_=function(e){function t(){o(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.updateState=function(t,r){e.setState(a({},t,r),function(){e.validatePasswords(e.state.password,e.state.passwordConfirmation)})},e.handleSubmit=function(t){t.preventDefault();var r=e.state,n=r.password,a=r.passwordConfirmation;if(n===a){var o=e.props.user.user.id;e.props.updatePassword({id:o,password:n,password_confirmation:a}).then(function(t){e.props.setGrowler({kind:"success",message:"Password Updated"}),e.setState({password:"",passwordConfirmation:"",submitDisabled:!0})}).catch(function(e){return console.log("err",e)})}},e.state={password:"",passwordConfirmation:"",submitDisabled:!0},e}return i(t,e),l(t,[{key:"validatePasswords",value:function(e,t){if(e===t&&(0,v.ValidatePassword)(e))return void this.setState({submitDisabled:!1});this.setState({submitDisabled:!0})}},{key:"storeIdMatch",value:function(){var e=this.props;return e.user.user.store_id==e.match.params.store_id}},{key:"userIdMatch",value:function(){var e=this.props;return e.user.user.id==e.match.params.user_id}},{key:"render",value:function(){if(this.storeIdMatch()||this.userIdMatch()){var e=this.state,t=e.password,r=e.passwordConfirmation,n=e.submitDisabled;return d.default.createElement("div",null,d.default.createElement("form",{onSubmit:this.handleSubmit},d.default.createElement(h.default,{value:t,type:"password",fieldName:"password",title:"New Password",onChange:this.updateState}),d.default.createElement(h.default,{value:r,fieldName:"passwordConfirmation",title:"Password Confirmation",type:"password",onChange:this.updateState}),d.default.createElement("input",{disabled:n,type:"submit",value:"Update Password",className:"short-button"})))}return d.default.createElement("div",null)}}]),t}(s.Component);t.default=(0,c.connect)(b,y)(_)}});