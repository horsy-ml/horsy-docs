---
sidebar_position: 1
---

# Installation

So, first lets install **horsy in one minute**.

## Installer

First you need to download **installer**.

It's availible **[here](https://horsy.ml/download)**.

### What you'll need

- Windows
- Hard drive or SSD
- Keyboard and mouse
- THATS ALL!

## Using

Now, launch installer-horsy-win.exe

Windows can block our file - we aren't trusted developers with signature. If you are **scared** with our file - download sources and build it by yourself!

So, press "More" and "Launch anyways"

If nothing happens - start app once more, it can be blocked or stopped with other process.

You will see installer GUI

![Installer GUI](/img/installation/installer.png)

Press ```Choose path``` button and choose folder where horsy and its apps will be installed. We will create ```horsy``` folder in folder that you have chosen

You can install horsy and horsygui or horsy only. We recomend you install both tools, but you can install GUI whenever you want

If writing in this folder needs Administrator privilegies, horsy will evaluate itself.
:::danger Installing in Administrator folder
Yes, we now that you like installing apps in ```Program Files``` folder more than your life, but... don't install horsy there.
Some apps won't be installed properly in privileged folder, better leave default folder or ensure that folder you have chosen is availible for regular users.
:::

We will automatically create desktop link for horsygui and add everything to PATH

```
Troubleshooting:
If installer doesn't work, you can do all stuff manually.
First, download horsy and horsygui (use curl, iwr, wget or just browser)
https://github.com/horsy-ml/horsy/blob/master/bin/horsy.exe
https://github.com/horsy-ml/horsy/blob/master/bin/horsygui.exe
Copy this files in new folder
Create 'apps' folder near exes
Add folder with horsy binaries to PATH
Add 'apps' folder to PATH
Configure new HORSYPATH system variable and add binaries (main) folder as value
```

# You all done!
