# [Tour of Heroes v2](https://angular.io/tutorial "Tour of Heroes tutorial from angular.io")

## Objectives
- [ ]  Use built-in Angular directives to show and high elements and display list of hero data
- [ ] Create Angular components to display hero details and show an array of heroes
- [ ] Use one-way data binding for read-only data
- [ ] Add editable field to update a model with two-way data binding
- [ ] Bind component methods to user events, like keystrokes and clicks
- [ ] Enable users to select a hero from a master list and edit that hero in the details view
- [ ] Format data with pipes
- [ ] Create a shared service to assemble the heroes
- [ ] Use routing to navigate among different views and their components

## The Hero Editor
- I purposefully did not follow the interface for Hero. However, Angular/TS didn't throw and simply displayed the property as was. Be Careful.
- two-way data binding: The view communicates the value to the component and then the component communicates that value back to the view in a different place.

## Display a List
- class binding makes it easy to add and remove a CSS class conditionally
    - syntax: `[class.some-css-class]='some-condition'`
    - example: `[class.selected]='hero === selectedHero'`

## Create a Feature Component
- when we insert the component `<app-hero-detail></app-her-detail>` we do a property binding to selectedHero so that we can populate the fields correctly
    - example: `<app-hero-detail [hero]='selectedHero'></app-hero-detail>`

## Add Services
- Components should fetch or save data directly because that is the responsibility of a service.
- Services are a great way of sharing data between components
- 
