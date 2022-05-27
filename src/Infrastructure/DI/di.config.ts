import { Container } from 'inversify';
import CreateTournamentAction from '../../Http/Actions/Tournaments/CreateTournamentAction';
import CreateTournamentAdapter from '../../Http/Adapters/Tournaments/CreateTournamentAdapter';
import CreateTournamentHandler from '../../Application/Handlers/Tournaments/CreateTournamentHandler';
import PublicIndex from '../../routes/PublicRoutes/Index';

const DIContainer = new Container();

// Routes
DIContainer.bind<PublicIndex>(PublicIndex).toSelf();

//Actions
DIContainer.bind<CreateTournamentAction>(CreateTournamentAction).toSelf();

//Adapters
DIContainer.bind<CreateTournamentAdapter>(CreateTournamentAdapter).toSelf();

//Handlers
DIContainer.bind<CreateTournamentHandler>(CreateTournamentHandler).toSelf();

export default DIContainer;
