
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `0/1 Knapsack Problem

The 0/1 Knapsack Problem: given items with weights and values, and a maximum capacity, find the maximum value that can be carried without exceeding the capacity. Each item can be taken at most once.

How it works (Bottom-Up DP):
1. Create a 2D table: dp[i][w] = max value using first i items with capacity w
2. For each item i and capacity w:
   - If item doesn't fit: dp[i][w] = dp[i-1][w]
   - If item fits: dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i])
3. dp[n][W] contains the optimal value

Time Complexity: O(n × W) — pseudo-polynomial
Space Complexity: O(n × W) — can be optimized to O(W)

Applications:
  - Resource allocation
  - Budget planning
  - Cargo loading
  - Cryptography

The Knapsack Problem is one of the fundamental problems in combinatorial optimization and is NP-hard in general.`,
  ru: `Задача о рюкзаке 0/1 (0/1 Knapsack Problem)

Задача о рюкзаке 0/1: даны предметы с определёнными весами и ценностями, а также максимальная вместимость рюкзака. Необходимо найти максимальную суммарную ценность предметов, не превышая вместимость. Каждый предмет можно взять не более одного раза.

Как работает (динамическое программирование снизу вверх):
1. Создаётся двумерная таблица: dp[i][w] = максимальная ценность при использовании первых i предметов и вместимости w
2. Для каждого предмета i и вместимости w:
   - Если предмет не помещается: dp[i][w] = dp[i-1][w]
   - Если предмет помещается: dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i])
3. dp[n][W] содержит оптимальное значение

Временная сложность: O(n × W) — псевдополиномиальная
Пространственная сложность: O(n × W) — можно оптимизировать до O(W)

Применение:
  - Распределение ресурсов
  - Планирование бюджета
  - Загрузка грузов
  - Криптография

Задача о рюкзаке — одна из фундаментальных задач комбинаторной оптимизации и в общем случае является NP-трудной.`,
  uz: `0/1 Ryukzak muammosi (0/1 Knapsack Problem)

0/1 Ryukzak muammosi: og‘irligi va qiymati berilgan buyumlar hamda ryukzakning maksimal sig‘imi mavjud. Sig‘imdan oshmagan holda olib ketish mumkin bo‘lgan buyumlarning eng katta umumiy qiymatini topish kerak. Har bir buyumni ko‘pi bilan bir marta olish mumkin.

Ishlash tartibi (Bottom-Up DP):
1. Ikki o‘lchovli jadval yaratiladi: dp[i][w] = dastlabki i ta buyum va w sig‘imdan foydalangandagi maksimal qiymat
2. Har bir i buyum va w sig‘im uchun:
   - Agar buyum sig‘masa: dp[i][w] = dp[i-1][w]
   - Agar buyum sig‘sa: dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i])
3. dp[n][W] optimal qiymatni o‘z ichiga oladi

Vaqt murakkabligi: O(n × W) — psevdopolinomial
Xotira murakkabligi: O(n × W) — O(W) gacha optimallashtirish mumkin

Qo‘llanilishi:
  - Resurslarni taqsimlash
  - Byudjetni rejalashtirish
  - Yuklarni joylashtirish
  - Kriptografiya

Ryukzak muammosi kombinator optimallashtirishning asosiy muammolaridan biri bo‘lib, umumiy holda NP-qiyin hisoblanadi.`,
}

export default descriptions
