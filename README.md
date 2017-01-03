# eslint-plugin-purecheck

Uses [purecheck](https://github.com/lcrespom/purecheck) to ensure all functions are pure.

## Installation

You need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-purecheck`:

```
$ npm install eslint-plugin-purecheck --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` or `--global` flag) then you must also install `eslint-plugin-this` globally.


## Usage

Add `purecheck` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "purecheck"
    ]
}
```

The plugin comes with a single rule called `purecheck/no-impure`. In order to enable it, you have to add the rule in the `rules` section of your `.eslintrc` file:

```json
{
    "rules": {
        "purecheck/no-impure": "warn"
    }
}
```
