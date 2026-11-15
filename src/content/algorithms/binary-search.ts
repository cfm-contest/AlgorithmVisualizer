
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Binary Search

Binary Search is an efficient algorithm for finding a target value in a sorted array. It works by repeatedly dividing the search interval in half.

Prerequisite: The array must be sorted.

How it works:
1. Compare the target with the middle element
2. If equal, we found the target
3. If target is smaller, search the left half
4. If target is larger, search the right half
5. Repeat until found or search space is empty

Time Complexity:
  Best:    O(1) — target is at the middle
  Average: O(log n)
  Worst:   O(log n)

Space Complexity: O(1) — iterative version

Binary Search is fundamental in computer science and is used extensively in databases, file systems, and as a building block for more complex algorithms.`,

  ru: `Бинарный поиск

Бинарный поиск — это эффективный алгоритм для нахождения заданного значения в отсортированном массиве. Он работает путём многократного деления интервала поиска пополам.

Предварительное условие: Массив должен быть отсортирован.

Как это работает:
1. Сравните искомое значение со средним элементом
2. Если значения равны, цель найдена
3. Если искомое значение меньше, ищите в левой половине
4. Если искомое значение больше, ищите в правой половине
5. Повторяйте, пока значение не будет найдено или область поиска не опустеет

Временная сложность:
  Лучшая:  O(1) — искомый элемент находится посередине
  Средняя: O(log n)
  Худшая:  O(log n)

Пространственная сложность: O(1) — для итеративной версии

Бинарный поиск — фундаментальный алгоритм в информатике. Он широко используется в базах данных, файловых системах и как основа для более сложных алгоритмов.`,

  uz: `Ikkilik qidiruv

Ikkilik qidiruv — tartiblangan massivdan kerakli qiymatni topish uchun ishlatiladigan samarali algoritm. U qidiruv oralig'ini har bir qadamda qayta-qayta ikkiga bo'lish orqali ishlaydi.

Old shart: Massiv tartiblangan bo'lishi kerak.

Qanday ishlaydi:
1. Qidirilayotgan qiymatni o'rtadagi element bilan solishtiring
2. Agar ular teng bo'lsa, kerakli qiymat topildi
3. Agar qidirilayotgan qiymat kichik bo'lsa, chap yarmidan qidiring
4. Agar qidirilayotgan qiymat katta bo'lsa, o'ng yarmidan qidiring
5. Qiymat topilguncha yoki qidiruv oralig'i tugaguncha takrorlang

Vaqt murakkabligi:
  Eng yaxshi holat: O(1) — kerakli element o'rtada joylashgan
  O'rtacha holat:   O(log n)
  Eng yomon holat:  O(log n)

Xotira murakkabligi: O(1) — iterativ versiya uchun

Ikkilik qidiruv kompyuter fanlaridagi asosiy algoritmlardan biridir. U ma'lumotlar bazalarida, fayl tizimlarida va murakkabroq algoritmlar uchun asos sifatida keng qo'llaniladi.`
}

export default descriptions
