import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(public router:Router) { }

  email:string;
  password:string;

  message:{isValid:boolean
,text:string};

  signIn(){
    console.log(`email ${this.email} password ${this.password}`);
     if(this.password!=undefined && this.email!=undefined)
  {
    this.router.navigate(["home"]);
  }
  else{
    this.message.isValid=false;
    this.message.text="boş alan bırakmayınız !!!";
  }
}

  ngOnInit() {
  }

}
