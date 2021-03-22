/* 
    1 : get all li element in the menu , 1-1 : get the underline span
    2 : when every li hover, function run
    3 : set the "width" & "left" of specific li ,and replace for specUnderline style
*/
// 1
const specLis = document.querySelectorAll('.special-menu ul li');
// 1-1
const specUnderline = document.querySelector('#special-menu-underline');
// 2
specLis.forEach(li => {
    li.addEventListener('mouseenter', (e) => {
        // 3
        specUnderline.style.left = e.target.offsetLeft + 'px';
        specUnderline.style.width = e.target.offsetWidth + 'px';
    })
})