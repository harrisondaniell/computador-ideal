const link = document.createElement('link')
const hrefs = ['../../index.html', '../montagem/index.html', '../assistente/index.html', '../perifericos/index.html', '../processadores/index.html', '../placa-mãe/index.html', '../periféricos/index.html']
link.rel = 'stylesheet'
link.href = '../../styles/menu.css'
document.head.appendChild(link)
fetch('../menu/menu.html')
  .then(response => response.text())
  .then(html => {
    const div = document.createElement('div');
    div.innerHTML = html
    const a = div.querySelectorAll('a').forEach((a, index) => a.href = hrefs[index])
    div.innerHTML = div.querySelector('header').innerHTML
    document.getElementById('header').innerHTML = div.innerHTML
  })