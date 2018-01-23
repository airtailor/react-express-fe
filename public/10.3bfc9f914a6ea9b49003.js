webpackJsonp([10],{686:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),c=r(s),f=n(17),d=n(25),p=n(30),m=n(6),v=n(694),b=r(v),h=n(697),y=r(h),_=n(4),g=r(_),E=n(696),w=r(E),C=n(52),O=r(C),S=function(e){return{companies:e.companyList}},P=function(e){return(0,d.bindActionCreators)({getCompanies:p.getCompanies,setLoader:p.setLoader,removeLoader:p.removeLoader,setGrowler:p.setGrowler},e)},j=function(e){function t(){o(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.updateStoreState=function(t,n){e.setState(a({},t,n))},e.updateAddressState=function(t,n){var r=e.state.address;r[t]=n,e.setState({address:r})},e.emptyParamsPresent=function(){var t=e.state,n=t.address,r=!e.hasAllParams(t),a=!e.hasAllParams(n);return r&&a},e.handleSubmit=function(t){t.preventDefault();var n=e.props,r=n.setLoader,a=n.removeLoader,o=n.setGrowler;if(e.emptyParamsPresent())o({kind:"warning",message:"Please enter all fields before submitting."});else{var u=e.state;r(),(0,p.createStore)({store:u}).then(function(t){a();var n=t.data.body.errors;(0,O.default)(n)?(e.setState(e.initialStateObject()),o({kind:"success",message:"New Store Created!"})):n.invalid_address&&o({kind:"warning",message:"Invalid Address! Check your inputs."})}).catch(function(e){return console.log(e)})}},e.state=e.initialStateObject(),e}return l(t,e),i(t,[{key:"initialStateObject",value:function(){return{company_id:"",name:"",primary_contact_id:"",phone:"",type:"",address:{street:"",street_two:"",city:"",state_province:"",zip_code:""}}}},{key:"componentDidMount",value:function(){var e=this;this.props.setLoader(),this.props.getCompanies().then(function(){return e.props.removeLoader()}).catch(function(e){return console.log(e)})}},{key:"hasAllParams",value:function(e){return(0,O.default)(Object.keys(e).filter(function(e){return""==e}))}},{key:"render",value:function(){var e=this,t=this.props.companies,n=this.state,r=n.company_id,a=n.type,o=n.name,u=n.phone,l=n.address,i=l.street,s=l.street_two,f=l.city,d=l.state_province,p=l.zip_code,v=this.updateStoreState,h=this.updateAddressState,_=function(t){return e.handleSubmit(t)};return(0,O.default)(t)?c.default.createElement("div",null):c.default.createElement("div",null,c.default.createElement("form",{onSubmit:_},c.default.createElement(b.default,{value:o,fieldName:"name",title:"Name: ",onChange:v}),c.default.createElement(b.default,{value:u,fieldName:"phone",title:"Phone: ",onChange:v}),c.default.createElement(b.default,{value:i,fieldName:"street",title:"Street:",onChange:h}),c.default.createElement(b.default,{value:s,fieldName:"street_two",title:"Unit:",onChange:h}),c.default.createElement(b.default,{value:f,fieldName:"city",title:"City:",onChange:h}),c.default.createElement(b.default,{value:d,fieldName:"state_province",title:"State:",onChange:h}),c.default.createElement(b.default,{value:p,fieldName:"zip_code",title:"Zip:",onChange:h}),c.default.createElement(y.default,{value:r,options:t,fieldName:"company_id",title:"Company:",onChange:v}),c.default.createElement(y.default,{value:a,options:m.storeTypes,fieldName:"type",title:"Store Type:",onChange:v}),c.default.createElement("input",{type:"submit",className:"short-button",value:"Create New Store"})))}}]),t}(s.Component);j.propTypes={companies:g.default.array.isRequired,getCompanies:g.default.func.isRequired,setLoader:g.default.func.isRequired,removeLoader:g.default.func.isRequired,setGrowler:g.default.func.isRequired},t.default=(0,f.connect)(S,P)((0,w.default)(j))},693:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=n(17),u=n(25),l=n(11),i=n(30),s=function(e){var t=e.rotate,n=(e.userRoles,e.includeLink,e.link),r=void 0;if(t&&0!==t.length?r=function(){return e.resetCart()}:(n="/orders/new",r=function(){return console.log("")}),e.userRoles.admin||e.userRoles.retailer)return a.default.createElement(l.Link,{className:"cart-ribbon",to:n},a.default.createElement("h1",{className:"cart-ribbon-sign "+t,onClick:r},"+"),a.default.createElement("div",{className:"cart-ribbon-triangle"}))},c=function(e){return a.default.createElement("div",{className:"section-header"},a.default.createElement("h2",null,e.text),s(e))},f=function(e){return{currentUser:e.currentUser,userRoles:e.userRoles}},d=function(e){return(0,u.bindActionCreators)({resetCart:i.resetCart},e)};t.default=(0,o.connect)(f,d)(c)},694:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){var t=e.title,n=e.value,r=e.fieldName,o=e.onChange,u=e.className,l=e.type,i=l||"text";return a.default.createElement("div",null,a.default.createElement("label",{className:"form-label"},t),a.default.createElement("br",null),a.default.createElement("input",{type:i,className:"form-input "+u,size:"50",value:n,onChange:function(e){return o(r,e.target.value)}}),a.default.createElement("br",null),a.default.createElement("br",null))};t.default=o},695:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getSectionHeaderText=function(e){var t=e.match.path;return"/admin/reports"===t?"Air Tailor / Reports":"/admin/reports/orders"===t?"Air Tailor / Order Reports":"/stores/new"===t?"Stores / New":"/users/:user_id/edit"===t?"Edit User":"/orders/new"===t?"Agree To Terms":"/site/terms_of_service"===t?"":void 0}},696:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return function(t){function n(){a(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.state={text:""},e}return u(n,t),i(n,[{key:"componentDidMount",value:function(){var e=(0,p.getSectionHeaderText)(this.props);this.setState({text:e})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(d.default,{text:this.state.text}),c.default.createElement(e,this.props))}}]),n}(s.Component)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),c=r(s),f=n(693),d=r(f),p=n(695);t.default=l},697:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){return[{id:"",name:"Please Select"}].concat(e)},u=function(e){var t=o(e.options);return a.default.createElement("div",null,a.default.createElement("label",null,e.title),a.default.createElement("br",null),a.default.createElement("select",{value:e.value,onChange:function(t){return e.onChange(e.fieldName,t.target.value)}},l(t)),a.default.createElement("br",null),a.default.createElement("br",null))},l=function(e){return e.map(function(e,t){return a.default.createElement("option",{key:t,value:e.id},e.name)})};t.default=u}});