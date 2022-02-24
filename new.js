const colorcyan = document.getElementById('here');
colorcyan.onclick = makecyan;
function makegreen(){
    document.body.style.background = 'green';
}
function makecyan(){
    document.body.style.background = 'cyan';
}


const greencolor = document.getElementById('makegreen');
greencolor.onclick = function (){
    // handle event use anonymous
    document.body.style.background = 'green';
}
const goldenbutton = document.getElementById('makegolden');
goldenbutton.addEventListener('click', makegoldenrod)
// addeventlistener
function makegoldenrod (){
    document.body.style.background = 'gold'
}
// direct action appy for add listener
const makepinkcolor = document.getElementById('makehotpink')
makepinkcolor.addEventListener('click',function (){
    document.body.style.background = 'hotpink'
})