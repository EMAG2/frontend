import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuportService } from './suport.service';
import { Suport } from './suport.model';

@Component({
  selector: 'app-suport',
  templateUrl: './suport.component.html',
  styleUrls: ['./suport.component.scss']
})
export class SuportComponent implements OnInit {

  suportForm: FormGroup;

  constructor(private fb: FormBuilder, private suportService: SuportService) { }

  ngOnInit() {
    this.suportForm = this.fb.group(
      {
        name: this.fb.control('', [Validators.required, Validators.minLength(5)]),
        email: this.fb.control('', [Validators.required, Validators.email]),
        subject: this.fb.control('', [Validators.required, Validators.minLength(5)]),
        message: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)])
      }
    );
  }

  send(suport: Suport) {
    this.suportService.addSuport(suport).subscribe(sup => console.log(sup));
  }

}
