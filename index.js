// Iteration 1: Names and Input

let hacker1 = "Denisse";
let hacker2 = "Robert";

console.log("Iteration 1.1: The driver's name is", hacker1);
console.log(`Iteration 1.2: The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`Iteration 2: The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`Iteration 2: seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Iteration 3: Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

// 3.1
let nombre = "";

for (let i = 0; i < hacker1.length; i++) {
    nombre = nombre + hacker1.charAt(i).toUpperCase() + " ";
    // console.log(nombre) per comprovar les iteracions del loop
}

// De cada índex del nom (Denisse), començant per 0 (i=0, és a dir l'índex 0 que és la primera lletra), que és el valor inicial que declaro al for, vull que els més petits de la longitud total del text (hacker1.length) es vagin sumant al string buit nombre i es posin en majúscules fins a arribar a la longitud del text -1 (i<hacker1.length).
// En cada iteració del bucle, "i" pren el valor de 0 a 6 en aquest cas (Denisse té 7 lletres) fins que es compleix la condició, amb increments de +1 (i++ = 'i = i+1'). A cada iteració del loop nombre va prenent el seu valor inicial "" i hi afegeix els índexs de hacker1.length que va evaluant mentre es compleixi la condició i < hacker1.length i els converteix .toUpperCase. A més concatenem un espai buit per complir amb l'enunciat.
nombre = nombre.trim();
// afegim el mètode trim() a nombre perquè no tingui espais ni a l'inici ni al final
console.log(nombre);
// imprimim el resultat final de nombre després del bucle

// 3.2

let nombreDelRevés = "";

for(let i = hacker1.length - 1; i >= 0; i--) {
    nombreDelRevés = nombreDelRevés + hacker1.charAt(i);
}

console.log(nombreDelRevés);

// 3.3

console.log("a"<"b");

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1 = hacker2) {
    console.log("What?! You both have the same name");
}

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet sit amet dolor vel fringilla. Suspendisse porttitor, nibh ut pellentesque maximus, tortor risus gravida justo, non vestibulum augue leo nec nunc. Donec sollicitudin nunc vitae enim fermentum commodo. Nunc aliquam lectus augue, nec egestas mi gravida suscipit. Integer ut enim a odio molestie auctor. Duis volutpat dapibus consectetur. In leo arcu, blandit at lacinia eu, euismod a justo. Praesent hendrerit nisl porta est efficitur, non mattis urna pretium. Mauris eget nibh eget velit sagittis fringilla a et enim. Pellentesque tristique velit in lobortis malesuada.

Suspendisse tincidunt sit amet eros vitae commodo. Suspendisse ac nisi ac justo auctor venenatis vel id sapien. Integer malesuada mollis est, a molestie diam eleifend in. Donec eu lectus dignissim, pulvinar nisl tristique, pulvinar justo. Pellentesque tellus nibh, ultricies et posuere vel, egestas ut ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam malesuada egestas imperdiet. Nulla ornare sapien ut aliquam ultrices. Nam vitae tristique mi. Maecenas sed commodo felis, eget porttitor sem. Sed scelerisque tellus dolor, eu pharetra nunc elementum eget. Vivamus at purus lorem. Nulla vitae semper turpis. Donec sit amet condimentum ligula, quis suscipit dui.

Praesent viverra leo enim, in sagittis mauris imperdiet id. Phasellus sit amet ipsum fringilla, tincidunt justo quis, volutpat velit. Phasellus vulputate dignissim lectus nec vestibulum. Sed libero leo, vulputate sed cursus at, vestibulum non turpis. Fusce eget odio volutpat, fringilla dui sed, maximus ipsum. Sed lobortis enim turpis, sit amet tincidunt magna ullamcorper nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur aliquam tristique vulputate. Suspendisse suscipit nisl nibh, in sollicitudin tortor eleifend at. Aenean non felis a ex interdum mattis. Nunc rutrum velit et elit sollicitudin tempus id nec purus. Nulla cursus velit justo, at fermentum turpis dapibus at. Sed scelerisque mauris non ante lacinia lobortis. Suspendisse sodales at erat fringilla cursus.`

let palabra = longText.split(/\s+/);
console.log(palabra.length);

let contador = 0

