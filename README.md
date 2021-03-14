# Posts.

## Run instructions

- Run `npm start` to start angular dev server.
- Or run `npm run build` + serve `dist/apps/nitro-posts` content using any http static server (e.g. [http-server](https://www.npmjs.com/package/http-server)).

## Architecture

Application is based on the NX monorepo architecture and consists of the following application and libraries:

- nitro-posts - application entry point (dummy)
- layout - application layout (dummy)
- core - domain-independent utils, helpers, services shared across all modules
- posts - posts feature library

NOTE: run `npm run dep-graph` to generate modules dependencies graph.

Application architecture could be easily scaled by adding new libraries and expanding existing ones by adding new feature modules.
The team could easily define new schematics and add them `tools` to scaffold new libraries.

### Architecture principles

- Modular architecture (see `/libs`)
- Strict modules boundaries (see `libs/posts/core/src/index.ts`, `.eslintrc.json` -> `@nrwl/nx/enforce-module-boundaries`, `nx.json` -> `projects`)
- Lazy loading for routes (see `AppRoutingModule`)
- Params validation (see `@required` and `Assert`)
- Immutable models (see `Post`)
- API models are mapped into UI models (see `PostsApiMappingService`, this allows BE and UI to have different naming conventions, reduces coupling between BE and UI, allows UI to support multiple API's versions without changing components, allows to use JS/custom types in models (not just JSON types))
- Low cyclomatic complexity (use async/await to keep code flat (Promises could be replaced with Observables if the team prefers them), splitting large methods)
- Single object responsibility (see `PostsTreeComponent`)
- Business logic encapsulation (see `PostsService`)
- ChangeDetectionStrategy: OnPush
- Split components into 3 categories:
  - Containers: resolve dependencies, handle state (see `PostsComponent`)
  - Dummy: render state (see `PostsTreeHeaderComponent`)
  - Entry: resolve params (routes, dialog), manage layout (see `PostsPageComponent`)

## Pre-requirements

- Collect requirements, use- and edge- cases from all users categories
- Define high-level requirements, split them into epics -> user stories / tasks -> sub-tasks
- Define API (e.g. use OAS)
- Design UI (at least high-level mockups)
- Define the list of supported browsers, devices, screen resolutions
- Define budgets for bundles sizes, performance, memory consumption
- Define the list of supported locales and languages
- Define unit and e2e tests coverage requirements
- Define code style guide, architecture, common patterns, and practices (adjust editor/eslint/prettier configs if required)
- Define content security requirements (CSP, Subresource Integrity)
- Define static content caching and compression policies
- Define CI/CD pipeline to build staging/production images and run tests
- Define pre-commit hooks
- Define visual styleguide (color palette, UX/UI patterns), define core variables, mixins, animations, components
- Define the list of dependencies, lock versions in `package.json`
- Implement authentication and authorization (use `HttpInterceptor` to catch Unauthorized and Forbidden responses, use `CanActivate` guards to protect routes, introduce roles/stereotypes for all users types)
- Implement exceptions handling (implement `LoggerService.captureException`, implement global `ErrorHandler`, implement handlers for 4XX/5XX's responses, implement NotFound page, implement not supported browser/device page)
- Implement `Layout` module
- Implement `AppVersionService` to detect new API/App versions
- Implement Stores (e.g. based on NgRx) to cache data and share it across libraries/components hierarchies (suggestion: introduce middleware if it's required to save/restore the state to/from local storage)
- Implement metrics/stats collection
- Implement GDPR features (if application is going to store clients data)

## Backlog

- Integrate with real API (if BE can generate JSON schema for API - consider replacing `any`/`unknown` in mapping services with auto-generated TS interfaces)
- Implement unit and e2e tests
- Implement i18n for supported locales and languages (potentially replace all texts in API responses with i18n keys)
- Implement accessibility features (aria, titles, tooltips, tab indexes, ...)
