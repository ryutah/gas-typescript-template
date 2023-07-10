# Anken List

## Quick Start

### 1. Create Google App Script Project from Google Drive

### 2. Set .clasp.json

```json:prod/.clasp.json
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
npm run build

# deploy GAS
npm run clasp:push:prod
```

## Contributing

### Before push

1. `npm run fix` を実行する
