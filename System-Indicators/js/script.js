console.log('salve')

function addColumn() {

    var newDiv2 = document.createElement("div");

    for (var i = 0; i < 4; i++) {

        var newInput = document.createElement("input");

        newDiv2.appendChild(newInput);
    }
    newDiv2.classList.add("newDiv2")
    document.getElementById("column-indicators").appendChild(newDiv2);
}

function removeColumn() {
}