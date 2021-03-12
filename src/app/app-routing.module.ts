import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { ProductsComponent } from './components/products/products.component';
import { TestGridComponent } from './components/test-grid/test-grid.component';


const routes: Routes = [
  {path:"clients", component: ClientsComponent},
  {path:"addClient", component: FormClientComponent},
  {path:"editClient/:id", component: EditClientComponent},
  {path:"products", component: ProductsComponent},
  {path:"testGrid", component: TestGridComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
