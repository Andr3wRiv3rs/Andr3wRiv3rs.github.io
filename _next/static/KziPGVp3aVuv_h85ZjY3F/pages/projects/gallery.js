(window.webpackJsonp=window.webpackJsonp||[]).push([["a718"],{"0DhT":function(t,e,i){"use strict";i.r(e);var r=i("0iUn"),s=i("sLSF"),n=i("MI3g"),a=i("a7VT"),o=i("Tit0"),l=i("q1tI"),c=i.n(l),p=i("nOHt"),u=i("pdUI"),d=i.n(u),h=i("6qDU");e.default=Object(p.withRouter)(function(t){function e(t){var i;return Object(r.default)(this,e),(i=Object(n.default)(this,Object(a.default)(e).call(this,t))).state={index:0},i}return Object(o.default)(e,t),Object(s.default)(e,[{key:"selectIndex",value:function(t){this.setState({index:t});var e=document.querySelector(".".concat(d.a.selector));e&&(e.scrollLeft=e.children[t].offsetLeft-60)}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:d.a.gallery},c.a.createElement("div",{className:d.a.selector},h.a[this.props.router.query.id].screenshots.map(function(e){return c.a.createElement("img",{key:e,index:e,className:d.a.screenshot,src:"/static/projects/".concat(t.props.router.query.id,"/screenshots/").concat(e,".png"),onClick:function(){return t.selectIndex(e-1)}})})),c.a.createElement("div",{className:d.a.viewport},c.a.createElement("div",{style:{backgroundImage:"url(/static/projects/".concat(this.props.router.query.id,"/screenshots/").concat(h.a[this.props.router.query.id].screenshots[this.state.index],".png)")}}),c.a.createElement("img",{src:"/static/projects/".concat(this.props.router.query.id,"/screenshots/").concat(h.a[this.props.router.query.id].screenshots[this.state.index],".png")})))}}]),e}(c.a.Component))},"6qDU":function(t,e,i){"use strict";e.a={corgi_stack_3d:{title:"Corgi Stack 3D",id:"corgi_stack_3d",description:"\n            Sequel to [my entry](https://jams.gamejolt.io/corgsmas/games/corgi-stack/218872) for the [Corgsmas](https://jams.gamejolt.io/corgsmas/games) game jam, Corgi Stack 3D is a \n            reimagined puzzle-platformer which uses cute dogs as moving platforms.\n        ",screenshots:[1,2,3,4,5,6],handles:[{type:"twitter",value:"Andr3wRiv3rs"},{type:"instagram",value:"elgynjir"}],links:[{type:"gamejolt",url:"https://gamejolt.com/games/corgi-stack-3d/371101"},{type:"github",url:"https://github.com/Andr3wRiv3rs/Corgi-Stack-3D"},{type:"discord",url:"https://discord.gg/taqbtNn"}]},kismet:{title:"Kismet",id:"kismet",description:"An unannounced surreal horror project.",screenshots:[1,2,3,4,5],handles:[{type:"twitter",value:"Andr3wRiv3rs"},{type:"twitter",value:"PinkMayoMusic"},{type:"twitter",value:"AnonMaGames"},{type:"gamejolt",value:"anthonyme00"}],links:[]},yaaiia:{title:"YaaiiA",id:"yaaiia",description:'\n            Short for "Yet another alien invasion in Atlanta", \n            this was an entry for the [Dreamhack Atlanta 2018](https://jams.gamejolt.io/dhjam) game jam, developed in Unity.\n        ',screenshots:[1,2,3,4,5],handles:[{type:"twitter",value:"Andr3wRiv3rs"},{type:"gamejolt",value:"anthonyme00"},{type:"twitter",value:"twpunkster"}],links:[{type:"gamejolt",url:"https://gamejolt.com/games/yaaiia/377383"}]},devcord_challenges:{title:"Devcord Challenges",id:"devcord_challenges",description:"\n            A community driven coding challenge app, \n            built in Nuxt.js by myself for the Devcord community.\n        ",links:[{type:"devcord",url:"https://challenge.devcord.com"},{type:"discord",url:"https://discord.gg/EhTaURr"}]},css_only_chatroom:{title:"CSS Only Chatroom",id:"css_only_chatroom",description:"\n            An asynchronous chatroom with the frontend built in all HTML/CSS, \n            made for the very first Devcord Challenges challenge.\n        ",links:[{type:"github",url:"https://github.com/Andr3wRiv3rs/css-only-chatroom"}]},mere_mercy:{title:"Mere Mercy",id:"mere_mercy",description:"Mere Mercy is a Zombie Survival game for Android, built in Unity.",handles:[{type:"twitter",value:"TheAtheistSheep"},{type:"twitter",value:"Andr3wRiv3rs"},{type:"twitter",value:"DablTrabl2"},{type:"twitter",value:"MikeyBoyii"},{type:"instagram",value:"evanrossney"}],links:[]},malus:{title:"Malus",id:"malus",description:"\n            A UPnP portmapper, built using [my wrapper](https://www.npmjs.com/package/nat-upnp-wrapper) \n            for the [nat-upnp](https://www.npmjs.com/package/nat-upnp) module.\n        ",links:[{type:"github",url:"https://github.com/Andr3wRiv3rs/port-mapper"}]},twilightpunkster:{title:"Twilight Punkster Galaxy",id:"twilightpunkster",description:'\n            Worked on the MMORPG "Twilight Punkster Galaxy" \n            as a fullstack web developer, using Express and Vue.js.\n        ',links:[{type:"medium",url:"https://medium.com/@twpunkster/twilight-punkster-651cf3a52954"},{type:"twitter",url:"https://twitter.com/twpunkster"}]},stardust:{title:"Stardust",id:"stardust",description:"Briefly worked with [Stardust](https://www.stardust.gg/)'s blockchain technologies, building a client in Electron.",links:[],left:!0},cherry:{title:"Cherry",id:"cherry",description:"My chatbot built in Node.js with Discord.js. Cherry is capable of playing music, giving definitions, and automating color roles among other things.",links:[{type:"discord",url:"https://discordapp.com/api/oauth2/authorize?client_id=443491966576230400&permissions=8&scope=bot"},{type:"github",url:"https://github.com/Andr3wRiv3rs/Cherry"}],left:!0},worm_io:{title:"Untitled Worm I/O",id:"worm_io",description:"A Slither.io inspired project, utilizing cryptocurrency as a driving mechanic.",links:[{type:"github",url:"https://github.com/Andr3wRiv3rs/worm-io"}]},shh:{title:"Shh",id:"shh",description:"A Peer to peer encrypted chat client built in Electron with WebRTC and WebSockets.",links:[{type:"github",url:"https://github.com/Andr3wRiv3rs/Shh-Client"}],left:!0},bearmon:{title:"Bearmon",id:"bearmon",description:"An online multiplayer turn based RPG for the 2017 Bear Week jam on Game Jolt.",links:[{type:"gamejolt",url:"https://gamejolt.com/games/bearmon/276536"},{type:"github",url:"https://github.com/Andr3wRiv3rs/bearmon-2017"}],left:!0}}},pHCN:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/gallery",function(){var t=i("0DhT");return{page:t.default||t}}])}},[["pHCN","5d41","9da1","ad9d"]]]);