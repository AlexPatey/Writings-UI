import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { type CreateWriting } from '../../models/create-writing.model';
import { WritingType } from '../../enums/writing-type.enum';

@Component({
  selector: 'app-new-writing',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatRadioModule, MatSelectModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './create-writing.component.html',
  styleUrl: './create-writing.component.scss'
})
export class NewWritingComponent {
  protected readonly createWriting: CreateWriting = {
    Title: '',
    Body: '',
    Type: WritingType.Notes,
    YearOfCompletion: null
  };

  protected readonly isWritingInProgress: boolean = false;

  protected readonly currentYear: number = new Date().getFullYear();

  protected readonly writingType = WritingType;

  onSubmit() {

  }
}
