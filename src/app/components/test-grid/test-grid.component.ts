import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-test-grid',
  templateUrl: './test-grid.component.html',
  styleUrls: ['./test-grid.component.css'],
})
export class TestGridComponent implements OnInit {
  constructor(private clientService: ClientService) {}

 // making the instance(#agGrid) accessible in our component
  @ViewChild('agGrid')
  agGrid: AgGridAngular;

  client: Client;
  columnDefs = [
    { field: 'id', sortable: true, filter: true },
    { field: 'name', sortable: true, filter: true, checkboxSelection: true },
    { field: 'email', sortable: true, filter: true },
    { field: 'solde', sortable: true, filter: true },
    { field: 'birthday', sortable: true, filter: true },
    { field: 'active', sortable: true, filter: true },

  ];

  rowData: any[];

  ngOnInit(){
    this.clientService.getClients().subscribe(data=>{
      this.rowData=data;

    })
  }
  getSelectedRows(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    console.log(selectedNodes);

        const selectedData = selectedNodes.map(node => node.data );
        const selectedDataStringPresentation = selectedData.map(node => `${node.name} ${node.solde}`).join(', ');

        // alert(`Selected nodes: ${selectedDataStringPresentation}`);

  }
  deleteSelectedRows(){
    const selectedRow = this.agGrid.api.getSelectedNodes();
    selectedRow.map(node => this.client=node.data );
    this.clientService.deleteClient(this.client).subscribe(data=>{
       this.ngOnInit();
     });
  }
}
