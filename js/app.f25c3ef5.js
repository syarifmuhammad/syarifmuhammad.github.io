(function(t){function a(a){for(var s,n,l=a[0],r=a[1],c=a[2],u=0,p=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(a);while(p.length)p.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,l=1;l<e.length;l++){var r=e[l];0!==i[r]&&(s=!1)}s&&(o.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},i={app:0},o=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var d=r;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"00e4":function(t,a,e){},"03c0":function(t,a,e){t.exports=e.p+"img/1.81c805f5.webp"},"03ee":function(t,a,e){},"0531":function(t,a,e){},"097d":function(t,a,e){t.exports=e.p+"img/1.6c1a5694.png"},"0fea":function(t,a,e){},"11bb":function(t,a,e){},"12ba":function(t,a,e){"use strict";e("9d59")},"195d":function(t,a,e){},2134:function(t,a,e){"use strict";e("03ee")},"21bc":function(t,a,e){"use strict";e("0531")},"303f":function(t,a,e){t.exports=e.p+"img/3.b1315e82.png"},"32a7":function(t,a,e){},4503:function(t,a,e){t.exports=e.p+"img/2.dbcb23ea.webp"},"4b00":function(t,a,e){t.exports=e.p+"img/2.2da59ea3.png"},"4b69":function(t,a,e){"use strict";e("e118")},"56d7":function(t,a,e){"use strict";e.r(a);var s=e("2b0e"),i=function(){var t=this,a=t._self._c;return a("div",{class:{"text-dark":!t.nightMode,"text-light":t.nightMode},attrs:{id:"app"}},[a("Navbar",{attrs:{nightMode:t.nightMode},on:{scroll:t.scrollTo,nightMode:t.switchMode}}),a("div",{staticClass:"parent"},[a("Home",{attrs:{nightMode:t.nightMode}}),a("About",{attrs:{id:"about",nightMode:t.nightMode}}),a("Skills",{attrs:{id:"skills",nightMode:t.nightMode}}),a("Portfolio",{attrs:{id:"portfolio",nightMode:t.nightMode}}),a("Contact",{attrs:{id:"contact",nightMode:t.nightMode}}),a("Footer",{attrs:{nightMode:t.nightMode}})],1)],1)},o=[],n=(e("14d9"),function(){var t=this,a=t._self._c;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light fixed-top p-st",class:{"bg-light":!t.nightMode,"navbar-blur":t.navbarConfig.blur,"bg-dark2":t.nightMode}},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"},on:{click:function(a){return a.preventDefault(),t.$emit("scroll","home")}}},[a("Logo",{attrs:{nightMode:t.nightMode}})],1),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item mx-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/about"},on:{click:function(a){return a.preventDefault(),t.$emit("scroll","about")}}},[t._v("About")])]),a("li",{staticClass:"nav-item mx-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/skills"},on:{click:function(a){return a.preventDefault(),t.$emit("scroll","skills")}}},[t._v("Skills")])]),a("li",{staticClass:"nav-item mx-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/portfolio"},on:{click:function(a){return a.preventDefault(),t.$emit("scroll","portfolio")}}},[t._v("Portfolio")])]),a("li",{staticClass:"nav-item mx-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/contact"},on:{click:function(a){return a.preventDefault(),t.$emit("scroll","contact")}}},[t._v("Contact")])]),a("li",{staticClass:"nav-item ml-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.switchMode.apply(null,arguments)}}},[a("i",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.nightMode?"Light Mode":"Night Mode",expression:"nightMode ? 'Light Mode' : 'Night Mode'",modifiers:{bottom:!0}}],class:{"fas fa-moon":t.nightMode,"far fa-moon":!t.nightMode}})])])])])])])])}),l=[function(){var t=this,a=t._self._c;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticStyle:{color:"gray","font-size":"23px"}},[a("i",{staticClass:"fas fa-bars"})])])}],r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"logo-div"},[a("span",{staticClass:"logo-title-name",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v(t._s(t.name))]),a("span",{staticClass:"logo-title-dot pblue"},[t._v(t._s(t.dot))])])},c=[];let d={name:"Muhammad Syarif Hidayatullah",logo_name:"dayatsyarif",flat_picture:e("9f2c"),config:{use_cookies:!0,navbar:{blur:!1}},description:"Halo, saya Muhammad Syarif Hidayatullah, seorang web developer dengan pengalaman lebih dari 3 tahun dalam menggunakan Laravel sebagai backend dan Vue.js sebagai frontend untuk mengembangkan software. Saya suka melakukan riset tentang teknologi baru dan berusaha memahami serta mengevaluasi kelebihannya, sehingga saya dapat menentukan kapan teknologi tersebut layak digunakan.",links:{linkedin:"https://www.linkedin.com/in/m-syarif-hidayatullah-a45a27193/",github:"https://github.com/syarifmuhammad"},education:[{name:"INSTITUT TEKNOLOGI TELKOM SURABAYA",place:"Surabaya",date:"2020 - 2024",degree:"S1 Rekayasa Perangkat Lunak",gpa:"3.9/4.0",description:"",skills:["Software Engineering","Web Programming","Front-end developing","Back-end developing"]},{name:"SMKN 1 KOTABARU",place:"Kotabaru",date:"2017-2020",degree:"Rekayasa Perangkat Lunak",gpa:"-",description:"",skills:["Software Engineering","Web Programming","Front-end developing","Back-end developing"]}],experience:[{name:"CV COMPUTER MEDIA UTAMA",place:"Kotabaru",date:"2019 - Sekarang",position:"Fullstack Web Developer",description:"Menjadi seorang full stack engineer, mulai dari perencanaan, pembuatan, testing, hingga deployment di beberapa project yang diberikan ke CV Computer Media Utama",skills:["HTML5","CSS3","Bootstrap","JQuery","JavaSript","PHP","Laravel","VueJS"]},{name:"Student Staff SSC Kampus Telkom University Surabaya",place:"Surabaya",date:"2023 - 2024",position:"Fullstack Web Developer",description:"Pembuatan beberapa web layanan di kampus seperti e-learning, layanan mahasiswa, portfolio kampus telkom university surabaya",skills:["HTML5","CSS3","Bootstrap","JQuery","JavaSript","PHP","Laravel","VueJS","Moodle LMS","Wordpress"]},{name:"UKM Coder ITTelkom Surabaya",place:"Surabaya",date:"2021 - 2022",position:"Ketua Divisi Web Developer",description:"Memberikan materi mingguan terkait web development khususnya dengan bahasa pemrograman PHP dan Javascript",skills:["Javascript","Laravel","VueJS","NodeJS"]}],skills:[{title:"Language",info:["PHP","Javascript","Go","Java"],icon:"fa fa-code"},{title:"Front-end",info:["HTML5","CSS3","Javascript"],icon:"fa fa-cubes"},{title:"Framework",info:["Vue","Laravel","NodeJS","Bootstrap","Tailwind"],icon:"fas fa-laptop-code"}],portfolio_design:[],portfolio:[{name:"Tukarjual.com",pictures:[{img:e("03c0")},{img:e("4503")},{img:e("ff40")},{img:e("d9a6")}],technologies:["VueJS","Bootstrap","Laravel","MySQL","REST API","Google Maps API"],category:"Web App",date:"2021 - Sekarang",github:null,visit:"https://tukarjual.com",description:" Tukarjual.com adalah web app ecommerce, namun saat ini belum bisa dipergunakan karena dalam keadaan maintenance, untuk penambahan fitur setelah percobaan beberapa bulan sebelumnya "},{name:"SIPAKTUSARAH",pictures:[{img:e("ea4c")},{img:e("775d")},{img:e("303f")}],technologies:["VueJS","Laravel","MySQL","Bootstrap","PHPOffice/PHPWord"],category:"Web App",date:"Jun, 2022 - 6 Bulan",github:null,visit:"http://sipaktusarah.com",description:" Sistem Pelayanan Administrasi Kecamatan Tuntas di Desa dan Kelurahan : Untuk manajemen surat antar desa atau kelurahan dengan kecamatan "},{name:"Silankar",pictures:[{img:e("097d")}],technologies:["VueJS","Laravel","MySQL","Tailwind"],category:"Web App",date:"Jun, 2023 - 1 Bulan",github:null,visit:"http://silankar.com",description:" Sistem Penyelamatan Evakuasi Non Kebakaran "},{name:"Point Of Sales",pictures:[{img:e("98eb")},{img:e("4b00")},{img:e("a47a")},{img:e("6e48")}],technologies:["Java","Springboot","Thymeleaf","JPA","MySQL","JQuery"],category:"Web App",date:"Mar, 2022 - 21 hari",github:"https://github.com/syarifmuhammad/pointofsales.git",visit:null,description:" Aplikasi POS web based dengan java springboot untuk final project di Hackathon In BCA 2021 "}]};var u=d,p={name:"Logo",props:{nightMode:{type:Boolean}},data(){return{name:u.logo_name,dot:"."}}},h=p,g=(e("e03e"),e("2877")),m=Object(g["a"])(h,r,c,!1,null,"8d13128e",null),f=m.exports,b={name:"Navbar",props:{nightMode:{type:Boolean}},data(){return{navbarConfig:u.config.navbar,localNightMode:this.nightMode}},components:{Logo:f},methods:{switchMode(){this.localNightMode=!this.localNightMode,this.$emit("nightMode",this.localNightMode)}}},v=b,y=(e("8782"),Object(g["a"])(v,n,l,!1,null,"163e87aa",null)),k=y.exports,M=function(){var t=this,a=t._self._c;return a("div",{staticClass:"pt-5 p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[a("div",{staticClass:"container",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center"},[a("img",{attrs:{src:t.picture}})]),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5"},[a("span",{staticClass:"home-title",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Selamat datang di portfolio saya!")]),a("div",[a("p",{domProps:{innerHTML:t._s(t.description)}})]),a("div",{staticClass:"text-center pb-4"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"LinkedIn",expression:"'LinkedIn'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(a){return t.open("linkedin")}}},[a("i",{staticClass:"fab fa-linkedin"})]),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"GitHub",expression:"'GitHub'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(a){return t.open("github")}}},[a("i",{staticClass:"fab fa-github"})])])])])])])},_=[],C=function(){var t=this,a=t._self._c;return a("span",{staticClass:"wave"},[t._v("👋🏽npm ")])},w=[],x={name:"Wave"},S=x,T=(e("dff9"),Object(g["a"])(S,C,w,!1,null,"df85ed74",null)),j=T.exports,P={name:"Home",components:{Wave:j},props:{nightMode:{type:Boolean}},data(){return{picture:u.flat_picture,description:u.description,name:u.name,linkedin:u.links.linkedin,github:u.links.github,behance:u.links.behance,resume:u.links.resume}},methods:{open(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"behance":window.open(this.behance,"_blank");break;case"resume":window.open(this.resume,"_blank");break}}}},B=P,O=(e("71fa"),Object(g["a"])(B,M,_,!1,null,"68017d21",null)),L=O.exports,D=function(){var t=this,a=t._self._c;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Tentang Saya.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("Timeline",{attrs:{data:t.education,nightMode:t.nightMode}})],1),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("Timeline",{attrs:{data:t.experience,nightMode:t.nightMode}})],1)])])])},A=[],E=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"mx-3 mt-3 mb-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-bg-12 col-md-12 col-sm-12"},[a("p",{staticClass:"title1",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"1000"}},[t._v(" "+t._s(t.data.title)+" ")]),t._l(t.data.data,(function(e,s){return a("ul",{key:e.name,staticClass:"timeline m-0 pt-1",style:{"transition-delay":s/4.2+"s"},attrs:{"data-aos":"fade-up","data-offset":"10","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"500"}},[a("li",{staticClass:"m-0 pb-2"},[a("div",[a("div",{staticClass:"px-2 title2"},[t._v(t._s(e.name)+", "+t._s(e.place))]),a("div",{staticClass:"px-2 title3"},[t._v(" "+t._s(e.degree||e.position)+" "+t._s(e.gpa?"("+e.gpa+")":"")+" ")]),a("div",{staticClass:"px-2 date"},[t._v(t._s(e.date))]),a("div",{staticClass:"px-2 pb-2 pt-2",staticStyle:{"text-align":"justify"}},[t._v(" "+t._s(e.description)+" ")]),t._l(e.skills,(function(e){return a("span",{key:e,staticClass:"mx-2 badge p-2 mb-2",class:{"bg-dark2":t.nightMode}},[t._v(t._s(e))])})),a("p",{staticClass:"m-2"})],2)])])}))],2)])])])},I=[],N={name:"Timeline",props:{data:{type:Object},nightMode:{type:Boolean}}},H=N,J=(e("2134"),Object(g["a"])(H,E,I,!1,null,"72b2c29a",null)),$=J.exports,V={name:"About",components:{Timeline:$},props:{nightMode:{type:Boolean}},data(){return{education:{title:"education",data:u.education},experience:{title:"experiences",data:u.experience}}}},F=V,K=(e("cef1"),Object(g["a"])(F,D,A,!1,null,"da4aebb6",null)),W=K.exports,G=function(){var t=this,a=t._self._c;return a("div",{staticClass:"p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[a("div",{staticClass:"container py-4"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Skills.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("br"),a("div",{staticClass:"row"},t._l(t.skills,(function(e,s){return a("div",{key:e.title,staticClass:"col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4",style:{"transition-delay":s/4.2+"s"},attrs:{"data-aos":"fade-up","data-aos-offset":"10","data-aos-delay":"30","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[a("div",{staticClass:"bg-div"},[a("i",{class:e.icon})]),a("div",{staticClass:"title2 pt-2"},[t._v(t._s(e.title))]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("span",{staticClass:"title3"},[t._v(t._s(e.info.join(", ")))])])})),0)])])},Q=[],U={name:"Skills",props:{nightMode:{type:Boolean}},data(){return{skills:u.skills}}},R=U,z=(e("a4da"),Object(g["a"])(R,G,Q,!1,null,"c71fcfc2",null)),q=z.exports,Y=function(){var t=this,a=t._self._c;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Portfolio.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("vue-tabs",{attrs:{activeTextColor:t.nightMode?"#dfdfdf":"#535A5E"}},[a("v-tab",{attrs:{title:"development"}},[a("br"),a("div",{staticClass:"row"},t._l(t.portfolio_info,(function(e,s){return a("div",{key:e.name,staticClass:"col-xl-4 col-bg-4 col-md-6 col-sm-12"},[a("Card",{style:{"transition-delay":s%3/4.2+"s"},attrs:{portfolio:e,"data-aos":"fade-up",nightMode:t.nightMode,"data-aos-offset":"100","data-aos-delay":"10","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"},on:{show:t.showModalFn}})],1)})),0),"show less"!==t.showBtn?a("div",{staticClass:"text-center py-3"},[a("button",{staticClass:"btn",on:{click:function(a){return a.preventDefault(),t.showMore.apply(null,arguments)}}},[t._v(t._s(t.showBtn))])]):t._e()])],1)],1),a("transition",{attrs:{name:"modal"}},[t.showModal?a("Modal",{attrs:{showModal:t.showModal,portfolio:t.modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1),a("transition",{attrs:{name:"modal"}},[t.showDesignModal?a("DesignModal",{attrs:{showModal:t.showDesignModal,portfolio:t.design_modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1)],1)},X=[],Z=function(){var t=this,a=t._self._c;return a("div",{staticClass:"my-3 mx-3"},[a("div",{staticClass:"card smcard",class:{"pcard-dark":t.nightMode,pcard:!t.nightMode,"bg-dark3":t.nightMode}},[a("div",{staticStyle:{height:"180px"}},[a("img",{staticClass:"card-img-top",attrs:{src:t.portfolio.pictures[0].img,alt:"Card image cap"}})]),a("div",{staticClass:"card-body pborder-top"},[a("h5",{staticClass:"title2"},[t._v(t._s(t.portfolio.name))]),a("div",[a("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),0),a("p",{staticClass:"title3 m-0 pb-2 pheight pt-1",domProps:{innerHTML:t._s(t.portfolio.description.length>100?t.portfolio.description.substring(0,105)+"...":t.portfolio.description)}})]),a("div",{staticClass:"text-center mt-2"},[a("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.showModal.apply(null,arguments)}}},[t._v(" read more ")]),t.portfolio.visit?a("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline ml-4",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.open(t.portfolio.visit)}}},[t._v(" visit website ")]):t._e()])])])])},tt=[],at={name:"Card",props:{portfolio:{type:Object},nightMode:{type:Boolean}},methods:{open(t){window.open(t,"_blank")},showModal(){this.$emit("show",this.portfolio)}}},et=at,st=(e("a5c4"),Object(g["a"])(et,Z,tt,!1,null,"181ed13a",null)),it=st.exports,ot=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container",class:{"bg-light":!t.nightMode,"bg-dark":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"title1 px-4 pt-3"},[a("span",[a("a",{class:{"text-light":t.nightMode},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.open(t.portfolio.visit)}}},[t._v(t._s(t.portfolio.name))])]),a("a",{staticClass:"pull-right",staticStyle:{"font-size":"18px"},on:{click:function(a){return t.$emit("close")}}},[a("i",{staticClass:"fas fa-times"})]),a("hr",{staticClass:"my-1",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}})]),a("div",{staticClass:"modal-body my-0 pb-0 px-4 pt-0"},[a("div",{staticClass:"mb-2 date",class:{"text-light":t.nightMode,pbgray:t.nightMode}},[a("span",[t._v(t._s(t.portfolio.date)+" • "+t._s(t.portfolio.category))])]),a("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),0),a("div",{staticStyle:{"text-align":"justify"}},[a("span",{domProps:{innerHTML:t._s(t.portfolio.description)}})]),a("hr"),a("div",[a("Gallery",{attrs:{images:t.portfolio.pictures}})],1)]),a("div",{staticClass:"text-center pb-3"},[a("hr",{staticClass:"mt-1 mb-3",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}}),a("button",{staticClass:"btn w-25 mr-3",on:{click:function(a){return t.open(t.portfolio.github)}}},[t._v(" github ")]),a("button",{staticClass:"btn w-25",on:{click:function(a){return t.$emit("close")}}},[t._v("close")])])])])])])},nt=[],lt=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"carousel slide",staticStyle:{height:"200px"},attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner"},t._l(t.images,(function(t){return a("div",{key:t,staticClass:"carousel-item active"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://picsum.photos/id/237/200/300",alt:"Second slide"}})])})),0),t._m(0),t._m(1)])])},rt=[function(){var t=this,a=t._self._c;return a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,a=t._self._c;return a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])}],ct={name:"Carousel",props:{images:{type:Array},name:{type:String}},mounted(){}},dt=ct,ut=Object(g["a"])(dt,lt,rt,!1,null,"2682f26c",null),pt=ut.exports,ht=function(){var t=this,a=t._self._c;return a("div",{staticStyle:{overflow:"auto"}},[a("div",{staticClass:"prow"},t._l(t.images,(function(e,s){return a("div",{key:e.title,staticClass:"pcolumn",class:{flex:t.design?"100%":"50%","-ms-flex":t.design?"100%":"50%","max-width":t.design?"100%":"50%"}},[a("img",{staticClass:"g-img",staticStyle:{width:"100%"},attrs:{src:e.img,id:"gi"+s},on:{click:function(a){return t.showImg(s)}}}),a("div",{staticClass:"mt-1"},[a("p",{staticStyle:{"font-weight":"500"}},[t._v(t._s(e.title))])])])})),0),t._m(0)])},gt=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"modal",attrs:{id:"myModal"}},[a("span",{staticClass:"close"},[t._v("×")]),a("img",{staticClass:"modal-content",attrs:{id:"modalImg"}}),a("div",{attrs:{id:"caption"}})])}],mt={name:"Gallery",props:{images:{type:Array},design:{type:Boolean}},data(){return{modal:null}},methods:{showImg(t){var a=document.getElementById("myModal"),e=document.getElementById("gi"+t),s=document.getElementById("modalImg");a.style.display="block",s.src=e.src;var i=document.getElementsByClassName("close")[0];i.onclick=function(){s.classList.add("closeModal"),a.classList.add("modalClose"),setTimeout(()=>{a.style.display="none",s.classList.remove("closeModal"),a.classList.remove("modalClose")},200)}}}},ft=mt,bt=(e("6c8c"),Object(g["a"])(ft,ht,gt,!1,null,"0382ed62",null)),vt=bt.exports,yt={name:"Modal",components:{Carousel:pt,Gallery:vt},props:{showModal:{type:Boolean},portfolio:{type:Object},nightMode:{type:Boolean}},created(){document.getElementsByTagName("body")[0].classList.add("modal-open")},methods:{open(t){window.open(t,"_blank")}}},kt=yt,Mt=(e("12ba"),Object(g["a"])(kt,ot,nt,!1,null,"463bb61e",null)),_t=Mt.exports,Ct=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container",class:{"bg-light":!t.nightMode,"bg-dark":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"title1 px-4 pt-3"},[a("span",{class:{"text-light":t.nightMode}},[t._v(t._s(t.portfolio.name))]),a("a",{staticClass:"pull-right",staticStyle:{"font-size":"18px"},on:{click:function(a){return t.$emit("close")}}},[a("i",{staticClass:"fas fa-times"})]),a("hr",{staticClass:"my-1",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}})]),a("div",{staticClass:"modal-body my-0 pb-0 px-4 pt-0"},[a("div",{staticClass:"mb-2 date",class:{"text-light":t.nightMode,pbgray:t.nightMode}},[a("span",[t._v(t._s(t.portfolio.date)+" • "+t._s(t.portfolio.category))])]),a("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),0),a("div",{staticStyle:{"text-align":"justify"}},[a("span",{domProps:{innerHTML:t._s(t.portfolio.description)}})]),a("hr"),a("div",[a("Gallery",{attrs:{images:t.portfolio.pictures,design:!0}})],1)]),a("div",{staticClass:"text-center pb-3"},[a("hr",{staticClass:"mt-1 mb-3",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}}),a("button",{staticClass:"btn w-25",on:{click:function(a){return t.$emit("close")}}},[t._v("close")])])])])])])},wt=[],xt={name:"Modal",components:{Carousel:pt,Gallery:vt},props:{showModal:{type:Boolean},portfolio:{type:Object},nightMode:{type:Boolean}},created(){document.getElementsByTagName("body")[0].classList.add("modal-open")},methods:{open(t){window.open(t,"_blank")}}},St=xt,Tt=(e("688f"),Object(g["a"])(St,Ct,wt,!1,null,"921496ce",null)),jt=Tt.exports,Pt=e("4d48"),Bt=(e("4bf4"),e("b1b5")),Ot=(e("2ec8"),{name:"Portfolio",components:{Card:it,Modal:_t,VueTabs:Pt["VueTabs"],VTab:Pt["VTab"],VueperSlides:Bt["VueperSlides"],VueperSlide:Bt["VueperSlide"],DesignModal:jt},props:{nightMode:{type:Boolean}},data(){return{all_info:u.portfolio,desgin_info:u.portfolio_design,portfolio_info:[],showModal:!1,showDesignModal:!1,modal_info:{},design_modal_info:{},number:3,showBtn:"show more",shower:0,data:['<div class="example-slide">Slide 1</div>','<div class="example-slide">Slide 2</div>','<div class="example-slide">Slide 3</div>']}},created(){for(var t=0;t<this.number;t++)this.portfolio_info.push(this.all_info[t])},watch:{number(){this.portfolio_info=[];for(var t=0;t<this.number;t++)this.portfolio_info.push(this.all_info[t])}},methods:{next(){this.$refs.flickity.next()},previous(){this.$refs.flickity.previous()},closeModal(){this.showModal=!1,this.showDesignModal=!1,document.getElementsByTagName("body")[0].classList.remove("modal-open")},showModalFn(t){this.modal_info=t,this.showModal=!0},showDesignModalFn(t){this.design_modal_info=t,this.showDesignModal=!0},showMore(){if(this.number!=this.all_info.length&&(this.number+=3,window.scrollBy({top:document.getElementsByClassName("smcard")[0].clientHeight,behavior:"smooth"}),this.number>this.all_info.length&&(this.number=this.all_info.length)),this.number==this.all_info.length&&0==this.shower)this.shower=1,this.showBtn="show less";else if(this.number==this.all_info.length&&1==this.shower){var t=document.getElementById("portfolio").offsetTop;window.scrollTo({top:t+5,behavior:"smooth"}),this.shower=0,this.number=3,this.showBtn="show more"}}}}),Lt=Ot,Dt=(e("4b69"),Object(g["a"])(Lt,Y,X,!1,null,"533715fe",null)),At=Dt.exports,Et=function(){var t=this,a=t._self._c;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Contact.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("br"),a("div",{staticClass:"text-center"},[a("div",{staticClass:"mb-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.2s"},attrs:{type:"text",name:"user_name",placeholder:"name"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),a("div",{staticClass:"my-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.4s"},attrs:{type:"email",name:"user_email",placeholder:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),a("div",{staticClass:"my-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.6s"},attrs:{name:"message",placeholder:"message",rows:"4"},domProps:{value:t.text},on:{input:function(a){a.target.composing||(t.text=a.target.value)}}})]),a("button",{staticClass:"mt-1 btn mb-3",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000","data-aos-offset":"50"},on:{click:function(a){return a.preventDefault(),t.sendEmail.apply(null,arguments)}}},[t._v(" Send ")])]),a("Snackbar",{attrs:{showSnackbar:t.showSnackbar,snackbarMessage:t.snackbarMessage,snackbarColor:t.snackbarColor},on:{close:t.closeSnackbar}})],1)])},It=[];let Nt={emailjs:{serviceID:"service_glq2rze",templateID:"template_h7hjnio",userID:"RTFKQwlbFeQjctsQ9"}};var Ht=Nt,Jt=e("0f91"),$t=e.n(Jt),Vt=function(){var t=this,a=t._self._c;return a("div",[a("div",{class:{show:t.showSnackbar},style:{"background-color":t.snackbarColor},attrs:{id:"snackbar"}},[t._v(" "+t._s(t.snackbarMessage)+" ")])])},Ft=[],Kt={name:"Snackbar",props:{showSnackbar:{type:Boolean},snackbarMessage:{type:String},snackbarColor:{type:String}},watch:{showSnackbar(t){t&&setTimeout(()=>{this.$emit("close",!1)},1900)}}},Wt=Kt,Gt=(e("868c"),Object(g["a"])(Wt,Vt,Ft,!1,null,"13e93b43",null)),Qt=Gt.exports,Ut={name:"Contact",components:{Snackbar:Qt},props:{nightMode:{type:Boolean}},data(){return{email:"",name:"",text:"",showSnackbar:!1,snackbarMessage:"",snackbarColor:""}},methods:{closeSnackbar(t){t||setTimeout(()=>{this.showSnackbar=t},1e3)},sendEmail(){if(this.email&&this.name&&this.text){var t={user_email:this.email,from_name:this.name,message_html:this.text,to_name:"M. Syarif Hidayatullah"};$t.a.send(Ht.emailjs.serviceID,Ht.emailjs.templateID,t,Ht.emailjs.userID).then(t=>{this.showSnackbar=!0,this.snackbarMessage="Thanks! Message recieved.",this.snackbarColor="#1aa260",this.email="",this.text="",this.name=""},t=>{this.showSnackbar=!0,this.snackbarMessage="Oops! Something went wrong.",this.snackbarColor="#64808E"})}else this.showSnackbar=!0,this.snackbarMessage="Please all the fields",this.snackbarColor="#64808E"}}},Rt=Ut,zt=(e("a770"),Object(g["a"])(Rt,Et,It,!1,null,"5457c16e",null)),qt=zt.exports,Yt=function(){var t=this,a=t._self._c;return a("div",{staticClass:"bg-secondary"},[a("div",{staticClass:"container py-3"},[a("div",{staticClass:"row pt-1 align-items-center"},[t._m(0),a("div",{staticClass:"col-xl-4 col-bg-4 col-md-12 col-sm-12 button-sosmed"},[a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(a){return t.open("linkedin")}}},[a("i",{staticClass:"fab fa-linkedin"})]),a("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(a){return t.open("github")}}},[a("i",{staticClass:"fab fa-github"})])])]),t._m(1)])])])},Xt=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-xl-4 col-bg-4 col-md-12 col-sm-12 pbelow",staticStyle:{color:"white"}},[a("span",[t._v("© 2023 Copyright: "),a("a",{staticStyle:{color:"aqua"},attrs:{href:"https://github.com/syarifmuhammad"}},[t._v("Dayatsyarif")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-xl-4 col-bg-4 col-md-12 col-sm-12 pbelow",staticStyle:{color:"white","text-align":"end"}},[a("span",[t._v("Thanks to "),a("a",{staticStyle:{color:"aqua"},attrs:{href:"https://github.com/mahy209/vuejs-portofolio.git"}},[t._v("Mahy Mohab")])])])}],Zt={name:"Footer",data(){return{linkedin:u.links.linkedin,github:u.links.github,behance:u.links.behance,resume:u.links.resume}},methods:{open(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"behance":window.open(this.behance,"_blank");break;case"resume":window.open(this.resume,"_blank");break}}}},ta=Zt,aa=(e("f927"),Object(g["a"])(ta,Yt,Xt,!1,null,"635e648c",null)),ea=aa.exports,sa={name:"App",components:{Navbar:k,Home:L,About:W,Skills:q,Portfolio:At,Contact:qt,Footer:ea},data(){return{nightMode:!1,config:u.config}},created(){this.config.use_cookies&&(this.nightMode="true"===this.$cookie.get("nightMode"))},mounted(){["about","contact","skills","portfolio"].forEach(t=>{if(window.location.href.includes(t)){var a=document.getElementById(t).offsetTop;window.scrollTo({top:a-35,behavior:"smooth"})}})},methods:{switchMode(t){this.config.use_cookies&&this.$cookie.set("nightMode",t),this.nightMode=t},scrollTo(t){if("home"==t)this.$router.push("/").catch(()=>{}),window.scrollTo({top:-80,behavior:"smooth"});else{var a=document.getElementById(t).offsetTop;window.scrollTo({top:a-35,behavior:"smooth"}),this.$router.history.current.path!=="/"+t&&this.$router.push("/"+t)}}}},ia=sa,oa=(e("21bc"),Object(g["a"])(ia,i,o,!1,null,null,null)),na=oa.exports,la=e("f5af"),ra=e.n(la),ca=(e("e829"),e("b3b5")),da=e("f13c"),ua=e.n(da),pa=e("8c4f"),ha=e("e37d"),ga=e("00e7");s["a"].use(ha["a"]),s["a"].use(pa["a"]),s["a"].use(ua.a),s["a"].use(ga),s["a"].use(ca["a"]),s["a"].config.productionTip=!1;const ma=[{path:"/"}],fa=new pa["a"]({mode:"history",routes:ma});new s["a"]({created(){ra.a.init()},router:fa,render:t=>t(na)}).$mount("#app")},"688f":function(t,a,e){"use strict";e("8317")},6998:function(t,a,e){},"6c8c":function(t,a,e){"use strict";e("a7cc")},"6d39":function(t,a,e){},"6e48":function(t,a,e){t.exports=e.p+"img/4.5313f2f4.jpg"},"71fa":function(t,a,e){"use strict";e("11bb")},"775d":function(t,a,e){t.exports=e.p+"img/2.d619cce8.png"},"795e":function(t,a,e){},8317:function(t,a,e){},"868c":function(t,a,e){"use strict";e("6998")},8782:function(t,a,e){"use strict";e("00e4")},"98eb":function(t,a,e){t.exports=e.p+"img/1.c91dd159.png"},"9d59":function(t,a,e){},"9f2c":function(t,a,e){t.exports=e.p+"img/me.c31d6e27.png"},a47a:function(t,a,e){t.exports=e.p+"img/3.6e0ac63e.png"},a4da:function(t,a,e){"use strict";e("ef01")},a5c4:function(t,a,e){"use strict";e("d33a")},a770:function(t,a,e){"use strict";e("32a7")},a7cc:function(t,a,e){},cef1:function(t,a,e){"use strict";e("195d")},d33a:function(t,a,e){},d9a6:function(t,a,e){t.exports=e.p+"img/4.1fabd1c1.webp"},dff9:function(t,a,e){"use strict";e("0fea")},e03e:function(t,a,e){"use strict";e("6d39")},e118:function(t,a,e){},ea4c:function(t,a,e){t.exports=e.p+"img/1.fecaace7.png"},ef01:function(t,a,e){},f927:function(t,a,e){"use strict";e("795e")},ff40:function(t,a,e){t.exports=e.p+"img/3.cdb74eb1.webp"}});
//# sourceMappingURL=app.f25c3ef5.js.map