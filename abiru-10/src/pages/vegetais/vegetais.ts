import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { CarrinhoPage } from '../carrinho/carrinho';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-vegetais',
  templateUrl: 'vegetais.html',
})
export class VegetaisPage {

  searchTerm: string = '';
  items: any;
  qtdeCarrinho = 0;
 
  vegetais: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serv: ServicosProvider, public modalCtrl: ModalController, database: AngularFireDatabase) {

    this.vegetais = database.list('produtos', ref => ref.orderByChild('tipo').equalTo('vegetal'))
      .snapshotChanges().map(changes => {
        return changes.map(f => ({key: f.payload.key, ...f.payload.val()}));
      });    

  }

  ionViewWillEnter(){
    this.qtdeCarrinho = this.serv.qtdeCarrinho;
  }

  ionViewWillLeave(){
    this.serv.qtdeCarrinho = this.qtdeCarrinho;
  }    

  ionViewDidLoad() {
 
    this.setFilteredItems();

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
    this.vegetais = this.vegetais
      .map(changes => changes.filter(p => {
        return p.key != produto.key
      }));     

    this.qtdeCarrinho++;
    this.serv.carrinho.push(produto);
  }    

}
