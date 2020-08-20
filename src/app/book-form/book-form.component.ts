import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.form.reset()
  }
}
