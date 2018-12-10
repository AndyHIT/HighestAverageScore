var highestAvgScore = function(arr){
    var hashTable = {};        
    for(var i=0; i<arr.length; i++){
        var ele = arr[i];     
        if(!hashTable.hasOwnProperty(ele[0])){
             hashTable[ele[0]] = {name: ele[0], score:[]};
        } 
        hashTable[ele[0]].score.push(ele[1]);
    }
    for(var key in hashTable){
        var total = hashTable[key].score.reduce(function(next, current){
               return parseInt(next) + parseInt(current);
        });
        hashTable[key] = Math.floor(total / hashTable[key].score.length);
    }
    //console.log(hashTable);
    var sortScores = [];
    for(var key in hashTable){
        sortScores.push([key, hashTable[key]]);
    }
    sortScores.sort(function(a, b){
        return b[1] - a[1];
    })
    return sortScores[0][0];
}
