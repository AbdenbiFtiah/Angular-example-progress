import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-test-grid',
  templateUrl: './test-grid.component.html',
  styleUrls: ['./test-grid.component.scss'],
})
export class TestGridComponent implements OnInit {
  constructor(private clientService: ClientService) {}

 // making the instance(#agGrid) accessible in our component
  @ViewChild('agGrid')
  agGrid: AgGridAngular;

  client: Client;
  defaultColDef = {
    sortable: true,
    filter: true
  };
  columnDefs = [
    { field: 'name' },
    { field: 'solde'},
    { field: 'email'},
    { field: 'birthday'},
    { field: 'active',rowGroup: true },
   ];
  autoGroupColumnDef = {
    headerName: 'ID',
    field: 'id',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true
    }
};

  rowData: any[];

  ngOnInit(){
    this.clientService.getClients().subscribe(data=>{
      this.rowData=data;

    })
  }
  getSelectedRows(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();

        const selectedData = selectedNodes.map(node => node.data );
        const selectedDataStringPresentation = selectedData.map(node => `${node.name} ${node.solde}`).join(', ');

        alert(`Selected nodes: ${selectedDataStringPresentation}`);

  }
  deleteSelectedRow(){
    const selectedRow = this.agGrid.api.getSelectedNodes();
    this.client=selectedRow[0].data;
    this.clientService.deleteClient(this.client).subscribe(()=>{
       this.ngOnInit();
     });
  }
}
