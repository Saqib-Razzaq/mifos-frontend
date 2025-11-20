import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSharesComponent } from './clients-shares.component';

describe('ClientsSharesComponent', () => {
  let component: ClientsSharesComponent;
  let fixture: ComponentFixture<ClientsSharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsSharesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
