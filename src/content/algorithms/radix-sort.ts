
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Radix Sort

Radix Sort sorts numbers digit by digit, from the least significant digit to the most significant (LSD Radix Sort). It uses a stable sort (like Counting Sort) as a subroutine.

How it works:
1. Find the maximum number to determine the number of digits
2. For each digit position (ones, tens, hundreds, ...):
   a. Sort the array based on the current digit using a stable sort
3. After processing all digits, the array is sorted

Time Complexity:
  Best:    O(d × (n + k))
  Average: O(d × (n + k))
  Worst:   O(d × (n + k))
  where d = number of digits, k = base (10 for decimal)

Space Complexity: O(n + k)

Properties:
  - Stable sort
  - Not in-place
  - Not comparison-based
  - Efficient for integers and strings

Radix Sort can outperform comparison-based sorts when the number of digits is small relative to log(n).`,
  ru: `Поразрядная сортировка (Radix Sort)

Radix Sort сортирует числа по одной цифре за раз, начиная с наименее значимой и заканчивая наиболее значимой (LSD Radix Sort). В качестве вспомогательного алгоритма используется стабильная сортировка, например Counting Sort.

Как работает алгоритм:
1. Найти максимальное число, чтобы определить количество цифр
2. Для каждой позиции цифры (единицы, десятки, сотни, ...):
   a. Отсортировать массив по текущей цифре с помощью стабильной сортировки
3. После обработки всех цифр массив будет отсортирован

Временная сложность:
  Лучший случай:  O(d × (n + k))
  Средний случай: O(d × (n + k))
  Худший случай:  O(d × (n + k))
  где d = количество цифр, k = основание системы счисления (10 для десятичной системы)

Пространственная сложность: O(n + k)

Свойства:
  - Стабильная сортировка
  - Не выполняется на месте
  - Не основана на сравнениях
  - Эффективна для целых чисел и строк

Radix Sort может превосходить алгоритмы сортировки, основанные на сравнениях, если количество цифр невелико относительно log(n).`,
  uz: `Razryadli saralash (Radix Sort)

Radix Sort sonlarni raqamlar bo‘yicha, eng kichik razryaddan eng katta razryadga qarab saralaydi (LSD Radix Sort). Yordamchi algoritm sifatida barqaror saralash usulidan, masalan, Counting Sort'dan foydalanadi.

Algoritm qanday ishlaydi:
1. Raqamlar sonini aniqlash uchun eng katta son topiladi
2. Har bir raqam razryadi uchun (birliklar, o‘nliklar, yuzliklar, ...):
   a. Massiv joriy razryaddagi raqam asosida barqaror saralash yordamida tartiblanadi
3. Barcha razryadlar qayta ishlangach, massiv saralangan bo‘ladi

Vaqt murakkabligi:
  Eng yaxshi holat: O(d × (n + k))
  O‘rtacha holat:   O(d × (n + k))
  Eng yomon holat:  O(d × (n + k))
  bu yerda d = raqamlar soni, k = sanoq tizimi asosi (o‘nlik tizim uchun 10)

Xotira murakkabligi: O(n + k)

Xususiyatlari:
  - Barqaror saralash
  - Joyida bajarilmaydi
  - Taqqoslashga asoslanmagan
  - Butun sonlar va satrlar uchun samarali

Agar raqamlar soni log(n) ga nisbatan kichik bo‘lsa, Radix Sort taqqoslashga asoslangan saralash algoritmlaridan tezroq ishlashi mumkin.`,
}

export default descriptions
