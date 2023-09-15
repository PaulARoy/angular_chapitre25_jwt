import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosSearchComponent } from './photos-search.component';

describe('PhotosSearchComponent', () => {
  let component: PhotosSearchComponent;
  let fixture: ComponentFixture<PhotosSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosSearchComponent]
    });
    fixture = TestBed.createComponent(PhotosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
