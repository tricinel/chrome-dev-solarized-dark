## Solarized Dark

Based on the color scheme from [http://ethanschoonover.com/solarized](http://ethanschoonover.com/solarized)

### Installation

1. Find your Chrome's user stylesheets directory:

Mac - Finder > shift + cmd + g:

```
~/Library/Application Support/Google/Chrome/Default/User StyleSheets/
```

Mac - Terminal:

```
cd ~/Library/Application\ Support/Google/Chrome/Default/User\ StyleSheets/
```

Windows:

```
%HOME%\AppData\Local\Google\Chrome\User Data\Default\User StyleSheets\
```

Windows 10:

```
%userprofile%\AppData\Local\Google\Chrome\User Data\Default\User StyleSheets\
```

Ubuntu (Chromium):

```
~/.config/chromium/Default/User StyleSheets/
```

Next, just replace the existing "Custom.css" file with this one. No restart needed, changes are applied immediately.

### Preview

[![solarized dark preview](https://raw.github.com/tricinel/chrome-dev-solarized-dark/master/chrome-dev-preview-small.png)](https://raw.github.com/tricinel/chrome-dev-solarized-dark/master/chrome-dev-preview.png)

### Making changes

You'll need grunt, node, npm and compass to make changes to the source files. Once these are installed on your system, you have the following grunt tasks at your disposal:

Compile scss to css, *with* line comments.

```shell
grunt
```

Compile scss to css, *compressed* and *no* line comments.

```shell
grunt build
```

If you want to make changes to the source files and have them be applied instantly for the Dev tools, you can alwasy clone the repo in the User StyleSheets directory, or symlink the Custom.css file from the repo. To do this:

1. Close Chrome
2. Delete the Custom.css file inside the User StyleSheets directory.
3. Symlink

```shell
cd ~/Library/Application\ Support/Google/Chrome/Default/User\ StyleSheets/
ln -s {/path/to/your/local/repo/Custom.css} Custom.css
```
