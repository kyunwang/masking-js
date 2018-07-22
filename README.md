# masking-js
A NPM package that exports functions to mask values. This package masks digits into US phone format.

## Installing
By this simple command you install the package.

```
npm install masking-js
```

## Using the package
To use the pacakge you need to import or require it.

```
import maskingJS from 'masking-js';
// or
const maskingJs = require('masking-js');

// The string should contain 10 numbers
maskingJS('1234567890')
maskingJS('Input121Should999Contain265Ten1Numbers')
```

## License
Licensed under the MIT license

From a tutorial to learn about publishing npm packages: https://auth0.com/blog/developing-npm-packages/