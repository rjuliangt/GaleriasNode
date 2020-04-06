import './style/app.css';
import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
   const ui = new UI()
   ui.renderPaseos();
})

document.getElementById('galeries')
.addEventListener('submit', e =>{
   const name = document.getElementById('name').value;
   const country = document.getElementById('country').value;
   const isbn = document.getElementById('isbn').value;
   const imag =  document.getElementById('image').files;

   const fromData =  new FormData();
   fromData.append('image',imag[0]);
   fromData.append('name',name);
   fromData.append('country',country);
   fromData.append('isbn',isbn);
   const ui = new UI();
   ui.AddNewPaseo(fromData);
   console.log(name,country,isbn,imag[0])
   e.preventDefault();
});

document.getElementById('galeries-cards')
.addEventListener('click', e =>{
   if(e.target.classList.contains('delete')) {
      const ui = new UI();
      ui.deletePaseo(e.target.getAttribute('_id'));
   }
   e.preventDefault();
});