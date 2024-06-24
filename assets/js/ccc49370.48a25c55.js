"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[6103],{3359:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(85170);var o=t(5341),s=t(89388),c=t(89835),a=t(56852),l=t(53494),i=t(70497),r=t(16567),d=t(39197),u=t(43010);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(r.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(r.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:n}=(0,a.C)(),{title:t,description:o,date:c,tags:l,authors:i,frontMatter:r}=n,{keywords:d}=r,m=e.image??r.image;return(0,u.jsxs)(s.d,{title:t,description:o,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:c}),i.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:i.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var p=t(30626),g=t(24113);function x(e){let{sidebar:n,children:t}=e;const{metadata:o,toc:s}=(0,a.C)(),{nextItem:c,prevItem:r,frontMatter:d,unlisted:h}=o,{hide_table_of_contents:x,toc_min_heading_level:f,toc_max_heading_level:b}=d;return(0,u.jsxs)(l.Z,{sidebar:n,toc:!x&&s.length>0?(0,u.jsx)(p.Z,{toc:s,minHeadingLevel:f,maxHeadingLevel:b}):void 0,children:[h&&(0,u.jsx)(g.Z,{}),(0,u.jsx)(i.Z,{children:t}),(c||r)&&(0,u.jsx)(m,{nextItem:c,prevItem:r})]})}function f(e){const n=e.content;return(0,u.jsx)(a.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(s.FG,{className:(0,o.Z)(c.k.wrapper.blogPages,c.k.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(x,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},30626:(e,n,t)=>{t.d(n,{Z:()=>r});t(85170);var o=t(5341),s=t(87120);const c={tableOfContents:"tableOfContents_pPIO",docItemContainer:"docItemContainer_Hrsc"};var a=t(43010);const l="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function r(e){let{className:n,...t}=e;return(0,a.jsx)("div",{className:(0,o.Z)(c.tableOfContents,"thin-scrollbar",n),children:(0,a.jsx)(s.Z,{...t,linkClassName:l,linkActiveClassName:i})})}},87120:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(85170),s=t(12853),c=t(15355),a=t(52537),l=t(40261),i=t(43010);function r(e){let{toc:n,className:t,linkClassName:o,isChild:s}=e;return n.length?(0,i.jsx)("ul",{className:s?void 0:t,children:n.map((e=>(0,i.jsxs)("li",{children:[(0,i.jsx)(l.Z,{to:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,i.jsx)(r,{isChild:!0,toc:e.children,className:t,linkClassName:o})]},e.id)))}):null}const d=o.memo(r);function u(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:u,maxHeadingLevel:m,...h}=e;const p=(0,s.L)(),g=u??p.tableOfContents.minHeadingLevel,x=m??p.tableOfContents.maxHeadingLevel,f=(0,c.b)({toc:n,minHeadingLevel:g,maxHeadingLevel:x}),b=(0,o.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:g,maxHeadingLevel:x}}),[l,r,g,x]);return(0,a.S)(b),(0,i.jsx)(d,{toc:f,className:t,linkClassName:l,...h})}},24113:(e,n,t)=>{t.d(n,{Z:()=>h});t(85170);var o=t(5341),s=t(16567),c=t(15635),a=t(43010);function l(){return(0,a.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function i(){return(0,a.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,a.jsx)(c.Z,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(89835),u=t(95468);function m(e){let{className:n}=e;return(0,a.jsx)(u.Z,{type:"caution",title:(0,a.jsx)(l,{}),className:(0,o.Z)(n,d.k.common.unlistedBanner),children:(0,a.jsx)(i,{})})}function h(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{}),(0,a.jsx)(m,{...e})]})}},52537:(e,n,t)=>{t.d(n,{S:()=>i});var o=t(85170),s=t(12853);function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function a(e,n){let{anchorTopOffset:t}=n;const o=e.find((e=>c(e).top>=t));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function l(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.L)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function i(e){const n=(0,o.useRef)(void 0),t=l();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:s,minHeadingLevel:c,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const o=[];for(let s=n;s<=t;s+=1)o.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:c,maxHeadingLevel:l}),r=a(i,{anchorTopOffset:t.current}),d=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}},15355:(e,n,t)=>{t.d(n,{b:()=>a});var o=t(85170);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const o=t.slice(2,e.level);e.parentIndex=Math.max(...o),t[e.level]=n}));const o=[];return n.forEach((e=>{const{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):o.push(s)})),o}function c(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return n.flatMap((e=>{const n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:o});return function(e){return e.level>=t&&e.level<=o}(e)?[{...e,children:n}]:n}))}function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>c({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}},79308:(e,n,t)=>{t.d(n,{Z:()=>w});var o=t(85170),s=t(91861),c=t(45924),a=t(16407),l=t(89835),i=t(3854);const r={codeBlockContainer:"codeBlockContainer_APcc"};var d=t(43010);function u(e){let{as:n,...t}=e;const o=(0,a.p)(),s=(0,i.QC)(o);return(0,d.jsx)(n,{...t,style:s,className:(0,c.Z)(t.className,r.codeBlockContainer,l.k.common.codeBlock)})}const m={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function h(e){let{children:n,className:t}=e;return(0,d.jsx)(u,{as:"pre",tabIndex:0,className:(0,c.Z)(m.codeBlockStandalone,"thin-scrollbar",t),children:(0,d.jsx)("code",{className:m.codeBlockLines,children:n})})}var p=t(12853),g=t(38517),x=t(98743);const f={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function b(e){let{line:n,classNames:t,showLineNumbers:o,getLineProps:s,getTokenProps:a}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");const l=s({line:n,className:(0,c.Z)(t,o&&f.codeLine)}),i=n.map(((e,n)=>(0,d.jsx)("span",{...a({token:e,key:n})},n)));return(0,d.jsxs)("span",{...l,children:[o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:f.codeLineNumber}),(0,d.jsx)("span",{className:f.codeLineContent,children:i})]}):i,(0,d.jsx)("br",{})]})}var v=t(27428),j=t(16567);function k(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function L(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const N={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function C(e){let{code:n,className:t}=e;const[s,a]=(0,o.useState)(!1),l=(0,o.useRef)(void 0),i=(0,o.useCallback)((()=>{(0,v.Z)(n),a(!0),l.current=window.setTimeout((()=>{a(!1)}),1e3)}),[n]);return(0,o.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,d.jsx)("button",{type:"button","aria-label":s?(0,j.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,j.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,j.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",t,N.copyButton,s&&N.copyButtonCopied),onClick:i,children:(0,d.jsxs)("span",{className:N.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(k,{className:N.copyButtonIcon}),(0,d.jsx)(L,{className:N.copyButtonSuccessIcon})]})})}function B(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const _={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function y(e){let{className:n,onClick:t,isEnabled:o}=e;const s=(0,j.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:t,className:(0,c.Z)("clean-btn",n,o&&_.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,d.jsx)(B,{className:_.wordWrapButtonIcon,"aria-hidden":"true"})})}function H(e){let{children:n,className:t="",metastring:o,title:s,showLineNumbers:l,language:r}=e;const{prism:{defaultLanguage:h,magicComments:f}}=(0,p.L)(),v=r??(0,i.Vo)(t)??h,j=(0,a.p)(),k=(0,g.F)(),L=(0,i.bc)(o)||s,{lineClassNames:N,code:B}=(0,i.nZ)(n,{metastring:o,language:v,magicComments:f}),_=l??(0,i.nt)(o);return(0,d.jsxs)(u,{as:"div",className:(0,c.Z)(t,v&&!t.includes(`language-${v}`)&&`language-${v}`),children:[L&&(0,d.jsx)("div",{className:m.codeBlockTitle,children:L}),(0,d.jsxs)("div",{className:m.codeBlockContent,children:[(0,d.jsx)(x.ZP,{...x.lG,theme:j,code:B,language:v??"text",children:e=>{let{className:n,tokens:t,getLineProps:o,getTokenProps:s}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:k.codeBlockRef,className:(0,c.Z)(n,m.codeBlock,"thin-scrollbar"),children:(0,d.jsx)("code",{className:(0,c.Z)(m.codeBlockLines,_&&m.codeBlockLinesWithNumbering),children:t.map(((e,n)=>(0,d.jsx)(b,{line:e,getLineProps:o,getTokenProps:s,classNames:N[n],showLineNumbers:_},n)))})})}}),(0,d.jsxs)("div",{className:m.buttonGroup,children:[(k.isEnabled||k.isCodeScrollable)&&(0,d.jsx)(y,{className:m.codeButton,onClick:()=>k.toggle(),isEnabled:k.isEnabled}),(0,d.jsx)(C,{className:m.codeButton,code:B})]})]})]})}function w(e){let{children:n,...t}=e;const c=(0,s.Z)(),a=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(n),l="string"==typeof a?H:h;return(0,d.jsx)(l,{...t,children:a},String(c))}},730:(e,n,t)=>{t.d(n,{Z:()=>a});t(85170);var o=t(45924);const s={iconEdit:"iconEdit_N_05"};var c=t(43010);function a(e){let{className:n,...t}=e;return(0,c.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s.iconEdit,n),"aria-hidden":"true",...t,children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}}}]);