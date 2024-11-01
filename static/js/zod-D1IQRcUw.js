var e, t, s;

(t = e || (e = {})).assertEqual = e => e, t.assertIs = function(e) {}, t.assertNever = function(e) {
    throw new Error;
}, t.arrayToEnum = e => {
    const t = {};
    for (const s of e) t[s] = s;
    return t;
}, t.getValidEnumValues = e => {
    const s = t.objectKeys(e).filter((t => "number" != typeof e[e[t]])), a = {};
    for (const t of s) a[t] = e[t];
    return t.objectValues(a);
}, t.objectValues = e => t.objectKeys(e).map((function(t) {
    return e[t];
})), t.objectKeys = "function" == typeof Object.keys ? e => Object.keys(e) : e => {
    const t = [];
    for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && t.push(s);
    return t;
}, t.find = (e, t) => {
    for (const s of e) if (t(s)) return s;
}, t.isInteger = "function" == typeof Number.isInteger ? e => Number.isInteger(e) : e => "number" == typeof e && isFinite(e) && Math.floor(e) === e, 
t.joinValues = function(e, t = " | ") {
    return e.map((e => "string" == typeof e ? `'${e}'` : e)).join(t);
}, t.jsonStringifyReplacer = (e, t) => "bigint" == typeof t ? t.toString() : t, 
(s || (s = {})).mergeShapes = (e, t) => ({
    ...e,
    ...t
});

const a = e.arrayToEnum([ "string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set" ]), n = e => {
    switch (typeof e) {
      case "undefined":
        return a.undefined;

      case "string":
        return a.string;

      case "number":
        return isNaN(e) ? a.nan : a.number;

      case "boolean":
        return a.boolean;

      case "function":
        return a.function;

      case "bigint":
        return a.bigint;

      case "symbol":
        return a.symbol;

      case "object":
        return Array.isArray(e) ? a.array : null === e ? a.null : e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch ? a.promise : "undefined" != typeof Map && e instanceof Map ? a.map : "undefined" != typeof Set && e instanceof Set ? a.set : "undefined" != typeof Date && e instanceof Date ? a.date : a.object;

      default:
        return a.unknown;
    }
}, r = e.arrayToEnum([ "invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite" ]);

class i extends Error {
    constructor(e) {
        super(), this.issues = [], this.addIssue = e => {
            this.issues = [ ...this.issues, e ];
        }, this.addIssues = (e = []) => {
            this.issues = [ ...this.issues, ...e ];
        };
        const t = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", 
        this.issues = e;
    }
    get errors() {
        return this.issues;
    }
    format(e) {
        const t = e || function(e) {
            return e.message;
        }, s = {
            _errors: []
        }, a = e => {
            for (const n of e.issues) if ("invalid_union" === n.code) n.unionErrors.map(a); else if ("invalid_return_type" === n.code) a(n.returnTypeError); else if ("invalid_arguments" === n.code) a(n.argumentsError); else if (0 === n.path.length) s._errors.push(t(n)); else {
                let e = s, a = 0;
                for (;a < n.path.length; ) {
                    const s = n.path[a];
                    a === n.path.length - 1 ? (e[s] = e[s] || {
                        _errors: []
                    }, e[s]._errors.push(t(n))) : e[s] = e[s] || {
                        _errors: []
                    }, e = e[s], a++;
                }
            }
        };
        return a(this), s;
    }
    static assert(e) {
        if (!(e instanceof i)) throw new Error(`Not a ZodError: ${e}`);
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, e.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return 0 === this.issues.length;
    }
    flatten(e = e => e.message) {
        const t = {}, s = [];
        for (const a of this.issues) a.path.length > 0 ? (t[a.path[0]] = t[a.path[0]] || [], 
        t[a.path[0]].push(e(a))) : s.push(e(a));
        return {
            formErrors: s,
            fieldErrors: t
        };
    }
    get formErrors() {
        return this.flatten();
    }
}

i.create = e => new i(e);

