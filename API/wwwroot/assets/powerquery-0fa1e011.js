import{g as d}from"./index-0a2f9115.js";function s(t,e){for(var o=0;o<e.length;o++){const r=e[o];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in t)){const a=Object.getOwnPropertyDescriptor(r,n);a&&Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i,u;function l(){if(u)return i;u=1,i=t,t.displayName="powerquery",t.aliases=[];function t(e){e.languages.powerquery={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0,greedy:!0},"quoted-identifier":{pattern:/#"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},string:{pattern:/(?:#!)?"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},constant:[/\bDay\.(?:Friday|Monday|Saturday|Sunday|Thursday|Tuesday|Wednesday)\b/,/\bTraceLevel\.(?:Critical|Error|Information|Verbose|Warning)\b/,/\bOccurrence\.(?:All|First|Last)\b/,/\bOrder\.(?:Ascending|Descending)\b/,/\bRoundingMode\.(?:AwayFromZero|Down|ToEven|TowardZero|Up)\b/,/\bMissingField\.(?:Error|Ignore|UseNull)\b/,/\bQuoteStyle\.(?:Csv|None)\b/,/\bJoinKind\.(?:FullOuter|Inner|LeftAnti|LeftOuter|RightAnti|RightOuter)\b/,/\bGroupKind\.(?:Global|Local)\b/,/\bExtraValues\.(?:Error|Ignore|List)\b/,/\bJoinAlgorithm\.(?:Dynamic|LeftHash|LeftIndex|PairwiseHash|RightHash|RightIndex|SortMerge)\b/,/\bJoinSide\.(?:Left|Right)\b/,/\bPrecision\.(?:Decimal|Double)\b/,/\bRelativePosition\.From(?:End|Start)\b/,/\bTextEncoding\.(?:Ascii|BigEndianUnicode|Unicode|Utf16|Utf8|Windows)\b/,/\b(?:Any|Binary|Date|DateTime|DateTimeZone|Duration|Function|Int16|Int32|Int64|Int8|List|Logical|None|Number|Record|Table|Text|Time)\.Type\b/,/\bnull\b/],boolean:/\b(?:false|true)\b/,keyword:/\b(?:and|as|each|else|error|if|in|is|let|meta|not|nullable|optional|or|otherwise|section|shared|then|try|type)\b|#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/,function:{pattern:/(^|[^#\w.])[a-z_][\w.]*(?=\s*\()/i,lookbehind:!0},"data-type":{pattern:/\b(?:any|anynonnull|binary|date|datetime|datetimezone|duration|function|list|logical|none|number|record|table|text|time)\b/,alias:"class-name"},number:{pattern:/\b0x[\da-f]+\b|(?:[+-]?(?:\b\d+\.)?\b\d+|[+-]\.\d+|(^|[^.])\B\.\d+)(?:e[+-]?\d+)?\b/i,lookbehind:!0},operator:/[-+*\/&?@^]|<(?:=>?|>)?|>=?|=>?|\.\.\.?/,punctuation:/[,;\[\](){}]/},e.languages.pq=e.languages.powerquery,e.languages.mscript=e.languages.powerquery}return i}var b=l();const y=d(b),g=s({__proto__:null,default:y},[b]);export{g as p};
