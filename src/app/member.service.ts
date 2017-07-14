import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Member } from './member.model';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers() {
    return this.members;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberById(albumId: string){
    return this.database.object('members/' + albumId);
  }

  updateMember(localUpdatedMember){
    var albumEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    albumEntryInFirebase.update({title: localUpdatedMember.title,
                                artist: localUpdatedMember.artist,
                                description: localUpdatedMember.description});
  }

  deleteMember(localMemberToDelete){
    var albumEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    albumEntryInFirebase.remove();
  }
}
