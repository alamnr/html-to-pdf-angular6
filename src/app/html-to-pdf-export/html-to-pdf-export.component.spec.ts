import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlToPdfExportComponent } from './html-to-pdf-export.component';

describe('HtmlToPdfExportComponent', () => {
  let component: HtmlToPdfExportComponent;
  let fixture: ComponentFixture<HtmlToPdfExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlToPdfExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlToPdfExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
