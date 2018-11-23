
# Convert HTML To PDF Using Angular 6

[Content Link](https://www.c-sharpcorner.com/article/convert-html-to-pdf-using-angular-6/)

### Introduction

Sometimes, we need to provide the important data of an application in the form of a document like a PDF or image. Those times we need to convert the HTML layout into the document, and here, we are going to do the same task to convert the HTML into PDF.
 
I went through many links but was unable to find a quick solution. In the end, I found a JavaScript named JSPDF.
 
You can find their official documentation here. 
 
And also, I have used another npm package named  html2canvas, which is used to convert the HTML into Canvas and then, we can put the image files into our pdf document. For that, we need to download their dependencies.
 
Just use the below npm commands.

`npm install jspdf  `

And to install html2canvas package, use given npm command.

`npm install html2canvas  `

When we are done with the installation part, it's time to import it into our component using the import statement.

`import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas'; `

Package.json file content dependencies - 

`"dependencies": {
    "@angular/animations": "^7.0.4",
    "@angular/cdk": "^7.1.0",
    "@angular/common": "~7.0.0",
    "@angular/compiler": "~7.0.0",
    "@angular/core": "~7.0.0",
    "@angular/forms": "~7.0.0",
    "@angular/http": "~7.0.0",
    "@angular/material": "^7.1.0",
    "@angular/platform-browser": "~7.0.0",
    "@angular/platform-browser-dynamic": "~7.0.0",
    "@angular/router": "~7.0.0",
    "@types/jspdf": "^1.2.2",
    "bootstrap": "^4.1.3",
    "chart.js": "^2.7.3",
    "core-js": "^2.5.4",
    "font-awesome": "^4.7.0",
    "html2canvas": "^1.0.0-alpha.12",
    "jspdf": "^1.4.1",
    "ng2-charts": "^1.6.0",
    "rxjs": "~6.3.3",
    "zone.js": "~0.8.26"
  }`

Now, it's time to design the user interface. Open app.component.html and paste the below code snippet.

`<div id="content" #content>  
  <mat-card>  
    <div class="alert alert-info">  
        <strong>Html To PDF Conversion - Angular 6</strong>  
    </div>  
    <div>  
      <input type="button" value="CPTURE" (click)="captureScreen()"/>  
    </div>  
  </mat-card>  
</div>  
<div >  
  <mat-card>  
    <table id="contentToConvert">  
        <tr>  
          <th>Column1</th>  
          <th>Column2</th>  
          <th>Column3</th>  
        </tr>  
        <tr>  
          <td>Row 1</td>  
          <td>Row 1</td>  
          <td>Row 1</td>  
        </tr>  
        <tr>  
          <td>Row 2</td>  
          <td>Row 2</td>  
          <td>Row 2</td>  
        </tr>  
        <tr>  
          <td>Row 3</td>  
          <td>Row 3</td>  
          <td>Row 3</td>  
        </tr>  
        <tr>  
          <td>Row 4</td>  
          <td>Row 4</td>  
          <td>Row 4</td>  
        </tr>  
        <tr>  
          <td>Row 5</td>  
          <td>Row 5</td>  
          <td>Row 5</td>  
        </tr>  
        <tr>  
          <td>Row 6</td>  
          <td>Row 6</td>  
          <td>Row 6</td>  
        </tr>  
      </table>  
        
  </mat-card>  
</div>  `

You can see in the above code that I have designed a simple HTML table to simplify this example. Do not confuse this with <mat-> tags, I have used Angular Material component to make my user interface look good. When we are done with our UI part, let's run our application and see that output.

![](https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/convert-html-to-pdf-using-angular-6/Images/image001.png)

I have used a capture button to generate the PDF of an HTML table. So, when I click the Capture button, it will generate a PDF in A4 size of paper. Now, open app.component.ts file and write the method as described below.

`import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';  
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
  
@Component({  
  selector: 'app-htmltopdf',  
  templateUrl: './htmltopdf.component.html',  
  styleUrls: ['./htmltopdf.component.css']  
})  
export class HtmltopdfComponent{  
  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }  
}`

As you can see in the above code snippet, I have created one method called captureScreen(), which generates document and will add image into the document and lastly, will save it on a local system.
 
For that, I have provided a few settings, like image height, width, left margin etc.
 
JsDF has a syntax which decides its layout when it generates the PDF.

`new JsPDF(  
    Orientation, // Landscape or Portrait  
  
    unit, // mm, cm, in  
  
    format // A2, A4 etc  
);`

After initialization of JsPDF, I am going to put the image into my document, using pdf.addImage(), which is used to use the image into our document.
 
Other similar methods are given below.

* addHTML()
* addFont()
* addPage()
* addMetaData() 

Now, it's time to execute our application using ng serve -o command, and see the expected output.

![](https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/convert-html-to-pdf-using-angular-6/Images/image002.png)





# HtmlToPdf

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
