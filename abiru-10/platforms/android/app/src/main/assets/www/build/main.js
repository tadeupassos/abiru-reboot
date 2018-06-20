webpackJsonp([2],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbbasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__frutas_frutas__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vegetais_vegetais__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AbbasPage = /** @class */ (function () {
    function AbbasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__frutas_frutas__["a" /* FrutasPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__vegetais_vegetais__["a" /* VegetaisPage */];
    }
    AbbasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbbasPage');
    };
    AbbasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-abbas',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\abbas\abbas.html"*/'<ion-tabs color="secondary">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="true" (ionChange)="valorCarrinho()"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Frutas" tabIcon="logo-apple" tabsHideOnSubPages="true" (ionChange)="valorCarrinho()"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Vegetais" tabIcon="ios-nutrition-outline" tabsHideOnSubPages="true" (ionChange)="valorCarrinho()"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\abbas\abbas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AbbasPage);
    return AbbasPage;
}());

//# sourceMappingURL=abbas.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		451,
		1
	],
	"../pages/registrar/registrar.module": [
		452,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(68);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, serv, modalCtrl, database) {
        this.navCtrl = navCtrl;
        this.serv = serv;
        this.modalCtrl = modalCtrl;
        this.searchTerm = '';
        this.qtdeCarrinho = 0;
        this.itens = [];
        this.produtos = [];
        this.produtosItem = database.list('produtos', function (ref) { return ref.orderByChild('preco'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (p) { return (__assign({ key: p.payload.key }, p.payload.val())); });
        });
        //console.log("produtos: " + JSON.stringify(this.produtosItem));
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.qtdeCarrinho = this.serv.qtdeCarrinho;
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.serv.qtdeCarrinho = this.qtdeCarrinho;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        //this.setFilteredItems();
    };
    HomePage.prototype.setFilteredItems = function () {
        this.items = this.serv.filterItems(this.searchTerm);
    };
    HomePage.prototype.mostrarCarrinho = function () {
        //let modal = this.modalCtrl.create(CarrinhoPage, { dadosCarrinho: this.serv.carrinho });
        //modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    HomePage.prototype.remover = function (produto) {
        var valor = parseInt(produto.qtdeItem);
        if (valor > 0) {
            valor--;
        }
        produto.qtdeItem = valor.toString();
    };
    HomePage.prototype.adicionar = function (produto) {
        produto.qtdeItem++;
    };
    HomePage.prototype.addCarrinho = function (produto) {
        this.produtosItem = this.produtosItem
            .map(function (changes) { return changes.filter(function (p) {
            return p.key != produto.key;
        }); });
        this.qtdeCarrinho++;
        this.serv.carrinho.push(produto);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <!--<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>--> \n    <ion-title>\n      Abiru\n    </ion-title>\n    <ion-buttons right (tap)="mostrarCarrinho()">\n      <button ion-button icon-only large>\n        <ion-icon name="cart" style="font-size: 40px"><ion-badge start color="danger">{{ qtdeCarrinho }}</ion-badge></ion-icon>\n      </button>     \n    </ion-buttons>         \n  </ion-navbar>\n</ion-header>\n \n<ion-content id="fundo">\n  <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()">\n  </ion-searchbar>\n\n  <ion-card *ngFor="let produto of produtosItem | async">\n    <ion-row>\n      <ion-col col-8>\n        <img [src]="produto.urlImg" width="40px" height="140px">\n      </ion-col>\n      <ion-col style="background-color: rgb(208, 243, 188);">\n        <ion-row>\n          <ion-col text-center style="font-size: 17px;">\n            Quantidade\n          </ion-col>\n        </ion-row>\n        <ion-row style=" font-size: 20px">\n          <ion-col col-4 text-right (tap)="remover(produto)">\n              <ion-icon name="ios-remove-circle-outline"></ion-icon>\n          </ion-col>\n          <ion-col col-4 text-center>\n            {{ produto.qtdeItem }}\n          </ion-col>\n          <ion-col col-4 text-left (tap)="adicionar(produto)">\n              <ion-icon name="ios-add-circle-outline"></ion-icon>\n          </ion-col> \n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button ion-button color="danger" class="text-on-bottom btn" (tap)="addCarrinho(produto)">\n              <ion-icon name="cart" style="font-size: 30px"></ion-icon>\n              <div style="font-size: 10px">Adicionar</div>           \n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row style="font-size: 15px">\n      <ion-col col-9 text-center>\n        {{ produto.itemNome }}\n      </ion-col>\n      <ion-col text-left>R$ {{ produto.preco }}</ion-col>\n    </ion-row>\n  </ion-card>  \n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrutasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__ = __webpack_require__(67);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FrutasPage = /** @class */ (function () {
    function FrutasPage(navCtrl, navParams, serv, database, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serv = serv;
        this.modalCtrl = modalCtrl;
        this.searchTerm = '';
        this.qtdeCarrinho = 0;
        this.frutas = database.list('produtos', function (ref) { return ref.orderByChild('tipo').equalTo('fruta'); })
            .snapshotChanges().map(function (changes) {
            return changes.map(function (f) { return (__assign({ key: f.payload.key }, f.payload.val())); });
        });
    }
    FrutasPage.prototype.ionViewDidLoad = function () {
        this.setFilteredItems();
    };
    FrutasPage.prototype.ionViewWillEnter = function () {
        this.qtdeCarrinho = this.serv.qtdeCarrinho;
    };
    FrutasPage.prototype.ionViewWillLeave = function () {
        this.serv.qtdeCarrinho = this.qtdeCarrinho;
    };
    FrutasPage.prototype.setFilteredItems = function () {
        this.items = this.serv.filterItems(this.searchTerm);
    };
    FrutasPage.prototype.mostrarCarrinho = function () {
        //let modal = this.modalCtrl.create(CarrinhoPage, { dadosCarrinho: this.serv.carrinho });
        //modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    FrutasPage.prototype.remover = function (fruta) {
        var valor = parseInt(fruta.qtdeItem);
        if (valor > 0) {
            valor--;
        }
        fruta.qtdeItem = valor.toString();
    };
    FrutasPage.prototype.adicionar = function (fruta) {
        fruta.qtdeItem++;
    };
    FrutasPage.prototype.addCarrinho = function (produto) {
        this.frutas = this.frutas
            .map(function (changes) { return changes.filter(function (p) {
            return p.key != produto.key;
        }); });
        this.qtdeCarrinho++;
        this.serv.carrinho.push(produto);
    };
    FrutasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frutas',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\frutas\frutas.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>    \n      <ion-title>\n        Frutas\n      </ion-title>\n      <ion-buttons right (tap)="mostrarCarrinho()">\n        <button ion-button icon-only large>\n          <ion-icon name="cart" style="font-size: 40px"><ion-badge start color="danger">{{ qtdeCarrinho }}</ion-badge></ion-icon>\n        </button>     \n      </ion-buttons>         \n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content id="fundo">\n  <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()">\n  </ion-searchbar>\n  <ion-card *ngFor="let fruta of frutas | async">\n    <ion-row>\n      <ion-col col-8>\n        <img [src]="fruta.urlImg" width="40px" height="140px">\n      </ion-col>\n      <ion-col style="background-color: rgb(208, 243, 188);">\n        <ion-row>\n          <ion-col text-center style="font-size: 17px;">\n            Quantidade\n          </ion-col>\n        </ion-row>\n        <ion-row style=" font-size: 20px">\n          <ion-col col-4 text-right (tap)="remover(fruta)">\n              <ion-icon name="ios-remove-circle-outline"></ion-icon>\n          </ion-col>\n          <ion-col col-4 text-center>\n            {{ fruta.qtdeItem }}\n          </ion-col>\n          <ion-col col-4 text-left (tap)="adicionar(fruta)">\n              <ion-icon name="ios-add-circle-outline"></ion-icon>\n          </ion-col> \n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button ion-button color="danger" class="text-on-bottom btn" (tap)="addCarrinho(fruta)">\n              <ion-icon name="cart" style="font-size: 30px"></ion-icon>\n              <div style="font-size: 10px">Adicionar</div>           \n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row style="font-size: 15px">\n      <ion-col col-9 text-center>\n        {{ fruta.itemNome }}\n      </ion-col>\n      <ion-col text-left>R$ {{ fruta.preco }}</ion-col>\n    </ion-row>\n  </ion-card>  \n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\frutas\frutas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], FrutasPage);
    return FrutasPage;
}());

