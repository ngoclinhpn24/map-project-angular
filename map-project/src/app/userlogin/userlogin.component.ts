import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  formdata:any;
  model: any = {};
  formcontrol = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl( "", Validators.compose([
          Validators.required,
          Validators.minLength(6)
      ])),

      passwd: new FormControl("")
    });
  }

  // passwordvalidation(formcontrol){
  //   if(formcontrol.value.length < 5){
  //     return {"passwd":true};
  //   }
  // }

  onClickSubmit(data:any){
    console.log(data.username);
    if (data.username == "sv1011" && data.passwd == "123456"){
        alert("Login Successful");
        this.router.navigate(['app-mainpage'])
    }

  }

}
