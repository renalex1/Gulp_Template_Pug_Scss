# Connecting third-party libraries

Libraries are connected using npm.
When installing, you must specify the key `--save` or `--save-dev`.

Example:

```bash
npm install --save jquery
npm install --save-dev gulp
```

`--save` specified for libraries whose code is included in the final assembly (folder `build`) and will be used on the site.

`--save-dev` specified for libraries that are only used for assembly.

After installation, you need to connect the necessary library files:

* scripts - in `src/js/vendor.js` или `src/js/main.js`.
* styles - in `src/scss/_vendor.scss`.
* images - in `src/img`.
* any other files - in `src/resources`.

Complete example for installing fancybox library:

1. Installation:

   ```bash
   npm install --save fancybox
   ```

2. Connecting scripts to a file `src/js/vendor.js`:

   ```js
   import 'fancybox';
   ```

3. Including styles in a file `src/scss/_vendor.scss`:

   ```scss
   $fancybox-image-url: "../img";

   @import "../../node_modules/fancybox/dist/scss/jquery.fancybox";
   ```

4. Copying images to `src/img`:

   ```text
   codetime-template
   └── src
       ├── img
       │   ├── blank.gif
       │   ├── fancybox_loading.gif
       │   ├── fancybox_loading@2x.gif
       │   ├── fancybox_overlay.png
       │   ├── fancybox_sprite.png
       │   ├── fancybox_sprite@2x.png
       │   └── ...
       └── ...
   ```

If the library is not in npm, or it needs to be modified, then the files should be downloaded and dropped into the folders`src/js/vendor` and `src/scss/vendor`.