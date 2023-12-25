// gelen datanın sıra sıra en küçük ve en büyük yazdırma.


var reorderList = function(head) {
    let forloops = head.length
    let arr = head;
    let newArr=[]

    for(let i=0; i< forloops;i++){
        let newData = 0;
        if(i%2==0){
            newData = Math.min(...arr);
            arr.splice(arr.indexOf(Math.min(...arr)),1);
        }
        else{
            newData = Math.max(...arr);
            arr.splice(arr.indexOf(Math.max(...arr)),1);
        }
        newArr.push(newData);
    }
    return newArr
};

test = [1,2,3,4,5,6]

console.log(reorderList(test))


