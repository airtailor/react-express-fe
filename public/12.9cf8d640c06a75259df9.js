webpackJsonp([12],{675:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=r(1),c=i(s),d=r(689),u=i(d),f=r(682),h=i(f),p=r(109),m=i(p),y=function(e){function t(){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("div",{style:{width:"80%",margin:"50px auto",height:"800px",textAlign:"center",paddingBottom:"100px"}},c.default.createElement(m.default,{className:"sign-in-logo",text:"Hi! Here's our Terms of Service"}),c.default.createElement("div",{style:{overflow:"scroll",paddingBottom:"500px"}},c.default.createElement(u.default,null)))}}]),t}(s.Component);t.default=(0,h.default)(y)},679:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(i),n=r(18),o=r(22),l=r(10),s=r(30),c=function(e){var t=e.rotate,r=(e.userRoles,e.includeLink,e.link),i=void 0;if(t&&0!==t.length?i=function(){return e.resetCart()}:(r="/orders/new",i=function(){return console.log("")}),e.userRoles.admin||e.userRoles.retailer)return a.default.createElement(l.Link,{className:"cart-ribbon",to:r},a.default.createElement("h1",{className:"cart-ribbon-sign "+t,onClick:i},"+"),a.default.createElement("div",{className:"cart-ribbon-triangle"}))},d=function(e){return a.default.createElement("div",{className:"section-header"},a.default.createElement("h2",null,e.text),c(e))},u=function(e){return{currentUser:e.currentUser,userRoles:e.userRoles}},f=function(e){return(0,o.bindActionCreators)({resetCart:s.resetCart},e)};t.default=(0,n.connect)(u,f)(d)},681:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getSectionHeaderText=function(e){var t=e.match.path;return"/admin/reports"===t?"Air Tailor / Reports":"/admin/reports/orders"===t?"Air Tailor / Order Reports":"/stores/new"===t?"Stores / New":"/users/:user_id/edit"===t?"Edit User":"/orders/new"===t?"Agree To Terms":"/site/terms_of_service"===t?"":void 0}},682:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return function(t){function r(){a(this,r);var e=n(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.state={text:""},e}return o(r,t),s(r,[{key:"componentDidMount",value:function(){var e=(0,h.getSectionHeaderText)(this.props);this.setState({text:e})}},{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement(f.default,{text:this.state.text}),d.default.createElement(e,this.props))}}]),r}(c.Component)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),c=r(1),d=i(c),u=r(679),f=i(u),h=r(681);t.default=l},689:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(i),n=function(e){return a.default.createElement("div",{style:{textAlign:"justify",margin:"20px 20px 0 20px"}},a.default.createElement("p",{style:{textAlign:"center",fontWeight:"bold"}},"Terms of Service"),a.default.createElement("p",{style:{fontFamily:"sans-serif",fontWeight:"bold"}},'The Air Tailor Platform provides easy-to-use software to our Retail Partners, referred to herein as the "Partners", allowing their store associates to order clothing alterations from the Air Tailor Tailors. This solution will help Partners offer their retail customers a heightened shopping experience, which promotes higher store sales and lowers the amount of returned merchandise.'),a.default.createElement("ol",null,a.default.createElement("li",{style:{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Services"),'. Air Tailor agrees to provide the following Technology Services (defined below) and Management Services (defined below) to Partners. Together, the Technology Services and Management Services are referred to herein as the "Services."'),a.default.createElement("br",null),a.default.createElement("ol",{type:"a"},a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Technology Services"),'. Air Tailor will provide Partners with its alteration and tailor management software via a web client ("Air Tailor Platform") in order to permit Partners to place garment tailoring orders to third party tailors (collectively, "Tailors"); track tailoring orders and provide centralized, up-to-date shipment and status reporting; centralize customer service, account management, billing, reporting and payment functionalities for tailoring orders.'),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Management Services"),'. Air Tailor will provide its Air Tailor Platform to facilitate all back-end ordering, fulfillment, shipping/delivery, payment and related services between Partners and Tailors (collectively, "Management Services"). For the avoidance of doubt, Air Tailor, shall not be responsible for any costs associated with goods, clothing or other products lost or damaged during shipment, including without limitation, goods, clothing or other products lost or damaged by shipping or messenger/delivery services. Should a tailored garment be found in good faith to be unsatisfactory by a Partner, Air Tailor shall use commercially reasonable efforts to replace or repair said garment at no additional charge.'),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Tailors"),". In the course of providing the Services contemplated herein, Air Tailor shall manage and facilitate all services that are performed by the Tailors including managing Tailoring orders, tracking and managing Tailor activity, and responding to any customer service concerns with respect to the performance of the applicable Tailors. Tailors shall have access to and utilize portions of the Air Tailor Platform in order to assist Air Tailor in managing these tasks. All Tailors utilized by the Air Tailor Portal must be previously vetted and approved to the system by Air Tailor staff prior to accessing the Air Tailor Platform or Services."),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Partner’s Users"),'. Partners may permit employees and sales associates at its store locations ("Users") to access and use the Services. Partners shall safeguard all access to the Services and all credentials provided by Air Tailor and shall ensure the confidentiality and security thereof. Partners shall be fully responsible for, and shall indemnify Air Tailor and its Indemnitees for, the acts and omissions of its Users.')),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Fees"),". All applicable costs shall be paid in full within thirty (30) days after the date of the corresponding invoice and are non-refundable once paid. Partners shall be responsible for all sales, use, or other taxes and other governmental charges on all alterations ordered as well as shipping/messenger costs from the store to the Tailor. Air Tailor will be responsible for all shipping and messenger/delivery costs back to the retail customer from the Tailor. Air Tailor may suspend the provision of the Services upon prior written notice to Customer if any payments become thirty (30) or more days past due."),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Ownership"),"."),a.default.createElement("ol",{type:"a"},a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Trademarks"),'. Air Tailor grants Partners a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to access and use Air Tailor’s names, logos, designs, and other trademarks ("Marks") solely for the purposes of marketing, displaying and utilizing the Services, Air Tailor Alterations Portal and Air Tailor Platform. Partners agree to use the Air Tailor Marks consistent with the highest standards of quality so as to protect and maintain the Air Tailor Marks and Air Tailor’s rights therein. To this end, Partners shall have the right to review and approve the manner of use of the Air Tailor Marks, and Partners agree to modify use of any Air Tailor Marks which do not meet the standards required by the Partner.'),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Air Tailor Ownership"),'. Air Tailor shall retain all right, title and interest in and to the Services, the Air Tailor Alterations Portal, and the Air Tailor Platform including without limitation, all content, concepts, know-how, tools, scripts, methodologies, processes, code, or other intellectual property or trade secrets associated with the Air Tailor Alterations Portal, Air Tailor Platform, or other pre-existing or independently developed intellectual property created by Air Tailor and any enhancements, modifications, or improvements to the foregoing developed during or independent of the Services (collectively, "Air Tailor IP"). In connection with the Services herein, Air Tailor and Partners shall exchange data which shall include, without limitation, Tailoring order information (collectively, "Data"). Partner grants Air Tailor an irrevocable, perpetual, worldwide, transferable, non-exclusive, royalty-free license to use and modify Data in the course of its business. Further, Partners are not required to provide any suggestions, enhancement requests, recommendations or other feedback regarding the Services ("Feedback"), but if Partners do so, Partners grants Air Tailor a non-exclusive, royalty-free, worldwide, transferable, sub-licensable, irrevocable, perpetual license to use or incorporate into the Services any Feedback so provided.'),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Restrictions"),". Partners shall not (or permit any third party to) directly or indirectly (i) use any of the Air Tailor IP or Air Tailor Confidential Information to create any service, software, documentation or data that is competitive with, substantially similar or confusingly similar to any aspect of the Services; (ii) reverse engineer or use any other means to attempt to discover any source code in connection with the Services, Air Tailor IP or Air Tailor Confidential Information; (iii) encumber, pledge, resell, share, sublicense, transfer, rent, lease, time-share or use the Services, Air Tailor IP or Air Tailor Confidential Information for the benefit of any third party; (iv) modify, manufacture, adapt, create derivative works of or otherwise modify any aspect of the Services, Air Tailor IP or Air Tailor Confidential Information; (v) use the Services, Air Tailor IP and Air Tailor Confidential Information to support any activity that is infringing or illegal; (vi) transmit harmful, disabling or malicious code or devices or disable, override or access the Services, Air Tailor IP and Air Tailor Confidential Information, or access the same for purposes of monitoring their performance or functionality; or (vii) remove, alter or obscure any copyright or other proprietary notices on the Services, Air Tailor IP or Air Tailor Confidential Information. Notwithstanding anything to the contrary herein, Air Tailor may, in its sole discretion, immediately revoke access if a Partner breaches the restrictions in this Section or creates other security or legal concerns. Partner hereby agrees that Air Tailor will be entitled, in addition to any other remedies available to it at law or in equity, to injunctive relief to prevent the breach or threatened breach of Partner’s obligations under this Section, without any requirement to demonstrate irreparable harm or post a bond."),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Partner Ownership"),'. Partners shall retain all right, title, ownership and interest in and to (i) the Partner’s websites; (ii) all materials or products that are the subject of any Tailoring Orders; and (ii) all content, trademarks, copyrights, patents, or other intellectual and/or proprietary property of the Partner contained therein (collectively, "Partner Content"). Partners grants Air Tailor a non-exclusive, limited, royalty-free, non-transferable license to use, host, distribute, reproduce, perform, display, modify and create derivative works of Partner Content to the extent necessary to perform Services for Partner.')),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Representations, Warranties, and Indemnity"),"."),a.default.createElement("ol",{type:"a"},a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Partners"),". Partners represent and warrant that they shall provide all information, materials, access and cooperation necessary for Air Tailor to provide the Services and shall procure all connectivity, equipment and software as needed to access the Services or Air Tailor Platform; (ii) the Partner Content, and Air Tailor’s use of Partner Content as contemplated herein, will not violate the intellectual property, privacy or publicity or other rights of any third party; (iii) Partners shall comply with all applicable federal, state, and local laws, rules and regulations; and (iv) Partners have the right to provide Data to Air Tailor for the purposes contemplated herein and that its collection, provision and use of the Data is compliant with all applicable laws and self-regulatory principles concerning privacy and data security and with Partner’s privacy policies."),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Air Tailor"),". Air Tailor represents and warrants that (i) the Air Tailor IP, including but not limited to the Air Tailor Alterations Portal and Air Tailor Platform, shall not to Air Tailor’s knowledge at the time of delivery contain any Trojan horses, viruses, damaging computer programming, worms, or undocumented disabling devices; (ii) the Air Tailor IP, including but not limited to the Air Tailor Alterations Portal and Air Tailor Platform, shall not infringe on, misappropriate and/or violate the copyright, trademark, patent, right of privacy or publicity, or trade secret rights or any other intellectual property rights of any third Party, and (iii) in providing the Services, Air Tailor shall comply with all applicable laws, rules and regulations."),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Disclaimers"),". Except as set forth herein in this agreement, Air Tailor does not warrant that the services will meet Partner’s requirements or result in any outcome, or that their operation will be uninterrupted or error-free. Air Tailor hereby disclaims all other warranties, whether express or implied, oral or written, including without limitation, all implied warranties or title, merchantability, non-infringement or fitness for any particular purpose. Air Tailor shall not be responsible for any third party suppliers or for any third party platforms, software or intellectual property."),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Indemnity"),". Each Party shall defend, indemnify and hold harmless the other Party and its affiliates, employees, representatives, successors and assigns from and against any and all losses, costs, damages, liabilities (including reasonable outside attorney's fees and expenses) in connection with any third Party claim, action, suits, regulatory investigations or subpoenas (collectively, \"Claims\") to the extent arising from such indemnifying Party's (i) breach of its representations, warranties or covenants under this Agreement; and/or (ii) gross negligence or willful misconduct of such Party, its employees or agents, provided that the indemnified Party gives the indemnifying Party (a) prompt written notice of any Claims, (b) sole control over the defense and/or settlement of any Claims, and (c) reasonable cooperation in connection with such defense and/or settlement."),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Limitation on Liability"),". In no event shall either party be liable for any indirect, punitive, incidental, reliance, special, exemplary or consequential damages including, but not limited to, loss of business, revenues, profits and goodwill and Air Tailor’s aggregate liability for any direct damages shall not exceed the fees paid during the term of this agreement.")),a.default.createElement("br",null),a.default.createElement("li",{style:{fontFamily:"sans-serif",weight:400,fontSize:"16px",lineHeight:"18px"}},a.default.createElement("span",{style:{textDecoration:"underline"}},"Miscellaneous"),". The Agreement shall be governed by the laws of the State of New York, without regard to conflict of law principles. Any dispute arising out of or in connection with this agreement shall be brought in the federal or state courts of New York County, New York. In the event that either Party is prevented from performing, or is unable to perform (other than Partner’s payment obligations), any of its obligations under this Agreement due to any force majeure (e.g., force of nature, fire, natural disaster, accident, riots, acts of government, acts of war or terrorism, failure of transportation or communications or of suppliers of goods or services, changes to any third Party platforms, transport failures, any usage restrictions imposed by any such third Party platforms, or any delays or outages arising in connection with such third Party platforms, the malicious acts of third Parties (e.g. cyber-attacks), or any other cause beyond the reasonable control of such Party), the affected Party shall give written notice thereof to the other Party and its performance shall be extended for the period of delay or inability to perform due to such occurrence.")))};t.default=n}});