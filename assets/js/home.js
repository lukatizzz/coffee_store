    var overlay=document.getElementById('site-bar-ovelay');
    var btn_close=document.getElementById('menu-close');
    var btn_open=document.getElementById('buttn-nav__mobile');
    var btn_open_navmenu=document.getElementById('btn-nav__menu');
    btn_close.onclick = function() {
        overlay.style.display="none";
    }
    
    btn_open.onclick= function(){
        overlay.style.display="block";
    }
    btn_open_navmenu.onclick= function(){
        overlay.style.display="block";
    }
