webpackJsonp([22],{664:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(1),s=n(c),d=r(10),f=r(18),m=r(22),p=r(50),C=(n(p),r(4)),v=n(C),b=r(30),h=r(323),g=r(680),y=n(g),E=function(e){return{currentOrder:e.currentOrder,currentCustomer:e.currentCustomer,currentStore:e.currentStore}},_=function(e){return(0,m.bindActionCreators)({setGrowler:b.setGrowler,getCurrentOrder:b.getCurrentOrder,getCurrentCustomer:b.getCurrentCustomer,updateCurrentCustomer:b.updateCurrentCustomer},e)},O=function(e){function t(){var e,r,n,o;a(this,t);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return r=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.refreshCurrentCustomer=function(e){n.setState(e)},n.updateState=function(e,t){n.setState(u({},e,t))},o=r,l(n,o)}return o(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.customer_id;this.props.getCurrentCustomer(e)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props,r=t.currentStore,n=t.currentOrder,u=t.getCurrentOrder,a=t.setGrowler,l=t.currentCustomer,o=t.currentCustomer.email;if((0,h.ValidateEmail)(o))(0,b.updateCustomer)(l).then(function(e){var t=void 0,o=void 0;e.data.body.errors?(t="warning",o=e.data.body.errors[0]):(t="success",o="Customer Updated",(0,b.getCurrentCustomer)(l.id),u(r.id,n.id)),a({kind:t,message:o})}).catch(function(e){});else{this.props.setGrowler({kind:"warning",message:"Email must be valid"})}}},{key:"render",value:function(){var e=this,t=this.props.currentOrder.id,r="/orders/"+t,n=this.props,u=n.currentCustomer,a=u.email,l=u.first_name,o=u.last_name,i=u.phone,c=u.street,f=u.street_two,m=u.city,p=u.state_province,C=u.zip_code,v=n.updateCurrentCustomer;return console.log("customer edit"),s.default.createElement("div",null,s.default.createElement(d.Link,{to:r},"Back"),s.default.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},s.default.createElement(y.default,{value:a,fieldName:"email",title:"Email",onChange:v}),s.default.createElement(y.default,{value:l,fieldName:"first_name",title:"First Name",onChange:v}),s.default.createElement(y.default,{value:o,fieldName:"last_name",title:"Last Name",onChange:v}),s.default.createElement(y.default,{value:i,fieldName:"phone",title:"Phone",onChange:v}),s.default.createElement(y.default,{value:c,fieldName:"street",title:"Street",onChange:v}),s.default.createElement(y.default,{value:f,fieldName:"street_two",title:"UNIT, SUITE, ETC. (OPTIONAL)",onChange:v}),s.default.createElement(y.default,{value:m,fieldName:"city",title:"City",onChange:v}),s.default.createElement(y.default,{value:p,fieldName:"state_province",title:"State/Province",onChange:v}),s.default.createElement(y.default,{value:C,fieldName:"zip_code",title:"Zip Code",onChange:v}),s.default.createElement("input",{className:"short-button ",type:"submit",value:"Update"})))}}]),t}(c.Component);O.propTypes={currentOrder:v.default.object.isRequired,currentCustomer:v.default.object.isRequired,currentStore:v.default.object.isRequired,setGrowler:v.default.func.isRequired,getCurrentOrder:v.default.func.isRequired,getCurrentCustomer:v.default.func.isRequired,updateCurrentCustomer:v.default.func.isRequired},t.default=(0,f.connect)(E,_)(O)},680:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),u=function(e){return e&&e.__esModule?e:{default:e}}(n),a=function(e){var t=e.title,r=e.value,n=e.fieldName,a=e.onChange,l=e.className,o=e.type,i=o||"text";return u.default.createElement("div",null,u.default.createElement("label",{className:"form-label"},t),u.default.createElement("br",null),u.default.createElement("input",{type:i,className:"form-input "+l,size:"50",value:r,onChange:function(e){return a(n,e.target.value)}}),u.default.createElement("br",null),u.default.createElement("br",null))};t.default=a}});