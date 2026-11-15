
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Bubble Sort

Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

The algorithm gets its name because smaller elements "bubble" to the top of the list with each pass.

How it works:
1. Compare each pair of adjacent elements
2. Swap them if the left element is greater
3. After each pass, the largest unsorted element settles in its final position
4. Repeat until no swaps are needed

Time Complexity:
  Best:    O(n) — already sorted
  Average: O(n²)
  Worst:   O(n²)

Space Complexity: O(1) — in-place

Properties:
  - Stable sort
  - Adaptive
  - In-place

Mainly used for educational purposes. For production, prefer Quick Sort or Merge Sort.`,

  ru: `Сортировка пузырьком (Bubble Sort)

Bubble Sort — это простой алгоритм сортировки, основанный на сравнении элементов. Он многократно проходит по списку, сравнивает соседние элементы и меняет их местами, если они расположены в неправильном порядке.

Алгоритм получил своё название потому, что меньшие элементы постепенно «всплывают» в начало списка после каждого прохода.

Как это работает:
1. Сравнить каждую пару соседних элементов
2. Поменять их местами, если левый элемент больше правого
3. После каждого прохода наибольший из ещё не отсортированных элементов занимает свою окончательную позицию
4. Повторять процесс, пока обмены больше не требуются

Временная сложность:
  Лучший случай:   O(n) — список уже отсортирован
  Средний случай:  O(n²)
  Худший случай:   O(n²)

Пространственная сложность: O(1) — сортировка на месте

Свойства:
  - Стабильная сортировка
  - Адаптивный алгоритм
  - Сортировка на месте

В основном используется в образовательных целях. Для production-систем предпочтительнее Quick Sort или Merge Sort.`,

  uz: `Pufakchali saralash (Bubble Sort)

Bubble Sort — taqqoslashga asoslangan oddiy saralash algoritmi. U ro'yxat bo'ylab qayta-qayta yurib, yonma-yon turgan elementlarni taqqoslaydi va ular noto'g'ri tartibda joylashgan bo'lsa, o'rinlarini almashtiradi.

Algoritm o'z nomini kichik elementlar har bir o'tish davomida ro'yxat boshiga qarab "pufakchadek ko'tarilishi" sababli olgan.

Qanday ishlaydi:
1. Har bir yonma-yon joylashgan elementlar juftligini taqqoslash
2. Agar chapdagi element o'ngdagisidan katta bo'lsa, ularning o'rnini almashtirish
3. Har bir o'tishdan so'ng, hali saralanmagan eng katta element o'zining yakuniy o'rniga joylashadi
4. Hech qanday almashtirish talab qilinmaguncha jarayonni takrorlash

Vaqt murakkabligi:
  Eng yaxshi holat: O(n) — ro'yxat allaqachon saralangan
  O'rtacha holat:   O(n²)
  Eng yomon holat:  O(n²)

Xotira murakkabligi: O(1) — qo'shimcha xotirasiz, joyida saralash

Xususiyatlari:
  - Barqaror saralash
  - Adaptiv algoritm
  - Joyida saralash

Asosan ta'lim maqsadlarida qo'llaniladi. Production loyihalarida Quick Sort yoki Merge Sort algoritmlaridan foydalanish ma'qul.`
}

export default descriptions
