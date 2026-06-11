(function(){
  function renderLofts(){
    var grid = document.getElementById('mb-loftsGrid');
    if(!grid){ setTimeout(renderLofts, 500); return; }
    var lofts = [
      {name:'Cactus',area:'140 м²',cap:80,metro:'Бауманская',desc:'Два этажа и 140 м². Кирпич, тёмное дерево, бетон. Лаундж-зона на втором этаже.',img:'https://static.tildacdn.com/tild6339-3261-4166-a131-306239343833/IMG_5653_resized.jpg',price:'от 2 400 ₽/час'},
      {name:'Memphis',area:'135 м²',cap:50,metro:'Бауманская',desc:'Итальянский стиль Мемфис. Геометрические формы, яркие цвета. Первый этаж, отдельный вход.',img:'https://static.tildacdn.com/tild3465-3266-4335-a131-353663353938/_KSV4386_hdr.jpg',price:'от 2 400 ₽/час'},
      {name:'Mira',area:'110 м²',cap:50,metro:'Бауманская',desc:'Взрыв цвета! Два этажа, неоновая подсветка, умный свет RGB.',img:'https://static.tildacdn.com/tild3937-6530-4132-b263-353034666530/_KSV5768hdr.jpg',price:'от 2 200 ₽/час'},
      {name:'Steklo',area:'110 м²',cap:50,metro:'Бауманская',desc:'Аристократичный лофт. Классика XIX и индустриальный XX век.',img:'https://static.tildacdn.com/tild3239-3036-4062-a663-356637633362/1.jpg',price:'от 1 900 ₽/час'},
      {name:'Simple',area:'130 м²',cap:60,metro:'Бауманская',desc:'Белый лофт с живым камином, собственной верандой и хрустальными люстрами.',img:'https://static.tildacdn.com/tild6165-3630-4138-b638-666131623263/_2-2.jpg',price:'от 2 400 ₽/час'},
      {name:'Tvoya Vina',area:'уточняется',cap:30,metro:'Бауманская',desc:'Изящный камерный дизайн для небольших компаний до 30 человек.',img:'https://static.tildacdn.com/tild3530-3932-4531-b762-353666393834/photo.jpg',price:'от 1 700 ₽/час'},
      {name:'Budda',area:'уточняется',cap:20,metro:'Бауманская',desc:'Концептуальный лофт с верандой для компаний до 20 человек.',img:'https://static.tildacdn.com/tild3161-3631-4963-a565-323333393064/upldrCp3UXjpg900x600.jpg',price:'уточняется'},
      {name:'Sava',area:'уточняется',cap:20,metro:'Бауманская',desc:'Уютный лофт с верандой для компаний до 15-20 человек.',img:'https://static.tildacdn.com/tild3164-6137-4864-b836-373434353932/upldKtrE0Hjpg900x600.jpg',price:'уточняется'}
    ];
    grid.innerHTML = lofts.map(function(l){
      return '<div style="background:#1a1a1f;border:1px solid rgba(255,255,255,0.08);border-radius:20px;overflow:hidden;transition:transform 0.3s ease" onmouseover="this.style.transform=\'translateY(-5px)\'" onmouseout="this.style.transform=\'\'">'+
        '<div style="position:relative;height:240px;overflow:hidden">'+
        '<img src="'+l.img+'" alt="Лофт '+l.name+'" style="width:100%;height:100%;object-fit:cover" loading="lazy"/>'+
        '<div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(10,10,11,0.85) 100%)"></div>'+
        '<span style="position:absolute;top:1rem;left:1rem;padding:0.3rem 0.75rem;background:rgba(10,10,11,0.7);border:1px solid rgba(255,255,255,0.1);border-radius:100px;font-size:0.72rem;color:#f5f4f0">М '+l.metro+'</span>'+
        '<span style="position:absolute;bottom:1rem;right:1rem;font-family:Cormorant Garamond,serif;font-size:1.1rem;color:#f5f4f0">до '+l.cap+' чел.</span>'+
        '</div>'+
        '<div style="padding:1.5rem">'+
        '<h3 style="font-family:Cormorant Garamond,Georgia,serif;font-size:1.6rem;font-weight:400;color:#f5f4f0;margin:0 0 0.4rem">'+l.name+'</h3>'+
        '<p style="font-size:0.78rem;color:#c9a84c;font-weight:500;margin:0 0 0.75rem">'+l.area+'</p>'+
        '<p style="font-size:0.87rem;color:rgba(245,244,240,0.6);line-height:1.55;margin:0 0 1.25rem">'+l.desc+'</p>'+
        '<div style="display:flex;align-items:center;justify-content:space-between">'+
        '<span style="font-size:0.85rem;color:#e2c882;font-weight:500">'+l.price+'</span>'+
        '<a href="#mb-booking" style="padding:0.6rem 1.2rem;background:#c9a84c;color:#0a0a0b;font-size:0.75rem;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;border-radius:6px;text-decoration:none">Узнать стоимость</a>'+
        '</div></div></div>';
    }).join('');
  }
  function initForm(){
    var form = document.getElementById('mb-bookingForm');
    if(!form){ setTimeout(initForm, 500); return; }
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var btn = form.querySelector('button[type=submit]');
      if(btn) btn.style.display='none';
      var ok = document.getElementById('mb-formSuccess');
      if(ok) ok.style.display='block';
    });
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){ renderLofts(); initForm(); });
  } else { renderLofts(); initForm(); }
})();
