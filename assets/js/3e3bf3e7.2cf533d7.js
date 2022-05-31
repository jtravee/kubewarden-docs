"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[4959],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(y,a(a({ref:t},p),{},{components:n})):i.createElement(y,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6168:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=n(3117),o=n(102),r=(n(7294),n(3905)),a=["components"],l={sidebar_label:"Distribute",title:""},s="Distribute",c={unversionedId:"writing-policies/rego/open-policy-agent/distribute",id:"writing-policies/rego/open-policy-agent/distribute",title:"",description:"We have written, built and run our Rego policy. Now it's time to",source:"@site/docs/writing-policies/rego/open-policy-agent/04-distribute.md",sourceDirName:"writing-policies/rego/open-policy-agent",slug:"/writing-policies/rego/open-policy-agent/distribute",permalink:"/writing-policies/rego/open-policy-agent/distribute",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rego/open-policy-agent/04-distribute.md",tags:[],version:"current",lastUpdatedAt:1652790004,formattedLastUpdatedAt:"5/17/2022",sidebarPosition:4,frontMatter:{sidebar_label:"Distribute",title:""},sidebar:"docs",previous:{title:"Build and Run",permalink:"/writing-policies/rego/open-policy-agent/build-and-run"},next:{title:"Introduction",permalink:"/writing-policies/rego/gatekeeper/intro"}},p={},u=[{value:"Annotating the policy",id:"annotating-the-policy",level:2},{value:"Pushing the policy",id:"pushing-the-policy",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"distribute"},"Distribute"),(0,r.kt)("p",null,"We have written, built and run our Rego policy. Now it's time to\ndistribute the policy."),(0,r.kt)("p",null,"Policies have to be annotated in order for them to be executed in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),", the component that executes the policies when running\nin a Kubernetes cluster."),(0,r.kt)("h2",{id:"annotating-the-policy"},"Annotating the policy"),(0,r.kt)("p",null,"Annotating a policy is a process that enriches the policy metadata\nwith relevant information like authorship, license, source code\nlocation and other important metadata such as rules, that describes\nwhat kind of resources this policy can understand and evaluate."),(0,r.kt)("p",null,"In order to annotate our policy let's write a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.yaml"),"\nfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'rules:\n- apiGroups: [""]\n  apiVersions: ["*"]\n  resources: ["*"]\n  operations: ["CREATE"]\nmutating: false\ncontextAware: false\nexecutionMode: opa\nannotations:\n  io.kubewarden.policy.title: no-default-namespace\n  io.kubewarden.policy.description: This policy will reject any resource created inside the default namespace\n  io.kubewarden.policy.author: The Kubewarden Authors\n  io.kubewarden.policy.url: https://github.com/kubewarden/some-policy\n  io.kubewarden.policy.source: https://github.com/kubewarden/some-policy\n  io.kubewarden.policy.license: Apache-2.0\n  io.kubewarden.policy.usage: |\n      This policy is just an example.\n\n      You can write interesting descriptions about the policy here.\n')),(0,r.kt)("p",null,"In this case, you can see several details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rules: what resources this policy is targeting"),(0,r.kt)("li",{parentName:"ul"},"Mutating: whether this policy is mutating. In this case, is just\nvalidating."),(0,r.kt)("li",{parentName:"ul"},"Context aware: whether this policy requires context from the\ncluster in order to evaluate the request."),(0,r.kt)("li",{parentName:"ul"},"Execution mode: since this is a Rego policy it is mandatory to\nspecify what execution mode it expects: ",(0,r.kt)("inlineCode",{parentName:"li"},"opa")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"gatekeeper"),". This\npolicy is written in the ",(0,r.kt)("inlineCode",{parentName:"li"},"opa")," style: returning a whole\n",(0,r.kt)("inlineCode",{parentName:"li"},"AdmissionReview")," object."),(0,r.kt)("li",{parentName:"ul"},"Annotations: metadata stored into the policy itself.")),(0,r.kt)("p",null,"Let's go ahead and annotate our policy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kwctl annotate policy.wasm --metadata-path metadata.yaml --output-path annotated-policy.wasm\n")),(0,r.kt)("p",null,"Now you can ",(0,r.kt)("inlineCode",{parentName:"p"},"inspect")," the policy if you will by running ",(0,r.kt)("inlineCode",{parentName:"p"},"kwctl inspect annotated-policy.wasm"),"."),(0,r.kt)("h2",{id:"pushing-the-policy"},"Pushing the policy"),(0,r.kt)("p",null,"Now that the policy is annotated we can push it to an OCI\nregistry. Let's do that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kwctl push annotated-policy.wasm registry.my-company.com/kubewarden/no-default-namespace:v0.0.1\nPolicy successfully pushed\n")),(0,r.kt)("p",null,"Now our Rego policy targeting the OPA framework has everything it\nneeds to be deployed in production by creating a\n",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy"),". Let's prepare that too. First, we have to\npull the policy into the ",(0,r.kt)("inlineCode",{parentName:"p"},"kwctl")," local store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ kwctl pull registry://registry.my-company.com/kubewarden/no-default-namespace:v0.0.1\npulling policy...\n")),(0,r.kt)("p",null,"Let's create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," out of it. This operation will\ntake into account the metadata it has about the policy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ kwctl manifest registry://registry.my-company.com/kubewarden/no-default-namespace:v0.0.1 --type ClusterAdmissionPolicy\n---\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: generated-policy\nspec:\n  module: "registry://registry.my-company.com/kubewarden/no-default-namespace:v0.0.1"\n  settings: {}\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - "*"\n      resources:\n        - "*"\n      operations:\n        - CREATE\n  mutating: false\n')),(0,r.kt)("p",null,"You can now use this ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," as a base to target the\nresources that you want, or deploy to Kubernetes as is."))}m.isMDXComponent=!0}}]);