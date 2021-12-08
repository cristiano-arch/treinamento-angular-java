import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContaService } from 'src/app/services/conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)
  });

  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
  }

  depositar() {
    const deposito: ISaqueDeposito = this.formGroup.value;
    this.contaService.depositar(deposito).subscribe(onResponse => {
      this.formGroup.reset();
      Swal.fire('SUCCESS', 'Successfully deposited!', 'success');
    }, onFailure => {
      Swal.fire('Oops!', 'Something went wrong.', 'error');
      console.error(onFailure);
    });
  }

}
