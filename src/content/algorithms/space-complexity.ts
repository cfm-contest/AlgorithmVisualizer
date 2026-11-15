
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Space Complexity

Space Complexity measures the amount of memory an algorithm uses relative to the input size. Like time complexity, we use Big O notation.

Common space complexities:
  O(1)     — Constant: fixed number of variables
  O(log n) — Logarithmic: recursive call stack depth
  O(n)     — Linear: one copy of the input
  O(n²)    — Quadratic: 2D matrix of input size

Important distinction:
  - Auxiliary space: extra memory beyond the input
  - Total space: input + auxiliary

Examples:
  O(1): in-place sorting (Bubble Sort), variable swaps
  O(log n): recursive binary search (call stack)
  O(n): Merge Sort (temporary arrays), hash tables
  O(n²): DP tables, adjacency matrices`,

  ru: `Пространственная сложность

Пространственная сложность измеряет объём памяти, используемый алгоритмом относительно размера входных данных. Как и для временной сложности, используется нотация Big O.

Распространённые виды пространственной сложности:
  O(1)     — Константная: фиксированное количество переменных
  O(log n) — Логарифмическая: глубина стека рекурсивных вызовов
  O(n)     — Линейная: одна копия входных данных
  O(n²)    — Квадратичная: двумерная матрица размером с входные данные

Важное различие:
  - Вспомогательная память: дополнительная память помимо входных данных
  - Общая память: входные данные + вспомогательная память

Примеры:
  O(1): сортировка на месте (Bubble Sort), обмен значениями переменных
  O(log n): рекурсивный бинарный поиск (стек вызовов)
  O(n): Merge Sort (временные массивы), хеш-таблицы
  O(n²): таблицы динамического программирования, матрицы смежности`,

  uz: `Xotira murakkabligi

Xotira murakkabligi algoritm foydalanadigan xotira hajmini kiruvchi ma’lumotlar o‘lchamiga nisbatan o‘lchaydi. Vaqt murakkabligida bo‘lgani kabi, bunda ham Big O belgilash tizimidan foydalaniladi.

Xotira murakkabligining keng tarqalgan turlari:
  O(1)     — O‘zgarmas: o‘zgaruvchilarning belgilangan soni
  O(log n) — Logarifmik: rekursiv chaqiruvlar stekining chuqurligi
  O(n)     — Chiziqli: kiruvchi ma’lumotlarning bitta nusxasi
  O(n²)    — Kvadratik: kiruvchi ma’lumotlar o‘lchamidagi 2D matritsa

Muhim farq:
  - Qo‘shimcha xotira: kiruvchi ma’lumotlardan tashqari ishlatiladigan xotira
  - Umumiy xotira: kiruvchi ma’lumotlar + qo‘shimcha xotira

Misollar:
  O(1): joyida saralash (Bubble Sort), o‘zgaruvchilar qiymatlarini almashtirish
  O(log n): rekursiv ikkilik qidiruv (chaqiruvlar steki)
  O(n): Merge Sort (vaqtinchalik massivlar), xesh-jadvallar
  O(n²): dinamik dasturlash jadvallari, qo‘shnichilik matritsalari`,
}

export default descriptions
