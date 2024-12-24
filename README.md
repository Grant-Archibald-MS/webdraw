## Key Concepts

This sample web based application to show how to create web based drawing.  The drawing is done using an implementation of Python's native turtle module that works with Pyodide a web assembly based implementation of python.

While this example focuses on drawing in the browser, the concepts and [Python Standard Libraries](https://pyodide.org/en/stable/usage/packages-in-pyodide.html) provide a wide range of scenarios that could be expanded to explore creating web-based Python applications in the browser and as offline applications.

A GitHub pages static version of this sample is available at [https://grant-archibald-ms.github.io/webdraw/](https://grant-archibald-ms.github.io/webdraw/)

Or Scan the QR Code ![Scan Code](./qrcode.png). You can use [qrcode](./qrcode/README.md) as an example of how to generate a QR Code using python

### Progressive Web Applications (PWAs)

Lets start of by exploring Progressive Web Applications (PWAs). PWAs are web applications that use modern web capabilities to deliver an app-like experience to users. They can be installed on a user's device and run offline, providing a seamless experience similar to native apps.

#### Offline Usage

PWAs can cache resources using service workers, allowing the application to function without an internet connection. This is particularly useful for applications that need to be accessible at all times.

#### Running the Application Offline

- **Windows**: Open the app in a browser, click on the install button in the address bar, and follow the prompts to add it to your desktop.
- **macOS**: Open the app in Safari, click the share button, and select "Add to Home Screen".
- **iOS**: Open the app in Safari, tap the share button, and select "Add to Home Screen".
- **Android**: Open the app in Chrome, tap the menu button, and select "Add to Home Screen".

#### Icons

You can use sites like [icongen](https://cthedot.de/icongen/) to upload images and generate icons for your application.

### Service Workers

Service workers are scripts that run in the background of your browser, separate from the web page, enabling features that don't need a web page or user interaction. They are essential for PWAs as they handle caching and offline functionality, allowing the app to work even when the network is unavailable. Service workers act as a proxy between the web application and the network, intercepting network requests and serving cached responses when necessary.

For more detailed information on service workers, you can refer to [How do Service Workers work?](https://microsoft.github.io/win-student-devs/#/30DaysOfPWA/core-concepts/04?id=how-do-service-workers-work) and [Mozilla documentation on Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers).

#### HTTPS Requirement

> IMPORTANT: For security reasons, service workers can only be registered on sites served over HTTPS. This ensures that the communication between the client and server is encrypted and secure, preventing man-in-the-middle attacks.

When developing or deploying a web application that uses service workers, make sure that your site is served over HTTPS.

### WebAssembly (Wasm)

WebAssembly (Wasm) is designed as a portable compilation target for programming languages, enabling high-performance applications to run on the web. Wasm allows components written in multiple languages to be executed in the browser, providing near-native performance.

### Pyodide

> NOTE: [pyodide](https://github.com/pyodide/pyodide/blob/main/LICENSE) is licensed under Mozilla Public License Version 2.0

Pyodide is a Python distribution for the browser and Node.js based on WebAssembly. It allows you to run Python code directly in the browser and includes a large number of scientific Python packages.

#### WHL Files
A WHL file is a package saved in the Wheel format, which is the standard for distributing Python packages. WHL files contain all the files necessary for a package to be installed and used.

### File Sizes

In total this application is about 20MB in size to download and run. Lets have a look at this a bit further

- JavaScript File Size: Typically, JavaScript files for web applications can vary in size, but they are often optimized to be as small as possible to reduce load times.
- WebAssembly File Size: Wasm files are generally more compact than equivalent JavaScript files, but they can still be significant in size. For example, a WebAssembly file is around 9MB of this sample.
- Python Standard Libraries: When using Pyodide, the Python standard libraries can add approximately 9MB to the total file size.

### Raspberry Pi Distributed Version of Turtle

The Raspberry Pi version of [Turtle](https://github.com/RaspberryPiFoundation/turtle) which is licensed under the GPLv3 license allows drawing with the Turtle graphics library in the browser using SVG (Scalable Vector Graphics).

#### SVG

SVG is an XML-based format for vector graphics. It is widely supported by modern browsers and allows for scalable, high-quality graphics. However, SVG is not inherently interactive, meaning that elements like button clicks do not work without additional JavaScript to handle events.
