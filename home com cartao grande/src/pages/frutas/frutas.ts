import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';

@Component({
  selector: 'page-frutas',
  templateUrl: 'frutas.html',
})
export class FrutasPage {

  searchTerm: string = '';
  items: any;   

  constructor(public navCtrl: NavController, public navParams: NavParams, public serv: ServicosProvider) {
  }

  ionViewDidLoad() {
 
    this.setFilteredItems();

  }

  setFilteredItems() {
 
    this.items = this.serv.filterItems(this.searchTerm);

  } 

}
