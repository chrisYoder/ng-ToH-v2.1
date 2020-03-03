import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messagesService/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messagesService: MessagesService) { }
  // ^^ messagesService must be public because I am going to bind it to the templateUrl

  ngOnInit(): void {
  }

}
