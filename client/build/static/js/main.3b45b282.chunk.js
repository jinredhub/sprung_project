(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,a){},159:function(e,t,a){},161:function(e,t,a){},163:function(e,t,a){},165:function(e,t,a){},167:function(e,t,a){},169:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(68),s=a.n(l),i=(a(77),a(7)),o=a(8),c=a(10),m=a(9),u=a(11),f=a(177),d=a(178),h=(a(79),a(71)),p=(a(81),a(4)),g=a(30),v=a.n(g),w=a(69),y=a.n(w).a.create({baseURL:"https://my-first-activity.firebaseio.com/-LYQMvCCcIhXxVdiPSvW"}),N=(a(157),function(e){var t=e.firstName.charAt(0).toUpperCase();return r.a.createElement("div",{className:"Tweet"},r.a.createElement("div",{className:"initials"},r.a.createElement("strong",null,t)),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("strong",null,e.firstName," ",e.lastName)," ",e.time),e.message))}),E=(a(159),function(e){var t=null;return"input"===e.inputtype?t=r.a.createElement("input",Object.assign({className:"inputElement"},e)):"textarea"===e.inputtype&&(t=r.a.createElement("textarea",Object.assign({className:"inputElement"},e))),r.a.createElement("div",{className:"Input"},r.a.createElement("label",null,e.label),t)}),b=(a(161),function(e){return r.a.createElement("div",{className:"Button"},r.a.createElement("button",Object.assign({className:"loginButton"},e),e.children))}),T=(a(163),function(e){var t=e.email.charAt(0).toUpperCase();return r.a.createElement("div",{className:"PeopleToFollow"},r.a.createElement("div",{className:"initials"},r.a.createElement("strong",null,t)),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("strong",null,e.firstName," ",e.lastName)),r.a.createElement(b,{type:"button",onClick:e.clicked},"Follow")))});p.initializeApp({apiKey:"AIzaSyBMNjWQ2WDynf58aa8Opmgd8_T5hV5cGFU",authDomain:"my-first-activity.firebaseapp.com",databaseURL:"https://my-first-activity.firebaseio.com",projectId:"my-first-activity",storageBucket:"my-first-activity.appspot.com",messagingSenderId:"494408684295"});var x=p.database(),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loginEmail:"",nweTweet:"",followingTweets:[],allUsers:[{email:"jin@nieblo.com",firstName:"Jin",lastName:"Redmond",tweets:[],following:["mike@nieblo.com","shimano@nieblo.com"]},{email:"mike@nieblo.com",firstName:"mike",lastName:"cheal",tweets:[],following:[]},{email:"shimano@nieblo.com",firstName:"shimano",lastName:"koji",tweets:[{created_at:"2019-02-09T15:56:09-08:00",message:"hhhhhhhh"},{created_at:"2018-02-09T15:56:09-08:00",message:"ppppppp"}],following:[]},{email:"testmail@test.com",firstName:"testFirst",lastName:"testLast",tweets:[{created_at:"2019-01-09T15:56:09-08:00",message:"kkkkkk"}],following:[]}]},a.loadDatabase=function(e){y.get("/.json").then(function(t){var n=!0,r=!1,l=void 0;try{for(var s,i=t.data.allUsers[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var o=s.value;o.tweets||(o.tweets=[]),o.following||(o.following=[])}}catch(c){r=!0,l=c}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}a.setState({allUsers:t.data.allUsers}),a.storeTweetsYouFollow(e)}).catch(function(e){return console.log(e)})},a.updateDatabase=function(){var e=a.state.allUsers;x.ref("-LYQMvCCcIhXxVdiPSvW").set({allUsers:e})},a.logOutHandler=function(){console.log("logging out"),p.auth().signOut()},a.storeTweetsYouFollow=function(e){var t=[],n=[],r=a.state.allUsers,l=!0,s=!1,i=void 0;try{for(var o,c=r[Symbol.iterator]();!(l=(o=c.next()).done);l=!0){var m=o.value;m.email===e&&(n=m.following)}}catch(H){s=!0,i=H}finally{try{l||null==c.return||c.return()}finally{if(s)throw i}}var u=r.filter(function(e){return n.includes(e.email)}),f=!0,d=!1,p=void 0;try{for(var g,w=u[Symbol.iterator]();!(f=(g=w.next()).done);f=!0){var y=g.value;if(y.tweets.length){var N=!0,E=!1,b=void 0;try{for(var T,x=y.tweets[Symbol.iterator]();!(N=(T=x.next()).done);N=!0){var k=T.value;t.push(Object(h.a)({},k,{firstName:y.firstName,lastName:y.lastName}))}}catch(H){E=!0,b=H}finally{try{N||null==x.return||x.return()}finally{if(E)throw b}}}}}catch(H){d=!0,p=H}finally{try{f||null==w.return||w.return()}finally{if(d)throw p}}for(var S=[],U=0;U<t.length;U++){var j=t[U],C={};C.firstName=j.firstName,C.lastName=j.lastName,C.message=j.message,C.created_at=v()(j.created_at),S.push(C)}S.sort(function(e,t){return t.created_at.diff(e.created_at)});var O=S.map(function(e){return{firstName:e.firstName,lastName:e.lastName,message:e.message,created_at:e.created_at.format("MM/DD/YYYY HH:mm:ss")}});a.setState({followingTweets:O})},a.changeCurrentTweetHandler=function(e){var t=e.target.value;a.setState({newTweet:t})},a.createNewTweetHandler=function(){var e=a.state.loginEmail;if(a.state.newTweet&&a.state.loginEmail){var t=a.state.allUsers,n=v()().format(),r=!0,l=!1,s=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var c=i.value;c.email===e&&c.tweets.push({message:a.state.newTweet,created_at:n,firstName:c.firstName,lastName:c.lastName})}}catch(m){l=!0,s=m}finally{try{r||null==o.return||o.return()}finally{if(l)throw s}}a.setState({allUsers:t,newTweet:""}),console.log("allUsers: ",t),a.updateDatabase(t)}},a.followUserHandler=function(e){var t=a.state.loginEmail,n=a.state.allUsers,r=!0,l=!1,s=void 0;try{for(var i,o=n[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var c=i.value;c.email===t&&c.following.push(e)}}catch(m){l=!0,s=m}finally{try{r||null==o.return||o.return()}finally{if(l)throw s}}a.setState({allUsers:n}),a.storeTweetsYouFollow(t),a.updateDatabase()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.auth().onAuthStateChanged(function(t){if(t)e.setState({loginEmail:t.email}),e.loadDatabase(t.email);else{window.location.href="/",console.log("not logged in")}})}},{key:"render",value:function(){var e=this,t=r.a.createElement("p",null,"No tweet to display");this.state.followingTweets.length&&(t=this.state.followingTweets.map(function(e,t){return r.a.createElement(N,{firstName:e.firstName,lastName:e.lastName,message:e.message,time:e.created_at,key:t})}));var a=r.a.createElement("div",null,r.a.createElement(E,{placeholder:"tweet...",type:"text",inputtype:"textarea",onChange:function(t){return e.changeCurrentTweetHandler(t)},value:this.state.newTweet,rows:"1"}),r.a.createElement(b,{type:"text",onClick:this.createNewTweetHandler},"Create")),n=this.state.loginEmail,l=r.a.createElement("p",null,"No other users");if(n){var s=this.state.allUsers,i=[],o=!0,c=!1,m=void 0;try{for(var u,f=s[Symbol.iterator]();!(o=(u=f.next()).done);o=!0){var d=u.value;d.email===n&&(i=d.following)}}catch(H){c=!0,m=H}finally{try{o||null==f.return||f.return()}finally{if(c)throw m}}var h=s.filter(function(e){return!i.includes(e.email)});(h=h.filter(function(e){return e.email!==n})).length&&(l=h.map(function(t,a){return r.a.createElement(T,{email:t.email,firstName:t.firstName,lastName:t.lastName,key:a,clicked:e.followUserHandler.bind(e,t.email)})}))}var p="";if(n){var g=this.state.allUsers,v="",w="",y=0,x=0,k=!0,S=!1,U=void 0;try{for(var j,C=g[Symbol.iterator]();!(k=(j=C.next()).done);k=!0){var O=j.value;O.email===n&&(v=O.firstName,w=O.lastName,y=O.tweets.length,x=O.following.length)}}catch(H){S=!0,U=H}finally{try{k||null==C.return||C.return()}finally{if(S)throw U}}p=r.a.createElement("div",{className:"userInfoContainer"},r.a.createElement("h2",null,v," ",w),r.a.createElement("div",{className:"userDetailContainer"},r.a.createElement("div",{className:"width-50"},r.a.createElement("div",null,r.a.createElement("a",{href:"/allTweets"},"Tweets")),y),r.a.createElement("div",{className:"width-50"},r.a.createElement("div",null,"Following"),x)))}return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"nav"},r.a.createElement(b,{type:"button",onClick:this.logOutHandler},"Log Out")),r.a.createElement("div",{className:"pageContainer"},r.a.createElement("div",{className:"flex-33"},p,r.a.createElement("div",{className:"peopleToFollowContainer"},l)),r.a.createElement("div",{className:"flex-66"},a,r.a.createElement("div",{className:"tweetsContainer"},t))))}}]),t}(n.Component),S=(a(165),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={errorMessage:"",emailText:"",passwordText:""},a.formLoginHandler=function(){var e=a.state.emailText,t=a.state.passwordText;p.auth().signInWithEmailAndPassword(e,t).catch(function(e){console.log(e.message),a.setState({errorMessage:e.message})})},a.inputTextHandler=function(e,t){"username"===t?a.setState({emailText:e.target.value}):a.setState({passwordText:e.target.value})},a.handleKeyPress=function(e){"Enter"===e.key&&a.formLoginHandler()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){p.auth().onAuthStateChanged(function(e){if(e){console.log(e);window.location.href="/home"}else console.log("not logged in")})}},{key:"render",value:function(){var e=this,t="";this.state.errorMessage&&(t=r.a.createElement("p",{className:"errorText"},this.state.errorMessage));var a=r.a.createElement("form",null,r.a.createElement(E,{inputtype:"input",type:"text",label:"Username",onChange:function(t){return e.inputTextHandler(t,"username")},onKeyPress:this.handleKeyPress}),r.a.createElement(E,{inputtype:"input",type:"password",label:"Password",onChange:function(t){return e.inputTextHandler(t,"password")},onKeyPress:this.handleKeyPress}),t,r.a.createElement(b,{onClick:function(){return e.formLoginHandler()},type:"button"},"Log In"),r.a.createElement("div",{className:"linkContainer"},r.a.createElement("div",null,"or"),r.a.createElement("a",{id:"signupLink",href:"/signup"},"Sign Up")));return r.a.createElement("div",{className:"Login"},a)}}]),t}(n.Component)),U=(a(167),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={errorMessage:"",firstNameText:"",lastNameText:"",emailText:"",allUsers:{},passwordText:""},a.loadDatabase=function(){y.get("/.json").then(function(e){e.data.allUsers.length?a.setState({allUsers:e.data.allUsers}):a.setState({allUsers:[]})}).catch(function(e){return console.log(e)})},a.updateDatabase=function(e,t,n){var r=a.state.allUsers;r.push({firstName:t,lastName:n,email:e,tweet:[],following:[]}),x.ref("-LYQMvCCcIhXxVdiPSvW").set({allUsers:r})},a.formSignupHandler=function(){var e=a.state.emailText,t=a.state.passwordText,n=a.state.firstNameText,r=a.state.lastNameText;if(n&&r){a.updateDatabase(e,n,r),p.auth().createUserWithEmailAndPassword(e,t).catch(function(e){console.log(e.message),a.setState({errorMessage:e.message})})}else{a.setState({errorMessage:"First name and last name required."})}},a.inputTextHandler=function(e,t){"email"===t?a.setState({emailText:e.target.value}):"firstName"===t?a.setState({firstNameText:e.target.value}):"lastName"===t?a.setState({lastNameText:e.target.value}):"password"===t&&a.setState({passwordText:e.target.value})},a.handleKeyPress=function(e){"Enter"===e.key&&a.formSignupHandler()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.auth().onAuthStateChanged(function(t){if(t){console.log(t);window.location.href="/home"}else console.log("not logged in"),e.loadDatabase()})}},{key:"render",value:function(){var e=this,t="";this.state.errorMessage&&(t=r.a.createElement("p",{className:"errorText"},this.state.errorMessage));var a=r.a.createElement("form",null,r.a.createElement(E,{inputtype:"input",type:"text",label:"Email",onChange:function(t){return e.inputTextHandler(t,"email")},onKeyPress:this.handleKeyPress}),r.a.createElement(E,{inputtype:"input",type:"text",label:"First name",onChange:function(t){return e.inputTextHandler(t,"firstName")},onKeyPress:this.handleKeyPress}),r.a.createElement(E,{inputtype:"input",type:"text",label:"Last name",onChange:function(t){return e.inputTextHandler(t,"lastName")},onKeyPress:this.handleKeyPress}),r.a.createElement(E,{inputtype:"input",type:"password",label:"Password",onChange:function(t){return e.inputTextHandler(t,"password")},onKeyPress:this.handleKeyPress}),t,r.a.createElement(b,{id:"signupButton",onClick:function(){return e.formSignupHandler()},type:"button"},"Sign Up"));return r.a.createElement("div",{className:"SignUp"},a)}}]),t}(n.Component)),j=(a(169),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loginEmail:"",allUsers:[{email:"jin@nieblo.com",firstName:"Jin",lastName:"Redmond",tweets:[{created_at:"2019-12-09T15:56:09-08:00",message:"hihihi",firstName:"Jin",lastName:"Redmond"}],following:["mike@nieblo.com","shimano@nieblo.com"]},{email:"mike@nieblo.com",firstName:"mike",lastName:"cheal",tweets:[],following:[]},{email:"shimano@nieblo.com",firstName:"shimano",lastName:"koji",tweets:[{created_at:"2019-02-09T15:56:09-08:00",message:"hhhhhhhh"},{created_at:"2018-02-09T15:56:09-08:00",message:"ppppppp"}],following:[]},{email:"testmail@test.com",firstName:"testFirst",lastName:"testLast",tweets:[{created_at:"2019-02-09T15:56:09-08:00",message:"kkkkkk"}],following:[]}]},a.loadDatabase=function(){y.get("/.json").then(function(e){var t=!0,n=!1,r=void 0;try{for(var l,s=e.data.allUsers[Symbol.iterator]();!(t=(l=s.next()).done);t=!0){var i=l.value;i.tweets||(i.tweets=[]),i.following||(i.following=[])}}catch(o){n=!0,r=o}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}a.setState({allUsers:e.data.allUsers})}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.auth().onAuthStateChanged(function(t){if(t){e.setState({loginEmail:t.email});p.auth().currentUser;e.loadDatabase()}else{window.location.href="/",console.log("not logged in")}})}},{key:"render",value:function(){var e=r.a.createElement("p",null,"You don't have any tweet"),t=this.state.allUsers,a=this.state.loginEmail,n=[],l=!0,s=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(l=(o=c.next()).done);l=!0){var m=o.value;m.email===a&&(n=m.tweets)}}catch(f){s=!0,i=f}finally{try{l||null==c.return||c.return()}finally{if(s)throw i}}var u=n.map(function(e){return{firstName:e.firstName,lastName:e.lastName,message:e.message,created_at:v()(e.created_at)}}).map(function(e){return{firstName:e.firstName,lastName:e.lastName,message:e.message,created_at:e.created_at.format("MM/DD/YYYY HH:mm:ss")}});return u.reverse(),n.length&&(e=u.map(function(e){return r.a.createElement(N,{firstName:e.firstName,message:e.message,time:e.created_at,key:e.created_at})})),r.a.createElement("div",{className:"AllTweets"},r.a.createElement("a",{href:"/home"},"Back"),e)}}]),t}(n.Component)),C=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{path:"/home",exact:!0,component:k}),r.a.createElement(d.a,{path:"/",exact:!0,component:S}),r.a.createElement(d.a,{path:"/signup",exact:!0,component:U}),r.a.createElement(d.a,{path:"/allTweets",exact:!0,component:j})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a(174)},77:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){}},[[72,2,1]]]);
//# sourceMappingURL=main.3b45b282.chunk.js.map