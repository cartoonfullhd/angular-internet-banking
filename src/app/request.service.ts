import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable()
export class RequestService {
  url = 'http://192.168.3.108:8083/bank/account/'
  constructor(private httpClient: HttpClient) 
  { 

  }
  httpRequestLogin(user:string, pass:string)
  {
    /*return this.httpClient.post('http://192.168.3.108:8083/bank/account/login?j_username='+ user + '&j_password=' + pass, null, {responseType: 'text', observe: 'response'})
    .subscribe(
      res => {
        console.log(res.status)
        console.log(res.headers.get('customer_id'))
      }, error => {
        console.log('Error occured::' + error);
      });*/
    return this.httpClient.post(this.url + 'login?j_username='+  user + '&j_password=' + pass, null, {responseType: 'text', observe: 'response'}).toPromise()
  }

  httpRequestGetAccountList(customerID:string)
  {
    return this.httpClient.get(this.url + customerID).toPromise()
  }

  httpRequestGetAccountDetail(accountID : string)
  {
    return this.httpClient.get(this.url + 'account/', {params : {accountId : accountID}}).toPromise()
  }

  httpRequestGetTxnList(accountID)
  {
    return this.httpClient.get(this.url + 'txn/', {params : {account_id : accountID }}).toPromise()
  }

  httpRequestGetCustomerDetail(customerID : string)
  {
    return this.httpClient.get(this.url + 'customerdetail/', {params : {customer_id : customerID}}).toPromise()
  }

  httpRequestGetTxnReport(accountID)
  {
    return this.httpClient.get(this.url + 'txnreport/', {params: {account_id : accountID}, responseType: 'blob'}).toPromise()
  }
}
