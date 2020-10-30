let propScroll = {

   botones: $$('.move'),
   posicionScroll: 0,
   ruta: null,
   intervalo: null,
   destinoScroll: 0,
   padding: 0

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