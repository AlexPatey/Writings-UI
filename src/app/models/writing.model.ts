import { WritingType } from "../enums/writing-type.enum";

export interface Writing {
  Id: string,
  Title: string,
  Body: string,
  Type: WritingType,
  YearOfCompletion: number | null
};