
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Sudoku Solver

This solver uses backtracking to fill a Sudoku grid so that each row, column, and box contains all digits exactly once. This visualization uses a 4×4 variant with digits 1-4.

How it works (Backtracking):
1. Find an empty cell
2. Try each valid number (1 to N)
3. Check if the number is safe (not in same row, column, or box)
4. If safe, place it and recursively try to fill the next empty cell
5. If no valid number works, backtrack (remove the number and try the next)

Time Complexity: O(N^(N×N)) — worst case
Space Complexity: O(N×N) — for the board

Properties:
  - Always finds a solution if one exists
  - Backtracking prunes invalid branches early
  - Can be optimized with constraint propagation

Sudoku is a classic constraint satisfaction problem solved efficiently with backtracking.`,

  ru: `Решатель судоку

Этот решатель использует алгоритм возврата (Backtracking) для заполнения сетки судоку так, чтобы каждая строка, каждый столбец и каждый блок содержали все цифры ровно один раз. В этой визуализации используется вариант 4×4 с цифрами от 1 до 4.

Как это работает (Backtracking):
1. Найти пустую ячейку
2. Попробовать каждое допустимое число (от 1 до N)
3. Проверить, можно ли разместить число (его нет в той же строке, столбце или блоке)
4. Если число подходит, разместить его и рекурсивно перейти к следующей пустой ячейке
5. Если ни одно число не подходит, вернуться назад (удалить число и попробовать следующее)

Временная сложность: O(N^(N×N)) — в худшем случае
Пространственная сложность: O(N×N) — для игрового поля

Свойства:
  - Всегда находит решение, если оно существует
  - Алгоритм Backtracking отсекает недопустимые варианты на ранних этапах
  - Может быть оптимизирован с помощью распространения ограничений

Судоку — классическая задача удовлетворения ограничений, эффективно решаемая с помощью алгоритма Backtracking.`,

  uz: `Sudoku yechuvchisi

Ushbu yechuvchi Sudoku kataklarini Backtracking (orqaga qaytish) algoritmi yordamida to'ldiradi. Bunda har bir qator, ustun va blokda barcha raqamlar aynan bir martadan qatnashishi kerak. Ushbu vizualizatsiyada 1 dan 4 gacha raqamlar ishlatiladigan 4×4 Sudoku varianti qo'llaniladi.

Qanday ishlaydi (Backtracking):
1. Bo'sh katakni topish
2. Har bir mumkin bo'lgan raqamni sinab ko'rish (1 dan N gacha)
3. Raqamni joylashtirish mumkinligini tekshirish (u shu qator, ustun yoki blokda mavjud emasligi kerak)
4. Agar raqam mos kelsa, uni joylashtirish va rekursiv ravishda keyingi bo'sh katakka o'tish
5. Agar hech qanday raqam mos kelmasa, orqaga qaytish (raqamni olib tashlash va keyingisini sinab ko'rish)

Vaqt murakkabligi: O(N^(N×N)) — eng yomon holatda
Xotira murakkabligi: O(N×N) — Sudoku maydoni uchun

Xususiyatlari:
  - Agar yechim mavjud bo'lsa, uni har doim topadi
  - Backtracking algoritmi noto'g'ri variantlarni erta bosqichda chiqarib tashlaydi
  - Cheklovlarni tarqatish usuli yordamida optimallashtirilishi mumkin

Sudoku — Backtracking algoritmi yordamida samarali yechiladigan klassik cheklovlarni qondirish masalasidir.`,
}

export default descriptions
