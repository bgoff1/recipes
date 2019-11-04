import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

interface FilterCheckbox {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss']
})
export class CheckboxFilterComponent implements OnInit {
  checkboxes: FilterCheckbox[] = [];
  sticky = false;
  @Output() filter = new EventEmitter<string[]>();
  @Input() names: string[];
  @Input() title: string;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.setupCheckboxes();
    this.recipeService.resetEvent.subscribe(() => {
      this.setupCheckboxes();
    });
  }

  setupCheckboxes() {
    if (this.names) {
      this.checkboxes = this.names.map(name => {
        return { name, checked: false };
      });
    }
  }

  toggleChecked(event: Event, checkbox: FilterCheckbox) {
    event.preventDefault();
    checkbox.checked = !checkbox.checked;
    this.filter.emit(
      this.checkboxes.filter(type => type.checked).map(item => item.name)
    );
  }

  flipSticky() {
    this.sticky = !this.sticky;
  }
}
