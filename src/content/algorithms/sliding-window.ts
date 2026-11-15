
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Sliding Window

Sliding Window maintains a dynamic range (window) over a sequence, expanding and contracting to solve substring/subarray problems efficiently.

How it works:
1. Expand the window by moving the right pointer
2. If a condition is violated, shrink from the left
3. Track the best result seen so far

Time Complexity: O(n) — each character is visited at most twice
Space Complexity: O(min(n, alphabet))

Classic problems:
  - Longest substring without repeating chars
  - Minimum window substring
  - Maximum sum subarray of size k
  - Longest repeating character replacement`,

  ru: `Скользящее окно (Sliding Window)

Метод скользящего окна поддерживает динамический диапазон (окно) в последовательности, расширяя и сужая его для эффективного решения задач с подстроками и подмассивами.

Как это работает:
1. Расширяйте окно, перемещая правый указатель
2. Если условие нарушено, сужайте окно слева
3. Отслеживайте лучший найденный результат

Временная сложность: O(n) — каждый символ посещается не более двух раз
Пространственная сложность: O(min(n, алфавит))

Классические задачи:
  - Самая длинная подстрока без повторяющихся символов
  - Минимальная подстрока, содержащая все нужные символы
  - Максимальная сумма подмассива размером k
  - Замена символов для получения самой длинной последовательности одинаковых символов`,

  uz: `Suriluvchi oyna (Sliding Window)

Suriluvchi oyna usuli ketma-ketlik ustida dinamik oraliqni (oynani) saqlaydi. Qism satr va qism massiv masalalarini samarali yechish uchun oynani kengaytiradi va toraytiradi.

Ishlash tartibi:
1. O‘ng ko‘rsatkichni siljitib, oynani kengaytiring
2. Agar shart buzilsa, chap tomondan oynani toraytiring
3. Hozirgacha topilgan eng yaxshi natijani kuzatib boring

Vaqt murakkabligi: O(n) — har bir belgiga ko‘pi bilan ikki marta murojaat qilinadi
Xotira murakkabligi: O(min(n, alifbo hajmi))

Klassik masalalar:
  - Takrorlanmaydigan belgilardan iborat eng uzun qism satr
  - Barcha kerakli belgilarni o‘z ichiga olgan eng qisqa qism satr
  - k o‘lchamli qism massivning maksimal yig‘indisi
  - Eng uzun bir xil belgilar ketma-ketligini hosil qilish uchun belgilarni almashtirish`,
}

export default descriptions
