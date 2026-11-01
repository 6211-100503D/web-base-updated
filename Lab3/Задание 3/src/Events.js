export function createButton() {
  const btn = document.createElement('button');
  btn.textContent = 'Удали меня';
  btn.addEventListener('click', () => {
    btn.remove();
  });
  document.body.appendChild(btn);
}

export function createArrList(arr) {
  const ul = document.createElement('ul');
  arr.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    li.addEventListener('mouseover', () => {
      li.setAttribute('title', text);
    });
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}

export function createLink() {
  const a = document.createElement('a');
  a.href = 'https://tensor.ru/';
  a.textContent = 'tensor';
  a.dataset.firstClick = 'true';

  a.addEventListener('click', (e) => {
    if (a.dataset.firstClick === 'true') {
      e.preventDefault();
      a.textContent += ' ' + a.href;
      a.dataset.firstClick = 'false';
    }
  });

  document.body.appendChild(a);
}

export function createList() {
  const ul = document.createElement('ul');
  const initialLi = document.createElement('li');
  initialLi.textContent = 'Пункт';
  ul.appendChild(initialLi);
  document.body.appendChild(ul);

  const btn = document.createElement('button');
  btn.textContent = 'Добавить пункт';
  document.body.appendChild(btn);

  ul.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (li && li.parentNode === ul) {
      li.textContent += '!';
    }
  });

  btn.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.textContent = 'Пункт';
    ul.appendChild(newLi);
  });
}