const o = (t, s) => {
    let n;
    switch (t.code) {
      case r.invalid_type:
        n = t.received === a.undefined ? "Required" : `Expected ${t.expected}, received ${t.received}`;
        break;

      case r.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(t.expected, e.jsonStringifyReplacer)}`;
        break;

      case r.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${e.joinValues(t.keys, ", ")}`;
        break;

      case r.invalid_union:
        n = "Invalid input";
        break;

      case r.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${e.joinValues(t.options)}`;
        break;

      case r.invalid_enum_value:
        n = `Invalid enum value. Expected ${e.joinValues(t.options)}, received '${t.received}'`;
        break;

      case r.invalid_arguments:
        n = "Invalid function arguments";
        break;

      case r.invalid_return_type:
        n = "Invalid function return type";
        break;

      case r.invalid_date:
        n = "Invalid date";
        break;

      case r.invalid_string:
        "object" == typeof t.validation ? "includes" in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`, 
        "number" == typeof t.validation.position && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : e.assertNever(t.validation) : n = "regex" !== t.validation ? `Invalid ${t.validation}` : "Invalid";
        break;

      case r.too_small:
        n = "array" === t.type ? `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : "string" === t.type ? `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : "number" === t.type ? `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : "date" === t.type ? `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : "Invalid input";
        break;

      case r.too_big:
        n = "array" === t.type ? `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : "string" === t.type ? `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : "number" === t.type ? `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : "bigint" === t.type ? `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : "date" === t.type ? `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : "Invalid input";
        break;

      case r.custom:
        n = "Invalid input";
        break;

      case r.invalid_intersection_types:
        n = "Intersection results could not be merged";
        break;

      case r.not_multiple_of:
        n = `Number must be a multiple of ${t.multipleOf}`;
        break;

      case r.not_finite:
        n = "Number must be finite";
        break;

      default:
        n = s.defaultError, e.assertNever(t);
    }
    return {
        message: n
    };
};

let d = o;

function u() {
    return d;
}

const c = e => {
    const {data: t, path: s, errorMaps: a, issueData: n} = e, r = [ ...s, ...n.path || [] ], i = {
        ...n,
        path: r
    };
    if (void 0 !== n.message) return {
        ...n,
        path: r,
        message: n.message
    };
    let o = "";
    const d = a.filter((e => !!e)).slice().reverse();
    for (const u of d) o = u(i, {
        data: t,
        defaultError: o
    }).message;
    return {
        ...n,
        path: r,
        message: o
    };
};

function l(e, t) {
    const s = u(), a = c({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [ e.common.contextualErrorMap, e.schemaErrorMap, s, s === o ? void 0 : o ].filter((e => !!e))
    });
    e.common.issues.push(a);
}

class h {
    constructor() {
        this.value = "valid";
    }
    dirty() {
        "valid" === this.value && (this.value = "dirty");
    }
    abort() {
        "aborted" !== this.value && (this.value = "aborted");
    }
    static mergeArray(e, t) {
        const s = [];
        for (const a of t) {
            if ("aborted" === a.status) return p;
            "dirty" === a.status && e.dirty(), s.push(a.value);
        }
        return {
            status: e.value,
            value: s
        };
    }
    static async mergeObjectAsync(e, t) {
        const s = [];
        for (const a of t) {
            const e = await a.key, t = await a.value;
            s.push({
                key: e,
                value: t
            });
        }
        return h.mergeObjectSync(e, s);
    }
    static mergeObjectSync(e, t) {
        const s = {};
        for (const a of t) {
            const {key: t, value: n} = a;
            if ("aborted" === t.status) return p;
            if ("aborted" === n.status) return p;
            "dirty" === t.status && e.dirty(), "dirty" === n.status && e.dirty(), "__proto__" === t.value || void 0 === n.value && !a.alwaysSet || (s[t.value] = n.value);
        }
        return {
            status: e.value,
            value: s
        };
    }
}

const p = Object.freeze({
    status: "aborted"
}), m = e => ({
    status: "dirty",
    value: e
}), f = e => ({
    status: "valid",
    value: e
}), _ = e => "aborted" === e.status, y = e => "dirty" === e.status, v = e => "valid" === e.status, g = e => "undefined" != typeof Promise && e instanceof Promise;

function k(e, t, s, a) {
    if ("function" == typeof t ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return t.get(e);
}

function x(e, t, s, a, n) {
    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, s), s;
}

var b, w, Z, T;

"function" == typeof SuppressedError && SuppressedError, (w = b || (b = {})).errToObj = e => "string" == typeof e ? {
    message: e
} : e || {}, w.toString = e => "string" == typeof e ? e : null == e ? void 0 : e.message;

class O {
    constructor(e, t, s, a) {
        this._cachedPath = [], this.parent = e, this.data = t, this._path = s, this._key = a;
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), 
        this._cachedPath;
    }
}

const C = (e, t) => {
    if (v(t)) return {
        success: !0,
        data: t.value
    };
    if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error) return this._error;
            const t = new i(e.common.issues);
            return this._error = t, this._error;
        }
    };
};

function N(e) {
    if (!e) return {};
    const {errorMap: t, invalid_type_error: s, required_error: a, description: n} = e;
    if (t && (s || a)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
    if (t) return {
        errorMap: t,
        description: n
    };
    return {
        errorMap: (t, n) => {
            var r, i;
            const {message: o} = e;
            return "invalid_enum_value" === t.code ? {
                message: null != o ? o : n.defaultError
            } : void 0 === n.data ? {
                message: null !== (r = null != o ? o : a) && void 0 !== r ? r : n.defaultError
            } : "invalid_type" !== t.code ? {
                message: n.defaultError
            } : {
                message: null !== (i = null != o ? o : s) && void 0 !== i ? i : n.defaultError
            };
        },
        description: n
    };
}

class S {
    constructor(e) {
        this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), 
        this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), 
        this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), 
        this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), 
        this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), 
        this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), 
        this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), 
        this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), 
        this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), 
        this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), 
        this.isOptional = this.isOptional.bind(this);
    }
    get description() {
        return this._def.description;
    }
    _getType(e) {
        return n(e.data);
    }
    _getOrReturnCtx(e, t) {
        return t || {
            common: e.parent.common,
            data: e.data,
            parsedType: n(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        };
    }
    _processInputParams(e) {
        return {
            status: new h,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: n(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        };
    }
    _parseSync(e) {
        const t = this._parse(e);
        if (g(t)) throw new Error("Synchronous parse encountered promise.");
        return t;
    }
    _parseAsync(e) {
        const t = this._parse(e);
        return Promise.resolve(t);
    }
    parse(e, t) {
        const s = this.safeParse(e, t);
        if (s.success) return s.data;
        throw s.error;
    }
    safeParse(e, t) {
        var s;
        const a = {
            common: {
                issues: [],
                async: null !== (s = null == t ? void 0 : t.async) && void 0 !== s && s,
                contextualErrorMap: null == t ? void 0 : t.errorMap
            },
            path: (null == t ? void 0 : t.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: n(e)
        }, r = this._parseSync({
            data: e,
            path: a.path,
            parent: a
        });
        return C(a, r);
    }
    async parseAsync(e, t) {
        const s = await this.safeParseAsync(e, t);
        if (s.success) return s.data;
        throw s.error;
    }
    async safeParseAsync(e, t) {
        const s = {
            common: {
                issues: [],
                contextualErrorMap: null == t ? void 0 : t.errorMap,
                async: !0
            },
            path: (null == t ? void 0 : t.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: n(e)
        }, a = this._parse({
            data: e,
            path: s.path,
            parent: s
        }), r = await (g(a) ? a : Promise.resolve(a));
        return C(s, r);
    }
    refine(e, t) {
        const s = e => "string" == typeof t || void 0 === t ? {
            message: t
        } : "function" == typeof t ? t(e) : t;
        return this._refinement(((t, a) => {
            const n = e(t), i = () => a.addIssue({
                code: r.custom,
                ...s(t)
            });
            return "undefined" != typeof Promise && n instanceof Promise ? n.then((e => !!e || (i(), 
            !1))) : !!n || (i(), !1);
        }));
    }
    refinement(e, t) {
        return this._refinement(((s, a) => !!e(s) || (a.addIssue("function" == typeof t ? t(s, a) : t), 
        !1)));
    }
    _refinement(e) {
        return new we({
            schema: this,
            typeName: Ae.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        });
    }
    superRefine(e) {
        return this._refinement(e);
    }
    optional() {
        return Ze.create(this, this._def);
    }
    nullable() {
        return Te.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ne.create(this, this._def);
    }
    promise() {
        return be.create(this, this._def);
    }
    or(e) {
        return oe.create([ this, e ], this._def);
    }
    and(e) {
        return le.create(this, e, this._def);
    }
    transform(e) {
        return new we({
            ...N(this._def),
            schema: this,
            typeName: Ae.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        });
    }
    default(e) {
        const t = "function" == typeof e ? e : () => e;
        return new Oe({
            ...N(this._def),
            innerType: this,
            defaultValue: t,
            typeName: Ae.ZodDefault
        });
    }
    brand() {
        return new Ee({
            typeName: Ae.ZodBranded,
            type: this,
            ...N(this._def)
        });
    }
    catch(e) {
        const t = "function" == typeof e ? e : () => e;
        return new Ce({
            ...N(this._def),
            innerType: this,
            catchValue: t,
            typeName: Ae.ZodCatch
        });
    }
    describe(e) {
        return new (0, this.constructor)({
            ...this._def,
            description: e
        });
    }
    pipe(e) {
        return je.create(this, e);
    }
    readonly() {
        return Ie.create(this);
    }
    isOptional() {
        return this.safeParse(void 0).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}

const E = /^c[^\s-]{8,}$/i, j = /^[0-9a-z]+$/, I = /^[0-9A-HJKMNP-TV-Z]{26}$/, R = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, P = /^[a-z0-9_-]{21}$/i, A = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, $ = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;

let M;

const L = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, D = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, V = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, z = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", U = new RegExp(`^${z}$`);

function K(e) {
    let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return e.precision ? t = `${t}\\.\\d{${e.precision}}` : null == e.precision && (t = `${t}(\\.\\d+)?`), 
    t;
}

function B(e) {
    let t = `${z}T${K(e)}`;
    const s = [];
    return s.push(e.local ? "Z?" : "Z"), e.offset && s.push("([+-]\\d{2}:?\\d{2})"), 
    t = `${t}(${s.join("|")})`, new RegExp(`^${t}$`);
}

class W extends S {
    _parse(t) {
        this._def.coerce && (t.data = String(t.data));
        if (this._getType(t) !== a.string) {
            const e = this._getOrReturnCtx(t);
            return l(e, {
                code: r.invalid_type,
                expected: a.string,
                received: e.parsedType
            }), p;
        }
        const s = new h;
        let n;
        for (const a of this._def.checks) if ("min" === a.kind) t.data.length < a.value && (n = this._getOrReturnCtx(t, n), 
        l(n, {
            code: r.too_small,
            minimum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message
        }), s.dirty()); else if ("max" === a.kind) t.data.length > a.value && (n = this._getOrReturnCtx(t, n), 
        l(n, {
            code: r.too_big,
            maximum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message
        }), s.dirty()); else if ("length" === a.kind) {
            const e = t.data.length > a.value, i = t.data.length < a.value;
            (e || i) && (n = this._getOrReturnCtx(t, n), e ? l(n, {
                code: r.too_big,
                maximum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message
            }) : i && l(n, {
                code: r.too_small,
                minimum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message
            }), s.dirty());
        } else if ("email" === a.kind) $.test(t.data) || (n = this._getOrReturnCtx(t, n), 
        l(n, {
            validation: "email",
            code: r.invalid_string,
            message: a.message
        }), s.dirty()); else if ("emoji" === a.kind) M || (M = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), 
        M.test(t.data) || (n = this._getOrReturnCtx(t, n), l(n, {
            validation: "emoji",
            code: r.invalid_string,
            message: a.message
        }), s.dirty()); else if ("uuid" === a.kind) R.test(t.data) || (n = this._getOrReturnCtx(t, n), 
        l(n, {
            validation: "uuid",
            code: r.invalid_string,
            message: a.message
        }), s.dirty()); else if ("nanoid" === a.kind) P.test(t.data) || (n = this._getOrReturnCtx(t, n), 
        l(n, {
            validation: "nanoid",
            code: r.invalid_string,
            message: a.message
        }), s.dirty()); else if ("cuid" === a.kind) E.test(t.data) || (n = this._getOrReturnCtx(t, n), 
        l(n, {
            validation: "cuid",
            code: r.invalid_string,
            message: a.message
        }), s.dirty()); else if ("cuid2" === a.kind) j.test(t.data) || (n = this._getOrReturnCtx(t, n), 
        l(n, {
            validation: "cuid2",
            code: r.invalid_string,
            message: a.message
        }), s.dirty()); else if ("ulid" === a.kind) I.test(t.data) || (n = this._getOrReturnCtx(t, n), 
        l(n, {
            validation: "ulid",
            code: r.invalid_string,
            message: a.message
        }), s.dirty()); else if ("url" === a.kind) try {
            new URL(t.data);
        } catch (d) {
            n = this._getOrReturnCtx(t, n), l(n, {
                validation: "url",
                code: r.invalid_string,
                message: a.message
            }), s.dirty();
        } else if ("regex" === a.kind) {
            a.regex.lastIndex = 0;
            a.regex.test(t.data) || (n = this._getOrReturnCtx(t, n), l(n, {
                validation: "regex",
                code: r.invalid_string,
                message: a.message
            }), s.dirty());
        } else if ("trim" === a.kind) t.data = t.data.trim(); else if ("includes" === a.kind) t.data.includes(a.value, a.position) || (n = this._getOrReturnCtx(t, n), 
        l(n, {
            code: r.invalid_string,
            validation: {
                includes: a.value,
                position: a.position
            },
            message: a.message
        }), s.dirty()); else if ("toLowerCase" === a.kind) t.data = t.data.toLowerCase(); else if ("toUpperCase" === a.kind) t.data = t.data.toUpperCase(); else if ("startsWith" === a.kind) t.data.startsWith(a.value) || (n = this._getOrReturnCtx(t, n), 
        l(n, {
            code: r.invalid_string,
            validation: {
                startsWith: a.value
            },
            message: a.message
        }), s.dirty()); else if ("endsWith" === a.kind) t.data.endsWith(a.value) || (n = this._getOrReturnCtx(t, n), 
        l(n, {
            code: r.invalid_string,
            validation: {
                endsWith: a.value
            },
            message: a.message
        }), s.dirty()); else if ("datetime" === a.kind) {
            B(a).test(t.data) || (n = this._getOrReturnCtx(t, n), l(n, {
                code: r.invalid_string,
                validation: "datetime",
                message: a.message
            }), s.dirty());
        } else if ("date" === a.kind) {
            U.test(t.data) || (n = this._getOrReturnCtx(t, n), l(n, {
                code: r.invalid_string,
                validation: "date",
                message: a.message
            }), s.dirty());
        } else if ("time" === a.kind) {
            new RegExp(`^${K(a)}$`).test(t.data) || (n = this._getOrReturnCtx(t, n), l(n, {
                code: r.invalid_string,
                validation: "time",
                message: a.message
            }), s.dirty());
        } else "duration" === a.kind ? A.test(t.data) || (n = this._getOrReturnCtx(t, n), 
        l(n, {
            validation: "duration",
            code: r.invalid_string,
            message: a.message
        }), s.dirty()) : "ip" === a.kind ? (i = t.data, ("v4" !== (o = a.version) && o || !L.test(i)) && ("v6" !== o && o || !D.test(i)) && (n = this._getOrReturnCtx(t, n), 
        l(n, {
            validation: "ip",
            code: r.invalid_string,
            message: a.message
        }), s.dirty())) : "base64" === a.kind ? V.test(t.data) || (n = this._getOrReturnCtx(t, n), 
        l(n, {
            validation: "base64",
            code: r.invalid_string,
            message: a.message
        }), s.dirty()) : e.assertNever(a);
        var i, o;
        return {
            status: s.value,
            value: t.data
        };
    }
    _regex(e, t, s) {
        return this.refinement((t => e.test(t)), {
            validation: t,
            code: r.invalid_string,
            ...b.errToObj(s)
        });
    }
    _addCheck(e) {
        return new W({
            ...this._def,
            checks: [ ...this._def.checks, e ]
        });
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...b.errToObj(e)
        });
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...b.errToObj(e)
        });
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...b.errToObj(e)
        });
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...b.errToObj(e)
        });
    }
    nanoid(e) {
        return this._addCheck({
            kind: "nanoid",
            ...b.errToObj(e)
        });
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...b.errToObj(e)
        });
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...b.errToObj(e)
        });
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...b.errToObj(e)
        });
    }
    base64(e) {
        return this._addCheck({
            kind: "base64",
            ...b.errToObj(e)
        });
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...b.errToObj(e)
        });
    }
    datetime(e) {
        var t, s;
        return "string" == typeof e ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
            offset: null !== (t = null == e ? void 0 : e.offset) && void 0 !== t && t,
            local: null !== (s = null == e ? void 0 : e.local) && void 0 !== s && s,
            ...b.errToObj(null == e ? void 0 : e.message)
        });
    }
    date(e) {
        return this._addCheck({
            kind: "date",
            message: e
        });
    }
    time(e) {
        return "string" == typeof e ? this._addCheck({
            kind: "time",
            precision: null,
            message: e
        }) : this._addCheck({
            kind: "time",
            precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
            ...b.errToObj(null == e ? void 0 : e.message)
        });
    }
    duration(e) {
        return this._addCheck({
            kind: "duration",
            ...b.errToObj(e)
        });
    }
    regex(e, t) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...b.errToObj(t)
        });
    }
    includes(e, t) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: null == t ? void 0 : t.position,
            ...b.errToObj(null == t ? void 0 : t.message)
        });
    }
    startsWith(e, t) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...b.errToObj(t)
        });
    }
    endsWith(e, t) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...b.errToObj(t)
        });
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...b.errToObj(t)
        });
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...b.errToObj(t)
        });
    }
    length(e, t) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...b.errToObj(t)
        });
    }
    /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */    nonempty(e) {
        return this.min(1, b.errToObj(e));
    }
    trim() {
        return new W({
            ...this._def,
            checks: [ ...this._def.checks, {
                kind: "trim"
            } ]
        });
    }
    toLowerCase() {
        return new W({
            ...this._def,
            checks: [ ...this._def.checks, {
                kind: "toLowerCase"
            } ]
        });
    }
    toUpperCase() {
        return new W({
            ...this._def,
            checks: [ ...this._def.checks, {
                kind: "toUpperCase"
            } ]
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((e => "datetime" === e.kind));
    }
    get isDate() {
        return !!this._def.checks.find((e => "date" === e.kind));
    }
    get isTime() {
        return !!this._def.checks.find((e => "time" === e.kind));
    }
    get isDuration() {
        return !!this._def.checks.find((e => "duration" === e.kind));
    }
    get isEmail() {
        return !!this._def.checks.find((e => "email" === e.kind));
    }
    get isURL() {
        return !!this._def.checks.find((e => "url" === e.kind));
    }
    get isEmoji() {
        return !!this._def.checks.find((e => "emoji" === e.kind));
    }
    get isUUID() {
        return !!this._def.checks.find((e => "uuid" === e.kind));
    }
    get isNANOID() {
        return !!this._def.checks.find((e => "nanoid" === e.kind));
    }
    get isCUID() {
        return !!this._def.checks.find((e => "cuid" === e.kind));
    }
    get isCUID2() {
        return !!this._def.checks.find((e => "cuid2" === e.kind));
    }
    get isULID() {
        return !!this._def.checks.find((e => "ulid" === e.kind));
    }
    get isIP() {
        return !!this._def.checks.find((e => "ip" === e.kind));
    }
    get isBase64() {
        return !!this._def.checks.find((e => "base64" === e.kind));
    }
    get minLength() {
        let e = null;
        for (const t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
        return e;
    }
    get maxLength() {
        let e = null;
        for (const t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
        return e;
    }
}

function F(e, t) {
    const s = (e.toString().split(".")[1] || "").length, a = (t.toString().split(".")[1] || "").length, n = s > a ? s : a;
    return parseInt(e.toFixed(n).replace(".", "")) % parseInt(t.toFixed(n).replace(".", "")) / Math.pow(10, n);
}

W.create = e => {
    var t;
    return new W({
        checks: [],
        typeName: Ae.ZodString,
        coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
        ...N(e)
    });
};

class q extends S {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
    }
    _parse(t) {
        this._def.coerce && (t.data = Number(t.data));
        if (this._getType(t) !== a.number) {
            const e = this._getOrReturnCtx(t);
            return l(e, {
                code: r.invalid_type,
                expected: a.number,
                received: e.parsedType
            }), p;
        }
        let s;
        const n = new h;
        for (const a of this._def.checks) if ("int" === a.kind) e.isInteger(t.data) || (s = this._getOrReturnCtx(t, s), 
        l(s, {
            code: r.invalid_type,
            expected: "integer",
            received: "float",
            message: a.message
        }), n.dirty()); else if ("min" === a.kind) {
            (a.inclusive ? t.data < a.value : t.data <= a.value) && (s = this._getOrReturnCtx(t, s), 
            l(s, {
                code: r.too_small,
                minimum: a.value,
                type: "number",
                inclusive: a.inclusive,
                exact: !1,
                message: a.message
            }), n.dirty());
        } else if ("max" === a.kind) {
            (a.inclusive ? t.data > a.value : t.data >= a.value) && (s = this._getOrReturnCtx(t, s), 
            l(s, {
                code: r.too_big,
                maximum: a.value,
                type: "number",
                inclusive: a.inclusive,
                exact: !1,
                message: a.message
            }), n.dirty());
        } else "multipleOf" === a.kind ? 0 !== F(t.data, a.value) && (s = this._getOrReturnCtx(t, s), 
        l(s, {
            code: r.not_multiple_of,
            multipleOf: a.value,
            message: a.message
        }), n.dirty()) : "finite" === a.kind ? Number.isFinite(t.data) || (s = this._getOrReturnCtx(t, s), 
        l(s, {
            code: r.not_finite,
            message: a.message
        }), n.dirty()) : e.assertNever(a);
        return {
            status: n.value,
            value: t.data
        };
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, b.toString(t));
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, b.toString(t));
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, b.toString(t));
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, b.toString(t));
    }
    setLimit(e, t, s, a) {
        return new q({
            ...this._def,
            checks: [ ...this._def.checks, {
                kind: e,
                value: t,
                inclusive: s,
                message: b.toString(a)
            } ]
        });
    }
    _addCheck(e) {
        return new q({
            ...this._def,
            checks: [ ...this._def.checks, e ]
        });
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: b.toString(e)
        });
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: b.toString(e)
        });
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: b.toString(e)
        });
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: b.toString(e)
        });
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: b.toString(e)
        });
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: b.toString(t)
        });
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: b.toString(e)
        });
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: b.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: b.toString(e)
        });
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
        return e;
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
        return e;
    }
    get isInt() {
        return !!this._def.checks.find((t => "int" === t.kind || "multipleOf" === t.kind && e.isInteger(t.value)));
    }
    get isFinite() {
        let e = null, t = null;
        for (const s of this._def.checks) {
            if ("finite" === s.kind || "int" === s.kind || "multipleOf" === s.kind) return !0;
            "min" === s.kind ? (null === t || s.value > t) && (t = s.value) : "max" === s.kind && (null === e || s.value < e) && (e = s.value);
        }
        return Number.isFinite(t) && Number.isFinite(e);
    }
}

q.create = e => new q({
    checks: [],
    typeName: Ae.ZodNumber,
    coerce: (null == e ? void 0 : e.coerce) || !1,
    ...N(e)
});

class J extends S {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte;
    }
    _parse(t) {
        this._def.coerce && (t.data = BigInt(t.data));
        if (this._getType(t) !== a.bigint) {
            const e = this._getOrReturnCtx(t);
            return l(e, {
                code: r.invalid_type,
                expected: a.bigint,
                received: e.parsedType
            }), p;
        }
        let s;
        const n = new h;
        for (const a of this._def.checks) if ("min" === a.kind) {
            (a.inclusive ? t.data < a.value : t.data <= a.value) && (s = this._getOrReturnCtx(t, s), 
            l(s, {
                code: r.too_small,
                type: "bigint",
                minimum: a.value,
                inclusive: a.inclusive,
                message: a.message
            }), n.dirty());
        } else if ("max" === a.kind) {
            (a.inclusive ? t.data > a.value : t.data >= a.value) && (s = this._getOrReturnCtx(t, s), 
            l(s, {
                code: r.too_big,
                type: "bigint",
                maximum: a.value,
                inclusive: a.inclusive,
                message: a.message
            }), n.dirty());
        } else "multipleOf" === a.kind ? t.data % a.value !== BigInt(0) && (s = this._getOrReturnCtx(t, s), 
        l(s, {
            code: r.not_multiple_of,
            multipleOf: a.value,
            message: a.message
        }), n.dirty()) : e.assertNever(a);
        return {
            status: n.value,
            value: t.data
        };
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, b.toString(t));
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, b.toString(t));
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, b.toString(t));
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, b.toString(t));
    }
    setLimit(e, t, s, a) {
        return new J({
            ...this._def,
            checks: [ ...this._def.checks, {
                kind: e,
                value: t,
                inclusive: s,
                message: b.toString(a)
            } ]
        });
    }
    _addCheck(e) {
        return new J({
            ...this._def,
            checks: [ ...this._def.checks, e ]
        });
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: b.toString(e)
        });
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: b.toString(e)
        });
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: b.toString(e)
        });
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: b.toString(e)
        });
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: b.toString(t)
        });
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
        return e;
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
        return e;
    }
}

J.create = e => {
    var t;
    return new J({
        checks: [],
        typeName: Ae.ZodBigInt,
        coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
        ...N(e)
    });
};

class Y extends S {
    _parse(e) {
        this._def.coerce && (e.data = Boolean(e.data));
        if (this._getType(e) !== a.boolean) {
            const t = this._getOrReturnCtx(e);
            return l(t, {
                code: r.invalid_type,
                expected: a.boolean,
                received: t.parsedType
            }), p;
        }
        return f(e.data);
    }
}

Y.create = e => new Y({
    typeName: Ae.ZodBoolean,
    coerce: (null == e ? void 0 : e.coerce) || !1,
    ...N(e)
});

class H extends S {
    _parse(t) {
        this._def.coerce && (t.data = new Date(t.data));
        if (this._getType(t) !== a.date) {
            const e = this._getOrReturnCtx(t);
            return l(e, {
                code: r.invalid_type,
                expected: a.date,
                received: e.parsedType
            }), p;
        }
        if (isNaN(t.data.getTime())) {
            return l(this._getOrReturnCtx(t), {
                code: r.invalid_date
            }), p;
        }
        const s = new h;
        let n;
        for (const a of this._def.checks) "min" === a.kind ? t.data.getTime() < a.value && (n = this._getOrReturnCtx(t, n), 
        l(n, {
            code: r.too_small,
            message: a.message,
            inclusive: !0,
            exact: !1,
            minimum: a.value,
            type: "date"
        }), s.dirty()) : "max" === a.kind ? t.data.getTime() > a.value && (n = this._getOrReturnCtx(t, n), 
        l(n, {
            code: r.too_big,
            message: a.message,
            inclusive: !0,
            exact: !1,
            maximum: a.value,
            type: "date"
        }), s.dirty()) : e.assertNever(a);
        return {
            status: s.value,
            value: new Date(t.data.getTime())
        };
    }
    _addCheck(e) {
        return new H({
            ...this._def,
            checks: [ ...this._def.checks, e ]
        });
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: b.toString(t)
        });
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: b.toString(t)
        });
    }
    get minDate() {
        let e = null;
        for (const t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
        return null != e ? new Date(e) : null;
    }
    get maxDate() {
        let e = null;
        for (const t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
        return null != e ? new Date(e) : null;
    }
}

H.create = e => new H({
    checks: [],
    coerce: (null == e ? void 0 : e.coerce) || !1,
    typeName: Ae.ZodDate,
    ...N(e)
});

class G extends S {
    _parse(e) {
        if (this._getType(e) !== a.symbol) {
            const t = this._getOrReturnCtx(e);
            return l(t, {
                code: r.invalid_type,
                expected: a.symbol,
                received: t.parsedType
            }), p;
        }
        return f(e.data);
    }
}

G.create = e => new G({
    typeName: Ae.ZodSymbol,
    ...N(e)
});

class X extends S {
    _parse(e) {
        if (this._getType(e) !== a.undefined) {
            const t = this._getOrReturnCtx(e);
            return l(t, {
                code: r.invalid_type,
                expected: a.undefined,
                received: t.parsedType
            }), p;
        }
        return f(e.data);
    }
}

X.create = e => new X({
    typeName: Ae.ZodUndefined,
    ...N(e)
});

class Q extends S {
    _parse(e) {
        if (this._getType(e) !== a.null) {
            const t = this._getOrReturnCtx(e);
            return l(t, {
                code: r.invalid_type,
                expected: a.null,
                received: t.parsedType
            }), p;
        }
        return f(e.data);
    }
}

Q.create = e => new Q({
    typeName: Ae.ZodNull,
    ...N(e)
});

class ee extends S {
    constructor() {
        super(...arguments), this._any = !0;
    }
    _parse(e) {
        return f(e.data);
    }
}

ee.create = e => new ee({
    typeName: Ae.ZodAny,
    ...N(e)
});

class te extends S {
    constructor() {
        super(...arguments), this._unknown = !0;
    }
    _parse(e) {
        return f(e.data);
    }
}

te.create = e => new te({
    typeName: Ae.ZodUnknown,
    ...N(e)
});

class se extends S {
    _parse(e) {
        const t = this._getOrReturnCtx(e);
        return l(t, {
            code: r.invalid_type,
            expected: a.never,
            received: t.parsedType
        }), p;
    }
}

se.create = e => new se({
    typeName: Ae.ZodNever,
    ...N(e)
});

class ae extends S {
    _parse(e) {
        if (this._getType(e) !== a.undefined) {
            const t = this._getOrReturnCtx(e);
            return l(t, {
                code: r.invalid_type,
                expected: a.void,
                received: t.parsedType
            }), p;
        }
        return f(e.data);
    }
}

ae.create = e => new ae({
    typeName: Ae.ZodVoid,
    ...N(e)
});

class ne extends S {
    _parse(e) {
        const {ctx: t, status: s} = this._processInputParams(e), n = this._def;
        if (t.parsedType !== a.array) return l(t, {
            code: r.invalid_type,
            expected: a.array,
            received: t.parsedType
        }), p;
        if (null !== n.exactLength) {
            const e = t.data.length > n.exactLength.value, a = t.data.length < n.exactLength.value;
            (e || a) && (l(t, {
                code: e ? r.too_big : r.too_small,
                minimum: a ? n.exactLength.value : void 0,
                maximum: e ? n.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: n.exactLength.message
            }), s.dirty());
        }
        if (null !== n.minLength && t.data.length < n.minLength.value && (l(t, {
            code: r.too_small,
            minimum: n.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: n.minLength.message
        }), s.dirty()), null !== n.maxLength && t.data.length > n.maxLength.value && (l(t, {
            code: r.too_big,
            maximum: n.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: n.maxLength.message
        }), s.dirty()), t.common.async) return Promise.all([ ...t.data ].map(((e, s) => n.type._parseAsync(new O(t, e, t.path, s))))).then((e => h.mergeArray(s, e)));
        const i = [ ...t.data ].map(((e, s) => n.type._parseSync(new O(t, e, t.path, s))));
        return h.mergeArray(s, i);
    }
    get element() {
        return this._def.type;
    }
    min(e, t) {
        return new ne({
            ...this._def,
            minLength: {
                value: e,
                message: b.toString(t)
            }
        });
    }
    max(e, t) {
        return new ne({
            ...this._def,
            maxLength: {
                value: e,
                message: b.toString(t)
            }
        });
    }
    length(e, t) {
        return new ne({
            ...this._def,
            exactLength: {
                value: e,
                message: b.toString(t)
            }
        });
    }
    nonempty(e) {
        return this.min(1, e);
    }
}

function re(e) {
    if (e instanceof ie) {
        const t = {};
        for (const s in e.shape) {
            const a = e.shape[s];
            t[s] = Ze.create(re(a));
        }
        return new ie({
            ...e._def,
            shape: () => t
        });
    }
    return e instanceof ne ? new ne({
        ...e._def,
        type: re(e.element)
    }) : e instanceof Ze ? Ze.create(re(e.unwrap())) : e instanceof Te ? Te.create(re(e.unwrap())) : e instanceof he ? he.create(e.items.map((e => re(e)))) : e;
}

ne.create = (e, t) => new ne({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Ae.ZodArray,
    ...N(t)
});

class ie extends S {
    constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
    }
    _getCached() {
        if (null !== this._cached) return this._cached;
        const t = this._def.shape(), s = e.objectKeys(t);
        return this._cached = {
            shape: t,
            keys: s
        };
    }
    _parse(e) {
        if (this._getType(e) !== a.object) {
            const t = this._getOrReturnCtx(e);
            return l(t, {
                code: r.invalid_type,
                expected: a.object,
                received: t.parsedType
            }), p;
        }
        const {status: t, ctx: s} = this._processInputParams(e), {shape: n, keys: i} = this._getCached(), o = [];
        if (!(this._def.catchall instanceof se && "strip" === this._def.unknownKeys)) for (const a in s.data) i.includes(a) || o.push(a);
        const d = [];
        for (const a of i) {
            const e = n[a], t = s.data[a];
            d.push({
                key: {
                    status: "valid",
                    value: a
                },
                value: e._parse(new O(s, t, s.path, a)),
                alwaysSet: a in s.data
            });
        }
        if (this._def.catchall instanceof se) {
            const e = this._def.unknownKeys;
            if ("passthrough" === e) for (const t of o) d.push({
                key: {
                    status: "valid",
                    value: t
                },
                value: {
                    status: "valid",
                    value: s.data[t]
                }
            }); else if ("strict" === e) o.length > 0 && (l(s, {
                code: r.unrecognized_keys,
                keys: o
            }), t.dirty()); else if ("strip" !== e) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
            const e = this._def.catchall;
            for (const t of o) {
                const a = s.data[t];
                d.push({
                    key: {
                        status: "valid",
                        value: t
                    },
                    value: e._parse(new O(s, a, s.path, t)),
                    alwaysSet: t in s.data
                });
            }
        }
        return s.common.async ? Promise.resolve().then((async () => {
            const e = [];
            for (const t of d) {
                const s = await t.key, a = await t.value;
                e.push({
                    key: s,
                    value: a,
                    alwaysSet: t.alwaysSet
                });
            }
            return e;
        })).then((e => h.mergeObjectSync(t, e))) : h.mergeObjectSync(t, d);
    }
    get shape() {
        return this._def.shape();
    }
    strict(e) {
        return b.errToObj, new ie({
            ...this._def,
            unknownKeys: "strict",
            ...void 0 !== e ? {
                errorMap: (t, s) => {
                    var a, n, r, i;
                    const o = null !== (r = null === (n = (a = this._def).errorMap) || void 0 === n ? void 0 : n.call(a, t, s).message) && void 0 !== r ? r : s.defaultError;
                    return "unrecognized_keys" === t.code ? {
                        message: null !== (i = b.errToObj(e).message) && void 0 !== i ? i : o
                    } : {
                        message: o
                    };
                }
            } : {}
        });
    }
    strip() {
        return new ie({
            ...this._def,
            unknownKeys: "strip"
        });
    }
    passthrough() {
        return new ie({
            ...this._def,
            unknownKeys: "passthrough"
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(e) {
        return new ie({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...e
            })
        });
    }
    /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */    merge(e) {
        return new ie({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...e._def.shape()
            }),
            typeName: Ae.ZodObject
        });
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(e, t) {
        return this.augment({
            [e]: t
        });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(e) {
        return new ie({
            ...this._def,
            catchall: e
        });
    }
    pick(t) {
        const s = {};
        return e.objectKeys(t).forEach((e => {
            t[e] && this.shape[e] && (s[e] = this.shape[e]);
        })), new ie({
            ...this._def,
            shape: () => s
        });
    }
    omit(t) {
        const s = {};
        return e.objectKeys(this.shape).forEach((e => {
            t[e] || (s[e] = this.shape[e]);
        })), new ie({
            ...this._def,
            shape: () => s
        });
    }
    /**
   * @deprecated
   */    deepPartial() {
        return re(this);
    }
    partial(t) {
        const s = {};
        return e.objectKeys(this.shape).forEach((e => {
            const a = this.shape[e];
            t && !t[e] ? s[e] = a : s[e] = a.optional();
        })), new ie({
            ...this._def,
            shape: () => s
        });
    }
    required(t) {
        const s = {};
        return e.objectKeys(this.shape).forEach((e => {
            if (t && !t[e]) s[e] = this.shape[e]; else {
                let t = this.shape[e];
                for (;t instanceof Ze; ) t = t._def.innerType;
                s[e] = t;
            }
        })), new ie({
            ...this._def,
            shape: () => s
        });
    }
    keyof() {
        return ge(e.objectKeys(this.shape));
    }
}

ie.create = (e, t) => new ie({
    shape: () => e,
    unknownKeys: "strip",
    catchall: se.create(),
    typeName: Ae.ZodObject,
    ...N(t)
}), ie.strictCreate = (e, t) => new ie({
    shape: () => e,
    unknownKeys: "strict",
    catchall: se.create(),
    typeName: Ae.ZodObject,
    ...N(t)
}), ie.lazycreate = (e, t) => new ie({
    shape: e,
    unknownKeys: "strip",
    catchall: se.create(),
    typeName: Ae.ZodObject,
    ...N(t)
});

class oe extends S {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e), s = this._def.options;
        if (t.common.async) return Promise.all(s.map((async e => {
            const s = {
                ...t,
                common: {
                    ...t.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: s
                }),
                ctx: s
            };
        }))).then((function(e) {
            for (const t of e) if ("valid" === t.result.status) return t.result;
            for (const a of e) if ("dirty" === a.result.status) return t.common.issues.push(...a.ctx.common.issues), 
            a.result;
            const s = e.map((e => new i(e.ctx.common.issues)));
            return l(t, {
                code: r.invalid_union,
                unionErrors: s
            }), p;
        }));
        {
            let e;
            const a = [];
            for (const r of s) {
                const s = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    },
                    parent: null
                }, n = r._parseSync({
                    data: t.data,
                    path: t.path,
                    parent: s
                });
                if ("valid" === n.status) return n;
                "dirty" !== n.status || e || (e = {
                    result: n,
                    ctx: s
                }), s.common.issues.length && a.push(s.common.issues);
            }
            if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
            const n = a.map((e => new i(e)));
            return l(t, {
                code: r.invalid_union,
                unionErrors: n
            }), p;
        }
    }
    get options() {
        return this._def.options;
    }
}

oe.create = (e, t) => new oe({
    options: e,
    typeName: Ae.ZodUnion,
    ...N(t)
});

const de = t => t instanceof ye ? de(t.schema) : t instanceof we ? de(t.innerType()) : t instanceof ve ? [ t.value ] : t instanceof ke ? t.options : t instanceof xe ? e.objectValues(t.enum) : t instanceof Oe ? de(t._def.innerType) : t instanceof X ? [ void 0 ] : t instanceof Q ? [ null ] : t instanceof Ze ? [ void 0, ...de(t.unwrap()) ] : t instanceof Te ? [ null, ...de(t.unwrap()) ] : t instanceof Ee || t instanceof Ie ? de(t.unwrap()) : t instanceof Ce ? de(t._def.innerType) : [];

class ue extends S {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        if (t.parsedType !== a.object) return l(t, {
            code: r.invalid_type,
            expected: a.object,
            received: t.parsedType
        }), p;
        const s = this.discriminator, n = t.data[s], i = this.optionsMap.get(n);
        return i ? t.common.async ? i._parseAsync({
            data: t.data,
            path: t.path,
            parent: t
        }) : i._parseSync({
            data: t.data,
            path: t.path,
            parent: t
        }) : (l(t, {
            code: r.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [ s ]
        }), p);
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */    static create(e, t, s) {
        const a =  new Map;
        for (const n of t) {
            const t = de(n.shape[e]);
            if (!t.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const s of t) {
                if (a.has(s)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`);
                a.set(s, n);
            }
        }
        return new ue({
            typeName: Ae.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: a,
            ...N(s)
        });
    }
}

