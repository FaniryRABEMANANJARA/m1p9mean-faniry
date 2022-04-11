import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { RestoComponent } from './resto/resto.component';
import { BeneficeComponent } from './benefice/benefice.component';
import { CommandeComponent } from './commande/commande.component';
import { LoginrestoComponent } from './loginresto/loginresto.component';
import { LoginekalyComponent } from './loginekaly/loginekaly.component';
import { PageEkalyComponent } from './page-ekaly/page-ekaly.component';
import { EkalyBeneficeComponent } from './ekaly-benefice/ekaly-benefice.component';
import { EkalyLivreurComponent } from './ekaly-livreur/ekaly-livreur.component';
import { AddLivreurComponent } from './livreur/add-livreur/add-livreur.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent,
    LoginComponent,
    PageAccueilComponent,
    InscriptionComponent,
    PanierComponent,
    LivraisonComponent,
    RestoComponent,
    BeneficeComponent,
    CommandeComponent,
    LoginrestoComponent,
    LoginekalyComponent,
    PageEkalyComponent,
    EkalyBeneficeComponent,
    EkalyLivreurComponent,
    AddLivreurComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
