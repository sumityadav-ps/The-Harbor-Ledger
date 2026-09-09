/**
 * One place to paste all adtech snippets. Everything here is injected raw
 * (set:html), so paste vendor tags exactly as given — no escaping needed.
 *
 *   head       -> end of <head>        (GPT/Prebid libs, consent, meta pixels)
 *   bodyStart  -> right after <body>    (noscript, tag-manager iframe)
 *   bodyEnd    -> right before </body>  (deferred loaders, analytics)
 *   adUnits    -> per-slot creative, keyed by the AdSlot `slotId`
 *
 * Leave a value as '' to render nothing. An adUnits entry overrides the
 * placeholder frame for that slot; slots with no entry keep the placeholder.
 *
 * Known slotIds: home-leaderboard-1, home-leaderboard-2, sidebar-mpu-1,
 * sidebar-mpu-2, sidebar-halfpage-1, article-leaderboard-1,
 * article-incontent-1, category-<slug>-leaderboard, about-leaderboard,
 * author-leaderboard.
 */

// Loaded in <head>. Example: Google Publisher Tag + a single-request config.
export const headScripts = String.raw`
<!--
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script>
  window.googletag = window.googletag || { cmd: [] };
  googletag.cmd.push(function () {
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
</script>
-->
`;

// Injected right after <body>. Example: Google Tag Manager noscript iframe.
export const bodyStartScripts = String.raw`
<!--
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
-->
`;

// Injected before </body>. Example: a deferred analytics loader.
export const bodyEndScripts = String.raw`
<!--
<script defer src="https://cdn.example.com/analytics.js" data-site="harbor-ledger"></script>
-->
`;

// Per-slot creative. Uncomment an entry to fill that slot with a real ad.
export const adUnits: Record<string, string> = {
  // GPT-style slot: the div here, plus its defineSlot/display in headScripts.
  // 'home-leaderboard-1': String.raw`<div id="div-gpt-ad-home-lb-1"></div>`,

  // Plain HTML/image creative works too — no vendor library needed.
  // 'sidebar-mpu-1': String.raw`
  //   <a href="https://advertiser.example.com" target="_blank" rel="sponsored noopener">
  //     <img src="https://cdn.example.com/creatives/mpu-300x250.jpg"
  //          width="300" height="250" alt="Sponsor">
  //   </a>
  // `,
};
