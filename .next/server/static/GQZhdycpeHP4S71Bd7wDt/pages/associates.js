module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1/J2":
/***/ (function(module, exports) {



/***/ }),

/***/ "1ABs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/header.js
var header = __webpack_require__("ZHh6");

// EXTERNAL MODULE: ./components/navbar/navbar.js + 2 modules
var navbar = __webpack_require__("gJ/y");

// EXTERNAL MODULE: ./components/footer/footer.js
var footer = __webpack_require__("rCDY");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "rebass"
var external_rebass_ = __webpack_require__("9Bhh");

// EXTERNAL MODULE: ./components/title.js
var title = __webpack_require__("R+Of");

// EXTERNAL MODULE: ./components/navbar headers/leadership/associates/associates.css
var associates = __webpack_require__("cI5B");

// CONCATENATED MODULE: ./components/navbar headers/leadership/associates/associates_content.js
// import JoshEyler from '../../../../static/associates/JoshEyler.jpg';
// import PeterLoewen from '../../../../static/associates/PeterLoewen.jpg';
// import IskaWire from '../../../../static/associates/IskaWire.jpg';
// import MichellePasso from '../../../../static/associates/MichellePasso.jpg';
// import TheoMallinson from '../../../../static/associates/TheoMallinson.jpg';
// import HoulikRitchey from '../../../../static/associates/HoulikRitchey.png';
// import AlesePickering from '../../../../static/associates/AlesePickering.jpg';
// import DerethPhillips from '../../../../static/associates/DerethPhillips.jpeg';
// import LauraKabiri from '../../../../static/associates/LauraKabiri.jpg';
// import ZoeWool from '../../../../static/associates/ZoeWool.jpeg';
// import ElmerWhitehead from '../../../../static/associates/ElmerWhitehead.jpg';
// import KurtKasper from '../../../../static/associates/KurtKasper.jpg';
// import OzgeGurcanli from '../../../../static/associates/OzgeGurcanli.jpeg';
// import KateAbad from '../../../../static/associates/KateAbad.jpg';
var associates_content_associates = [{
  name: "Kariann Fuqua and Josh Eyler",
  career: "Rice, Professor of Art and Writing, Executive Director of the CTE",
  bio: "Josh Eyler is the Executive Director of the Center for Teaching Excellence and a Medievalist by training.  When he is not busy writing about learning and higher ed, he enjoys checking out breweries around town and coaching our daughter Lucy in softball. Kariann Fuqua teaches many things at Rice including art, writing, and museum studies.  Her artwork explores complex relationships of mapping, space, and location, and most recently, how science and data intersect with ideas of control and chaos during natural and environmental disasters.",
  movie_tv: "Game of Thrones",
  hobbies: "Coaching, Reading, Golf, Gardening, Baseball",
  fact: "Josh and Kariann were both athletes growing up.",
  image: '../../../../static/associates/JoshEyler.jpg'
}, {
  name: "Peter and Cheryl Loewen",
  career: "Associate Professor of Musicology, Shepherd School of Music; Cheryl Assistant Director of the Moore Memorial Public Library in Texas City",
  bio: "Peter Loewen is Associate Professor of musicology at Rice University where he specializes in Medieval and Renaissance music. His research interests concern vernacular song, religious drama, intellectual history, music and preaching, and the Franciscans. Peter Loewen was born in Uganda to naturalized Canadian citizens who, in their youth, had emigrated from Ukraine after WWII. Cheryl Loewen was born in Dauphin, Manitoba, Canada. She has a Bachelors degree in Commerce from the University of Manitoba and a Master degree in Library Science from UNT. Peter and Cheryl have 4 children ages 15-23.",
  movie_tv: "At the moment, Game of Thrones.",
  hobbies: "Beer Brewing",
  fact: "Peter may be a citizen of Uganda.",
  image: '../../../../static/associates/PeterLoewen.jpg'
}, {
  name: "Iska Wire",
  career: "Rice University, Talent Management and Development",
  bio: "I grew up in Houston and attended Trinity University.  I've been in fundraising for 17 years and currently do talent management for Development and Alumni Relations.  I am divorced and have two children - Elsie (12) and Wyatt (11) who are both in Scottish arts (highland dancing and bag piping) at their school plus a Siamese cat named Wooley.",
  movie_tv: "An Ideal Husband",
  hobbies: "Scrapbooking, Photography, Girl Scouts, Rodeo and country and western dancing",
  fact: "I was a Gold Award Girl Scout and as a kid, sold over 2000 boxes of cookies each year.",
  image: '../../../../static/associates/IskaWire.jpg'
}, {
  name: "Michelle Passo",
  career: "Center for Career Development (Rice University)",
  bio: "This is my 10th year in the CCD! Through the years, I've worked in different roles from managing the Owl Edge Externship Program to helping employers recruit Rice talent, to working with students as they create their resumes and practice their interviewing skills. My husband and I are huge college hoops fans. Our daughter loves having dinner with the 'Rice kids' at Associates Night(s)! We have a rambunctious dog named Cubbie (after the Chicago Cubs, of course).",
  movie_tv: "Edward Scissorhands and Moulin Rouge",
  hobbies: "Basketball spectating (college and NBA), running, yoga",
  fact: "I used to work in the Commissioner's Office at the National Basketball Association (NBA) in New York City",
  image: '../../../../static/associates/MichellePasso.jpg'
}, {
  name: "Theo Mallinson",
  career: "Oil and gas industry as an engineer",
  bio: "Graduated from Rice in 1995, have worked in oil and gas since then. Several stints overseas, but back in Houston now for two kids to go through school. Live near campus with family and currently three chickens.",
  movie_tv: "The Neverending Story",
  hobbies: "Soccer, swimming, gardening, video games.",
  fact: "I enjoy low environmental impact home 'systems' and am currently trying to perfect a kind of urban mini farm at our house.",
  image: '../../../../static/associates/TheoMallinson.jpg'
}, {
  name: "Emily Houlik-Ritchey",
  career: "English Department, Rice U.",
  bio: "I teach and research the literature of the Middle Ages written in medieval English and Spanish, studying the interaction of these cultural traditions with the wider medieval Mediterranean world. I am originally from Colorado, and my family (including a husband and two spunky kids) travel back there regularly to hike, ski, and see family.",
  movie_tv: "Foyle's War; Jane Austen film adaptations; Rogue One",
  hobbies: "Raising my kids; Reading for fun; Hiking",
  fact: "Periodically (as they migrate through Houston) I foster monarch butterfly caterpillars through their metamorphosis into butterflies.",
  image: '../../../../static/associates/HoulikRitchey.png'
}, {
  name: "Alese Pickering",
  career: "Rice Magazine (part of Public Affairs at Rice)",
  bio: "I am a graphic-designing, food-loving, cat-mothering, native Houstonian.",
  movie_tv: "Murial's Wedding",
  hobbies: "Cooking, photography, reading magazines, collecting art",
  fact: "I love driving long distance. Road trips are the best.",
  image: '../../../../static/associates/AlesePickering.jpg'
}, {
  name: "Dereth Phillips",
  career: "Rice University, Lecturer",
  bio: "I have worked as a lecturer in the Rice BioSciences (Biochemistry & Cell Biology) department since 2000 and have been a member of the McMurtry family since 2010. My day job is advising Natural Sciences students interested in finding and succeeding in undergraduate research opportunities on campus and elsewhere in Houston. I am a terrible but devoted ukulele/banjolele hobbyist.",
  movie_tv: "Freaks and Geeks",
  hobbies: "Cooking, ukulele, playing other odd instruments, singing",
  fact: "Rice has a lot of cool nature. Take a look at the lizards around McMurtry. The brown ones with diamonds are invasive Cuban anoles. The green (sometimes plain brown) ones are native.",
  image: '../../../../static/associates/DerethPhillips.jpeg'
}, {
  name: "Laura S. Kabiri, PT, DPT, PhD, CSCS",
  career: "Lecturer - Department of Kinesiology",
  bio: "Hello from the Department of Kinesiology at Rice! I primarily teach human anatomy and physiology courses while my research focuses on pediatric health and wellness. I am also a licensed physical therapist, wife, and mom of 3 (but one of them has four paws and a tail).",
  movie_tv: "Frasier",
  hobbies: "Eating",
  fact: "I completed undergrad as a music major (piano and choir) before going on PT school and have volunteered with the Houston Food Bank, Houston Rodeo, and Faithful Paws Animal Therapy Group.",
  image: '../../../../static/associates/LauraKabiri.jpg'
}, {
  name: "Zoë Wool",
  career: "Assistant Professor, Department of Anthropology, CSWGS, and Medical Humanities",
  bio: "I’m a native New Yorker and erstwhile Torontonian still getting used to Houston’s car culture and the fact that people put blankets on their lawns when there is a frost warning. My resarch and teaching are at the intersections of medical anthropology, disability studies, queer theory, and STS, and most of my ethnographic resarch is with injured US soldiers and veterans of the post-9/11 wars.",
  movie_tv: "I don’t like to pick favorites (but maybe Startrek TNG)",
  hobbies: "Making meals, making mischief.",
  fact: "I usually ride my bike to work and have been known to yell at my students who ride theirs without a helemet.",
  image: '../../../../static/associates/ZoeWool.jpeg'
}, {
  name: "Elmer Whitehead",
  career: "Rice University - Senior Mechanical Engineer/Project Manager",
  bio: "I was born in the San Francisco Bay Area. I graduate from High School in Oakland, CA. I graduated from the University of California, Berkeley in Mechanical Engineering. I graduated from Trinity Evangelical Divinity School. I have been working at Rice since 2013. I have a beautiful wife and four children.",
  movie_tv: "Any kung fu movie that shows 'real' martial arts. I also like watching basketball.",
  hobbies: "Kung Fu - Northern Praying Mantis",
  fact: "I love travelling. I have been to Ethiopia, England, Italy, France, Australia",
  image: '../../../../static/associates/ElmerWhitehead.jpg'
}, {
  name: "Kurt and Stephanie Kasper",
  career: "The University of Texas School of Dentistry at Houston",
  bio: "Kurt Kasper earned a doctorate in bioengineering from Rice University and a bachelor of science degree in biomedical engineering (magna cum laude) from Case Western Reserve University. He served on the faculty of the Department of Bioengineering at Rice University for six years prior to transitioning to the Department of Orthodontics at The University of Texas School of Dentistry at Houston in July 2014. Kurt’s research applies fundamentals of engineering, materials science, and the biosciences toward the development and evaluation of biomaterial-based technologies to meet clinical needs. Outside of the  laboratory, he enjoys engagement in outreach activities through service with the You Be the Chemist Challenge program of the Chemical Educational Foundation, as well as service to the greater Houston community in various capacities, including past service as a member of the Board of Directors of the Association of Rice Alumni.",
  movie_tv: "Waiting for Guffman",
  hobbies: "Parks, museums, and cycling with my family",
  fact: "I applied to Rice for undergraduate studies but was not accepted!",
  image: '../../../../static/associates/KurtKasper.jpg'
}, {
  name: "Ozge Gurcanli, Simon Fischer-Baum, Masal Baby-Murt",
  career: "OG & SFB: Department of Psychology, Masal: Unicorn Land",
  bio: "We both work in Department of Psychology and we teach Psychology and Cognitive Science courses. We lived in McM as RAs for 4 years, students named our child Baby-Murt, and we are so proud of all McM students.",
  movie_tv: "OG: Marvellous Miss Maisel, SFB: Russian Doll, Masal: Daniel Tiger's Neighborhood",
  hobbies: "OG: Photography, SFB: Cooking, Masal: Acting, scooting, and drawing",
  fact: "OG loves tea! A lot. Also sewing. We all love art work with tactile materials.",
  image: '../../../../static/associates/OzgeGurcanli.jpeg'
}, {
  name: "E. Kate Abad",
  career: "Student Center Director, Rice",
  bio: "E. Kate Abad has worked at Rice University for ten years, where she currently serves as the Student Center Director with oversight for the Student Run Businesses, Facilities and Events, and Student Activities. Kate has a passion for developing student and professional leaders through coaching, leadership development and advising.  As a hobby she loves anything related to journaling and is always willing to help aspiring journal writers get started!",
  movie_tv: "Game of Thrones",
  hobbies: "Journaling - bullet, art, classic",
  fact: "I grew up in Japan and on Guam",
  image: '../../../../static/associates/KateAbad.jpg'
}];
/* harmony default export */ var associates_content = (associates_content_associates);
// CONCATENATED MODULE: ./components/navbar headers/leadership/associates/associates.js












