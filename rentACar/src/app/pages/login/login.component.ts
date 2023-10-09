import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  corporateLoginForm: FormGroup;
  individualLoginForm: FormGroup;
  choose:boolean=true;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
   this.createIndLoginForm();
   this.createCorLoginForm();
  }

  createCorLoginForm() {
    this.corporateLoginForm= this.formBuilder.group({
     taxNumber:['', Validators.required],
      password: ['', Validators.required],
    });
  }

  createIndLoginForm() {
    this.individualLoginForm= this.formBuilder.group({
      nationalId:['', Validators.required],
      password: ['', Validators.required],
    });
  }



  indlogin() {
    if (this.individualLoginForm.valid) {
      //griş yap jwt token
      console.log(this.individualLoginForm.value);
    } else {
      this.toastrService.error('Griş yapılamadı');
    }
  }


corlogin() {
  if (this.corporateLoginForm.valid) {
    //griş yap jwt token
    console.log(this.corporateLoginForm.value);
  } else {
    this.toastrService.error('Griş yapılamadı');
  }
}

changeBtn(){
  return this.choose = !this.choose;
}



}
