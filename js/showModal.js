let psm = {

   btnSobreMi: $('.box-right-btn'),
   modalContainer: $('.modal-container'),
   btnMenu: $('.btn-line-menu'),
   sobreMiHTML: `
      <div class="modal-box">

         <div class="modal-sobre-mi-left">
            <div class="msm-image-box">
               <div class="msml-image1"></div>
               <div class="msml-image2"></div>
               <div class="msml-image3"></div>
            </div>
         </div>
         <div class="modal-sobre-mi-right">
            <div class="msmr-top">
               <div class="cards-img-container">
                  <div class="card-image1"></div>
                  <div class="card-image2"></div>
                  <div class="card-image3"></div>
               </div>
            </div>
            <div class="msmr-bottom"></div>
         </div>

      </div>
   `,
   body: $('body')

}

let msm = {

   start: () => {

      psm.btnSobreMi.addEventListener(
         'click',
         msm.abrirModal
      )

   },

   abrirModal: () => {

      psm.modalContainer.style.display = "flex";
      psm.btnMenu.style.zIndex = "9000";
      psm.modalContainer.innerHTML += `${psm.sobreMiHTML}`;
      psm.body.style.overflow = "hidden";
      þ('HOLA MUNDO');

   }

}

msm.start();