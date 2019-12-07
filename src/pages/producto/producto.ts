import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarritoProvider } from "../../providers/index.services";

/**
 * Generated class for the ProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

  product:any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _cs:CarritoProvider) {
    this.product = this.navParams.get("producto");
    console.log(this.navParams.get("producto"));
  }

}
