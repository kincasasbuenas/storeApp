import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarritoProvider } from '../../providers/carrito/carrito';

/**
 * Generated class for the OrdenesDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordenes-detalle',
  templateUrl: 'ordenes-detalle.html',
})
export class OrdenesDetallePage {
  orden:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs:CarritoProvider) {
    this.orden = this.navParams.get("orden");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdenesDetallePage');
  }

  borrar_orden( orden_id:string){
    this._cs.borrar_orden(orden_id).subscribe( data =>{
      if(data['error']){
        //error
      }else{
        this.navCtrl.pop();
      }
    });
  }

}
