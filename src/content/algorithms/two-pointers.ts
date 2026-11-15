
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Two Pointers

Two Pointers is a technique where two indices move through a data structure (usually an array) to solve problems efficiently.

Common patterns:
  - Left & Right: start from both ends, move inward
  - Slow & Fast: both start from beginning at different speeds

Time Complexity: O(n) — each pointer moves at most n times
Space Complexity: O(1) — only two variables

Classic problems:
  - Two Sum (sorted array)
  - Container with most water
  - Remove duplicates in-place
  - Palindrome checking
  - Linked list cycle detection (slow/fast)`,

  ru: `Два указателя (Two Pointers)

Два указателя — это техника, при которой два индекса перемещаются по структуре данных (обычно по массиву), чтобы эффективно решать задачи.

Распространённые шаблоны:
  - Левый и правый: начинают с обоих концов и движутся к центру
  - Медленный и быстрый: оба начинают с начала, но движутся с разной скоростью

Временная сложность: O(n) — каждый указатель перемещается не более n раз
Пространственная сложность: O(1) — используются только две переменные

Классические задачи:
  - Two Sum (отсортированный массив)
  - Контейнер с максимальным количеством воды
  - Удаление дубликатов на месте
  - Проверка палиндрома
  - Обнаружение цикла в связанном списке (медленный/быстрый указатели)`,

  uz: `Ikki ko'rsatkich (Two Pointers)

Ikki ko'rsatkich — bu masalalarni samarali yechish uchun ma'lumotlar tuzilmasi (odatda massiv) bo'ylab ikkita indeks harakatlanadigan usul.

Keng tarqalgan usullar:
  - Chap va o'ng: ikkala uchidan boshlanib, markaz tomon harakatlanadi
  - Sekin va tez: ikkalasi ham boshidan boshlanadi, lekin turli tezlikda harakatlanadi

Vaqt murakkabligi: O(n) — har bir ko'rsatkich ko'pi bilan n marta harakatlanadi
Xotira murakkabligi: O(1) — faqat ikkita o'zgaruvchi ishlatiladi

Klassik masalalar:
  - Two Sum (saralangan massiv)
  - Eng ko'p suv sig'diradigan idish
  - Takroriy elementlarni joyida o'chirish
  - Palindromni tekshirish
  - Bog'langan ro'yxatda siklni aniqlash (sekin/tez ko'rsatkichlar)`,
}

export default descriptions
