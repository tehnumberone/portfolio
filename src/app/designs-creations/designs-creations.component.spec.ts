import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsCreationsComponent } from './designs-creations.component';

describe('DesignsCreationsComponent', () => {
  let component: DesignsCreationsComponent;
  let fixture: ComponentFixture<DesignsCreationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignsCreationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsCreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
