// @ts-check

import path from 'path';
import { runSass } from 'sass-true';

const sassFile = path.join('__tests__', '1-tests.scss');
runSass({ describe, it }, sassFile);