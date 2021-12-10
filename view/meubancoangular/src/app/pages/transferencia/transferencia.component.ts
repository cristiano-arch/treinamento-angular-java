import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IConta } from 'src/app/interfaces/conta';
import { ITransferencia } from 'src/app/interfaces/transferencia';
import { ContaService } from 'src/app/services/conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  contas: IConta[] = [];

  formGroup: FormGroup = new FormGroup({
    origem: new FormGroup({
      id: new FormControl(null),
      agencia: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      saldo: new FormControl('', Validators.required),
      cliente: new FormGroup({
        id: new FormControl('', Validators.required),
        nome: new FormControl('', Validators.required),
        cpf: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        observacoes: new FormControl(''),
        ativo: new FormControl('', Validators.required)
      })
    }),
    destino: new FormGroup({
      id: new FormControl(null),
      agencia: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      saldo: new FormControl('', Validators.required),
      cliente: new FormGroup({
        id: new FormControl('', Validators.required),
        nome: new FormControl('', Validators.required),
        cpf: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        observacoes: new FormControl(''),
        ativo: new FormControl('', Validators.required)
      })
    }),
    valor: new FormControl('', Validators.required)
  });

  form: FormGroup = new FormGroup({
    agenciaDestino: new FormControl('', Validators.required),
    agenciaOrigem: new FormControl('', Validators.required),
    numeroContaDestino: new FormControl('', Validators.required),
    numeroContaOrigem: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)
  })

  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
    this.listarTodasContas();
  }

  listarTodasContas() {
    this.contaService.listarTodasContas().subscribe(contasApi => {
      this.contas = contasApi;
    })
  }

  transferir() {
    this.form.value.agenciaDestino = this.formGroup.value.destino.agencia;
    this.form.value.agenciaOrigem = this.formGroup.value.origem.agencia;
    this.form.value.numeroContaDestino = this.formGroup.value.destino.numero;
    this.form.value.numeroContaOrigem = this.formGroup.value.origem.numero;
    this.form.value.valor = this.formGroup.value.valor;

    const transferencia: ITransferencia = this.form.value;
    this.contaService.transferir(transferencia).subscribe(onResponse => {
      this.listarTodasContas();
      this.limparForms();
      Swal.fire('SUCCSSESS', 'Successfully transferred', 'success')
    }, onFailure => {
      Swal.fire('Oops!', 'Something went wrong.', 'error')
      console.error(onFailure);
    });
  }

  limparForms() {
    this.formGroup.reset();
    this.form.reset();
  }

}
