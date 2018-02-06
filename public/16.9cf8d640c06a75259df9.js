webpackJsonp([16],{678:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),c=n(l),i=r(10),d=r(18),f=r(22),m=r(731),v=r(679),p=n(v),h=r(52),E=r(4),b=n(E),y=function(e){return{users:e.usersList}},L=function(e){return(0,f.bindActionCreators)({setLoader:m.setLoader,removeLoader:m.removeLoader,getUsersList:m.getUsersList},e)},N=function(e){function t(){var e,r,n,u;a(this,t);for(var o=arguments.length,l=Array(o),d=0;d<o;d++)l[d]=arguments[d];return r=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.renderUserRow=function(e){var t=e.id,r=e.email,a=e.store,s=e.valid_roles,u=(0,h.isEmpty)(s)?"N/A":n.extractRoles(s),o=a?a.name:"N/A",l="/users/"+t+"/edit";return c.default.createElement("div",{key:t},c.default.createElement("div",{className:"user-data-row"},c.default.createElement(i.Link,{to:l,className:"user-link"},c.default.createElement("div",{className:"user-data-cell"},t),c.default.createElement("div",{className:"user-data-cell"},r),c.default.createElement("div",{className:"user-data-cell"},o),c.default.createElement("div",{className:"user-data-cell"},u))))},n.renderUserRows=function(){var e=n.props.users;if((0,h.isEmpty)(e))return c.default.createElement("div",{className:"table-row"},c.default.createElement("div",{className:"loading-orders"},"Loading Users..."));var t=e.map(function(e){return n.renderUserRow(e)});return c.default.createElement("div",{className:"user-container"},t)},n.renderUserHeaders=function(){return c.default.createElement("div",null,c.default.createElement("div",{className:"user-headers-container"},c.default.createElement("div",{className:"user-headers-row"},c.default.createElement("h3",{className:"user-header-cell"},"Id"),c.default.createElement("h3",{className:"user-header-cell"},"Email"),c.default.createElement("h3",{className:"user-header-cell"},"Store Name"),c.default.createElement("h3",{className:"user-header-cell"},"Role")),c.default.createElement("hr",{className:"user-header-break-row"})))},u=r,s(n,u)}return u(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props.users;if((0,h.isEmpty)(e)){var t=this.props,r=t.setLoader,n=t.removeLoader,a=t.getUsersList;r(),a().then(function(e){return n()})}}},{key:"extractRoles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object.keys(e).reduce(function(t,r,n){return e[r]?(0,h.startCase)(r)+(0==n?"":", ")+t:""},t)}},{key:"render",value:function(){var e=this.renderUserHeaders,t=this.renderUserRows;return c.default.createElement("div",null,c.default.createElement(p.default,{text:"Manage Users",link:"/users/new"}),c.default.createElement("div",{className:"users"},e(),t()))}}]),t}(l.Component);N.propTypes={users:b.default.array.isRequired,setLoader:b.default.func.isRequired,removeLoader:b.default.func.isRequired,getUsersList:b.default.func.isRequired},t.default=(0,d.connect)(y,L)(N)},679:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n),s=r(18),u=r(22),o=r(10),l=r(30),c=function(e){var t=e.rotate,r=(e.userRoles,e.includeLink,e.link),n=void 0;if(t&&0!==t.length?n=function(){return e.resetCart()}:(r="/orders/new",n=function(){return console.log("")}),e.userRoles.admin||e.userRoles.retailer)return a.default.createElement(o.Link,{className:"cart-ribbon",to:r},a.default.createElement("h1",{className:"cart-ribbon-sign "+t,onClick:n},"+"),a.default.createElement("div",{className:"cart-ribbon-triangle"}))},i=function(e){return a.default.createElement("div",{className:"section-header"},a.default.createElement("h2",null,e.text),c(e))},d=function(e){return{currentUser:e.currentUser,userRoles:e.userRoles}},f=function(e){return(0,u.bindActionCreators)({resetCart:l.resetCart},e)};t.default=(0,s.connect)(d,f)(i)},731:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUsersList=t.setTokens=t.validateToken=t.removeLoader=t.setLoader=void 0;var n=r(51),a=function(e){return e&&e.__esModule?e:{default:e}}(n),s=r(333),u=r(30),o=u.setLoader,l=u.removeLoader,c=u.validateToken,i=u.setTokens;t.setLoader=o,t.removeLoader=l,t.validateToken=c,t.setTokens=i;var d=(t.getUsersList=function(e){var t=s.expressApi+"/users/list";return function(e){return c().then(i).then(function(){return a.default.get(t).then(function(t){return e(d(t.data.body)),t}).catch(function(e){})})}},function(e){return{type:s.SET_USERS_LIST,users:e}})}});