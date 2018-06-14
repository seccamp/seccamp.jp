# seccamp.jp
[seccamp.jp](https://seccamp.jp)のソースおよびデータです。

## Structure
怪しい拡張子こと`.json`ファイルにデータが記録されています。データは日付で降順にソートされています。
- `data/<year>/application.json`

## How to contribute
追加は結構大変な作業なので、どうか皆様の力をお貸しください。

入力支援スクリプトが`tool/append.js`にあります。

`node tool/append.js data/2016/application.json` のように実行すれば、対話的に入力できます。
各エントリの入力が終わるごとに保存されますので、終了したらCtrl-Cなどで抜けて、動作確認後コミットしてください。

皆様の Pull Request をお待ちしています！

（追加スクリプトへのContribute等も大歓迎です！自動で項目をスクレイピングして埋めてくれたら嬉しい...。）

## Test
`./testserver.sh`を実行すると以下のコマンドが実行されますので、ブラウザで該当URLを確認してください。

```
python3 -m http.server 7654
```

## Author
[hikalium](https://github.com/hikalium)
