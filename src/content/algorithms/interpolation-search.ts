
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Interpolation Search

Interpolation Search is an improved variant of Binary Search for uniformly distributed sorted data. Instead of always going to the middle, it estimates the position of the target based on its value.

How it works:
1. Estimate position: pos = low + ((target - arr[low]) × (high - low)) / (arr[high] - arr[low])
2. If arr[pos] equals target, return pos
3. If arr[pos] < target, search right portion
4. If arr[pos] > target, search left portion

Time Complexity:
  Best:    O(1)
  Average: O(log log n) — for uniform distribution
  Worst:   O(n) — for non-uniform distribution

Space Complexity: O(1)

Properties:
  - Requires sorted array
  - Best for uniformly distributed data
  - Can degrade to O(n) for skewed distributions

Interpolation Search can be significantly faster than Binary Search when data is uniformly distributed, as it makes better guesses about where the target might be.`,
  ru: `Интерполяционный поиск (Interpolation Search)

Интерполяционный поиск — это улучшенная разновидность бинарного поиска (Binary Search), предназначенная для отсортированных данных с равномерным распределением. Вместо того чтобы всегда переходить к середине массива, он оценивает позицию искомого элемента на основе его значения.

Как работает:
1. Оценивает позицию: pos = low + ((target - arr[low]) × (high - low)) / (arr[high] - arr[low])
2. Если arr[pos] равно искомому значению, возвращает pos
3. Если arr[pos] < target, выполняет поиск в правой части
4. Если arr[pos] > target, выполняет поиск в левой части

Временная сложность:
  Лучшая:     O(1)
  Средняя:    O(log log n) — при равномерном распределении
  Худшая:     O(n) — при неравномерном распределении

Пространственная сложность: O(1)

Свойства:
  - Требует отсортированного массива
  - Лучше всего подходит для равномерно распределённых данных
  - Может замедляться до O(n) при неравномерном распределении

Интерполяционный поиск может быть значительно быстрее бинарного поиска, если данные распределены равномерно, поскольку он точнее оценивает возможное положение искомого элемента.`,
  uz: `Interpolatsion qidiruv (Interpolation Search)

Interpolatsion qidiruv — bir tekis taqsimlangan tartiblangan ma’lumotlar uchun Binary Search algoritmining takomillashtirilgan turi. U doimo massivning o‘rtasiga o‘tish o‘rniga, qidirilayotgan qiymatga asoslanib elementning taxminiy o‘rnini aniqlaydi.

Ishlash tartibi:
1. Pozitsiyani hisoblaydi: pos = low + ((target - arr[low]) × (high - low)) / (arr[high] - arr[low])
2. Agar arr[pos] qidirilayotgan qiymatga teng bo‘lsa, pos ni qaytaradi
3. Agar arr[pos] < target bo‘lsa, massivning o‘ng qismidan qidiradi
4. Agar arr[pos] > target bo‘lsa, massivning chap qismidan qidiradi

Vaqt murakkabligi:
  Eng yaxshi: O(1)
  O‘rtacha:   O(log log n) — bir tekis taqsimotda
  Eng yomon:  O(n) — notekis taqsimotda

Xotira murakkabligi: O(1)

Xususiyatlari:
  - Tartiblangan massivni talab qiladi
  - Bir tekis taqsimlangan ma’lumotlar uchun eng samarali
  - Notekis taqsimotda samaradorligi O(n) gacha pasayishi mumkin

Ma’lumotlar bir tekis taqsimlangan bo‘lsa, interpolatsion qidiruv Binary Search algoritmidan ancha tez ishlashi mumkin, chunki u qidirilayotgan elementning qayerda joylashganini aniqroq taxmin qiladi.`,
}

export default descriptions
