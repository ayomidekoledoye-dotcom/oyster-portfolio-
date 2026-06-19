 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
new file mode 100644
index 0000000000000000000000000000000000000000..03b82266d8d62e5e4ff3251dfdf4cbd515ac65d7
--- /dev/null
+++ b/script.js
@@ -0,0 +1,16 @@
+// Lightweight scroll reveal and print-to-PDF support for GitHub Pages.
+const revealItems = document.querySelectorAll('.reveal');
+const observer = new IntersectionObserver((entries) => {
+  entries.forEach((entry) => {
+    if (entry.isIntersecting) {
+      entry.target.classList.add('is-visible');
+      observer.unobserve(entry.target);
+    }
+  });
+}, { threshold: 0.16 });
+
+revealItems.forEach((item) => observer.observe(item));
+
+document.querySelector('[data-print]')?.addEventListener('click', () => {
+  window.print();
+});
 
EOF
)
