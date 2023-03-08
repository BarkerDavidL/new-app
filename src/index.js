console.log("In index.js");
console.log("Now using webpack");

export function pageSet(newPage) {
    console.log("In pageSet()");
    let file = newPage;

    fetch (file)
        .then(response => response.text())
        .then(responseText => document.getElementById("current-page").innerHTML = responseText);
}

function setPageOnClick() {
    console.log("in setPageOnClick()");
    let list = document.getElementById('pagelist');
    console.log("list is: "+list+":");
    let listItems = list.getElementsByTagName('li');
    console.log("listItems are: "+listItems+":");
    [...listItems].forEach(element => {
        console.log("adding onclick for "+element.value+", innerHTML: "+element.innerHTML);
        if ("Setup" == element.innerHTML) {
            element.setAttribute('onclick', "mylib.pageSet('setup.html')");
        } else if ("New" == element.innerHTML) {
            element.setAttribute('onclick', "mylib.pageSet('new.html')");
        } else if ("Webpack" == element.innerHTML) {
            element.setAttribute('onclick', "mylib.pageSet('webpack.html')");
        } else if ("Babel" == element.innerHTML) {
            element.setAttribute('onclick', "mylib.pageSet('babel.html')");
        } else if ("Git" == element.innerHTML) {
            element.setAttribute('onclick', "mylib.pageSet('git.html')");
        }
    });
}

window.onload = () => {
    console.log("Window has loaded");
    setPageOnClick();
}