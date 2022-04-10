
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

	@Input() user: User = { fullName: '', email: '', password: '', argent: '',position:'',telephone:'' };

  constructor(private userService: UserService, private location: Location) { }

  ngOnInit() {
  }
  save(): void {
		this.userService.addUser(this.user).subscribe(() => this.goBack());
	}
	goBack(): void {
		this.location.back();
	}

}
