# Gpwrooms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Data
VSCode 1.94.2
Angular CLI: 16.1.8  
Node: 18.17.0  
Package Manager: npm 9.8.1  
OS: win32 x64  
  
Angular: 16.2.12  
... animations, common, compiler, compiler-cli, core, forms  
... platform-browser, platform-browser-dynamic, router  

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.16
@angular-devkit/build-angular   16.2.16
@angular-devkit/core            16.2.16
@angular-devkit/schematics      16.1.8
@angular/cdk                    16.2.14
@angular/cli                    16.1.8
@angular/material               16.2.14
@schematics/angular             16.1.8
rxjs                            7.8.1
typescript                      5.1.6
zone.js                         0.13.3

## Evols
protect adm ui by login and jwt  
create guest ui  

## Mock
```json
[
  '{{repeat(5, 7)}}',
  {
    idbook: '{{index()}}',
    name: '{{firstName()}} {{surname()}}',
    datecheckin: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-dd")}}',
    datecheckout: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-dd")}}',
    datebooking: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-dd")}}',
    coderesa: '{{company().toUpperCase()}}',
    platform: '{{random("AIRBNB", "BOOKING", "LEBONCOIN")}}',
    pricehost: '{{floating(1000, 4000, 2)}}',
    priceguest: '{{floating(1000, 4000, 2)}}' 

  }
]
```
