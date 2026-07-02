(function(){
  function renderLofts(){
    var grid = document.getElementById('mb2-loftsGrid');
    if(!grid){ setTimeout(renderLofts, 500); return; }
    var lofts = [
      {name:"Cactus",area:"140 м²",cap:"80 фуршет | 50 банкет | 70 театр",metro:"Бауманская",desc:"Двухуровневый лофт в арт-пространстве Басманный двор. Большие люстры притягивают взгляды. Удобная барная зона с кухней на первом этаже. На втором — лаундж-зона с диванами и креслами. Настольный футбол и игровая приставка с ретро-играми.",img:"https://bcnp7h455p-dot.github.io/mskbau/cactus/1.png",images:["https://bcnp7h455p-dot.github.io/mskbau/cactus/1.png","https://bcnp7h455p-dot.github.io/mskbau/cactus/2.png","https://bcnp7h455p-dot.github.io/mskbau/cactus/3.png","https://bcnp7h455p-dot.github.io/mskbau/cactus/4.png","https://bcnp7h455p-dot.github.io/mskbau/cactus/5.png","https://bcnp7h455p-dot.github.io/mskbau/cactus/6.png","https://bcnp7h455p-dot.github.io/mskbau/cactus/7.png","https://bcnp7h455p-dot.github.io/mskbau/cactus/8.png","https://bcnp7h455p-dot.github.io/mskbau/cactus/9.png","https://bcnp7h455p-dot.github.io/mskbau/cactus/10.png","https://bcnp7h455p-dot.github.io/mskbau/cactus/12.png","https://bcnp7h455p-dot.github.io/mskbau/cactus/13.png","https://bcnp7h455p-dot.github.io/mskbau/cactus/14.png","https://bcnp7h455p-dot.github.io/mskbau/cactus/15.png"],price:"от 2 400 ₽/час"},
      {name:"Memphis",area:"135 м²",cap:"60 фуршет | 30 банкет | 50 театр",metro:"Бауманская",desc:"Лофт в итальянском стиле Мемфис на Бауманской. Два бара — это гениально. Своя кухня — это удобно. Отдельный вход — это приятно.",img:"https://static.tildacdn.com/tild3465-3266-4335-a131-353663353938/_KSV4386_hdr.jpg",images:["https://static.tildacdn.com/tild3465-3266-4335-a131-353663353938/_KSV4386_hdr.jpg","https://static.tildacdn.com/tild3534-3664-4437-b838-396130636435/_KSV4482.jpg","https://static.tildacdn.com/tild6464-6662-4330-b862-373165303139/1.jpg","https://static.tildacdn.com/tild6637-6533-4066-a565-393230316436/_KSV4418_hdr.jpg","https://static.tildacdn.com/tild3263-6535-4463-b035-303935633062/_KSV4427.jpg","https://static.tildacdn.com/tild6438-3537-4834-b339-313431623635/_KSV4392_hdr.jpg","https://static.tildacdn.com/tild6636-3132-4839-b262-316263623936/3.jpg","https://static.tildacdn.com/tild3735-3730-4565-b034-373438653032/_KSV4390_hdr.jpg","https://static.tildacdn.com/tild6539-3734-4130-b839-636239313035/_KSV4380_hdr.jpg","https://static.tildacdn.com/tild3937-3736-4534-b537-653038613138/_KSV4382_hdr.jpg","https://static.tildacdn.com/tild6138-3964-4435-b963-356331306366/_KSV4366_hdr.jpg","https://static.tildacdn.com/tild6562-3733-4236-a161-653864333134/_KSV4449_hdr.jpg","https://static.tildacdn.com/tild3363-3562-4335-b665-333864303865/_KSV4463_hdr.jpg","https://static.tildacdn.com/tild6565-6438-4338-b162-336334653535/_KSV4374_hdr.jpg","https://static.tildacdn.com/tild6434-6664-4737-a434-326563393539/_KSV4491.jpg","https://static.tildacdn.com/tild3932-3037-4863-b664-643962333964/_KSV4388_hdr.jpg","https://static.tildacdn.com/tild6462-3566-4631-a337-666236626533/_KSV4376_hdr.jpg","https://static.tildacdn.com/tild6531-6231-4261-a239-643735643937/_KSV4494.jpg","https://static.tildacdn.com/tild6261-3731-4834-a165-643534373862/_KSV4508.jpg","https://static.tildacdn.com/tild3339-3536-4862-a432-326237313138/_KSV4496.jpg","https://static.tildacdn.com/tild3832-6232-4164-b236-356465373336/_KSV4518.jpg","https://static.tildacdn.com/tild3930-3661-4436-a666-633331343638/_KSV4515.jpg","https://static.tildacdn.com/tild3862-3832-4730-b334-356665643265/ChatGPT_Image_18__20.png","https://static.tildacdn.com/tild3135-6534-4939-b833-373231343764/ChatGPT_Image_18__20.png"],price:"от 2 400 ₽/час"},
      {name:"Mira",area:"110 м²",cap:"50 фуршет | 40 банкет | 30 театр",metro:"Бауманская",desc:"Яркий и неповторимый двухуровневый лофт в арт-пространстве Басманный двор. Дизайн со всего мира, неон на любой вкус, два этажа. Отдельная зона для банкета и кухонная зона для сервировки.",img:"https://static.tildacdn.com/tild3836-3937-4634-b865-383633313563/_KSV5768hdr.jpg",images:["https://static.tildacdn.com/tild3836-3937-4634-b865-383633313563/_KSV5768hdr.jpg","https://static.tildacdn.com/tild6362-3661-4433-b561-373634326361/_KSV5786hdr.jpg","https://static.tildacdn.com/tild3531-6662-4437-b934-333664353165/_KSV5792hdr.jpg","https://static.tildacdn.com/tild6434-3830-4261-a537-626466333463/_KSV5886hdr.jpg","https://static.tildacdn.com/tild3565-3366-4363-a363-623939396334/_KSV1319.jpg","https://static.tildacdn.com/tild3034-6661-4530-a335-336561376637/_KSV5912.jpg","https://static.tildacdn.com/tild3363-3264-4136-b061-376539323630/_KSV1318.jpg","https://static.tildacdn.com/tild3530-6134-4462-b864-623766326564/_KSV5848hdr.jpg","https://static.tildacdn.com/tild3731-6139-4831-b263-336132616265/_KSV5857hdr.jpg","https://static.tildacdn.com/tild3034-3565-4866-b830-396166613038/_KSV5895.jpg","https://static.tildacdn.com/tild3365-6134-4634-b232-323864613739/_KSV5882hdr.jpg"],price:"от 2 200 ₽/час"},
      {name:"Steklo",area:"110 м²",cap:"50 фуршет | 25 банкет | 20 театр",metro:"Бауманская",desc:"Двухуровневый лофт в неоаристократическом стиле с верандой и настольным теннисом. Профессиональный звук для тех, кто ценит качество. На втором этаже — лаундж с диванами. Отдельный вход и бесплатная парковка.",img:"https://static.tildacdn.com/tild3931-6361-4464-b230-363366383934/IMG_6032_resized.jpg",images:["https://static.tildacdn.com/tild3931-6361-4464-b230-363366383934/IMG_6032_resized.jpg","https://static.tildacdn.com/tild3363-6662-4632-a561-326435336163/1.jpg","https://static.tildacdn.com/tild3163-6561-4665-b630-303730623531/2.jpg","https://static.tildacdn.com/tild3032-3633-4530-a630-313234323336/IMG_6038_resized.jpg","https://static.tildacdn.com/tild6231-3336-4661-a134-636463316539/3.jpg","https://static.tildacdn.com/tild3032-6333-4237-b866-363336316362/4.jpg","https://static.tildacdn.com/tild3337-6666-4839-a439-373437376362/7.jpg","https://static.tildacdn.com/tild6633-3338-4535-b130-306262376465/8.jpg","https://static.tildacdn.com/tild6463-6363-4536-a464-366164643862/5.jpg","https://static.tildacdn.com/tild3636-3839-4631-b266-366165303637/6.jpg","https://static.tildacdn.com/tild6335-3739-4635-b364-663635303166/IMG_6101_resized.jpg","https://static.tildacdn.com/tild3637-3336-4436-b064-303638353733/IMG_6177_resized.jpg","https://static.tildacdn.com/tild3330-6133-4334-b061-383439363839/11.jpg","https://static.tildacdn.com/tild3964-3839-4766-b238-393334613862/10.jpg","https://static.tildacdn.com/tild3635-6138-4162-a439-393534663461/12.jpg","https://static.tildacdn.com/tild6333-3562-4462-b231-326464653232/IMG_6138_resized.jpg","https://static.tildacdn.com/tild6465-6532-4663-a664-663539636137/IMG_6153_resized.jpg","https://static.tildacdn.com/tild3561-6332-4761-b238-323637373361/15.jpg","https://static.tildacdn.com/tild6464-3237-4666-b439-623236653834/ChatGPT_Image_17__20.png"],price:"от 1 900 ₽/час"},
      {name:"Simple",area:"130 м²",cap:"60 фуршет | 38 банкет | 30 театр",metro:"Бауманская",desc:"Белый лофт с живым камином, собственной верандой, арочными потолками и хрустальными люстрами.",img:"https://static.tildacdn.com/tild3936-3031-4333-b330-633234623732/ChatGPT_Image_30__20.jpg",images:["https://static.tildacdn.com/tild3936-3031-4333-b330-633234623732/ChatGPT_Image_30__20.jpg","https://static.tildacdn.com/tild6363-3461-4539-a638-666137653732/ChatGPT_Image_29__20.png","https://static.tildacdn.com/tild3832-3532-4339-b236-623564613466/ChatGPT_Image_30__20.png","https://static.tildacdn.com/tild3766-3037-4737-a438-626362613336/ChatGPT_Image_1__202.png","https://static.tildacdn.com/tild3537-6633-4335-b834-373261353330/ChatGPT_Image_30__20.png","https://static.tildacdn.com/tild3662-3630-4732-a566-306633633533/ChatGPT_Image_30__20.png","https://static.tildacdn.com/tild6662-3562-4262-b066-333434393465/_DSC9817.jpg","https://static.tildacdn.com/tild3534-6436-4438-b166-373432306362/_DSC9813.jpg","https://static.tildacdn.com/tild3965-6339-4831-b661-383232633166/_DSC9842.jpg","https://static.tildacdn.com/tild3033-6634-4666-b863-366435373536/ChatGPT_Image_15__20.png","https://static.tildacdn.com/tild6535-6333-4833-b764-343062363064/ChatGPT_Image_15__20.png"],price:"от 2 400 ₽/час"},
      {name:"Tvoya Vina",area:"60 м²",cap:"30 фуршет | 18 банкет | 20 театр",metro:"Бауманская",desc:"Дизайнерский лофт с душой: две зоны, каждая со своим настроением, и главный акцент — камин.",img:"https://static.tildacdn.com/tild3530-3932-4531-b762-353666393834/photo.jpg",images:["https://static.tildacdn.com/tild3530-3932-4531-b762-353666393834/photo.jpg","https://static.tildacdn.com/tild6239-3664-4362-a430-396134386233/IMG_3313.jpg","https://static.tildacdn.com/tild6338-3935-4633-a337-343264376130/IMG_3314.jpg","https://static.tildacdn.com/tild6461-3133-4638-b239-336165363339/IMG_3312.jpg","https://static.tildacdn.com/tild3737-3534-4732-b765-313430613761/IMG_3311.jpg","https://static.tildacdn.com/tild3362-3164-4337-b266-626134363834/IMG_3326.jpg","https://static.tildacdn.com/tild6430-3034-4935-b033-373562323036/IMG_3327.jpg","https://static.tildacdn.com/tild6164-6633-4133-b065-373532633161/IMG_3318.jpg","https://static.tildacdn.com/tild3630-3862-4465-b538-363037626662/IMG_3293.jpg","https://static.tildacdn.com/tild6363-6532-4136-b363-376635643430/IMG_3317.jpg","https://static.tildacdn.com/tild6330-3664-4537-b463-646134303137/IMG_3319.jpg"],price:"от 1 700 ₽/час"},
      {name:"Budda",area:"35 м²",cap:"до 20 гостей",metro:"Бауманская",desc:"Концептуальный лофт, в котором восточная атмосфера сочетается с лофт-стилем. Кирпичные стены, уютная личная веранда и качели в 5 минутах от метро Бауманская. Электрогриль входит в стоимость.",img:"https://static.tildacdn.com/tild3165-3066-4961-a337-313731336261/1_.jpg",images:["https://static.tildacdn.com/tild3165-3066-4961-a337-313731336261/1_.jpg","https://static.tildacdn.com/tild3162-3465-4331-a664-623230313662/2.jpg","https://static.tildacdn.com/tild6261-3836-4537-a564-633161303865/3.jpg","https://static.tildacdn.com/tild3463-6439-4963-a333-643362313630/4.jpg","https://static.tildacdn.com/tild3466-3939-4930-b065-663361613065/5.jpg","https://static.tildacdn.com/tild6461-3830-4263-b565-646263336339/6.jpg","https://static.tildacdn.com/tild6230-3261-4865-a531-643739306166/_DSC1252.jpg"],price:"уточняется"},
      {name:"Sava",area:"30 м²",cap:"до 20 гостей",metro:"Бауманская",desc:"Уютный лофт с личной верандой в 5 минутах от метро Бауманская. Здесь цвет решает всё — насыщенные оттенки, необычные детали в декоре и уютные качели. Веранда с запахом жареного мяса и без суеты. Электрогриль входит в стоимость.",img:"https://static.tildacdn.com/tild3534-3064-4439-b837-376538343831/_DSC0190.jpg",images:["https://static.tildacdn.com/tild3534-3064-4439-b837-376538343831/_DSC0190.jpg","https://static.tildacdn.com/tild6535-6533-4432-b338-306435353630/_DSC0209.jpg","https://static.tildacdn.com/tild6634-3836-4365-b030-373964643133/_DSC0246.jpg","https://static.tildacdn.com/tild6532-3635-4538-b531-356632306239/_DSC0198.jpg","https://static.tildacdn.com/tild6461-3830-4263-b565-646263336339/6.jpg","https://static.tildacdn.com/tild3334-3035-4436-b965-626436383830/_DSC1241.jpg"],price:"уточняется"}
    ];
    grid.innerHTML = lofts.map(function(l, idx){
      var images = (l.images && l.images.length) ? l.images : [l.img];
      var imgsHtml = images.map(function(src,i){
        return '<img class="lc-img lc-img-'+i+'" src="'+src+'" alt="'+l.name+'" loading="lazy" data-idx="'+i+'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity 0.6s ease;opacity:'+((i===0)?1:0)+'"/>';
      }).join('');
      var dotsHtml = images.length > 1
        ? '<div class="lc-dots">' + images.map(function(_,i){ return '<button class="lc-dot'+(i===0?' active':'')+'" data-i="'+i+'"></button>'; }).join('') + '</div>'
        : '';
      var arrowsHtml = images.length > 1
        ? '<button class="lc-arrow lc-arrow-prev">\u2039</button><button class="lc-arrow lc-arrow-next">\u203a</button>'
        : '';
      return '<div class="loft-card" data-idx="'+idx+'">'+
        imgsHtml +
        dotsHtml +
        arrowsHtml +
        '<div class="lc-ov"></div>'+
        '<div class="lc-body">'+
          '<div class="lc-name">'+l.name+'</div>'+
          '<div class="lc-area">'+l.area+' • м. '+l.metro+'</div>'+
          '<div class="lc-hover-info">'+
            '<div class="lc-cap">'+l.cap+'</div>'+
            '<div class="lc-actions">'+
              '<button class="lc-btn-detail">Подробнее</button>'+
              '<a href="#mb2-booking" class="lc-btn-book">Узнать стоимость</a>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    }).join('');

    // carousel + hover logic
    [].forEach.call(grid.querySelectorAll('.loft-card'), function(card){
      var imgs = card.querySelectorAll('.lc-img');
      if(imgs.length < 2) return;
      var dots = card.querySelectorAll('.lc-dot');
      var prevBtn = card.querySelector('.lc-arrow-prev');
      var nextBtn = card.querySelector('.lc-arrow-next');
      var cur = 0;
      var autoTimer = null;
      function show(i){
        imgs[cur].style.opacity = 0;
        if(dots[cur]) dots[cur].classList.remove('active');
        cur = (i + imgs.length) % imgs.length;
        imgs[cur].style.opacity = 1;
        if(dots[cur]) dots[cur].classList.add('active');
      }
      [].forEach.call(dots, function(d){
        d.addEventListener('click', function(e){ e.stopPropagation(); show(parseInt(d.getAttribute('data-i'),10)); });
      });
      if(prevBtn) prevBtn.addEventListener('click', function(e){ e.stopPropagation(); show(cur-1); });
      if(nextBtn) nextBtn.addEventListener('click', function(e){ e.stopPropagation(); show(cur+1); });
      card.addEventListener('mouseenter', function(){ autoTimer = setInterval(function(){ show(cur+1); }, 1800); });
      card.addEventListener('mouseleave', function(){ clearInterval(autoTimer); autoTimer = null; });
    });

    // detail button opens modal
    [].forEach.call(grid.querySelectorAll('.lc-btn-detail'), function(btn){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        var card = btn.closest('.loft-card');
        var idx = parseInt(card.getAttribute('data-idx'), 10);
        openLoftModal(lofts[idx]);
      });
    });

    // whole card click also opens modal
    [].forEach.call(grid.querySelectorAll('.loft-card'), function(card){
      card.addEventListener('click', function(e){
        if(e.target.closest('.lc-btn-book') || e.target.closest('.lc-arrow') || e.target.closest('.lc-dot')) return;
        var idx = parseInt(card.getAttribute('data-idx'), 10);
        openLoftModal(lofts[idx]);
      });
    });

  }

  var modalImages = [];
  var modalCurIdx = 0;

  function initModal(){
    var modal = document.getElementById('mb-loftmodal');
    if(!modal){
      modal = document.createElement('div');
      modal.id = 'mb-loftmodal';
      modal.innerHTML = '<div class="lm-box">'
        +'<div class="lm-close">\u2715</div>'
        +'<div class="lm-gallery">'
          +'<div class="lm-imgwrap"></div>'
          +'<div class="lm-arrow lm-arrow-prev">\u2039</div>'
          +'<div class="lm-arrow lm-arrow-next">\u203a</div>'
          +'<div class="lm-counter"></div>'
          +'<div class="lm-dots"></div>'
        +'</div>'
        +'<div class="lm-info">'
          +'<div class="lm-name"></div>'
          +'<div class="lm-area"></div>'
          +'<div class="lm-desc"></div>'
          +'<div class="lm-cap"></div>'
          +'<div class="lm-price"></div>'
          +'<a href="#mb2-booking" class="lm-btn">Узнать стоимость</a>'
        +'</div>'
      +'</div>';
      document.body.appendChild(modal);

      modal.querySelector('.lm-close').addEventListener('click', closeLoftModal);
      modal.addEventListener('click', function(e){ if(e.target === modal) closeLoftModal(); });
      modal.querySelector('.lm-arrow-prev').addEventListener('click', function(e){ e.stopPropagation(); showModalImg(modalCurIdx-1); });
      modal.querySelector('.lm-arrow-next').addEventListener('click', function(e){ e.stopPropagation(); showModalImg(modalCurIdx+1); });
      modal.querySelector('.lm-btn').addEventListener('click', closeLoftModal);
      document.addEventListener('keydown', function(e){
        if(!modal.classList.contains('open')) return;
        if(e.key === 'Escape') closeLoftModal();
        if(e.key === 'ArrowLeft') showModalImg(modalCurIdx-1);
        if(e.key === 'ArrowRight') showModalImg(modalCurIdx+1);
      });
    }
    return modal;
  }

  function showModalImg(i){
    if(!modalImages.length) return;
    modalCurIdx = (i + modalImages.length) % modalImages.length;
    var modal = document.getElementById('mb-loftmodal');
    var wrap = modal.querySelector('.lm-imgwrap');
    wrap.innerHTML = '<img src="'+modalImages[modalCurIdx]+'" alt=""/>';
    var counter = modal.querySelector('.lm-counter');
    counter.textContent = (modalCurIdx+1) + ' / ' + modalImages.length;
    counter.style.display = modalImages.length > 1 ? 'block' : 'none';
    var arrows = modal.querySelectorAll('.lm-arrow');
    [].forEach.call(arrows, function(a){ a.style.display = modalImages.length > 1 ? 'flex' : 'none'; });
    var dotsWrap = modal.querySelector('.lm-dots');
    if(modalImages.length > 1 && modalImages.length <= 16){
      dotsWrap.innerHTML = modalImages.map(function(_,i2){ return '<span class="lm-dot'+(i2===modalCurIdx?' active':'')+'" data-i="'+i2+'"></span>'; }).join('');
      dotsWrap.style.display = 'flex';
      [].forEach.call(dotsWrap.querySelectorAll('.lm-dot'), function(d){
        d.addEventListener('click', function(e){ e.stopPropagation(); showModalImg(parseInt(d.getAttribute('data-i'),10)); });
      });
    } else {
      dotsWrap.style.display = 'none';
    }
  }

  function openLoftModal(l){
    var modal = initModal();
    modalImages = (l.images && l.images.length) ? l.images : [l.img];
    modal.querySelector('.lm-name').textContent = l.name;
    modal.querySelector('.lm-area').textContent = l.area + ' • м. ' + l.metro;
    modal.querySelector('.lm-desc').textContent = l.desc;
    modal.querySelector('.lm-cap').textContent = l.cap;
    modal.querySelector('.lm-price').textContent = l.price;
    showModalImg(0);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLoftModal(){
    var modal = document.getElementById('mb-loftmodal');
    if(modal) modal.classList.remove('open');
    document.body.style.overflow = '';
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
