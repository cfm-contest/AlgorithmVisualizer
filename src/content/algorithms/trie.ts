
import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Trie (Prefix Tree)

A Trie stores strings by sharing their common prefixes. Each edge is a character, and the path from the root to a node spells out a prefix. Lookups cost O(L) where L is the length of the word — independent of how many words are stored.

How it works:
1. Each node holds a map of children (character → node) and an isEnd flag
2. Inserting walks the word character by character, creating nodes only when missing
3. isEnd marks where a real word ends, so "ca" can be a path without being a word

Why not a hash table:
  A hash table also looks up an exact key in O(L),
  but it cannot answer "which words start with ca?"
  without scanning every key. A trie walks 2 nodes
  down and the whole subtree is the answer.

Time Complexity:
  Best:    O(1) when the first character does not match
  Average: O(L) for insert, search and startsWith
  Worst:   O(L) — never depends on the number of words

Space Complexity: O(n × L) — its main weakness. Radix trees compress single-child chains to reduce it.

Applications: autocomplete, spell checkers, IP routing tables (longest prefix match), T9 keyboards, word games, editor symbol completion`,

  ru: `Trie (Префиксное дерево)

Trie — это структура данных для хранения строк с использованием общих префиксов. Каждое ребро представляет собой символ, а путь от корня до узла образует префикс. Поиск выполняется за O(L), где L — длина слова, независимо от количества сохранённых слов.

Как это работает:
1. Каждый узел содержит карту дочерних узлов (символ → узел) и флаг isEnd
2. При вставке слово обходится посимвольно, а новые узлы создаются только при необходимости
3. isEnd обозначает конец настоящего слова, поэтому "ca" может быть путём в дереве, но не отдельным словом

Почему не хеш-таблица:
  Хеш-таблица также ищет точный ключ за O(L),
  но не может ответить на вопрос «какие слова начинаются с ca?»
  без перебора всех ключей. Trie проходит всего 2 узла,
  после чего всё поддерево содержит нужные слова.

Временная сложность:
  Лучшая:    O(1), если первый символ не совпадает
  Средняя:   O(L) для insert, search и startsWith
  Худшая:    O(L) — никогда не зависит от количества слов

Пространственная сложность: O(n × L) — главный недостаток структуры. Radix-деревья уменьшают расход памяти, сжимая цепочки узлов с одним потомком.

Применение: автодополнение, проверка орфографии, таблицы IP-маршрутизации (поиск самого длинного совпадающего префикса), клавиатуры T9, словесные игры, автодополнение символов в редакторах`,

  uz: `Trie (Prefikslar daraxti)

Trie — umumiy prefikslardan foydalanib, satrlarni saqlaydigan ma'lumotlar tuzilmasi. Har bir qirra bitta belgini ifodalaydi, ildizdan tugungacha bo'lgan yo'l esa prefiksni hosil qiladi. Qidiruv O(L) vaqt oladi, bu yerda L — so'z uzunligi. Bu murakkablik saqlangan so'zlar soniga bog'liq emas.

Qanday ishlaydi:
1. Har bir tugun farzand tugunlar xaritasini (belgi → tugun) va isEnd bayrog'ini saqlaydi
2. So'zni qo'shishda belgilar ketma-ket ko'rib chiqiladi va faqat mavjud bo'lmagan tugunlar yaratiladi
3. isEnd haqiqiy so'z qayerda tugashini belgilaydi. Shu sababli "ca" daraxtdagi yo'l bo'lishi mumkin, lekin alohida so'z bo'lmasligi ham mumkin

Nima uchun hash jadvali emas:
  Hash jadvali ham aniq kalitni O(L) vaqtda qidiradi,
  ammo barcha kalitlarni tekshirmasdan
  "ca bilan boshlanadigan so'zlar qaysilar?" degan savolga
  javob bera olmaydi. Trie atigi 2 ta tugun pastga yuradi
  va butun quyi daraxt kerakli natijani beradi.

Vaqt murakkabligi:
  Eng yaxshi:   O(1), agar birinchi belgi mos kelmasa
  O'rtacha:     insert, search va startsWith uchun O(L)
  Eng yomon:    O(L) — so'zlar soniga hech qachon bog'liq emas

Xotira murakkabligi: O(n × L) — uning asosiy kamchiligi. Radix daraxtlari bitta farzandli tugunlar zanjirini siqish orqali xotira sarfini kamaytiradi.

Qo'llanilishi: avtomatik to'ldirish, imlo tekshirgichlari, IP marshrutlash jadvallari (eng uzun mos prefiksni topish), T9 klaviaturalari, so'z o'yinlari, kod muharrirlarida belgilarni avtomatik to'ldirish`,
}

export default descriptions
