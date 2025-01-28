import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusListPage } from './status-list.page';

describe('StatusListPage', () => {
  let component: StatusListPage;
  let fixture: ComponentFixture<StatusListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
