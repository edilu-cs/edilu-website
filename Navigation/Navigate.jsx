import React from 'react';
import menu from './menu.png';
import java from './java.png';

function Navigation(){
function menus(){
   const navs = document.getElementById('navs');
   if(navs.style.display === 'block'){
      navs.style.display = 'none';
      navs.style.transition = '6s ease';
     navs.style.textAlign = 'center';
      
   }else{
      navs.style.display = 'block';
      navs.style.transition = '6s ease';
    navs.style.width = '100%';
     navs.style.textAlign = 'center';
   }
   const header = document.getElementById('header');
   if(header.style.height === 'auto'){
      header.style.height = '60px';
   }else{
      header.style.height = 'auto';
   }

   const li = document.querySelectorAll('li');
   li.forEach((item) => {
      item.addEventListener('click', () => {
         navs.style.display = 'none';
         header.style.height = '60px';
         navs.style.width = 'auto';
         navs.style.transition = '6s ease';
         navs.style.textAlign = 'center';
      });
   });
}  
    return(
     <>
     <nav id="nav">
        <p id="logo"> Edilu</p>
        <li><a href="#home">Home</a> </li>
        <li><a href="#service">Service</a> </li>
        <li><a href="#business">Project</a> </li>
        <li><a href="#about">About</a> </li>
        <li><a href="#contact">Contact</a> </li>
        <button id="talks"><a href="#contact">let's Talk</a></button>
     </nav>
     <header id="header">
          <img src={java} id="java"></img>
         <img src={menu} id="menu" onClick={menus}></img>
         <div id="navs">
            <li><a href="#home">Home</a> </li>
            <li><a href="#service">Service</a> </li>
            <li><a href="#business">Project</a> </li>
            <li><a href="#about">About</a> </li>
            <li><a href="#contact">Contact</a> </li>
         </div>
     </header>
     </>
    );
}

export default Navigation;