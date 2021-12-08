import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ICliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarTodosClientes();
  }

  listarTodosClientes() {
    this.clienteService.listarTodosClientes().subscribe(clientesApi => {
      this.clientes = clientesApi;
    })
  }

  confirmar(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.remover(id).subscribe(result => {
          Swal.fire('SUCCESS', 'Removed successfully!', 'success');
          this.listarTodosClientes();
        }, error => {
          console.error(error);
        });
      }
    });
  }

}
