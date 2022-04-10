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
  new Quote('sandra','sbook','string','srtong',new Date(),0,0),
  new Quote('sandra','sbook','string','srtong',new Date(),0,0)
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
