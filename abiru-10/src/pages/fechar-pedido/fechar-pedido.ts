import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbbasPage } from '../abbas/abbas';

/**
 * Generated class for the FecharPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fechar-pedido',
  templateUrl: 'fechar-pedido.html',
})
export class FecharPedidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FecharPedidoPage');
  }

  voltar(){
    this.navCtrl.setRoot(AbbasPage);
  }

}
