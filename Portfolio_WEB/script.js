document.addEventListener('DOMContentLoaded',function(){
  // year
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  // mobile nav (toggle + close on link click + accessible state)
  const toggle=document.getElementById('nav-toggle');
  const nav=document.getElementById('site-nav');
  if(toggle && nav){
    toggle.setAttribute('aria-controls','site-nav');
    toggle.setAttribute('aria-expanded','false');
    toggle.addEventListener('click',()=>{
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    // close when a link is clicked (mobile)
    nav.addEventListener('click', e=>{
      if(e.target.tagName === 'A'){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
    // close on Escape
    document.addEventListener('keydown', e=>{
      if(e.key === 'Escape'){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }

  // basic form handling (demo)
  const form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data=new FormData(form);
      // placeholder: open mail client
      const name=data.get('name');
      const email=data.get('email');
      const message=data.get('message');
      const subject=encodeURIComponent('Portfolio contact from '+name);
      const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href=`mailto:mukk988mukk988@gmail.com?subject=${subject}&body=${body}`;
    })
  }
});
