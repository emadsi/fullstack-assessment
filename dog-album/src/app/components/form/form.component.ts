import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DogService } from '../../services/dog.service';
import { CommonModule } from '@angular/common';
import { debounceTime, tap } from 'rxjs/operators';
import { AlbumComponent } from "../album/album.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AlbumComponent],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() breedChange = new EventEmitter<{ breed: string; count: number }>();
  dogForm: FormGroup;
  breeds: string[] = [];
  dogImages: string[] = [];

  constructor(private fb: FormBuilder, private dogService: DogService) {
    this.dogForm = this.fb.group({
      breed: [''],
      count: [10], // Total images to fetch
      albumCount: [10], // Images to display in the album
    });

    this.loadBreeds();
  }

  loadBreeds() {
    this.dogService.getBreeds().subscribe((breeds) => (this.breeds = breeds));
  }

  onBreedChange() {
    this.fetchImages();
  }

  onSubmit() {
    this.fetchImages();
  }

  fetchImages() {
    const breed = this.dogForm.value.breed;
    const count = this.dogForm.value.count;

    if (breed) {
      this.dogService.getByBreed(breed, count).subscribe((images) => (this.dogImages = images));
    }
  }
}
