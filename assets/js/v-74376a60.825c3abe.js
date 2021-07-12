(self.webpackChunkvuepress=self.webpackChunkvuepress||[]).push([[223],{312:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-74376a60",path:"/ES6/",title:"ES6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"ES6/README.md",git:{}}},3091:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1><h4 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h4><p>ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 第一种写法，报错</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token comment">// 第二种写法，不报错</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h4><ol><li>const一旦声明变量，就必须立即初始化，且后续不能改变。但只是锁定地址，没有锁定包含的所有元素。</li><li>const的作用域与let命令相同：只在声明所在的块级作用域内有效。</li></ol><h4 id="交换变量的值" tabindex="-1"><a class="header-anchor" href="#交换变量的值" aria-hidden="true">#</a> 交换变量的值</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> x<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="字符串里的循环" tabindex="-1"><a class="header-anchor" href="#字符串里的循环" aria-hidden="true">#</a> 字符串里的循环</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> codePoint <span class="token keyword">of</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>codePoint<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// &quot;f&quot;</span>\n<span class="token comment">// &quot;o&quot;</span>\n<span class="token comment">// &quot;o&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="常用-判断字符串中是否包含特定元素" tabindex="-1"><a class="header-anchor" href="#常用-判断字符串中是否包含特定元素" aria-hidden="true">#</a> （常用）判断字符串中是否包含特定元素</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">;</span>\n\n\ns<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;H&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>\ns<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\ns<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\ns<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n\ns<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\ns<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\ns<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="消除空格" tabindex="-1"><a class="header-anchor" href="#消除空格" aria-hidden="true">#</a> 消除空格</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&#39;  abc  &#39;</span><span class="token punctuation">;</span>\n\n\ns<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;abc&quot;</span>\ns<span class="token punctuation">.</span><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;abc  &quot;</span>\ns<span class="token punctuation">.</span><span class="token function">trimEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;  abc&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',14),e={render:function(n,s){return p}}}}]);