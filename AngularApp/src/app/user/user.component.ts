import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';


declare var M: any;


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshUserList();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.userService.selectedUser = {
      _id: "",
      nom: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.userService.postUser(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshUserList();
        console.log(res);
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.userService.postUser(form.value).subscribe((res) => {
        this.resetForm(form);
        console.log(res);
        this.refreshUserList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshUserList() {
    this.userService.getUserList().subscribe((res) => {
      this.userService.users = res as User[];
    });
  }

  onEdit(use: User) {
    this.userService.selectedUser = use;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.userService.deleteUser(_id).subscribe((res) => {
        this.refreshUserList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
