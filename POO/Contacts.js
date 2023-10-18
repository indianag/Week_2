class Contacts {
    
    constructor(){
            this.contactos = [] // esto sera un array de obj persona
           
    }
printPersons(){
    for (let contacto of this.contactos){
        console.log(contacto);
    }
    }

}



module.exports = {Contacts}