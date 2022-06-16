---
sidebar_position: 1
---

# Developing app

So, you are a developer and you want to publish your app on horsy.

At first, you need to know, how horsy works.

For example, kotogamescam launch script looks like this:

```bash
%horsypath:~0,1%:
cd %horsypath%/apps/kotogamescam
KotoGameScam.exe %*
```

In simple words, it runs KotoGameScam.exe with all arguments.

First line navigates to disk, where KotoGameScam.exe is located.

Second line is a changing dir to KotoGameScam dir.

And third line is a command to run KotoGameScam.exe with all arguments.

`%*` means that all arguments applied to launch script will be passed to KotoGameScam.exe, so all CLI tools will work.

:::danger CD to app folder
Script changes dir to app folder.
Maybe, your app created to run from another folder, added to path and user can run it from anywhere, but it will not work here.
So, while developing, you should remember that horsy will run your app from %horsypath%/apps/app folder with CD to app folder
:::

We don't moderate apps and we don't have any rules for developing, but we need to say, that best way to make your app popular - adding sources to horsy.
We'll **[verify](/docs/more/verification)** only open-source apps.

Please, dont upload apps, that contain malware or other harmful code.
We don't delete apps like this, but you should be aware that we can delete your app if we think it's not safe for our servers or it contains malware, that can harm user, that doesn't know about it.

So, we don't moderate apps, but for some reasons we can delete your app without describing why, you should remember this and create only *good* apps.
