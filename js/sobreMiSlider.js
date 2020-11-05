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

      psml.item = e.target.getAttribute("item") - 1;
      
      psml.slider.style.left = ` ${ psml.item * -100 }% `;

   }

};

msml.start();