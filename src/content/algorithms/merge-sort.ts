
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Merge Sort

Merge Sort is a stable, divide-and-conquer sorting algorithm. It divides the array into halves, recursively sorts each half, then merges the sorted halves.

How it works:
1. Divide the array into two halves
2. Recursively sort each half
3. Merge the two sorted halves into a single sorted array
4. The merge step compares elements from both halves and places them in order

Time Complexity:
  Best:    O(n log n)
  Average: O(n log n)
  Worst:   O(n log n)

Space Complexity: O(n) — requires temporary array

Properties:
  - Stable sort
  - Not in-place (requires O(n) extra space)
  - Predictable performance (always O(n log n))
  - Parallelizable

Merge Sort guarantees O(n log n) performance regardless of input. Ideal when stability is required or for sorting linked lists.`,
  ru: `Сортировка слиянием (Merge Sort)

Merge Sort — это устойчивый алгоритм сортировки, основанный на принципе «разделяй и властвуй». Он делит массив на две половины, рекурсивно сортирует каждую из них, а затем объединяет отсортированные половины.

Как это работает:
1. Разделить массив на две половины
2. Рекурсивно отсортировать каждую половину
3. Объединить две отсортированные половины в один отсортированный массив
4. На этапе слияния сравнивать элементы обеих половин и размещать их в правильном порядке

Временная сложность:
  Лучшая:   O(n log n)
  Средняя:  O(n log n)
  Худшая:   O(n log n)

Пространственная сложность: O(n) — требуется временный массив

Свойства:
  - Устойчивая сортировка
  - Не является сортировкой на месте (требуется O(n) дополнительной памяти)
  - Предсказуемая производительность (всегда O(n log n))
  - Подходит для параллельного выполнения

Merge Sort гарантирует производительность O(n log n) независимо от входных данных. Этот алгоритм особенно полезен, когда важна устойчивость сортировки или требуется сортировать связные списки.`,
  uz: `Birlashtirish orqali saralash (Merge Sort)

Merge Sort — «bo‘lib tashla va hukmronlik qil» tamoyiliga asoslangan barqaror saralash algoritmi. U massivni ikki qismga ajratadi, har bir qismini rekursiv ravishda saralaydi, so‘ng saralangan qismlarni birlashtiradi.

Qanday ishlaydi:
1. Massivni ikkita teng yoki deyarli teng qismga ajratish
2. Har bir qismni rekursiv ravishda saralash
3. Ikkita saralangan qismni bitta saralangan massivga birlashtirish
4. Birlashtirish bosqichida ikkala qism elementlarini taqqoslab, ularni to‘g‘ri tartibda joylashtirish

Vaqt murakkabligi:
  Eng yaxshi: O(n log n)
  O‘rtacha:   O(n log n)
  Eng yomon:  O(n log n)

Xotira murakkabligi: O(n) — vaqtinchalik massiv talab qilinadi

Xususiyatlari:
  - Barqaror saralash algoritmi
  - Joyida saralash emas (qo‘shimcha O(n) xotira talab qiladi)
  - Natijadorligi oldindan ma’lum (har doim O(n log n))
  - Parallel bajarish mumkin

Merge Sort kirish ma’lumotlari qanday bo‘lishidan qat’i nazar, O(n log n) vaqt murakkabligini kafolatlaydi. Saralash barqarorligi muhim bo‘lganda yoki bog‘langan ro‘yxatlarni saralashda ayniqsa foydalidir.`,
}

export default descriptions
