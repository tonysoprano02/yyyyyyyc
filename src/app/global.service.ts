import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  data:any = {};
  results:any = [];
  selectedUnit:any;

  row: any = {};
  selectedUnitItems = [];

  
  constructor(private storage: Storage, private http: HttpClient) {
    fetch("./assets/data.txt").then(res => res.json()).then(json => {
      console.log("OUTPUT: ", json);
      this.data = json;
      this.selectedUnit = this.data.units[0];

      fetch("./assets/results.txt").then(res => res.json()).then(json => {
        console.log("OUTPUT: ", json);
        this.results = json;
        this.results.forEach(result => {
          console.log(result, '---')
          result.body = Object.values(result.body);
          result.body = result.body.filter(el => el.val != null || el.array.length > 0);
        });
        this.pushItemsToSelectedUnit();
      });
    });

  }

 

  pushItemsToSelectedUnit() {
    this.selectedUnitItems = this.results.filter(result => result.unit == this.selectedUnit._id);
  }
}
