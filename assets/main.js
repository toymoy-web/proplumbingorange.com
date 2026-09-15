
(function(){
  var btn=document.querySelector('.hamburger');
  var drawer=document.querySelector('.mob-drawer');
  var overlay=document.querySelector('.drawer-overlay');
  var closeBtn=document.querySelector('.dclose');
  function openDrawer(){drawer.classList.add('open');overlay.classList.add('open');document.documentElement.style.overflow='hidden';}
  function closeDrawer(){drawer.classList.remove('open');overlay.classList.remove('open');document.documentElement.style.overflow='';}
  if(btn){btn.addEventListener('click',openDrawer);}
  if(closeBtn){closeBtn.addEventListener('click',closeDrawer);}
  if(overlay){overlay.addEventListener('click',closeDrawer);}
})();
