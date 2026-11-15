
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Heap Sort

Heap Sort uses a binary heap data structure to sort elements. It first builds a max-heap from the array, then repeatedly extracts the maximum element.

How it works:
1. Build a max-heap from the input array
2. The largest element is now at the root (index 0)
3. Swap it with the last element, reduce heap size
4. Heapify the root to restore the max-heap property
5. Repeat until the heap is empty

Time Complexity:
  Best:    O(n log n)
  Average: O(n log n)
  Worst:   O(n log n)

Space Complexity: O(1) — in-place

Properties:
  - Not stable
  - In-place
  - Guaranteed O(n log n) performance

Heap Sort combines the best of Merge Sort (guaranteed O(n log n)) and Quick Sort (in-place). Useful when worst-case performance matters.`,

  ru: `Пирамидальная сортировка (Heap Sort)

Пирамидальная сортировка использует структуру данных «двоичная куча» для упорядочивания элементов. Сначала из массива строится max-heap (максимальная куча), затем из неё последовательно извлекается максимальный элемент.

Как работает алгоритм:
1. Построить max-heap из входного массива
2. Самый большой элемент оказывается в корне (индекс 0)
3. Поменять его местами с последним элементом и уменьшить размер кучи
4. Выполнить heapify для корня, чтобы восстановить свойство max-heap
5. Повторять, пока куча не опустеет

Временная сложность:
  Лучшая:  O(n log n)
  Средняя: O(n log n)
  Худшая:  O(n log n)

Пространственная сложность: O(1) — сортировка на месте

Свойства:
  - Не является стабильной
  - Выполняется на месте
  - Гарантированная производительность O(n log n)

Пирамидальная сортировка сочетает преимущества сортировки слиянием (гарантированная сложность O(n log n)) и быстрой сортировки (выполнение на месте). Полезна, когда важна производительность в худшем случае.`,

  uz: `Uyumli saralash (Heap Sort)

Uyumli saralash elementlarni tartiblash uchun ikkilik uyum (binary heap) ma’lumotlar tuzilmasidan foydalanadi. Avval massiv asosida max-heap (maksimal uyum) quriladi, so‘ng eng katta element ketma-ket ajratib olinadi.

Qanday ishlaydi:
1. Kiruvchi massivdan max-heap qurish
2. Eng katta element ildizda (0-indeksda) joylashadi
3. Uni oxirgi element bilan almashtirish va uyum hajmini kamaytirish
4. Max-heap xususiyatini tiklash uchun ildizga heapify amalini qo‘llash
5. Uyum bo‘shaguncha takrorlash

Vaqt murakkabligi:
  Eng yaxshi:  O(n log n)
  O‘rtacha:     O(n log n)
  Eng yomon:    O(n log n)

Xotira murakkabligi: O(1) — qo‘shimcha massiv ishlatmasdan, joyida saralash

Xususiyatlari:
  - Barqaror emas
  - Joyida saralashni amalga oshiradi
  - O(n log n) ishlash samaradorligi kafolatlangan

Uyumli saralash birlashtirib saralashning (O(n log n) kafolatlangan murakkablik) va tezkor saralashning (joyida saralash) eng yaxshi jihatlarini birlashtiradi. Eng yomon holatdagi ishlash samaradorligi muhim bo‘lganda foydalidir.`,
}

export default descriptions
