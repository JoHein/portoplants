(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),o=(a(73),a(8)),i=a(9),u=a(11),s=a(10),m=a(12),d=(a(74),a(23)),p=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{id:"hero"},r.a.createElement("div",{className:"hero-container"},r.a.createElement("h1",null,"Mad About Plants"),r.a.createElement("h2",null,"Wholesale nursery"),r.a.createElement(d.LinkContainer,{to:"/products"},r.a.createElement("a",{href:"/products",className:"btn-get-started"},"Get Started")))))}}]),t}(n.Component),h=a(120),E=a(122),f=a(17),g=a(18),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(d.IndexLinkContainer,{to:"/portoplants"},r.a.createElement(h.a.Brand,null,r.a.createElement(g.a,{icon:f.a}))),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(E.a,{className:"justify-content-end",style:{width:"100%"}},r.a.createElement(d.LinkContainer,{to:"/cart"},r.a.createElement(E.a.Link,null,r.a.createElement(g.a,{icon:f.d}))),r.a.createElement(d.LinkContainer,{to:"/products"},r.a.createElement(E.a.Link,null,"Products")),r.a.createElement(d.LinkContainer,{to:"/about"},r.a.createElement(E.a.Link,null,"About"))))))}}]),t}(n.Component),y=a(114),v=a(115),P=a(64),O=a(119),j=a(116),C=a(63),w=a.n(C),k=function(e){var t=e.text;return r.a.createElement("div",null,t)},x=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"40vh",width:"100%"}},r.a.createElement(w.a,{defaultCenter:this.props.center,defaultZoom:this.props.zoom},r.a.createElement(k,{lat:59.955413,lng:30.337844,text:"Where's Waldo?"})))}}]),t}(n.Component);x.defaultProps={center:{lat:59.95,lng:30.33},zoom:11};var N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(v.a,{className:"justify-content-md-center"},r.a.createElement(P.a,{md:"auto"},r.a.createElement("blockquote",null,r.a.createElement("strong",null,"Mad About Plants")),r.a.createElement("p",null,"P.O.Box 468 ",r.a.createElement("br",null),"EDMONTON QLD 4869",r.a.createElement("br",null),"Ph 0740452777",r.a.createElement("br",null),"Fax 0740555469 ",r.a.createElement("br",null))),r.a.createElement(P.a,{xs:!0,lg:"4"},r.a.createElement(x,null))),r.a.createElement(v.a,{className:"justify-content-md-center"},r.a.createElement(P.a,{xs:!0,lg:"6"},r.a.createElement(O.a,null,r.a.createElement(v.a,null,r.a.createElement(P.a,null,r.a.createElement(O.a.Label,null,"First Name"),r.a.createElement(O.a.Control,{placeholder:"First name"})),r.a.createElement(P.a,null,r.a.createElement(O.a.Label,null,"Last Name"),r.a.createElement(O.a.Control,{placeholder:"Last name"}))),r.a.createElement(O.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(O.a.Label,null,"Email address"),r.a.createElement(O.a.Control,{type:"email",placeholder:"name@example.com"})),r.a.createElement(O.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(O.a.Label,null,"Enquiry"),r.a.createElement(O.a.Control,{as:"textarea",placeholder:"Message",rows:"3"}))),r.a.createElement(j.a,{variant:"primary",type:"submit"},"Submit")))))}}]),t}(n.Component),A=a(37),L=a(117),T=a(121),S=a(118),I=a(66),M=a(123),D=a(26),Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){a.setState({search:e.target.value})},a.handleChangeSelected=function(e){a.setState({typeM:e.target.value})},a.handleAddProduct=function(e){a.props.addToCart(e)},a.state={search:"",typeM:"",productPerPage:4,currentPage:1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.products.filter(function(t){return""!=(e.state.search||e.state.typeM)?-1!==t.name.toLowerCase().indexOf(e.state.search.toLowerCase())&&-1!==t.model.toLowerCase().indexOf(e.state.typeM.toLowerCase()):-1!==t.name.toLowerCase().indexOf(e.state.search.toLowerCase())&&-1!==t.model.toLowerCase().indexOf(e.state.typeM.toLowerCase())&&t.id>e.state.currentPage*e.state.productPerPage-e.state.productPerPage&&t.id<=e.state.currentPage*e.state.productPerPage}).map(function(t,a){return r.a.createElement(P.a,{lg:"3",className:"grid-products"},r.a.createElement(L.a,null,r.a.createElement(T.a,{style:{width:"16rem"},key:t.id},r.a.createElement(T.a.Img,{variant:"top",height:"190.5px",src:"/portoplants"+"/img/plants/".concat(t.image)}),r.a.createElement(T.a.Body,null,r.a.createElement(T.a.Title,null,t.name),r.a.createElement(T.a.Text,null,t.description)),r.a.createElement(S.a,{className:"list-group-flush"},r.a.createElement(I.a,null,r.a.createElement("strong",null,"Price:")," $",t.price),r.a.createElement(I.a,null,r.a.createElement("strong",null," Model:")," ",t.model),r.a.createElement(I.a,null,r.a.createElement("strong",null," Size:")," ",t.size)),r.a.createElement(T.a.Footer,null,r.a.createElement(j.a,{onClick:function(){e.handleAddProduct(t.id)},className:"addBtn",variant:"primary"},r.a.createElement(g.a,{icon:f.c})," Add ")))))}),a=[];this.props.products.forEach(function(e){var t=e.id,n=e.model;return a.push({id:t,model:n})});var n,l=Object(A.a)(new Set(a.map(function(e){return e.model}))).sort().map(function(e,t){return r.a.createElement("option",{key:t},e)});t.length<=0&&(n=r.a.createElement(P.a,null,r.a.createElement("h3",null,"No result found")));for(var c=[],o=1;o<=Math.ceil(this.props.products.length/this.state.productPerPage);o++)c.push(o);var i=function(t){return t>=1&&t<=c.length?void e.setState({currentPage:t}):t>c.length?e.setState({currentPage:c.length}):e.setState({currentPage:1})};return r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(v.a,null,r.a.createElement(P.a,{lg:4},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{className:"form-control",type:"text",name:"search",placeholder:"Search",value:this.state.search,onChange:this.handleChange.bind(this)}))),r.a.createElement(P.a,{lg:3},r.a.createElement("select",{className:"custom-select",onChange:this.handleChangeSelected.bind(this)},r.a.createElement("option",{defaultValue:!0,value:""},"Choose model..."),l))),r.a.createElement(v.a,null,t,n),r.a.createElement(v.a,{className:"justify-content-md-center"},r.a.createElement(P.a,{md:"auto"},r.a.createElement(M.a,{size:"sm"},r.a.createElement(M.a.Prev,{onClick:function(){return i(e.state.currentPage-1)}}),r.a.createElement(M.a.Item,{active:1===this.state.currentPage,onClick:function(){return i(1)}},1),this.state.currentPage>1?r.a.createElement(M.a.Ellipsis,null):null,this.state.currentPage>1?r.a.createElement(M.a.Item,{onClick:function(){return i(e.state.currentPage-1)}},this.state.currentPage-1):null,this.state.currentPage>1&&this.state.currentPage<Math.ceil(this.props.products.length/this.state.productPerPage)?r.a.createElement(M.a.Item,{active:1!==this.state.currentPage,onClick:function(){return i(e.state.currentPage)}},this.state.currentPage,"M"):null,this.state.currentPage<c.length?r.a.createElement(M.a.Item,{onClick:function(){return i(e.state.currentPage+1)}},this.state.currentPage+1):null,this.state.currentPage<c.length?r.a.createElement(M.a.Ellipsis,null):null,this.state.currentPage<=c.length?r.a.createElement(M.a.Item,{onClick:function(){return i(Math.ceil(e.props.products.length/e.state.productPerPage))}},Math.ceil(this.props.products.length/this.state.productPerPage)):null,r.a.createElement(M.a.Next,{onClick:function(){return i(e.state.currentPage+1)}}))))))}}]),t}(n.Component),z=Object(D.b)(function(e){return{products:e.products}},function(e){return{addToCart:function(t){e(function(e){return{type:"ADD_TO_CART",id:e}}(t))}}})(Q),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleRemove=function(e){a.props.removeItem(e)},a.handleAddQuantity=function(e){a.props.addQuantity(e)},a.handleSubtractQuantity=function(e){a.props.subtractQuantity(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.products.length?this.props.products.map(function(t){return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(P.a,{xs:12,md:3,className:"text-center"},r.a.createElement("img",{height:"60px",src:"/portoplants"+"/img/plants/".concat(t.image),alt:t.image})),r.a.createElement(P.a,{xs:12,md:3,className:"text-center"},r.a.createElement("div",null,r.a.createElement("p",null,"Product"),r.a.createElement("h5",null," ",t.name))),r.a.createElement(P.a,{xs:12,md:2,className:"text-center"},r.a.createElement("p",null,"Quantity "),t.quantity),r.a.createElement(P.a,{xs:12,md:2,className:"text-center"},r.a.createElement("div",null,r.a.createElement("p",null,"Price"),"$",t.price)),r.a.createElement(P.a,{xs:12,md:2,className:"text-center align-self-center"},r.a.createElement(g.a,{icon:f.c,onClick:function(){e.handleAddQuantity(t.id)}}),r.a.createElement(g.a,{icon:f.b,onClick:function(){e.handleSubtractQuantity(t.id)}}),r.a.createElement(g.a,{icon:f.e,onClick:function(){e.handleRemove(t.id)}}))))}):r.a.createElement("p",null," Nothing ");return r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement("div",{className:"cart"},r.a.createElement("h5",null,"You have ordered:"),r.a.createElement("div",null),r.a.createElement("ul",{className:"collection",id:"mapage"},t)),r.a.createElement(v.a,{className:"justify-content-end"},r.a.createElement(P.a,{className:"text-right"},r.a.createElement("h5",null,"Total: $",this.props.total.toFixed(2))))))}}]),t}(n.Component),q=Object(D.b)(function(e){return{products:e.addedProducts,total:e.total}},function(e){return{removeItem:function(t){e(function(e){return{type:"REMOVE_ITEM",id:e}}(t))},addQuantity:function(t){e(function(e){return{type:"ADD_QUANTITY",id:e}}(t))},subtractQuantity:function(t){e(function(e){return{type:"SUB_QUANTITY",id:e}}(t))}}})(_),B=a(30),F=a(20),R=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B.BrowserRouter,null,r.a.createElement(b,null),r.a.createElement("div",null,r.a.createElement(F.g,null,r.a.createElement(F.d,{exact:!0,path:"/portoplants",component:p}),r.a.createElement(F.d,{path:"/products",component:z}),r.a.createElement(F.d,{path:"/about",component:N}),r.a.createElement(F.d,{path:"/cart",component:q}),r.a.createElement(F.c,{to:"/portoplants"})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(111);var U=a(67);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach(function(t){Object(U.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Y={products:[{id:1,name:"Acalypha",price:29.9,model:"Shrub",size:"140mm",description:"A large leaf bushy shrub  to 1.5m with green & white marked leaves. Very hardy",image:"alcalypha.jpg"},{id:2,name:"Allamanda",price:14.9,model:"Shrub",size:"220mm",description:"Compact habit, small glossy green leaves, brilliant yellow trumpet flowers",image:"allamanda_sunee.jpg"},{id:3,name:"Dietes",price:14.9,model:"Groundcoverts",size:"none",description:"Clumping plant , iris like yellow flowers with brown spots",image:"dietes.jpg"},{id:4,name:"Cuphea",price:8.9,model:"Groundcoverts",size:"none",description:"Compact small shrub ideal as a border plant, bears masses of small mauve flowers",image:"cuphea.jpg"},{id:5,name:"Alexander palm",price:99.9,model:"Palm",size:"600mm",description:"Tall solitary trunk palm, grey ringed trunk, long arching fronds ",image:"alexanderpalm.jpg"},{id:6,name:"Silver lady",price:25.9,model:"Fern",size:"160mm",description:"Rosette forming fern, best grown in semi shade, bright green new growth",image:"sylverlady.jpg"}],addedProducts:[],total:0},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;if("ADD_TO_CART"===t.type){var a=e.products.find(function(e){return e.id===t.id}),n=e.addedProducts.find(function(e){return t.id===e.id});if(n)return a.quantity+=1,W({},e,{total:e.total+a.price});a.quantity=1;var r=e.total+a.price;return W({},e,{addedProducts:[].concat(Object(A.a)(e.addedProducts),[a]),total:r})}if("REMOVE_ITEM"===t.type){var l=e.addedProducts.find(function(e){return t.id===e.id}),c=e.addedProducts.filter(function(e){return t.id!==e.id}),o=e.total-l.price*l.quantity;return W({},e,{addedProducts:c,total:o})}if("ADD_QUANTITY"===t.type){var i=e.products.find(function(e){return e.id===t.id});i.quantity+=1;var u=e.total+i.price;return W({},e,{total:u})}if("SUB_QUANTITY"===t.type){var s=e.products.find(function(e){return e.id===t.id});if(1===s.quantity){var m=e.addedProducts.filter(function(e){return e.id!==t.id}),d=e.total-s.price;return W({},e,{addedProducts:m,total:d})}s.quantity-=1;var p=e.total-s.price;return W({},e,{total:p})}return e},$=a(36),J=Object($.b)(V);c.a.render(r.a.createElement(D.a,{store:J}," ",r.a.createElement(R,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){e.exports=a(112)},73:function(e,t,a){},74:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.2704a5f7.chunk.js.map