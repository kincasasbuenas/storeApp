import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductosProvider, CarritoProvider } from '../../providers/index.services';
import { UsuarioProvider } from '../../providers/usuario/usuario';

import { ProductoPage } from '../index.paginas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productoPage = ProductoPage;

  constructor(public navCtrl: NavController, 
              private _cs:CarritoProvider,
              private _us:UsuarioProvider,
              private _productos:ProductosProvider) {

  }

  loadMore(infiniteScroll){
    this._productos.loadAll()
                    .then( () => infiniteScroll.complete());
  }
}
