let pmH = {

   body: $('body'),
   container: $('.menu-lateral-container'),
   btnMenu: $('.btn-hamburger'),
   overMenu: $('.btn-line-menu'),
   activado: false
}

let mmH = {

   start: () => {

      pmH.btnMenu.addEventListener(
         'click',
         mmH.action
      )

   },

   action: () => {

      if ( !pmH.activado ) {

         pmH.body.style.overflow = "hidden";
         pmH.overMenu.style.zIndex = "20000";
         pmH.overMenu.style.opacity = "0";
         setTimeout(() => {
            pmH.overMenu.style.transition = ".4s ease";
            pmH.overMenu.style.opacity = "1";
            pmH.btnMenu.style.transition = ".4s ease";
            pmH.btnMenu.style.boxShadow = "4px 4px 8px #00000021, -4px -4px 8px #ffffff21, inset 4px 4px 8px #00000021, inset -4px -4px 8px #ffffff21";
         }, 300);


         pmH.container.style.transition = ".4s ease";
         pmH.container.style.marginRight = "0%";
         setTimeout(() => {
            pmH.container.style.backgroundColor = "#303030e8";
         }, 400);

         pmH.activado = true;

      } else {

         pmH.body.style.overflow = "initial";
         pmH.overMenu.style.zIndex = "900";
         pmH.overMenu.style.opacity = "1";
         setTimeout(() => {
            pmH.overMenu.style.transition = ".4s ease";
            pmH.overMenu.style.opacity = "1";
            pmH.btnMenu.style.transition = ".4s ease";
            pmH.btnMenu.style.boxShadow = "4px 4px 8px #00000021, -4px -4px 8px #ffffff21";
         }, 300);


         pmH.container.style.backgroundColor = "#30303000";
         setTimeout(() => {
            pmH.container.style.transition = ".4s ease";
            pmH.container.style.marginRight = "-100%";
         }, 400);

         pmH.activado = false;

         if ( psm.modalAbierto ) {

            psm.modalContainer.style.display = "none";
            psm.btnMenu.style.zIndex = "900";
            psm.body.style.overflow = "initial";
            psm.modalAbierto = false;

         }

         if ( pAmigos.openAllModal ) {

            pAmigos.box.style.display = "none";
            pAmigos.btnMenu.style.zIndex = "900";
            pAmigos.body.style.overflow = "initial";
            pAmigos.openAllModal = false;

         }

      }

   }

}

mmH.start();