import { Component, OnChanges ,Output} from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {
 
  titlename: string = '';
  
  ar = [];
  
  img:string='';

  api(data: any) {
    this.titlename=data.Name;
    this.img=(data.FriendList[0]).ProfileImage;

    data.FriendList.forEach(element=>{
      this.ar.push(element);
    })



  }

  ar2=[];


  api2(data:any){
    

    data.PostList.forEach(element=>{
      this.ar2.push(element);
    })

    
  }

}
