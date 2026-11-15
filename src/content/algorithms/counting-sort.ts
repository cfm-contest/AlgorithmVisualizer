
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Counting Sort

Counting Sort is a non-comparison-based sorting algorithm. It counts the occurrences of each value and uses arithmetic to determine positions.

How it works:
1. Find the range of input values (min to max)
2. Create a count array to store frequency of each value
3. Modify count array to store cumulative counts
4. Build the output array by placing elements at their correct positions

Time Complexity:
  Best:    O(n + k)
  Average: O(n + k)
  Worst:   O(n + k)
  where k is the range of input values

Space Complexity: O(n + k)

Properties:
  - Stable sort
  - Not in-place
  - Not comparison-based
  - Very efficient when k is small relative to n

Counting Sort is ideal for sorting integers within a known, small range. It's used as a subroutine in Radix Sort.`,

  ru: `Сортировка подсчётом (Counting Sort)

Counting Sort — это алгоритм сортировки, не основанный на сравнении элементов. Он подсчитывает количество вхождений каждого значения и использует арифметические вычисления для определения их позиций.

Как это работает:
1. Найти диапазон входных значений (от минимума до максимума)
2. Создать массив подсчёта для хранения частоты встречаемости каждого значения
3. Изменить массив подсчёта, чтобы хранить накопленные суммы
4. Построить выходной массив, размещая элементы на соответствующих позициях

Временная сложность:
  Лучший случай:   O(n + k)
  Средний случай:  O(n + k)
  Худший случай:   O(n + k)
  где k — диапазон входных значений

Пространственная сложность: O(n + k)

Свойства:
  - Стабильная сортировка
  - Не является сортировкой на месте
  - Не основана на сравнении элементов
  - Очень эффективна, когда k мало относительно n

Counting Sort идеально подходит для сортировки целых чисел в известном небольшом диапазоне. Также используется как вспомогательный алгоритм в Radix Sort.`,

  uz: `Sanash orqali saralash (Counting Sort)

Counting Sort — elementlarni taqqoslashga asoslanmagan saralash algoritmi. U har bir qiymat necha marta uchrashini hisoblaydi va elementlarning joylashuvini aniqlash uchun arifmetik hisob-kitoblardan foydalanadi.

Qanday ishlaydi:
1. Kiruvchi qiymatlar diapazonini aniqlash (min dan max gacha)
2. Har bir qiymatning takrorlanish sonini saqlash uchun sanash massivini yaratish
3. Yig'indili hisoblarni saqlash uchun sanash massivini o'zgartirish
4. Elementlarni to'g'ri pozitsiyalariga joylashtirib, natijaviy massivni yaratish

Vaqt murakkabligi:
  Eng yaxshi holat: O(n + k)
  O'rtacha holat:   O(n + k)
  Eng yomon holat:  O(n + k)
  bu yerda k — kiruvchi qiymatlar diapazoni

Xotira murakkabligi: O(n + k)

Xususiyatlari:
  - Barqaror saralash
  - Joyida saralash emas
  - Elementlarni taqqoslashga asoslanmagan
  - k qiymati n ga nisbatan kichik bo'lganda juda samarali

Counting Sort ma'lum va kichik diapazondagi butun sonlarni saralash uchun juda mos keladi. Shuningdek, Radix Sort algoritmida yordamchi algoritm sifatida ishlatiladi.`
}

export default descriptions
