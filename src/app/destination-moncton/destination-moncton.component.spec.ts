import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationMonctonComponent } from './destination-moncton.component';

describe('DestinationMonctonComponent', () => {
  let component: DestinationMonctonComponent;
  let fixture: ComponentFixture<DestinationMonctonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationMonctonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationMonctonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
