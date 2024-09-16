import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElHeaderPage } from './el-header.page';

describe('ElHeaderPage', () => {
  let component: ElHeaderPage;
  let fixture: ComponentFixture<ElHeaderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
