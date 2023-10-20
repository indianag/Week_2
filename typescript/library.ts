import { Book } from "./book"

export class Library {
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    public setAddress(newAddress: string): void {
        this.address = newAddress
    }
    public getAddress(): string {
        return this.address
    }
    public setManager(newManager: string): void {
        this.manager = newManager
    }
    public getManager(): string {
        return this.manager
    }
    public toStringLibray(): string {
        let libro = ``;
        for (let i = 0; i< this.books.length; i++) {
            libro = libro + `
            Book  ${(i+1)}: 
            ${this.books[i].toString()}`;
        } 
        return libro;
    }
    public getNumberOfBooks(): number{
        return this.books.length
    }
    public findByAuthor(author:string): Book[] {
        let libreria:Book[] = [];
        for ( let libro of this.books){
            if (libro.getAuthor() === author){
                libreria.push(libro)
            }

        }
        return libreria;
    }
}
