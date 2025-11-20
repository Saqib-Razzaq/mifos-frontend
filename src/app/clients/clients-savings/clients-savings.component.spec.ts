import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSavingsComponent } from './clients-savings.component';

describe('ClientsSavingsComponent', () => {
  let component: ClientsSavingsComponent;
  let fixture: ComponentFixture<ClientsSavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsSavingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
