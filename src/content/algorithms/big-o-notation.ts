
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Big O Notation

Big O Notation describes how an algorithm's running time or space requirements grow relative to the input size. It focuses on the worst-case scenario and ignores constants and lower-order terms.

Common complexities (fastest to slowest):
  O(1)       — Constant: same time regardless of input size
  O(log n)   — Logarithmic: halves the problem each step (binary search)
  O(n)       — Linear: processes each element once
  O(n log n) — Linearithmic: efficient sorting (Merge Sort, Quick Sort)
  O(n²)      — Quadratic: nested loops (Bubble Sort, brute force)
  O(2^n)     — Exponential: doubles with each new element
  O(n!)      — Factorial: all permutations

Why it matters:
  For n = 1,000: O(n) = 1,000 operations, O(n²) = 1,000,000 operations
  Choosing the right algorithm can mean seconds vs. hours of computation.

Rules of Big O:
  1. Drop constants: O(2n) → O(n)
  2. Drop lower-order terms: O(n² + n) → O(n²)
  3. Focus on the dominant term as n grows large`,

  ru: `Нотация Big O

Нотация Big O описывает, как увеличивается время выполнения алгоритма или объём используемой памяти в зависимости от размера входных данных. Она ориентируется на худший случай и не учитывает константы и члены низшего порядка.

Распространённые сложности (от самой быстрой к самой медленной):
  O(1)       — Константная: время не зависит от размера входных данных
  O(log n)   — Логарифмическая: делит задачу пополам на каждом шаге (бинарный поиск)
  O(n)       — Линейная: обрабатывает каждый элемент один раз
  O(n log n) — Линейно-логарифмическая: эффективная сортировка (Merge Sort, Quick Sort)
  O(n²)      — Квадратичная: вложенные циклы (Bubble Sort, полный перебор)
  O(2^n)     — Экспоненциальная: количество операций удваивается с каждым новым элементом
  O(n!)      — Факториальная: все возможные перестановки

Почему это важно:
  При n = 1 000: O(n) = 1 000 операций, O(n²) = 1 000 000 операций
  Выбор правильного алгоритма может сократить время вычислений с нескольких часов до нескольких секунд.

Правила Big O:
  1. Убирайте константы: O(2n) → O(n)
  2. Убирайте члены низшего порядка: O(n² + n) → O(n²)
  3. Учитывайте доминирующий член при больших значениях n`,

  uz: `Big O belgilanishi

Big O belgilanishi algoritmning bajarilish vaqti yoki xotira talabi kiruvchi ma'lumotlar hajmiga qarab qanday o'sishini ifodalaydi. U eng yomon holatga e'tibor qaratadi hamda konstantalar va quyi darajali hadlarni hisobga olmaydi.

Keng tarqalgan murakkabliklar (eng tezidan eng sekinigacha):
  O(1)       — O'zgarmas: vaqt kiruvchi ma'lumotlar hajmiga bog'liq emas
  O(log n)   — Logarifmik: har bir qadamda masalani ikkiga bo'ladi (ikkilik qidiruv)
  O(n)       — Chiziqli: har bir elementni bir martadan qayta ishlaydi
  O(n log n) — Chiziqli-logarifmik: samarali saralash (Merge Sort, Quick Sort)
  O(n²)      — Kvadratik: ichma-ich sikllar (Bubble Sort, to'liq qidiruv)
  O(2^n)     — Eksponensial: har bir yangi element bilan amallar soni ikki baravar ortadi
  O(n!)      — Faktorial: barcha mumkin bo'lgan o'rin almashtirishlar

Nima uchun bu muhim:
  n = 1 000 bo'lganda: O(n) = 1 000 ta amal, O(n²) = 1 000 000 ta amal
  To'g'ri algoritmni tanlash hisoblash vaqtini soatlardan soniyalargacha qisqartirishi mumkin.

Big O qoidalari:
  1. Konstantalarni olib tashlang: O(2n) → O(n)
  2. Quyi darajali hadlarni olib tashlang: O(n² + n) → O(n²)
  3. n katta qiymatlarga yetganda eng ustun hadga e'tibor qarating`,
}

export default descriptions
