
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Stack

A Stack is a linear data structure that follows the LIFO principle — Last In, First Out. Like a stack of plates: you add and remove from the top only.

Operations:
  push(item) — add to top       O(1)
  pop()      — remove from top   O(1)
  peek()     — view top          O(1)
  isEmpty()  — check if empty    O(1)

Applications:
  - Undo/redo functionality
  - Browser history (back/forward)
  - Function call stack
  - Depth-First Search (DFS)
  - Expression evaluation and parsing
  - Balanced parentheses checking

Space Complexity: O(n) for n elements`,

  ru: `Стек (Stack)

Стек — это линейная структура данных, работающая по принципу LIFO (Last In, First Out) — последним пришёл, первым вышел. Как стопка тарелок: добавлять и удалять элементы можно только сверху.

Операции:
  push(item) — добавить элемент сверху    O(1)
  pop()      — удалить верхний элемент     O(1)
  peek()     — посмотреть верхний элемент  O(1)
  isEmpty()  — проверить, пуст ли стек     O(1)

Применение:
  - Отмена и повтор действий (Undo/Redo)
  - История браузера (назад/вперёд)
  - Стек вызовов функций
  - Поиск в глубину (DFS)
  - Вычисление и разбор выражений
  - Проверка сбалансированности скобок

Сложность по памяти: O(n) для n элементов`,

  uz: `Stek (Stack)

Stek — bu LIFO (Last In, First Out), ya'ni oxirgi kirgan element birinchi chiqadigan tamoyil asosida ishlaydigan chiziqli ma'lumotlar tuzilmasi. Uni tarelkalar uyumiga o'xshatish mumkin: elementlar faqat yuqoridan qo'shiladi va olib tashlanadi.

Amallar:
  push(item) — elementni yuqoriga qo'shish   O(1)
  pop()      — yuqoridagi elementni olish    O(1)
  peek()     — yuqoridagi elementni ko'rish  O(1)
  isEmpty()  — stek bo'shligini tekshirish   O(1)

Qo'llanilishi:
  - Amalni bekor qilish va qayta tiklash (Undo/Redo)
  - Brauzer tarixi (orqaga/oldinga)
  - Funksiyalar chaqiruv steki
  - Chuqurlik bo'yicha qidiruv (DFS)
  - Ifodalarni hisoblash va tahlil qilish
  - Qavslar muvozanatini tekshirish

Xotira murakkabligi: n ta element uchun O(n)`,
}

export default descriptions
