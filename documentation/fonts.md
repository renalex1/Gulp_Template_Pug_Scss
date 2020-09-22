# Working with Fonts
Fonts should be stored in the ` src / fonts `folder. When the `gulp` task is run, files from the `src / fonts `folder are copied to `build / fonts`

```
codetime-template
├── build
│   └── fonts
└── src
    └── fonts
```
- Only fonts files type *.woff and *.woff2 copy to build / fonts Copy to `build / fonts`  only `*.woff and *.woff2`
- If font file type is `*.otf` then `gulp` will auto convert it to `*.ttf`
- If font file type is `*.ttf` then `gulp` will auto convert it to `*.woff` and `*.woff2` and save them in `src / fonts`  folder then they will be coped to ` build / folder `