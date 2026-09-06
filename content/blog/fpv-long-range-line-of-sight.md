---
title: "The Ultimate Guide to Line of Sight (LOS) for Long Range FPV"
description: "Planning a long-range FPV flight? Learn how to calculate Line of Sight (LOS) and Fresnel zone clearance to avoid video signal loss and failsafes."
publishDate: "2026-09-06"
tags: ["FPV", "Long Range", "RF Planning", "Line of Sight", "5.8GHz", "ELRS"]
author: "Jorge Muñoz Castillo"
ogImage: "/og-image.jpg"
---

Pushing your FPV quad or fixed-wing aircraft to its limits is thrilling, but nothing induces panic quite like static in your goggles or a sudden telemetry warning. 

When flying long range, having a high-power video transmitter (VTX) or a Crossfire/ExpressLRS control link simply isn't enough. You need to understand the physics of your radio propagation environment.

The number one cause of catastrophic signal loss in long-range FPV isn't hardware failure—**it is terrain blocking your Line of Sight (LOS)**.

> **Key Takeaway:** Visual Line of Sight (what your eyes track) does not guarantee Radio Line of Sight. High-frequency 5.8 GHz video links drop instantly behind intermediate ridges, while 900 MHz and 2.4 GHz control links require wide Fresnel zone clearance above the ground to avoid unexpected failsafes.

## 1. Why 5.8 GHz Video and 900 MHz Control Links Drop

FPV pilots manage two fundamentally different radio frequencies simultaneously on every flight:

* **Control Link (900 MHz or 2.4 GHz):** Lower frequencies offer superior diffraction, meaning they can navigate around soft vegetation and travel vast distances with minimal attenuation.
* **Video Link (5.8 GHz):** High frequencies deliver the massive bandwidth required for low-latency analogue or digital HD video, but they are exceptionally fragile.

A **5.8 GHz signal behaves almost like a beam of visible light**. If a ridge, a rocky outcrop, or a dense stand of trees intersects the direct path between your goggles' patch antenna and your drone, the video feed will cut out instantly. 

Even if your 900 MHz ExpressLRS link remains connected at 99% LQ (Link Quality), flying blind behind a mountain crest almost always leads to a crash or emergency GPS Rescue trigger.

## 2. The Hidden Enemy: The Fresnel Zone

Many pilots believe that as long as the tip of an antenna has an unobstructed straight line to the receiver, signal strength remains optimal. In RF engineering, radio propagation does not happen in a laser-thin line.

Electromagnetic waves expand in three dimensions along the flight path, forming an elongated elliptical envelope known as the **Fresnel Zone**.

If the centerline between your ground station and your aircraft is clear, but terrain encroaches into this 3D envelope:

* **Multipath Phase Cancellation:** Reflected waves bounce off the ground or ridge and arrive out of phase at your patch antennas, causing severe breakup.
* **Frequency Differences:** 
  * At **5.8 GHz**, the Fresnel zone radius is relatively narrow, requiring less vertical clearance.
  * At **900 MHz (Crossfire / ELRS)**, the Fresnel zone envelope is substantially wider, demanding significantly more physical altitude above peaks and ridges to avoid link degradation.

## 3. How to Check Terrain Clearance Before You Fly

Traditionally, verifying topographic clearance required setting up complex desktop software like Google Earth, Radio Mobile, or HeyWhatsThat at home before heading out to the field.

However, long-range FPV missions are dynamic. You drive out to a mountain valley, spot an epic ridge or gap, and ask yourself: 

> *"If I dive down the backside of that ridge at 4 km out, will my 5.8 GHz video hold or will I blackout behind the crest?"*

Guessing while armed in the air is how aircraft are lost. 

This exact challenge is why **LinkSight** was created. Designed natively for mobile devices, it brings laboratory-grade RF planning directly to the flight line on your Android phone:

1. **Dual-Point Tap & Pin:** Drop one pin at your ground station / pilot location and a second pin at your target waypoint or mountain peak.
2. **Instant SRTM Topographic Profiles:** Pull accurate terrain elevation cross-sections in milliseconds without consuming mobile data.
3. **Multi-Band Fresnel Overlays:** Instantly switch between **5.8 GHz video** and **900 MHz / 2.4 GHz control** to check clearance percentages along the entire path.
4. **Altitude Tuning on the Fly:** Adjust your takeoff point and your drone's planned cruising altitude to see the exact ceiling needed to clear intermediate topography.

## 4. Best Practices for Safe Long-Range FPV Missions

To maximize link budget and avoid equipment loss, keep these field rules in mind before arming:

* **Launch from Elevated Ground:** Whenever possible, position your ground station on the highest local point. Elevating your receiver antennas naturally lifts the entire Fresnel envelope above nearby ground obstacles.
* **Plan Your Ridge Dives with Escape Vectors:** If you intend to dive behind a ridge, your direct LOS will break. Always ensure you have sufficient battery, airspeed, and altitude to punch back above the line of sight, or carve a flight path that maintains an angle to your receiver.
* **Verify Elevation Profiles Before Arming:** Spend 30 seconds plotting your route in LinkSight. Knowing the exact minimum altitude needed to clear critical ridges gives you complete peace of mind to focus on cinematic flying.
