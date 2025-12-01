import{c as f,_ as r}from"./codePreview.a08e92cc.js";import{d as u,i as v,J as x,b as o,c as y,e,g as d,l as s,f as i,G as l,K as n,w as m,B as p}from"./index.c057e6d1.js";import{I as b}from"./icon-bell.6ddf1118.js";import{I as h}from"./icon-code.4c9c0299.js";const g=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Forms")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Input Mask")])],-1),w={class:"pt-5 space-y-8"},M={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},A={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},C=e("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),j=e("a",{href:"https://www.npmjs.com/package/maska",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/maska",-1),$={class:"grid grid-cols-1 xl:grid-cols-2 gap-6"},D={class:"panel"},I={class:"flex items-center justify-between mb-5"},B=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Static Mask Basic",-1),N={class:"flex items-center"},V={class:"mb-5"},P=e("p",{class:"text-white-dark mb-5"},[i("Input mask are use with "),e("span",{class:"text-danger"},"input"),i(" tags.")],-1),S={class:"grid grid-cols-1 md:grid-cols-2 items-end gap-4"},E=e("label",{for:"staticMask1",class:"text-white-dark"},`v-maska="'##-#######'" (99-9999999)`,-1),F={id:"staticMask1",type:"text",placeholder:"__-_______",class:"form-input"},G=e("label",{for:"staticMask2",class:"text-white-dark"},`v-maska="'AA-####'" (aa-9999)`,-1),J={id:"staticMask2",type:"text",placeholder:"__-____",class:"form-input"},K=e("pre",null,`<!-- static mask basic -->
<form>
  <fieldset class="grid grid-cols-1 md:grid-cols-2 items-end gap-4">
    <div>
      <label for="staticMask1" class="text-white-dark">v-maska="'##-#######'" (99-9999999)</label>
      <input id="staticMask1" type="text" placeholder="__-_______" class="form-input" v-maska="'##-#######'" />
    </div>
    <div>
      <label for="staticMask2" class="text-white-dark">v-maska="'AA-####'" (aa-9999)</label>
      <input id="staticMask2" type="text" placeholder="__-____" class="form-input" v-maska="'aa-####'" />
    </div>
  </fieldset>
</form>
`,-1),T={class:"panel"},q={class:"flex items-center justify-between mb-5"},z=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Alternate masks",-1),H={class:"flex items-center"},L={class:"mb-5"},O={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Q=e("label",{for:"altnMask1",class:"text-white-dark"},`v-maska="'##.#'" (99.9)`,-1),R={id:"altnMask1",type:"text",placeholder:"__._",class:"form-input"},U=e("label",{for:"altnMask2",class:"text-white-dark"},`v-maska="'##.##'" (99.99)`,-1),W={id:"altnMask2",type:"text",placeholder:"__.__",class:"form-input"},X=e("pre",null,`<!-- alternate masks -->
<form>
  <fieldset class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label for="altnMask1" class="text-white-dark">v-maska="'##.#'" (99.9)</label>
      <input id="altnMask1" type="text" placeholder="__._" class="form-input" v-maska="'##.#'" />
    </div>
    <div>
      <label for="altnMask2" class="text-white-dark">v-maska="'##.##'" (99.99)</label>
      <input id="altnMask2" type="text" placeholder="__.__" class="form-input" v-maska="'##.##'" />
    </div>
  </fieldset>
</form>
`,-1),Y={class:"panel"},Z={class:"flex items-center justify-between mb-5"},ee=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Dynamic Syntax",-1),te={class:"flex items-center"},se={class:"mb-5"},ae={class:"grid grid-cols-1 md:grid-cols-3 items-end gap-4"},le=e("label",{for:"dynamicMask1",class:"text-white-dark"},`v-maska="'#-AAA###'" (9-a{1,3}9{1,3})`,-1),ie={id:"dynamicMask1",type:"text",placeholder:"_-__",class:"form-input"},oe=e("label",{for:"dynamicMask2",class:"text-white-dark"},`v-maska="'AA-####'" (aa-9{1,4})`,-1),de={id:"dynamicMask2",type:"text",placeholder:"__-____",class:"form-input"},ce=e("label",{for:"dynamicMask3",class:"text-white-dark"},`v-maska="'AA-##'" (aa-9{1,2})`,-1),_e={id:"dynamicMask3",type:"text",placeholder:"__-__",class:"form-input"},re=e("pre",null,`<!-- dynamic syntax -->
<form>
  <fieldset class="grid grid-cols-1 md:grid-cols-3 items-end gap-4">
    <div>
      <label for="dynamicMask1" class="text-white-dark">v-maska="'#-AAA###'" (9-a{1,3}9{1,3})</label>
      <input id="dynamicMask1" type="text" placeholder="_-__" class="form-input" v-maska="'#-AAA###'" />
    </div>
    <div>
      <label for="dynamicMask2" class="text-white-dark">v-maska="'AA-####'" (aa-9{1,4})</label>
      <input id="dynamicMask2" type="text" placeholder="__-____" class="form-input" v-maska="'AA-####'" />
    </div>
    <div>
      <label for="dynamicMask3" class="text-white-dark">v-maska="'AA-##'" (aa-9{1,2})</label>
      <input id="dynamicMask3" type="text" placeholder="__-__" class="form-input" v-maska="'AA-##'" />
    </div>
  </fieldset>
</form>
`,-1),ne={class:"panel"},me={class:"flex items-center justify-between mb-5"},pe=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Date",-1),he={class:"flex items-center"},ke={class:"mb-5"},fe={class:"grid grid-cols-1 md:grid-cols-3 items-end gap-4"},ue=e("label",{for:"dateMask1",class:"text-white-dark"},`v-maska="'##/##/####'" (dd/mm/yyyy)`,-1),ve={id:"dateMask1",type:"text",placeholder:"__/__/____",class:"form-input"},xe=e("label",{for:"dateMask2",class:"text-white-dark"},`v-maska="'##-##-####'" (99-99-9999)`,-1),ye={id:"dateMask2",type:"text",placeholder:"__-__-____",class:"form-input"},be=e("label",{for:"dateMask3",class:"text-white-dark"},`v-maska="'## December, ####'" (99 December, 9999)`,-1),ge={id:"dateMask3",type:"text",placeholder:"__ December, ____",class:"form-input"},we=e("pre",null,`<!-- date -->
<form>
  <fieldset class="grid grid-cols-1 md:grid-cols-3 items-end gap-4">
    <div>
      <label for="dateMask1" class="text-white-dark">v-maska="'##/##/####'" (dd/mm/yyyy)</label>
      <input id="dateMask1" type="text" placeholder="__/__/____" class="form-input" v-maska="'##/##/####'" />
    </div>
    <div>
      <label for="dateMask2" class="text-white-dark">v-maska="'##-##-####'" (99-99-9999)</label>
      <input id="dateMask2" type="text" placeholder="__-__-____" class="form-input" v-maska="'##-##-####'" />
    </div>
    <div>
      <label for="dateMask3" class="text-white-dark">v-maska="'## December, ####'" (99 December, 9999)</label>
      <input id="dateMask3" type="text" placeholder="__ December, ____" class="form-input" v-maska="'## December, ####'" />
    </div>
  </fieldset>
</form>
`,-1),Me={class:"panel"},Ae={class:"flex items-center justify-between mb-5"},Ce=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"IP",-1),je={class:"flex items-center"},$e={class:"mb-5"},De=e("label",{for:"ipMask",class:"text-white-dark"},`v-maska="'###.###.###.###'" (192.198.1.1)`,-1),Ie={id:"ipMask",type:"text",placeholder:"___.___.___.___",class:"form-input"},Be=e("pre",null,`<!-- ip -->
<form>
  <fieldset>
    <label for="ipMask" class="text-white-dark">v-maska="'###.###.###.###'" (192.198.1.1)</label>
    <input id="ipMask" type="text" placeholder="___.___.___.___" class="form-input" v-maska="'###.###.###.###'" />
  </fieldset>
</form>
`,-1),Ne={class:"panel"},Ve={class:"flex items-center justify-between mb-5"},Pe=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Phone",-1),Se={class:"flex items-center"},Ee={class:"mb-5"},Fe=e("label",{for:"phoneMask",class:"text-white-dark"},`v-maska="'(###) ###-####'" ((999) 999-9999)`,-1),Ge={id:"phoneMask",type:"text",placeholder:"(___) ___-____",class:"form-input"},Je=e("pre",null,`<!-- phone -->
<form>
  <fieldset>
    <label for="phoneMask" class="text-white-dark">v-maska="'(###) ###-####'" ((999) 999-9999)</label>
    <input id="phoneMask" type="text" placeholder="(___) ___-____" class="form-input" v-maska="'(###) ###-####'" />
  </fieldset>
</form>
`,-1),Ke={class:"panel"},Te={class:"flex items-center justify-between mb-5"},qe=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Currency",-1),ze={class:"flex items-center"},He={class:"mb-5"},Le=e("label",{for:"currencyMask",class:"text-white-dark"},"$999,9999,999.99",-1),Oe={id:"currencyMask",type:"text",placeholder:"$___,____,___.__",class:"form-input"},Qe=e("pre",null,`<!-- currency -->
<form>
  <fieldset>
    <label for="currencyMask" class="text-white-dark">$999,9999,999.99</label>
    <input id="currencyMask" type="text" placeholder="$___,____,___.__" class="form-input" v-maska="'$###,####,###.##'" />
  </fieldset>
</form>
`,-1),et=u({__name:"input-mask",setup(Re){v({title:"Input Mask"});const{codeArr:c,toggleCode:_}=f();return(Ue,t)=>{const a=x("maska");return o(),y("div",null,[g,e("div",w,[e("div",M,[e("div",A,[d(b)]),C,j]),e("div",$,[e("div",D,[e("div",I,[B,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=k=>s(_)("code1"))},[e("span",N,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",V,[P,e("form",null,[e("fieldset",S,[e("div",null,[E,l(e("input",F,null,512),[[a,"##-#######"]])]),e("div",null,[G,l(e("input",J,null,512),[[a,"aa-####"]])])])])]),s(c).includes("code1")?(o(),n(r,{key:0},{default:m(()=>[K]),_:1})):p("",!0)]),e("div",T,[e("div",q,[z,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[1]||(t[1]=k=>s(_)("code2"))},[e("span",H,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",L,[e("form",null,[e("fieldset",O,[e("div",null,[Q,l(e("input",R,null,512),[[a,"##.#"]])]),e("div",null,[U,l(e("input",W,null,512),[[a,"##.##"]])])])])]),s(c).includes("code2")?(o(),n(r,{key:0},{default:m(()=>[X]),_:1})):p("",!0)]),e("div",Y,[e("div",Z,[ee,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[2]||(t[2]=k=>s(_)("code3"))},[e("span",te,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",se,[e("form",null,[e("fieldset",ae,[e("div",null,[le,l(e("input",ie,null,512),[[a,"#-AAA###"]])]),e("div",null,[oe,l(e("input",de,null,512),[[a,"AA-####"]])]),e("div",null,[ce,l(e("input",_e,null,512),[[a,"AA-##"]])])])])]),s(c).includes("code3")?(o(),n(r,{key:0},{default:m(()=>[re]),_:1})):p("",!0)]),e("div",ne,[e("div",me,[pe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[3]||(t[3]=k=>s(_)("code4"))},[e("span",he,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",ke,[e("form",null,[e("fieldset",fe,[e("div",null,[ue,l(e("input",ve,null,512),[[a,"##/##/####"]])]),e("div",null,[xe,l(e("input",ye,null,512),[[a,"##-##-####"]])]),e("div",null,[be,l(e("input",ge,null,512),[[a,"## December, ####"]])])])])]),s(c).includes("code4")?(o(),n(r,{key:0},{default:m(()=>[we]),_:1})):p("",!0)]),e("div",Me,[e("div",Ae,[Ce,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[4]||(t[4]=k=>s(_)("code5"))},[e("span",je,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",$e,[e("form",null,[e("fieldset",null,[De,l(e("input",Ie,null,512),[[a,"###.###.###.###"]])])])]),s(c).includes("code5")?(o(),n(r,{key:0},{default:m(()=>[Be]),_:1})):p("",!0)]),e("div",Ne,[e("div",Ve,[Pe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[5]||(t[5]=k=>s(_)("code6"))},[e("span",Se,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",Ee,[e("form",null,[e("fieldset",null,[Fe,l(e("input",Ge,null,512),[[a,"(###) ###-####"]])])])]),s(c).includes("code6")?(o(),n(r,{key:0},{default:m(()=>[Je]),_:1})):p("",!0)]),e("div",Ke,[e("div",Te,[qe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[6]||(t[6]=k=>s(_)("code7"))},[e("span",ze,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",He,[e("form",null,[e("fieldset",null,[Le,l(e("input",Oe,null,512),[[a,"$###,####,###.##"]])])])]),s(c).includes("code7")?(o(),n(r,{key:0},{default:m(()=>[Qe]),_:1})):p("",!0)])])])])}}});export{et as default};
