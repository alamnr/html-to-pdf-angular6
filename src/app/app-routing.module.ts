import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SemanticUiComponent }  from './semantic-ui/semantic-ui.component';
import { HtmlToPdfExportComponent } from './html-to-pdf-export/html-to-pdf-export.component';

const routes: Routes = [
  {
    path: 'semantic-ui',
    component: SemanticUiComponent
  },
  {
    path: 'export-to-pdf',
    component: HtmlToPdfExportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
