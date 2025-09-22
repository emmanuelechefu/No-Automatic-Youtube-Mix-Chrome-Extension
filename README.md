# No YouTube Mix (De-Fluffer) 🎵🚫

A simple Chrome extension that removes YouTube's **auto-mix** and **radio playlist redirects**, so when you click a video link you only get that **single video** — not an endless auto-generated mix.

---

## 📦 Installation

Since this extension isn’t published on the Chrome Web Store yet, you’ll need to install it manually:

1. **Download or clone this repository**

       git clone https://github.com/emmanuelechefu/No-Automatic-Youtube-Mix-Chrome-Extension.git

2. **Open Chrome Extensions settings**  
   Go to:  

       chrome://extensions

3. **Enable Developer Mode**  
   Toggle the **Developer mode** switch in the top-right corner.

4. **Load the extension**  
   - Click **Load unpacked**  
   - Select the folder you downloaded/cloned.

5. ✅ Done! The extension will now run in the background and automatically clean YouTube links.

---

## Features
- Strips out YouTube’s `list=RD...` auto-mix playlist parameters.
- Removes the `start_radio` flag that triggers auto-radio playback.
- Works with both `youtube.com` and `youtu.be` links.
- Redirects in both full navigations and single-page-app (SPA) YouTube transitions.

---

## 🛠 How It Works
- **`background.js`** intercepts navigation events and rewrites YouTube links by removing `list=RD...` and `start_radio` parameters.
- **`rules.json`** defines a declarative rule to automatically drop the `start_radio` parameter.
- **`manifest.json`** registers the extension with required permissions and icons.

---

## 📷 Screenshots
<p align="center">
  <img src="8da9f932-d412-49af-bf95-6a4295b77ab8.png" alt="Extension Screenshot" width="600"/>
</p>

---

## 🔒 Permissions Used
- `webNavigation` + `tabs`: to catch YouTube redirects and SPA transitions.
- `declarativeNetRequest`: to filter out unwanted URL parameters.
- Host permissions for `youtube.com` and `youtu.be`.

---

## 🧑‍💻 Contributing
Pull requests and improvements are welcome! Feel free to fork, tweak, and submit a PR.

---

## 📜 License
MIT License © 2025 [Emmanuel Echefu](https://github.com/emmanuelechefu)
