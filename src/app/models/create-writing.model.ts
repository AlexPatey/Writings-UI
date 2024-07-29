import { WritingType } from "../enums/writing-type.enum";

export interface CreateWriting {
  Title: string,
  Body: string,
  Type: WritingType,
  YearOfCompletion: number | null
};