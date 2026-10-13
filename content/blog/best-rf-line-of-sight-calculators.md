---
title: "Top 5 RF Line of Sight Calculators (And Why Desktop Tools Fail in the Field)"
description: "Compare the best RF Line of Sight and Fresnel zone calculators—including Ubiquiti airLink, HeyWhatThat, Radio Mobile, and native Android alternatives."
publishDate: "2026-10-13"
tags: ["RF Planning", "Line of Sight", "Fresnel Zone", "Field Tools", "Meshtastic", "FPV"]
author: "Jorge Muñoz Castillo"
ogImage: "/og-image.jpg"
---

Setting up a reliable wireless link—whether it is a [915MHz Meshtastic node](/blog/why-meshtastic-node-fails-line-of-sight), a 5GHz WISP backhaul, or a [5.8GHz long-range FPV flight](/blog/fpv-long-range-line-of-sight)—always starts with the same fundamental question: **Will the terrain block my signal?**

For decades, radio engineers and hobbyists have relied on desktop web utilities to plot elevation profiles and check Fresnel zone clearance. Those tools work fine when you are sitting at a desk with a 27-inch monitor and a mouse. 

The problem starts the moment you step outside.

## Why Desktop Web Calculators Fail Out in the Field

When you are standing on a rooftop aligning a directional antenna, hiking a ridge to place an off-grid LoRa repeater, or scouting a mountain launch spot for an FPV flight, desktop-first web tools turn into a major bottleneck:

* **Touchscreen Friction:** Dragging tiny map pins on an unoptimized desktop webpage from a smartphone browser often results in accidental zooms, misplaced coordinates, and broken layouts.
* **Heavy WebGL Battery Drain:** Full 3D browser tools load massive map tiles and scripts that overheat mobile devices and drain battery fast when you are off-grid.
* **Too Many Parameters for Quick Checks:** Many legacy tools require you to configure accounts, antenna gain patterns, and cable loss tables before showing a simple elevation profile.

If you need fast answers outdoors, choosing the right tool for your environment makes all the difference. Here is how the top 5 RF Line of Sight (LOS) calculators compare today.

## Quick Comparison: Top RF Line of Sight Tools

| Tool | Platform | Best Use Case | Mobile Field Usability |
| :--- | :--- | :--- | :--- |
| **LinkSight** | Native Android App | Fast field LOS, Meshtastic, FPV & WISP surveys | High (Built for touch & outdoor use) |
| **Ubiquiti ISP Design Center** | Web (Desktop-first) | Planning Ubiquiti-specific WISP links at a desk | Low (Heavy 3D interface on mobile) |
| **HeyWhatThat** | Web (Legacy UI) | 360-degree viewsheds & horizon panoramas | Low (1990s layout, hard to tap on phones) |
| **Radio Mobile Online** | Web / Windows | Deep ITM propagation modeling for repeaters | Low (Steep learning curve & desktop forms) |
| **SCADACore LOS** | Web | Quick desktop two-point elevation checks | Medium (Clean web page, not native) |

## 1. LinkSight (Best Native Android App for Field Use)

**LinkSight** was built from the ground up to solve the exact frustration of using desktop web calculators on a phone. Instead of wrapping a slow webpage, it runs as a native Android application designed for instant terrain profiling on the go.

* **Strengths:** Drop two pins smoothly on a native map and get instant Line of Sight and Fresnel zone clearance using global topographic data. It includes quick frequency presets (like 900MHz/915MHz for LoRa and 5.8GHz for FPV or WISP links) and lets you adjust antenna heights in seconds.
* **Limitations:** Currently focused on point-to-point path profiling rather than 360-degree coverage maps.
* **Verdict:** The go-to choice whenever you are away from your desk and need a fast, battery-friendly answer on your phone.

## 2. Ubiquiti ISP Design Center (Formerly airLink)

