import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  constructor(private clientService: ClientService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  clientForm:FormGroup;
  submitted=false;


  ngOnInit(): void {
    this.clientForm= this.formBuilder.group({
      name : ['',Validators.required],
      email : ['',],
      active : [false,],
      birthday : [null,],
      solde : ['',]
    })
  }

onSubmit(){
  this.submitted=true;
  if(this.clientForm.invalid) return;
  console.log(this.clientForm.value);
  this.clientService.addclient(this.clientForm.value).subscribe(()=>{
    alert("Client Added")

    // this.router.navigateByUrl("/clients");


  },err=>{
    console.log(err);

  })


}

}
