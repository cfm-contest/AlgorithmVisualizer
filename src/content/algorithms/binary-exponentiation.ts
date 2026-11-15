
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Binary Exponentiation

Binary Exponentiation computes aⁿ in O(log n) time by halving the exponent at each step instead of multiplying a by itself n times.

How it works:
1. Base case: a⁰ = 1
2. Recursively compute half = binPow(base, floor(exp / 2))
3. If exp is even, return half × half
4. If exp is odd, return half × half × base

Why it is fast:
  Each recursive call cuts the exponent in half, so the recursion depth is proportional to log₂ n instead of n.

Time Complexity:
  Best:    O(log n)
  Average: O(log n)
  Worst:   O(log n)

Space Complexity: O(log n) for the recursive call stack

Applications:
  - Modular exponentiation in cryptography
  - Fast matrix exponentiation
  - Competitive programming and number theory

The key insight is that powers can be reused: once you know a^(n/2), you can square it to recover most of the work immediately.`,

  ru: `Быстрое возведение в степень

Быстрое возведение в степень позволяет вычислить aⁿ за O(log n), деля показатель степени пополам на каждом шаге вместо того, чтобы умножать a само на себя n раз.

Как это работает:
1. Базовый случай: a⁰ = 1
2. Рекурсивно вычисляем half = binPow(base, floor(exp / 2))
3. Если exp чётное, возвращаем half × half
4. Если exp нечётное, возвращаем half × half × base

Почему это быстро:
  Каждый рекурсивный вызов делит показатель степени пополам, поэтому глубина рекурсии пропорциональна log₂ n, а не n.

Временная сложность:
  Лучшая:     O(log n)
  Средняя:    O(log n)
  Худшая:     O(log n)

Пространственная сложность: O(log n) из-за стека рекурсивных вызовов

Применение:
  - Модульное возведение в степень в криптографии
  - Быстрое возведение матриц в степень
  - Соревновательное программирование и теория чисел

Главная идея заключается в повторном использовании степеней: зная a^(n/2), можно возвести результат в квадрат и сразу получить большую часть нужного результата.`,

  uz: `Ikkilik darajaga oshirish

Ikkilik darajaga oshirish algoritmi aⁿ qiymatini O(log n) vaqtda hisoblaydi. Buning uchun a ni n marta o'ziga ko'paytirish o'rniga, har bir qadamda daraja ko'rsatkichi ikkiga bo'linadi.

Qanday ishlaydi:
1. Asosiy holat: a⁰ = 1
2. Rekursiv ravishda half = binPow(base, floor(exp / 2)) qiymatini hisoblaymiz
3. Agar exp juft bo'lsa, half × half qiymatini qaytaramiz
4. Agar exp toq bo'lsa, half × half × base qiymatini qaytaramiz

Nima uchun tez:
  Har bir rekursiv chaqiruv daraja ko'rsatkichini ikkiga bo'ladi. Shu sababli rekursiya chuqurligi n ga emas, log₂ n ga mutanosib bo'ladi.

Vaqt murakkabligi:
  Eng yaxshi holat: O(log n)
  O'rtacha holat:   O(log n)
  Eng yomon holat:  O(log n)

Xotira murakkabligi: Rekursiv chaqiruvlar steki uchun O(log n)

Qo'llanilishi:
  - Kriptografiyada modulli darajaga oshirish
  - Matritsalarni tez darajaga oshirish
  - Musobaqaviy dasturlash va sonlar nazariyasi

Asosiy g'oya — darajalarni qayta ishlatish: a^(n/2) qiymatini bilganingizdan so'ng, uni kvadratga oshirib, hisoblashning katta qismini darhol bajarishingiz mumkin.`
}

export default descriptions