var associates_AssociateCard =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AssociateCard, _React$Component);

  function AssociateCard(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AssociateCard);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AssociateCard).call(this, props));
    _this.state = {
      contentVisible: false
    };
    _this.handleClick = _this.handleClick.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(AssociateCard, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        contentVisible: !this.state.contentVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      var cardStyle = {};
      var dropdownStyle = {};
      var dropdownImageStyle = {};
      cardStyle.backgroundColor = this.state.contentVisible ? '#BFBFCC' : '#DCDFE5';
      dropdownStyle.maxHeight = this.state.contentVisible ? '650px' : '0';
      dropdownImageStyle.maxHeight = this.state.contentVisible ? '0' : '300px';
      return external_react_default.a.createElement(external_rebass_["Box"], {
        width: 1,
        onClick: this.handleClick
      }, external_react_default.a.createElement("div", {
        className: "associate-card",
        style: cardStyle
      }, external_react_default.a.createElement("div", {
        className: "associate-image-dropdown",
        style: dropdownImageStyle
      }, external_react_default.a.createElement(external_rebass_["Box"], {
        className: "associate-image",
        width: [0.8, 0.5]
      }, external_react_default.a.createElement(external_rebass_["Image"], {
        src: this.props.image,
        alt: ""
      }))), external_react_default.a.createElement("h2", {
        className: "associate-name"
      }, this.props.name), external_react_default.a.createElement("div", {
        style: dropdownStyle,
        className: "associate-dropdown"
      }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Career/Profession: "), this.props.career), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Bio: "), this.props.bio), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Favorite Movie/TV Show: "), this.props.movie_tv), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Hobbies: "), this.props.hobbies), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Fun Fact: "), this.props.fact))));
    }
  }]);

  return AssociateCard;
}(external_react_default.a.Component);

