
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Huffman Coding

Huffman Coding is a greedy algorithm for lossless data compression. It assigns shorter binary codes to frequent characters and longer codes to rare ones, reducing the total number of bits needed to represent the data.

How it works:
1. Count how often each character appears
2. Create a leaf node per character and put them in a min-priority queue
3. Repeatedly remove the two lowest-frequency nodes and merge them under a new parent whose frequency is their sum
4. When one node remains, use it as the tree root
5. Assign codes by walking the tree: left = 0, right = 1

Why it works:
  No code is a prefix of another, so the encoded bitstream decodes unambiguously. The greedy merge guarantees an optimal prefix code for the given frequencies.

Time Complexity:
  Best:    O(n log n)
  Average: O(n log n)
  Worst:   O(n log n)

Space Complexity: O(n)

Properties:
  - Lossless: the original data is recovered exactly
  - Optimal among prefix codes for a known frequency distribution
  - Used in DEFLATE (ZIP, gzip, PNG), JPEG, and MP3

Invented by David A. Huffman in 1952 while he was a student at MIT, it remains a cornerstone of modern compression.`,

  ru: `Кодирование Хаффмана

Кодирование Хаффмана — это жадный алгоритм сжатия данных без потерь. Он назначает более короткие двоичные коды часто встречающимся символам и более длинные — редким, уменьшая общее количество битов, необходимых для представления данных.

Как работает алгоритм:
1. Подсчитать, сколько раз встречается каждый символ
2. Создать листовой узел для каждого символа и поместить их в очередь с минимальным приоритетом
3. Последовательно извлекать два узла с наименьшей частотой и объединять их под новым родительским узлом, частота которого равна сумме их частот
4. Когда останется один узел, использовать его в качестве корня дерева
5. Назначить коды, обходя дерево: влево = 0, вправо = 1

Почему это работает:
  Ни один код не является префиксом другого, поэтому закодированный поток битов можно однозначно декодировать. Жадное объединение гарантирует оптимальный префиксный код для заданного распределения частот.

Временная сложность:
  Лучшая:  O(n log n)
  Средняя: O(n log n)
  Худшая:  O(n log n)

Пространственная сложность: O(n)

Свойства:
  - Сжатие без потерь: исходные данные восстанавливаются в точности
  - Оптимален среди префиксных кодов для известного распределения частот
  - Используется в DEFLATE (ZIP, gzip, PNG), JPEG и MP3

Алгоритм был изобретён Дэвидом А. Хаффманом в 1952 году, когда он учился в Массачусетском технологическом институте (MIT). Он до сих пор остаётся одной из основ современных методов сжатия данных.`,

  uz: `Huffman kodlash

Huffman kodlash — ma’lumotlarni yo‘qotishsiz siqish uchun mo‘ljallangan ochko‘z algoritm. U ko‘p uchraydigan belgilarga qisqaroq, kam uchraydigan belgilarga esa uzunroq ikkilik kodlarni tayinlaydi. Natijada ma’lumotlarni ifodalash uchun kerak bo‘ladigan umumiy bitlar soni kamayadi.

Qanday ishlaydi:
1. Har bir belgi necha marta uchrashini hisoblash
2. Har bir belgi uchun bittadan barg tugun yaratish va ularni minimal ustuvorlik navbatiga joylashtirish
3. Eng kichik chastotaga ega ikkita tugunni navbatdan olib, chastotalari yig‘indisiga teng qiymatli yangi ota tugun ostida birlashtirish
4. Bitta tugun qolganda, uni daraxtning ildizi sifatida ishlatish
5. Daraxt bo‘ylab yurib kodlarni tayinlash: chapga = 0, o‘ngga = 1

Nima uchun ishlaydi:
  Hech bir kod boshqa kodning prefiksi bo‘lmaydi, shu sababli kodlangan bitlar oqimini bir ma’noda dekodlash mumkin. Ochko‘z birlashtirish berilgan chastotalar uchun optimal prefiks kodni kafolatlaydi.

Vaqt murakkabligi:
  Eng yaxshi:  O(n log n)
  O‘rtacha:     O(n log n)
  Eng yomon:    O(n log n)

Xotira murakkabligi: O(n)

Xususiyatlari:
  - Yo‘qotishsiz: asl ma’lumotlar aynan avvalgi holatida tiklanadi
  - Chastotalar taqsimoti ma’lum bo‘lganda prefiks kodlar orasida optimal hisoblanadi
  - DEFLATE (ZIP, gzip, PNG), JPEG va MP3 formatlarida qo‘llaniladi

Ushbu algoritm 1952-yilda MIT talabasi bo‘lgan Devid A. Huffman tomonidan ixtiro qilingan. U hozirgi zamonaviy ma’lumotlarni siqish texnologiyalarining asosiy usullaridan biri bo‘lib qolmoqda.`,
}

export default descriptions
