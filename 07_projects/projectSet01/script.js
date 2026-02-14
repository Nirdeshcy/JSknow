const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");


//we can use forEach for nodelist,but not for HTMLcollection

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)//this tells us ki ye event aa kaha se rha h
        switch (e.target.id) {
            case "purple":
                body.style.backgroundColor = e.target.id;
                break;
            case "pink":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            default:
                body.style.backgroundColor = "rgb(0, 0, 0)"
                break;
        }
    })
});