var associates_Associates = function Associates() {
  var columns = [[], []];

  for (var i = 0; i < associates_content.length; i++) {
    columns[i % 2].push(external_react_default.a.createElement(associates_AssociateCard, {
      key: "".concat(associates_content[i].name),
      name: associates_content[i].name,
      career: associates_content[i].career,
      bio: associates_content[i].bio,
      movie_tv: associates_content[i].movie_tv,
      hobbies: associates_content[i].hobbies,
      fact: associates_content[i].fact,
      image: associates_content[i].image
    }));
  }

  return external_react_default.a.createElement("div", {
    className: "associates-page"
  }, external_react_default.a.createElement(title["a" /* default */], {
    title: 'Associates',
    width: 240,
    smallText: false
  }), external_react_default.a.createElement(external_rebass_["Flex"], {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    style: {
      marginTop: '3%'
    }
  }, columns.map(function (column) {
    return external_react_default.a.createElement(external_rebass_["Flex"], {
      flexDirection: "column",
      width: [1, 0.35],
      key: "C+".concat(columns.indexOf(column))
    }, column);
  })));
};

/* harmony default export */ var associates_associates = (associates_Associates);
// EXTERNAL MODULE: ./pages/page.css
var page = __webpack_require__("L5GA");

// CONCATENATED MODULE: ./pages/associates.js