function ce(t, s) {
    const r = n(t), i = n(s);
    if (t === s) return {
        valid: !0,
        data: t
    };
    if (r === a.object && i === a.object) {
        const a = e.objectKeys(s), n = e.objectKeys(t).filter((e => -1 !== a.indexOf(e))), r = {
            ...t,
            ...s
        };
        for (const e of n) {
            const a = ce(t[e], s[e]);
            if (!a.valid) return {
                valid: !1
            };
            r[e] = a.data;
        }
        return {
            valid: !0,
            data: r
        };
    }
    if (r === a.array && i === a.array) {
        if (t.length !== s.length) return {
            valid: !1
        };
        const e = [];
        for (let a = 0; a < t.length; a++) {
            const n = ce(t[a], s[a]);
            if (!n.valid) return {
                valid: !1
            };
            e.push(n.data);
        }
        return {
            valid: !0,
            data: e
        };
    }
    return r === a.date && i === a.date && +t == +s ? {
        valid: !0,
        data: t
    } : {
        valid: !1
    };
}

class le extends S {
    _parse(e) {
        const {status: t, ctx: s} = this._processInputParams(e), a = (e, a) => {
            if (_(e) || _(a)) return p;
            const n = ce(e.value, a.value);
            return n.valid ? ((y(e) || y(a)) && t.dirty(), {
                status: t.value,
                value: n.data
            }) : (l(s, {
                code: r.invalid_intersection_types
            }), p);
        };
        return s.common.async ? Promise.all([ this._def.left._parseAsync({
            data: s.data,
            path: s.path,
            parent: s
        }), this._def.right._parseAsync({
            data: s.data,
            path: s.path,
            parent: s
        }) ]).then((([e, t]) => a(e, t))) : a(this._def.left._parseSync({
            data: s.data,
            path: s.path,
            parent: s
        }), this._def.right._parseSync({
            data: s.data,
            path: s.path,
            parent: s
        }));
    }
}

