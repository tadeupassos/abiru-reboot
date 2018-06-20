import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';

@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  itensCarrinho: any[] = [];
  subTotal: number;

  tadeu: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public serv: ServicosProvider) {

    this.itensCarrinho = this.serv.carrinho;

    this.subTotal = 0;

    this.itensCarrinho.forEach(elem => {
      this.subTotal += elem.preco
    });

   // this.subTotal = parseFloat(this.subTotal);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');

  }

  ionViewWillEnter(){


  }

  fecharModal(){
    this.viewCtrl.dismiss();
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

  removerItemCarrinho(produto){
    this.itensCarrinho = this.itensCarrinho.filter(busca => {
      return busca.key != produto.key;
    })

    this.serv.carrinho = this.itensCarrinho;

    console.log("qtde " + this.serv.qtdeCarrinho);

    if(this.serv.qtdeCarrinho > 0){
      this.serv.qtdeCarrinho = this.serv.qtdeCarrinho - 1;
    }
    
  }

}
