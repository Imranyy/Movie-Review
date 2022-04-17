import M  from "./Materialize";

document.addEventListener('DOMContentLoaded', function(){
//nav menu
const menu=document.querySelector('.sidenav');
M.Sidenav.init(menu, {edge:'left'});
}) 
