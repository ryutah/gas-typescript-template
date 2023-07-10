function onOpen() {
  SpreadsheetApp.getUi().alert("Hello!!");
}

// NOTE(ryutah):
// ビルドすると、各関数が即時関数かするため、グローバルに関数を登録して GAS に関数が認識されるようにする
// see: https://zenn.dev/faw/articles/clasp-with-import#gas-%E3%81%AE%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%90%E3%83%AB%E5%A4%89%E6%95%B0
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
declare let golbal: any;

global.onOpen = onOpen;
