import { Injectable } from "@angular/core";
import { WritingType } from "../enums/writing-type.enum";
import { CreateWriting } from "../models/create-writing.model";
import { Writing } from "../models/writing.model";

@Injectable({providedIn: 'root'})
export class WritingService {
  private dummyWritings: Writing[] = [
    {
      Id: '204fd5d7-0410-4992-97ea-1ec3c2d893cb',
      Title: 'Test Title 1',
      Body:  'Test Body 1',
      Type: WritingType.Notes,
      YearOfCompletion: null
    },
    {
      Id: 'd8494759-1900-4494-8650-9142848c0c99',
      Title: 'Test Title 2',
      Body:  'Test Body 2',
      Type: WritingType.Original,
      YearOfCompletion: 2023
    },
    {
      Id: 'af622e04-f3cf-4823-8c16-abf80ddb7150',
      Title: 'Test Title 3',
      Body:  'Test Body 3',
      Type: WritingType.Original,
      YearOfCompletion: 2022
    },
    {
      Id: '563b7ed9-7147-449a-8b33-16d5ac0504fc',
      Title: 'Test Title 4',
      Body:  'Test Body 4',
      Type: WritingType.Notes,
      YearOfCompletion: 2022
    },
    {
      Id: '7aa14829-be31-47ad-9eb8-115f6823d26e',
      Title: 'Test Title 5',
      Body:  'Test Body 5',
      Type: WritingType.Review,
      YearOfCompletion: 2021
    },
    {
      Id: '392d858d-d0dc-4a8b-af95-b7eb514cf684',
      Title: 'Test Title 6',
      Body:  'Test Body 6',
      Type: WritingType.Notes,
      YearOfCompletion: 2019
    },
  ];

  getWritings() {
    return this.dummyWritings;
  }

  createWriting(createWriting: CreateWriting) {
    this.dummyWritings.push({
      Id: this.dummyWritings.length.toString(),
      Title: createWriting.Title,
      Body: createWriting.Body,
      Type: createWriting.Type,
      YearOfCompletion: createWriting.YearOfCompletion
    });
  }
}