(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),s=a.n(c),i=(a(63),a(6)),o=a.n(i),l=a(13),m=a(8),u=a(9),p=a.n(u),h=a(24),d=a.n(h),v=(a(65),a(23)),f=function(){return r.a.createElement(d.a,{bg:"light",expand:"sm"},r.a.createElement(v.b,{to:"/"},r.a.createElement(d.a.Brand,{className:"brand",href:"/",onClick:function(){return window.location.reload()}},"Partify")),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(v.b,{to:"/about"},r.a.createElement(p.a.Link,{href:"/about"},"About Us")),r.a.createElement(p.a.Link,{href:"https://github.com/KenanRustamov/Partify"},r.a.createElement("a",{href:"https://github.com/KenanRustamov/Partify"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))))))},E=(a(45),a(12)),w=a.n(E),g=a(21),b=a.n(g),y=a(110),k=function(e){var t=e.handleUserData,a=Object(n.useState)(""),c=Object(m.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object(m.a)(o,2),u=l[0],p=l[1],h=Object(n.useState)(!0),d=Object(m.a)(h,2);d[0],d[1];return r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault(),t({playlistName:s,username:u}),i(""),p("")}},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(w.a.Group,{className:"padding-top-md color-black col-md-8"},r.a.createElement(y.a,{className:"color-black"},"Enter Playlist Name:"),r.a.createElement(w.a.Control,{type:"text",placeholder:"Playlist Name",value:s,onChange:function(e){return i(e.target.value)},required:!0}))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(w.a.Group,{className:"color-black col-md-8 text-md"},r.a.createElement("div",{className:"center"},r.a.createElement(b.a,{type:"submit",className:"btn btn-block margin-top-sm"},"Submit")))))},x=a(57),A=(a(100),a(28)),j=a.n(A);a(101);function S(){return r.a.createElement("div",{className:"center padding-top-md"},r.a.createElement("div",{className:"title"},"Hold tight! Your playlist is being created."),r.a.createElement("div",{className:"lds-roller padding-top-md color-main"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}var N=a(51),C=a.n(N),B=function(e){var t=e.token,a=e.currentUser,c=e.spotifyAPIWrapper,s=e.playlistName,i=Object(n.useState)([]),u=Object(m.a)(i,2),p=u[0],h=u[1],d=Object(n.useState)(""),v=Object(m.a)(d,2),f=v[0],E=v[1],g=Object(n.useState)([]),y=Object(m.a)(g,2),k=y[0],A=y[1],N=Object(n.useState)(""),B=Object(m.a)(N,2),O=B[0],R=B[1],I=Object(n.useState)(!1),P=Object(m.a)(I,2),T=P[0],z=P[1],Q=Object(n.useState)(!1),G=Object(m.a)(Q,2),J=G[0],U=G[1],L=Object(n.useState)(),M=Object(m.a)(L,2),D=M[0],K=M[1],Z=Object(n.useState)("Party"),W=Object(m.a)(Z,2),Y=W[0],F=W[1],V=function(){var e=Object(l.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),f){e.next=4;break}return R("Please fill out input field"),e.abrupt("return");case 4:return e.next=6,H(f);case 6:a=e.sent,X(a)&&(h(p.concat(f)),A([].concat(Object(x.a)(k),[a])),E(""));case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(o.a.mark(function e(a){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/users/".concat(a),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:return n=e.sent,e.next=5,n.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),X=function(e){if("error"in e)return R(e.error.message),!1;var t=e.id;return p.includes(t)||a===t?(R("Friend already added to playlist"),!1):(R(""),!0)},_=function(){var e=Object(l.a)(o.a.mark(function e(t){var n,r,i,l,m,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),z(!0),n=!0,r=!1,i=void 0,e.prev=5,l=p[Symbol.iterator]();case 7:if(n=(m=l.next()).done){e.next=14;break}return u=m.value,e.next=11,c.addUserSongs(u);case 11:n=!0,e.next=7;break;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(5),r=!0,i=e.t0;case 20:e.prev=20,e.prev=21,n||null==l.return||l.return();case 23:if(e.prev=23,!r){e.next=26;break}throw i;case 26:return e.finish(23);case 27:return e.finish(20);case 28:return e.next=30,c.addUserSongs(a);case 30:return e.t1=K,e.next=33,c.createPlaylist(a,s,Y);case 33:e.t2=e.sent,(0,e.t1)(e.t2),U(!0);case 36:case"end":return e.stop()}},e,null,[[5,16,20,28],[21,,23,27]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(w.a,{onSubmit:V},r.a.createElement("div",{className:"row justify-content-center"},T?J?r.a.createElement("div",null,r.a.createElement("div",{className:"title color-black"},function(){var e=D.external_urls.spotify,t=D.images[1]?D.images[1].url:null,a=D.name;return r.a.createElement("div",{className:"playlist"},r.a.createElement("div",{className:"mt-5 playlistImage"},r.a.createElement(C.a,{src:t,rounded:!0,onClick:function(){window.location.href=e},alt:"Playlist Image"})),r.a.createElement("a",{href:e,className:"color-main main-hover text-thicc playlistText"},a))}(),r.a.createElement(b.a,{className:"btn btn-primary btn-block margin-top-md",onClick:function(e){window.location.reload()}},"Create Another"))):r.a.createElement(S,null):r.a.createElement(w.a.Group,{className:"padding-top-md color-black col-md-8"},r.a.createElement(w.a.Label,{className:"font-weight-lt color-black"},"Enter Your Friends"),r.a.createElement(w.a.Control,{type:"text",placeholder:"Friend's Spotify Username",onChange:function(e){return E(e.target.value)},value:f}),O?r.a.createElement(w.a.Text,{className:"text-muted form-error"},O):r.a.createElement(w.a.Text,{className:"text-muted form-error"}),r.a.createElement(w.a.Label,{className:"font-weight-lt color-black pt-4"},"Select Your Playlist Type"),r.a.createElement(w.a.Control,{as:"select",onChange:function(e){return t=e.target.value,void F(t);var t}},r.a.createElement("option",null,"Party"),r.a.createElement("option",null,"Chill"),r.a.createElement("option",null,"Discover")),r.a.createElement("div",{className:"row center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(b.a,{type:"submit",className:"btn btn-primary btn-block margin-top-md"},"Add Another")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(b.a,{className:"btn btn-success btn-block margin-top-md",onClick:function(e){return _(e)}},"Create Playlist"))),function(){var e=[],t=!0,a=!1,n=void 0;try{for(var c,s=k[Symbol.iterator]();!(t=(c=s.next()).done);t=!0){var i=c.value,o=i.images.length?i.images[0].url:j.a;e.push(r.a.createElement("div",{className:"col-12 col-md-4 col-lg-3 center margin-top-sm",key:i.id},r.a.createElement("img",{src:o,className:"profile-sm"}),r.a.createElement("h1",{className:"title text-sm margin-top-xs color-black"},i.display_name)))}}catch(l){a=!0,n=l}finally{try{t||null==s.return||s.return()}finally{if(a)throw n}}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},e))}()))))},O=(a(102),function(e){var t=e.user,a=e.playlistName,n=t.images.length?t.images[0].url:j.a;return r.a.createElement("div",{className:"display-wrapper"},r.a.createElement("img",{src:n,className:"profile"}),r.a.createElement("div",{className:"margin-left-sm"},r.a.createElement("h1",{className:"title text-lg color-black pt-5"},"Making playlist ",r.a.createElement("span",{className:"text-thicc color-main"},a)," for ",r.a.createElement("span",{className:"text-thicc color-main"},t.display_name))))});function R(){return r.a.createElement("div",null,r.a.createElement("div",{className:"center buttonWrapper"},r.a.createElement("a",{href:"".concat("https://accounts.spotify.com/authorize?","client_id=").concat("acdd403ce33c48ea83e77b0f86a0d40f","&redirect_uri=").concat("https://partify-us.com/","&scope=").concat(["user-read-email, playlist-modify-public"].join("%20"),"&response_type=token"),type:"submit",className:"btn margin-top-sm spotifyButton"},"Spotify Login")))}var I=a(52),P=a(53),T=function(){function e(t){Object(I.a)(this,e),this.token=void 0,this.songs=void 0,this.recommendations=void 0,this.token=t,this.songs=[],this.recommendations=[]}return Object(P.a)(e,[{key:"getUserPlaylists",value:function(){var e=Object(l.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/users/".concat(t,"/playlists"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)}});case 2:return a=e.sent,e.next=5,a.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getSongs",value:function(){return this.songs}},{key:"getPlaylistTracks",value:function(){var e=Object(l.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/playlists/".concat(t,"/tracks"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)}});case 2:return a=e.sent,e.next=5,a.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getRecommendations",value:function(){var e=Object(l.a)(o.a.mark(function e(t,a){var n,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.join(","),r="&market=US&limit=40",r+="Party"===a?"&min_popularity=70&min_danceability=0.6":"Chill"===a?"&max_energy=0.5":"&max_popularity=35",e.next=5,fetch("https://api.spotify.com/v1/recommendations?seed_tracks=".concat(n).concat(r),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)}});case 5:return c=e.sent,e.next=8,c.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"shuffle",value:function(e){e.sort(function(){return Math.random()-.5})}},{key:"addUserSongs",value:function(){var e=Object(l.a)(o.a.mark(function e(t){var a=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return 5,e.abrupt("return",this.getUserPlaylists(t).then(function(){var e=Object(l.a)(o.a.mark(function e(t){var n,r,c,s,i,l,m,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=t.items,c=!0,s=!1,i=void 0,e.prev=5,l=r[Symbol.iterator]();case 7:if(c=(m=l.next()).done){e.next=14;break}return u=m.value,e.next=11,a.getPlaylistTracks(u.id).then(function(e){var t=!0,a=!1,r=void 0;try{for(var c,s=e.items[Symbol.iterator]();!(t=(c=s.next()).done);t=!0){var i=c.value;null!==i.track&&n.push(i.track.id)}}catch(o){a=!0,r=o}finally{try{t||null==s.return||s.return()}finally{if(a)throw r}}});case 11:c=!0,e.next=7;break;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(5),s=!0,i=e.t0;case 20:e.prev=20,e.prev=21,c||null==l.return||l.return();case 23:if(e.prev=23,!s){e.next=26;break}throw i;case 26:return e.finish(23);case 27:return e.finish(20);case 28:return a.shuffle(n),a.songs=a.songs.concat(n.slice(0,5)),e.abrupt("return",n.slice(0,5));case 31:case"end":return e.stop()}},e,null,[[5,16,20,28],[21,,23,27]])}));return function(t){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"createPlaylist",value:function(){var e=Object(l.a)(o.a.mark(function e(t,a,n){var r,c,s,i,l,m,u,p,h,d,v,f,E=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=E.length>3&&void 0!==E[3]?E[3]:40,c=0;case 3:if(!(c<this.songs.length)){e.next=30;break}if(!(c+5<=this.songs.length)){e.next=27;break}return e.next=7,this.getRecommendations(this.songs.slice(c,c+5),n);case 7:for(s=e.sent,i=!0,l=!1,m=void 0,e.prev=11,u=s.tracks[Symbol.iterator]();!(i=(p=u.next()).done);i=!0)h=p.value,this.recommendations.push(h.uri);e.next=19;break;case 15:e.prev=15,e.t0=e.catch(11),l=!0,m=e.t0;case 19:e.prev=19,e.prev=20,i||null==u.return||u.return();case 22:if(e.prev=22,!l){e.next=25;break}throw m;case 25:return e.finish(22);case 26:return e.finish(19);case 27:c+=5,e.next=3;break;case 30:return this.shuffle(this.recommendations),this.recommendations=this.recommendations.slice(0,r),e.next=34,fetch("https://api.spotify.com/v1/users/".concat(t,"/playlists"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)},body:JSON.stringify({name:"".concat(a," by Partify")})});case 34:return d=e.sent,e.next=37,d.json();case 37:return d=e.sent,v=d.id,e.next=41,fetch("https://api.spotify.com/v1/playlists/".concat(v,"/tracks"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)},body:JSON.stringify({uris:this.recommendations})});case 41:return e.next=43,fetch("https://api.spotify.com/v1/playlists/".concat(v,"/"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)}});case 43:return f=e.sent,e.next=46,f.json();case 46:return f=e.sent,e.abrupt("return",f);case 48:case"end":return e.stop()}},e,this,[[11,15,19,27],[20,,22,26]])}));return function(t,a,n){return e.apply(this,arguments)}}()}]),e}(),z=a(18),Q=(a(103),a(10)),G=a.n(Q),J=a(56),U=a.n(J),L=a(54),M=a.n(L),D=a(55),K=a.n(D);var Z=function(){return r.a.createElement("div",{className:"aboutWrapper"},r.a.createElement(U.a,null,r.a.createElement(G.a,null,r.a.createElement(G.a.Img,{className:"about-profile",variant:"top",src:M.a}),r.a.createElement(G.a.Body,null,r.a.createElement(G.a.Title,null,"Kenan Rustamov"),r.a.createElement(G.a.Text,null,"Computer Science and Pre-Med Student at the University of Pittsburgh"),r.a.createElement(G.a.Text,null,"Former Software Development Intern at Bentley Systems Pittsburgh that couldn't find any good songs to play at parties.")),r.a.createElement(G.a.Footer,null,r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{href:"https://www.github.com/KenanRustamov"},r.a.createElement("a",{href:"https://www.github.com/KenanRustamov"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))),r.a.createElement(p.a.Link,{href:"https://www.linkedin.com/in/kenanrustamov"},r.a.createElement("a",{href:"https://www.linkedin.com/in/kenanrustamov"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"})))),r.a.createElement(p.a.Link,{href:"https://www.instagram.com/kenanrustamov1/"},r.a.createElement("a",{href:"https://www.instagram.com/kenanrustamov1/"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"})))),r.a.createElement(p.a.Link,{href:"https://www.twitter.com/Kenan_Rustamov"},r.a.createElement("a",{href:"https://www.twitter.com/Kenan_Rustamov"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"}))))))),r.a.createElement(G.a,null,r.a.createElement(G.a.Img,{className:"about-profile",variant:"top",src:K.a}),r.a.createElement(G.a.Body,null,r.a.createElement(G.a.Title,null,"Elijah Kajinic"),r.a.createElement(G.a.Text,null,"Computer Science Student at the University of Pittsburgh"),r.a.createElement(G.a.Text,null,"Former Software Development Intern at Honeywell who wanted better songs at parties.")),r.a.createElement(G.a.Footer,null,r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{href:"https://www.github.com/ELK75"},r.a.createElement("a",{href:"https://www.github.com/ELK75"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))),r.a.createElement(p.a.Link,{href:"https://www.linkedin.com/in/elijah-kajinic"},r.a.createElement("a",{href:"https://www.linkedin.com/in/elijah-kajinic"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"})))),r.a.createElement(p.a.Link,{href:"https://www.instagram.com/elikajinic/"},r.a.createElement("a",{href:"https://www.instagram.com/elikajinic/"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"})))),r.a.createElement(p.a.Link,{href:"https://www.twitter.com/elikajinic/"},r.a.createElement("a",{href:"https://www.twitter.com/elikajinic"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"})))))))))};var W=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(m.a)(s,2),u=i[0],p=i[1],h=Object(n.useState)(),d=Object(m.a)(h,2),E=d[0],w=d[1],g=Object(n.useState)(),b=Object(m.a)(g,2),y=b[0],x=b[1],A=function(){var e=Object(l.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/me",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(u)}});case 2:return t=e.sent,e.next=5,t.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){if(window.location.hash.includes("access_token")){var e=window.location.href.match(/\#(?:access_token)\=([\S\s]*?)\&/),t=null!==e?e[1]:"";p(t)}},[]),Object(n.useEffect)(function(){u&&(x(new T(u)),A().then(function(e){return w(e)}))},[u]);var j=function(e){var t=e.playlistName;c(t)},S=function(){return""!==a},N=window.location.href.includes("access_token");return r.a.createElement(v.a,null,r.a.createElement("head",null,r.a.createElement("link",{rel:"shortcut icon",href:"http://sstatic.net/stackoverflow/img/favicon.ico"})),r.a.createElement("div",{className:"App"},r.a.createElement(z.c,null,r.a.createElement(z.a,{path:"/",exact:!0,component:function(){return r.a.createElement("div",{className:N?"top-padding":"main-img"},r.a.createElement("div",{className:"container"},N?null:r.a.createElement("h1",{className:"title text-bg text-thicc"},"Partify"),r.a.createElement("div",{className:N?"form-container":""},S()?null:N?null:r.a.createElement("div",null,r.a.createElement("h2",{className:"title subtitle pt-3 color-black sub-header"},"Put the power of the party in the palm of your hand.")),r.a.createElement("div",{className:"center margin-top-md"},E&&N?r.a.createElement(O,{user:E,playlistName:a}):r.a.createElement(R,null)),E&&N?r.a.createElement("div",{id:"input",className:"container"},S()?r.a.createElement(B,{token:u,currentUser:E.id,spotifyAPIWrapper:y,playlistName:a}):r.a.createElement(k,{handleUserData:j})):null)))}}),r.a.createElement(z.a,{path:"/about",exact:!0,component:Z})),E&&N?r.a.createElement(f,null):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAAAAACIM/FCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAARySURBVHja7dzNleMgDAfwVJcCuFOA7xTgAri7AO4U4AK4U4AL4M5dO2923r79yCRGkpd/bFRA8n4xBBkkbveTxG1ABmRABmRABmRABmRABmRABmRABmRABmRABmRATghxYc30FSVHP70jxPhE/0Rd5zeDuJW+iRrt+0BcpmeR3HtAbKJXkewbQEKlHRHQISbTvtgmaMhUaXd4YIinllhhIW2Oj+FlMCGtDnXJrZdDW6IDcUS9JSoQW1kQymiQjZgRsSCB2OGRIBPfQdUCQTYBhDYciCdRBBSIqTKI1uC6dZzpX+8nIJAqhZCDgHixQ2lZvPX8y9J8JELIpODQeSRCSNSAkO0PKSqQtTtEZWR9rCXdIUEHQnNvSFaCpN4QJYfG2LoBTBGVsSWCeDVI7AsJapCtLySrQeg0ENcVoueg5SyQcBZIHhAFiFWE0ICADa0BGZBTQvKAgEHCWSDLWSDuLLnW/TSQTQ3SN41X2vpVOd6VQWY1yNQXonBeBbH5cL8nlLkuhcwoc1189FZBpogYsqo4yr07ROd1N/aH6GTAEwBEI9/SqKyRF9VkgGVdBSJ/JBpnoRr1Wqn/IqIDsdJCJwMCkb7x6tQ19q0yVSwG7Fr3q7WGqEEkx7swNY3CV0WgKlPRsghV9/sZhjfh9Xrg1BphWBLFDiW91iSGRLPTSrFZrFmi2jGm2oe49nMoN1Q2rCdVuRdRucV12ju8snLTm37T8a4Msi7aX3tAG3invuMjGvPdc0o+pBP8mKsSbPw2H14PujPhsDsf5vWBJXlz1PcdeQvH5GP+VXOe1+AO/C4JZI6fKW+VDxb38+nlOP9/yB8jJ4oGjPntZYZ/VcdNZS5Lum7/TtGYV3UwII/+XfkJx6N7CThXdTRD/OOWkcpMAf3j/+nij4WYUHSPBr5/1y/BHAYxz28L2ZrHtn2aYtYmSgPk5aUnrcPLv/zAcADE7WmnaskG7Z7N7+K0ITv3d/fn50vV3cDbBzH7X2L3/YZuf7vcavQgbdsKr9N017Sdt2+13QVpPcrJT2e9b92VTFoQxsZujd8s9VNk7NxHHQizTKPE+a8xYebI7CSdNSBG0MZaUljcZ4SQJJ9jFCCapaQHnqK8hFiCCCuGRAxIlEJMxYC8PMN+BfEEEl4I2VAgmwxiCSasCLLgQBYRZMOBbBKIIaAwAohHgngBZEWCrAJIQYIUPsQSVFg2xGNBPBsSsSCRDclYkMyGEFhwIRMaZGJCPBrEMyERDRKZkIwGyUxIRYNUHsQQXBgWxOFBHAvi8SCeBQl4kMCCZDxIZkE2PMjGghBgcCAWEWIZEIcIcQzIgghZGJCACAkMSEKEJAYkI0IyA4LoeJL/vhmE2iEOE+KuC1kwIUszJGBCQjMkYUJSMyRjQnIzpGBCSjOEQKMVYlEhphHiUCHuqpCACglXhSRUSGqEZFRIboRsqJCtEUKwcVGIxYXYJojDhbhrQhZcyNIECbiQcE1IwoWkJkjGheRrQgoupDRBCDgGZEAG5NKQH8VLpk1SsfmeAAAAAElFTkSuQmCC"},45:function(e,t,a){},54:function(e,t,a){e.exports=a.p+"static/media/kenanRustamov.31e40586.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/elijahKajinic.2eab274f.jpeg"},58:function(e,t,a){e.exports=a(106)},63:function(e,t,a){},65:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.8883fbec.chunk.js.map