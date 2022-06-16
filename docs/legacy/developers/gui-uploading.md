---
sidebar_position: 5
---

# Uploading from GUI
Let's upload `shakalizator` app.

## Logging in
So, you have an account.

Now, you should log in.

Navigate to `Account` tab.

If you aren't logged in, you won't see your name in the top right corner.

So, press the `Log in/Log out` button.

You will see form

![Login form](/img/legacy/developers/gui-uploading/login.jpg)

Fill out the form and press `Log in`.

## Uploading
Navigate to `Upload` tab

Fill the form

## Explanaiton of parameters

Uploading looked like this:

![Filled form](/img/legacy/developers/gui-uploading/form-filled.png)

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

Press upload button.
