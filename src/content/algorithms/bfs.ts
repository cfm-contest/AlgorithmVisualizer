
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Breadth-First Search (BFS)

BFS is a graph traversal algorithm that explores all vertices at the present depth before moving to vertices at the next depth level. It uses a queue data structure.

How it works:
1. Start from a source node, mark it as visited, add to queue
2. Dequeue a node, process it
3. Enqueue all unvisited neighbors
4. Repeat until the queue is empty

Time Complexity: O(V + E)
  V = number of vertices, E = number of edges

Space Complexity: O(V) — for the queue and visited set

Applications:
  - Shortest path in unweighted graphs
  - Level-order traversal of trees
  - Finding connected components
  - Web crawling
  - Social network analysis (degrees of separation)

BFS guarantees finding the shortest path (fewest edges) between two nodes in an unweighted graph.`,

  ru: `Поиск в ширину (BFS)

BFS — это алгоритм обхода графа, который сначала исследует все вершины на текущем уровне, а затем переходит к вершинам следующего уровня. Для работы используется структура данных «очередь».

Как работает:
1. Начните с исходной вершины, отметьте её как посещённую и добавьте в очередь.
2. Извлеките вершину из очереди и обработайте её.
3. Добавьте всех непосещённых соседей в очередь.
4. Повторяйте действия, пока очередь не опустеет.

Временная сложность: O(V + E)
  V = количество вершин, E = количество рёбер.

Пространственная сложность: O(V) — для очереди и множества посещённых вершин.

Применение:
  - Поиск кратчайшего пути в невзвешенных графах.
  - Обход деревьев по уровням.
  - Поиск компонент связности.
  - Обход веб-страниц.
  - Анализ социальных сетей.

BFS гарантирует нахождение кратчайшего пути (с минимальным количеством рёбер) между двумя вершинами в невзвешенном графе.`,

  uz: `Kenglik bo‘yicha qidirish (BFS)

BFS — grafni aylanib chiqish algoritmi bo‘lib, keyingi darajaga o‘tishdan oldin joriy darajadagi barcha uchlarni tekshiradi. Bunda navbat (Queue) ma'lumotlar tuzilmasidan foydalaniladi.

Ishlash tartibi:
1. Boshlang‘ich uchdan boshlang, uni tashrif buyurilgan deb belgilang va navbatga qo‘shing.
2. Navbatdan bir uchni oling va uni qayta ishlang.
3. Tashrif buyurilmagan barcha qo‘shni uchlarni navbatga qo‘shing.
4. Navbat bo‘shaguncha jarayonni takrorlang.

Vaqt murakkabligi: O(V + E)
  V = uchlar soni, E = qirralar soni.

Xotira murakkabligi: O(V) — navbat va tashrif buyurilgan uchlar to‘plami uchun.

Qo‘llanilishi:
  - Vaznsiz graflarda eng qisqa yo‘lni topish.
  - Daraxtlarni darajalar bo‘yicha aylanib chiqish.
  - Bog‘langan komponentlarni aniqlash.
  - Veb-sahifalarni skanerlash.
  - Ijtimoiy tarmoqlarni tahlil qilish.

BFS vaznsiz grafdagi ikkita uch orasidan eng qisqa yo‘lni (eng kam qirralar soniga ega yo‘lni) topishni kafolatlaydi.`,
}

export default descriptions
