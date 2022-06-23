import{d as h,a as f,o as n,c as i,b as t,F as p,r as m,u,t as c}from"./index.11947f99.js";const g=h({id:"counter",state:()=>({aniRolls:[],aniRandom:[]}),getters:{},actions:{}}),_={class:"home"},R=t("div",{class:"p-12 h-[30vh] min-h-[20rem] bg-stage flex flex-wrap items-center select-none"},[t("div",{class:"w-full"},[t("h1",{class:"text-5xl font-bold"},"\u2728 Aqua Rolls \u269D"),t("p",{class:"text-2xl pt-4 pb-8"},"Come roll for waifus :)")])],-1),v={class:"flex flex-no-wrap gap-4 p-8"},w={class:"grid grid-cols-2 md:grid-cols-5 p-8 pb-16 gap-4 w-full"},x={class:"bg-gray-200 text-gray-700 rounded-md overflow-hidden shadow-lg"},b={class:"p-4 flex-grow"},y={class:"text-lg font-bold"},P=["src"],j={class:"p-4 flex-grow"},k={class:"text-sm"},D={data(){return{}},methods:{async fetchAniRolls(){let e=[591,951,1519],s=[];for(let l in e){let o=`
          {
            Page(page:${e[l]}, perPage:50) {
              characters(sort:ID) {
                name {
                  first
                  middle
                  last
                  full
                  native
                  userPreferred
                }
                image {
                  large
                  medium
                }
                id
              }
            }
          }
        `,r=await(await fetch("https://graphql.anilist.co/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:o})})).json();for(let d in r.data.Page.characters)s.push(r.data.Page.characters[d])}return this.store.aniRolls=s,s},async fetchRandomRolls(){let e=await this.fetchAniRolls(),s=[e[6],e[12],e[59],e[72],e[94],e[102],e[118],e[124],e[146],e[149]];this.store.aniRandom=s}}},A=f({...D,__name:"Home",setup(e){const s=g();return(l,o)=>(n(),i("div",_,[R,t("div",v,[t("div",{class:"inline-block cursor-pointer p-4 bg-gray-600 text-white rounded-md",onClick:o[0]||(o[0]=a=>l.fetchRandomRolls())}," Roll for Characters ")]),t("div",w,[(n(!0),i(p,null,m(u(s).aniRandom,a=>(n(),i("div",{key:a},[t("div",x,[t("div",b,[t("div",y,c(a.name.userPreferred),1)]),t("img",{src:a.image.large,class:"object-cover w-full h-64"},null,8,P),t("div",j,[t("div",k,"ID: "+c(a.id),1)])])]))),128))])]))}});export{A as default};
