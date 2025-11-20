import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTimedepositsComponent } from './clients-timedeposits.component';

describe('ClientsTimedepositsComponent', () => {
  let component: ClientsTimedepositsComponent;
  let fixture: ComponentFixture<ClientsTimedepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsTimedepositsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsTimedepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
