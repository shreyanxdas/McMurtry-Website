_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{"0YTE":function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("QKO/"),c=(n("svza"),a.a.createElement);t.a=function(){return c("div",{className:"footer-container"},c(r.Flex,{flexDirection:"row",justifyContent:"center",className:"footer-crest"},c(r.Box,{width:40},c(r.Image,{src:"../../../static/logo.svg",alt:""})),c("p",null,"McMurtry College")),c("p",{className:"footer-item"},"McMurtry College \xb7 MS 761 \xb7 Rice University"),c("p",{className:"footer-item"},"1605 Rice Blvd \xb7 Houston, TX 77005"),c("p",{className:"footer-item"},"Phone: (713) 348-4583 \xb7 Fax: (713) 348-3135"),c("p",{className:"footer-item"},"Email: mcmurtry@rice.edu"),c("p",null),c("p",{className:"footer-item"},"Copyright \xa9 McMurtry College, 2019"))}},"1OyB":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},C3vF:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("AM0r"),c=n("ivdq"),s=n("e02a"),i=n("0YTE"),u=n("1OyB"),l=n("vuIU"),m=n("JX7q"),f=n("Ji7U"),d=n("md7G"),p=n("foSv"),h=n("QKO/"),v=n("RUXa"),b=(n("qrwY"),a.a.createElement);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var g=[{name:"Constitution",document:"../../../../static/documents/mcm_constitution.pdf",icon:"https://icon.now.sh/account_balance"},{name:"General By-Laws",document:"../../../../static/documents/mcm_bylaws.pdf",icon:"https://icon.now.sh/import_contacts"},{name:"Housing By-Laws",document:"../../../../static/documents/mcm_housing_bylaws.pdf",icon:"https://icon.now.sh/home"},{name:"Parking By-Laws",document:"../../../../static/documents/mcm_parking_bylaws.pdf",icon:"https://icon.now.sh/directions_car"},{name:"Tax Exempt Form",document:"../../../../static/documents/tax_exempt_form.pdf",icon:"https://icon.now.sh/attach_money"}],w=function(e){Object(f.a)(n,e);var t=y(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).state={slide:0},o.handleClick=o.handleClick.bind(Object(m.a)(o)),o}return Object(l.a)(n,[{key:"handleClick",value:function(e){this.setState({slide:e})}},{key:"render",value:function(){var e=this;return b("div",{className:"documents-page"},b(v.a,{title:"Documents",width:250,smallText:!0}),b(h.Flex,{flexDirection:"row",justifyContent:"center"},g.map((function(t){return b("div",{onClick:function(){return e.handleClick(g.indexOf(t))},className:g.indexOf(t)===e.state.slide?"active-doc":"inactive-doc",key:t.name},b("p",{className:"doc-key"},t.name))}))),b("div",{className:"embedded-doc"},b("iframe",{src:g[this.state.slide].document,type:"application/pdf",width:"600",height:"820px",page:"7",scrollbar:"1",toolbar:"1"})),b("div",{className:"doc-link-container"},b("a",{href:g[this.state.slide].document,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},b("div",{className:"doc-link"},b("img",{src:"".concat(g[this.state.slide].icon,"/2B2F3A/90"),alt:""}),b("p",null,g[this.state.slide].name," ",b("img",{src:"https://icon.now.sh/open_in_new/2B2F3A/13",alt:""}))))))}}]),n}(a.a.Component),O=(n("NHen"),a.a.createElement);t.default=function(){return O("div",{className:"page"},O(r.a,null),O(c.a,null),O(s.a,null),O(w,null),O(i.a,null))}},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},Ji7U:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",(function(){return a}))},"PNk+":function(e){e.exports=JSON.parse('{"a":[{"name":"About","subheaders":[{"name":"About","to":"/about"},{"name":"O-Week","to":"/oweek"}]},{"name":"Events","subheaders":[{"name":"Calendar","to":"/events/calendar"},{"name":"Arts Calendar","to":"/events/artevents"}]},{"name":"People","subheaders":[{"name":"McTeam","to":"/people/mcteam"},{"name":"McMinistry","to":"/people/mcministry"},{"name":"Court","to":"/people/court"},{"name":"Committees","to":"/people/committees"},{"name":"Associates","to":"/people/associates"},{"name":"Divisional Advisors","to":"/people/divisionaladvisors"},{"name":"Peer Academic Advisors","to":"/people/PAAs"},{"name":"Academic Fellows","to":"/people/academicfellows"},{"name":"RHAs","to":"/people/RHAs"},{"name":"Head Caregivers","to":"/people/headcaregivers"},{"name":"Strive Liaisons","to":"/people/striveliaisons"},{"name":"SMR","to":"/people/SMR"}]},{"name":"Resources","subheaders":[{"name":"Room Reservations","to":"/resources/roomreservations"},{"name":"Financial Inclusivity","to":"/about/financialinclusivity"},{"name":"MIS","to":"/resources/mis"},{"name":"Documents","to":"/resources/documents"},{"name":"Diversity Resources","to":"/resources/diversityResources"},{"name":"Expense Forms","to":"/resources/expenseforms"},{"name":"Work Orders","to":"/resources/workorders"},{"name":"Initiative Requests","to":"/resources/initiativerequests"},{"name":"Feedback Form","to":"/resources/feedbackform"}]}]}')},RUXa:function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("QKO/"),c=(n("WPwg"),a.a.createElement);t.a=function(e){return c("div",null,c(r.Box,{width:e.width,ml:"auto",mr:"auto",className:"title-container"},c("h1",{className:"title-theme"},e.title)))}},WPwg:function(e,t,n){},btJR:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/documents",function(){return n("C3vF")}])},e02a:function(e,t,n){"use strict";var o=n("1OyB"),a=n("vuIU"),r=n("JX7q"),c=n("Ji7U"),s=n("md7G"),i=n("foSv"),u=n("q1tI"),l=n.n(u),m=n("YFqc"),f=n.n(m),d=(n("tKOv"),n("QKO/")),p=n("PNk+"),h=l.a.createElement;function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(s.a)(this,n)}}var b=function(e){Object(c.a)(n,e);var t=v(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={hidden:!0,subheader:null},a.toggleNavbar=a.toggleNavbar.bind(Object(r.a)(a)),a.showSubheader=a.showSubheader.bind(Object(r.a)(a)),a.closeSubheader=a.closeSubheader.bind(Object(r.a)(a)),a}return Object(a.a)(n,[{key:"toggleNavbar",value:function(){this.setState({hidden:!this.state.hidden})}},{key:"showSubheader",value:function(e){this.setState({subheader:e})}},{key:"closeSubheader",value:function(){this.setState({subheader:null})}},{key:"render",value:function(){for(var e=this,t=[],n=[],o=this.state.hidden?{left:"100%"}:{left:0},a=function(o){t.push(h("div",{className:"main-header",key:p.a[o].name},h("a",{onClick:function(){return e.showSubheader(o)}},p.a[o].name))),n.push(h("div",{className:e.state.subheader===o?"subheader-display":"subheader-hidden",key:"".concat(p.a[o].name,"-menu")},h("div",{onClick:e.closeSubheader,className:"subheader-back"},h("p",null,"\u2190 Back")),p.a[o].subheaders.map((function(e){var t=e.name,n=e.to;return h(f.a,{href:n,key:t},h("div",{className:"subheader-item"},t))}))))},r=0;r<p.a.length;r++)a(r);return h("div",null,h("div",{className:"fixed-mobile-header"},h("img",{className:"show-navbar",src:"../../static/icons/menu.svg",alt:"Menu",onClick:this.toggleNavbar}),h(f.a,{href:"/"},h("div",{className:"header-crest-mobile"},h(d.Box,{width:40},h(d.Image,{src:"../../static/logo.svg",alt:""})),h("p",null,"McMurtry College")))),h("div",{className:"mobile-navbar",style:o},h("div",{className:"main-menu"},h("img",{className:"close-navbar",src:"../../static/icons/x.svg",alt:"X",onClick:this.toggleNavbar}),t),n))}}]),n}(l.a.Component);t.a=b},foSv:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return o}))},ivdq:function(e,t,n){"use strict";var o=n("1OyB"),a=n("vuIU"),r=n("JX7q"),c=n("Ji7U"),s=n("md7G"),i=n("foSv"),u=n("q1tI"),l=n.n(u),m=n("YFqc"),f=n.n(m),d=n("QKO/"),p=n("PNk+"),h=(n("sllQ"),l.a.createElement);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(s.a)(this,n)}}var b=function(e){Object(c.a)(n,e);var t=v(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={permanent:!1},a.handleScroll=a.handleScroll.bind(Object(r.a)(a)),a}return Object(a.a)(n,[{key:"handleScroll",value:function(){this.setState({permanent:window.scrollY>0})}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.permanent?{backgroundColor:"#515768"}:{paddingTop:"15px",paddingBottom:"15px",color:"#515768",backgroundColor:"#DCDFE5"};return h("div",{className:"navbar-wrapper",style:e},h(f.a,{href:"/"},h("div",{className:"header-crest"},h(d.Image,{src:"../../static/logo.svg",alt:"",width:40,height:60}),h("p",null,"McMurtry College"))),h("div",{className:"navbar-catagories"},p.a.map((function(e){var t=e.name,n=e.subheaders;return h("div",{className:"navbar-category",key:t},h("button",{className:"navbar-dropdown-opener"},t),h("div",{className:"dropdown-subheaders"},n.map((function(e){var t=e.name,n=e.to;return h(f.a,{href:n,key:t},h("a",null,t))}))))}))))}}]),n}(l.a.Component);t.a=b},md7G:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}n.d(t,"a",(function(){return c}));var r=n("JX7q");function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(r.a)(e):t}},sllQ:function(e,t,n){},svza:function(e,t,n){},tKOv:function(e,t,n){},vuIU:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",(function(){return a}))}},[["btJR",0,2,1,3,4]]]);