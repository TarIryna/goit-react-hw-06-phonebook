(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={filter:"FilterInput_filter__2gqem",input:"FilterInput_input__2m243"}},17:function(t,e,n){t.exports={Container:"Container_Container__3m6cZ"}},24:function(t,e,n){},3:function(t,e,n){t.exports={form:"Form_form__1GUXa",labels:"Form_labels__1kwW_",name:"Form_name__uLeq2",input:"Form_input__1Uk5D",button:"Form_button__3k-L4"}},38:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),i=(n(24),n(15)),s=n(3),u=n.n(s),l=n(2),b="contacts/add",m="contacts/delete",j="contacts/changeFilter",d=n(16),f=n.n(d),h=function(t,e){return{type:b,payload:{id:f.a.generate(),name:t,number:e}}},p=function(t){return{type:m,payload:t}},O=function(t){return{type:j,payload:t}},_=n(1),x=Object(l.b)(null,(function(t){return{onSubmit:function(e,n){return t(h(e,n))}}}))((function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),b=l[0],m=l[1],j=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}},d=function(){o(""),m("")};return Object(_.jsxs)("form",{className:u.a.form,onSubmit:function(t){t.preventDefault(),e(r,b),d()},children:[Object(_.jsxs)("div",{className:u.a.labels,children:[Object(_.jsxs)("label",{className:u.a.name,children:["Name",Object(_.jsx)("input",{className:u.a.input,type:"text",name:"name",value:r,onChange:j})]}),Object(_.jsxs)("label",{className:u.a.name,children:["Number",Object(_.jsx)("input",{className:u.a.input,type:"tel",name:"number",value:b,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})]}),Object(_.jsx)("button",{className:u.a.button,type:"submit",children:"Add contact"},"submitBtn")]})})),v=n(17),g=n.n(v);function y(t){var e=t.children;return Object(_.jsx)("div",{className:g.a.Container,children:e})}var N=n(5),k=n.n(N);function C(t){var e=t.name,n=t.number,a=t.onClick;return Object(_.jsxs)(_.Fragment,{children:[e,": ",Object(_.jsxs)("span",{className:k.a.number,children:[" ",n," "]}),Object(_.jsx)("button",{className:k.a.button,type:"button",onClick:a,children:"Delete"})]})}var F=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},S=Object(l.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:F(n,a)}}),(function(t){return{deleteContact:function(e){return t(p(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact;return Object(_.jsx)("ul",{className:k.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(_.jsx)("li",{className:k.a.name,children:Object(_.jsx)(C,{name:a,number:c,onClick:function(){return n(e)}})},e)}))})})),w=n(10),L=n.n(w),D=Object(l.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{changeFilter:function(e){return t(O(e))}}}))((function(t){var e=t.filter,n=t.changeFilter;return Object(_.jsx)("div",{className:L.a.filter,children:Object(_.jsxs)("label",{className:L.a.label,children:["Find contacts by name",Object(_.jsx)("input",{className:L.a.input,type:"text",name:"filter",value:e,onChange:function(t){return n(t.currentTarget.value)}})]})})}));n(38);function I(){return Object(_.jsxs)(y,{children:[Object(_.jsx)("h1",{children:" Phonebook "}),Object(_.jsx)(x,{}),Object(_.jsx)("h2",{children:" Contacts "}),Object(_.jsx)(D,{}),Object(_.jsx)(S,{})]})}var P=n(4),J=n(14),T=n(18),q=n.n(T),A=Object(P.combineReducers)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(localStorage.getItem("contacts")),e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case b:var c=t.find((function(t){return t.name===a.name}));return c?(q.a.Notify.failure("".concat(c.name," is already in contacts")),t):(localStorage.setItem("contacts",JSON.stringify([].concat(Object(J.a)(t),[a]).sort())),[].concat(Object(J.a)(t),[a]).sort());case m:return t.filter((function(t){return t.id!==a}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;return n===j?a:t}}),B=n(19),R=Object(P.combineReducers)({contacts:A}),U=Object(P.createStore)(R,Object(B.composeWithDevTools)());n(40);o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(l.a,{store:U,children:Object(_.jsx)(I,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={name:"Phonebook_name__2A6Yg",contactList:"Phonebook_contactList__9k1Da",number:"Phonebook_number__1yTd5",button:"Phonebook_button__2tlSh"}}},[[41,1,2]]]);
//# sourceMappingURL=main.854dae6f.chunk.js.map