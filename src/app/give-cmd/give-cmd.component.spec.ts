import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveCmdComponent } from './give-cmd.component';

describe('GiveCmdComponent', () => {
  let component: GiveCmdComponent;
  let fixture: ComponentFixture<GiveCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveCmdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiveCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