le.create = (e, t, s) => new le({
    left: e,
    right: t,
    typeName: Ae.ZodIntersection,
    ...N(s)
});

class he extends S {
    _parse(e) {
        const {status: t, ctx: s} = this._processInputParams(e);
        if (s.parsedType !== a.array) return l(s, {
            code: r.invalid_type,
            expected: a.array,
            received: s.parsedType
        }), p;
        if (s.data.length < this._def.items.length) return l(s, {
            code: r.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), p;
        !this._def.rest && s.data.length > this._def.items.length && (l(s, {
            code: r.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), t.dirty());
        const n = [ ...s.data ].map(((e, t) => {
            const a = this._def.items[t] || this._def.rest;
            return a ? a._parse(new O(s, e, s.path, t)) : null;
        })).filter((e => !!e));
        return s.common.async ? Promise.all(n).then((e => h.mergeArray(t, e))) : h.mergeArray(t, n);
    }
    get items() {
        return this._def.items;
    }
    rest(e) {
        return new he({
            ...this._def,
            rest: e
        });
    }
}

he.create = (e, t) => {
    if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new he({
        items: e,
        typeName: Ae.ZodTuple,
        rest: null,
        ...N(t)
    });
};

class pe extends S {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(e) {
        const {status: t, ctx: s} = this._processInputParams(e);
        if (s.parsedType !== a.object) return l(s, {
            code: r.invalid_type,
            expected: a.object,
            received: s.parsedType
        }), p;
        const n = [], i = this._def.keyType, o = this._def.valueType;
        for (const a in s.data) n.push({
            key: i._parse(new O(s, a, s.path, a)),
            value: o._parse(new O(s, s.data[a], s.path, a)),
            alwaysSet: a in s.data
        });
        return s.common.async ? h.mergeObjectAsync(t, n) : h.mergeObjectSync(t, n);
    }
    get element() {
        return this._def.valueType;
    }
    static create(e, t, s) {
        return new pe(t instanceof S ? {
            keyType: e,
            valueType: t,
            typeName: Ae.ZodRecord,
            ...N(s)
        } : {
            keyType: W.create(),
            valueType: e,
            typeName: Ae.ZodRecord,
            ...N(t)
        });
    }
}

class me extends S {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(e) {
        const {status: t, ctx: s} = this._processInputParams(e);
        if (s.parsedType !== a.map) return l(s, {
            code: r.invalid_type,
            expected: a.map,
            received: s.parsedType
        }), p;
        const n = this._def.keyType, i = this._def.valueType, o = [ ...s.data.entries() ].map((([e, t], a) => ({
            key: n._parse(new O(s, e, s.path, [ a, "key" ])),
            value: i._parse(new O(s, t, s.path, [ a, "value" ]))
        })));
        if (s.common.async) {
            const e =  new Map;
            return Promise.resolve().then((async () => {
                for (const s of o) {
                    const a = await s.key, n = await s.value;
                    if ("aborted" === a.status || "aborted" === n.status) return p;
                    "dirty" !== a.status && "dirty" !== n.status || t.dirty(), e.set(a.value, n.value);
                }
                return {
                    status: t.value,
                    value: e
                };
            }));
        }
        {
            const e =  new Map;
            for (const s of o) {
                const a = s.key, n = s.value;
                if ("aborted" === a.status || "aborted" === n.status) return p;
                "dirty" !== a.status && "dirty" !== n.status || t.dirty(), e.set(a.value, n.value);
            }
            return {
                status: t.value,
                value: e
            };
        }
    }
}

me.create = (e, t, s) => new me({
    valueType: t,
    keyType: e,
    typeName: Ae.ZodMap,
    ...N(s)
});

class fe extends S {
    _parse(e) {
        const {status: t, ctx: s} = this._processInputParams(e);
        if (s.parsedType !== a.set) return l(s, {
            code: r.invalid_type,
            expected: a.set,
            received: s.parsedType
        }), p;
        const n = this._def;
        null !== n.minSize && s.data.size < n.minSize.value && (l(s, {
            code: r.too_small,
            minimum: n.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: n.minSize.message
        }), t.dirty()), null !== n.maxSize && s.data.size > n.maxSize.value && (l(s, {
            code: r.too_big,
            maximum: n.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: n.maxSize.message
        }), t.dirty());
        const i = this._def.valueType;
        function o(e) {
            const s =  new Set;
            for (const a of e) {
                if ("aborted" === a.status) return p;
                "dirty" === a.status && t.dirty(), s.add(a.value);
            }
            return {
                status: t.value,
                value: s
            };
        }
        const d = [ ...s.data.values() ].map(((e, t) => i._parse(new O(s, e, s.path, t))));
        return s.common.async ? Promise.all(d).then((e => o(e))) : o(d);
    }
    min(e, t) {
        return new fe({
            ...this._def,
            minSize: {
                value: e,
                message: b.toString(t)
            }
        });
    }
    max(e, t) {
        return new fe({
            ...this._def,
            maxSize: {
                value: e,
                message: b.toString(t)
            }
        });
    }
    size(e, t) {
        return this.min(e, t).max(e, t);
    }
    nonempty(e) {
        return this.min(1, e);
    }
}

fe.create = (e, t) => new fe({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: Ae.ZodSet,
    ...N(t)
});

class _e extends S {
    constructor() {
        super(...arguments), this.validate = this.implement;
    }
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        if (t.parsedType !== a.function) return l(t, {
            code: r.invalid_type,
            expected: a.function,
            received: t.parsedType
        }), p;
        function s(e, s) {
            return c({
                data: e,
                path: t.path,
                errorMaps: [ t.common.contextualErrorMap, t.schemaErrorMap, u(), o ].filter((e => !!e)),
                issueData: {
                    code: r.invalid_arguments,
                    argumentsError: s
                }
            });
        }
        function n(e, s) {
            return c({
                data: e,
                path: t.path,
                errorMaps: [ t.common.contextualErrorMap, t.schemaErrorMap, u(), o ].filter((e => !!e)),
                issueData: {
                    code: r.invalid_return_type,
                    returnTypeError: s
                }
            });
        }
        const d = {
            errorMap: t.common.contextualErrorMap
        }, h = t.data;
        if (this._def.returns instanceof be) {
            const e = this;
            return f((async function(...t) {
                const a = new i([]), r = await e._def.args.parseAsync(t, d).catch((e => {
                    throw a.addIssue(s(t, e)), a;
                })), o = await Reflect.apply(h, this, r);
                return await e._def.returns._def.type.parseAsync(o, d).catch((e => {
                    throw a.addIssue(n(o, e)), a;
                }));
            }));
        }
        {
            const e = this;
            return f((function(...t) {
                const a = e._def.args.safeParse(t, d);
                if (!a.success) throw new i([ s(t, a.error) ]);
                const r = Reflect.apply(h, this, a.data), o = e._def.returns.safeParse(r, d);
                if (!o.success) throw new i([ n(r, o.error) ]);
                return o.data;
            }));
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...e) {
        return new _e({
            ...this._def,
            args: he.create(e).rest(te.create())
        });
    }
    returns(e) {
        return new _e({
            ...this._def,
            returns: e
        });
    }
    implement(e) {
        return this.parse(e);
    }
    strictImplement(e) {
        return this.parse(e);
    }
    static create(e, t, s) {
        return new _e({
            args: e || he.create([]).rest(te.create()),
            returns: t || te.create(),
            typeName: Ae.ZodFunction,
            ...N(s)
        });
    }
}

class ye extends S {
    get schema() {
        return this._def.getter();
    }
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        return this._def.getter()._parse({
            data: t.data,
            path: t.path,
            parent: t
        });
    }
}

ye.create = (e, t) => new ye({
    getter: e,
    typeName: Ae.ZodLazy,
    ...N(t)
});

class ve extends S {
    _parse(e) {
        if (e.data !== this._def.value) {
            const t = this._getOrReturnCtx(e);
            return l(t, {
                received: t.data,
                code: r.invalid_literal,
                expected: this._def.value
            }), p;
        }
        return {
            status: "valid",
            value: e.data
        };
    }
    get value() {
        return this._def.value;
    }
}

function ge(e, t) {
    return new ke({
        values: e,
        typeName: Ae.ZodEnum,
        ...N(t)
    });
}

ve.create = (e, t) => new ve({
    value: e,
    typeName: Ae.ZodLiteral,
    ...N(t)
});

class ke extends S {
    constructor() {
        super(...arguments), Z.set(this, void 0);
    }
    _parse(t) {
        if ("string" != typeof t.data) {
            const s = this._getOrReturnCtx(t), a = this._def.values;
            return l(s, {
                expected: e.joinValues(a),
                received: s.parsedType,
                code: r.invalid_type
            }), p;
        }
        if (k(this, Z) || x(this, Z, new Set(this._def.values)), !k(this, Z).has(t.data)) {
            const e = this._getOrReturnCtx(t), s = this._def.values;
            return l(e, {
                received: e.data,
                code: r.invalid_enum_value,
                options: s
            }), p;
        }
        return f(t.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const e = {};
        for (const t of this._def.values) e[t] = t;
        return e;
    }
    get Values() {
        const e = {};
        for (const t of this._def.values) e[t] = t;
        return e;
    }
    get Enum() {
        const e = {};
        for (const t of this._def.values) e[t] = t;
        return e;
    }
    extract(e, t = this._def) {
        return ke.create(e, {
            ...this._def,
            ...t
        });
    }
    exclude(e, t = this._def) {
        return ke.create(this.options.filter((t => !e.includes(t))), {
            ...this._def,
            ...t
        });
    }
}

Z =  new WeakMap, ke.create = ge;

class xe extends S {
    constructor() {
        super(...arguments), T.set(this, void 0);
    }
    _parse(t) {
        const s = e.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
        if (n.parsedType !== a.string && n.parsedType !== a.number) {
            const t = e.objectValues(s);
            return l(n, {
                expected: e.joinValues(t),
                received: n.parsedType,
                code: r.invalid_type
            }), p;
        }
        if (k(this, T) || x(this, T, new Set(e.getValidEnumValues(this._def.values))), !k(this, T).has(t.data)) {
            const t = e.objectValues(s);
            return l(n, {
                received: n.data,
                code: r.invalid_enum_value,
                options: t
            }), p;
        }
        return f(t.data);
    }
    get enum() {
        return this._def.values;
    }
}

T =  new WeakMap, xe.create = (e, t) => new xe({
    values: e,
    typeName: Ae.ZodNativeEnum,
    ...N(t)
});

class be extends S {
    unwrap() {
        return this._def.type;
    }
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        if (t.parsedType !== a.promise && !1 === t.common.async) return l(t, {
            code: r.invalid_type,
            expected: a.promise,
            received: t.parsedType
        }), p;
        const s = t.parsedType === a.promise ? t.data : Promise.resolve(t.data);
        return f(s.then((e => this._def.type.parseAsync(e, {
            path: t.path,
            errorMap: t.common.contextualErrorMap
        }))));
    }
}

be.create = (e, t) => new be({
    type: e,
    typeName: Ae.ZodPromise,
    ...N(t)
});

class we extends S {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === Ae.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(t) {
        const {status: s, ctx: a} = this._processInputParams(t), n = this._def.effect || null, r = {
            addIssue: e => {
                l(a, e), e.fatal ? s.abort() : s.dirty();
            },
            get path() {
                return a.path;
            }
        };
        if (r.addIssue = r.addIssue.bind(r), "preprocess" === n.type) {
            const e = n.transform(a.data, r);
            if (a.common.async) return Promise.resolve(e).then((async e => {
                if ("aborted" === s.value) return p;
                const t = await this._def.schema._parseAsync({
                    data: e,
                    path: a.path,
                    parent: a
                });
                return "aborted" === t.status ? p : "dirty" === t.status || "dirty" === s.value ? m(t.value) : t;
            }));
            {
                if ("aborted" === s.value) return p;
                const t = this._def.schema._parseSync({
                    data: e,
                    path: a.path,
                    parent: a
                });
                return "aborted" === t.status ? p : "dirty" === t.status || "dirty" === s.value ? m(t.value) : t;
            }
        }
        if ("refinement" === n.type) {
            const e = e => {
                const t = n.refinement(e, r);
                if (a.common.async) return Promise.resolve(t);
                if (t instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return e;
            };
            if (!1 === a.common.async) {
                const t = this._def.schema._parseSync({
                    data: a.data,
                    path: a.path,
                    parent: a
                });
                return "aborted" === t.status ? p : ("dirty" === t.status && s.dirty(), e(t.value), 
                {
                    status: s.value,
                    value: t.value
                });
            }
            return this._def.schema._parseAsync({
                data: a.data,
                path: a.path,
                parent: a
            }).then((t => "aborted" === t.status ? p : ("dirty" === t.status && s.dirty(), e(t.value).then((() => ({
                status: s.value,
                value: t.value
            }))))));
        }
        if ("transform" === n.type) {
            if (!1 === a.common.async) {
                const e = this._def.schema._parseSync({
                    data: a.data,
                    path: a.path,
                    parent: a
                });
                if (!v(e)) return e;
                const t = n.transform(e.value, r);
                if (t instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: s.value,
                    value: t
                };
            }
            return this._def.schema._parseAsync({
                data: a.data,
                path: a.path,
                parent: a
            }).then((e => v(e) ? Promise.resolve(n.transform(e.value, r)).then((e => ({
                status: s.value,
                value: e
            }))) : e));
        }
        e.assertNever(n);
    }
}

we.create = (e, t, s) => new we({
    schema: e,
    typeName: Ae.ZodEffects,
    effect: t,
    ...N(s)
}), we.createWithPreprocess = (e, t, s) => new we({
    schema: t,
    effect: {
        type: "preprocess",
        transform: e
    },
    typeName: Ae.ZodEffects,
    ...N(s)
});

class Ze extends S {
    _parse(e) {
        return this._getType(e) === a.undefined ? f(void 0) : this._def.innerType._parse(e);
    }
    unwrap() {
        return this._def.innerType;
    }
}

Ze.create = (e, t) => new Ze({
    innerType: e,
    typeName: Ae.ZodOptional,
    ...N(t)
});

class Te extends S {
    _parse(e) {
        return this._getType(e) === a.null ? f(null) : this._def.innerType._parse(e);
    }
    unwrap() {
        return this._def.innerType;
    }
}

Te.create = (e, t) => new Te({
    innerType: e,
    typeName: Ae.ZodNullable,
    ...N(t)
});

class Oe extends S {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        let s = t.data;
        return t.parsedType === a.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({
            data: s,
            path: t.path,
            parent: t
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}

Oe.create = (e, t) => new Oe({
    innerType: e,
    typeName: Ae.ZodDefault,
    defaultValue: "function" == typeof t.default ? t.default : () => t.default,
    ...N(t)
});

class Ce extends S {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e), s = {
            ...t,
            common: {
                ...t.common,
                issues: []
            }
        }, a = this._def.innerType._parse({
            data: s.data,
            path: s.path,
            parent: {
                ...s
            }
        });
        return g(a) ? a.then((e => ({
            status: "valid",
            value: "valid" === e.status ? e.value : this._def.catchValue({
                get error() {
                    return new i(s.common.issues);
                },
                input: s.data
            })
        }))) : {
            status: "valid",
            value: "valid" === a.status ? a.value : this._def.catchValue({
                get error() {
                    return new i(s.common.issues);
                },
                input: s.data
            })
        };
    }
    removeCatch() {
        return this._def.innerType;
    }
}

Ce.create = (e, t) => new Ce({
    innerType: e,
    typeName: Ae.ZodCatch,
    catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
    ...N(t)
});

class Ne extends S {
    _parse(e) {
        if (this._getType(e) !== a.nan) {
            const t = this._getOrReturnCtx(e);
            return l(t, {
                code: r.invalid_type,
                expected: a.nan,
                received: t.parsedType
            }), p;
        }
        return {
            status: "valid",
            value: e.data
        };
    }
}

Ne.create = e => new Ne({
    typeName: Ae.ZodNaN,
    ...N(e)
});

const Se = Symbol("zod_brand");

class Ee extends S {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e), s = t.data;
        return this._def.type._parse({
            data: s,
            path: t.path,
            parent: t
        });
    }
    unwrap() {
        return this._def.type;
    }
}

