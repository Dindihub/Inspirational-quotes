import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title="Inpirational quotes"
myQuotes:Quote[]=[

  new Quote(1,"Philipians 4:6","Do not be anxious about anything, but in every situation, by prayer and petition , with thanksgiving, present your requests to God.","Bible" ,4/9/2022,0,0,false),
  new Quote(2,"Proverbs 3:5","Trust in the LORD with all your heart and lean not on your own understanding;","Bible" ,4/9/2022,5,0,false),
  new Quote(3,"Proverbs 10:22","The blessing of the LORD makes a person rich, and he adds no sorrow with it.","Bible",4/9/2022,0,0, false),
  new Quote(4,"Proverbs 37:4","Take delight in the LORD, and he will give you the desires of your heart.","Bible" ,4/9/2022,0,0,false),

]

popularQuote:Quote[]=[
  new Quote(2,"Proverbs 3:5","Trust in the LORD with all your heart and lean not on your own understanding;","Bible" ,4/9/2022,5,0,false),
]
  constructor() { }

  ngOnInit(): void {
  }

}
