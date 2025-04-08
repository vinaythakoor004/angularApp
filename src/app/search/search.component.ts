import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { User } from '../home/model/uset';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() allUserData: Array<User> = [];
  @Input() userData: Array<User> = [];
  @Output() searchEvent = new EventEmitter<any>();
  userDataCopy: Array<User> = [];

  ngOnInit() {
    this.userDataCopy = structuredClone(this.allUserData);
  }

  onInput(e: any): void {
    const val = e?.target?.value || e?.value || "";
    if (val && this.userDataCopy.length) {
      this.allUserData = this.userDataCopy.filter((user: User) => {
        return user.firstName.toLowerCase().includes(val.toLowerCase()) || user.lastName.toLowerCase().includes(val.toLowerCase()) || user.country.toLowerCase().includes(val.toLowerCase())
      });
    } else {
      this.allUserData = this.userDataCopy;
    }
    this.searchEvent.emit({ allUserData: this.allUserData });
  }

  searchClicked(e: any): void {
    const element = document?.getElementById('searchBox');
    this.onInput(element);
  }
}
