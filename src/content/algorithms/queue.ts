
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Queue

A Queue is a linear data structure that follows the FIFO principle — First In, First Out. Like a line at a store: the first person in line is served first.

Operations:
  enqueue(item) — add to back       O(1)
  dequeue()     — remove from front  O(1)
  front()       — view front         O(1)
  isEmpty()     — check if empty     O(1)

Applications:
  - Task scheduling (CPU, printer)
  - Breadth-First Search (BFS)
  - Message buffers and event queues
  - Rate limiting
  - Order processing systems

Space Complexity: O(n) for n elements`,
  ru: `Очередь (Queue)

Очередь — это линейная структура данных, работающая по принципу FIFO (First In, First Out — «первым пришёл, первым вышел»). Как очередь в магазине: первым обслуживают того, кто пришёл раньше остальных.

Операции:
  enqueue(item) — добавить в конец       O(1)
  dequeue()     — удалить из начала      O(1)
  front()       — посмотреть первый элемент O(1)
  isEmpty()     — проверить, пуста ли очередь O(1)

Применение:
  - Планирование задач (процессор, принтер)
  - Поиск в ширину (BFS)
  - Буферы сообщений и очереди событий
  - Ограничение частоты запросов (rate limiting)
  - Системы обработки заказов

Пространственная сложность: O(n) для n элементов`,
  uz: `Navbat (Queue)

Navbat — FIFO (First In, First Out — birinchi kirgan, birinchi chiqadi) tamoyili asosida ishlaydigan chiziqli ma’lumotlar tuzilmasi. U do‘kondagi navbatga o‘xshaydi: birinchi kelgan odam birinchi xizmat oladi.

Amallar:
  enqueue(item) — navbat oxiriga qo‘shish       O(1)
  dequeue()     — navbat boshidan olib tashlash O(1)
  front()       — birinchi elementni ko‘rish    O(1)
  isEmpty()     — navbat bo‘shligini tekshirish O(1)

Qo‘llanilishi:
  - Vazifalarni rejalashtirish (CPU, printer)
  - Kenglik bo‘yicha qidiruv (BFS)
  - Xabar buferlari va hodisalar navbatlari
  - So‘rovlar chastotasini cheklash (rate limiting)
  - Buyurtmalarni qayta ishlash tizimlari

Xotira murakkabligi: n ta element uchun O(n)`,
}

export default descriptions
