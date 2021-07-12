(self.webpackChunkvuepress=self.webpackChunkvuepress||[]).push([[997],{8229:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-2bb7041a",path:"/leetcode/20.html",title:"20. 有效的括号",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"leetcode/20.md",git:{}}},9449:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>r});var p=a(6252);const e={id:"_20-有效的括号",tabindex:"-1"},t=(0,p.Wm)("a",{class:"header-anchor",href:"#_20-有效的括号","aria-hidden":"true"},"#",-1),o=(0,p.Uk)(),c={href:"https://leetcode-cn.com/problems/valid-parentheses/",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("20. 有效的括号"),u=(0,p.uE)('<p>给定一个只包括 <code>&#39;(&#39;</code>，<code>&#39;)&#39;</code>，<code>&#39;{&#39;</code>，<code>&#39;}&#39;</code>，<code>&#39;[&#39;</code>，<code>&#39;]&#39;</code> 的字符串 <code>s</code> ，判断字符串是否有效。</p><p>有效字符串需满足：</p><ol><li>左括号必须用相同类型的右括号闭合。</li><li>左括号必须以正确的顺序闭合。</li></ol><p><strong>示例 1：</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>输入：s = &quot;()&quot;\n输出：true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>示例 2：</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>输入：s = &quot;()[]{}&quot;\n输出：true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>示例 3：</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>输入：s = &quot;(]&quot;\n输出：false\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>示例 4：</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>输入：s = &quot;([)]&quot;\n输出：false\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>示例 5：</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>输入：s = &quot;{[]}&quot;\n输出：true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 104</code></li><li><code>s</code> 仅由括号 <code>&#39;()[]{}&#39;</code> 组成</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;(&#39;</span> <span class="token operator">||</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;{&#39;</span> <span class="token operator">||</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;}&#39;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&#39;{&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">else</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">//不要忽略这一步</span>\n    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>',16),r={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[(0,p.Wm)("h1",e,[t,o,(0,p.Wm)("a",c,[l,(0,p.Wm)(a)])]),u],64)}}}}]);