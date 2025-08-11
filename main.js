
(function(){
  var root=document.documentElement;
  try{
    var saved=localStorage.getItem("theme");
    var dark=saved? saved==="dark" : (window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);
    if(dark) root.classList.add("dark"); else root.classList.remove("dark");
  }catch(e){}
})();
function toggleTheme(){
  var root=document.documentElement;
  var dark=root.classList.toggle("dark");
  try{localStorage.setItem("theme",dark?"dark":"light");}catch(e){}
}
function countUp(el,to,dur){var s=null;function step(t){if(!s)s=t;var p=Math.min((t-s)/(dur*1000),1);el.textContent=(Math.floor(to*p))+"+";if(p<1)requestAnimationFrame(step);}requestAnimationFrame(step);}
document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll("[data-counter]").forEach(function(c){countUp(c,parseInt(c.getAttribute("data-counter")||"0",10),1.4)});
  var bar=document.querySelector(".progress");
  function onScroll(){var h=document.documentElement.scrollHeight-document.documentElement.clientHeight;var y=window.scrollY/(h||1);bar.style.transform="scaleX("+y+")";}
  window.addEventListener("scroll",onScroll,{passive:true}); onScroll();
});
