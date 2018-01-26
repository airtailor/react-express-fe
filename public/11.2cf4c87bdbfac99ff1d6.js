webpackJsonp([11],{664:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(1),d=n(c),f=r(11),s=r(16),p=r(24),m=r(51),h=n(m),b=r(4),v=n(b),y=r(682),g=(n(y),r(679)),E=n(g),_=r(28),O=r(685),C=n(O),k=r(678),w=n(k),N=r(683),L=n(N),j=function(e){return{order:e.currentOrder,store:e.currentStore,tailors:e.tailorList}},T=function(e){return(0,p.bindActionCreators)({getTailorList:_.getTailorList,getCurrentOrder:_.getCurrentOrder,updateOrder:_.updateOrder,setLoader:_.setLoader,removeLoader:_.removeLoader,setGrowler:_.setGrowler},e)},R=function(e){function t(e){l(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.updateState=function(e,t){r.setState(a({},e,t))},r.state=e.order,r}return o(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.order;if((0,h.default)(t)){var r=this.props,n=r.match.params.order_id,a=r.store.id;this.props.setLoader(),this.props.getCurrentOrder(a,n).then(function(){e.props.removeLoader();var t=e.props.order;e.setState(t)}).catch(function(e){return console.log(e)})}}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.props.updateOrder({order:this.state}).then(function(e){t.props.setGrowler({kind:"success",message:"Order updated!"})}).catch(function(e){return console.log("errr",e)})}},{key:"render",value:function(){var e=this,t=this.state,r=function(t){return e.handleSubmit(t)},n=this.updateState,a="Orders / Edit";if((0,h.default)(t))return d.default.createElement(w.default,{text:a});var l=t.id,u=t.fulfilled,o=t.arrived,i=t.customer,c=i.first_name,s=i.last_name,p=t.total,m=t.weight,b=t.provider_id;a="Orders / Edit / "+l;var v="/orders/"+this.state.id;return d.default.createElement("div",null,d.default.createElement(w.default,{text:a}),d.default.createElement(f.Link,{to:v},"Back"),d.default.createElement("form",{onSubmit:r},d.default.createElement(E.default,{value:c,fieldName:"first_name",title:"First Name:",onChange:function(){}}),d.default.createElement(E.default,{value:s,fieldName:"last_name",title:"Last Name:",onChange:function(){}}),d.default.createElement(L.default,{checked:o,type:"checkbox",text:"Arrived?",name:"arrived",fieldName:"arrived",onChange:n}),d.default.createElement(L.default,{checked:u,type:"checkbox",text:"Fulfilled?",name:"fulfilled",fieldName:"fulfilled",onChange:n}),d.default.createElement(E.default,{value:p,fieldName:"total",title:"Total: $",onChange:n}),d.default.createElement(E.default,{value:m,fieldName:"weight",title:"Weight (grams):",onChange:n}),d.default.createElement(C.default,{tailorId:b,onChange:this.updateState}),d.default.createElement(E.default,{value:p,fieldName:"total",title:"Total:",onChange:n}),d.default.createElement("input",{type:"submit",className:"short-button",value:"Update"})))}}]),t}(c.Component);R.propTypes={order:v.default.object.isRequired,tailors:v.default.array.isRequired,getTailorList:v.default.func.isRequired,getCurrentOrder:v.default.func.isRequired,updateOrder:v.default.func.isRequired,setLoader:v.default.func.isRequired,removeLoader:v.default.func.isRequired,setGrowler:v.default.func.isRequired},t.default=(0,s.connect)(j,T)(R)},678:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n),l=r(16),u=r(24),o=r(11),i=r(28),c=function(e){var t=e.rotate,r=(e.userRoles,e.includeLink,e.link),n=void 0;if(t&&0!==t.length?n=function(){return e.resetCart()}:(r="/orders/new",n=function(){return console.log("")}),e.userRoles.admin||e.userRoles.retailer)return a.default.createElement(o.Link,{className:"cart-ribbon",to:r},a.default.createElement("h1",{className:"cart-ribbon-sign "+t,onClick:n},"+"),a.default.createElement("div",{className:"cart-ribbon-triangle"}))},d=function(e){return a.default.createElement("div",{className:"section-header"},a.default.createElement("h2",null,e.text),c(e))},f=function(e){return{currentUser:e.currentUser,userRoles:e.userRoles}},s=function(e){return(0,u.bindActionCreators)({resetCart:i.resetCart},e)};t.default=(0,l.connect)(f,s)(d)},679:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n),l=function(e){var t=e.title,r=e.value,n=e.fieldName,l=e.onChange,u=e.className,o=e.type,i=o||"text";return a.default.createElement("div",null,a.default.createElement("label",{className:"form-label"},t),a.default.createElement("br",null),a.default.createElement("input",{type:i,className:"form-input "+u,size:"50",value:r,onChange:function(e){return l(n,e.target.value)}}),a.default.createElement("br",null),a.default.createElement("br",null))};t.default=l},682:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n),l=function(e){return[{id:"",name:"Please Select"}].concat(e)},u=function(e){var t=l(e.options);return a.default.createElement("div",null,a.default.createElement("label",null,e.title),a.default.createElement("br",null),a.default.createElement("select",{value:e.value,onChange:function(t){return e.onChange(e.fieldName,t.target.value)}},o(t)),a.default.createElement("br",null),a.default.createElement("br",null))},o=function(e){return e.map(function(e,t){return a.default.createElement("option",{key:t,value:e.id},e.name)})};t.default=u},683:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n),l=function(e){var t=e.onChange,r=e.checked,n=e.fieldName,l=e.text,u=e.name,o=e.labelClass;return n?a.default.createElement("div",{style:{display:"inline"}},a.default.createElement("input",{type:"checkbox",id:u+"-check",name:u,checked:r,onChange:function(){return t(n,!r)}}),a.default.createElement("label",{htmlFor:u+"-check",className:"checkbox-label"},a.default.createElement("span",null),l)):a.default.createElement("div",{style:{display:"inline"}},a.default.createElement("input",{type:"checkbox",id:u+"-check",name:u,checked:r,onChange:t}),a.default.createElement("label",{htmlFor:u+"-check",className:"checkbox-label "+o},a.default.createElement("span",null),l))};t.default=l},685:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),c=n(i),d=r(16),f=r(24),s=r(51),p=n(s),m=r(4),h=n(m),b=r(28),v=r(682),y=n(v),g=function(e){return{tailors:e.tailorList}},E=function(e){return(0,f.bindActionCreators)({getTailorList:b.getTailorList},e)},_=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.getTailorList().catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.props,t=e.tailors,r=e.onChange,n=e.tailorId,a=(e.handleSubmit,e.fieldName,e.title),l=void 0===a?"Tailor Shop:":a,u=e.headerText,o=void 0===u?"Select Tailor":u;return(0,p.default)(t)?c.default.createElement("div",null):c.default.createElement("div",{className:"SelectTailor"},c.default.createElement("h3",null,o),c.default.createElement(y.default,{value:n,options:t,fieldName:"provider_id",title:l,onChange:r}))}}]),t}(i.Component);_.propTypes={tailors:h.default.array.isRequired,getTailorList:h.default.func.isRequired,onChange:h.default.func.isRequired,provider_id:h.default.string},t.default=(0,d.connect)(g,E)(_)}});