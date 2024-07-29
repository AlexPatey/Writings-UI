import { Component } from '@angular/core';
import { NewWritingComponent } from './create-writing/create-writing.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NewWritingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
