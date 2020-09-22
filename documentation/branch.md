# Gulp Task

- `html` minimizing *.html files and copying to `build` folder
- `validateBem` 
- `pug` compiled pug to html
- `PugLinter`
- `css` 

## Gulp tasks
- command `gulp`
    - `default = watching` is the main task, runs `build`, `browserSync` and `watchFiles`.
    - `build` Deleting `app` and `build` folders, then builds all files and folders, 
        - runs tasks `copy` and ( `compress` ), images, sprites: png, sprites: svg, pug, scss, js.
        - runs tasks imgsprite generate `sprite.png` and `_sprite.scss`
    - `browserSync` Starts the Browsersync server.
    - `watchFiles` Starts tracking files, so that when they change, they are automatically rebuilt.
```javascript
    1.  Deleting ' app ' and ` build ` folders.
    2.  Creating ` app ` and ` build ` folders and copy all nessesery files rom ` src `.
    3.  Starting ` browserSync `for real time visual see all changes in `*.html and other files` .
    4.  Waching all folders in ` src ` and if there some change copy all chanches, to destenations.
```
---

## Extra options:
#### ***`gulp favicon`*** command if need to creat ***`favicons`*** 
- `1` Copy file in `src/img`  folder.
- `2` File must be renamed to `favicon.` `png, jpg, jepg, svg `.
- `3` Use command `gulp favicon` to create files.
- `4` All necessary codes will auto field in all `*.html.`
- `5` If need only delete favicons use command `gulp delfavicon`.
- `6` If need only generate favicons use command `gulp faviconGenerate`.
- `7` If need only add meta ( insert favicon code ) in `*.html `use command `gulp faviconAddMeta`.

---

#### ***`gulp imgSprite`*** command if need to creat **` sprites`**  
- `1` Copy files in `src/img/sprite/png/`  folder.
- `2` Use command `gulp imgsprite` to generate and create in `src/img/sprite/` `sprite.png` and in `src/scss/` `_sprite.scss` , files.
- `3` Using sprite ...
```scss
.myclass {

    @include sprite($sprite);
}
```
- `4` `$sprite` you can see all sprites variables in `_style.scss`.


#  Creating Branch

## **branch name mast create as in To Do list writen**

- **git fetch** ( To update all branches )
- **git branch** ( To show all branch and in which branch you are now )
- **git branch** (branch name which must be created) // Creating branch //
- **git checkout** (branch name which created) // Enter in your branch //
- **git checkput -b (branch name which must be created)**// With this command you creating branch and go to create branch auto.
- **git branch** // Always check in what branch you are before start working //

# Working in Branch

- **git add .**
- **git commit -m "TEXT WHAT DONE"**/ To comment what have changed or create //
- **git pull** // To download all files //

- **git push** // To upload all files //

* **git pull origin master** // To download all uptadates from master to your branch

* **All files which you creating must start with your branch name for example** [ branch name _ab - files ]

  - \_ab-style.scss

  - .... .

#  Pull requests

- When you upload your files you must enter in your github account and create **_Pull requests_**
