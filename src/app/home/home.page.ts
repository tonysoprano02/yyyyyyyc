import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnInit {

  constructor(
    private global: GlobalService,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() { }

  openEdit(data){
    this.global.row = data;
    this.router.navigateByUrl('/item');
  }
  ionViewDidEnter() {
    this.storage.set('data', this.global.data);
    this.storage.set('results', this.global.results);
  }
}
