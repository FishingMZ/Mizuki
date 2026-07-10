---
title: 关于深色模式
published: 2026-03-02
pinned: false
description: 详细说一说深色模式的bug
tags: [Mizuki, Bugs]
category: Notes
draft: false
---

# 已知触发条件

Via浏览器，手机打开深色模式，但Mizuki未打开深色模式

# 现象

主页横幅会覆盖一层黑色遮罩，与文章部分衔接不平滑，影响观感

![Alt text](https://raw.githubusercontent.com/FishingMZ/blog/refs/heads/master/src/content/posts/about-black-mode/Screenshot_20260301-132440_Via.png)

# 原因（推测）

网站没有关于浅色/深色模式的自动检测（应该是检测到用户为深色模式但没有自动切换）导致这个遮罩原本应在深色模式下显示，但是它似乎被错误地在浅色模式下显示

# 解决办法

在顶栏中手动切换浅色/暗色模式或在手机设置中关闭深色模式
