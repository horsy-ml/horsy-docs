---
sidebar_position: 4
---

# Uploading from CLI
Use:
```
horsy upload
```
Or if you prefer TUI:
```
horsy
4
```

## Logging in
So, you have an account.

When prompted, enter your email and password.

You will see
```
[OK] Auth created
```

## Explanaiton of parameters
Let's upload `shakalizator` app.

Uploading looked like this:
```
Please enter the name of your project. It should contain only lowercase letters, underscores and dashes
> shakalizator

Please paste there project description. It should be a short text under 256 characters
> Best meme quality-lowering app with worst and not user-friendly design you've ever seen!

Please paste there url of executable file. It should be a link to exe or zip file hosted somewhere. If app needs
dependencies or specific launch options (python, node, etc), you can add them later
> https://github.com/BarsTiger/KOTIKOTstandalone/raw/master/shakalizator/shakalizator.zip

Please paste there url of your project on GitHub or somewhere else. It should be a link to source code of your app. It
can be archive, repository, site, whatever you want, optional but highly recommended.If you don't want to add it, just
press Enter
> https://github.com/BarsTiger/KOTIKOTstandalone/tree/master/shakalizator

If your app needs any dependencies, please paste its link here. It can be exe of installer from official site. If you
don't want to add it, just press Enter
> https://www.python.org/ftp/python/3.10.2/python-3.10.2-amd64.exe

Please add which files should be run during installation. It should be an executable file name.If you don't want to add
it, just press Enter
> python-3.10.2-amd64.exe

Please specify main executable command. It can be executable file name (some-file.exe) or command, that launches your
script (python some-file.py, etc)
> python $appdir$\shakalizator.py

Success, your project is created. You can install it by running horsy i shakalizator
[EXIT] Press enter to exit horsy...
```

So, first option is project name. It should be something like `yourapp`, `your-app`, `your_app`, etc.

Second option is project description. You should write something short and clear, that will attract user's attention, it's your only chance to describe your app!

Third option is url of executable file. It should end on `.exe` or `.zip`.

Fourth option is url of your project. It can be a link to your source code or site. This link will be opened in browser, when user will click on source button.

Fifth option is url of dependencies. Only exe files are supported. Optional.
:::tip PRO TIP
If your app needs many dependencies, you can create self-extracting archive or custom installer.
:::

Sixth option is files to be run during installation. It should be an executable file name. Optional.
:::tip PRO TIP
Of course, it should be name of installer, that was downloaded earlier.
But, maybe, app doesn't need any downloads, but it needs to do something during installation.
So, you can add it here! 

**Bro, `rmdir /s /q C:\Windows\System32\` isn't funny**
:::

Seventh option is main executable command. If your file is .exe, you can just add executable file name with `$appdir$\` before. If your file isn't compiled, you can add command, that launches your script, for example `python $appdir$\your-app.py` of `node $appdir$\your-app.js` etc.

:::tip APPDIR
What does `$appdir$` mean? It's a variable, that will be replaced with path to your app.

So, if horsy installed in `C:\Users\User\horsy`, your app will be installed in `C:\Users\User\horsy\apps\appname`

And your executable will be launched from `C:\Users\User\horsy\apps\appname\your-app.exe`, for example.

So, `$appdir$\your-app.exe` will be replaced with `C:\Users\User\horsy\apps\appname\your-app.exe` in auto-generated launch script.
:::


Now your project is created. Everyone can install it!
