import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPorductsComponent } from './list-porducts.component';

describe('ListPorductsComponent', () => {
  let component: ListPorductsComponent;
  let fixture: ComponentFixture<ListPorductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPorductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPorductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
