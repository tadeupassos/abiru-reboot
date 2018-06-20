import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { CarrinhoPage } from '../carrinho/carrinho';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchTerm: string = '';
  items: any; 

  constructor(public navCtrl: NavController, public serv: ServicosProvider, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
 
    this.setFilteredItems();

  }

  setFilteredItems() {
 
    this.items = this.serv.filterItems(this.searchTerm);

  } 

  mostrarCarrinho(){

    let modal = this.modalCtrl.create(CarrinhoPage);
    modal.present();

  }

}
