import GaleriesServices from "./services/GaleriesServices"
const galeriesServ =new GaleriesServices();
import { format  } from "timeago.js";

class UI {

    async renderPaseos() {
       const paseos = await galeriesServ.getPaseo();
       const containerGaleri = document.getElementById('galeries-cards')
       containerGaleri.innerHTML = '';
       paseos.forEach(paseo => {
           const div = document.createElement('div');
           div.className = '';
           div.innerHTML = `
           <div class="card m-2">
                <div class="row">
                    <div class="col-md-4">
                        <img src="http://localhost:3000${paseo.imagePath}" alt="" class="img-fluid"/>
                    </div> 
                    <div class="col-md'8 ">
                        <div class="card-block px-2">
                        <h4 class="card-title">${paseo.name}</h4>
                        <p class="card-text">${paseo.country}</p>
                        <a href="#" class="btn btn-danger delete" _id="${paseo._id}" >Eliminar</a>

                        </div>    
                    </div> 
                </div>
                <div class="card-footer">${format(paseo.date)}</div>
           </div>
           `;
        containerGaleri.appendChild(div)
       });

    }

    async AddNewPaseo(paseo) {
        await galeriesServ.postPaseo(paseo);
        this.clearForm();
        this.renderPaseos();
    }
    
    clearForm() {
        document.getElementById('galeries').reset();
        
        
    }
    
    renderMessage(message, colorMsg, timeToRemove) {
        const div = document.createElement('div');
        div.className = `alert alert-${colorMsg} message`
        div.appendChild(document.createTextNode(message));

        
        const constainer = document.querySelector('.col-md-4');
        const paseoForm = document.querySelector('#galeries');
        constainer.insertBefore(div, paseoForm);
        setTimeout( () => {
            document.querySelector('.message').remove();
        }, timeToRemove)
    }

    async deletePaseo(paseoId){
        await galeriesServ.deletePaseo(paseoId);
        this.renderPaseos();
    }
}

export default UI;