
document.querySelectorAll('.hamburger').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const menu = btn.nextElementSibling || document.getElementById('sideMenu');
    menu.classList.toggle('open');
    menu.setAttribute('aria-hidden', !menu.classList.contains('open'));
  });
});

fetch('content.json').then(r=>r.json()).then(data=>{
  const workGrid = document.getElementById('workGrid');
  if(workGrid && data.work){
    data.work.forEach(item=>{
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<img src="${item.image}" alt="${item.title}"><div class="meta"><h3>${item.title}</h3><p>${item.subtitle}</p></div>`;
      workGrid.appendChild(card);
    });
  }
  const servicesList = document.getElementById('servicesList');
  if(servicesList && data.services){
    data.services.forEach(s=>{
      const div = document.createElement('div');
      div.className = 'service';
      div.innerHTML = `<h3>${s.title}</h3><p>${s.description}</p><p style="font-weight:700">${s.price}</p><ul>${(s.features||[]).map(f=>'<li>'+f+'</li>').join('')}</ul>`;
      servicesList.appendChild(div);
    });
  }
});
