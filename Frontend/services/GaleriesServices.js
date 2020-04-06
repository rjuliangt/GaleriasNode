class GaleriesService {
    constructor(){
        this.URI = "http://localhost:3000/api/paseos"
    }
    async getPaseo(){
       const res = await fetch(this.URI)
       const paseo = await res.json()
       return paseo
    }
    async postPaseo(paseo) {
        const res = await fetch(this.URI, { 
            method: "POST",
             body: paseo
        });
        const data =  await res.json()
        console.log(data)
    }
    
    async deletePaseo(paseoId){
        const res = await fetch(`${this.URI}/${paseoId}`, {
            headers: {
                'Content-type': 'application/json'
            },
            method: "DELETE",
        })
     const data= await res.json();
     console.log(data)
    }

}

module.exports = GaleriesService;