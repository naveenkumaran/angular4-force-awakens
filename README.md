# angular4-force-awakens

 ## TOPICS ##
Why Angular 4?
 - Angular 1 to Angular 4
 - Angular 2 to Angular 4
Type Script Jumpstart
 - Tooling 
 - Types
 - Interfaces
 - Generics
 - Futures
Angular 4 Kick Start(CLI)
 - Setting up angular application
 - Running angular(Webpack bundle)
 - Components(Decorators/Life cycle hooks)
 - Modules(Shared/Core)
 - Services(DI/Providers)
 - Templates(Inline/External/Interpolation/Event Binding/Two way binding/@Input/@Output)
 - Forms(Template Driven/Reactive Forms)
 - Directives(Structural/Attributes/Decorators)
 - Pipes(Inbuilt pipes/Custom pipes)
Routing and Navigation
 - Routing module(Tree View)
 - Lazy routes
Reactive Programming
 - Why Rx Js
 - Observables vs Promises
 - HTTP with Observable
 - Subscribers
 - Operators
 - Subject
Authentication and Authorization
 - Gaurds
 - Route Gaurds

Sample app for Demo

 # Ng create app
ng new angular4-force-awakens --dry-run --skip-install
ng new angular4-force-awakens --routing --prefix myapp --style scss --dry-run

## Generate route later after project creation.
ng generate module route --routing --module=app.module
creates the route configuaration and updates the main app.module

## Creating pipes
ng generate pipe caps.convert --module=shared.module --dry-run

##Creating shared module
ng generate module actors/shared

##Creating Services module under shared
ng generate service actors/shared/actors.service --spec=false

##Package json 
Dependencies structure
Major minor upgrades with ^
