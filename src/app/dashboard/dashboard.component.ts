import { Component, inject } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { CreateWritingComponent } from './create-writing/create-writing.component';
import { type CreateWriting } from '../models/create-writing.model';
import { type Writing } from '../models/writing.model';
import { WritingType } from '../enums/writing-type.enum';
import { WritingService } from '../services/writing.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, CreateWritingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private writingService: WritingService = inject(WritingService);

  protected readonly writingType = WritingType;

  protected writings: Writing[] = this.writingService.getWritings();

  onCreateWriting(createWriting: CreateWriting) {
    this.writingService.createWriting(createWriting);
  }

}
