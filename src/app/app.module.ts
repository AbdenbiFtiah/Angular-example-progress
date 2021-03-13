import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormClientComponent } from './components/form-client/form-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { AgGridModule } from 'ag-grid-angular';
import { TestGridComponent } from './components/test-grid/test-grid.component';
import 'ag-grid-enterprise';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ProductsComponent,
    FormClientComponent,
    EditClientComponent,
    TestGridComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
