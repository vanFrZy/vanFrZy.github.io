import{S as U,i as Y,s as Z,k as c,q as M,a as D,l as d,m as u,r as S,h as n,c as V,n as l,a1 as B,b as A,X as s,u as ee,B as P,w as G,a2 as te,x as K,y as X,f as J,t as N,z as O}from"../../../chunks/index-4fea69f8.js";function ae(_){let e,i,r,o,f,h,m,t,C,g,w,a,p,E,T,y,b,L,H,I;return{c(){e=c("div"),i=c("div"),r=c("div"),o=c("div"),f=c("a"),h=c("h4"),m=M(_[0]),C=D(),g=c("p"),w=D(),a=c("a"),p=c("h5"),E=M("CtfTime"),y=D(),b=c("img"),H=D(),I=c("div"),this.h()},l(x){e=d(x,"DIV",{class:!0});var v=u(e);i=d(v,"DIV",{class:!0});var R=u(i);r=d(R,"DIV",{class:!0});var z=u(r);o=d(z,"DIV",{class:!0});var F=u(o);f=d(F,"A",{href:!0});var k=u(f);h=d(k,"H4",{class:!0});var q=u(h);m=S(q,_[0]),q.forEach(n),k.forEach(n),C=V(F),g=d(F,"P",{}),u(g).forEach(n),w=V(F),a=d(F,"A",{href:!0});var j=u(a);p=d(j,"H5",{class:!0});var W=u(p);E=S(W,"CtfTime"),W.forEach(n),j.forEach(n),F.forEach(n),y=V(z),b=d(z,"IMG",{class:!0,src:!0,alt:!0}),z.forEach(n),R.forEach(n),H=V(v),I=d(v,"DIV",{class:!0});var $=u(I);$.forEach(n),v.forEach(n),this.h()},h(){l(h,"class","mb-2 text-2xl font-bold text-purple-500"),l(f,"href",t=`https://${_[2]}`),l(p,"class","mb-2 text-xl font-medium text-purple-300"),l(a,"href",T=`https://ctftime.org/team/${_[3]}`),l(o,"class","flex flex-col flex-grow justify-center"),l(b,"class","m-5 h-20"),B(b.src,L=_[1])||l(b,"src",L),l(b,"alt",""),l(r,"class","px-5 flex flex-grow justify-around"),l(i,"class","max-w-full transition duration-500 hover:bg-indigo-700 hover:scale-105 rounded-lg border-2 border-gray-700"),l(I,"class","text-snowbright m-4 text-xl"),l(e,"class","px-5 flex flex-col")},m(x,v){A(x,e,v),s(e,i),s(i,r),s(r,o),s(o,f),s(f,h),s(h,m),s(o,C),s(o,g),s(o,w),s(o,a),s(a,p),s(p,E),s(r,y),s(r,b),s(e,H),s(e,I),I.innerHTML=_[4]},p(x,[v]){v&1&&ee(m,x[0]),v&4&&t!==(t=`https://${x[2]}`)&&l(f,"href",t),v&8&&T!==(T=`https://ctftime.org/team/${x[3]}`)&&l(a,"href",T),v&2&&!B(b.src,L=x[1])&&l(b,"src",L),v&16&&(I.innerHTML=x[4])},i:P,o:P,d(x){x&&n(e)}}}function se(_,e,i){let{teamname:r}=e,{logo:o}=e,{homepage:f}=e,{ctftime:h}=e,{description:m}=e;return _.$$set=t=>{"teamname"in t&&i(0,r=t.teamname),"logo"in t&&i(1,o=t.logo),"homepage"in t&&i(2,f=t.homepage),"ctftime"in t&&i(3,h=t.ctftime),"description"in t&&i(4,m=t.description)},[r,o,f,h,m]}class Q extends U{constructor(e){super(),Y(this,e,se,ae,Z,{teamname:0,logo:1,homepage:2,ctftime:3,description:4})}}function re(_){let e,i,r,o,f,h,m,t,C,g,w;return t=new Q({props:{teamname:"RoyalRoppers",logo:"https://royalroppers.team/static/media/logo.6879899f1f83dfc69bc5524188e90c4d.svg",homepage:"royalroppers.team",ctftime:"176008",description:"RoyalRoppers is the KTH university team that I Co-Founded with other students. <br/>We do regular meet-ups to improve our CTF skills. Additionally, we compete in several competitions. <br/>In 2022 we managed to become number 92 on the worldwide leaderboard!!"}}),g=new Q({props:{teamname:"LetzPwn",logo:"https://letzpwn.com/assets/images/logo.png",homepage:"letzpwn.com",ctftime:"78388",description:"LetzPwn is the first Luxembourgish CTF team. I co-founded the team with other people representing Luxembourg in the European Cyber Security Challenge (ECSC) in 2022.<br/> We try to engage young people to become interested in Cyber Security and strengthen the Luxembourgish national team."}}),{c(){e=c("meta"),i=D(),r=c("div"),o=c("div"),f=M("Capture The Flag Teams"),h=D(),m=c("div"),G(t.$$.fragment),C=D(),G(g.$$.fragment),this.h()},l(a){const p=te("svelte-kd39vx",document.head);e=d(p,"META",{name:!0,content:!0}),p.forEach(n),i=V(a),r=d(a,"DIV",{class:!0});var E=u(r);o=d(E,"DIV",{class:!0});var T=u(o);f=S(T,"Capture The Flag Teams"),T.forEach(n),h=V(E),m=d(E,"DIV",{class:!0});var y=u(m);K(t.$$.fragment,y),C=V(y),K(g.$$.fragment,y),y.forEach(n),E.forEach(n),this.h()},h(){document.title="CTF",l(e,"name","description"),l(e,"content","My CTF teams"),l(o,"class","text-center default-text text-4xl pb-3 font-medium default-text"),l(m,"class","p-12 grid grid-cols-1 sm:grid-cols-1 sm:p-6 md:grid-cols-2 m-auto max-w-6xl"),l(r,"class","flex-col flex-grow pt-9")},m(a,p){s(document.head,e),A(a,i,p),A(a,r,p),s(r,o),s(o,f),s(r,h),s(r,m),X(t,m,null),s(m,C),X(g,m,null),w=!0},p:P,i(a){w||(J(t.$$.fragment,a),J(g.$$.fragment,a),w=!0)},o(a){N(t.$$.fragment,a),N(g.$$.fragment,a),w=!1},d(a){n(e),a&&n(i),a&&n(r),O(t),O(g)}}}class le extends U{constructor(e){super(),Y(this,e,null,re,Z,{})}}export{le as default};