class je extends S {
    _parse(e) {
        const {status: t, ctx: s} = this._processInputParams(e);
        if (s.common.async) {
            return (async () => {
                const e = await this._def.in._parseAsync({
                    data: s.data,
                    path: s.path,
                    parent: s
                });
                return "aborted" === e.status ? p : "dirty" === e.status ? (t.dirty(), m(e.value)) : this._def.out._parseAsync({
                    data: e.value,
                    path: s.path,
                    parent: s
                });
            })();
        }
        {
            const e = this._def.in._parseSync({
                data: s.data,
                path: s.path,
                parent: s
            });
            return "aborted" === e.status ? p : "dirty" === e.status ? (t.dirty(), {
                status: "dirty",
                value: e.value
            }) : this._def.out._parseSync({
                data: e.value,
                path: s.path,
                parent: s
            });
        }
    }
    static create(e, t) {
        return new je({
            in: e,
            out: t,
            typeName: Ae.ZodPipeline
        });
    }
}

class Ie extends S {
    _parse(e) {
        const t = this._def.innerType._parse(e), s = e => (v(e) && (e.value = Object.freeze(e.value)), 
        e);
        return g(t) ? t.then((e => s(e))) : s(t);
    }
    unwrap() {
        return this._def.innerType;
    }
}

