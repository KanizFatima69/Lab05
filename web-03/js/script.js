// Shared header + bottom nav for every page (edit the links here once)
var PAGES=[['index.html','Home','&#9786;'],['skills.html','Skills','&gt;_'],['projects.html','Projects','&lt;/&gt;'],['education.html','Education','&#9783;'],['contact.html','Contact','@']];
var cur=location.pathname.split('/').pop()||'index.html';
var label='Overview';PAGES.forEach(function(p){if(p[0]===cur)label=p[1];});
function links(withIcon){return PAGES.map(function(p){
  return '<a href="'+p[0]+'"'+(p[0]===cur?' aria-current="page"':'')+'>'+(withIcon?'<span>'+p[2]+'</span>':'')+p[1]+'</a>';}).join('');}
document.getElementById('site-header').innerHTML=
  '<header><div class="brand"><div class="logo">KF</div><div><b>Kaniz Fatima</b><small>'+label+'</small></div></div>'+
  '<nav class="top-nav" aria-label="Main">'+links(false)+'</nav>'+
  '<div class="right"><a class="btn pri cv-btn" href="Kaniz-Fatima-CV.pdf" download>&#8681; CV</a><div class="avatar">KF<img class="pic" alt=""></div></div></header>';
document.getElementById('site-nav').innerHTML=links(true);
document.getElementById('yr').textContent=new Date().getFullYear();

// Photo: tries each location until one works (else "KF" letters stay)
var PATHS=['images/photo.jpg','../web-01/images/photo.jpg','/CIT331/lab05/web-01/images/photo.jpg'];
document.querySelectorAll('img.pic').forEach(function(img){
  var i=0;img.onerror=function(){i++;if(i<PATHS.length){img.src=PATHS[i];}else{img.remove();}};img.src=PATHS[0];
});

// Copy email (contact page)
var copy=document.getElementById('copy'),toast=document.getElementById('toast');
if(copy){copy.addEventListener('click',function(){
  var show=function(t){toast.textContent=t;toast.classList.add('show');setTimeout(function(){toast.classList.remove('show');},1800);};
  if(navigator.clipboard){navigator.clipboard.writeText('fatishahid7@gmail.com').then(function(){show('Email copied');},function(){show('Copy failed');});}else{show('Copy not supported');}
});}