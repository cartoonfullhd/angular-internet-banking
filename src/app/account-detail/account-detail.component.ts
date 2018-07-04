import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { Account } from '../account';
import { Txn } from '../txn';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  accounts: Account
  txns : Txn[]
  id: string
  constructor(private route: ActivatedRoute, private http: RequestService) 
  {

  }

  ngOnInit(): void {
    this.getAccount()
    this.getTxn()
  }

  getAccount(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.httpRequestGetAccountDetail(this.id)
    .then((res: Account )=> {
    this.accounts = res;
    console.log(this.accounts.accountId)
    })
  }

  getTxn(): void {
    this.http.httpRequestGetTxnList(this.id)
    .then((res: Txn[] )=> {
    this.txns = res
    })
  }

  download(): void {
    this.http.httpRequestGetTxnReport(this.id)
    .then(res => {
      var blob= new Blob([res], {type: "application/pdf"});
      var fileURL = URL.createObjectURL(blob)
      window.open(fileURL)
    })
  }
}
