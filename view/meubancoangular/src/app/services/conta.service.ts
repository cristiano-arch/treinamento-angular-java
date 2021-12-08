import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';
import { ISaqueDeposito } from '../interfaces/saque-deposito';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  api = `${environment.api}/contas/`;

  constructor(private http: HttpClient) { }

  listarTodasContas() {
    return this.http.get<IConta[]>(this.api);
  }

  sacar(saque: ISaqueDeposito) {
    return this.http.post<ISaqueDeposito[]>(`${this.api}/saque`, saque);
  }

  cadastrar(conta: IConta) {
    return this.http.post<IConta[]>(this.api, conta);
  }

  depositar(deposito: ISaqueDeposito) {
    return this.http.post<ISaqueDeposito[]>(`${this.api}/deposito`, deposito);
  }

}
