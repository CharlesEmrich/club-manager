# MTG Club Manager

#### Throwing Cards Around with Angular

#### By Charles Emrich
#### CharlesEmrich @ gitHub for any questions.

## Description
An app to manage the business, roster, and other data of a theoretical MTG players' club.

## Planning

### Dependencies
## Can be found in bower.json and package.json files.

## Specs
| Behavior | Input | Output |
| - | - | - |
| User visits a page to see a list of club members | *clicks link* | Page of club members appears |
| User clicks a club member's name to see details about them | *clicks name* | Details about club member appear |
| User wants to see information about the club | *clicks About link* | Club details appear. |
| User wants to filter users by the formats they play | *selects format fliter from dropdown* | List of club members specializing in that format appears |
| Admin adds new members to the club through an admin page | *fills out and submits form* | New member is entered into the database |
| Admin edits members' info | *changes info in edit form* | Information is changed in the database |
| Admin deletes a member | *clicks Delete button* | Member is removed from the club |


## Installation

* Clone the repository (https://github.com/CharlesEmrich/club-manager.git)
* Run 'npm install' in terminal to install development dependencies.
* Run 'bower install' in terminal to install runtime dependencies.
* Since the app implements Firebase for its database, you will need to create an app with Firebase's built-in console and implement Firebase credentials in order to get the database to function.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). Before running the tests make sure you are serving the app via `ng serve`.
* Run 'ng serve' to start the local server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Known Bugs

## Technologies Used

* HTML
* JavaScript
* CSS
* NPM
* Bower
* Angular 2
* Angular CLI
* Firebase

### License

MIT

Copyright (c) 2017 Charles Emrich
