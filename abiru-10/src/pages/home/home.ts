import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { CarrinhoPage } from '../carrinho/carrinho';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  buscaLetra: string = '';
  items: any; 
  qtdeCarrinho = 0;
  produtosItem: Observable<any[]>;

  produtos: any[] = [];

  constructor(public navCtrl: NavController, public serv: ServicosProvider, public modalCtrl: ModalController, database: AngularFireDatabase, public toastCtrl: ToastController) {

   this.produtosItem = database.list('produtos', ref => ref.orderByChild('preco'))
    .snapshotChanges()
    .map(changes => {
     return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
   });

   //console.log("produtos: " + JSON.stringify(this.produtosItem));

    database.list('produtos')
      .push({ 
        itemNome: "Batata",
        medida: "Saco",
        preco: "60,00",
        qtdeItem: "0",
        tipo: "vegetal",
        urlImg: "http://tadeupassos.xyz/abiru/imgs/batatas.png"
       });

    database.list('produtos')
      .push({ 
        itemNome: "Tomate",
        medida: "Caixa", 
        preco: "50,00",
        qtdeItem: "0",
        tipo: "vegetal",
        urlImg: "http://tadeupassos.xyz/abiru/imgs/tomate12.jpg"
    });

    database.list('produtos')
      .push({ 
        itemNome: "Uva Rubi",
        medida: "Caixa",
        preco: "70,00",
        qtdeItem: "0",
        tipo: "fruta",
        urlImg: "http://tadeupassos.xyz/abiru/imgs/uvas.jpg"
    });

    database.list('produtos')
      .push({ 
        itemNome: "Melão Amarelo",
        medida: "Caixa",
        preco: "50,00",
        qtdeItem: "0",
        tipo: "fruta",
        urlImg: "http://tadeupassos.xyz/abiru/imgs/melao.jpg"
    });
  


  }

  filtrarPorLetra(){

    this.produtosItem = this.produtosItem.map(changes => changes.filter((item) => {
      return item.itemNome.toLowerCase().indexOf(this.buscaLetra.toLowerCase()) > -1;
    })); 

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

  mostrarCarrinho(){
    //let modal = this.modalCtrl.create(CarrinhoPage, { dadosCarrinho: this.serv.carrinho });
    //modal.present();

    this.navCtrl.push(CarrinhoPage);
  }

  remover(produto){
    this.serv.remover(produto);
  }

  adicionar(produto){
    this.serv.adicionar(produto);
  }

  addCarrinho(produto){
    this.serv.addCarrinho(produto);
    this.qtdeCarrinho = this.serv.qtdeCarrinho;
  }



}
