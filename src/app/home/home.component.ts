import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('items', [
      transition('* => *',[
        query(':enter', style({ opacity:0 }), {optional:true}),

        query(':enter', stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]),{optional: true}),

          query(':leave', stagger('300ms',[
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 0, transform: 'translateY(-100%)', offset: .9}),
            ]))]),{optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
itemCount: number;
 btnText:string ='Add an Item';
 itemText: string = 'My fav car is BMW';
items =['My best programming language is Angular', 'I love Coding everyday', 'I am Software Engineer'];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.items.length;
  }
     addItem(){
       this.items.push(this.itemText);
       this.itemText = '';
       this.itemCount = this.items.length;
     }
     removeItem(i){
     this.items.splice(i, 1);
     }
}