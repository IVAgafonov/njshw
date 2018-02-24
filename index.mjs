import {config} from './config';

import {Application} from './application';

let application = new Application(config);
application.run();