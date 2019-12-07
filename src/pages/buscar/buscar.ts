import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';
import { ProductoPage } from '../index.paginas';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  productoPage = ProductoPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _ps:ProductosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  buscar_productos(event: any){

    let valor = event.target.value;
    console.log(valor);
    this._ps.buscar_producto( valor );
  }

}
