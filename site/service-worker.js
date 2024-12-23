self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          './',
          './index.html',
          './manifest.json',
          './android-chrome-192x192.png',
          './android-chrome-512x512.png',
          './pyodide.js',
          './pyodide.js.map',
          './pyodide.asm.js',
          './pyodide.asm.wasm',
          './python_stdlib.zip',
          './pyodide-lock.json',
          './turtle-0.0.1-py3-none-any.whl'
        ]);
      })
    );
  });
  
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
        return response || fetch(event.request);
        })
    );
});