var associates_AssociatesPage = function AssociatesPage() {
  return external_react_default.a.createElement("div", {
    className: "page"
  }, external_react_default.a.createElement(header["a" /* default */], null), external_react_default.a.createElement(navbar["a" /* default */], null), external_react_default.a.createElement(associates_associates, null), external_react_default.a.createElement(footer["a" /* default */], null));
};

/* harmony default export */ var pages_associates = __webpack_exports__["default"] = (associates_AssociatesPage);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1ABs");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "9Bhh":
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Gokf":
/***/ (function(module, exports) {



/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "L5GA":
/***/ (function(module, exports) {



/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "Paim":
/***/ (function(module, exports) {



/***/ }),

/***/ "R+Of":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Bhh");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _title_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Gokf");
/* harmony import */ var _title_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_title_css__WEBPACK_IMPORTED_MODULE_2__);




var Title = function Title(props) {
  return (// <div className='title-container'>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: props.width,
      ml: "auto",
      mr: "auto",
      className: "title-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: props.smallText ? 'title-theme2' : 'title-theme1'
    }, props.title)))
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Title); // style={{width: props.width}}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "ZHh6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charset: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "../static/favicon.ico"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000000"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "manifest",
    href: "%PUBLIC_URL%/manifest.json"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "McMurtry College"));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cI5B":
