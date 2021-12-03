import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {

  showAlert: boolean = false;
  alertTitle: string = '';

  checkoutForm = this.formBuilder.group({
    nome: '',
    email: '',
    cpf: '',
    observacoes: '',
    ativo: false
  });

  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.showAlert = true;
    this.alertTitle = '\nNome: ' + "'"+this.checkoutForm.value.nome+"'"+
                      '\nEmail: ' + "'"+this.checkoutForm.value.email+"'"+
                      '\nCPF: ' + "'"+this.checkoutForm.value.cpf+"'"+
                      '\nObservações: ' + "'"+this.checkoutForm.value.observacoes+"'"+
                      '\nAtivo: ' + "'"+this.checkoutForm.value.ativo+"'";
    this.checkoutForm.reset();
  }
}
