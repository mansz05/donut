import{S as n,P as e,W as i,T as o,M as t,a as s,b as a,A as d}from"./vendor.b3edea0e.js";const r=new n,w=new e(75,window.innerWidth/window.innerHeight,.1,100),c=new i({canvas:document.querySelector("#bg")});c.setPixelRatio(window.devicePixelRatio),c.setSize(window.innerWidth,window.innerHeight),w.position.setZ(30),c.render(r,w);const m=new s(new o(10,3,16,100),new t({color:16737095}));r.add(m);const h=new a(16777215);h.position.set(20,10,5),r.add(h);const l=new d(16777215);l.position.set(20,20,20),r.add(l),function n(){requestAnimationFrame(n),m.rotation.x+=.005,m.rotation.y+=.003,m.rotation.z+=.001,c.render(r,w)}();
