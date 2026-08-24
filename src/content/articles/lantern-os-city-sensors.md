---
title: "Lantern OS Wins the City’s Sensor Network Contract"
dek: "A quiet infrastructure firm beat larger bidders by promising open data exports and on-prem control for traffic and flood gauges."
category: technology
author: "Camille Orth"
pubDate: 2026-07-08
readMinutes: 5
featured: false
heroTone: "#1a2744"
image: "/images/articles/lantern-os-city-sensors.jpg"
tags:
  - "civic tech"
  - "infrastructure"
---

Port Meridian selected Lantern OS to run its next-generation sensor network, covering traffic cabinets, flood gauges, and air-quality nodes across the municipal grid.

The five-year contract favors a mid-size firm over two national platform vendors. City technology director Harun Blake said the decisive factors were on-premises control options and a contractual requirement for bulk data export in open formats.

> Privacy advocates who tracked the RFP said they were cautiously optimistic.

“The architecture matters more than the logo,” said civil liberties attorney Nessa Grier. Lantern’s proposal stores raw video locally for short retention and ships only derived metrics to the cloud by default.

## What the city bought

The award is 8.6 million over five years, with two optional one-year extensions at 1.4 million each. It covers 340 traffic cabinets, 62 flood gauges, and 28 air-quality nodes, plus the software layer that ties them together. Lantern’s bid was not the cheapest. Meridian Systems Group came in at 7.1 million and a second national bidder at 9.9 million; the evaluation panel scored Lantern first on technical merit and second on price, and the weighted total put it ahead by 4.2 points out of 100.

Two clauses account for most of that margin. Section 7.3 requires bulk export of all collected data in documented open formats within thirty days of any written request from the city, at no charge, with a penalty of 2,000 per day for late delivery. Section 11 requires that any component processing raw video run on hardware the city owns, in a facility the city controls, with a 72-hour default retention on the raw stream.

Grier’s group, the Harbor Civic Rights Project, submitted comments during the RFP period arguing for exactly these two provisions and got most of what it asked for. It did not get everything. Its request that derived metrics be published by default, rather than on request, was declined; the city said publication decisions belong to departments, not to a procurement document.

## The rollout, in order

Implementation begins with the flood corridor, where gauges failed during last autumn’s surge. Nineteen of the 44 gauges then in service reported nothing on the night of 14 October; eleven had been offline for more than a week without anyone noticing, because the old platform’s alerting treated a silent gauge as a gauge reading zero. Water reached 1.4 meters on Fennimore Lane and the emergency operations center was working from resident phone calls.

Traffic adaptive signals come in phase two, beginning next spring. A public dashboard is scheduled within nine months of go-live.

Engineers involved in the rollout described the first ninety days as integration work more than invention. Legacy cabinets, patchy fiber laterals, and training for field techs dominate the punch list. Of the 340 traffic cabinets, 118 are Type 170 units installed between 1994 and 2003 that will need a serial-to-Ethernet bridge; 26 have no data backhaul at all and currently run on timers. The city has budgeted 610,000 separately for cabinet retrofits, a figure Blake acknowledges is an estimate built on a sample of forty site surveys.

Field technicians emphasized that sensors fail in ordinary ways. A flood gauge on the Dock Road bridge has been recalibrated four times in two years because gulls perch on the ultrasonic head. “The vendor demo never has birds in it,” said senior field technician Odalys Reyne, who has maintained the network since 2011 and will be responsible for the new one.

## The dissent

Losing bidders questioned whether Lantern can scale support. The company pointed to deployments in two smaller coastal cities and a new regional support hub leased near the navy yard. Lantern currently employs 210 people; Port Meridian will be its largest customer by roughly a factor of three.

Councillor Emeka Duross, who chairs the technology and operations committee and voted against the award in a 5-2 committee vote, thinks that is the whole problem and that the privacy architecture is being used to change the subject.

“I agree the clauses are good. I helped write two of them,” Duross said. “But a data export clause is worthless if the company that owes it to you has been acquired, and a mid-size vendor with one dominant customer is an acquisition target by definition. The larger bidder I preferred will be tedious and expensive and will still exist in 2031. I would rather fight a slow giant over an export request than win an elegant contract from an entity that is now a line item in somebody’s portfolio.”

Blake’s answer is a change-of-control provision that lets the city terminate without penalty and take possession of on-premises hardware and a full data export within 90 days of any acquisition. Duross calls that a good clause and not a substitute for a balance sheet.

Security reviewers asked for independent penetration tests before any camera expansion. The city agreed to publish a redacted summary of findings, a compromise that satisfied neither the most open advocates nor the most cautious staff. Council will review a privacy impact assessment before cameras are added to any intersection currently without them.

Vendors outside the winning bid have already begun marketing “complementary” modules. Procurement lawyers warned departments not to sole-source add-ons that re-create the original competition in miniature.

Reyne has one gauge she wants replaced before the others, and it is not on the corridor list. It sits under the Ferrand Street culvert, was installed in 1998, and is the only unit in the network whose readings she trusts without checking, because it is mechanical — a float on a stainless rod, no firmware, no radio. She reads it with a torch, on foot, whenever a storm is forecast. She has asked that it stay where it is after the new network goes live, and nobody has told her no.
