
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Binary Search Tree (BST)

A BST is a tree where each node has at most two children, and for every node:
  - Left subtree contains only values less than the node
  - Right subtree contains only values greater than the node

This ordering enables efficient search by halving the search space at each step.

Operations:
  insert: compare and go left/right — O(h)
  search: compare and go left/right — O(h)
  delete: find and restructure      — O(h)

Where h = height of the tree:
  Balanced tree: h = O(log n) — efficient!
  Degenerate:    h = O(n) — like a linked list

Applications: ordered data storage, range queries, priority queues (with balancing)`,

  ru: `Бинарное дерево поиска (BST)

BST — это дерево, в котором у каждого узла не более двух потомков, и для каждого узла выполняются условия:
  - Левое поддерево содержит только значения меньше значения узла
  - Правое поддерево содержит только значения больше значения узла

Такой порядок позволяет эффективно выполнять поиск, сокращая область поиска вдвое на каждом шаге.

Операции:
  insert: сравнить и перейти влево/вправо — O(h)
  search: сравнить и перейти влево/вправо — O(h)
  delete: найти узел и перестроить дерево — O(h)

Где h = высота дерева:
  Сбалансированное дерево: h = O(log n) — эффективно!
  Вырожденное дерево:      h = O(n) — как связный список

Применение: хранение упорядоченных данных, поиск по диапазону, очереди с приоритетом (при использовании балансировки)`,

  uz: `Ikkilik qidiruv daraxti (BST)

BST — har bir tugunining ko'pi bilan ikkita farzandi bo'lgan daraxt. Har bir tugun uchun quyidagi shartlar bajariladi:
  - Chap qism daraxtida faqat tugun qiymatidan kichik qiymatlar bo'ladi
  - O'ng qism daraxtida faqat tugun qiymatidan katta qiymatlar bo'ladi

Bu tartib har bir qadamda qidiruv maydonini ikkiga qisqartirish orqali samarali qidirish imkonini beradi.

Amallar:
  insert: solishtirish va chapga/o'ngga o'tish — O(h)
  search: solishtirish va chapga/o'ngga o'tish — O(h)
  delete: tugunni topish va daraxtni qayta tuzish — O(h)

Bu yerda h = daraxt balandligi:
  Muvozanatlangan daraxt: h = O(log n) — samarali!
  Buzilgan daraxt:        h = O(n) — bog'langan ro'yxat kabi

Qo'llanilishi: tartiblangan ma'lumotlarni saqlash, oraliq bo'yicha qidirish, ustuvor navbatlar (muvozanatlash bilan)`
}

export default descriptions
