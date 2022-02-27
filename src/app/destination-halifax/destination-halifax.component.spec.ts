import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationHalifaxComponent } from './destination-halifax.component';

describe('DestinationHalifaxComponent', () => {
  let component: DestinationHalifaxComponent;
  let fixture: ComponentFixture<DestinationHalifaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationHalifaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationHalifaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
