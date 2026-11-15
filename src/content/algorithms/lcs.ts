
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Longest Common Subsequence (LCS)

LCS finds the longest subsequence common to two sequences. A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous.

How it works (Bottom-Up DP):
1. Create a 2D table: dp[i][j] = length of LCS of first i chars of X and first j chars of Y
2. If characters match: dp[i][j] = dp[i-1][j-1] + 1
3. If they don't match: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
4. dp[m][n] contains the LCS length

Time Complexity: O(m × n)
Space Complexity: O(m × n) — can be optimized to O(min(m, n))

Applications:
  - Diff tools (file comparison)
  - DNA sequence alignment
  - Version control systems
  - Spell checking

LCS is a fundamental problem in bioinformatics and text processing. It generalizes to the edit distance problem.`,
  ru: `Наибольшая общая подпоследовательность (LCS)

LCS находит самую длинную подпоследовательность, общую для двух последовательностей. Подпоследовательность — это последовательность элементов, которые идут в том же относительном порядке, но не обязательно расположены подряд.

Как работает (динамическое программирование снизу вверх):
1. Создаётся двумерная таблица: dp[i][j] = длина LCS для первых i символов X и первых j символов Y
2. Если символы совпадают: dp[i][j] = dp[i-1][j-1] + 1
3. Если символы не совпадают: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
4. dp[m][n] содержит длину LCS

Временная сложность: O(m × n)
Пространственная сложность: O(m × n) — можно оптимизировать до O(min(m, n))

Применение:
  - Инструменты diff (сравнение файлов)
  - Выравнивание последовательностей ДНК
  - Системы контроля версий
  - Проверка орфографии

LCS — фундаментальная задача биоинформатики и обработки текста. Она обобщается до задачи вычисления расстояния редактирования.`,
  uz: `Eng uzun umumiy qism ketma-ketlik (LCS)

LCS ikkita ketma-ketlik uchun umumiy bo‘lgan eng uzun qism ketma-ketlikni topadi. Qism ketma-ketlik — elementlari dastlabki ketma-ketlikdagi nisbiy tartibini saqlagan holda joylashadigan, ammo yonma-yon kelishi shart bo‘lmagan ketma-ketlikdir.

Ishlash tartibi (Bottom-Up DP):
1. Ikki o‘lchovli jadval yaratiladi: dp[i][j] = X ning dastlabki i ta belgisi va Y ning dastlabki j ta belgisi uchun LCS uzunligi
2. Agar belgilar mos kelsa: dp[i][j] = dp[i-1][j-1] + 1
3. Agar belgilar mos kelmasa: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
4. dp[m][n] LCS uzunligini saqlaydi

Vaqt murakkabligi: O(m × n)
Xotira murakkabligi: O(m × n) — O(min(m, n)) gacha optimallashtirish mumkin

Qo‘llanilishi:
  - Diff vositalari (fayllarni taqqoslash)
  - DNK ketma-ketliklarini tekislash
  - Versiyalarni boshqarish tizimlari
  - Imlo xatolarini tekshirish

LCS bioinformatika va matnlarni qayta ishlashdagi asosiy muammolardan biridir. U tahrirlash masofasi muammosining umumlashtirilgan ko‘rinishidir.`,
}

export default descriptions
