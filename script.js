"use strict";

const input=document.getElementById('input1');
const button=document.querySelector('.btn');
let itemsList=document.querySelector('.place');
let items = JSON.parse(localStorage.getItem('items'))||[];
const regex = new RegExp(`(^Боте запомни )\w*`);
 
let TODO={
    work:{
       // important:{},
        duties:{
            fortoday:'hello',
            value:[]
        }
    }
}

function logText(){
console.log(input.value);
}

function ifActivated(){
if(regex.test(input.value)){
const item=`${input.value}`.substring(13);
for (const [key, value] of Object.entries(TODO)) {
    console.log(`${key}: ${value}`);
    if(typeof TODO[key]==="object"&&
    !Array.isArray(TODO[key]) &&
    TODO[key] !== null){
    for (const [key1, value1] of Object.entries(TODO[key])){
    console.log(`${key1}: ${value1}`);
        }
    }
  }


//console.log(item);
}
}

function recrusiveF(TODOkey){
    console.log(TODOkey);
    console.log(TODO[duties])
    /*
    1 Да се предава листа (обекта)
    
    
    */
    console.log(typeof TODO[TODOkey])
    if(typeof TODO[TODOkey]==="object"){
        for (const [key, value] of Object.entries(TODO[TODOkey])) {
            console.log(`${key}: ${value}`,"eeeeee",typeof TODO[key]);
            console.log(key);
            recrusiveF(typeof key);
        }
        console.log(TODOkey);
    }
    // else if(){

    // }
    else{
        return;
    }
}



button.addEventListener('click',ifActivated);

/*
13!
боте запомни баба си
*/