

export class Quote {
    constructor(public id:number,public userName:string,public title:any ,public quote:string,public source:string, public datePosted:number,public upvotes:number, public downvotes:number, public popularQuotes:boolean){
        this.id=id;
        this.title
        this.quote=quote;
        this.source=source;
        this.datePosted=datePosted
        this.popularQuotes=popularQuotes;
        this.upvotes=upvotes;
        this.downvotes=downvotes;

    


    } 
    
}
