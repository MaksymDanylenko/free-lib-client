import {KeyValuePair} from "./key-value-pair";

export class Book extends KeyValuePair {
  info: string;
  category: number;
  year: number;
  numberOfPages: number;
  contents: string;
  authors: KeyValuePair[];
  genres: KeyValuePair[];
}
