
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `LZ77

LZ77 is a dictionary compressor invented by Abraham Lempel and Jacob Ziv in 1977. Instead of a fixed codebook, it uses a sliding window of recently seen data as a dynamic dictionary.

How it works:
1. Maintain a search buffer (already encoded window) and a look-ahead buffer
2. Find the longest prefix of the look-ahead that also appears in the window
3. Emit a triple (offset, length, next):
   - offset — how far back the match starts
   - length — how many characters to copy
   - next — the literal character that follows the match (or empty at EOF)
4. Slide the window forward by length + 1 and repeat

Why it works:
  Repeated phrases (words, patterns, substrings) are common in text and structured data. Pointing back into the window stores a long sequence as a short reference. No code is a prefix of another in the stream of triples, so decoding is unambiguous: copy from offset, then append the literal.

Time Complexity:
  Best:    O(n) with rolling hashes / advanced matchers
  Average: O(n · W) naive scan (W = window size)
  Worst:   O(n · W)

Space Complexity: O(W) for the window

Properties:
  - Lossless dictionary method with a sliding window
  - Foundation of DEFLATE (gzip, ZIP, PNG) which pairs LZ77 with Huffman
  - Window size trades compression ratio for memory and search cost
  - Handles repeated substrings well; pure randomness does not compress

LZ77 turned "look for repeats nearby" into the practical engine behind most everyday lossless archives.`,
  ru: `LZ77

LZ77 — это словарный алгоритм сжатия, изобретённый Абрахамом Лемпелем и Якобом Зивом в 1977 году. Вместо фиксированного кодового словаря он использует скользящее окно недавно обработанных данных в качестве динамического словаря.

Как работает:
1. Поддерживает буфер поиска (уже закодированное окно) и буфер предварительного просмотра
2. Находит самый длинный префикс буфера предварительного просмотра, который также встречается в окне
3. Выдаёт тройку (offset, length, next):
   - offset — насколько далеко назад начинается совпадение
   - length — количество символов для копирования
   - next — буквальный символ после совпадения (или пустое значение в конце файла, EOF)
4. Сдвигает окно вперёд на length + 1 и повторяет процесс

Почему это работает:
  Повторяющиеся фразы (слова, шаблоны, подстроки) часто встречаются в тексте и структурированных данных. Ссылка на предыдущие данные в окне позволяет представить длинную последовательность короткой ссылкой. Поток троек декодируется однозначно: данные копируются с указанного offset, а затем добавляется буквальный символ.

Временная сложность:
  Лучшая:     O(n) при использовании скользящих хешей или продвинутых алгоритмов поиска совпадений
  Средняя:    O(n · W) при наивном поиске (W = размер окна)
  Худшая:     O(n · W)

Пространственная сложность: O(W) для окна

Свойства:
  - Метод словарного сжатия без потерь со скользящим окном
  - Основа DEFLATE (gzip, ZIP, PNG), который объединяет LZ77 с алгоритмом Хаффмана
  - Размер окна определяет компромисс между степенью сжатия, использованием памяти и затратами на поиск
  - Хорошо обрабатывает повторяющиеся подстроки; случайные данные практически не сжимаются

LZ77 превратил идею «искать недавние повторы» в практическую основу большинства повседневных архивов без потерь.`,
  uz: `LZ77

LZ77 — 1977-yilda Abraham Lempel va Jacob Ziv tomonidan ixtiro qilingan lug‘atga asoslangan siqish algoritmi. U qat’iy kodlar lug‘ati o‘rniga yaqinda uchragan ma’lumotlardan iborat siljuvchi oynani dinamik lug‘at sifatida ishlatadi.

Ishlash tartibi:
1. Qidiruv buferini (allaqachon kodlangan oyna) va oldindan ko‘rish buferini saqlab turadi
2. Oldindan ko‘rish buferidagi oynada ham mavjud bo‘lgan eng uzun prefiksni topadi
3. Uchlik qiymatni chiqaradi (offset, length, next):
   - offset — moslik boshlanadigan joygacha orqaga qancha masofa borligi
   - length — nusxalanadigan belgilar soni
   - next — moslikdan keyin keladigan oddiy belgi (yoki fayl oxirida, EOF da, bo‘sh qiymat)
4. Oynani length + 1 miqdoriga oldinga siljitadi va jarayonni takrorlaydi

Nima uchun ishlaydi:
  Takrorlanuvchi iboralar (so‘zlar, naqshlar, qism satrlar) matn va tuzilgan ma’lumotlarda ko‘p uchraydi. Oynadagi oldingi ma’lumotga murojaat qilish uzun ketma-ketlikni qisqa havola bilan ifodalash imkonini beradi. Uchliklar oqimi bir ma’noli dekodlanadi: avval offset bo‘yicha ma’lumot nusxalanadi, so‘ng oddiy belgi qo‘shiladi.

Vaqt murakkabligi:
  Eng yaxshi: O(n) — siljuvchi xeshlar yoki ilg‘or moslik qidirish algoritmlari bilan
  O‘rtacha:   O(n · W) — sodda qidiruvda (W = oyna hajmi)
  Eng yomon:  O(n · W)

Xotira murakkabligi: O(W) — oyna uchun

Xususiyatlari:
  - Siljuvchi oynadan foydalanadigan yo‘qotishsiz lug‘at usuli
  - DEFLATE algoritmining asosi (gzip, ZIP, PNG); u LZ77 va Huffman kodlashni birlashtiradi
  - Oyna hajmi siqish darajasi, xotira sarfi va qidiruv xarajatlari o‘rtasidagi muvozanatni belgilaydi
  - Takrorlanuvchi qism satrlarni yaxshi siqadi; sof tasodifiy ma’lumotlar esa siqilmaydi

LZ77 «yaqindagi takrorlarni izlash» g‘oyasini kundalik hayotda ishlatiladigan ko‘plab yo‘qotishsiz arxivlash formatlarining amaliy asosiga aylantirdi.`,
}

export default descriptions
