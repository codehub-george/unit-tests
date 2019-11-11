import { Component, OnInit } from '@angular/core';
import { AvailabilityService } from '../availability.service';
import { Person } from './person';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  model = new Person('', '');
  submitted = false;

  constructor(private service: AvailabilityService) { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  reset() {
    this.model = new Person('', '');
  }

}
