
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Memoization

Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.

Without memoization (Fibonacci):
  fib(5) calls fib(4) + fib(3)
  fib(4) calls fib(3) + fib(2) — fib(3) computed AGAIN!
  Exponential: O(2^n) time

With memoization:
  Each value is computed ONCE and cached
  Subsequent calls with the same input return instantly
  Linear: O(n) time, O(n) space

Key insight: trade space for time
  - Store results in a dictionary/array
  - Before computing, check if result exists
  - Dramatic speedup for overlapping subproblems`,
  ru: `Мемоизация

Мемоизация — это метод оптимизации, который сохраняет результаты ресурсоёмких вызовов функций и возвращает сохранённый результат, когда встречаются те же входные данные.

Без мемоизации (Фибоначчи):
  fib(5) вызывает fib(4) + fib(3)
  fib(4) вызывает fib(3) + fib(2) — fib(3) вычисляется ПОВТОРНО!
  Экспоненциальная временная сложность: O(2^n)

С мемоизацией:
  Каждое значение вычисляется ТОЛЬКО ОДИН РАЗ и сохраняется
  Последующие вызовы с теми же входными данными возвращают результат мгновенно
  Линейная сложность: O(n) по времени, O(n) по памяти

Ключевая идея: обмен памяти на скорость
  - Сохранять результаты в словаре или массиве
  - Перед вычислением проверять, существует ли уже результат
  - Значительное ускорение при наличии перекрывающихся подзадач`,
  uz: `Memoizatsiya

Memoizatsiya — bu qimmat hisoblashlarni talab qiladigan funksiya chaqiruvlari natijalarini saqlab qo‘yish va ayni kirish ma’lumotlari qayta uchraganda keshlangan natijani qaytarish orqali ishlaydigan optimallashtirish usuli.

Memoizatsiyasiz (Fibonachchi):
  fib(5) fib(4) + fib(3) ni chaqiradi
  fib(4) fib(3) + fib(2) ni chaqiradi — fib(3) yana QAYTA hisoblanadi!
  Eksponensial vaqt murakkabligi: O(2^n)

Memoizatsiya bilan:
  Har bir qiymat faqat BIR MARTA hisoblanadi va saqlanadi
  Bir xil kirish ma’lumotlari bilan keyingi chaqiruvlar natijani darhol qaytaradi
  Chiziqli murakkablik: O(n) vaqt, O(n) xotira

Asosiy g‘oya: vaqtni tejash uchun xotiradan foydalanish
  - Natijalarni lug‘at yoki massivda saqlash
  - Hisoblashdan oldin natija mavjudligini tekshirish
  - Bir-birini takrorlaydigan qism masalalarda hisoblashni keskin tezlashtirish`,
}

export default descriptions
