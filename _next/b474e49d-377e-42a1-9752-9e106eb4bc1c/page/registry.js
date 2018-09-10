module.exports=__NEXT_REGISTER_PAGE("/registry",function(){var e=webpackJsonp([3],{758:function(e,t,a){e.exports=a(759)},759:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(4);var s=a.n(r);var n=a(126);var i=a.n(n);var l=a(128);var c=a(157);var o=a(158);var m=a(159);var u=[{name:"Issuer A",address:"0x9999999999999999999999999999999",website:"https://tech.gov.sg",email:"issuer@opencerts.io",phone:"+65 6666 6666"},{name:"Issuer B",address:"0x9999999999999999999999999999999",website:"https://tech.gov.sg",email:"issuer@opencerts.io",phone:"+65 6666 6666"},{name:"Issuer C",address:"0x9999999999999999999999999999999",website:"https://tech.gov.sg",email:"issuer@opencerts.io",phone:"+65 6666 6666"},{name:"Issuer D",address:"0x9999999999999999999999999999999",website:"https://tech.gov.sg",email:"issuer@opencerts.io",phone:"+65 6666 6666"}];var d=function e(){return u.map(function(e,t){return s.a.createElement("div",{key:t,className:"col-6 mb-3"},s.a.createElement("h4",null,e.name),e.address?s.a.createElement("div",null,"Certificate Store: ",e.address):"",e.website?s.a.createElement("div",null,"Website:"," ",s.a.createElement("a",{href:e.website,target:"_blank",rel:"noopener noreferrer"},e.website)):"",e.email?s.a.createElement("div",null,"Email: ",e.email):"",e.phone?s.a.createElement("div",null,"Phone: ",e.phone):"")})};var h=function e(){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row bg-brand-dark text-white p-3",style:{fontFamily:"sans-serif",fontWeight:100}},s.a.createElement("h1",null,"Registry")),s.a.createElement("div",{className:"row bg-brand-dark text-white",style:{fontFamily:"sans-serif",fontWeight:100}},s.a.createElement("div",{className:"col-6 my-3"},s.a.createElement("p",null,"The registry is a list of recognised issuers with their certificate store addresses. Certificates from these issuers can be recognised and verified by our viewer."),s.a.createElement("p",null,"Certificates with unverified issuer means that the certificate store address is not registered. This could mean that the issuer has not registered with OpenCerts or the cert"))),s.a.createElement("div",{className:"row p-3"},d()))};var v=h;var f=function e(){return s.a.createElement("div",null,s.a.createElement(c["a"],null),s.a.createElement(o["a"],{active:"registry"}),s.a.createElement(v,null),s.a.createElement(m["a"],null))};var p=t["default"]=i()(l["a"])(f)}},[758]);return{page:e.default}});