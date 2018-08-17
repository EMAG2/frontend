import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EMAG2 } from './EMAG2.model';
import { GeneratorService } from './generator.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  generatorForm: FormGroup;

  constructor(private fb: FormBuilder, private generatorService: GeneratorService) { }

  ngOnInit() {

    this.generatorForm = this.fb.group(
      {
        north: this.fb.control('', [Validators.required]),
        east: this.fb.control('', [Validators.required]),
        south: this.fb.control('', [Validators.required]),
        west: this.fb.control('', [Validators.required])
      }
    );

  }

  searchDatas(emag2: EMAG2) {
    this.generatorService.search(emag2).subscribe(emag => console.log(emag));
  }

}
