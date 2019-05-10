import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getListeners } from '@angular/core/src/render3/discovery_utils';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(public rest:GlobalService,private route: ActivatedRoute, private router: Router) { }
  acts:any;
  categories:any;
  updated:any;

  ngOnInit() {
    this.getCat();
    this.getList('first');
  }

  getList(id) {
    this.rest.getListValues(id).subscribe((data: {}) => {
      this.acts = data;
    });
  }
  getCat() {
    this.rest.getCategories().subscribe((data: {}) => {
      this.categories = data;
    });
  }
  
  onOptionsSelected(event){
    this.getList(event);
    console.log(this.acts);
   }

}
