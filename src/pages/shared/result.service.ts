import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class ResultService{
    regularization: string;
    process: string;
    // imageUrl: string;

    constructor(private http: Http){
        this.regularization = '';
        this.process = '';
        // this.getData();
    }

    getProcess(): Observable<string>{
        return this.http.get('../../assets/json/process1.txt')
        .map(response => response.text());
    }
   
    getRegularization(): Observable<string>{
        return this.http.get('../../assets/json/regularization5.txt')
        .map(response =>  response.text());
    }

    getData(){
        this.getProcess().subscribe(response => this.process = response);
        this.getRegularization().subscribe(response => this.regularization = response);
        console.log(this.regularization);
        console.log(this.process);
    }

}