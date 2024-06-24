"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[9130],{6599:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(43010),o=t(90887);const i={title:"How to Access Answer Using HTTPS",authors:["LinkinStar"],category:"Tech",featured:!0,image:"2024-01-26-cover@4x.png",description:"Got your Answer server up and running? Now, let's take it to the next level with HTTPS with the tutorials."},a=void 0,r={permalink:"/zh-CN/blog/2024/01/26/deploy-answer-https",editUrl:"https://crowdin.com/project/answer-website/zh-CN",source:"@site/blog/2024-01-26-deploy-answer-https/index.md",title:"How to Access Answer Using HTTPS",description:"Got your Answer server up and running? Now, let's take it to the next level with HTTPS with the tutorials.",date:"2024-01-26T00:00:00.000Z",formattedDate:"2024\u5e741\u670826\u65e5",tags:[],readingTime:2.64,hasTruncateMarker:!1,authors:[{name:"LinkinStar",title:"Developer",url:"https://github.com/LinkinStars",imageURL:"https://avatars.githubusercontent.com/u/19712692?v=4",key:"LinkinStar"}],frontMatter:{title:"How to Access Answer Using HTTPS",authors:["LinkinStar"],category:"Tech",featured:!0,image:"2024-01-26-cover@4x.png",description:"Got your Answer server up and running? Now, let's take it to the next level with HTTPS with the tutorials."},unlisted:!1,prevItem:{title:"Must-Read Notes for Your First Answer Contribution",permalink:"/zh-CN/blog/2024/02/04/must-read-notes-for-your-first-answer-contribution"},nextItem:{title:"First Contribution? Come to Answer.",permalink:"/zh-CN/blog/2024/01/25/first-contribution-come-to-answer"}},l={authorsImageUrls:[void 0]},d=[{value:"Background",id:"background",level:2},{value:"Easy way",id:"easy-way",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Advanced",id:"advanced",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"I am already running Answer on my server, but I want to access it using HTTPS. How can I do that?"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,s.jsx)(n.p,{children:"When you already have a server, you may want to deploy Answer on it. After deploying Answer, you will realize that you can only access it using HTTP. However, you may want to access it using HTTPS. So how can you do that?"}),"\n",(0,s.jsx)(n.p,{children:"Some questions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://meta.answer.dev/questions/D1G3/how-to-configure-ssl",children:"https://meta.answer.dev/questions/D1G3/how-to-configure-ssl"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://meta.answer.dev/questions/D1wh/how-to-enable-ssl",children:"https://meta.answer.dev/questions/D1wh/how-to-enable-ssl"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://meta.answer.dev/questions/D1XG2/how-to-deploy-answer-image-in-aws-in-docker-with-ssl-and-nginx",children:"https://meta.answer.dev/questions/D1XG2/how-to-deploy-answer-image-in-aws-in-docker-with-ssl-and-nginx"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://meta.answer.dev/questions/D136/how-to-deploy-an-ssl-certificate-using-docker-and-how-to-access-it-without-using-a-port",children:"https://meta.answer.dev/questions/D136/how-to-deploy-an-ssl-certificate-using-docker-and-how-to-access-it-without-using-a-port"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://meta.answer.dev/questions/D1Oe/i-have-set-up-ssl-on-cloudflare-but-still-can-t-access-via-https",children:"https://meta.answer.dev/questions/D1Oe/i-have-set-up-ssl-on-cloudflare-but-still-can-t-access-via-https"})}),"\n",(0,s.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"I found that many people have this question. Deploying Answer is easy, but deploying it with HTTPS is a bit difficult. So I decided to write this article to help you deploy Answer with HTTPS."}),"\n",(0,s.jsx)(n.h2,{id:"easy-way",children:"Easy way"}),"\n",(0,s.jsxs)(n.p,{children:["This blog aims to introduce the easiest way to deploy Answer with HTTPS. You can use ",(0,s.jsx)(n.a,{href:"https://caddyserver.com/",children:"Caddy"})," to deploy Answer with HTTPS. Caddy is a powerful, enterprise-ready, open source web server with automatic HTTPS written in Go. Of course, you can use other tools to deploy Answer with HTTPS, such as Nginx, etc."]}),"\n",(0,s.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can follow the ",(0,s.jsx)(n.a,{href:"https://answer.apache.org/docs/installation/",children:"installation guide"})," to install Answer. After installing Answer, you can access it using HTTP. The default port for Answer is 9080. You can access it at ",(0,s.jsx)(n.a,{href:"http://localhost:9080",children:"http://localhost:9080"}),". In the following steps, we will use 9080 as the default port for Answer."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You need a domain that ",(0,s.jsx)(n.strong,{children:"DNS resolution is already configured to point to your server"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In this blog we will use docker-compose to install Caddy. So we need docker and docker-compose. You can follow the ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"official guide"})," to install docker and docker-compose."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deploy",children:"Deploy"}),"\n",(0,s.jsx)(n.h3,{id:"step-1",children:"Step 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ mkdir caddy-docker\n$ cd caddy-docker\n$ vim docker-compose.yml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can create a ",(0,s.jsx)(n.code,{children:"docker-compose.yml"})," file in the new directory, and then add the following code:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yml"',children:'version: "3.7"\n\nservices:\n  caddy:\n    image: caddy\n    restart: unless-stopped\n    ports:\n      - "80:80"\n      - "443:443"\n      - "443:443/udp"\n    volumes:\n      - $PWD/Caddyfile:/etc/caddy/Caddyfile\n      - $PWD/caddy_data:/data\n      - $PWD/caddy_config:/config\n    network_mode: host\n'})}),"\n",(0,s.jsx)(n.h3,{id:"step-2",children:"Step 2"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Caddyfile"})," is the configuration file for Caddy. It is used to configure how Caddy should serve your site. This file will be mounted into the container at ",(0,s.jsx)(n.code,{children:"/etc/caddy/Caddyfile"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ vim Caddyfile\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:"Caddyfile"})," file in the same directory, and then add the following code:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="Caddyfile"',children:"your.answer.domain {\n    reverse_proxy 127.0.0.1:9080\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-3",children:"Step 3"}),"\n",(0,s.jsx)(n.p,{children:"Run the following command to start Caddy. Wait a few seconds, and then you can access Answer using HTTPS."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ docker-compose up -d\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you can't access it, you can check the logs of Caddy."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ docker-compose logs\n"})}),"\n",(0,s.jsx)(n.h2,{id:"advanced",children:"Advanced"}),"\n",(0,s.jsxs)(n.p,{children:["If you don't want to use ",(0,s.jsx)(n.code,{children:"network_mode: host"})," in ",(0,s.jsx)(n.code,{children:"docker-compose.yml"}),", you can put Answer and Caddy in the same docker compose. Then Caddy and Answer can use the same network. So you can configure Caddy like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="Caddyfile"',children:"your.answer.domain {\n    reverse_proxy answer-service:9080\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Of course, you can also install Caddy using other methods, such as using the binary file, etc. All in all, I wish you can follow this blog to deploy Answer with HTTPS successfully. If you have any questions, please feel free to leave a question on ",(0,s.jsx)(n.a,{href:"https://meta.answer.dev/",children:"Meta"}),". We will try our best to help you."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},90887:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(85170);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);