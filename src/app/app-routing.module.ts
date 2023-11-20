import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { WildcardComponent } from './wildcard/wildcard.component';
import { ProductNameComponent } from './product-name/product-name.component';

const routes: Routes = [

{
  component:HomeComponent,
  path:""
},
{
  component:AboutComponent,
  path:"About"
},
{
  path:'products', loadChildren: ()=> import('./products/products.module').then(m=> m.ProductsModule)
},
// {
//   path:"**",
//   component: WildcardComponent
// },

{
  path: "product-name/:productName",
  component: ProductNameComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
