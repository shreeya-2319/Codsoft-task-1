let nav=doument.querySelector('nav');

window.addEventListener('scroll',()=> {
    nav.classlist.toggle('naWinScroll',window,scrollY>0)
})