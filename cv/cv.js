document.getElementById('competence').style.display = 'none';
document.getElementById('diplomes').style.display = 'none';
document.getElementById('experience').style.display = 'none';
document.getElementById('loisirs').style.display = 'none';
function HideAndShow(selectedIndex) {
    let menu = document.getElementsByTagName('Section');
    for (menuIndex = 0; menuIndex < menu.length; menuIndex++){
        if (menuIndex == selectedIndex){
            menu[menuIndex].style.display =  'block';
        } else {
            menu[menuIndex].style.display = 'none';
        }
    }
}