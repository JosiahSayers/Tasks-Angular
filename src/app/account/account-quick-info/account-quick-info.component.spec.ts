import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountQuickInfoComponent } from './account-quick-info.component';

describe('AccountQuickInfoComponent', () => {
  let component: AccountQuickInfoComponent;
  let fixture: ComponentFixture<AccountQuickInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountQuickInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountQuickInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