//# sourceMappingURL=frutas.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VegetaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(68);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VegetaisPage = /** @class */ (function () {
    function VegetaisPage(navCtrl, navParams, serv, modalCtrl, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serv = serv;
        this.modalCtrl = modalCtrl;
        this.searchTerm = '';
        this.qtdeCarrinho = 0;
        this.vegetais = database.list('produtos', function (ref) { return ref.orderByChild('tipo').equalTo('vegetal'); })
            .snapshotChanges().map(function (changes) {
            return changes.map(function (f) { return (__assign({ key: f.payload.key }, f.payload.val())); });
        });
    }
    VegetaisPage.prototype.ionViewWillEnter = function () {
        this.qtdeCarrinho = this.serv.qtdeCarrinho;
    };
    VegetaisPage.prototype.ionViewWillLeave = function () {
        this.serv.qtdeCarrinho = this.qtdeCarrinho;
    };
    VegetaisPage.prototype.ionViewDidLoad = function () {
        this.setFilteredItems();
    };
    VegetaisPage.prototype.setFilteredItems = function () {
        this.items = this.serv.filterItems(this.searchTerm);
    };
    VegetaisPage.prototype.mostrarCarrinho = function () {
        //let modal = this.modalCtrl.create(CarrinhoPage, { dadosCarrinho: this.serv.carrinho });
        //modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    VegetaisPage.prototype.remover = function (fruta) {
        var valor = parseInt(fruta.qtdeItem);
        if (valor > 0) {
            valor--;
        }
        fruta.qtdeItem = valor.toString();
    };
    VegetaisPage.prototype.adicionar = function (fruta) {
        fruta.qtdeItem++;
    };
    VegetaisPage.prototype.addCarrinho = function (produto) {
        this.vegetais = this.vegetais
            .map(function (changes) { return changes.filter(function (p) {
            return p.key != produto.key;
        }); });
        this.qtdeCarrinho++;
        this.serv.carrinho.push(produto);
    };
    VegetaisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vegetais',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\vegetais\vegetais.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu">      \n        </ion-icon>\n      </button>    \n      <ion-title>\n        Vegetais\n      </ion-title>\n      <ion-buttons right (tap)="mostrarCarrinho()">\n        <button ion-button icon-only large>\n          <ion-icon name="cart" style="font-size: 40px"><ion-badge start color="danger">{{ qtdeCarrinho }}</ion-badge></ion-icon>\n        </button>     \n      </ion-buttons>         \n    </ion-navbar>\n  </ion-header>\n\n<ion-content id="fundo">\n  <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()">\n  </ion-searchbar>\n  <ion-card *ngFor="let vegetal of vegetais | async">\n    <ion-row>\n      <ion-col col-8>\n        <img [src]="vegetal.urlImg" width="40px" height="140px">\n      </ion-col>\n      <ion-col style="background-color: rgb(208, 243, 188);">\n        <ion-row>\n          <ion-col text-center style="font-size: 17px;">\n            Quantidade\n          </ion-col>\n        </ion-row>\n        <ion-row style=" font-size: 20px">\n          <ion-col col-4 text-right (tap)="remover(vegetal)">\n              <ion-icon name="ios-remove-circle-outline"></ion-icon>\n          </ion-col>\n          <ion-col col-4 text-center>\n            {{ vegetal.qtdeItem }}\n          </ion-col>\n          <ion-col col-4 text-left (tap)="adicionar(vegetal)">\n              <ion-icon name="ios-add-circle-outline"></ion-icon>\n          </ion-col> \n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button ion-button color="danger" class="text-on-bottom btn" (tap)="addCarrinho(vegetal)">\n              <ion-icon name="cart" style="font-size: 30px"></ion-icon>\n              <div style="font-size: 10px">Adicionar</div>           \n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row style="font-size: 15px">\n      <ion-col col-9 text-center>\n        {{ vegetal.itemNome }}\n      </ion-col>\n      <ion-col text-left>R$ {{ vegetal.preco }}</ion-col>\n    </ion-row>\n  </ion-card>  \n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\vegetais\vegetais.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], VegetaisPage);
    return VegetaisPage;
}());

