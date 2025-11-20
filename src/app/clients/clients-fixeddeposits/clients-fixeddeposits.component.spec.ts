import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsFixeddepositsComponent } from './clients-fixeddeposits.component';

describe('ClientsFixeddepositsComponent', () => {
  let component: ClientsFixeddepositsComponent;
  let fixture: ComponentFixture<ClientsFixeddepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsFixeddepositsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsFixeddepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
