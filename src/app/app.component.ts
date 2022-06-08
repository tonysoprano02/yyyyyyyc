import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private global: GlobalService,
    private storage: Storage
  ) { }

  async ngOnInit() {
    await this.storage.create();
    this.storage.get('data').then(res => {
      this.global.data = res;
    });
    this.storage.get('results').then(res => {
      this.global.results = res;
    });
  }

  selectUnit = (unit) => {
    this.global.selectedUnit = unit;
    this.global.pushItemsToSelectedUnit();
  }
}
