# Simple NodeJS + MongoDB Backend Architecture


This is a clean NodeJS project for beginners. It will make easier to follow your code. Don't forget to star this repo if you've found it useful, maybe it can help newbie developers in nodeJS.



* [Installation](#installation)
* [Usage](#usage)
  * [After Installation](#after-installation)
  * [After Creating a New Route](#after-creating-a-new-route)
  * [Example File/Folder Structure](#example-filefolder-structure)
* [License](#license)
* [Author](#author)

## Installation

You can clone this repo and run the [`npm init` command](https://docs.npmjs.com/cli/init) for initializing this repo as a new project.


```sh
$ npm init
```


Installation for all node modules is done using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install
```

## Usage

### After Installation

You must create a .env file after installation and write your environmental variables to this file.

For example

```
PORT=8000
MONGODB_URI="mongodb://localhost/myProject"
HOST_NAME="localhost"
```

Don't forget to fill [config.js](https://github.com/mertcb/simple-node-mongo-architecture/blob/master/config.js) file after adding new environmental variable to .env file.

For example

```
const config = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI, //your mongodb url
  HOST_NAME: process.env.HOST_NAME // example hostname "localhost"
  NEW_VALUE: process.env.NEW_VALUE
};
```

### After Creating a New Route


When you create a new route, don't forget to import your new route to [index.js](https://github.com/mertcb/simple-node-mongo-architecture/blob/master/src/index.js) file. You can do it like below.


```
import exampleRoute from "./routes/exampleRoute";
.
.
.
.
.
.
app.use(exampleRoute);
```

### Example File/Folder Structure

```
exampleProject
│   config.js
│   .env   
│   package.json
│   package-lock.json
│
└───src
│   │   index.js
│   │
│   └───data
│       │   db.js
│       │   └───model
│       │       │   exampleModel.js
│       │       │   ...
│       │   └───schema
│       │       │   exampleSchema.js
│       │       │   ...
│   └───routes
│       │   index.js
│       │   exampleRoute.js
│       │   ...
└───node_modules
    │   Node Modules will stored here.
```

## Running the project

```sh
$ npm run-script servre
```

## License

[GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.html)

## Author

[Mert Can Bilgiç](https://github.com/mertcb) ([mert@computer.org](mailto:mert@computer.org))

**[Follow me (@mrtcnblgc17) on Twitter!](https://twitter.com/intent/user?screen_name=mrtcnblgc17)**
