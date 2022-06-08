import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.css'],
})
export class ItemPage implements OnInit {

  constructor(
    private global: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.global.row);
  }

}
