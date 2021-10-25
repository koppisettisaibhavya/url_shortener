import { Component, OnInit } from '@angular/core';
import { LinkService } from '../link.service';
@Component({
  selector: 'app-topbar1',
  templateUrl: './topbar1.component.html',
  styleUrls: ['./topbar1.component.css']
})
export class Topbar1Component implements OnInit {

  constructor(public serv:LinkService) { }

  ngOnInit(): void {
  }

}
