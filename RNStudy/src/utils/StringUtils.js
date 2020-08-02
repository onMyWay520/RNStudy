const isEmpty = (param) => {
    let input = param + '';
    return input.trim() === '' || input === 'undefined' || input === 'null' || input === '[]' || input === ' ';
};

// 店铺名称
const rateString = (str) => {
    if (isEmpty(str)) {
        return str;
    }
    return str.substring(0, 1) + '*****' + str.substring(str.split('').length - 1);
};

// str必须是字符串，不是的转一下
const ratePriceStr = (str) => {
    if (isEmpty(str)) {
        return str;
    }
    if (str.indexOf('.') === -1) {
        str = str + '.00';
    }
    let strs = str.split('.');
    if (strs[0]) {
        // 有小数点
        let preStr = strs[0].split('');
        if (preStr.length > 1) {
            let first = preStr[0];
            let rate = '';
            for (let i = 0, len = preStr.length - 1; i < len; i++) {
                rate += '*';
            }
            return first + rate + '.' + strs[1];
        } else {
            return '*' + '.' + strs[1];
        }
    }
    return str;
};

const rateProdTitle = (str) => {
    if (isEmpty(str)) {
        return str;
    }
    let result = str.split('') || [];
    if (str.length > 10) {
        let i = 0;
        return result.map((val, index) => {
            if (index <= 5 || index >= result.length - 4) {
                return index % 2 === 0 ? val : '*';
            } else {
                i++;
                return i > 9 ? '' : '*';
            }
        });
    } else {
        return result.map((val, index) => {
            return index % 2 === 0 ? val : '*';
        });
    }
};

export default {
    isEmpty,
    rateString,
    ratePriceStr,
    rateProdTitle
};
