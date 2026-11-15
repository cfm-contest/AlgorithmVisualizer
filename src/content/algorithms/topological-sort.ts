
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Topological Sort (Kahn's Algorithm)

Topological Sort produces a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u → v, vertex u comes before v in the ordering.

How it works (Kahn's Algorithm - BFS-based):
1. Compute the in-degree of each vertex
2. Add all vertices with in-degree 0 to a queue
3. While the queue is not empty:
   a. Dequeue a vertex, add it to the result
   b. For each outgoing edge, decrement the neighbor's in-degree
   c. If a neighbor's in-degree becomes 0, enqueue it
4. If all vertices are processed, the result is a valid topological order

Time Complexity: O(V + E)
Space Complexity: O(V)

Applications:
  - Task scheduling with dependencies
  - Build systems (Make, Gradle)
  - Course prerequisite planning
  - Package dependency resolution

Topological Sort is only possible for DAGs (Directed Acyclic Graphs). If the graph has a cycle, no valid ordering exists.`,

  ru: `Топологическая сортировка (алгоритм Кана)

Топологическая сортировка создаёт линейный порядок вершин в ориентированном ациклическом графе (DAG), при котором для каждого направленного ребра u → v вершина u располагается раньше вершины v.

Как работает алгоритм Кана (на основе BFS):
1. Вычислить полустепень захода каждой вершины
2. Добавить в очередь все вершины с полустепенью захода 0
3. Пока очередь не пуста:
   a. Извлечь вершину из очереди и добавить её в результат
   b. Для каждого исходящего ребра уменьшить полустепень захода соседней вершины
   c. Если полустепень захода соседней вершины стала равна 0, добавить её в очередь
4. Если обработаны все вершины, результат является корректным топологическим порядком

Временная сложность: O(V + E)
Пространственная сложность: O(V)

Применение:
  - Планирование задач с зависимостями
  - Системы сборки проектов (Make, Gradle)
  - Планирование учебных курсов с учётом предварительных требований
  - Разрешение зависимостей пакетов

Топологическая сортировка возможна только для DAG (ориентированных ациклических графов). Если граф содержит цикл, корректный порядок не существует.`,

  uz: `Topologik saralash (Kahn algoritmi)

Topologik saralash — bu yo'naltirilgan siklsiz grafda (DAG) uchlarning chiziqli tartibini hosil qilish algoritmi. Bunda har bir yo'naltirilgan u → v qirra uchun u uchi tartibda v uchidan oldin keladi.

Kahn algoritmi qanday ishlaydi (BFS asosida):
1. Har bir uchning kiruvchi darajasini hisoblash
2. Kiruvchi darajasi 0 bo'lgan barcha uchlarni navbatga qo'shish
3. Navbat bo'sh bo'lmaguncha:
   a. Navbatdan uchni olish va natijaga qo'shish
   b. Har bir chiquvchi qirra uchun qo'shni uchning kiruvchi darajasini kamaytirish
   c. Agar qo'shni uchning kiruvchi darajasi 0 ga teng bo'lsa, uni navbatga qo'shish
4. Agar barcha uchlar qayta ishlangan bo'lsa, natija to'g'ri topologik tartib hisoblanadi

Vaqt murakkabligi: O(V + E)
Xotira murakkabligi: O(V)

Qo'llanilishi:
  - Bog'liqliklarga asoslangan vazifalarni rejalashtirish
  - Loyihalarni yig'ish tizimlari (Make, Gradle)
  - Kurslar uchun oldindan talab qilinadigan fanlarni rejalashtirish
  - Paketlar bog'liqliklarini aniqlash va hal qilish

Topologik saralash faqat DAG (yo'naltirilgan siklsiz graf) uchun mumkin. Agar grafda sikl mavjud bo'lsa, to'g'ri topologik tartib mavjud bo'lmaydi.`,
}

export default descriptions
