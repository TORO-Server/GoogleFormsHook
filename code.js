function getForms(e) {
  // レスポンス取得
  const res = e.response;

  // フィールド作成
  let fields = createFields(res);

  // Discord に送信する json 作成
  const payload = JSON.stringify({
    embeds: [
      {
        color: Color,
        timestamp: getTime(res),
        fields: fields,
      },
    ],
  });

  // ログ出力
  console.log("payload: " + payload);

  // Discordに送信する
  sendDiscord(payload);
}
