import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DataService } from '../shared/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // category: any;
  // material: any;
  categoryIndex: number;
  materialIndex: number;
  result: any;

  constructor(public navCtrl: NavController, private dataService: DataService) {
    this.materialIndex = -1;
    this.categoryIndex = -1;
  }

  print(){
    console.log(this.dataService.data);
  }

  getResult(result){
    this.result = this.dataService.data[this.categoryIndex].materials[this.materialIndex];
    console.log('Regularization Id: '+this.result.regularization);
    console.log('Process Id: '+this.result.process);
  }
}
