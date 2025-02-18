import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLayoutComponent } from './portfolio-layout.component';

describe('PortfolioLayoutComponent', () => {
  let component: PortfolioLayoutComponent;
  let fixture: ComponentFixture<PortfolioLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioLayoutComponent]
    });
    fixture = TestBed.createComponent(PortfolioLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
