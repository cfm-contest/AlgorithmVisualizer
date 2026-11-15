
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Selection Sort

Selection Sort divides the array into a sorted and unsorted region. It repeatedly selects the smallest element from the unsorted region and moves it to the end of the sorted region.

How it works:
1. Find the minimum element in the unsorted portion
2. Swap it with the first unsorted element
3. Move the boundary between sorted and unsorted one element to the right
4. Repeat until the entire array is sorted

Time Complexity:
  Best:    O(n²)
  Average: O(n²)
  Worst:   O(n²)

Space Complexity: O(1) — in-place

Properties:
  - Not stable (can change relative order of equal elements)
  - Not adaptive
  - In-place
  - Minimizes the number of swaps: O(n)

Useful when memory writes are expensive, as it performs at most O(n) swaps.`,
  ru: `Сортировка выбором (Selection Sort)

Selection Sort разделяет массив на отсортированную и неотсортированную области. Алгоритм многократно выбирает наименьший элемент из неотсортированной области и перемещает его в конец отсортированной области.

Как работает алгоритм:
1. Найти минимальный элемент в неотсортированной части
2. Поменять его местами с первым неотсортированным элементом
3. Сдвинуть границу между отсортированной и неотсортированной областями на одну позицию вправо
4. Повторять, пока весь массив не будет отсортирован

Временная сложность:
  Лучший случай:  O(n²)
  Средний случай: O(n²)
  Худший случай:  O(n²)

Пространственная сложность: O(1) — сортировка на месте

Свойства:
  - Нестабильный алгоритм (может изменять относительный порядок равных элементов)
  - Неадаптивный
  - Сортировка на месте
  - Минимизирует количество обменов: O(n)

Полезен в случаях, когда операции записи в память обходятся дорого, поскольку выполняет не более O(n) обменов.`,
  uz: `Tanlash orqali saralash (Selection Sort)

Selection Sort massivni saralangan va saralanmagan qismlarga ajratadi. U saralanmagan qismdan eng kichik elementni qayta-qayta tanlab, uni saralangan qismning oxiriga joylashtiradi.

Algoritm qanday ishlaydi:
1. Saralanmagan qismdagi eng kichik elementni topish
2. Uni birinchi saralanmagan element bilan almashtirish
3. Saralangan va saralanmagan qismlar orasidagi chegarani bir pozitsiya o‘ngga surish
4. Butun massiv saralanguncha jarayonni takrorlash

Vaqt murakkabligi:
  Eng yaxshi holat: O(n²)
  O‘rtacha holat:   O(n²)
  Eng yomon holat:  O(n²)

Xotira murakkabligi: O(1) — joyida saralash

Xususiyatlari:
  - Barqaror emas (teng elementlarning o‘zaro tartibini o‘zgartirishi mumkin)
  - Adaptiv emas
  - Joyida saralash
  - Almashtirishlar sonini kamaytiradi: O(n)

Xotiraga yozish amallari qimmat bo‘lgan holatlarda foydali, chunki u ko‘pi bilan O(n) ta almashtirishni bajaradi.`,
}

export default descriptions
