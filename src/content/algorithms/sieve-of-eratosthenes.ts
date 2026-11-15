
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Sieve of Eratosthenes

The Sieve of Eratosthenes is a classic algorithm for finding all prime numbers up to a limit n. It works by iteratively marking the multiples of each prime, starting from 2.

How it works:
1. Create a boolean array marking 2..n as potentially prime
2. For each i from 2 up to √n, if i is still marked prime, mark every multiple of i (starting from i²) as composite
3. Numbers that remain marked after the loop are the primes ≤ n

Why start crossing from i²?
  All smaller multiples of i (2i, 3i, …, (i−1)i) have already been crossed by a smaller prime.

Time Complexity:
  Best:    O(n log log n)
  Average: O(n log log n)
  Worst:   O(n log log n)

Space Complexity: O(n)

Properties:
  - Deterministic, no randomness
  - Cache-friendly when n fits in memory
  - Foundational for number theory and cryptography preprocessing

Named after the Greek mathematician Eratosthenes of Cyrene (~276–194 BCE), this sieve remains one of the most efficient ways to find all small primes and is the basis for many factorization preprocessing steps.`,
  ru: `Решето Эратосфена

Решето Эратосфена — это классический алгоритм для нахождения всех простых чисел до заданного предела n. Он работает путём последовательного вычёркивания кратных каждого простого числа, начиная с 2.

Как работает алгоритм:
1. Создать булев массив, в котором числа от 2 до n изначально отмечены как потенциально простые
2. Для каждого i от 2 до √n, если i всё ещё отмечено как простое, отметить все его кратные (начиная с i²) как составные
3. Числа, оставшиеся отмеченными после завершения цикла, являются простыми числами ≤ n

Почему вычёркивание начинается с i²?
  Все меньшие кратные числа i (2i, 3i, …, (i−1)i) уже были вычеркнуты меньшими простыми числами.

Временная сложность:
  Лучший случай:  O(n log log n)
  Средний случай: O(n log log n)
  Худший случай:  O(n log log n)

Пространственная сложность: O(n)

Свойства:
  - Детерминированный алгоритм, не использующий случайность
  - Эффективно использует кэш, если n помещается в оперативную память
  - Фундаментальный алгоритм для теории чисел и предварительной обработки данных в криптографии

Алгоритм назван в честь древнегреческого математика Эратосфена Киренского (~276–194 гг. до н. э.). Это решето остаётся одним из наиболее эффективных способов нахождения всех небольших простых чисел и служит основой для многих этапов предварительной обработки при факторизации.`,
  uz: `Eratosfen elagi (Sieve of Eratosthenes)

Eratosfen elagi — n chegaragacha bo‘lgan barcha tub sonlarni topish uchun ishlatiladigan klassik algoritm. U 2 dan boshlab, har bir tub sonning karralilarini ketma-ket belgilash orqali ishlaydi.

Algoritm qanday ishlaydi:
1. 2 dan n gacha bo‘lgan sonlarni dastlab tub bo‘lishi mumkin deb belgilovchi mantiqiy massiv yaratish
2. 2 dan √n gacha bo‘lgan har bir i soni uchun, agar u hali ham tub deb belgilangan bo‘lsa, uning barcha karralilarini (i² dan boshlab) murakkab son sifatida belgilash
3. Sikl tugagach, belgilanib qolgan sonlar n dan katta bo‘lmagan tub sonlardir

Nima uchun o‘chirish i² dan boshlanadi?
  i ning undan kichik barcha karralilari (2i, 3i, …, (i−1)i) allaqachon kichikroq tub sonlar tomonidan o‘chirilgan bo‘ladi.

Vaqt murakkabligi:
  Eng yaxshi holat: O(n log log n)
  O‘rtacha holat:   O(n log log n)
  Eng yomon holat:  O(n log log n)

Xotira murakkabligi: O(n)

Xususiyatlari:
  - Deterministik, tasodifiylikdan foydalanmaydi
  - n xotiraga sig‘ganda keshdan samarali foydalanadi
  - Sonlar nazariyasi va kriptografik ma’lumotlarni oldindan qayta ishlash uchun asosiy algoritmlardan biri

Algoritm qadimgi yunon matematigi Kirenalik Eratosfen (~miloddan avvalgi 276–194-yillar) sharafiga nomlangan. Ushbu elak kichik tub sonlarning barchasini topishning eng samarali usullaridan biri bo‘lib qolmoqda va ko‘plab faktorizatsiya jarayonlarida dastlabki qayta ishlash bosqichlari uchun asos bo‘lib xizmat qiladi.`,
}

export default descriptions
