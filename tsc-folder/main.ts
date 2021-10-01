function lo(message) {
  console.log(message);
}

// lo("Hello!!!");


function doSomething() {
  for (var i = 0; i <= 5; i++) {
    console.log(i);
  }
  console.log(`Final value ${i}`);
}

// doSomething();

// ------------ Variable declaration ----------//

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Red;

// --------- Type assertion//
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c'); //returns a boolean, yes
let alternativeWay = (message as string).endsWith('c');


//  ------ Declaring class and constructor----//
class Point {
  // x: number;
  // y: number;

  constructor(private x?: number, private y?: number) {
    // this.x = x;
    // this.y = y;
  }

  draw() {
    console.log('X:' + this.x + ', Y: ' + this.y);
  }

}

let point = new Point(1, 2);
// point.x = 1;
// point.y = 2;
point.draw();
