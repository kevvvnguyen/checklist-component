# checklist-component

This is a basic implementation of a checklist component that takes in an object and displays it. For brevity and discretion, the following files were created:

* templates/application.hbs - The application file that calls the reusable ChecklistComponent.
* routes/application.js - The model that passes in the mocked data for the ChecklistComponent to consume in application.hbs.
* components/checklist-component.hbs - The template file for the ChecklistComponent.
* components/checklist-component.js - The javascript file for the ChecklistComponent.
* styles/app.scss - The styling for the application, centers the component and sets font for accessibility.
* styles/checklist.scss - The styling for the ChecklistComponent.
* tests/integration/test-support-json.js - A JSON blobs file for mocking test data
* tests/integration/components/checklist-component-test.js - The integration tests for the ChecklistComponent

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone ` this repo (link omitted to prevent implicit bias upon review)
* `cd checklist-component`
* `npm install`

## Running / Development

* To run the application after installation, run `ember serve`, `ember s`, or `npm start`.
* Visit the app at [http://localhost:4200](http://localhost:4200).
* Visit the tests at [http://localhost:4200/tests](http://localhost:4200/tests) (for GUI version of tests).
* Or visit [https://checklist-component.netlify.app/](https://checklist-component.netlify.app/)

### Running Tests (command line)

* To run the tests in the command line, run `ember test` or `ember test --server`.
