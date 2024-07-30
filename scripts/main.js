function insert(num)
{
    var number = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = number + num;
}

function clean(){
    document.getElementById('result').innerHTML = "";
}

function back(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function calculate() {
    var result = document.getElementById('result').innerHTML;
    if (result) {
        try {
            var evaluation = eval(result);
            var roundedResult = parseFloat(evaluation.toFixed(10)); // Limita a 10 casas decimais
            document.getElementById('result').innerHTML = roundedResult;
        } catch (e) {
            document.getElementById('result').innerHTML = "Error";
        }
    } else {
        document.getElementById('result').innerHTML = "0";
    }
}