import { Container } from 'inversify';
import PublicIndex from '../../routes/PublicRoutes/Index';

const DIContainer = new Container();

// Routes
DIContainer.bind<PublicIndex>(PublicIndex).toSelf();

export default DIContainer;
