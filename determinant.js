const showResult = () =>{
let x1 = parseInt(document.getElementById('x1').value);
let x2 = parseInt(document.getElementById('x2').value);
let x3 = parseInt(document.getElementById('x3').value);

let y1 = parseInt(document.getElementById('y1').value);
let y2 = parseInt(document.getElementById('y2').value);
let y3 = parseInt(document.getElementById('y3').value);

let z1 = parseInt(document.getElementById('z1').value);
let z2 = parseInt(document.getElementById('z2').value);
let z3 = parseInt(document.getElementById('z3').value);

const c1 = parseInt(document.getElementById('c1').value);
const c2 = parseInt(document.getElementById('c2').value);
const c3 = parseInt(document.getElementById('c3').value);


const A = x1 * ((y2*z3) - (z2 * y3));
const B = y1* ((x2 * z3) - (z2 * x3));
const C = z1* ((x2 * y3) - (y2 * x3));

const D = A - B + C;

const DOf = (v) =>{
    if(v === 'x'){
        x1 = c1;
        x2 = c2;
        x3 = c3;

        const A = x1 * ((y2 * z3) - (z2 * y3));
        const B = y1 * ((x2 * z3) - (z2 * x3));
        const C = z1 * ((x2 * y3) - (y2 * x3));
        return A - B + C;
    }
    else if(v === 'y'){
        x1 = document.getElementById('x1').value;
        x2 = document.getElementById('x2').value;
        x3 = document.getElementById('x3').value;

        y1 = c1;
        y2 = c2;
        y3 = c3;
        const A = x1 * ((y2 * z3) - (z2 * y3));
        const B = y1 * ((x2 * z3) - (z2 * x3));
        const C = z1 * ((x2 * y3) - (y2 * x3));
        const result = A - B + C;
        return result;
    }
    else if(v === 'z'){
        x1 = document.getElementById('x1').value;
        x2 = document.getElementById('x2').value;
        x3 = document.getElementById('x3').value;

        y1 = document.getElementById('y1').value;
        y2 = document.getElementById('y2').value;
        y3 = document.getElementById('y3').value;

        z1 = c1;
        z2 = c2;
        z3 = c3;
        const A = x1 * ((y2 * z3) - (z2 * y3));
        const B = y1 * ((x2 * z3) - (z2 * x3));
        const C = z1 * ((x2 * y3) - (y2 * x3));
        const result = A - B + C;
        return result;

    }
    
}
const Dx = DOf('x');
const Dy = DOf('y');
const Dz = DOf('z');


const x = Dx / D;
const y = Dy / D;
const z = Dz / D;

console.log(x, y, z);
const displayField = document.getElementById('display-result');
displayField.value = `x: ${x}, y: ${y}, z: ${z}`

};