(function () {
  // ── 1. Disable right-click ──────────────────────────────────────────────
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    return false;
  });

  // ── 2. Disable common keyboard shortcuts ───────────────────────────────
  document.addEventListener("keydown", function (e) {
    // F12
    if (e.key === "F12") { e.preventDefault(); return false; }
    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (DevTools)
    if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) {
      e.preventDefault(); return false;
    }
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.key.toUpperCase() === "U") {
      e.preventDefault(); return false;
    }
    // Ctrl+S (Save page)
    if (e.ctrlKey && e.key.toUpperCase() === "S") {
      e.preventDefault(); return false;
    }
    // Ctrl+A (Select All)
    if (e.ctrlKey && e.key.toUpperCase() === "A") {
      e.preventDefault(); return false;
    }
    // Ctrl+P (Print)
    if (e.ctrlKey && e.key.toUpperCase() === "P") {
      e.preventDefault(); return false;
    }
  });

  // ── 3. Detect DevTools open (size-based heuristic) ─────────────────────
  var devToolsOpen = false;
  var threshold = 160;

  function checkDevTools() {
    var widthDiff  = window.outerWidth  - window.innerWidth;
    var heightDiff = window.outerHeight - window.innerHeight;
    if (widthDiff > threshold || heightDiff > threshold) {
      if (!devToolsOpen) {
        devToolsOpen = true;
        document.body.innerHTML =
          '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;font-size:1.5rem;color:#333;">🔒 Access Restricted</div>';
      }
    } else {
      devToolsOpen = false;
    }
  }
  setInterval(checkDevTools, 1000);

  // ── 4. Blur content when window loses focus (screen-recorder deterrent) ─
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      document.body.style.filter = "blur(10px)";
    } else {
      document.body.style.filter = "none";
    }
  });
})();
