
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Quick Sort

Quick Sort is a highly efficient, divide-and-conquer sorting algorithm. It works by selecting a "pivot" element and partitioning the array around it.

How it works:
1. Choose a pivot element (here, the last element)
2. Partition: rearrange so elements smaller than pivot are on the left, larger on the right
3. The pivot is now in its final sorted position
4. Recursively apply to the left and right sub-arrays

Time Complexity:
  Best:    O(n log n)
  Average: O(n log n)
  Worst:   O(n²) — when pivot is always the smallest/largest

Space Complexity: O(log n) average, O(n) worst — recursive call stack

Properties:
  - Not stable
  - In-place (with Lomuto partition)
  - Cache-friendly

Quick Sort is one of the fastest general-purpose sorting algorithms in practice. Used in many standard library implementations.`,
  ru: `Быстрая сортировка (Quick Sort)

Quick Sort — это высокоэффективный алгоритм сортировки, основанный на принципе «разделяй и властвуй». Он работает, выбирая опорный элемент (pivot) и разделяя массив относительно него.

Как работает алгоритм:
1. Выбирается опорный элемент (в данном случае последний элемент)
2. Выполняется разбиение: элементы меньше опорного перемещаются влево, а большие — вправо
3. Опорный элемент занимает свою окончательную отсортированную позицию
4. Алгоритм рекурсивно применяется к левому и правому подмассивам

Временная сложность:
  Лучший случай:     O(n log n)
  Средний случай:    O(n log n)
  Худший случай:     O(n²) — когда опорный элемент всегда наименьший или наибольший

Пространственная сложность: O(log n) в среднем, O(n) в худшем случае — стек рекурсивных вызовов

Свойства:
  - Нестабильный алгоритм
  - Сортировка на месте (с разбиением Ломуто)
  - Эффективно использует кэш

Quick Sort — один из самых быстрых алгоритмов сортировки общего назначения на практике. Он используется во многих реализациях стандартных библиотек.`,
  uz: `Tezkor saralash (Quick Sort)

Quick Sort — «bo‘l va hukmronlik qil» tamoyiliga asoslangan yuqori samarali saralash algoritmi. U tayanch elementni (pivot) tanlash va massivni shu elementga nisbatan qismlarga ajratish orqali ishlaydi.

Algoritm qanday ishlaydi:
1. Tayanch element tanlanadi (bu yerda oxirgi element)
2. Qismlarga ajratish: tayanch elementdan kichik elementlar chapga, kattalari esa o‘ngga joylashtiriladi
3. Tayanch element saralangan massivdagi yakuniy o‘rnini egallaydi
4. Chap va o‘ng quyi massivlarga algoritm rekursiv ravishda qo‘llanadi

Vaqt murakkabligi:
  Eng yaxshi holat: O(n log n)
  O‘rtacha holat:    O(n log n)
  Eng yomon holat:  O(n²) — tayanch element har doim eng kichik yoki eng katta bo‘lganda

Xotira murakkabligi: o‘rtacha O(log n), eng yomon holatda O(n) — rekursiv chaqiruvlar steki

Xususiyatlari:
  - Barqaror emas
  - Joyida saralash (Lomuto bo‘yicha qismlarga ajratish bilan)
  - Keshdan samarali foydalanadi

Quick Sort amaliyotda eng tez ishlaydigan umumiy maqsadli saralash algoritmlaridan biridir. U ko‘plab standart kutubxonalar implementatsiyalarida qo‘llaniladi.`,
}

export default descriptions
