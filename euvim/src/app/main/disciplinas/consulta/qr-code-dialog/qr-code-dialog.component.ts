import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-qr-code-dialog',
  templateUrl: './qr-code-dialog.component.html',
  styleUrls: ['./qr-code-dialog.component.scss']
})
export class QrCodeDialogComponent {

  public urlQrCode = null;

  constructor(
    public dialogRef: MatDialogRef<QrCodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      data.time = new Date().toISOString()
      console.log(data);
      this.urlQrCode = "https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=207x207&chl="+btoa(JSON.stringify(data));
  }

}
