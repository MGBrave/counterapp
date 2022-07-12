import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counterapp';

  countNumber = 0;

  resetBtn(){
    this.countNumber = 0;
  }

  //increase
  increaseBtn(){
    this.countNumber = this.countNumber + 1;
    
  }

  //decrease
  decreaseBtn(){
    this.countNumber = this.countNumber - 1;
    if(this.countNumber > 0){
      this.countNumber = 0;
    }
  }
}
