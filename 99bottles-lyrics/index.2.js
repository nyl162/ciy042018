var x ="<br>";
var v = 99;
x +=  v+ " bottles of beer on the wall, "+v+" bottles of beer. <br>";
for(i=v;i>=0;i--){
    if (i==0){
        var j = "no more";
    }else{j=i}
    x += "Take one down and pass it around, "+j+" bottle";
    if(i!=1){x += "s";}

    x +=" of beer on the wall.<br><br>";
    x += j+" bottle";
    if(i!=1){x += "s";}
    x+= " on the wall, ";
    x+= j+" bottle";
    if(i!=1){x += "s";}
    x += " of beer.<br>";
}

x +=  "Go to the store and buy some more, "+v+ " bottles of beer on the wall.<br>"

document.getElementById('mylyrics').innerHTML = x;