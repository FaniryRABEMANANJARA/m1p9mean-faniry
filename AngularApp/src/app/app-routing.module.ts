import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { UserComponent } from './user/user.component';
import { PanierComponent } from './panier/panier.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { RestoComponent } from './resto/resto.component';
import { CommandeComponent } from './commande/commande.component';
import { BeneficeComponent } from './benefice/benefice.component';



const routes: Routes = [
  { path: '',  redirectTo: '/index', pathMatch: 'full'  },
  { path: 'index', component: PageAccueilComponent },
  { path: '',  redirectTo: '/login', pathMatch: 'full'  },
  { path: 'login', component: LoginComponent },
  { path: '',  redirectTo: '/inscription', pathMatch: 'full'  },
  { path: 'inscription', component: InscriptionComponent },
  { path: '',  redirectTo: '/panier', pathMatch: 'full'  },
  { path: 'panier', component: PanierComponent },
  { path: '',  redirectTo: '/livraison', pathMatch: 'full'  },
  { path: 'livraison', component: LivraisonComponent },
  { path: 'products', redirectTo: '/products', pathMatch: 'full' },
	{ path: 'products', component: ProductListComponent },
	{ path: 'products/:id/detail', component: ProductDetailComponent },
	{ path: 'products/:id/update', component: ProductEditComponent },
	{ path: 'products/add', component: ProductAddComponent },
  { path: 'users', redirectTo: '/users', pathMatch: 'full' },
  { path: 'add', component: UserComponent },
  { path: '', redirectTo: '/resto', pathMatch: 'full' },
  { path: 'resto', component: RestoComponent },
  { path: '', redirectTo: '/commande', pathMatch: 'full' },
  { path: 'commande', component: CommandeComponent },
  { path: '', redirectTo: '/benefice', pathMatch: 'full' },
  { path: 'benefice', component: BeneficeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
