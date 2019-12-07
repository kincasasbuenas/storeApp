import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from "../../config/url.services";
import { map } from 'rxjs/operators';
import {  AlertController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CarritoPage } from '../../pages/carrito/carrito';


/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  token:string;
  id_usuario:string;
  
  constructor(public http: HttpClient,
              private alertCtrl:AlertController, 
              private platform:Platform,
              private storage:Storage) {
    this.cargar_storage();
  }

  ingresar( correo:string, contrasena:string ){

    //console.log(correo+ ' '+ contrasena);

    let data = new HttpParams()
    .append('correo', correo )
    .append('contrasena', contrasena );
    //console.log(data);

    let url = URL_SERVICIOS + "/login";
    return this.http.post( url, data ).pipe(map(resp=>{
      let data_resp = resp;
      console.log( data_resp );

      if( data_resp['error'] ){
          this.alertCtrl.create({
            title: "Error al iniciar",
            subTitle: data_resp['mensaje'],
            buttons: ["OK"]
          }).present();

        }else{

          this.token = data_resp['token'];
          this.id_usuario = data_resp['id_usuario'];

          // Guardar Storage
          this.guardar_storage();
        }
    }));
    
  }


  private guardar_storage(){
    if( this.platform.is("cordova") ){
      // dispositivo
      this.storage.set('token', this.token );
      this.storage.set('id_usuario', this.id_usuario );

    }
    else
    {
      // computadora
      if( this.token ){
        localStorage.setItem("token",  this.token  );
        localStorage.setItem("id_usuario",  this.id_usuario  );
      }else{
        localStorage.removeItem("token");
        localStorage.removeItem("id_usuario");
      }

    }
  }

  cargar_storage(){

    let promesa = new Promise( ( resolve, reject )=>{
      if( this.platform.is("cordova") ){
        // dispositivo
        this.storage.ready()
                  .then( ()=>{
                  this.storage.get("token")
                          .then( token =>{
                            if( token ){
                              this.token = token;
                            }
                        })
                  this.storage.get("id_usuario")
                          .then( id_usuario =>{
                            if( id_usuario ){
                              this.id_usuario = id_usuario;
                            }
                            resolve();
                        })
              })
      }else{
        // computadora
        if( localStorage.getItem("token") ){
          //Existe items en el localstorage
          this.token = localStorage.getItem("token");
          this.id_usuario = localStorage.getItem("id_usuario");
        }
        resolve();
      }
    });
    return promesa;
  }

    cerrar_sesion(){

      this.token = null;
      this.id_usuario = null;

      // guardar storage
      this.guardar_storage();
    }

   activo():boolean{
      if( this.token ){
        return true;
      }else{
        return false;
      }

    }

}


