import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'recipe-image',
  templateUrl: './recipe-image.component.html',
  styleUrls: ['./recipe-image.component.scss']
})
export class RecipeImageComponent implements OnInit {

  imageUrl$: Observable<string>;
  imageUrl: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.imageUrl = `assets/${this.route.snapshot.paramMap.get('image')}`;
  }

}