function Re(e, t = {}, s) {
    return e ? ee.create().superRefine(((a, n) => {
        var r, i;
        if (!e(a)) {
            const e = "function" == typeof t ? t(a) : "string" == typeof t ? {
                message: t
            } : t, o = null === (i = null !== (r = e.fatal) && void 0 !== r ? r : s) || void 0 === i || i, d = "string" == typeof e ? {
                message: e
            } : e;
            n.addIssue({
                code: "custom",
                ...d,
                fatal: o
            });
        }
    })) : ee.create();
}

Ie.create = (e, t) => new Ie({
    innerType: e,
    typeName: Ae.ZodReadonly,
    ...N(t)
});

const Pe = {
    object: ie.lazycreate
};

var Ae, $e;

($e = Ae || (Ae = {})).ZodString = "ZodString", $e.ZodNumber = "ZodNumber", $e.ZodNaN = "ZodNaN", 
$e.ZodBigInt = "ZodBigInt", $e.ZodBoolean = "ZodBoolean", $e.ZodDate = "ZodDate", 
$e.ZodSymbol = "ZodSymbol", $e.ZodUndefined = "ZodUndefined", $e.ZodNull = "ZodNull", 
$e.ZodAny = "ZodAny", $e.ZodUnknown = "ZodUnknown", $e.ZodNever = "ZodNever", $e.ZodVoid = "ZodVoid", 
$e.ZodArray = "ZodArray", $e.ZodObject = "ZodObject", $e.ZodUnion = "ZodUnion", 
$e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", $e.ZodIntersection = "ZodIntersection", 
$e.ZodTuple = "ZodTuple", $e.ZodRecord = "ZodRecord", $e.ZodMap = "ZodMap", $e.ZodSet = "ZodSet", 
$e.ZodFunction = "ZodFunction", $e.ZodLazy = "ZodLazy", $e.ZodLiteral = "ZodLiteral", 
$e.ZodEnum = "ZodEnum", $e.ZodEffects = "ZodEffects", $e.ZodNativeEnum = "ZodNativeEnum", 
$e.ZodOptional = "ZodOptional", $e.ZodNullable = "ZodNullable", $e.ZodDefault = "ZodDefault", 
$e.ZodCatch = "ZodCatch", $e.ZodPromise = "ZodPromise", $e.ZodBranded = "ZodBranded", 
$e.ZodPipeline = "ZodPipeline", $e.ZodReadonly = "ZodReadonly";

