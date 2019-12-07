import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarritoProvider } from '../../providers/carrito/carrito';
import { OrdenesDetallePage } from '../index.paginas';


/**
 * Generated class for the OrdenesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordenes',
  templateUrl: 'ordenes.html',
})
export class OrdenesPage {

  ordenDetalle = OrdenesDetallePage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _cs:CarritoProvider) {
  }

  ionViewWillEnter() {
    console.log('cargando ordenes');
    this._cs.cargar_ordenes();
  }

}
