import { DbserviceProvider } from './../../providers/dbservice/dbservice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading } from 'ionic-angular';
import { ConstantProvider } from '../../providers/constant/constant';

/**
 * Generated class for the PdfcataloguesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var DocumentViewer: any;

@IonicPage()
@Component({
  selector: 'page-pdfcatalogues',
  templateUrl: 'pdfcatalogues.html',
})
export class PdfcataloguesPage {
  pdf:any=[];
  loading:Loading;
  uploadUrl:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider, public con:ConstantProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfcataloguesPage');
    this.uploadUrl=  this.con.pdfUrl
    this.getpdf();
  }


   
  getpdf()
  {   console.log('service',this.service);
  
      this.service.post_rqst({},'app_karigar/for_pdf')
      .subscribe( (r) =>
      {
          console.log(r);
        
          this.pdf = r.pdf
            // this.loading.dismiss();
           console.log("pdf name ====>",this.pdf)
           
      });
  }

  Openpdf(name){
    // this.presentLoading();
    // console.log("name of pdf",name);
    console.log(upload_url);
    var upload_url=  this.uploadUrl  +  name;
    console.log("194",upload_url);
    DocumentViewer.previewFileFromUrlOrPath(
      function () {
        console.log('success');
      },
      function (error)
      {
        if (error == 53)
        {
          console.log('No app that handles this file type.');
        }else if (error == 2)
        {``
          console.log('Invalid link');
        }
      },

      upload_url ,'', 'application/pdf');
      setTimeout(() => {
      }, 10000);
    }

}
