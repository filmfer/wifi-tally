# Troubleshooting

The Troubleshooting Guide lists a few common symptoms and possible ways to resolve them.
The hints are usually ordered from most likely to least likely.

## After powering the Tally the LED strip stays dark

If the LED strip started flashing blue before turning black, see [below](#the-led-strip-started-flashing-blue-for-a-while-but-then-turned-black).

* Is the Tally really powered? Is your battery pack empty? Could the connector cable be broken?
* Did you upload all files to the Tally?
* Is the LED strip correctly wired?
* Is the LED strip working? Try to connect it to a 5V power source directly.
* Are you using an LED strip with common cathode? Connect the common pin to `GND` and
  [do the necessary configuration](tally.md#using-leds-with-common-cathode).
* Is the NodeMCU working? Try to connect to it via USB
* In case you are developing the Tally Code: It is normal the strip stays black, because the
  `init.lua` file is not uploaded.

## The LED strip started flashing blue for a while but then turned black

* The Tally should usually recover from any errors and reboot automatically. But you could
  try reconnecting it to its power source to reboot it
* The Stage Light stays black when the Tally is not patched in the Hub or not currently on
Preview or Program on the Video Mixer. So this could be totally normal.

## The Tally slowly blinks blue for an extended amount of time

![](images/blink-wait-for-wifi.gif) 

**This indicates issues when trying to connect to your WiFi.** It is perfectly normal to see
this during boot up for a few seconds, but it should not sustain for long.

* Is your WiFi up? Is the signal strong enough near the tally?
* Did you configure the WiFi name and its credentials correctly in `tally-settings.ini`?
* Connect to the Tally via USB. It should log an error code why the connection failed.
  The error codes are explained in the [NodeMCU documentation](https://nodemcu.readthedocs.io/en/master/modules/wifi/#wifieventmonreason).

## The Tally blinks blue quickly for an extended amount of time

![](images/blink-wait-for-ip.gif) 

**This means the Tally has connected to your WiFi and is waiting to get an IP address.**
It is perfectly normal to see this during boot up for a seconds, but it should not
sustain for long.

This very likely points to an issue with your WiFi configuration.

* Does your WiFi run DHCP? Are there enough free addresses that your WiFi router could issue?

## The Tally blinks blue twice

![](images/blink-wait-for-server.gif)

**This indicates that the Tally can not connect to the hub.**

* Is the hub running? 
* Is the hubs IP correctly configured in `tally-settings.ini`? Did the IP address of the computer
  running the hub change?
* Could there be a firewall blocking traffic between the Tally and the hub? Communication runs on port `{{ tally_default_port }}` by default.

## The Tally blinks blue three times

![](images/blink-invalid-settings-file.gif)

**This happens when the `tally-settings.ini` file does not exist or is invalid.**

* Did you flash the `tally-settings.ini` on the Tally?
* Does the `tally-settings.ini` include all mandatory settings?
* Try configuring "wrong" settings that won't work. But this way, you should get a different error and rule out
  that keys where mistyped.

## The Tally blinks blue occasionally

![quick blue blinking](images/blink-unknown.gif)

**This indicates that the tally is connected to the hub, but the hub does not know
which signal the tally should show.**

* Did the hub connect to your Video Mixer?

## The colors on the LEDs are messed up

* Is the wiring correct?
* It is not unheared of, that the pins of LEDs are not labeled correctly. Maybe switch them around.
* If the colors that should be on are off and vice versa, you probably use an LED with common
  cathode. See the [tally documentation](tally.md#using-leds-with-common-cathode) how to fix it.

## The Hub can not connect to ATEM video mixer

**Are you really sure the settings are correct? If yes read further.**

Every ATEM mixer has a [maximum of connections](https://forum.blackmagicdesign.com/viewtopic.php?f=4&t=101841)
that it allows at the same time – the Internet talks of 3-5 connections depending on the model.
You might be running into this issue.

To verify this as the cause identify all other software / hardware that connects to the Video Mixer,
restart it and make sure the Tally Hub is the first thing to connect.

The way to fix it is very dependent on your setup. See if you can dispense of any
software / hardware connecting to ATEM.
