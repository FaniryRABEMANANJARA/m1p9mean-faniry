
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
		@Input() user: User = { fullName: '', email: '', password: '', argent: '',position:'',telephone:'',profile:'',etat:'' };

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
