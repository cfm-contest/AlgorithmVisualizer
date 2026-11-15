
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `LRU Cache

An LRU (Least Recently Used) Cache holds a fixed number of entries and evicts the one untouched for the longest time when it runs out of room. The challenge is doing both get and put in O(1).

Why one structure is not enough:
1. A hash map alone gives O(1) access but cannot tell which entry is oldest
2. An ordered list alone knows the oldest but takes O(n) to find a key
3. So combine them: the map answers "where", the list answers "when"

The design:
  Hash map:            key → pointer to a node, O(1)
  Doubly linked list:  head = most recent, tail = next to evict

Two details that are easy to miss:
  Each node stores its own key. Eviction reaches the node
  through the list tail, and needs the key to delete the
  map entry — otherwise the map keeps an orphan.

  The list must be doubly linked. Moving a node to the
  front means unlinking it from the middle, which needs
  its prev pointer. With a singly linked list it is O(n).

Time Complexity:
  Best:    O(1) for get and put
  Average: O(1) — hash lookup plus constant pointer rewiring
  Worst:   O(n) only if every key collides in the hash map

Space Complexity: O(capacity)

Applications: database and web caches, Redis eviction (sampled approximation), CPU cache replacement, browser back/forward stacks, memoization with bounded memory`,
  ru: `Кэш LRU (Least Recently Used)

Кэш LRU хранит фиксированное количество записей и при заполнении удаляет ту запись, к которой дольше всего не обращались. Основная задача — обеспечить выполнение операций get и put за O(1).

Почему одной структуры недостаточно:
1. Одна хеш-таблица обеспечивает доступ за O(1), но не позволяет определить, какая запись самая старая
2. Один упорядоченный список позволяет определить самую старую запись, но поиск ключа занимает O(n)
3. Поэтому их объединяют: хеш-таблица отвечает на вопрос «где», а список — «когда»

Структура:
  Хеш-таблица:          key → указатель на узел, O(1)
  Двусвязный список:    head = самый недавно использованный, tail = следующий на удаление

Два важных нюанса:
  Каждый узел хранит собственный ключ. При удалении узел
  извлекается из хвоста списка, а его ключ нужен, чтобы
  удалить соответствующую запись из хеш-таблицы — иначе
  в таблице останется ссылка на несуществующий элемент.

  Список должен быть двусвязным. Перемещение узла в начало
  требует отсоединить его от текущей позиции, для чего
  необходим указатель prev. В односвязном списке эта
  операция заняла бы O(n).

Временная сложность:
  Лучшая:     O(1) для get и put
  Средняя:    O(1) — поиск в хеш-таблице и постоянное количество операций с указателями
  Худшая:     O(n), только если все ключи имеют одинаковый хеш

Пространственная сложность: O(capacity)

Применение: кэширование в базах данных и веб-приложениях, вытеснение записей в Redis (приближённый алгоритм на основе выборки), замена данных в кэше процессора, история переходов назад и вперёд в браузере, мемоизация с ограниченным объёмом памяти`,
  uz: `LRU keshi (Least Recently Used)

LRU keshi belgilangan miqdordagi yozuvlarni saqlaydi. Joy tugaganda, eng uzoq vaqt davomida foydalanilmagan yozuvni o‘chiradi. Asosiy vazifa — get va put amallarini O(1) vaqt ichida bajarish.

Nima uchun bitta ma’lumotlar tuzilmasi yetarli emas:
1. Faqat xesh-jadval O(1) vaqt ichida murojaat qilish imkonini beradi, ammo qaysi yozuv eng eski ekanini aniqlay olmaydi
2. Faqat tartiblangan ro‘yxat eng eski yozuvni aniqlaydi, ammo kalitni qidirish O(n) vaqt oladi
3. Shu sababli ular birlashtiriladi: xesh-jadval «qayerda?», ro‘yxat esa «qachon?» degan savolga javob beradi

Tuzilishi:
  Xesh-jadval:          key → tugunga ko‘rsatkich, O(1)
  Ikki tomonlama bog‘langan ro‘yxat: head = eng so‘nggi ishlatilgan, tail = keyingi o‘chiriladigan tugun

E’tibordan chetda qolishi mumkin bo‘lgan ikki jihat:
  Har bir tugun o‘z kalitini saqlaydi. O‘chirish jarayonida
  tugun ro‘yxatning oxiridan olinadi va xesh-jadvaldagi
  yozuvni o‘chirish uchun uning kaliti kerak bo‘ladi.
  Aks holda, jadvalda mavjud bo‘lmagan tugun yozuvi qoladi.

  Ro‘yxat ikki tomonlama bog‘langan bo‘lishi kerak. Tugunni
  boshiga ko‘chirish uchun uni o‘rtadagi joyidan uzish kerak,
  buning uchun esa prev ko‘rsatkichi zarur. Bir tomonlama
  bog‘langan ro‘yxatda bu amal O(n) vaqt oladi.

Vaqt murakkabligi:
  Eng yaxshi: O(1) — get va put amallari uchun
  O‘rtacha:   O(1) — xesh-jadvaldan qidirish va ko‘rsatkichlarni doimiy sondagi qayta bog‘lash amallari
  Eng yomon:  O(n) — faqat barcha kalitlar xesh-jadvalda bir xil joyga to‘qnashganda

Xotira murakkabligi: O(capacity)

Qo‘llanilishi: ma’lumotlar bazasi va veb-keshlar, Redis tizimida yozuvlarni o‘chirish (tanlab olishga asoslangan taxminiy usul), protsessor keshidagi ma’lumotlarni almashtirish, brauzerning oldinga va orqaga o‘tish tarixi, cheklangan xotira bilan memoizatsiya`,
}

export default descriptions
