/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
*/
export function appendToBody(tag, content, count) {
  for (let i = 0; i < count; i++) {
    const element = document.createElement(tag);
    element.textContent = content;
    document.body.appendChild(element);
    // В некоторых тестовых средах лучше использовать document.documentElement.appendChild, 
    // но document.body.appendChild является стандартом для таких задач.
  }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента.
*/
export function generateTree(childrenCount, level, currentLevel = 1) {
  const div = document.createElement('div');
  div.className = `item_${currentLevel}`;

  // Если текущий уровень меньше заданной глубины, создаем детей
  if (currentLevel < level) {
    for (let i = 0; i < childrenCount; i++) {
      const child = generateTree(childrenCount, level, currentLevel + 1);
      div.appendChild(child);
    }
  }

  return div;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
*/
export function replaceNodes() {
  // 1. Создаем дерево
  const root = generateTree(2, 3);

  // 2. Находим все узлы с классом item_2
  const nodesToReplace = root.querySelectorAll('.item_2');

  // 3. Заменяем каждый найденный DIV на SECTION
  nodesToReplace.forEach(div => {
    const section = document.createElement('section');
    section.className = div.className; // Сохраняем класс 'item_2'

    // Переносим всех детей из DIV в SECTION
    while (div.firstChild) {
      section.appendChild(div.firstChild);
    }

    // Заменяем сам узел DIV на SECTION в дереве
    if (div.parentNode) {
      div.parentNode.replaceChild(section, div);
    }
  });

  return root;
}
