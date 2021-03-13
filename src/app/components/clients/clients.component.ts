import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Client[]
  constructor(private clientService: ClientService,
              private router: Router) { }

  ngOnInit(): void {
      // this.clientService.getClients().subscribe(data=>{
      //   console.log(data);
      // });


  }

  getAllClients(){
    this.clientService.getClients().subscribe(data=>{
      this.clients=data;
  },err=>{
    console.log(err);
  });
  }

  getActiveClients(){
    this.clientService.getActiveClients().subscribe(data=>{
      this.clients=data;
      console.log(data);

  },err=>{
    console.log(err);
  });

  }
  onSearch(value){
    this.clientService.searchClients(value.keyWord).subscribe(data=>{
      this.clients=data;
      console.log(value.keyWord);

  },err=>{
    console.log(err);
  });

  }

  changeClientActive(client : Client){
    this.clientService.toggleActive(client).subscribe(data=>{
      client.active=data.active;
    },err=>{
      console.log(err);

    })
  }

  deleteClient(client: Client){
   let confirmation= confirm("are you sure?");
   if (confirmation)
    this.clientService.deleteClient(client).subscribe(data=>{
      this.getAllClients();
    },err=>{
      console.log(err);

    })
  }
  editClient(client){

this.router.navigateByUrl("editClient/"+client.id);

  }




}
