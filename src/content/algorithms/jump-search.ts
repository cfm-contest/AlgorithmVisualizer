
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Jump Search

Jump Search works on sorted arrays by jumping ahead by fixed steps and then performing a linear search within the identified block.

How it works:
1. Calculate the optimal jump size: √n
2. Jump through the array in blocks until finding a block where the target could be
3. Perform a linear search within that block
4. Return the index if found, -1 otherwise

Time Complexity:
  Best:    O(1)
  Average: O(√n)
  Worst:   O(√n)

Space Complexity: O(1)

Properties:
  - Requires sorted array
  - Better than Linear Search, simpler than Binary Search
  - Optimal jump size is √n

Jump Search is useful when jumping back is costly (e.g., in linked lists) compared to Binary Search which requires random access.`,
  ru: `Поиск прыжками (Jump Search)

Поиск прыжками работает с отсортированными массивами: алгоритм перемещается вперёд фиксированными шагами, а затем выполняет линейный поиск внутри найденного блока.

Как работает:
1. Вычисляет оптимальный размер шага: √n
2. Перемещается по массиву блоками, пока не найдёт блок, в котором может находиться искомый элемент
3. Выполняет линейный поиск внутри этого блока
4. Возвращает индекс, если элемент найден, иначе — -1

Временная сложность:
  Лучшая:     O(1)
  Средняя:    O(√n)
  Худшая:     O(√n)

Пространственная сложность: O(1)

Свойства:
  - Требует отсортированного массива
  - Эффективнее линейного поиска и проще бинарного поиска
  - Оптимальный размер шага — √n

Поиск прыжками полезен в случаях, когда возврат назад обходится дорого (например, в связанных списках). В отличие от бинарного поиска, ему не требуется произвольный доступ к элементам.`,
  uz: `Sakrash orqali qidiruv (Jump Search)

Sakrash orqali qidiruv tartiblangan massivlarda ishlaydi. Algoritm belgilangan qadamlar bilan oldinga sakraydi, so‘ng aniqlangan blok ichida chiziqli qidiruvni amalga oshiradi.

Ishlash tartibi:
1. Optimal sakrash uzunligini hisoblaydi: √n
2. Qidirilayotgan element bo‘lishi mumkin bo‘lgan blok topilguncha massiv bo‘ylab blokma-blok sakraydi
3. Topilgan blok ichida chiziqli qidiruvni amalga oshiradi
4. Element topilsa, uning indeksini qaytaradi, aks holda -1 ni qaytaradi

Vaqt murakkabligi:
  Eng yaxshi: O(1)
  O‘rtacha:   O(√n)
  Eng yomon:  O(√n)

Xotira murakkabligi: O(1)

Xususiyatlari:
  - Tartiblangan massivni talab qiladi
  - Chiziqli qidiruvdan samaraliroq, binar qidiruvdan esa sodda
  - Optimal sakrash uzunligi — √n

Sakrash orqali qidiruv orqaga qaytish qimmatga tushadigan holatlarda (masalan, bog‘langan ro‘yxatlarda) foydalidir. Binar qidiruvdan farqli ravishda, u elementlarga ixtiyoriy tartibda murojaat qilishni talab qilmaydi.`,
}

export default descriptions
