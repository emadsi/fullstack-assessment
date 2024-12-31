import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
