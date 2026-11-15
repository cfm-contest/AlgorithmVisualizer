
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Linear Search

Linear Search (or Sequential Search) is the simplest searching algorithm. It checks every element in the list sequentially until the target is found or the list is exhausted.

How it works:
1. Start from the first element
2. Compare each element with the target
3. If a match is found, return the index
4. If the end is reached without a match, return -1

Time Complexity:
  Best:    O(1) — target is the first element
  Average: O(n)
  Worst:   O(n) — target is last or not present

Space Complexity: O(1)

Properties:
  - Works on unsorted arrays
  - No preprocessing needed
  - Simple to implement

Linear Search is useful for small datasets or unsorted data where more efficient algorithms cannot be applied.`,
  ru: `Линейный поиск (Linear Search)

Линейный поиск (или последовательный поиск) — самый простой алгоритм поиска. Он последовательно проверяет каждый элемент списка, пока не найдёт искомый элемент или пока список не закончится.

Как работает:
1. Начинает с первого элемента
2. Сравнивает каждый элемент с искомым значением
3. Если совпадение найдено, возвращает индекс
4. Если список закончился и совпадение не найдено, возвращает -1

Временная сложность:
  Лучшая:     O(1) — искомый элемент находится первым
  Средняя:    O(n)
  Худшая:     O(n) — искомый элемент последний или отсутствует

Пространственная сложность: O(1)

Свойства:
  - Работает с неотсортированными массивами
  - Не требует предварительной обработки данных
  - Прост в реализации

Линейный поиск полезен для небольших наборов данных или неотсортированных данных, когда применение более эффективных алгоритмов невозможно.`,
  uz: `Chiziqli qidiruv (Linear Search)

Chiziqli qidiruv (yoki ketma-ket qidiruv) eng sodda qidiruv algoritmidir. U kerakli element topilguncha yoki ro‘yxat tugaguncha har bir elementni ketma-ket tekshiradi.

Ishlash tartibi:
1. Birinchi elementdan boshlaydi
2. Har bir elementni qidirilayotgan qiymat bilan taqqoslaydi
3. Agar moslik topilsa, element indeksini qaytaradi
4. Agar ro‘yxat oxirigacha yetib borib, moslik topilmasa, -1 ni qaytaradi

Vaqt murakkabligi:
  Eng yaxshi: O(1) — qidirilayotgan element birinchi o‘rinda
  O‘rtacha:   O(n)
  Eng yomon:  O(n) — element oxirida yoki umuman mavjud emas

Xotira murakkabligi: O(1)

Xususiyatlari:
  - Tartiblanmagan massivlarda ham ishlaydi
  - Oldindan qayta ishlashni talab qilmaydi
  - Amalga oshirish oson

Chiziqli qidiruv kichik hajmdagi yoki tartiblanmagan ma’lumotlar uchun, samaraliroq algoritmlardan foydalanish imkoni bo‘lmaganda foydalidir.`,
}

export default descriptions
