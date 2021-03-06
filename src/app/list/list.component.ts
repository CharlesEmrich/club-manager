import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

import { Member } from './../member.model';
import { MemberService } from './../member.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [MemberService]
})
export class ListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  formatFilter: string = 'allFormats';
  constructor(private router: Router, private memberService: MemberService){}

  ngOnInit(){
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(clickedMember) {
     this.router.navigate(['members', clickedMember.$key]);
 };

 onFormatChange(format: string) {
   this.formatFilter = format;
 }
}
