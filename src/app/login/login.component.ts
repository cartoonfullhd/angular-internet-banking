import { Component} from '@angular/core';
import { RequestService } from '../request.service';
import { HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  user:string
  pass:string
  result:string
  customerID:string
  
  constructor(private http: RequestService, private router: Router, private httpClient: HttpClient) { }

  getUser(userTxt: string): void
  {
    this.user = userTxt
  }

  login()
  {
    if(this.user && this.pass)
    {
      this.http.httpRequestLogin(this.user, this.pass)
      .then(res =>{
        this.result = res.status.toString()
        this.customerID = res.headers.get('customer_id')
        console.log(`result = ${this.result}`)
        this.router.navigate(['/home'], {queryParams:{user:this.user, pass:this.pass, result:this.result, customer_id: this.customerID}});
        console.log(`customer id = ${res.headers.get('customer_id')}`)
        })
      .catch((error) => console.error(error))
    }
    else if(this.user === '' || this.pass)
    {
      
    }
  }

}
