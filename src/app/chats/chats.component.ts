import { Component, ViewChild, ElementRef ,Input} from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {



  tu = [];
  api4(data: any) {
    data.FriendList.forEach(element => {
      this.tu.push(element);
    });
  }


  storedata: string = '';

  receive(data) {
    this.storedata = data;
  }




  sname: string = '';
  smsg: string = '';
  simg: string = '';
  bool: boolean = false;
  chatclick(data) {
    this.bool = true;
    this.sname = data.Name;
    this.smsg = data.LastMessage;
    this.simg = data.ProfileImage;
  }

}
