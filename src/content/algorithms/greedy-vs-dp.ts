
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Greedy vs Dynamic Programming

Both Greedy and DP solve optimization problems, but they differ fundamentally:

Greedy:
  - Makes the locally optimal choice at each step
  - Fast: usually O(n log n) or O(n)
  - Does NOT always find the global optimum
  - Works when the "greedy choice property" holds

Dynamic Programming:
  - Considers ALL possible choices
  - Finds the globally optimal solution — always
  - Slower: usually O(n × m) time and space
  - Works for problems with overlapping subproblems

Example — Coin Change with coins [1, 4, 6], amount 8:
  Greedy picks 6+1+1 = 3 coins (suboptimal!)
  DP finds 4+4 = 2 coins (optimal!)`,

  ru: `Жадный алгоритм и динамическое программирование

И жадные алгоритмы, и динамическое программирование (DP) решают задачи оптимизации, но принципиально различаются:

Жадный алгоритм (Greedy):
  - На каждом шаге выбирает локально оптимальный вариант
  - Быстрый: обычно O(n log n) или O(n)
  - НЕ всегда находит глобальный оптимум
  - Работает, когда выполняется «свойство жадного выбора»

Динамическое программирование:
  - Рассматривает ВСЕ возможные варианты
  - Всегда находит глобально оптимальное решение
  - Более медленное: обычно O(n × m) по времени и памяти
  - Подходит для задач с перекрывающимися подзадачами

Пример — задача о размене монет: номиналы [1, 4, 6], сумма 8:
  Жадный алгоритм выбирает 6+1+1 = 3 монеты (неоптимально!)
  Динамическое программирование находит 4+4 = 2 монеты (оптимально!)`,

  uz: `Greedy va dinamik dasturlash

Greedy (ochko‘z algoritm) ham, dinamik dasturlash (DP) ham optimallashtirish masalalarini yechadi, ammo ularning ishlash tamoyillari tubdan farq qiladi:

Greedy (Ochko‘z algoritm):
  - Har bir qadamda lokal jihatdan eng maqbul variantni tanlaydi
  - Tez ishlaydi: odatda O(n log n) yoki O(n)
  - Global optimal yechimni HAR DOIM ham topa olmaydi
  - "Ochko‘z tanlov xususiyati" bajarilganda samarali ishlaydi

Dinamik dasturlash:
  - BARCHA mumkin bo‘lgan variantlarni ko‘rib chiqadi
  - Global optimal yechimni har doim topadi
  - Sekinroq: odatda vaqt va xotira bo‘yicha O(n × m)
  - Bir-biri bilan ustma-ust tushadigan quyi masalalarga ega masalalarda ishlaydi

Misol — [1, 4, 6] nominaldagi tangalar bilan 8 miqdorni qaytarish:
  Greedy 6+1+1 = 3 ta tangani tanlaydi (optimal emas!)
  DP esa 4+4 = 2 ta tangani topadi (optimal!)`,
}

export default descriptions
