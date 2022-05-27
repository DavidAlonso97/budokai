export default class CreateTournamentCommand {
    private participants: string[];
  
    public constructor(participants: string[]) {
      this.participants = participants;
    }
  
    public getParticipants(): string[] {
      return this.participants;
    }
  }
  