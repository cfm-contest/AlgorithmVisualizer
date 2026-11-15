
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Tower of Hanoi

The Tower of Hanoi is a classic recursive puzzle. Move all disks from the source peg to the target peg, one at a time, never placing a larger disk on top of a smaller one.

How it works (Recursive):
1. Move the top n-1 disks from source to auxiliary peg
2. Move the largest disk from source to target peg
3. Move the n-1 disks from auxiliary to target peg

Time Complexity: O(2^n - 1) — exactly 2^n - 1 moves
Space Complexity: O(n) — recursive call stack

Properties:
  - Minimum moves required: 2^n - 1
  - Classic example of divide and conquer
  - Demonstrates the power of recursion

The puzzle was invented by mathematician Édouard Lucas in 1883. Legend says monks in a temple are moving 64 golden disks — completing the puzzle would mark the end of the world (requiring 18,446,744,073,709,551,615 moves).`,

  ru: `Ханойская башня

Ханойская башня — это классическая рекурсивная головоломка. Необходимо переместить все диски с исходного стержня на целевой, по одному за раз, никогда не помещая больший диск поверх меньшего.

Как это работает (рекурсия):
1. Переместить верхние n-1 дисков с исходного стержня на вспомогательный
2. Переместить самый большой диск с исходного стержня на целевой
3. Переместить n-1 дисков со вспомогательного стержня на целевой

Временная сложность: O(2^n - 1) — ровно 2^n - 1 перемещений
Пространственная сложность: O(n) — стек рекурсивных вызовов

Свойства:
  - Минимальное количество перемещений: 2^n - 1
  - Классический пример метода «разделяй и властвуй»
  - Демонстрирует возможности рекурсии

Головоломка была придумана математиком Эдуардом Люка в 1883 году. Согласно легенде, монахи в храме перемещают 64 золотых диска — завершение этой задачи ознаменует конец света (для этого потребуется 18 446 744 073 709 551 615 перемещений).`,

  uz: `Xanoy minoralari

Xanoy minoralari — bu klassik rekursiv boshqotirma. Barcha disklarni boshlang'ich ustundan maqsadli ustunga bittadan ko'chirish kerak. Bunda hech qachon katta diskni kichik diskning ustiga qo'yish mumkin emas.

Qanday ishlaydi (Rekursiya):
1. Yuqoridagi n-1 ta diskni boshlang'ich ustundan yordamchi ustunga ko'chirish
2. Eng katta diskni boshlang'ich ustundan maqsadli ustunga ko'chirish
3. n-1 ta diskni yordamchi ustundan maqsadli ustunga ko'chirish

Vaqt murakkabligi: O(2^n - 1) — jami 2^n - 1 ta ko'chirish
Xotira murakkabligi: O(n) — rekursiv chaqiruvlar steki

Xususiyatlari:
  - Minimal ko'chirishlar soni: 2^n - 1
  - "Bo'lib tashla va hukmronlik qil" usulining klassik namunasi
  - Rekursiyaning imkoniyatlarini namoyish etadi

Ushbu boshqotirma matematik Édouard Lucas tomonidan 1883-yilda ixtiro qilingan. Rivoyatlarga ko'ra, ibodatxonadagi rohiblar 64 ta oltin diskni ko'chirishmoqda — boshqotirma yakunlanganda dunyoning oxiri keladi (buning uchun 18 446 744 073 709 551 615 ta ko'chirish talab etiladi).`,
}

export default descriptions
