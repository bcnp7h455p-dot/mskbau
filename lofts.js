(function(){
  function renderLofts(){
    var grid = document.getElementById('mb2-loftsGrid');
    if(!grid){ setTimeout(renderLofts, 500); return; }
    var lofts = [
      {name:'Cactus',area:'140 Ð¼Â²',cap:'80 ÑÑÑÑÐµÑ / 50 Ð±Ð°Ð½ÐºÐµÑ / 70 ÑÐµÐ°ÑÑ',metro:'ÐÐ°ÑÐ¼Ð°Ð½ÑÐºÐ°Ñ',desc:'ÐÐ²ÑÑÑÑÐ¾Ð²Ð½ÐµÐ²ÑÐ¹ Ð»Ð¾ÑÑ Ð² Ð°ÑÑ-Ð¿ÑÐ¾ÑÑÑÐ°Ð½ÑÑÐ²Ðµ ÐÐ°ÑÐ¼Ð°Ð½Ð½ÑÐ¹ Ð´Ð²Ð¾Ñ. ÐÐ¾Ð»ÑÑÐ¸Ðµ Ð»ÑÑÑÑÑ Ð¿ÑÐ¸ÑÑÐ³Ð¸Ð²Ð°ÑÑ Ð²Ð·Ð³Ð»ÑÐ´Ñ. Ð£Ð´Ð¾Ð±Ð½Ð°Ñ Ð±Ð°ÑÐ½Ð°Ñ Ð·Ð¾Ð½Ð° Ñ ÐºÑÑÐ½ÐµÐ¹ Ð½Ð° Ð¿ÐµÑÐ²Ð¾Ð¼ ÑÑÐ°Ð¶Ðµ. ÐÐ° Ð²ÑÐ¾ÑÐ¾Ð¼ â Ð»Ð°ÑÐ½Ð´Ð¶-Ð·Ð¾Ð½Ð° Ñ Ð´Ð¸Ð²Ð°Ð½Ð°Ð¼Ð¸ Ð¸ ÐºÑÐµÑÐ»Ð°Ð¼Ð¸. ÐÐ°ÑÑÐ¾Ð»ÑÐ½ÑÐ¹ ÑÑÑÐ±Ð¾Ð» Ð¸ Ð¸Ð³ÑÐ¾Ð²Ð°Ñ Ð¿ÑÐ¸ÑÑÐ°Ð²ÐºÐ° Ñ ÑÐµÑÑÐ¾-Ð¸Ð³ÑÐ°Ð¼Ð¸.',img:'https://bcnp7h455p-dot.github.io/mskbau/cactus/1.png',images:['https://bcnp7h455p-dot.github.io/mskbau/cactus/1.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/2.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/3.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/4.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/5.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/6.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/7.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/8.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/9.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/10.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/12.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/13.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/14.png','https://bcnp7h455p-dot.github.io/mskbau/cactus/15.png'],price:'Ð¾Ñ 2 400 â½/ÑÐ°Ñ'},
      {name:'Memphis',area:'135 Ð¼Â²',cap:'60 ÑÑÑÑÐµÑ / 30 Ð±Ð°Ð½ÐºÐµÑ / 50 ÑÐµÐ°ÑÑ',metro:'ÐÐ°ÑÐ¼Ð°Ð½ÑÐºÐ°Ñ',desc:'ÐÐ¾ÑÑ Ð² Ð¸ÑÐ°Ð»ÑÑÐ½ÑÐºÐ¾Ð¼ ÑÑÐ¸Ð»Ðµ ÐÐµÐ¼ÑÐ¸Ñ Ð½Ð° ÐÐ°ÑÐ¼Ð°Ð½ÑÐºÐ¾Ð¹. ÐÐ²Ð° Ð±Ð°ÑÐ° â ÑÑÐ¾ Ð³ÐµÐ½Ð¸Ð°Ð»ÑÐ½Ð¾. Ð¡Ð²Ð¾Ñ ÐºÑÑÐ½Ñ â ÑÑÐ¾ ÑÐ´Ð¾Ð±Ð½Ð¾. ÐÑÐ´ÐµÐ»ÑÐ½ÑÐ¹ Ð²ÑÐ¾Ð´ â ÑÑÐ¾ Ð¿ÑÐ¸ÑÑÐ½Ð¾.',img:'https://static.tildacdn.com/tild3465-3266-4335-a131-353663353938/_KSV4386_hdr.jpg',price:'Ð¾Ñ 2 400 â½/ÑÐ°Ñ'},
      {name:'Mira',area:'110 Ð¼Â²',cap:'50 ÑÑÑÑÐµÑ / 40 Ð±Ð°Ð½ÐºÐµÑ / 30 ÑÐµÐ°ÑÑ',metro:'ÐÐ°ÑÐ¼Ð°Ð½ÑÐºÐ°Ñ',desc:'Ð¯ÑÐºÐ¸Ð¹ Ð¸ Ð½ÐµÐ¿Ð¾Ð²ÑÐ¾ÑÐ¸Ð¼ÑÐ¹: Ð´Ð²ÑÑÑÑÐ¾Ð²Ð½ÐµÐ²ÑÐ¹ Ð»Ð¾ÑÑ Ð² Ð°ÑÑ-Ð¿ÑÐ¾ÑÑÑÐ°Ð½ÑÑÐ²Ðµ ÐÐ°ÑÐ¼Ð°Ð½Ð½ÑÐ¹ Ð´Ð²Ð¾Ñ. ÐÐ¸Ð·Ð°Ð¹Ð½ ÑÐ¾ Ð²ÑÐµÐ³Ð¾ Ð¼Ð¸ÑÐ°, Ð½ÐµÐ¾Ð½ Ð½Ð° Ð»ÑÐ±Ð¾Ð¹ Ð²ÐºÑÑ, Ð´Ð²Ð° ÑÑÐ°Ð¶Ð°. ÐÑÐ´ÐµÐ»ÑÐ½Ð°Ñ Ð·Ð¾Ð½Ð° Ð´Ð»Ñ Ð±Ð°Ð½ÐºÐµÑÐ° Ð¸ ÐºÑÑÐ¾Ð½Ð½Ð°Ñ Ð·Ð¾Ð½Ð° Ð´Ð»Ñ ÑÐµÑÐ²Ð¸ÑÐ¾Ð²ÐºÐ¸.',img:'https://static.tildacdn.com/tild3937-6530-4132-b263-353034666530/_KSV5768hdr.jpg',price:'Ð¾Ñ 2 200 â½/ÑÐ°Ñ'},
      {name:'Steklo',area:'110 Ð¼Â²',cap:'50 ÑÑÑÑÐµÑ / 25 Ð±Ð°Ð½ÐºÐµÑ / 20 ÑÐµÐ°ÑÑ',metro:'ÐÐ°ÑÐ¼Ð°Ð½ÑÐºÐ°Ñ',desc:'ÐÐ²ÑÑÑÑÐ¾Ð²Ð½ÐµÐ²ÑÐ¹ Ð»Ð¾ÑÑ Ð² Ð½ÐµÐ¾Ð°ÑÐ¸ÑÑÐ¾ÐºÑÐ°ÑÐ¸ÑÐµÑÐºÐ¾Ð¼ ÑÑÐ¸Ð»Ðµ Ñ Ð²ÐµÑÐ°Ð½Ð´Ð¾Ð¹ Ð¸ Ð½Ð°ÑÑÐ¾Ð»ÑÐ½ÑÐ¼ ÑÐµÐ½Ð½Ð¸ÑÐ¾Ð¼. ÐÑÐ¾ÑÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑÐ½ÑÐ¹ Ð·Ð²ÑÐº. ÐÐ° Ð²ÑÐ¾ÑÐ¾Ð¼ ÑÑÐ°Ð¶Ðµ â Ð»Ð°ÑÐ½Ð´Ð¶ Ñ Ð´Ð¸Ð²Ð°Ð½Ð°Ð¼Ð¸. ÐÑÐ´ÐµÐ»ÑÐ½ÑÐ¹ Ð²ÑÐ¾Ð´ Ð¸ Ð±ÐµÑÐ¿Ð»Ð°ÑÐ½Ð°Ñ Ð¿Ð°ÑÐºÐ¾Ð²ÐºÐ°.',img:'https://static.tildacdn.com/tild3239-3036-4062-a663-356637633362/1.jpg',price:'Ð¾Ñ 1 900 â½/ÑÐ°Ñ'},
      {name:'Simple',area:'130 Ð¼Â²',cap:'60 ÑÑÑÑÐµÑ / 38 Ð±Ð°Ð½ÐºÐµÑ / 30 ÑÐµÐ°ÑÑ',metro:'ÐÐ°ÑÐ¼Ð°Ð½ÑÐºÐ°Ñ',desc:'ÐÐµÐ»ÑÐ¹ Ð»Ð¾ÑÑ Ñ Ð¶Ð¸Ð²ÑÐ¼ ÐºÐ°Ð¼Ð¸Ð½Ð¾Ð¼, ÑÐ¾Ð±ÑÑÐ²ÐµÐ½Ð½Ð¾Ð¹ Ð²ÐµÑÐ°Ð½Ð´Ð¾Ð¹, Ð°ÑÐ¾ÑÐ½ÑÐ¼Ð¸ Ð¿Ð¾ÑÐ¾Ð»ÐºÐ°Ð¼Ð¸ Ð¸ ÑÑÑÑÑÐ°Ð»ÑÐ½ÑÐ¼Ð¸ Ð»ÑÑÑÑÐ°Ð¼Ð¸. ÐÐ»Ñ ÐºÑÐ°ÑÐ¸Ð²ÑÑ, ÑÐ»ÐµÐ³Ð°Ð½ÑÐ½ÑÑ Ð¸ ÑÑÑÐ½ÑÑ ÑÐ¾Ð±ÑÑÐ¸Ð¹.',img:'https://static.tildacdn.com/tild6165-3630-4138-b638-666131623263/_2-2.jpg',price:'Ð¾Ñ 2 400 â½/ÑÐ°Ñ'},
      {name:'Tvoya Vina',area: '60 м²',cap:'30 ÑÑÑÑÐµÑ / 18 Ð±Ð°Ð½ÐºÐµÑ / 20 ÑÐµÐ°ÑÑ',metro:'ÐÐ°ÑÐ¼Ð°Ð½ÑÐºÐ°Ñ',desc:'ÐÐ¸Ð·Ð°Ð¹Ð½ÐµÑÑÐºÐ¸Ð¹ Ð»Ð¾ÑÑ Ñ Ð´ÑÑÐ¾Ð¹: Ð´Ð²Ðµ Ð·Ð¾Ð½Ñ, ÐºÐ°Ð¶Ð´Ð°Ñ ÑÐ¾ ÑÐ²Ð¾Ð¸Ð¼ Ð½Ð°ÑÑÑÐ¾ÐµÐ½Ð¸ÐµÐ¼, Ð¸ Ð³Ð»Ð°Ð²Ð½ÑÐ¹ Ð°ÐºÑÐµÐ½Ñ â ÐºÐ°Ð¼Ð¸Ð½.',img:'https://static.tildacdn.com/tild3530-3932-4531-b762-353666393834/photo.jpg',price:'Ð¾Ñ 1 700 â½/ÑÐ°Ñ'},
      {name:'Budda',area: '35 м²',cap:'Ð´Ð¾ 20 Ð³Ð¾ÑÑÐµÐ¹',metro:'ÐÐ°ÑÐ¼Ð°Ð½ÑÐºÐ°Ñ',desc:'ÐÐ¾ÑÑÐ¾ÑÐ½Ð°Ñ Ð°ÑÐ¼Ð¾ÑÑÐµÑÐ° Ð¸ Ð»Ð¾ÑÑ-ÑÑÐ¸Ð»Ñ. ÐÐ¸ÑÐ¿Ð¸ÑÐ½ÑÐµ ÑÑÐµÐ½Ñ, ÑÑÑÐ½Ð°Ñ Ð»Ð¸ÑÐ½Ð°Ñ Ð²ÐµÑÐ°Ð½Ð´Ð° Ð¸ ÐºÐ°ÑÐµÐ»Ð¸ Ð² 5 Ð¼Ð¸Ð½ÑÑÐ°Ñ Ð¾Ñ Ð¼ÐµÑÑÐ¾. Ð­Ð»ÐµÐºÑÑÐ¾Ð³ÑÐ¸Ð»Ñ â Ð²ÑÐ¾Ð´Ð¸Ñ Ð² ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÑ.',img:'https://static.tildacdn.com/tild3161-3631-4963-a565-323333393064/upldrCp3UXjpg900x600.jpg',price:'ÑÑÐ¾ÑÐ½ÑÐµÑÑÑ'},
      {name:'Sava',area: '30 м²',cap:'Ð´Ð¾ 20 Ð³Ð¾ÑÑÐµÐ¹',metro:'ÐÐ°ÑÐ¼Ð°Ð½ÑÐºÐ°Ñ',desc:'Ð£ÑÑÐ½ÑÐ¹ Ð»Ð¾ÑÑ Ñ Ð»Ð¸ÑÐ½Ð¾Ð¹ Ð²ÐµÑÐ°Ð½Ð´Ð¾Ð¹. ÐÐ°ÑÑÑÐµÐ½Ð½ÑÐµ Ð¾ÑÑÐµÐ½ÐºÐ¸, Ð½ÐµÐ¾Ð±ÑÑÐ½ÑÐµ Ð´ÐµÑÐ°Ð»Ð¸ Ð¸ ÑÑÑÐ½ÑÐµ ÐºÐ°ÑÐµÐ»Ð¸. Ð¡Ð²ÐµÐ¶Ð¸Ð¹ Ð²Ð¾Ð·Ð´ÑÑ Ð½Ð° Ð²ÐµÑÐ°Ð½Ð´Ðµ â Ñ Ð·Ð°Ð¿Ð°ÑÐ¾Ð¼ Ð¶Ð°ÑÐµÐ½Ð¾Ð³Ð¾ Ð¼ÑÑÐ°. Ð­Ð»ÐµÐºÑÑÐ¾Ð³ÑÐ¸Ð»Ñ â Ð²ÑÐ¾Ð´Ð¸Ñ Ð² ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÑ.',img:'https://static.tildacdn.com/tild3164-6137-4864-b836-373434353932/upldKtrE0Hjpg900x600.jpg',price:'ÑÑÐ¾ÑÐ½ÑÐµÑÑÑ'}
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
