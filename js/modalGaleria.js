let pGaleria = {

   fotos: $$('.modal-fotos'),
   btnMenu: $('.btn-line-menu'),
   container: $('.container-all'),
   secondColor: $$('.background-second-color'),
   btnCerrar: $('.btn-cerrar-amigos'),
   body: $('body'),
   box: $('.modal')

};

let mGaleria = {

   start: () => {

      pGaleria.fotos.forEach( e => {

         e.addEventListener(
            'click',
            mGaleria.abrirModal
         )

      });

   },

   abrirModal: e => {

      pGaleria.box.style.display = "flex";
      pGaleria.box.style.backgroundColor = "#303030ed";
      pGaleria.secondColor[1].style.backgroundColor = "#ffddfc5c";
      pGaleria.btnCerrar.style.backgroundColor = "#ffddfc5c";
      pGaleria.btnCerrar.style.border = "3px solid #ffddfc1a";
      pGaleria.btnMenu.style.zIndex = "9000";
      pGaleria.body.style.overflow = "hidden";
      pAmigos.openAllModal = true;

      if ( e.target == pGaleria.fotos[0] ) {

         pGaleria.container.innerHTML = `
            <div class="img-galeria${1}"></div>
         `;

      } else if ( e.target == pGaleria.fotos[1] ) {

         pGaleria.container.innerHTML = `
            <div class="img-galeria${2}">
         `;

      } else if ( e.target.innerText == pGaleria.fotos[2].innerText ) {

         pGaleria.container.innerHTML = `
            <div class="img-galeria${3}">
         `;

      } else if ( e.target == pGaleria.fotos[3] ) {

         pGaleria.container.innerHTML = `
            <div class="img-galeria${4}">
         `;

      } else if ( e.target == pGaleria.fotos[4] ) {

         pGaleria.container.innerHTML = `
            <div class="img-galeria${5}">
         `;

      } else if ( e.target.innerText == pGaleria.fotos[5].innerText ) {

         pGaleria.container.innerHTML = `
            <div class="img-galeria${6}">
         `;

      } else {

         pGaleria.container.innerHTML = `
            <div class="img-galeria${7}">
         `;

      }

   }

};

mGaleria.start();