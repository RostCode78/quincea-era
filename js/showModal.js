let psm = {

   btnSobreMi: $('.box-right-btn'),
   modalContainer: $('.modal-container'),
   btnMenu: $('.btn-line-menu'),
   btnCerrar: $('.btn-cerrar'),
   card: $$('.card-opacity'),
   body: $('body'),
   modalAbierto: false

}

let msm = {

   start: () => {

      psm.btnSobreMi.addEventListener(
         'click',
         msm.abrirModal
      )

      psm.btnCerrar.addEventListener(
         'click',
         msm.cerrarModal
      )

   },

   abrirModal: () => {

      psm.card[0].style.backgroundColor = "#303030d5";
      psm.modalContainer.style.display = "flex";
      psm.btnMenu.style.zIndex = "9000";
      psm.body.style.overflow = "hidden";
      psm.modalAbierto = true;

      //const sliderScript = document.createElement('script');
      //sliderScript.src = './js/sobreMiSlider.js';
      //psm.body.appendChild(sliderScript);

   },

   cerrarModal: () => {

      psm.modalContainer.style.display = "none";
      psm.btnMenu.style.zIndex = "900";
      psm.body.style.overflow = "initial";
      psm.modalAbierto = false;

   }

}

msm.start();