const Me = W.create, Le = q.create, De = Ne.create, Ve = J.create, ze = Y.create, Ue = H.create, Ke = G.create, Be = X.create, We = Q.create, Fe = ee.create, qe = te.create, Je = se.create, Ye = ae.create, He = ne.create, Ge = ie.create, Xe = ie.strictCreate, Qe = oe.create, et = ue.create, tt = le.create, st = he.create, at = pe.create, nt = me.create, rt = fe.create, it = _e.create, ot = ye.create, dt = ve.create, ut = ke.create, ct = xe.create, lt = be.create, ht = we.create, pt = Ze.create, mt = Te.create, ft = we.createWithPreprocess, _t = je.create, yt = {
    string: e => W.create({
        ...e,
        coerce: !0
    }),
    number: e => q.create({
        ...e,
        coerce: !0
    }),
    boolean: e => Y.create({
        ...e,
        coerce: !0
    }),
    bigint: e => J.create({
        ...e,
        coerce: !0
    }),
    date: e => H.create({
        ...e,
        coerce: !0
    })
}, vt = p;

var gt =  Object.freeze({
    __proto__: null,
    defaultErrorMap: o,
    setErrorMap: function(e) {
        d = e;
    },
    getErrorMap: u,
    makeIssue: c,
    EMPTY_PATH: [],
    addIssueToContext: l,
    ParseStatus: h,
    INVALID: p,
    DIRTY: m,
    OK: f,
    isAborted: _,
    isDirty: y,
    isValid: v,
    isAsync: g,
    get util() {
        return e;
    },
    get objectUtil() {
        return s;
    },
    ZodParsedType: a,
    getParsedType: n,
    ZodType: S,
    datetimeRegex: B,
    ZodString: W,
    ZodNumber: q,
    ZodBigInt: J,
    ZodBoolean: Y,
    ZodDate: H,
    ZodSymbol: G,
    ZodUndefined: X,
    ZodNull: Q,
    ZodAny: ee,
    ZodUnknown: te,
    ZodNever: se,
    ZodVoid: ae,
    ZodArray: ne,
    ZodObject: ie,
    ZodUnion: oe,
    ZodDiscriminatedUnion: ue,
    ZodIntersection: le,
    ZodTuple: he,
    ZodRecord: pe,
    ZodMap: me,
    ZodSet: fe,
    ZodFunction: _e,
    ZodLazy: ye,
    ZodLiteral: ve,
    ZodEnum: ke,
    ZodNativeEnum: xe,
    ZodPromise: be,
    ZodEffects: we,
    ZodTransformer: we,
    ZodOptional: Ze,
    ZodNullable: Te,
    ZodDefault: Oe,
    ZodCatch: Ce,
    ZodNaN: Ne,
    BRAND: Se,
    ZodBranded: Ee,
    ZodPipeline: je,
    ZodReadonly: Ie,
    custom: Re,
    Schema: S,
    ZodSchema: S,
    late: Pe,
    get ZodFirstPartyTypeKind() {
        return Ae;
    },
    coerce: yt,
    any: Fe,
    array: He,
    bigint: Ve,
    boolean: ze,
    date: Ue,
    discriminatedUnion: et,
    effect: ht,
    enum: ut,
    function: it,
    instanceof: (e, t = {
        message: `Input not instance of ${e.name}`
    }) => Re((t => t instanceof e), t),
    intersection: tt,
    lazy: ot,
    literal: dt,
    map: nt,
    nan: De,
    nativeEnum: ct,
    never: Je,
    null: We,
    nullable: mt,
    number: Le,
    object: Ge,
    oboolean: () => ze().optional(),
    onumber: () => Le().optional(),
    optional: pt,
    ostring: () => Me().optional(),
    pipeline: _t,
    preprocess: ft,
    promise: lt,
    record: at,
    set: rt,
    strictObject: Xe,
    string: Me,
    symbol: Ke,
    transformer: ht,
    tuple: st,
    undefined: Be,
    union: Qe,
    unknown: qe,
    void: Ye,
    NEVER: vt,
    ZodIssueCode: r,
    quotelessJson: e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
    ZodError: i
});

export { r as Z, gt as z };
