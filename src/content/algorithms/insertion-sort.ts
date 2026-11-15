
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Insertion Sort

Insertion Sort builds the sorted array one element at a time. It picks each element and inserts it into its correct position in the already-sorted portion of the array.

How it works:
1. Start from the second element (first element is trivially sorted)
2. Pick the current element as the "key"
3. Compare the key with elements in the sorted portion
4. Shift larger elements to the right
5. Insert the key into its correct position

Time Complexity:
  Best:    O(n) — already sorted
  Average: O(n²)
  Worst:   O(n²) — reverse sorted

Space Complexity: O(1) — in-place

Properties:
  - Stable sort
  - Adaptive (efficient for nearly sorted data)
  - In-place
  - Online (can sort as data is received)

Excellent for small datasets or nearly sorted data. Often used as the base case in hybrid sorting algorithms like Timsort.`,
  ru: `Сортировка вставками (Insertion Sort)

Сортировка вставками формирует отсортированный массив по одному элементу за раз. Каждый элемент выбирается и вставляется на правильную позицию в уже отсортированной части массива.

Как работает:
1. Начинает со второго элемента (первый элемент уже считается отсортированным)
2. Выбирает текущий элемент в качестве "ключа"
3. Сравнивает ключ с элементами отсортированной части
4. Сдвигает большие элементы вправо
5. Вставляет ключ на правильную позицию

Временная сложность:
  Лучшая:     O(n) — массив уже отсортирован
  Средняя:    O(n²)
  Худшая:     O(n²) — массив отсортирован в обратном порядке

Пространственная сложность: O(1) — сортировка на месте

Свойства:
  - Стабильная сортировка
  - Адаптивная (эффективна для почти отсортированных данных)
  - Сортировка на месте
  - Онлайн-алгоритм (может сортировать данные по мере их поступления)

Отлично подходит для небольших наборов данных или почти отсортированных массивов. Часто используется как базовый алгоритм в гибридных алгоритмах сортировки, таких как Timsort.`,
  uz: `Joylashtirish orqali saralash (Insertion Sort)

Joylashtirish orqali saralash massivni elementma-element tartiblaydi. Har bir element tanlanib, massivning allaqachon tartiblangan qismidagi to‘g‘ri o‘rniga joylashtiriladi.

Ishlash tartibi:
1. Ikkinchi elementdan boshlaydi (birinchi element allaqachon tartiblangan hisoblanadi)
2. Joriy elementni "kalit" sifatida tanlaydi
3. Kalitni tartiblangan qismdagi elementlar bilan taqqoslaydi
4. Kattaroq elementlarni o‘ng tomonga suradi
5. Kalitni o‘zining to‘g‘ri o‘rniga joylashtiradi

Vaqt murakkabligi:
  Eng yaxshi: O(n) — massiv allaqachon tartiblangan
  O‘rtacha:   O(n²)
  Eng yomon:  O(n²) — massiv teskari tartiblangan

Xotira murakkabligi: O(1) — joyida saralash

Xususiyatlari:
  - Barqaror saralash
  - Moslashuvchan (deyarli tartiblangan ma’lumotlarda samarali)
  - Joyida saralash
  - Onlayn algoritm (ma’lumotlar kelib tushishi bilan saralay oladi)

Kichik hajmdagi yoki deyarli tartiblangan ma’lumotlar uchun juda qulay. Ko‘pincha Timsort kabi gibrid saralash algoritmlarida asosiy holat sifatida ishlatiladi.`,
}

export default descriptions
