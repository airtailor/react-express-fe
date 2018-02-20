webpackJsonp([9],{688:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),c=(n(8),n(15)),d=n(19),p=n(4),m=r(p),b=n(25),h=n(691),y=r(h),v=n(322),w=r(v),g=n(324),_=n(704),E=r(_),O=n(747),C=r(O),S=function(e){return{}},j=function(e){return(0,d.bindActionCreators)({setGrowler:b.setGrowler},e)},P=function(e){function t(){o(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.updateState=function(t,n){e.setState(a({},t,n))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,r=n.password,a=n.passwordConfirmation,o=n.email,l=n.role,u=n.storeId,i=e.validateEmail(o),s=e.validatePasswords(r,a);i&&s&&(0,b.createUser)({name:name,store_id:u,email:o,password:r,password_confirmation:a,role:l}).then(function(t){if(422===t.data){e.props.setGrowler({kind:"warning",message:"User was not created. Make sure they don't already exist in the database."})}else{e.props.setGrowler({kind:"success",message:"User Created!"}),e.setState(e.initialStateObject())}}).catch(function(e){return console.log("err",e)})},e.state=e.initialStateObject(),e}return u(t,e),i(t,[{key:"initialStateObject",value:function(){return{name:"",email:"",role:"",storeId:"",password:"",passwordConfirmation:""}}},{key:"validatePasswords",value:function(e,t){if(e===t){if((0,g.ValidatePassword)(e))return!0;return this.props.setGrowler({kind:"warning",message:"Please enter a valid password! It should be longer than 6 characters"}),!1}return this.props.setGrowler({kind:"warning",message:"Your password confirmation did not match your chosen password."}),!1}},{key:"validateEmail",value:function(e){if((0,g.ValidateEmail)(e))return!0;return this.props.setGrowler({kind:"warning",message:"Please enter a valid email!"}),!1}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,r=e.role,a=e.password,o=e.storeId,l=e.passwordConfirmation;return f.default.createElement("div",null,f.default.createElement(w.default,{includeLink:!1}),f.default.createElement("h3",null,"Create User"),f.default.createElement("form",{onSubmit:this.handleSubmit},f.default.createElement(y.default,{value:t,type:"name",fieldName:"name",title:"Name:",onChange:this.updateState}),f.default.createElement(y.default,{value:n,type:"email",fieldName:"email",title:"Email:",onChange:this.updateState}),f.default.createElement(E.default,{role:r,onChange:this.updateState}),f.default.createElement(C.default,{storeId:o,onChange:this.updateState}),f.default.createElement(y.default,{value:a,type:"password",fieldName:"password",title:"Password:",onChange:this.updateState}),f.default.createElement(y.default,{value:l,fieldName:"passwordConfirmation",title:"Password Confirmation:",type:"password",onChange:this.updateState}),f.default.createElement("input",{type:"submit",disabled:!1,value:"Create User",className:"short-button"})))}}]),t}(s.Component);P.propTypes={setGrowler:m.default.func.isRequired},t.default=(0,c.connect)(S,j)(P)},691:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){var t=e.title,n=e.value,r=e.fieldName,o=e.onChange,l=e.className,u=e.type,i=u||"text";return a.default.createElement("div",null,a.default.createElement("label",{className:"form-label"},t),a.default.createElement("br",null),a.default.createElement("input",{type:i,className:"form-input "+l,size:"50",value:n,onChange:function(e){return o(r,e.target.value)}}),a.default.createElement("br",null),a.default.createElement("br",null))};t.default=o},692:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){return[{id:"",name:"Please Select"}].concat(e)},l=function(e){var t=o(e.options);return a.default.createElement("div",null,a.default.createElement("label",null,e.title),a.default.createElement("br",null),a.default.createElement("select",{value:e.value,onChange:function(t){return e.onChange(e.fieldName,t.target.value)}},u(t)),a.default.createElement("br",null),a.default.createElement("br",null))},u=function(e){return e.map(function(e,t){return a.default.createElement("option",{key:t,value:e.id},e.name)})};t.default=l},704:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),s=r(i),f=n(692),c=r(f),d=n(4),p=r(d),m=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,n=e.role;if(n&&"admin"==n)return s.default.createElement("div",null);var r=[{id:"tailor",name:"Tailor"},{id:"retailer",name:"Retailer"}];return s.default.createElement("div",{className:"SelectRole"},s.default.createElement("h3",null,"Roles"),s.default.createElement(c.default,{value:n,options:r,fieldName:"role",title:"Select Role:",onChange:t}))}}]),t}(i.Component);m.propTypes={onChange:p.default.func.isRequired,role:p.default.string.isRequired},t.default=m},747:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),s=r(i),f=n(15),c=n(19),d=n(25),p=n(692),m=r(p),b=n(4),h=r(b),y=function(e){return{stores:e.storeList}},v=function(e){return(0,c.bindActionCreators)({getStoreList:d.getStoreList},e)},w=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"componentDidMount",value:function(){(0,this.props.getStoreList)().catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.props,t=e.stores,n=e.onChange,r=e.storeId;if(t)return s.default.createElement("div",{className:"SelectStore"},s.default.createElement("h3",null,"Select Store"),s.default.createElement(m.default,{value:r,options:t,fieldName:"storeId",title:"Store:",onChange:n}))}}]),t}(i.Component);w.propTypes={stores:h.default.array.isRequired,getStoreList:h.default.func.isRequired,onChange:h.default.func.isRequired,storeId:h.default.string},t.default=(0,f.connect)(y,v)(w)}});