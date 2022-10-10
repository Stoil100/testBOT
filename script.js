const inputHTML = document.getElementById('input');
const buttonHTML = document.getElementById('button');
const setCommand = 'боте, запомни в ';
const logCommand = 'боте, кво запомни?'
let rgxSet = new RegExp("^(".concat(setCommand, ") *w*"));
let rgxLog = new RegExp("^(".concat(logCommand, ") *w*"));

let TodoList={}
let lowChanceResponseText=["да ъпгрейдна бота", "да си гледам работата!", "да спра да занимавам бота с глупости", "да си пусна новата песен на Криско"];

function functionHub(){
    if(rgxSet.test(inputHTML)){
        doFunction();
    }
    else if(rgxLog.test(inputHTML)){
        logFunction();
    }
}

function doFunction(){
    let splitValue=((inputHTML.value).split(" в "));

        splitValue.shift(0,1);
        splitValue=splitValue.join();
        splitValue=splitValue.split(' - ');

    let textValue=splitValue.splice(1,1);

        textValue=textValue.join();
        splitValue=splitValue.join();
        splitValue=splitValue.split(' ');

    if(Math.random()===Math.random()){
        textValue=lowChanceResponseText[Math.round(Math.random()*(lowChanceResponseText.length-1))];
    }

    nesting(splitValue,TodoList,textValue);
    console.log(TodoList);
}
function nesting(items,list,text){
    if(typeof items==='string'||items.length===0){
       if(!(Array.isArray(list.value))){
       list.value=[];
       }
       list.value.push(text);
       return
    }
    console.log(list);
    if(typeof list[`${items[0]}`]==='undefined'){
    list[`${items[0]}`]={};
    }
    let lastlist=items[0];
   
    
        items=items.filter((value,index)=>
            index>0
        );
        nesting(items,list[`${lastlist}`],text);   
}

function logFunction(){
    document.write(TodoList)
}
buttonHTML.onclick = functionHub;
//боте, запомни в баба си - си да

// let TodoList = {
//     TODO: {
       
//     }
// }

// buttonHTML.onclick = functionHub;
// function functionHub() {
//     if (regex.test(inputHTML.value)) {
//         var foldersString = inputHTML.value.substring(botCommand.length);
//         var value = getValue(inputHTML.value);
//         var folders = getFolderStructure(foldersString);
//         findKeyRecrusively(TodoList, folders, value);
//         console.log(TodoList);
//     }
// }
// function getFolderStructure(foldersString) {
//     var folders = [];
//     var currentFolder = '';
//     for (var i = 0; i < foldersString.length; i++) {
//         if (foldersString[i] === ' ') {
//             folders.push(currentFolder);
//             currentFolder = '';
//         }
//         else if (i === foldersString.length - 1) {
//             currentFolder = currentFolder.concat(foldersString[i]);
//             folders.push(currentFolder);
//             currentFolder = '';
//             break;
//         }
//         else if (foldersString[i] === '-') {
//             currentFolder = '';
//             break;
//         }
//         else {
//             currentFolder = currentFolder.concat(foldersString[i]);
//         }
//     }
//     return folders;
// }
// function getValue(inputValue) {
//     var i = 0;
//     for (; i < inputValue.length; i++) {
//         if (inputValue[i] === '-')
//             break;
//     }
//     var value = inputValue.substring(i + 2);
//     return value;
// }
// function findKeyRecrusively(list, searchedKey, value) {
//     for (var childKey in list) {
//         if (typeof list[childKey] === 'object' &&
//             !Array.isArray(list[childKey]) &&
//             list[childKey] !== null) {
//             if (childKey == searchedKey[searchedKey.length - 1]) {
//                 list[childKey].values.push(value);
//             }
//             else {
//                 var newSearchedKey = searchedKey.filter(function (value, index) { return index > 0; });
//                 findKeyRecrusively(list[childKey], newSearchedKey, value);
//             }
//         }
//     }
//     return;
// }
/*
13!
//боте, запомни в баба си
*/