import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { Account } from '../account';
import { Customer } from '../customer';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  user: string
  pass: string
  customer: Customer
  customer_id: string
  result: string
  accounts: Account[]

  constructor(private activate : ActivatedRoute, private http: RequestService) 
  {
    this.activate.queryParams.subscribe(params => {
    this.user = params.user
    this.pass = params.pass
    this.result = params.result
    this.customer_id = params.customer_id})
  }

  ngOnInit(): void{
    this.getAccountList()
    this.getCustomerDetail()
  }

  getAccountList(): void
  {
    this.http.httpRequestGetAccountList(this.customer_id)
    .then((res: Account[]) => {
      this.accounts = res;
      //console.log(res[0].balanceAmount)
    })
  }

  getCustomerDetail(): void
  {
    this.http.httpRequestGetCustomerDetail(this.customer_id)
    .then((res: Customer) => {
      this.customer = res
    })
  }
}
