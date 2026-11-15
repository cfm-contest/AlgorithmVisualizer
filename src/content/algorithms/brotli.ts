
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Brotli

Brotli is a modern lossless compressor from Google (2015), widely used as HTTP Content-Encoding: br for HTML, CSS, and JavaScript. It sits in the same family as DEFLATE — dictionary matches plus entropy coding — but adds a powerful extra ingredient: a large static dictionary of phrases that already appear across the web.

How it works (pedagogical model on this page):
1. Static dictionary — try to match known phrases (URL pieces, tags, common words) without discovering them from the file alone
2. LZ back-references — copy from already-seen text when the dictionary does not help
3. Literals — emit single characters when neither dictionary nor history matches
4. Entropy coding — assign short codes to frequent commands (real Brotli uses richer, context-dependent codes)

Why it often beats gzip on the web:
  gzip only learns structure inside the current stream. Brotli also starts with shared knowledge of the web: "https://", "www.", "</div>", and thousands of other fragments. That shared prior is free information at both ends of HTTP.

Time Complexity:
  Match finding similar in spirit to LZ77 / DEFLATE; quality depends on window and matcher
  Dictionary lookups are designed to be fast in production codecs

Space Complexity:
  Encoder/decoder need the static dictionary (about 120KB in full Brotli) plus a sliding window

Properties:
  - Lossless; RFC 7932
  - Excellent for text-like web assets; less magic on already-compressed binary
  - Higher compression levels trade CPU for density (CDN / build-time vs on-the-fly)
  - This visualization is a teaching pipeline, not a bit-compatible Brotli encoder

Remember: Brotli ≈ DEFLATE's idea + a web-aware static dictionary + stronger entropy coding.`,

  ru: `Brotli

Brotli — это современный алгоритм сжатия без потерь, разработанный Google в 2015 году. Он широко используется в HTTP через Content-Encoding: br для сжатия HTML, CSS и JavaScript. Brotli относится к тому же семейству алгоритмов, что и DEFLATE: поиск совпадений в словаре и энтропийное кодирование. Однако у него есть дополнительное преимущество — большой статический словарь фраз, которые уже встречаются в интернете.

Как это работает (обучающая модель на этой странице):
1. Статический словарь — поиск совпадений с известными фразами (частями URL, HTML-тегами, распространёнными словами), не извлекая их исключительно из самого файла
2. Обратные ссылки LZ — копирование фрагментов из уже обработанного текста, если словарь не помогает
3. Литералы — запись отдельных символов, когда совпадений нет ни в словаре, ни в ранее обработанном тексте
4. Энтропийное кодирование — назначение коротких кодов часто встречающимся командам (настоящий Brotli использует более сложные коды, зависящие от контекста)

Почему Brotli часто эффективнее gzip в интернете:
  gzip изучает структуру только внутри текущего потока данных. Brotli также использует общие знания о вебе: "https://", "www.", "</div>" и тысячи других фрагментов. Эти заранее известные данные доступны обеим сторонам HTTP-соединения и не требуют дополнительной передачи.

Временная сложность:
  Поиск совпадений концептуально похож на LZ77 / DEFLATE; качество зависит от размера окна и алгоритма поиска
  Поиск по словарю оптимизирован для высокой скорости в промышленных реализациях кодеков

Пространственная сложность:
  Кодировщику и декодировщику необходимы статический словарь (около 120 КБ в полной реализации Brotli) и скользящее окно

Свойства:
  - Сжатие без потерь; RFC 7932
  - Отлично подходит для текстовых веб-ресурсов, но менее эффективен для уже сжатых бинарных данных
  - Более высокие уровни сжатия обменивают производительность CPU на меньший размер данных (CDN / этап сборки vs сжатие на лету)
  - Эта визуализация представляет собой обучающий процесс, а не побитово совместимый кодировщик Brotli

Запомните: Brotli ≈ идея DEFLATE + статический словарь, учитывающий особенности веба + более эффективное энтропийное кодирование.`,

  uz: `Brotli

Brotli — Google tomonidan 2015-yilda ishlab chiqilgan zamonaviy, ma'lumotlarni yo'qotishsiz siqish algoritmi. U HTML, CSS va JavaScript fayllarini siqish uchun HTTP protokolida Content-Encoding: br sifatida keng qo'llaniladi. Brotli DEFLATE algoritmi bilan bir xil oilaga mansub: lug'atdagi mosliklarni qidirish va entropik kodlash usullaridan foydalanadi. Ammo uning muhim qo'shimcha imkoniyati bor — internetda tez-tez uchraydigan iboralarni o'z ichiga olgan katta statik lug'at.

Qanday ishlaydi (ushbu sahifadagi o'quv modeli):
1. Statik lug'at — URL qismlari, HTML teglari va keng tarqalgan so'zlar kabi oldindan ma'lum iboralarni faylning o'zidan qayta aniqlamasdan qidirish
2. LZ havolalari — lug'at yordam bermaganda, avval ko'rib chiqilgan matn qismlaridan nusxa olish
3. Literallar — lug'atda ham, avvalgi matnda ham moslik topilmaganda alohida belgilarni yozish
4. Entropik kodlash — tez-tez uchraydigan buyruqlarga qisqa kodlarni biriktirish (haqiqiy Brotli yanada murakkab, kontekstga bog'liq kodlardan foydalanadi)

Nima uchun Brotli internetda ko'pincha gzip'dan samaraliroq:
  gzip faqat joriy ma'lumotlar oqimi ichidagi tuzilmani o'rganadi. Brotli esa internet haqidagi umumiy bilimlardan ham foydalanadi: "https://", "www.", "</div>" va boshqa minglab fragmentlar. Bu oldindan ma'lum ma'lumotlar HTTP ulanishining ikkala tomonida ham mavjud va ularni qayta uzatish talab qilinmaydi.

Vaqt murakkabligi:
  Mosliklarni qidirish LZ77 / DEFLATE usullariga o'xshash; samaradorlik oyna hajmi va qidiruv algoritmiga bog'liq
  Lug'atdan qidirish ishlab chiqarish darajasidagi kodeklarda yuqori tezlik uchun optimallashtirilgan

Xotira murakkabligi:
  Kodlovchi va dekodlovchiga statik lug'at (to'liq Brotli versiyasida taxminan 120 KB) hamda siljiydigan oyna kerak bo'ladi

Xususiyatlari:
  - Ma'lumotlarni yo'qotishsiz siqish; RFC 7932
  - Matnli veb-resurslar uchun juda samarali, ammo oldindan siqilgan ikkilik ma'lumotlarda samarasi kamroq
  - Yuqori siqish darajalari kichikroq fayl hajmi evaziga ko'proq CPU resurslarini talab qiladi (CDN / build vaqti yoki real vaqt rejimida siqish)
  - Ushbu vizualizatsiya o'quv maqsadidagi jarayon bo'lib, Brotli bilan bit darajasida mos keladigan kodlovchi emas

Esda tuting: Brotli ≈ DEFLATE g'oyasi + internetga moslashtirilgan statik lug'at + kuchliroq entropik kodlash.`
}

export default descriptions
