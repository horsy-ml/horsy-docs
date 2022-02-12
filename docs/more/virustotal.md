---
sidebar_position: 1
---

# VirusTotal
Cool feature available only in horsy!

To enable it, you need to have VirusTotal API key.

## Getting API key
Go to [VirusTotal](https://www.virustotal.com/) and create an account.

![VirusTotal sign up](/img/more/virustotal/signup_button.png)

Create account and open this in menu:

![API key tab](/img/more/virustotal/apikey_button.png)

Copy your api key:

![API key](/img/more/virustotal/apikey.png)

It is 64-character long string from random numbers and letters, for example
`0f000f0000f00f000000f0000f0000f00f0000f0000f00f0f0000f0f000f00f0`

## Adding key
Open terminal and type:
```
horsy --vt <api key>
```

## Disabling
Open terminal and type:
```
horsy --vt disable
```

## Functionality
While installing app, horsy will upload file to VirusTotal and give you scan results.

If main file is infected, horsy will say you about it.

If dependencies are infected, horsy will say you about it and pause installation.
If you use CLI or TUI, you can just press `Enter` to resume installation.
If you use GUI, you can't install apps with malicious dependencies.
