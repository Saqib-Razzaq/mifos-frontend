import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsLoansComponent } from './clients-loans.component';

describe('ClientsLoansComponent', () => {
  let component: ClientsLoansComponent;
  let fixture: ComponentFixture<ClientsLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsLoansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
