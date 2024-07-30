import { Component, output } from '@angular/core';
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
  selector: 'app-create-writing',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatRadioModule, MatSelectModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './create-writing.component.html',
  styleUrl: './create-writing.component.scss'
})
export class CreateWritingComponent {

  protected readonly currentYear: number = new Date().getFullYear();

  protected readonly writingType = WritingType;
  
  protected newCreateWriting: CreateWriting = {
    Title: '',
    Body: '',
    Type: WritingType.Notes,
    YearOfCompletion: null
  };

  protected createWriting = output<CreateWriting>();

  protected isWritingInProgress: boolean = false;

  onCreateWritingSubmit() {
    this.createWriting.emit(this.newCreateWriting);
  }
}
