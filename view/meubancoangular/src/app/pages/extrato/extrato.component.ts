import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  titulo: string = 'Meu Título';
  exibir: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
