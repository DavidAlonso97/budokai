import { injectable } from 'inversify';
import CreateTournamentCommand from '../../../Application/Commands/Tournaments/CreateTournamentCommand';
import { AssigmentInterface } from '../Interfaces/AssigmentsInterface';
import { MatchesInterface } from '../Interfaces/MatchesInterface';

@injectable()
export default class CreateTournamentHandler {
  public constructor() { }

  public execute(command: CreateTournamentCommand): MatchesInterface[] {
    let assigments = this.generateRandomPositions(command.getParticipants());
    assigments = this.sortFromAssignations(assigments);
    return this.generateMatches(assigments);    
  }

  private generateRandomPositions(participants: string[]): AssigmentInterface[] {
    let assigments = [];
    let assignations = [];
    for (const participant of participants) {
      let assign = 0;
      do {
        assign = Math.floor(Math.random() * 10000);
      } while (assignations.includes(assign));
      assigments.push({
        participant: participant,
        position: assign
      });
    }
    return assigments;
  }

  private sortFromAssignations(assigments: AssigmentInterface[]): AssigmentInterface[] {
    return assigments.sort(
      (elementA: AssigmentInterface, elementB: AssigmentInterface) => elementA.position - elementB.position
    );
  }

  private generateMatches(assigments: AssigmentInterface[]): MatchesInterface[] {
    let matches = [];
    for (let index = 0; index < assigments.length; index++) {
      let currentIndex = Math.floor(index / 2);
      if (index % 2 === 0) {
        matches[currentIndex] = {
          participant1: assigments[index].participant,
          participant2: null
        };
        continue;
      }
      matches[currentIndex] = {
        participant1: assigments[index - 1].participant,
        participant2: assigments[index].participant
      };
    }
    return matches;
  }
}
