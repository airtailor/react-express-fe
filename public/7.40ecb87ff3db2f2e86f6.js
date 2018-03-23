webpackJsonp([7],{676:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),c=n(i),f=r(8),d=r(15),m=r(19),p=r(39),h=n(p),y=r(4),b=n(y),E=r(323),_=n(E),v=r(700),O=n(v),w=r(698),g=n(w),C=r(714),j=n(C),R=r(328),M=n(R),N=r(25),k=function(e){return{currentCustomer:e.currentCustomer,currentStore:e.currentStore,userRoles:e.userRoles,customerOrders:e.customerOrders}},P=function(e){return(0,m.bindActionCreators)({setGrowler:N.setGrowler,getCurrentCustomer:N.getCurrentCustomer,getCustomerOrders:N.getCustomerOrders},e)},S=function(e){function t(){var e,r,n,s;o(this,t);for(var l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];return r=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.refreshCurrentCustomer=function(e){n.setState(e)},n.updateState=function(e,t){n.setState(u({},e,t))},s=r,a(n,s)}return s(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.customer_id;this.props.getCurrentCustomer(e),this.props.getCustomerOrders(e)}},{key:"editLink",value:function(){var e=this.props,t=e.userRoles,r=t.tailor,n=t.admin,u=e.currentCustomer.id;if(r||n)return c.default.createElement(f.Link,{to:"/customers/"+u+"/edit",className:"blue-link",style:{paddingLeft:"50px"}},"EDIT")}},{key:"render",value:function(){return(0,h.default)(this.props.currentCustomer)?c.default.createElement("div",null):c.default.createElement("div",{className:"customer-show",style:{paddingTop:"50px"}},c.default.createElement(M.default,this.props),c.default.createElement("div",{className:"flex-container",style:{justifyContent:"space-between",maxWidth:"1200px"}},c.default.createElement("div",{style:{width:"52%",borderRight:"1px solid gray",paddingRight:"3%"}},c.default.createElement("h2",{className:"sans-serif"},"CUSTOMER DETAILS",this.editLink()),c.default.createElement(O.default,{withAddress:!0,customer:this.props.currentCustomer}),c.default.createElement(g.default,{customer:this.props.currentCustomer})),c.default.createElement("div",{style:{float:"right",width:"40%"}},c.default.createElement("h2",{className:"sans-serif"},"ORDER HISTORY"),c.default.createElement(j.default,{customerOrders:this.props.customerOrders}))))}}]),t}(i.Component);S.propTypes={currentCustomer:b.default.object.isRequired,customerOrders:b.default.array.isRequired,userRoles:b.default.object.isRequired,currentStore:b.default.object.isRequired,setGrowler:b.default.func.isRequired,getCurrentCustomer:b.default.func.isRequired,getCustomerOrders:b.default.func.isRequired},t.default=(0,d.connect)(k,P)((0,_.default)(S))},695:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(1),o=n(u),a=r(4),s=n(a),l=function(e){return o.default.createElement("h5",{className:"order-show-title"},e.title)};l.propTypes={title:s.default.string.isRequired},t.default=l},698:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),u=function(e){return e&&e.__esModule?e:{default:e}}(n),o=r(8),a=r(108),s=function(e){return u.default.createElement("div",{style:{marginTop:"30px"}},u.default.createElement("img",{src:a.measurementsImage,className:"notes-image"}),u.default.createElement(o.Link,{to:"/customers/"+e.customer.id+"/measurements",className:"blue-link"},"Customer Measurements"))};t.default=s},700:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),i=n(l),c=r(695),f=n(c),d=r(325),m=function(e){function t(){return u(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"renderCustomerAddress",value:function(){if(this.props.withAddress&&this.props.customer.street){var e=this.props.customer,t=e.street,r=e.street_two,n=e.city,u=e.state_province,o=e.zip_code;return i.default.createElement("div",null,i.default.createElement(f.default,{title:"ADDRESS"}),i.default.createElement("p",{className:"order-show-p-content"},t),i.default.createElement("p",{className:"order-show-p-content"},r),i.default.createElement("p",{className:"order-show-p-content"},n,", ",u," ",o))}}},{key:"render",value:function(){var e=this.props,t=e.customer,r=t.first_name,n=t.last_name,u=t.phone,o=t.email;e.withAddress;return i.default.createElement("div",null,i.default.createElement(f.default,{title:"CUSTOMER"}),i.default.createElement("p",{className:"order-show-p-content"},r+" "+n),i.default.createElement(f.default,{title:"PHONE"}),i.default.createElement("p",{className:"order-show-p-content"},""+(0,d.formatPhone)(u)),i.default.createElement(f.default,{title:"EMAIL"}),i.default.createElement("p",{className:"order-show-p-content"},""+o),this.renderCustomerAddress())}}]),t}(l.Component);t.default=m},713:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(1),o=n(u),a=r(8),s=r(0),l=n(s),i=function(e){var t=e.order,r=t.created_at,n=t.id,u=e.i,s=(0,l.default)(r).format("MMMM DD, YYYY");return o.default.createElement("div",null,0!==u?o.default.createElement("hr",{style:{width:"80%",marginBottom:"20px",marginTop:"20px",marginLeft:"0"}}):"",o.default.createElement("li",{className:"customer-order"},o.default.createElement("p",{style:{marginBottom:0}},s),o.default.createElement(a.Link,{to:"/orders/"+n,className:"blue-link"},"Order #",n)))};t.default=i},714:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(1),o=n(u),a=r(713),s=n(a),l=function(e){var t=e.customerOrders;return o.default.createElement("div",null,o.default.createElement("ul",{className:"customer-orders"},t.map(function(e,t){return o.default.createElement(s.default,{order:e,key:t,i:t})})))};t.default=l}});