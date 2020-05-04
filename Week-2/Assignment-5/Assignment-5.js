

function binarySearchPosition(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    let position = -1;
    let middle = Math.ceil((start + end)/2);

    while (end >= start){
        if (numbers[middle] == target) {
                position = middle;
                return position; 
        }   else if (numbers[middle] < target){ 
                start = middle + 1;
                middle = Math.ceil((start + end)/2);
        }   else {
                end = middle - 1;
                middle = Math.ceil((start + end)/2)
        }
        if (start > end)
            return position;
 
    }
}
       


console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0 
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3
