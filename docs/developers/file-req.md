---
sidebar_position: 3
---

# Requirements
To upload your app, you need to:
- [Have an account](/docs/developers/creating-acc)
- Have file, that can be launched from command line
- Know, how to launch your app from any PC
- Know which files are required to run your app and how to install them

## File
You need to have file, that can be launched from command line.

Simply, it needs to be exe file.

Also, we have option to upload zip file if you don't have exe file.

It can be .py file in zip, javascript files, but you need to specify dependencies. For example, if you have a python file, you need to specify python installer file

If it is exe file, horsy will download it. If it is zip file, horsy will download and extract it.

## Launch command
Okay, you have file, that can be launched from command line. You need to know, how to launch your app.

For exe it will be exe name "app.exe".

For python, for example, it will be "python app.py".

You need to know this command to specify it later when you upload your app.

## Dependencies
So, for example, you wrote a python (or other not compiled) file. You don't whant to turn it into exe, so it requires python to be installed.

Go to Python (or NodeJS, etc.) official website and copy installer link. You should add it to dependencies in horsy.

![Download Python](/img/legacy/developers/file-req/zxcpython.png)
![Download NodeJS](/img/legacy/developers/file-req/nodejszxxxc.png)

## Uploading 
horsy doesn't keep your files, so you need to upload them to any servers.

For example, it can be GitHub. Copy link to exe in `Download` button, if on GitHub.

![Download](/img/legacy/developers/file-req/dl-button.png)

Link to executable should end on `.exe` or `.zip`
