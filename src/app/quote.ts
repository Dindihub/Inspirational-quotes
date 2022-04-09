export class Quote {
    constructor(public id:number,public quote:string,public source:any, public upvotes:number, public downvotes:number){
        this.id=id;
        this.quote=quote;
        this.source=source;
        this.upvotes=upvotes;
        this.downvotes=downvotes;

    } 
    
}
