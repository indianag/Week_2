export class Book{
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(title:string,nPages:number,isbn: string,author:string,editorial:string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    public setTitle(newTitle:string):void{
        this.title = newTitle
    }
    public getTitle(): string{
        return this.title
    }
    public setNpages(newNpages:number):void{
        this.nPages = newNpages
    }
    public getNpages(): number{
        return this.nPages
    }
    public setIsbn(newIsbn:string):void{
        this.isbn = newIsbn
    }
    public getIsbn(): string{
        return this.isbn
    }
    public setAuthor(newAuthor:string):void{
        this.author = newAuthor
    }
    public getAuthor(): string{
        return this.author
    }
    public setEditorial(newEditorial:string):void{
        this.editorial = newEditorial
    }
    public getEditorial(): string{
        return this.editorial
    }
    public toString(): string{
        let newTostring = 
            `Title -  ${this.title}  
            Numero of Pages -  ${this.nPages}  
            ISBN -  ${this.isbn}  
            Author - ${this.editorial}`
        return newTostring
    }
    // public print(){ 
    //     console.log(this.toString);
    // }
}





// let libro = new Book("Introduccion", 233, "2344433-BC23333", "Joseph Smith", "Now Editions")

// console.log(libro.getTitle());
// libro.setTitle("Introduccion");
// console.log(libro.getTitle());

// console.log(libro.getNpages());
// libro.setNpages(233);
// console.log(libro.getNpages());

// console.log(libro.getIsbn());
// libro.setIsbn("2344433-BC23333");
// console.log(libro.getIsbn());

// console.log(libro.getAuthor());
// libro.setAuthor("Joseph Smith");
// console.log(libro.getAuthor());

// console.log(libro.getEditorial());
// libro.setEditorial("Now Editions");
// console.log(libro.getEditorial());

// console.log(libro.toString());
