
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `LZW

LZW (Lempel–Ziv–Welch) is an adaptive dictionary compressor published by Terry Welch in 1984. Both encoder and decoder build the same dictionary on the fly from the data stream — no separate dictionary needs to be transmitted.

How it works:
1. Seed the dictionary with every single-character string
2. Keep a current phrase w (initially empty)
3. For each next character c:
   - If w+c is already in the dictionary, set w = w+c
   - Otherwise emit the code for w, add w+c to the dictionary, and set w = c
4. After the last character, emit the code for the remaining w

Why it works:
  As phrases repeat, they receive short integer codes. Longer and longer phrases are learned automatically. The decoder mirrors the encoder: each received code expands to a string, and the next unseen phrase is added with the same rule, so both sides stay in sync.

Time Complexity:
  Best:    O(n)
  Average: O(n)
  Worst:   O(n) with a hash dictionary

Space Complexity: O(d) where d is the number of dictionary entries

Properties:
  - Lossless adaptive dictionary coding
  - Used historically in GIF and Unix compress
  - No prior frequency analysis required
  - Dictionary growth can be capped (fixed code width) for streaming formats

LZW shows how a growing codebook turns recurring structure into shorter integer codes without a separate model of the source.`,
  ru: `LZW

LZW (Lempel–Ziv–Welch) — это адаптивный алгоритм сжатия на основе словаря, опубликованный Терри Уэлчем в 1984 году. Кодировщик и декодировщик на лету создают одинаковый словарь на основе потока данных — передавать отдельный словарь не требуется.

Как это работает:
1. Инициализировать словарь всеми строками из одного символа
2. Поддерживать текущую фразу w (изначально пустую)
3. Для каждого следующего символа c:
   - Если w+c уже есть в словаре, установить w = w+c
   - Иначе выдать код для w, добавить w+c в словарь и установить w = c
4. После обработки последнего символа выдать код оставшейся фразы w

Почему это работает:
  Повторяющиеся фразы получают короткие целочисленные коды. Более длинные фразы автоматически добавляются в словарь. Декодировщик повторяет действия кодировщика: каждый полученный код преобразуется в строку, а следующая ещё не встречавшаяся фраза добавляется по тому же правилу. Благодаря этому обе стороны остаются синхронизированными.

Временная сложность:
  Лучшая:   O(n)
  Средняя:  O(n)
  Худшая:   O(n) при использовании хеш-словаря

Пространственная сложность: O(d), где d — количество записей в словаре

Свойства:
  - Адаптивное словарное кодирование без потерь
  - Исторически использовался в GIF и Unix compress
  - Не требует предварительного анализа частот
  - Рост словаря можно ограничить (фиксированной разрядностью кодов) для потоковых форматов

LZW показывает, как растущая таблица кодов преобразует повторяющиеся структуры в более короткие целочисленные коды без отдельной модели источника данных.`,
  uz: `LZW

LZW (Lempel–Ziv–Welch) — bu 1984-yilda Terri Uelch tomonidan e’lon qilingan, lug‘atga asoslangan adaptiv siqish algoritmi. Kodlovchi va dekodlovchi ma’lumotlar oqimi asosida bir xil lug‘atni ishlash jarayonida yaratadi — alohida lug‘atni uzatish talab qilinmaydi.

Qanday ishlaydi:
1. Lug‘atni bittadan belgidan iborat barcha satrlar bilan boshlash
2. Joriy w iborasini saqlab borish (dastlab bo‘sh)
3. Har bir keyingi c belgisi uchun:
   - Agar w+c lug‘atda mavjud bo‘lsa, w = w+c deb belgilash
   - Aks holda, w uchun kodni chiqarish, w+c ni lug‘atga qo‘shish va w = c deb belgilash
4. Oxirgi belgidan so‘ng qolgan w iborasi uchun kodni chiqarish

Nima uchun ishlaydi:
  Takrorlanadigan iboralar qisqa butun sonli kodlarga ega bo‘ladi. Uzunroq iboralar lug‘atga avtomatik ravishda qo‘shilib boradi. Dekodlovchi kodlovchining amallarini takrorlaydi: qabul qilingan har bir kod satrga aylantiriladi va hali uchramagan keyingi ibora xuddi shu qoida asosida lug‘atga qo‘shiladi. Shu tariqa ikkala tomon hamohang ishlaydi.

Vaqt murakkabligi:
  Eng yaxshi: O(n)
  O‘rtacha:   O(n)
  Eng yomon:  O(n), xesh-lug‘atdan foydalanilganda

Xotira murakkabligi: O(d), bu yerda d — lug‘atdagi yozuvlar soni

Xususiyatlari:
  - Yo‘qotishsiz adaptiv lug‘at kodlashi
  - Tarixan GIF va Unix compress formatlarida ishlatilgan
  - Oldindan chastotalarni tahlil qilishni talab qilmaydi
  - Oqimli formatlarda lug‘atning o‘sishini cheklash mumkin (kod uzunligini belgilangan qiymatda saqlash orqali)

LZW o‘sib boruvchi kodlar jadvali takrorlanuvchi tuzilmalarni manba ma’lumotlari uchun alohida model talab qilmasdan, qisqaroq butun sonli kodlarga qanday aylantirishini ko‘rsatadi.`,
}

export default descriptions
