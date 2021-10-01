function lo(message) {
    console.log(message);
}
// lo("Hello!!!");
function doSomething() {
    for (var i = 0; i <= 5; i++) {
        console.log(i);
    }
    console.log("Final value " + i);
}
// doSomething();
// ------------ Variable declaration ----------//
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
// --------- Type assertion//
var message;
message = 'abc';
var endsWithC = message.endsWith('c'); //returns a boolean, yes
var alternativeWay = message.endsWith('c');
