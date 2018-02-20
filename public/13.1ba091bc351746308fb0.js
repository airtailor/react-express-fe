webpackJsonp([13],{690:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=r(1),c=a(l),i=r(8),d=r(15),f=r(19),m=r(748),v=r(322),p=a(v),h=r(51),y=r(4),E=a(y),b=function(e){return{users:e.usersList}},L=function(e){return(0,f.bindActionCreators)({setLoader:m.setLoader,removeLoader:m.removeLoader,getUsersList:m.getUsersList},e)},N=function(e){function t(){var e,r,a,u;n(this,t);for(var o=arguments.length,l=Array(o),d=0;d<o;d++)l[d]=arguments[d];return r=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.renderUserRow=function(e){var t=e.id,r=e.email,n=e.store,s=e.valid_roles,u=(0,h.isEmpty)(s)?"N/A":a.extractRoles(s),o=n?n.name:"N/A",l="/users/"+t+"/edit";return c.default.createElement("div",{key:t},c.default.createElement("div",{className:"user-data-row"},c.default.createElement(i.Link,{to:l,className:"user-link"},c.default.createElement("div",{className:"user-data-cell"},t),c.default.createElement("div",{className:"user-data-cell"},r),c.default.createElement("div",{className:"user-data-cell"},o),c.default.createElement("div",{className:"user-data-cell"},u))))},a.renderUserRows=function(){var e=a.props.users;if((0,h.isEmpty)(e))return c.default.createElement("div",{className:"table-row"},c.default.createElement("div",{className:"loading-orders"},"Loading Users..."));var t=e.map(function(e){return a.renderUserRow(e)});return c.default.createElement("div",{className:"user-container"},t)},a.renderUserHeaders=function(){return c.default.createElement("div",null,c.default.createElement("div",{className:"user-headers-container"},c.default.createElement("div",{className:"user-headers-row"},c.default.createElement("h3",{className:"user-header-cell"},"Id"),c.default.createElement("h3",{className:"user-header-cell"},"Email"),c.default.createElement("h3",{className:"user-header-cell"},"Store Name"),c.default.createElement("h3",{className:"user-header-cell"},"Role")),c.default.createElement("hr",{className:"user-header-break-row"})))},u=r,s(a,u)}return u(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props.users;if((0,h.isEmpty)(e)){var t=this.props,r=t.setLoader,a=t.removeLoader,n=t.getUsersList;r(),n().then(function(e){return a()})}}},{key:"extractRoles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object.keys(e).reduce(function(t,r,a){return e[r]?(0,h.startCase)(r)+(0==a?"":", ")+t:""},t)}},{key:"render",value:function(){var e=this.renderUserHeaders,t=this.renderUserRows;return c.default.createElement("div",null,c.default.createElement(p.default,{text:"Manage Users",link:"/users/new"}),c.default.createElement("div",{className:"users"},e(),t()))}}]),t}(l.Component);N.propTypes={users:E.default.array.isRequired,setLoader:E.default.func.isRequired,removeLoader:E.default.func.isRequired,getUsersList:E.default.func.isRequired},t.default=(0,d.connect)(b,L)(N)},748:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUsersList=t.setTokens=t.validateToken=t.removeLoader=t.setLoader=void 0;var a=r(52),n=function(e){return e&&e.__esModule?e:{default:e}}(a),s=r(337),u=r(25),o=u.setLoader,l=u.removeLoader,c=u.validateToken,i=u.setTokens;t.setLoader=o,t.removeLoader=l,t.validateToken=c,t.setTokens=i;var d=(t.getUsersList=function(e){var t=s.expressApi+"/users/list";return function(e){return c().then(i).then(function(){return n.default.get(t).then(function(t){return e(d(t.data.body)),t}).catch(function(e){})})}},function(e){return{type:s.SET_USERS_LIST,users:e}})}});