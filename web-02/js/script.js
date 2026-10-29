// 1) Photo: tries each location until one works (else the "KF" letters stay)
var PATHS=['images/photo.jpg','../web-01/images/photo.jpg','/CIT331/lab05/web-01/images/photo.jpg'];
document.querySelectorAll('img.pic').forEach(function(img){
  var i=0;
  img.onerror=function(){i++;if(i<PATHS.length){img.src=PATHS[i];}else{img.remove();}};
  img.src=PATHS[0];
});

// 2) Navigation: highlights a card on desktop, swaps the panel on tablet/mobile
var btns=[].slice.call(document.querySelectorAll('[data-go]'));
var cards=[].slice.call(document.querySelectorAll('.card'));
btns.forEach(function(b){
  b.addEventListener('click',function(){
    btns.forEach(function(x){x.classList.toggle('on',x===b);});
    cards.forEach(function(c){
      var hit=c.id===b.dataset.go;
      c.classList.toggle('show',hit);
      if(hit){c.classList.remove('flash');void c.offsetWidth;c.classList.add('flash');}
    });
  });
});

// 3) Copy email
var copy=document.getElementById('copy');
copy.addEventListener('click',function(){
  var done=function(t){copy.textContent=t;setTimeout(function(){copy.textContent='Copy Email';},1500);};
  if(navigator.clipboard){navigator.clipboard.writeText('fatishahid7@gmail.com').then(function(){done('Copied!');},function(){done('Failed');});}
  else{done('Not supported');}
});