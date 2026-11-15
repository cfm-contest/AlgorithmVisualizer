
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Maze Pathfinding (BFS)

This algorithm uses Breadth-First Search to find the shortest path through a maze from start to finish, navigating around walls.

How it works:
1. Start BFS from the starting cell
2. Explore all 4 neighbors (up, down, left, right)
3. Skip walls and already-visited cells
4. Mark each explored cell and record its parent
5. When the end is reached, trace back through parents to find the path

Time Complexity: O(rows × cols)
Space Complexity: O(rows × cols)

Properties:
  - Guarantees the shortest path
  - Explores level by level (nearest cells first)
  - Works on unweighted grids

BFS-based pathfinding is fundamental in game development, robotics, and navigation systems. For weighted grids, Dijkstra's or A* would be used instead.`,
  ru: `Поиск пути в лабиринте (BFS)

Этот алгоритм использует поиск в ширину (BFS), чтобы найти кратчайший путь через лабиринт от начальной до конечной точки, обходя стены.

Как это работает:
1. Запустить BFS из начальной клетки
2. Исследовать всех 4 соседей (вверх, вниз, влево, вправо)
3. Пропускать стены и уже посещённые клетки
4. Отмечать каждую исследованную клетку и записывать её родительскую клетку
5. После достижения конечной точки восстановить путь, двигаясь по родительским связям в обратном направлении

Временная сложность: O(rows × cols)
Пространственная сложность: O(rows × cols)

Свойства:
  - Гарантирует нахождение кратчайшего пути
  - Исследует клетки уровень за уровнем (сначала ближайшие)
  - Работает на невзвешенных сетках

Поиск пути на основе BFS широко применяется в разработке игр, робототехнике и навигационных системах. Для сеток с весами вместо него используют алгоритм Дейкстры или A*.`,
  uz: `Labirintda yo‘l qidirish (BFS)

Ushbu algoritm labirintdagi devorlarni aylanib o‘tgan holda boshlang‘ich nuqtadan yakuniy nuqtagacha bo‘lgan eng qisqa yo‘lni topish uchun kenglik bo‘yicha qidiruvdan (BFS) foydalanadi.

Qanday ishlaydi:
1. BFS algoritmini boshlang‘ich katakdan ishga tushirish
2. To‘rtta qo‘shni katakni tekshirish (yuqori, pastki, chap, o‘ng)
3. Devorlarni va avval tashrif buyurilgan kataklarni o‘tkazib yuborish
4. Tekshirilgan har bir katakni belgilash va uning ota-katagini qayd etish
5. Yakuniy nuqtaga yetilgach, yo‘lni topish uchun ota-kataklar bo‘ylab orqaga qaytish

Vaqt murakkabligi: O(rows × cols)
Xotira murakkabligi: O(rows × cols)

Xususiyatlari:
  - Eng qisqa yo‘lni topishni kafolatlaydi
  - Kataklarni bosqichma-bosqich tekshiradi (avval eng yaqin kataklar)
  - Vaznsiz panjaralarda ishlaydi

BFS asosidagi yo‘l qidirish o‘yinlar yaratish, robototexnika va navigatsiya tizimlarida muhim ahamiyatga ega. Vaznli panjaralarda esa uning o‘rniga Deykstra yoki A* algoritmlaridan foydalaniladi.`,
}

export default descriptions
