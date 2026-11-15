
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Depth-First Search (DFS)

DFS is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses a stack (or recursion).

How it works:
1. Start from a source node, mark it as visited
2. Recursively visit each unvisited neighbor
3. Backtrack when no unvisited neighbors remain
4. Continue until all reachable nodes are visited

Time Complexity: O(V + E)
  V = number of vertices, E = number of edges

Space Complexity: O(V) — for the recursion stack and visited set

Applications:
  - Detecting cycles in graphs
  - Topological sorting
  - Finding connected components
  - Solving mazes and puzzles
  - Path finding

DFS explores deep paths first, which makes it useful for topological sorting and cycle detection, but it doesn't guarantee shortest paths.`,

  ru: `Поиск в глубину (Depth-First Search, DFS)

DFS — это алгоритм обхода графа, который исследует каждую ветвь максимально глубоко, прежде чем вернуться назад (выполнить возврат). Для работы он использует стек или рекурсию.

Как это работает:
1. Начать с исходной вершины и отметить её как посещённую
2. Рекурсивно посетить каждого ещё не посещённого соседа
3. Вернуться назад, если непосещённых соседей больше нет
4. Продолжать, пока все достижимые вершины не будут посещены

Временная сложность: O(V + E)
  V = количество вершин, E = количество рёбер

Пространственная сложность: O(V) — для стека рекурсии и множества посещённых вершин

Применение:
  - Обнаружение циклов в графах
  - Топологическая сортировка
  - Поиск компонент связности
  - Решение лабиринтов и головоломок
  - Поиск путей

DFS сначала исследует наиболее глубокие пути. Это делает его полезным для топологической сортировки и обнаружения циклов, однако он не гарантирует нахождение кратчайшего пути.`,

  uz: `Chuqurlik bo'yicha qidiruv (Depth-First Search, DFS)

DFS — grafni aylanib chiqish algoritmi bo'lib, orqaga qaytishdan oldin har bir tarmoq bo'ylab imkon qadar chuqurroq borib o'rganadi. U stek yoki rekursiyadan foydalanadi.

Qanday ishlaydi:
1. Boshlang'ich tugundan boshlash va uni tashrif buyurilgan deb belgilash
2. Tashrif buyurilmagan har bir qo'shni tugunga rekursiv o'tish
3. Tashrif buyurilmagan qo'shni tugunlar qolmaganda orqaga qaytish
4. Barcha erishish mumkin bo'lgan tugunlar ko'rib chiqilguncha davom etish

Vaqt murakkabligi: O(V + E)
  V = tugunlar soni, E = qirralar soni

Xotira murakkabligi: O(V) — rekursiya steki va tashrif buyurilgan tugunlar to'plami uchun

Qo'llanilish sohalari:
  - Grafdagi sikllarni aniqlash
  - Topologik saralash
  - Bog'langan komponentlarni topish
  - Labirint va boshqotirmalarni yechish
  - Yo'llarni qidirish

DFS avval eng chuqur yo'llarni o'rganadi. Shu sababli u topologik saralash va sikllarni aniqlashda foydali, ammo eng qisqa yo'lni topishni kafolatlamaydi.`
}

export default descriptions
