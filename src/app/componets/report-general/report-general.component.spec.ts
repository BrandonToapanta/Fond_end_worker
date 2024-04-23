import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGeneralComponent } from './ReportGeneralComponent';

describe('ReportGeneralComponent', () => {
  let component: ReportGeneralComponent;
  let fixture: ComponentFixture<ReportGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
