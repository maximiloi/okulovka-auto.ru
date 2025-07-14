export async function POST(req: Request) {
  const { name, phone } = await req.json();

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_IDS = process.env.TELEGRAM_ADMIN_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_IDS) {
    return new Response("Missing TELEGRAM_BOT_TOKEN or CHAT_IDS", {
      status: 500,
    });
  }

  const ids = CHAT_IDS.split(",").map((id) => id.trim());

  const text = `📞 Новая заявка на обратный звонок с сайта https://okulovka-auto.ru\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}`;

  const promises = ids.map((chatId) => {
    return fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });
  });

  const results = await Promise.all(promises);

  const allOk = results.every((res) => res.ok);
  if (!allOk) {
    console.error("Ошибка при отправке одному из чатов");
    return new Response("Ошибка Telegram", { status: 500 });
  }

  return new Response("OK");
}