/***/ (function(module, exports) {



/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gJ/y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/navbar/navbar.css
var navbar = __webpack_require__("nzDO");

// EXTERNAL MODULE: external "rebass"
var external_rebass_ = __webpack_require__("9Bhh");

// EXTERNAL MODULE: ./components/mcmLogo.css
var mcmLogo = __webpack_require__("Paim");

// CONCATENATED MODULE: ./components/mcmLogo.js





var mcmLogo_McmLogo = function McmLogo() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    className: "mcm-crest",
    id: "mcm-header"
  }, external_react_default.a.createElement(external_rebass_["Box"], {
    width: [0.7, 0.5, 0.5, 0.3],
    ml: "auto",
    mr: "auto",
    pt: 0.1,
    className: "mcm-crest-link"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement(external_rebass_["Image"], {
    src: "../static/McmCrest.svg",
    alt: "McMurtry Crest"
  })))));
};

/* harmony default export */ var components_mcmLogo = (mcmLogo_McmLogo);
// CONCATENATED MODULE: ./components/navbar/navbar_content.js
var navbar_items = [{
  header: "About",
  dropDownChildren: [{
    subheader: "About",
    to: "/about"
  }, {
    subheader: "Financial Inclusivity",
    to: "/financialinclusivity"
  }]
}, {
  header: "Events",
  dropDownChildren: [{
    subheader: "Events",
    to: "/events"
  }, {
    subheader: "Art Calender",
    to: "/artevents"
  }]
}, {
  header: "Leadership",
  dropDownChildren: [{
    subheader: "McTeam",
    to: "/mcteam"
  }, {
    subheader: "McMinistry",
    to: "/mcministry"
  }, {
    subheader: "Court",
    to: "/court"
  }, {
    subheader: "Committees",
    to: "/committees"
  }, {
    subheader: "Associates",
    to: "/associates"
  }]
}, {
  header: "Academics",
  dropDownChildren: [{
    subheader: "Divisional Advisors",
    to: "/divisionaladvisors"
  }, {
    subheader: "Peer Academic Advisors",
    to: "/paas"
  }, {
    subheader: "Academic Fellows",
    to: "/academicfellows"
  }]
}, {
  header: "Wellbeing",
  dropDownChildren: [{
    subheader: "Rice Health Advisors",
    to: "/RHAs"
  }, {
    subheader: "Strive Liasons",
    to: "/striveliaisons"
  }]
}, {
  header: "O-Week",
  dropDownChildren: [{
    subheader: "Pixar Studio Week",
    href: 'https://mcmurtryoweek.wixsite.com/home-page'
  }]
}, {
  header: "Resources",
  dropDownChildren: [{
    subheader: "Room Reservations",
    to: "/roomreservations"
  }, {
    subheader: "The MIS",
    to: "/mis"
  }, {
    subheader: "Documents",
    to: "/documents"
  }, {
    subheader: "Expense Forms",
    to: "/expenseforms"
  }, {
    subheader: "McMurtry Resources",
    to: "/mcmresources"
  }, {
    subheader: "Work Orders",
    to: '/workorders'
  }, {
    subheader: "Equipment",
    to: '/equipment'
  }, {
    subheader: "Initiative Requests",
    to: '/initiativerequests'
  }]
}, {
  header: "Contact",
  headerTo: "/contact",
  dropDownChildren: []
}];
/* harmony default export */ var navbar_content = (navbar_items);
// CONCATENATED MODULE: ./components/navbar/navbar.js













