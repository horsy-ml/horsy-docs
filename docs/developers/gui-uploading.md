---
sidebar_position: 5
---

# Uploading from GUI
Open horsygui

Navigate to `upload` tab

Fill the form

## Explanaiton of parameters
Let's upload `shakalizator` app.

Uploading looked like this:

![Filled form](/img/developers/gui-uploading/form-filled.png)

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

Seventh option is main executable command. If your file is .exe, you can just add executable file name. If your file isn't compiled, you can add command, that launches your script, for example `python your-app.py` of `node your-app.js` etc.

Press upload button.

If you don't have login in config, you will be asked to login.

## Logging in
So, you have an account.

When prompted, enter your email and password.

You will see
```
[OK] Auth created
```