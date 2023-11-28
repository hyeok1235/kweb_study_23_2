const permutation = (n, r) => {
    let ret_val = 1;
    for(let i = n; i > n-r; i--) {
        ret_val *= i;
    }
    return ret_val;
}

const combination = (n, r) => {
    let ret_val = 1;
    for(let i = n; i > n-r; i--) {
        ret_val *= i;
    }
    for(let i = 1; i <= r; i++) {
        ret_val /= i;
    }
    return ret_val;
}

const multiPermutation = (n, r) => {
    let ret_val = 1;
    for(let i = 0; i < r; i++) {
        ret_val *= n;
    }
    return ret_val;
}

const multiCombination = (n, r) => {
    let ret_val = 1;
    for(let i = (n + r - 1); i > (n - 1); i--) {
        ret_val *= i;
    }
    for(let i = 1; i <= r; i++) {
        ret_val /= i;
    }
    return ret_val;
}