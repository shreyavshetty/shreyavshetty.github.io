import { Component } from '@angular/core';

@Component({
    selector: 'main-text',
    templateUrl: './main-text.component.html',
    styleUrls: ['./main-text.component.css']

})

export class MainText {
    detailsShow = false;
    buttonShow = true;
    showButton() {
        this.showDetails();

    }
    showDetails() {
        if(this.detailsShow == false)
            this.detailsShow = true;
        else
        this.detailsShow = false;

    }
}

