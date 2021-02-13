---
title: Raspberry Pi Zero W Setup
date: 2019-10-06
updated: 2021-01-31
draft: false
tags:
  - "hardware"
---

Wanted to document how I setup my raspberry pi's

### Getting the software

Down the latest rasperian from the raspberry [site](https://raspberrypi.org/downloads/raspbian)

i like to use the app TODO to flash the sd card

After flashing add the SD card, mount the boot partition anf add a empty file 'SSH' to partition to enable SSH when it boots for the first time. You can also setup wifi on boot by also adding a file named 'wpa_supplicant.conf'to the boot partition with the following contents:
```
country=<Your Country Code>
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdevupdate_config=1
network={
  ssid="<NETWORK NAME>"
  psk="<NETWRK PASSWORD>"
}
```

### Setup
#### Hostname

The raspbian os already includes an avahi server to look for hostnames on the network. And if you use a Mac it does to. I like to name my pis after pies. So I reccomend naming your pis if you plan on having multiple. To change the hostname do it with ```sudo raspi-config'' in the Network option.

#### DNS Server
If you are not using your routers default DNS you need to edit the '/etc/dhcpcd.conf' file. Near the bottom of the file is an option 'static domain_name_servers=192.168.1.1'. uncomment the line and change the IP to the correct IP.

### Security

I like to do most steps in the suggestions provided by on the security [site](https://www.raspberrypi.org/documentation/configuration/security.md)

If you do decide to remove the default 'pi' user (which I reccomend you do) you will need to change the autologin boot option in the raspi-config: rapi-config -> Boot Options -> B1 Desktop / CLI -> B2 Console Autologin (with your new created user)

### Power Saving
If you are not using the HDMI port on the pi add the following to the /etc/rc.local file
```
/usr/bin/tvservice -o
```
if you want to reenable it run the command with a '-p' instead of '-o'
### Python

Since python 2 will be end of life (EOL) in the beginning of 2020, it is time to make sure python 3 is defaulted on our new installs
```python
sudo update-alternatives --install /usr/bin/pthon python /usr/bin/python2.7 1
sudo update-alternatives --install /usr/bin/pthon python /usr/bin/python3.7 2 //3.7 was latest as of this post
sudo update-alternatives --config python // to make sure python 3.7 is defaulted
```

