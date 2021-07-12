(self.webpackChunkvuepress=self.webpackChunkvuepress||[]).push([[700],{5055:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-2d6bdcb9",path:"/leetcode/21.html",title:"21. 合并两个有序链表",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"leetcode/21.md",git:{}}},9688:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>u});var e=a(6252);const p={id:"_21-合并两个有序链表",tabindex:"-1"},t=(0,e.Wm)("a",{class:"header-anchor",href:"#_21-合并两个有序链表","aria-hidden":"true"},"#",-1),l=(0,e.Uk)(),o={href:"https://leetcode-cn.com/problems/merge-two-sorted-lists/",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("21. 合并两个有序链表"),r=(0,e.uE)('<p>将两个升序链表合并为一个新的 <strong>升序</strong> 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" alt="img"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>输入：l1 = [1,2,4], l2 = [1,3,4]\n输出：[1,1,2,3,4,4]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>示例 2：</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>输入：l1 = [], l2 = []\n输出：[]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>示例 3：</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>输入：l1 = [], l2 = [0]\n输出：[0]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>提示：</strong></p><ul><li>两个链表的节点数目范围是 <code>[0, 50]</code></li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li><code>l1</code> 和 <code>l2</code> 均按 <strong>非递减顺序</strong> 排列</li></ul><p>按照题解的思路，可以用递归的方法：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>l1<span class="token punctuation">)</span> <span class="token keyword">return</span> l2<span class="token punctuation">;</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>l2<span class="token punctuation">)</span> <span class="token keyword">return</span> l1<span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val<span class="token operator">&lt;=</span>l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        l1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> l2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> l1<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">else</span><span class="token punctuation">{</span>\n        l2<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">,</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> l2<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>如果是新建一个变量的话，需要添加很多循环和遍历，而且很容易编译出错</p>',13),u={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[(0,e.Wm)("h1",p,[t,l,(0,e.Wm)("a",o,[c,(0,e.Wm)(a)])]),r],64)}}}}]);