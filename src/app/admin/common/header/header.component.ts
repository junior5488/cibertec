import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() user;
  @Output() handleClick = new EventEmitter();
  constructor() {}

  ngOnInit() {
    console.log('usuario que llega....', this.user);
  }

  onClick() {
    console.log('da click !');
    this.handleClick.emit();
  }
}
