var x ="<br>";

var btle = [" bottle of beer",
            " bottles of beer",
            " Take one down and pass it around, ",
            " Go to the store and buy some more, ",
            " on the wall"]

function ans(a){
    //console.log("a is " + a);
    if (a == 0) {a="no more";}
    else if (a<0) {a=99;}
        return a;
}

function singular(b){
    if (b===1){return 0;}
    else return 1;
}
function empty(c){
    if (c===99){return 3;}
    else return 2;
}

for (i=99;i>=0;i--){
    //console.log('Hello World !!!' + i);

    //console.log("i is " + i);
    var j = ans(i);
    //console.log("j is " + j);
    var k1 = i - 1;
    var k = ans(k1);
    //console.log("k is " + k);
    //console.log(j+btle[singular(j)] +btle[4]+", "+j+btle[singular(j)] +".<br>");
    x += j+btle[singular(j)] +btle[4]+", "+j+btle[singular(j)] +".<br>";
    //console.log(btle[empty(k)]+k+btle[singular(k)]+btle[4]+".<br>")
    x += btle[empty(k)]+k+btle[singular(k)]+btle[4]+".<br><br>";
    //console.log('<br>');
    //console.log('<br>');
};

document.getElementById('mylyrics').innerHTML = x;