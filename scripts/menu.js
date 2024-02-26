const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = '../../styles/menu.css'
document.head.appendChild(link)
fetch('../menu/menu.html')
  .then(response => response.text())
  .then(html => {
    const div = document.createElement('div');
    div.innerHTML = html
    div.innerHTML = div.querySelector('header').innerHTML
    document.getElementById('header').innerHTML = div.innerHTML
  })