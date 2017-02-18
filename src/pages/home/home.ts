import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DataService } from '../shared/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  category: any;
  material: any;
  materialIndex: number;

  constructor(public navCtrl: NavController, private dataService: DataService) {
    this.category = '';
    this.material = '';
    this.materialIndex = -1;
  }

  print(){
    console.log(this.dataService.data);
  }

}
