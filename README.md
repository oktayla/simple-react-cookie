# Simple React Cookie

🍪 A simple and lightweight package for handling cookies in React.js applications.

## Installation 🚀

You can install the package via npm:

```bash
npm install simple-react-cookie
```

## Usage 📖
Here's how you can use the react-cookie package in your React.js application:

## Importing the Package 📥

```js
import React from 'react';
import { setCookie, getCookie, removeCookie } from 'simple-react-cookie';
```

## Setting a Cookie
```js
// Syntax: setCookie(name, value, options)
setCookie('username', 'JohnDoe', { expires: 30, path: '/' });
//expires is in day format
```

## Getting a cookie
```js
// Syntax: getCookie(name)
const username = getCookie('username');
console.log(`Username: ${username}`);
```

## Removing a cookie
```js
// Syntax: removeCookie(name)
removeCookie('username');
```

## License
This package is open-source and available under the MIT License. Feel free to use, modify, and distribute it according to the terms of the license.

## Issues and Contributions
If you encounter any issues or have suggestions for improvement, please create an issue on the GitHub repository.

Contributions are welcome! If you'd like to contribute to the development of this package, please fork the repository and submit a pull request.

## Author
Oktay Kopcak