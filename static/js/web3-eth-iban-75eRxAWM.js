import { ab as t } from "./web3-errors-hzVYhHGn.js";

import { a as r } from "./web3-validator-BARD4gRE.js";

import "./web3-types-DSrrWgZ8.js";

import { Q as i, z as e, R as s } from "./web3-utils-CA0vZo5F.js";

class n {
    /**
   * Construct a direct or indirect IBAN that has conversion methods and validity checks.
   * If the provided string was not of either the length of a direct IBAN (34 or 35),
   * nor the length of an indirect IBAN (20), an Error will be thrown ('Invalid IBAN was provided').
   *
   * @param iban - a Direct or an Indirect IBAN
   * @returns - Iban instance
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS");
   * > Iban { _iban: 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS' }
   * ```
   */
    constructor(t) {
        if (this.toAddress = () => {
            if (this.isDirect()) {
                const t = this._iban.slice(4), r = n._parseInt(t, 36), s = i(r, 40);
                return e(s);
            }
            throw new Error("Iban is indirect and cannot be converted. Must be length of 34 or 35");
        }, !n.isIndirect(t) && !n.isDirect(t)) throw new Error("Invalid IBAN was provided");
        this._iban = t;
    }
    /**
   * A static method that checks if an IBAN is Direct.
   * It actually check the length of the provided variable and, only if it is 34 or 35, it returns true.
   * Note: this is also available as a method at an Iban instance.
   * @param iban - an IBAN to be checked
   * @returns - `true` if the provided `iban` is a Direct IBAN, and `false` otherwise.
   *
   * @example
   * ```ts
   * web3.eth.Iban.isDirect("XE81ETHXREGGAVOFYORK");
   * > false
   * ```
   */    static isDirect(t) {
        return 34 === t.length || 35 === t.length;
    }
    /**
   * An instance method that checks if iban number is Direct.
   * It actually check the length of the provided variable and, only if it is 34 or 35, it returns true.
   * Note: this is also available as a static method.
   * @param iban - an IBAN to be checked
   * @returns - `true` if the provided `iban` is a Direct IBAN, and `false` otherwise.
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.isDirect();
   * > false
   * ```
   */    isDirect() {
        return n.isDirect(this._iban);
    }
    /**
   * A static method that checks if an IBAN is Indirect.
   * It actually check the length of the provided variable and, only if it is 20, it returns true.
   * Note: this is also available as a method at an Iban instance.
   * @param iban - an IBAN to be checked
   * @returns - `true` if the provided `iban` is an Indirect IBAN, and `false` otherwise.
   *
   * @example
   * ```ts
   * web3.eth.Iban.isIndirect("XE81ETHXREGGAVOFYORK");
   * > true
   * ```
   */    static isIndirect(t) {
        return 20 === t.length;
    }
    /**
   * check if iban number if indirect
   * It actually check the length of the provided variable and, only if it is 20, it returns true.
   * Note: this is also available as a static method.
   * @param iban - an IBAN to be checked
   * @returns - `true` if the provided `iban` is an Indirect IBAN, and `false` otherwise.
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.isIndirect();
   * > true
   * ```
   */    isIndirect() {
        return n.isIndirect(this._iban);
    }
    /**
   * This method could be used to check if a given string is valid IBAN object.
   * Note: this is also available as a method at an Iban instance.
   *
   * @param iban - a string to be checked if it is in IBAN
   * @returns - true if it is valid IBAN
   *
   * @example
   * ```ts
   * web3.eth.Iban.isValid("XE81ETHXREGGAVOFYORK");
   * > true
   *
   * web3.eth.Iban.isValid("XE82ETHXREGGAVOFYORK");
   * > false // because the checksum is incorrect
   * ```
   */    static isValid(t) {
        return /^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(t) && 1 === n._mod9710(n._iso13616Prepare(t));
    }
    /**
   * Should be called to check if the early provided IBAN is correct.
   * Note: this is also available as a static method.
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.isValid();
   * > true
   *
   * const iban = new web3.eth.Iban("XE82ETHXREGGAVOFYORK");
   * iban.isValid();
   * > false // because the checksum is incorrect
   * ```
   */    isValid() {
        return n.isValid(this._iban);
    }
    /**
   * Convert the passed BBAN to an IBAN for this country specification.
   * Please note that <i>"generation of the IBAN shall be the exclusive responsibility of the bank/branch servicing the account"</i>.
   * This method implements the preferred algorithm described in http://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits
   *
   * @param bban - the BBAN to convert to IBAN
   * @returns an Iban class instance that holds the equivalent IBAN
   *
   * @example
   * ```ts
   * web3.eth.Iban.fromBban('ETHXREGGAVOFYORK');
   * > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}
   * ```
   */    static fromBban(t) {
        const r = `0${(98 - this._mod9710(this._iso13616Prepare(`XE00${t}`))).toString()}`.slice(-2);
        return new n(`XE${r}${t}`);
    }
    /**
   * Should be used to create IBAN object for given institution and identifier
   *
   * @param options - an object holds the `institution` and the `identifier` which will be composed to create an `Iban` object from.
   * @returns an Iban class instance that holds the equivalent IBAN
   *
   * @example
   * ```ts
   * web3.eth.Iban.createIndirect({
   *     institution: "XREG",
   *     identifier: "GAVOFYORK"
   * });
   * > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}
   * ```
   */    static createIndirect(t) {
        return n.fromBban(`ETH${t.institution}${t.identifier}`);
    }
    /**
   * This method should be used to create iban object from an Ethereum address.
   *
   * @param address - an Ethereum address
   * @returns an Iban class instance that holds the equivalent IBAN
   *
   * @example
   * ```ts
   * web3.eth.Iban.fromAddress("0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8");
   * > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}
   * ```
   */    static fromAddress(e) {
        if (!r(e)) throw new t(e);
        const o = BigInt(s(e)).toString(36), a = i(o, 15);
        return n.fromBban(a.toUpperCase());
    }
    /**
   * This method should be used to create IBAN address from an Ethereum address
   *
   * @param address - an Ethereum address
   * @return the equivalent IBAN address
   *
   * @example
   * ```ts
   * web3.eth.Iban.toIban("0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8");
   * > "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"
   * ```
   */    static toIban(t) {
        return n.fromAddress(t).toString();
    }
    /**
   * Should be called to get client identifier within institution
   *
   * @return the client of the IBAN instance.
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.client();
   * > 'GAVOFYORK'
   * ```
   */    client() {
        return this.isIndirect() ? this._iban.slice(11) : "";
    }
    /**
   * Returns the IBAN checksum of the early provided IBAN
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.checksum();
   * > "81"
   * ```
   *
   */    checksum() {
        return this._iban.slice(2, 4);
    }
    /**
   * Returns institution identifier from the early provided  IBAN
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.institution();
   * > 'XREG'
   * ```
   */    institution() {
        return this.isIndirect() ? this._iban.slice(7, 11) : "";
    }
    /**
   * Simply returns the early provided IBAN
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS');
   * iban.toString();
   * > 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS'
   * ```
   */    toString() {
        return this._iban;
    }
}

n._iso13616Prepare = t => {
    const r = "A".charCodeAt(0), i = "Z".charCodeAt(0), e = t.toUpperCase();
    return `${e.slice(4)}${e.slice(0, 4)}`.split("").map((t => {
        const e = t.charCodeAt(0);
        return e >= r && e <= i ? e - r + 10 : t;
    })).join("");
}, n._parseInt = (t, r) => [ ...t ].reduce(((t, i) => BigInt(parseInt(i, r)) + BigInt(r) * t), BigInt(0)), 
n._mod9710 = t => {
    let r, i = t;
    for (;i.length > 2; ) r = i.slice(0, 9), i = `${(parseInt(r, 10) % 97).toString()}${i.slice(r.length)}`;
    return parseInt(i, 10) % 97;
}, n.toAddress = t => new n(t).toAddress();

export { n as I };
