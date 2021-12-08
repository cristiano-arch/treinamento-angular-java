import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CadastroEdicaoClientesComponent } from './pages/clientes/cadastro-edicao-clientes/cadastro-edicao-clientes.component';
import { ClientesComponent } from './pages/clientes/clientes/clientes.component';
import { CadastrarContasComponent } from './pages/contas/cadastrar-contas/cadastrar-contas.component';
import { ContasComponent } from './pages/contas/contas/contas.component';
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
  { path: 'contas', component: ContasComponent },
  { path: 'contas/cadastrar', component: CadastrarContasComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }
