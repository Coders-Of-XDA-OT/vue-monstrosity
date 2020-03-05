(function(t){function e(e){for(var n,s,c=e[0],l=e[1],o=e[2],h=0,m=[];h<c.length;h++)s=c[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var l=a[c];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"26a2":function(t,e,a){},"2e46":function(t,e,a){},"3fc9":function(t,e,a){"use strict";var n=a("26a2"),i=a.n(n);i.a},4522:function(t,e,a){},"48e2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"title"},[t._v("monstrosity")]),t.isGameEnded?[a("EndGameScreen")]:[t.isGameRunning?[a("PlayArea")]:[a("Main")]]],2)},r=[],s=a("5530"),c=a("2f62"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"input-area"},[a("label",{attrs:{for:"player-name"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.player_name,expression:"player_name"}],attrs:{type:"text",id:"player-name",placeholder:"player name",autocomplete:"off"},domProps:{value:t.player_name},on:{input:[function(e){e.target.composing||(t.player_name=e.target.value)},t.isPlayerNameSet],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.startGame(e)}}}),a("button",{staticClass:"btn",class:{active:t.isActive},on:{click:t.startGame}},[t._v(" start ")])])])},o=[],u=(a("498a"),{name:"Main",data:function(){return{player_name:"",isActive:!1}},methods:Object(s["a"])({},Object(c["b"])(["change_game_status"]),{isPlayerNameSet:function(){this.isActive=!!this.player_name.trim()},startGame:function(){this.player_name.trim()&&this.change_game_status(this.player_name)}})}),h=u,m=(a("8a56"),a("2877")),p=Object(m["a"])(h,l,o,!1,null,"bb9f7cfe",null),d=p.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"grid"},[a("div",{staticClass:"player"},[t._v(" "+t._s(t.getPlayerName)+" "),a("div",{staticClass:"health-bar active",style:{width:t.player.health+"%"}}),t._v(" "+t._s(t.player.health)+" ")]),a("div",{staticClass:"monster"},[a("span",[t._v("Monster")]),a("div",{staticClass:"health-bar active",style:{width:t.monster.health+"%"}}),t._v(" "+t._s(t.monster.health)+" ")])]),a("div",{staticClass:"fightAnim"},[t._v("Fight")]),a("ActionButtons",{attrs:{attack:t.attack,special:t.specialAttack,canSpecial:t.makeSpecialAttackActive,heal:t.heal,canHeal:t.makeHealActive,giveup:t.giveUp}})],1)},f=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"spacer"}),a("div",{staticClass:"buttons"},[a("div",{staticClass:"btn active",on:{click:t.attack}},[t._v("Attack")]),a("div",{staticClass:"btn",class:{active:t.canSpecial},on:{click:t.special}},[t._v(" Special Attack ")]),a("div",{staticClass:"btn",class:{active:t.canHeal},on:{click:t.heal}},[t._v("Heal")]),a("div",{staticClass:"btn active",on:{click:t.giveup}},[t._v("Give UP")])]),a("div",{staticClass:"spacer"})])},g=[],_={props:["attack","special","heal","giveup","canSpecial","canHeal"]},b=_,k=(a("3fc9"),Object(m["a"])(b,y,g,!1,null,"48aeb633",null)),M=k.exports,A={name:"play-area",components:{ActionButtons:M},computed:Object(c["c"])(["getPlayerName"]),data:function(){return{player:{health:100,attackMin:5,attackMax:12,specialAttackMin:12,specialAttackMax:20,damageGiven:0,damageTaken:0},monster:{health:100,attackMin:9,attackMax:15},makeSpecialAttackActive:!1,makeHealActive:!1}},methods:Object(s["a"])({},Object(c["b"])(["end_game"]),{attack:function(){var t=Math.floor(Math.random()*this.player.attackMax)+this.player.attackMin;this.monster.health-=t,this.monster.health<=0&&this.end_game("player"),this.player.damageGiven+=1,this.player.damageGiven>=4&&(this.makeSpecialAttackActive=!0);var e=Math.floor(Math.random()*this.monster.attackMax)+this.monster.attackMin;this.player.health-=e,this.player.health<=0&&this.end_game("monster"),this.player.damageTaken+=1,this.player.damageTaken>=2&&(this.makeHealActive=!0)},specialAttack:function(){if(this.makeSpecialAttackActive){var t=Math.floor(Math.random()*this.player.specialAttackMax)+this.player.specialAttackMin;this.monster.health-=t,this.monster.health<=0&&this.end_game("player");var e=Math.floor(5*Math.random())+1;this.player.health-=e,this.player.health<=0&&this.end_game("monster"),this.player.damageGiven=0}this.makeSpecialAttackActive=!1},heal:function(){if(this.makeHealActive){var t=Math.floor(Math.random()*this.player.specialAttackMax)+this.player.attackMax;t+this.player.health>=100&&(this.player.health+=10),this.player.health+=t,this.player.damageTaken=0;var e=Math.floor(10*Math.random())+1;if(e<3){var a=Math.floor(7*Math.random())+3;this.player.health-=a,this.player.health<=0&&this.end_game("monster")}}this.makeHealActive=!1},giveUp:function(){this.end_game("surrender")}})},O=A,G=(a("fd4a"),Object(m["a"])(O,v,f,!1,null,"a8be17da",null)),j=G.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},["surrender"==t.whoWon?a("div",[t._v(" Did monster beat you so hard that you had to surrender? lets beat them up this time for good ")]):"player"===t.whoWon?a("div",[t._v(" Our lord "+t._s(t.getPlayerName)+" have defeated the monster. ")]):a("div",[t._v(" you lost. facing badluck? Try again ")]),a("button",{on:{click:t.restartGame}},[t._v("Start Again")])])},x=[],S={name:"EndGameScreen",computed:Object(c["c"])(["whoWon","getPlayerName"]),methods:Object(s["a"])({},Object(c["b"])(["restart_game"]),{restartGame:function(){this.restart_game()}})},C=S,P=(a("9f45"),Object(m["a"])(C,w,x,!1,null,"48be3bc6",null)),E=P.exports,H={name:"App",components:{Main:d,PlayArea:j,EndGameScreen:E},computed:Object(c["c"])(["isGameRunning","isGameEnded"]),methods:Object(s["a"])({},Object(c["b"])(["change_game_status"]),{stop:function(){this.change_game_status()}})},N=H,R=(a("5c0b"),Object(m["a"])(N,i,r,!1,null,null,null)),T=R.exports,W={isGameRunning:!1,isGameEnded:!1,player_name:"",whoWon:""},$={isGameRunning:function(t){return t.isGameRunning},getPlayerName:function(t){return t.player_name},isGameEnded:function(t){return t.isGameEnded},whoWon:function(t){return t.whoWon}},U={change_game_status:function(t,e){var a=t.commit;a("set_game_status",e)},end_game:function(t,e){var a=t.commit;a("end_game",e)},restart_game:function(t){var e=t.commit;e("restart_game")}},B={set_game_status:function(t,e){t.isGameRunning=!t.isGameRunning,t.player_name=!!e&&e},end_game:function(t,e){t.isGameEnded=!0,t.whoWon=e},restart_game:function(t){t.isGameEnded=!1,t.isGameRunning=!0}},J={state:W,getters:$,actions:U,mutations:B};n["a"].use(c["a"]);var D=new c["a"].Store({modules:{Module:J}});a("f5df1");n["a"].config.productionTip=!1,new n["a"]({store:D,render:function(t){return t(T)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},"8a56":function(t,e,a){"use strict";var n=a("48e2"),i=a.n(n);i.a},"9c0c":function(t,e,a){},"9f45":function(t,e,a){"use strict";var n=a("4522"),i=a.n(n);i.a},fd4a:function(t,e,a){"use strict";var n=a("2e46"),i=a.n(n);i.a}});
//# sourceMappingURL=app.0bbb9014.js.map