var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "node_modules/jquery/dist/jquery.js"(exports, module) {
    (function(global, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document2 = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType2(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery2 = function(selector, context) {
        return new jQuery2.fn.init(selector, context);
      };
      jQuery2.fn = jQuery2.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery2,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
          var ret = jQuery2.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
          return jQuery2.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery2.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery2.extend = jQuery2.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery2.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery2.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
          DOMEval(code, { nonce: options && options.nonce }, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(elem) {
          var node, ret = "", i = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i++]) {
              ret += jQuery2.text(node);
            }
          }
          if (nodeType === 1 || nodeType === 11) {
            return elem.textContent;
          }
          if (nodeType === 9) {
            return elem.documentElement.textContent;
          }
          if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        },
        // results is for internal usage only
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery2.merge(
                ret,
                typeof arr2 === "string" ? [arr2] : arr2
              );
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
        },
        isXMLDoc: function(elem) {
          var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
          return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches2 = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches2.push(elems[i]);
            }
          }
          return matches2;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support
      });
      if (typeof Symbol === "function") {
        jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery2.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        }
      );
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType2(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var pop = arr.pop;
      var sort = arr.sort;
      var splice = arr.splice;
      var whitespace = "[\\x20\\t\\r\\n\\f]";
      var rtrimCSS = new RegExp(
        "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
        "g"
      );
      jQuery2.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      };
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "\uFFFD";
          }
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
      }
      jQuery2.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
      };
      var preferredDoc = document2, pushNative = push;
      (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches2, expando = jQuery2.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
          var high = "0x" + escape.slice(1) - 65536;
          if (nonHex) {
            return nonHex;
          }
          return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(
          function(elem) {
            return elem.disabled === true && nodeName(elem, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function safeActiveElement() {
          try {
            return document3.activeElement;
          } catch (err) {
          }
        }
        try {
          push2.apply(
            arr = slice.call(preferredDoc.childNodes),
            preferredDoc.childNodes
          );
          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push2 = {
            apply: function(target, els) {
              pushNative.apply(target, slice.call(els));
            },
            call: function(target) {
              pushNative.apply(target, slice.call(arguments, 1));
            }
          };
        }
        function find(selector, context, results, seed) {
          var m2, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            setDocument(context);
            context = context || document3;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                if (m2 = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m2)) {
                      if (elem.id === m2) {
                        push2.call(results, elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m2)) && find.contains(context, elem) && elem.id === m2) {
                      push2.call(results, elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push2.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m2 = match[3]) && context.getElementsByClassName) {
                  push2.apply(results, context.getElementsByClassName(m2));
                  return results;
                }
              }
              if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  if (newContext != context || !support.scope) {
                    if (nid = context.getAttribute("id")) {
                      nid = jQuery2.escapeSelector(nid);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  }
                  groups = tokenize(selector);
                  i2 = groups.length;
                  while (i2--) {
                    groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                  }
                  newSelector = groups.join(",");
                }
                try {
                  push2.apply(
                    results,
                    newContext.querySelectorAll(newSelector)
                  );
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return cache[key + " "] = value;
          }
          return cache;
        }
        function markFunction(fn2) {
          fn2[expando] = true;
          return fn2;
        }
        function assert(fn2) {
          var el = document3.createElement("fieldset");
          try {
            return !!fn2(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function createInputPseudo(type) {
          return function(elem) {
            return nodeName(elem, "input") && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn2) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches3) {
              var j, matchIndexes = fn2([], seed.length, argument), i2 = matchIndexes.length;
              while (i2--) {
                if (seed[j = matchIndexes[i2]]) {
                  seed[j] = !(matches3[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        function setDocument(node) {
          var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
            return document3;
          }
          document3 = doc;
          documentElement2 = document3.documentElement;
          documentIsHTML = !jQuery2.isXMLDoc(document3);
          matches2 = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
          if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
            subWindow.addEventListener("unload", unloadHandler);
          }
          support.getById = assert(function(el) {
            documentElement2.appendChild(el).id = jQuery2.expando;
            return !document3.getElementsByName || !document3.getElementsByName(jQuery2.expando).length;
          });
          support.disconnectedMatch = assert(function(el) {
            return matches2.call(el, "*");
          });
          support.scope = assert(function() {
            return document3.querySelectorAll(":scope");
          });
          support.cssHas = assert(function() {
            try {
              document3.querySelector(":has(*,:jqfake)");
              return false;
            } catch (e) {
              return true;
            }
          });
          if (support.getById) {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node2 && node2.value === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node2, i2, elems, elem = context.getElementById(id);
                if (elem) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                  elems = context.getElementsByName(id);
                  i2 = 0;
                  while (elem = elems[i2++]) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find.TAG = function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else {
              return context.querySelectorAll(tag);
            }
          };
          Expr.find.CLASS = function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyQSA = [];
          assert(function(el) {
            var input2;
            documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
            if (!el.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            if (!el.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
            if (!el.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            input2 = document3.createElement("input");
            input2.setAttribute("type", "hidden");
            el.appendChild(input2).setAttribute("name", "D");
            documentElement2.appendChild(el).disabled = true;
            if (el.querySelectorAll(":disabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            input2 = document3.createElement("input");
            input2.setAttribute("name", "");
            el.appendChild(input2);
            if (!el.querySelectorAll("[name='']").length) {
              rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
            }
          });
          if (!support.cssHas) {
            rbuggyQSA.push(":has");
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }
            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
              // Otherwise we know they are disconnected
              1
            );
            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
              if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                return -1;
              }
              if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
            }
            return compare & 4 ? -1 : 1;
          };
          return document3;
        }
        find.matches = function(expr, elements) {
          return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
          setDocument(elem);
          if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches2.call(elem, expr);
              if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return find(expr, document3, null, [elem]).length > 0;
        };
        find.contains = function(context, elem) {
          if ((context.ownerDocument || context) != document3) {
            setDocument(context);
          }
          return jQuery2.contains(context, elem);
        };
        find.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != document3) {
            setDocument(elem);
          }
          var fn2 = Expr.attrHandle[name.toLowerCase()], val = fn2 && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn2(elem, name, !documentIsHTML) : void 0;
          if (val !== void 0) {
            return val;
          }
          return elem.getAttribute(name);
        };
        find.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        jQuery2.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i2 = 0;
          hasDuplicate = !support.sortStable;
          sortInput = !support.sortStable && slice.call(results, 0);
          sort.call(results, sortOrder);
          if (hasDuplicate) {
            while (elem = results[i2++]) {
              if (elem === results[i2]) {
                j = duplicates.push(i2);
              }
            }
            while (j--) {
              splice.call(results, duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        jQuery2.fn.uniqueSort = function() {
          return this.pushStack(jQuery2.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery2.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: true },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: true },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            CHILD: function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  find.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                find.error(match[0]);
              }
              return match;
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr.CHILD.test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
              (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
              (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return nodeName(elem, expectedNodeName);
              };
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(
                  typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = find.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                if (operator === "=") {
                  return result === check;
                }
                if (operator === "!=") {
                  return result !== check;
                }
                if (operator === "^=") {
                  return check && result.indexOf(check) === 0;
                }
                if (operator === "*=") {
                  return check && result.indexOf(check) > -1;
                }
                if (operator === "$=") {
                  return check && result.slice(-check.length) === check;
                }
                if (operator === "~=") {
                  return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                }
                if (operator === "|=") {
                  return result === check || result.slice(0, check.length + 1) === check + "-";
                }
                return false;
              };
            },
            CHILD: function(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? (
                // Shortcut for :nth-*(n)
                function(elem) {
                  return !!elem.parentNode;
                }
              ) : function(elem, _context, xml) {
                var cache, outerCache, node, nodeIndex, start3, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                if (parent) {
                  if (simple) {
                    while (dir2) {
                      node = elem;
                      while (node = node[dir2]) {
                        if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start3 = dir2 = type === "only" && !start3 && "nextSibling";
                    }
                    return true;
                  }
                  start3 = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    outerCache = parent[expando] || (parent[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                    (diff = nodeIndex = 0) || start3.pop()) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start3.pop()) {
                        if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            outerCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn2 = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
              if (fn2[expando]) {
                return fn2(argument);
              }
              if (fn2.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches3) {
                  var idx, matched = fn2(seed, argument), i2 = matched.length;
                  while (i2--) {
                    idx = indexOf.call(seed, matched[i2]);
                    seed[idx] = !(matches3[idx] = matched[i2]);
                  }
                }) : function(elem) {
                  return fn2(elem, 0, args);
                };
              }
              return fn2;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: markFunction(function(selector) {
              var input2 = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches3, _context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                while (i2--) {
                  if (elem = unmatched[i2]) {
                    seed[i2] = !(matches3[i2] = elem);
                  }
                }
              }) : function(elem, _context, xml) {
                input2[0] = elem;
                matcher(input2, null, xml, results);
                input2[0] = null;
                return !results.pop();
              };
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return find(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || jQuery2.text(elem)).indexOf(text) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                find.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            // Miscellaneous
            target: function(elem) {
              var hash3 = window2.location && window2.location.hash;
              return hash3 && hash3.slice(1) === elem.id;
            },
            root: function(elem) {
              return elem === documentElement2;
            },
            focus: function(elem) {
              return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            // Boolean properties
            enabled: createDisabledPseudo(false),
            disabled: createDisabledPseudo(true),
            checked: function(elem) {
              return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
            },
            selected: function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            // Contents
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function(elem) {
              return !Expr.pseudos.empty(elem);
            },
            // Element/input types
            header: function(elem) {
              return rheader.test(elem.nodeName);
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function(elem) {
              return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
            },
            text: function(elem) {
              var attr;
              return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            // Position-in-collection
            first: createPositionalPseudo(function() {
              return [0];
            }),
            last: createPositionalPseudo(function(_matchIndexes, length) {
              return [length - 1];
            }),
            eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 0;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 1;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2;
              if (argument < 0) {
                i2 = argument + length;
              } else if (argument > length) {
                i2 = length;
              } else {
                i2 = argument;
              }
              for (; --i2 >= 0; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument;
              for (; ++i2 < length; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in { submit: true, reset: true }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            matched = false;
            if (match = rleadingCombinator.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                // Cast descendant combinators to space
                type: match[0].replace(rtrimCSS, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          if (parseOnly) {
            return soFar.length;
          }
          return soFar ? find.error(selector) : (
            // Cache the tokens
            tokenCache(selector, groups).slice(0)
          );
        }
        function toSelector(tokens) {
          var i2 = 0, len = tokens.length, selector = "";
          for (; i2 < len; i2++) {
            selector += tokens[i2].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
          return combinator.first ? (
            // Check against closest ancestor/preceding element
            function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(elem, context, xml) {
              var oldCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    if (skip && nodeName(elem, skip)) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      outerCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            }
          );
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i2 = matchers.length;
            while (i2--) {
              if (!matchers[i2](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i2 = 0, len = contexts.length;
          for (; i2 < len; i2++) {
            find(selector, contexts[i2], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
          for (; i2 < len; i2++) {
            if (elem = unmatched[i2]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i2);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
              selector || "*",
              context.nodeType ? [context] : context,
              []
            ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
            if (matcher) {
              matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                // ...intermediate processing is necessary
                []
              ) : (
                // ...otherwise use results directly
                results
              );
              matcher(matcherIn, matcherOut, context, xml);
            } else {
              matcherOut = matcherIn;
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i2 = temp.length;
              while (i2--) {
                if (elem = temp[i2]) {
                  matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i2 = matcherOut.length;
                  while (i2--) {
                    if (elem = matcherOut[i2]) {
                      temp.push(matcherIn[i2] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i2 = matcherOut.length;
                while (i2--) {
                  if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(
                matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
              );
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push2.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf.call(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
          for (; i2 < len; i2++) {
            if (matcher = Expr.relative[tokens[i2].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
              if (matcher[expando]) {
                j = ++i2;
                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(
                  i2 > 1 && elementMatcher(matchers),
                  i2 > 1 && toSelector(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                  ).replace(rtrimCSS, "$1"),
                  matcher,
                  i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                  j < len && matcherFromTokens(tokens = tokens.slice(j)),
                  j < len && toSelector(tokens)
                );
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context == document3 || context || outermost;
            }
            for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument != document3) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document3, xml)) {
                    push2.call(results, elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i2;
            if (bySet && i2 !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i2--) {
                    if (!(unmatched[i2] || setMatched[i2])) {
                      setMatched[i2] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push2.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                jQuery2.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match) {
          var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i2 = match.length;
            while (i2--) {
              cached = matcherFromTokens(match[i2]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(
              selector,
              matcherFromGroupMatchers(elementMatchers, setMatchers)
            );
            cached.selector = selector;
          }
          return cached;
        }
        function select(selector, context, results, seed) {
          var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find.ID(
                token.matches[0].replace(runescape, funescape),
                context
              ) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
            while (i2--) {
              token = tokens[i2];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find2 = Expr.find[type]) {
                if (seed = find2(
                  token.matches[0].replace(runescape, funescape),
                  rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                )) {
                  tokens.splice(i2, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push2.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(
            seed,
            context,
            !documentIsHTML,
            results,
            !context || rsibling.test(selector) && testContext(context.parentNode) || context
          );
          return results;
        }
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        setDocument();
        support.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
        });
        jQuery2.find = find;
        jQuery2.expr[":"] = jQuery2.expr.pseudos;
        jQuery2.unique = jQuery2.uniqueSort;
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery2.escapeSelector;
        find.getText = jQuery2.text;
        find.isXML = jQuery2.isXMLDoc;
        find.selectors = jQuery2.expr;
        find.support = jQuery2.support;
        find.uniqueSort = jQuery2.uniqueSort;
      })();
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery2(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery2.expr.match.needsContext;
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery2.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery2.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery2.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery2.filter(qualifier, elements, not);
      }
      jQuery2.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery2.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery2(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery2.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery2.find(selector, self[i], ret);
          }
          return len > 1 ? jQuery2.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
            false
          ).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery2.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery2 ? context[0] : context;
              jQuery2.merge(this, jQuery2.parseHTML(
                match[1],
                context && context.nodeType ? context.ownerDocument || context : document2,
                true
              ));
              if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : (
            // Execute immediately if ready is not present
            selector(jQuery2)
          );
        }
        return jQuery2.makeArray(selector, this);
      };
      init.prototype = jQuery2.fn;
      rootjQuery = jQuery2(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery2.fn.extend({
        has: function(target) {
          var targets = jQuery2(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery2.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors)
                ))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery2(elem), this[0]);
          }
          return indexOf.call(
            this,
            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem
          );
        },
        add: function(selector, context) {
          return this.pushStack(
            jQuery2.uniqueSort(
              jQuery2.merge(this.get(), jQuery2(selector, context))
            )
          );
        },
        addBack: function(selector) {
          return this.add(
            selector == null ? this.prevObject : this.prevObject.filter(selector)
          );
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery2.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery2.merge([], elem.childNodes);
        }
      }, function(name, fn2) {
        jQuery2.fn[name] = function(until, selector) {
          var matched = jQuery2.map(this, fn2, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery2.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery2.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery2.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire2 = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery2.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType2(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire2();
              }
            }
            return this;
          },
          // Remove a callback from the list
          remove: function() {
            jQuery2.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery2.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(fn2) {
            return fn2 ? jQuery2.inArray(fn2, list) > -1 : list.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire2();
              }
            }
            return this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!fired;
          }
        };
        return self;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery2.extend({
        Deferred: function(func) {
          var tuples = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              jQuery2.Callbacks("memory"),
              jQuery2.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery2.Callbacks("once memory"),
              jQuery2.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery2.Callbacks("once memory"),
              jQuery2.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn2) {
              return promise.then(null, fn2);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var fns = arguments;
              return jQuery2.Deferred(function(newDefer) {
                jQuery2.each(tuples, function(_i, tuple) {
                  var fn2 = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn2 && fn2.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](
                        this,
                        fn2 ? [returned] : arguments
                      );
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special)
                        );
                      } else {
                        maxDepth++;
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special),
                          resolve(
                            maxDepth,
                            deferred2,
                            Identity,
                            deferred2.notifyWith
                          )
                        );
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery2.Deferred.exceptionHook) {
                        jQuery2.Deferred.exceptionHook(
                          e,
                          process.error
                        );
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery2.Deferred.getErrorHook) {
                      process.error = jQuery2.Deferred.getErrorHook();
                    } else if (jQuery2.Deferred.getStackHook) {
                      process.error = jQuery2.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
                  }
                };
              }
              return jQuery2.Deferred(function(newDefer) {
                tuples[0][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onProgress) ? onProgress : Identity,
                    newDefer.notifyWith
                  )
                );
                tuples[1][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onFulfilled) ? onFulfilled : Identity
                  )
                );
                tuples[2][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onRejected) ? onRejected : Thrower
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(obj) {
              return obj != null ? jQuery2.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery2.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(
                function() {
                  state = stateString;
                },
                // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable,
                // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable,
                // progress_callbacks.lock
                tuples[0][2].lock,
                // progress_handlers.lock
                tuples[0][3].lock
              );
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                primary.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(
              singleValue,
              primary.done(updateFunc(i)).resolve,
              primary.reject,
              !remaining
            );
            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return primary.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), primary.reject);
          }
          return primary.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery2.Deferred.exceptionHook = function(error, asyncError) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn(
            "jQuery.Deferred exception: " + error.message,
            error.stack,
            asyncError
          );
        }
      };
      jQuery2.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery2.Deferred();
      jQuery2.fn.ready = function(fn2) {
        readyList.then(fn2).catch(function(error) {
          jQuery2.readyException(error);
        });
        return this;
      };
      jQuery2.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
          if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
            return;
          }
          jQuery2.isReady = true;
          if (wait !== true && --jQuery2.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery2]);
        }
      });
      jQuery2.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery2.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery2.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn2, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType2(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn2, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn2.call(elems, value);
              fn2 = null;
            } else {
              bulk = fn2;
              fn2 = function(elem, _key, value2) {
                return bulk.call(jQuery2(elem), value2);
              };
            }
          }
          if (fn2) {
            for (; i < len; i++) {
              fn2(
                elems[i],
                key,
                raw ? value : value.call(elems[i], i, fn2(elems[i], key))
              );
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn2.call(elems);
        }
        return len ? fn2(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data2() {
        this.expando = jQuery2.expando + Data2.uid++;
      }
      Data2.uid = 1;
      Data2.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : (
            // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)]
          );
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === void 0 || jQuery2.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery2.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data2();
      var dataUser = new Data2();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData2(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData2(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery2.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery2.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery2.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery2.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery2.queue(elem, type), startLength = queue.length, fn2 = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
            jQuery2.dequeue(elem, type);
          };
          if (fn2 === "inprogress") {
            fn2 = queue.shift();
            startLength--;
          }
          if (fn2) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn2.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery2.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery2.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery2.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery2.queue(this, type, data);
            jQuery2._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery2.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery2.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery2.contains(elem.ownerDocument, elem);
      }, composed = { composed: true };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery2.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery2.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery2.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery2.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery2.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery2.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery2(this).show();
            } else {
              jQuery2(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input2 = document2.createElement("input");
        input2.setAttribute("type", "radio");
        input2.setAttribute("checked", "checked");
        input2.setAttribute("name", "t");
        div.appendChild(input2);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery2.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(
            elems[i],
            "globalEval",
            !refElements || dataPriv.get(refElements[i], "globalEval")
          );
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType2(elem) === "object") {
              jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery2.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery2.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function on(elem, types, selector, data, fn2, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn2 == null) {
          fn2 = selector;
          data = selector = void 0;
        } else if (fn2 == null) {
          if (typeof selector === "string") {
            fn2 = data;
            data = void 0;
          } else {
            fn2 = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn2 === false) {
          fn2 = returnFalse;
        } else if (!fn2) {
          return elem;
        }
        if (one === 1) {
          origFn = fn2;
          fn2 = function(event) {
            jQuery2().off(event);
            return origFn.apply(this, arguments);
          };
          fn2.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
        }
        return elem.each(function() {
          jQuery2.event.add(this, types, fn2, data, selector);
        });
      }
      jQuery2.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery2.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery2.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = /* @__PURE__ */ Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery2.event.special[type] || {};
            handleObj = jQuery2.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery2.event.global[type] = true;
          }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery2.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery2.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery2.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          cur.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery2.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", true);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, isSetup) {
        if (!isSetup) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery2.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery2.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                this[type]();
                result = dataPriv.get(this, type);
                dataPriv.set(this, type, false);
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result;
                }
              } else if ((jQuery2.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved) {
              dataPriv.set(this, type, jQuery2.event.trigger(
                saved[0],
                saved.slice(1),
                this
              ));
              event.stopPropagation();
              event.isImmediatePropagationStopped = returnTrue;
            }
          }
        });
      }
      jQuery2.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery2.Event = function(src, props) {
        if (!(this instanceof jQuery2.Event)) {
          return new jQuery2.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
          src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery2.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery2.expando] = true;
      };
      jQuery2.Event.prototype = {
        constructor: jQuery2.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery2.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
      }, jQuery2.event.addProp);
      jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
          if (document2.documentMode) {
            var handle = dataPriv.get(this, "handle"), event = jQuery2.event.fix(nativeEvent);
            event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
            event.isSimulated = true;
            handle(nativeEvent);
            if (event.target === event.currentTarget) {
              handle(event);
            }
          } else {
            jQuery2.event.simulate(
              delegateType,
              nativeEvent.target,
              jQuery2.event.fix(nativeEvent)
            );
          }
        }
        jQuery2.event.special[type] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var attaches;
            leverageNative(this, type, true);
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType);
              if (!attaches) {
                this.addEventListener(delegateType, focusMappedHandler);
              }
              dataPriv.set(this, delegateType, (attaches || 0) + 1);
            } else {
              return false;
            }
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          teardown: function() {
            var attaches;
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType) - 1;
              if (!attaches) {
                this.removeEventListener(delegateType, focusMappedHandler);
                dataPriv.remove(this, delegateType);
              } else {
                dataPriv.set(this, delegateType, attaches);
              }
            } else {
              return false;
            }
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(event) {
            return dataPriv.get(event.target, type);
          },
          delegateType
        };
        jQuery2.event.special[delegateType] = {
          setup: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
            if (!attaches) {
              if (document2.documentMode) {
                this.addEventListener(delegateType, focusMappedHandler);
              } else {
                doc.addEventListener(type, focusMappedHandler, true);
              }
            }
            dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
          },
          teardown: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
            if (!attaches) {
              if (document2.documentMode) {
                this.removeEventListener(delegateType, focusMappedHandler);
              } else {
                doc.removeEventListener(type, focusMappedHandler, true);
              }
              dataPriv.remove(dataHolder, delegateType);
            } else {
              dataPriv.set(dataHolder, delegateType, attaches);
            }
          }
        };
      });
      jQuery2.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery2.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery2.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery2.fn.extend({
        on: function(types, selector, data, fn2) {
          return on(this, types, selector, data, fn2);
        },
        one: function(types, selector, data, fn2) {
          return on(this, types, selector, data, fn2, 1);
        },
        off: function(types, selector, fn2) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery2(types.delegateTarget).off(
              handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
              handleObj.selector,
              handleObj.handler
            );
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn2 = selector;
            selector = void 0;
          }
          if (fn2 === false) {
            fn2 = returnFalse;
          }
          return this.each(function() {
            jQuery2.event.remove(this, types, fn2, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery2(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery2.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery2.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery2.clone(node, true, true);
                if (hasScripts) {
                  jQuery2.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery2.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery2.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery2._evalUrl && !node.noModule) {
                      jQuery2._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery2.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery2.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery2.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery2.event.remove(elem, type);
                    } else {
                      jQuery2.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery2.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery2.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery2.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery2.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery2.inArray(this, ignored) < 0) {
              jQuery2.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery2.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery2.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery2(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var rcustomProp = /^--/;
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery2.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document2.createElement("table");
              tr = document2.createElement("tr");
              trChild = document2.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              tr.style.cssText = "box-sizing:content-box;border:1px solid";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              trChild.style.display = "block";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (isCustomProp && ret) {
            ret = ret.replace(rtrimCSS, "$1") || void 0;
          }
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery2.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + ""
        ) : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery2.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches2 = rcssNum.exec(value);
        return matches2 ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, matches2[2] - (subtract || 0)) + (matches2[3] || "px")
        ) : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            marginDelta += jQuery2.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0;
        }
        return delta + marginDelta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery2.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
          isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(
          elem,
          dimension,
          extra || (isBorderBox ? "border" : "content"),
          valueIsBorderBox,
          styles,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          val
        ) + "px";
      }
      jQuery2.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageSlice: true,
          columnCount: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          gridArea: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnStart: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowStart: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          scale: true,
          widows: true,
          zIndex: true,
          zoom: true,
          // SVG-related
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeMiterlimit: true,
          strokeOpacity: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery2.each(["height", "width"], function(_i, dimension) {
        jQuery2.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery2.css(elem, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches2, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
              elem,
              dimension,
              extra,
              isBorderBox,
              styles
            ) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
              );
            }
            if (subtract && (matches2 = rcssNum.exec(value)) && (matches2[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery2.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery2.cssHooks.marginLeft = addGetHookIf(
        support.reliableMarginLeft,
        function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        }
      );
      jQuery2.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery2.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery2.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map[name2[i]] = jQuery2.css(elem, name2[i], false, styles);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end2, easing) {
        return new Tween.prototype.init(elem, options, prop, end2, easing);
      }
      jQuery2.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end2, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery2.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end2;
          this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery2.easing[this.easing](
              percent,
              this.options.duration * percent,
              0,
              1,
              this.options.duration
            );
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery2.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery2.fx.step[tween.prop]) {
              jQuery2.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery2.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery2.fx = Tween.prototype.init;
      jQuery2.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery2.fx.interval);
          }
          jQuery2.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = { height: type };
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery2._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery2.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
          }
        }
        propTween = !jQuery2.isEmptyObject(props);
        if (!propTween && jQuery2.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery2.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery2.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery2.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery2.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery2.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery2.extend({}, properties),
          opts: jQuery2.extend(true, {
            specialEasing: {},
            easing: jQuery2.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end2) {
            var tween = jQuery2.Tween(
              elem,
              animation.opts,
              prop,
              end2,
              animation.opts.specialEasing[prop] || animation.opts.easing
            );
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery2.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery2.fx.timer(
          jQuery2.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          })
        );
        return animation;
      }
      jQuery2.Animation = jQuery2.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery2.speed = function(speed, easing, fn2) {
        var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
          complete: fn2 || !fn2 && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn2 && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery2.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery2.fx.speeds) {
              opt.duration = jQuery2.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery2.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery2.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery2.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery2.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery2.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery2.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery2.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery2.fn[name];
        jQuery2.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery2.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(name, props) {
        jQuery2.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery2.timers = [];
      jQuery2.fx.tick = function() {
        var timer, i = 0, timers = jQuery2.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery2.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery2.fx.timer = function(timer) {
        jQuery2.timers.push(timer);
        jQuery2.fx.start();
      };
      jQuery2.fx.interval = 13;
      jQuery2.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery2.fx.stop = function() {
        inProgress = null;
      };
      jQuery2.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      };
      jQuery2.fn.delay = function(time, type) {
        time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input2 = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input2.type = "checkbox";
        support.checkOn = input2.value !== "";
        support.optSelected = opt.selected;
        input2 = document2.createElement("input");
        input2.value = "t";
        input2.type = "radio";
        support.radioValue = input2.value === "t";
      })();
      var boolHook, attrHandle = jQuery2.expr.attrHandle;
      jQuery2.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery2.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery2.removeAttr(this, name);
          });
        }
      });
      jQuery2.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery2.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            hooks = jQuery2.attrHooks[name.toLowerCase()] || (jQuery2.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery2.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery2.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery2.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery2.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery2.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery2.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery2.propFix[name] || name];
          });
        }
      });
      jQuery2.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            name = jQuery2.propFix[name] || name;
            hooks = jQuery2.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery2.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });
      if (!support.optSelected) {
        jQuery2.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery2.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        jQuery2.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery2.fn.extend({
        addClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery2(this).addClass(value.call(this, j, getClass(this)));
            });
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (cur.indexOf(" " + className + " ") < 0) {
                    cur += className + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        removeClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery2(this).removeClass(value.call(this, j, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  while (cur.indexOf(" " + className + " ") > -1) {
                    cur = cur.replace(" " + className + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (isFunction(value)) {
            return this.each(function(i2) {
              jQuery2(this).toggleClass(
                value.call(this, i2, getClass(this), stateVal),
                stateVal
              );
            });
          }
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          classNames = classesToArray(value);
          return this.each(function() {
            if (isValidValue) {
              self = jQuery2(this);
              for (i = 0; i < classNames.length; i++) {
                className = classNames[i];
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute(
                  "class",
                  className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                );
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery2.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery2(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery2.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery2.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery2.find.attr(elem, "value");
              return val != null ? val : (
                // Support: IE <=10 - 11 only
                // option.text throws exceptions (trac-14686, trac-14858)
                // Strip and collapse whitespace
                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                stripAndCollapse(jQuery2.text(elem))
              );
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max2 = one ? index + 1 : options.length;
              if (index < 0) {
                i = max2;
              } else {
                i = one ? index : 0;
              }
              for (; i < max2; i++) {
                option = options[i];
                if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery2(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery2.each(["radio", "checkbox"], function() {
        jQuery2.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery2.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      var location2 = window2.location;
      var nonce2 = { guid: Date.now() };
      var rquery = /\?/;
      jQuery2.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) {
          jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join("\n") : data));
        }
        return xml;
      };
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery2.extend(jQuery2.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery2.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery2.makeArray(data, [event]);
          special = jQuery2.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery2.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery2.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
          var e = jQuery2.extend(
            new jQuery2.Event(),
            event,
            {
              type,
              isSimulated: true
            }
          );
          jQuery2.event.trigger(e, null, elem);
        }
      });
      jQuery2.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery2.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery2.event.trigger(type, data, elem, true);
          }
        }
      });
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery2.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(
                prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                v,
                traditional,
                add
              );
            }
          });
        } else if (!traditional && toType2(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery2.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
          jQuery2.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery2.fn.extend({
        serialize: function() {
          return jQuery2.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery2.prop(this, "elements");
            return elements ? jQuery2.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery2(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery2.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              });
            }
            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location2.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery2.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return { state: "success", data: response };
      }
      jQuery2.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location2.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location2.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": true,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": jQuery2.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: true,
            context: true
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
          return settings ? (
            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings)
          ) : (
            // Extending ajaxSettings
            ajaxExtend(jQuery2.ajaxSettings, target)
          );
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            // Caches the header
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            // Overrides response content-type header
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            // Status-dependent callbacks
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            // Cancel the request
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery2.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery2.event && s.global;
          if (fireGlobals && jQuery2.active++ === 0) {
            jQuery2.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce2.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery2.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
            }
            if (jQuery2.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
          );
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery2.inArray("script", s.dataTypes) > -1 && jQuery2.inArray("json", s.dataTypes) < 0) {
              s.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery2.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery2.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(
                isSuccess ? "ajaxSuccess" : "ajaxError",
                [jqXHR, s, isSuccess ? success : error]
              );
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery2.active) {
                jQuery2.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery2.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery2.get(url, void 0, callback, "script");
        }
      });
      jQuery2.each(["get", "post"], function(_i, method) {
        jQuery2[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery2.ajax(jQuery2.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery2.isPlainObject(url) && url));
        };
      });
      jQuery2.ajaxPrefilter(function(s) {
        var i;
        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });
      jQuery2._evalUrl = function(url, options, doc) {
        return jQuery2.ajax({
          url,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery2.globalEval(response, options, doc);
          }
        });
      };
      jQuery2.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery2(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self = jQuery2(this), contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery2(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery2.expr.pseudos.hidden = function(elem) {
        return !jQuery2.expr.pseudos.visible(elem);
      };
      jQuery2.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery2.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, xhrSupported = jQuery2.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery2.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(
                options.type,
                options.url,
                options.async,
                options.username,
                options.password
              );
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(
                          // File: protocol always yields status 0; see trac-8605, trac-14207
                          xhr.status,
                          xhr.statusText
                        );
                      }
                    } else {
                      complete(
                        xhrSuccessStatus[xhr.status] || xhr.status,
                        xhr.statusText,
                        // Support: IE <=9 only
                        // IE9 has no XHR2 but throws on binary (trac-11426)
                        // For XHR2 non-text, let the caller handle it (gh-2498)
                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                        xhr.getAllResponseHeaders()
                      );
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery2.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery2.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery2.globalEval(text);
            return text;
          }
        }
      });
      jQuery2.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery2.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery2("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery2.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce2.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery2.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery2.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery2(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery2.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document2.location.href;
            context.head.appendChild(base);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery2(scripts).remove();
        }
        return jQuery2.merge([], parsed.childNodes);
      };
      jQuery2.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self.length > 0) {
          jQuery2.ajax({
            url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self.html(selector ? (
              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector)
            ) : (
              // Otherwise use the full result
              responseText
            ));
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery2.expr.pseudos.animated = function(elem) {
        return jQuery2.grep(jQuery2.timers, function(fn2) {
          return elem === fn2.elem;
        }).length;
      };
      jQuery2.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery2.css(elem, "top");
          curCSSLeft = jQuery2.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery2.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery2.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery2.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset2, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
          if (jQuery2.css(elem, "position") === "fixed") {
            offset2 = elem.getBoundingClientRect();
          } else {
            offset2 = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery2(offsetParent).offset();
              parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset2.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
            left: offset2.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
          };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
        var top2 = "pageYOffset" === prop;
        jQuery2.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(
                !top2 ? val2 : win.pageXOffset,
                top2 ? val2 : win.pageYOffset
              );
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery2.each(["top", "left"], function(_i, prop) {
        jQuery2.cssHooks[prop] = addGetHookIf(
          support.pixelPosition,
          function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
            }
          }
        );
      });
      jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
        jQuery2.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery2.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(
                  elem.body["scroll" + name],
                  doc["scroll" + name],
                  elem.body["offset" + name],
                  doc["offset" + name],
                  doc["client" + name]
                );
              }
              return value2 === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                jQuery2.css(elem, type2, extra)
              ) : (
                // Set width or height on the element
                jQuery2.style(elem, type2, value2, extra)
              );
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery2.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(_i, type) {
        jQuery2.fn[type] = function(fn2) {
          return this.on(type, fn2);
        };
      });
      jQuery2.fn.extend({
        bind: function(types, data, fn2) {
          return this.on(types, null, data, fn2);
        },
        unbind: function(types, fn2) {
          return this.off(types, null, fn2);
        },
        delegate: function(selector, types, data, fn2) {
          return this.on(types, selector, data, fn2);
        },
        undelegate: function(selector, types, fn2) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn2);
        },
        hover: function(fnOver, fnOut) {
          return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
      });
      jQuery2.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(_i, name) {
          jQuery2.fn[name] = function(data, fn2) {
            return arguments.length > 0 ? this.on(name, null, data, fn2) : this.trigger(name);
          };
        }
      );
      var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      jQuery2.proxy = function(fn2, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn2[context];
          context = fn2;
          fn2 = tmp;
        }
        if (!isFunction(fn2)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn2.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn2.guid = fn2.guid || jQuery2.guid++;
        return proxy;
      };
      jQuery2.holdReady = function(hold) {
        if (hold) {
          jQuery2.readyWait++;
        } else {
          jQuery2.ready(true);
        }
      };
      jQuery2.isArray = Array.isArray;
      jQuery2.parseJSON = JSON.parse;
      jQuery2.nodeName = nodeName;
      jQuery2.isFunction = isFunction;
      jQuery2.isWindow = isWindow;
      jQuery2.camelCase = camelCase;
      jQuery2.type = toType2;
      jQuery2.now = Date.now;
      jQuery2.isNumeric = function(obj) {
        var type = jQuery2.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      };
      jQuery2.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery2;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery2.noConflict = function(deep) {
        if (window2.$ === jQuery2) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery2) {
          window2.jQuery = _jQuery;
        }
        return jQuery2;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery2;
      }
      return jQuery2;
    });
  }
});

// node_modules/@rails/ujs/app/assets/javascripts/rails-ujs.esm.js
var linkClickSelector = "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]";
var buttonClickSelector = {
  selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
  exclude: "form button"
};
var inputChangeSelector = "select[data-remote], input[data-remote], textarea[data-remote]";
var formSubmitSelector = "form:not([data-turbo=true])";
var formInputClickSelector = "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])";
var formDisableSelector = "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled";
var formEnableSelector = "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled";
var fileInputSelector = "input[name][type=file]:not([disabled])";
var linkDisableSelector = "a[data-disable-with], a[data-disable]";
var buttonDisableSelector = "button[data-remote][data-disable-with], button[data-remote][data-disable]";
var nonce = null;
var loadCSPNonce = () => {
  const metaTag = document.querySelector("meta[name=csp-nonce]");
  return nonce = metaTag && metaTag.content;
};
var cspNonce = () => nonce || loadCSPNonce();
var m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
var matches = function(element, selector) {
  if (selector.exclude) {
    return m.call(element, selector.selector) && !m.call(element, selector.exclude);
  } else {
    return m.call(element, selector);
  }
};
var EXPANDO = "_ujsData";
var getData = (element, key) => element[EXPANDO] ? element[EXPANDO][key] : void 0;
var setData = function(element, key, value) {
  if (!element[EXPANDO]) {
    element[EXPANDO] = {};
  }
  return element[EXPANDO][key] = value;
};
var $2 = (selector) => Array.prototype.slice.call(document.querySelectorAll(selector));
var isContentEditable = function(element) {
  var isEditable = false;
  do {
    if (element.isContentEditable) {
      isEditable = true;
      break;
    }
    element = element.parentElement;
  } while (element);
  return isEditable;
};
var csrfToken = () => {
  const meta = document.querySelector("meta[name=csrf-token]");
  return meta && meta.content;
};
var csrfParam = () => {
  const meta = document.querySelector("meta[name=csrf-param]");
  return meta && meta.content;
};
var CSRFProtection = (xhr) => {
  const token = csrfToken();
  if (token) {
    return xhr.setRequestHeader("X-CSRF-Token", token);
  }
};
var refreshCSRFTokens = () => {
  const token = csrfToken();
  const param = csrfParam();
  if (token && param) {
    return $2('form input[name="' + param + '"]').forEach((input2) => input2.value = token);
  }
};
var AcceptHeaders = {
  "*": "*/*",
  text: "text/plain",
  html: "text/html",
  xml: "application/xml, text/xml",
  json: "application/json, text/javascript",
  script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
};
var ajax = (options) => {
  options = prepareOptions(options);
  var xhr = createXHR(options, function() {
    const response = processResponse(xhr.response != null ? xhr.response : xhr.responseText, xhr.getResponseHeader("Content-Type"));
    if (Math.floor(xhr.status / 100) === 2) {
      if (typeof options.success === "function") {
        options.success(response, xhr.statusText, xhr);
      }
    } else {
      if (typeof options.error === "function") {
        options.error(response, xhr.statusText, xhr);
      }
    }
    return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
  });
  if (options.beforeSend && !options.beforeSend(xhr, options)) {
    return false;
  }
  if (xhr.readyState === XMLHttpRequest.OPENED) {
    return xhr.send(options.data);
  }
};
var prepareOptions = function(options) {
  options.url = options.url || location.href;
  options.type = options.type.toUpperCase();
  if (options.type === "GET" && options.data) {
    if (options.url.indexOf("?") < 0) {
      options.url += "?" + options.data;
    } else {
      options.url += "&" + options.data;
    }
  }
  if (!(options.dataType in AcceptHeaders)) {
    options.dataType = "*";
  }
  options.accept = AcceptHeaders[options.dataType];
  if (options.dataType !== "*") {
    options.accept += ", */*; q=0.01";
  }
  return options;
};
var createXHR = function(options, done) {
  const xhr = new XMLHttpRequest();
  xhr.open(options.type, options.url, true);
  xhr.setRequestHeader("Accept", options.accept);
  if (typeof options.data === "string") {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  }
  if (!options.crossDomain) {
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    CSRFProtection(xhr);
  }
  xhr.withCredentials = !!options.withCredentials;
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      return done(xhr);
    }
  };
  return xhr;
};
var processResponse = function(response, type) {
  if (typeof response === "string" && typeof type === "string") {
    if (type.match(/\bjson\b/)) {
      try {
        response = JSON.parse(response);
      } catch (error) {
      }
    } else if (type.match(/\b(?:java|ecma)script\b/)) {
      const script = document.createElement("script");
      script.setAttribute("nonce", cspNonce());
      script.text = response;
      document.head.appendChild(script).parentNode.removeChild(script);
    } else if (type.match(/\b(xml|html|svg)\b/)) {
      const parser = new DOMParser();
      type = type.replace(/;.+/, "");
      try {
        response = parser.parseFromString(response, type);
      } catch (error1) {
      }
    }
  }
  return response;
};
var href = (element) => element.href;
var isCrossDomain = function(url) {
  const originAnchor = document.createElement("a");
  originAnchor.href = location.href;
  const urlAnchor = document.createElement("a");
  try {
    urlAnchor.href = url;
    return !((!urlAnchor.protocol || urlAnchor.protocol === ":") && !urlAnchor.host || originAnchor.protocol + "//" + originAnchor.host === urlAnchor.protocol + "//" + urlAnchor.host);
  } catch (e) {
    return true;
  }
};
var preventDefault;
var { CustomEvent } = window;
if (typeof CustomEvent !== "function") {
  CustomEvent = function(event, params) {
    const evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };
  CustomEvent.prototype = window.Event.prototype;
  ({ preventDefault } = CustomEvent.prototype);
  CustomEvent.prototype.preventDefault = function() {
    const result = preventDefault.call(this);
    if (this.cancelable && !this.defaultPrevented) {
      Object.defineProperty(this, "defaultPrevented", {
        get() {
          return true;
        }
      });
    }
    return result;
  };
}
var fire = (obj, name, data) => {
  const event = new CustomEvent(name, {
    bubbles: true,
    cancelable: true,
    detail: data
  });
  obj.dispatchEvent(event);
  return !event.defaultPrevented;
};
var stopEverything = (e) => {
  fire(e.target, "ujs:everythingStopped");
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
};
var delegate = (element, selector, eventType, handler) => element.addEventListener(eventType, function(e) {
  let { target } = e;
  while (!!(target instanceof Element) && !matches(target, selector)) {
    target = target.parentNode;
  }
  if (target instanceof Element && handler.call(target, e) === false) {
    e.preventDefault();
    e.stopPropagation();
  }
});
var toArray = (e) => Array.prototype.slice.call(e);
var serializeElement = (element, additionalParam) => {
  let inputs = [element];
  if (matches(element, "form")) {
    inputs = toArray(element.elements);
  }
  const params = [];
  inputs.forEach(function(input2) {
    if (!input2.name || input2.disabled) {
      return;
    }
    if (matches(input2, "fieldset[disabled] *")) {
      return;
    }
    if (matches(input2, "select")) {
      toArray(input2.options).forEach(function(option) {
        if (option.selected) {
          params.push({
            name: input2.name,
            value: option.value
          });
        }
      });
    } else if (input2.checked || ["radio", "checkbox", "submit"].indexOf(input2.type) === -1) {
      params.push({
        name: input2.name,
        value: input2.value
      });
    }
  });
  if (additionalParam) {
    params.push(additionalParam);
  }
  return params.map(function(param) {
    if (param.name) {
      return `${encodeURIComponent(param.name)}=${encodeURIComponent(param.value)}`;
    } else {
      return param;
    }
  }).join("&");
};
var formElements = (form, selector) => {
  if (matches(form, "form")) {
    return toArray(form.elements).filter((el) => matches(el, selector));
  } else {
    return toArray(form.querySelectorAll(selector));
  }
};
var handleConfirmWithRails = (rails) => function(e) {
  if (!allowAction(this, rails)) {
    stopEverything(e);
  }
};
var confirm = (message, element) => window.confirm(message);
var allowAction = function(element, rails) {
  let callback;
  const message = element.getAttribute("data-confirm");
  if (!message) {
    return true;
  }
  let answer = false;
  if (fire(element, "confirm")) {
    try {
      answer = rails.confirm(message, element);
    } catch (error) {
    }
    callback = fire(element, "confirm:complete", [answer]);
  }
  return answer && callback;
};
var handleDisabledElement = function(e) {
  const element = this;
  if (element.disabled) {
    stopEverything(e);
  }
};
var enableElement = (e) => {
  let element;
  if (e instanceof Event) {
    if (isXhrRedirect(e)) {
      return;
    }
    element = e.target;
  } else {
    element = e;
  }
  if (isContentEditable(element)) {
    return;
  }
  if (matches(element, linkDisableSelector)) {
    return enableLinkElement(element);
  } else if (matches(element, buttonDisableSelector) || matches(element, formEnableSelector)) {
    return enableFormElement(element);
  } else if (matches(element, formSubmitSelector)) {
    return enableFormElements(element);
  }
};
var disableElement = (e) => {
  const element = e instanceof Event ? e.target : e;
  if (isContentEditable(element)) {
    return;
  }
  if (matches(element, linkDisableSelector)) {
    return disableLinkElement(element);
  } else if (matches(element, buttonDisableSelector) || matches(element, formDisableSelector)) {
    return disableFormElement(element);
  } else if (matches(element, formSubmitSelector)) {
    return disableFormElements(element);
  }
};
var disableLinkElement = function(element) {
  if (getData(element, "ujs:disabled")) {
    return;
  }
  const replacement = element.getAttribute("data-disable-with");
  if (replacement != null) {
    setData(element, "ujs:enable-with", element.innerHTML);
    element.innerHTML = replacement;
  }
  element.addEventListener("click", stopEverything);
  return setData(element, "ujs:disabled", true);
};
var enableLinkElement = function(element) {
  const originalText = getData(element, "ujs:enable-with");
  if (originalText != null) {
    element.innerHTML = originalText;
    setData(element, "ujs:enable-with", null);
  }
  element.removeEventListener("click", stopEverything);
  return setData(element, "ujs:disabled", null);
};
var disableFormElements = (form) => formElements(form, formDisableSelector).forEach(disableFormElement);
var disableFormElement = function(element) {
  if (getData(element, "ujs:disabled")) {
    return;
  }
  const replacement = element.getAttribute("data-disable-with");
  if (replacement != null) {
    if (matches(element, "button")) {
      setData(element, "ujs:enable-with", element.innerHTML);
      element.innerHTML = replacement;
    } else {
      setData(element, "ujs:enable-with", element.value);
      element.value = replacement;
    }
  }
  element.disabled = true;
  return setData(element, "ujs:disabled", true);
};
var enableFormElements = (form) => formElements(form, formEnableSelector).forEach((element) => enableFormElement(element));
var enableFormElement = function(element) {
  const originalText = getData(element, "ujs:enable-with");
  if (originalText != null) {
    if (matches(element, "button")) {
      element.innerHTML = originalText;
    } else {
      element.value = originalText;
    }
    setData(element, "ujs:enable-with", null);
  }
  element.disabled = false;
  return setData(element, "ujs:disabled", null);
};
var isXhrRedirect = function(event) {
  const xhr = event.detail ? event.detail[0] : void 0;
  return xhr && xhr.getResponseHeader("X-Xhr-Redirect");
};
var handleMethodWithRails = (rails) => function(e) {
  const link = this;
  const method = link.getAttribute("data-method");
  if (!method) {
    return;
  }
  if (isContentEditable(this)) {
    return;
  }
  const href2 = rails.href(link);
  const csrfToken$1 = csrfToken();
  const csrfParam$1 = csrfParam();
  const form = document.createElement("form");
  let formContent = `<input name='_method' value='${method}' type='hidden' />`;
  if (csrfParam$1 && csrfToken$1 && !isCrossDomain(href2)) {
    formContent += `<input name='${csrfParam$1}' value='${csrfToken$1}' type='hidden' />`;
  }
  formContent += '<input type="submit" />';
  form.method = "post";
  form.action = href2;
  form.target = link.target;
  form.innerHTML = formContent;
  form.style.display = "none";
  document.body.appendChild(form);
  form.querySelector('[type="submit"]').click();
  stopEverything(e);
};
var isRemote = function(element) {
  const value = element.getAttribute("data-remote");
  return value != null && value !== "false";
};
var handleRemoteWithRails = (rails) => function(e) {
  let data, method, url;
  const element = this;
  if (!isRemote(element)) {
    return true;
  }
  if (!fire(element, "ajax:before")) {
    fire(element, "ajax:stopped");
    return false;
  }
  if (isContentEditable(element)) {
    fire(element, "ajax:stopped");
    return false;
  }
  const withCredentials = element.getAttribute("data-with-credentials");
  const dataType = element.getAttribute("data-type") || "script";
  if (matches(element, formSubmitSelector)) {
    const button = getData(element, "ujs:submit-button");
    method = getData(element, "ujs:submit-button-formmethod") || element.getAttribute("method") || "get";
    url = getData(element, "ujs:submit-button-formaction") || element.getAttribute("action") || location.href;
    if (method.toUpperCase() === "GET") {
      url = url.replace(/\?.*$/, "");
    }
    if (element.enctype === "multipart/form-data") {
      data = new FormData(element);
      if (button != null) {
        data.append(button.name, button.value);
      }
    } else {
      data = serializeElement(element, button);
    }
    setData(element, "ujs:submit-button", null);
    setData(element, "ujs:submit-button-formmethod", null);
    setData(element, "ujs:submit-button-formaction", null);
  } else if (matches(element, buttonClickSelector) || matches(element, inputChangeSelector)) {
    method = element.getAttribute("data-method");
    url = element.getAttribute("data-url");
    data = serializeElement(element, element.getAttribute("data-params"));
  } else {
    method = element.getAttribute("data-method");
    url = rails.href(element);
    data = element.getAttribute("data-params");
  }
  ajax({
    type: method || "GET",
    url,
    data,
    dataType,
    beforeSend(xhr, options) {
      if (fire(element, "ajax:beforeSend", [xhr, options])) {
        return fire(element, "ajax:send", [xhr]);
      } else {
        fire(element, "ajax:stopped");
        return false;
      }
    },
    success(...args) {
      return fire(element, "ajax:success", args);
    },
    error(...args) {
      return fire(element, "ajax:error", args);
    },
    complete(...args) {
      return fire(element, "ajax:complete", args);
    },
    crossDomain: isCrossDomain(url),
    withCredentials: withCredentials != null && withCredentials !== "false"
  });
  stopEverything(e);
};
var formSubmitButtonClick = function(e) {
  const button = this;
  const { form } = button;
  if (!form) {
    return;
  }
  if (button.name) {
    setData(form, "ujs:submit-button", {
      name: button.name,
      value: button.value
    });
  }
  setData(form, "ujs:formnovalidate-button", button.formNoValidate);
  setData(form, "ujs:submit-button-formaction", button.getAttribute("formaction"));
  return setData(form, "ujs:submit-button-formmethod", button.getAttribute("formmethod"));
};
var preventInsignificantClick = function(e) {
  const link = this;
  const method = (link.getAttribute("data-method") || "GET").toUpperCase();
  const data = link.getAttribute("data-params");
  const metaClick = e.metaKey || e.ctrlKey;
  const insignificantMetaClick = metaClick && method === "GET" && !data;
  const nonPrimaryMouseClick = e.button != null && e.button !== 0;
  if (nonPrimaryMouseClick || insignificantMetaClick) {
    e.stopImmediatePropagation();
  }
};
var Rails2 = {
  $: $2,
  ajax,
  buttonClickSelector,
  buttonDisableSelector,
  confirm,
  cspNonce,
  csrfToken,
  csrfParam,
  CSRFProtection,
  delegate,
  disableElement,
  enableElement,
  fileInputSelector,
  fire,
  formElements,
  formEnableSelector,
  formDisableSelector,
  formInputClickSelector,
  formSubmitButtonClick,
  formSubmitSelector,
  getData,
  handleDisabledElement,
  href,
  inputChangeSelector,
  isCrossDomain,
  linkClickSelector,
  linkDisableSelector,
  loadCSPNonce,
  matches,
  preventInsignificantClick,
  refreshCSRFTokens,
  serializeElement,
  setData,
  stopEverything
};
var handleConfirm = handleConfirmWithRails(Rails2);
Rails2.handleConfirm = handleConfirm;
var handleMethod = handleMethodWithRails(Rails2);
Rails2.handleMethod = handleMethod;
var handleRemote = handleRemoteWithRails(Rails2);
Rails2.handleRemote = handleRemote;
var start = function() {
  if (window._rails_loaded) {
    throw new Error("rails-ujs has already been loaded!");
  }
  window.addEventListener("pageshow", function() {
    $2(formEnableSelector).forEach(function(el) {
      if (getData(el, "ujs:disabled")) {
        enableElement(el);
      }
    });
    $2(linkDisableSelector).forEach(function(el) {
      if (getData(el, "ujs:disabled")) {
        enableElement(el);
      }
    });
  });
  delegate(document, linkDisableSelector, "ajax:complete", enableElement);
  delegate(document, linkDisableSelector, "ajax:stopped", enableElement);
  delegate(document, buttonDisableSelector, "ajax:complete", enableElement);
  delegate(document, buttonDisableSelector, "ajax:stopped", enableElement);
  delegate(document, linkClickSelector, "click", preventInsignificantClick);
  delegate(document, linkClickSelector, "click", handleDisabledElement);
  delegate(document, linkClickSelector, "click", handleConfirm);
  delegate(document, linkClickSelector, "click", disableElement);
  delegate(document, linkClickSelector, "click", handleRemote);
  delegate(document, linkClickSelector, "click", handleMethod);
  delegate(document, buttonClickSelector, "click", preventInsignificantClick);
  delegate(document, buttonClickSelector, "click", handleDisabledElement);
  delegate(document, buttonClickSelector, "click", handleConfirm);
  delegate(document, buttonClickSelector, "click", disableElement);
  delegate(document, buttonClickSelector, "click", handleRemote);
  delegate(document, inputChangeSelector, "change", handleDisabledElement);
  delegate(document, inputChangeSelector, "change", handleConfirm);
  delegate(document, inputChangeSelector, "change", handleRemote);
  delegate(document, formSubmitSelector, "submit", handleDisabledElement);
  delegate(document, formSubmitSelector, "submit", handleConfirm);
  delegate(document, formSubmitSelector, "submit", handleRemote);
  delegate(document, formSubmitSelector, "submit", (e) => setTimeout(() => disableElement(e), 13));
  delegate(document, formSubmitSelector, "ajax:send", disableElement);
  delegate(document, formSubmitSelector, "ajax:complete", enableElement);
  delegate(document, formInputClickSelector, "click", preventInsignificantClick);
  delegate(document, formInputClickSelector, "click", handleDisabledElement);
  delegate(document, formInputClickSelector, "click", handleConfirm);
  delegate(document, formInputClickSelector, "click", formSubmitButtonClick);
  document.addEventListener("DOMContentLoaded", refreshCSRFTokens);
  document.addEventListener("DOMContentLoaded", loadCSPNonce);
  return window._rails_loaded = true;
};
Rails2.start = start;
if (typeof jQuery !== "undefined" && jQuery && jQuery.ajax) {
  if (jQuery.rails) {
    throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
  }
  jQuery.rails = Rails2;
  jQuery.ajaxPrefilter(function(options, originalOptions, xhr) {
    if (!options.crossDomain) {
      return CSRFProtection(xhr);
    }
  });
}

// node_modules/@popperjs/core/lib/index.js
var lib_exports = {};
__export(lib_exports, {
  afterMain: () => afterMain,
  afterRead: () => afterRead,
  afterWrite: () => afterWrite,
  applyStyles: () => applyStyles_default,
  arrow: () => arrow_default,
  auto: () => auto,
  basePlacements: () => basePlacements,
  beforeMain: () => beforeMain,
  beforeRead: () => beforeRead,
  beforeWrite: () => beforeWrite,
  bottom: () => bottom,
  clippingParents: () => clippingParents,
  computeStyles: () => computeStyles_default,
  createPopper: () => createPopper3,
  createPopperBase: () => createPopper,
  createPopperLite: () => createPopper2,
  detectOverflow: () => detectOverflow,
  end: () => end,
  eventListeners: () => eventListeners_default,
  flip: () => flip_default,
  hide: () => hide_default,
  left: () => left,
  main: () => main,
  modifierPhases: () => modifierPhases,
  offset: () => offset_default,
  placements: () => placements,
  popper: () => popper,
  popperGenerator: () => popperGenerator,
  popperOffsets: () => popperOffsets_default,
  preventOverflow: () => preventOverflow_default,
  read: () => read,
  reference: () => reference,
  right: () => right,
  start: () => start2,
  top: () => top,
  variationPlacements: () => variationPlacements,
  viewport: () => viewport,
  write: () => write
});

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start2 = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start2, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start2, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start2:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start2;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start2 ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start2 ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = /* @__PURE__ */ popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = /* @__PURE__ */ popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/bootstrap/dist/js/bootstrap.esm.js
var elementMap = /* @__PURE__ */ new Map();
var Data = {
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, /* @__PURE__ */ new Map());
    }
    const instanceMap = elementMap.get(element);
    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }
    instanceMap.set(key, instance);
  },
  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }
    return null;
  },
  remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }
    const instanceMap = elementMap.get(element);
    instanceMap.delete(key);
    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }
};
var MAX_UID = 1e6;
var MILLISECONDS_MULTIPLIER = 1e3;
var TRANSITION_END = "transitionend";
var parseSelector = (selector) => {
  if (selector && window.CSS && window.CSS.escape) {
    selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
  }
  return selector;
};
var toType = (object) => {
  if (object === null || object === void 0) {
    return `${object}`;
  }
  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
var getUID = (prefix) => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));
  return prefix;
};
var getTransitionDurationFromElement = (element) => {
  if (!element) {
    return 0;
  }
  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }
  transitionDuration = transitionDuration.split(",")[0];
  transitionDelay = transitionDelay.split(",")[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
var triggerTransitionEnd = (element) => {
  element.dispatchEvent(new Event(TRANSITION_END));
};
var isElement2 = (object) => {
  if (!object || typeof object !== "object") {
    return false;
  }
  if (typeof object.jquery !== "undefined") {
    object = object[0];
  }
  return typeof object.nodeType !== "undefined";
};
var getElement = (object) => {
  if (isElement2(object)) {
    return object.jquery ? object[0] : object;
  }
  if (typeof object === "string" && object.length > 0) {
    return document.querySelector(parseSelector(object));
  }
  return null;
};
var isVisible = (element) => {
  if (!isElement2(element) || element.getClientRects().length === 0) {
    return false;
  }
  const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
  const closedDetails = element.closest("details:not([open])");
  if (!closedDetails) {
    return elementIsVisible;
  }
  if (closedDetails !== element) {
    const summary = element.closest("summary");
    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }
    if (summary === null) {
      return false;
    }
  }
  return elementIsVisible;
};
var isDisabled = (element) => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }
  if (element.classList.contains("disabled")) {
    return true;
  }
  if (typeof element.disabled !== "undefined") {
    return element.disabled;
  }
  return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
};
var findShadowRoot = (element) => {
  if (!document.documentElement.attachShadow) {
    return null;
  }
  if (typeof element.getRootNode === "function") {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }
  if (element instanceof ShadowRoot) {
    return element;
  }
  if (!element.parentNode) {
    return null;
  }
  return findShadowRoot(element.parentNode);
};
var noop = () => {
};
var reflow = (element) => {
  element.offsetHeight;
};
var getjQuery = () => {
  if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
    return window.jQuery;
  }
  return null;
};
var DOMContentLoadedCallbacks = [];
var onDOMContentLoaded = (callback) => {
  if (document.readyState === "loading") {
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener("DOMContentLoaded", () => {
        for (const callback2 of DOMContentLoadedCallbacks) {
          callback2();
        }
      });
    }
    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};
var isRTL = () => document.documentElement.dir === "rtl";
var defineJQueryPlugin = (plugin) => {
  onDOMContentLoaded(() => {
    const $3 = getjQuery();
    if ($3) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $3.fn[name];
      $3.fn[name] = plugin.jQueryInterface;
      $3.fn[name].Constructor = plugin;
      $3.fn[name].noConflict = () => {
        $3.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};
var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
  return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
};
var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;
  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };
  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  const listLength = list.length;
  let index = list.indexOf(activeElement);
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }
  index += shouldGetNext ? 1 : -1;
  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }
  return list[Math.max(0, Math.min(index, listLength - 1))];
};
var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {};
var uidEvent = 1;
var customEvents = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
};
var nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function makeEventUid(element, uid) {
  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
  const uid = makeEventUid(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}
function bootstrapHandler(element, fn2) {
  return function handler(event) {
    hydrateObj(event, {
      delegateTarget: element
    });
    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn2);
    }
    return fn2.apply(element, [event]);
  };
}
function bootstrapDelegationHandler(element, selector, fn2) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);
    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue;
        }
        hydrateObj(event, {
          delegateTarget: target
        });
        if (handler.oneOff) {
          EventHandler.off(element, event.type, selector, fn2);
        }
        return fn2.apply(target, [event]);
      }
    }
  };
}
function findHandler(events, callable, delegationSelector = null) {
  return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === "string";
  const callable = isDelegated ? delegationFunction : handler || delegationFunction;
  let typeEvent = getTypeEvent(originalTypeEvent);
  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent;
  }
  return [isDelegated, callable, typeEvent];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== "string" || !element) {
    return;
  }
  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
  if (originalTypeEvent in customEvents) {
    const wrapFunction = (fn3) => {
      return function(event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn3.call(this, event);
        }
      };
    };
    callable = wrapFunction(callable);
  }
  const events = getElementEvents(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff;
    return;
  }
  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
  const fn2 = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
  fn2.delegationSelector = isDelegated ? handler : null;
  fn2.callable = callable;
  fn2.oneOff = oneOff;
  fn2.uidEvent = uid;
  handlers[uid] = fn2;
  element.addEventListener(typeEvent, fn2, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn2 = findHandler(events[typeEvent], handler, delegationSelector);
  if (!fn2) {
    return;
  }
  element.removeEventListener(typeEvent, fn2, Boolean(delegationSelector));
  delete events[typeEvent][fn2.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
  }
}
function getTypeEvent(event) {
  event = event.replace(stripNameRegex, "");
  return customEvents[event] || event;
}
var EventHandler = {
  on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false);
  },
  one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true);
  },
  off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getElementEvents(element);
    const storeElementEvent = events[typeEvent] || {};
    const isNamespace = originalTypeEvent.startsWith(".");
    if (typeof callable !== "undefined") {
      if (!Object.keys(storeElementEvent).length) {
        return;
      }
      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
      return;
    }
    if (isNamespace) {
      for (const elementEvent of Object.keys(events)) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      }
    }
    for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
      const handlerKey = keyHandlers.replace(stripUidRegex, "");
      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  },
  trigger(element, event, args) {
    if (typeof event !== "string" || !element) {
      return null;
    }
    const $3 = getjQuery();
    const typeEvent = getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    let jQueryEvent = null;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    if (inNamespace && $3) {
      jQueryEvent = $3.Event(event, args);
      $3(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }
    const evt = hydrateObj(new Event(event, {
      bubbles,
      cancelable: true
    }), args);
    if (defaultPrevented) {
      evt.preventDefault();
    }
    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }
    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault();
    }
    return evt;
  }
};
function hydrateObj(obj, meta = {}) {
  for (const [key, value] of Object.entries(meta)) {
    try {
      obj[key] = value;
    } catch (_unused) {
      Object.defineProperty(obj, key, {
        configurable: true,
        get() {
          return value;
        }
      });
    }
  }
  return obj;
}
function normalizeData(value) {
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  if (value === Number(value).toString()) {
    return Number(value);
  }
  if (value === "" || value === "null") {
    return null;
  }
  if (typeof value !== "string") {
    return value;
  }
  try {
    return JSON.parse(decodeURIComponent(value));
  } catch (_unused) {
    return value;
  }
}
function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
}
var Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
  },
  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
  },
  getDataAttributes(element) {
    if (!element) {
      return {};
    }
    const attributes = {};
    const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
    for (const key of bsKeys) {
      let pureKey = key.replace(/^bs/, "");
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    }
    return attributes;
  },
  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
  }
};
var Config = class {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    return config;
  }
  _mergeConfigObj(config, element) {
    const jsonConfig = isElement2(element) ? Manipulator.getDataAttribute(element, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof jsonConfig === "object" ? jsonConfig : {},
      ...isElement2(element) ? Manipulator.getDataAttributes(element) : {},
      ...typeof config === "object" ? config : {}
    };
  }
  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
    for (const [property, expectedTypes] of Object.entries(configTypes)) {
      const value = config[property];
      const valueType = isElement2(value) ? "element" : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    }
  }
};
var VERSION = "5.3.3";
var BaseComponent = class extends Config {
  constructor(element, config) {
    super();
    element = getElement(element);
    if (!element) {
      return;
    }
    this._element = element;
    this._config = this._getConfig(config);
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }
  // Public
  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null;
    }
  }
  _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config, this._element);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  // Static
  static getInstance(element) {
    return Data.get(getElement(element), this.DATA_KEY);
  }
  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
  }
  static get VERSION() {
    return VERSION;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(name) {
    return `${name}${this.EVENT_KEY}`;
  }
};
var getSelector = (element) => {
  let selector = element.getAttribute("data-bs-target");
  if (!selector || selector === "#") {
    let hrefAttribute = element.getAttribute("href");
    if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
      return null;
    }
    if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
      hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
    }
    selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
  }
  return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
};
var SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },
  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },
  children(element, selector) {
    return [].concat(...element.children).filter((child) => child.matches(selector));
  },
  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode.closest(selector);
    while (ancestor) {
      parents.push(ancestor);
      ancestor = ancestor.parentNode.closest(selector);
    }
    return parents;
  },
  prev(element, selector) {
    let previous = element.previousElementSibling;
    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }
      previous = previous.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(element, selector) {
    let next = element.nextElementSibling;
    while (next) {
      if (next.matches(selector)) {
        return [next];
      }
      next = next.nextElementSibling;
    }
    return [];
  },
  focusableChildren(element) {
    const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
    return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
  },
  getSelectorFromElement(element) {
    const selector = getSelector(element);
    if (selector) {
      return SelectorEngine.findOne(selector) ? selector : null;
    }
    return null;
  },
  getElementFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.findOne(selector) : null;
  },
  getMultipleElementsFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.find(selector) : [];
  }
};
var enableDismissTrigger = (component, method = "hide") => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
  const name = component.NAME;
  EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target);
    instance[method]();
  });
};
var NAME$f = "alert";
var DATA_KEY$a = "bs.alert";
var EVENT_KEY$b = `.${DATA_KEY$a}`;
var EVENT_CLOSE = `close${EVENT_KEY$b}`;
var EVENT_CLOSED = `closed${EVENT_KEY$b}`;
var CLASS_NAME_FADE$5 = "fade";
var CLASS_NAME_SHOW$8 = "show";
var Alert = class _Alert extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$f;
  }
  // Public
  close() {
    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
    if (closeEvent.defaultPrevented) {
      return;
    }
    this._element.classList.remove(CLASS_NAME_SHOW$8);
    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
  }
  // Private
  _destroyElement() {
    this._element.remove();
    EventHandler.trigger(this._element, EVENT_CLOSED);
    this.dispose();
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Alert.getOrCreateInstance(this);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
};
enableDismissTrigger(Alert, "close");
defineJQueryPlugin(Alert);
var NAME$e = "button";
var DATA_KEY$9 = "bs.button";
var EVENT_KEY$a = `.${DATA_KEY$9}`;
var DATA_API_KEY$6 = ".data-api";
var CLASS_NAME_ACTIVE$3 = "active";
var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
var EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
var Button = class _Button extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$e;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Button.getOrCreateInstance(this);
      if (config === "toggle") {
        data[config]();
      }
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
  event.preventDefault();
  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  const data = Button.getOrCreateInstance(button);
  data.toggle();
});
defineJQueryPlugin(Button);
var NAME$d = "swipe";
var EVENT_KEY$9 = ".bs.swipe";
var EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
var EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
var EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
var POINTER_TYPE_TOUCH = "touch";
var POINTER_TYPE_PEN = "pen";
var CLASS_NAME_POINTER_EVENT = "pointer-event";
var SWIPE_THRESHOLD = 40;
var Default$c = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
};
var DefaultType$c = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
var Swipe = class _Swipe extends Config {
  constructor(element, config) {
    super();
    this._element = element;
    if (!element || !_Swipe.isSupported()) {
      return;
    }
    this._config = this._getConfig(config);
    this._deltaX = 0;
    this._supportPointerEvents = Boolean(window.PointerEvent);
    this._initEvents();
  }
  // Getters
  static get Default() {
    return Default$c;
  }
  static get DefaultType() {
    return DefaultType$c;
  }
  static get NAME() {
    return NAME$d;
  }
  // Public
  dispose() {
    EventHandler.off(this._element, EVENT_KEY$9);
  }
  // Private
  _start(event) {
    if (!this._supportPointerEvents) {
      this._deltaX = event.touches[0].clientX;
      return;
    }
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX;
    }
  }
  _end(event) {
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX - this._deltaX;
    }
    this._handleSwipe();
    execute(this._config.endCallback);
  }
  _move(event) {
    this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const absDeltaX = Math.abs(this._deltaX);
    if (absDeltaX <= SWIPE_THRESHOLD) {
      return;
    }
    const direction = absDeltaX / this._deltaX;
    this._deltaX = 0;
    if (!direction) {
      return;
    }
    execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    if (this._supportPointerEvents) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
      EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
      EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
      EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
    }
  }
  _eventIsPointerPenTouch(event) {
    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
};
var NAME$c = "carousel";
var DATA_KEY$8 = "bs.carousel";
var EVENT_KEY$8 = `.${DATA_KEY$8}`;
var DATA_API_KEY$5 = ".data-api";
var ARROW_LEFT_KEY$1 = "ArrowLeft";
var ARROW_RIGHT_KEY$1 = "ArrowRight";
var TOUCHEVENT_COMPAT_WAIT = 500;
var ORDER_NEXT = "next";
var ORDER_PREV = "prev";
var DIRECTION_LEFT = "left";
var DIRECTION_RIGHT = "right";
var EVENT_SLIDE = `slide${EVENT_KEY$8}`;
var EVENT_SLID = `slid${EVENT_KEY$8}`;
var EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
var EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
var EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
var EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
var EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
var EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
var CLASS_NAME_CAROUSEL = "carousel";
var CLASS_NAME_ACTIVE$2 = "active";
var CLASS_NAME_SLIDE = "slide";
var CLASS_NAME_END = "carousel-item-end";
var CLASS_NAME_START = "carousel-item-start";
var CLASS_NAME_NEXT = "carousel-item-next";
var CLASS_NAME_PREV = "carousel-item-prev";
var SELECTOR_ACTIVE = ".active";
var SELECTOR_ITEM = ".carousel-item";
var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
var SELECTOR_ITEM_IMG = ".carousel-item img";
var SELECTOR_INDICATORS = ".carousel-indicators";
var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
var KEY_TO_DIRECTION = {
  [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
  [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
var Default$b = {
  interval: 5e3,
  keyboard: true,
  pause: "hover",
  ride: false,
  touch: true,
  wrap: true
};
var DefaultType$b = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
var Carousel = class _Carousel extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._interval = null;
    this._activeElement = null;
    this._isSliding = false;
    this.touchTimeout = null;
    this._swipeHelper = null;
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
    this._addEventListeners();
    if (this._config.ride === CLASS_NAME_CAROUSEL) {
      this.cycle();
    }
  }
  // Getters
  static get Default() {
    return Default$b;
  }
  static get DefaultType() {
    return DefaultType$b;
  }
  static get NAME() {
    return NAME$c;
  }
  // Public
  next() {
    this._slide(ORDER_NEXT);
  }
  nextWhenVisible() {
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  }
  prev() {
    this._slide(ORDER_PREV);
  }
  pause() {
    if (this._isSliding) {
      triggerTransitionEnd(this._element);
    }
    this._clearInterval();
  }
  cycle() {
    this._clearInterval();
    this._updateInterval();
    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (!this._config.ride) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
      return;
    }
    this.cycle();
  }
  to(index) {
    const items = this._getItems();
    if (index > items.length - 1 || index < 0) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
      return;
    }
    const activeIndex = this._getItemIndex(this._getActive());
    if (activeIndex === index) {
      return;
    }
    const order2 = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
    this._slide(order2, items[index]);
  }
  dispose() {
    if (this._swipeHelper) {
      this._swipeHelper.dispose();
    }
    super.dispose();
  }
  // Private
  _configAfterMerge(config) {
    config.defaultInterval = config.interval;
    return config;
  }
  _addEventListeners() {
    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
    }
    if (this._config.pause === "hover") {
      EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
      EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
    }
    if (this._config.touch && Swipe.isSupported()) {
      this._addTouchEventListeners();
    }
  }
  _addTouchEventListeners() {
    for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
      EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
    }
    const endCallBack = () => {
      if (this._config.pause !== "hover") {
        return;
      }
      this.pause();
      if (this.touchTimeout) {
        clearTimeout(this.touchTimeout);
      }
      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
    };
    const swipeConfig = {
      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
      endCallback: endCallBack
    };
    this._swipeHelper = new Swipe(this._element, swipeConfig);
  }
  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }
    const direction = KEY_TO_DIRECTION[event.key];
    if (direction) {
      event.preventDefault();
      this._slide(this._directionToOrder(direction));
    }
  }
  _getItemIndex(element) {
    return this._getItems().indexOf(element);
  }
  _setActiveIndicatorElement(index) {
    if (!this._indicatorsElement) {
      return;
    }
    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
    activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
    activeIndicator.removeAttribute("aria-current");
    const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
    if (newActiveIndicator) {
      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
      newActiveIndicator.setAttribute("aria-current", "true");
    }
  }
  _updateInterval() {
    const element = this._activeElement || this._getActive();
    if (!element) {
      return;
    }
    const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
    this._config.interval = elementInterval || this._config.defaultInterval;
  }
  _slide(order2, element = null) {
    if (this._isSliding) {
      return;
    }
    const activeElement = this._getActive();
    const isNext = order2 === ORDER_NEXT;
    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
    if (nextElement === activeElement) {
      return;
    }
    const nextElementIndex = this._getItemIndex(nextElement);
    const triggerEvent = (eventName) => {
      return EventHandler.trigger(this._element, eventName, {
        relatedTarget: nextElement,
        direction: this._orderToDirection(order2),
        from: this._getItemIndex(activeElement),
        to: nextElementIndex
      });
    };
    const slideEvent = triggerEvent(EVENT_SLIDE);
    if (slideEvent.defaultPrevented) {
      return;
    }
    if (!activeElement || !nextElement) {
      return;
    }
    const isCycling = Boolean(this._interval);
    this.pause();
    this._isSliding = true;
    this._setActiveIndicatorElement(nextElementIndex);
    this._activeElement = nextElement;
    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
    nextElement.classList.add(orderClassName);
    reflow(nextElement);
    activeElement.classList.add(directionalClassName);
    nextElement.classList.add(directionalClassName);
    const completeCallBack = () => {
      nextElement.classList.remove(directionalClassName, orderClassName);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
      this._isSliding = false;
      triggerEvent(EVENT_SLID);
    };
    this._queueCallback(completeCallBack, activeElement, this._isAnimated());
    if (isCycling) {
      this.cycle();
    }
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_SLIDE);
  }
  _getActive() {
    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
  }
  _getItems() {
    return SelectorEngine.find(SELECTOR_ITEM, this._element);
  }
  _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }
  _directionToOrder(direction) {
    if (isRTL()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
    }
    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
  }
  _orderToDirection(order2) {
    if (isRTL()) {
      return order2 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return order2 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Carousel.getOrCreateInstance(this, config);
      if (typeof config === "number") {
        data.to(config);
        return;
      }
      if (typeof config === "string") {
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
    return;
  }
  event.preventDefault();
  const carousel = Carousel.getOrCreateInstance(target);
  const slideIndex = this.getAttribute("data-bs-slide-to");
  if (slideIndex) {
    carousel.to(slideIndex);
    carousel._maybeEnableCycle();
    return;
  }
  if (Manipulator.getDataAttribute(this, "slide") === "next") {
    carousel.next();
    carousel._maybeEnableCycle();
    return;
  }
  carousel.prev();
  carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
  for (const carousel of carousels) {
    Carousel.getOrCreateInstance(carousel);
  }
});
defineJQueryPlugin(Carousel);
var NAME$b = "collapse";
var DATA_KEY$7 = "bs.collapse";
var EVENT_KEY$7 = `.${DATA_KEY$7}`;
var DATA_API_KEY$4 = ".data-api";
var EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
var EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
var EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
var EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
var EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
var CLASS_NAME_SHOW$7 = "show";
var CLASS_NAME_COLLAPSE = "collapse";
var CLASS_NAME_COLLAPSING = "collapsing";
var CLASS_NAME_COLLAPSED = "collapsed";
var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
var WIDTH = "width";
var HEIGHT = "height";
var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
var Default$a = {
  parent: null,
  toggle: true
};
var DefaultType$a = {
  parent: "(null|element)",
  toggle: "boolean"
};
var Collapse = class _Collapse extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isTransitioning = false;
    this._triggerArray = [];
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
    for (const elem of toggleList) {
      const selector = SelectorEngine.getSelectorFromElement(elem);
      const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
      if (selector !== null && filterElement.length) {
        this._triggerArray.push(elem);
      }
    }
    this._initializeChildren();
    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }
    if (this._config.toggle) {
      this.toggle();
    }
  }
  // Getters
  static get Default() {
    return Default$a;
  }
  static get DefaultType() {
    return DefaultType$a;
  }
  static get NAME() {
    return NAME$b;
  }
  // Public
  toggle() {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }
  show() {
    if (this._isTransitioning || this._isShown()) {
      return;
    }
    let activeChildren = [];
    if (this._config.parent) {
      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, {
        toggle: false
      }));
    }
    if (activeChildren.length && activeChildren[0]._isTransitioning) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    for (const activeInstance of activeChildren) {
      activeInstance.hide();
    }
    const dimension = this._getDimension();
    this._element.classList.remove(CLASS_NAME_COLLAPSE);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.style[dimension] = 0;
    this._addAriaAndCollapsedClass(this._triggerArray, true);
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      this._element.style[dimension] = "";
      EventHandler.trigger(this._element, EVENT_SHOWN$6);
    };
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;
    this._queueCallback(complete, this._element, true);
    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    const dimension = this._getDimension();
    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
    for (const trigger of this._triggerArray) {
      const element = SelectorEngine.getElementFromSelector(trigger);
      if (element && !this._isShown(element)) {
        this._addAriaAndCollapsedClass([trigger], false);
      }
    }
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE);
      EventHandler.trigger(this._element, EVENT_HIDDEN$6);
    };
    this._element.style[dimension] = "";
    this._queueCallback(complete, this._element, true);
  }
  _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW$7);
  }
  // Private
  _configAfterMerge(config) {
    config.toggle = Boolean(config.toggle);
    config.parent = getElement(config.parent);
    return config;
  }
  _getDimension() {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
  }
  _initializeChildren() {
    if (!this._config.parent) {
      return;
    }
    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
    for (const element of children) {
      const selected = SelectorEngine.getElementFromSelector(element);
      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
      }
    }
  }
  _getFirstLevelChildren(selector) {
    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
    return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
  }
  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }
    for (const element of triggerArray) {
      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
      element.setAttribute("aria-expanded", isOpen);
    }
  }
  // Static
  static jQueryInterface(config) {
    const _config = {};
    if (typeof config === "string" && /show|hide/.test(config)) {
      _config.toggle = false;
    }
    return this.each(function() {
      const data = _Collapse.getOrCreateInstance(this, _config);
      if (typeof config === "string") {
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
  if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
    event.preventDefault();
  }
  for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  }
});
defineJQueryPlugin(Collapse);
var NAME$a = "dropdown";
var DATA_KEY$6 = "bs.dropdown";
var EVENT_KEY$6 = `.${DATA_KEY$6}`;
var DATA_API_KEY$3 = ".data-api";
var ESCAPE_KEY$2 = "Escape";
var TAB_KEY$1 = "Tab";
var ARROW_UP_KEY$1 = "ArrowUp";
var ARROW_DOWN_KEY$1 = "ArrowDown";
var RIGHT_MOUSE_BUTTON = 2;
var EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
var EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
var EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
var EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
var EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
var CLASS_NAME_SHOW$6 = "show";
var CLASS_NAME_DROPUP = "dropup";
var CLASS_NAME_DROPEND = "dropend";
var CLASS_NAME_DROPSTART = "dropstart";
var CLASS_NAME_DROPUP_CENTER = "dropup-center";
var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
var SELECTOR_MENU = ".dropdown-menu";
var SELECTOR_NAVBAR = ".navbar";
var SELECTOR_NAVBAR_NAV = ".navbar-nav";
var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
var PLACEMENT_TOPCENTER = "top";
var PLACEMENT_BOTTOMCENTER = "bottom";
var Default$9 = {
  autoClose: true,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
};
var DefaultType$9 = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
var Dropdown = class _Dropdown extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._popper = null;
    this._parent = this._element.parentNode;
    this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
    this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return Default$9;
  }
  static get DefaultType() {
    return DefaultType$9;
  }
  static get NAME() {
    return NAME$a;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (isDisabled(this._element) || this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._createPopper();
    if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, "mouseover", noop);
      }
    }
    this._element.focus();
    this._element.setAttribute("aria-expanded", true);
    this._menu.classList.add(CLASS_NAME_SHOW$6);
    this._element.classList.add(CLASS_NAME_SHOW$6);
    EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
  }
  hide() {
    if (isDisabled(this._element) || !this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    this._completeHide(relatedTarget);
  }
  dispose() {
    if (this._popper) {
      this._popper.destroy();
    }
    super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar();
    if (this._popper) {
      this._popper.update();
    }
  }
  // Private
  _completeHide(relatedTarget) {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
    if (hideEvent.defaultPrevented) {
      return;
    }
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, "mouseover", noop);
      }
    }
    if (this._popper) {
      this._popper.destroy();
    }
    this._menu.classList.remove(CLASS_NAME_SHOW$6);
    this._element.classList.remove(CLASS_NAME_SHOW$6);
    this._element.setAttribute("aria-expanded", "false");
    Manipulator.removeDataAttribute(this._menu, "popper");
    EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
  }
  _getConfig(config) {
    config = super._getConfig(config);
    if (typeof config.reference === "object" && !isElement2(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
      throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }
    return config;
  }
  _createPopper() {
    if (typeof lib_exports === "undefined") {
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    }
    let referenceElement = this._element;
    if (this._config.reference === "parent") {
      referenceElement = this._parent;
    } else if (isElement2(this._config.reference)) {
      referenceElement = getElement(this._config.reference);
    } else if (typeof this._config.reference === "object") {
      referenceElement = this._config.reference;
    }
    const popperConfig = this._getPopperConfig();
    this._popper = createPopper3(referenceElement, this._menu, popperConfig);
  }
  _isShown() {
    return this._menu.classList.contains(CLASS_NAME_SHOW$6);
  }
  _getPlacement() {
    const parentDropdown = this._parent;
    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
      return PLACEMENT_TOPCENTER;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
      return PLACEMENT_BOTTOMCENTER;
    }
    const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }
    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  }
  _detectNavbar() {
    return this._element.closest(SELECTOR_NAVBAR) !== null;
  }
  _getOffset() {
    const {
      offset: offset2
    } = this._config;
    if (typeof offset2 === "string") {
      return offset2.split(",").map((value) => Number.parseInt(value, 10));
    }
    if (typeof offset2 === "function") {
      return (popperData) => offset2(popperData, this._element);
    }
    return offset2;
  }
  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }]
    };
    if (this._inNavbar || this._config.display === "static") {
      Manipulator.setDataAttribute(this._menu, "popper", "static");
      defaultBsPopperConfig.modifiers = [{
        name: "applyStyles",
        enabled: false
      }];
    }
    return {
      ...defaultBsPopperConfig,
      ...execute(this._config.popperConfig, [defaultBsPopperConfig])
    };
  }
  _selectMenuItem({
    key,
    target
  }) {
    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
    if (!items.length) {
      return;
    }
    getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Dropdown.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
  static clearMenus(event) {
    if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
      return;
    }
    const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
    for (const toggle of openToggles) {
      const context = _Dropdown.getInstance(toggle);
      if (!context || context._config.autoClose === false) {
        continue;
      }
      const composedPath = event.composedPath();
      const isMenuTarget = composedPath.includes(context._menu);
      if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
        continue;
      }
      if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
        continue;
      }
      const relatedTarget = {
        relatedTarget: context._element
      };
      if (event.type === "click") {
        relatedTarget.clickEvent = event;
      }
      context._completeHide(relatedTarget);
    }
  }
  static dataApiKeydownHandler(event) {
    const isInput = /input|textarea/i.test(event.target.tagName);
    const isEscapeEvent = event.key === ESCAPE_KEY$2;
    const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
    if (!isUpOrDownEvent && !isEscapeEvent) {
      return;
    }
    if (isInput && !isEscapeEvent) {
      return;
    }
    event.preventDefault();
    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
    const instance = _Dropdown.getOrCreateInstance(getToggleButton);
    if (isUpOrDownEvent) {
      event.stopPropagation();
      instance.show();
      instance._selectMenuItem(event);
      return;
    }
    if (instance._isShown()) {
      event.stopPropagation();
      instance.hide();
      getToggleButton.focus();
    }
  }
};
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});
defineJQueryPlugin(Dropdown);
var NAME$9 = "backdrop";
var CLASS_NAME_FADE$4 = "fade";
var CLASS_NAME_SHOW$5 = "show";
var EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
var Default$8 = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: false,
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
};
var DefaultType$8 = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
var Backdrop = class extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }
  // Getters
  static get Default() {
    return Default$8;
  }
  static get DefaultType() {
    return DefaultType$8;
  }
  static get NAME() {
    return NAME$9;
  }
  // Public
  show(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._append();
    const element = this._getElement();
    if (this._config.isAnimated) {
      reflow(element);
    }
    element.classList.add(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      execute(callback);
    });
  }
  hide(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._getElement().classList.remove(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      this.dispose();
      execute(callback);
    });
  }
  dispose() {
    if (!this._isAppended) {
      return;
    }
    EventHandler.off(this._element, EVENT_MOUSEDOWN);
    this._element.remove();
    this._isAppended = false;
  }
  // Private
  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement("div");
      backdrop.className = this._config.className;
      if (this._config.isAnimated) {
        backdrop.classList.add(CLASS_NAME_FADE$4);
      }
      this._element = backdrop;
    }
    return this._element;
  }
  _configAfterMerge(config) {
    config.rootElement = getElement(config.rootElement);
    return config;
  }
  _append() {
    if (this._isAppended) {
      return;
    }
    const element = this._getElement();
    this._config.rootElement.append(element);
    EventHandler.on(element, EVENT_MOUSEDOWN, () => {
      execute(this._config.clickCallback);
    });
    this._isAppended = true;
  }
  _emulateAnimation(callback) {
    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
  }
};
var NAME$8 = "focustrap";
var DATA_KEY$5 = "bs.focustrap";
var EVENT_KEY$5 = `.${DATA_KEY$5}`;
var EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
var TAB_KEY = "Tab";
var TAB_NAV_FORWARD = "forward";
var TAB_NAV_BACKWARD = "backward";
var Default$7 = {
  autofocus: true,
  trapElement: null
  // The element to trap focus inside of
};
var DefaultType$7 = {
  autofocus: "boolean",
  trapElement: "element"
};
var FocusTrap = class extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return Default$7;
  }
  static get DefaultType() {
    return DefaultType$7;
  }
  static get NAME() {
    return NAME$8;
  }
  // Public
  activate() {
    if (this._isActive) {
      return;
    }
    if (this._config.autofocus) {
      this._config.trapElement.focus();
    }
    EventHandler.off(document, EVENT_KEY$5);
    EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
    EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
    this._isActive = true;
  }
  deactivate() {
    if (!this._isActive) {
      return;
    }
    this._isActive = false;
    EventHandler.off(document, EVENT_KEY$5);
  }
  // Private
  _handleFocusin(event) {
    const {
      trapElement
    } = this._config;
    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
      return;
    }
    const elements = SelectorEngine.focusableChildren(trapElement);
    if (elements.length === 0) {
      trapElement.focus();
    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus();
    } else {
      elements[0].focus();
    }
  }
  _handleKeydown(event) {
    if (event.key !== TAB_KEY) {
      return;
    }
    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
  }
};
var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
var SELECTOR_STICKY_CONTENT = ".sticky-top";
var PROPERTY_PADDING = "padding-right";
var PROPERTY_MARGIN = "margin-right";
var ScrollBarHelper = class {
  constructor() {
    this._element = document.body;
  }
  // Public
  getWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }
  hide() {
    const width = this.getWidth();
    this._disableOverFlow();
    this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow");
    this._resetElementAttributes(this._element, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow");
    this._element.style.overflow = "hidden";
  }
  _setElementAttributes(selector, styleProperty, callback) {
    const scrollbarWidth = this.getWidth();
    const manipulationCallBack = (element) => {
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }
      this._saveInitialAttribute(element, styleProperty);
      const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
      element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _saveInitialAttribute(element, styleProperty) {
    const actualValue = element.style.getPropertyValue(styleProperty);
    if (actualValue) {
      Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
  }
  _resetElementAttributes(selector, styleProperty) {
    const manipulationCallBack = (element) => {
      const value = Manipulator.getDataAttribute(element, styleProperty);
      if (value === null) {
        element.style.removeProperty(styleProperty);
        return;
      }
      Manipulator.removeDataAttribute(element, styleProperty);
      element.style.setProperty(styleProperty, value);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _applyManipulationCallback(selector, callBack) {
    if (isElement2(selector)) {
      callBack(selector);
      return;
    }
    for (const sel of SelectorEngine.find(selector, this._element)) {
      callBack(sel);
    }
  }
};
var NAME$7 = "modal";
var DATA_KEY$4 = "bs.modal";
var EVENT_KEY$4 = `.${DATA_KEY$4}`;
var DATA_API_KEY$2 = ".data-api";
var ESCAPE_KEY$1 = "Escape";
var EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
var EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
var EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
var EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
var EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
var EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
var EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
var EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
var EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
var EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
var CLASS_NAME_OPEN = "modal-open";
var CLASS_NAME_FADE$3 = "fade";
var CLASS_NAME_SHOW$4 = "show";
var CLASS_NAME_STATIC = "modal-static";
var OPEN_SELECTOR$1 = ".modal.show";
var SELECTOR_DIALOG = ".modal-dialog";
var SELECTOR_MODAL_BODY = ".modal-body";
var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
var Default$6 = {
  backdrop: true,
  focus: true,
  keyboard: true
};
var DefaultType$6 = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
var Modal = class _Modal extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._isTransitioning = false;
    this._scrollBar = new ScrollBarHelper();
    this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Default$6;
  }
  static get DefaultType() {
    return DefaultType$6;
  }
  static get NAME() {
    return NAME$7;
  }
  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._isTransitioning = true;
    this._scrollBar.hide();
    document.body.classList.add(CLASS_NAME_OPEN);
    this._adjustDialog();
    this._backdrop.show(() => this._showElement(relatedTarget));
  }
  hide() {
    if (!this._isShown || this._isTransitioning) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._isShown = false;
    this._isTransitioning = true;
    this._focustrap.deactivate();
    this._element.classList.remove(CLASS_NAME_SHOW$4);
    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
  }
  dispose() {
    EventHandler.off(window, EVENT_KEY$4);
    EventHandler.off(this._dialog, EVENT_KEY$4);
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _showElement(relatedTarget) {
    if (!document.body.contains(this._element)) {
      document.body.append(this._element);
    }
    this._element.style.display = "block";
    this._element.removeAttribute("aria-hidden");
    this._element.setAttribute("aria-modal", true);
    this._element.setAttribute("role", "dialog");
    this._element.scrollTop = 0;
    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
    if (modalBody) {
      modalBody.scrollTop = 0;
    }
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW$4);
    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }
      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN$4, {
        relatedTarget
      });
    };
    this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
      if (event.key !== ESCAPE_KEY$1) {
        return;
      }
      if (this._config.keyboard) {
        this.hide();
        return;
      }
      this._triggerBackdropTransition();
    });
    EventHandler.on(window, EVENT_RESIZE$1, () => {
      if (this._isShown && !this._isTransitioning) {
        this._adjustDialog();
      }
    });
    EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
      EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
        if (this._element !== event.target || this._element !== event2.target) {
          return;
        }
        if (this._config.backdrop === "static") {
          this._triggerBackdropTransition();
          return;
        }
        if (this._config.backdrop) {
          this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = "none";
    this._element.setAttribute("aria-hidden", true);
    this._element.removeAttribute("aria-modal");
    this._element.removeAttribute("role");
    this._isTransitioning = false;
    this._backdrop.hide(() => {
      document.body.classList.remove(CLASS_NAME_OPEN);
      this._resetAdjustments();
      this._scrollBar.reset();
      EventHandler.trigger(this._element, EVENT_HIDDEN$4);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE$3);
  }
  _triggerBackdropTransition() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const initialOverflowY = this._element.style.overflowY;
    if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
      return;
    }
    if (!isModalOverflowing) {
      this._element.style.overflowY = "hidden";
    }
    this._element.classList.add(CLASS_NAME_STATIC);
    this._queueCallback(() => {
      this._element.classList.remove(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.style.overflowY = initialOverflowY;
      }, this._dialog);
    }, this._dialog);
    this._element.focus();
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const scrollbarWidth = this._scrollBar.getWidth();
    const isBodyOverflowing = scrollbarWidth > 0;
    if (isBodyOverflowing && !isModalOverflowing) {
      const property = isRTL() ? "paddingLeft" : "paddingRight";
      this._element.style[property] = `${scrollbarWidth}px`;
    }
    if (!isBodyOverflowing && isModalOverflowing) {
      const property = isRTL() ? "paddingRight" : "paddingLeft";
      this._element.style[property] = `${scrollbarWidth}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "";
    this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(config, relatedTarget) {
    return this.each(function() {
      const data = _Modal.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](relatedTarget);
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
    if (showEvent.defaultPrevented) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$4, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
  });
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
  if (alreadyOpen) {
    Modal.getInstance(alreadyOpen).hide();
  }
  const data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);
defineJQueryPlugin(Modal);
var NAME$6 = "offcanvas";
var DATA_KEY$3 = "bs.offcanvas";
var EVENT_KEY$3 = `.${DATA_KEY$3}`;
var DATA_API_KEY$1 = ".data-api";
var EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
var ESCAPE_KEY = "Escape";
var CLASS_NAME_SHOW$3 = "show";
var CLASS_NAME_SHOWING$1 = "showing";
var CLASS_NAME_HIDING = "hiding";
var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
var OPEN_SELECTOR = ".offcanvas.show";
var EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
var EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
var EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
var EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
var EVENT_RESIZE = `resize${EVENT_KEY$3}`;
var EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
var Default$5 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
var DefaultType$5 = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
var Offcanvas = class _Offcanvas extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Default$5;
  }
  static get DefaultType() {
    return DefaultType$5;
  }
  static get NAME() {
    return NAME$6;
  }
  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._backdrop.show();
    if (!this._config.scroll) {
      new ScrollBarHelper().hide();
    }
    this._element.setAttribute("aria-modal", true);
    this._element.setAttribute("role", "dialog");
    this._element.classList.add(CLASS_NAME_SHOWING$1);
    const completeCallBack = () => {
      if (!this._config.scroll || this._config.backdrop) {
        this._focustrap.activate();
      }
      this._element.classList.add(CLASS_NAME_SHOW$3);
      this._element.classList.remove(CLASS_NAME_SHOWING$1);
      EventHandler.trigger(this._element, EVENT_SHOWN$3, {
        relatedTarget
      });
    };
    this._queueCallback(completeCallBack, this._element, true);
  }
  hide() {
    if (!this._isShown) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._focustrap.deactivate();
    this._element.blur();
    this._isShown = false;
    this._element.classList.add(CLASS_NAME_HIDING);
    this._backdrop.hide();
    const completeCallback = () => {
      this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      if (!this._config.scroll) {
        new ScrollBarHelper().reset();
      }
      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
    };
    this._queueCallback(completeCallback, this._element, true);
  }
  dispose() {
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }
  // Private
  _initializeBackDrop() {
    const clickCallback = () => {
      if (this._config.backdrop === "static") {
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        return;
      }
      this.hide();
    };
    const isVisible2 = Boolean(this._config.backdrop);
    return new Backdrop({
      className: CLASS_NAME_BACKDROP,
      isVisible: isVisible2,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: isVisible2 ? clickCallback : null
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
      if (event.key !== ESCAPE_KEY) {
        return;
      }
      if (this._config.keyboard) {
        this.hide();
        return;
      }
      EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
    });
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Offcanvas.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  EventHandler.one(target, EVENT_HIDDEN$3, () => {
    if (isVisible(this)) {
      this.focus();
    }
  });
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
  if (alreadyOpen && alreadyOpen !== target) {
    Offcanvas.getInstance(alreadyOpen).hide();
  }
  const data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
  for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
    Offcanvas.getOrCreateInstance(selector).show();
  }
});
EventHandler.on(window, EVENT_RESIZE, () => {
  for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
    if (getComputedStyle(element).position !== "fixed") {
      Offcanvas.getOrCreateInstance(element).hide();
    }
  }
});
enableDismissTrigger(Offcanvas);
defineJQueryPlugin(Offcanvas);
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
var DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  dd: [],
  div: [],
  dl: [],
  dt: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
var uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
var allowedAttribute = (attribute, allowedAttributeList) => {
  const attributeName = attribute.nodeName.toLowerCase();
  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
    }
    return true;
  }
  return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }
  if (sanitizeFunction && typeof sanitizeFunction === "function") {
    return sanitizeFunction(unsafeHtml);
  }
  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
  const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
  for (const element of elements) {
    const elementName = element.nodeName.toLowerCase();
    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      continue;
    }
    const attributeList = [].concat(...element.attributes);
    const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
    for (const attribute of attributeList) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    }
  }
  return createdDocument.body.innerHTML;
}
var NAME$5 = "TemplateFactory";
var Default$4 = {
  allowList: DefaultAllowlist,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: false,
  sanitize: true,
  sanitizeFn: null,
  template: "<div></div>"
};
var DefaultType$4 = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
};
var DefaultContentType = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
var TemplateFactory = class extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
  }
  // Getters
  static get Default() {
    return Default$4;
  }
  static get DefaultType() {
    return DefaultType$4;
  }
  static get NAME() {
    return NAME$5;
  }
  // Public
  getContent() {
    return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(content) {
    this._checkContent(content);
    this._config.content = {
      ...this._config.content,
      ...content
    };
    return this;
  }
  toHtml() {
    const templateWrapper = document.createElement("div");
    templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
    for (const [selector, text] of Object.entries(this._config.content)) {
      this._setContent(templateWrapper, text, selector);
    }
    const template = templateWrapper.children[0];
    const extraClass = this._resolvePossibleFunction(this._config.extraClass);
    if (extraClass) {
      template.classList.add(...extraClass.split(" "));
    }
    return template;
  }
  // Private
  _typeCheckConfig(config) {
    super._typeCheckConfig(config);
    this._checkContent(config.content);
  }
  _checkContent(arg) {
    for (const [selector, content] of Object.entries(arg)) {
      super._typeCheckConfig({
        selector,
        entry: content
      }, DefaultContentType);
    }
  }
  _setContent(template, content, selector) {
    const templateElement = SelectorEngine.findOne(selector, template);
    if (!templateElement) {
      return;
    }
    content = this._resolvePossibleFunction(content);
    if (!content) {
      templateElement.remove();
      return;
    }
    if (isElement2(content)) {
      this._putElementInTemplate(getElement(content), templateElement);
      return;
    }
    if (this._config.html) {
      templateElement.innerHTML = this._maybeSanitize(content);
      return;
    }
    templateElement.textContent = content;
  }
  _maybeSanitize(arg) {
    return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
  }
  _resolvePossibleFunction(arg) {
    return execute(arg, [this]);
  }
  _putElementInTemplate(element, templateElement) {
    if (this._config.html) {
      templateElement.innerHTML = "";
      templateElement.append(element);
      return;
    }
    templateElement.textContent = element.textContent;
  }
};
var NAME$4 = "tooltip";
var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
var CLASS_NAME_FADE$2 = "fade";
var CLASS_NAME_MODAL = "modal";
var CLASS_NAME_SHOW$2 = "show";
var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
var SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
var EVENT_MODAL_HIDE = "hide.bs.modal";
var TRIGGER_HOVER = "hover";
var TRIGGER_FOCUS = "focus";
var TRIGGER_CLICK = "click";
var TRIGGER_MANUAL = "manual";
var EVENT_HIDE$2 = "hide";
var EVENT_HIDDEN$2 = "hidden";
var EVENT_SHOW$2 = "show";
var EVENT_SHOWN$2 = "shown";
var EVENT_INSERTED = "inserted";
var EVENT_CLICK$1 = "click";
var EVENT_FOCUSIN$1 = "focusin";
var EVENT_FOCUSOUT$1 = "focusout";
var EVENT_MOUSEENTER = "mouseenter";
var EVENT_MOUSELEAVE = "mouseleave";
var AttachmentMap = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: isRTL() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: isRTL() ? "right" : "left"
};
var Default$3 = {
  allowList: DefaultAllowlist,
  animation: true,
  boundary: "clippingParents",
  container: false,
  customClass: "",
  delay: 0,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  html: false,
  offset: [0, 6],
  placement: "top",
  popperConfig: null,
  sanitize: true,
  sanitizeFn: null,
  selector: false,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  title: "",
  trigger: "hover focus"
};
var DefaultType$3 = {
  allowList: "object",
  animation: "boolean",
  boundary: "(string|element)",
  container: "(string|element|boolean)",
  customClass: "(string|function)",
  delay: "(number|object)",
  fallbackPlacements: "array",
  html: "boolean",
  offset: "(array|string|function)",
  placement: "(string|function)",
  popperConfig: "(null|object|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  selector: "(string|boolean)",
  template: "string",
  title: "(string|element|function)",
  trigger: "string"
};
var Tooltip = class _Tooltip extends BaseComponent {
  constructor(element, config) {
    if (typeof lib_exports === "undefined") {
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    }
    super(element, config);
    this._isEnabled = true;
    this._timeout = 0;
    this._isHovered = null;
    this._activeTrigger = {};
    this._popper = null;
    this._templateFactory = null;
    this._newContent = null;
    this.tip = null;
    this._setListeners();
    if (!this._config.selector) {
      this._fixTitle();
    }
  }
  // Getters
  static get Default() {
    return Default$3;
  }
  static get DefaultType() {
    return DefaultType$3;
  }
  static get NAME() {
    return NAME$4;
  }
  // Public
  enable() {
    this._isEnabled = true;
  }
  disable() {
    this._isEnabled = false;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (!this._isEnabled) {
      return;
    }
    this._activeTrigger.click = !this._activeTrigger.click;
    if (this._isShown()) {
      this._leave();
      return;
    }
    this._enter();
  }
  dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    if (this._element.getAttribute("data-bs-original-title")) {
      this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
    }
    this._disposePopper();
    super.dispose();
  }
  show() {
    if (this._element.style.display === "none") {
      throw new Error("Please use show on visible elements");
    }
    if (!(this._isWithContent() && this._isEnabled)) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
    const shadowRoot = findShadowRoot(this._element);
    const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    }
    this._disposePopper();
    const tip = this._getTipElement();
    this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
    const {
      container
    } = this._config;
    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.append(tip);
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
    }
    this._popper = this._createPopper(tip);
    tip.classList.add(CLASS_NAME_SHOW$2);
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, "mouseover", noop);
      }
    }
    const complete = () => {
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
      if (this._isHovered === false) {
        this._leave();
      }
      this._isHovered = false;
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
    if (hideEvent.defaultPrevented) {
      return;
    }
    const tip = this._getTipElement();
    tip.classList.remove(CLASS_NAME_SHOW$2);
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, "mouseover", noop);
      }
    }
    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;
    this._isHovered = null;
    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }
      if (!this._isHovered) {
        this._disposePopper();
      }
      this._element.removeAttribute("aria-describedby");
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  update() {
    if (this._popper) {
      this._popper.update();
    }
  }
  // Protected
  _isWithContent() {
    return Boolean(this._getTitle());
  }
  _getTipElement() {
    if (!this.tip) {
      this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
    }
    return this.tip;
  }
  _createTipElement(content) {
    const tip = this._getTemplateFactory(content).toHtml();
    if (!tip) {
      return null;
    }
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
    tip.classList.add(`bs-${this.constructor.NAME}-auto`);
    const tipId = getUID(this.constructor.NAME).toString();
    tip.setAttribute("id", tipId);
    if (this._isAnimated()) {
      tip.classList.add(CLASS_NAME_FADE$2);
    }
    return tip;
  }
  setContent(content) {
    this._newContent = content;
    if (this._isShown()) {
      this._disposePopper();
      this.show();
    }
  }
  _getTemplateFactory(content) {
    if (this._templateFactory) {
      this._templateFactory.changeContent(content);
    } else {
      this._templateFactory = new TemplateFactory({
        ...this._config,
        // the `content` var has to be after `this._config`
        // to override config.content in case of popover
        content,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      });
    }
    return this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [SELECTOR_TOOLTIP_INNER]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  // Private
  _initializeOnDelegatedTarget(event) {
    return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
  }
  _createPopper(tip) {
    const placement = execute(this._config.placement, [this, tip, this._element]);
    const attachment = AttachmentMap[placement.toUpperCase()];
    return createPopper3(this._element, tip, this._getPopperConfig(attachment));
  }
  _getOffset() {
    const {
      offset: offset2
    } = this._config;
    if (typeof offset2 === "string") {
      return offset2.split(",").map((value) => Number.parseInt(value, 10));
    }
    if (typeof offset2 === "function") {
      return (popperData) => offset2(popperData, this._element);
    }
    return offset2;
  }
  _resolvePossibleFunction(arg) {
    return execute(arg, [this._element]);
  }
  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: "flip",
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }, {
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "arrow",
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: "preSetPlacement",
        enabled: true,
        phase: "beforeMain",
        fn: (data) => {
          this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
        }
      }]
    };
    return {
      ...defaultBsPopperConfig,
      ...execute(this._config.popperConfig, [defaultBsPopperConfig])
    };
  }
  _setListeners() {
    const triggers = this._config.trigger.split(" ");
    for (const trigger of triggers) {
      if (trigger === "click") {
        EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context.toggle();
        });
      } else if (trigger !== TRIGGER_MANUAL) {
        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
        EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
          context._enter();
        });
        EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
          context._leave();
        });
      }
    }
    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };
    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
  }
  _fixTitle() {
    const title = this._element.getAttribute("title");
    if (!title) {
      return;
    }
    if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
      this._element.setAttribute("aria-label", title);
    }
    this._element.setAttribute("data-bs-original-title", title);
    this._element.removeAttribute("title");
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = true;
      return;
    }
    this._isHovered = true;
    this._setTimeout(() => {
      if (this._isHovered) {
        this.show();
      }
    }, this._config.delay.show);
  }
  _leave() {
    if (this._isWithActiveTrigger()) {
      return;
    }
    this._isHovered = false;
    this._setTimeout(() => {
      if (!this._isHovered) {
        this.hide();
      }
    }, this._config.delay.hide);
  }
  _setTimeout(handler, timeout) {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(handler, timeout);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(true);
  }
  _getConfig(config) {
    const dataAttributes = Manipulator.getDataAttributes(this._element);
    for (const dataAttribute of Object.keys(dataAttributes)) {
      if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
        delete dataAttributes[dataAttribute];
      }
    }
    config = {
      ...dataAttributes,
      ...typeof config === "object" && config ? config : {}
    };
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    config.container = config.container === false ? document.body : getElement(config.container);
    if (typeof config.delay === "number") {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }
    if (typeof config.title === "number") {
      config.title = config.title.toString();
    }
    if (typeof config.content === "number") {
      config.content = config.content.toString();
    }
    return config;
  }
  _getDelegateConfig() {
    const config = {};
    for (const [key, value] of Object.entries(this._config)) {
      if (this.constructor.Default[key] !== value) {
        config[key] = value;
      }
    }
    config.selector = false;
    config.trigger = "manual";
    return config;
  }
  _disposePopper() {
    if (this._popper) {
      this._popper.destroy();
      this._popper = null;
    }
    if (this.tip) {
      this.tip.remove();
      this.tip = null;
    }
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Tooltip.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
defineJQueryPlugin(Tooltip);
var NAME$3 = "popover";
var SELECTOR_TITLE = ".popover-header";
var SELECTOR_CONTENT = ".popover-body";
var Default$2 = {
  ...Tooltip.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
};
var DefaultType$2 = {
  ...Tooltip.DefaultType,
  content: "(null|string|element|function)"
};
var Popover = class _Popover extends Tooltip {
  // Getters
  static get Default() {
    return Default$2;
  }
  static get DefaultType() {
    return DefaultType$2;
  }
  static get NAME() {
    return NAME$3;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [SELECTOR_TITLE]: this._getTitle(),
      [SELECTOR_CONTENT]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Popover.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
defineJQueryPlugin(Popover);
var NAME$2 = "scrollspy";
var DATA_KEY$2 = "bs.scrollspy";
var EVENT_KEY$2 = `.${DATA_KEY$2}`;
var DATA_API_KEY = ".data-api";
var EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
var EVENT_CLICK = `click${EVENT_KEY$2}`;
var EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
var CLASS_NAME_ACTIVE$1 = "active";
var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
var SELECTOR_TARGET_LINKS = "[href]";
var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
var SELECTOR_NAV_LINKS = ".nav-link";
var SELECTOR_NAV_ITEMS = ".nav-item";
var SELECTOR_LIST_ITEMS = ".list-group-item";
var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
var SELECTOR_DROPDOWN = ".dropdown";
var SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
var Default$1 = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: false,
  target: null,
  threshold: [0.1, 0.5, 1]
};
var DefaultType$1 = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
var ScrollSpy = class _ScrollSpy extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._targetLinks = /* @__PURE__ */ new Map();
    this._observableSections = /* @__PURE__ */ new Map();
    this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
    this._activeTarget = null;
    this._observer = null;
    this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    };
    this.refresh();
  }
  // Getters
  static get Default() {
    return Default$1;
  }
  static get DefaultType() {
    return DefaultType$1;
  }
  static get NAME() {
    return NAME$2;
  }
  // Public
  refresh() {
    this._initializeTargetsAndObservables();
    this._maybeEnableSmoothScroll();
    if (this._observer) {
      this._observer.disconnect();
    } else {
      this._observer = this._getNewObserver();
    }
    for (const section of this._observableSections.values()) {
      this._observer.observe(section);
    }
  }
  dispose() {
    this._observer.disconnect();
    super.dispose();
  }
  // Private
  _configAfterMerge(config) {
    config.target = getElement(config.target) || document.body;
    config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
    if (typeof config.threshold === "string") {
      config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
    }
    return config;
  }
  _maybeEnableSmoothScroll() {
    if (!this._config.smoothScroll) {
      return;
    }
    EventHandler.off(this._config.target, EVENT_CLICK);
    EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
      const observableSection = this._observableSections.get(event.target.hash);
      if (observableSection) {
        event.preventDefault();
        const root = this._rootElement || window;
        const height = observableSection.offsetTop - this._element.offsetTop;
        if (root.scrollTo) {
          root.scrollTo({
            top: height,
            behavior: "smooth"
          });
          return;
        }
        root.scrollTop = height;
      }
    });
  }
  _getNewObserver() {
    const options = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((entries) => this._observerCallback(entries), options);
  }
  // The logic of selection
  _observerCallback(entries) {
    const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
    const activate = (entry) => {
      this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
      this._process(targetElement(entry));
    };
    const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = parentScrollTop;
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        this._activeTarget = null;
        this._clearActiveClass(targetElement(entry));
        continue;
      }
      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (userScrollsDown && entryIsLowerThanPrevious) {
        activate(entry);
        if (!parentScrollTop) {
          return;
        }
        continue;
      }
      if (!userScrollsDown && !entryIsLowerThanPrevious) {
        activate(entry);
      }
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map();
    this._observableSections = /* @__PURE__ */ new Map();
    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
    for (const anchor of targetLinks) {
      if (!anchor.hash || isDisabled(anchor)) {
        continue;
      }
      const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
      if (isVisible(observableSection)) {
        this._targetLinks.set(decodeURI(anchor.hash), anchor);
        this._observableSections.set(anchor.hash, observableSection);
      }
    }
  }
  _process(target) {
    if (this._activeTarget === target) {
      return;
    }
    this._clearActiveClass(this._config.target);
    this._activeTarget = target;
    target.classList.add(CLASS_NAME_ACTIVE$1);
    this._activateParents(target);
    EventHandler.trigger(this._element, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }
  _activateParents(target) {
    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
      return;
    }
    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
      for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
        item.classList.add(CLASS_NAME_ACTIVE$1);
      }
    }
  }
  _clearActiveClass(parent) {
    parent.classList.remove(CLASS_NAME_ACTIVE$1);
    const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
    for (const node of activeNodes) {
      node.classList.remove(CLASS_NAME_ACTIVE$1);
    }
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _ScrollSpy.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
  for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
    ScrollSpy.getOrCreateInstance(spy);
  }
});
defineJQueryPlugin(ScrollSpy);
var NAME$1 = "tab";
var DATA_KEY$1 = "bs.tab";
var EVENT_KEY$1 = `.${DATA_KEY$1}`;
var EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
var EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
var EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
var EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
var EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
var EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
var EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
var ARROW_LEFT_KEY = "ArrowLeft";
var ARROW_RIGHT_KEY = "ArrowRight";
var ARROW_UP_KEY = "ArrowUp";
var ARROW_DOWN_KEY = "ArrowDown";
var HOME_KEY = "Home";
var END_KEY = "End";
var CLASS_NAME_ACTIVE = "active";
var CLASS_NAME_FADE$1 = "fade";
var CLASS_NAME_SHOW$1 = "show";
var CLASS_DROPDOWN = "dropdown";
var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
var SELECTOR_OUTER = ".nav-item, .list-group-item";
var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
var Tab = class _Tab extends BaseComponent {
  constructor(element) {
    super(element);
    this._parent = this._element.closest(SELECTOR_TAB_PANEL);
    if (!this._parent) {
      return;
    }
    this._setInitialAttributes(this._parent, this._getChildren());
    EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
  }
  // Getters
  static get NAME() {
    return NAME$1;
  }
  // Public
  show() {
    const innerElem = this._element;
    if (this._elemIsActive(innerElem)) {
      return;
    }
    const active = this._getActiveElem();
    const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
      relatedTarget: innerElem
    }) : null;
    const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
      relatedTarget: active
    });
    if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
      return;
    }
    this._deactivate(active, innerElem);
    this._activate(innerElem, active);
  }
  // Private
  _activate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.add(CLASS_NAME_ACTIVE);
    this._activate(SelectorEngine.getElementFromSelector(element));
    const complete = () => {
      if (element.getAttribute("role") !== "tab") {
        element.classList.add(CLASS_NAME_SHOW$1);
        return;
      }
      element.removeAttribute("tabindex");
      element.setAttribute("aria-selected", true);
      this._toggleDropDown(element, true);
      EventHandler.trigger(element, EVENT_SHOWN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _deactivate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.remove(CLASS_NAME_ACTIVE);
    element.blur();
    this._deactivate(SelectorEngine.getElementFromSelector(element));
    const complete = () => {
      if (element.getAttribute("role") !== "tab") {
        element.classList.remove(CLASS_NAME_SHOW$1);
        return;
      }
      element.setAttribute("aria-selected", false);
      element.setAttribute("tabindex", "-1");
      this._toggleDropDown(element, false);
      EventHandler.trigger(element, EVENT_HIDDEN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _keydown(event) {
    if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    const children = this._getChildren().filter((element) => !isDisabled(element));
    let nextActiveElement;
    if ([HOME_KEY, END_KEY].includes(event.key)) {
      nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
    } else {
      const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
      nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
    }
    if (nextActiveElement) {
      nextActiveElement.focus({
        preventScroll: true
      });
      _Tab.getOrCreateInstance(nextActiveElement).show();
    }
  }
  _getChildren() {
    return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((child) => this._elemIsActive(child)) || null;
  }
  _setInitialAttributes(parent, children) {
    this._setAttributeIfNotExists(parent, "role", "tablist");
    for (const child of children) {
      this._setInitialAttributesOnChild(child);
    }
  }
  _setInitialAttributesOnChild(child) {
    child = this._getInnerElement(child);
    const isActive = this._elemIsActive(child);
    const outerElem = this._getOuterElement(child);
    child.setAttribute("aria-selected", isActive);
    if (outerElem !== child) {
      this._setAttributeIfNotExists(outerElem, "role", "presentation");
    }
    if (!isActive) {
      child.setAttribute("tabindex", "-1");
    }
    this._setAttributeIfNotExists(child, "role", "tab");
    this._setInitialAttributesOnTargetPanel(child);
  }
  _setInitialAttributesOnTargetPanel(child) {
    const target = SelectorEngine.getElementFromSelector(child);
    if (!target) {
      return;
    }
    this._setAttributeIfNotExists(target, "role", "tabpanel");
    if (child.id) {
      this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
    }
  }
  _toggleDropDown(element, open) {
    const outerElem = this._getOuterElement(element);
    if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
      return;
    }
    const toggle = (selector, className) => {
      const element2 = SelectorEngine.findOne(selector, outerElem);
      if (element2) {
        element2.classList.toggle(className, open);
      }
    };
    toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
    toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
    outerElem.setAttribute("aria-expanded", open);
  }
  _setAttributeIfNotExists(element, attribute, value) {
    if (!element.hasAttribute(attribute)) {
      element.setAttribute(attribute, value);
    }
  }
  _elemIsActive(elem) {
    return elem.classList.contains(CLASS_NAME_ACTIVE);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(elem) {
    return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(elem) {
    return elem.closest(SELECTOR_OUTER) || elem;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Tab.getOrCreateInstance(this);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  Tab.getOrCreateInstance(this).show();
});
EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
    Tab.getOrCreateInstance(element);
  }
});
defineJQueryPlugin(Tab);
var NAME = "toast";
var DATA_KEY = "bs.toast";
var EVENT_KEY = `.${DATA_KEY}`;
var EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
var EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
var EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
var EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
var EVENT_HIDE = `hide${EVENT_KEY}`;
var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
var EVENT_SHOW = `show${EVENT_KEY}`;
var EVENT_SHOWN = `shown${EVENT_KEY}`;
var CLASS_NAME_FADE = "fade";
var CLASS_NAME_HIDE = "hide";
var CLASS_NAME_SHOW = "show";
var CLASS_NAME_SHOWING = "showing";
var DefaultType = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
};
var Default = {
  animation: true,
  autohide: true,
  delay: 5e3
};
var Toast = class _Toast extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;
    this._setListeners();
  }
  // Getters
  static get Default() {
    return Default;
  }
  static get DefaultType() {
    return DefaultType;
  }
  static get NAME() {
    return NAME;
  }
  // Public
  show() {
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._clearTimeout();
    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE);
    }
    const complete = () => {
      this._element.classList.remove(CLASS_NAME_SHOWING);
      EventHandler.trigger(this._element, EVENT_SHOWN);
      this._maybeScheduleHide();
    };
    this._element.classList.remove(CLASS_NAME_HIDE);
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const complete = () => {
      this._element.classList.add(CLASS_NAME_HIDE);
      this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
      EventHandler.trigger(this._element, EVENT_HIDDEN);
    };
    this._element.classList.add(CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout();
    if (this.isShown()) {
      this._element.classList.remove(CLASS_NAME_SHOW);
    }
    super.dispose();
  }
  isShown() {
    return this._element.classList.contains(CLASS_NAME_SHOW);
  }
  // Private
  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return;
    }
    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = isInteracting;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = isInteracting;
        break;
      }
    }
    if (isInteracting) {
      this._clearTimeout();
      return;
    }
    const nextElement = event.relatedTarget;
    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }
    this._maybeScheduleHide();
  }
  _setListeners() {
    EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
    EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
  }
  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Toast.getOrCreateInstance(this, config);
      if (typeof config === "string") {
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      }
    });
  }
};
enableDismissTrigger(Toast);
defineJQueryPlugin(Toast);

// app/javascript/add_jquery.js
var import_jquery = __toESM(require_jquery());
window.jQuery = import_jquery.default;
window.$ = import_jquery.default;

// node_modules/jquery-ui-dist/jquery-ui.min.js
!function(t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
}(function(V) {
  "use strict";
  V.ui = V.ui || {};
  V.ui.version = "1.13.3";
  var n, s, x, k, o, a, r, l, h, i, N = 0, E = Array.prototype.hasOwnProperty, c = Array.prototype.slice;
  V.cleanData = (n = V.cleanData, function(t2) {
    for (var e2, i2, s2 = 0; null != (i2 = t2[s2]); s2++) (e2 = V._data(i2, "events")) && e2.remove && V(i2).triggerHandler("remove");
    n(t2);
  }), V.widget = function(t2, i2, e2) {
    var s2, n2, o2, a2 = {}, r2 = t2.split(".")[0], l2 = r2 + "-" + (t2 = t2.split(".")[1]);
    return e2 || (e2 = i2, i2 = V.Widget), Array.isArray(e2) && (e2 = V.extend.apply(null, [{}].concat(e2))), V.expr.pseudos[l2.toLowerCase()] = function(t3) {
      return !!V.data(t3, l2);
    }, V[r2] = V[r2] || {}, s2 = V[r2][t2], n2 = V[r2][t2] = function(t3, e3) {
      if (!this || !this._createWidget) return new n2(t3, e3);
      arguments.length && this._createWidget(t3, e3);
    }, V.extend(n2, s2, { version: e2.version, _proto: V.extend({}, e2), _childConstructors: [] }), (o2 = new i2()).options = V.widget.extend({}, o2.options), V.each(e2, function(e3, s3) {
      function n3() {
        return i2.prototype[e3].apply(this, arguments);
      }
      function o3(t3) {
        return i2.prototype[e3].apply(this, t3);
      }
      a2[e3] = "function" != typeof s3 ? s3 : function() {
        var t3, e4 = this._super, i3 = this._superApply;
        return this._super = n3, this._superApply = o3, t3 = s3.apply(this, arguments), this._super = e4, this._superApply = i3, t3;
      };
    }), n2.prototype = V.widget.extend(o2, { widgetEventPrefix: s2 && o2.widgetEventPrefix || t2 }, a2, { constructor: n2, namespace: r2, widgetName: t2, widgetFullName: l2 }), s2 ? (V.each(s2._childConstructors, function(t3, e3) {
      var i3 = e3.prototype;
      V.widget(i3.namespace + "." + i3.widgetName, n2, e3._proto);
    }), delete s2._childConstructors) : i2._childConstructors.push(n2), V.widget.bridge(t2, n2), n2;
  }, V.widget.extend = function(t2) {
    for (var e2, i2, s2 = c.call(arguments, 1), n2 = 0, o2 = s2.length; n2 < o2; n2++) for (e2 in s2[n2]) i2 = s2[n2][e2], E.call(s2[n2], e2) && void 0 !== i2 && (V.isPlainObject(i2) ? t2[e2] = V.isPlainObject(t2[e2]) ? V.widget.extend({}, t2[e2], i2) : V.widget.extend({}, i2) : t2[e2] = i2);
    return t2;
  }, V.widget.bridge = function(o2, e2) {
    var a2 = e2.prototype.widgetFullName || o2;
    V.fn[o2] = function(i2) {
      var t2 = "string" == typeof i2, s2 = c.call(arguments, 1), n2 = this;
      return t2 ? this.length || "instance" !== i2 ? this.each(function() {
        var t3, e3 = V.data(this, a2);
        return "instance" === i2 ? (n2 = e3, false) : e3 ? "function" != typeof e3[i2] || "_" === i2.charAt(0) ? V.error("no such method '" + i2 + "' for " + o2 + " widget instance") : (t3 = e3[i2].apply(e3, s2)) !== e3 && void 0 !== t3 ? (n2 = t3 && t3.jquery ? n2.pushStack(t3.get()) : t3, false) : void 0 : V.error("cannot call methods on " + o2 + " prior to initialization; attempted to call method '" + i2 + "'");
      }) : n2 = void 0 : (s2.length && (i2 = V.widget.extend.apply(null, [i2].concat(s2))), this.each(function() {
        var t3 = V.data(this, a2);
        t3 ? (t3.option(i2 || {}), t3._init && t3._init()) : V.data(this, a2, new e2(i2, this));
      })), n2;
    };
  }, V.Widget = function() {
  }, V.Widget._childConstructors = [], V.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: false, create: null }, _createWidget: function(t2, e2) {
    e2 = V(e2 || this.defaultElement || this)[0], this.element = V(e2), this.uuid = N++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = V(), this.hoverable = V(), this.focusable = V(), this.classesElementLookup = {}, e2 !== this && (V.data(e2, this.widgetFullName, this), this._on(true, this.element, { remove: function(t3) {
      t3.target === e2 && this.destroy();
    } }), this.document = V(e2.style ? e2.ownerDocument : e2.document || e2), this.window = V(this.document[0].defaultView || this.document[0].parentWindow)), this.options = V.widget.extend({}, this.options, this._getCreateOptions(), t2), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
  }, _getCreateOptions: function() {
    return {};
  }, _getCreateEventData: V.noop, _create: V.noop, _init: V.noop, destroy: function() {
    var i2 = this;
    this._destroy(), V.each(this.classesElementLookup, function(t2, e2) {
      i2._removeClass(e2, t2);
    }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
  }, _destroy: V.noop, widget: function() {
    return this.element;
  }, option: function(t2, e2) {
    var i2, s2, n2, o2 = t2;
    if (0 === arguments.length) return V.widget.extend({}, this.options);
    if ("string" == typeof t2) if (o2 = {}, t2 = (i2 = t2.split(".")).shift(), i2.length) {
      for (s2 = o2[t2] = V.widget.extend({}, this.options[t2]), n2 = 0; n2 < i2.length - 1; n2++) s2[i2[n2]] = s2[i2[n2]] || {}, s2 = s2[i2[n2]];
      if (t2 = i2.pop(), 1 === arguments.length) return void 0 === s2[t2] ? null : s2[t2];
      s2[t2] = e2;
    } else {
      if (1 === arguments.length) return void 0 === this.options[t2] ? null : this.options[t2];
      o2[t2] = e2;
    }
    return this._setOptions(o2), this;
  }, _setOptions: function(t2) {
    for (var e2 in t2) this._setOption(e2, t2[e2]);
    return this;
  }, _setOption: function(t2, e2) {
    return "classes" === t2 && this._setOptionClasses(e2), this.options[t2] = e2, "disabled" === t2 && this._setOptionDisabled(e2), this;
  }, _setOptionClasses: function(t2) {
    var e2, i2, s2;
    for (e2 in t2) s2 = this.classesElementLookup[e2], t2[e2] !== this.options.classes[e2] && s2 && s2.length && (i2 = V(s2.get()), this._removeClass(s2, e2), i2.addClass(this._classes({ element: i2, keys: e2, classes: t2, add: true })));
  }, _setOptionDisabled: function(t2) {
    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t2), t2 && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
  }, enable: function() {
    return this._setOptions({ disabled: false });
  }, disable: function() {
    return this._setOptions({ disabled: true });
  }, _classes: function(n2) {
    var o2 = [], a2 = this;
    function t2(t3, e2) {
      for (var i2, s2 = 0; s2 < t3.length; s2++) i2 = a2.classesElementLookup[t3[s2]] || V(), i2 = n2.add ? (function() {
        var i3 = [];
        n2.element.each(function(t4, e3) {
          V.map(a2.classesElementLookup, function(t5) {
            return t5;
          }).some(function(t5) {
            return t5.is(e3);
          }) || i3.push(e3);
        }), a2._on(V(i3), { remove: "_untrackClassesElement" });
      }(), V(V.uniqueSort(i2.get().concat(n2.element.get())))) : V(i2.not(n2.element).get()), a2.classesElementLookup[t3[s2]] = i2, o2.push(t3[s2]), e2 && n2.classes[t3[s2]] && o2.push(n2.classes[t3[s2]]);
    }
    return (n2 = V.extend({ element: this.element, classes: this.options.classes || {} }, n2)).keys && t2(n2.keys.match(/\S+/g) || [], true), n2.extra && t2(n2.extra.match(/\S+/g) || []), o2.join(" ");
  }, _untrackClassesElement: function(i2) {
    var s2 = this;
    V.each(s2.classesElementLookup, function(t2, e2) {
      -1 !== V.inArray(i2.target, e2) && (s2.classesElementLookup[t2] = V(e2.not(i2.target).get()));
    }), this._off(V(i2.target));
  }, _removeClass: function(t2, e2, i2) {
    return this._toggleClass(t2, e2, i2, false);
  }, _addClass: function(t2, e2, i2) {
    return this._toggleClass(t2, e2, i2, true);
  }, _toggleClass: function(t2, e2, i2, s2) {
    var n2 = "string" == typeof t2 || null === t2, e2 = { extra: n2 ? e2 : i2, keys: n2 ? t2 : e2, element: n2 ? this.element : t2, add: s2 = "boolean" == typeof s2 ? s2 : i2 };
    return e2.element.toggleClass(this._classes(e2), s2), this;
  }, _on: function(n2, o2, t2) {
    var a2, r2 = this;
    "boolean" != typeof n2 && (t2 = o2, o2 = n2, n2 = false), t2 ? (o2 = a2 = V(o2), this.bindings = this.bindings.add(o2)) : (t2 = o2, o2 = this.element, a2 = this.widget()), V.each(t2, function(t3, e2) {
      function i2() {
        if (n2 || true !== r2.options.disabled && !V(this).hasClass("ui-state-disabled")) return ("string" == typeof e2 ? r2[e2] : e2).apply(r2, arguments);
      }
      "string" != typeof e2 && (i2.guid = e2.guid = e2.guid || i2.guid || V.guid++);
      var t3 = t3.match(/^([\w:-]*)\s*(.*)$/), s2 = t3[1] + r2.eventNamespace, t3 = t3[2];
      t3 ? a2.on(s2, t3, i2) : o2.on(s2, i2);
    });
  }, _off: function(t2, e2) {
    e2 = (e2 || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t2.off(e2), this.bindings = V(this.bindings.not(t2).get()), this.focusable = V(this.focusable.not(t2).get()), this.hoverable = V(this.hoverable.not(t2).get());
  }, _delay: function(t2, e2) {
    var i2 = this;
    return setTimeout(function() {
      return ("string" == typeof t2 ? i2[t2] : t2).apply(i2, arguments);
    }, e2 || 0);
  }, _hoverable: function(t2) {
    this.hoverable = this.hoverable.add(t2), this._on(t2, { mouseenter: function(t3) {
      this._addClass(V(t3.currentTarget), null, "ui-state-hover");
    }, mouseleave: function(t3) {
      this._removeClass(V(t3.currentTarget), null, "ui-state-hover");
    } });
  }, _focusable: function(t2) {
    this.focusable = this.focusable.add(t2), this._on(t2, { focusin: function(t3) {
      this._addClass(V(t3.currentTarget), null, "ui-state-focus");
    }, focusout: function(t3) {
      this._removeClass(V(t3.currentTarget), null, "ui-state-focus");
    } });
  }, _trigger: function(t2, e2, i2) {
    var s2, n2, o2 = this.options[t2];
    if (i2 = i2 || {}, (e2 = V.Event(e2)).type = (t2 === this.widgetEventPrefix ? t2 : this.widgetEventPrefix + t2).toLowerCase(), e2.target = this.element[0], n2 = e2.originalEvent) for (s2 in n2) s2 in e2 || (e2[s2] = n2[s2]);
    return this.element.trigger(e2, i2), !("function" == typeof o2 && false === o2.apply(this.element[0], [e2].concat(i2)) || e2.isDefaultPrevented());
  } }, V.each({ show: "fadeIn", hide: "fadeOut" }, function(o2, a2) {
    V.Widget.prototype["_" + o2] = function(e2, t2, i2) {
      var s2, n2 = (t2 = "string" == typeof t2 ? { effect: t2 } : t2) ? true !== t2 && "number" != typeof t2 && t2.effect || a2 : o2;
      "number" == typeof (t2 = t2 || {}) ? t2 = { duration: t2 } : true === t2 && (t2 = {}), s2 = !V.isEmptyObject(t2), t2.complete = i2, t2.delay && e2.delay(t2.delay), s2 && V.effects && V.effects.effect[n2] ? e2[o2](t2) : n2 !== o2 && e2[n2] ? e2[n2](t2.duration, t2.easing, i2) : e2.queue(function(t3) {
        V(this)[o2](), i2 && i2.call(e2[0]), t3();
      });
    };
  }), V.widget;
  function C(t2, e2, i2) {
    return [parseFloat(t2[0]) * (h.test(t2[0]) ? e2 / 100 : 1), parseFloat(t2[1]) * (h.test(t2[1]) ? i2 / 100 : 1)];
  }
  function D(t2, e2) {
    return parseInt(V.css(t2, e2), 10) || 0;
  }
  function I(t2) {
    return null != t2 && t2 === t2.window;
  }
  x = Math.max, k = Math.abs, o = /left|center|right/, a = /top|center|bottom/, r = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, h = /%$/, i = V.fn.position, V.position = { scrollbarWidth: function() {
    var t2, e2, i2;
    return void 0 !== s ? s : (i2 = (e2 = V("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0], V("body").append(e2), t2 = i2.offsetWidth, e2.css("overflow", "scroll"), t2 === (i2 = i2.offsetWidth) && (i2 = e2[0].clientWidth), e2.remove(), s = t2 - i2);
  }, getScrollInfo: function(t2) {
    var e2 = t2.isWindow || t2.isDocument ? "" : t2.element.css("overflow-x"), i2 = t2.isWindow || t2.isDocument ? "" : t2.element.css("overflow-y"), e2 = "scroll" === e2 || "auto" === e2 && t2.width < t2.element[0].scrollWidth;
    return { width: "scroll" === i2 || "auto" === i2 && t2.height < t2.element[0].scrollHeight ? V.position.scrollbarWidth() : 0, height: e2 ? V.position.scrollbarWidth() : 0 };
  }, getWithinInfo: function(t2) {
    var e2 = V(t2 || window), i2 = I(e2[0]), s2 = !!e2[0] && 9 === e2[0].nodeType;
    return { element: e2, isWindow: i2, isDocument: s2, offset: !i2 && !s2 ? V(t2).offset() : { left: 0, top: 0 }, scrollLeft: e2.scrollLeft(), scrollTop: e2.scrollTop(), width: e2.outerWidth(), height: e2.outerHeight() };
  } }, V.fn.position = function(u2) {
    var d2, p2, f2, g2, m3, _2, v2, b2, y2, w2, t2, e2;
    return u2 && u2.of ? (_2 = "string" == typeof (u2 = V.extend({}, u2)).of ? V(document).find(u2.of) : V(u2.of), v2 = V.position.getWithinInfo(u2.within), b2 = V.position.getScrollInfo(v2), y2 = (u2.collision || "flip").split(" "), w2 = {}, e2 = 9 === (e2 = (t2 = _2)[0]).nodeType ? { width: t2.width(), height: t2.height(), offset: { top: 0, left: 0 } } : I(e2) ? { width: t2.width(), height: t2.height(), offset: { top: t2.scrollTop(), left: t2.scrollLeft() } } : e2.preventDefault ? { width: 0, height: 0, offset: { top: e2.pageY, left: e2.pageX } } : { width: t2.outerWidth(), height: t2.outerHeight(), offset: t2.offset() }, _2[0].preventDefault && (u2.at = "left top"), p2 = e2.width, f2 = e2.height, m3 = V.extend({}, g2 = e2.offset), V.each(["my", "at"], function() {
      var t3, e3, i2 = (u2[this] || "").split(" ");
      (i2 = 1 === i2.length ? o.test(i2[0]) ? i2.concat(["center"]) : a.test(i2[0]) ? ["center"].concat(i2) : ["center", "center"] : i2)[0] = o.test(i2[0]) ? i2[0] : "center", i2[1] = a.test(i2[1]) ? i2[1] : "center", t3 = r.exec(i2[0]), e3 = r.exec(i2[1]), w2[this] = [t3 ? t3[0] : 0, e3 ? e3[0] : 0], u2[this] = [l.exec(i2[0])[0], l.exec(i2[1])[0]];
    }), 1 === y2.length && (y2[1] = y2[0]), "right" === u2.at[0] ? m3.left += p2 : "center" === u2.at[0] && (m3.left += p2 / 2), "bottom" === u2.at[1] ? m3.top += f2 : "center" === u2.at[1] && (m3.top += f2 / 2), d2 = C(w2.at, p2, f2), m3.left += d2[0], m3.top += d2[1], this.each(function() {
      var i2, t3, a2 = V(this), r2 = a2.outerWidth(), l2 = a2.outerHeight(), e3 = D(this, "marginLeft"), s2 = D(this, "marginTop"), n2 = r2 + e3 + D(this, "marginRight") + b2.width, o2 = l2 + s2 + D(this, "marginBottom") + b2.height, h2 = V.extend({}, m3), c2 = C(w2.my, a2.outerWidth(), a2.outerHeight());
      "right" === u2.my[0] ? h2.left -= r2 : "center" === u2.my[0] && (h2.left -= r2 / 2), "bottom" === u2.my[1] ? h2.top -= l2 : "center" === u2.my[1] && (h2.top -= l2 / 2), h2.left += c2[0], h2.top += c2[1], i2 = { marginLeft: e3, marginTop: s2 }, V.each(["left", "top"], function(t4, e4) {
        V.ui.position[y2[t4]] && V.ui.position[y2[t4]][e4](h2, { targetWidth: p2, targetHeight: f2, elemWidth: r2, elemHeight: l2, collisionPosition: i2, collisionWidth: n2, collisionHeight: o2, offset: [d2[0] + c2[0], d2[1] + c2[1]], my: u2.my, at: u2.at, within: v2, elem: a2 });
      }), u2.using && (t3 = function(t4) {
        var e4 = g2.left - h2.left, i3 = e4 + p2 - r2, s3 = g2.top - h2.top, n3 = s3 + f2 - l2, o3 = { target: { element: _2, left: g2.left, top: g2.top, width: p2, height: f2 }, element: { element: a2, left: h2.left, top: h2.top, width: r2, height: l2 }, horizontal: i3 < 0 ? "left" : 0 < e4 ? "right" : "center", vertical: n3 < 0 ? "top" : 0 < s3 ? "bottom" : "middle" };
        p2 < r2 && k(e4 + i3) < p2 && (o3.horizontal = "center"), f2 < l2 && k(s3 + n3) < f2 && (o3.vertical = "middle"), x(k(e4), k(i3)) > x(k(s3), k(n3)) ? o3.important = "horizontal" : o3.important = "vertical", u2.using.call(this, t4, o3);
      }), a2.offset(V.extend(h2, { using: t3 }));
    })) : i.apply(this, arguments);
  }, V.ui.position = { fit: { left: function(t2, e2) {
    var i2, s2 = e2.within, n2 = s2.isWindow ? s2.scrollLeft : s2.offset.left, s2 = s2.width, o2 = t2.left - e2.collisionPosition.marginLeft, a2 = n2 - o2, r2 = o2 + e2.collisionWidth - s2 - n2;
    e2.collisionWidth > s2 ? 0 < a2 && r2 <= 0 ? (i2 = t2.left + a2 + e2.collisionWidth - s2 - n2, t2.left += a2 - i2) : t2.left = !(0 < r2 && a2 <= 0) && r2 < a2 ? n2 + s2 - e2.collisionWidth : n2 : 0 < a2 ? t2.left += a2 : 0 < r2 ? t2.left -= r2 : t2.left = x(t2.left - o2, t2.left);
  }, top: function(t2, e2) {
    var i2, s2 = e2.within, s2 = s2.isWindow ? s2.scrollTop : s2.offset.top, n2 = e2.within.height, o2 = t2.top - e2.collisionPosition.marginTop, a2 = s2 - o2, r2 = o2 + e2.collisionHeight - n2 - s2;
    e2.collisionHeight > n2 ? 0 < a2 && r2 <= 0 ? (i2 = t2.top + a2 + e2.collisionHeight - n2 - s2, t2.top += a2 - i2) : t2.top = !(0 < r2 && a2 <= 0) && r2 < a2 ? s2 + n2 - e2.collisionHeight : s2 : 0 < a2 ? t2.top += a2 : 0 < r2 ? t2.top -= r2 : t2.top = x(t2.top - o2, t2.top);
  } }, flip: { left: function(t2, e2) {
    var i2 = e2.within, s2 = i2.offset.left + i2.scrollLeft, n2 = i2.width, i2 = i2.isWindow ? i2.scrollLeft : i2.offset.left, o2 = t2.left - e2.collisionPosition.marginLeft, a2 = o2 - i2, o2 = o2 + e2.collisionWidth - n2 - i2, r2 = "left" === e2.my[0] ? -e2.elemWidth : "right" === e2.my[0] ? e2.elemWidth : 0, l2 = "left" === e2.at[0] ? e2.targetWidth : "right" === e2.at[0] ? -e2.targetWidth : 0, h2 = -2 * e2.offset[0];
    a2 < 0 ? ((n2 = t2.left + r2 + l2 + h2 + e2.collisionWidth - n2 - s2) < 0 || n2 < k(a2)) && (t2.left += r2 + l2 + h2) : 0 < o2 && (0 < (s2 = t2.left - e2.collisionPosition.marginLeft + r2 + l2 + h2 - i2) || k(s2) < o2) && (t2.left += r2 + l2 + h2);
  }, top: function(t2, e2) {
    var i2 = e2.within, s2 = i2.offset.top + i2.scrollTop, n2 = i2.height, i2 = i2.isWindow ? i2.scrollTop : i2.offset.top, o2 = t2.top - e2.collisionPosition.marginTop, a2 = o2 - i2, o2 = o2 + e2.collisionHeight - n2 - i2, r2 = "top" === e2.my[1] ? -e2.elemHeight : "bottom" === e2.my[1] ? e2.elemHeight : 0, l2 = "top" === e2.at[1] ? e2.targetHeight : "bottom" === e2.at[1] ? -e2.targetHeight : 0, h2 = -2 * e2.offset[1];
    a2 < 0 ? ((n2 = t2.top + r2 + l2 + h2 + e2.collisionHeight - n2 - s2) < 0 || n2 < k(a2)) && (t2.top += r2 + l2 + h2) : 0 < o2 && (0 < (s2 = t2.top - e2.collisionPosition.marginTop + r2 + l2 + h2 - i2) || k(s2) < o2) && (t2.top += r2 + l2 + h2);
  } }, flipfit: { left: function() {
    V.ui.position.flip.left.apply(this, arguments), V.ui.position.fit.left.apply(this, arguments);
  }, top: function() {
    V.ui.position.flip.top.apply(this, arguments), V.ui.position.fit.top.apply(this, arguments);
  } } };
  V.ui.position, V.extend(V.expr.pseudos, { data: V.expr.createPseudo ? V.expr.createPseudo(function(e2) {
    return function(t2) {
      return !!V.data(t2, e2);
    };
  }) : function(t2, e2, i2) {
    return !!V.data(t2, i2[3]);
  } }), V.fn.extend({ disableSelection: (W = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
    return this.on(W + ".ui-disableSelection", function(t2) {
      t2.preventDefault();
    });
  }), enableSelection: function() {
    return this.off(".ui-disableSelection");
  } });
  var W, u = V, d = {}, F = d.toString, L = /^([\-+])=\s*(\d+\.?\d*)/, R = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t2) {
    return [t2[1], t2[2], t2[3], t2[4]];
  } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t2) {
    return [2.55 * t2[1], 2.55 * t2[2], 2.55 * t2[3], t2[4]];
  } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/, parse: function(t2) {
    return [parseInt(t2[1], 16), parseInt(t2[2], 16), parseInt(t2[3], 16), t2[4] ? (parseInt(t2[4], 16) / 255).toFixed(2) : 1];
  } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/, parse: function(t2) {
    return [parseInt(t2[1] + t2[1], 16), parseInt(t2[2] + t2[2], 16), parseInt(t2[3] + t2[3], 16), t2[4] ? (parseInt(t2[4] + t2[4], 16) / 255).toFixed(2) : 1];
  } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(t2) {
    return [t2[1], t2[2] / 100, t2[3] / 100, t2[4]];
  } }], p = u.Color = function(t2, e2, i2, s2) {
    return new u.Color.fn.parse(t2, e2, i2, s2);
  }, f = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } }, Y = { byte: { floor: true, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: true } }, B = p.support = {}, t = u("<p>")[0], g = u.each;
  function m2(t2) {
    return null == t2 ? t2 + "" : "object" == typeof t2 ? d[F.call(t2)] || "object" : typeof t2;
  }
  function _(t2, e2, i2) {
    var s2 = Y[e2.type] || {};
    return null == t2 ? i2 || !e2.def ? null : e2.def : (t2 = s2.floor ? ~~t2 : parseFloat(t2), isNaN(t2) ? e2.def : s2.mod ? (t2 + s2.mod) % s2.mod : Math.min(s2.max, Math.max(0, t2)));
  }
  function j(s2) {
    var n2 = p(), o2 = n2._rgba = [];
    return s2 = s2.toLowerCase(), g(R, function(t2, e2) {
      var i2 = e2.re.exec(s2), i2 = i2 && e2.parse(i2), e2 = e2.space || "rgba";
      if (i2) return i2 = n2[e2](i2), n2[f[e2].cache] = i2[f[e2].cache], o2 = n2._rgba = i2._rgba, false;
    }), o2.length ? ("0,0,0,0" === o2.join() && u.extend(o2, y.transparent), n2) : y[s2];
  }
  function v(t2, e2, i2) {
    return 6 * (i2 = (i2 + 1) % 1) < 1 ? t2 + (e2 - t2) * i2 * 6 : 2 * i2 < 1 ? e2 : 3 * i2 < 2 ? t2 + (e2 - t2) * (2 / 3 - i2) * 6 : t2;
  }
  t.style.cssText = "background-color:rgba(1,1,1,.5)", B.rgba = -1 < t.style.backgroundColor.indexOf("rgba"), g(f, function(t2, e2) {
    e2.cache = "_" + t2, e2.props.alpha = { idx: 3, type: "percent", def: 1 };
  }), u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t2, e2) {
    d["[object " + e2 + "]"] = e2.toLowerCase();
  }), (p.fn = u.extend(p.prototype, { parse: function(n2, t2, e2, i2) {
    if (void 0 === n2) return this._rgba = [null, null, null, null], this;
    (n2.jquery || n2.nodeType) && (n2 = u(n2).css(t2), t2 = void 0);
    var o2 = this, s2 = m2(n2), a2 = this._rgba = [];
    return void 0 !== t2 && (n2 = [n2, t2, e2, i2], s2 = "array"), "string" === s2 ? this.parse(j(n2) || y._default) : "array" === s2 ? (g(f.rgba.props, function(t3, e3) {
      a2[e3.idx] = _(n2[e3.idx], e3);
    }), this) : "object" === s2 ? (n2 instanceof p ? g(f, function(t3, e3) {
      n2[e3.cache] && (o2[e3.cache] = n2[e3.cache].slice());
    }) : g(f, function(t3, i3) {
      var s3 = i3.cache;
      g(i3.props, function(t4, e3) {
        if (!o2[s3] && i3.to) {
          if ("alpha" === t4 || null == n2[t4]) return;
          o2[s3] = i3.to(o2._rgba);
        }
        o2[s3][e3.idx] = _(n2[t4], e3, true);
      }), o2[s3] && u.inArray(null, o2[s3].slice(0, 3)) < 0 && (null == o2[s3][3] && (o2[s3][3] = 1), i3.from) && (o2._rgba = i3.from(o2[s3]));
    }), this) : void 0;
  }, is: function(t2) {
    var n2 = p(t2), o2 = true, a2 = this;
    return g(f, function(t3, e2) {
      var i2, s2 = n2[e2.cache];
      return s2 && (i2 = a2[e2.cache] || e2.to && e2.to(a2._rgba) || [], g(e2.props, function(t4, e3) {
        if (null != s2[e3.idx]) return o2 = s2[e3.idx] === i2[e3.idx];
      })), o2;
    }), o2;
  }, _space: function() {
    var i2 = [], s2 = this;
    return g(f, function(t2, e2) {
      s2[e2.cache] && i2.push(t2);
    }), i2.pop();
  }, transition: function(t2, a2) {
    var t2 = (h2 = p(t2))._space(), e2 = f[t2], i2 = 0 === this.alpha() ? p("transparent") : this, r2 = i2[e2.cache] || e2.to(i2._rgba), l2 = r2.slice(), h2 = h2[e2.cache];
    return g(e2.props, function(t3, e3) {
      var i3 = e3.idx, s2 = r2[i3], n2 = h2[i3], o2 = Y[e3.type] || {};
      null !== n2 && (null === s2 ? l2[i3] = n2 : (o2.mod && (n2 - s2 > o2.mod / 2 ? s2 += o2.mod : s2 - n2 > o2.mod / 2 && (s2 -= o2.mod)), l2[i3] = _((n2 - s2) * a2 + s2, e3)));
    }), this[t2](l2);
  }, blend: function(t2) {
    var e2, i2, s2;
    return 1 === this._rgba[3] ? this : (e2 = this._rgba.slice(), i2 = e2.pop(), s2 = p(t2)._rgba, p(u.map(e2, function(t3, e3) {
      return (1 - i2) * s2[e3] + i2 * t3;
    })));
  }, toRgbaString: function() {
    var t2 = "rgba(", e2 = u.map(this._rgba, function(t3, e3) {
      return null != t3 ? t3 : 2 < e3 ? 1 : 0;
    });
    return 1 === e2[3] && (e2.pop(), t2 = "rgb("), t2 + e2.join() + ")";
  }, toHslaString: function() {
    var t2 = "hsla(", e2 = u.map(this.hsla(), function(t3, e3) {
      return null == t3 && (t3 = 2 < e3 ? 1 : 0), t3 = e3 && e3 < 3 ? Math.round(100 * t3) + "%" : t3;
    });
    return 1 === e2[3] && (e2.pop(), t2 = "hsl("), t2 + e2.join() + ")";
  }, toHexString: function(t2) {
    var e2 = this._rgba.slice(), i2 = e2.pop();
    return t2 && e2.push(~~(255 * i2)), "#" + u.map(e2, function(t3) {
      return 1 === (t3 = (t3 || 0).toString(16)).length ? "0" + t3 : t3;
    }).join("");
  }, toString: function() {
    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
  } })).parse.prototype = p.fn, f.hsla.to = function(t2) {
    var e2, i2, s2, n2, o2, a2, r2, l2;
    return null == t2[0] || null == t2[1] || null == t2[2] ? [null, null, null, t2[3]] : (e2 = t2[0] / 255, i2 = t2[1] / 255, s2 = t2[2] / 255, t2 = t2[3], n2 = (l2 = Math.max(e2, i2, s2)) - (r2 = Math.min(e2, i2, s2)), a2 = 0.5 * (o2 = l2 + r2), r2 = r2 === l2 ? 0 : e2 === l2 ? 60 * (i2 - s2) / n2 + 360 : i2 === l2 ? 60 * (s2 - e2) / n2 + 120 : 60 * (e2 - i2) / n2 + 240, l2 = 0 == n2 ? 0 : a2 <= 0.5 ? n2 / o2 : n2 / (2 - o2), [Math.round(r2) % 360, l2, a2, null == t2 ? 1 : t2]);
  }, f.hsla.from = function(t2) {
    var e2, i2, s2;
    return null == t2[0] || null == t2[1] || null == t2[2] ? [null, null, null, t2[3]] : (e2 = t2[0] / 360, s2 = t2[1], i2 = t2[2], t2 = t2[3], s2 = 2 * i2 - (i2 = i2 <= 0.5 ? i2 * (1 + s2) : i2 + s2 - i2 * s2), [Math.round(255 * v(s2, i2, e2 + 1 / 3)), Math.round(255 * v(s2, i2, e2)), Math.round(255 * v(s2, i2, e2 - 1 / 3)), t2]);
  }, g(f, function(r2, t2) {
    var e2 = t2.props, o2 = t2.cache, a2 = t2.to, l2 = t2.from;
    p.fn[r2] = function(t3) {
      var i2, s2, n2;
      return a2 && !this[o2] && (this[o2] = a2(this._rgba)), void 0 === t3 ? this[o2].slice() : (i2 = m2(t3), s2 = "array" === i2 || "object" === i2 ? t3 : arguments, n2 = this[o2].slice(), g(e2, function(t4, e3) {
        t4 = s2["object" === i2 ? t4 : e3.idx];
        null == t4 && (t4 = n2[e3.idx]), n2[e3.idx] = _(t4, e3);
      }), l2 ? ((t3 = p(l2(n2)))[o2] = n2, t3) : p(n2));
    }, g(e2, function(o3, a3) {
      p.fn[o3] || (p.fn[o3] = function(t3) {
        var e3 = m2(t3), i2 = "alpha" === o3 ? this._hsla ? "hsla" : "rgba" : r2, s2 = this[i2](), n2 = s2[a3.idx];
        return "undefined" === e3 ? n2 : ("function" === e3 && (e3 = m2(t3 = t3.call(this, n2))), null == t3 && a3.empty ? this : ("string" === e3 && (e3 = L.exec(t3)) && (t3 = n2 + parseFloat(e3[2]) * ("+" === e3[1] ? 1 : -1)), s2[a3.idx] = t3, this[i2](s2)));
      });
    });
  }), (p.hook = function(t2) {
    t2 = t2.split(" ");
    g(t2, function(t3, o2) {
      u.cssHooks[o2] = { set: function(t4, e2) {
        var i2, s2, n2 = "";
        if ("transparent" !== e2 && ("string" !== m2(e2) || (i2 = j(e2)))) {
          if (e2 = p(i2 || e2), !B.rgba && 1 !== e2._rgba[3]) {
            for (s2 = "backgroundColor" === o2 ? t4.parentNode : t4; ("" === n2 || "transparent" === n2) && s2 && s2.style; ) try {
              n2 = u.css(s2, "backgroundColor"), s2 = s2.parentNode;
            } catch (t5) {
            }
            e2 = e2.blend(n2 && "transparent" !== n2 ? n2 : "_default");
          }
          e2 = e2.toRgbaString();
        }
        try {
          t4.style[o2] = e2;
        } catch (t5) {
        }
      } }, u.fx.step[o2] = function(t4) {
        t4.colorInit || (t4.start = p(t4.elem, o2), t4.end = p(t4.end), t4.colorInit = true), u.cssHooks[o2].set(t4.elem, t4.start.transition(t4.end, t4.pos));
      };
    });
  })("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), u.cssHooks.borderColor = { expand: function(i2) {
    var s2 = {};
    return g(["Top", "Right", "Bottom", "Left"], function(t2, e2) {
      s2["border" + e2 + "Color"] = i2;
    }), s2;
  } };
  var q, K, U, X, $3, G, Q, J, Z, b, y = u.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }, w = "ui-effects-", e = "ui-effects-style", T = "ui-effects-animated";
  function tt(t2) {
    var e2, i2, s2 = t2.ownerDocument.defaultView ? t2.ownerDocument.defaultView.getComputedStyle(t2, null) : t2.currentStyle, n2 = {};
    if (s2 && s2.length && s2[0] && s2[s2[0]]) for (i2 = s2.length; i2--; ) "string" == typeof s2[e2 = s2[i2]] && (n2[e2.replace(/-([\da-z])/gi, function(t3, e3) {
      return e3.toUpperCase();
    })] = s2[e2]);
    else for (e2 in s2) "string" == typeof s2[e2] && (n2[e2] = s2[e2]);
    return n2;
  }
  function P(t2, e2, i2, s2) {
    return t2 = { effect: t2 = V.isPlainObject(t2) ? (e2 = t2).effect : t2 }, "function" == typeof (e2 = null == e2 ? {} : e2) && (s2 = e2, i2 = null, e2 = {}), "number" != typeof e2 && !V.fx.speeds[e2] || (s2 = i2, i2 = e2, e2 = {}), "function" == typeof i2 && (s2 = i2, i2 = null), e2 && V.extend(t2, e2), i2 = i2 || e2.duration, t2.duration = V.fx.off ? 0 : "number" == typeof i2 ? i2 : i2 in V.fx.speeds ? V.fx.speeds[i2] : V.fx.speeds._default, t2.complete = s2 || e2.complete, t2;
  }
  function M(t2) {
    return !t2 || "number" == typeof t2 || V.fx.speeds[t2] || "string" == typeof t2 && !V.effects.effect[t2] || "function" == typeof t2 || "object" == typeof t2 && !t2.effect;
  }
  function et(t2, e2) {
    var i2 = e2.outerWidth(), e2 = e2.outerHeight(), t2 = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t2) || ["", 0, i2, e2, 0];
    return { top: parseFloat(t2[1]) || 0, right: "auto" === t2[2] ? i2 : parseFloat(t2[2]), bottom: "auto" === t2[3] ? e2 : parseFloat(t2[3]), left: parseFloat(t2[4]) || 0 };
  }
  V.effects = { effect: {} }, X = ["add", "remove", "toggle"], $3 = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }, V.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t2, e2) {
    V.fx.step[e2] = function(t3) {
      ("none" !== t3.end && !t3.setAttr || 1 === t3.pos && !t3.setAttr) && (u.style(t3.elem, e2, t3.end), t3.setAttr = true);
    };
  }), V.fn.addBack || (V.fn.addBack = function(t2) {
    return this.add(null == t2 ? this.prevObject : this.prevObject.filter(t2));
  }), V.effects.animateClass = function(n2, t2, e2, i2) {
    var o2 = V.speed(t2, e2, i2);
    return this.queue(function() {
      var i3 = V(this), t3 = i3.attr("class") || "", e3 = (e3 = o2.children ? i3.find("*").addBack() : i3).map(function() {
        return { el: V(this), start: tt(this) };
      }), s2 = function() {
        V.each(X, function(t4, e4) {
          n2[e4] && i3[e4 + "Class"](n2[e4]);
        });
      };
      s2(), e3 = e3.map(function() {
        return this.end = tt(this.el[0]), this.diff = function(t4, e4) {
          var i4, s3, n3 = {};
          for (i4 in e4) s3 = e4[i4], t4[i4] === s3 || $3[i4] || !V.fx.step[i4] && isNaN(parseFloat(s3)) || (n3[i4] = s3);
          return n3;
        }(this.start, this.end), this;
      }), i3.attr("class", t3), e3 = e3.map(function() {
        var t4 = this, e4 = V.Deferred(), i4 = V.extend({}, o2, { queue: false, complete: function() {
          e4.resolve(t4);
        } });
        return this.el.animate(this.diff, i4), e4.promise();
      }), V.when.apply(V, e3.get()).done(function() {
        s2(), V.each(arguments, function() {
          var e4 = this.el;
          V.each(this.diff, function(t4) {
            e4.css(t4, "");
          });
        }), o2.complete.call(i3[0]);
      });
    });
  }, V.fn.extend({ addClass: (U = V.fn.addClass, function(t2, e2, i2, s2) {
    return e2 ? V.effects.animateClass.call(this, { add: t2 }, e2, i2, s2) : U.apply(this, arguments);
  }), removeClass: (K = V.fn.removeClass, function(t2, e2, i2, s2) {
    return 1 < arguments.length ? V.effects.animateClass.call(this, { remove: t2 }, e2, i2, s2) : K.apply(this, arguments);
  }), toggleClass: (q = V.fn.toggleClass, function(t2, e2, i2, s2, n2) {
    return "boolean" == typeof e2 || void 0 === e2 ? i2 ? V.effects.animateClass.call(this, e2 ? { add: t2 } : { remove: t2 }, i2, s2, n2) : q.apply(this, arguments) : V.effects.animateClass.call(this, { toggle: t2 }, e2, i2, s2);
  }), switchClass: function(t2, e2, i2, s2, n2) {
    return V.effects.animateClass.call(this, { add: e2, remove: t2 }, i2, s2, n2);
  } }), V.expr && V.expr.pseudos && V.expr.pseudos.animated && (V.expr.pseudos.animated = (G = V.expr.pseudos.animated, function(t2) {
    return !!V(t2).data(T) || G(t2);
  })), false !== V.uiBackCompat && V.extend(V.effects, { save: function(t2, e2) {
    for (var i2 = 0, s2 = e2.length; i2 < s2; i2++) null !== e2[i2] && t2.data(w + e2[i2], t2[0].style[e2[i2]]);
  }, restore: function(t2, e2) {
    for (var i2, s2 = 0, n2 = e2.length; s2 < n2; s2++) null !== e2[s2] && (i2 = t2.data(w + e2[s2]), t2.css(e2[s2], i2));
  }, setMode: function(t2, e2) {
    return e2 = "toggle" === e2 ? t2.is(":hidden") ? "show" : "hide" : e2;
  }, createWrapper: function(i2) {
    if (i2.parent().is(".ui-effects-wrapper")) return i2.parent();
    var s2 = { width: i2.outerWidth(true), height: i2.outerHeight(true), float: i2.css("float") }, t2 = V("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }), e2 = { width: i2.width(), height: i2.height() }, n2 = document.activeElement;
    try {
      n2.id;
    } catch (t3) {
      n2 = document.body;
    }
    return i2.wrap(t2), i2[0] !== n2 && !V.contains(i2[0], n2) || V(n2).trigger("focus"), t2 = i2.parent(), "static" === i2.css("position") ? (t2.css({ position: "relative" }), i2.css({ position: "relative" })) : (V.extend(s2, { position: i2.css("position"), zIndex: i2.css("z-index") }), V.each(["top", "left", "bottom", "right"], function(t3, e3) {
      s2[e3] = i2.css(e3), isNaN(parseInt(s2[e3], 10)) && (s2[e3] = "auto");
    }), i2.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), i2.css(e2), t2.css(s2).show();
  }, removeWrapper: function(t2) {
    var e2 = document.activeElement;
    return t2.parent().is(".ui-effects-wrapper") && (t2.parent().replaceWith(t2), t2[0] !== e2 && !V.contains(t2[0], e2) || V(e2).trigger("focus")), t2;
  } }), V.extend(V.effects, { version: "1.13.3", define: function(t2, e2, i2) {
    return i2 || (i2 = e2, e2 = "effect"), V.effects.effect[t2] = i2, V.effects.effect[t2].mode = e2, i2;
  }, scaledDimensions: function(t2, e2, i2) {
    var s2;
    return 0 === e2 ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } : (s2 = "horizontal" !== i2 ? (e2 || 100) / 100 : 1, i2 = "vertical" !== i2 ? (e2 || 100) / 100 : 1, { height: t2.height() * i2, width: t2.width() * s2, outerHeight: t2.outerHeight() * i2, outerWidth: t2.outerWidth() * s2 });
  }, clipToBox: function(t2) {
    return { width: t2.clip.right - t2.clip.left, height: t2.clip.bottom - t2.clip.top, left: t2.clip.left, top: t2.clip.top };
  }, unshift: function(t2, e2, i2) {
    var s2 = t2.queue();
    1 < e2 && s2.splice.apply(s2, [1, 0].concat(s2.splice(e2, i2))), t2.dequeue();
  }, saveStyle: function(t2) {
    t2.data(e, t2[0].style.cssText);
  }, restoreStyle: function(t2) {
    t2[0].style.cssText = t2.data(e) || "", t2.removeData(e);
  }, mode: function(t2, e2) {
    t2 = t2.is(":hidden");
    return "toggle" === e2 && (e2 = t2 ? "show" : "hide"), e2 = (t2 ? "hide" === e2 : "show" === e2) ? "none" : e2;
  }, getBaseline: function(t2, e2) {
    var i2, s2;
    switch (t2[0]) {
      case "top":
        i2 = 0;
        break;
      case "middle":
        i2 = 0.5;
        break;
      case "bottom":
        i2 = 1;
        break;
      default:
        i2 = t2[0] / e2.height;
    }
    switch (t2[1]) {
      case "left":
        s2 = 0;
        break;
      case "center":
        s2 = 0.5;
        break;
      case "right":
        s2 = 1;
        break;
      default:
        s2 = t2[1] / e2.width;
    }
    return { x: s2, y: i2 };
  }, createPlaceholder: function(t2) {
    var e2, i2 = t2.css("position"), s2 = t2.position();
    return t2.css({ marginTop: t2.css("marginTop"), marginBottom: t2.css("marginBottom"), marginLeft: t2.css("marginLeft"), marginRight: t2.css("marginRight") }).outerWidth(t2.outerWidth()).outerHeight(t2.outerHeight()), /^(static|relative)/.test(i2) && (i2 = "absolute", e2 = V("<" + t2[0].nodeName + ">").insertAfter(t2).css({ display: /^(inline|ruby)/.test(t2.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: t2.css("marginTop"), marginBottom: t2.css("marginBottom"), marginLeft: t2.css("marginLeft"), marginRight: t2.css("marginRight"), float: t2.css("float") }).outerWidth(t2.outerWidth()).outerHeight(t2.outerHeight()).addClass("ui-effects-placeholder"), t2.data(w + "placeholder", e2)), t2.css({ position: i2, left: s2.left, top: s2.top }), e2;
  }, removePlaceholder: function(t2) {
    var e2 = w + "placeholder", i2 = t2.data(e2);
    i2 && (i2.remove(), t2.removeData(e2));
  }, cleanUp: function(t2) {
    V.effects.restoreStyle(t2), V.effects.removePlaceholder(t2);
  }, setTransition: function(s2, t2, n2, o2) {
    return o2 = o2 || {}, V.each(t2, function(t3, e2) {
      var i2 = s2.cssUnit(e2);
      0 < i2[0] && (o2[e2] = i2[0] * n2 + i2[1]);
    }), o2;
  } }), V.fn.extend({ effect: function() {
    function t2(t3) {
      var e3 = V(this), i3 = V.effects.mode(e3, r2) || o2;
      e3.data(T, true), l2.push(i3), o2 && ("show" === i3 || i3 === o2 && "hide" === i3) && e3.show(), o2 && "none" === i3 || V.effects.saveStyle(e3), "function" == typeof t3 && t3();
    }
    var s2 = P.apply(this, arguments), n2 = V.effects.effect[s2.effect], o2 = n2.mode, e2 = s2.queue, i2 = e2 || "fx", a2 = s2.complete, r2 = s2.mode, l2 = [];
    return V.fx.off || !n2 ? r2 ? this[r2](s2.duration, a2) : this.each(function() {
      a2 && a2.call(this);
    }) : false === e2 ? this.each(t2).each(h2) : this.queue(i2, t2).queue(i2, h2);
    function h2(t3) {
      var e3 = V(this);
      function i3() {
        "function" == typeof a2 && a2.call(e3[0]), "function" == typeof t3 && t3();
      }
      s2.mode = l2.shift(), false === V.uiBackCompat || o2 ? "none" === s2.mode ? (e3[r2](), i3()) : n2.call(e3[0], s2, function() {
        e3.removeData(T), V.effects.cleanUp(e3), "hide" === s2.mode && e3.hide(), i3();
      }) : (e3.is(":hidden") ? "hide" === r2 : "show" === r2) ? (e3[r2](), i3()) : n2.call(e3[0], s2, i3);
    }
  }, show: (Z = V.fn.show, function(t2) {
    return M(t2) ? Z.apply(this, arguments) : ((t2 = P.apply(this, arguments)).mode = "show", this.effect.call(this, t2));
  }), hide: (J = V.fn.hide, function(t2) {
    return M(t2) ? J.apply(this, arguments) : ((t2 = P.apply(this, arguments)).mode = "hide", this.effect.call(this, t2));
  }), toggle: (Q = V.fn.toggle, function(t2) {
    return M(t2) || "boolean" == typeof t2 ? Q.apply(this, arguments) : ((t2 = P.apply(this, arguments)).mode = "toggle", this.effect.call(this, t2));
  }), cssUnit: function(t2) {
    var i2 = this.css(t2), s2 = [];
    return V.each(["em", "px", "%", "pt"], function(t3, e2) {
      0 < i2.indexOf(e2) && (s2 = [parseFloat(i2), e2]);
    }), s2;
  }, cssClip: function(t2) {
    return t2 ? this.css("clip", "rect(" + t2.top + "px " + t2.right + "px " + t2.bottom + "px " + t2.left + "px)") : et(this.css("clip"), this);
  }, transfer: function(t2, e2) {
    var i2 = V(this), s2 = V(t2.to), n2 = "fixed" === s2.css("position"), o2 = V("body"), a2 = n2 ? o2.scrollTop() : 0, o2 = n2 ? o2.scrollLeft() : 0, r2 = s2.offset(), r2 = { top: r2.top - a2, left: r2.left - o2, height: s2.innerHeight(), width: s2.innerWidth() }, s2 = i2.offset(), l2 = V("<div class='ui-effects-transfer'></div>");
    l2.appendTo("body").addClass(t2.className).css({ top: s2.top - a2, left: s2.left - o2, height: i2.innerHeight(), width: i2.innerWidth(), position: n2 ? "fixed" : "absolute" }).animate(r2, t2.duration, t2.easing, function() {
      l2.remove(), "function" == typeof e2 && e2();
    });
  } }), V.fx.step.clip = function(t2) {
    t2.clipInit || (t2.start = V(t2.elem).cssClip(), "string" == typeof t2.end && (t2.end = et(t2.end, t2.elem)), t2.clipInit = true), V(t2.elem).cssClip({ top: t2.pos * (t2.end.top - t2.start.top) + t2.start.top, right: t2.pos * (t2.end.right - t2.start.right) + t2.start.right, bottom: t2.pos * (t2.end.bottom - t2.start.bottom) + t2.start.bottom, left: t2.pos * (t2.end.left - t2.start.left) + t2.start.left });
  }, b = {}, V.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e2, t2) {
    b[t2] = function(t3) {
      return Math.pow(t3, e2 + 2);
    };
  }), V.extend(b, { Sine: function(t2) {
    return 1 - Math.cos(t2 * Math.PI / 2);
  }, Circ: function(t2) {
    return 1 - Math.sqrt(1 - t2 * t2);
  }, Elastic: function(t2) {
    return 0 === t2 || 1 === t2 ? t2 : -Math.pow(2, 8 * (t2 - 1)) * Math.sin((80 * (t2 - 1) - 7.5) * Math.PI / 15);
  }, Back: function(t2) {
    return t2 * t2 * (3 * t2 - 2);
  }, Bounce: function(t2) {
    for (var e2, i2 = 4; t2 < ((e2 = Math.pow(2, --i2)) - 1) / 11; ) ;
    return 1 / Math.pow(4, 3 - i2) - 7.5625 * Math.pow((3 * e2 - 2) / 22 - t2, 2);
  } }), V.each(b, function(t2, e2) {
    V.easing["easeIn" + t2] = e2, V.easing["easeOut" + t2] = function(t3) {
      return 1 - e2(1 - t3);
    }, V.easing["easeInOut" + t2] = function(t3) {
      return t3 < 0.5 ? e2(2 * t3) / 2 : 1 - e2(-2 * t3 + 2) / 2;
    };
  });
  t = V.effects;
  V.effects.define("blind", "hide", function(t2, e2) {
    var i2 = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] }, s2 = V(this), n2 = t2.direction || "up", o2 = s2.cssClip(), a2 = { clip: V.extend({}, o2) }, r2 = V.effects.createPlaceholder(s2);
    a2.clip[i2[n2][0]] = a2.clip[i2[n2][1]], "show" === t2.mode && (s2.cssClip(a2.clip), r2 && r2.css(V.effects.clipToBox(a2)), a2.clip = o2), r2 && r2.animate(V.effects.clipToBox(a2), t2.duration, t2.easing), s2.animate(a2, { queue: false, duration: t2.duration, easing: t2.easing, complete: e2 });
  }), V.effects.define("bounce", function(t2, e2) {
    var i2, s2, n2 = V(this), o2 = t2.mode, a2 = "hide" === o2, o2 = "show" === o2, r2 = t2.direction || "up", l2 = t2.distance, h2 = t2.times || 5, c2 = 2 * h2 + (o2 || a2 ? 1 : 0), u2 = t2.duration / c2, d2 = t2.easing, p2 = "up" === r2 || "down" === r2 ? "top" : "left", f2 = "up" === r2 || "left" === r2, g2 = 0, t2 = n2.queue().length;
    for (V.effects.createPlaceholder(n2), r2 = n2.css(p2), l2 = l2 || n2["top" == p2 ? "outerHeight" : "outerWidth"]() / 3, o2 && ((s2 = { opacity: 1 })[p2] = r2, n2.css("opacity", 0).css(p2, f2 ? 2 * -l2 : 2 * l2).animate(s2, u2, d2)), a2 && (l2 /= Math.pow(2, h2 - 1)), (s2 = {})[p2] = r2; g2 < h2; g2++) (i2 = {})[p2] = (f2 ? "-=" : "+=") + l2, n2.animate(i2, u2, d2).animate(s2, u2, d2), l2 = a2 ? 2 * l2 : l2 / 2;
    a2 && ((i2 = { opacity: 0 })[p2] = (f2 ? "-=" : "+=") + l2, n2.animate(i2, u2, d2)), n2.queue(e2), V.effects.unshift(n2, t2, 1 + c2);
  }), V.effects.define("clip", "hide", function(t2, e2) {
    var i2 = {}, s2 = V(this), n2 = t2.direction || "vertical", o2 = "both" === n2, a2 = o2 || "horizontal" === n2, o2 = o2 || "vertical" === n2, n2 = s2.cssClip();
    i2.clip = { top: o2 ? (n2.bottom - n2.top) / 2 : n2.top, right: a2 ? (n2.right - n2.left) / 2 : n2.right, bottom: o2 ? (n2.bottom - n2.top) / 2 : n2.bottom, left: a2 ? (n2.right - n2.left) / 2 : n2.left }, V.effects.createPlaceholder(s2), "show" === t2.mode && (s2.cssClip(i2.clip), i2.clip = n2), s2.animate(i2, { queue: false, duration: t2.duration, easing: t2.easing, complete: e2 });
  }), V.effects.define("drop", "hide", function(t2, e2) {
    var i2, s2 = V(this), n2 = "show" === t2.mode, o2 = t2.direction || "left", a2 = "up" === o2 || "down" === o2 ? "top" : "left", o2 = "up" === o2 || "left" === o2 ? "-=" : "+=", r2 = "+=" == o2 ? "-=" : "+=", l2 = { opacity: 0 };
    V.effects.createPlaceholder(s2), i2 = t2.distance || s2["top" == a2 ? "outerHeight" : "outerWidth"](true) / 2, l2[a2] = o2 + i2, n2 && (s2.css(l2), l2[a2] = r2 + i2, l2.opacity = 1), s2.animate(l2, { queue: false, duration: t2.duration, easing: t2.easing, complete: e2 });
  }), V.effects.define("explode", "hide", function(t2, e2) {
    var i2, s2, n2, o2, a2, r2, l2 = t2.pieces ? Math.round(Math.sqrt(t2.pieces)) : 3, h2 = l2, c2 = V(this), u2 = "show" === t2.mode, d2 = c2.show().css("visibility", "hidden").offset(), p2 = Math.ceil(c2.outerWidth() / h2), f2 = Math.ceil(c2.outerHeight() / l2), g2 = [];
    function m3() {
      g2.push(this), g2.length === l2 * h2 && (c2.css({ visibility: "visible" }), V(g2).remove(), e2());
    }
    for (i2 = 0; i2 < l2; i2++) for (o2 = d2.top + i2 * f2, r2 = i2 - (l2 - 1) / 2, s2 = 0; s2 < h2; s2++) n2 = d2.left + s2 * p2, a2 = s2 - (h2 - 1) / 2, c2.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -s2 * p2, top: -i2 * f2 }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: p2, height: f2, left: n2 + (u2 ? a2 * p2 : 0), top: o2 + (u2 ? r2 * f2 : 0), opacity: u2 ? 0 : 1 }).animate({ left: n2 + (u2 ? 0 : a2 * p2), top: o2 + (u2 ? 0 : r2 * f2), opacity: u2 ? 1 : 0 }, t2.duration || 500, t2.easing, m3);
  }), V.effects.define("fade", "toggle", function(t2, e2) {
    var i2 = "show" === t2.mode;
    V(this).css("opacity", i2 ? 0 : 1).animate({ opacity: i2 ? 1 : 0 }, { queue: false, duration: t2.duration, easing: t2.easing, complete: e2 });
  }), V.effects.define("fold", "hide", function(e2, t2) {
    var i2 = V(this), s2 = e2.mode, n2 = "show" === s2, s2 = "hide" === s2, o2 = e2.size || 15, a2 = /([0-9]+)%/.exec(o2), r2 = !!e2.horizFirst ? ["right", "bottom"] : ["bottom", "right"], l2 = e2.duration / 2, h2 = V.effects.createPlaceholder(i2), c2 = i2.cssClip(), u2 = { clip: V.extend({}, c2) }, d2 = { clip: V.extend({}, c2) }, p2 = [c2[r2[0]], c2[r2[1]]], f2 = i2.queue().length;
    a2 && (o2 = parseInt(a2[1], 10) / 100 * p2[s2 ? 0 : 1]), u2.clip[r2[0]] = o2, d2.clip[r2[0]] = o2, d2.clip[r2[1]] = 0, n2 && (i2.cssClip(d2.clip), h2 && h2.css(V.effects.clipToBox(d2)), d2.clip = c2), i2.queue(function(t3) {
      h2 && h2.animate(V.effects.clipToBox(u2), l2, e2.easing).animate(V.effects.clipToBox(d2), l2, e2.easing), t3();
    }).animate(u2, l2, e2.easing).animate(d2, l2, e2.easing).queue(t2), V.effects.unshift(i2, f2, 4);
  }), V.effects.define("highlight", "show", function(t2, e2) {
    var i2 = V(this), s2 = { backgroundColor: i2.css("backgroundColor") };
    "hide" === t2.mode && (s2.opacity = 0), V.effects.saveStyle(i2), i2.css({ backgroundImage: "none", backgroundColor: t2.color || "#ffff99" }).animate(s2, { queue: false, duration: t2.duration, easing: t2.easing, complete: e2 });
  }), V.effects.define("size", function(s2, e2) {
    var n2, i2 = V(this), t2 = ["fontSize"], o2 = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], a2 = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], r2 = s2.mode, l2 = "effect" !== r2, h2 = s2.scale || "both", c2 = s2.origin || ["middle", "center"], u2 = i2.css("position"), d2 = i2.position(), p2 = V.effects.scaledDimensions(i2), f2 = s2.from || p2, g2 = s2.to || V.effects.scaledDimensions(i2, 0);
    V.effects.createPlaceholder(i2), "show" === r2 && (r2 = f2, f2 = g2, g2 = r2), n2 = { from: { y: f2.height / p2.height, x: f2.width / p2.width }, to: { y: g2.height / p2.height, x: g2.width / p2.width } }, "box" !== h2 && "both" !== h2 || (n2.from.y !== n2.to.y && (f2 = V.effects.setTransition(i2, o2, n2.from.y, f2), g2 = V.effects.setTransition(i2, o2, n2.to.y, g2)), n2.from.x !== n2.to.x && (f2 = V.effects.setTransition(i2, a2, n2.from.x, f2), g2 = V.effects.setTransition(i2, a2, n2.to.x, g2))), "content" !== h2 && "both" !== h2 || n2.from.y !== n2.to.y && (f2 = V.effects.setTransition(i2, t2, n2.from.y, f2), g2 = V.effects.setTransition(i2, t2, n2.to.y, g2)), c2 && (r2 = V.effects.getBaseline(c2, p2), f2.top = (p2.outerHeight - f2.outerHeight) * r2.y + d2.top, f2.left = (p2.outerWidth - f2.outerWidth) * r2.x + d2.left, g2.top = (p2.outerHeight - g2.outerHeight) * r2.y + d2.top, g2.left = (p2.outerWidth - g2.outerWidth) * r2.x + d2.left), delete f2.outerHeight, delete f2.outerWidth, i2.css(f2), "content" !== h2 && "both" !== h2 || (o2 = o2.concat(["marginTop", "marginBottom"]).concat(t2), a2 = a2.concat(["marginLeft", "marginRight"]), i2.find("*[width]").each(function() {
      var t3 = V(this), e3 = V.effects.scaledDimensions(t3), i3 = { height: e3.height * n2.from.y, width: e3.width * n2.from.x, outerHeight: e3.outerHeight * n2.from.y, outerWidth: e3.outerWidth * n2.from.x }, e3 = { height: e3.height * n2.to.y, width: e3.width * n2.to.x, outerHeight: e3.height * n2.to.y, outerWidth: e3.width * n2.to.x };
      n2.from.y !== n2.to.y && (i3 = V.effects.setTransition(t3, o2, n2.from.y, i3), e3 = V.effects.setTransition(t3, o2, n2.to.y, e3)), n2.from.x !== n2.to.x && (i3 = V.effects.setTransition(t3, a2, n2.from.x, i3), e3 = V.effects.setTransition(t3, a2, n2.to.x, e3)), l2 && V.effects.saveStyle(t3), t3.css(i3), t3.animate(e3, s2.duration, s2.easing, function() {
        l2 && V.effects.restoreStyle(t3);
      });
    })), i2.animate(g2, { queue: false, duration: s2.duration, easing: s2.easing, complete: function() {
      var t3 = i2.offset();
      0 === g2.opacity && i2.css("opacity", f2.opacity), l2 || (i2.css("position", "static" === u2 ? "relative" : u2).offset(t3), V.effects.saveStyle(i2)), e2();
    } });
  }), V.effects.define("scale", function(t2, e2) {
    var i2 = V(this), s2 = t2.mode, s2 = parseInt(t2.percent, 10) || (0 === parseInt(t2.percent, 10) || "effect" !== s2 ? 0 : 100), i2 = V.extend(true, { from: V.effects.scaledDimensions(i2), to: V.effects.scaledDimensions(i2, s2, t2.direction || "both"), origin: t2.origin || ["middle", "center"] }, t2);
    t2.fade && (i2.from.opacity = 1, i2.to.opacity = 0), V.effects.effect.size.call(this, i2, e2);
  }), V.effects.define("puff", "hide", function(t2, e2) {
    t2 = V.extend(true, {}, t2, { fade: true, percent: parseInt(t2.percent, 10) || 150 });
    V.effects.effect.scale.call(this, t2, e2);
  }), V.effects.define("pulsate", "show", function(t2, e2) {
    var i2 = V(this), s2 = t2.mode, n2 = "show" === s2, o2 = 2 * (t2.times || 5) + (n2 || "hide" === s2 ? 1 : 0), a2 = t2.duration / o2, r2 = 0, l2 = 1, s2 = i2.queue().length;
    for (!n2 && i2.is(":visible") || (i2.css("opacity", 0).show(), r2 = 1); l2 < o2; l2++) i2.animate({ opacity: r2 }, a2, t2.easing), r2 = 1 - r2;
    i2.animate({ opacity: r2 }, a2, t2.easing), i2.queue(e2), V.effects.unshift(i2, s2, 1 + o2);
  }), V.effects.define("shake", function(t2, e2) {
    var i2 = 1, s2 = V(this), n2 = t2.direction || "left", o2 = t2.distance || 20, a2 = t2.times || 3, r2 = 2 * a2 + 1, l2 = Math.round(t2.duration / r2), h2 = "up" === n2 || "down" === n2 ? "top" : "left", n2 = "up" === n2 || "left" === n2, c2 = {}, u2 = {}, d2 = {}, p2 = s2.queue().length;
    for (V.effects.createPlaceholder(s2), c2[h2] = (n2 ? "-=" : "+=") + o2, u2[h2] = (n2 ? "+=" : "-=") + 2 * o2, d2[h2] = (n2 ? "-=" : "+=") + 2 * o2, s2.animate(c2, l2, t2.easing); i2 < a2; i2++) s2.animate(u2, l2, t2.easing).animate(d2, l2, t2.easing);
    s2.animate(u2, l2, t2.easing).animate(c2, l2 / 2, t2.easing).queue(e2), V.effects.unshift(s2, p2, 1 + r2);
  }), V.effects.define("slide", "show", function(t2, e2) {
    var i2, s2, n2 = V(this), o2 = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] }, a2 = t2.mode, r2 = t2.direction || "left", l2 = "up" === r2 || "down" === r2 ? "top" : "left", h2 = "up" === r2 || "left" === r2, c2 = t2.distance || n2["top" == l2 ? "outerHeight" : "outerWidth"](true), u2 = {};
    V.effects.createPlaceholder(n2), i2 = n2.cssClip(), s2 = n2.position()[l2], u2[l2] = (h2 ? -1 : 1) * c2 + s2, u2.clip = n2.cssClip(), u2.clip[o2[r2][1]] = u2.clip[o2[r2][0]], "show" === a2 && (n2.cssClip(u2.clip), n2.css(l2, u2[l2]), u2.clip = i2, u2[l2] = s2), n2.animate(u2, { queue: false, duration: t2.duration, easing: t2.easing, complete: e2 });
  }), t = false !== V.uiBackCompat ? V.effects.define("transfer", function(t2, e2) {
    V(this).transfer(t2, e2);
  }) : t;
  V.ui.focusable = function(t2, e2) {
    var i2, s2, n2, o2 = t2.nodeName.toLowerCase();
    return "area" === o2 ? (n2 = (i2 = t2.parentNode).name, !(!t2.href || !n2 || "map" !== i2.nodeName.toLowerCase()) && 0 < (i2 = V("img[usemap='#" + n2 + "']")).length && i2.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(o2) ? (s2 = !t2.disabled) && (n2 = V(t2).closest("fieldset")[0]) && (s2 = !n2.disabled) : s2 = "a" === o2 && t2.href || e2, s2 && V(t2).is(":visible") && function(t3) {
      var e3 = t3.css("visibility");
      for (; "inherit" === e3; ) t3 = t3.parent(), e3 = t3.css("visibility");
      return "visible" === e3;
    }(V(t2)));
  }, V.extend(V.expr.pseudos, { focusable: function(t2) {
    return V.ui.focusable(t2, null != V.attr(t2, "tabindex"));
  } });
  V.ui.focusable, V.fn._form = function() {
    return "string" == typeof this[0].form ? this.closest("form") : V(this[0].form);
  }, V.ui.formResetMixin = { _formResetHandler: function() {
    var e2 = V(this);
    setTimeout(function() {
      var t2 = e2.data("ui-form-reset-instances");
      V.each(t2, function() {
        this.refresh();
      });
    });
  }, _bindFormResetHandler: function() {
    var t2;
    this.form = this.element._form(), this.form.length && ((t2 = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), t2.push(this), this.form.data("ui-form-reset-instances", t2));
  }, _unbindFormResetHandler: function() {
    var t2;
    this.form.length && ((t2 = this.form.data("ui-form-reset-instances")).splice(V.inArray(this, t2), 1), t2.length ? this.form.data("ui-form-reset-instances", t2) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"));
  } }, V.expr.pseudos || (V.expr.pseudos = V.expr[":"]), V.uniqueSort || (V.uniqueSort = V.unique), V.escapeSelector || (it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, st = function(t2, e2) {
    return e2 ? "\0" === t2 ? "\uFFFD" : t2.slice(0, -1) + "\\" + t2.charCodeAt(t2.length - 1).toString(16) + " " : "\\" + t2;
  }, V.escapeSelector = function(t2) {
    return (t2 + "").replace(it, st);
  }), V.fn.even && V.fn.odd || V.fn.extend({ even: function() {
    return this.filter(function(t2) {
      return t2 % 2 == 0;
    });
  }, odd: function() {
    return this.filter(function(t2) {
      return t2 % 2 == 1;
    });
  } }), V.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, V.fn.labels = function() {
    var t2, e2, i2;
    return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e2 = this.eq(0).parents("label"), (t2 = this.attr("id")) && (i2 = (i2 = this.eq(0).parents().last()).add((i2.length ? i2 : this).siblings()), t2 = "label[for='" + V.escapeSelector(t2) + "']", e2 = e2.add(i2.find(t2).addBack(t2))), this.pushStack(e2)) : this.pushStack([]);
  }, V.fn.scrollParent = function(t2) {
    var e2 = this.css("position"), i2 = "absolute" === e2, s2 = t2 ? /(auto|scroll|hidden)/ : /(auto|scroll)/, t2 = this.parents().filter(function() {
      var t3 = V(this);
      return (!i2 || "static" !== t3.css("position")) && s2.test(t3.css("overflow") + t3.css("overflow-y") + t3.css("overflow-x"));
    }).eq(0);
    return "fixed" !== e2 && t2.length ? t2 : V(this[0].ownerDocument || document);
  }, V.extend(V.expr.pseudos, { tabbable: function(t2) {
    var e2 = V.attr(t2, "tabindex"), i2 = null != e2;
    return (!i2 || 0 <= e2) && V.ui.focusable(t2, i2);
  } }), V.fn.extend({ uniqueId: (nt = 0, function() {
    return this.each(function() {
      this.id || (this.id = "ui-id-" + ++nt);
    });
  }), removeUniqueId: function() {
    return this.each(function() {
      /^ui-id-\d+$/.test(this.id) && V(this).removeAttr("id");
    });
  } }), V.widget("ui.accordion", { version: "1.13.3", options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: false, event: "click", header: function(t2) {
    return t2.find("> li > :first-child").add(t2.find("> :not(li)").even());
  }, heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function() {
    var t2 = this.options;
    this.prevShow = this.prevHide = V(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), t2.collapsible || false !== t2.active && null != t2.active || (t2.active = 0), this._processPanels(), t2.active < 0 && (t2.active += this.headers.length), this._refresh();
  }, _getCreateEventData: function() {
    return { header: this.active, panel: this.active.length ? this.active.next() : V() };
  }, _createIcons: function() {
    var t2, e2 = this.options.icons;
    e2 && (t2 = V("<span>"), this._addClass(t2, "ui-accordion-header-icon", "ui-icon " + e2.header), t2.prependTo(this.headers), t2 = this.active.children(".ui-accordion-header-icon"), this._removeClass(t2, e2.header)._addClass(t2, null, e2.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
  }, _destroyIcons: function() {
    this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
  }, _destroy: function() {
    var t2;
    this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t2 = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t2.css("height", "");
  }, _setOption: function(t2, e2) {
    "active" === t2 ? this._activate(e2) : ("event" === t2 && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e2)), this._super(t2, e2), "collapsible" !== t2 || e2 || false !== this.options.active || this._activate(0), "icons" === t2 && (this._destroyIcons(), e2) && this._createIcons());
  }, _setOptionDisabled: function(t2) {
    this._super(t2), this.element.attr("aria-disabled", t2), this._toggleClass(null, "ui-state-disabled", !!t2), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t2);
  }, _keydown: function(t2) {
    if (!t2.altKey && !t2.ctrlKey) {
      var e2 = V.ui.keyCode, i2 = this.headers.length, s2 = this.headers.index(t2.target), n2 = false;
      switch (t2.keyCode) {
        case e2.RIGHT:
        case e2.DOWN:
          n2 = this.headers[(s2 + 1) % i2];
          break;
        case e2.LEFT:
        case e2.UP:
          n2 = this.headers[(s2 - 1 + i2) % i2];
          break;
        case e2.SPACE:
        case e2.ENTER:
          this._eventHandler(t2);
          break;
        case e2.HOME:
          n2 = this.headers[0];
          break;
        case e2.END:
          n2 = this.headers[i2 - 1];
      }
      n2 && (V(t2.target).attr("tabIndex", -1), V(n2).attr("tabIndex", 0), V(n2).trigger("focus"), t2.preventDefault());
    }
  }, _panelKeyDown: function(t2) {
    t2.keyCode === V.ui.keyCode.UP && t2.ctrlKey && V(t2.currentTarget).prev().trigger("focus");
  }, refresh: function() {
    var t2 = this.options;
    this._processPanels(), false === t2.active && true === t2.collapsible || !this.headers.length ? (t2.active = false, this.active = V()) : false === t2.active ? this._activate(0) : this.active.length && !V.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t2.active = false, this.active = V()) : this._activate(Math.max(0, t2.active - 1)) : t2.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
  }, _processPanels: function() {
    var t2 = this.headers, e2 = this.panels;
    "function" == typeof this.options.header ? this.headers = this.options.header(this.element) : this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e2 && (this._off(t2.not(this.headers)), this._off(e2.not(this.panels)));
  }, _refresh: function() {
    var i2, t2 = this.options, e2 = t2.heightStyle, s2 = this.element.parent();
    this.active = this._findActive(t2.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
      var t3 = V(this), e3 = t3.uniqueId().attr("id"), i3 = t3.next(), s3 = i3.uniqueId().attr("id");
      t3.attr("aria-controls", s3), i3.attr("aria-labelledby", e3);
    }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(t2.event), "fill" === e2 ? (i2 = s2.height(), this.element.siblings(":visible").each(function() {
      var t3 = V(this), e3 = t3.css("position");
      "absolute" !== e3 && "fixed" !== e3 && (i2 -= t3.outerHeight(true));
    }), this.headers.each(function() {
      i2 -= V(this).outerHeight(true);
    }), this.headers.next().each(function() {
      V(this).height(Math.max(0, i2 - V(this).innerHeight() + V(this).height()));
    }).css("overflow", "auto")) : "auto" === e2 && (i2 = 0, this.headers.next().each(function() {
      var t3 = V(this).is(":visible");
      t3 || V(this).show(), i2 = Math.max(i2, V(this).css("height", "").height()), t3 || V(this).hide();
    }).height(i2));
  }, _activate: function(t2) {
    t2 = this._findActive(t2)[0];
    t2 !== this.active[0] && (t2 = t2 || this.active[0], this._eventHandler({ target: t2, currentTarget: t2, preventDefault: V.noop }));
  }, _findActive: function(t2) {
    return "number" == typeof t2 ? this.headers.eq(t2) : V();
  }, _setupEvents: function(t2) {
    var i2 = { keydown: "_keydown" };
    t2 && V.each(t2.split(" "), function(t3, e2) {
      i2[e2] = "_eventHandler";
    }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i2), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers);
  }, _eventHandler: function(t2) {
    var e2 = this.options, i2 = this.active, s2 = V(t2.currentTarget), n2 = s2[0] === i2[0], o2 = n2 && e2.collapsible, a2 = o2 ? V() : s2.next(), r2 = i2.next(), r2 = { oldHeader: i2, oldPanel: r2, newHeader: o2 ? V() : s2, newPanel: a2 };
    t2.preventDefault(), n2 && !e2.collapsible || false === this._trigger("beforeActivate", t2, r2) || (e2.active = !o2 && this.headers.index(s2), this.active = n2 ? V() : s2, this._toggle(r2), this._removeClass(i2, "ui-accordion-header-active", "ui-state-active"), e2.icons && (a2 = i2.children(".ui-accordion-header-icon"), this._removeClass(a2, null, e2.icons.activeHeader)._addClass(a2, null, e2.icons.header)), n2) || (this._removeClass(s2, "ui-accordion-header-collapsed")._addClass(s2, "ui-accordion-header-active", "ui-state-active"), e2.icons && (t2 = s2.children(".ui-accordion-header-icon"), this._removeClass(t2, null, e2.icons.header)._addClass(t2, null, e2.icons.activeHeader)), this._addClass(s2.next(), "ui-accordion-content-active"));
  }, _toggle: function(t2) {
    var e2 = t2.newPanel, i2 = this.prevShow.length ? this.prevShow : t2.oldPanel;
    this.prevShow.add(this.prevHide).stop(true, true), this.prevShow = e2, this.prevHide = i2, this.options.animate ? this._animate(e2, i2, t2) : (i2.hide(), e2.show(), this._toggleComplete(t2)), i2.attr({ "aria-hidden": "true" }), i2.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), e2.length && i2.length ? i2.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : e2.length && this.headers.filter(function() {
      return 0 === parseInt(V(this).attr("tabIndex"), 10);
    }).attr("tabIndex", -1), e2.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
  }, _animate: function(t2, i2, e2) {
    function s2() {
      o2._toggleComplete(e2);
    }
    var n2, o2 = this, a2 = 0, r2 = t2.css("box-sizing"), l2 = t2.length && (!i2.length || t2.index() < i2.index()), h2 = this.options.animate || {}, l2 = l2 && h2.down || h2, c2 = (c2 = "string" == typeof l2 ? l2 : c2) || l2.easing || h2.easing, u2 = (u2 = "number" == typeof l2 ? l2 : u2) || l2.duration || h2.duration;
    return i2.length ? t2.length ? (n2 = t2.show().outerHeight(), i2.animate(this.hideProps, { duration: u2, easing: c2, step: function(t3, e3) {
      e3.now = Math.round(t3);
    } }), void t2.hide().animate(this.showProps, { duration: u2, easing: c2, complete: s2, step: function(t3, e3) {
      e3.now = Math.round(t3), "height" !== e3.prop ? "content-box" === r2 && (a2 += e3.now) : "content" !== o2.options.heightStyle && (e3.now = Math.round(n2 - i2.outerHeight() - a2), a2 = 0);
    } })) : i2.animate(this.hideProps, u2, c2, s2) : t2.animate(this.showProps, u2, c2, s2);
  }, _toggleComplete: function(t2) {
    var e2 = t2.oldPanel, i2 = e2.prev();
    this._removeClass(e2, "ui-accordion-content-active"), this._removeClass(i2, "ui-accordion-header-active")._addClass(i2, "ui-accordion-header-collapsed"), e2.length && (e2.parent()[0].className = e2.parent()[0].className), this._trigger("activate", null, t2);
  } }), V.ui.safeActiveElement = function(e2) {
    var i2;
    try {
      i2 = e2.activeElement;
    } catch (t2) {
      i2 = e2.body;
    }
    return i2 = (i2 = i2 || e2.body).nodeName ? i2 : e2.body;
  }, V.widget("ui.menu", { version: "1.13.3", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function() {
    this.activeMenu = this.element, this.mouseHandled = false, this.lastMousePosition = { x: null, y: null }, this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({ "mousedown .ui-menu-item": function(t2) {
      t2.preventDefault(), this._activateItem(t2);
    }, "click .ui-menu-item": function(t2) {
      var e2 = V(t2.target), i2 = V(V.ui.safeActiveElement(this.document[0]));
      !this.mouseHandled && e2.not(".ui-state-disabled").length && (this.select(t2), t2.isPropagationStopped() || (this.mouseHandled = true), e2.has(".ui-menu").length ? this.expand(t2) : !this.element.is(":focus") && i2.closest(".ui-menu").length && (this.element.trigger("focus", [true]), this.active) && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer));
    }, "mouseenter .ui-menu-item": "_activateItem", "mousemove .ui-menu-item": "_activateItem", mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function(t2, e2) {
      var i2 = this.active || this._menuItems().first();
      e2 || this.focus(t2, i2);
    }, blur: function(t2) {
      this._delay(function() {
        V.contains(this.element[0], V.ui.safeActiveElement(this.document[0])) || this.collapseAll(t2);
      });
    }, keydown: "_keydown" }), this.refresh(), this._on(this.document, { click: function(t2) {
      this._closeOnDocumentClick(t2) && this.collapseAll(t2, true), this.mouseHandled = false;
    } });
  }, _activateItem: function(t2) {
    var e2, i2;
    this.previousFilter || t2.clientX === this.lastMousePosition.x && t2.clientY === this.lastMousePosition.y || (this.lastMousePosition = { x: t2.clientX, y: t2.clientY }, e2 = V(t2.target).closest(".ui-menu-item"), i2 = V(t2.currentTarget), e2[0] !== i2[0]) || i2.is(".ui-state-active") || (this._removeClass(i2.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t2, i2));
  }, _destroy: function() {
    var t2 = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), t2.children().each(function() {
      var t3 = V(this);
      t3.data("ui-menu-submenu-caret") && t3.remove();
    });
  }, _keydown: function(t2) {
    var e2, i2, s2, n2 = true;
    switch (t2.keyCode) {
      case V.ui.keyCode.PAGE_UP:
        this.previousPage(t2);
        break;
      case V.ui.keyCode.PAGE_DOWN:
        this.nextPage(t2);
        break;
      case V.ui.keyCode.HOME:
        this._move("first", "first", t2);
        break;
      case V.ui.keyCode.END:
        this._move("last", "last", t2);
        break;
      case V.ui.keyCode.UP:
        this.previous(t2);
        break;
      case V.ui.keyCode.DOWN:
        this.next(t2);
        break;
      case V.ui.keyCode.LEFT:
        this.collapse(t2);
        break;
      case V.ui.keyCode.RIGHT:
        this.active && !this.active.is(".ui-state-disabled") && this.expand(t2);
        break;
      case V.ui.keyCode.ENTER:
      case V.ui.keyCode.SPACE:
        this._activate(t2);
        break;
      case V.ui.keyCode.ESCAPE:
        this.collapse(t2);
        break;
      default:
        e2 = this.previousFilter || "", s2 = n2 = false, i2 = 96 <= t2.keyCode && t2.keyCode <= 105 ? (t2.keyCode - 96).toString() : String.fromCharCode(t2.keyCode), clearTimeout(this.filterTimer), i2 === e2 ? s2 = true : i2 = e2 + i2, e2 = this._filterMenuItems(i2), (e2 = s2 && -1 !== e2.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e2).length || (i2 = String.fromCharCode(t2.keyCode), e2 = this._filterMenuItems(i2)), e2.length ? (this.focus(t2, e2), this.previousFilter = i2, this.filterTimer = this._delay(function() {
          delete this.previousFilter;
        }, 1e3)) : delete this.previousFilter;
    }
    n2 && t2.preventDefault();
  }, _activate: function(t2) {
    this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t2) : this.select(t2));
  }, refresh: function() {
    var t2, e2, s2 = this, n2 = this.options.icons.submenu, i2 = this.element.find(this.options.menus);
    this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), t2 = i2.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() {
      var t3 = V(this), e3 = t3.prev(), i3 = V("<span>").data("ui-menu-submenu-caret", true);
      s2._addClass(i3, "ui-menu-icon", "ui-icon " + n2), e3.attr("aria-haspopup", "true").prepend(i3), t3.attr("aria-labelledby", e3.attr("id"));
    }), this._addClass(t2, "ui-menu", "ui-widget ui-widget-content ui-front"), (t2 = i2.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
      var t3 = V(this);
      s2._isDivider(t3) && s2._addClass(t3, "ui-menu-divider", "ui-widget-content");
    }), e2 = (i2 = t2.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), this._addClass(i2, "ui-menu-item")._addClass(e2, "ui-menu-item-wrapper"), t2.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !V.contains(this.element[0], this.active[0]) && this.blur();
  }, _itemRole: function() {
    return { menu: "menuitem", listbox: "option" }[this.options.role];
  }, _setOption: function(t2, e2) {
    var i2;
    "icons" === t2 && (i2 = this.element.find(".ui-menu-icon"), this._removeClass(i2, null, this.options.icons.submenu)._addClass(i2, null, e2.submenu)), this._super(t2, e2);
  }, _setOptionDisabled: function(t2) {
    this._super(t2), this.element.attr("aria-disabled", String(t2)), this._toggleClass(null, "ui-state-disabled", !!t2);
  }, focus: function(t2, e2) {
    var i2;
    this.blur(t2, t2 && "focus" === t2.type), this._scrollIntoView(e2), this.active = e2.first(), i2 = this.active.children(".ui-menu-item-wrapper"), this._addClass(i2, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i2.attr("id")), i2 = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(i2, null, "ui-state-active"), t2 && "keydown" === t2.type ? this._close() : this.timer = this._delay(function() {
      this._close();
    }, this.delay), (i2 = e2.children(".ui-menu")).length && t2 && /^mouse/.test(t2.type) && this._startOpening(i2), this.activeMenu = e2.parent(), this._trigger("focus", t2, { item: e2 });
  }, _scrollIntoView: function(t2) {
    var e2, i2, s2;
    this._hasScroll() && (e2 = parseFloat(V.css(this.activeMenu[0], "borderTopWidth")) || 0, i2 = parseFloat(V.css(this.activeMenu[0], "paddingTop")) || 0, e2 = t2.offset().top - this.activeMenu.offset().top - e2 - i2, i2 = this.activeMenu.scrollTop(), s2 = this.activeMenu.height(), t2 = t2.outerHeight(), e2 < 0 ? this.activeMenu.scrollTop(i2 + e2) : s2 < e2 + t2 && this.activeMenu.scrollTop(i2 + e2 - s2 + t2));
  }, blur: function(t2, e2) {
    e2 || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t2, { item: this.active }), this.active = null);
  }, _startOpening: function(t2) {
    clearTimeout(this.timer), "true" === t2.attr("aria-hidden") && (this.timer = this._delay(function() {
      this._close(), this._open(t2);
    }, this.delay));
  }, _open: function(t2) {
    var e2 = V.extend({ of: this.active }, this.options.position);
    clearTimeout(this.timer), this.element.find(".ui-menu").not(t2.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t2.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e2);
  }, collapseAll: function(e2, i2) {
    clearTimeout(this.timer), this.timer = this._delay(function() {
      var t2 = i2 ? this.element : V(e2 && e2.target).closest(this.element.find(".ui-menu"));
      t2.length || (t2 = this.element), this._close(t2), this.blur(e2), this._removeClass(t2.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = t2;
    }, i2 ? 0 : this.delay);
  }, _close: function(t2) {
    (t2 = t2 || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
  }, _closeOnDocumentClick: function(t2) {
    return !V(t2.target).closest(".ui-menu").length;
  }, _isDivider: function(t2) {
    return !/[^\-\u2014\u2013\s]/.test(t2.text());
  }, collapse: function(t2) {
    var e2 = this.active && this.active.parent().closest(".ui-menu-item", this.element);
    e2 && e2.length && (this._close(), this.focus(t2, e2));
  }, expand: function(t2) {
    var e2 = this.active && this._menuItems(this.active.children(".ui-menu")).first();
    e2 && e2.length && (this._open(e2.parent()), this._delay(function() {
      this.focus(t2, e2);
    }));
  }, next: function(t2) {
    this._move("next", "first", t2);
  }, previous: function(t2) {
    this._move("prev", "last", t2);
  }, isFirstItem: function() {
    return this.active && !this.active.prevAll(".ui-menu-item").length;
  }, isLastItem: function() {
    return this.active && !this.active.nextAll(".ui-menu-item").length;
  }, _menuItems: function(t2) {
    return (t2 || this.element).find(this.options.items).filter(".ui-menu-item");
  }, _move: function(t2, e2, i2) {
    var s2;
    (s2 = this.active ? "first" === t2 || "last" === t2 ? this.active["first" === t2 ? "prevAll" : "nextAll"](".ui-menu-item").last() : this.active[t2 + "All"](".ui-menu-item").first() : s2) && s2.length && this.active || (s2 = this._menuItems(this.activeMenu)[e2]()), this.focus(i2, s2);
  }, nextPage: function(t2) {
    var e2, i2, s2;
    this.active ? this.isLastItem() || (this._hasScroll() ? (i2 = this.active.offset().top, s2 = this.element.innerHeight(), 0 === V.fn.jquery.indexOf("3.2.") && (s2 += this.element[0].offsetHeight - this.element.outerHeight()), this.active.nextAll(".ui-menu-item").each(function() {
      return (e2 = V(this)).offset().top - i2 - s2 < 0;
    }), this.focus(t2, e2)) : this.focus(t2, this._menuItems(this.activeMenu)[this.active ? "last" : "first"]())) : this.next(t2);
  }, previousPage: function(t2) {
    var e2, i2, s2;
    this.active ? this.isFirstItem() || (this._hasScroll() ? (i2 = this.active.offset().top, s2 = this.element.innerHeight(), 0 === V.fn.jquery.indexOf("3.2.") && (s2 += this.element[0].offsetHeight - this.element.outerHeight()), this.active.prevAll(".ui-menu-item").each(function() {
      return 0 < (e2 = V(this)).offset().top - i2 + s2;
    }), this.focus(t2, e2)) : this.focus(t2, this._menuItems(this.activeMenu).first())) : this.next(t2);
  }, _hasScroll: function() {
    return this.element.outerHeight() < this.element.prop("scrollHeight");
  }, select: function(t2) {
    this.active = this.active || V(t2.target).closest(".ui-menu-item");
    var e2 = { item: this.active };
    this.active.has(".ui-menu").length || this.collapseAll(t2, true), this._trigger("select", t2, e2);
  }, _filterMenuItems: function(t2) {
    var t2 = t2.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), e2 = new RegExp("^" + t2, "i");
    return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
      return e2.test(String.prototype.trim.call(V(this).children(".ui-menu-item-wrapper").text()));
    });
  } }), V.widget("ui.autocomplete", { version: "1.13.3", defaultElement: "<input>", options: { appendTo: null, autoFocus: false, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, liveRegionTimer: null, _create: function() {
    var i2, s2, n2, t2 = this.element[0].nodeName.toLowerCase(), e2 = "textarea" === t2, t2 = "input" === t2;
    this.isMultiLine = e2 || !t2 && this._isContentEditable(this.element), this.valueMethod = this.element[e2 || t2 ? "val" : "text"], this.isNewMenu = true, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, { keydown: function(t3) {
      if (this.element.prop("readOnly")) s2 = n2 = i2 = true;
      else {
        s2 = n2 = i2 = false;
        var e3 = V.ui.keyCode;
        switch (t3.keyCode) {
          case e3.PAGE_UP:
            i2 = true, this._move("previousPage", t3);
            break;
          case e3.PAGE_DOWN:
            i2 = true, this._move("nextPage", t3);
            break;
          case e3.UP:
            i2 = true, this._keyEvent("previous", t3);
            break;
          case e3.DOWN:
            i2 = true, this._keyEvent("next", t3);
            break;
          case e3.ENTER:
            this.menu.active && (i2 = true, t3.preventDefault(), this.menu.select(t3));
            break;
          case e3.TAB:
            this.menu.active && this.menu.select(t3);
            break;
          case e3.ESCAPE:
            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(t3), t3.preventDefault());
            break;
          default:
            s2 = true, this._searchTimeout(t3);
        }
      }
    }, keypress: function(t3) {
      if (i2) i2 = false, this.isMultiLine && !this.menu.element.is(":visible") || t3.preventDefault();
      else if (!s2) {
        var e3 = V.ui.keyCode;
        switch (t3.keyCode) {
          case e3.PAGE_UP:
            this._move("previousPage", t3);
            break;
          case e3.PAGE_DOWN:
            this._move("nextPage", t3);
            break;
          case e3.UP:
            this._keyEvent("previous", t3);
            break;
          case e3.DOWN:
            this._keyEvent("next", t3);
        }
      }
    }, input: function(t3) {
      n2 ? (n2 = false, t3.preventDefault()) : this._searchTimeout(t3);
    }, focus: function() {
      this.selectedItem = null, this.previous = this._value();
    }, blur: function(t3) {
      clearTimeout(this.searching), this.close(t3), this._change(t3);
    } }), this._initSource(), this.menu = V("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().attr({ unselectable: "on" }).menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, { mousedown: function(t3) {
      t3.preventDefault();
    }, menufocus: function(t3, e3) {
      var i3, s3;
      this.isNewMenu && (this.isNewMenu = false, t3.originalEvent) && /^mouse/.test(t3.originalEvent.type) ? (this.menu.blur(), this.document.one("mousemove", function() {
        V(t3.target).trigger(t3.originalEvent);
      })) : (s3 = e3.item.data("ui-autocomplete-item"), false !== this._trigger("focus", t3, { item: s3 }) && t3.originalEvent && /^key/.test(t3.originalEvent.type) && this._value(s3.value), (i3 = e3.item.attr("aria-label") || s3.value) && String.prototype.trim.call(i3).length && (clearTimeout(this.liveRegionTimer), this.liveRegionTimer = this._delay(function() {
        this.liveRegion.html(V("<div>").text(i3));
      }, 100)));
    }, menuselect: function(t3, e3) {
      var i3 = e3.item.data("ui-autocomplete-item"), s3 = this.previous;
      this.element[0] !== V.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s3, this._delay(function() {
        this.previous = s3, this.selectedItem = i3;
      })), false !== this._trigger("select", t3, { item: i3 }) && this._value(i3.value), this.term = this._value(), this.close(t3), this.selectedItem = i3;
    } }), this.liveRegion = V("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, { beforeunload: function() {
      this.element.removeAttr("autocomplete");
    } });
  }, _destroy: function() {
    clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
  }, _setOption: function(t2, e2) {
    this._super(t2, e2), "source" === t2 && this._initSource(), "appendTo" === t2 && this.menu.element.appendTo(this._appendTo()), "disabled" === t2 && e2 && this.xhr && this.xhr.abort();
  }, _isEventTargetInWidget: function(t2) {
    var e2 = this.menu.element[0];
    return t2.target === this.element[0] || t2.target === e2 || V.contains(e2, t2.target);
  }, _closeOnClickOutside: function(t2) {
    this._isEventTargetInWidget(t2) || this.close();
  }, _appendTo: function() {
    var t2 = this.options.appendTo;
    return t2 = (t2 = (t2 = t2 && (t2.jquery || t2.nodeType ? V(t2) : this.document.find(t2).eq(0))) && t2[0] ? t2 : this.element.closest(".ui-front, dialog")).length ? t2 : this.document[0].body;
  }, _initSource: function() {
    var i2, s2, n2 = this;
    Array.isArray(this.options.source) ? (i2 = this.options.source, this.source = function(t2, e2) {
      e2(V.ui.autocomplete.filter(i2, t2.term));
    }) : "string" == typeof this.options.source ? (s2 = this.options.source, this.source = function(t2, e2) {
      n2.xhr && n2.xhr.abort(), n2.xhr = V.ajax({ url: s2, data: t2, dataType: "json", success: function(t3) {
        e2(t3);
      }, error: function() {
        e2([]);
      } });
    }) : this.source = this.options.source;
  }, _searchTimeout: function(s2) {
    clearTimeout(this.searching), this.searching = this._delay(function() {
      var t2 = this.term === this._value(), e2 = this.menu.element.is(":visible"), i2 = s2.altKey || s2.ctrlKey || s2.metaKey || s2.shiftKey;
      t2 && (e2 || i2) || (this.selectedItem = null, this.search(null, s2));
    }, this.options.delay);
  }, search: function(t2, e2) {
    return t2 = null != t2 ? t2 : this._value(), this.term = this._value(), t2.length < this.options.minLength ? this.close(e2) : false !== this._trigger("search", e2) ? this._search(t2) : void 0;
  }, _search: function(t2) {
    this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = false, this.source({ term: t2 }, this._response());
  }, _response: function() {
    var e2 = ++this.requestIndex;
    return function(t2) {
      e2 === this.requestIndex && this.__response(t2), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
    }.bind(this);
  }, __response: function(t2) {
    t2 = t2 && this._normalize(t2), this._trigger("response", null, { content: t2 }), !this.options.disabled && t2 && t2.length && !this.cancelSearch ? (this._suggest(t2), this._trigger("open")) : this._close();
  }, close: function(t2) {
    this.cancelSearch = true, this._close(t2);
  }, _close: function(t2) {
    this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = true, this._trigger("close", t2));
  }, _change: function(t2) {
    this.previous !== this._value() && this._trigger("change", t2, { item: this.selectedItem });
  }, _normalize: function(t2) {
    return t2.length && t2[0].label && t2[0].value ? t2 : V.map(t2, function(t3) {
      return "string" == typeof t3 ? { label: t3, value: t3 } : V.extend({}, t3, { label: t3.label || t3.value, value: t3.value || t3.label });
    });
  }, _suggest: function(t2) {
    var e2 = this.menu.element.empty();
    this._renderMenu(e2, t2), this.isNewMenu = true, this.menu.refresh(), e2.show(), this._resizeMenu(), e2.position(V.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, { mousedown: "_closeOnClickOutside" });
  }, _resizeMenu: function() {
    var t2 = this.menu.element;
    t2.outerWidth(Math.max(t2.width("").outerWidth() + 1, this.element.outerWidth()));
  }, _renderMenu: function(i2, t2) {
    var s2 = this;
    V.each(t2, function(t3, e2) {
      s2._renderItemData(i2, e2);
    });
  }, _renderItemData: function(t2, e2) {
    return this._renderItem(t2, e2).data("ui-autocomplete-item", e2);
  }, _renderItem: function(t2, e2) {
    return V("<li>").append(V("<div>").text(e2.label)).appendTo(t2);
  }, _move: function(t2, e2) {
    this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t2) || this.menu.isLastItem() && /^next/.test(t2) ? (this.isMultiLine || this._value(this.term), this.menu.blur()) : this.menu[t2](e2) : this.search(null, e2);
  }, widget: function() {
    return this.menu.element;
  }, _value: function() {
    return this.valueMethod.apply(this.element, arguments);
  }, _keyEvent: function(t2, e2) {
    this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t2, e2), e2.preventDefault());
  }, _isContentEditable: function(t2) {
    var e2;
    return !!t2.length && ("inherit" === (e2 = t2.prop("contentEditable")) ? this._isContentEditable(t2.parent()) : "true" === e2);
  } }), V.extend(V.ui.autocomplete, { escapeRegex: function(t2) {
    return t2.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }, filter: function(t2, e2) {
    var i2 = new RegExp(V.ui.autocomplete.escapeRegex(e2), "i");
    return V.grep(t2, function(t3) {
      return i2.test(t3.label || t3.value || t3);
    });
  } }), V.widget("ui.autocomplete", V.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function(t2) {
    return t2 + (1 < t2 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
  } } }, __response: function(t2) {
    var e2;
    this._superApply(arguments), this.options.disabled || this.cancelSearch || (e2 = t2 && t2.length ? this.options.messages.results(t2.length) : this.options.messages.noResults, clearTimeout(this.liveRegionTimer), this.liveRegionTimer = this._delay(function() {
      this.liveRegion.html(V("<div>").text(e2));
    }, 100));
  } }), V.ui.autocomplete;
  var it, st, nt, ot, S, at = /ui-corner-([a-z]){2,6}/g;
  V.widget("ui.controlgroup", { version: "1.13.3", defaultElement: "<div>", options: { direction: "horizontal", disabled: null, onlyVisible: true, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } }, _create: function() {
    this._enhance();
  }, _enhance: function() {
    this.element.attr("role", "toolbar"), this.refresh();
  }, _destroy: function() {
    this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
  }, _initWidgets: function() {
    var o2 = this, a2 = [];
    V.each(this.options.items, function(s2, t2) {
      var e2, n2 = {};
      t2 && ("controlgroupLabel" === s2 ? ((e2 = o2.element.find(t2)).each(function() {
        var t3 = V(this);
        t3.children(".ui-controlgroup-label-contents").length || t3.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
      }), o2._addClass(e2, null, "ui-widget ui-widget-content ui-state-default"), a2 = a2.concat(e2.get())) : V.fn[s2] && (n2 = o2["_" + s2 + "Options"] ? o2["_" + s2 + "Options"]("middle") : { classes: {} }, o2.element.find(t2).each(function() {
        var t3 = V(this), e3 = t3[s2]("instance"), i2 = V.widget.extend({}, n2);
        "button" === s2 && t3.parent(".ui-spinner").length || ((e3 = e3 || t3[s2]()[s2]("instance")) && (i2.classes = o2._resolveClassesValues(i2.classes, e3)), t3[s2](i2), i2 = t3[s2]("widget"), V.data(i2[0], "ui-controlgroup-data", e3 || t3[s2]("instance")), a2.push(i2[0]));
      })));
    }), this.childWidgets = V(V.uniqueSort(a2)), this._addClass(this.childWidgets, "ui-controlgroup-item");
  }, _callChildMethod: function(e2) {
    this.childWidgets.each(function() {
      var t2 = V(this).data("ui-controlgroup-data");
      t2 && t2[e2] && t2[e2]();
    });
  }, _updateCornerClass: function(t2, e2) {
    e2 = this._buildSimpleOptions(e2, "label").classes.label;
    this._removeClass(t2, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t2, null, e2);
  }, _buildSimpleOptions: function(t2, e2) {
    var i2 = "vertical" === this.options.direction, s2 = { classes: {} };
    return s2.classes[e2] = { middle: "", first: "ui-corner-" + (i2 ? "top" : "left"), last: "ui-corner-" + (i2 ? "bottom" : "right"), only: "ui-corner-all" }[t2], s2;
  }, _spinnerOptions: function(t2) {
    t2 = this._buildSimpleOptions(t2, "ui-spinner");
    return t2.classes["ui-spinner-up"] = "", t2.classes["ui-spinner-down"] = "", t2;
  }, _buttonOptions: function(t2) {
    return this._buildSimpleOptions(t2, "ui-button");
  }, _checkboxradioOptions: function(t2) {
    return this._buildSimpleOptions(t2, "ui-checkboxradio-label");
  }, _selectmenuOptions: function(t2) {
    var e2 = "vertical" === this.options.direction;
    return { width: e2 && "auto", classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (e2 ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e2 ? "top" : "left") }, last: { "ui-selectmenu-button-open": e2 ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e2 ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } }[t2] };
  }, _resolveClassesValues: function(i2, s2) {
    var n2 = {};
    return V.each(i2, function(t2) {
      var e2 = s2.options.classes[t2] || "", e2 = String.prototype.trim.call(e2.replace(at, ""));
      n2[t2] = (e2 + " " + i2[t2]).replace(/\s+/g, " ");
    }), n2;
  }, _setOption: function(t2, e2) {
    "direction" === t2 && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t2, e2), "disabled" === t2 ? this._callChildMethod(e2 ? "disable" : "enable") : this.refresh();
  }, refresh: function() {
    var n2, o2 = this;
    this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), n2 = this.childWidgets, (n2 = this.options.onlyVisible ? n2.filter(":visible") : n2).length && (V.each(["first", "last"], function(t2, e2) {
      var i2, s2 = n2[e2]().data("ui-controlgroup-data");
      s2 && o2["_" + s2.widgetName + "Options"] ? ((i2 = o2["_" + s2.widgetName + "Options"](1 === n2.length ? "only" : e2)).classes = o2._resolveClassesValues(i2.classes, s2), s2.element[s2.widgetName](i2)) : o2._updateCornerClass(n2[e2](), e2);
    }), this._callChildMethod("refresh"));
  } }), V.widget("ui.checkboxradio", [V.ui.formResetMixin, { version: "1.13.3", options: { disabled: null, label: null, icon: true, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } }, _getCreateOptions: function() {
    var t2, e2 = this._super() || {};
    return this._readType(), t2 = this.element.labels(), this.label = V(t2[t2.length - 1]), this.label.length || V.error("No label found for checkboxradio widget"), this.originalLabel = "", (t2 = this.label.contents().not(this.element[0])).length && (this.originalLabel += t2.clone().wrapAll("<div></div>").parent().html()), this.originalLabel && (e2.label = this.originalLabel), null != (t2 = this.element[0].disabled) && (e2.disabled = t2), e2;
  }, _create: function() {
    var t2 = this.element[0].checked;
    this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t2 && this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this._on({ change: "_toggleClasses", focus: function() {
      this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
    }, blur: function() {
      this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
    } });
  }, _readType: function() {
    var t2 = this.element[0].nodeName.toLowerCase();
    this.type = this.element[0].type, "input" === t2 && /radio|checkbox/.test(this.type) || V.error("Can't create checkboxradio on element.nodeName=" + t2 + " and element.type=" + this.type);
  }, _enhance: function() {
    this._updateIcon(this.element[0].checked);
  }, widget: function() {
    return this.label;
  }, _getRadioGroup: function() {
    var t2 = this.element[0].name, e2 = "input[name='" + V.escapeSelector(t2) + "']";
    return t2 ? (this.form.length ? V(this.form[0].elements).filter(e2) : V(e2).filter(function() {
      return 0 === V(this)._form().length;
    })).not(this.element) : V([]);
  }, _toggleClasses: function() {
    var t2 = this.element[0].checked;
    this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t2), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t2)._toggleClass(this.icon, null, "ui-icon-blank", !t2), "radio" === this.type && this._getRadioGroup().each(function() {
      var t3 = V(this).checkboxradio("instance");
      t3 && t3._removeClass(t3.label, "ui-checkboxradio-checked", "ui-state-active");
    });
  }, _destroy: function() {
    this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
  }, _setOption: function(t2, e2) {
    "label" === t2 && !e2 || (this._super(t2, e2), "disabled" === t2 ? (this._toggleClass(this.label, null, "ui-state-disabled", e2), this.element[0].disabled = e2) : this.refresh());
  }, _updateIcon: function(t2) {
    var e2 = "ui-icon ui-icon-background ";
    this.options.icon ? (this.icon || (this.icon = V("<span>"), this.iconSpace = V("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (e2 += t2 ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t2 ? "ui-icon-blank" : "ui-icon-check")) : e2 += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", e2), t2 || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
  }, _updateLabel: function() {
    var t2 = this.label.contents().not(this.element[0]);
    this.icon && (t2 = t2.not(this.icon[0])), (t2 = this.iconSpace ? t2.not(this.iconSpace[0]) : t2).remove(), this.label.append(this.options.label);
  }, refresh: function() {
    var t2 = this.element[0].checked, e2 = this.element[0].disabled;
    this._updateIcon(t2), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t2), null !== this.options.label && this._updateLabel(), e2 !== this.options.disabled && this._setOptions({ disabled: e2 });
  } }]), V.ui.checkboxradio, V.widget("ui.button", { version: "1.13.3", defaultElement: "<button>", options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: true }, _getCreateOptions: function() {
    var t2, e2 = this._super() || {};
    return this.isInput = this.element.is("input"), null != (t2 = this.element[0].disabled) && (e2.disabled = t2), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e2.label = this.originalLabel), e2;
  }, _create: function() {
    !this.option.showLabel & !this.options.icon && (this.options.showLabel = true), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || false), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({ keyup: function(t2) {
      t2.keyCode === V.ui.keyCode.SPACE && (t2.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
    } });
  }, _enhance: function() {
    this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip());
  }, _updateTooltip: function() {
    this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
  }, _updateIcon: function(t2, e2) {
    var t2 = "iconPosition" !== t2, i2 = t2 ? this.options.iconPosition : e2, s2 = "top" === i2 || "bottom" === i2;
    this.icon ? t2 && this._removeClass(this.icon, null, this.options.icon) : (this.icon = V("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), t2 && this._addClass(this.icon, null, e2), this._attachIcon(i2), s2 ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = V("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(i2));
  }, _destroy: function() {
    this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title");
  }, _attachIconSpace: function(t2) {
    this.icon[/^(?:end|bottom)/.test(t2) ? "before" : "after"](this.iconSpace);
  }, _attachIcon: function(t2) {
    this.element[/^(?:end|bottom)/.test(t2) ? "append" : "prepend"](this.icon);
  }, _setOptions: function(t2) {
    var e2 = (void 0 === t2.showLabel ? this.options : t2).showLabel, i2 = (void 0 === t2.icon ? this.options : t2).icon;
    e2 || i2 || (t2.showLabel = true), this._super(t2);
  }, _setOption: function(t2, e2) {
    "icon" === t2 && (e2 ? this._updateIcon(t2, e2) : this.icon && (this.icon.remove(), this.iconSpace) && this.iconSpace.remove()), "iconPosition" === t2 && this._updateIcon(t2, e2), "showLabel" === t2 && (this._toggleClass("ui-button-icon-only", null, !e2), this._updateTooltip()), "label" === t2 && (this.isInput ? this.element.val(e2) : (this.element.html(e2), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t2, e2), "disabled" === t2 && (this._toggleClass(null, "ui-state-disabled", e2), this.element[0].disabled = e2) && this.element.trigger("blur");
  }, refresh: function() {
    var t2 = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
    t2 !== this.options.disabled && this._setOptions({ disabled: t2 }), this._updateTooltip();
  } }), false !== V.uiBackCompat && (V.widget("ui.button", V.ui.button, { options: { text: true, icons: { primary: null, secondary: null } }, _create: function() {
    this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super();
  }, _setOption: function(t2, e2) {
    "text" === t2 ? this._super("showLabel", e2) : ("showLabel" === t2 && (this.options.text = e2), "icon" === t2 && (this.options.icons.primary = e2), "icons" === t2 && (e2.primary ? (this._super("icon", e2.primary), this._super("iconPosition", "beginning")) : e2.secondary && (this._super("icon", e2.secondary), this._super("iconPosition", "end"))), this._superApply(arguments));
  } }), V.fn.button = (ot = V.fn.button, function(i2) {
    var t2 = "string" == typeof i2, s2 = Array.prototype.slice.call(arguments, 1), n2 = this;
    return t2 ? this.length || "instance" !== i2 ? this.each(function() {
      var t3, e2 = V(this).attr("type"), e2 = V.data(this, "ui-" + ("checkbox" !== e2 && "radio" !== e2 ? "button" : "checkboxradio"));
      return "instance" === i2 ? (n2 = e2, false) : e2 ? "function" != typeof e2[i2] || "_" === i2.charAt(0) ? V.error("no such method '" + i2 + "' for button widget instance") : (t3 = e2[i2].apply(e2, s2)) !== e2 && void 0 !== t3 ? (n2 = t3 && t3.jquery ? n2.pushStack(t3.get()) : t3, false) : void 0 : V.error("cannot call methods on button prior to initialization; attempted to call method '" + i2 + "'");
    }) : n2 = void 0 : (s2.length && (i2 = V.widget.extend.apply(null, [i2].concat(s2))), this.each(function() {
      var t3 = V(this).attr("type"), t3 = "checkbox" !== t3 && "radio" !== t3 ? "button" : "checkboxradio", e2 = V.data(this, "ui-" + t3);
      e2 ? (e2.option(i2 || {}), e2._init && e2._init()) : "button" == t3 ? ot.call(V(this), i2) : V(this).checkboxradio(V.extend({ icon: false }, i2));
    })), n2;
  }), V.fn.buttonset = function() {
    return V.ui.controlgroup || V.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments));
  }), V.ui.button;
  function rt() {
    this._curInst = null, this._keyEvent = false, this._disabledInputs = [], this._datepickerShowing = false, this._inDialog = false, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: false, showMonthAfterYear: false, yearSuffix: "", selectMonthLabel: "Select month", selectYearLabel: "Select year" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: false, hideIfNoPrevNext: false, navigationAsDateFormat: false, gotoCurrent: false, changeMonth: false, changeYear: false, yearRange: "c-10:c+10", showOtherMonths: false, selectOtherMonths: false, showWeek: false, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, onUpdateDatepicker: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: true, showButtonPanel: false, autoSize: false, disabled: false }, V.extend(this._defaults, this.regional[""]), this.regional.en = V.extend(true, {}, this.regional[""]), this.regional["en-US"] = V.extend(true, {}, this.regional.en), this.dpDiv = lt(V("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
  }
  function lt(t2) {
    var e2 = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return t2.on("mouseout", e2, function() {
      V(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && V(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && V(this).removeClass("ui-datepicker-next-hover");
    }).on("mouseover", e2, ht);
  }
  function ht() {
    V.datepicker._isDisabledDatepicker((S.inline ? S.dpDiv.parent() : S.input)[0]) || (V(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), V(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && V(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && V(this).addClass("ui-datepicker-next-hover"));
  }
  function H(t2, e2) {
    for (var i2 in V.extend(t2, e2), e2) null == e2[i2] && (t2[i2] = e2[i2]);
  }
  V.extend(V.ui, { datepicker: { version: "1.13.3" } }), V.extend(rt.prototype, { markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function() {
    return this.dpDiv;
  }, setDefaults: function(t2) {
    return H(this._defaults, t2 || {}), this;
  }, _attachDatepicker: function(t2, e2) {
    var i2, s2 = t2.nodeName.toLowerCase(), n2 = "div" === s2 || "span" === s2;
    t2.id || (this.uuid += 1, t2.id = "dp" + this.uuid), (i2 = this._newInst(V(t2), n2)).settings = V.extend({}, e2 || {}), "input" === s2 ? this._connectDatepicker(t2, i2) : n2 && this._inlineDatepicker(t2, i2);
  }, _newInst: function(t2, e2) {
    return { id: t2[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"), input: t2, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: e2, dpDiv: e2 ? lt(V("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv };
  }, _connectDatepicker: function(t2, e2) {
    var i2 = V(t2);
    e2.append = V([]), e2.trigger = V([]), i2.hasClass(this.markerClassName) || (this._attachments(i2, e2), i2.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(e2), V.data(t2, "datepicker", e2), e2.settings.disabled && this._disableDatepicker(t2));
  }, _attachments: function(t2, e2) {
    var i2, s2 = this._get(e2, "appendText"), n2 = this._get(e2, "isRTL");
    e2.append && e2.append.remove(), s2 && (e2.append = V("<span>").addClass(this._appendClass).text(s2), t2[n2 ? "before" : "after"](e2.append)), t2.off("focus", this._showDatepicker), e2.trigger && e2.trigger.remove(), "focus" !== (s2 = this._get(e2, "showOn")) && "both" !== s2 || t2.on("focus", this._showDatepicker), "button" !== s2 && "both" !== s2 || (s2 = this._get(e2, "buttonText"), i2 = this._get(e2, "buttonImage"), this._get(e2, "buttonImageOnly") ? e2.trigger = V("<img>").addClass(this._triggerClass).attr({ src: i2, alt: s2, title: s2 }) : (e2.trigger = V("<button type='button'>").addClass(this._triggerClass), i2 ? e2.trigger.html(V("<img>").attr({ src: i2, alt: s2, title: s2 })) : e2.trigger.text(s2)), t2[n2 ? "before" : "after"](e2.trigger), e2.trigger.on("click", function() {
      return V.datepicker._datepickerShowing && V.datepicker._lastInput === t2[0] ? V.datepicker._hideDatepicker() : (V.datepicker._datepickerShowing && V.datepicker._lastInput !== t2[0] && V.datepicker._hideDatepicker(), V.datepicker._showDatepicker(t2[0])), false;
    }));
  }, _autoSize: function(t2) {
    var e2, i2, s2, n2, o2, a2;
    this._get(t2, "autoSize") && !t2.inline && (o2 = new Date(2009, 11, 20), (a2 = this._get(t2, "dateFormat")).match(/[DM]/) && (o2.setMonth((e2 = function(t3) {
      for (n2 = s2 = i2 = 0; n2 < t3.length; n2++) t3[n2].length > i2 && (i2 = t3[n2].length, s2 = n2);
      return s2;
    })(this._get(t2, a2.match(/MM/) ? "monthNames" : "monthNamesShort"))), o2.setDate(e2(this._get(t2, a2.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o2.getDay())), t2.input.attr("size", this._formatDate(t2, o2).length));
  }, _inlineDatepicker: function(t2, e2) {
    var i2 = V(t2);
    i2.hasClass(this.markerClassName) || (i2.addClass(this.markerClassName).append(e2.dpDiv), V.data(t2, "datepicker", e2), this._setDate(e2, this._getDefaultDate(e2), true), this._updateDatepicker(e2), this._updateAlternate(e2), e2.settings.disabled && this._disableDatepicker(t2), e2.dpDiv.css("display", "block"));
  }, _dialogDatepicker: function(t2, e2, i2, s2, n2) {
    var o2, a2 = this._dialogInst;
    return a2 || (this.uuid += 1, o2 = "dp" + this.uuid, this._dialogInput = V("<input type='text' id='" + o2 + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), V("body").append(this._dialogInput), (a2 = this._dialogInst = this._newInst(this._dialogInput, false)).settings = {}, V.data(this._dialogInput[0], "datepicker", a2)), H(a2.settings, s2 || {}), e2 = e2 && e2.constructor === Date ? this._formatDate(a2, e2) : e2, this._dialogInput.val(e2), this._pos = n2 ? n2.length ? n2 : [n2.pageX, n2.pageY] : null, this._pos || (o2 = document.documentElement.clientWidth, s2 = document.documentElement.clientHeight, e2 = document.documentElement.scrollLeft || document.body.scrollLeft, n2 = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [o2 / 2 - 100 + e2, s2 / 2 - 150 + n2]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), a2.settings.onSelect = i2, this._inDialog = true, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), V.blockUI && V.blockUI(this.dpDiv), V.data(this._dialogInput[0], "datepicker", a2), this;
  }, _destroyDatepicker: function(t2) {
    var e2, i2 = V(t2), s2 = V.data(t2, "datepicker");
    i2.hasClass(this.markerClassName) && (e2 = t2.nodeName.toLowerCase(), V.removeData(t2, "datepicker"), "input" === e2 ? (s2.append.remove(), s2.trigger.remove(), i2.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== e2 && "span" !== e2 || i2.removeClass(this.markerClassName).empty(), S === s2) && (S = null, this._curInst = null);
  }, _enableDatepicker: function(e2) {
    var t2, i2 = V(e2), s2 = V.data(e2, "datepicker");
    i2.hasClass(this.markerClassName) && ("input" === (t2 = e2.nodeName.toLowerCase()) ? (e2.disabled = false, s2.trigger.filter("button").each(function() {
      this.disabled = false;
    }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : "div" !== t2 && "span" !== t2 || ((s2 = i2.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), s2.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)), this._disabledInputs = V.map(this._disabledInputs, function(t3) {
      return t3 === e2 ? null : t3;
    }));
  }, _disableDatepicker: function(e2) {
    var t2, i2 = V(e2), s2 = V.data(e2, "datepicker");
    i2.hasClass(this.markerClassName) && ("input" === (t2 = e2.nodeName.toLowerCase()) ? (e2.disabled = true, s2.trigger.filter("button").each(function() {
      this.disabled = true;
    }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : "div" !== t2 && "span" !== t2 || ((s2 = i2.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), s2.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)), this._disabledInputs = V.map(this._disabledInputs, function(t3) {
      return t3 === e2 ? null : t3;
    }), this._disabledInputs[this._disabledInputs.length] = e2);
  }, _isDisabledDatepicker: function(t2) {
    if (t2) {
      for (var e2 = 0; e2 < this._disabledInputs.length; e2++) if (this._disabledInputs[e2] === t2) return true;
    }
    return false;
  }, _getInst: function(t2) {
    try {
      return V.data(t2, "datepicker");
    } catch (t3) {
      throw "Missing instance data for this datepicker";
    }
  }, _optionDatepicker: function(t2, e2, i2) {
    var s2, n2, o2 = this._getInst(t2);
    if (2 === arguments.length && "string" == typeof e2) return "defaults" === e2 ? V.extend({}, V.datepicker._defaults) : o2 ? "all" === e2 ? V.extend({}, o2.settings) : this._get(o2, e2) : null;
    s2 = e2 || {}, "string" == typeof e2 && ((s2 = {})[e2] = i2), o2 && (this._curInst === o2 && this._hideDatepicker(), e2 = this._getDateDatepicker(t2, true), i2 = this._getMinMaxDate(o2, "min"), n2 = this._getMinMaxDate(o2, "max"), H(o2.settings, s2), null !== i2 && void 0 !== s2.dateFormat && void 0 === s2.minDate && (o2.settings.minDate = this._formatDate(o2, i2)), null !== n2 && void 0 !== s2.dateFormat && void 0 === s2.maxDate && (o2.settings.maxDate = this._formatDate(o2, n2)), "disabled" in s2 && (s2.disabled ? this._disableDatepicker(t2) : this._enableDatepicker(t2)), this._attachments(V(t2), o2), this._autoSize(o2), this._setDate(o2, e2), this._updateAlternate(o2), this._updateDatepicker(o2));
  }, _changeDatepicker: function(t2, e2, i2) {
    this._optionDatepicker(t2, e2, i2);
  }, _refreshDatepicker: function(t2) {
    t2 = this._getInst(t2);
    t2 && this._updateDatepicker(t2);
  }, _setDateDatepicker: function(t2, e2) {
    t2 = this._getInst(t2);
    t2 && (this._setDate(t2, e2), this._updateDatepicker(t2), this._updateAlternate(t2));
  }, _getDateDatepicker: function(t2, e2) {
    t2 = this._getInst(t2);
    return t2 && !t2.inline && this._setDateFromField(t2, e2), t2 ? this._getDate(t2) : null;
  }, _doKeyDown: function(t2) {
    var e2, i2, s2 = V.datepicker._getInst(t2.target), n2 = true, o2 = s2.dpDiv.is(".ui-datepicker-rtl");
    if (s2._keyEvent = true, V.datepicker._datepickerShowing) switch (t2.keyCode) {
      case 9:
        V.datepicker._hideDatepicker(), n2 = false;
        break;
      case 13:
        return (i2 = V("td." + V.datepicker._dayOverClass + ":not(." + V.datepicker._currentClass + ")", s2.dpDiv))[0] && V.datepicker._selectDay(t2.target, s2.selectedMonth, s2.selectedYear, i2[0]), (i2 = V.datepicker._get(s2, "onSelect")) ? (e2 = V.datepicker._formatDate(s2), i2.apply(s2.input ? s2.input[0] : null, [e2, s2])) : V.datepicker._hideDatepicker(), false;
      case 27:
        V.datepicker._hideDatepicker();
        break;
      case 33:
        V.datepicker._adjustDate(t2.target, t2.ctrlKey ? -V.datepicker._get(s2, "stepBigMonths") : -V.datepicker._get(s2, "stepMonths"), "M");
        break;
      case 34:
        V.datepicker._adjustDate(t2.target, t2.ctrlKey ? +V.datepicker._get(s2, "stepBigMonths") : +V.datepicker._get(s2, "stepMonths"), "M");
        break;
      case 35:
        (t2.ctrlKey || t2.metaKey) && V.datepicker._clearDate(t2.target), n2 = t2.ctrlKey || t2.metaKey;
        break;
      case 36:
        (t2.ctrlKey || t2.metaKey) && V.datepicker._gotoToday(t2.target), n2 = t2.ctrlKey || t2.metaKey;
        break;
      case 37:
        (t2.ctrlKey || t2.metaKey) && V.datepicker._adjustDate(t2.target, o2 ? 1 : -1, "D"), n2 = t2.ctrlKey || t2.metaKey, t2.originalEvent.altKey && V.datepicker._adjustDate(t2.target, t2.ctrlKey ? -V.datepicker._get(s2, "stepBigMonths") : -V.datepicker._get(s2, "stepMonths"), "M");
        break;
      case 38:
        (t2.ctrlKey || t2.metaKey) && V.datepicker._adjustDate(t2.target, -7, "D"), n2 = t2.ctrlKey || t2.metaKey;
        break;
      case 39:
        (t2.ctrlKey || t2.metaKey) && V.datepicker._adjustDate(t2.target, o2 ? -1 : 1, "D"), n2 = t2.ctrlKey || t2.metaKey, t2.originalEvent.altKey && V.datepicker._adjustDate(t2.target, t2.ctrlKey ? +V.datepicker._get(s2, "stepBigMonths") : +V.datepicker._get(s2, "stepMonths"), "M");
        break;
      case 40:
        (t2.ctrlKey || t2.metaKey) && V.datepicker._adjustDate(t2.target, 7, "D"), n2 = t2.ctrlKey || t2.metaKey;
        break;
      default:
        n2 = false;
    }
    else 36 === t2.keyCode && t2.ctrlKey ? V.datepicker._showDatepicker(this) : n2 = false;
    n2 && (t2.preventDefault(), t2.stopPropagation());
  }, _doKeyPress: function(t2) {
    var e2, i2 = V.datepicker._getInst(t2.target);
    if (V.datepicker._get(i2, "constrainInput")) return i2 = V.datepicker._possibleChars(V.datepicker._get(i2, "dateFormat")), e2 = String.fromCharCode(null == t2.charCode ? t2.keyCode : t2.charCode), t2.ctrlKey || t2.metaKey || e2 < " " || !i2 || -1 < i2.indexOf(e2);
  }, _doKeyUp: function(t2) {
    t2 = V.datepicker._getInst(t2.target);
    if (t2.input.val() !== t2.lastVal) try {
      V.datepicker.parseDate(V.datepicker._get(t2, "dateFormat"), t2.input ? t2.input.val() : null, V.datepicker._getFormatConfig(t2)) && (V.datepicker._setDateFromField(t2), V.datepicker._updateAlternate(t2), V.datepicker._updateDatepicker(t2));
    } catch (t3) {
    }
    return true;
  }, _showDatepicker: function(t2) {
    var e2, i2, s2, n2;
    "input" !== (t2 = t2.target || t2).nodeName.toLowerCase() && (t2 = V("input", t2.parentNode)[0]), V.datepicker._isDisabledDatepicker(t2) || V.datepicker._lastInput === t2 || (n2 = V.datepicker._getInst(t2), V.datepicker._curInst && V.datepicker._curInst !== n2 && (V.datepicker._curInst.dpDiv.stop(true, true), n2) && V.datepicker._datepickerShowing && V.datepicker._hideDatepicker(V.datepicker._curInst.input[0]), false === (i2 = (i2 = V.datepicker._get(n2, "beforeShow")) ? i2.apply(t2, [t2, n2]) : {})) || (H(n2.settings, i2), n2.lastVal = null, V.datepicker._lastInput = t2, V.datepicker._setDateFromField(n2), V.datepicker._inDialog && (t2.value = ""), V.datepicker._pos || (V.datepicker._pos = V.datepicker._findPos(t2), V.datepicker._pos[1] += t2.offsetHeight), e2 = false, V(t2).parents().each(function() {
      return !(e2 |= "fixed" === V(this).css("position"));
    }), i2 = { left: V.datepicker._pos[0], top: V.datepicker._pos[1] }, V.datepicker._pos = null, n2.dpDiv.empty(), n2.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), V.datepicker._updateDatepicker(n2), i2 = V.datepicker._checkOffset(n2, i2, e2), n2.dpDiv.css({ position: V.datepicker._inDialog && V.blockUI ? "static" : e2 ? "fixed" : "absolute", display: "none", left: i2.left + "px", top: i2.top + "px" }), n2.inline) || (i2 = V.datepicker._get(n2, "showAnim"), s2 = V.datepicker._get(n2, "duration"), n2.dpDiv.css("z-index", function(t3) {
      for (var e3; t3.length && t3[0] !== document; ) {
        if (("absolute" === (e3 = t3.css("position")) || "relative" === e3 || "fixed" === e3) && (e3 = parseInt(t3.css("zIndex"), 10), !isNaN(e3)) && 0 !== e3) return e3;
        t3 = t3.parent();
      }
      return 0;
    }(V(t2)) + 1), V.datepicker._datepickerShowing = true, V.effects && V.effects.effect[i2] ? n2.dpDiv.show(i2, V.datepicker._get(n2, "showOptions"), s2) : n2.dpDiv[i2 || "show"](i2 ? s2 : null), V.datepicker._shouldFocusInput(n2) && n2.input.trigger("focus"), V.datepicker._curInst = n2);
  }, _updateDatepicker: function(t2) {
    this.maxRows = 4, (S = t2).dpDiv.empty().append(this._generateHTML(t2)), this._attachHandlers(t2);
    var e2, i2 = this._getNumberOfMonths(t2), s2 = i2[1], n2 = t2.dpDiv.find("." + this._dayOverClass + " a"), o2 = V.datepicker._get(t2, "onUpdateDatepicker");
    0 < n2.length && ht.apply(n2.get(0)), t2.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < s2 && t2.dpDiv.addClass("ui-datepicker-multi-" + s2).css("width", 17 * s2 + "em"), t2.dpDiv[(1 !== i2[0] || 1 !== i2[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t2.dpDiv[(this._get(t2, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t2 === V.datepicker._curInst && V.datepicker._datepickerShowing && V.datepicker._shouldFocusInput(t2) && t2.input.trigger("focus"), t2.yearshtml && (e2 = t2.yearshtml, setTimeout(function() {
      e2 === t2.yearshtml && t2.yearshtml && t2.dpDiv.find("select.ui-datepicker-year").first().replaceWith(t2.yearshtml), e2 = t2.yearshtml = null;
    }, 0)), o2 && o2.apply(t2.input ? t2.input[0] : null, [t2]);
  }, _shouldFocusInput: function(t2) {
    return t2.input && t2.input.is(":visible") && !t2.input.is(":disabled") && !t2.input.is(":focus");
  }, _checkOffset: function(t2, e2, i2) {
    var s2 = t2.dpDiv.outerWidth(), n2 = t2.dpDiv.outerHeight(), o2 = t2.input ? t2.input.outerWidth() : 0, a2 = t2.input ? t2.input.outerHeight() : 0, r2 = document.documentElement.clientWidth + (i2 ? 0 : V(document).scrollLeft()), l2 = document.documentElement.clientHeight + (i2 ? 0 : V(document).scrollTop());
    return e2.left -= this._get(t2, "isRTL") ? s2 - o2 : 0, e2.left -= i2 && e2.left === t2.input.offset().left ? V(document).scrollLeft() : 0, e2.top -= i2 && e2.top === t2.input.offset().top + a2 ? V(document).scrollTop() : 0, e2.left -= Math.min(e2.left, e2.left + s2 > r2 && s2 < r2 ? Math.abs(e2.left + s2 - r2) : 0), e2.top -= Math.min(e2.top, e2.top + n2 > l2 && n2 < l2 ? Math.abs(n2 + a2) : 0), e2;
  }, _findPos: function(t2) {
    for (var e2 = this._getInst(t2), i2 = this._get(e2, "isRTL"); t2 && ("hidden" === t2.type || 1 !== t2.nodeType || V.expr.pseudos.hidden(t2)); ) t2 = t2[i2 ? "previousSibling" : "nextSibling"];
    return [(e2 = V(t2).offset()).left, e2.top];
  }, _hideDatepicker: function(t2) {
    var e2, i2, s2 = this._curInst;
    !s2 || t2 && s2 !== V.data(t2, "datepicker") || this._datepickerShowing && (t2 = this._get(s2, "showAnim"), i2 = this._get(s2, "duration"), e2 = function() {
      V.datepicker._tidyDialog(s2);
    }, V.effects && (V.effects.effect[t2] || V.effects[t2]) ? s2.dpDiv.hide(t2, V.datepicker._get(s2, "showOptions"), i2, e2) : s2.dpDiv["slideDown" === t2 ? "slideUp" : "fadeIn" === t2 ? "fadeOut" : "hide"](t2 ? i2 : null, e2), t2 || e2(), this._datepickerShowing = false, (i2 = this._get(s2, "onClose")) && i2.apply(s2.input ? s2.input[0] : null, [s2.input ? s2.input.val() : "", s2]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), V.blockUI) && (V.unblockUI(), V("body").append(this.dpDiv)), this._inDialog = false);
  }, _tidyDialog: function(t2) {
    t2.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
  }, _checkExternalClick: function(t2) {
    var e2;
    V.datepicker._curInst && (t2 = V(t2.target), e2 = V.datepicker._getInst(t2[0]), !(t2[0].id === V.datepicker._mainDivId || 0 !== t2.parents("#" + V.datepicker._mainDivId).length || t2.hasClass(V.datepicker.markerClassName) || t2.closest("." + V.datepicker._triggerClass).length || !V.datepicker._datepickerShowing || V.datepicker._inDialog && V.blockUI) || t2.hasClass(V.datepicker.markerClassName) && V.datepicker._curInst !== e2) && V.datepicker._hideDatepicker();
  }, _adjustDate: function(t2, e2, i2) {
    var t2 = V(t2), s2 = this._getInst(t2[0]);
    this._isDisabledDatepicker(t2[0]) || (this._adjustInstDate(s2, e2, i2), this._updateDatepicker(s2));
  }, _gotoToday: function(t2) {
    var e2, t2 = V(t2), i2 = this._getInst(t2[0]);
    this._get(i2, "gotoCurrent") && i2.currentDay ? (i2.selectedDay = i2.currentDay, i2.drawMonth = i2.selectedMonth = i2.currentMonth, i2.drawYear = i2.selectedYear = i2.currentYear) : (e2 = /* @__PURE__ */ new Date(), i2.selectedDay = e2.getDate(), i2.drawMonth = i2.selectedMonth = e2.getMonth(), i2.drawYear = i2.selectedYear = e2.getFullYear()), this._notifyChange(i2), this._adjustDate(t2);
  }, _selectMonthYear: function(t2, e2, i2) {
    var t2 = V(t2), s2 = this._getInst(t2[0]);
    s2["selected" + ("M" === i2 ? "Month" : "Year")] = s2["draw" + ("M" === i2 ? "Month" : "Year")] = parseInt(e2.options[e2.selectedIndex].value, 10), this._notifyChange(s2), this._adjustDate(t2);
  }, _selectDay: function(t2, e2, i2, s2) {
    var n2 = V(t2);
    V(s2).hasClass(this._unselectableClass) || this._isDisabledDatepicker(n2[0]) || ((n2 = this._getInst(n2[0])).selectedDay = n2.currentDay = parseInt(V("a", s2).attr("data-date")), n2.selectedMonth = n2.currentMonth = e2, n2.selectedYear = n2.currentYear = i2, this._selectDate(t2, this._formatDate(n2, n2.currentDay, n2.currentMonth, n2.currentYear)));
  }, _clearDate: function(t2) {
    t2 = V(t2);
    this._selectDate(t2, "");
  }, _selectDate: function(t2, e2) {
    var i2, t2 = V(t2), t2 = this._getInst(t2[0]);
    e2 = null != e2 ? e2 : this._formatDate(t2), t2.input && t2.input.val(e2), this._updateAlternate(t2), (i2 = this._get(t2, "onSelect")) ? i2.apply(t2.input ? t2.input[0] : null, [e2, t2]) : t2.input && t2.input.trigger("change"), t2.inline ? this._updateDatepicker(t2) : (this._hideDatepicker(), this._lastInput = t2.input[0], "object" != typeof t2.input[0] && t2.input.trigger("focus"), this._lastInput = null);
  }, _updateAlternate: function(t2) {
    var e2, i2, s2 = this._get(t2, "altField");
    s2 && (i2 = this._get(t2, "altFormat") || this._get(t2, "dateFormat"), e2 = this._getDate(t2), i2 = this.formatDate(i2, e2, this._getFormatConfig(t2)), V(document).find(s2).val(i2));
  }, noWeekends: function(t2) {
    t2 = t2.getDay();
    return [0 < t2 && t2 < 6, ""];
  }, iso8601Week: function(t2) {
    var e2, t2 = new Date(t2.getTime());
    return t2.setDate(t2.getDate() + 4 - (t2.getDay() || 7)), e2 = t2.getTime(), t2.setMonth(0), t2.setDate(1), Math.floor(Math.round((e2 - t2) / 864e5) / 7) + 1;
  }, parseDate: function(e2, n2, t2) {
    if (null == e2 || null == n2) throw "Invalid arguments";
    if ("" === (n2 = "object" == typeof n2 ? n2.toString() : n2 + "")) return null;
    for (var i2, s2, o2 = 0, a2 = (t2 ? t2.shortYearCutoff : null) || this._defaults.shortYearCutoff, a2 = "string" != typeof a2 ? a2 : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(a2, 10), r2 = (t2 ? t2.dayNamesShort : null) || this._defaults.dayNamesShort, l2 = (t2 ? t2.dayNames : null) || this._defaults.dayNames, h2 = (t2 ? t2.monthNamesShort : null) || this._defaults.monthNamesShort, c2 = (t2 ? t2.monthNames : null) || this._defaults.monthNames, u2 = -1, d2 = -1, p2 = -1, f2 = -1, g2 = false, m3 = function(t3) {
      t3 = y2 + 1 < e2.length && e2.charAt(y2 + 1) === t3;
      return t3 && y2++, t3;
    }, _2 = function(t3) {
      var e3 = m3(t3), e3 = "@" === t3 ? 14 : "!" === t3 ? 20 : "y" === t3 && e3 ? 4 : "o" === t3 ? 3 : 2, t3 = new RegExp("^\\d{" + ("y" === t3 ? e3 : 1) + "," + e3 + "}"), e3 = n2.substring(o2).match(t3);
      if (e3) return o2 += e3[0].length, parseInt(e3[0], 10);
      throw "Missing number at position " + o2;
    }, v2 = function(t3, e3, i3) {
      var s3 = -1, t3 = V.map(m3(t3) ? i3 : e3, function(t4, e4) {
        return [[e4, t4]];
      }).sort(function(t4, e4) {
        return -(t4[1].length - e4[1].length);
      });
      if (V.each(t3, function(t4, e4) {
        var i4 = e4[1];
        if (n2.substr(o2, i4.length).toLowerCase() === i4.toLowerCase()) return s3 = e4[0], o2 += i4.length, false;
      }), -1 !== s3) return s3 + 1;
      throw "Unknown name at position " + o2;
    }, b2 = function() {
      if (n2.charAt(o2) !== e2.charAt(y2)) throw "Unexpected literal at position " + o2;
      o2++;
    }, y2 = 0; y2 < e2.length; y2++) if (g2) "'" !== e2.charAt(y2) || m3("'") ? b2() : g2 = false;
    else switch (e2.charAt(y2)) {
      case "d":
        p2 = _2("d");
        break;
      case "D":
        v2("D", r2, l2);
        break;
      case "o":
        f2 = _2("o");
        break;
      case "m":
        d2 = _2("m");
        break;
      case "M":
        d2 = v2("M", h2, c2);
        break;
      case "y":
        u2 = _2("y");
        break;
      case "@":
        u2 = (s2 = new Date(_2("@"))).getFullYear(), d2 = s2.getMonth() + 1, p2 = s2.getDate();
        break;
      case "!":
        u2 = (s2 = new Date((_2("!") - this._ticksTo1970) / 1e4)).getFullYear(), d2 = s2.getMonth() + 1, p2 = s2.getDate();
        break;
      case "'":
        m3("'") ? b2() : g2 = true;
        break;
      default:
        b2();
    }
    if (o2 < n2.length && (t2 = n2.substr(o2), !/^\s+/.test(t2))) throw "Extra/unparsed characters found in date: " + t2;
    if (-1 === u2 ? u2 = (/* @__PURE__ */ new Date()).getFullYear() : u2 < 100 && (u2 += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (u2 <= a2 ? 0 : -100)), -1 < f2) for (d2 = 1, p2 = f2; ; ) {
      if (p2 <= (i2 = this._getDaysInMonth(u2, d2 - 1))) break;
      d2++, p2 -= i2;
    }
    if ((s2 = this._daylightSavingAdjust(new Date(u2, d2 - 1, p2))).getFullYear() !== u2 || s2.getMonth() + 1 !== d2 || s2.getDate() !== p2) throw "Invalid date";
    return s2;
  }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7, formatDate: function(e2, t2, i2) {
    if (!t2) return "";
    function s2(t3, e3, i3) {
      var s3 = "" + e3;
      if (c2(t3)) for (; s3.length < i3; ) s3 = "0" + s3;
      return s3;
    }
    function n2(t3, e3, i3, s3) {
      return (c2(t3) ? s3 : i3)[e3];
    }
    var o2, a2 = (i2 ? i2.dayNamesShort : null) || this._defaults.dayNamesShort, r2 = (i2 ? i2.dayNames : null) || this._defaults.dayNames, l2 = (i2 ? i2.monthNamesShort : null) || this._defaults.monthNamesShort, h2 = (i2 ? i2.monthNames : null) || this._defaults.monthNames, c2 = function(t3) {
      t3 = o2 + 1 < e2.length && e2.charAt(o2 + 1) === t3;
      return t3 && o2++, t3;
    }, u2 = "", d2 = false;
    if (t2) for (o2 = 0; o2 < e2.length; o2++) if (d2) "'" !== e2.charAt(o2) || c2("'") ? u2 += e2.charAt(o2) : d2 = false;
    else switch (e2.charAt(o2)) {
      case "d":
        u2 += s2("d", t2.getDate(), 2);
        break;
      case "D":
        u2 += n2("D", t2.getDay(), a2, r2);
        break;
      case "o":
        u2 += s2("o", Math.round((new Date(t2.getFullYear(), t2.getMonth(), t2.getDate()).getTime() - new Date(t2.getFullYear(), 0, 0).getTime()) / 864e5), 3);
        break;
      case "m":
        u2 += s2("m", t2.getMonth() + 1, 2);
        break;
      case "M":
        u2 += n2("M", t2.getMonth(), l2, h2);
        break;
      case "y":
        u2 += c2("y") ? t2.getFullYear() : (t2.getFullYear() % 100 < 10 ? "0" : "") + t2.getFullYear() % 100;
        break;
      case "@":
        u2 += t2.getTime();
        break;
      case "!":
        u2 += 1e4 * t2.getTime() + this._ticksTo1970;
        break;
      case "'":
        c2("'") ? u2 += "'" : d2 = true;
        break;
      default:
        u2 += e2.charAt(o2);
    }
    return u2;
  }, _possibleChars: function(e2) {
    for (var t2 = "", i2 = false, s2 = function(t3) {
      t3 = n2 + 1 < e2.length && e2.charAt(n2 + 1) === t3;
      return t3 && n2++, t3;
    }, n2 = 0; n2 < e2.length; n2++) if (i2) "'" !== e2.charAt(n2) || s2("'") ? t2 += e2.charAt(n2) : i2 = false;
    else switch (e2.charAt(n2)) {
      case "d":
      case "m":
      case "y":
      case "@":
        t2 += "0123456789";
        break;
      case "D":
      case "M":
        return null;
      case "'":
        s2("'") ? t2 += "'" : i2 = true;
        break;
      default:
        t2 += e2.charAt(n2);
    }
    return t2;
  }, _get: function(t2, e2) {
    return (void 0 !== t2.settings[e2] ? t2.settings : this._defaults)[e2];
  }, _setDateFromField: function(t2, e2) {
    if (t2.input.val() !== t2.lastVal) {
      var i2 = this._get(t2, "dateFormat"), s2 = t2.lastVal = t2.input ? t2.input.val() : null, n2 = this._getDefaultDate(t2), o2 = n2, a2 = this._getFormatConfig(t2);
      try {
        o2 = this.parseDate(i2, s2, a2) || n2;
      } catch (t3) {
        s2 = e2 ? "" : s2;
      }
      t2.selectedDay = o2.getDate(), t2.drawMonth = t2.selectedMonth = o2.getMonth(), t2.drawYear = t2.selectedYear = o2.getFullYear(), t2.currentDay = s2 ? o2.getDate() : 0, t2.currentMonth = s2 ? o2.getMonth() : 0, t2.currentYear = s2 ? o2.getFullYear() : 0, this._adjustInstDate(t2);
    }
  }, _getDefaultDate: function(t2) {
    return this._restrictMinMax(t2, this._determineDate(t2, this._get(t2, "defaultDate"), /* @__PURE__ */ new Date()));
  }, _determineDate: function(r2, t2, e2) {
    var i2, s2 = null == t2 || "" === t2 ? e2 : "string" == typeof t2 ? function(t3) {
      try {
        return V.datepicker.parseDate(V.datepicker._get(r2, "dateFormat"), t3, V.datepicker._getFormatConfig(r2));
      } catch (t4) {
      }
      for (var e3 = (t3.toLowerCase().match(/^c/) ? V.datepicker._getDate(r2) : null) || /* @__PURE__ */ new Date(), i3 = e3.getFullYear(), s3 = e3.getMonth(), n2 = e3.getDate(), o2 = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, a2 = o2.exec(t3); a2; ) {
        switch (a2[2] || "d") {
          case "d":
          case "D":
            n2 += parseInt(a2[1], 10);
            break;
          case "w":
          case "W":
            n2 += 7 * parseInt(a2[1], 10);
            break;
          case "m":
          case "M":
            s3 += parseInt(a2[1], 10), n2 = Math.min(n2, V.datepicker._getDaysInMonth(i3, s3));
            break;
          case "y":
          case "Y":
            i3 += parseInt(a2[1], 10), n2 = Math.min(n2, V.datepicker._getDaysInMonth(i3, s3));
        }
        a2 = o2.exec(t3);
      }
      return new Date(i3, s3, n2);
    }(t2) : "number" == typeof t2 ? isNaN(t2) ? e2 : (s2 = t2, (i2 = /* @__PURE__ */ new Date()).setDate(i2.getDate() + s2), i2) : new Date(t2.getTime());
    return (s2 = s2 && "Invalid Date" === s2.toString() ? e2 : s2) && (s2.setHours(0), s2.setMinutes(0), s2.setSeconds(0), s2.setMilliseconds(0)), this._daylightSavingAdjust(s2);
  }, _daylightSavingAdjust: function(t2) {
    return t2 ? (t2.setHours(12 < t2.getHours() ? t2.getHours() + 2 : 0), t2) : null;
  }, _setDate: function(t2, e2, i2) {
    var s2 = !e2, n2 = t2.selectedMonth, o2 = t2.selectedYear, e2 = this._restrictMinMax(t2, this._determineDate(t2, e2, /* @__PURE__ */ new Date()));
    t2.selectedDay = t2.currentDay = e2.getDate(), t2.drawMonth = t2.selectedMonth = t2.currentMonth = e2.getMonth(), t2.drawYear = t2.selectedYear = t2.currentYear = e2.getFullYear(), n2 === t2.selectedMonth && o2 === t2.selectedYear || i2 || this._notifyChange(t2), this._adjustInstDate(t2), t2.input && t2.input.val(s2 ? "" : this._formatDate(t2));
  }, _getDate: function(t2) {
    return !t2.currentYear || t2.input && "" === t2.input.val() ? null : this._daylightSavingAdjust(new Date(t2.currentYear, t2.currentMonth, t2.currentDay));
  }, _attachHandlers: function(t2) {
    var e2 = this._get(t2, "stepMonths"), i2 = "#" + t2.id.replace(/\\\\/g, "\\");
    t2.dpDiv.find("[data-handler]").map(function() {
      var t3 = { prev: function() {
        V.datepicker._adjustDate(i2, -e2, "M");
      }, next: function() {
        V.datepicker._adjustDate(i2, +e2, "M");
      }, hide: function() {
        V.datepicker._hideDatepicker();
      }, today: function() {
        V.datepicker._gotoToday(i2);
      }, selectDay: function() {
        return V.datepicker._selectDay(i2, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), false;
      }, selectMonth: function() {
        return V.datepicker._selectMonthYear(i2, this, "M"), false;
      }, selectYear: function() {
        return V.datepicker._selectMonthYear(i2, this, "Y"), false;
      } };
      V(this).on(this.getAttribute("data-event"), t3[this.getAttribute("data-handler")]);
    });
  }, _generateHTML: function(t2) {
    var e2, i2, s2, n2, o2, E2, W2, F2, L2, a2, r2, R2, l2, h2, c2, u2, d2, p2, f2, g2, m3, _2, Y2, v2, b2, B2, y2, j2, q2, w2, x2, k2, C2 = /* @__PURE__ */ new Date(), K2 = this._daylightSavingAdjust(new Date(C2.getFullYear(), C2.getMonth(), C2.getDate())), D2 = this._get(t2, "isRTL"), C2 = this._get(t2, "showButtonPanel"), I2 = this._get(t2, "hideIfNoPrevNext"), T2 = this._get(t2, "navigationAsDateFormat"), P2 = this._getNumberOfMonths(t2), M2 = this._get(t2, "showCurrentAtPos"), S2 = this._get(t2, "stepMonths"), U2 = 1 !== P2[0] || 1 !== P2[1], H2 = this._daylightSavingAdjust(t2.currentDay ? new Date(t2.currentYear, t2.currentMonth, t2.currentDay) : new Date(9999, 9, 9)), z2 = this._getMinMaxDate(t2, "min"), A2 = this._getMinMaxDate(t2, "max"), O2 = t2.drawMonth - M2, N2 = t2.drawYear;
    if (O2 < 0 && (O2 += 12, N2--), A2) for (e2 = this._daylightSavingAdjust(new Date(A2.getFullYear(), A2.getMonth() - P2[0] * P2[1] + 1, A2.getDate())), e2 = z2 && e2 < z2 ? z2 : e2; this._daylightSavingAdjust(new Date(N2, O2, 1)) > e2; ) --O2 < 0 && (O2 = 11, N2--);
    for (t2.drawMonth = O2, t2.drawYear = N2, M2 = this._get(t2, "prevText"), M2 = T2 ? this.formatDate(M2, this._daylightSavingAdjust(new Date(N2, O2 - S2, 1)), this._getFormatConfig(t2)) : M2, i2 = this._canAdjustMonth(t2, -1, N2, O2) ? V("<a>").attr({ class: "ui-datepicker-prev ui-corner-all", "data-handler": "prev", "data-event": "click", title: M2 }).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (D2 ? "e" : "w")).text(M2))[0].outerHTML : I2 ? "" : V("<a>").attr({ class: "ui-datepicker-prev ui-corner-all ui-state-disabled", title: M2 }).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (D2 ? "e" : "w")).text(M2))[0].outerHTML, M2 = this._get(t2, "nextText"), M2 = T2 ? this.formatDate(M2, this._daylightSavingAdjust(new Date(N2, O2 + S2, 1)), this._getFormatConfig(t2)) : M2, s2 = this._canAdjustMonth(t2, 1, N2, O2) ? V("<a>").attr({ class: "ui-datepicker-next ui-corner-all", "data-handler": "next", "data-event": "click", title: M2 }).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (D2 ? "w" : "e")).text(M2))[0].outerHTML : I2 ? "" : V("<a>").attr({ class: "ui-datepicker-next ui-corner-all ui-state-disabled", title: M2 }).append(V("<span>").attr("class", "ui-icon ui-icon-circle-triangle-" + (D2 ? "w" : "e")).text(M2))[0].outerHTML, S2 = this._get(t2, "currentText"), I2 = this._get(t2, "gotoCurrent") && t2.currentDay ? H2 : K2, S2 = T2 ? this.formatDate(S2, I2, this._getFormatConfig(t2)) : S2, M2 = "", t2.inline || (M2 = V("<button>").attr({ type: "button", class: "ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all", "data-handler": "hide", "data-event": "click" }).text(this._get(t2, "closeText"))[0].outerHTML), T2 = "", C2 && (T2 = V("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(D2 ? M2 : "").append(this._isInRange(t2, I2) ? V("<button>").attr({ type: "button", class: "ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all", "data-handler": "today", "data-event": "click" }).text(S2) : "").append(D2 ? "" : M2)[0].outerHTML), n2 = parseInt(this._get(t2, "firstDay"), 10), n2 = isNaN(n2) ? 0 : n2, o2 = this._get(t2, "showWeek"), E2 = this._get(t2, "dayNames"), W2 = this._get(t2, "dayNamesMin"), F2 = this._get(t2, "monthNames"), L2 = this._get(t2, "monthNamesShort"), a2 = this._get(t2, "beforeShowDay"), r2 = this._get(t2, "showOtherMonths"), R2 = this._get(t2, "selectOtherMonths"), l2 = this._getDefaultDate(t2), h2 = "", u2 = 0; u2 < P2[0]; u2++) {
      for (d2 = "", this.maxRows = 4, p2 = 0; p2 < P2[1]; p2++) {
        if (f2 = this._daylightSavingAdjust(new Date(N2, O2, t2.selectedDay)), g2 = " ui-corner-all", m3 = "", U2) {
          if (m3 += "<div class='ui-datepicker-group", 1 < P2[1]) switch (p2) {
            case 0:
              m3 += " ui-datepicker-group-first", g2 = " ui-corner-" + (D2 ? "right" : "left");
              break;
            case P2[1] - 1:
              m3 += " ui-datepicker-group-last", g2 = " ui-corner-" + (D2 ? "left" : "right");
              break;
            default:
              m3 += " ui-datepicker-group-middle", g2 = "";
          }
          m3 += "'>";
        }
        for (m3 += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + g2 + "'>" + (/all|left/.test(g2) && 0 === u2 ? D2 ? s2 : i2 : "") + (/all|right/.test(g2) && 0 === u2 ? D2 ? i2 : s2 : "") + this._generateMonthYearHeader(t2, O2, N2, z2, A2, 0 < u2 || 0 < p2, F2, L2) + "</div><table class='ui-datepicker-calendar'><thead><tr>", _2 = o2 ? "<th class='ui-datepicker-week-col'>" + this._get(t2, "weekHeader") + "</th>" : "", c2 = 0; c2 < 7; c2++) _2 += "<th scope='col'" + (5 <= (c2 + n2 + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + E2[Y2 = (c2 + n2) % 7] + "'>" + W2[Y2] + "</span></th>";
        for (m3 += _2 + "</tr></thead><tbody>", b2 = this._getDaysInMonth(N2, O2), N2 === t2.selectedYear && O2 === t2.selectedMonth && (t2.selectedDay = Math.min(t2.selectedDay, b2)), v2 = (this._getFirstDayOfMonth(N2, O2) - n2 + 7) % 7, b2 = Math.ceil((v2 + b2) / 7), B2 = U2 && this.maxRows > b2 ? this.maxRows : b2, this.maxRows = B2, y2 = this._daylightSavingAdjust(new Date(N2, O2, 1 - v2)), j2 = 0; j2 < B2; j2++) {
          for (m3 += "<tr>", q2 = o2 ? "<td class='ui-datepicker-week-col'>" + this._get(t2, "calculateWeek")(y2) + "</td>" : "", c2 = 0; c2 < 7; c2++) w2 = a2 ? a2.apply(t2.input ? t2.input[0] : null, [y2]) : [true, ""], k2 = (x2 = y2.getMonth() !== O2) && !R2 || !w2[0] || z2 && y2 < z2 || A2 && A2 < y2, q2 += "<td class='" + (5 <= (c2 + n2 + 6) % 7 ? " ui-datepicker-week-end" : "") + (x2 ? " ui-datepicker-other-month" : "") + (y2.getTime() === f2.getTime() && O2 === t2.selectedMonth && t2._keyEvent || l2.getTime() === y2.getTime() && l2.getTime() === f2.getTime() ? " " + this._dayOverClass : "") + (k2 ? " " + this._unselectableClass + " ui-state-disabled" : "") + (x2 && !r2 ? "" : " " + w2[1] + (y2.getTime() === H2.getTime() ? " " + this._currentClass : "") + (y2.getTime() === K2.getTime() ? " ui-datepicker-today" : "")) + "'" + (x2 && !r2 || !w2[2] ? "" : " title='" + w2[2].replace(/'/g, "&#39;") + "'") + (k2 ? "" : " data-handler='selectDay' data-event='click' data-month='" + y2.getMonth() + "' data-year='" + y2.getFullYear() + "'") + ">" + (x2 && !r2 ? "&#xa0;" : k2 ? "<span class='ui-state-default'>" + y2.getDate() + "</span>" : "<a class='ui-state-default" + (y2.getTime() === K2.getTime() ? " ui-state-highlight" : "") + (y2.getTime() === H2.getTime() ? " ui-state-active" : "") + (x2 ? " ui-priority-secondary" : "") + "' href='#' aria-current='" + (y2.getTime() === H2.getTime() ? "true" : "false") + "' data-date='" + y2.getDate() + "'>" + y2.getDate() + "</a>") + "</td>", y2.setDate(y2.getDate() + 1), y2 = this._daylightSavingAdjust(y2);
          m3 += q2 + "</tr>";
        }
        11 < ++O2 && (O2 = 0, N2++), d2 += m3 += "</tbody></table>" + (U2 ? "</div>" + (0 < P2[0] && p2 === P2[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
      }
      h2 += d2;
    }
    return h2 += T2, t2._keyEvent = false, h2;
  }, _generateMonthYearHeader: function(t2, e2, i2, s2, n2, o2, a2, r2) {
    var l2, h2, c2, u2, d2, p2, f2 = this._get(t2, "changeMonth"), g2 = this._get(t2, "changeYear"), m3 = this._get(t2, "showMonthAfterYear"), _2 = this._get(t2, "selectMonthLabel"), v2 = this._get(t2, "selectYearLabel"), b2 = "<div class='ui-datepicker-title'>", y2 = "";
    if (o2 || !f2) y2 += "<span class='ui-datepicker-month'>" + a2[e2] + "</span>";
    else {
      for (l2 = s2 && s2.getFullYear() === i2, h2 = n2 && n2.getFullYear() === i2, y2 += "<select class='ui-datepicker-month' aria-label='" + _2 + "' data-handler='selectMonth' data-event='change'>", c2 = 0; c2 < 12; c2++) (!l2 || c2 >= s2.getMonth()) && (!h2 || c2 <= n2.getMonth()) && (y2 += "<option value='" + c2 + "'" + (c2 === e2 ? " selected='selected'" : "") + ">" + r2[c2] + "</option>");
      y2 += "</select>";
    }
    if (m3 || (b2 += y2 + (!o2 && f2 && g2 ? "" : "&#xa0;")), !t2.yearshtml) if (t2.yearshtml = "", o2 || !g2) b2 += "<span class='ui-datepicker-year'>" + i2 + "</span>";
    else {
      for (a2 = this._get(t2, "yearRange").split(":"), u2 = (/* @__PURE__ */ new Date()).getFullYear(), d2 = (_2 = function(t3) {
        t3 = t3.match(/c[+\-].*/) ? i2 + parseInt(t3.substring(1), 10) : t3.match(/[+\-].*/) ? u2 + parseInt(t3, 10) : parseInt(t3, 10);
        return isNaN(t3) ? u2 : t3;
      })(a2[0]), p2 = Math.max(d2, _2(a2[1] || "")), d2 = s2 ? Math.max(d2, s2.getFullYear()) : d2, p2 = n2 ? Math.min(p2, n2.getFullYear()) : p2, t2.yearshtml += "<select class='ui-datepicker-year' aria-label='" + v2 + "' data-handler='selectYear' data-event='change'>"; d2 <= p2; d2++) t2.yearshtml += "<option value='" + d2 + "'" + (d2 === i2 ? " selected='selected'" : "") + ">" + d2 + "</option>";
      t2.yearshtml += "</select>", b2 += t2.yearshtml, t2.yearshtml = null;
    }
    return b2 += this._get(t2, "yearSuffix"), m3 && (b2 += (!o2 && f2 && g2 ? "" : "&#xa0;") + y2), b2 += "</div>";
  }, _adjustInstDate: function(t2, e2, i2) {
    var s2 = t2.selectedYear + ("Y" === i2 ? e2 : 0), n2 = t2.selectedMonth + ("M" === i2 ? e2 : 0), e2 = Math.min(t2.selectedDay, this._getDaysInMonth(s2, n2)) + ("D" === i2 ? e2 : 0), s2 = this._restrictMinMax(t2, this._daylightSavingAdjust(new Date(s2, n2, e2)));
    t2.selectedDay = s2.getDate(), t2.drawMonth = t2.selectedMonth = s2.getMonth(), t2.drawYear = t2.selectedYear = s2.getFullYear(), "M" !== i2 && "Y" !== i2 || this._notifyChange(t2);
  }, _restrictMinMax: function(t2, e2) {
    var i2 = this._getMinMaxDate(t2, "min"), t2 = this._getMinMaxDate(t2, "max"), i2 = i2 && e2 < i2 ? i2 : e2;
    return t2 && t2 < i2 ? t2 : i2;
  }, _notifyChange: function(t2) {
    var e2 = this._get(t2, "onChangeMonthYear");
    e2 && e2.apply(t2.input ? t2.input[0] : null, [t2.selectedYear, t2.selectedMonth + 1, t2]);
  }, _getNumberOfMonths: function(t2) {
    t2 = this._get(t2, "numberOfMonths");
    return null == t2 ? [1, 1] : "number" == typeof t2 ? [1, t2] : t2;
  }, _getMinMaxDate: function(t2, e2) {
    return this._determineDate(t2, this._get(t2, e2 + "Date"), null);
  }, _getDaysInMonth: function(t2, e2) {
    return 32 - this._daylightSavingAdjust(new Date(t2, e2, 32)).getDate();
  }, _getFirstDayOfMonth: function(t2, e2) {
    return new Date(t2, e2, 1).getDay();
  }, _canAdjustMonth: function(t2, e2, i2, s2) {
    var n2 = this._getNumberOfMonths(t2), i2 = this._daylightSavingAdjust(new Date(i2, s2 + (e2 < 0 ? e2 : n2[0] * n2[1]), 1));
    return e2 < 0 && i2.setDate(this._getDaysInMonth(i2.getFullYear(), i2.getMonth())), this._isInRange(t2, i2);
  }, _isInRange: function(t2, e2) {
    var i2, s2 = this._getMinMaxDate(t2, "min"), n2 = this._getMinMaxDate(t2, "max"), o2 = null, a2 = null, t2 = this._get(t2, "yearRange");
    return t2 && (t2 = t2.split(":"), i2 = (/* @__PURE__ */ new Date()).getFullYear(), o2 = parseInt(t2[0], 10), a2 = parseInt(t2[1], 10), t2[0].match(/[+\-].*/) && (o2 += i2), t2[1].match(/[+\-].*/)) && (a2 += i2), (!s2 || e2.getTime() >= s2.getTime()) && (!n2 || e2.getTime() <= n2.getTime()) && (!o2 || e2.getFullYear() >= o2) && (!a2 || e2.getFullYear() <= a2);
  }, _getFormatConfig: function(t2) {
    var e2 = this._get(t2, "shortYearCutoff");
    return { shortYearCutoff: "string" != typeof e2 ? e2 : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(e2, 10), dayNamesShort: this._get(t2, "dayNamesShort"), dayNames: this._get(t2, "dayNames"), monthNamesShort: this._get(t2, "monthNamesShort"), monthNames: this._get(t2, "monthNames") };
  }, _formatDate: function(t2, e2, i2, s2) {
    e2 || (t2.currentDay = t2.selectedDay, t2.currentMonth = t2.selectedMonth, t2.currentYear = t2.selectedYear);
    s2 = e2 ? "object" == typeof e2 ? e2 : this._daylightSavingAdjust(new Date(s2, i2, e2)) : this._daylightSavingAdjust(new Date(t2.currentYear, t2.currentMonth, t2.currentDay));
    return this.formatDate(this._get(t2, "dateFormat"), s2, this._getFormatConfig(t2));
  } }), V.fn.datepicker = function(t2) {
    if (!this.length) return this;
    V.datepicker.initialized || (V(document).on("mousedown", V.datepicker._checkExternalClick), V.datepicker.initialized = true), 0 === V("#" + V.datepicker._mainDivId).length && V("body").append(V.datepicker.dpDiv);
    var e2 = Array.prototype.slice.call(arguments, 1);
    return "string" == typeof t2 && ("isDisabled" === t2 || "getDate" === t2 || "widget" === t2) || "option" === t2 && 2 === arguments.length && "string" == typeof arguments[1] ? V.datepicker["_" + t2 + "Datepicker"].apply(V.datepicker, [this[0]].concat(e2)) : this.each(function() {
      "string" == typeof t2 ? V.datepicker["_" + t2 + "Datepicker"].apply(V.datepicker, [this].concat(e2)) : V.datepicker._attachDatepicker(this, t2);
    });
  }, V.datepicker = new rt(), V.datepicker.initialized = false, V.datepicker.uuid = (/* @__PURE__ */ new Date()).getTime(), V.datepicker.version = "1.13.3";
  V.datepicker, V.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  var z = false;
  V(document).on("mouseup", function() {
    z = false;
  }), V.widget("ui.mouse", { version: "1.13.3", options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 }, _mouseInit: function() {
    var e2 = this;
    this.element.on("mousedown." + this.widgetName, function(t2) {
      return e2._mouseDown(t2);
    }).on("click." + this.widgetName, function(t2) {
      if (true === V.data(t2.target, e2.widgetName + ".preventClickEvent")) return V.removeData(t2.target, e2.widgetName + ".preventClickEvent"), t2.stopImmediatePropagation(), false;
    }), this.started = false;
  }, _mouseDestroy: function() {
    this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
  }, _mouseDown: function(t2) {
    var e2, i2, s2;
    if (!z) return this._mouseMoved = false, this._mouseStarted && this._mouseUp(t2), i2 = 1 === (this._mouseDownEvent = t2).which, s2 = !("string" != typeof (e2 = this).options.cancel || !t2.target.nodeName) && V(t2.target).closest(this.options.cancel).length, i2 && !s2 && this._mouseCapture(t2) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
      e2.mouseDelayMet = true;
    }, this.options.delay)), this._mouseDistanceMet(t2) && this._mouseDelayMet(t2) && (this._mouseStarted = false !== this._mouseStart(t2), !this._mouseStarted) ? t2.preventDefault() : (true === V.data(t2.target, this.widgetName + ".preventClickEvent") && V.removeData(t2.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t3) {
      return e2._mouseMove(t3);
    }, this._mouseUpDelegate = function(t3) {
      return e2._mouseUp(t3);
    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t2.preventDefault(), z = true)), true;
  }, _mouseMove: function(t2) {
    if (this._mouseMoved) {
      if (V.ui.ie && (!document.documentMode || document.documentMode < 9) && !t2.button) return this._mouseUp(t2);
      if (!t2.which) {
        if (t2.originalEvent.altKey || t2.originalEvent.ctrlKey || t2.originalEvent.metaKey || t2.originalEvent.shiftKey) this.ignoreMissingWhich = true;
        else if (!this.ignoreMissingWhich) return this._mouseUp(t2);
      }
    }
    return (t2.which || t2.button) && (this._mouseMoved = true), this._mouseStarted ? (this._mouseDrag(t2), t2.preventDefault()) : (this._mouseDistanceMet(t2) && this._mouseDelayMet(t2) && (this._mouseStarted = false !== this._mouseStart(this._mouseDownEvent, t2), this._mouseStarted ? this._mouseDrag(t2) : this._mouseUp(t2)), !this._mouseStarted);
  }, _mouseUp: function(t2) {
    this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = false, t2.target === this._mouseDownEvent.target && V.data(t2.target, this.widgetName + ".preventClickEvent", true), this._mouseStop(t2)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = false, z = false, t2.preventDefault();
  }, _mouseDistanceMet: function(t2) {
    return Math.max(Math.abs(this._mouseDownEvent.pageX - t2.pageX), Math.abs(this._mouseDownEvent.pageY - t2.pageY)) >= this.options.distance;
  }, _mouseDelayMet: function() {
    return this.mouseDelayMet;
  }, _mouseStart: function() {
  }, _mouseDrag: function() {
  }, _mouseStop: function() {
  }, _mouseCapture: function() {
    return true;
  } }), V.ui.plugin = { add: function(t2, e2, i2) {
    var s2, n2 = V.ui[t2].prototype;
    for (s2 in i2) n2.plugins[s2] = n2.plugins[s2] || [], n2.plugins[s2].push([e2, i2[s2]]);
  }, call: function(t2, e2, i2, s2) {
    var n2, o2 = t2.plugins[e2];
    if (o2 && (s2 || t2.element[0].parentNode && 11 !== t2.element[0].parentNode.nodeType)) for (n2 = 0; n2 < o2.length; n2++) t2.options[o2[n2][0]] && o2[n2][1].apply(t2.element, i2);
  } }, V.ui.safeBlur = function(t2) {
    t2 && "body" !== t2.nodeName.toLowerCase() && V(t2).trigger("blur");
  }, V.widget("ui.draggable", V.ui.mouse, { version: "1.13.3", widgetEventPrefix: "drag", options: { addClasses: true, appendTo: "parent", axis: false, connectToSortable: false, containment: false, cursor: "auto", cursorAt: false, grid: false, handle: false, helper: "original", iframeFix: false, opacity: false, refreshPositions: false, revert: false, revertDuration: 500, scope: "default", scroll: true, scrollSensitivity: 20, scrollSpeed: 20, snap: false, snapMode: "both", snapTolerance: 20, stack: false, zIndex: false, drag: null, start: null, stop: null }, _create: function() {
    "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit();
  }, _setOption: function(t2, e2) {
    this._super(t2, e2), "handle" === t2 && (this._removeHandleClassName(), this._setHandleClassName());
  }, _destroy: function() {
    (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = true : (this._removeHandleClassName(), this._mouseDestroy());
  }, _mouseCapture: function(t2) {
    var e2 = this.options;
    return !(this.helper || e2.disabled || 0 < V(t2.target).closest(".ui-resizable-handle").length || (this.handle = this._getHandle(t2), !this.handle) || (this._blurActiveElement(t2), this._blockFrames(true === e2.iframeFix ? "iframe" : e2.iframeFix), 0));
  }, _blockFrames: function(t2) {
    this.iframeBlocks = this.document.find(t2).map(function() {
      var t3 = V(this);
      return V("<div>").css("position", "absolute").appendTo(t3.parent()).outerWidth(t3.outerWidth()).outerHeight(t3.outerHeight()).offset(t3.offset())[0];
    });
  }, _unblockFrames: function() {
    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
  }, _blurActiveElement: function(t2) {
    var e2 = V.ui.safeActiveElement(this.document[0]);
    V(t2.target).closest(e2).length || V.ui.safeBlur(e2);
  }, _mouseStart: function(t2) {
    var e2 = this.options;
    return this.helper = this._createHelper(t2), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), V.ui.ddmanager && (V.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(true), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
      return "fixed" === V(this).css("position");
    }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(t2), this.originalPosition = this.position = this._generatePosition(t2, false), this.originalPageX = t2.pageX, this.originalPageY = t2.pageY, e2.cursorAt && this._adjustOffsetFromHelper(e2.cursorAt), this._setContainment(), false === this._trigger("start", t2) ? (this._clear(), false) : (this._cacheHelperProportions(), V.ui.ddmanager && !e2.dropBehaviour && V.ui.ddmanager.prepareOffsets(this, t2), this._mouseDrag(t2, true), V.ui.ddmanager && V.ui.ddmanager.dragStart(this, t2), true);
  }, _refreshOffsets: function(t2) {
    this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: false, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: t2.pageX - this.offset.left, top: t2.pageY - this.offset.top };
  }, _mouseDrag: function(t2, e2) {
    if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t2, true), this.positionAbs = this._convertPositionTo("absolute"), !e2) {
      e2 = this._uiHash();
      if (false === this._trigger("drag", t2, e2)) return this._mouseUp(new V.Event("mouseup", t2)), false;
      this.position = e2.position;
    }
    return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", V.ui.ddmanager && V.ui.ddmanager.drag(this, t2), false;
  }, _mouseStop: function(t2) {
    var e2 = this, i2 = false;
    return V.ui.ddmanager && !this.options.dropBehaviour && (i2 = V.ui.ddmanager.drop(this, t2)), this.dropped && (i2 = this.dropped, this.dropped = false), "invalid" === this.options.revert && !i2 || "valid" === this.options.revert && i2 || true === this.options.revert || "function" == typeof this.options.revert && this.options.revert.call(this.element, i2) ? V(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
      false !== e2._trigger("stop", t2) && e2._clear();
    }) : false !== this._trigger("stop", t2) && this._clear(), false;
  }, _mouseUp: function(t2) {
    return this._unblockFrames(), V.ui.ddmanager && V.ui.ddmanager.dragStop(this, t2), this.handleElement.is(t2.target) && this.element.trigger("focus"), V.ui.mouse.prototype._mouseUp.call(this, t2);
  }, cancel: function() {
    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new V.Event("mouseup", { target: this.element[0] })) : this._clear(), this;
  }, _getHandle: function(t2) {
    return !this.options.handle || !!V(t2.target).closest(this.element.find(this.options.handle)).length;
  }, _setHandleClassName: function() {
    this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle");
  }, _removeHandleClassName: function() {
    this._removeClass(this.handleElement, "ui-draggable-handle");
  }, _createHelper: function(t2) {
    var e2 = this.options, i2 = "function" == typeof e2.helper, t2 = i2 ? V(e2.helper.apply(this.element[0], [t2])) : "clone" === e2.helper ? this.element.clone().removeAttr("id") : this.element;
    return t2.parents("body").length || t2.appendTo("parent" === e2.appendTo ? this.element[0].parentNode : e2.appendTo), i2 && t2[0] === this.element[0] && this._setPositionRelative(), t2[0] === this.element[0] || /(fixed|absolute)/.test(t2.css("position")) || t2.css("position", "absolute"), t2;
  }, _setPositionRelative: function() {
    /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
  }, _adjustOffsetFromHelper: function(t2) {
    "string" == typeof t2 && (t2 = t2.split(" ")), "left" in (t2 = Array.isArray(t2) ? { left: +t2[0], top: +t2[1] || 0 } : t2) && (this.offset.click.left = t2.left + this.margins.left), "right" in t2 && (this.offset.click.left = this.helperProportions.width - t2.right + this.margins.left), "top" in t2 && (this.offset.click.top = t2.top + this.margins.top), "bottom" in t2 && (this.offset.click.top = this.helperProportions.height - t2.bottom + this.margins.top);
  }, _isRootNode: function(t2) {
    return /(html|body)/i.test(t2.tagName) || t2 === this.document[0];
  }, _getParentOffset: function() {
    var t2 = this.offsetParent.offset(), e2 = this.document[0];
    return "absolute" === this.cssPosition && this.scrollParent[0] !== e2 && V.contains(this.scrollParent[0], this.offsetParent[0]) && (t2.left += this.scrollParent.scrollLeft(), t2.top += this.scrollParent.scrollTop()), { top: (t2 = this._isRootNode(this.offsetParent[0]) ? { top: 0, left: 0 } : t2).top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t2.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
  }, _getRelativeOffset: function() {
    var t2, e2;
    return "relative" !== this.cssPosition ? { top: 0, left: 0 } : (t2 = this.element.position(), e2 = this._isRootNode(this.scrollParent[0]), { top: t2.top - (parseInt(this.helper.css("top"), 10) || 0) + (e2 ? 0 : this.scrollParent.scrollTop()), left: t2.left - (parseInt(this.helper.css("left"), 10) || 0) + (e2 ? 0 : this.scrollParent.scrollLeft()) });
  }, _cacheMargins: function() {
    this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 };
  }, _cacheHelperProportions: function() {
    this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
  }, _setContainment: function() {
    var t2, e2 = this.options, i2 = this.document[0];
    this.relativeContainer = null, e2.containment ? "window" === e2.containment ? this.containment = [V(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, V(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, V(window).scrollLeft() + V(window).width() - this.helperProportions.width - this.margins.left, V(window).scrollTop() + (V(window).height() || i2.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : "document" === e2.containment ? this.containment = [0, 0, V(i2).width() - this.helperProportions.width - this.margins.left, (V(i2).height() || i2.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : e2.containment.constructor === Array ? this.containment = e2.containment : ("parent" === e2.containment && (e2.containment = this.helper[0].parentNode), (e2 = (i2 = V(e2.containment))[0]) && (t2 = /(scroll|auto)/.test(i2.css("overflow")), this.containment = [(parseInt(i2.css("borderLeftWidth"), 10) || 0) + (parseInt(i2.css("paddingLeft"), 10) || 0), (parseInt(i2.css("borderTopWidth"), 10) || 0) + (parseInt(i2.css("paddingTop"), 10) || 0), (t2 ? Math.max(e2.scrollWidth, e2.offsetWidth) : e2.offsetWidth) - (parseInt(i2.css("borderRightWidth"), 10) || 0) - (parseInt(i2.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t2 ? Math.max(e2.scrollHeight, e2.offsetHeight) : e2.offsetHeight) - (parseInt(i2.css("borderBottomWidth"), 10) || 0) - (parseInt(i2.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i2)) : this.containment = null;
  }, _convertPositionTo: function(t2, e2) {
    e2 = e2 || this.position;
    var t2 = "absolute" === t2 ? 1 : -1, i2 = this._isRootNode(this.scrollParent[0]);
    return { top: e2.top + this.offset.relative.top * t2 + this.offset.parent.top * t2 - ("fixed" === this.cssPosition ? -this.offset.scroll.top : i2 ? 0 : this.offset.scroll.top) * t2, left: e2.left + this.offset.relative.left * t2 + this.offset.parent.left * t2 - ("fixed" === this.cssPosition ? -this.offset.scroll.left : i2 ? 0 : this.offset.scroll.left) * t2 };
  }, _generatePosition: function(t2, e2) {
    var i2, s2 = this.options, n2 = this._isRootNode(this.scrollParent[0]), o2 = t2.pageX, a2 = t2.pageY;
    return n2 && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), { top: (a2 = e2 && (this.containment && (i2 = this.relativeContainer ? (e2 = this.relativeContainer.offset(), [this.containment[0] + e2.left, this.containment[1] + e2.top, this.containment[2] + e2.left, this.containment[3] + e2.top]) : this.containment, t2.pageX - this.offset.click.left < i2[0] && (o2 = i2[0] + this.offset.click.left), t2.pageY - this.offset.click.top < i2[1] && (a2 = i2[1] + this.offset.click.top), t2.pageX - this.offset.click.left > i2[2] && (o2 = i2[2] + this.offset.click.left), t2.pageY - this.offset.click.top > i2[3]) && (a2 = i2[3] + this.offset.click.top), s2.grid && (e2 = s2.grid[1] ? this.originalPageY + Math.round((a2 - this.originalPageY) / s2.grid[1]) * s2.grid[1] : this.originalPageY, a2 = !i2 || e2 - this.offset.click.top >= i2[1] || e2 - this.offset.click.top > i2[3] ? e2 : e2 - this.offset.click.top >= i2[1] ? e2 - s2.grid[1] : e2 + s2.grid[1], t2 = s2.grid[0] ? this.originalPageX + Math.round((o2 - this.originalPageX) / s2.grid[0]) * s2.grid[0] : this.originalPageX, o2 = !i2 || t2 - this.offset.click.left >= i2[0] || t2 - this.offset.click.left > i2[2] ? t2 : t2 - this.offset.click.left >= i2[0] ? t2 - s2.grid[0] : t2 + s2.grid[0]), "y" === s2.axis && (o2 = this.originalPageX), "x" === s2.axis) ? this.originalPageY : a2) - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : n2 ? 0 : this.offset.scroll.top), left: o2 - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : n2 ? 0 : this.offset.scroll.left) };
  }, _clear: function() {
    this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = false, this.destroyOnClear && this.destroy();
  }, _trigger: function(t2, e2, i2) {
    return i2 = i2 || this._uiHash(), V.ui.plugin.call(this, t2, [e2, i2, this], true), /^(drag|start|stop)/.test(t2) && (this.positionAbs = this._convertPositionTo("absolute"), i2.offset = this.positionAbs), V.Widget.prototype._trigger.call(this, t2, e2, i2);
  }, plugins: {}, _uiHash: function() {
    return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
  } }), V.ui.plugin.add("draggable", "connectToSortable", { start: function(e2, t2, i2) {
    var s2 = V.extend({}, t2, { item: i2.element });
    i2.sortables = [], V(i2.options.connectToSortable).each(function() {
      var t3 = V(this).sortable("instance");
      t3 && !t3.options.disabled && (i2.sortables.push(t3), t3.refreshPositions(), t3._trigger("activate", e2, s2));
    });
  }, stop: function(e2, t2, i2) {
    var s2 = V.extend({}, t2, { item: i2.element });
    i2.cancelHelperRemoval = false, V.each(i2.sortables, function() {
      var t3 = this;
      t3.isOver ? (t3.isOver = 0, i2.cancelHelperRemoval = true, t3.cancelHelperRemoval = false, t3._storedCSS = { position: t3.placeholder.css("position"), top: t3.placeholder.css("top"), left: t3.placeholder.css("left") }, t3._mouseStop(e2), t3.options.helper = t3.options._helper) : (t3.cancelHelperRemoval = true, t3._trigger("deactivate", e2, s2));
    });
  }, drag: function(i2, s2, n2) {
    V.each(n2.sortables, function() {
      var t2 = false, e2 = this;
      e2.positionAbs = n2.positionAbs, e2.helperProportions = n2.helperProportions, e2.offset.click = n2.offset.click, e2._intersectsWith(e2.containerCache) && (t2 = true, V.each(n2.sortables, function() {
        return this.positionAbs = n2.positionAbs, this.helperProportions = n2.helperProportions, this.offset.click = n2.offset.click, t2 = this !== e2 && this._intersectsWith(this.containerCache) && V.contains(e2.element[0], this.element[0]) ? false : t2;
      })), t2 ? (e2.isOver || (e2.isOver = 1, n2._parent = s2.helper.parent(), e2.currentItem = s2.helper.appendTo(e2.element).data("ui-sortable-item", true), e2.options._helper = e2.options.helper, e2.options.helper = function() {
        return s2.helper[0];
      }, i2.target = e2.currentItem[0], e2._mouseCapture(i2, true), e2._mouseStart(i2, true, true), e2.offset.click.top = n2.offset.click.top, e2.offset.click.left = n2.offset.click.left, e2.offset.parent.left -= n2.offset.parent.left - e2.offset.parent.left, e2.offset.parent.top -= n2.offset.parent.top - e2.offset.parent.top, n2._trigger("toSortable", i2), n2.dropped = e2.element, V.each(n2.sortables, function() {
        this.refreshPositions();
      }), n2.currentItem = n2.element, e2.fromOutside = n2), e2.currentItem && (e2._mouseDrag(i2), s2.position = e2.position)) : e2.isOver && (e2.isOver = 0, e2.cancelHelperRemoval = true, e2.options._revert = e2.options.revert, e2.options.revert = false, e2._trigger("out", i2, e2._uiHash(e2)), e2._mouseStop(i2, true), e2.options.revert = e2.options._revert, e2.options.helper = e2.options._helper, e2.placeholder && e2.placeholder.remove(), s2.helper.appendTo(n2._parent), n2._refreshOffsets(i2), s2.position = n2._generatePosition(i2, true), n2._trigger("fromSortable", i2), n2.dropped = false, V.each(n2.sortables, function() {
        this.refreshPositions();
      }));
    });
  } }), V.ui.plugin.add("draggable", "cursor", { start: function(t2, e2, i2) {
    var s2 = V("body"), i2 = i2.options;
    s2.css("cursor") && (i2._cursor = s2.css("cursor")), s2.css("cursor", i2.cursor);
  }, stop: function(t2, e2, i2) {
    i2 = i2.options;
    i2._cursor && V("body").css("cursor", i2._cursor);
  } }), V.ui.plugin.add("draggable", "opacity", { start: function(t2, e2, i2) {
    e2 = V(e2.helper), i2 = i2.options;
    e2.css("opacity") && (i2._opacity = e2.css("opacity")), e2.css("opacity", i2.opacity);
  }, stop: function(t2, e2, i2) {
    i2 = i2.options;
    i2._opacity && V(e2.helper).css("opacity", i2._opacity);
  } }), V.ui.plugin.add("draggable", "scroll", { start: function(t2, e2, i2) {
    i2.scrollParentNotHidden || (i2.scrollParentNotHidden = i2.helper.scrollParent(false)), i2.scrollParentNotHidden[0] !== i2.document[0] && "HTML" !== i2.scrollParentNotHidden[0].tagName && (i2.overflowOffset = i2.scrollParentNotHidden.offset());
  }, drag: function(t2, e2, i2) {
    var s2 = i2.options, n2 = false, o2 = i2.scrollParentNotHidden[0], a2 = i2.document[0];
    o2 !== a2 && "HTML" !== o2.tagName ? (s2.axis && "x" === s2.axis || (i2.overflowOffset.top + o2.offsetHeight - t2.pageY < s2.scrollSensitivity ? o2.scrollTop = n2 = o2.scrollTop + s2.scrollSpeed : t2.pageY - i2.overflowOffset.top < s2.scrollSensitivity && (o2.scrollTop = n2 = o2.scrollTop - s2.scrollSpeed)), s2.axis && "y" === s2.axis || (i2.overflowOffset.left + o2.offsetWidth - t2.pageX < s2.scrollSensitivity ? o2.scrollLeft = n2 = o2.scrollLeft + s2.scrollSpeed : t2.pageX - i2.overflowOffset.left < s2.scrollSensitivity && (o2.scrollLeft = n2 = o2.scrollLeft - s2.scrollSpeed))) : (s2.axis && "x" === s2.axis || (t2.pageY - V(a2).scrollTop() < s2.scrollSensitivity ? n2 = V(a2).scrollTop(V(a2).scrollTop() - s2.scrollSpeed) : V(window).height() - (t2.pageY - V(a2).scrollTop()) < s2.scrollSensitivity && (n2 = V(a2).scrollTop(V(a2).scrollTop() + s2.scrollSpeed))), s2.axis && "y" === s2.axis || (t2.pageX - V(a2).scrollLeft() < s2.scrollSensitivity ? n2 = V(a2).scrollLeft(V(a2).scrollLeft() - s2.scrollSpeed) : V(window).width() - (t2.pageX - V(a2).scrollLeft()) < s2.scrollSensitivity && (n2 = V(a2).scrollLeft(V(a2).scrollLeft() + s2.scrollSpeed)))), false !== n2 && V.ui.ddmanager && !s2.dropBehaviour && V.ui.ddmanager.prepareOffsets(i2, t2);
  } }), V.ui.plugin.add("draggable", "snap", { start: function(t2, e2, i2) {
    var s2 = i2.options;
    i2.snapElements = [], V(s2.snap.constructor !== String ? s2.snap.items || ":data(ui-draggable)" : s2.snap).each(function() {
      var t3 = V(this), e3 = t3.offset();
      this !== i2.element[0] && i2.snapElements.push({ item: this, width: t3.outerWidth(), height: t3.outerHeight(), top: e3.top, left: e3.left });
    });
  }, drag: function(t2, e2, i2) {
    for (var s2, n2, o2, a2, r2, l2, h2, c2, u2, d2 = i2.options, p2 = d2.snapTolerance, f2 = e2.offset.left, g2 = f2 + i2.helperProportions.width, m3 = e2.offset.top, _2 = m3 + i2.helperProportions.height, v2 = i2.snapElements.length - 1; 0 <= v2; v2--) l2 = (r2 = i2.snapElements[v2].left - i2.margins.left) + i2.snapElements[v2].width, c2 = (h2 = i2.snapElements[v2].top - i2.margins.top) + i2.snapElements[v2].height, g2 < r2 - p2 || l2 + p2 < f2 || _2 < h2 - p2 || c2 + p2 < m3 || !V.contains(i2.snapElements[v2].item.ownerDocument, i2.snapElements[v2].item) ? (i2.snapElements[v2].snapping && i2.options.snap.release && i2.options.snap.release.call(i2.element, t2, V.extend(i2._uiHash(), { snapItem: i2.snapElements[v2].item })), i2.snapElements[v2].snapping = false) : ("inner" !== d2.snapMode && (s2 = Math.abs(h2 - _2) <= p2, n2 = Math.abs(c2 - m3) <= p2, o2 = Math.abs(r2 - g2) <= p2, a2 = Math.abs(l2 - f2) <= p2, s2 && (e2.position.top = i2._convertPositionTo("relative", { top: h2 - i2.helperProportions.height, left: 0 }).top), n2 && (e2.position.top = i2._convertPositionTo("relative", { top: c2, left: 0 }).top), o2 && (e2.position.left = i2._convertPositionTo("relative", { top: 0, left: r2 - i2.helperProportions.width }).left), a2) && (e2.position.left = i2._convertPositionTo("relative", { top: 0, left: l2 }).left), u2 = s2 || n2 || o2 || a2, "outer" !== d2.snapMode && (s2 = Math.abs(h2 - m3) <= p2, n2 = Math.abs(c2 - _2) <= p2, o2 = Math.abs(r2 - f2) <= p2, a2 = Math.abs(l2 - g2) <= p2, s2 && (e2.position.top = i2._convertPositionTo("relative", { top: h2, left: 0 }).top), n2 && (e2.position.top = i2._convertPositionTo("relative", { top: c2 - i2.helperProportions.height, left: 0 }).top), o2 && (e2.position.left = i2._convertPositionTo("relative", { top: 0, left: r2 }).left), a2) && (e2.position.left = i2._convertPositionTo("relative", { top: 0, left: l2 - i2.helperProportions.width }).left), !i2.snapElements[v2].snapping && (s2 || n2 || o2 || a2 || u2) && i2.options.snap.snap && i2.options.snap.snap.call(i2.element, t2, V.extend(i2._uiHash(), { snapItem: i2.snapElements[v2].item })), i2.snapElements[v2].snapping = s2 || n2 || o2 || a2 || u2);
  } }), V.ui.plugin.add("draggable", "stack", { start: function(t2, e2, i2) {
    var s2, i2 = i2.options, i2 = V.makeArray(V(i2.stack)).sort(function(t3, e3) {
      return (parseInt(V(t3).css("zIndex"), 10) || 0) - (parseInt(V(e3).css("zIndex"), 10) || 0);
    });
    i2.length && (s2 = parseInt(V(i2[0]).css("zIndex"), 10) || 0, V(i2).each(function(t3) {
      V(this).css("zIndex", s2 + t3);
    }), this.css("zIndex", s2 + i2.length));
  } }), V.ui.plugin.add("draggable", "zIndex", { start: function(t2, e2, i2) {
    e2 = V(e2.helper), i2 = i2.options;
    e2.css("zIndex") && (i2._zIndex = e2.css("zIndex")), e2.css("zIndex", i2.zIndex);
  }, stop: function(t2, e2, i2) {
    i2 = i2.options;
    i2._zIndex && V(e2.helper).css("zIndex", i2._zIndex);
  } }), V.ui.draggable, V.widget("ui.resizable", V.ui.mouse, { version: "1.13.3", widgetEventPrefix: "resize", options: { alsoResize: false, animate: false, animateDuration: "slow", animateEasing: "swing", aspectRatio: false, autoHide: false, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: false, ghost: false, grid: false, handles: "e,s,se", helper: false, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function(t2) {
    return parseFloat(t2) || 0;
  }, _isNumber: function(t2) {
    return !isNaN(parseFloat(t2));
  }, _hasScroll: function(t2, e2) {
    if ("hidden" === V(t2).css("overflow")) return false;
    var e2 = e2 && "left" === e2 ? "scrollLeft" : "scrollTop", i2 = false;
    if (0 < t2[e2]) return true;
    try {
      t2[e2] = 1, i2 = 0 < t2[e2], t2[e2] = 0;
    } catch (t3) {
    }
    return i2;
  }, _create: function() {
    var t2, e2 = this.options, i2 = this;
    this._addClass("ui-resizable"), V.extend(this, { _aspectRatio: !!e2.aspectRatio, aspectRatio: e2.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: e2.helper || e2.ghost || e2.animate ? e2.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(V("<div class='ui-wrapper'></div>").css({ overflow: "hidden", position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = true, t2 = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(t2), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css(t2), this._proportionallyResize()), this._setupHandles(), e2.autoHide && V(this.element).on("mouseenter", function() {
      e2.disabled || (i2._removeClass("ui-resizable-autohide"), i2._handles.show());
    }).on("mouseleave", function() {
      e2.disabled || i2.resizing || (i2._addClass("ui-resizable-autohide"), i2._handles.hide());
    }), this._mouseInit();
  }, _destroy: function() {
    this._mouseDestroy(), this._addedHandles.remove();
    function t2(t3) {
      V(t3).removeData("resizable").removeData("ui-resizable").off(".resizable");
    }
    var e2;
    return this.elementIsWrapper && (t2(this.element), e2 = this.element, this.originalElement.css({ position: e2.css("position"), width: e2.outerWidth(), height: e2.outerHeight(), top: e2.css("top"), left: e2.css("left") }).insertAfter(e2), e2.remove()), this.originalElement.css("resize", this.originalResizeStyle), t2(this.originalElement), this;
  }, _setOption: function(t2, e2) {
    switch (this._super(t2, e2), t2) {
      case "handles":
        this._removeHandles(), this._setupHandles();
        break;
      case "aspectRatio":
        this._aspectRatio = !!e2;
    }
  }, _setupHandles: function() {
    var t2, e2, i2, s2, n2, o2 = this.options, a2 = this;
    if (this.handles = o2.handles || (V(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = V(), this._addedHandles = V(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), i2 = this.handles.split(","), this.handles = {}, e2 = 0; e2 < i2.length; e2++) s2 = "ui-resizable-" + (t2 = String.prototype.trim.call(i2[e2])), n2 = V("<div>"), this._addClass(n2, "ui-resizable-handle " + s2), n2.css({ zIndex: o2.zIndex }), this.handles[t2] = ".ui-resizable-" + t2, this.element.children(this.handles[t2]).length || (this.element.append(n2), this._addedHandles = this._addedHandles.add(n2));
    this._renderAxis = function(t3) {
      var e3, i3, s3;
      for (e3 in t3 = t3 || this.element, this.handles) this.handles[e3].constructor === String ? this.handles[e3] = this.element.children(this.handles[e3]).first().show() : (this.handles[e3].jquery || this.handles[e3].nodeType) && (this.handles[e3] = V(this.handles[e3]), this._on(this.handles[e3], { mousedown: a2._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s3 = V(this.handles[e3], this.element), s3 = /sw|ne|nw|se|n|s/.test(e3) ? s3.outerHeight() : s3.outerWidth(), i3 = ["padding", /ne|nw|n/.test(e3) ? "Top" : /se|sw|s/.test(e3) ? "Bottom" : /^e$/.test(e3) ? "Right" : "Left"].join(""), t3.css(i3, s3), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e3]);
    }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
      a2.resizing || (this.className && (n2 = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a2.axis = n2 && n2[1] ? n2[1] : "se");
    }), o2.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
  }, _removeHandles: function() {
    this._addedHandles.remove();
  }, _mouseCapture: function(t2) {
    var e2, i2, s2 = false;
    for (e2 in this.handles) (i2 = V(this.handles[e2])[0]) !== t2.target && !V.contains(i2, t2.target) || (s2 = true);
    return !this.options.disabled && s2;
  }, _mouseStart: function(t2) {
    var e2, i2, s2 = this.options, n2 = this.element;
    return this.resizing = true, this._renderProxy(), e2 = this._num(this.helper.css("left")), i2 = this._num(this.helper.css("top")), s2.containment && (e2 += V(s2.containment).scrollLeft() || 0, i2 += V(s2.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: e2, top: i2 }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: n2.width(), height: n2.height() }, this.originalSize = this._helper ? { width: n2.outerWidth(), height: n2.outerHeight() } : { width: n2.width(), height: n2.height() }, this.sizeDiff = { width: n2.outerWidth() - n2.width(), height: n2.outerHeight() - n2.height() }, this.originalPosition = { left: e2, top: i2 }, this.originalMousePosition = { left: t2.pageX, top: t2.pageY }, this.aspectRatio = "number" == typeof s2.aspectRatio ? s2.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n2 = V(".ui-resizable-" + this.axis).css("cursor"), V("body").css("cursor", "auto" === n2 ? this.axis + "-resize" : n2), this._addClass("ui-resizable-resizing"), this._propagate("start", t2), true;
  }, _mouseDrag: function(t2) {
    var e2 = this.originalMousePosition, i2 = this.axis, s2 = t2.pageX - e2.left || 0, e2 = t2.pageY - e2.top || 0, i2 = this._change[i2];
    return this._updatePrevProperties(), i2 && (i2 = i2.apply(this, [t2, s2, e2]), this._updateVirtualBoundaries(t2.shiftKey), (this._aspectRatio || t2.shiftKey) && (i2 = this._updateRatio(i2, t2)), i2 = this._respectSize(i2, t2), this._updateCache(i2), this._propagate("resize", t2), s2 = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), V.isEmptyObject(s2) || (this._updatePrevProperties(), this._trigger("resize", t2, this.ui()), this._applyChanges())), false;
  }, _mouseStop: function(t2) {
    this.resizing = false;
    var e2, i2, s2, n2 = this.options, o2 = this;
    return this._helper && (i2 = (e2 = (i2 = this._proportionallyResizeElements).length && /textarea/i.test(i2[0].nodeName)) && this._hasScroll(i2[0], "left") ? 0 : o2.sizeDiff.height, e2 = e2 ? 0 : o2.sizeDiff.width, e2 = { width: o2.helper.width() - e2, height: o2.helper.height() - i2 }, i2 = parseFloat(o2.element.css("left")) + (o2.position.left - o2.originalPosition.left) || null, s2 = parseFloat(o2.element.css("top")) + (o2.position.top - o2.originalPosition.top) || null, n2.animate || this.element.css(V.extend(e2, { top: s2, left: i2 })), o2.helper.height(o2.size.height), o2.helper.width(o2.size.width), this._helper) && !n2.animate && this._proportionallyResize(), V("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t2), this._helper && this.helper.remove(), false;
  }, _updatePrevProperties: function() {
    this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height };
  }, _applyChanges: function() {
    var t2 = {};
    return this.position.top !== this.prevPosition.top && (t2.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t2.left = this.position.left + "px"), this.helper.css(t2), this.size.width !== this.prevSize.width && (t2.width = this.size.width + "px", this.helper.width(t2.width)), this.size.height !== this.prevSize.height && (t2.height = this.size.height + "px", this.helper.height(t2.height)), t2;
  }, _updateVirtualBoundaries: function(t2) {
    var e2, i2, s2, n2 = this.options, n2 = { minWidth: this._isNumber(n2.minWidth) ? n2.minWidth : 0, maxWidth: this._isNumber(n2.maxWidth) ? n2.maxWidth : 1 / 0, minHeight: this._isNumber(n2.minHeight) ? n2.minHeight : 0, maxHeight: this._isNumber(n2.maxHeight) ? n2.maxHeight : 1 / 0 };
    (this._aspectRatio || t2) && (t2 = n2.minHeight * this.aspectRatio, i2 = n2.minWidth / this.aspectRatio, e2 = n2.maxHeight * this.aspectRatio, s2 = n2.maxWidth / this.aspectRatio, n2.minWidth < t2 && (n2.minWidth = t2), n2.minHeight < i2 && (n2.minHeight = i2), e2 < n2.maxWidth && (n2.maxWidth = e2), s2 < n2.maxHeight) && (n2.maxHeight = s2), this._vBoundaries = n2;
  }, _updateCache: function(t2) {
    this.offset = this.helper.offset(), this._isNumber(t2.left) && (this.position.left = t2.left), this._isNumber(t2.top) && (this.position.top = t2.top), this._isNumber(t2.height) && (this.size.height = t2.height), this._isNumber(t2.width) && (this.size.width = t2.width);
  }, _updateRatio: function(t2) {
    var e2 = this.position, i2 = this.size, s2 = this.axis;
    return this._isNumber(t2.height) ? t2.width = t2.height * this.aspectRatio : this._isNumber(t2.width) && (t2.height = t2.width / this.aspectRatio), "sw" === s2 && (t2.left = e2.left + (i2.width - t2.width), t2.top = null), "nw" === s2 && (t2.top = e2.top + (i2.height - t2.height), t2.left = e2.left + (i2.width - t2.width)), t2;
  }, _respectSize: function(t2) {
    var e2 = this._vBoundaries, i2 = this.axis, s2 = this._isNumber(t2.width) && e2.maxWidth && e2.maxWidth < t2.width, n2 = this._isNumber(t2.height) && e2.maxHeight && e2.maxHeight < t2.height, o2 = this._isNumber(t2.width) && e2.minWidth && e2.minWidth > t2.width, a2 = this._isNumber(t2.height) && e2.minHeight && e2.minHeight > t2.height, r2 = this.originalPosition.left + this.originalSize.width, l2 = this.originalPosition.top + this.originalSize.height, h2 = /sw|nw|w/.test(i2), i2 = /nw|ne|n/.test(i2);
    return o2 && (t2.width = e2.minWidth), a2 && (t2.height = e2.minHeight), s2 && (t2.width = e2.maxWidth), n2 && (t2.height = e2.maxHeight), o2 && h2 && (t2.left = r2 - e2.minWidth), s2 && h2 && (t2.left = r2 - e2.maxWidth), a2 && i2 && (t2.top = l2 - e2.minHeight), n2 && i2 && (t2.top = l2 - e2.maxHeight), t2.width || t2.height || t2.left || !t2.top ? t2.width || t2.height || t2.top || !t2.left || (t2.left = null) : t2.top = null, t2;
  }, _getPaddingPlusBorderDimensions: function(t2) {
    for (var e2 = 0, i2 = [], s2 = [t2.css("borderTopWidth"), t2.css("borderRightWidth"), t2.css("borderBottomWidth"), t2.css("borderLeftWidth")], n2 = [t2.css("paddingTop"), t2.css("paddingRight"), t2.css("paddingBottom"), t2.css("paddingLeft")]; e2 < 4; e2++) i2[e2] = parseFloat(s2[e2]) || 0, i2[e2] += parseFloat(n2[e2]) || 0;
    return { height: i2[0] + i2[2], width: i2[1] + i2[3] };
  }, _proportionallyResize: function() {
    if (this._proportionallyResizeElements.length) for (var t2, e2 = 0, i2 = this.helper || this.element; e2 < this._proportionallyResizeElements.length; e2++) t2 = this._proportionallyResizeElements[e2], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t2)), t2.css({ height: i2.height() - this.outerDimensions.height || 0, width: i2.width() - this.outerDimensions.width || 0 });
  }, _renderProxy: function() {
    var t2 = this.element, e2 = this.options;
    this.elementOffset = t2.offset(), this._helper ? (this.helper = this.helper || V("<div></div>").css({ overflow: "hidden" }), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++e2.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
  }, _change: { e: function(t2, e2) {
    return { width: this.originalSize.width + e2 };
  }, w: function(t2, e2) {
    var i2 = this.originalSize;
    return { left: this.originalPosition.left + e2, width: i2.width - e2 };
  }, n: function(t2, e2, i2) {
    var s2 = this.originalSize;
    return { top: this.originalPosition.top + i2, height: s2.height - i2 };
  }, s: function(t2, e2, i2) {
    return { height: this.originalSize.height + i2 };
  }, se: function(t2, e2, i2) {
    return V.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t2, e2, i2]));
  }, sw: function(t2, e2, i2) {
    return V.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t2, e2, i2]));
  }, ne: function(t2, e2, i2) {
    return V.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t2, e2, i2]));
  }, nw: function(t2, e2, i2) {
    return V.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t2, e2, i2]));
  } }, _propagate: function(t2, e2) {
    V.ui.plugin.call(this, t2, [e2, this.ui()]), "resize" !== t2 && this._trigger(t2, e2, this.ui());
  }, plugins: {}, ui: function() {
    return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition };
  } }), V.ui.plugin.add("resizable", "animate", { stop: function(e2) {
    var i2 = V(this).resizable("instance"), t2 = i2.options, s2 = i2._proportionallyResizeElements, n2 = s2.length && /textarea/i.test(s2[0].nodeName), o2 = n2 && i2._hasScroll(s2[0], "left") ? 0 : i2.sizeDiff.height, n2 = n2 ? 0 : i2.sizeDiff.width, n2 = { width: i2.size.width - n2, height: i2.size.height - o2 }, o2 = parseFloat(i2.element.css("left")) + (i2.position.left - i2.originalPosition.left) || null, a2 = parseFloat(i2.element.css("top")) + (i2.position.top - i2.originalPosition.top) || null;
    i2.element.animate(V.extend(n2, a2 && o2 ? { top: a2, left: o2 } : {}), { duration: t2.animateDuration, easing: t2.animateEasing, step: function() {
      var t3 = { width: parseFloat(i2.element.css("width")), height: parseFloat(i2.element.css("height")), top: parseFloat(i2.element.css("top")), left: parseFloat(i2.element.css("left")) };
      s2 && s2.length && V(s2[0]).css({ width: t3.width, height: t3.height }), i2._updateCache(t3), i2._propagate("resize", e2);
    } });
  } }), V.ui.plugin.add("resizable", "containment", { start: function() {
    var i2, s2, t2, e2, n2 = V(this).resizable("instance"), o2 = n2.options, a2 = n2.element, o2 = o2.containment, a2 = o2 instanceof V ? o2.get(0) : /parent/.test(o2) ? a2.parent().get(0) : o2;
    a2 && (n2.containerElement = V(a2), /document/.test(o2) || o2 === document ? (n2.containerOffset = { left: 0, top: 0 }, n2.containerPosition = { left: 0, top: 0 }, n2.parentData = { element: V(document), left: 0, top: 0, width: V(document).width(), height: V(document).height() || document.body.parentNode.scrollHeight }) : (i2 = V(a2), s2 = [], V(["Top", "Right", "Left", "Bottom"]).each(function(t3, e3) {
      s2[t3] = n2._num(i2.css("padding" + e3));
    }), n2.containerOffset = i2.offset(), n2.containerPosition = i2.position(), n2.containerSize = { height: i2.innerHeight() - s2[3], width: i2.innerWidth() - s2[1] }, o2 = n2.containerOffset, e2 = n2.containerSize.height, t2 = n2.containerSize.width, t2 = n2._hasScroll(a2, "left") ? a2.scrollWidth : t2, e2 = n2._hasScroll(a2) ? a2.scrollHeight : e2, n2.parentData = { element: a2, left: o2.left, top: o2.top, width: t2, height: e2 }));
  }, resize: function(t2) {
    var e2 = V(this).resizable("instance"), i2 = e2.options, s2 = e2.containerOffset, n2 = e2.position, t2 = e2._aspectRatio || t2.shiftKey, o2 = { top: 0, left: 0 }, a2 = e2.containerElement, r2 = true;
    a2[0] !== document && /static/.test(a2.css("position")) && (o2 = s2), n2.left < (e2._helper ? s2.left : 0) && (e2.size.width = e2.size.width + (e2._helper ? e2.position.left - s2.left : e2.position.left - o2.left), t2 && (e2.size.height = e2.size.width / e2.aspectRatio, r2 = false), e2.position.left = i2.helper ? s2.left : 0), n2.top < (e2._helper ? s2.top : 0) && (e2.size.height = e2.size.height + (e2._helper ? e2.position.top - s2.top : e2.position.top), t2 && (e2.size.width = e2.size.height * e2.aspectRatio, r2 = false), e2.position.top = e2._helper ? s2.top : 0), a2 = e2.containerElement.get(0) === e2.element.parent().get(0), i2 = /relative|absolute/.test(e2.containerElement.css("position")), a2 && i2 ? (e2.offset.left = e2.parentData.left + e2.position.left, e2.offset.top = e2.parentData.top + e2.position.top) : (e2.offset.left = e2.element.offset().left, e2.offset.top = e2.element.offset().top), n2 = Math.abs(e2.sizeDiff.width + (e2._helper ? e2.offset.left - o2.left : e2.offset.left - s2.left)), a2 = Math.abs(e2.sizeDiff.height + (e2._helper ? e2.offset.top - o2.top : e2.offset.top - s2.top)), n2 + e2.size.width >= e2.parentData.width && (e2.size.width = e2.parentData.width - n2, t2) && (e2.size.height = e2.size.width / e2.aspectRatio, r2 = false), a2 + e2.size.height >= e2.parentData.height && (e2.size.height = e2.parentData.height - a2, t2) && (e2.size.width = e2.size.height * e2.aspectRatio, r2 = false), r2 || (e2.position.left = e2.prevPosition.left, e2.position.top = e2.prevPosition.top, e2.size.width = e2.prevSize.width, e2.size.height = e2.prevSize.height);
  }, stop: function() {
    var t2 = V(this).resizable("instance"), e2 = t2.options, i2 = t2.containerOffset, s2 = t2.containerPosition, n2 = t2.containerElement, o2 = V(t2.helper), a2 = o2.offset(), r2 = o2.outerWidth() - t2.sizeDiff.width, o2 = o2.outerHeight() - t2.sizeDiff.height;
    t2._helper && !e2.animate && /relative/.test(n2.css("position")) && V(this).css({ left: a2.left - s2.left - i2.left, width: r2, height: o2 }), t2._helper && !e2.animate && /static/.test(n2.css("position")) && V(this).css({ left: a2.left - s2.left - i2.left, width: r2, height: o2 });
  } }), V.ui.plugin.add("resizable", "alsoResize", { start: function() {
    var t2 = V(this).resizable("instance").options;
    V(t2.alsoResize).each(function() {
      var t3 = V(this);
      t3.data("ui-resizable-alsoresize", { width: parseFloat(t3.css("width")), height: parseFloat(t3.css("height")), left: parseFloat(t3.css("left")), top: parseFloat(t3.css("top")) });
    });
  }, resize: function(t2, i2) {
    var e2 = V(this).resizable("instance"), s2 = e2.options, n2 = e2.originalSize, o2 = e2.originalPosition, a2 = { height: e2.size.height - n2.height || 0, width: e2.size.width - n2.width || 0, top: e2.position.top - o2.top || 0, left: e2.position.left - o2.left || 0 };
    V(s2.alsoResize).each(function() {
      var t3 = V(this), s3 = V(this).data("ui-resizable-alsoresize"), n3 = {}, e3 = t3.parents(i2.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
      V.each(e3, function(t4, e4) {
        var i3 = (s3[e4] || 0) + (a2[e4] || 0);
        i3 && 0 <= i3 && (n3[e4] = i3 || null);
      }), t3.css(n3);
    });
  }, stop: function() {
    V(this).removeData("ui-resizable-alsoresize");
  } }), V.ui.plugin.add("resizable", "ghost", { start: function() {
    var t2 = V(this).resizable("instance"), e2 = t2.size;
    t2.ghost = t2.originalElement.clone(), t2.ghost.css({ opacity: 0.25, display: "block", position: "relative", height: e2.height, width: e2.width, margin: 0, left: 0, top: 0 }), t2._addClass(t2.ghost, "ui-resizable-ghost"), false !== V.uiBackCompat && "string" == typeof t2.options.ghost && t2.ghost.addClass(this.options.ghost), t2.ghost.appendTo(t2.helper);
  }, resize: function() {
    var t2 = V(this).resizable("instance");
    t2.ghost && t2.ghost.css({ position: "relative", height: t2.size.height, width: t2.size.width });
  }, stop: function() {
    var t2 = V(this).resizable("instance");
    t2.ghost && t2.helper && t2.helper.get(0).removeChild(t2.ghost.get(0));
  } }), V.ui.plugin.add("resizable", "grid", { resize: function() {
    var t2, e2 = V(this).resizable("instance"), i2 = e2.options, s2 = e2.size, n2 = e2.originalSize, o2 = e2.originalPosition, a2 = e2.axis, r2 = "number" == typeof i2.grid ? [i2.grid, i2.grid] : i2.grid, l2 = r2[0] || 1, h2 = r2[1] || 1, c2 = Math.round((s2.width - n2.width) / l2) * l2, s2 = Math.round((s2.height - n2.height) / h2) * h2, u2 = n2.width + c2, d2 = n2.height + s2, p2 = i2.maxWidth && i2.maxWidth < u2, f2 = i2.maxHeight && i2.maxHeight < d2, g2 = i2.minWidth && i2.minWidth > u2, m3 = i2.minHeight && i2.minHeight > d2;
    i2.grid = r2, g2 && (u2 += l2), m3 && (d2 += h2), p2 && (u2 -= l2), f2 && (d2 -= h2), /^(se|s|e)$/.test(a2) ? (e2.size.width = u2, e2.size.height = d2) : /^(ne)$/.test(a2) ? (e2.size.width = u2, e2.size.height = d2, e2.position.top = o2.top - s2) : /^(sw)$/.test(a2) ? (e2.size.width = u2, e2.size.height = d2, e2.position.left = o2.left - c2) : ((d2 - h2 <= 0 || u2 - l2 <= 0) && (t2 = e2._getPaddingPlusBorderDimensions(this)), 0 < d2 - h2 ? (e2.size.height = d2, e2.position.top = o2.top - s2) : (d2 = h2 - t2.height, e2.size.height = d2, e2.position.top = o2.top + n2.height - d2), 0 < u2 - l2 ? (e2.size.width = u2, e2.position.left = o2.left - c2) : (u2 = l2 - t2.width, e2.size.width = u2, e2.position.left = o2.left + n2.width - u2));
  } }), V.ui.resizable, V.widget("ui.dialog", { version: "1.13.3", options: { appendTo: "body", autoOpen: true, buttons: [], classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" }, closeOnEscape: true, closeText: "Close", draggable: true, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: false, position: { my: "center", at: "center", of: window, collision: "fit", using: function(t2) {
    var e2 = V(this).css(t2).offset().top;
    e2 < 0 && V(this).css("top", t2.top - e2);
  } }, resizable: true, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, sizeRelatedOptions: { buttons: true, height: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, width: true }, resizableRelatedOptions: { maxHeight: true, maxWidth: true, minHeight: true, minWidth: true }, _create: function() {
    this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = false), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && V.fn.draggable && this._makeDraggable(), this.options.resizable && V.fn.resizable && this._makeResizable(), this._isOpen = false, this._trackFocus();
  }, _init: function() {
    this.options.autoOpen && this.open();
  }, _appendTo: function() {
    var t2 = this.options.appendTo;
    return t2 && (t2.jquery || t2.nodeType) ? V(t2) : this.document.find(t2 || "body").eq(0);
  }, _destroy: function() {
    var t2, e2 = this.originalPosition;
    this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t2 = e2.parent.children().eq(e2.index)).length && t2[0] !== this.element[0] ? t2.before(this.element) : e2.parent.append(this.element);
  }, widget: function() {
    return this.uiDialog;
  }, disable: V.noop, enable: V.noop, close: function(t2) {
    var e2 = this;
    this._isOpen && false !== this._trigger("beforeClose", t2) && (this._isOpen = false, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || V.ui.safeBlur(V.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
      e2._trigger("close", t2);
    }));
  }, isOpen: function() {
    return this._isOpen;
  }, moveToTop: function() {
    this._moveToTop();
  }, _moveToTop: function(t2, e2) {
    var i2 = false, s2 = this.uiDialog.siblings(".ui-front:visible").map(function() {
      return +V(this).css("z-index");
    }).get(), s2 = Math.max.apply(null, s2);
    return s2 >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s2 + 1), i2 = true), i2 && !e2 && this._trigger("focus", t2), i2;
  }, open: function() {
    var t2 = this;
    this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = true, this.opener = V(V.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, true), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
      t2._focusTabbable(), t2._trigger("focus");
    }), this._makeFocusTarget(), this._trigger("open"));
  }, _focusTabbable: function() {
    var t2 = this._focusedElement;
    (t2 = (t2 = (t2 = (t2 = (t2 = t2 || this.element.find("[autofocus]")).length ? t2 : this.element.find(":tabbable")).length ? t2 : this.uiDialogButtonPane.find(":tabbable")).length ? t2 : this.uiDialogTitlebarClose.filter(":tabbable")).length ? t2 : this.uiDialog).eq(0).trigger("focus");
  }, _restoreTabbableFocus: function() {
    var t2 = V.ui.safeActiveElement(this.document[0]);
    this.uiDialog[0] === t2 || V.contains(this.uiDialog[0], t2) || this._focusTabbable();
  }, _keepFocus: function(t2) {
    t2.preventDefault(), this._restoreTabbableFocus(), this._delay(this._restoreTabbableFocus);
  }, _createWrapper: function() {
    this.uiDialog = V("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, { keydown: function(t2) {
      var e2, i2, s2;
      this.options.closeOnEscape && !t2.isDefaultPrevented() && t2.keyCode && t2.keyCode === V.ui.keyCode.ESCAPE ? (t2.preventDefault(), this.close(t2)) : t2.keyCode !== V.ui.keyCode.TAB || t2.isDefaultPrevented() || (e2 = this.uiDialog.find(":tabbable"), i2 = e2.first(), s2 = e2.last(), t2.target !== s2[0] && t2.target !== this.uiDialog[0] || t2.shiftKey ? t2.target !== i2[0] && t2.target !== this.uiDialog[0] || !t2.shiftKey || (this._delay(function() {
        s2.trigger("focus");
      }), t2.preventDefault()) : (this._delay(function() {
        i2.trigger("focus");
      }), t2.preventDefault()));
    }, mousedown: function(t2) {
      this._moveToTop(t2) && this._focusTabbable();
    } }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") });
  }, _createTitlebar: function() {
    var t2;
    this.uiDialogTitlebar = V("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, { mousedown: function(t3) {
      V(t3.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
    } }), this.uiDialogTitlebarClose = V("<button type='button'></button>").button({ label: V("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: false }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, { click: function(t3) {
      t3.preventDefault(), this.close(t3);
    } }), t2 = V("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(t2, "ui-dialog-title"), this._title(t2), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({ "aria-labelledby": t2.attr("id") });
  }, _title: function(t2) {
    this.options.title ? t2.text(this.options.title) : t2.html("&#160;");
  }, _createButtonPane: function() {
    this.uiDialogButtonPane = V("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = V("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons();
  }, _createButtons: function() {
    var s2 = this, t2 = this.options.buttons;
    this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), V.isEmptyObject(t2) || Array.isArray(t2) && !t2.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (V.each(t2, function(t3, e2) {
      var i2;
      e2 = V.extend({ type: "button" }, e2 = "function" == typeof e2 ? { click: e2, text: t3 } : e2), i2 = e2.click, t3 = { icon: e2.icon, iconPosition: e2.iconPosition, showLabel: e2.showLabel, icons: e2.icons, text: e2.text }, delete e2.click, delete e2.icon, delete e2.iconPosition, delete e2.showLabel, delete e2.icons, "boolean" == typeof e2.text && delete e2.text, V("<button></button>", e2).button(t3).appendTo(s2.uiButtonSet).on("click", function() {
        i2.apply(s2.element[0], arguments);
      });
    }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog));
  }, _makeDraggable: function() {
    var n2 = this, o2 = this.options;
    function a2(t2) {
      return { position: t2.position, offset: t2.offset };
    }
    this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function(t2, e2) {
      n2._addClass(V(this), "ui-dialog-dragging"), n2._blockFrames(), n2._trigger("dragStart", t2, a2(e2));
    }, drag: function(t2, e2) {
      n2._trigger("drag", t2, a2(e2));
    }, stop: function(t2, e2) {
      var i2 = e2.offset.left - n2.document.scrollLeft(), s2 = e2.offset.top - n2.document.scrollTop();
      o2.position = { my: "left top", at: "left" + (0 <= i2 ? "+" : "") + i2 + " top" + (0 <= s2 ? "+" : "") + s2, of: n2.window }, n2._removeClass(V(this), "ui-dialog-dragging"), n2._unblockFrames(), n2._trigger("dragStop", t2, a2(e2));
    } });
  }, _makeResizable: function() {
    var n2 = this, o2 = this.options, t2 = o2.resizable, e2 = this.uiDialog.css("position"), t2 = "string" == typeof t2 ? t2 : "n,e,s,w,se,sw,ne,nw";
    function a2(t3) {
      return { originalPosition: t3.originalPosition, originalSize: t3.originalSize, position: t3.position, size: t3.size };
    }
    this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: o2.maxWidth, maxHeight: o2.maxHeight, minWidth: o2.minWidth, minHeight: this._minHeight(), handles: t2, start: function(t3, e3) {
      n2._addClass(V(this), "ui-dialog-resizing"), n2._blockFrames(), n2._trigger("resizeStart", t3, a2(e3));
    }, resize: function(t3, e3) {
      n2._trigger("resize", t3, a2(e3));
    }, stop: function(t3, e3) {
      var i2 = n2.uiDialog.offset(), s2 = i2.left - n2.document.scrollLeft(), i2 = i2.top - n2.document.scrollTop();
      o2.height = n2.uiDialog.height(), o2.width = n2.uiDialog.width(), o2.position = { my: "left top", at: "left" + (0 <= s2 ? "+" : "") + s2 + " top" + (0 <= i2 ? "+" : "") + i2, of: n2.window }, n2._removeClass(V(this), "ui-dialog-resizing"), n2._unblockFrames(), n2._trigger("resizeStop", t3, a2(e3));
    } }).css("position", e2);
  }, _trackFocus: function() {
    this._on(this.widget(), { focusin: function(t2) {
      this._makeFocusTarget(), this._focusedElement = V(t2.target);
    } });
  }, _makeFocusTarget: function() {
    this._untrackInstance(), this._trackingInstances().unshift(this);
  }, _untrackInstance: function() {
    var t2 = this._trackingInstances(), e2 = V.inArray(this, t2);
    -1 !== e2 && t2.splice(e2, 1);
  }, _trackingInstances: function() {
    var t2 = this.document.data("ui-dialog-instances");
    return t2 || this.document.data("ui-dialog-instances", t2 = []), t2;
  }, _minHeight: function() {
    var t2 = this.options;
    return "auto" === t2.height ? t2.minHeight : Math.min(t2.minHeight, t2.height);
  }, _position: function() {
    var t2 = this.uiDialog.is(":visible");
    t2 || this.uiDialog.show(), this.uiDialog.position(this.options.position), t2 || this.uiDialog.hide();
  }, _setOptions: function(t2) {
    var i2 = this, s2 = false, n2 = {};
    V.each(t2, function(t3, e2) {
      i2._setOption(t3, e2), t3 in i2.sizeRelatedOptions && (s2 = true), t3 in i2.resizableRelatedOptions && (n2[t3] = e2);
    }), s2 && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n2);
  }, _setOption: function(t2, e2) {
    var i2, s2 = this.uiDialog;
    "disabled" !== t2 && (this._super(t2, e2), "appendTo" === t2 && this.uiDialog.appendTo(this._appendTo()), "buttons" === t2 && this._createButtons(), "closeText" === t2 && this.uiDialogTitlebarClose.button({ label: V("<a>").text("" + this.options.closeText).html() }), "draggable" === t2 && ((i2 = s2.is(":data(ui-draggable)")) && !e2 && s2.draggable("destroy"), !i2) && e2 && this._makeDraggable(), "position" === t2 && this._position(), "resizable" === t2 && ((i2 = s2.is(":data(ui-resizable)")) && !e2 && s2.resizable("destroy"), i2 && "string" == typeof e2 && s2.resizable("option", "handles", e2), i2 || false === e2 || this._makeResizable()), "title" === t2) && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));
  }, _size: function() {
    var t2, e2, i2, s2 = this.options;
    this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), s2.minWidth > s2.width && (s2.width = s2.minWidth), t2 = this.uiDialog.css({ height: "auto", width: s2.width }).outerHeight(), e2 = Math.max(0, s2.minHeight - t2), i2 = "number" == typeof s2.maxHeight ? Math.max(0, s2.maxHeight - t2) : "none", "auto" === s2.height ? this.element.css({ minHeight: e2, maxHeight: i2, height: "auto" }) : this.element.height(Math.max(0, s2.height - t2)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
  }, _blockFrames: function() {
    this.iframeBlocks = this.document.find("iframe").map(function() {
      var t2 = V(this);
      return V("<div>").css({ position: "absolute", width: t2.outerWidth(), height: t2.outerHeight() }).appendTo(t2.parent()).offset(t2.offset())[0];
    });
  }, _unblockFrames: function() {
    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
  }, _allowInteraction: function(t2) {
    return !!V(t2.target).closest(".ui-dialog").length || !!V(t2.target).closest(".ui-datepicker").length;
  }, _createOverlay: function() {
    var i2, s2;
    this.options.modal && (i2 = V.fn.jquery.substring(0, 4), s2 = true, this._delay(function() {
      s2 = false;
    }), this.document.data("ui-dialog-overlays") || this.document.on("focusin.ui-dialog", function(t2) {
      var e2;
      s2 || (e2 = this._trackingInstances()[0])._allowInteraction(t2) || (t2.preventDefault(), e2._focusTabbable(), "3.4." !== i2 && "3.5." !== i2 && "3.6." !== i2) || e2._delay(e2._restoreTabbableFocus);
    }.bind(this)), this.overlay = V("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1));
  }, _destroyOverlay: function() {
    var t2;
    this.options.modal && this.overlay && ((t2 = this.document.data("ui-dialog-overlays") - 1) ? this.document.data("ui-dialog-overlays", t2) : (this.document.off("focusin.ui-dialog"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null);
  } }), false !== V.uiBackCompat && V.widget("ui.dialog", V.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function() {
    this._super(), this.uiDialog.addClass(this.options.dialogClass);
  }, _setOption: function(t2, e2) {
    "dialogClass" === t2 && this.uiDialog.removeClass(this.options.dialogClass).addClass(e2), this._superApply(arguments);
  } }), V.ui.dialog;
  function ct(t2, e2, i2) {
    return e2 <= t2 && t2 < e2 + i2;
  }
  V.widget("ui.droppable", { version: "1.13.3", widgetEventPrefix: "drop", options: { accept: "*", addClasses: true, greedy: false, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function() {
    var t2, e2 = this.options, i2 = e2.accept;
    this.isover = false, this.isout = true, this.accept = "function" == typeof i2 ? i2 : function(t3) {
      return t3.is(i2);
    }, this.proportions = function() {
      if (!arguments.length) return t2 = t2 || { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight };
      t2 = arguments[0];
    }, this._addToManager(e2.scope), e2.addClasses && this._addClass("ui-droppable");
  }, _addToManager: function(t2) {
    V.ui.ddmanager.droppables[t2] = V.ui.ddmanager.droppables[t2] || [], V.ui.ddmanager.droppables[t2].push(this);
  }, _splice: function(t2) {
    for (var e2 = 0; e2 < t2.length; e2++) t2[e2] === this && t2.splice(e2, 1);
  }, _destroy: function() {
    var t2 = V.ui.ddmanager.droppables[this.options.scope];
    this._splice(t2);
  }, _setOption: function(t2, e2) {
    var i2;
    "accept" === t2 ? this.accept = "function" == typeof e2 ? e2 : function(t3) {
      return t3.is(e2);
    } : "scope" === t2 && (i2 = V.ui.ddmanager.droppables[this.options.scope], this._splice(i2), this._addToManager(e2)), this._super(t2, e2);
  }, _activate: function(t2) {
    var e2 = V.ui.ddmanager.current;
    this._addActiveClass(), e2 && this._trigger("activate", t2, this.ui(e2));
  }, _deactivate: function(t2) {
    var e2 = V.ui.ddmanager.current;
    this._removeActiveClass(), e2 && this._trigger("deactivate", t2, this.ui(e2));
  }, _over: function(t2) {
    var e2 = V.ui.ddmanager.current;
    e2 && (e2.currentItem || e2.element)[0] !== this.element[0] && this.accept.call(this.element[0], e2.currentItem || e2.element) && (this._addHoverClass(), this._trigger("over", t2, this.ui(e2)));
  }, _out: function(t2) {
    var e2 = V.ui.ddmanager.current;
    e2 && (e2.currentItem || e2.element)[0] !== this.element[0] && this.accept.call(this.element[0], e2.currentItem || e2.element) && (this._removeHoverClass(), this._trigger("out", t2, this.ui(e2)));
  }, _drop: function(e2, t2) {
    var i2 = t2 || V.ui.ddmanager.current, s2 = false;
    return !(!i2 || (i2.currentItem || i2.element)[0] === this.element[0] || (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
      var t3 = V(this).droppable("instance");
      if (t3.options.greedy && !t3.options.disabled && t3.options.scope === i2.options.scope && t3.accept.call(t3.element[0], i2.currentItem || i2.element) && V.ui.intersect(i2, V.extend(t3, { offset: t3.element.offset() }), t3.options.tolerance, e2)) return !(s2 = true);
    }), s2) || !this.accept.call(this.element[0], i2.currentItem || i2.element)) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e2, this.ui(i2)), this.element);
  }, ui: function(t2) {
    return { draggable: t2.currentItem || t2.element, helper: t2.helper, position: t2.position, offset: t2.positionAbs };
  }, _addHoverClass: function() {
    this._addClass("ui-droppable-hover");
  }, _removeHoverClass: function() {
    this._removeClass("ui-droppable-hover");
  }, _addActiveClass: function() {
    this._addClass("ui-droppable-active");
  }, _removeActiveClass: function() {
    this._removeClass("ui-droppable-active");
  } }), V.ui.intersect = function(t2, e2, i2, s2) {
    if (!e2.offset) return false;
    var n2 = (t2.positionAbs || t2.position.absolute).left + t2.margins.left, o2 = (t2.positionAbs || t2.position.absolute).top + t2.margins.top, a2 = n2 + t2.helperProportions.width, r2 = o2 + t2.helperProportions.height, l2 = e2.offset.left, h2 = e2.offset.top, c2 = l2 + e2.proportions().width, u2 = h2 + e2.proportions().height;
    switch (i2) {
      case "fit":
        return l2 <= n2 && a2 <= c2 && h2 <= o2 && r2 <= u2;
      case "intersect":
        return l2 < n2 + t2.helperProportions.width / 2 && a2 - t2.helperProportions.width / 2 < c2 && h2 < o2 + t2.helperProportions.height / 2 && r2 - t2.helperProportions.height / 2 < u2;
      case "pointer":
        return ct(s2.pageY, h2, e2.proportions().height) && ct(s2.pageX, l2, e2.proportions().width);
      case "touch":
        return (h2 <= o2 && o2 <= u2 || h2 <= r2 && r2 <= u2 || o2 < h2 && u2 < r2) && (l2 <= n2 && n2 <= c2 || l2 <= a2 && a2 <= c2 || n2 < l2 && c2 < a2);
      default:
        return false;
    }
  }, !(V.ui.ddmanager = { current: null, droppables: { default: [] }, prepareOffsets: function(t2, e2) {
    var i2, s2, n2 = V.ui.ddmanager.droppables[t2.options.scope] || [], o2 = e2 ? e2.type : null, a2 = (t2.currentItem || t2.element).find(":data(ui-droppable)").addBack();
    t: for (i2 = 0; i2 < n2.length; i2++) if (!(n2[i2].options.disabled || t2 && !n2[i2].accept.call(n2[i2].element[0], t2.currentItem || t2.element))) {
      for (s2 = 0; s2 < a2.length; s2++) if (a2[s2] === n2[i2].element[0]) {
        n2[i2].proportions().height = 0;
        continue t;
      }
      n2[i2].visible = "none" !== n2[i2].element.css("display"), n2[i2].visible && ("mousedown" === o2 && n2[i2]._activate.call(n2[i2], e2), n2[i2].offset = n2[i2].element.offset(), n2[i2].proportions({ width: n2[i2].element[0].offsetWidth, height: n2[i2].element[0].offsetHeight }));
    }
  }, drop: function(t2, e2) {
    var i2 = false;
    return V.each((V.ui.ddmanager.droppables[t2.options.scope] || []).slice(), function() {
      this.options && (!this.options.disabled && this.visible && V.ui.intersect(t2, this, this.options.tolerance, e2) && (i2 = this._drop.call(this, e2) || i2), !this.options.disabled) && this.visible && this.accept.call(this.element[0], t2.currentItem || t2.element) && (this.isout = true, this.isover = false, this._deactivate.call(this, e2));
    }), i2;
  }, dragStart: function(t2, e2) {
    t2.element.parentsUntil("body").on("scroll.droppable", function() {
      t2.options.refreshPositions || V.ui.ddmanager.prepareOffsets(t2, e2);
    });
  }, drag: function(n2, o2) {
    n2.options.refreshPositions && V.ui.ddmanager.prepareOffsets(n2, o2), V.each(V.ui.ddmanager.droppables[n2.options.scope] || [], function() {
      var t2, e2, i2, s2;
      this.options.disabled || this.greedyChild || !this.visible || (s2 = !(s2 = V.ui.intersect(n2, this, this.options.tolerance, o2)) && this.isover ? "isout" : s2 && !this.isover ? "isover" : null) && (this.options.greedy && (e2 = this.options.scope, (i2 = this.element.parents(":data(ui-droppable)").filter(function() {
        return V(this).droppable("instance").options.scope === e2;
      })).length) && ((t2 = V(i2[0]).droppable("instance")).greedyChild = "isover" === s2), t2 && "isover" === s2 && (t2.isover = false, t2.isout = true, t2._out.call(t2, o2)), this[s2] = true, this["isout" === s2 ? "isover" : "isout"] = false, this["isover" === s2 ? "_over" : "_out"].call(this, o2), t2) && "isout" === s2 && (t2.isout = false, t2.isover = true, t2._over.call(t2, o2));
    });
  }, dragStop: function(t2, e2) {
    t2.element.parentsUntil("body").off("scroll.droppable"), t2.options.refreshPositions || V.ui.ddmanager.prepareOffsets(t2, e2);
  } }) !== V.uiBackCompat && V.widget("ui.droppable", V.ui.droppable, { options: { hoverClass: false, activeClass: false }, _addActiveClass: function() {
    this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
  }, _removeActiveClass: function() {
    this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
  }, _addHoverClass: function() {
    this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
  }, _removeHoverClass: function() {
    this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
  } });
  V.ui.droppable, V.widget("ui.progressbar", { version: "1.13.3", options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null }, min: 0, _create: function() {
    this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({ role: "progressbar", "aria-valuemin": this.min }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = V("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
  }, _destroy: function() {
    this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
  }, value: function(t2) {
    if (void 0 === t2) return this.options.value;
    this.options.value = this._constrainedValue(t2), this._refreshValue();
  }, _constrainedValue: function(t2) {
    return void 0 === t2 && (t2 = this.options.value), this.indeterminate = false === t2, "number" != typeof t2 && (t2 = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t2));
  }, _setOptions: function(t2) {
    var e2 = t2.value;
    delete t2.value, this._super(t2), this.options.value = this._constrainedValue(e2), this._refreshValue();
  }, _setOption: function(t2, e2) {
    "max" === t2 && (e2 = Math.max(this.min, e2)), this._super(t2, e2);
  }, _setOptionDisabled: function(t2) {
    this._super(t2), this.element.attr("aria-disabled", t2), this._toggleClass(null, "ui-state-disabled", !!t2);
  }, _percentage: function() {
    return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
  }, _refreshValue: function() {
    var t2 = this.options.value, e2 = this._percentage();
    this.valueDiv.toggle(this.indeterminate || t2 > this.min).width(e2.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t2 === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = V("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": t2 }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t2 && (this.oldValue = t2, this._trigger("change")), t2 === this.options.max && this._trigger("complete");
  } }), V.widget("ui.selectable", V.ui.mouse, { version: "1.13.3", options: { appendTo: "body", autoRefresh: true, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function() {
    var i2 = this;
    this._addClass("ui-selectable"), this.dragged = false, this.refresh = function() {
      i2.elementPos = V(i2.element[0]).offset(), i2.selectees = V(i2.options.filter, i2.element[0]), i2._addClass(i2.selectees, "ui-selectee"), i2.selectees.each(function() {
        var t2 = V(this), e2 = t2.offset(), e2 = { left: e2.left - i2.elementPos.left, top: e2.top - i2.elementPos.top };
        V.data(this, "selectable-item", { element: this, $element: t2, left: e2.left, top: e2.top, right: e2.left + t2.outerWidth(), bottom: e2.top + t2.outerHeight(), startselected: false, selected: t2.hasClass("ui-selected"), selecting: t2.hasClass("ui-selecting"), unselecting: t2.hasClass("ui-unselecting") });
      });
    }, this.refresh(), this._mouseInit(), this.helper = V("<div>"), this._addClass(this.helper, "ui-selectable-helper");
  }, _destroy: function() {
    this.selectees.removeData("selectable-item"), this._mouseDestroy();
  }, _mouseStart: function(i2) {
    var s2 = this, t2 = this.options;
    this.opos = [i2.pageX, i2.pageY], this.elementPos = V(this.element[0]).offset(), this.options.disabled || (this.selectees = V(t2.filter, this.element[0]), this._trigger("start", i2), V(t2.appendTo).append(this.helper), this.helper.css({ left: i2.pageX, top: i2.pageY, width: 0, height: 0 }), t2.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
      var t3 = V.data(this, "selectable-item");
      t3.startselected = true, i2.metaKey || i2.ctrlKey || (s2._removeClass(t3.$element, "ui-selected"), t3.selected = false, s2._addClass(t3.$element, "ui-unselecting"), t3.unselecting = true, s2._trigger("unselecting", i2, { unselecting: t3.element }));
    }), V(i2.target).parents().addBack().each(function() {
      var t3, e2 = V.data(this, "selectable-item");
      if (e2) return t3 = !i2.metaKey && !i2.ctrlKey || !e2.$element.hasClass("ui-selected"), s2._removeClass(e2.$element, t3 ? "ui-unselecting" : "ui-selected")._addClass(e2.$element, t3 ? "ui-selecting" : "ui-unselecting"), e2.unselecting = !t3, e2.selecting = t3, (e2.selected = t3) ? s2._trigger("selecting", i2, { selecting: e2.element }) : s2._trigger("unselecting", i2, { unselecting: e2.element }), false;
    }));
  }, _mouseDrag: function(s2) {
    var t2, n2, o2, a2, r2, l2, h2;
    if (this.dragged = true, !this.options.disabled) return o2 = (n2 = this).options, a2 = this.opos[0], r2 = this.opos[1], l2 = s2.pageX, h2 = s2.pageY, l2 < a2 && (t2 = l2, l2 = a2, a2 = t2), h2 < r2 && (t2 = h2, h2 = r2, r2 = t2), this.helper.css({ left: a2, top: r2, width: l2 - a2, height: h2 - r2 }), this.selectees.each(function() {
      var t3 = V.data(this, "selectable-item"), e2 = false, i2 = {};
      t3 && t3.element !== n2.element[0] && (i2.left = t3.left + n2.elementPos.left, i2.right = t3.right + n2.elementPos.left, i2.top = t3.top + n2.elementPos.top, i2.bottom = t3.bottom + n2.elementPos.top, "touch" === o2.tolerance ? e2 = !(l2 < i2.left || i2.right < a2 || h2 < i2.top || i2.bottom < r2) : "fit" === o2.tolerance && (e2 = a2 < i2.left && i2.right < l2 && r2 < i2.top && i2.bottom < h2), e2 ? (t3.selected && (n2._removeClass(t3.$element, "ui-selected"), t3.selected = false), t3.unselecting && (n2._removeClass(t3.$element, "ui-unselecting"), t3.unselecting = false), t3.selecting || (n2._addClass(t3.$element, "ui-selecting"), t3.selecting = true, n2._trigger("selecting", s2, { selecting: t3.element }))) : (t3.selecting && ((s2.metaKey || s2.ctrlKey) && t3.startselected ? (n2._removeClass(t3.$element, "ui-selecting"), t3.selecting = false, n2._addClass(t3.$element, "ui-selected"), t3.selected = true) : (n2._removeClass(t3.$element, "ui-selecting"), t3.selecting = false, t3.startselected && (n2._addClass(t3.$element, "ui-unselecting"), t3.unselecting = true), n2._trigger("unselecting", s2, { unselecting: t3.element }))), !t3.selected || s2.metaKey || s2.ctrlKey || t3.startselected || (n2._removeClass(t3.$element, "ui-selected"), t3.selected = false, n2._addClass(t3.$element, "ui-unselecting"), t3.unselecting = true, n2._trigger("unselecting", s2, { unselecting: t3.element }))));
    }), false;
  }, _mouseStop: function(e2) {
    var i2 = this;
    return this.dragged = false, V(".ui-unselecting", this.element[0]).each(function() {
      var t2 = V.data(this, "selectable-item");
      i2._removeClass(t2.$element, "ui-unselecting"), t2.unselecting = false, t2.startselected = false, i2._trigger("unselected", e2, { unselected: t2.element });
    }), V(".ui-selecting", this.element[0]).each(function() {
      var t2 = V.data(this, "selectable-item");
      i2._removeClass(t2.$element, "ui-selecting")._addClass(t2.$element, "ui-selected"), t2.selecting = false, t2.selected = true, t2.startselected = true, i2._trigger("selected", e2, { selected: t2.element });
    }), this._trigger("stop", e2), this.helper.remove(), false;
  } }), V.widget("ui.selectmenu", [V.ui.formResetMixin, { version: "1.13.3", defaultElement: "<select>", options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: false, change: null, close: null, focus: null, open: null, select: null }, _create: function() {
    var t2 = this.element.uniqueId().attr("id");
    this.ids = { element: t2, button: t2 + "-button", menu: t2 + "-menu" }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = false, this.menuItems = V();
  }, _drawButton: function() {
    var t2, e2 = this, i2 = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
    this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, { click: function(t3) {
      this.button.trigger("focus"), t3.preventDefault();
    } }), this.element.hide(), this.button = V("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), t2 = V("<span>").appendTo(this.button), this._addClass(t2, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(i2).appendTo(this.button), false !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
      e2._rendered || e2._refreshMenu();
    });
  }, _drawMenu: function() {
    var i2 = this;
    this.menu = V("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = V("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({ classes: { "ui-menu": "ui-corner-bottom" }, role: "listbox", select: function(t2, e2) {
      t2.preventDefault(), i2._setSelection(), i2._select(e2.item.data("ui-selectmenu-item"), t2);
    }, focus: function(t2, e2) {
      e2 = e2.item.data("ui-selectmenu-item");
      null != i2.focusIndex && e2.index !== i2.focusIndex && (i2._trigger("focus", t2, { item: e2 }), i2.isOpen || i2._select(e2, t2)), i2.focusIndex = e2.index, i2.button.attr("aria-activedescendant", i2.menuItems.eq(e2.index).attr("id"));
    } }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
      return false;
    }, this.menuInstance._isDivider = function() {
      return false;
    };
  }, refresh: function() {
    this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton();
  }, _refreshMenu: function() {
    var t2 = this.element.find("option");
    this.menu.empty(), this._parseOptions(t2), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = true, t2.length && (t2 = this._getSelectedItem(), this.menuInstance.focus(null, t2), this._setAria(t2.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
  }, open: function(t2) {
    this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = true, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t2)));
  }, _position: function() {
    this.menuWrap.position(V.extend({ of: this.button }, this.options.position));
  }, close: function(t2) {
    this.isOpen && (this.isOpen = false, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t2));
  }, widget: function() {
    return this.button;
  }, menuWidget: function() {
    return this.menu;
  }, _renderButtonItem: function(t2) {
    var e2 = V("<span>");
    return this._setText(e2, t2.label), this._addClass(e2, "ui-selectmenu-text"), e2;
  }, _renderMenu: function(s2, t2) {
    var n2 = this, o2 = "";
    V.each(t2, function(t3, e2) {
      var i2;
      e2.optgroup !== o2 && (i2 = V("<li>", { text: e2.optgroup }), n2._addClass(i2, "ui-selectmenu-optgroup", "ui-menu-divider" + (e2.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), i2.appendTo(s2), o2 = e2.optgroup), n2._renderItemData(s2, e2);
    });
  }, _renderItemData: function(t2, e2) {
    return this._renderItem(t2, e2).data("ui-selectmenu-item", e2);
  }, _renderItem: function(t2, e2) {
    var i2 = V("<li>"), s2 = V("<div>", { title: e2.element.attr("title") });
    return e2.disabled && this._addClass(i2, null, "ui-state-disabled"), e2.hidden ? i2.prop("hidden", true) : this._setText(s2, e2.label), i2.append(s2).appendTo(t2);
  }, _setText: function(t2, e2) {
    e2 ? t2.text(e2) : t2.html("&#160;");
  }, _move: function(t2, e2) {
    var i2, s2 = ".ui-menu-item";
    this.isOpen ? i2 = this.menuItems.eq(this.focusIndex).parent("li") : (i2 = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s2 += ":not(.ui-state-disabled)"), (i2 = "first" === t2 || "last" === t2 ? i2["first" === t2 ? "prevAll" : "nextAll"](s2).eq(-1) : i2[t2 + "All"](s2).eq(0)).length && this.menuInstance.focus(e2, i2);
  }, _getSelectedItem: function() {
    return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
  }, _toggle: function(t2) {
    this[this.isOpen ? "close" : "open"](t2);
  }, _setSelection: function() {
    var t2;
    this.range && (window.getSelection ? ((t2 = window.getSelection()).removeAllRanges(), t2.addRange(this.range)) : this.range.select(), this.button.trigger("focus"));
  }, _documentClick: { mousedown: function(t2) {
    !this.isOpen || V(t2.target).closest(".ui-selectmenu-menu, #" + V.escapeSelector(this.ids.button)).length || this.close(t2);
  } }, _buttonEvents: { mousedown: function() {
    var t2;
    window.getSelection ? (t2 = window.getSelection()).rangeCount && (this.range = t2.getRangeAt(0)) : this.range = document.selection.createRange();
  }, click: function(t2) {
    this._setSelection(), this._toggle(t2);
  }, keydown: function(t2) {
    var e2 = true;
    switch (t2.keyCode) {
      case V.ui.keyCode.TAB:
      case V.ui.keyCode.ESCAPE:
        this.close(t2), e2 = false;
        break;
      case V.ui.keyCode.ENTER:
        this.isOpen && this._selectFocusedItem(t2);
        break;
      case V.ui.keyCode.UP:
        t2.altKey ? this._toggle(t2) : this._move("prev", t2);
        break;
      case V.ui.keyCode.DOWN:
        t2.altKey ? this._toggle(t2) : this._move("next", t2);
        break;
      case V.ui.keyCode.SPACE:
        this.isOpen ? this._selectFocusedItem(t2) : this._toggle(t2);
        break;
      case V.ui.keyCode.LEFT:
        this._move("prev", t2);
        break;
      case V.ui.keyCode.RIGHT:
        this._move("next", t2);
        break;
      case V.ui.keyCode.HOME:
      case V.ui.keyCode.PAGE_UP:
        this._move("first", t2);
        break;
      case V.ui.keyCode.END:
      case V.ui.keyCode.PAGE_DOWN:
        this._move("last", t2);
        break;
      default:
        this.menu.trigger(t2), e2 = false;
    }
    e2 && t2.preventDefault();
  } }, _selectFocusedItem: function(t2) {
    var e2 = this.menuItems.eq(this.focusIndex).parent("li");
    e2.hasClass("ui-state-disabled") || this._select(e2.data("ui-selectmenu-item"), t2);
  }, _select: function(t2, e2) {
    var i2 = this.element[0].selectedIndex;
    this.element[0].selectedIndex = t2.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t2)), this._setAria(t2), this._trigger("select", e2, { item: t2 }), t2.index !== i2 && this._trigger("change", e2, { item: t2 }), this.close(e2);
  }, _setAria: function(t2) {
    t2 = this.menuItems.eq(t2.index).attr("id");
    this.button.attr({ "aria-labelledby": t2, "aria-activedescendant": t2 }), this.menu.attr("aria-activedescendant", t2);
  }, _setOption: function(t2, e2) {
    var i2;
    "icons" === t2 && (i2 = this.button.find("span.ui-icon"), this._removeClass(i2, null, this.options.icons.button)._addClass(i2, null, e2.button)), this._super(t2, e2), "appendTo" === t2 && this.menuWrap.appendTo(this._appendTo()), "width" === t2 && this._resizeButton();
  }, _setOptionDisabled: function(t2) {
    this._super(t2), this.menuInstance.option("disabled", t2), this.button.attr("aria-disabled", t2), this._toggleClass(this.button, null, "ui-state-disabled", t2), this.element.prop("disabled", t2), t2 ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
  }, _appendTo: function() {
    var t2 = this.options.appendTo;
    return t2 = (t2 = (t2 = t2 && (t2.jquery || t2.nodeType ? V(t2) : this.document.find(t2).eq(0))) && t2[0] ? t2 : this.element.closest(".ui-front, dialog")).length ? t2 : this.document[0].body;
  }, _toggleAttr: function() {
    this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen);
  }, _resizeButton: function() {
    var t2 = this.options.width;
    false === t2 ? this.button.css("width", "") : (null === t2 && (t2 = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t2));
  }, _resizeMenu: function() {
    this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
  }, _getCreateOptions: function() {
    var t2 = this._super();
    return t2.disabled = this.element.prop("disabled"), t2;
  }, _parseOptions: function(t2) {
    var i2 = this, s2 = [];
    t2.each(function(t3, e2) {
      s2.push(i2._parseOption(V(e2), t3));
    }), this.items = s2;
  }, _parseOption: function(t2, e2) {
    var i2 = t2.parent("optgroup");
    return { element: t2, index: e2, value: t2.val(), label: t2.text(), hidden: i2.prop("hidden") || t2.prop("hidden"), optgroup: i2.attr("label") || "", disabled: i2.prop("disabled") || t2.prop("disabled") };
  }, _destroy: function() {
    this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
  } }]), V.widget("ui.slider", V.ui.mouse, { version: "1.13.3", widgetEventPrefix: "slide", options: { animate: false, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: false, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function() {
    this._keySliding = false, this._mouseSliding = false, this._animateOff = true, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = false;
  }, _refresh: function() {
    this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
  }, _createHandles: function() {
    var t2, e2 = this.options, i2 = this.element.find(".ui-slider-handle"), s2 = [], n2 = e2.values && e2.values.length || 1;
    for (i2.length > n2 && (i2.slice(n2).remove(), i2 = i2.slice(0, n2)), t2 = i2.length; t2 < n2; t2++) s2.push("<span tabindex='0'></span>");
    this.handles = i2.add(V(s2.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(t3) {
      V(this).data("ui-slider-handle-index", t3).attr("tabIndex", 0);
    });
  }, _createRange: function() {
    var t2 = this.options;
    t2.range ? (true === t2.range && (t2.values ? t2.values.length && 2 !== t2.values.length ? t2.values = [t2.values[0], t2.values[0]] : Array.isArray(t2.values) && (t2.values = t2.values.slice(0)) : t2.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = V("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== t2.range && "max" !== t2.range || this._addClass(this.range, "ui-slider-range-" + t2.range)) : (this.range && this.range.remove(), this.range = null);
  }, _setupEvents: function() {
    this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
  }, _destroy: function() {
    this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
  }, _mouseCapture: function(t2) {
    var i2, s2, n2, o2, e2, a2, r2 = this, l2 = this.options;
    return !l2.disabled && (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), e2 = { x: t2.pageX, y: t2.pageY }, i2 = this._normValueFromMouse(e2), s2 = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t3) {
      var e3 = Math.abs(i2 - r2.values(t3));
      (e3 < s2 || s2 === e3 && (t3 === r2._lastChangedValue || r2.values(t3) === l2.min)) && (s2 = e3, n2 = V(this), o2 = t3);
    }), false !== this._start(t2, o2)) && (this._mouseSliding = true, this._handleIndex = o2, this._addClass(n2, null, "ui-state-active"), n2.trigger("focus"), e2 = n2.offset(), a2 = !V(t2.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = a2 ? { left: 0, top: 0 } : { left: t2.pageX - e2.left - n2.width() / 2, top: t2.pageY - e2.top - n2.height() / 2 - (parseInt(n2.css("borderTopWidth"), 10) || 0) - (parseInt(n2.css("borderBottomWidth"), 10) || 0) + (parseInt(n2.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t2, o2, i2), this._animateOff = true);
  }, _mouseStart: function() {
    return true;
  }, _mouseDrag: function(t2) {
    var e2 = { x: t2.pageX, y: t2.pageY }, e2 = this._normValueFromMouse(e2);
    return this._slide(t2, this._handleIndex, e2), false;
  }, _mouseStop: function(t2) {
    return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = false, this._stop(t2, this._handleIndex), this._change(t2, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = false;
  }, _detectOrientation: function() {
    this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
  }, _normValueFromMouse: function(t2) {
    var e2, t2 = "horizontal" === this.orientation ? (e2 = this.elementSize.width, t2.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e2 = this.elementSize.height, t2.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t2 = t2 / e2;
    return (t2 = 1 < t2 ? 1 : t2) < 0 && (t2 = 0), "vertical" === this.orientation && (t2 = 1 - t2), e2 = this._valueMax() - this._valueMin(), t2 = this._valueMin() + t2 * e2, this._trimAlignValue(t2);
  }, _uiHash: function(t2, e2, i2) {
    var s2 = { handle: this.handles[t2], handleIndex: t2, value: void 0 !== e2 ? e2 : this.value() };
    return this._hasMultipleValues() && (s2.value = void 0 !== e2 ? e2 : this.values(t2), s2.values = i2 || this.values()), s2;
  }, _hasMultipleValues: function() {
    return this.options.values && this.options.values.length;
  }, _start: function(t2, e2) {
    return this._trigger("start", t2, this._uiHash(e2));
  }, _slide: function(t2, e2, i2) {
    var s2, n2 = this.value(), o2 = this.values();
    this._hasMultipleValues() && (s2 = this.values(e2 ? 0 : 1), n2 = this.values(e2), 2 === this.options.values.length && true === this.options.range && (i2 = 0 === e2 ? Math.min(s2, i2) : Math.max(s2, i2)), o2[e2] = i2), i2 !== n2 && false !== this._trigger("slide", t2, this._uiHash(e2, i2, o2)) && (this._hasMultipleValues() ? this.values(e2, i2) : this.value(i2));
  }, _stop: function(t2, e2) {
    this._trigger("stop", t2, this._uiHash(e2));
  }, _change: function(t2, e2) {
    this._keySliding || this._mouseSliding || (this._lastChangedValue = e2, this._trigger("change", t2, this._uiHash(e2)));
  }, value: function(t2) {
    if (!arguments.length) return this._value();
    this.options.value = this._trimAlignValue(t2), this._refreshValue(), this._change(null, 0);
  }, values: function(t2, e2) {
    var i2, s2, n2;
    if (1 < arguments.length) this.options.values[t2] = this._trimAlignValue(e2), this._refreshValue(), this._change(null, t2);
    else {
      if (!arguments.length) return this._values();
      if (!Array.isArray(t2)) return this._hasMultipleValues() ? this._values(t2) : this.value();
      for (i2 = this.options.values, s2 = t2, n2 = 0; n2 < i2.length; n2 += 1) i2[n2] = this._trimAlignValue(s2[n2]), this._change(null, n2);
      this._refreshValue();
    }
  }, _setOption: function(t2, e2) {
    var i2, s2 = 0;
    switch ("range" === t2 && true === this.options.range && ("min" === e2 ? (this.options.value = this._values(0), this.options.values = null) : "max" === e2 && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), Array.isArray(this.options.values) && (s2 = this.options.values.length), this._super(t2, e2), t2) {
      case "orientation":
        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(e2), this.handles.css("horizontal" === e2 ? "bottom" : "left", "");
        break;
      case "value":
        this._animateOff = true, this._refreshValue(), this._change(null, 0), this._animateOff = false;
        break;
      case "values":
        for (this._animateOff = true, this._refreshValue(), i2 = s2 - 1; 0 <= i2; i2--) this._change(null, i2);
        this._animateOff = false;
        break;
      case "step":
      case "min":
      case "max":
        this._animateOff = true, this._calculateNewMax(), this._refreshValue(), this._animateOff = false;
        break;
      case "range":
        this._animateOff = true, this._refresh(), this._animateOff = false;
    }
  }, _setOptionDisabled: function(t2) {
    this._super(t2), this._toggleClass(null, "ui-state-disabled", !!t2);
  }, _value: function() {
    var t2 = this.options.value;
    return this._trimAlignValue(t2);
  }, _values: function(t2) {
    var e2, i2;
    if (arguments.length) return t2 = this.options.values[t2], this._trimAlignValue(t2);
    if (this._hasMultipleValues()) {
      for (e2 = this.options.values.slice(), i2 = 0; i2 < e2.length; i2 += 1) e2[i2] = this._trimAlignValue(e2[i2]);
      return e2;
    }
    return [];
  }, _trimAlignValue: function(t2) {
    var e2, i2;
    return t2 <= this._valueMin() ? this._valueMin() : t2 >= this._valueMax() ? this._valueMax() : (e2 = 0 < this.options.step ? this.options.step : 1, i2 = t2 - (t2 = (t2 - this._valueMin()) % e2), 2 * Math.abs(t2) >= e2 && (i2 += 0 < t2 ? e2 : -e2), parseFloat(i2.toFixed(5)));
  }, _calculateNewMax: function() {
    var t2 = this.options.max, e2 = this._valueMin(), i2 = this.options.step;
    (t2 = Math.round((t2 - e2) / i2) * i2 + e2) > this.options.max && (t2 -= i2), this.max = parseFloat(t2.toFixed(this._precision()));
  }, _precision: function() {
    var t2 = this._precisionOf(this.options.step);
    return t2 = null !== this.options.min ? Math.max(t2, this._precisionOf(this.options.min)) : t2;
  }, _precisionOf: function(t2) {
    var t2 = t2.toString(), e2 = t2.indexOf(".");
    return -1 === e2 ? 0 : t2.length - e2 - 1;
  }, _valueMin: function() {
    return this.options.min;
  }, _valueMax: function() {
    return this.max;
  }, _refreshRange: function(t2) {
    "vertical" === t2 && this.range.css({ width: "", left: "" }), "horizontal" === t2 && this.range.css({ height: "", bottom: "" });
  }, _refreshValue: function() {
    var e2, i2, t2, s2, n2, o2 = this.options.range, a2 = this.options, r2 = this, l2 = !this._animateOff && a2.animate, h2 = {};
    this._hasMultipleValues() ? this.handles.each(function(t3) {
      i2 = (r2.values(t3) - r2._valueMin()) / (r2._valueMax() - r2._valueMin()) * 100, h2["horizontal" === r2.orientation ? "left" : "bottom"] = i2 + "%", V(this).stop(1, 1)[l2 ? "animate" : "css"](h2, a2.animate), true === r2.options.range && ("horizontal" === r2.orientation ? (0 === t3 && r2.range.stop(1, 1)[l2 ? "animate" : "css"]({ left: i2 + "%" }, a2.animate), 1 === t3 && r2.range[l2 ? "animate" : "css"]({ width: i2 - e2 + "%" }, { queue: false, duration: a2.animate })) : (0 === t3 && r2.range.stop(1, 1)[l2 ? "animate" : "css"]({ bottom: i2 + "%" }, a2.animate), 1 === t3 && r2.range[l2 ? "animate" : "css"]({ height: i2 - e2 + "%" }, { queue: false, duration: a2.animate }))), e2 = i2;
    }) : (t2 = this.value(), s2 = this._valueMin(), n2 = this._valueMax(), i2 = n2 !== s2 ? (t2 - s2) / (n2 - s2) * 100 : 0, h2["horizontal" === this.orientation ? "left" : "bottom"] = i2 + "%", this.handle.stop(1, 1)[l2 ? "animate" : "css"](h2, a2.animate), "min" === o2 && "horizontal" === this.orientation && this.range.stop(1, 1)[l2 ? "animate" : "css"]({ width: i2 + "%" }, a2.animate), "max" === o2 && "horizontal" === this.orientation && this.range.stop(1, 1)[l2 ? "animate" : "css"]({ width: 100 - i2 + "%" }, a2.animate), "min" === o2 && "vertical" === this.orientation && this.range.stop(1, 1)[l2 ? "animate" : "css"]({ height: i2 + "%" }, a2.animate), "max" === o2 && "vertical" === this.orientation && this.range.stop(1, 1)[l2 ? "animate" : "css"]({ height: 100 - i2 + "%" }, a2.animate));
  }, _handleEvents: { keydown: function(t2) {
    var e2, i2, s2, n2 = V(t2.target).data("ui-slider-handle-index");
    switch (t2.keyCode) {
      case V.ui.keyCode.HOME:
      case V.ui.keyCode.END:
      case V.ui.keyCode.PAGE_UP:
      case V.ui.keyCode.PAGE_DOWN:
      case V.ui.keyCode.UP:
      case V.ui.keyCode.RIGHT:
      case V.ui.keyCode.DOWN:
      case V.ui.keyCode.LEFT:
        if (t2.preventDefault(), this._keySliding || (this._keySliding = true, this._addClass(V(t2.target), null, "ui-state-active"), false !== this._start(t2, n2))) break;
        return;
    }
    switch (s2 = this.options.step, e2 = i2 = this._hasMultipleValues() ? this.values(n2) : this.value(), t2.keyCode) {
      case V.ui.keyCode.HOME:
        i2 = this._valueMin();
        break;
      case V.ui.keyCode.END:
        i2 = this._valueMax();
        break;
      case V.ui.keyCode.PAGE_UP:
        i2 = this._trimAlignValue(e2 + (this._valueMax() - this._valueMin()) / this.numPages);
        break;
      case V.ui.keyCode.PAGE_DOWN:
        i2 = this._trimAlignValue(e2 - (this._valueMax() - this._valueMin()) / this.numPages);
        break;
      case V.ui.keyCode.UP:
      case V.ui.keyCode.RIGHT:
        if (e2 === this._valueMax()) return;
        i2 = this._trimAlignValue(e2 + s2);
        break;
      case V.ui.keyCode.DOWN:
      case V.ui.keyCode.LEFT:
        if (e2 === this._valueMin()) return;
        i2 = this._trimAlignValue(e2 - s2);
    }
    this._slide(t2, n2, i2);
  }, keyup: function(t2) {
    var e2 = V(t2.target).data("ui-slider-handle-index");
    this._keySliding && (this._keySliding = false, this._stop(t2, e2), this._change(t2, e2), this._removeClass(V(t2.target), null, "ui-state-active"));
  } } }), V.widget("ui.sortable", V.ui.mouse, { version: "1.13.3", widgetEventPrefix: "sort", ready: false, options: { appendTo: "parent", axis: false, connectWith: false, containment: false, cursor: "auto", cursorAt: false, dropOnEmpty: true, forcePlaceholderSize: false, forceHelperSize: false, grid: false, handle: false, helper: "original", items: "> *", opacity: false, placeholder: false, revert: false, scroll: true, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function(t2, e2, i2) {
    return e2 <= t2 && t2 < e2 + i2;
  }, _isFloating: function(t2) {
    return /left|right/.test(t2.css("float")) || /inline|table-cell/.test(t2.css("display"));
  }, _create: function() {
    this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = true;
  }, _setOption: function(t2, e2) {
    this._super(t2, e2), "handle" === t2 && this._setHandleClassName();
  }, _setHandleClassName: function() {
    var t2 = this;
    this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), V.each(this.items, function() {
      t2._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
    });
  }, _destroy: function() {
    this._mouseDestroy();
    for (var t2 = this.items.length - 1; 0 <= t2; t2--) this.items[t2].item.removeData(this.widgetName + "-item");
    return this;
  }, _mouseCapture: function(t2, e2) {
    var i2 = null, s2 = false, n2 = this;
    return !(this.reverting || this.options.disabled || "static" === this.options.type || (this._refreshItems(t2), V(t2.target).parents().each(function() {
      if (V.data(this, n2.widgetName + "-item") === n2) return i2 = V(this), false;
    }), !(i2 = V.data(t2.target, n2.widgetName + "-item") === n2 ? V(t2.target) : i2)) || (this.options.handle && !e2 && (V(this.options.handle, i2).find("*").addBack().each(function() {
      this === t2.target && (s2 = true);
    }), !s2) || (this.currentItem = i2, this._removeCurrentsFromItems(), 0)));
  }, _mouseStart: function(t2, e2, i2) {
    var s2, n2, o2 = this.options;
    if ((this.currentContainer = this).refreshPositions(), this.appendTo = V("parent" !== o2.appendTo ? o2.appendTo : this.currentItem.parent()), this.helper = this._createHelper(t2), this._cacheHelperProportions(), this._cacheMargins(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, V.extend(this.offset, { click: { left: t2.pageX - this.offset.left, top: t2.pageY - this.offset.top }, relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), o2.cursorAt && this._adjustOffsetFromHelper(o2.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), this.scrollParent = this.placeholder.scrollParent(), V.extend(this.offset, { parent: this._getParentOffset() }), o2.containment && this._setContainment(), o2.cursor && "auto" !== o2.cursor && (n2 = this.document.find("body"), this.storedCursor = n2.css("cursor"), n2.css("cursor", o2.cursor), this.storedStylesheet = V("<style>*{ cursor: " + o2.cursor + " !important; }</style>").appendTo(n2)), o2.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o2.zIndex)), o2.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o2.opacity)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t2, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i2) for (s2 = this.containers.length - 1; 0 <= s2; s2--) this.containers[s2]._trigger("activate", t2, this._uiHash(this));
    return V.ui.ddmanager && (V.ui.ddmanager.current = this), V.ui.ddmanager && !o2.dropBehaviour && V.ui.ddmanager.prepareOffsets(this, t2), this.dragging = true, this._addClass(this.helper, "ui-sortable-helper"), this.helper.parent().is(this.appendTo) || (this.helper.detach().appendTo(this.appendTo), this.offset.parent = this._getParentOffset()), this.position = this.originalPosition = this._generatePosition(t2), this.originalPageX = t2.pageX, this.originalPageY = t2.pageY, this.lastPositionAbs = this.positionAbs = this._convertPositionTo("absolute"), this._mouseDrag(t2), true;
  }, _scroll: function(t2) {
    var e2 = this.options, i2 = false;
    return this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t2.pageY < e2.scrollSensitivity ? this.scrollParent[0].scrollTop = i2 = this.scrollParent[0].scrollTop + e2.scrollSpeed : t2.pageY - this.overflowOffset.top < e2.scrollSensitivity && (this.scrollParent[0].scrollTop = i2 = this.scrollParent[0].scrollTop - e2.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t2.pageX < e2.scrollSensitivity ? this.scrollParent[0].scrollLeft = i2 = this.scrollParent[0].scrollLeft + e2.scrollSpeed : t2.pageX - this.overflowOffset.left < e2.scrollSensitivity && (this.scrollParent[0].scrollLeft = i2 = this.scrollParent[0].scrollLeft - e2.scrollSpeed)) : (t2.pageY - this.document.scrollTop() < e2.scrollSensitivity ? i2 = this.document.scrollTop(this.document.scrollTop() - e2.scrollSpeed) : this.window.height() - (t2.pageY - this.document.scrollTop()) < e2.scrollSensitivity && (i2 = this.document.scrollTop(this.document.scrollTop() + e2.scrollSpeed)), t2.pageX - this.document.scrollLeft() < e2.scrollSensitivity ? i2 = this.document.scrollLeft(this.document.scrollLeft() - e2.scrollSpeed) : this.window.width() - (t2.pageX - this.document.scrollLeft()) < e2.scrollSensitivity && (i2 = this.document.scrollLeft(this.document.scrollLeft() + e2.scrollSpeed))), i2;
  }, _mouseDrag: function(t2) {
    var e2, i2, s2, n2, o2 = this.options;
    for (this.position = this._generatePosition(t2), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), o2.scroll && false !== this._scroll(t2) && (this._refreshItemPositions(true), V.ui.ddmanager) && !o2.dropBehaviour && V.ui.ddmanager.prepareOffsets(this, t2), this.dragDirection = { vertical: this._getDragVerticalDirection(), horizontal: this._getDragHorizontalDirection() }, e2 = this.items.length - 1; 0 <= e2; e2--) if (s2 = (i2 = this.items[e2]).item[0], (n2 = this._intersectsWithPointer(i2)) && i2.instance === this.currentContainer && !(s2 === this.currentItem[0] || this.placeholder[1 === n2 ? "next" : "prev"]()[0] === s2 || V.contains(this.placeholder[0], s2) || "semi-dynamic" === this.options.type && V.contains(this.element[0], s2))) {
      if (this.direction = 1 === n2 ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i2)) break;
      this._rearrange(t2, i2), this._trigger("change", t2, this._uiHash());
      break;
    }
    return this._contactContainers(t2), V.ui.ddmanager && V.ui.ddmanager.drag(this, t2), this._trigger("sort", t2, this._uiHash()), this.lastPositionAbs = this.positionAbs, false;
  }, _mouseStop: function(t2, e2) {
    var i2, s2, n2, o2;
    if (t2) return V.ui.ddmanager && !this.options.dropBehaviour && V.ui.ddmanager.drop(this, t2), this.options.revert ? (s2 = (i2 = this).placeholder.offset(), o2 = {}, (n2 = this.options.axis) && "x" !== n2 || (o2.left = s2.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), n2 && "y" !== n2 || (o2.top = s2.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = true, V(this.helper).animate(o2, parseInt(this.options.revert, 10) || 500, function() {
      i2._clear(t2);
    })) : this._clear(t2, e2), false;
  }, cancel: function() {
    if (this.dragging) {
      this._mouseUp(new V.Event("mouseup", { target: null })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
      for (var t2 = this.containers.length - 1; 0 <= t2; t2--) this.containers[t2]._trigger("deactivate", null, this._uiHash(this)), this.containers[t2].containerCache.over && (this.containers[t2]._trigger("out", null, this._uiHash(this)), this.containers[t2].containerCache.over = 0);
    }
    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), V.extend(this, { helper: null, dragging: false, reverting: false, _noFinalSort: null }), this.domPosition.prev ? V(this.domPosition.prev).after(this.currentItem) : V(this.domPosition.parent).prepend(this.currentItem)), this;
  }, serialize: function(e2) {
    var t2 = this._getItemsAsjQuery(e2 && e2.connected), i2 = [];
    return e2 = e2 || {}, V(t2).each(function() {
      var t3 = (V(e2.item || this).attr(e2.attribute || "id") || "").match(e2.expression || /(.+)[\-=_](.+)/);
      t3 && i2.push((e2.key || t3[1] + "[]") + "=" + (e2.key && e2.expression ? t3[1] : t3[2]));
    }), !i2.length && e2.key && i2.push(e2.key + "="), i2.join("&");
  }, toArray: function(t2) {
    var e2 = this._getItemsAsjQuery(t2 && t2.connected), i2 = [];
    return t2 = t2 || {}, e2.each(function() {
      i2.push(V(t2.item || this).attr(t2.attribute || "id") || "");
    }), i2;
  }, _intersectsWith: function(t2) {
    var e2 = this.positionAbs.left, i2 = e2 + this.helperProportions.width, s2 = this.positionAbs.top, n2 = s2 + this.helperProportions.height, o2 = t2.left, a2 = o2 + t2.width, r2 = t2.top, l2 = r2 + t2.height, h2 = this.offset.click.top, c2 = this.offset.click.left, h2 = "x" === this.options.axis || r2 < s2 + h2 && s2 + h2 < l2, c2 = "y" === this.options.axis || o2 < e2 + c2 && e2 + c2 < a2;
    return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t2[this.floating ? "width" : "height"] ? h2 && c2 : o2 < e2 + this.helperProportions.width / 2 && i2 - this.helperProportions.width / 2 < a2 && r2 < s2 + this.helperProportions.height / 2 && n2 - this.helperProportions.height / 2 < l2;
  }, _intersectsWithPointer: function(t2) {
    var e2 = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t2.top, t2.height), t2 = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t2.left, t2.width);
    return !(!e2 || !t2) && (e2 = this.dragDirection.vertical, t2 = this.dragDirection.horizontal, this.floating ? "right" === t2 || "down" === e2 ? 2 : 1 : e2 && ("down" === e2 ? 2 : 1));
  }, _intersectsWithSides: function(t2) {
    var e2 = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t2.top + t2.height / 2, t2.height), t2 = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t2.left + t2.width / 2, t2.width), i2 = this.dragDirection.vertical, s2 = this.dragDirection.horizontal;
    return this.floating && s2 ? "right" === s2 && t2 || "left" === s2 && !t2 : i2 && ("down" === i2 && e2 || "up" === i2 && !e2);
  }, _getDragVerticalDirection: function() {
    var t2 = this.positionAbs.top - this.lastPositionAbs.top;
    return 0 != t2 && (0 < t2 ? "down" : "up");
  }, _getDragHorizontalDirection: function() {
    var t2 = this.positionAbs.left - this.lastPositionAbs.left;
    return 0 != t2 && (0 < t2 ? "right" : "left");
  }, refresh: function(t2) {
    return this._refreshItems(t2), this._setHandleClassName(), this.refreshPositions(), this;
  }, _connectWith: function() {
    var t2 = this.options;
    return t2.connectWith.constructor === String ? [t2.connectWith] : t2.connectWith;
  }, _getItemsAsjQuery: function(t2) {
    var e2, i2, s2, n2, o2 = [], a2 = [], r2 = this._connectWith();
    if (r2 && t2) for (e2 = r2.length - 1; 0 <= e2; e2--) for (i2 = (s2 = V(r2[e2], this.document[0])).length - 1; 0 <= i2; i2--) (n2 = V.data(s2[i2], this.widgetFullName)) && n2 !== this && !n2.options.disabled && a2.push(["function" == typeof n2.options.items ? n2.options.items.call(n2.element) : V(n2.options.items, n2.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), n2]);
    function l2() {
      o2.push(this);
    }
    for (a2.push(["function" == typeof this.options.items ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : V(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), e2 = a2.length - 1; 0 <= e2; e2--) a2[e2][0].each(l2);
    return V(o2);
  }, _removeCurrentsFromItems: function() {
    var i2 = this.currentItem.find(":data(" + this.widgetName + "-item)");
    this.items = V.grep(this.items, function(t2) {
      for (var e2 = 0; e2 < i2.length; e2++) if (i2[e2] === t2.item[0]) return false;
      return true;
    });
  }, _refreshItems: function(t2) {
    this.items = [], this.containers = [this];
    var e2, i2, s2, n2, o2, a2, r2, l2, h2 = this.items, c2 = [["function" == typeof this.options.items ? this.options.items.call(this.element[0], t2, { item: this.currentItem }) : V(this.options.items, this.element), this]], u2 = this._connectWith();
    if (u2 && this.ready) for (e2 = u2.length - 1; 0 <= e2; e2--) for (i2 = (s2 = V(u2[e2], this.document[0])).length - 1; 0 <= i2; i2--) (n2 = V.data(s2[i2], this.widgetFullName)) && n2 !== this && !n2.options.disabled && (c2.push(["function" == typeof n2.options.items ? n2.options.items.call(n2.element[0], t2, { item: this.currentItem }) : V(n2.options.items, n2.element), n2]), this.containers.push(n2));
    for (e2 = c2.length - 1; 0 <= e2; e2--) for (o2 = c2[e2][1], l2 = (a2 = c2[e2][i2 = 0]).length; i2 < l2; i2++) (r2 = V(a2[i2])).data(this.widgetName + "-item", o2), h2.push({ item: r2, instance: o2, width: 0, height: 0, left: 0, top: 0 });
  }, _refreshItemPositions: function(t2) {
    for (var e2, i2, s2 = this.items.length - 1; 0 <= s2; s2--) e2 = this.items[s2], this.currentContainer && e2.instance !== this.currentContainer && e2.item[0] !== this.currentItem[0] || (i2 = this.options.toleranceElement ? V(this.options.toleranceElement, e2.item) : e2.item, t2 || (e2.width = i2.outerWidth(), e2.height = i2.outerHeight()), i2 = i2.offset(), e2.left = i2.left, e2.top = i2.top);
  }, refreshPositions: function(t2) {
    var e2, i2;
    if (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), this._refreshItemPositions(t2), this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
    else for (e2 = this.containers.length - 1; 0 <= e2; e2--) i2 = this.containers[e2].element.offset(), this.containers[e2].containerCache.left = i2.left, this.containers[e2].containerCache.top = i2.top, this.containers[e2].containerCache.width = this.containers[e2].element.outerWidth(), this.containers[e2].containerCache.height = this.containers[e2].element.outerHeight();
    return this;
  }, _createPlaceholder: function(i2) {
    var s2, n2, o2 = (i2 = i2 || this).options;
    o2.placeholder && o2.placeholder.constructor !== String || (s2 = o2.placeholder, n2 = i2.currentItem[0].nodeName.toLowerCase(), o2.placeholder = { element: function() {
      var t2 = V("<" + n2 + ">", i2.document[0]);
      return i2._addClass(t2, "ui-sortable-placeholder", s2 || i2.currentItem[0].className)._removeClass(t2, "ui-sortable-helper"), "tbody" === n2 ? i2._createTrPlaceholder(i2.currentItem.find("tr").eq(0), V("<tr>", i2.document[0]).appendTo(t2)) : "tr" === n2 ? i2._createTrPlaceholder(i2.currentItem, t2) : "img" === n2 && t2.attr("src", i2.currentItem.attr("src")), s2 || t2.css("visibility", "hidden"), t2;
    }, update: function(t2, e2) {
      s2 && !o2.forcePlaceholderSize || (e2.height() && (!o2.forcePlaceholderSize || "tbody" !== n2 && "tr" !== n2) || e2.height(i2.currentItem.innerHeight() - parseInt(i2.currentItem.css("paddingTop") || 0, 10) - parseInt(i2.currentItem.css("paddingBottom") || 0, 10)), e2.width()) || e2.width(i2.currentItem.innerWidth() - parseInt(i2.currentItem.css("paddingLeft") || 0, 10) - parseInt(i2.currentItem.css("paddingRight") || 0, 10));
    } }), i2.placeholder = V(o2.placeholder.element.call(i2.element, i2.currentItem)), i2.currentItem.after(i2.placeholder), o2.placeholder.update(i2, i2.placeholder);
  }, _createTrPlaceholder: function(t2, e2) {
    var i2 = this;
    t2.children().each(function() {
      V("<td>&#160;</td>", i2.document[0]).attr("colspan", V(this).attr("colspan") || 1).appendTo(e2);
    });
  }, _contactContainers: function(t2) {
    for (var e2, i2, s2, n2, o2, a2, r2, l2, h2, c2 = null, u2 = null, d2 = this.containers.length - 1; 0 <= d2; d2--) V.contains(this.currentItem[0], this.containers[d2].element[0]) || (this._intersectsWith(this.containers[d2].containerCache) ? c2 && V.contains(this.containers[d2].element[0], c2.element[0]) || (c2 = this.containers[d2], u2 = d2) : this.containers[d2].containerCache.over && (this.containers[d2]._trigger("out", t2, this._uiHash(this)), this.containers[d2].containerCache.over = 0));
    if (c2) if (1 === this.containers.length) this.containers[u2].containerCache.over || (this.containers[u2]._trigger("over", t2, this._uiHash(this)), this.containers[u2].containerCache.over = 1);
    else {
      for (i2 = 1e4, s2 = null, n2 = (l2 = c2.floating || this._isFloating(this.currentItem)) ? "left" : "top", o2 = l2 ? "width" : "height", h2 = l2 ? "pageX" : "pageY", e2 = this.items.length - 1; 0 <= e2; e2--) V.contains(this.containers[u2].element[0], this.items[e2].item[0]) && this.items[e2].item[0] !== this.currentItem[0] && (a2 = this.items[e2].item.offset()[n2], r2 = false, t2[h2] - a2 > this.items[e2][o2] / 2 && (r2 = true), Math.abs(t2[h2] - a2) < i2) && (i2 = Math.abs(t2[h2] - a2), s2 = this.items[e2], this.direction = r2 ? "up" : "down");
      (s2 || this.options.dropOnEmpty) && (this.currentContainer === this.containers[u2] ? this.currentContainer.containerCache.over || (this.containers[u2]._trigger("over", t2, this._uiHash()), this.currentContainer.containerCache.over = 1) : (s2 ? this._rearrange(t2, s2, null, true) : this._rearrange(t2, null, this.containers[u2].element, true), this._trigger("change", t2, this._uiHash()), this.containers[u2]._trigger("change", t2, this._uiHash(this)), this.currentContainer = this.containers[u2], this.options.placeholder.update(this.currentContainer, this.placeholder), this.scrollParent = this.placeholder.scrollParent(), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this.containers[u2]._trigger("over", t2, this._uiHash(this)), this.containers[u2].containerCache.over = 1));
    }
  }, _createHelper: function(t2) {
    var e2 = this.options, t2 = "function" == typeof e2.helper ? V(e2.helper.apply(this.element[0], [t2, this.currentItem])) : "clone" === e2.helper ? this.currentItem.clone() : this.currentItem;
    return t2.parents("body").length || this.appendTo[0].appendChild(t2[0]), t2[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), t2[0].style.width && !e2.forceHelperSize || t2.width(this.currentItem.width()), t2[0].style.height && !e2.forceHelperSize || t2.height(this.currentItem.height()), t2;
  }, _adjustOffsetFromHelper: function(t2) {
    "string" == typeof t2 && (t2 = t2.split(" ")), "left" in (t2 = Array.isArray(t2) ? { left: +t2[0], top: +t2[1] || 0 } : t2) && (this.offset.click.left = t2.left + this.margins.left), "right" in t2 && (this.offset.click.left = this.helperProportions.width - t2.right + this.margins.left), "top" in t2 && (this.offset.click.top = t2.top + this.margins.top), "bottom" in t2 && (this.offset.click.top = this.helperProportions.height - t2.bottom + this.margins.top);
  }, _getParentOffset: function() {
    this.offsetParent = this.helper.offsetParent();
    var t2 = this.offsetParent.offset();
    return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && V.contains(this.scrollParent[0], this.offsetParent[0]) && (t2.left += this.scrollParent.scrollLeft(), t2.top += this.scrollParent.scrollTop()), { top: (t2 = this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && V.ui.ie ? { top: 0, left: 0 } : t2).top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t2.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
  }, _getRelativeOffset: function() {
    var t2;
    return "relative" === this.cssPosition ? { top: (t2 = this.currentItem.position()).top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t2.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } : { top: 0, left: 0 };
  }, _cacheMargins: function() {
    this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 };
  }, _cacheHelperProportions: function() {
    this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
  }, _setContainment: function() {
    var t2, e2, i2 = this.options;
    "parent" === i2.containment && (i2.containment = this.helper[0].parentNode), "document" !== i2.containment && "window" !== i2.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === i2.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === i2.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i2.containment) || (t2 = V(i2.containment)[0], i2 = V(i2.containment).offset(), e2 = "hidden" !== V(t2).css("overflow"), this.containment = [i2.left + (parseInt(V(t2).css("borderLeftWidth"), 10) || 0) + (parseInt(V(t2).css("paddingLeft"), 10) || 0) - this.margins.left, i2.top + (parseInt(V(t2).css("borderTopWidth"), 10) || 0) + (parseInt(V(t2).css("paddingTop"), 10) || 0) - this.margins.top, i2.left + (e2 ? Math.max(t2.scrollWidth, t2.offsetWidth) : t2.offsetWidth) - (parseInt(V(t2).css("borderLeftWidth"), 10) || 0) - (parseInt(V(t2).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i2.top + (e2 ? Math.max(t2.scrollHeight, t2.offsetHeight) : t2.offsetHeight) - (parseInt(V(t2).css("borderTopWidth"), 10) || 0) - (parseInt(V(t2).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
  }, _convertPositionTo: function(t2, e2) {
    e2 = e2 || this.position;
    var t2 = "absolute" === t2 ? 1 : -1, i2 = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && V.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, s2 = /(html|body)/i.test(i2[0].tagName);
    return { top: e2.top + this.offset.relative.top * t2 + this.offset.parent.top * t2 - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s2 ? 0 : i2.scrollTop()) * t2, left: e2.left + this.offset.relative.left * t2 + this.offset.parent.left * t2 - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s2 ? 0 : i2.scrollLeft()) * t2 };
  }, _generatePosition: function(t2) {
    var e2 = this.options, i2 = t2.pageX, s2 = t2.pageY, n2 = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && V.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o2 = /(html|body)/i.test(n2[0].tagName);
    return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t2.pageX - this.offset.click.left < this.containment[0] && (i2 = this.containment[0] + this.offset.click.left), t2.pageY - this.offset.click.top < this.containment[1] && (s2 = this.containment[1] + this.offset.click.top), t2.pageX - this.offset.click.left > this.containment[2] && (i2 = this.containment[2] + this.offset.click.left), t2.pageY - this.offset.click.top > this.containment[3]) && (s2 = this.containment[3] + this.offset.click.top), e2.grid) && (t2 = this.originalPageY + Math.round((s2 - this.originalPageY) / e2.grid[1]) * e2.grid[1], s2 = !this.containment || t2 - this.offset.click.top >= this.containment[1] && t2 - this.offset.click.top <= this.containment[3] ? t2 : t2 - this.offset.click.top >= this.containment[1] ? t2 - e2.grid[1] : t2 + e2.grid[1], t2 = this.originalPageX + Math.round((i2 - this.originalPageX) / e2.grid[0]) * e2.grid[0], i2 = !this.containment || t2 - this.offset.click.left >= this.containment[0] && t2 - this.offset.click.left <= this.containment[2] ? t2 : t2 - this.offset.click.left >= this.containment[0] ? t2 - e2.grid[0] : t2 + e2.grid[0]), { top: s2 - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o2 ? 0 : n2.scrollTop()), left: i2 - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o2 ? 0 : n2.scrollLeft()) };
  }, _rearrange: function(t2, e2, i2, s2) {
    i2 ? i2[0].appendChild(this.placeholder[0]) : e2.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e2.item[0] : e2.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
    var n2 = this.counter;
    this._delay(function() {
      n2 === this.counter && this.refreshPositions(!s2);
    });
  }, _clear: function(t2, e2) {
    this.reverting = false;
    var i2, s2 = [];
    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
      for (i2 in this._storedCSS) "auto" !== this._storedCSS[i2] && "static" !== this._storedCSS[i2] || (this._storedCSS[i2] = "");
      this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
    } else this.currentItem.show();
    function n2(e3, i3, s3) {
      return function(t3) {
        s3._trigger(e3, t3, i3._uiHash(i3));
      };
    }
    for (this.fromOutside && !e2 && s2.push(function(t3) {
      this._trigger("receive", t3, this._uiHash(this.fromOutside));
    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e2 || s2.push(function(t3) {
      this._trigger("update", t3, this._uiHash());
    }), this === this.currentContainer || e2 || (s2.push(function(t3) {
      this._trigger("remove", t3, this._uiHash());
    }), s2.push(function(e3) {
      return function(t3) {
        e3._trigger("receive", t3, this._uiHash(this));
      };
    }.call(this, this.currentContainer)), s2.push(function(e3) {
      return function(t3) {
        e3._trigger("update", t3, this._uiHash(this));
      };
    }.call(this, this.currentContainer))), i2 = this.containers.length - 1; 0 <= i2; i2--) e2 || s2.push(n2("deactivate", this, this.containers[i2])), this.containers[i2].containerCache.over && (s2.push(n2("out", this, this.containers[i2])), this.containers[i2].containerCache.over = 0);
    if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = false, e2 || this._trigger("beforeStop", t2, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e2) {
      for (i2 = 0; i2 < s2.length; i2++) s2[i2].call(this, t2);
      this._trigger("stop", t2, this._uiHash());
    }
    return this.fromOutside = false, !this.cancelHelperRemoval;
  }, _trigger: function() {
    false === V.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
  }, _uiHash: function(t2) {
    var e2 = t2 || this;
    return { helper: e2.helper, placeholder: e2.placeholder || V([]), position: e2.position, originalPosition: e2.originalPosition, offset: e2.positionAbs, item: e2.currentItem, sender: t2 ? t2.element : null };
  } });
  function A(e2) {
    return function() {
      var t2 = this.element.val();
      e2.apply(this, arguments), this._refresh(), t2 !== this.element.val() && this._trigger("change");
    };
  }
  V.widget("ui.spinner", { version: "1.13.3", defaultElement: "<input>", widgetEventPrefix: "spin", options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: true, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function() {
    this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), true), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function() {
      this.element.removeAttr("autocomplete");
    } });
  }, _getCreateOptions: function() {
    var s2 = this._super(), n2 = this.element;
    return V.each(["min", "max", "step"], function(t2, e2) {
      var i2 = n2.attr(e2);
      null != i2 && i2.length && (s2[e2] = i2);
    }), s2;
  }, _events: { keydown: function(t2) {
    this._start(t2) && this._keydown(t2) && t2.preventDefault();
  }, keyup: "_stop", focus: function() {
    this.previous = this.element.val();
  }, blur: function(t2) {
    this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t2));
  }, mousewheel: function(t2, e2) {
    var i2 = V.ui.safeActiveElement(this.document[0]);
    if (this.element[0] === i2 && e2) {
      if (!this.spinning && !this._start(t2)) return false;
      this._spin((0 < e2 ? 1 : -1) * this.options.step, t2), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
        this.spinning && this._stop(t2);
      }, 100), t2.preventDefault();
    }
  }, "mousedown .ui-spinner-button": function(t2) {
    var e2;
    function i2() {
      this.element[0] !== V.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = e2, this._delay(function() {
        this.previous = e2;
      }));
    }
    e2 = this.element[0] === V.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), t2.preventDefault(), i2.call(this), this.cancelBlur = true, this._delay(function() {
      delete this.cancelBlur, i2.call(this);
    }), false !== this._start(t2) && this._repeat(null, V(t2.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t2);
  }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function(t2) {
    if (V(t2.currentTarget).hasClass("ui-state-active")) return false !== this._start(t2) && void this._repeat(null, V(t2.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t2);
  }, "mouseleave .ui-spinner-button": "_stop" }, _enhance: function() {
    this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
  }, _draw: function() {
    this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", true).button({ classes: { "ui-button": "" } }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({ icon: this.options.icons.up, showLabel: false }), this.buttons.last().button({ icon: this.options.icons.down, showLabel: false }), this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height());
  }, _keydown: function(t2) {
    var e2 = this.options, i2 = V.ui.keyCode;
    switch (t2.keyCode) {
      case i2.UP:
        return this._repeat(null, 1, t2), true;
      case i2.DOWN:
        return this._repeat(null, -1, t2), true;
      case i2.PAGE_UP:
        return this._repeat(null, e2.page, t2), true;
      case i2.PAGE_DOWN:
        return this._repeat(null, -e2.page, t2), true;
    }
    return false;
  }, _start: function(t2) {
    return !(!this.spinning && false === this._trigger("start", t2)) && (this.counter || (this.counter = 1), this.spinning = true);
  }, _repeat: function(t2, e2, i2) {
    t2 = t2 || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
      this._repeat(40, e2, i2);
    }, t2), this._spin(e2 * this.options.step, i2);
  }, _spin: function(t2, e2) {
    var i2 = this.value() || 0;
    this.counter || (this.counter = 1), i2 = this._adjustValue(i2 + t2 * this._increment(this.counter)), this.spinning && false === this._trigger("spin", e2, { value: i2 }) || (this._value(i2), this.counter++);
  }, _increment: function(t2) {
    var e2 = this.options.incremental;
    return e2 ? "function" == typeof e2 ? e2(t2) : Math.floor(t2 * t2 * t2 / 5e4 - t2 * t2 / 500 + 17 * t2 / 200 + 1) : 1;
  }, _precision: function() {
    var t2 = this._precisionOf(this.options.step);
    return t2 = null !== this.options.min ? Math.max(t2, this._precisionOf(this.options.min)) : t2;
  }, _precisionOf: function(t2) {
    var t2 = t2.toString(), e2 = t2.indexOf(".");
    return -1 === e2 ? 0 : t2.length - e2 - 1;
  }, _adjustValue: function(t2) {
    var e2 = this.options, i2 = null !== e2.min ? e2.min : 0, s2 = t2 - i2;
    return t2 = i2 + Math.round(s2 / e2.step) * e2.step, t2 = parseFloat(t2.toFixed(this._precision())), null !== e2.max && t2 > e2.max ? e2.max : null !== e2.min && t2 < e2.min ? e2.min : t2;
  }, _stop: function(t2) {
    this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = false, this._trigger("stop", t2));
  }, _setOption: function(t2, e2) {
    var i2;
    "culture" === t2 || "numberFormat" === t2 ? (i2 = this._parse(this.element.val()), this.options[t2] = e2, this.element.val(this._format(i2))) : ("max" !== t2 && "min" !== t2 && "step" !== t2 || "string" == typeof e2 && (e2 = this._parse(e2)), "icons" === t2 && (i2 = this.buttons.first().find(".ui-icon"), this._removeClass(i2, null, this.options.icons.up), this._addClass(i2, null, e2.up), i2 = this.buttons.last().find(".ui-icon"), this._removeClass(i2, null, this.options.icons.down), this._addClass(i2, null, e2.down)), this._super(t2, e2));
  }, _setOptionDisabled: function(t2) {
    this._super(t2), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t2), this.element.prop("disabled", !!t2), this.buttons.button(t2 ? "disable" : "enable");
  }, _setOptions: A(function(t2) {
    this._super(t2);
  }), _parse: function(t2) {
    return "" === (t2 = "string" == typeof t2 && "" !== t2 ? window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t2, 10, this.options.culture) : +t2 : t2) || isNaN(t2) ? null : t2;
  }, _format: function(t2) {
    return "" === t2 ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t2, this.options.numberFormat, this.options.culture) : t2;
  }, _refresh: function() {
    this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) });
  }, isValid: function() {
    var t2 = this.value();
    return null !== t2 && t2 === this._adjustValue(t2);
  }, _value: function(t2, e2) {
    var i2;
    "" !== t2 && null !== (i2 = this._parse(t2)) && (e2 || (i2 = this._adjustValue(i2)), t2 = this._format(i2)), this.element.val(t2), this._refresh();
  }, _destroy: function() {
    this.element.prop("disabled", false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element);
  }, stepUp: A(function(t2) {
    this._stepUp(t2);
  }), _stepUp: function(t2) {
    this._start() && (this._spin((t2 || 1) * this.options.step), this._stop());
  }, stepDown: A(function(t2) {
    this._stepDown(t2);
  }), _stepDown: function(t2) {
    this._start() && (this._spin((t2 || 1) * -this.options.step), this._stop());
  }, pageUp: A(function(t2) {
    this._stepUp((t2 || 1) * this.options.page);
  }), pageDown: A(function(t2) {
    this._stepDown((t2 || 1) * this.options.page);
  }), value: function(t2) {
    if (!arguments.length) return this._parse(this.element.val());
    A(this._value).call(this, t2);
  }, widget: function() {
    return this.uiSpinner;
  } }), false !== V.uiBackCompat && V.widget("ui.spinner", V.ui.spinner, { _enhance: function() {
    this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
  }, _uiSpinnerHtml: function() {
    return "<span>";
  }, _buttonHtml: function() {
    return "<a></a><a></a>";
  } });
  var O;
  V.ui.spinner, V.widget("ui.tabs", { version: "1.13.3", delay: 300, options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: false, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: (O = /#.*$/, function(t2) {
    var e2 = t2.href.replace(O, ""), i2 = location.href.replace(O, "");
    try {
      e2 = decodeURIComponent(e2);
    } catch (t3) {
    }
    try {
      i2 = decodeURIComponent(i2);
    } catch (t3) {
    }
    return 1 < t2.hash.length && e2 === i2;
  }), _create: function() {
    var e2 = this, t2 = this.options;
    this.running = false, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, t2.collapsible), this._processTabs(), t2.active = this._initialActive(), Array.isArray(t2.disabled) && (t2.disabled = V.uniqueSort(t2.disabled.concat(V.map(this.tabs.filter(".ui-state-disabled"), function(t3) {
      return e2.tabs.index(t3);
    }))).sort()), false !== this.options.active && this.anchors.length ? this.active = this._findActive(t2.active) : this.active = V(), this._refresh(), this.active.length && this.load(t2.active);
  }, _initialActive: function() {
    var i2 = this.options.active, t2 = this.options.collapsible, s2 = location.hash.substring(1);
    return null === i2 && (s2 && this.tabs.each(function(t3, e2) {
      if (V(e2).attr("aria-controls") === s2) return i2 = t3, false;
    }), null !== (i2 = null === i2 ? this.tabs.index(this.tabs.filter(".ui-tabs-active")) : i2) && -1 !== i2 || (i2 = !!this.tabs.length && 0)), false !== i2 && -1 === (i2 = this.tabs.index(this.tabs.eq(i2))) && (i2 = !t2 && 0), i2 = !t2 && false === i2 && this.anchors.length ? 0 : i2;
  }, _getCreateEventData: function() {
    return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : V() };
  }, _tabKeydown: function(t2) {
    var e2 = V(V.ui.safeActiveElement(this.document[0])).closest("li"), i2 = this.tabs.index(e2), s2 = true;
    if (!this._handlePageNav(t2)) {
      switch (t2.keyCode) {
        case V.ui.keyCode.RIGHT:
        case V.ui.keyCode.DOWN:
          i2++;
          break;
        case V.ui.keyCode.UP:
        case V.ui.keyCode.LEFT:
          s2 = false, i2--;
          break;
        case V.ui.keyCode.END:
          i2 = this.anchors.length - 1;
          break;
        case V.ui.keyCode.HOME:
          i2 = 0;
          break;
        case V.ui.keyCode.SPACE:
          return t2.preventDefault(), clearTimeout(this.activating), void this._activate(i2);
        case V.ui.keyCode.ENTER:
          return t2.preventDefault(), clearTimeout(this.activating), void this._activate(i2 !== this.options.active && i2);
        default:
          return;
      }
      t2.preventDefault(), clearTimeout(this.activating), i2 = this._focusNextTab(i2, s2), t2.ctrlKey || t2.metaKey || (e2.attr("aria-selected", "false"), this.tabs.eq(i2).attr("aria-selected", "true"), this.activating = this._delay(function() {
        this.option("active", i2);
      }, this.delay));
    }
  }, _panelKeydown: function(t2) {
    this._handlePageNav(t2) || t2.ctrlKey && t2.keyCode === V.ui.keyCode.UP && (t2.preventDefault(), this.active.trigger("focus"));
  }, _handlePageNav: function(t2) {
    return t2.altKey && t2.keyCode === V.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, false)), true) : t2.altKey && t2.keyCode === V.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, true)), true) : void 0;
  }, _findNextTab: function(t2, e2) {
    var i2 = this.tabs.length - 1;
    for (; -1 !== V.inArray(t2 = (t2 = i2 < t2 ? 0 : t2) < 0 ? i2 : t2, this.options.disabled); ) t2 = e2 ? t2 + 1 : t2 - 1;
    return t2;
  }, _focusNextTab: function(t2, e2) {
    return t2 = this._findNextTab(t2, e2), this.tabs.eq(t2).trigger("focus"), t2;
  }, _setOption: function(t2, e2) {
    "active" === t2 ? this._activate(e2) : (this._super(t2, e2), "collapsible" === t2 && (this._toggleClass("ui-tabs-collapsible", null, e2), e2 || false !== this.options.active || this._activate(0)), "event" === t2 && this._setupEvents(e2), "heightStyle" === t2 && this._setupHeightStyle(e2));
  }, _sanitizeSelector: function(t2) {
    return t2 ? t2.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
  }, refresh: function() {
    var t2 = this.options, e2 = this.tablist.children(":has(a[href])");
    t2.disabled = V.map(e2.filter(".ui-state-disabled"), function(t3) {
      return e2.index(t3);
    }), this._processTabs(), false !== t2.active && this.anchors.length ? this.active.length && !V.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t2.disabled.length ? (t2.active = false, this.active = V()) : this._activate(this._findNextTab(Math.max(0, t2.active - 1), false)) : t2.active = this.tabs.index(this.active) : (t2.active = false, this.active = V()), this._refresh();
  }, _refresh: function() {
    this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0);
  }, _processTabs: function() {
    var l2 = this, t2 = this.tabs, e2 = this.anchors, i2 = this.panels;
    this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(t3) {
      V(this).is(".ui-state-disabled") && t3.preventDefault();
    }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
      V(this).closest("li").is(".ui-state-disabled") && this.blur();
    }), this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
      return V("a", this)[0];
    }).attr({ tabIndex: -1 }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = V(), this.anchors.each(function(t3, e3) {
      var i3, s2, n2, o2 = V(e3).uniqueId().attr("id"), a2 = V(e3).closest("li"), r2 = a2.attr("aria-controls");
      l2._isLocal(e3) ? (n2 = (i3 = e3.hash).substring(1), s2 = l2.element.find(l2._sanitizeSelector(i3))) : (n2 = a2.attr("aria-controls") || V({}).uniqueId()[0].id, (s2 = l2.element.find(i3 = "#" + n2)).length || (s2 = l2._createPanel(n2)).insertAfter(l2.panels[t3 - 1] || l2.tablist), s2.attr("aria-live", "polite")), s2.length && (l2.panels = l2.panels.add(s2)), r2 && a2.data("ui-tabs-aria-controls", r2), a2.attr({ "aria-controls": n2, "aria-labelledby": o2 }), s2.attr("aria-labelledby", o2);
    }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), t2 && (this._off(t2.not(this.tabs)), this._off(e2.not(this.anchors)), this._off(i2.not(this.panels)));
  }, _getList: function() {
    return this.tablist || this.element.find("ol, ul").eq(0);
  }, _createPanel: function(t2) {
    return V("<div>").attr("id", t2).data("ui-tabs-destroy", true);
  }, _setOptionDisabled: function(t2) {
    var e2, i2;
    for (Array.isArray(t2) && (t2.length ? t2.length === this.anchors.length && (t2 = true) : t2 = false), i2 = 0; e2 = this.tabs[i2]; i2++) e2 = V(e2), true === t2 || -1 !== V.inArray(i2, t2) ? (e2.attr("aria-disabled", "true"), this._addClass(e2, null, "ui-state-disabled")) : (e2.removeAttr("aria-disabled"), this._removeClass(e2, null, "ui-state-disabled"));
    this.options.disabled = t2, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, true === t2);
  }, _setupEvents: function(t2) {
    var i2 = {};
    t2 && V.each(t2.split(" "), function(t3, e2) {
      i2[e2] = "_eventHandler";
    }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(true, this.anchors, { click: function(t3) {
      t3.preventDefault();
    } }), this._on(this.anchors, i2), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs);
  }, _setupHeightStyle: function(t2) {
    var i2, e2 = this.element.parent();
    "fill" === t2 ? (i2 = e2.height(), i2 -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
      var t3 = V(this), e3 = t3.css("position");
      "absolute" !== e3 && "fixed" !== e3 && (i2 -= t3.outerHeight(true));
    }), this.element.children().not(this.panels).each(function() {
      i2 -= V(this).outerHeight(true);
    }), this.panels.each(function() {
      V(this).height(Math.max(0, i2 - V(this).innerHeight() + V(this).height()));
    }).css("overflow", "auto")) : "auto" === t2 && (i2 = 0, this.panels.each(function() {
      i2 = Math.max(i2, V(this).height("").height());
    }).height(i2));
  }, _eventHandler: function(t2) {
    var e2 = this.options, i2 = this.active, s2 = V(t2.currentTarget).closest("li"), n2 = s2[0] === i2[0], o2 = n2 && e2.collapsible, a2 = o2 ? V() : this._getPanelForTab(s2), r2 = i2.length ? this._getPanelForTab(i2) : V(), i2 = { oldTab: i2, oldPanel: r2, newTab: o2 ? V() : s2, newPanel: a2 };
    t2.preventDefault(), s2.hasClass("ui-state-disabled") || s2.hasClass("ui-tabs-loading") || this.running || n2 && !e2.collapsible || false === this._trigger("beforeActivate", t2, i2) || (e2.active = !o2 && this.tabs.index(s2), this.active = n2 ? V() : s2, this.xhr && this.xhr.abort(), r2.length || a2.length || V.error("jQuery UI Tabs: Mismatching fragment identifier."), a2.length && this.load(this.tabs.index(s2), t2), this._toggle(t2, i2));
  }, _toggle: function(t2, e2) {
    var i2 = this, s2 = e2.newPanel, n2 = e2.oldPanel;
    function o2() {
      i2.running = false, i2._trigger("activate", t2, e2);
    }
    function a2() {
      i2._addClass(e2.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), s2.length && i2.options.show ? i2._show(s2, i2.options.show, o2) : (s2.show(), o2());
    }
    this.running = true, n2.length && this.options.hide ? this._hide(n2, this.options.hide, function() {
      i2._removeClass(e2.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a2();
    }) : (this._removeClass(e2.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n2.hide(), a2()), n2.attr("aria-hidden", "true"), e2.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), s2.length && n2.length ? e2.oldTab.attr("tabIndex", -1) : s2.length && this.tabs.filter(function() {
      return 0 === V(this).attr("tabIndex");
    }).attr("tabIndex", -1), s2.attr("aria-hidden", "false"), e2.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
  }, _activate: function(t2) {
    var t2 = this._findActive(t2);
    t2[0] !== this.active[0] && (t2 = (t2 = t2.length ? t2 : this.active).find(".ui-tabs-anchor")[0], this._eventHandler({ target: t2, currentTarget: t2, preventDefault: V.noop }));
  }, _findActive: function(t2) {
    return false === t2 ? V() : this.tabs.eq(t2);
  }, _getIndex: function(t2) {
    return t2 = "string" == typeof t2 ? this.anchors.index(this.anchors.filter("[href$='" + V.escapeSelector(t2) + "']")) : t2;
  }, _destroy: function() {
    this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
      V.data(this, "ui-tabs-destroy") ? V(this).remove() : V(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
    }), this.tabs.each(function() {
      var t2 = V(this), e2 = t2.data("ui-tabs-aria-controls");
      e2 ? t2.attr("aria-controls", e2).removeData("ui-tabs-aria-controls") : t2.removeAttr("aria-controls");
    }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
  }, enable: function(i2) {
    var t2 = this.options.disabled;
    false !== t2 && (t2 = void 0 !== i2 && (i2 = this._getIndex(i2), Array.isArray(t2) ? V.map(t2, function(t3) {
      return t3 !== i2 ? t3 : null;
    }) : V.map(this.tabs, function(t3, e2) {
      return e2 !== i2 ? e2 : null;
    })), this._setOptionDisabled(t2));
  }, disable: function(t2) {
    var e2 = this.options.disabled;
    if (true !== e2) {
      if (void 0 === t2) e2 = true;
      else {
        if (t2 = this._getIndex(t2), -1 !== V.inArray(t2, e2)) return;
        e2 = Array.isArray(e2) ? V.merge([t2], e2).sort() : [t2];
      }
      this._setOptionDisabled(e2);
    }
  }, load: function(t2, s2) {
    t2 = this._getIndex(t2);
    function n2(t3, e2) {
      "abort" === e2 && o2.panels.stop(false, true), o2._removeClass(i2, "ui-tabs-loading"), a2.removeAttr("aria-busy"), t3 === o2.xhr && delete o2.xhr;
    }
    var o2 = this, i2 = this.tabs.eq(t2), t2 = i2.find(".ui-tabs-anchor"), a2 = this._getPanelForTab(i2), r2 = { tab: i2, panel: a2 };
    this._isLocal(t2[0]) || (this.xhr = V.ajax(this._ajaxSettings(t2, s2, r2)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i2, "ui-tabs-loading"), a2.attr("aria-busy", "true"), this.xhr.done(function(t3, e2, i3) {
      setTimeout(function() {
        a2.html(t3), o2._trigger("load", s2, r2), n2(i3, e2);
      }, 1);
    }).fail(function(t3, e2) {
      setTimeout(function() {
        n2(t3, e2);
      }, 1);
    })));
  }, _ajaxSettings: function(t2, i2, s2) {
    var n2 = this;
    return { url: t2.attr("href").replace(/#.*$/, ""), beforeSend: function(t3, e2) {
      return n2._trigger("beforeLoad", i2, V.extend({ jqXHR: t3, ajaxSettings: e2 }, s2));
    } };
  }, _getPanelForTab: function(t2) {
    t2 = V(t2).attr("aria-controls");
    return this.element.find(this._sanitizeSelector("#" + t2));
  } }), false !== V.uiBackCompat && V.widget("ui.tabs", V.ui.tabs, { _processTabs: function() {
    this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
  } }), V.ui.tabs, V.widget("ui.tooltip", { version: "1.13.3", options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function() {
    var t2 = V(this).attr("title");
    return V("<a>").text(t2).html();
  }, hide: true, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: true, track: false, close: null, open: null }, _addDescribedBy: function(t2, e2) {
    var i2 = (t2.attr("aria-describedby") || "").split(/\s+/);
    i2.push(e2), t2.data("ui-tooltip-id", e2).attr("aria-describedby", String.prototype.trim.call(i2.join(" ")));
  }, _removeDescribedBy: function(t2) {
    var e2 = t2.data("ui-tooltip-id"), i2 = (t2.attr("aria-describedby") || "").split(/\s+/), e2 = V.inArray(e2, i2);
    -1 !== e2 && i2.splice(e2, 1), t2.removeData("ui-tooltip-id"), (i2 = String.prototype.trim.call(i2.join(" "))) ? t2.attr("aria-describedby", i2) : t2.removeAttr("aria-describedby");
  }, _create: function() {
    this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.liveRegion = V("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = V([]);
  }, _setOption: function(t2, e2) {
    var i2 = this;
    this._super(t2, e2), "content" === t2 && V.each(this.tooltips, function(t3, e3) {
      i2._updateContent(e3.element);
    });
  }, _setOptionDisabled: function(t2) {
    this[t2 ? "_disable" : "_enable"]();
  }, _disable: function() {
    var s2 = this;
    V.each(this.tooltips, function(t2, e2) {
      var i2 = V.Event("blur");
      i2.target = i2.currentTarget = e2.element[0], s2.close(i2, true);
    }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
      var t2 = V(this);
      if (t2.is("[title]")) return t2.data("ui-tooltip-title", t2.attr("title")).removeAttr("title");
    }));
  }, _enable: function() {
    this.disabledTitles.each(function() {
      var t2 = V(this);
      t2.data("ui-tooltip-title") && t2.attr("title", t2.data("ui-tooltip-title"));
    }), this.disabledTitles = V([]);
  }, open: function(t2) {
    var i2 = this, e2 = V(t2 ? t2.target : this.element).closest(this.options.items);
    e2.length && !e2.data("ui-tooltip-id") && (e2.attr("title") && e2.data("ui-tooltip-title", e2.attr("title")), e2.data("ui-tooltip-open", true), t2 && "mouseover" === t2.type && e2.parents().each(function() {
      var t3, e3 = V(this);
      e3.data("ui-tooltip-open") && ((t3 = V.Event("blur")).target = t3.currentTarget = this, i2.close(t3, true)), e3.attr("title") && (e3.uniqueId(), i2.parents[this.id] = { element: this, title: e3.attr("title") }, e3.attr("title", ""));
    }), this._registerCloseHandlers(t2, e2), this._updateContent(e2, t2));
  }, _updateContent: function(e2, i2) {
    var t2 = this.options.content, s2 = this, n2 = i2 ? i2.type : null;
    if ("string" == typeof t2 || t2.nodeType || t2.jquery) return this._open(i2, e2, t2);
    (t2 = t2.call(e2[0], function(t3) {
      s2._delay(function() {
        e2.data("ui-tooltip-open") && (i2 && (i2.type = n2), this._open(i2, e2, t3));
      });
    })) && this._open(i2, e2, t2);
  }, _open: function(t2, e2, i2) {
    var s2, n2, o2, a2 = V.extend({}, this.options.position);
    function r2(t3) {
      a2.of = t3, s2.is(":hidden") || s2.position(a2);
    }
    i2 && ((o2 = this._find(e2)) ? o2.tooltip.find(".ui-tooltip-content").html(i2) : (e2.is("[title]") && (t2 && "mouseover" === t2.type ? e2.attr("title", "") : e2.removeAttr("title")), o2 = this._tooltip(e2), s2 = o2.tooltip, this._addDescribedBy(e2, s2.attr("id")), s2.find(".ui-tooltip-content").html(i2), this.liveRegion.children().hide(), (o2 = V("<div>").html(s2.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), o2.removeAttr("id").find("[id]").removeAttr("id"), o2.appendTo(this.liveRegion), this.options.track && t2 && /^mouse/.test(t2.type) ? (this._on(this.document, { mousemove: r2 }), r2(t2)) : s2.position(V.extend({ of: e2 }, this.options.position)), s2.hide(), this._show(s2, this.options.show), this.options.track && this.options.show && this.options.show.delay && (n2 = this.delayedShow = setInterval(function() {
      s2.is(":visible") && (r2(a2.of), clearInterval(n2));
    }, 13)), this._trigger("open", t2, { tooltip: s2 })));
  }, _registerCloseHandlers: function(t2, e2) {
    var i2 = { keyup: function(t3) {
      t3.keyCode === V.ui.keyCode.ESCAPE && ((t3 = V.Event(t3)).currentTarget = e2[0], this.close(t3, true));
    } };
    e2[0] !== this.element[0] && (i2.remove = function() {
      var t3 = this._find(e2);
      t3 && this._removeTooltip(t3.tooltip);
    }), t2 && "mouseover" !== t2.type || (i2.mouseleave = "close"), t2 && "focusin" !== t2.type || (i2.focusout = "close"), this._on(true, e2, i2);
  }, close: function(t2) {
    var e2, i2 = this, s2 = V(t2 ? t2.currentTarget : this.element), n2 = this._find(s2);
    n2 ? (e2 = n2.tooltip, n2.closing || (clearInterval(this.delayedShow), s2.data("ui-tooltip-title") && !s2.attr("title") && s2.attr("title", s2.data("ui-tooltip-title")), this._removeDescribedBy(s2), n2.hiding = true, e2.stop(true), this._hide(e2, this.options.hide, function() {
      i2._removeTooltip(V(this));
    }), s2.removeData("ui-tooltip-open"), this._off(s2, "mouseleave focusout keyup"), s2[0] !== this.element[0] && this._off(s2, "remove"), this._off(this.document, "mousemove"), t2 && "mouseleave" === t2.type && V.each(this.parents, function(t3, e3) {
      V(e3.element).attr("title", e3.title), delete i2.parents[t3];
    }), n2.closing = true, this._trigger("close", t2, { tooltip: e2 }), n2.hiding) || (n2.closing = false)) : s2.removeData("ui-tooltip-open");
  }, _tooltip: function(t2) {
    var e2 = V("<div>").attr("role", "tooltip"), i2 = V("<div>").appendTo(e2), s2 = e2.uniqueId().attr("id");
    return this._addClass(i2, "ui-tooltip-content"), this._addClass(e2, "ui-tooltip", "ui-widget ui-widget-content"), e2.appendTo(this._appendTo(t2)), this.tooltips[s2] = { element: t2, tooltip: e2 };
  }, _find: function(t2) {
    t2 = t2.data("ui-tooltip-id");
    return t2 ? this.tooltips[t2] : null;
  }, _removeTooltip: function(t2) {
    clearInterval(this.delayedShow), t2.remove(), delete this.tooltips[t2.attr("id")];
  }, _appendTo: function(t2) {
    t2 = t2.closest(".ui-front, dialog");
    return t2 = t2.length ? t2 : this.document[0].body;
  }, _destroy: function() {
    var s2 = this;
    V.each(this.tooltips, function(t2, e2) {
      var i2 = V.Event("blur"), e2 = e2.element;
      i2.target = i2.currentTarget = e2[0], s2.close(i2, true), V("#" + t2).remove(), e2.data("ui-tooltip-title") && (e2.attr("title") || e2.attr("title", e2.data("ui-tooltip-title")), e2.removeData("ui-tooltip-title"));
    }), this.liveRegion.remove();
  } }), false !== V.uiBackCompat && V.widget("ui.tooltip", V.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function() {
    var t2 = this._superApply(arguments);
    return this.options.tooltipClass && t2.tooltip.addClass(this.options.tooltipClass), t2;
  } }), V.ui.tooltip;
});

// app/javascript/jquery.pagination.js
jQuery.fn.pagination = function(maxentries, opts) {
  opts = jQuery.extend({
    items_per_page: 10,
    num_display_entries: 10,
    current_page: 0,
    num_edge_entries: 0,
    link_to: "#",
    prev_text: "<<",
    next_text: ">>",
    ellipse_text: "...",
    prev_show_always: true,
    next_show_always: true,
    callback: function() {
      return false;
    }
  }, opts || {});
  return this.each(function() {
    function numPages() {
      return Math.ceil(maxentries / opts.items_per_page);
    }
    function getInterval() {
      var ne_half = Math.ceil(opts.num_display_entries / 2);
      var np = numPages();
      var upper_limit = np - opts.num_display_entries;
      var start3 = current_page2 > ne_half ? Math.max(Math.min(current_page2 - ne_half, upper_limit), 0) : 0;
      var end2 = current_page2 > ne_half ? Math.min(current_page2 + ne_half, np) : Math.min(opts.num_display_entries, np);
      return [start3, end2];
    }
    function pageSelected(page_id, evt) {
      current_page2 = page_id;
      drawLinks();
      var continuePropagation = opts.callback(page_id, panel);
      if (!continuePropagation) {
        if (evt.stopPropagation) {
          evt.stopPropagation();
        } else {
          evt.cancelBubble = true;
        }
      }
      return continuePropagation;
    }
    function drawLinks() {
      panel.empty();
      var interval = getInterval();
      var np = numPages();
      var getClickHandler = function(page_id) {
        return function(evt) {
          return pageSelected(page_id, evt);
        };
      };
      var appendItem = function(page_id, appendopts) {
        page_id = page_id < 0 ? 0 : page_id < np ? page_id : np - 1;
        appendopts = jQuery.extend({ text: page_id + 1, classes: "" }, appendopts || {});
        if (page_id == current_page2) {
          var lnk = jQuery("<span class='active'>" + appendopts.text + "</span>");
        } else {
          var lnk = jQuery("<a>" + appendopts.text + "</a>").bind("click", getClickHandler(page_id)).attr("href", opts.link_to.replace(/__id__/, page_id));
        }
        if (appendopts.classes) {
          lnk.addClass(appendopts.classes);
        }
        panel.append(lnk);
      };
      if (opts.prev_text && (current_page2 > 0 || opts.prev_show_always)) {
        appendItem(current_page2 - 1, { text: opts.prev_text, classes: "prev" });
      }
      if (interval[0] > 0 && opts.num_edge_entries > 0) {
        var end2 = Math.min(opts.num_edge_entries, interval[0]);
        for (var i = 0; i < end2; i++) {
          appendItem(i);
        }
        if (opts.num_edge_entries < interval[0] && opts.ellipse_text) {
          jQuery("<span>" + opts.ellipse_text + "</span>").appendTo(panel);
        }
      }
      for (var i = interval[0]; i < interval[1]; i++) {
        appendItem(i);
      }
      if (opts.next_text && (current_page2 < np - 1 || opts.next_show_always)) {
        appendItem(current_page2 + 1, { text: opts.next_text, classes: "next" });
      }
    }
    var current_page2 = opts.current_page;
    maxentries = !maxentries || maxentries < 0 ? 1 : maxentries;
    opts.items_per_page = !opts.items_per_page || opts.items_per_page < 0 ? 1 : opts.items_per_page;
    var panel = jQuery(this);
    this.selectPage = function(page_id) {
      pageSelected(page_id);
    };
    this.prevPage = function() {
      if (current_page2 > 0) {
        pageSelected(current_page2 - 1);
        return true;
      } else {
        return false;
      }
    };
    this.nextPage = function() {
      if (current_page2 < numPages() - 1) {
        pageSelected(current_page2 + 1);
        return true;
      } else {
        return false;
      }
    };
    drawLinks();
    opts.callback(current_page2, this);
  });
};

// app/javascript/common.js
(() => {
  "use strict";
  const getStoredTheme = () => localStorage.getItem("theme");
  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };
  const setTheme = (theme) => {
    if (theme === "auto") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
      }
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  };
  setTheme(getPreferredTheme());
  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector("#bd-theme");
    if (!themeSwitcher) {
      return;
    }
    const themeSwitcherText = document.querySelector("#bd-theme-text");
    const activeThemeIcon = document.querySelector(".theme-icon-active use");
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
    const svgOfActiveBtn = btnToActive.querySelector("svg use").getAttribute("href");
    document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
      element.classList.remove("active");
      element.setAttribute("aria-pressed", "false");
    });
    btnToActive.classList.add("active");
    btnToActive.setAttribute("aria-pressed", "true");
    activeThemeIcon.setAttribute("href", svgOfActiveBtn);
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
    themeSwitcher.setAttribute("aria-label", themeSwitcherLabel);
    if (focus) {
      themeSwitcher.focus();
    }
  };
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    const storedTheme = getStoredTheme();
    if (storedTheme !== "light" && storedTheme !== "dark") {
      setTheme(getPreferredTheme());
    }
  });
  const themeChange = () => {
    showActiveTheme(getPreferredTheme());
    document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const theme = toggle.getAttribute("data-bs-theme-value");
        setStoredTheme(theme);
        setTheme(theme);
        showActiveTheme(theme, true);
      });
    });
  };
  window.addEventListener("DOMContentLoaded", themeChange);
  window.addEventListener("turbo:load", themeChange);
})();

// app/javascript/index.js
function setDateInput(obj) {
  if (obj != void 0) {
    var datediff = -parseInt(obj);
    var newDate = /* @__PURE__ */ new Date();
    var now = /* @__PURE__ */ new Date();
    newDate.setDate(now.getDate() + datediff);
    var newYear = newDate.getFullYear();
    var newMonth = newDate.getMonth() + 1;
    if (newMonth.toString().length == 1) newMonth = "0" + newMonth;
    endMonth = now.getMonth() + 1;
    if (endMonth.toString().length == 1) endMonth = "0" + endMonth;
    var newDay = newDate.getDate();
    if (newDay.toString().length == 1) {
      newDay = "0" + newDay;
    }
    ;
    var txtSDate = newYear + "-" + newMonth + "-" + newDay;
    endDay = now.getDate();
    if (endDay.toString().length == 1) {
      endDay = "0" + endDay;
    }
    ;
    var txtEDate = now.getFullYear() + "-" + endMonth + "-" + endDay;
    $('input[name="start_date"]').val(txtSDate).effect("highlight");
    $('input[name="end_date"]').val(txtEDate).effect("highlight");
  } else {
    alert("\uC7A0\uC2DC \uD6C4 \uC774\uC6A9\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.");
    return false;
  }
}
function add_hyphen(v) {
  if (!v) {
    return v;
  }
  v = v.replace(/[^0-9]/g, "");
  return v.replace(/^(0(?:2|[0-9]{2}))([0-9]+)([0-9]{4}$)/, "$1-$2-$3");
}
function initPagination(num_entries, items_per_page, current_page2) {
  if (!current_page2) {
    var current_page2 = 0;
  }
  if (num_entries <= items_per_page) {
    return false;
  }
  $(".sl_pagination").pagination(num_entries, {
    current_page: current_page2,
    num_edge_entries: 2,
    num_display_entries: 8,
    callback: pageselectCallback,
    items_per_page
  });
  return false;
}
function pageselectCallback(page_index, jq) {
  if ($(jq).data("load") == true)
    getList(page_index, jq);
  else
    $(jq).data("load", true);
  return false;
}
var current_page = 0;
function getList(current_page2, jq) {
  if (!current_page2)
    current_page2 = 0;
  var perPage = 10;
  var pageID = current_page2 + 1;
  var searchType = null;
  var searchField = null;
  var searchWord = null;
  if ($.trim($("#search-word").val()) != "") {
    searchField = $('input[name="search_type"]:checked').val();
    searchWord = $.trim($("#search-word").val());
  }
  $.getJSON("/admin/users.json", { "search_field": searchField, "search_word": searchWord, "per_page": perPage, "page": pageID }, function(data) {
    $("#user-select-list tbody").empty();
    $("#user-select-list_count").val(data.total);
    if (data.length == 1) {
      $.each(data, function(index, value) {
        if (value.left_coupon) {
          var left_coupon = value.left_coupon;
        } else {
          var left_coupon = 0;
        }
        $("#user-select-list tbody").append("<tr>" + input + '<td class="name">' + value["name"] + '</td><td class="phone">' + add_hyphen(value["phone"]) + "</td></tr>");
      });
      $("#user-select-list tbody td").click(m_td_click);
      $("#user-select-list tbody tr td input").click(function(e) {
        e.stopPropagation();
      }).change(function() {
        var tr = $(this).closest("tr");
        var u_id = tr.find("td:first input").val();
        var u_name = tr.find("td:eq(1)").text();
        var u_phone = tr.find("td:eq(3)").text();
        var left_coupon = tr.find("td input:eq(1)").val();
        var black_list_exists = tr.find("td input:eq(2)").val();
        var black_list = tr.find("td input:eq(3)").val();
        var content = { "id": u_id, "name": u_name, "left_coupon": left_coupon, "phone": u_phone, "black_list_exists": black_list_exists, "black_list": black_list };
        select_user(content);
      });
    } else {
      $("#user-select-list tbody").append('<tr><td colspan="4" style="text-align:center">\uD574\uB2F9 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</td></tr>');
    }
    $(".sl_pagination").removeData("load").empty();
    initPagination(data.length, 10, current_page2);
  });
}
function m_td_click() {
  var i_checkbox = $(this).parent().find("input:first").prop("checked", true).change();
}
function select_user(content) {
  $("#order-user-id").val(content.id);
  $("#user-info").show();
  $("#user-search").hide();
  var user_name = content.name;
  if ($("#display_coupon").val() == 1) {
    user_name += "<br />(" + content.left_coupon + '\uD68C \uB0A8\uC74C)<input type="hidden" id="left_coupon" value="' + content.left_coupon + '">';
  }
  $("#user_name").html(user_name);
  if (content.phone) {
    var phone = content.phone;
  } else {
    var phone = "\uBBF8\uC785\uB825";
  }
  $("#user_phone").text(phone);
  if (content.black_list_exists > 0) {
    $("#user-search-form .card").addClass("border-warning");
    var card_footer = $("<div>");
    card_footer.addClass("card-footer bg-warning border-warning");
    card_footer.html('<span class="text text-white">' + content.black_list + "</span>");
    $("#user-search-form .card").append(card_footer);
  } else {
    if ($("#user-search-form .card").hasClass("border-warning")) {
      $("#user-search-form .card").removeClass("border-warning");
    }
  }
  if ($("#order_complete").length) {
    if (phone != "\uBBF8\uC785\uB825") {
      $('#order_form input[name="CashNumber"]').val(phone.replace(/-/g, ""));
    }
  }
  localStorage.setItem("user", JSON.stringify(content));
}
var ready = function() {
  var p_index = 0;
  var no_exists_order_t = $("#no_data_t").val();
  $("#order_form .delete").click(delete_order);
  $("#order_form .plus").click(plus_click);
  $("#order_form .minus").click(minus_click);
  $('input[name="search_field"]').change(function() {
    $("#search_label").text($(this).parent().find("label").text());
    $("#search-word").val("");
    $("#search-word").focus();
  });
  function delete_order() {
    var tr = $(this).closest("tr");
    var tbody = $(this).closest("tbody");
    var product_id = tr.find("input:first").val();
    var product_ele = $('#order-new .list input.product_id[value="' + product_id + '"]');
    var ele = product_ele.closest(".card").find(".quantity");
    ele.val(0);
    make_order();
  }
  function plus_click() {
    var tr = $(this).closest("tr");
    var product_id = tr.find("input:first").val();
    var product_ele = $('#order-new .list input.product_id[value="' + product_id + '"]');
    var ele = product_ele.closest(".card").find(".quantity");
    ele.val(Number(ele.val()) + 1);
    make_order();
  }
  function minus_click() {
    var tr = $(this).closest("tr");
    var product_id = tr.find("input:first").val();
    var product_ele = $('#order-new .list input.product_id[value="' + product_id + '"]');
    var ele = product_ele.closest(".card").find(".quantity");
    ele.val(Number(ele.val()) - 1);
    make_order();
  }
  function make_order() {
    if ($("#order_form tbody .no_data").length) {
      $("#order_form tbody tr").remove();
    }
    $("#order_form tbody .order").remove();
    var total_quantity = new Array();
    var total_price = new Array();
    $("#order-new .list article .card").each(function() {
      var quantity = $(this).find("input.quantity").val();
      if (quantity == 0) {
        return true;
      }
      var title = $(this).find(".card-header").text();
      var product_id = $(this).find("input.product_id").val();
      var price = $(this).find('input[name="price[]"]').val();
      var dc_rate = 0;
      var last_price = Number(quantity * (price - price * (dc_rate / 100)));
      total_quantity.push(quantity);
      total_price.push(last_price);
      var tr = $('<tr class="order"><td><input type="hidden" value="' + product_id + '">' + title + '</td><td class="price text-right"><span class="price_t">' + last_price.toLocaleString() + '</span></td><td class="text-center"><span class="btn btn-success plus">+</span>&nbsp;<span class="quantity">' + quantity + '</span>&nbsp;<span class="btn btn-warning minus">-</span></td><td class="text-right"><span class="btn btn-danger delete">' + $("#cancel_s").text() + "</span></td></tr>");
      tr.find(".delete").click(delete_order);
      tr.find(".plus").click(plus_click);
      tr.find(".minus").click(minus_click);
      $("#order_form tbody").append(tr);
      tr.effect("highlight", 1e3);
      p_index++;
    });
    var total_result_price = total_price.reduce((a, b) => a + b, 0);
    $("#total-price").text(Number(total_result_price).toLocaleString("ko-KR", { style: "currency", currency: "KRW" }));
    if ($("#order_form table tbody tr.order").length) {
      $("#select-complete").removeClass("disabled");
    } else {
      $("#select-complete").addClass("disabled");
      $("#order_form tbody").append('<tr><td colspan="4" class="no_data">' + no_exists_order_t + "</td></tr>");
    }
  }
  $("#order-new .list article .card input.quantity").change(function(event) {
    make_order();
  });
  $("#order-new .list article .card-header,#order-new .list article .card-body").click(function() {
    $(this).closest(".card").find("input.quantity").val(Number($(this).closest(".card").find("input.quantity").val()) + 1).change();
  }).css("cursor", "pointer");
  $("#user-select-list tbody tr,#order_add article .card").css("cursor", "pointer");
  $("#user-select-list tbody td").click(m_td_click);
  $("#user-select-list tbody tr td input").change(function() {
    var tr = $(this).closest("tr");
    var u_id = tr.find("td:first input").val();
    var u_name = tr.find("td:eq(1)").text();
    var u_phone = tr.find("td:eq(2)").text();
    var left_coupon = tr.find("td input:eq(1)").val();
    var black_list_exists = tr.find("td input:eq(3)").val();
    var black_list = tr.find("td input:eq(4)").val();
    var content = { "id": u_id, "name": u_name, "left_coupon": left_coupon, "phone": u_phone, "black_list_exists": black_list_exists, "black_list": black_list };
    select_user(content);
  });
  initPagination(Number($("#user-select-list-count").val()), 10, 0);
  $("#user_select_cancel").click(function() {
    $("#user-info").hide();
    $("#user-search").show();
    $("#order-user-id").val("");
    if ($(this).closest(".card").hasClass("border-warning")) {
      $(this).closest(".card").removeClass("border-warning");
      $(this).closest(".card").find(".card-footer").remove();
    }
    localStorage.removeItem("user");
  });
  $('input[name="search_field"]').change(function() {
    $("#search_label").text($(this).parent().find("label").text());
  });
  $('input[name="search_field"]').each(function() {
    if ($(this).is(":checked")) {
      $("#search_label").text($(this).parent().find("label").text());
    }
  });
  $("#user-search-form").submit(function() {
    var search_field = $(this).find('input[name="search_field"]:checked').val();
    var search_word = $(this).find("#search-word").val();
    $.getJSON("/admin/users.json", { "search_field": search_field, "search_word": search_word, "per_page": 10, "page": 1 }, function(data) {
      if (data.length == 1) {
        $("#user-select-list").hide();
        var content = data[0];
        select_user(content);
        $("#user-search-form h3 span:first").hide();
        $("#user-search-form h3 span:eq(1)").show();
      } else {
        if (data.length) {
          $("#user-select-list").show();
          $("#user-select-list tbody").empty();
          $("#user-select-list_count").val(data.total);
          $.each(data, function(index, value) {
            if (value.left_coupon) {
              var left_coupon = value.left_coupon;
            } else {
              var left_coupon = 0;
            }
            var input2 = '<td class="text-center"><input name="id" value="' + value.id + '" type="radio"><input type="hidden" value="' + left_coupon + '"><input type="hidden" value="' + value.black_list_exists + '"><input type="hidden" value="' + value.black_list + '"></td>';
            $("#user-select-list tbody").append("<tr>" + input2 + '<td class="name">' + value["name"] + '</td><td class="phone">' + add_hyphen(value["phone"]) + "</td></tr>");
          });
          $("#user-select-list tbody td").click(m_td_click);
          $("#user-select-list tbody tr td input").click(function(e) {
            e.stopPropagation();
          }).change(function() {
            var tr = $(this).closest("tr");
            var u_id = tr.find("td:first input").val();
            var u_name = tr.find("td:eq(1)").text();
            var u_phone = tr.find("td:eq(2)").text();
            var left_coupon = tr.find("td input:eq(1)").val();
            var black_list_exists = tr.find("td input:eq(3)").val();
            var black_list = tr.find("td input:eq(4)").val();
            var content2 = { "id": u_id, "name": u_name, "left_coupon": left_coupon, "phone": u_phone, "black_list_exists": black_list_exists, "black_list": black_list };
            select_user(content2);
          });
        } else {
          $("#user-select-list").show();
          $("#user-select-list tbody").empty();
          $("#user-select-list tbody").append('<tr><td colspan="4" style="text-align:center">\uD574\uB2F9 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</td></tr>');
        }
        $(".sl_pagination").removeData("load").empty();
        initPagination(data.total, 10, current_page);
      }
    });
    return false;
  });
  $("#select-complete").click(function() {
    if ($(this).hasClass("disabled")) {
      alert("\uBA3C\uC800 \uC0C1\uD488\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694");
      return false;
    }
    $(".order-layer").hide();
    $(".payment-layer").show();
  });
  $("#cancel_all").click(function() {
    $("#order-new .list article .card input.quantity").val(0);
    $("#order_form tbody").empty();
    var no_eo_tr = $('<tr><td colspan="4" class="no_data">' + no_exists_order_t + "</td></tr>");
    $("#order_form tbody").append(no_eo_tr);
    make_order();
  });
  $("#order_form").submit(function() {
    localStorage.removeItem("user");
    localStorage.removeItem("orders");
  });
  $("#anon").change(function() {
    if ($(this).is(":checked")) {
      $("#order-user-id").val($("#anon_id").val());
      $(".non-anon").hide();
      $("#p_type2").click();
      $("#p_type1").attr("disabled", "disabled");
    } else {
      $("#order-user-id").val("");
      $(".non-anon").show();
      $("#user-select-list").hide();
      $("#p_type1").removeAttr("disabled");
    }
  });
  $('input[name="date_p"]').change(function() {
    if ($("#future_search").length) {
      if ($("#future_search").val() == 1) {
        if ($(this).val() == "all") {
          $('input[name="start_date"]').val("").effect("highlight");
          $('input[name="end_date"]').val("").effect("highlight");
        } else {
          setDateInput($(this).val());
        }
        return true;
      }
    }
    if ($(this).val() == "all") {
      $('input[name="start_date"]').val("").effect("highlight");
      $('input[name="end_date"]').val("").effect("highlight");
    } else {
      setDateInput($(this).val());
    }
  });
  $(".input-daterange input").each(function() {
    $(this).datepicker({ language: "ko", todayHighlight: true, maxViewMode: "decades" });
  });
  $("#no-sns-id").click(function() {
    $("#no-sns-login").show();
    $("#sns-login,#no-sns-id").hide();
    $("#no-sns-id").parent().hide();
  });
  $("#myModal").on("hidden.bs.modal", function() {
    $(this).removeData("bs.modal");
  });
  $(".modal_link").click(function(event) {
    event.preventDefault();
    $("#myModal").removeData("modal");
    $("#myModal").load($(this).attr("href") + "?no_layout=true", function() {
      $("#myModal").modal();
    });
    return false;
  });
};
$(document).ready(ready);
document.addEventListener("DOMContentLoaded", (event) => {
  Rails.start();
});

// app/javascript/application.js
window.Rails = Rails2;
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)

bootstrap/dist/js/bootstrap.esm.js:
  (*!
    * Bootstrap v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

jquery-ui-dist/jquery-ui.min.js:
  (*! jQuery UI - v1.13.3 - 2024-04-26
  * https://jqueryui.com
  * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
  * Copyright OpenJS Foundation and other contributors; Licensed MIT *)
*/
//# sourceMappingURL=/assets/application.js.map
