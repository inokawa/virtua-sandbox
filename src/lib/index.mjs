"use client";
import{jsx as e}from"react/jsx-runtime";import{useLayoutEffect as t,useEffect as n,useRef as o,memo as r,useMemo as i,useReducer as s,forwardRef as l,useImperativeHandle as c}from"react";import{flushSync as a}from"react-dom";const h=Math.min,d=Math.max,u=Math.abs,f=Date.now,_=Object.values,g=Array.isArray,w=setTimeout,p=(e,t,n)=>h(n,d(t,e)),v=e=>null!=e,m=e=>{let t,n;return(...o)=>(t||(t=!0,n=e(...o)),n)},S=-1,b=(e,t,n)=>{const o=n?"unshift":"push";for(let n=0;n<t;n++)e[o](S);return e},z=(e,t)=>{const n=e.t[t];return n===S?e.o:n},y=(e,t)=>{if(!e.i)return 0;if(e.l>=t)return e.h[t];e.l<0&&(e.h[0]=0,e.l=0);let n=e.l,o=e.h[n];for(;n<t;)o+=z(e,n),e.h[++n]=o;return e.l=t,o},x=(e,t,n)=>{let o=y(e,n);for(;n>=0&&n<e.i;)if(o<=t){const r=z(e,n);if(o+r>t)break;o+=r,n++}else o-=z(e,--n);return p(n,0,e.i-1)},R=(e,t,n,o)=>{const r=x(e,t,h(n,e.i-1));return[r,x(e,t+o,r)]},I=(e,t,n)=>{const o=t-e.i,r=o>0;let i;return r?(i=e.o*o,b(e.t,o,n),b(e.h,o)):(i=(n?e.t.splice(0,-o):e.t.splice(o)).reduce(((t,n)=>t+(n===S?e.o:n)),0),e.h.splice(o)),e.l=n?-1:h(t-1,e.l),e.i=t,[i,r]},C="undefined"!=typeof window,k=()=>document.documentElement,O=/*#__PURE__*/m((e=>{const t="scrollLeft",n=e[t];e[t]=1;const o=e[t]<1;return e[t]=n,o})),M=/*#__PURE__*/m((()=>{return!!C&&"rtl"===(e=k(),getComputedStyle(e)).direction;var e})),T=/*#__PURE__*/m((()=>/iP(hone|od|ad)/.test(navigator.userAgent))),E=/*#__PURE__*/m((()=>"scrollBehavior"in k().style)),H=e=>d(e.u(),e._()),J=(e,t,n)=>d(e-(1===n?1:d(1,t)),0),W=(e,t,n,o)=>h(e+(2===n?1:d(1,t)),o-1),B=(e,t,n)=>t.reduce(((t,[o,r])=>{const i=r-z(e,o);return(!n||i>0)&&(t+=i),t}),0),L=(e,t=40,n=0,o=((e,t)=>({o:t,i:e,l:-1,t:b([],e),h:b([],e)}))(e,t),r,i=0,s=0)=>{let l=!!n,c=[],a=0,f=0,_=0,g=0,w=0,v=0,m=0,x=0,C=l?[0,d(n-1,0)]:null,k=[0,0];const O=new Set,M=()=>(e=>e.i?y(e,e.i-1)+z(e,e.i-1):0)(o),E=()=>M()+i+s,H=()=>d(0,E()-a),J=e=>{T()&&0!==m?w+=e:(g+=e,_++)};return{p:()=>c,v:()=>JSON.parse(JSON.stringify(o)),m:()=>C?[h(k[0],C[0]),d(k[1],C[1])]:v?k:k=R(o,f-i+w+g,k[0],a),S:e=>o.t[e]===S,R:()=>!!C&&o.t.slice(d(0,C[0]-1),h(o.i-1,C[1]+1)+1).includes(S),I:e=>y(o,e)-w,C:e=>z(o,e),k:()=>o.i,O:()=>f,M:H,T:()=>m,_:()=>a,H:()=>i,J:()=>s,u:M,W:()=>_,B:()=>a>E()?g=0:(v=g,g=0,v),L(e,t){const n=[e,t];return O.add(n),()=>{O.delete(n)}},$(e,t){let n,i,s=0;switch(e){case 1:{const e=t.filter((([e,t])=>o.t[e]!==t));if(!e.length)break;let n=0;if(0===f);else if(f>H()-1.5)n=B(o,e,!0);else if(2===x)n=B(o,e);else{const[t]=k;n=B(o,e.filter((([e])=>e<t)))}n&&J(n);let l=!1;e.forEach((([e,t])=>{((e,t,n)=>{const o=e.t[t]===S;return e.t[t]=n,e.l=h(t,e.l),o})(o,e,t)&&(l=!0)})),r&&l&&!f&&(e=>{const t=e.t.filter((e=>e!==S)),n=t[0];e.o=t.every((e=>e===n))?n:(e=>{const t=[...e].sort(((e,t)=>e-t)),n=e.length/2|0;return t.length%2==0?(t[n-1]+t[n])/2:t[n]})(t)})(o),s=2,i=!0;break}case 2:a!==t&&(a=t,s=2);break;case 3:if(t[1]){const e=H()-f,[n,r]=I(o,t[0],!0);J(r?n:-h(n,e)),r&&(x=2),s=1}else I(o,t[0]);break;case 4:{const e=p(t,0,H()),n=v;if(v=0,e===f)break;const o=e-f,r=u(o);n&&r<u(n)+1||0!==x||(m=o<0?2:1),l&&(C=null,l=!1),i=r>a,f=e,s=5;break}case 5:s=8,0!==m&&(n=!0,s+=1),m=0,x=0,C=null;break;case 6:x=1;break;case 7:C=R(o,t,k[0],a),s=1}s&&(c=[],n&&w&&(g+=w,w=0,_++),O.forEach((([e,t])=>{s&e&&t(i)})))}}},$=C?t:n,A=(e,t,n,o,r)=>{let i=!1,s=!1,l=!1;const c=(()=>{let t;const n=()=>{v(t)&&clearTimeout(t)},o=()=>{n(),t=w((()=>{t=null,i?c():(s=!1,e.$(5))}),150)};return o.A=n,o})(),a=()=>{s&&(l=!0),e.$(4,o()),c()},h=(()=>{let t=f()-50;return(...o)=>{const r=f();t+50<r&&(t=r,(t=>{if(0!==e.T()&&!t.ctrlKey&&(n?t.deltaX:t.deltaY)){const t=e.O();t>0&&t<e.M()&&c()}})(...o))}})(),d=()=>{i=!0,s=l=!1},u=()=>{i=!1,T()&&(s=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",h,{passive:!0}),t.addEventListener("touchstart",d,{passive:!0}),t.addEventListener("touchend",u,{passive:!0}),{P:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",h),t.removeEventListener("touchstart",d),t.removeEventListener("touchend",u),c.A()},V:e=>{r(e,l),l=!1}}},P=(e,t,n,o)=>O(e)||o?-n:t.M()-n,V=(e,t)=>{let n,o,r;const i=t?"scrollLeft":"scrollTop",s=t?"overflowX":"overflowY",l=(o,r)=>t&&M()?P(n,e,o,r):o,c=async(o,s)=>{if(!n)return;r&&r();const c=()=>p(o(),0,e.M()),a=()=>{let t;return[new Promise(((e,n)=>{t=e,w(r=n,150)})),e.L(2,(()=>{t&&t()}))]};if(s&&E()){for(;e.$(7,c()),e.R();){const[e,t]=a();try{await e}catch(e){return}finally{t()}}n.scrollTo({[t?"left":"top"]:l(c()),behavior:"smooth"})}else for(;;){const[t,o]=a();try{n[i]=l(c()),e.$(6),await t}catch(e){return}finally{o()}}};return{X(r){n=r,o=A(e,r,t,(()=>l(r[i])),((e,t)=>{if(t){t=!1;const e=r.style,n=e[s];e[s]="hidden",w((()=>{e[s]=n}))}r[i]+=l(e,!0)}))},P(){o&&o.P()},Y(e){c((()=>e))},j(t){t+=e.O(),c((()=>t))},D(t,{align:n,smooth:o}={}){if(t=p(t,0,e.k()-1),"nearest"===n){const o=e.I(t),r=e.O();if(o<r)n="start";else{if(!(o+e.C(t)>r+e._()))return;n="end"}}c((()=>e.H()+("end"===n?e.I(t)+e.C(t)-e._():"center"===n?e.I(t)+(e.C(t)-e._())/2:e.I(t))),o)},V:e=>{n&&o&&o.V(e)}}},X=(e,t)=>{let n,o;const r=t?"scrollX":"scrollY",i=t?"offsetLeft":"offsetTop",s=(o,r)=>t&&M()?P(n,e,o,r):o;return{X(l){n=l;const c=(e,n)=>{const o=n+(t&&M()?window.innerWidth-e[i]-e.offsetWidth:e[i]),r=e.offsetParent;return e!==document.body&&r?c(r,o):o};o=A(e,window,t,(()=>s(window[r])-c(l,0)),(e=>{window.scrollBy(t?s(e,!0):0,t?0:e)}))},P(){o&&o.P()},V:e=>{o&&o.V(e)}}},Y="current",j=(e,t)=>{if(g(e))for(const n of e)j(n,t);else v(e)&&"boolean"!=typeof e&&t.push(e)},D=(e,t)=>{const n=e.key;return v(n)?n:"_"+t},N=e=>{const t=o();return t[Y]||(t[Y]=e())},U=e=>{const t=o(e);return $((()=>{t[Y]=e}),[e]),t},F=(e,t)=>{let n;const o=t?"width":"height",r=new WeakMap,i=m((()=>new ResizeObserver((t=>{const i=[];for(const{target:s,contentRect:l}of t)if(s.offsetParent)if(s===n)e.$(2,l[o]);else{const e=r.get(s);v(e)&&i.push([e,l[o]])}i.length&&e.$(1,i)}))));return{N(e){i().observe(n=e)},U:(e,t)=>{const n=i();return r.set(e,t),n.observe(e),()=>{r.delete(e),n.unobserve(e)}},P(){i().disconnect()}}},G=(e,t)=>{const n=t?"width":"height",o=t?"innerWidth":"innerHeight",r=new WeakMap,i=m((()=>new ResizeObserver((t=>{const o=[];for(const{target:e,contentRect:i}of t){if(!e.offsetParent)continue;const t=r.get(e);v(t)&&o.push([t,i[n]])}o.length&&e.$(1,o)})))),s=()=>{e.$(2,window[o])};return{N(){window.addEventListener("resize",s),s()},U:(e,t)=>{const n=i();return r.set(e,t),n.observe(e),()=>{r.delete(e),n.unobserve(e)}},P(){window.removeEventListener("resize",s),i().disconnect()}}},q=(e,t)=>{let n;const o="height",r="width",i=new WeakMap,s=new Set,l=new Set,c=new Map,a=(e,t)=>`${e}-${t}`,h=m((()=>new ResizeObserver((h=>{const u=new Set,f=new Set;for(const{target:s,contentRect:l}of h)if(s.offsetParent)if(s===n)e.$(2,l[o]),t.$(2,l[r]);else{const e=i.get(s);if(e){const[t,n]=e,i=a(t,n),s=c.get(i),h=[l[o],l[r]];let d,_;s?(s[0]!==h[0]&&(d=!0),s[1]!==h[1]&&(_=!0)):d=_=!0,d&&u.add(t),_&&f.add(n),(d||_)&&c.set(i,h)}}if(u.size){const t=[];u.forEach((e=>{let n=0;l.forEach((t=>{const o=c.get(a(e,t));o&&(n=d(n,o[0]))})),n&&t.push([e,n])})),e.$(1,t)}if(f.size){const e=[];f.forEach((t=>{let n=0;s.forEach((e=>{const o=c.get(a(e,t));o&&(n=d(n,o[1]))})),n&&e.push([t,n])})),t.$(1,e)}}))));return{N(e){h().observe(n=e)},U(e,t,n){const o=h();return i.set(e,[t,n]),s.add(t),l.add(n),o.observe(e),()=>{i.delete(e),o.unobserve(e)}},P(){h().disconnect()}}},K=/*#__PURE__*/r((({F:t,G:n,q:r,K:s,Z:l,ee:c,te:a,ne:h})=>{const d=o(null);$((()=>n(d[Y],r)),[r]);const u=i((()=>{const e={margin:0,padding:0,position:l&&h?void 0:"absolute",[a?"height":"width"]:"100%",[a?"top":"left"]:0,[a?M()?"right":"left":"top"]:s,visibility:!l||h?"visible":"hidden"};return a&&(e.display="flex"),e}),[s,l,h]);return e(c,"string"==typeof c?{ref:d,style:u,children:t}:{ref:d,style:u,index:r,children:t})})),Q=e=>s(e.p,void 0,e.p)[1],Z=(e,t)=>i((()=>{if("function"==typeof e)return[e,t||0];const n=(e=>{const t=[];return j(e,t),t})(e);return[e=>n[e],n.length]}),[e,t]),ee=/*#__PURE__*/l((({children:t,count:r,overscan:i=4,itemSize:s,shift:l,horizontal:h,reverse:u,cache:f,startMargin:_,endMargin:g,ssrCount:w,as:p="div",item:v="div",scrollRef:m,onScroll:S,onScrollEnd:b,onRangeChange:z},y)=>{const[x,R]=Z(t,r),I=o(null),C=o(!!w),k=U(S),O=U(b),[M,T,E,B]=N((()=>{const e=!!h,t=L(R,s,w,f,!s,_,g);return[t,F(t,e),V(t,e),e]}));R!==M.k()&&M.$(3,[R,l]);const A=Q(M),[P,X]=M.m(),j=M.T(),G=M.W(),q=M.u(),ee=(e=>d(e.u(),e._()-e.H()-e.J()))(M),te=u?d(0,ee-q):0,ne=[];$((()=>{C[Y]=!1;const e=M.L(3,(e=>{e?a(A):A()})),t=M.L(4,(()=>{k[Y]&&k[Y](M.O())})),n=M.L(8,(()=>{O[Y]&&O[Y]()})),o=e=>{T.N(e),E.X(e)};return m?Promise.resolve().then((()=>o(m[Y]))):o(I[Y].parentElement),()=>{e(),t(),n(),T.P(),E.P()}}),[]),$((()=>{const e=M.B();e&&E.V(e)}),[G]),n((()=>{z&&z(P,X)}),[P,X]),c(y,(()=>({get cache(){return M.v()},get scrollOffset(){return M.O()},get scrollSize(){return H(M)},get viewportSize(){return M._()},scrollToIndex:E.D,scrollTo:E.Y,scrollBy:E.j})),[]);for(let t=J(P,i,j),n=W(X,i,j,R);t<=n;t++){const n=x(t);ne.push(e(K,{G:T.U,q:t,K:M.I(t)+te,Z:M.S(t),ee:v,F:n,te:B,ne:C[Y]},D(n,t)))}return e(p,{ref:I,style:{contain:"content",overflowAnchor:"none",position:"relative",visibility:"hidden",width:B?q:"100%",height:B?"100%":q,[B?"minWidth":"minHeight"]:ee,pointerEvents:0!==j?"none":"auto"},children:ne})})),te=/*#__PURE__*/l((({children:t,count:n,overscan:o,itemSize:r,shift:i,horizontal:s,reverse:l,cache:c,ssrCount:a,item:h,onScroll:d,onScrollEnd:u,onRangeChange:f,style:_,...g},w)=>e("div",{...g,style:{display:s?"inline-block":"block",[s?"overflowX":"overflowY"]:"auto",contain:"strict",width:"100%",height:"100%",..._},children:e(ee,{ref:w,count:n,overscan:o,itemSize:r,shift:i,horizontal:s,reverse:l,cache:c,ssrCount:a,item:h,onScroll:d,onScrollEnd:u,onRangeChange:f,children:t})}))),ne=/*#__PURE__*/l((({children:t,count:r,overscan:i=4,itemSize:s,shift:l,horizontal:h,cache:d,ssrCount:u,as:f="div",item:_="div",onScrollEnd:g,onRangeChange:w},p)=>{const[v,m]=Z(t,r),S=o(null),b=U(g),z=o(!!u),[y,x,R,I]=N((()=>{const e=!!h,t=L(m,s,u,d,!s);return[t,G(t,e),X(t,e),e]}));m!==y.k()&&y.$(3,[m,l]);const C=Q(y),[k,O]=y.m(),M=y.T(),T=y.W(),E=y.u(),H=[];$((()=>{z[Y]=!1;const e=y.L(3,(e=>{e?a(C):C()})),t=y.L(8,(()=>{b[Y]&&b[Y]()}));return x.N(),R.X(S[Y]),()=>{e(),t(),x.P(),R.P()}}),[]),$((()=>{const e=y.B();e&&R.V(e)}),[T]),n((()=>{w&&w(k,O)}),[k,O]),c(p,(()=>({get cache(){return y.v()}})),[]);for(let t=J(k,i,M),n=W(O,i,M,m);t<=n;t++){const n=v(t);H.push(e(K,{G:x.U,q:t,K:y.I(t),Z:y.S(t),ee:_,F:n,te:I,ne:z[Y]},D(n,t)))}return e(f,{ref:S,style:{contain:"content",position:"relative",visibility:"hidden",width:I?E:"100%",height:I?"100%":E,pointerEvents:0!==M?"none":"auto"},children:H})})),oe=/*#__PURE__*/l((({children:t,attrs:n,width:o,height:r,scrolling:s},l)=>e("div",{ref:l,...n,children:e("div",{style:i((()=>({contain:"content",position:"relative",visibility:"hidden",width:null!=o?o:"100%",height:null!=r?r:"100%",pointerEvents:s?"none":"auto"})),[o,r,s]),children:t})}))),re=(e,t)=>`${e}-${t}`,ie=/*#__PURE__*/r((({F:t,G:n,oe:r,re:s,ie:l,se:c,le:a,ce:h,Z:d,ee:u})=>{const f=o(null);return $((()=>n.U(f[Y],r,s)),[s,r]),e(u,{ref:f,style:i((()=>({display:"grid",margin:0,padding:0,position:"absolute",top:l,[M()?"right":"left"]:c,visibility:d?"hidden":"visible",minHeight:a,minWidth:h})),[l,c,h,a,d]),children:t})})),se=/*#__PURE__*/l((({children:t,row:n,col:r,cellHeight:s=40,cellWidth:l=100,overscan:h=2,initialRowCount:d,initialColCount:u,components:{Root:f=oe,Cell:g="div"}={},...w},p)=>{const[v,m,S,b,z]=N((()=>{const e=L(n,s,d),t=L(r,l,u);return[e,t,q(e,t),V(e,!1),V(t,!0)]}));n!==v.k()&&v.$(3,[n]),r!==m.k()&&m.$(3,[r]);const y=Q(v),x=Q(m),[R,I]=v.m(),[C,k]=m.m(),O=v.T(),M=m.T(),T=v.W(),E=m.W(),B=H(v),A=H(m),P=o(null);$((()=>{const e=P[Y],t=v.L(3,(e=>{e?a(y):y()})),n=m.L(3,(e=>{e?a(x):x()}));return S.N(e),b.X(e),z.X(e),()=>{t(),n(),S.P(),b.P(),z.P()}}),[]),$((()=>{const e=v.B();e&&b.V(e)}),[T]),$((()=>{const e=m.B();e&&z.V(e)}),[E]),c(p,(()=>({get scrollOffset(){return[m.O(),v.O()]},get scrollSize(){return[H(m),H(v)]},get viewportSize(){return[m._(),v._()]},scrollToIndex(e,t){z.D(e),b.D(t)},scrollTo(e,t){z.Y(e),b.Y(t)},scrollBy(e,t){z.j(e),b.j(t)}})),[]);const X=i((()=>{const e=new Map;return(n,o)=>{let r=e.get(re(n,o));return r||e.set(re(n,o),r=t({rowIndex:n,colIndex:o})),r}}),[t]),j=J(R,h,O),D=W(I,h,O,n),U=J(C,h,M),F=W(k,h,M,r),G=[];for(let t=j;t<=D;t++)for(let n=U;n<=F;n++)G.push(e(ie,{G:S,oe:t,re:n,ie:v.I(t),se:m.I(n),le:v.C(t),ce:m.C(n),Z:v.S(t)||m.S(n),ee:g,F:X(t,n)},re(t,n)));return e(f,{ref:P,width:A,height:B,scrolling:0!==O||0!==M,attrs:i((()=>({...w,style:{overflow:"auto",overflowAnchor:"none",contain:"strict",width:"100%",height:"100%",...w.style}})),_(w)),children:G})}));export{te as VList,ee as Virtualizer,ne as WindowVirtualizer,se as experimental_VGrid};
//# sourceMappingURL=index.mjs.map
