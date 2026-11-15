
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Run-Length Encoding

Run-Length Encoding (RLE) is a simple lossless compression algorithm. It replaces consecutive repeats of the same symbol with a single (symbol, count) pair.

How it works:
1. Scan the input from left to right
2. When a new character appears, start a run
3. Keep counting while the next character matches
4. Emit (character, count) and continue after the run

Why it works:
  Long runs of identical values waste space if stored naively. Encoding the length once captures that redundancy. Decoding is the inverse: expand each pair into count copies of the character.

Time Complexity:
  Best:    O(n)
  Average: O(n)
  Worst:    O(n)

Space Complexity: O(k) where k is the number of runs

Properties:
  - Lossless when counts and symbols are stored losslessly
  - Excellent for sparse bitmaps, icons, and simple graphics (BMP RLE, PCX, fax)
  - Can expand data with no long runs (e.g. alternating ABABAB)
  - Often used as a first stage before Huffman or arithmetic coding

RLE is one of the oldest compression ideas still taught — easy to implement, easy to visualize, and a building block inside larger formats.`,
  ru: `Кодирование длин серий (Run-Length Encoding)

Run-Length Encoding (RLE) — это простой алгоритм сжатия данных без потерь. Он заменяет последовательные повторения одного и того же символа одной парой (символ, количество).

Как работает алгоритм:
1. Просматривать входные данные слева направо
2. При появлении нового символа начинать новую серию
3. Продолжать подсчёт, пока следующий символ совпадает с текущим
4. Записать пару (символ, количество) и продолжить обработку после серии

Почему это работает:
  Длинные последовательности одинаковых значений занимают лишнее место при обычном хранении. Однократное кодирование длины серии позволяет устранить эту избыточность. Декодирование выполняется в обратном порядке: каждая пара преобразуется в указанное количество копий символа.

Временная сложность:
  Лучший случай:  O(n)
  Средний случай: O(n)
  Худший случай:  O(n)

Пространственная сложность: O(k), где k — количество серий

Свойства:
  - Сжатие без потерь, если количества и символы сохраняются без потерь
  - Отлично подходит для разреженных растровых изображений, значков и простой графики (BMP RLE, PCX, факсимильные изображения)
  - Может увеличивать размер данных, если в них нет длинных серий (например, при чередовании ABABAB)
  - Часто используется как первый этап перед кодированием Хаффмана или арифметическим кодированием

RLE — одна из старейших идей сжатия данных, которую до сих пор изучают: её легко реализовать и визуализировать, а также она служит строительным блоком более сложных форматов.`,
  uz: `Ketma-ket takrorlanish uzunligini kodlash (Run-Length Encoding)

Run-Length Encoding (RLE) — bu ma’lumotlarni yo‘qotishsiz siqishning oddiy algoritmi. U bir xil belgining ketma-ket takrorlanishlarini bitta (belgi, soni) juftligi bilan almashtiradi.

Algoritm qanday ishlaydi:
1. Kiruvchi ma’lumotlarni chapdan o‘ngga qarab ko‘rib chiqish
2. Yangi belgi paydo bo‘lganda, yangi ketma-ketlikni boshlash
3. Keyingi belgilar bir xil ekan, ularni sanashni davom ettirish
4. (Belgi, soni) juftligini chiqarish va ketma-ketlikdan keyingi qismni qayta ishlash

Nima uchun bu ishlaydi:
  Bir xil qiymatlarning uzun ketma-ketliklarini oddiy usulda saqlash ko‘p joy egallaydi. Ularning uzunligini bir marta kodlash ortiqcha takrorlanishni bartaraf etadi. Dekodlash esa buning teskarisi: har bir juftlik belgi nusxalarining ko‘rsatilgan soniga kengaytiriladi.

Vaqt murakkabligi:
  Eng yaxshi holat: O(n)
  O‘rtacha holat:   O(n)
  Eng yomon holat:  O(n)

Xotira murakkabligi: O(k), bu yerda k — ketma-ketliklar soni

Xususiyatlari:
  - Belgilar va ularning soni yo‘qotishsiz saqlansa, siqish ham yo‘qotishsiz bo‘ladi
  - Siyrak bitmaplar, ikonlar va oddiy grafikalar uchun juda samarali (BMP RLE, PCX, faks tasvirlari)
  - Uzun takroriy ketma-ketliklar bo‘lmagan ma’lumotlar hajmini oshirishi mumkin (masalan, ABABAB kabi navbatma-navbat keladigan belgilar)
  - Ko‘pincha Huffman yoki arifmetik kodlashdan oldingi birinchi bosqich sifatida ishlatiladi

RLE — hozirgacha o‘rgatiladigan eng qadimgi ma’lumotlarni siqish usullaridan biri. Uni amalga oshirish va vizualizatsiya qilish oson, shuningdek, murakkabroq formatlarning tarkibiy qismi hisoblanadi.`,
}

export default descriptions
