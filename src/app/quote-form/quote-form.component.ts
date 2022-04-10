import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  @Output() addQuote= new EventEmitter();
public name='';
public userName='';
public title='';
public quote='';
public source ='';
public datePosted='';
public upvotes='';
public downvotes='';



  constructor() { }

  ngOnInit(): void {
  }
 public addNewQuote(){
const quote=new Quote(this.name,this.title,this.quote,this.source,new Date(),0,0); 
 this.addQuote.emit(quote);
}
}

