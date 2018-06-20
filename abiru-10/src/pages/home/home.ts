import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { CarrinhoPage } from '../carrinho/carrinho';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchTerm: string = '';
  items: any; 
  qtdeCarrinho = 0;
  produtosItem: Observable<any[]>;

  itens: any[] = [];

  produtos: any[] = [];

  constructor(public navCtrl: NavController, public serv: ServicosProvider , public modalCtrl: ModalController, database: AngularFireDatabase) {

   this.produtosItem = database.list('produtos', ref => ref.orderByChild('preco'))
    .snapshotChanges()
    .map(changes => {
     return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
   });
   
   //console.log("produtos: " + JSON.stringify(this.produtosItem));
  }

  ionViewWillEnter(){
    this.qtdeCarrinho = this.serv.qtdeCarrinho;
  }

  ionViewWillLeave(){
    this.serv.qtdeCarrinho = this.qtdeCarrinho;
  }  

  ionViewDidLoad() {
 
    //this.setFilteredItems();

  }

  setFilteredItems() {
 
    this.items = this.serv.filterItems(this.searchTerm);

  } 

  mostrarCarrinho(){
    //let modal = this.modalCtrl.create(CarrinhoPage, { dadosCarrinho: this.serv.carrinho });
    //modal.present();

    this.navCtrl.push(CarrinhoPage);
  }

  remover(produto){

    let valor = parseInt(produto.qtdeItem);

    if(valor > 0){
      valor--;
    }

    produto.qtdeItem = valor.toString();
  }

  adicionar(produto){
    produto.qtdeItem++;
  }

  addCarrinho(produto){

    this.produtosItem = this.produtosItem
      .map(changes => changes.filter(p => {
        return p.key != produto.key
      }));     

    this.qtdeCarrinho++;
    this.serv.carrinho.push(produto);
    
  }

}
