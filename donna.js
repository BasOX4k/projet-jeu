export default class ComboHandler{
    constructor(){
        document.addEventListener('keydown', this.onHit.bind(this));
    }
   
     
  
    onHit(event) {
        const coup = document.getElementById('yujiPied');

        const keyOnHit = event.key.toLowerCase();
        console.log(keyOnHit);
        if (keyOnHit === 't'){
      
        yuji.classList.add('yujiPied');
      
        setTimeout(() => {
          yuji.classList.remove('yujiPied')
        },1800)
      }
    }
}