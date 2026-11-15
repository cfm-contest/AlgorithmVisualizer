
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Recursion

Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem. It's one of the most powerful concepts in computer science.

Every recursive function needs two parts:
  1. Base case — the condition that stops the recursion
  2. Recursive case — the function calls itself with a smaller input

How the call stack works:
  - Each function call is pushed onto the call stack
  - When a base case is reached, results propagate back up
  - The stack unwinds as each call returns its result

Common patterns:
  - Factorial: n! = n × (n-1)!
  - Fibonacci: F(n) = F(n-1) + F(n-2)
  - Tree traversals: process node, then recurse on children
  - Divide and conquer: split problem, solve halves, combine

Pitfalls:
  - Stack overflow: too many recursive calls exhaust memory
  - Redundant computation: naive recursion can be exponential
  - Solution: use memoization or convert to iteration

Recursive algorithms in this visualizer:
  Quick Sort, Merge Sort, DFS, N-Queens, Sudoku Solver, Tower of Hanoi`,
  ru: `Рекурсия

Рекурсия — это техника программирования, при которой функция вызывает саму себя, чтобы решить меньшие варианты той же задачи. Это одна из наиболее важных концепций в информатике.

Каждая рекурсивная функция состоит из двух частей:
  1. Базовый случай — условие, которое останавливает рекурсию
  2. Рекурсивный случай — функция вызывает саму себя с меньшими входными данными

Как работает стек вызовов:
  - Каждый вызов функции помещается в стек вызовов
  - При достижении базового случая результаты передаются обратно вверх по цепочке вызовов
  - Стек постепенно освобождается, когда каждый вызов возвращает свой результат

Распространённые шаблоны:
  - Факториал: n! = n × (n-1)!
  - Числа Фибоначчи: F(n) = F(n-1) + F(n-2)
  - Обход деревьев: обработать узел, затем рекурсивно обработать его дочерние узлы
  - Разделяй и властвуй: разделить задачу, решить отдельные части и объединить результаты

Возможные проблемы:
  - Переполнение стека: слишком большое количество рекурсивных вызовов исчерпывает память
  - Избыточные вычисления: наивная рекурсия может иметь экспоненциальную сложность
  - Решение: использовать мемоизацию или заменить рекурсию итерацией

Рекурсивные алгоритмы в этом визуализаторе:
  Quick Sort, Merge Sort, DFS, N-Queens, Sudoku Solver, Ханойская башня`,
  uz: `Rekursiya

Rekursiya — bu funksiya bir xil masalaning kichikroq qismlarini yechish uchun o‘zini o‘zi chaqiradigan dasturlash usuli. Bu kompyuter fanidagi eng muhim tushunchalardan biridir.

Har bir rekursiv funksiya ikki qismdan iborat:
  1. Bazaviy holat — rekursiyani to‘xtatadigan shart
  2. Rekursiv holat — funksiya kichikroq kirish ma’lumotlari bilan o‘zini o‘zi chaqiradi

Chaqiruvlar steki qanday ishlaydi:
  - Har bir funksiya chaqiruvi chaqiruvlar stekiga joylanadi
  - Bazaviy holatga yetilganda natijalar chaqiruvlar zanjiri bo‘ylab yuqoriga qaytariladi
  - Har bir chaqiruv o‘z natijasini qaytargani sari stek bo‘shab boradi

Keng tarqalgan usullar:
  - Faktorial: n! = n × (n-1)!
  - Fibonachchi sonlari: F(n) = F(n-1) + F(n-2)
  - Daraxt bo‘ylab yurish: tugunni qayta ishlash, so‘ng uning farzand tugunlarini rekursiv qayta ishlash
  - Bo‘l va hukmronlik qil: masalani qismlarga ajratish, ularni alohida yechish va natijalarni birlashtirish

Ehtimoliy muammolar:
  - Stekning to‘lib ketishi: juda ko‘p rekursiv chaqiruvlar xotirani tugatishi mumkin
  - Ortiqcha hisob-kitoblar: sodda rekursiya eksponensial murakkablikka ega bo‘lishi mumkin
  - Yechim: memoizatsiyadan foydalanish yoki rekursiyani iteratsiyaga almashtirish

Ushbu vizualizatordagi rekursiv algoritmlar:
  Quick Sort, Merge Sort, DFS, N-Queens, Sudoku Solver, Xanoy minoralari`,
}

export default descriptions
