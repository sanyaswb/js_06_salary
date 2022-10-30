## История
- Дин, получив зарплату в <b>n</b> талеров купил: <br> <b>x</b> килограмм отборной солонины, по цене <b>a</b> gtl/кг.<br><b>z</b> килограмм рыжего риса, по цене <b>b</b> gtl/кг.<br><b>z</b> литров выдержанного вина, по цене <b>c</b> gtl/кг.<br> Оставшиеся деньги Дин инвестировал в магические камни по курсу <b>k</b> gtl/камень. <br> Сколько талеров осталось у Дина?

## Задание
- Написать функцию <b>byModule</b>, которая возвращает число, оставшиеся деньги Дина. Медняки mtl (100 mtl = 1 gtl) считать не нужно.
- Функция принимает аргумент props. Объект в формате:
    <p style="display: flex; flex-direction: column;">{
        <span style="padding-left: 10px; color: #9775A7;">salary: <span style="color: #5C92BA">number</span><span style="color: #C46D2F">,</span></span>
        <span style="padding-left: 10px; color: #9775A7;">saltBeefBought: <span style="color: #5C92BA">number</span><span style="color: #C46D2F">,</span></span>
        <span style="padding-left: 10px; color: #9775A7;">saltBeefPrice: <span style="color: #5C92BA">number</span><span style="color: #C46D2F">,</span></span>
        <span style="padding-left: 10px; color: #9775A7;">redRiceBought: <span style="color: #5C92BA">number</span><span style="color: #C46D2F">,</span></span>
        <span style="padding-left: 10px; color: #9775A7;">redRicePrice: <span style="color: #5C92BA">number</span><span style="color: #C46D2F">,</span></span>
        <span style="padding-left: 10px; color: #9775A7;">oldVineBought: <span style="color: #5C92BA">number</span><span style="color: #C46D2F">,</span></span>
        <span style="padding-left: 10px; color: #9775A7;">oldVinePrice: <span style="color: #5C92BA">number</span><span style="color: #C46D2F">,</span></span>
        <span style="padding-left: 10px; color: #9775A7;">exchange: <span style="color: #5C92BA">number</span><span style="color: #C46D2F">,</span></span>
    </p>}
- Где:
  - salary: число, зарплата Дина.
  - saltBeefBought: число, сколько килограмм солонины купил Дин.
  - saltBeefPrice: число, сколько стоит килограмм солонины.
  - redRiceBought: число, сколько килограмм риса купил Дин.
  - redRicePrice: число, сколько стоит килограмм риса.
  - oldVineBought: число, сколько литров вина купил Дин.
  - oldVinePrice: число, сколько стоит литр вина.
- Задание необходимо выполнить в 2х вариантах.
  - Пошагово, создавая переменные. Создать ветку <b>variables</b> и запушить решение в неё.
  - В одну строку, не создавая переменных. Создать ветку <b>one-line</b> и запушить решение в неё.
  - Выполнить слияние (merge) <b>variables</b> в <b>master</b>.

## Примечание
- Рабочий файл: index.js.
- Функция должна вернуть число, а не вывести его в консоль.
- Использовать <b>camelCase</b> для названий переменных.

## Справка
- Про объекты и доступ к их свойствам:<br>https://learn.javascript.ru/object
- Про оператор return в функции:<br>https://www.youtube.com/watch?v=csfOLGycwLs