(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1thn":function(t,e,r){"use strict";r.r(e);var o=r("q1tI"),n=r.n(o),i=r("YFqc"),a=r.n(i),s=r("gZfH"),u=r.n(s);e.default=function(t){var e=t.computerId,r=t.baseUrl;return n.a.createElement("div",null,n.a.createElement(u.a,{value:"".concat(r,"/").concat(e,"/device")}),n.a.createElement("div",null,n.a.createElement(a.a,{as:"/".concat(e,"/device"),href:"/device?id=".concat(e)},"详情")))}},H38U:function(t,e,r){var o=r("f4xo"),n=r("rcnY"),i=r("wU8J"),a=r("Iq15"),s=r("dWSS");function u(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var h=u.prototype;h.addData=function(t){var e=new o(t);this.dataList.push(e),this.dataCache=null},h.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},h.getModuleCount=function(){return this.moduleCount},h.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=n.getRSBlocks(t,this.errorCorrectLevel),r=new i,o=0,s=0;s<e.length;s++)o+=e[s].dataCount;for(s=0;s<this.dataList.length;s++){var u=this.dataList[s];r.put(u.mode,4),r.put(u.getLength(),a.getLengthInBits(u.mode,t)),u.write(r)}if(r.getLengthInBits()<=8*o)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},h.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=u.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},h.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4)},h.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=a.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},h.createMovieClip=function(t,e,r){var o=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,a=0;a<this.modules[n].length;a++){var s=1*a;this.modules[n][a]&&(o.beginFill(0,100),o.moveTo(s,i),o.lineTo(s+1,i),o.lineTo(s+1,i+1),o.lineTo(s,i+1),o.endFill())}return o},h.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},h.setupPositionAdjustPattern=function(){for(var t=a.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;i<=2;i++)for(var s=-2;s<=2;s++)this.modules[o+i][n+s]=-2==i||2==i||-2==s||2==s||0==i&&0==s}},h.setupTypeNumber=function(t){for(var e=a.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;r<18;r++){o=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o}},h.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=a.getBCHTypeInfo(r),n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(n=0;n<15;n++){i=!t&&1==(o>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i}this.modules[this.moduleCount-8][8]=!t},h.mapData=function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var u=0;u<2;u++)if(null==this.modules[o][s-u]){var h=!1;i<t.length&&(h=1==(t[i]>>>n&1)),a.getMask(e,o,s-u)&&(h=!h),this.modules[o][s-u]=h,-1==--n&&(i++,n=7)}if((o+=r)<0||this.moduleCount<=o){o-=r,r=-r;break}}},u.PAD0=236,u.PAD1=17,u.createData=function(t,e,r){for(var o=n.getRSBlocks(t,e),s=new i,h=0;h<r.length;h++){var l=r[h];s.put(l.mode,4),s.put(l.getLength(),a.getLengthInBits(l.mode,t)),l.write(s)}var f=0;for(h=0;h<o.length;h++)f+=o[h].dataCount;if(s.getLengthInBits()>8*f)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*f+")");for(s.getLengthInBits()+4<=8*f&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*f||(s.put(u.PAD0,8),s.getLengthInBits()>=8*f));)s.put(u.PAD1,8);return u.createBytes(s,o)},u.createBytes=function(t,e){for(var r=0,o=0,n=0,i=new Array(e.length),u=new Array(e.length),h=0;h<e.length;h++){var l=e[h].dataCount,f=e[h].totalCount-l;o=Math.max(o,l),n=Math.max(n,f),i[h]=new Array(l);for(var c=0;c<i[h].length;c++)i[h][c]=255&t.buffer[c+r];r+=l;var p=a.getErrorCorrectPolynomial(f),g=new s(i[h],p.getLength()-1).mod(p);u[h]=new Array(p.getLength()-1);for(c=0;c<u[h].length;c++){var d=c+g.getLength()-u[h].length;u[h][c]=d>=0?g.get(d):0}}var m=0;for(c=0;c<e.length;c++)m+=e[c].totalCount;var v=new Array(m),E=0;for(c=0;c<o;c++)for(h=0;h<e.length;h++)c<i[h].length&&(v[E++]=i[h][c]);for(c=0;c<n;c++)for(h=0;h<e.length;h++)c<u[h].length&&(v[E++]=u[h][c]);return v},t.exports=u},Iq15:function(t,e,r){var o=r("nVVt"),n=r("dWSS"),i=r("dQei"),a=0,s=1,u=2,h=3,l=4,f=5,c=6,p=7,g={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;g.getBCHDigit(e)-g.getBCHDigit(g.G15)>=0;)e^=g.G15<<g.getBCHDigit(e)-g.getBCHDigit(g.G15);return(t<<10|e)^g.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;g.getBCHDigit(e)-g.getBCHDigit(g.G18)>=0;)e^=g.G18<<g.getBCHDigit(e)-g.getBCHDigit(g.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return g.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case a:return(e+r)%2==0;case s:return e%2==0;case u:return r%3==0;case h:return(e+r)%3==0;case l:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case f:return e*r%2+e*r%3==0;case c:return(e*r%2+e*r%3)%2==0;case p:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new n([1],0),r=0;r<t;r++)e=e.multiply(new n([1,i.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),s=-1;s<=1;s++)if(!(o+s<0||e<=o+s))for(var u=-1;u<=1;u++)n+u<0||e<=n+u||0==s&&0==u||a==t.isDark(o+s,n+u)&&i++;i>5&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++){var h=0;t.isDark(o,n)&&h++,t.isDark(o+1,n)&&h++,t.isDark(o,n+1)&&h++,t.isDark(o+1,n+1)&&h++,0!=h&&4!=h||(r+=3)}for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);var l=0;for(n=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&l++;return r+=10*(Math.abs(100*l/e/e-50)/5)}};t.exports=g},Kj8B:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/QrCard",function(){var t=r("1thn");return{page:t.default||t}}])},YFqc:function(t,e,r){t.exports=r("cTJO")},aRTE:function(t,e){t.exports={L:1,M:0,Q:3,H:2}},cTJO:function(t,e,r){"use strict";var o=r("KI45"),n=o(r("9Jkg")),i=o(r("iZP3")),a=o(r("/HRN")),s=o(r("WaGi")),u=o(r("ZDA2")),h=o(r("/+P4")),l=o(r("N9n2")),f=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e},c=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var p=r("CxY0"),g=f(r("q1tI")),d=(c(r("lgD3")),f(r("20a2"))),m=r("Bu4q");var v=function(t){function e(){var t,r,o,n,s;return(0,a.default)(this,e),(t=(0,u.default)(this,(0,h.default)(e).apply(this,arguments))).formatUrls=(r=function(t,e){return{href:t&&"object"===(0,i.default)(t)?p.format(t):t,as:e&&"object"===(0,i.default)(e)?p.format(e):e}},o=null,n=null,s=null,function(t,e){if(t===o&&e===n)return s;var i=r(t,e);return o=t,n=e,s=i,i}),t.linkClicked=function(e){var r=e.currentTarget,o=r.nodeName,n=r.target;if("A"!==o||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),a=i.href,s=i.as;if(function(t){var e=p.parse(t,!1,!0),r=p.parse(m.getLocationOrigin(),!1,!0);return!e.host||e.protocol===r.protocol&&e.host===r.host}(a)){var u=window.location.pathname;a=p.resolve(u,a),s=s?p.resolve(u,s):a,e.preventDefault();var h=t.props.scroll;null==h&&(h=s.indexOf("#")<0),d.default[t.props.replace?"replace":"push"](a,s,{shallow:t.props.shallow}).then(function(t){t&&h&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){t.props.onError&&t.props.onError(e)})}}},t}return(0,l.default)(e,t),(0,s.default)(e,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(t){(0,n.default)(this.props.href)!==(0,n.default)(t.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,r=p.resolve(t,e);d.default.prefetch(r)}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,n=r.as;"string"==typeof e&&(e=g.default.createElement("a",null,e));var i=g.Children.only(e),a={onClick:function(e){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=n||o),a.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=d.Router._rewriteUrlForNextExport(a.href)),g.default.cloneElement(i,a)}}]),e}(g.Component);e.default=v},dQei:function(t,e){for(var r={glog:function(t){if(t<1)throw new Error("glog("+t+")");return r.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},o=0;o<8;o++)r.EXP_TABLE[o]=1<<o;for(o=8;o<256;o++)r.EXP_TABLE[o]=r.EXP_TABLE[o-4]^r.EXP_TABLE[o-5]^r.EXP_TABLE[o-6]^r.EXP_TABLE[o-8];for(o=0;o<255;o++)r.LOG_TABLE[r.EXP_TABLE[o]]=o;t.exports=r},dWSS:function(t,e,r){var o=r("dQei");function n(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}n.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<t.getLength();i++)e[r+i]^=o.gexp(o.glog(this.get(r))+o.glog(t.get(i)));return new n(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=o.glog(this.get(0))-o.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=o.gexp(o.glog(t.get(i))+e);return new n(r,0).mod(t)}},t.exports=n},f4xo:function(t,e,r){var o=r("nVVt");function n(t){this.mode=o.MODE_8BIT_BYTE,this.data=t}n.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},t.exports=n},gZfH:function(t,e,r){"use strict";var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}();var n,i=r("q1tI"),a=r("17x9"),s=r("i8i4"),u=r("tmER");n=/^0\.14/.test(i.version)?function(t){return t}:function(t){return s.findDOMNode(t)};var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.Component),o(e,[{key:"shouldComponentUpdate",value:function(t){var r=this;return Object.keys(e.propTypes).some(function(e){return r.props[e]!==t[e]})}},{key:"componentDidMount",value:function(){this.update()}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"utf16to8",value:function(t){var e,r,o,n;for(e="",o=t.length,r=0;r<o;r++)(n=t.charCodeAt(r))>=1&&n<=127?e+=t.charAt(r):n>2047?(e+=String.fromCharCode(224|n>>12&15),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|n>>0&63)):(e+=String.fromCharCode(192|n>>6&31),e+=String.fromCharCode(128|n>>0&63));return e}},{key:"update",value:function(){var t=this.utf16to8(this.props.value),e=u(t),r=n(this.refs.canvas),o=r.getContext("2d"),i=e.modules,a=this.props.size/i.length,s=this.props.size/i.length,h=(window.devicePixelRatio||1)/function(t){return t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1}(o);if(r.height=r.width=this.props.size*h,o.scale(h,h),i.forEach(function(t,e){t.forEach(function(t,r){o.fillStyle=t?this.props.fgColor:this.props.bgColor;var n=Math.ceil((r+1)*a)-Math.floor(r*a),i=Math.ceil((e+1)*s)-Math.floor(e*s);o.fillRect(Math.round(r*a),Math.round(e*s),n,i)},this)},this),this.props.logo){var l=this,f=this.props.size,c=document.createElement("img");c.src=this.props.logo,c.onload=function(){var t=l.props.logoWidth||.2*f,e=l.props.logoHeight||c.height/c.width*t,r=(f-t)/2,n=(f-e)/2;c.width=t,c.height=e,o.drawImage(c,r,n,t,e)}}}},{key:"render",value:function(){return i.createElement("canvas",{style:{height:this.props.size,width:this.props.size},height:this.props.size,width:this.props.size,ref:"canvas"})}}]),e}();h.propTypes={value:a.string.isRequired,size:a.number,bgColor:a.string,fgColor:a.string,logo:a.string,logoWidth:a.number,logoHeight:a.number},h.defaultProps={size:128,bgColor:"#FFFFFF",fgColor:"#000000",value:"http://facebook.github.io/react/"},t.exports=h},nVVt:function(t,e){t.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},rcnY:function(t,e,r){var o=r("aRTE");function n(t,e){this.totalCount=t,this.dataCount=e}n.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],n.getRSBlocks=function(t,e){var r=n.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,i=new Array,a=0;a<o;a++)for(var s=r[3*a+0],u=r[3*a+1],h=r[3*a+2],l=0;l<s;l++)i.push(new n(u,h));return i},n.getRsBlockTable=function(t,e){switch(e){case o.L:return n.RS_BLOCK_TABLE[4*(t-1)+0];case o.M:return n.RS_BLOCK_TABLE[4*(t-1)+1];case o.Q:return n.RS_BLOCK_TABLE[4*(t-1)+2];case o.H:return n.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},t.exports=n},tmER:function(t,e,r){var o=r("H38U"),n=r("aRTE"),i=function(t,e){var r=new o((e=e||{}).typeNumber||-1,e.errorCorrectLevel||n.H);return r.addData(t),r.make(),r};i.ErrorCorrectLevel=n,t.exports=i},wU8J:function(t,e){function r(){this.buffer=new Array,this.length=0}r.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=r}},[["Kj8B",1,0]]]);