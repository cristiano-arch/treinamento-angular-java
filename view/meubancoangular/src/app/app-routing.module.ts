import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CadastrarClientesComponent } from './pages/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { CadastroEdicaoClientesComponent } from './pages/clientes/cadastro-edicao-clientes/cadastro-edicao-clientes.component';
import { ClientesComponent } from './pages/clientes/clientes/clientes.component';
import { ContasComponent } from './pages/contas/contas.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HomeComponent } from './pages/home/home.component';
import { SaqueComponent } from './pages/saque/saque.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'saque', component: SaqueComponent },
  { path: 'deposito', component: DepositoComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/cadastrar', component: CadastroEdicaoClientesComponent },
  { path: 'cadastrar/editar/:id', component: CadastroEdicaoClientesComponent },
  { path: 'contas', component: ContasComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }
