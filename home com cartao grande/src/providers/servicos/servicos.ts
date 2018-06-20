//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicosProvider {

  items: any;

  constructor(public http: Http) {

    this.items = [
        {title: 'one'},
        {title: 'two'},
        {title: 'three'},
        {title: 'four'},
        {title: 'five'},
        {title: 'six'}
    ]
  }

  filterItems(searchTerm){
 
    return this.items.filter((item) => {
        return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });    

} 

}
