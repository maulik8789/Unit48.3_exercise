function curriedAdd(total) {
    if (total == undefined)return 0;
    return function curriedTotal(num){
        if(num == undefined) return total;
        total += num;
        return curriedTotal;
    }
}

module.exports = { curriedAdd };
