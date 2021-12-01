import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input()
  label: string = '';

  @Input()
  type = 'text' || 'number' || 'password';

  constructor() { }

  ngOnInit(): void {
  }

}
