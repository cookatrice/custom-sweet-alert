# custom sweet alert  - v0.5.4-beta
## Release notes for version 0.5.4 beta
* custom sweet alert init first time. 

## Overview
This is custom sweet alert library.
sweet-alert.js and ngSweetAlert is base source.

Some sweet-alert option extends like customWidth, customHeight and template.
You can use your own alert design to template option.

How to use new options? just follow under the line.
```javascript    
    swal({
            title: "voyager style popup",
            text: "SweetAlert also comes with some simple methods that you can call.",
            showCancelButton: false,
            confirmButtonText: "확인",
            template : 'resources/sweetalert/custom-template/voyager-popup.html',
            customWidth : 488,
            customHeight : 361
        }, function (isConfirm) {
            if (isConfirm) {
                console.log('yes yes yes');
        } else {
            console.log('no no no');
        }
    });
```
* customWidth : alert width size.(px)
* customHeight : alert height size.(px)
* template : this is custom template's full path. (You must prepare custom template file.) 



##Mail to me.
>#### cookatrice@gmail.com
