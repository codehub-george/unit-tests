import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ExampleComponent } from './example.component';
import { AvailabilityService } from '../availability.service';
import { FormsModule } from '@angular/forms';

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleComponent ],
      imports: [ FormsModule ],
      providers: [AvailabilityService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has a p with text example works!', () => {
    const value = fixture.debugElement.nativeElement.querySelector('p').textContent;
    expect(value).toEqual('example works!');
  });

  it('reset works', () => {
    component.model.name = 'john';

    component.reset();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css("#name")).nativeElement.value).toEqual('');
  });

});
