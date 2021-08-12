let T = document.querySelector('.time')
console.log(T)


function shit() {
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    T.innerText = h + " : " + m + " : " + s;

}
setInterval(shit, 1000)