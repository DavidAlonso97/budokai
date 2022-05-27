import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { HTTP_CODES } from '../../Enums/HttpStatusCode';
import CreateTournamentCommand from '../../../Application/Commands/Tournaments/CreateTournamentCommand';
import CreateTournamentAdapter from '../../../Http/Adapters/Tournaments/CreateTournamentAdapter';
import CreateTournamentHandler from '../../../Application/Handlers/Tournaments/CreateTournamentHandler';

@injectable()
export default class CreateTournamentAction {
    public constructor(
        @inject(CreateTournamentAdapter) private adapter: CreateTournamentAdapter,
        @inject(CreateTournamentHandler) private handler: CreateTournamentHandler,
    ) { }

    public execute(req: Request, res: Response): Promise<Response> {
        const command: CreateTournamentCommand = this.adapter.from(req.body);
        const result = this.handler.execute(command);
        return res.status(HTTP_CODES.OK).json({ matches: result });
    }
}