//# sourceMappingURL=vegetais.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(308);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_abbas_abbas__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_vegetais_vegetais__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_frutas_frutas__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_carrinho_carrinho__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_servicos_servicos__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var firebaseConfig = {
    apiKey: "AIzaSyCBazjQytaKuBMdV7ReWPB-pm9OSwo2d_k",
    authDomain: "abiro-10.firebaseapp.com",
    databaseURL: "https://abiro-10.firebaseio.com",
    projectId: "abiro-10",
    storageBucket: "abiro-10.appspot.com",
    messagingSenderId: "329145715736"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_vegetais_vegetais__["a" /* VegetaisPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_frutas_frutas__["a" /* FrutasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_abbas_abbas__["a" /* AbbasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_carrinho_carrinho__["a" /* CarrinhoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrar/registrar.module#RegistrarPageModule', name: 'RegistrarPage', segment: 'registrar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_vegetais_vegetais__["a" /* VegetaisPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_frutas_frutas__["a" /* FrutasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_abbas_abbas__["a" /* AbbasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_carrinho_carrinho__["a" /* CarrinhoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_servicos_servicos__["a" /* ServicosProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_abbas_abbas__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_abbas_abbas__["a" /* AbbasPage */];
            }
            else {
                _this.rootPage = 'LoginPage';
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\app\app.html"*/'<ion-menu id="menuApp" [content]="conteudo"  color="secondary">\n    <ion-header>\n      <ion-toolbar color="secondary">\n        <ion-title style="text-align: left">Menu </ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content color="secondary">\n  \n      <ion-list color="secondary">\n  \n        <ion-item color="secondary"> \n          <button menuClose ion-button full clear color="light" style="font-size: 80%">Configurações</button>\n        </ion-item>\n        <ion-item color="secondary">\n          <button menuClose ion-button full clear color="light" style="font-size: 80%">Perfil</button>\n        </ion-item>\n        <ion-item color="secondary">\n          <button menuClose ion-button full clear color="light" style="font-size: 80%" >Sair</button>\n        </ion-item>\n  \n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n\n<ion-nav #conteudo [root]="rootPage" swipeBackEnabled="false"  color="secondary"></ion-nav>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';



var ServicosProvider = /** @class */ (function () {
    function ServicosProvider(http) {
        this.http = http;
        this.qtdeCarrinho = 0;
        this.carrinho = [];
        this.items = [
            { title: 'one' },
            { title: 'two' },
            { title: 'three' },
            { title: 'four' },
            { title: 'five' },
            { title: 'six' }
        ];
    }
    ServicosProvider.prototype.filterItems = function (searchTerm) {
        return this.items.filter(function (item) {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    ServicosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], ServicosProvider);
    return ServicosProvider;
}());

//# sourceMappingURL=servicos.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarrinhoPage = /** @class */ (function () {
    function CarrinhoPage(navCtrl, navParams, viewCtrl, serv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.serv = serv;
        this.itensCarrinho = [];
        this.tadeu = [];
        this.itensCarrinho = this.serv.carrinho;
        this.subTotal = 0;
        this.itensCarrinho.forEach(function (elem) {
            _this.subTotal += elem.preco;
        });
        // this.subTotal = parseFloat(this.subTotal);
    }
    CarrinhoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarrinhoPage');
    };
    CarrinhoPage.prototype.ionViewWillEnter = function () {
    };
    CarrinhoPage.prototype.fecharModal = function () {
        this.viewCtrl.dismiss();
    };
    CarrinhoPage.prototype.remover = function (produto) {
        var valor = parseInt(produto.qtdeItem);
        if (valor > 0) {
            valor--;
        }
        produto.qtdeItem = valor.toString();
    };
    CarrinhoPage.prototype.adicionar = function (produto) {
        produto.qtdeItem++;
    };
    CarrinhoPage.prototype.removerItemCarrinho = function (produto) {
        this.itensCarrinho = this.itensCarrinho.filter(function (busca) {
            return busca.key != produto.key;
        });
        this.serv.carrinho = this.itensCarrinho;
        console.log("qtde " + this.serv.qtdeCarrinho);
        if (this.serv.qtdeCarrinho > 0) {
            this.serv.qtdeCarrinho = this.serv.qtdeCarrinho - 1;
        }
    };
    CarrinhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrinho',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\carrinho\carrinho.html"*/'<ion-header>\n    <ion-toolbar color="secondary">\n      <ion-title>\n        Carrinho\n      </ion-title>\n      <ion-buttons start (tap)="fecharModal()">\n        <button ion-button>\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of itensCarrinho">\n      <ion-thumbnail item-start>\n        <img [src]="item.urlImg">\n      </ion-thumbnail>\n      <h2>{{ item.itemNome }} </h2>\n      <p>{{ item.preco }}</p>\n      <ion-row >\n        <ion-col col-6 text-right>\n          Quantidade    \n        </ion-col>        \n        <ion-col col-2 text-right>\n          <ion-icon name="ios-remove-circle-outline" (tap)="remover(item)"></ion-icon>\n        </ion-col>\n        <ion-col col-2 text-center>\n          {{ item.qtdeItem }}\n        </ion-col>\n        <ion-col col-2 text-left>\n          <ion-icon name="ios-add-circle-outline" (tap)="adicionar(item)"></ion-icon>\n        </ion-col>          \n      </ion-row>  \n      <ion-icon id="icone" name=\'close-circle\' item-end color="danger" style="font-size: 23px" (tap)="removerItemCarrinho(item)"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-item>\n    Subtotal\n    <span item-end>R$ {{ subTotal }}</span>\n  </ion-item>\n  <ion-toolbar color="secondary">\n    <button ion-button full color="danger"> Fechar Pedido</button>\n  </ion-toolbar>\n</ion-footer>  '/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\carrinho\carrinho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */]])
    ], CarrinhoPage);
    return CarrinhoPage;
}());

//# sourceMappingURL=carrinho.js.map

/***/ })

},[288]);
//# sourceMappingURL=main.js.map