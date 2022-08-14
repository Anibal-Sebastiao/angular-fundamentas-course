import { Injectable } from '@angular/core';
import { ISession } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  deleteVote(session: ISession, voterName: any) {
    session.voters = session.voters.filter(voter => voter != voterName);
  }

  addVote(session: ISession, voterName: any) {
    session.voters.push(voterName);
  }

  userHasVoted(session: ISession, voterName: any) {
    return session.voters.some(voter => voter === voterName);
  }
}
