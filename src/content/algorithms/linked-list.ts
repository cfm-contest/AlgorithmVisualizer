
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Linked List

A Linked List is a linear data structure where each element (node) contains a value and a pointer to the next node.

Unlike arrays, elements are not in contiguous memory — each node can be anywhere, connected by pointers.

Operations:
  append:  add node at the end       — O(1) with tail pointer
  prepend: add node at the beginning — O(1)
  search:  traverse to find a value  — O(n)
  delete:  remove a node by value    — O(n)
  access:  traverse from head        — O(n)

Advantages:
  - O(1) insertion/deletion at known positions
  - Dynamic size, no wasted memory

Disadvantages:
  - O(n) access by index (no random access)
  - Extra memory for pointers
  - Not cache-friendly`,
  ru: `Связный список (Linked List)

Связный список — это линейная структура данных, в которой каждый элемент (узел) содержит значение и указатель на следующий узел.

В отличие от массивов, элементы не расположены в непрерывной области памяти — каждый узел может находиться где угодно, а связь между узлами обеспечивается указателями.

Операции:
  append:  добавить узел в конец       — O(1) при наличии указателя tail
  prepend: добавить узел в начало     — O(1)
  search:  пройти список в поиске     — O(n)
  delete:  удалить узел по значению   — O(n)
  access:  пройти список от головы    — O(n)

Преимущества:
  - Вставка и удаление за O(1) в известных позициях
  - Динамический размер, память не расходуется впустую

Недостатки:
  - Доступ по индексу за O(n) (нет произвольного доступа)
  - Дополнительная память для указателей
  - Неэффективное использование кэш-памяти`,
  uz: `Bog‘langan ro‘yxat (Linked List)

Bog‘langan ro‘yxat — bu har bir elementi (tuguni) qiymat va keyingi tugunga ko‘rsatkichni saqlaydigan chiziqli ma’lumotlar tuzilmasi.

Massivlardan farqli ravishda, elementlar xotirada ketma-ket joylashmaydi — har bir tugun xotiraning istalgan joyida bo‘lishi mumkin va ular ko‘rsatkichlar orqali bog‘lanadi.

Amallar:
  append:  oxiriga tugun qo‘shish       — tail ko‘rsatkichi bilan O(1)
  prepend: boshiga tugun qo‘shish       — O(1)
  search:  qiymatni topish uchun ko‘rib chiqish — O(n)
  delete:  qiymat bo‘yicha tugunni o‘chirish   — O(n)
  access:  bosh tugundan boshlab murojaat qilish — O(n)

Afzalliklari:
  - Ma’lum pozitsiyalarda O(1) vaqt ichida qo‘shish va o‘chirish
  - Dinamik o‘lcham, xotira ortiqcha sarflanmaydi

Kamchiliklari:
  - Indeks bo‘yicha murojaat qilish O(n) vaqt oladi (ixtiyoriy murojaat mavjud emas)
  - Ko‘rsatkichlar uchun qo‘shimcha xotira talab qilinadi
  - Kesh xotirasidan samarali foydalanmaydi`,
}

export default descriptions
