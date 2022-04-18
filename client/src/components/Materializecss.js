import M  from "@mui/material/Materialize";

document.addEventListener('click', function(){
//nav menu
const menu=document.querySelector('.sidenav');
M.Sidenav.init(menu, {edge:'left'});
}) 
