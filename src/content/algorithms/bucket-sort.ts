
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Bucket Sort

Bucket Sort is a distribution-based sorting algorithm that works by partitioning an array into a number of buckets. Each bucket is then sorted individually using another sorting algorithm or recursively applying the bucket sort.

How it works:
1. Find the range (min/max) to determine bucket indices
2. Create empty buckets based on a fixed size (e.g., 10 or 20)
3. Distribute elements into buckets: index = floor((value - min) / size)
4. Sort each non-empty bucket using Insertion Sort
5. Collect elements from sorted buckets back into the main array

Time Complexity:
  Best:    O(n + k) — uniform distribution
  Average: O(n + k)
  Worst:   O(n²) — all elements fall into one bucket

Space Complexity: O(n + k) — extra space for buckets

Properties:
  - Stable sort (if underlying sort is stable)
  - Not in-place
  - Data-distribution dependent`,

  ru: `Сортировка корзинами (Bucket Sort)

Bucket Sort — это алгоритм сортировки, основанный на распределении элементов по нескольким корзинам. Сначала массив разделяется на определённое количество корзин. Затем каждая корзина сортируется отдельно с помощью другого алгоритма сортировки или рекурсивного применения Bucket Sort.

Как это работает:
1. Определить диапазон значений (минимум/максимум), чтобы вычислить индексы корзин
2. Создать пустые корзины фиксированного размера (например, 10 или 20)
3. Распределить элементы по корзинам: индекс = floor((значение - минимум) / размер)
4. Отсортировать каждую непустую корзину с помощью Insertion Sort
5. Собрать элементы из отсортированных корзин обратно в основной массив

Временная сложность:
  Лучший случай:   O(n + k) — равномерное распределение
  Средний случай:  O(n + k)
  Худший случай:   O(n²) — все элементы попадают в одну корзину

Пространственная сложность: O(n + k) — дополнительная память для корзин

Свойства:
  - Стабильная сортировка (если используемый алгоритм сортировки стабилен)
  - Не является сортировкой на месте
  - Эффективность зависит от распределения данных`,

  uz: `Savatchali saralash (Bucket Sort)

Bucket Sort — ma'lumotlarni taqsimlashga asoslangan saralash algoritmi bo'lib, massivni bir nechta savatchalarga ajratish orqali ishlaydi. Keyin har bir savatcha boshqa saralash algoritmi yordamida yoki Bucket Sort algoritmini rekursiv qo'llash orqali alohida saralanadi.

Qanday ishlaydi:
1. Savatchalar indekslarini aniqlash uchun qiymatlar diapazonini (min/max) topish
2. Belgilangan o'lcham asosida bo'sh savatchalar yaratish (masalan, 10 yoki 20 ta)
3. Elementlarni savatchalarga taqsimlash: indeks = floor((qiymat - min) / o'lcham)
4. Har bir bo'sh bo'lmagan savatchani Insertion Sort yordamida saralash
5. Saralangan savatchalardagi elementlarni asosiy massivga qayta yig'ish

Vaqt murakkabligi:
  Eng yaxshi holat: O(n + k) — elementlar bir tekis taqsimlanganda
  O'rtacha holat:   O(n + k)
  Eng yomon holat:  O(n²) — barcha elementlar bitta savatchaga tushganda

Xotira murakkabligi: O(n + k) — savatchalar uchun qo'shimcha xotira

Xususiyatlari:
  - Barqaror saralash (agar ichki saralash algoritmi barqaror bo'lsa)
  - Joyida saralash emas (qo'shimcha xotira talab qiladi)
  - Samaradorligi ma'lumotlarning taqsimlanishiga bog'liq`
}

export default descriptions
