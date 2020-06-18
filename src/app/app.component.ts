import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cari-UI-PortfolioSite';

  // Begin my code. Notice how I didn't need to specify the identifier 'public' or 'private'.
  constructor() {
    var myTitle: JQuery<HTMLElement>;
    var myTitleHTML: string;
    
    myTitle = $("#myJqueryTitle");

    if (myTitle === null) {
      myTitleHTML = "JQuery Stuff";
    }
    else if (myTitle === undefined) {
      myTitleHTML = "JQuery Stuff";
    }
    else {
      myTitleHTML = myTitle.html();
    }

    if (!this.isStringEmpty(myTitleHTML)) {
        myTitle.html(myTitleHTML);
    }
    else {
      // no sense in rendering an empty header
      myTitle.html("<br />");
    }
  }

  // move this into a separate component later (like a helper-class component).
  isStringEmpty(myString: string) {
    if (myString === null) {
      return true;
    }
    if (myString === "") {
      return true;
    }
    else {
      return false;
    }
  }
}
