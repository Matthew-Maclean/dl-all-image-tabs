# dl-all-image-tabs
A Firefox extension to download all tabs that are just images.  
Currently, 'image tabs' are tabs whose urls end in `.png`, `.jpeg`, `.jpg`, and `.gif`.  
This might also work on Chrome, and some other browsers, but I have not tested it.  
Requires at least Firefox 54.

---
## To Build

Place icon files `19.png` and `38.png`, of 19x19 pixels, and 38x28 pixels, respectively.  
I have not included any because of licensing issues.

### With `build.py`

1. Make sure the files are inside their own folder, preferably named 'dl-all-image-tabs'.  
2. Run `python3 build.y` or equivalent.  

### Manually

1. Place all files except 'build.py' to a ZIP archive.
2. Rename the archive from `.zip` to `.xpi`.

---

## To Install

1. Go to `about:config` and set `xpinstall.signatures.required` to `false`.  
2. Copy open your xpi in firefox.
