import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ApiservicesService } from 'src/app/shared/apiservices.service';
import { CardserviceService } from 'src/app/shared/cardservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  public badge!:number
  public singupForm!:FormGroup
  public loginForm!:FormGroup
  
  constructor(private FB:FormBuilder ,private api:ApiservicesService,private card:CardserviceService) { }

  ngOnInit(): void {
    this.singupForm=this.FB.group({
      fullname:[''],
      email:[''],
      password:[''],
    })

    this.loginForm=this.FB.group({
      email:[''],
      password:['']
    })
    this.card.getproducts().subscribe((res)=>{
      this.badge=res.length
      
    })
  
  }
  
  signUp(){
     this.api.postsingUp(this.singupForm.value).subscribe((res)=>{
       alert("signup sucess")
       this.singupForm.reset()

     })
     let close= document.getElementById('close')
   close?.click()
  }
  login(){
   this.api.getlogin().subscribe((res)=>{
  const user=res.find((a:any)=>{
    return a.email === this.loginForm.value.email
  })
  if(user){
    alert("login sucess");
    this.loginForm.reset()
    let close= document.getElementById('close')
    close?.click()
  }else{
    alert("mail is not registered")
  }
   })
  
  }
  

}
