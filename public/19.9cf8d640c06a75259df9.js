webpackJsonp([19],{671:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=r(1),c=a(s),d=r(18),i=r(0),f=a(i),m=r(10),h=r(679),p=a(h),v=function(e){return{currentUser:e.currentUser,currentStore:e.currentStore,searchResults:e.searchResults}},E=function(e){function t(){return n(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"formatDueDate",value:function(e,t){var r=(0,f.default)(new Date);return((0,f.default)(e).diff(r,"days")+(t?" days late":" days to go")).toUpperCase()}},{key:"getOrderStatus",value:function(e){if(e.due_date){if(e.late){return{status:this.formatDueDate(e.due_date,!0),color:"red"}}if(e.fulfilled)return{status:"Fulfilled",color:"green"};return{status:this.formatDueDate(e.due_date,!1),color:"orange"}}return{status:"In Transit",color:"green"}}},{key:"renderOrderRows",value:function(){var e=this,t=this.props.searchResults;return t?t.map(function(t,r){var a=e.getOrderStatus(t),n=t.id,l=t.customer,o=t.alterations_count,u=l.first_name,s=l.last_name,d=a.color,i=a.status,f="/orders/"+n;return c.default.createElement("div",{key:n},c.default.createElement("div",{className:"order-row"},c.default.createElement(m.Link,{to:f,className:"order-row-link"},c.default.createElement("div",{className:"order-data-cell"},"#",n),c.default.createElement("div",{className:"order-data-cell",style:{color:d}},i),c.default.createElement("div",{className:"order-data-cell"},u," ",s),c.default.createElement("div",{className:"order-data-cell"},o))),c.default.createElement("hr",{className:"order-row-break-row"}))}):c.default.createElement("div",null,"Loading...")}},{key:"render",value:function(){if(!this.props.currentStore)return c.default.createElement(m.Redirect,{to:"/"});var e="Orders / "+this.props.currentStore.name;return c.default.createElement("div",null,c.default.createElement(p.default,{text:e}),c.default.createElement("div",{className:"orders"},c.default.createElement("div",{className:"order-headers-container"},c.default.createElement("div",{className:"order-headers-row"},c.default.createElement("h3",{className:"order-data-header-cell"},"Order"),c.default.createElement("h3",{className:"order-data-header-cell"},"Status"),c.default.createElement("h3",{className:"order-data-header-cell"},"Customer"),c.default.createElement("h3",{className:"order-data-header-cell"},"Quantity"))),c.default.createElement("div",{className:"order-header-break-row"}),c.default.createElement("div",{className:"order-data-container"},this.renderOrderRows())))}}]),t}(s.Component);t.default=(0,d.connect)(v)(E)},679:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=function(e){return e&&e.__esModule?e:{default:e}}(a),l=r(18),o=r(22),u=r(10),s=r(30),c=function(e){var t=e.rotate,r=(e.userRoles,e.includeLink,e.link),a=void 0;if(t&&0!==t.length?a=function(){return e.resetCart()}:(r="/orders/new",a=function(){return console.log("")}),e.userRoles.admin||e.userRoles.retailer)return n.default.createElement(u.Link,{className:"cart-ribbon",to:r},n.default.createElement("h1",{className:"cart-ribbon-sign "+t,onClick:a},"+"),n.default.createElement("div",{className:"cart-ribbon-triangle"}))},d=function(e){return n.default.createElement("div",{className:"section-header"},n.default.createElement("h2",null,e.text),c(e))},i=function(e){return{currentUser:e.currentUser,userRoles:e.userRoles}},f=function(e){return(0,o.bindActionCreators)({resetCart:s.resetCart},e)};t.default=(0,l.connect)(i,f)(d)}});