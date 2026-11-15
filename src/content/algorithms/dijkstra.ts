
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Dijkstra's Algorithm

Dijkstra's Algorithm finds the shortest path from a source node to all other nodes in a weighted graph with non-negative edge weights.

How it works:
1. Initialize distances: source = 0, all others = ∞
2. Mark all nodes as unvisited
3. Pick the unvisited node with the smallest distance
4. For each unvisited neighbor, calculate the tentative distance
5. If the new distance is smaller, update it
6. Mark the current node as visited
7. Repeat until all nodes are visited

Time Complexity:
  O(V²) with simple array
  O((V + E) log V) with min-heap

Space Complexity: O(V)

Applications:
  - GPS navigation and route planning
  - Network routing protocols (OSPF)
  - Finding shortest paths in maps
  - Social network analysis

Dijkstra's Algorithm is one of the most important graph algorithms. It guarantees optimal solutions for graphs with non-negative weights.`,

  ru: `Алгоритм Дейкстры

Алгоритм Дейкстры находит кратчайшие пути от исходной вершины до всех остальных вершин взвешенного графа с неотрицательными весами рёбер.

Как работает алгоритм:
1. Инициализировать расстояния: исходная вершина = 0, все остальные = ∞
2. Отметить все вершины как непосещённые
3. Выбрать непосещённую вершину с наименьшим расстоянием
4. Для каждого непосещённого соседа вычислить предварительное расстояние
5. Если новое расстояние меньше, обновить его
6. Отметить текущую вершину как посещённую
7. Повторять, пока все вершины не будут посещены

Временная сложность:
  O(V²) при использовании обычного массива
  O((V + E) log V) при использовании min-heap

Пространственная сложность: O(V)

Применение:
  - GPS-навигация и планирование маршрутов
  - Протоколы маршрутизации сетей (OSPF)
  - Поиск кратчайших путей на картах
  - Анализ социальных сетей

Алгоритм Дейкстры — один из важнейших алгоритмов на графах. Он гарантирует оптимальные решения для графов с неотрицательными весами рёбер.`,

  uz: `Dijkstra algoritmi

Dijkstra algoritmi manba tugundan boshlab, qirralarining og‘irliklari manfiy bo‘lmagan vaznli grafdagi barcha boshqa tugunlargacha bo‘lgan eng qisqa yo‘llarni topadi.

Qanday ishlaydi:
1. Masofalarni boshlang‘ich qiymatga o‘rnatish: manba = 0, qolganlari = ∞
2. Barcha tugunlarni tashrif buyurilmagan deb belgilash
3. Tashrif buyurilmagan tugunlar orasidan masofasi eng kichigini tanlash
4. Har bir tashrif buyurilmagan qo‘shni tugun uchun taxminiy masofani hisoblash
5. Agar yangi masofa kichikroq bo‘lsa, uni yangilash
6. Joriy tugunni tashrif buyurilgan deb belgilash
7. Barcha tugunlar ko‘rib chiqilguncha takrorlash

Vaqt murakkabligi:
  O(V²) oddiy massiv yordamida
  O((V + E) log V) min-heap yordamida

Xotira murakkabligi: O(V)

Qo‘llanilishi:
  - GPS navigatsiyasi va marshrutlarni rejalashtirish
  - Tarmoq marshrutlash protokollari (OSPF)
  - Xaritalarda eng qisqa yo‘llarni topish
  - Ijtimoiy tarmoqlar tahlili

Dijkstra algoritmi graf nazariyasidagi eng muhim algoritmlardan biridir. U qirra og‘irliklari manfiy bo‘lmagan graflar uchun optimal yechimlarni kafolatlaydi.`,
}

export default descriptions