var navbar_DropDownWide = function DropDownWide(props) {
  var h;

  if (props.expanded) {
    h = 500;
  } else {
    h = 0;
  }

  var dropDownHeightStyle = {
    maxHeight: "".concat(h, "px")
  };
  return external_react_default.a.createElement("div", {
    className: "dropdown-item",
    onMouseEnter: function onMouseEnter() {
      return props.handleMouseEnter();
    },
    onMouseLeave: function onMouseLeave() {
      return props.handleMouseLeave();
    },
    style: {
      width: '10%'
    }
  }, external_react_default.a.createElement("div", null, props.headerTo !== undefined ? external_react_default.a.createElement(link_default.a, {
    href: props.headerTo
  }, external_react_default.a.createElement("div", {
    className: props.expanded ? 'dropdown-header-active' : 'dropdown-header-inactive'
  }, props.header)) : external_react_default.a.createElement("div", {
    className: props.expanded ? 'dropdown-header-active' : 'dropdown-header-inactive'
  }, props.header)), external_react_default.a.createElement("div", {
    className: "dropdown-subheaders",
    style: dropDownHeightStyle
  }, props.dropDownChildren.map(function (_ref) {
    var subheader = _ref.subheader,
        to = _ref.to,
        href = _ref.href;
    return href === undefined ? external_react_default.a.createElement(link_default.a, {
      href: to,
      key: "".concat(subheader)
    }, external_react_default.a.createElement("div", {
      className: "dropdown-subheader"
    }, subheader)) : external_react_default.a.createElement("a", {
      href: href,
      key: "".concat(subheader),
      style: {
        textDecoration: 'none'
      },
      target: "_blank",
      rel: "noopener noreferrer"
    }, external_react_default.a.createElement("div", {
      className: "dropdown-subheader"
    }, subheader));
  })));
};

var navbar_DropDownNarrow = function DropDownNarrow(props) {
  var h;

  if (props.expanded) {
    h = 500;
  } else {
    h = 0;
  }

  var dropDownHeightStyle = {
    maxHeight: "".concat(h, "px")
  };
  return external_react_default.a.createElement("div", {
    className: "dropdown-item"
  }, external_react_default.a.createElement("div", null, props.headerTo !== undefined ? external_react_default.a.createElement(link_default.a, {
    href: props.headerTo
  }, external_react_default.a.createElement("div", {
    className: "dropdown-header",
    onClick: function onClick() {
      return props.handleClick();
    }
  }, props.header)) : external_react_default.a.createElement("div", {
    className: "dropdown-header",
    onClick: function onClick() {
      return props.handleClick();
    }
  }, props.header, '      ', external_react_default.a.createElement("img", {
    className: "arrow",
    style: props.expanded ? {
      transform: 'rotate(90deg)'
    } : {},
    src: "https://icon.now.sh/chevron/2B2F3A/10",
    alt: ">"
  }))), external_react_default.a.createElement("div", {
    className: "dropdown-subheaders",
    style: dropDownHeightStyle
  }, props.dropDownChildren.map(function (_ref2) {
    var subheader = _ref2.subheader,
        to = _ref2.to,
        href = _ref2.href;
    return href === undefined ? external_react_default.a.createElement(link_default.a, {
      href: to,
      key: "".concat(subheader)
    }, external_react_default.a.createElement("div", {
      className: "dropdown-subheader"
    }, subheader)) : external_react_default.a.createElement("a", {
      href: href,
      key: "".concat(subheader),
      style: {
        textDecoration: 'none'
      },
      target: "_blank",
      rel: "noopener noreferrer"
    }, external_react_default.a.createElement("div", {
      className: "dropdown-subheader"
    }, subheader));
  })));
};

