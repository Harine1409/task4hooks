(this.webpackJsonpreacthooks=this.webpackJsonpreacthooks||[]).push([[0],{25:function(t,e,n){},37:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),s=n(26),i=n.n(s),r=(n(37),n(10)),j=(n(25),n(64)),a=n(67),b=n(66),u=n(3);function l(t){var e=Object(c.useState)(!0),n=Object(r.a)(e,2),o=n[0],s=n[1];return Object(u.jsxs)(j.a,{sx:{minWidth:275},children:[Object(u.jsxs)(b.a,{children:[Object(u.jsxs)("typography",{gutterBottom:!0,children:[Object(u.jsx)("br",{}),t.heading]}),Object(u.jsx)("typography",{variant:"h5",component:"div"}),Object(u.jsx)("br",{}),Object(u.jsx)("typography",{sx:{mb:1.5},color:"text.secondary",children:t.subheading}),Object(u.jsx)("br",{}),Object(u.jsx)("typography",{variant:"body2",children:t.description}),Object(u.jsx)("br",{})]}),Object(u.jsx)(a.a,{children:t.toggleFunctionality?Object(u.jsx)("button",{onClick:function(){return t.toggleFunctionality(!o),void s(!o)},children:"mount/unmount"}):Object(u.jsx)("button",{children:"notoggle"})})]})}var d=function(t){var e=Object(c.useState)(5),n=Object(r.a)(e,2),o=n[0],s=n[1];return Object(c.useEffect)((function(){console.log("use effect from mounting state")}),[]),Object(c.useEffect)((function(){console.log("use effect from updating state")}),[o]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{children:[t.componentname," component "]}),Object(u.jsx)(l,{heading:"counter component",subheading:"Class Component",description:"decription of card"}),Object(u.jsxs)("h4",{children:["intitial value:",o]}),Object(u.jsx)("button",{className:"btn",onClick:function(){return s(o+1)},children:"increment"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return s(o-1)},children:"decrement"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"btn",onClick:function(){return s(5)},children:"reset"})]})};var h=function(t){var e=Object(c.useState)(!0),n=Object(r.a)(e,2),o=n[0],s=n[1],i=Object(c.useState)(5),j=Object(r.a)(i,2),a=j[0],b=j[1];return Object(c.useEffect)((function(){console.log("use effect from mounting state")}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{heading:"App Component",subheading:"Home Component",description:"this is the home component after index.js page",toggleFunctionality:function(t){s(!t)}})," ",Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(){return b(a+5)},children:"update counter"}),Object(u.jsx)("br",{}),o?Object(u.jsx)(d,{componentName:"Counter"}):Object(u.jsx)(u.Fragment,{})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),s(t),i(t)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),O()}},[[44,1,2]]]);
//# sourceMappingURL=main.587279f0.chunk.js.map