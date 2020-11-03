// $ -> querySelector.bind(document);
// $$ -> querySelectorAll.bind(document);
// þ -> console.log

let psml = {

   card: $$('.card-opacity'),
   slider: $('.container-slider'),
   left: 0,
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