function addNum(n1, n2 = 10) {
    /*if (n2 == undefined) {
        n2 = 0;
    }*/
    //    n2 = n2 || 0;

    return n1 + n2;
}

const result = addNum(5, 2);
console.log(result);
