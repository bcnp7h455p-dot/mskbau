(function(){
  function renderLofts(){
    var grid = document.getElementById('mb2-loftsGrid');
    if(!grid){ setTimeout(renderLofts, 500); return; }
    var lofts = [
      {name:'Cactus',area:'140 м²',cap:'80 фуршет / 50 банкет / 70 театр',metro:'Бауманская',desc:'Двухуровневый лофт в арт-пространстве Басманный двор. Большие люстры притягивают взгляды. Удобная барная зона с кухней на первом этаже. На втором — лаундж-зона с диванами и креслами. Настольный футбол и игровая приставка с ретро-играми.',img:'https://static.tildacdn.com/tild6339-3261-4166-a131-306239343833/IMG_5653_resized.jpg',price:'от 2 400 ₽/час'},
      {name:'Memphis',area:'135 м²',cap:'60 фуршет / 30 банкет / 50 театр',metro:'Бауманская',desc:'Лофт в итальянском стиле Мемфис на Бауманской. Два бара — это гениально. Своя кухня — это удобно. Отдельный вход — это приятно.',img:'https://static.tildacdn.com/tild3465-3266-4335-a131-353663353938/_KSV4386_hdr.jpg',price:'от 2 400 ₽/час'},
      {name:'Mira',area:'110 м²',cap:'50 фуршет / 40 банкет / 30 театр',metro:'Бауманская',desc:'Яркий и неповторимый: двухуровневый лофт в арт-пространстве Басманный двор. Дизайн со всего мира, неон на любой вкус, два этажа. Отдельная зона для банкета и кухонная зона для сервировки.',img:'https://static.tildacdn.com/tild3937-6530-4132-b263-353034666530/_KSV5768hdr.jpg',price:'от 2 200 ₽/час'},
      {name:'Steklo',area:'110 м²',cap:'50 фуршет / 25 банкет / 20 театр',metro:'Бауманская',desc:'Двухуровневый лофт в неоаристократическом стиле с верандой и настольным теннисом. Профессиональный звук. На втором этаже — лаундж с диванами. Отдельный вход и бесплатная парковка.',img:'https://static.tildacdn.com/tild3239-3036-4062-a663-356637633362/1.jpg',price:'от 1 900 ₽/час'},
      {name:'Simple',area:'130 м²',cap:'60 фуршет / 38 банкет / 30 театр',metro:'Бауманская',desc:'Белый лофт с живым камином, собственной верандой, арочными потолками и хрустальными люстрами. Для красивых, элегантных и уютных событий.',img:'https://static.tildacdn.com/tild6165-3630-4138-b638-666131623263/_2-2.jpg',price:'от 2 400 ₽/час'},
      {name:'Tvoya Vina',area:'уточняется',cap:'30 фуршет / 18 банкет / 20 театр',metro:'Бауманская',desc:'Дизайнерский лофт с душой: две зоны, каждая со своим настроением, и главный акцент — камин.',img:'https://static.tildacdn.com/tild3530-3932-4531-b762-353666393834/photo.jpg',price:'от 1 700 ₽/час'},
      {name:'Budda',area:'уточняется',cap:'до 20 гостей',metro:'Бауманская',desc:'Восточная атмосфера и лофт-стиль. Кирпичные стены, уютная личная веранда и качели в 5 минутах от метро. Электрогриль — входит в стоимость.',img:'https://static.tildacdn.com/tild3161-3631-4963-a565-323333393064/upldrCp3UXjpg900x600.jpg',price:'уточняется'},
      {name:'Sava',area:'уточняется',cap:'до 20 гостей',metro:'Бауманская',desc:'Уютный лофт с личной верандой. Насыщенные оттенки, необычные детали и уютные качели. Свежий воздух на веранде — с запахом жареного мяса. Электрогриль — входит в стоимость.',img:'https://static.tildacdn.com/tild3164-6137-4864-b836-373434353932/upldKtrE0Hjpg900x600.jpg',price:'уточняется'}
    ];
    grid.innerHTML = lofts.map(function(l){
      return '<div class="loft-card">'
        +'<img class="lc-img" src="'+l.img+'" alt="Лофт '+l.name+'" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 0.8s ease"/>'
        +'<div class="lc-ov"></div>'
        +'<div class="lc-body">'
        +'<div class="lc-name">'+l.name+'</div>'
        +'<div class="lc-area">'+l.area+' • м. '+l.metro+'</div>'
        +'<div class="lc-desc">'+l.desc+'</div>'
        +'<div class="lc-cap">'+l.cap+'</div>'
        +'<a href="#mb2-booking" class="lc-btn">Узнать стоимость</a>'
        +'</div></div>';
    }).join('');

    // hover effect
    [].forEach.call(grid.querySelectorAll('.loft-card'), function(card){
      var img = card.querySelector('.lc-img');
      card.addEventListener('mouseenter', function(){ img.style.transform='scale(1.06)'; });
      card.addEventListener('mouseleave', function(){ img.style.transform=''; });
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
