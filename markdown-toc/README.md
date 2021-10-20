# Markdown-TOC

This extension was developed by [AlanWalk](https://github.com/AlanWalk/Markdown-TOC), he had no intent to maintain it. I found the extension was useful, so I took over it and open it to public market. If you have any issue in using this extension, please report to me.

Generate TOC (table of contents) of headlines from parsed [markdown](https://en.wikipedia.org/wiki/Markdown) file.

<!-- TOC depthfrom:2 -->

- 1. Features
- 2. Installation
- 3. Usage
    - 3.1. Insert TOC
    - 3.2. Insert Header Number Sections
- 4. Configuration
    - 4.1. Default Settings
    - 4.2. Unique Settings
- 5. Contributors
- 6. What's New?
- 7. Question
- 8. License
- 9. Links

<!-- /TOC -->

## 1. Features
- Insert header number sections.
- Auto active plugin on markdown
- Insert anchor for header `<a id="markdown-header" name="header"></a>`
- Linking via anchor tags `# A 1` → `#a-1`
- Depth control[1-6] with `depthFrom:1` and `depthTo:6`
- Enable or disable links with `withLinks:true`
- Refresh list on save with `updateOnSave:true`
- Use ordered list (1. ..., 2. ...) with `orderedList:true`
- Anchor support for (github.com|nodejs.org|bitbucket.org|ghost.org|gitlab.com).

## 2. Installation
```
ext install markdown-toc
```

## 3. Usage

### 3.1. Insert TOC
![Insert TOC](https://github.com/charleswan/vscode-extensions/markdown-toc/raw/master/img/insert-toc.gif)

### 3.2. Insert Header Number Sections
**Tips:Section of header is begin with depthFrom**

![Insert Header Number Sections](https://github.com/charleswan/vscode-extensions/markdown-toc/raw/master/img/insert-header-number-sections.gif)

## 4. Configuration
|attributes|values|defaults|
|---|---|---|
|depthFrom|uint(1-6)|1|
|depthTo|uint(1-6)|6|
|insertAnchor|bool|false|
|withLinks|bool|true|
|orderedList|bool|false|
|updateOnSave|bool|true|
|anchorMode|github.com/bitbucket.org/ghost.org/gitlab.com|github.com|

### 4.1. Default Settings
To change the default configuration settings for the Markdown-TOC extension, edit the user or workspace settings as described here. The available settings are as follows:

|attributes|values|defaults|
|---|---|---|
|markdown-toc.depthFrom|number(1-6)|1|
|markdown-toc.depthTo|number(1-6)|6|
|markdown-toc.insertAnchor|bool|false|
|markdown-toc.withLinks|bool|true|
|markdown-toc.orderedList|bool|false|
|markdown-toc.updateOnSave|bool|true|
|markdown-toc.anchorMode|enum|github.com|

### 4.2. Unique Settings
If you want to use a unique setting for a file, you can add attributes to `<!-- TOC -->` , just like:
```
<!-- TOC depthFrom:2 orderedList:true -->

<!-- /TOC -->
```

## 5. Contributors
- sine sawtooth (Add: Header number section)
- chriscamicas (Update: Anchor generation)
- kevindaub (Add : Use workspace settings for tabs and eOL)
- rovest (Feature: Insert anchor)
- zhiguang Wang(Fix: Recognised code to header list)
- jgroom33 (Fix: Codeblock error)
- satokaz (Fix: Codeblock error)

## 6. What's New?
[vscode-extensions](https://github.com/charleswan/vscode-extensions)

## 7. Question
If you have any question, you can contact with me:
- Github : [CharlesWan](https://github.com/charleswan)

## 8. License
The package is Open Source Software released under the [License](https://github.com/charleswan/vscode-extensions/blob/master/LICENSE). It's developed by CharlesWan.

## 9. Links
- [Source Code](https://github.com/charleswan/vscode-extensions/)
- [Market](https://marketplace.visualstudio.com/publishers/CharlesWan)
