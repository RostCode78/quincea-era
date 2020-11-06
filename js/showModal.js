let pModal = {

   cards: $$('.card-slider'),
   cerrarModal: $('.btn-cerrar-amigos'),
   btnMenu: $('.btn-line-menu'),
   container: $('.container-all'),
   openAllModal: false,
   body: $('body'),
   box: $('.modal'),
   antuan: `
   <div class="friends-container">

      <div class="img-friend1"></div>
      <div class="text-friend">
         <h2>Antuan</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias laboriosam aperiam ad unde provident modi veritatis earum suscipit cum.</p>
         <ul>
            <li class="redes-menu"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li class="redes-menu"><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li class="redes-menu"><a href="#"><i class="fab fa-tiktok"></i></a></li>
         </ul>
      </div>

   </div>
   `,

   miriam: `
   <div class="friends-container">

      <div class="img-friend2"></div>
      <div class="text-friend">
         <h2>Miriam</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias laboriosam aperiam ad unde provident modi veritatis earum suscipit cum.</p>
         <ul>
            <li class="redes-menu"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li class="redes-menu"><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li class="redes-menu"><a href="#"><i class="fab fa-tiktok"></i></a></li>
         </ul>
      </div>

   </div>
   `,

   guillermo: `
   <div class="friends-container">

      <div class="img-friend3"></div>
      <div class="text-friend">
         <h2>Guillermo</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias laboriosam aperiam ad unde provident modi veritatis earum suscipit cum.</p>
         <ul>
            <li class="redes-menu"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li class="redes-menu"><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li class="redes-menu"><a href="#"><i class="fab fa-tiktok"></i></a></li>
         </ul>
      </div>

   </div>
   `,

   rooth: `
   <div class="friends-container">

      <div class="img-friend4"></div>
      <div class="text-friend">
         <h2>Rooth</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias laboriosam aperiam ad unde provident modi veritatis earum suscipit cum.</p>
         <ul>
            <li class="redes-menu"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li class="redes-menu"><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li class="redes-menu"><a href="#"><i class="fab fa-tiktok"></i></a></li>
         </ul>
      </div>

   </div>
   `

};

let mModal = {

   start: () => {

      pModal.cards.forEach( e => {

         e.addEventListener(
            'click',
            mModal.shodModal
         );

      });

      pModal.cerrarModal.addEventListener(
         'click',
         mModal.cerrarModal
      )

   },

   shodModal: e => {

      let tag = e.path[1];
      let tagText = e.target.innerText;
      pModal.box.style.display = "flex";
      pModal.btnMenu.style.zIndex = "9000";
      pModal.body.style.overflow = "hidden";
      pModal.openAllModal = true;

      if ( tagText == pModal.cards[0].outerText ) {

         pModal.container.innerHTML = `${pModal.antuan}`;

      } else if ( tagText == pModal.cards[1].outerText ) {

         pModal.container.innerHTML = `${pModal.miriam}`;

      } else if ( tagText == pModal.cards[2].outerText ) {
         
         pModal.container.innerHTML = `${pModal.guillermo}`;

      }  else {

         pModal.container.innerHTML = `${pModal.rooth}`;

      }


   },

   cerrarModal: () => {

      pModal.box.style.display = "none";
      pModal.btnMenu.style.zIndex = "900";
      pModal.body.style.overflow = "initial";
      pModal.openAllModal = false;

   }

}

mModal.start();