import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';



const routes: Routes = [
  { path: 'products', redirectTo: '/products', pathMatch: 'full' },
	{ path: 'products', component: ProductListComponent },
	{ path: 'product/:id/detail', component: ProductDetailComponent },
	{ path: 'product/:id/update', component: ProductEditComponent },
	{ path: 'product/add', component: ProductAddComponent },
  { path: '',  redirectTo: '/index', pathMatch: 'full'  },
  { path: 'index', component: PageAccueilComponent },
  { path: '',  redirectTo: '/login', pathMatch: 'full'  },
  { path: 'login', component: LoginComponent },
  { path: '',  redirectTo: '/inscription', pathMatch: 'full'  },
  { path: 'inscription', component: InscriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
