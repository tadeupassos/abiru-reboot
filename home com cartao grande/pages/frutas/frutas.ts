import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { CarrinhoPage } from '../carrinho/carrinho';

@Component({
  selector: 'page-frutas',
  templateUrl: 'frutas.html',
})
export class FrutasPage {

  searchTerm: string = '';
  items: any;   

  qtdeCarrinho = 0;

  frutas: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serv: ServicosProvider, database: AngularFireDatabase, public modalCtrl: ModalController) {

    this.frutas = database.list('produtos', ref => ref.orderByChild('tipo').equalTo('fruta'))
      .snapshotChanges().map(changes => {
        return changes.map(f => ({key: f.payload.key, ...f.payload.val()}));
      });
  }

  ionViewDidLoad() {
 
    this.setFilteredItems();

  }

  ionViewWillEnter(){
    this.qtdeCarrinho = this.serv.qtdeCarrinho;
  }

  ionViewWillLeave(){
    this.serv.qtdeCarrinho = this.qtdeCarrinho;
  }

  setFilteredItems() {
 
    this.items = this.serv.filterItems(this.searchTerm);

  } 

  mostrarCarrinho(){
    //let modal = this.modalCtrl.create(CarrinhoPage, { dadosCarrinho: this.serv.carrinho });
    //modal.present();

    this.navCtrl.push(CarrinhoPage);
  }

  remover(fruta){

    let valor = parseInt(fruta.qtdeItem);

    if(valor > 0){
      valor--;
    }

    fruta.qtdeItem = valor.toString();
  }

  adicionar(fruta){
    fruta.qtdeItem++;
  }

  addCarrinho(produto){

    this.frutas = this.frutas
      .map(changes => changes.filter(p => {
        return p.key != produto.key
      }));     

    this.qtdeCarrinho++;
    this.serv.carrinho.push(produto);
  }  

}
