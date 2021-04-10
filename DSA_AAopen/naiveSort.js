//bubble sort 

function swap(array, idx1, idx2) {
    let temp = array[idx1]
    array[idx1] = array[idx2]
    array[idx2] = temp
    return array
}

function bubbleSort(array) {
    let sorted = true;

    while (sorted) {
        sorted = false;

        for(let i = 0; i < array.length - 1; i++ ){
            if (array[i] > array[i + 1]){
                swap(array, i, i + 1)
                sorted = true;
            } 
        }
    }

    return array;
}



//selectionSort

function swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let minIdx = i;

        for (let j = i + 1; j < arr.length; j++){
            if (arr[minIdx] > arr[j])
            minIdx = j;
        }
        swap(arr, i, minIdx)
    }

    return arr 
}

//[1,0,2]
// 


//insertionSort

function insertionSort(arr) {

    for(let i = 1; i < arr.length; i++){
        let ele = arr[i] //0

        // let counter = 0;
        for(var j = i - 1; j >= 0 && ele < arr[j]; j--){ //j = 1; 1 > 0?
            arr[j + 1] = arr[j]; // 1
            counter = j;
        }

        arr[j + 1] = ele
        // arr[counter + 1] = ele 
    }

    return arr 
}

//[1,0,2]