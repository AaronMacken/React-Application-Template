'use strict';

const path = require('path');

// come here, then go out of the config folder to get the root directory of the project
const ROOT_DIR = path.resolve(__dirname, '../'); 
const APP_SRC = path.join(ROOT_DIR, 'src');
const COMPONENTS_DIR = path.join(APP_SRC, 'components');
const CONTEXT_DIR = path.join(APP_SRC, 'context');
const DATA_DIR = path.join(APP_SRC, 'data');
const PAGES_DIR = path.join(APP_SRC, 'pages');

module.exports = {
    COMPONENTS_DIR,
    CONTEXT_DIR,
    DATA_DIR,
    PAGES_DIR
}