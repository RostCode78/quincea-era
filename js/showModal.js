let pAmigos = {

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

let mAmigos = {

   start: () => {

      pAmigos.cards.forEach( e => {

         e.addEventListener(
            'click',
            mAmigos.showModal
         );

      });

      pAmigos.cerrarModal.addEventListener(
         'click',
         mAmigos.cerrarModal
      )

   },

   showModal: e => {

      let tag = e.path[1];
      let tagText = e.target.innerText;
      pAmigos.box.style.display = "flex";
      pAmigos.btnMenu.style.zIndex = "9000";
      pAmigos.body.style.overflow = "hidden";
      pAmigos.openAllModal = true;

      if ( tagText == pAmigos.cards[0].outerText ) {

         pAmigos.container.innerHTML = `${pAmigos.antuan}`;

      } else if ( tagText == pAmigos.cards[1].outerText ) {

         pAmigos.container.innerHTML = `${pAmigos.miriam}`;

      } else if ( tagText == pAmigos.cards[2].outerText ) {
         
         pAmigos.container.innerHTML = `${pAmigos.guillermo}`;

      }  else {

         pAmigos.container.innerHTML = `${pAmigos.rooth}`;

      }


   },

   cerrarModal: () => {

      pAmigos.box.style.display = "none";
      pAmigos.btnMenu.style.zIndex = "900";
      pAmigos.body.style.overflow = "initial";
      pAmigos.openAllModal = false;

   }

}

mAmigos.start();