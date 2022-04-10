

export class Quote {
    constructor(public name?:string,public title?:string ,public quote?:string,public source?:string, public datePosted?:Date,public upvotes?:number, public downvotes?:number){
        this.name=name;
        this.title=title;
        this.quote=quote;
        this.source=source;
        this.datePosted=datePosted
        this.upvotes=upvotes;
        this.downvotes=downvotes;

    


    } 
    
}
