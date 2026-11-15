
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Prim's Algorithm

Prim's Algorithm finds a Minimum Spanning Tree (MST) for a weighted, connected, undirected graph. The MST connects all vertices with the minimum total edge weight.

How it works:
1. Start with any node as the initial tree
2. Find the minimum weight edge connecting the tree to a non-tree vertex
3. Add that edge and vertex to the tree
4. Repeat until all vertices are in the tree

Time Complexity:
  O(V²) with adjacency matrix
  O(E log V) with binary heap

Space Complexity: O(V)

Applications:
  - Network design (minimum cost wiring)
  - Approximation algorithms for NP-hard problems
  - Cluster analysis
  - Image segmentation

Prim's Algorithm is a greedy algorithm that always picks the cheapest edge to expand the tree. Compare with Kruskal's Algorithm, which sorts all edges globally.`,
  ru: `Алгоритм Прима

Алгоритм Прима находит минимальное остовное дерево (MST) для связного неориентированного взвешенного графа. MST соединяет все вершины с минимальной суммарной стоимостью рёбер.

Как это работает:
1. Выбрать любую вершину в качестве начального дерева
2. Найти ребро с минимальным весом, соединяющее дерево с вершиной, которая ещё не входит в него
3. Добавить это ребро и вершину в дерево
4. Повторять, пока все вершины не войдут в дерево

Временная сложность:
  O(V²) при использовании матрицы смежности
  O(E log V) при использовании двоичной кучи

Пространственная сложность: O(V)

Применение:
  - Проектирование сетей (прокладка кабелей с минимальными затратами)
  - Приближённые алгоритмы для NP-трудных задач
  - Кластерный анализ
  - Сегментация изображений

Алгоритм Прима — это жадный алгоритм, который каждый раз выбирает ребро с наименьшим весом для расширения дерева. Его можно сравнить с алгоритмом Краскала, который сначала сортирует все рёбра графа.`,
  uz: `Prim algoritmi

Prim algoritmi vaznli, bog‘langan va yo‘naltirilmagan graf uchun minimal qamrovchi daraxtni (MST) topadi. MST barcha uchlarni qirralarning umumiy vazni eng kichik bo‘lgan holda bog‘laydi.

Qanday ishlaydi:
1. Istalgan uchni boshlang‘ich daraxt sifatida tanlash
2. Daraxtni hali unga kirmagan uch bilan bog‘laydigan eng kichik vaznli qirrani topish
3. Ushbu qirra va uchni daraxtga qo‘shish
4. Barcha uchlar daraxtga kiritilguncha takrorlash

Vaqt murakkabligi:
  Qo‘shnichilik matritsasi bilan: O(V²)
  Ikkilik uyum (binary heap) bilan: O(E log V)

Xotira murakkabligi: O(V)

Qo‘llanilishi:
  - Tarmoqlarni loyihalash (eng kam xarajatli kabel ulanishi)
  - NP-qiyin masalalar uchun yaqinlashtirish algoritmlari
  - Klaster tahlili
  - Tasvirlarni segmentatsiyalash

Prim algoritmi — daraxtni kengaytirish uchun har safar eng arzon qirrani tanlaydigan ochko‘z algoritm. Uni barcha qirralarni umumiy tartibda saralaydigan Kruskal algoritmi bilan taqqoslash mumkin.`,
}

export default descriptions
