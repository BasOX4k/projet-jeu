export default class ComboLeo {
    constructor(){
        document.addEventListener('keydown', this.onHitLeo);
    }
   
     onHit(event) { console.log("aaaa");
        const coupLeo = document.getElementById('leo-combo');

        const keyOnHitLeo = event.key.toLowerCase();
        console.log(keyOnHitLeo);
        if (keyOnHitLeo === 'm'){
      
        coupLeo.classList.add('leo-combo');
      
        setTimeout(() => {
          coupLeo.classList.remove('leo-combo')
        },1800)
      }
    }
}