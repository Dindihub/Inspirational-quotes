import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title="Inpirational quotes"
myQuotes:Array<any>=[
  new Quote('Muli','Proverbs 3:5','Trust in the LORD with all your heart and lean not on your own understanding','Bible',new Date(),0,0),
  new Quote('Beth',"Proverbs 10:22","The blessing of the LORD makes a person rich, and he adds no sorrow with it","Bible",new Date(),0,0),
]

  
public onAddQuote(quote:any){
console.log(quote);
this.myQuotes.push(quote);
}

public upvote(i:number){
  this.myQuotes[i].upvotes++;
  console.log('upvote called',this.myQuotes)
}

public downvote(i:number){
  this.myQuotes[i].downvotes++;
  console.log('downvote called',this.myQuotes)
}

public deletequote(i:number){
  this.myQuotes.splice(i,1);
  console.log('downvote called',this.myQuotes)
}
constructor() { }

  ngOnInit(): void {
  }

}
