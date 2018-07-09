import { Component} from '@angular/core'
import { Router } from '@angular/router'
import { Customer } from '../customer'
import { RequestService } from '../request.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  user: string
  pass: string
  name: string
  address: string 
  phone: string 
  email: string
  status: string
  customer: Customer = {}

  constructor(private router : Router, private http : RequestService) {
    
  }

  register()
  {
    this.customer.Login = this.user
    this.customer.Password = this.pass
    this.customer.Address = this.address
    this.customer.Name = this.name
    this.customer.PhoneNum = this.phone
    this.customer.Email = this.email
    this.http.httpRequestRegister(this.customer)
    .then(res => {
      this.status = res.toString()
      if(this.status == '1')
      {
        this.router.navigate(['/login'])
      }
    })
    .catch((error) => console.error())
  }
}
