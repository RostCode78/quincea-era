let psml = {

   card: $$('.card-opacity'),
   slider: $('.container-slider'),
   left: 0

};

let msml = {

   start: () => {

      psml.card.forEach( e => {

         e.addEventListener(
            'click',
            msml.activarSlider
         );

      });

   },

   activarSlider: (e) => {

      if( e.target == psml.card[0] ) {
         if ( psml.left == 0 ){

          þ("...");
          þ(e.target);
          psml.slider.style.left = `-${psml.left}%`;

         } else if ( psml.left >= 100 ) {

            psml.left = 0;
            þ(e.target);
            psml.slider.style.left = `-${psml.left}%`;

         }
      } else if( e.target == psml.card[1] ) {
         if ( psml.left == 0 ){

            psml.left = 100;
            þ(e.target);
            psml.slider.style.left = `-${psml.left}%`;

         } else if ( psml.left > 100 || psml.left < 100 ) {

            psml.left = 100;
            þ(e.target);
            psml.slider.style.left = `-${psml.left}%`;

         }
      } else if ( e.target == psml.card[2] ) {
         if ( psml.left == 0 ){

            psml.left = 200;
            þ(e.target);
            psml.slider.style.left = `-${psml.left}%`;

         } else if ( psml.left == 100) {

            psml.left = 200;
            þ(e.target);
            psml.slider.style.left = `-${psml.left}%`;

         }
      }

   }

};

msml.start();