Ubiquiti’s free web planner is an industry staple for Wireless Internet Service Providers (WISPs). 

* **Strengths:** It renders detailed terrain views and automatically calculates throughput estimates and link budgets for Ubiquiti hardware.
* **Limitations:** It is heavily tied to Ubiquiti’s product catalog and requires loading a heavy WebGL environment. Trying to adjust link endpoints on a mobile browser while standing on a client's roof is slow and frustrating.
* **Verdict:** Great for office planning if you exclusively deploy Ubiquiti gear, but impractical as a quick pocket utility.

## 3. HeyWhatThat

If you spend time in amateur radio, SOTA, or Meshtastic communities, you have seen screenshots from **HeyWhatThat**.

* **Strengths:** Its ability to compute 360-degree viewsheds (showing every mountain peak visible from a single coordinate) is legendary.
* **Limitations:** The user interface has barely changed since the late 1990s. Navigating small text links, zooming panes, and pinpointing exact ridge coordinates on a smartphone screen takes patience.
* **Verdict:** Unbeatable for desktop viewshed research at home, painful for spontaneous checks in the field.

## 4. Radio Mobile Online

Based on the Longley-Rice (Irregular Terrain Model) propagation algorithm, **Radio Mobile** is a powerhouse for serious RF engineering.

* **Strengths:** Accounts for deep radio parameters including ground conductivity, climate, polarization, and exact transceiver sensitivity.
* **Limitations:** High barrier to entry. Setting up a single link requires registering an account and filling out multiple technical menus before seeing a result.
* **Verdict:** Ideal for planning permanent high-power VHF/UHF repeaters from your PC, overkill for checking if a hill blocks your portable node.

## 5. SCADACore Line of Sight Calculator

SCADACore offers a free web-based RF Line of Sight utility geared toward industrial IoT and telemetry deployments.

* **Strengths:** Straightforward two-point calculation without forcing you to select proprietary hardware brands.
* **Limitations:** Still relies on a standard desktop web layout, requiring stable connectivity to reload map scripts and form inputs inside a mobile browser.
* **Verdict:** A solid bookmark for your laptop browser when you just want a quick two-pin elevation chart.

## Which Calculator Should You Use?

The smartest workflow combines desktop planning with native mobile verification:

1. **At Home:** Use desktop tools like HeyWhatThat or ISP Design Center on a large monitor for broad regional planning.
2. **In the Field:** Use **[LinkSight](https://linksightapp.com)** on your Android phone to verify real-world coordinates on the spot, adjust antenna heights dynamically, and confirm your Fresnel zone clears every ridge before you deploy hardware or launch a flight.

## Related Articles

<div class="blog-related-grid not-prose">
  <a href="/blog/why-meshtastic-node-fails-line-of-sight" class="blog-related-card group">
    <div>
      <span class="blog-related-card-badge">Meshtastic &bull; LoRa</span>
      <h3 class="blog-related-card-title">Why Your Meshtastic Node Fails Despite Having Line of Sight</h3>
      <p class="blog-related-card-desc">Learn why optical line of sight is not enough for sub-GHz mesh networks and how Fresnel zone intrusions kill LoRa link budgets.</p>
    </div>
    <div class="blog-related-card-footer">
      <span>Read article</span>
      <span>&rarr;</span>
    </div>
  </a>

  <a href="/blog/fpv-long-range-line-of-sight" class="blog-related-card group">
    <div>
      <span class="blog-related-card-badge">FPV &bull; Long Range</span>
      <h3 class="blog-related-card-title">The Ultimate Guide to Line of Sight (LOS) for Long Range FPV</h3>
      <p class="blog-related-card-desc">Prevent sudden video feed cutouts and emergency failsafes by planning terrain clearance for 5.8GHz video and 900MHz control links.</p>
    </div>
    <div class="blog-related-card-footer">
      <span>Read article</span>
      <span>&rarr;</span>
    </div>
  </a>
</div>
