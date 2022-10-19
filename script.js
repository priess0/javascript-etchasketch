function boardSetup(x, y) {
    const mainDiv = document.getElementById("mainDiv");
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", "container h-100");
    mainDiv.appendChild(gridDiv);
    for (let yGrid = 0; yGrid < y; yGrid++) {
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "row h-25");
        gridDiv.appendChild(rowDiv)
        for (let xGrid = 0; xGrid < x; xGrid++) {
            let squareNumber = "square " + Number(yGrid+1) + "-" + Number(xGrid+1);
            console.log(squareNumber);
            const squareDivs = document.createElement("div");
            squareDivs.setAttribute("class", "squareDiv col-sm");
            squareDivs.setAttribute("name", squareNumber)
            rowDiv.appendChild(squareDivs);
        
        }
    }
}
boardSetup(4, 4);

const squares = document.getElementsByName("square");



