import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDirectiveDirective } from './demo-directive.directive';

@Component({
  selector: 'app-demo-cmp',
  standalone: true,
  imports: [CommonModule,DemoDirectiveDirective],
  templateUrl: './demo-cmp.component.html',
})
export class DemoCmpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
