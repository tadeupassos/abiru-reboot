import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';

@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  itensCarrinho: any[] = [];
  totalApagar: string = '0,00';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public serv: ServicosProvider, public alertCtrl: AlertController) {

    this.itensCarrinho = this.serv.carrinho;

    this.itensCarrinho.forEach(elem => {

      elem.subTotal = this.serv.calculaSubTotal(elem.preco, elem.qtdeItem)

      this.totalApagar = this.serv.calcularTotal(elem.subTotal, this.totalApagar, '+');
    });

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

    console.log("valor " + valor);

    if(parseInt(produto.qtdeItem) > 0){

      produto.qtdeItem--;

      produto.subTotal = this.serv.calculaSubTotal(produto.preco, produto.qtdeItem);

      this.totalApagar = this.serv.calcularTotal(produto.preco, this.totalApagar, '-');

      if(parseInt(produto.qtdeItem) == 0){

        this.itensCarrinho = this.itensCarrinho.filter(r => {
          return r.key != produto.key
        });

        this.serv.qtdeCarrinho--;        

        this.serv.carrinho = this.itensCarrinho;
  
      }
  
    }
    
  }

  adicionar(produto){

    produto.qtdeItem++;

    produto.subTotal = this.serv.calculaSubTotal(produto.preco, produto.qtdeItem);

    this.totalApagar = this.serv.calcularTotal(produto.preco, this.totalApagar, '+');

  }

  removerItemCarrinho(produto){
    this.itensCarrinho = this.itensCarrinho.filter(busca => {
      return busca.key != produto.key;
    })

    this.serv.carrinho = this.itensCarrinho;

    //console.log("qtde " + this.serv.qtdeCarrinho);

    if(this.serv.qtdeCarrinho > 0){
      this.serv.qtdeCarrinho = this.serv.qtdeCarrinho - 1;
    }
    
  }

  fecharPedido(){

    if(this.itensCarrinho.length > 0){

      console.log("empresa " + this.serv.usuarioLogado.Empresa);

      if(this.serv.usuarioLogado.Empresa == ''){
        this.naoCadastrado();
      }else{
        this.navCtrl.push('FecharPedidoPage');
      }


    }else{

    }
  }

  naoCadastrado() {
    let alert = this.alertCtrl.create({
      title: 'Completar Cadastro',
      subTitle: 'Por favor, preenche alguns dados. Vai ser somente dessa vez.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.push('CadastroClientePage');
          }
        }
      ]
    });
    alert.present();
  }

}
