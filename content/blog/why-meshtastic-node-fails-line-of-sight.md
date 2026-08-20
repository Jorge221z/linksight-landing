---
title: "Why Your Meshtastic Node Fails Despite Having Line of Sight"
description: "Seeing the target isn't enough. Learn how the Fresnel zone affects your 868/915 MHz Meshtastic nodes and how to calculate it in the field."
publishDate: "2026-08-20"
tags: ["Meshtastic", "LoRa", "RF Planning", "Line of Sight", "Fresnel Zone"]
author: "Jorge Muñoz Castillo"
ogImage: "/og-image.jpg"
---

You are out in the field, standing on a windy mountain ridge. You look across the valley and can physically see the peak where your second Meshtastic node is deployed 10 kilometers away. 

You check your smartphone app, but the node isn't connecting or passing packets.

*How is that possible if you have direct, unobstructed visual Line of Sight (LOS)?*

> **Key Takeaway:** Optical Line of Sight (what your eyes see) is fundamentally different from Radio Line of Sight. Radio waves at 868 MHz and 915 MHz require a 3D elliptical envelope called the **Fresnel Zone**, which must remain at least 60% clear of all physical obstacles.

## 1. The Optical Illusion of LOS

When we look through binoculars or with the naked eye, light travels in a virtually razor-thin, straight line. 

Radio frequency signals at sub-GHz frequencies (like **868 MHz in Europe** or **915 MHz in the Americas/Asia**), however, do not travel as a thin laser beam. As the electromagnetic wave propagates away from your transmitter antenna, it expands outwards in space, forming an elongated football-shaped envelope known as the **Fresnel Zone**.

If this 3D elliptical space is partially clipped by the ground, an intermediate ridge, or dense tree canopies:

* **Signal Reflection:** The radio signal bounces off the obstacle.
* **Phase Cancellation:** Reflected waves arrive at the receiver antenna out of phase with the direct wave.
* **Link Degradation:** This causes **destructive multipath fading**, severely degrading or completely killing your LoRa link budget.

## 2. The 60% Clearance Rule

To maintain a reliable LoRa connection, you do not just need a clear straight line connecting both antenna tips. 

The universal rule of thumb in RF engineering states that the **1st Fresnel Zone must be at least 60% clear** of any physical obstruction (terrain, trees, buildings) to prevent severe signal attenuation.

![Fresnel Zone 60 percent clearance diagram showing optical line of sight and intermediate ridge terrain obstruction](/images/fresnel-zone-clearance-diagram.webp)

### The Real-World Math: 10 km on 915 MHz

Let's look at a concrete real-world deployment scenario:

* **Link Distance:** 10 km (6.2 miles)
* **Frequency:** 915 MHz (LoRa band)
* **Midpoint Fresnel Radius:** `r ≈ 28.5 meters (93.5 feet)`

This means that exactly halfway across your 10-kilometer link, your signal requires an open radius of almost **29 meters in every direction**. 

Even if a small hill in the center of the valley leaves a visual gap above its crest, it will easily block the lower 50% of your Fresnel envelope—completely dropping your connection.

## 3. The Nightmare of Field Calculations

Most off-grid network builders eventually discover this concept and try to verify terrain elevation before deploying a permanent node. But doing this on a smartphone while standing on a windy mountain peak is a frustrating ordeal:

* **Laggy Desktop Web Tools:** Legacy RF calculation websites are built for desktop mouse-and-keyboard setups, not mobile touchscreens.
* **High Data Usage & Crashes:** Loading gigabytes of heavy satellite tiles on a weak 4G connection often causes mobile browsers to freeze.
* **Clunky Coordinate Pinning:** Accurately tapping exact GPS coordinates and adjusting mast heights on a small screen is notoriously difficult.

## 4. A Modern Way to Plan Deployments in the Field

This exact friction is why **LinkSight** was created. Instead of fighting unresponsive desktop websites in your mobile browser, you have a native Android application built specifically for field RF planning.

With LinkSight:

1. **Interactive Dual-Point Pinning:** Drop transmitter and receiver pins effortlessly on a smooth, touch-optimized map.
2. **Instant SRTM90m Elevation Profiles:** Download accurate global topographic profiles in milliseconds without eating up storage.
3. **Automated Fresnel Overlays:** View instant clearance percentages for **868 MHz, 915 MHz, 2.4 GHz, 5.8 GHz**, or custom frequencies.
4. **Real-Time Mast Height Tuning:** Slide your antenna mast height up and down to see exactly how many meters of elevation you need to clear the ridge.

