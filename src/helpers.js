/** 
* Returns a randomly selected item from array of items
*/
function choice(items){
    let ramdonIdx = Math.floor(Math.random() * items.length);
    return items[ramdonIdx];
}

/** 
* Removes the first matching item from items, if item exists, and returns it. 
* Otherwise returns undefined
*/
function remove(item, items){
    for(let i = 0; i < items.length; i++) {
        if(items[i] === item){
            let arrFirst = items.slice(0, i);
            let arrSecond = items.slice(i + 1);
            return arrFirst.concat(arrSecond);
        }
    }
}
  
export {choice, remove};