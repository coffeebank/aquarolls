import{d as p,a as m,o as n,c as i,b as t,u as d,F as f,r as _,t as l,e as u}from"./index.5a337230.js";const g=p({id:"counter",state:()=>({aniNotice:"",aniRolls:Array(),aniRandom:Array()}),getters:{},actions:{}}),v={class:"home"},R=t("div",{class:"p-12 h-[30vh] min-h-[20rem] bg-stage flex flex-wrap items-center select-none"},[t("div",{class:"w-full"},[t("h1",{class:"text-5xl font-bold"},"\u2728 Aqua Rolls \u269D"),t("p",{class:"text-2xl pt-4 pb-8"},"Come roll for waifus :)")])],-1),y={class:"flex flex-no-wrap gap-4 p-8"},x={key:0,class:"grid grid-cols-2 md:grid-cols-5 p-8 pb-16 gap-4 w-full"},b={class:"bg-gray-200 text-gray-700 border-l-4 border-gray-700 px-3 py-2 overflow-hidden shadow-lg"},w={class:"pt-2 pb-4 flex-grow"},k={class:"text-lg pb-1 font-bold"},j={class:"pb-1"},P=u("\u{1F48E}\u2002"),A=["href"],N=["src"],D={class:"py-2 flex-grow"},S={class:"text-sm"},F={key:1},a=g(),q={data(){return{}},methods:{async fetchAniRolls(){let e=[591,951,1519],o=[];for(let r in e){let s=`
          {
            Page(page:${e[r]}, perPage:50) {
              characters(sort:ID) {
                name {
                  full
                  native
                  userPreferred
                }
                image {
                  large
                  medium
                }
                id
                media {
                  nodes {
                    title {
                      romaji
                      english
                      native
                    }
                    id
                    siteUrl
                  }
                }
              }
            }
          }
        `,c=await(await fetch("https://graphql.anilist.co/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:s})})).json();for(let h in c.data.Page.characters)o.push(c.data.Page.characters[h])}return a.aniRolls=o,o},async fetchRandomRolls(){let e;try{e=await this.fetchAniRolls()}catch{return a.aniNotice="Error: Failed to fetch data"}let o=[e[6],e[12],e[59],e[72],e[94],e[102],e[118],e[124],e[146],e[149]];a.aniRandom=o}}},I=m({...q,__name:"Home",setup(e){return(o,r)=>(n(),i("div",v,[R,t("div",y,[t("div",{class:"inline-block cursor-pointer p-4 bg-gray-600 text-white rounded-md",onClick:r[0]||(r[0]=s=>o.fetchRandomRolls())}," Roll for Characters ")]),d(a).aniRandom?(n(),i("div",x,[(n(!0),i(f,null,_(d(a).aniRandom,s=>(n(),i("div",{key:s.id,class:"rounded-md overflow-hidden"},[t("div",b,[t("div",w,[t("div",k,l(s.name.userPreferred),1),t("div",j,l(s.media.nodes[0].title.romaji),1),t("div",null,[P,t("a",{href:s.media.nodes[0].siteUrl,class:"text-gray-600",target:"_blank",rel:"noopener noreferrer"},l(s.media.nodes[0].id),9,A)])]),t("img",{src:s.image.large,class:"object-cover w-full h-64 rounded"},null,8,N),t("div",D,[t("div",S,"ID: "+l(s.id),1)])])]))),128))])):(n(),i("div",F,l(d(a).aniNotice),1))]))}});export{I as default};
