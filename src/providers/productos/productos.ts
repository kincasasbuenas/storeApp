import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.services';
import { map } from 'rxjs/operators';


/*
  Generated class for the ProductosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductosProvider {

  pagina:number = 0;
  productos:any[]=[];
  lineas:any [] = [];
  porCategoria:any [] = [];
  resultados:any []=[];

  constructor(public http: HttpClient) {
    //console.log('Hello ProductosProvider Provider');
    this.loadAll();
    this.cargar_lineas();
  }

  cargar_lineas(){
    let url = URL_SERVICIOS + "/lineas";
    this.http.get(url).pipe(map(resp => resp))
                          .subscribe( data => {
                            if(data['error']){

                            }else{
                              this.lineas= data['lineas'];
                              //console.log(data);
                            }
                           });
  }

  cargar_por_categoria(categoria:number){
    let url = URL_SERVICIOS + "/productos/pertype/"+categoria;
    this.http.get(url).pipe(map(resp => resp))
                          .subscribe( data => {
                              console.log(data);
                              this.porCategoria = data['productos'];
                           });
  }

  loadAll(){

    let promesa  = new Promise ( (resolve, reject) => {
      let url = URL_SERVICIOS + "/productos/all/"+ this.pagina;
      this.http.get( url ).pipe(map(resp => resp))
                          .subscribe( data => { 
                            console.log(data) 
                            if (data['error']) {
                              //error
                            }else{
                              this.productos.push(...data['productos']);
                              this.pagina +=1;
                            }
                            resolve();
                          })
    });
    return promesa;
  }

  buscar_producto( termino:string ){

    let url = URL_SERVICIOS + "/productos/search/" + termino;

    this.http.get( url ).pipe(map(data=>data))
            .subscribe( resp =>{

              let data = resp;
              this.resultados = data['productos'];
              console.log(this.resultados);

            });

  }

}
