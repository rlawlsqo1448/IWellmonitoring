// ==== Drawer Menu Controller ====
(function(){
  const menuBtn = document.querySelector('header .header-left img[alt="Menu"]'); // 햄버거 아이콘
  const ov = document.getElementById('drawerOv');
  const drawer = document.getElementById('drawer');
  const closeBtn = document.getElementById('drawerClose');
  const links = document.querySelectorAll('#menuList .menu-link');

  if (!drawer || !ov) return; // 페이지에 드로어가 없으면 스킵

  function openMenu(){
    document.body.classList.add('menu-open');
    markActive();
    // 포커스 이동(접근성)
    closeBtn && closeBtn.focus();
  }
  function closeMenu(){
    document.body.classList.remove('menu-open');
  }
  function markActive(){
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    links.forEach(a=>{
      const isActive = a.dataset.page?.toLowerCase() === path;
      a.classList.toggle('active', isActive);
      const badge = a.querySelector('.badge-current');
      if (badge) badge.hidden = !isActive;
    });
  }

  // 이벤트 바인딩
  menuBtn && (menuBtn.style.cursor='pointer', menuBtn.addEventListener('click', openMenu));
  ov.addEventListener('click', closeMenu);
  closeBtn && closeBtn.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeMenu(); });

  // 페이지 로드 시 현재 페이지 표시
  markActive();
})();
