import { Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent {

  title = input();

  ins_name: string = "SISTER NIVEDITA PVT ITI";
  mobile_no: string = "7872222244";
  email_id: string = "sniti.org@gmail.com";
  website: string = "snet.org.in";
  address: string = "Gachha, Bejpara, Nakashipara, Nadia 741154";
}
