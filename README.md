# Anken List

## Quick Start

### 1. Create Google App Script Project from Google Drive

### 2. Set .clasp.json

#### dist/dev/.clasp.json, dist/stg/.clasp.json, dist/prod/.clasp.json

```json
{
  "scriptId": "<YOUR_SCRIPT_ID>", // change to use script id
  "rootDir": ".",
  "parentId": ["<YOUR_SPREAD_SHEETS_ID>"] // chant to set google docs id
}
```

### 3. build and deploy code

```console
npm install

# set clasp authentication
npm run login

# build typescript to gas
npm run build:dev

# deploy GAS
npm run clasp:push:dev
```

## Contributing

1. run `npm run fix`
1. create branch
   - `feature/id/[ISSUE_ID]/master`
   - `feature/[CHANGE_OVERVIEW]`
1. commit with [Conventional Commit](https://www.conventionalcommits.org/ja/v1.0.0/)
1. push branch
1. send pr
