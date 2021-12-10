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

  showSpinner: boolean = false;

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)
  })

  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
  }

  sacar() {
    this.showSpinner = true;
    const saque: ISaqueDeposito = this.formGroup.value;
    this.contaService.sacar(saque).subscribe(onResponse => {
      this.showSpinner = false;
      this.formGroup.reset();
      Swal.fire('SUCCESS', 'Successfully withdrawn!', 'success');
    }, onFailure => {
      this.showSpinner = false;
      Swal.fire('Oops!', 'Something went wrong.', 'error');
      console.error(onFailure);
    });

  }
}
