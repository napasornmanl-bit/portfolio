
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
 btn.classList.add('active'); const filter=btn.dataset.filter;
 document.querySelectorAll('.work-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter;});
}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
