webpackJsonp([18],{671:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),s=n(15),d=n(19),p=(n(8),n(25)),m=n(322),b=r(m),v=n(4),y=r(v),h=n(39),w=r(h),_=n(691),g=r(_),E=function(e){return{}},C=function(e){return(0,d.bindActionCreators)({setLoader:p.setLoader,removeLoader:p.removeLoader,setGrowler:p.setGrowler},e)},O=function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.updateState=function(e,t){n.setState(a({},e,t))},n.handleSubmit=function(e){e.preventDefault(),n.props.setLoader();var t=n.state;(0,p.createCompany)({company:t}).then(function(e){n.props.removeLoader();var t=e.data.body.errors;(0,w.default)(t)?(n.setState({name:""}),n.props.setGrowler({kind:"success",message:"Company created!"})):n.props.setGrowler({kind:"warning",message:t.message})}).catch(function(e){return console.log("err",e)})},n.state={name:""},n}return l(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,r=(t.hq_store_id,function(t){return e.handleSubmit(t)}),a=this.updateState;return f.default.createElement("div",null,f.default.createElement(b.default,{text:"Companies / New",includeLink:!1}),f.default.createElement("form",{onSubmit:r},f.default.createElement(g.default,{value:n,fieldName:"name",title:"Name: ",onChange:a}),f.default.createElement("input",{type:"submit",className:"standard-button",value:"Create New Company"})))}}]),t}(c.Component);O.propTypes={setLoader:y.default.func.isRequired,removeLoader:y.default.func.isRequired,setGrowler:y.default.func.isRequired},t.default=(0,s.connect)(E,C)(O)},691:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){var t=e.title,n=e.value,r=e.fieldName,o=e.onChange,u=e.className,l=e.type,i=l||"text";return a.default.createElement("div",null,a.default.createElement("label",{className:"form-label"},t),a.default.createElement("br",null),a.default.createElement("input",{type:i,className:"form-input "+u,size:"50",value:n,onChange:function(e){return o(r,e.target.value)}}),a.default.createElement("br",null),a.default.createElement("br",null))};t.default=o}});