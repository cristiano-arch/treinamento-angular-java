import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { HomeComponent } from './pages/home/home.component';
import { EstudoComponent } from './components/estudo/estudo.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { InputComponent } from './components/input/input.component';
import { ClientesComponent } from './pages/clientes/clientes/clientes.component';
import { CadastrarClientesComponent } from './pages/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContasComponent } from './pages/contas/contas.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ExtratoComponent, DepositoComponent, SaqueComponent, HomeComponent, EstudoComponent, ButtonComponent, CheckboxComponent, InputComponent, ClientesComponent, CadastrarClientesComponent, ContasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
