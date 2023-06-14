# oscd-textfield

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @openscd/oscd-textfield
```

## Usage

```html
<script type="module">
  import '@openscd/oscd-textfield';
</script>

<oscd-textfield></oscd-textfield>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`


## `src/OscdTextfield.ts`:

### Exports

| Kind                        | Name             | Declaration   | Module                 | Package |
| --------------------------- | ---------------- | ------------- | ---------------------- | ------- |
| `custom-element-definition` | `oscd-textfield` | OscdTextfield | /src/oscd-textfield.js |         |
| `js`                        | `OscdTextfield`  | OscdTextfield | src/OscdTextfield.ts   |         |

## `src/oscd-textfield.ts`:

### class: `OscdTextfield`, `oscd-textfield`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### CSS Properties

| Name                       | Default          | Description             |
| -------------------------- | ---------------- | ----------------------- |
| `--oscd-textfield-primary` | `--oscd-primary` | Primary Textfield Color |

<hr/>

### Exports

| Kind | Name            | Declaration   | Module                | Package |
| ---- | --------------- | ------------- | --------------------- | ------- |
| `js` | `OscdTextfield` | OscdTextfield | src/oscd-textfield.ts |         |


&copy; 2023 Alliander N.V.
