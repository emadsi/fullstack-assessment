import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
