import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { SemanticUiComponent } from './semantic-ui/semantic-ui.component';
import {SuiModule} from 'ng2-semantic-ui';
import { HtmlToPdfExportComponent } from './html-to-pdf-export/html-to-pdf-export.component';

@NgModule({
  declarations: [
    AppComponent,
    SemanticUiComponent,
    HtmlToPdfExportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    ChartsModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
