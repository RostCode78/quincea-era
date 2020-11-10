let propScroll = {

   botones: $$('.move'),
   posicionScroll: 0,
   ruta: null,
   intervalo: null,
   destinoScroll: 0,
   padding: 0,
   modalOn: false

}

let metodosScroll = {

   start: () => {
      
      propScroll.botones.forEach(producto => {

         producto.addEventListener(
            'click',
            metodosScroll.moveScroll
         );

      });

   },

   moveScroll: (producto) => {

      producto.preventDefault();

      if ( pmH.activado ) {

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

      propScroll.ruta = producto.target.getAttribute("href");

      propScroll.destinoScroll = document.querySelector(propScroll.ruta).offsetTop-propScroll.padding;

      propScroll.intervalo = setInterval( () => {

         if( propScroll.posicionScroll < propScroll.destinoScroll ) {
            
            propScroll.posicionScroll += 100;

            if( propScroll.posicionScroll >= propScroll.destinoScroll ) {

               propScroll.posicionScroll = propScroll.destinoScroll;

               clearInterval(propScroll.intervalo);

            }

         } else {

            propScroll.posicionScroll -= 100;

            if( propScroll.posicionScroll <= propScroll.destinoScroll ) {

               propScroll.posicionScroll = propScroll.destinoScroll;

               clearInterval(propScroll.intervalo);

            }

         }

         window.scrollTo(0, propScroll.posicionScroll);

      }, 50)
      
   }

}

metodosScroll.start();