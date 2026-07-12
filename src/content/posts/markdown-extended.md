---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '进一步了解 Mizuki 中的 Markdown 功能'
image: ''
tags: [Demo, Example, Markdown, Mizuki]
category: 'Examples'
draft: false 
---

## GitHub 仓库卡片

您可以添加指向 GitHub 仓库的动态卡片，页面加载时，仓库信息会从 GitHub API 获取。

::github{repo="LyraVoid/Mizuki"}

使用代码 `::github{repo="LyraVoid/Mizuki"}` 创建 GitHub 仓库卡片。

```markdown
::github{repo="LyraVoid/Mizuki"}
```

## 提示块（Admonitions）

支持以下类型的提示块：`note`、`tip`、`important`、`warning`、`caution`

:::note
突出显示用户即使略读也应注意的信息。
:::

:::tip
提供可选信息，帮助用户更顺利地使用。
:::

:::important
用户成功所必需的关键信息。
:::

:::warning
因潜在风险而需要用户立即关注的严重内容。
:::

:::caution
某个操作可能带来的负面后果。
:::

### 基本语法

```markdown
:::note
突出显示用户即使略读也应注意的信息。
:::

:::tip
提供可选信息，帮助用户更顺利地使用。
:::
```

### 自定义标题

提示块的标题可以自定义。

:::note[自定义标题]
这是一个带有自定义标题的笔记。
:::

```markdown
:::note[自定义标题]
这是一个带有自定义标题的笔记。
:::
```

### GitHub 语法

> [!TIP]
> [GitHub 语法](https://github.com/orgs/community/discussions/16925) 同样受支持。

```
> [!NOTE]
> GitHub 语法同样受支持。

> [!TIP]
> GitHub 语法同样受支持。
```

### 剧透（Spoiler）

您可以在文本中添加剧透内容。该内容也支持 **Markdown** 语法。

内容 :spoiler[是隐藏的 **ayyy**]！

```markdown
内容 :spoiler[是隐藏的 **ayyy**]！
```
