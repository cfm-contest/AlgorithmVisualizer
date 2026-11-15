
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Hash Table

A Hash Table maps keys to values using a hash function. It provides near-constant time O(1) for insert, lookup, and delete operations.

How it works:
1. A hash function converts the key into an array index
2. The value is stored at that index (bucket)
3. If two keys hash to the same index → collision

Collision handling (chaining):
  Each bucket stores a list of entries.
  Multiple keys can share the same bucket.

Time Complexity:
  Average: O(1) for set, get, delete
  Worst:   O(n) when all keys collide

Space Complexity: O(n)

Applications: caches, databases, symbol tables, counting frequencies, deduplication`,

  ru: `Хеш-таблица

Хеш-таблица сопоставляет ключи со значениями с помощью хеш-функции. Она обеспечивает почти постоянное время O(1) для операций вставки, поиска и удаления.

Как это работает:
1. Хеш-функция преобразует ключ в индекс массива
2. Значение сохраняется по этому индексу (в корзине)
3. Если два ключа получают одинаковый индекс → возникает коллизия

Обработка коллизий (метод цепочек):
  Каждая корзина хранит список записей.
  Несколько ключей могут находиться в одной корзине.

Временная сложность:
  Средняя: O(1) для set, get, delete
  Худшая:  O(n), если все ключи вызывают коллизии

Пространственная сложность: O(n)

Применение: кэши, базы данных, таблицы символов, подсчёт частот, удаление дубликатов`,

  uz: `Xesh-jadval (Hash Table)

Xesh-jadval xesh-funksiya yordamida kalitlarni qiymatlarga bog‘laydi. U qo‘shish, qidirish va o‘chirish amallarini deyarli doimiy O(1) vaqtda bajarish imkonini beradi.

Qanday ishlaydi:
1. Xesh-funksiya kalitni massiv indeksiga aylantiradi
2. Qiymat shu indeksda (bucket — katakda) saqlanadi
3. Agar ikkita kalit bir xil indeksga aylansa → kolliziya yuzaga keladi

Kolliziyalarni hal qilish (zanjirlash usuli):
  Har bir katak yozuvlar ro‘yxatini saqlaydi.
  Bir nechta kalit bitta katakda joylashishi mumkin.

Vaqt murakkabligi:
  O‘rtacha: O(1) — set, get, delete amallari uchun
  Eng yomon holatda: O(n) — barcha kalitlar kolliziyaga uchraganda

Xotira murakkabligi: O(n)

Qo‘llanilishi: keshlar, ma’lumotlar bazalari, simvollar jadvallari, chastotalarni hisoblash, takroriy elementlarni olib tashlash`,
}

export default descriptions
