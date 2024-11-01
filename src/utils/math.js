import * as $math from "mathjs";

export const math = {
    // 转换为 bignumber
    toBigNumber(value) {
        return $math.bignumber(value * 1 || 0);
    },
    // 加法
    add(...args) {
        return +$math.add(...args.map(this.toBigNumber));
    },
    // 减法
    subtract(a, b) {
        return +$math.subtract(this.toBigNumber(a), this.toBigNumber(b));
    },
    // 乘法
    multiply(...args) {
        return +$math.multiply(...args.map(this.toBigNumber));
    },
    // 除法
    divide(a, b) {
        return +$math.divide(this.toBigNumber(a), this.toBigNumber(b));
    },
    // 截取小数位（非四舍五入）
    intercept(num, size) {
        if (typeof num === "number" && size >= 0) {
            const multiple = $math.pow(10, size);
            return this.divide(parseInt(this.multiply(num, multiple)), multiple);
        } else {
            return num;
        }
    },

};
