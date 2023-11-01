let clickcount=sessionStorage.getItem('clickCount')||0
// console.log(clickcount)


function count()
{
    clickcount++;
    sessionStorage.setItem('clickcount',JSON.stringify(clickcount))
}







document.addEventListener('click',count.bind(null))