let psml = {

   card: $$('.card-opacity'),
   slider: $('.container-slider'),
   item: 0

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

         psml.card[0].style.backgroundColor = "#303030d5";
         psml.card[1].style.backgroundColor = "#30303000";
         psml.card[2].style.backgroundColor = "#30303000";

      } else if( e.target == psml.card[1] ) {

         psml.card[0].style.backgroundColor = "#30303000";
         psml.card[1].style.backgroundColor = "#303030d5";
         psml.card[2].style.backgroundColor = "#30303000";


      } else {

         psml.card[0].style.backgroundColor = "#30303000";
         psml.card[1].style.backgroundColor = "#30303000";
         psml.card[2].style.backgroundColor = "#303030d5";

      }

      psml.item = e.target.getAttribute("item") - 1;
      
      psml.slider.style.left = ` ${ psml.item * -100 }% `;

   }

};

msml.start();