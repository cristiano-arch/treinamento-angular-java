import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContaService } from 'src/app/services/conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)
  })

  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
  }

  sacar() {
    const saque: ISaqueDeposito = this.formGroup.value;
    this.contaService.sacar(saque).subscribe(onResponse => {
      Swal.fire('SUCCESS', 'Successfully withdrawn!', 'success');
    }, onFailure => {
      Swal.fire('Oops!', 'Something went wrong.', 'error');
      console.error(onFailure);
    });

  }
}
