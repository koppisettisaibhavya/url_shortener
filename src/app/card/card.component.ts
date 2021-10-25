import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LinkService } from '../link.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() event1=new EventEmitter();
  @Output() event2=new EventEmitter();
  title:string="";
  count:number=0;
 // d:boolean=true;
    constructor(public serv:LinkService) { 
      //this.d=this.serv.enablegetstrt;
    }

  ngOnInit(): void {
  }
  flag()
  {
    this.event1.emit(true)
  }
}
