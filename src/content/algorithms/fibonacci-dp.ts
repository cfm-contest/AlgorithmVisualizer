
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Fibonacci (Dynamic Programming)

The Fibonacci sequence is a classic example of dynamic programming. Each number is the sum of the two preceding ones: F(n) = F(n-1) + F(n-2).

How it works (Bottom-Up Tabulation):
1. Create a table to store computed values
2. Set base cases: F(0) = 0, F(1) = 1
3. Fill the table iteratively: F(i) = F(i-1) + F(i-2)
4. Return F(n)

Time Complexity: O(n)
Space Complexity: O(n) — can be optimized to O(1)

Comparison:
  - Naive recursion: O(2^n) — exponential
  - Memoization (top-down): O(n)
  - Tabulation (bottom-up): O(n)

Dynamic Programming avoids redundant computation by storing previously computed results. Fibonacci is the simplest illustration of this technique.`,

  ru: `Числа Фибоначчи (Динамическое программирование)

Последовательность Фибоначчи — классический пример динамического программирования. Каждое следующее число равно сумме двух предыдущих: F(n) = F(n-1) + F(n-2).

Как работает алгоритм (табуляция снизу вверх):
1. Создать таблицу для хранения вычисленных значений
2. Задать базовые случаи: F(0) = 0, F(1) = 1
3. Последовательно заполнить таблицу: F(i) = F(i-1) + F(i-2)
4. Вернуть F(n)

Временная сложность: O(n)
Пространственная сложность: O(n) — можно оптимизировать до O(1)

Сравнение:
  - Наивная рекурсия: O(2^n) — экспоненциальная сложность
  - Мемоизация (сверху вниз): O(n)
  - Табуляция (снизу вверх): O(n)

Динамическое программирование позволяет избежать повторных вычислений, сохраняя ранее полученные результаты. Последовательность Фибоначчи — простейший пример применения этой техники.`,

  uz: `Fibonachchi (Dinamik dasturlash)

Fibonachchi ketma-ketligi dinamik dasturlashning klassik misolidir. Har bir son o‘zidan oldingi ikkita sonning yig‘indisiga teng: F(n) = F(n-1) + F(n-2).

Qanday ishlaydi (Bottom-Up jadval usuli):
1. Hisoblangan qiymatlarni saqlash uchun jadval yaratish
2. Boshlang‘ich holatlarni belgilash: F(0) = 0, F(1) = 1
3. Jadvalni ketma-ket to‘ldirish: F(i) = F(i-1) + F(i-2)
4. F(n) qiymatini qaytarish

Vaqt murakkabligi: O(n)
Xotira murakkabligi: O(n) — O(1) gacha optimallashtirish mumkin

Taqqoslash:
  - Sodda rekursiya: O(2^n) — eksponensial murakkablik
  - Memoizatsiya (top-down): O(n)
  - Jadval usuli (bottom-up): O(n)

Dinamik dasturlash oldin hisoblangan natijalarni saqlash orqali takroriy hisob-kitoblarning oldini oladi. Fibonachchi ketma-ketligi ushbu usulning eng sodda namunasidir.`,
}

export default descriptions
