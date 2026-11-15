
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Prefix Sum Array

A Prefix Sum Array preprocesses a static array so range-sum queries become O(1). Each position stores the sum of all elements up to that index.

How it works:
1. Build prefix[0] = arr[0]
2. For each next index, add the current value to the previous prefix
3. Answer sum(l, r) with prefix[r] - prefix[l - 1]
4. If l = 0, the answer is just prefix[r]

Time Complexity: O(n) preprocessing, O(1) per query
Space Complexity: O(n)

Best when:
  - The array is static
  - You need many range-sum queries
  - You want to trade one preprocessing pass for instant lookups

Limitation:
  - Point updates are not handled efficiently here; for dynamic updates use other structures such as Fenwick Tree or Segment Tree.`,
  ru: `Массив префиксных сумм

Массив префиксных сумм предварительно обрабатывает статический массив, чтобы запросы суммы на отрезке выполнялись за O(1). В каждой позиции хранится сумма всех элементов до соответствующего индекса включительно.

Как это работает:
1. Инициализировать prefix[0] = arr[0]
2. Для каждого следующего индекса прибавлять текущее значение к предыдущей префиксной сумме
3. Вычислять sum(l, r) по формуле prefix[r] - prefix[l - 1]
4. Если l = 0, результатом будет просто prefix[r]

Временная сложность: O(n) на предварительную обработку, O(1) на каждый запрос
Пространственная сложность: O(n)

Лучше всего подходит, когда:
  - Массив является статическим
  - Требуется выполнять множество запросов суммы на отрезке
  - Вы хотите потратить время на один проход предварительной обработки ради мгновенных ответов на запросы

Ограничение:
  - Точечные обновления здесь не обрабатываются эффективно; для динамических обновлений используйте другие структуры данных, например дерево Фенвика (Fenwick Tree) или дерево отрезков (Segment Tree).`,
  uz: `Prefiks yig‘indilar massivi

Prefiks yig‘indilar massivi statik massivni oldindan qayta ishlab, oraliq yig‘indisini so‘rash amallarini O(1) vaqt ichida bajarish imkonini beradi. Har bir pozitsiyada shu indeksgacha bo‘lgan barcha elementlarning yig‘indisi saqlanadi.

Qanday ishlaydi:
1. prefix[0] = arr[0] qiymatini belgilash
2. Har bir keyingi indeks uchun joriy qiymatni oldingi prefiks yig‘indisiga qo‘shish
3. sum(l, r) so‘roviga prefix[r] - prefix[l - 1] orqali javob berish
4. Agar l = 0 bo‘lsa, natija shunchaki prefix[r] ga teng bo‘ladi

Vaqt murakkabligi: oldindan qayta ishlash uchun O(n), har bir so‘rov uchun O(1)
Xotira murakkabligi: O(n)

Quyidagi holatlarda ayniqsa foydali:
  - Massiv statik bo‘lsa
  - Oraliq yig‘indisi bo‘yicha ko‘plab so‘rovlar bajarilsa
  - Bir marta oldindan qayta ishlash evaziga so‘rovlarga darhol javob olish istalsa

Cheklov:
  - Bu usulda alohida element qiymatini yangilash samarali bajarilmaydi; dinamik yangilanishlar uchun Fenwick Tree yoki Segment Tree kabi boshqa ma’lumotlar tuzilmalaridan foydalaning.`,
}

export default descriptions
