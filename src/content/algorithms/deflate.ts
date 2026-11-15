
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `DEFLATE

DEFLATE is the lossless compression engine inside gzip, ZIP, and PNG. It is not a single trick — it is a pipeline that combines two ideas you can study separately on this site: LZ77 dictionary matching and Huffman coding.

How it works:
1. LZ77 scan — find repeated substrings in a sliding window and emit (offset, length, next) tokens
2. Symbol stream — turn those tokens into a sequence of symbols (match markers + literals)
3. Huffman coding — build shorter bit codes for symbols that appear more often
4. Bitstream — replace each symbol with its code; gzip then wraps the stream with a header and checksum

Why it works:
  LZ77 removes redundancy that looks like "I already said this phrase." Huffman removes redundancy that looks like "some symbols are rare." Together they compress both structure and skew — far better than either alone on typical text and web assets.

Time Complexity:
  Dominated by match finding: O(n · W) naive, much faster with hash chains / lazy matching in real gzip
  Huffman stage: O(k log k) for k distinct symbols in the block

Space Complexity: O(W + k) for the window and code tables

Properties:
  - Lossless block compressor (RFC 1951)
  - Used by gzip (RFC 1952), zlib, ZIP, and PNG IDAT
  - Real implementations use dynamic or fixed Huffman trees and separate distance codes — this page teaches the pipeline, not every RFC detail
  - Great mental model: dictionary first, entropy second

If you only remember one sentence: gzip is mostly DEFLATE, and DEFLATE is LZ77 feeding Huffman.`,

  ru: `DEFLATE

DEFLATE — это алгоритм сжатия без потерь, используемый внутри gzip, ZIP и PNG. Это не один отдельный приём, а целый процесс, объединяющий две идеи, которые можно изучать отдельно на этом сайте: поиск совпадений в словаре LZ77 и кодирование Хаффмана.

Как это работает:
1. Сканирование LZ77 — поиск повторяющихся подстрок в скользящем окне и создание токенов (смещение, длина, следующий символ)
2. Поток символов — преобразование этих токенов в последовательность символов (маркеры совпадений + литералы)
3. Кодирование Хаффмана — создание более коротких битовых кодов для символов, которые встречаются чаще
4. Битовый поток — замена каждого символа соответствующим кодом; затем gzip добавляет заголовок и контрольную сумму

Почему это работает:
  LZ77 устраняет избыточность типа «эту фразу я уже произносил». Хаффман устраняет избыточность типа «некоторые символы встречаются редко». Вместе они сжимают и повторяющуюся структуру, и неравномерность частот — значительно эффективнее, чем каждый метод по отдельности, особенно для обычного текста и веб-ресурсов.

Временная сложность:
  В основном зависит от поиска совпадений: O(n · W) при наивном подходе; в реальном gzip значительно быстрее благодаря цепочкам хешей и отложенному сопоставлению
  Этап Хаффмана: O(k log k), где k — количество различных символов в блоке

Пространственная сложность: O(W + k) для скользящего окна и таблиц кодов

Свойства:
  - Блочный алгоритм сжатия без потерь (RFC 1951)
  - Используется в gzip (RFC 1952), zlib, ZIP и PNG IDAT
  - Реальные реализации используют фиксированные или динамические деревья Хаффмана и отдельные коды расстояний — эта страница объясняет общий процесс, а не все детали RFC
  - Простая модель для запоминания: сначала словарь, затем энтропия

Если запомнить только одно предложение: gzip — это в основном DEFLATE, а DEFLATE — это LZ77, передающий данные кодировщику Хаффмана.`,

  uz: `DEFLATE

DEFLATE — gzip, ZIP va PNG formatlari ichida ishlatiladigan ma'lumotlarni yo'qotishsiz siqish algoritmi. Bu bitta usul emas, balki ushbu saytda alohida o'rganish mumkin bo'lgan ikkita g'oyani birlashtiruvchi jarayon: LZ77 lug'at orqali mosliklarni qidirish va Huffman kodlash.

Qanday ishlaydi:
1. LZ77 skanerlash — siljiydigan oyna ichida takrorlanuvchi matn qismlarini topish va (siljish, uzunlik, keyingi belgi) tokenlarini yaratish
2. Belgilar oqimi — ushbu tokenlarni belgilar ketma-ketligiga aylantirish (moslik belgilari + literallar)
3. Huffman kodlash — ko'proq uchraydigan belgilar uchun qisqaroq bit kodlarini yaratish
4. Bitlar oqimi — har bir belgini uning kodi bilan almashtirish; so'ng gzip oqimga sarlavha va nazorat summasini qo'shadi

Nima uchun ishlaydi:
  LZ77 «bu iborani avval aytganman» ko'rinishidagi takrorlanishlarni yo'q qiladi. Huffman esa «ayrim belgilar kam uchraydi» ko'rinishidagi ortiqchalikni kamaytiradi. Ular birgalikda ham takrorlanuvchi tuzilmani, ham belgilar chastotasidagi notekislikni siqadi. Odatdagi matnlar va veb-resurslarda bu usullarni alohida qo'llashdan ancha samaraliroq.

Vaqt murakkabligi:
  Asosan mosliklarni qidirishga bog'liq: sodda usulda O(n · W), haqiqiy gzip'da hash zanjirlari va kechiktirilgan moslashtirish yordamida ancha tezroq
  Huffman bosqichi: O(k log k), bu yerda k — blokdagi turli belgilar soni

Xotira murakkabligi: O(W + k) — siljiydigan oyna va kod jadvallari uchun

Xususiyatlari:
  - Bloklar asosida ishlaydigan, ma'lumotlarni yo'qotishsiz siqish algoritmi (RFC 1951)
  - gzip (RFC 1952), zlib, ZIP va PNG IDAT formatlarida ishlatiladi
  - Haqiqiy implementatsiyalarda statik yoki dinamik Huffman daraxtlari hamda alohida masofa kodlari ishlatiladi — ushbu sahifa RFC'ning barcha tafsilotlarini emas, balki umumiy jarayonni tushuntiradi
  - Eslab qolish uchun qulay model: avval lug'at, keyin entropik kodlash

Agar faqat bitta jumlani eslab qolsangiz: gzip asosan DEFLATE'dan iborat, DEFLATE esa LZ77 orqali Huffman kodlashga uzatiladigan ma'lumotlar jarayonidir.`
}

export default descriptions
