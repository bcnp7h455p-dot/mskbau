(function(){
  function renderLofts(){
    var grid = document.getElementById('mb2-loftsGrid');
    if(!grid){ setTimeout(renderLofts, 500); return; }
    var lofts = [
      {name:'Cactus',area:'140 м²',cap:'80 фуршет / 50 банкет / 70 театр',metro:'Бауманская',desc:'Два этажа и 140 м². Кирпич, тёмное дерево, бетон. Лаундж-зона на втором этаже.',img:'https://bcnp7h455p-dot.github.io/mskbau/cactus/1.png',images:['https://bcnp7h455p-dot.github.io/mskbau/cactus/1.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/2.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/3.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/4.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/5.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/6.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/7.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/8.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/9.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/10.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/12.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/13.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/14.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/15.png'],price:'от 2 400 ₽/час'},
      {name:'Memphis',area:'135 м²',cap:'60 фуршет / 30 банкет / 50 театр',metro:'Бауманская',desc:'Итальянский стиль Мемфис. Геометрические формы, яркие цвета. Первый этаж, отдельный вход.',img:'https://static.tildacdn.com/tild3465-3266-4335-a131-353663353938/_KSV4386_hdr.jpg',price:'от 2 400 ₽/час'},
      {name:'Mira',area:'110 м²',cap:'50 фуршет / 40 банкет / 30 театр',metro:'Бауманская',desc:'Взрыв цвета! Два этажа, неоновая подсветка, умный свет RGB.',img:'https://static.tildacdn.com/tild3937-6530-4132-b263-353034666530/_KSV5768hdr.jpg',price:'от 2 200 ₽/час'},
      {name:'Steklo',area:'110 м²',cap:'50 фуршет / 25 банкет / 20 театр',metro:'Бауманская',desc:'Аристократичный лофт. Классика XIX и индустриальный XX век.',img:'https://static.tildacdn.com/tild3239-3036-4062-a663-356637633362/1.jpg',price:'от 1 900 ₽/час'},
      {name:'Simple',area:'130 м²',cap:'60 фуршет / 38 банкет / 30 театр',metro:'Бауманская',desc:'Белый лофт с живым камином, собственной верандой и хрустальными люстрами.',img:'https://static.tildacdn.com/tild6165-3630-4138-b638-666131623263/_2-2.jpg',price:'от 2 400 ₽/час'},
      {name:'Tvoya Vina',area:'60 м²',cap:'30 фуршет / 18 банкет / 20 театр',metro:'Бауманская',desc:'Изящный камерный дизайн для небольших компаний до 30 человек.',img:'https://static.tildacdn.com/tild3530-3932-4531-b762-353666393834/photo.jpg',price:'от 1 700 ₽/час'},
      {name:'Budda',area:'35 м²',cap:'до 20 гостей',metro:'Бауманская',desc:'Концептуальный лофт с верандой для компаний до 20 человек.',img:'https://static.tildacdn.com/tild3161-3631-4963-a565-323333393064/upldrCp3UXjpg900x600.jpg',price:'уточняется'},
      {name:'Sava',area:'30 м²',cap:'до 20 гостей',metro:'Бауманская',desc:'Уютный лофт с верандой для компаний до 15-20 человек.',img:'https://static.tildacdn.com/tild3164-6137-4864-b836-373434353932/upldKtrE0Hjpg900x600.jpg',price:'уточняется'}
    ];
    grid.innerHTML = lofts.map(function(l){
      return '<div class="loft-card">'
        +(l.images ? l.images.map(function(src,i){ return '<img class="lc-img lc-img-'+i+'" src="'+src+'" alt="'+l.name+'" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity 0.5s ease;opacity:'+(i===0?1:0)+'" data-idx="'+i+'"/>'; }).join('') : '<img class="lc-img" src="'+l.img+'" alt="'+l.name+'" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 0.8s ease"/>')+(l.images ? '<div class="lc-dots">'+l.images.map(function(_,i){ return '<span class="lc-dot'+(i===0?' active':'')+'" data-idx="'+i+'"></span>'; }).join('')+'</div>'+'<button class="lc-arrow lc-arrow-prev" aria-label="prev">&#8249;</button><button class="lc-arrow lc-arrow-next" aria-label="next">&#8250;</button>' : '')        +'<div class="lc-ov"></div>'
        +'<div class="lc-body">'
        +'<div class="lc-name">'+l.name+'</div>'
        +'<div class="lc-area">'+l.area+' â¢ Ð¼. '+l.metro+'</div>'
        +'<div class="lc-desc">'+l.desc+'</div>'
        +'<div class="lc-cap">'+l.cap+'</div>'
        +'<a href="#mb2-booking" class="lc-btn">Ð£Ð·Ð½Ð°ÑÑ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÑ</a>'
        +'</div></div>';
    }).join('');

    // hover effect
    [].forEach.call(grid.querySelectorAll('.loft-card'), function(card){
      var img = card.querySelector('.lc-img');
      card.addEventListener('mouseenter', function(){ img.style.transform='scale(1.06)'; });
      card.addEventListener('mouseleave', function(){ img.style.transform=''; });
    });
  

  // carousel logic
  [].forEach.call(grid.querySelectorAll('.loft-card'), function(card){
    var imgs = card.querySelectorAll('.lc-img');
    if(imgs.length < 2) return;
    var dots = card.querySelectorAll('.lc-dot');
    var cur = 0;
    function show(i){
      i = (i + imgs.length) % imgs.length;
      imgs[cur].style.opacity = 0;
      if(dots[cur]) dots[cur].classList.remove('active');
      cur = i;
      imgs[cur].style.opacity = 1;
      if(dots[cur]) dots[cur].classList.add('active');
    }
    [].forEach.call(dots, function(dot){
      dot.addEventListener('click', function(e){
        e.preventDefault(); e.stopPropagation();
        show(parseInt(dot.getAttribute('data-idx'),10));
      });
    });
    var prevBtn = card.querySelector('.lc-arrow-prev');
    var nextBtn = card.querySelector('.lc-arrow-next');
    if(prevBtn) prevBtn.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); show(cur-1); });
    if(nextBtn) nextBtn.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); show(cur+1); });
    var autoTimer = setInterval(function(){ show(cur+1); }, 4000);
    card.addEventListener('mouseenter', function(){ clearInterval(autoTimer); });
  });
}

  function initForm(){
    var form = document.getElementById('mb2-form');
    if(!form){ setTimeout(initForm, 500); return; }
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = form.querySelector('.f-submit');
      if(btn) btn.style.display='none';
      var ok = document.getElementById('mb2-ok');
      if(ok) ok.style.display='block';
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', function(){ renderLofts(); initForm(); });
  } else { renderLofts(); initForm(); }
})();
