import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YayyComponent } from './yayy.component';

describe('YayyComponent', () => {
  let component: YayyComponent;
  let fixture: ComponentFixture<YayyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YayyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YayyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
