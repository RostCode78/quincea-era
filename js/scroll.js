const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const þ = console.log;

let ps = {
   posicionScroll: 0,
   cajaScroll: $('header'),
   navbar: $('.line-menu')
}

let ms = {

   start: () => {

      document.addEventListener(
         'scroll',
         ms.efectoScroll
      )

   },

   efectoScroll: () => {

      //þ(window.pageYOffset);
      // 792 - Es el paosicion del scroll fuera del Header.

      ps.posicionScroll = window.pageYOffset;

      if( ps.posicionScroll > ps.cajaScroll.offsetTop + 700) {

         ps.navbar.style.left = "100%";

      } else {

         ps.navbar.style.left = ps.posicionScroll / 7.5 - 0 + "%";
         /*==========================================
         El valor '7.5' mientras menor sea mas 
         rapido se mueve.

         Esta linea sirve para hacer que el NAVBAR
         con su estilo LEFT se vayan reduciendo
         hasta ocultar el NAVBAR
         ==========================================*/

      }

   }


}

ms.start();