import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdfcataloguesPage } from './pdfcatalogues';

@NgModule({
  declarations: [
    PdfcataloguesPage,
  ],
  imports: [
    IonicPageModule.forChild(PdfcataloguesPage),
  ],
})
export class PdfcataloguesPageModule {}
