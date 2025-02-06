function calculateSquare() {
    let num = document.getElementById("numberInput").value;
    let square = num * num ;
    document.getElementById("result").innerText = "Square: " + square;
}
