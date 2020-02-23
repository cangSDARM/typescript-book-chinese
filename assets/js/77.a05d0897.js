(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{251:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"从-javascript-迁移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-javascript-迁移","aria-hidden":"true"}},[t._v("#")]),t._v(" 从 JavaScript 迁移")]),t._v(" "),a("p",[t._v("首先，假设如下：")]),t._v(" "),a("ul",[a("li",[t._v("你了解 JavaScript；")]),t._v(" "),a("li",[t._v("你了解在项目中常用的方式和构建工具（如：webpack）。")])]),t._v(" "),a("p",[t._v("有了以上假设，一般来说，将 JavaScript 代码迁移至 TypeScript 包括以下步骤：")]),t._v(" "),a("ul",[a("li",[t._v("添加一个 "),a("code",[t._v("tsconfig.json")]),t._v(" 文件；")]),t._v(" "),a("li",[t._v("把文件扩展名从 "),a("code",[t._v(".js")]),t._v(" 改成 "),a("code",[t._v(".ts")]),t._v("，开始使用 "),a("code",[t._v("any")]),t._v(" 来减少错误；")]),t._v(" "),a("li",[t._v("开始在 TypeScript 中写代码，尽可能的减少 "),a("code",[t._v("any")]),t._v(" 的使用；")]),t._v(" "),a("li",[t._v("回到旧代码，开始添加类型注解，并修复已识别的错误；")]),t._v(" "),a("li",[t._v("为第三方 JavaScript 代码定义环境声明。")])]),t._v(" "),a("p",[t._v("让我们进一步讨论其中的几个关键点。")]),t._v(" "),a("p",[t._v("记住：所有的 JavaScript 代码都是有效的 TypeScript 代码。这意味着，如果让 TypeScript 编译器编译 TypeScript 里的 JavaScript 代码，编译后的结果将会与原始的 JavaScript 代码一模一样。也就是说，把文件扩展名从 "),a("code",[t._v(".js")]),t._v(" 改成 "),a("code",[t._v(".ts")]),t._v(" 将不会造成任何负面的影响。")]),t._v(" "),a("h2",{attrs:{id:"减少错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减少错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 减少错误")]),t._v(" "),a("p",[t._v("代码被迁移至 TypeScript 后，TypeScript 将会立即对你的代码进行类型检查，你的 JavaScript 代码可能并不像想象中那样整齐了，因此你可能会收到一些报错信息。这时，可以使用 "),a("code",[t._v("any")]),t._v(" 来解决大部分的报错问题：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hey'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error: 不能把 number 类型赋值给 string 类型")]),t._v("\n")])])]),a("p",[t._v("虽然这些错误是有效的，并且在大多数情况下，根据这些错误所推断出的信息比代码库的不同部分的原始作者想象的更好，但是你的重点是在逐步更新旧代码库的同时，用 TypeScript 编写新代码。在这里，你可以使用类型断言来减少此错误：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hey'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ok")]),t._v("\n")])])]),a("p",[t._v("从另一方面来说，你可能想用 "),a("code",[t._v("any")]),t._v(" 用作类型注解：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hey'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error: 不能把一个 number 类型赋值给 string 类型")]),t._v("\n")])])]),a("p",[t._v("减少这种错误：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加 'any'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hey'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTICE")]),t._v(" "),a("p",[t._v("使用此种方式来减少错误是危险的，但是它允许你将注意力转移到你的新 TypeScript 代码错误上。当你进行下一步前，最好要留下 "),a("code",[t._v("// TODO")]),t._v(" 的注释。")])]),t._v(" "),a("h2",{attrs:{id:"第三方代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 第三方代码")]),t._v(" "),a("p",[t._v("你可以将你的 JavaScript 代码改成 TypeScript 代码，但是你不能让整个世界都使用 TypeScript。这正是 TypeScript 环境声明支持的地方。我建议你以创建一个 "),a("code",[t._v("vendor.d.ts")]),t._v(" 文件作为开始（"),a("code",[t._v(".d.ts")]),t._v(" 文件扩展名指定这个文件是一个声明文件），然后我向文件里添加东西。或者，你也可以创建一个针对于特定库的声明文件，如为 jquery 创建 "),a("code",[t._v("jquery.d.ts")]),t._v(" 文件。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTICE")]),t._v(" "),a("p",[t._v("几乎排名前 90% 的 JavaScript 库的声明文件存在于 "),a("a",{attrs:{href:"https://github.com/borisyankov/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[t._v("DefinitelyTyped"),a("OutboundLink")],1),t._v(" 仓库里，在创建自己定义的声明文件之前，我们建议你先去仓库中寻找是否有对应的声明文件。尽管如此，创建一个声明文件这种快速但不好的方式是减小使用 TypeScript 初始阻力的重要步骤")])]),t._v(" "),a("p",[t._v("根据 "),a("code",[t._v("jquery")]),t._v(" 的使用，你可以非常简单快速的为它创建一个定义：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("有时，你可能想在某些内容（如 "),a("code",[t._v("jQuery")]),t._v("）上添加显式的注解，并且你会在类型声明空间中使用它。你可以通过 "),a("code",[t._v("type")]),t._v(" 关键字快速的实现它：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" JQuery "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这提供给你一个更清晰的使用模式。")]),t._v(" "),a("p",[t._v("一个高质量的 "),a("code",[t._v("jquery.d.ts")]),t._v(" 已经在 "),a("a",{attrs:{href:"https://github.com/borisyankov/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[t._v("DefinitelyTyped"),a("OutboundLink")],1),t._v(" 中存在。现在你已经知道如何在使用第三方 JavaScript 模块时，快速克服从 JavaScript 至 TypeScript 的阻力了。在接下去的章节，我们将会讨论环境声明。")]),t._v(" "),a("h2",{attrs:{id:"第三方的-npm-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方的-npm-模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 第三方的 NPM 模块")]),t._v(" "),a("p",[t._v("与全局变量声明相似，你可以快速的定义一个全局模块，如：对于 "),a("code",[t._v("jquery")]),t._v("，如果你想把它作为一个模块来使用（"),a("a",{attrs:{href:"https://www.npmjs.com/package/jquery",target:"_blank",rel:"noopener noreferrer"}},[t._v("NPM"),a("OutboundLink")],1),t._v("），可以自己通过以下方式实现：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jquery'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("然后你就可以在必要时导入它：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" $ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jquery'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("再一次说明，一个高质量的 "),a("code",[t._v("jquery.d.ts")]),t._v(" 已经在 "),a("a",{attrs:{href:"https://github.com/borisyankov/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[t._v("DefinitelyTyped"),a("OutboundLink")],1),t._v(" 中存在，但是可能在你的包里没有，那么，你现在有一个简单快速的方式来继续迁移。")])]),t._v(" "),a("h2",{attrs:{id:"额外的非-javascript-资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#额外的非-javascript-资源","aria-hidden":"true"}},[t._v("#")]),t._v(" 额外的非 JavaScript 资源")]),t._v(" "),a("p",[t._v("在 TypeScript 中，甚至可以允许你导入任何文件，例如 "),a("code",[t._v(".css")]),t._v(" 文件（如果你使用的是 webpack 样式加载器或 css 模块），你只要添加如下代码（放在 "),a("code",[t._v("global.d.ts")]),t._v("）：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("现在你可以使用 "),a("code",[t._v("import * as foo from './some/file.css'")]),t._v("。")]),t._v(" "),a("p",[t._v("与此相似，如果你想使用 html 模版（例如：angular），你可以：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);