var navbar_NavBar =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(NavBar, _React$Component);

  function NavBar(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, NavBar);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavBar).call(this, props));
    var activeIndices = [];

    for (var i = 0; i < _this.props.dropDownItems.length; i++) {
      activeIndices.push(false);
    }

    _this.state = {
      activeHeaders: activeIndices,
      closed: true,
      fixedNavbar: false
    };
    _this.showSubheaders = _this.showSubheaders.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.hideSubheaders = _this.hideSubheaders.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleSubheaders = _this.toggleSubheaders.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.openNavbar = _this.openNavbar.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.scrollHandler = _this.scrollHandler.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(NavBar, [{
    key: "showSubheaders",
    value: function showSubheaders(indx) {
      var newActiveHeaders = this.state.activeHeaders;
      newActiveHeaders[indx] = true;
      this.setState({
        activeHeaders: newActiveHeaders
      });
    }
  }, {
    key: "hideSubheaders",
    value: function hideSubheaders(indx) {
      var newActiveHeaders = this.state.activeHeaders;
      newActiveHeaders[indx] = false;
      this.setState({
        activeHeaders: newActiveHeaders
      });
    }
  }, {
    key: "toggleSubheaders",
    value: function toggleSubheaders(indx) {
      var newActiveHeaders = this.state.activeHeaders;
      newActiveHeaders[indx] = !this.state.activeHeaders[indx];
      this.setState({
        activeHeaders: newActiveHeaders
      });
    }
  }, {
    key: "openNavbar",
    value: function openNavbar() {
      this.setState({
        closed: !this.state.closed
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: "scrollHandler",
    value: function scrollHandler() {
      if (window.scrollY > document.getElementById('mcm-header').clientHeight) {
        this.setState({
          fixedNavbar: true
        });
      } else {
        this.setState({
          fixedNavbar: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var narrowNavBarStyle = {};
      var burgerStyle = {
        transition: 'transform 0.2s ease-in-out'
      };

      if (this.state.closed) {
        narrowNavBarStyle.maxHeight = '0px';
      } else {
        narrowNavBarStyle.maxHeight = '1000px';
        burgerStyle.transform = 'rotate(90deg)';
      }

      var fixedNavbar = {};

      if (this.state.fixedNavbar) {
        fixedNavbar.position = 'fixed';
        fixedNavbar.marginTop = "-".concat(document.getElementById('mcm-header').clientHeight, "px");
      }

      var wideNavbarItems = [];
      var narrowNavbarItems = [];

      var _loop = function _loop(i) {
        var item = _this2.props.dropDownItems[i];
        wideNavbarItems.push(external_react_default.a.createElement(navbar_DropDownWide, {
          handleMouseEnter: function handleMouseEnter() {
            return _this2.showSubheaders(i);
          },
          handleMouseLeave: function handleMouseLeave() {
            return _this2.hideSubheaders(i);
          },
          header: item.header,
          headerTo: item.headerTo,
          dropDownChildren: item.dropDownChildren,
          key: "".concat(item.header),
          expanded: _this2.state.activeHeaders[i]
        }));
        narrowNavbarItems.push(external_react_default.a.createElement(navbar_DropDownNarrow, {
          onClick: function onClick() {
            return _this2.toggleSubheaders(i);
          },
          header: item.header,
          headerTo: item.headerTo,
          dropDownChildren: item.dropDownChildren,
          key: "".concat(item.header),
          expanded: _this2.state.activeHeaders[i]
        }));
      };

      for (var i = 0; i < this.props.dropDownItems.length; i++) {
        _loop(i);
      }

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        className: "navbar-crest"
      }, external_react_default.a.createElement(components_mcmLogo, null)), external_react_default.a.createElement("div", {
        className: "wide-navbar",
        style: fixedNavbar
      }, external_react_default.a.createElement("div", {
        className: "filler-box"
      }), wideNavbarItems, external_react_default.a.createElement("div", {
        className: "filler-box"
      })), external_react_default.a.createElement("div", {
        className: "narrow-navbar"
      }, external_react_default.a.createElement("div", {
        className: "narrow-navbar-toggle"
      }, external_react_default.a.createElement("img", {
        style: burgerStyle,
        onClick: this.openNavbar,
        src: "https://icon.now.sh/burger/2B2F3A/24",
        alt: "burger"
      })), external_react_default.a.createElement(components_mcmLogo, null), external_react_default.a.createElement("div", {
        className: "narrow-navbar-menu",
        style: narrowNavBarStyle
      }, narrowNavbarItems)));
    }
  }]);

  return NavBar;
}(external_react_default.a.Component);

var navbar_Navbar = function Navbar() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(navbar_NavBar, {
    dropDownItems: navbar_content
  }));
};

/* harmony default export */ var navbar_navbar = __webpack_exports__["a"] = (navbar_Navbar);

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "nzDO":
/***/ (function(module, exports) {



/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rCDY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Bhh");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1/J2");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_2__);




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.4, 0.3, 0.3, 0.2],
    ml: "auto",
    mr: "auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../static/McmCrest.svg",
    alt: "McMurtry Crest"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "McMurtry College \xB7 MS 761 \xB7 Rice University"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "1605 Rice Blvd. \xB7 Houston, TX 77005"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "Phone: (713) 348-4583 \xB7 Fax: (713) 348-3135"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "Copyright \xA9 McMurtry College, 2019"));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });