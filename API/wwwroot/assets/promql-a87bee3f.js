import{g as p}from"./index-0a2f9115.js";function b(t,o){for(var n=0;n<o.length;n++){const r=o[n];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in t)){const a=Object.getOwnPropertyDescriptor(r,e);a&&Object.defineProperty(t,e,a.get?a:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i,s;function d(){if(s)return i;s=1,i=t,t.displayName="promql",t.aliases=[];function t(o){(function(n){var r=["sum","min","max","avg","group","stddev","stdvar","count","count_values","bottomk","topk","quantile"],e=["on","ignoring","group_right","group_left","by","without"],a=["offset"],l=r.concat(e,a);n.languages.promql={comment:{pattern:/(^[ \t]*)#.*/m,lookbehind:!0},"vector-match":{pattern:new RegExp("((?:"+e.join("|")+")\\s*)\\([^)]*\\)"),lookbehind:!0,inside:{"label-key":{pattern:/\b[^,]+\b/,alias:"attr-name"},punctuation:/[(),]/}},"context-labels":{pattern:/\{[^{}]*\}/,inside:{"label-key":{pattern:/\b[a-z_]\w*(?=\s*(?:=|![=~]))/,alias:"attr-name"},"label-value":{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0,alias:"attr-value"},punctuation:/\{|\}|=~?|![=~]|,/}},"context-range":[{pattern:/\[[\w\s:]+\]/,inside:{punctuation:/\[|\]|:/,"range-duration":{pattern:/\b(?:\d+(?:[smhdwy]|ms))+\b/i,alias:"number"}}},{pattern:/(\boffset\s+)\w+/,lookbehind:!0,inside:{"range-duration":{pattern:/\b(?:\d+(?:[smhdwy]|ms))+\b/i,alias:"number"}}}],keyword:new RegExp("\\b(?:"+l.join("|")+")\\b","i"),function:/\b[a-z_]\w*(?=\s*\()/i,number:/[-+]?(?:(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[-+]?\d+)?\b|\b(?:0x[0-9a-f]+|nan|inf)\b)/i,operator:/[\^*/%+-]|==|!=|<=|<|>=|>|\b(?:and|or|unless)\b/i,punctuation:/[{};()`,.[\]]/}})(o)}return i}var u=d();const m=p(u),f=b({__proto__:null,default:m},[u]);export{f as p};
