import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DataService } from '../shared/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private dataService: DataService) {
  }

  print(){
    console.log(this.dataService.data);
  }

}
