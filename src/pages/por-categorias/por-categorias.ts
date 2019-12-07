import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/index.services';
import { ProductoPage } from '../index.paginas';

/**
 * Generated class for the PorCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-por-categorias',
  templateUrl: 'por-categorias.html',
})
export class PorCategoriasPage {

  categoria:any = {};
  productoPage=ProductoPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _ps:ProductosProvider) {
    this.categoria = this.navParams.get('categoria');
    this._ps.cargar_por_categoria(this.categoria.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PorCategoriasPage');
  }

}
