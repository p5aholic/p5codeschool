# 開発環境の設定

Processingに限らず、何かのプログラミング言語を学習するにはその言語の開発環境を整える必要があります。中にはかなり面倒くさい手順を踏む必要のある言語もありますが、Processingはとても簡単です。まずは下記ページからProcessingをダウンロードしてください。

[Processing公式 - ダウンロード](https://www.processing.org/download/)

最初に寄付するかどうか選択肢があるので"No Donation"を選んで"Download"に進んでください。Processingの現在の最新安定バージョンはバージョン3.1.1です。自分のOSにあったバージョンをダウンロードしてください。

・Windows<br/>
ダウンロードしたzipファイルを解凍すると"processing-####(####はバージョンを表す数字)"というフォルダができます。その中の"processing.exe"がProcessingの実行ファイルになります。"processing-####"フォルダは基本的にどこにあっても構いません。好きな場所に保存しておいてください。実行ファイルを開くとProcessingがスタートします。

・Mac<br/>
ダウンロードした"Processing.app"をアプリケーションフォルダに移動させます。ProcessingアイコンダブルクリックするとProcessingがスタートします。

起動させたProcessingに下のソースコード(プログラムの中身)をコピペしてください。

```processing
// プログラム開始時に一度だけ実行される処理
void setup() {
  size(750, 350);  // 画面サイズを設定
  background(255); // 背景色を設定
}

// setup実行後に繰り返し実行される処理
void draw() {
  // 図形の輪郭線を消す
  noStroke();
  // ランダムな色を指定
  fill(random(255), random(255), random(255), random(255));
  // マウスの位置にランダムな大きさの楕円を描く
  ellipse(mouseX, mouseY, random(50), random(50));
}
```

![](/images/Chapter0/editor.png)

右向き三角形のボタンがプログラム実行ボタンです。実行してみてください。マウスの位置にカラフルな楕円が次々と表示されはずです。プログラムを終了する場合は、実行した時に出てきたウィンドウのXボタンか、実行ボタンの右隣の停止ボタンで終了させます。

これがProcessingの開発環境(PDE：Processing DevelopmentEnvironment)になります。真ん中の白い画面にプログラムを打ち込んで、実行ボタンでプログラムを動かします。

PDEを新規に立ち上げると、sketch_####(####は英数字)という仮の名前が割り振られます。保存する時に任意の名前が付けられます。ProcessingでったプログラムはPC上のどこにでも保存可能です。

エディターで使用する言語を日本語に変える場合は[File]-[Preferences]の上から２番目の"Language"から日本語を選択してください。

以上で開発環境の設定は終了です。まだ触れていないPDEの機能や設定がありますが、この先必要に応じて解説します。
