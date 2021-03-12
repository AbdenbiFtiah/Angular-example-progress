import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url="http://localhost:3000/clients";

  constructor(private http: HttpClient) { }

  getClients() : Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }
  getActiveClients() : Observable<Client[]>{
    return this.http.get<Client[]>(this.url+"?active=true");
  }
  searchClients(keyWord: String){
    return this.http.get<Client[]>(this.url+"?name_like="+keyWord);
  }
  toggleActive(client: Client){
    client.active=!client.active;
    return this.http.put<Client>(this.url+"/"+client.id,client);

  }
  deleteClient(client : Client) : Observable<void>{
    return this.http.delete<void>(this.url+"/"+client.id);

  }
  addclient(client: Client): Observable<Client>{
    return this.http.post<Client>(this.url,client);
  }
  getClientById(id: number){
    return this.http.get<Client>(this.url+"/"+id);
  }
  updateClient(client: Client): Observable<Client>{

    return this.http.put<Client>(this.url+"/"+client.id,client);

  }


}
