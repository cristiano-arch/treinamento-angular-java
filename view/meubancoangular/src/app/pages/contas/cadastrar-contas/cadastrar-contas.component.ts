import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ContaService } from 'src/app/services/conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-contas',
  templateUrl: './cadastrar-contas.component.html',
  styleUrls: ['./cadastrar-contas.component.css']
})
export class CadastrarContasComponent implements OnInit {

  clientes: ICliente[] = [];

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    cliente: new FormGroup({
      id: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      observacoes: new FormControl('', Validators.required),
      ativo: new FormControl('', Validators.required),
    }),
    saldo: new FormControl('', Validators.required)
  });

  constructor(
    private contaService: ContaService,
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    this.listarTodosClientes();
  }

  enviar() {
    const conta = this.formGroup.value;
    this.contaService.cadastrar(conta).subscribe(onResponse => {
      Swal.fire('SUCCESS', 'Registered succesfully!', 'success');
      this.router.navigate(['/contas']);
    }, onFailure => {
      console.error(onFailure);
    });
  }

  listarTodosClientes() {
    this.clienteService.listarTodosClientes().subscribe(clientesApi => {
      this.clientes = clientesApi;
    })
  }

}
