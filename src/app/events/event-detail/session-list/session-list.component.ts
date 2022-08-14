import { Component, Input, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { ISession } from '../../shared';
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: ISession[] = [];
  @Input() filterBy: string = '';
  @Input() sortBy: string = '';
  visibleSessions: ISession[] = [];

  constructor(private auth: AuthService,
              private voterService: VoterService) { }

  ngOnChanges(): void {
    if (this.sessions.length > 1) {
      this.filterSession(this.filterBy)

      this.sortBy === 'name'
        ? this.visibleSessions.sort(this.sortByNameAsc)
        : this.visibleSessions.sort(this.sortByVotesDesc)
    }
  }


  filterSession(filterBy: string) {
      if (this.filterBy === 'all') {
        this.visibleSessions = this.sessions.slice(0);
      } else {
        this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filterBy)
      }
  }

  private sortByNameAsc(s1: ISession, s2: ISession): number {

    if (s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1

  }

  private sortByVotesDesc(s1: ISession, s2: ISession): number {
      return s2.voters.length - s1.voters.length
  }

  toggleVote(session: ISession) {

    if(!this.auth.currentUser) return;

    if(this.userHasVoted(session)){
      this.voterService.deleteVote(session, this.auth.currentUser)
    } else {
      this.voterService.addVote(session, this.auth.currentUser)
    }

    if(this.sortBy !== 'name') this.visibleSessions.sort(this.sortByVotesDesc)

  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser);
  }

}
