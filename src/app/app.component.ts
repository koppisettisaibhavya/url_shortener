import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkService } from './link.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  f:boolean=false;
  d:boolean=true;
  title = 'urlshort';
  constructor(private router:Router)
  {

  }
  ngOnit()
  {
    this.router.navigate(['/start']);
  }
}
