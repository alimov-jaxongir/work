// Navbar-menu
const navMenu=document.getElementById('nav-menu'),
    toggleMenu=document.getElementById('toggle-menu'),
    closeMenu=document.getElementById('close-menu')
    
    toggleMenu.addEventListener('click',()=>{
        navMenu.classList.toggle('show')
    })
    closeMenu.addEventListener('click',()=>{
        navMenu.classList.remove('show')
    })

    // Kurga yozilish
    function popupToggle(){
        const popup=document.getElementById('popup');
        popup.classList.toggle('active')
    }