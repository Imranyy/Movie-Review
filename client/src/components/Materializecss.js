import M  from "@mui/material/Materialize";

document.addEventListener('DOMContentLoaded', function(){
//nav menu
const menu=document.querySelector('.sidenav');
M.Sidenav.init(menu, {edge:'left'});
//carousel
const elems = document.querySelectorAll('.carousel.carousel-slider');
M.Carousel.init(elems, {fullWidth: true,
    indicators: true});
   
}) 

