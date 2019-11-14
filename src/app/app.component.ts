import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Directive Fails Demo';

  constructor(private fb: FormBuilder) {}

  mainForm = this.fb.group({
    name: ['', [Validators.required]],
    readyToGo: [false],
  });
}
