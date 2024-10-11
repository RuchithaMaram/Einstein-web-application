document.getElementById('menu').addEventListener('click', function () {
    var navbar= document.getElementById('navbar');
    var name = document.getElementById('name');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
        name.style.display='none';
    } else {
        navbar.style.display = 'block';
        name.style.display='block';
    }
})