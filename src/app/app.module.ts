import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//pages
import { HomePage, TabsPage, ProductoPage, OrdenesDetallePage, OrdenesPage, CarritoPage, LoginPage, PorCategoriasPage, CategoriasPage, BuscarPage } from '../pages/index.paginas';
//servicios
import { CarritoProvider,ProductosProvider,UsuarioProvider } from '../providers/index.services';
import { HttpClientModule } from '@angular/common/http';
import { ImagenPipe } from '../pipes/imagen/imagen';

import { IonicStorageModule } from '@ionic/storage';






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ProductoPage,
    OrdenesDetallePage,
    OrdenesPage,
    CarritoPage,
    LoginPage,
    PorCategoriasPage,
    CategoriasPage,
    ImagenPipe,
    BuscarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ProductoPage,
    OrdenesDetallePage,
    OrdenesPage,
    CarritoPage,
    LoginPage,
    PorCategoriasPage,
    CategoriasPage,
    BuscarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    CarritoProvider,
    ProductosProvider    
  ]
})
export class AppModule {}
