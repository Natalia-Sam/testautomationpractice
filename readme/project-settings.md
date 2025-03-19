1. npm install prettier@3.3.3 -D
2. npm install eslint@9.12.0 -D
3. npm install eslint-config-prettier@9.1.0 -D

"devDependencies": {
"@eslint/eslintrc": "^3.3.0",
"@eslint/js": "^9.21.0",
"@faker-js/faker": "^9.5.1",
"@playwright/test": "^1.49.1",
"@types/node": "^22.13.7",
"dotenv": "^16.4.7",
"eslint": "^9.12.0",
"eslint-config-prettier": "^9.1.0",
"eslint-plugin-prettier": "^5.2.1",
"prettier": "^3.3.3"
}

1. _About scripts in package.json_
   _npm run_ - npm run command is used in Node.js projects to execute scripts defined in the package.json file, in our case we are going to use:
   _npm run format_ - under it we run from package.json next _"format": "npm run prettier:fix && npm run lint:fix"_

Also you can run tests by _npm run test_ or _npm test_ it will execude command from package.json

2. _About tools we added to dev dependency_
   _esLint_ - analyzes your JavaScript code to find syntax errors, potential bugs, and stylistic issues

_prettier_ - helps to beautify your code

_difference between import and required:_

1. import - _Usage_: import is used in ES6 (ECMAScript 2015) and later versions of JavaScript.
   _Syntax_: It is used to import modules that have been exported using the export keyword.
   import React from 'react';
   import { useState, useEffect } from 'react';

2. required - _Usage_: require is used in CommonJS, which is the module system used in Node.js.
   _Syntax_: It is used to include modules synchronously.

_Summary_
_Context_: import is used in modern JavaScript (ES6+) and is the standard for front-end development, while require is used in Node.js and older JavaScript environments.
_Syntax and Behavior_: import is static and asynchronous, whereas require is dynamic and synchronous.
_Features_: import supports tree shaking, which can help optimize the size of your bundled code.
Choosing between import and require depends on the environment you are working in and the specific needs of your project.
