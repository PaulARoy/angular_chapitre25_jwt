import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosSearchbarComponent } from './photos-searchbar.component';

describe('PhotosSearchbarComponent', () => {
  let component: PhotosSearchbarComponent;
  let fixture: ComponentFixture<PhotosSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosSearchbarComponent]
    });
    fixture = TestBed.createComponent(PhotosSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
