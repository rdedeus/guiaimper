import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class DataService{
    data: any;

    constructor(private http: Http){
        this.sub();
    }

    getData(): Observable<any>{
        return this.http.get('../../assets/json/sample.json')
            .map(response => response.json())
            // .subscribe(response => this.data = response.json())
    }

    sub(){
        this.getData().subscribe(response => this.data = response);
        console.log('Sample data is working');
    }
}