import{d as m,a as p,o as r,c as l,b as t,u as d,F as f,r as u,t as i,e as _}from"./index.805f886c.js";const g=m({id:"counter",state:()=>({aniNotice:"",aniRolls:Array(),aniRandom:Array()}),getters:{},actions:{}}),v={class:"home"},R=t("div",{class:"p-12 h-[30vh] min-h-[20rem] bg-stage flex flex-wrap items-center select-none"},[t("div",{class:"w-full"},[t("h1",{class:"text-5xl font-bold"},"\u2728 Aqua Rolls \u269D"),t("p",{class:"text-2xl pt-4 pb-8"},"Come roll for waifus :)")])],-1),y={class:"flex flex-no-wrap gap-4 p-8"},x={key:0,class:"grid grid-cols-2 md:grid-cols-5 p-8 pb-16 gap-4 w-full"},b={class:"bg-gray-200 text-gray-700 border-l-4 border-gray-700 px-3 py-2 overflow-hidden shadow-lg"},w={class:"pt-2 pb-4 flex-grow"},k={class:"text-lg pb-1 font-bold"},j={class:"pb-1"},I=_("\u{1F48E}\u2002"),P=["href"],A=["src"],F={class:"py-2 flex-grow"},N={class:"text-sm"},D={key:1},n=g(),S={data(){return{}},methods:{async fetchAniRolls(){let e=[],o=[];for(let a=0;a<3;a++)e.push(this.randomIntFromInterval(1,1519));for(let a in e){let s=`
          {
            Page(page:${e[a]}, perPage:50) {
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
        `,c=await(await fetch("https://graphql.anilist.co/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:s})})).json();for(let h in c.data.Page.characters)o.push(c.data.Page.characters[h])}return n.aniRolls=o,o},async fetchRandomRolls(){let e;try{e=await this.fetchAniRolls()}catch{return n.aniNotice="Error: Failed to fetch data"}let o=[e[6],e[12],e[59],e[72],e[94],e[102],e[118],e[124],e[146],e[149]];n.aniRandom=o},randomIntFromInterval(e,o){return Math.floor(Math.random()*(o-e+1)+e)}}},E=p({...S,__name:"Home",setup(e){return(o,a)=>(r(),l("div",v,[R,t("div",y,[t("div",{class:"inline-block cursor-pointer p-4 bg-gray-600 text-white rounded-md",onClick:a[0]||(a[0]=s=>o.fetchRandomRolls())}," Roll for Characters ")]),d(n).aniRandom?(r(),l("div",x,[(r(!0),l(f,null,u(d(n).aniRandom,s=>(r(),l("div",{key:s.id,class:"rounded-md overflow-hidden"},[t("div",b,[t("div",w,[t("div",k,i(s.name.userPreferred),1),t("div",j,i(s.media.nodes[0].title.romaji),1),t("div",null,[I,t("a",{href:s.media.nodes[0].siteUrl,class:"text-gray-600",target:"_blank",rel:"noopener noreferrer"},i(s.media.nodes[0].id),9,P)])]),t("img",{src:s.image.large,class:"object-cover w-full h-64 rounded"},null,8,A),t("div",F,[t("div",N,"ID: "+i(s.id),1)])])]))),128))])):(r(),l("div",D,i(d(n).aniNotice),1))]))}});export{E as default};
