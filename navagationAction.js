const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document) ;

const tabs = $$('.tab-item')
const content = $$('.tab-content') ;

tabs.forEach(function(tab,index){
    
    //$(".tab-content.active").classList.remove("active");
    tab.onclick = function(){
        $('.tab-item.active').classList.remove('active') ;
        this.classList.add('active');

       // $("tab-content").classList.add("active") ;
    };
});