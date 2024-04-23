import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-color',
  templateUrl: './theme-color.component.html',
  styleUrls: ['./theme-color.component.scss']
})
export class ThemeColorComponent implements OnInit {
  @Output() theme: EventEmitter<any> = new EventEmitter();
  isActive = false;
  themeSelected = 'primary';

  constructor() { }

  ngOnInit(): void {}

  handleThemeToggle() {
    this.isActive = !this.isActive;
  }

  handleThemeChange(event) {
    this.theme.emit(event.value);
  }
}
