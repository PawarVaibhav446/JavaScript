// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();


// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 20;
//     y();
// }
// x();

function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();