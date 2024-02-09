export default class ComboHandler{
    constructor(){
        document.addEventListener('keydown', this.onHit.bind(this));
    }
   
     onHit(event) {
        const coup = document.getElementById('donna-combo');

        const keyOnHit = event.key.toLowerCase();
        console.log(keyOnHit);
        if (keyOnHit === 't'){
      
        coup.classList.add('donna-combo');
      
        setTimeout(() => {
          coup.classList.remove('donna-combo')
        },1800)
      }
    }
}