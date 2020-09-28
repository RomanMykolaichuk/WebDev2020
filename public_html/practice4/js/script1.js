/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function a() {

    return "Ok!";
}
//Scope

var x = 5;

function a(x) {
    
    x= x || 10;
    
   // var x = 2;

    x+=3;

    return x;

}

function b() {
        return x;
    }

function a() {
        return x;
    }
//x=10;
//console.log(x);

//String concat

var string = "String", string2=" 2";

string+=string2;
string=string+string2;

// Math (undefined)
x=5+6;

x=(6+9)/3;





//Equality + if
var x=0,y=false;

//x= x==y;
//x= x===y;

//True False

if (true && 1 && "Any text" && -1 && "false"){
    x=true;
};

if (false || 0 || "" || NaN || undefined || null){
    x=true;
} else {
    
  x=false;  
}

//{



// for loop



// default values handling

//object creation ways

//arrays creation ways, length

//foreach

//fake namespaces

//IIFE



