import { Person } from "./person";

// let persona = new Person("Indiana", 1991, "indimar.w1@gmail.com");
// let persona1 = new Person("Indiana", 1991, "indimar.w1@gmail.com");
// let persona2 = new Person("Indiana", 1991, "indimar.w1@gmail.com");

export class contacts {
    public people: Person[]

    constructor(){
        this.people = [];
    }
    printCalendar(){
        for (let contacto of this.people){
            console.log(contacto);
        }
    }
}




