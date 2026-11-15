
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `N-Queens Problem

The N-Queens problem asks: how can N chess queens be placed on an N×N chessboard so that no two queens threaten each other?

A queen can attack any piece in the same row, column, or diagonal. Therefore, a solution requires that no two queens share the same row, column, or diagonal.

How it works (Backtracking):
1. Place queens one row at a time
2. For each row, try each column
3. Check if the position is safe (no conflicts)
4. If safe, place the queen and move to the next row
5. If no safe column exists, backtrack to the previous row

This visualization shows the 4-Queens problem on a 4×4 board.

Time Complexity: O(N!) — in the worst case
Space Complexity: O(N²) — for the board

The N-Queens problem is a classic example of backtracking algorithms and constraint satisfaction problems.`,
  ru: `Задача о N ферзях

Задача о N ферзях формулируется следующим образом: как разместить N шахматных ферзей на доске размером N×N так, чтобы ни один из них не угрожал другим?

Ферзь может атаковать любую фигуру, находящуюся в той же строке, столбце или на той же диагонали. Поэтому решение должно гарантировать, что никакие два ферзя не находятся в одной строке, столбце или на одной диагонали.

Как это работает (поиск с возвратом):
1. Размещать ферзей по одному, начиная с первой строки
2. Для каждой строки проверять каждый столбец
3. Проверять, является ли позиция безопасной (нет ли конфликтов)
4. Если позиция безопасна, разместить ферзя и перейти к следующей строке
5. Если безопасного столбца нет, вернуться к предыдущей строке и изменить расположение ферзя

Эта визуализация показывает задачу о 4 ферзях на доске размером 4×4.

Временная сложность: O(N!) — в худшем случае
Пространственная сложность: O(N²) — для хранения доски

Задача о N ферзях — классический пример алгоритмов поиска с возвратом и задач удовлетворения ограничений.`,
  uz: `N ta farzin muammosi

N ta farzin muammosi quyidagi savolni qo‘yadi: N×N o‘lchamdagi shaxmat taxtasiga bir-biriga tahdid solmaydigan qilib N ta farzinni qanday joylashtirish mumkin?

Farzin bir xil satr, ustun yoki diagonalda joylashgan istalgan donani ura oladi. Shuning uchun yechimda hech qanday ikkita farzin bir xil satr, ustun yoki diagonalda joylashmasligi kerak.

Qanday ishlaydi (Backtracking — ortga qaytish):
1. Farzinlarni satrma-satr joylashtirish
2. Har bir satr uchun barcha ustunlarni sinab ko‘rish
3. Tanlangan joy xavfsiz ekanini (ziddiyat yo‘qligini) tekshirish
4. Agar joy xavfsiz bo‘lsa, farzinni joylashtirib, keyingi satrga o‘tish
5. Agar xavfsiz ustun topilmasa, oldingi satrga qaytib, farzin joylashuvini o‘zgartirish

Ushbu vizualizatsiyada 4×4 o‘lchamdagi taxtada 4 ta farzinni joylashtirish muammosi ko‘rsatilgan.

Vaqt murakkabligi: O(N!) — eng yomon holatda
Xotira murakkabligi: O(N²) — taxtani saqlash uchun

N ta farzin muammosi ortga qaytish algoritmlari va cheklovlarni qanoatlantirish masalalarining klassik namunasidir.`,
}

export default descriptions
