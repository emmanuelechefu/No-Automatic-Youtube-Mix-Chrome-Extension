function cleanUrl(urlStr) {
  try {
    const url = new URL(urlStr);

    // Normalize short links
    if (url.hostname === "youtu.be") {
      const id = url.pathname.slice(1);
      if (!id) return null;
      const clean = new URL("https://www.youtube.com/watch");
      clean.searchParams.set("v", id);
      const t = url.searchParams.get("t");
      if (t) clean.searchParams.set("t", t);
      return clean.toString();
    }

    // Only touch YouTube watch pages
    if (!url.hostname.endsWith("youtube.com") || url.pathname !== "/watch") return null;

    let changed = false;

    // Always drop auto-radio flag
    if (url.searchParams.has("start_radio")) {
      url.searchParams.delete("start_radio");
      changed = true;
    }

    // Drop ONLY auto-mix playlists (list=RD...)
    const list = url.searchParams.get("list");
    if (list && /^RD/i.test(list)) {
      url.searchParams.delete("list");
      changed = true;
    }

    return changed ? url.toString() : null;
  } catch {
    return null;
  }
}

function maybeRedirect(details) {
  const redirectUrl = cleanUrl(details.url);
  if (redirectUrl && redirectUrl !== details.url) {
    chrome.tabs.update(details.tabId, { url: redirectUrl });
  }
}

// SPA navigations inside YouTube
chrome.webNavigation.onHistoryStateUpdated.addListener(maybeRedirect, {
  url: [{ hostContains: "youtube.com" }]
});

// Also catch committed navigations just in case
chrome.webNavigation.onCommitted.addListener(maybeRedirect, {
  url: [{ hostContains: "youtube.com" }, { hostEquals: "youtu.be" }]
});
