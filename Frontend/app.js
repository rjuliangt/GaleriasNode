require('./style/app.css');
import GaleriesServices from "./services/GaleriesServices"
document.getElementById('galeries')
.addEventListener('submit', e =>{
   const name = document.getElementById('name').value;
   const country = document.getElementById('country').value;
   const isbn = document.getElementById('isbn').value;
   const imag =  document.getElementById('image').file;

   const fromData =  new FormData();
   fromData.append('image',imag[0]);
   fromData.append('name',name);
   fromData.append('country',country);
   fromData.append('isbn',isbn);
   
   const galeriesServ =new GaleriesServices();
   galeriesServ.postPaseo(fromData)
   console.log(name,country,isbn,imag)
   e.preventDefault();
})