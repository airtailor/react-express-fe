webpackJsonp([4],{658:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),s=n(i),c=r(16),d=r(28),f=r(24),p=r(735),m=r(699),h=n(m),b=r(698),v=n(b),y=r(678),O=n(y),_=r(4),g=n(_),E=function(e){return{currentUser:e.currentUser,currentStore:e.currentStore,newOrders:e.newOrders,currentOrder:e.currentOrder,userRoles:e.userRoles,currentCustomer:e.currentCustomer}},w=function(e){return(0,f.bindActionCreators)({getNewOrders:d.getNewOrders,getCurrentOrder:d.getCurrentOrder,setCurrentOrder:d.setCurrentOrder,getCurrentCustomer:d.getCurrentCustomer},e)},C=function(e){function t(){var e,r,n,a;o(this,t);for(var l=arguments.length,i=Array(l),s=0;s<l;s++)i[s]=arguments[s];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.selectOrderDetail=function(e){n.props.getCurrentOrder(e.provider_id,e.id).then(function(e){n.props.getCurrentCustomer(e.customer_id)}).catch(function(e){return console.log("err",e)})},a=r,u(n,a)}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this.props.setCurrentOrder({}),this.props.getNewOrders().catch(function(e){return console.log(e)})}},{key:"renderNewOrders",value:function(e){return s.default.createElement(p.RenderNewOrderList,{orders:e,className:"new-orders",selectOrder:this.selectOrderDetail})}},{key:"renderOrderDetails",value:function(){var e=this.props;if(e.currentCustomer.id===e.currentOrder.customer_id)return s.default.createElement("div",null,s.default.createElement("div",{className:"new-order detail-container"},s.default.createElement(h.default,{order:this.props.currentOrder,selectOrder:this.selectOrderDetail,getNewOrders:this.props.getNewOrders})),s.default.createElement("div",{className:"new-order customer-container"},s.default.createElement(v.default,null)))}},{key:"render",value:function(){return s.default.createElement("div",{className:"new-order-page"},s.default.createElement(O.default,{text:"Home / "+this.props.currentStore.name}),s.default.createElement("div",{className:"new-order-container"},s.default.createElement("div",{className:"new-order list-container"},this.renderNewOrders(this.props.newOrders)),s.default.createElement("div",{className:"detail-and-customer"},this.renderOrderDetails())))}}]),t}(i.Component);C.propTypes={currentUser:g.default.object.isRequired,currentCustomer:g.default.object.isRequired,currentStore:g.default.object.isRequired,newOrders:g.default.object.isRequired,currentOrder:g.default.object.isRequired,userRoles:g.default.object.isRequired,getNewOrders:g.default.func.isRequired,getCurrentOrder:g.default.func.isRequired,setCurrentOrder:g.default.func.isRequired,getCurrentCustomer:g.default.func.isRequired},t.default=(0,c.connect)(E,w)(C)},678:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n),u=r(16),a=r(24),l=r(11),i=r(28),s=function(e){var t=e.rotate,r=(e.userRoles,e.includeLink,e.link),n=void 0;if(t&&0!==t.length?n=function(){return e.resetCart()}:(r="/orders/new",n=function(){return console.log("")}),e.userRoles.admin||e.userRoles.retailer)return o.default.createElement(l.Link,{className:"cart-ribbon",to:r},o.default.createElement("h1",{className:"cart-ribbon-sign "+t,onClick:n},"+"),o.default.createElement("div",{className:"cart-ribbon-triangle"}))},c=function(e){return o.default.createElement("div",{className:"section-header"},o.default.createElement("h2",null,e.text),s(e))},d=function(e){return{currentUser:e.currentUser,userRoles:e.userRoles}},f=function(e){return(0,a.bindActionCreators)({resetCart:i.resetCart},e)};t.default=(0,u.connect)(d,f)(c)},682:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n),u=function(e){return[{id:"",name:"Please Select"}].concat(e)},a=function(e){var t=u(e.options);return o.default.createElement("div",null,o.default.createElement("label",null,e.title),o.default.createElement("br",null),o.default.createElement("select",{value:e.value,onChange:function(t){return e.onChange(e.fieldName,t.target.value)}},l(t)),o.default.createElement("br",null),o.default.createElement("br",null))},l=function(e){return e.map(function(e,t){return o.default.createElement("option",{key:t,value:e.id},e.name)})};t.default=a},685:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),s=n(i),c=r(16),d=r(24),f=r(51),p=n(f),m=r(4),h=n(m),b=r(28),v=r(682),y=n(v),O=function(e){return{tailors:e.tailorList}},_=function(e){return(0,d.bindActionCreators)({getTailorList:b.getTailorList},e)},g=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this.props.getTailorList().catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.props,t=e.tailors,r=e.onChange,n=e.tailorId,o=(e.handleSubmit,e.fieldName,e.title),u=void 0===o?"Tailor Shop:":o,a=e.headerText,l=void 0===a?"Select Tailor":a;return(0,p.default)(t)?s.default.createElement("div",null):s.default.createElement("div",{className:"SelectTailor"},s.default.createElement("h3",null,l),s.default.createElement(y.default,{value:n,options:t,fieldName:"provider_id",title:u,onChange:r}))}}]),t}(i.Component);g.propTypes={tailors:h.default.array.isRequired,getTailorList:h.default.func.isRequired,onChange:h.default.func.isRequired,provider_id:h.default.string},t.default=(0,c.connect)(O,_)(g)},698:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),s=n(i),c=r(24),d=r(11),f=r(16),p=r(4),m=n(p),h=r(51),b=n(h),v=function(e){return{currentCustomer:e.currentCustomer}},y=function(e){return(0,c.bindActionCreators)({},e)},O=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props.currentCustomer;if((0,b.default)(e))return s.default.createElement("div",null,"Select a Customer");var t=e.id,r=e.first_name,n=e.last_name,o=e.email,u=e.phone,a=e.city,l=e.state_province,i=e.zip_code,c="/customers/"+t+"/edit";return s.default.createElement("div",null,s.default.createElement("h3",null,"Customer Details:"),s.default.createElement("p",null,"Name: ",r," ",n),s.default.createElement("p",null,"Email: ",o),s.default.createElement("p",null,"Phone: ",u),s.default.createElement("p",null,"Address: ",a,", ",l," ",i),s.default.createElement(d.Link,{to:c},s.default.createElement("button",{className:"button short-button"}," Edit Customer")))}}]),t}(i.Component);O.propTypes={currentCustomer:m.default.object.isRequired},t.default=(0,f.connect)(v,y)(O)},699:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(1),c=n(s),d=r(16),f=r(24),p=r(0),m=n(p),h=r(4),b=n(h),v=r(28),y=r(323),O=r(712),_=n(O),g=r(685),E=n(g),w=function(e){return{tailors:e.tailorList,currentUser:e.currentUser,userRoles:e.userRoles,currentCustomer:e.currentCustomer}},C=function(e){return(0,f.bindActionCreators)({updateOrder:v.updateOrder,setLoader:v.setLoader,removeLoader:v.removeLoader,setGrowler:v.setGrowler},e)},N=function(e){function t(e){u(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.updateState=function(e,t){r.setState(o({},e,t))},r.handleSubmit=function(){r.props.setLoader();var e=r.state;e.id=r.props.order.id,r.props.updateOrder({order:e}).then(function(e){r.refreshNewOrdersList({order:{}});r.props.setGrowler({kind:"success",message:"Tailor Assigned"}),r.props.removeLoader()}).catch(function(e){return console.log("errr",e)})},r.updateOrderNotes=function(e,t){t.requester_notes=e,r.props.updateOrder({order:t}).catch(function(e){return console.log("err",e)})},r.postShipment=function(e,t,n){r.props.setLoader(),(0,y.fireShipmentCreate)(e,t,n).then(function(t){r.setState({loadingLabel:!1}),r.props.removeLoader(),r.props.selectOrder(e[0])}).catch(function(e){return console.log("err",e)})},r.makeShippingLabel=function(e){return r.postShipment([r.props.order],e,"mail_shipment")},r.fulfillOrder=function(){var e=r.props.order,t=e.id,n=e.store_id,o={order:{id:t,store_id:n,fulfilled:!0}};r.props.setLoader(),r.setState({loadingLabel:!0}),r.props.updateOrder(o).then(function(e){var t=r.props,n=t.order,o=t.userRoles,u=(0,y.shipmentActions)(n,o);(0,y.shipmentTypes)(o).has("mail_shipment")&&r.makeShippingLabel(u)}).catch(function(e){return console.log(e)})},r.state={loadingLabel:!1,notes:"",provider_id:""},r}return l(t,e),i(t,[{key:"refreshNewOrdersList",value:function(e){var t=this.props,r=t.setLoader,n=t.getNewOrders,o=t.removeLoader;r(),n().then(function(){return o()}).catch(function(){return o()})}},{key:"componentDidMount",value:function(){this.refreshNewOrdersList(this.props)}},{key:"resetState",value:function(e){this.setState(e.order)}},{key:"updateOrderFromProps",value:function(){var e=this.props.order;this.setState({order:e})}},{key:"renderFulfillButton",value:function(){return this.renderButton("Fulfill This Order",{disabled:!1},this.fulfillOrder)}},{key:"renderButton",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return console.log("")},n=t.className||"pink-button",o=t.clickArgs||void 0,u=t.disabled;return c.default.createElement("div",null,c.default.createElement("button",{onClick:function(){return r(o)},disabled:u,className:n},e))}},{key:"renderPrintLabel",value:function(){var e=this,t=this.props,r=t.order,n=t.userRoles,o=this.state.loadingLabel,u=(0,y.shipmentActions)(r,n),a=void 0,l=void 0,i=void 0,s=void 0;switch((0,y.labelState)(n,r,o)){case"needs_label":l="Create Label",a=this.makeShippingLabel,i=u;break;case"in_progress":l="Creating Label";case"label_created":l="Print Label",a=function(){e.refreshNewOrdersList(),window.print()},s=c.default.createElement(_.default,null)}return c.default.createElement("div",null,this.renderButton(l,{disabled:o,clickArgs:i},a),s)}},{key:"welcomeKit",value:function(e){return e.fulfilled?this.renderPrintLabel():this.renderFulfillButton()}},{key:"updateNotes",value:function(e){this.setState({notes:e})}},{key:"submitNotes",value:function(e){var t=this;e.preventDefault();var r={order:{requester_notes:this.state.notes,id:this.props.order.id,store_id:this.props.order.store_id}};this.props.updateOrder(r).then(function(e){return t.props.setGrowler({kind:"success",message:"Notes Updated Successfully"})}).catch(function(e){return console.log(e)})}},{key:"renderNotes",value:function(){var e=this;return c.default.createElement("form",{className:"notes-form",onSubmit:function(t){return e.submitNotes(t)}},c.default.createElement("label",null,c.default.createElement("h3",null,"Order Notes:"),c.default.createElement("br",null),c.default.createElement("textarea",{cols:43,rows:10,defaultValue:this.props.order.requester_notes,onChange:function(t){return e.updateNotes(t.target.value)}})),c.default.createElement("br",null),c.default.createElement("input",{className:"short-button",type:"submit",value:"Submit"}),c.default.createElement("hr",null))}},{key:"renderGarmentAlterations",value:function(e){return e.alterations.map(function(e,t){return c.default.createElement("p",{key:t,className:"cart-alteration"},e.name)})}},{key:"renderGarments",value:function(e){var t=this;return e.map(function(e,r){return c.default.createElement("div",{key:r},c.default.createElement("h3",null,e.name),t.renderGarmentAlterations(e),c.default.createElement("hr",null))})}},{key:"render",value:function(){var e=this.props,t=e.order,r=(e.currentCustomer,t.id),n=t.weight,o=t.created_at,u=t.total,a=(t.provider_notes,t.items,this.state.provider_id),l=(0,m.default)(o).format("MM-DD-YYYY"),i=c.default.createElement("div",null,c.default.createElement("p",null,"Alterations:"),this.renderGarments(t.items),c.default.createElement(E.default,{onChange:this.updateState,tailorId:a}),c.default.createElement("button",{className:"button short-button",onClick:this.handleSubmit},"Change Tailor")),s="TailorOrder"===t.type?i:this.welcomeKit(t);return c.default.createElement("div",{className:"order-details"},c.default.createElement("h3",null,"Order Details:"),c.default.createElement("p",null,"Order ID: ",r),c.default.createElement("p",null,"Order Weight: ",n),c.default.createElement("p",null,"Order Date: ",l),c.default.createElement("p",null,"Total Charges: $",u),c.default.createElement("p",null,"Order Notes:"),this.renderNotes(),s)}}]),t}(s.Component);N.propTypes={tailors:b.default.array.isRequired,currentUser:b.default.object.isRequired,currentCustomer:b.default.object.isRequired,userRoles:b.default.object.isRequired,updateOrder:b.default.func.isRequired,setLoader:b.default.func.isRequired,removeLoader:b.default.func.isRequired,setGrowler:b.default.func.isRequired,order:b.default.object.isRequired},t.default=(0,d.connect)(w,C)(N)},712:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),i=function(e){return e&&e.__esModule?e:{default:e}}(l),s=r(16),c=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"render",value:function(){var e=this.props.currentOrder;if(e){var t=e.shipments[0].shipping_label;return i.default.createElement("div",{className:"print"},i.default.createElement("div",{className:"packing-slip-info"},i.default.createElement("img",{className:"packing-slip-label",src:t,alt:"shipping label"})))}}}]),t}(l.Component),d=function(e){return{currentStore:e.currentStore,currentOrder:e.currentOrder}};t.default=(0,s.connect)(d)(c)},735:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RenderNewOrderList=void 0;var n=r(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n),u=function(e,t,r){return e.length>0?e.map(function(e,n){var u=(e.id,e.customer),a=e.total,l=u.first_name,i=u.last_name;return o.default.createElement("li",{className:t+"-li",key:n,onClick:function(){return r(e)}},"#",e.id," - ",l," ",i," - $",a)}):o.default.createElement("p",null,"No New Orders")};t.RenderNewOrderList=function(e){var t=e.orders,r=e.className,n=e.selectOrder;return o.default.createElement("div",{className:r+"-div"},o.default.createElement("h3",null,"Manage New Orders"),o.default.createElement("ul",{className:r+"-ul"},u(t.unassigned,r,n)),o.default.createElement("h3",null,"Manage New Kits"),o.default.createElement("ul",{className:r+"-ul"},u(t.welcome_kits,r,n)))}}});