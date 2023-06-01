import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConstantProvider {

  constructor(public http: Http) {
    console.log('Hello ConstantProvider Provider');
  }

  public rootUrl: string = 'http://apps.abacusdesk.com/everest_ply/dd_api/';  
  public server_url: string = this.rootUrl + 'index.php/app/';
  public upload_url: string ='http://apps.abacusdesk.com/everest_ply/dd_api/app/uploads/';
  public uploadUrl2 = "http://apps.abacusdesk.com/everest_ply/dd_api/app/uploads/site_images/";
  public pdfUrl = "http://apps.abacusdesk.com/everest_ply/dd_api/app/uploads/pdf/";


  public backButton = 0;

}
