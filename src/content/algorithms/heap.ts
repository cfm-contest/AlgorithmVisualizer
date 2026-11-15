
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Heap (Min Heap)

A Heap is a complete binary tree where every parent is smaller (min-heap) or larger (max-heap) than its children. It's stored as an array.

Array-to-tree mapping (0-indexed):
  Parent of i:      Math.floor((i - 1) / 2)
  Left child of i:  2 * i + 1
  Right child of i: 2 * i + 2

Operations:
  insert:     add at end, bubble up   — O(log n)
  extractMin: remove root, bubble down — O(log n)
  peek:       return root             — O(1)

Applications:
  - Priority queues
  - Heap Sort
  - Dijkstra's algorithm
  - Finding k-th smallest/largest`,

  ru: `Куча (минимальная куча)

Куча (Heap) — это полное бинарное дерево, в котором каждый родительский узел меньше (в min-heap) или больше (в max-heap) своих дочерних узлов. Куча хранится в виде массива.

Соответствие массива и дерева (индексация с 0):
  Родитель узла i:       Math.floor((i - 1) / 2)
  Левый потомок узла i:  2 * i + 1
  Правый потомок узла i: 2 * i + 2

Операции:
  insert:     добавить в конец, поднять вверх (bubble up) — O(log n)
  extractMin: удалить корень, опустить вниз (bubble down) — O(log n)
  peek:       вернуть корень                             — O(1)

Применение:
  - Очереди с приоритетом
  - Пирамидальная сортировка (Heap Sort)
  - Алгоритм Дейкстры
  - Поиск k-го наименьшего или наибольшего элемента`,

  uz: `Uyum (Min Heap)

Uyum (Heap) — bu to‘liq ikkilik daraxt bo‘lib, unda har bir ota tugun o‘zining farzand tugunlaridan kichikroq (min-heap) yoki kattaroq (max-heap) bo‘ladi. U massiv ko‘rinishida saqlanadi.

Massiv va daraxt orasidagi moslik (indekslash 0 dan boshlanadi):
  i tugunning ota tuguni:        Math.floor((i - 1) / 2)
  i tugunning chap farzandi:     2 * i + 1
  i tugunning o‘ng farzandi:     2 * i + 2

Amallar:
  insert:     oxiriga qo‘shish, yuqoriga ko‘tarish (bubble up) — O(log n)
  extractMin: ildizni o‘chirish, pastga tushirish (bubble down) — O(log n)
  peek:       ildiz qiymatini qaytarish                       — O(1)

Qo‘llanilishi:
  - Ustuvor navbatlar (Priority Queues)
  - Uyumli saralash (Heap Sort)
  - Dijkstra algoritmi
  - k-chi eng kichik yoki eng katta elementni topish`,
}

export default descriptions
