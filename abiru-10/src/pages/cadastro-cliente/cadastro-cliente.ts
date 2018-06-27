import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-cadastro-cliente',
  templateUrl: 'cadastro-cliente.html',
})
export class CadastroClientePage {

  model = {
    nomFantasia: '',
    cnpj: '',
    celular: '',
    cep: '',
    endereco: '',
    numero: '',
    cidade: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroClientePage');
  }

  pronto(){

    /*this.database.list('usuarios')
      .push({ 
        nomeFantasia: this.model.nomFantasia,
        cnpj: this.model.cnpj,
        celular: this.model.celular,
        cep: this.model.cep,
        endereco: this.model.endereco,
        numero: this.model.numero,
        cidade: this.model.cidade
       });*/

    this.navCtrl.push('FecharPedidoPage')


  }

}
