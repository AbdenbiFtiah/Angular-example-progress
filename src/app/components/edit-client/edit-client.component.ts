import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  clientId: number;
  clientForm:FormGroup;
  submitted=false;
  constructor(private activatedRoute: ActivatedRoute,
              private clientService: ClientService,
              private formBuilder: FormBuilder) {
    this.clientId=activatedRoute.snapshot.params.id
  }

  ngOnInit(): void {
    this.clientService.getClientById(this.clientId).subscribe(client=>{
     this.clientForm=this.formBuilder.group({
        id: [client.id],
        name: [client.name,Validators.required],
        email: [client.email,Validators.required],
        solde: [client.solde,Validators.required],
        birthday: [client.birthday,Validators.required]
      })
    })
  }

  onSubmit(){
    this.clientService.updateClient(this.clientForm.value).subscribe((data)=>{
      alert("Client updated!");
    },err=>{
      console.log(err);
    })

  }

}
