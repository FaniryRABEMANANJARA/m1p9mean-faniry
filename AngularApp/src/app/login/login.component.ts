import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string= ''
  user:User=new User();
  checkoutForm = this.formBuilder.group({
    email: [''],
    mdp: [''],

  });

  constructor( private router: Router,private UserService: UserService, private location: Location,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  connexion():void{
    this.router.navigate(['login']);

  }
  onSubmit(): void {
    this.UserService.login(this.checkoutForm.value).subscribe(data =>{
        console.log(data);
         // this.user=JSON.parse(data);
     console.log(this.user);
          if(this.user.profile==="resto"){
            //  this.UserService.insertlocal(this.user);
              this.router.navigate(['/resto']);

          }
          else if(this.user.profile==="client"){
          //  this.UserService.insertlocal(this.user);
            this.router.navigate(['listeplat']);
          }
          else if(this.user.profile==="ekaly"){
          //  this.UserService.insertlocal(this.user);
            this.router.navigate(['ekaly']);
          }
          else if(this.user.profile==="livreur"){

           // this.UserService.insertlocal(this.user);
            this.router.navigate(['platlivrer']);

          }



      }, error=>{
        this.error=error.error;

      }

      );

    }

}
