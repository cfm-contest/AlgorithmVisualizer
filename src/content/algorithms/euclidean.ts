
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Euclidean Algorithm

The Euclidean Algorithm computes the greatest common divisor (GCD) of two integers — the largest number that divides both without a remainder. It is one of the oldest algorithms still in common use.

The key insight: any number that divides both a and b also divides their remainder a mod b. So gcd(a, b) = gcd(b, a mod b), and repeating this shrinks the pair until the remainder is 0.

How it works:
1. Divide a by b to get the remainder r = a mod b
2. If r is 0, then b is the answer
3. Otherwise replace the pair with (b, r) and repeat

Why it is fast:
  The remainder at least halves every two steps, so the number of divisions is O(log min(a, b)) — far fewer than trying every candidate divisor.

Time Complexity:
  Best:    O(1)
  Average: O(log min(a, b))
  Worst:   O(log min(a, b))

Space Complexity: O(1) for the iterative version

Properties:
  - Deterministic, no randomness
  - Works with the modulo operation only — no factorization needed
  - Foundation for the Extended Euclidean Algorithm, modular inverses, and reducing fractions

Described by the Greek mathematician Euclid in his Elements (~300 BCE), this algorithm still underpins modern arithmetic, cryptography (RSA key math), and computer algebra systems.`,

  ru: `Алгоритм Евклида

Алгоритм Евклида вычисляет наибольший общий делитель (НОД) двух целых чисел — наибольшее число, на которое оба числа делятся без остатка. Это один из древнейших алгоритмов, который до сих пор широко используется.

Ключевая идея: любое число, которое делит и a, и b, также делит остаток от деления a на b (a mod b). Поэтому gcd(a, b) = gcd(b, a mod b). Повторение этой операции уменьшает пару чисел, пока остаток не станет равен 0.

Как работает алгоритм:
1. Разделить a на b и получить остаток r = a mod b
2. Если r равен 0, то ответ — b
3. В противном случае заменить пару чисел на (b, r) и повторить

Почему он быстрый:
  Остаток уменьшается как минимум вдвое за каждые два шага, поэтому количество делений составляет O(log min(a, b)) — это намного быстрее, чем проверять каждый возможный делитель.

Временная сложность:
  Лучшая:       O(1)
  Средняя:      O(log min(a, b))
  Худшая:       O(log min(a, b))

Пространственная сложность: O(1) для итеративной версии

Свойства:
  - Детерминированный алгоритм, не использующий случайные значения
  - Использует только операцию взятия остатка от деления — факторизация не требуется
  - Является основой расширенного алгоритма Евклида, нахождения обратных элементов по модулю и сокращения дробей

Описанный древнегреческим математиком Евклидом в его труде «Начала» (~300 г. до н. э.), этот алгоритм до сих пор лежит в основе современной арифметики, криптографии (математики ключей RSA) и систем компьютерной алгебры.`,

  uz: `Yevklid algoritmi

Yevklid algoritmi ikkita butun sonning eng katta umumiy bo‘luvchisini (EKUB) hisoblaydi — bu ikkala sonni ham qoldiqsiz bo‘ladigan eng katta sondir. U hozirgacha keng qo‘llaniladigan eng qadimgi algoritmlardan biridir.

Asosiy g‘oya: a va b sonlarining ikkalasini ham bo‘ladigan har qanday son a mod b qoldig‘ini ham bo‘ladi. Shuning uchun gcd(a, b) = gcd(b, a mod b). Bu amalni takrorlash orqali sonlar juftligi kichrayib boradi va oxir-oqibat qoldiq 0 ga teng bo‘ladi.

Qanday ishlaydi:
1. a ni b ga bo‘lib, r = a mod b qoldig‘ini olish
2. Agar r 0 ga teng bo‘lsa, javob b bo‘ladi
3. Aks holda, sonlar juftligini (b, r) bilan almashtirish va takrorlash

Nima uchun tez ishlaydi:
  Qoldiq har ikki qadamda kamida ikki baravar kamayadi. Shu sababli bo‘lishlar soni O(log min(a, b)) ga teng bo‘ladi — bu barcha mumkin bo‘lgan bo‘luvchilarni birma-bir tekshirishdan ancha tez.

Vaqt murakkabligi:
  Eng yaxshi:  O(1)
  O‘rtacha:    O(log min(a, b))
  Eng yomon:   O(log min(a, b))

Xotira murakkabligi: iterativ versiya uchun O(1)

Xususiyatlari:
  - Deterministik, tasodifiylikdan foydalanmaydi
  - Faqat modul bo‘yicha qoldiq olish amalidan foydalanadi — faktorizatsiya talab qilinmaydi
  - Kengaytirilgan Yevklid algoritmi, modul bo‘yicha teskari elementlarni topish va kasrlarni qisqartirish uchun asos bo‘ladi

Yunon matematigi Yevklid tomonidan o‘zining «Negizlar» asarida (~miloddan avvalgi 300-yil) bayon etilgan ushbu algoritm hozirgi kunda ham zamonaviy arifmetika, kriptografiya (RSA kalitlari matematikasi) va kompyuter algebra tizimlarining muhim asoslaridan biri hisoblanadi.`,
}

export default descriptions
