function c(val) {
    document.getElementById("d").value = val;
}

function math(val) {
    document.getElementById("d").value += val;
}

function e() {
    try {
      c(eval(document.getElementById("d").value))
    }

    catch(e) {
      c('Error')
    }
}
/*function bang(num) {
    var fact = 1;
    for (var i = 1; i <=num; i=+) {
         fact *= i;
         }
         return fact;
         }*/

