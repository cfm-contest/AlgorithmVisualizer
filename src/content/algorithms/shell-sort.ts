
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Shell Sort

Shell Sort is a generalization of Insertion Sort that allows the exchange of items that are far apart. It uses a decreasing gap sequence to progressively sort the array.

How it works:
1. Start with a large gap (typically n/2)
2. Perform a gapped insertion sort for the current gap
3. Reduce the gap (typically by half)
4. Repeat until gap is 1 (final pass is a standard insertion sort)

Time Complexity:
  Best:    O(n log n)
  Average: O(n^(3/2)) — depends on gap sequence
  Worst:   O(n²) — with n/2 gap sequence

Space Complexity: O(1) — in-place

Properties:
  - Not stable
  - In-place
  - Adaptive

Shell Sort is faster than Insertion Sort for larger arrays because it moves elements closer to their final position earlier. Performance depends heavily on the gap sequence chosen.`,
  ru: `Сортировка Шелла (Shell Sort)

Shell Sort — это обобщение сортировки вставками (Insertion Sort), которое позволяет обменивать элементы, находящиеся далеко друг от друга. Алгоритм использует последовательно уменьшающуюся последовательность интервалов для постепенной сортировки массива.

Как работает алгоритм:
1. Начать с большого интервала (обычно n/2)
2. Выполнить сортировку вставками с текущим интервалом
3. Уменьшить интервал (обычно вдвое)
4. Повторять, пока интервал не станет равен 1 (последний проход выполняется обычной сортировкой вставками)

Временная сложность:
  Лучший случай:  O(n log n)
  Средний случай: O(n^(3/2)) — зависит от последовательности интервалов
  Худший случай:  O(n²) — при последовательности интервалов n/2

Пространственная сложность: O(1) — сортировка на месте

Свойства:
  - Нестабильная сортировка
  - Сортировка на месте
  - Адаптивная

Shell Sort работает быстрее сортировки вставками на больших массивах, поскольку заранее перемещает элементы ближе к их окончательным позициям. Производительность во многом зависит от выбранной последовательности интервалов.`,
  uz: `Shell saralash (Shell Sort)

Shell Sort — bu Insertion Sort algoritmining takomillashtirilgan ko‘rinishi bo‘lib, bir-biridan uzoqda joylashgan elementlarni ham almashtirish imkonini beradi. Massivni bosqichma-bosqich saralash uchun kamayib boruvchi oraliqlar ketma-ketligidan foydalanadi.

Algoritm qanday ishlaydi:
1. Katta oraliqdan boshlash (odatda n/2)
2. Joriy oraliq bo‘yicha qo‘shish orqali saralashni bajarish
3. Oraliqni kamaytirish (odatda ikki baravar)
4. Oraliq 1 ga teng bo‘lguncha takrorlash (oxirgi bosqich oddiy Insertion Sort hisoblanadi)

Vaqt murakkabligi:
  Eng yaxshi holat: O(n log n)
  O‘rtacha holat:   O(n^(3/2)) — oraliqlar ketma-ketligiga bog‘liq
  Eng yomon holat:  O(n²) — n/2 oraliqlar ketma-ketligida

Xotira murakkabligi: O(1) — joyida saralash

Xususiyatlari:
  - Barqaror emas
  - Joyida saralash
  - Adaptiv

Shell Sort katta massivlarda Insertion Sort'dan tezroq ishlaydi, chunki elementlarni yakuniy joylariga oldindan yaqinlashtiradi. Uning samaradorligi ko‘p jihatdan tanlangan oraliqlar ketma-ketligiga bog‘liq.`,
}

export default descriptions
