//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ServicosProvider {

    items: any;

    public qtdeCarrinho = 0;

    public carrinho: any[] = [];

    public usuarioLogado = {
        Empresa: "",
        email: ""
    }

    constructor(public http: Http, public toastCtrl: ToastController) {

    this.items = [
            {title: 'one'},
            {title: 'two'},
            {title: 'three'},
            {title: 'four'},
            {title: 'five'},
            {title: 'six'}
        ]
    }

    filterItems(searchTerm){

        return this.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    

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

        if(produto.qtdeItem > 0){

            let itemNoCarrinho = this.carrinho.filter(p => {
                return p.key == produto.key
            }); 

            //console.log("itemNoCarrinho: " + JSON.stringify(itemNoCarrinho));

            if(itemNoCarrinho.length > 0){

                itemNoCarrinho[0].qtdeItem = parseInt(itemNoCarrinho[0].qtdeItem) + parseInt(produto.qtdeItem); 

                this.carrinho = this.carrinho.filter(p => {
                    return p.key != produto.key
                });

                //console.log("somando valores " + JSON.stringify(produto));

                this.carrinho.unshift(itemNoCarrinho[0]);

            }else{

                //console.log("produto a ser add " + JSON.stringify(produto));

                this.carrinho.push({
                    key: produto.key,
                    itemNome: produto.itemNome,
                    medida: produto.medida,
                    preco: produto.preco,
                    qtdeItem: produto.qtdeItem,
                    tipo: produto.tipo,
                    urlImg: produto.urlImg,
                    subTotal: ''
                });

                this.qtdeCarrinho++;

            }

            produto.qtdeItem = 0;
            
            this.produtoAdicionado();
        
        }else{
            this.igualZero(produto.medida);
        }
    
    }
    
    produtoAdicionado() {

        let toast = this.toastCtrl.create({
            message: 'Produto adicionado ao carrinho.',
            duration: 3000,
            position: 'middle'
        });

        toast.present();

    } 
    
    igualZero(medida) {

        let toast = this.toastCtrl.create({
            message: 'Por favor, ' + medida + ' não pode ser igual 0.',
            duration: 3000,
            position: 'botton'
        });

        toast.present();

    }

    calculaSubTotal(valor: any, qtde: any){

        //console.log("valor do jeito que vem " + valor);
    
        let valorDecimal: number = 0;

        valorDecimal = parseFloat(valor.replace(',','.'));

        //console.log("valor depois do replace e parseFloat " + valorDecimal);
        
        valorDecimal = valorDecimal * parseInt(qtde);

        //console.log("valor final com toFixed, String e replace " + valorDecimal.toFixed(2).toString().replace('.',','));
    
        return valorDecimal.toFixed(2).toString().replace('.',',');

    }

    calcularTotal(subTotal, totalPagar, operacao){

        let valorDecimal1, valorDecimal2, resultado: number = 0;

        valorDecimal1 = parseFloat(subTotal.replace(',','.'));

        valorDecimal2 = parseFloat(totalPagar.replace(',','.')); 

        if(operacao == '+' ){

            resultado = valorDecimal2 + valorDecimal1;

        }else{

            resultado = valorDecimal2 - valorDecimal1;

        }
    
        return resultado.toFixed(2).toString().replace('.',',');
        
    }

}
