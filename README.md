# Youtube Embed Helper

It tries to provide a better user experience with [YouTube Player API for iframe Embeds](https://developers.google.com/youtube/iframe_api_reference).

## Browser Support

Tested on IE11 but it should work on IE10 too.

## File Sizes

- JS: `3.12kb` / `1.45kb` GZip
- CSS: `1.29kb` / `0.41kb` GZip

## Installation

With npm

```
npm i youtube-embed-helper -S
```

You can download the latest version or checkout all the releases [here](https://github.com/hayatbiralem/youtube-embed-helper/releases).

## Usage

### Browser

You can import this plugin into your project as follows:

```html
<link href="node_modules/dist/css/youtube-embed-helper.css" rel="stylesheet">
<script src="node_modules/dist/js/youtube-embed-helper.js" async defer></script>
```

.. and you're ready to go.

### Webpack

If you want to import the plugin with your webpack build you can do it by:

```js
import "youtube-embed-helper";
```

and for styles in js:

```js
import "youtube-embed-helper/src/scss/youtube-embed-helper.scss";
```

and for styles in scss:

```scss
@import "~youtube-embed-helper/src/scss/youtube-embed-helper";
```
### Autoprefixer

You can change browser list in the package.json. Default settings are here:

```json
{
    "browserslist": [
      ">0.01%"
    ]
}
```

### Refresh

You can process new dynamic contents by calling in browser:

```js
window.processYouTubeEmbedHelper();
```

or in Webpack:

```js
import processYouTubeEmbedHelper from "youtube-embed-helper/src/js/utils/process";
processYouTubeEmbedHelper();
```

Only new ones will be processed.

### Prefetch

If you want to prefetch an `.o-youtube-embed` element's iframe resource you can dispatch following event after initialization:

```js
el.dispatchEvent(el.prefetchEvent);
```

This will set `autoplay` to `0` and fetch youtube iframe in background. This way your visitors could play videos on mobile with just one click, not two.

## Examples

We could create `.o-youtube-embed__video`, `.o-youtube-embed__play` and `.o-youtube-embed__iframe` elements on the fly but why? If we create those directly in the html that would be more fast and configurable, right?

Also `.c-play` component class used for demo. You need to use your own icon class and styles. Also you can put your icon element(s) inside the `.o-youtube-embed__play` element.

### Lean + Automatic thumbnail from YouTube

```html
<div class="o-youtube-embed" data-url="https://www.youtube.com/watch?v=w77zPAtVTuI" data-thumbnail="maxresdefault">
  <div class="o-youtube-embed__video">
    <div class="c-play o-youtube-embed__play"></div>
    <div class="o-youtube-embed__iframe"></div>
  </div>
</div>
```

### Static caption + Manual thumbnail from YouTube

In this way Javascript don't touch the `background-image`.

```html
<div class="o-youtube-embed" data-url="https://www.youtube.com/watch?v=sMK-BKUYM0s">
  <div class="o-youtube-embed__video" style="background-image: url(https://i.ytimg.com/vi/sMK-BKUYM0s/hqdefault.jpg);">
    <div class="c-play o-youtube-embed__play"></div>
    <div class="o-youtube-embed__iframe"></div>
  </div>
  <div class="o-youtube-embed__caption">
    <a class="o-youtube-embed__title" href="https://www.youtube.com/channel/UCWB20EVmTrCLegr64R9jEJA" target="_blank">
      Spinach Time Lapse (40 Days)
    </a>
  </div>
</div>
```

### Overlay caption + Custom thumbnail

```html
<div class="o-youtube-embed" data-url="https://www.youtube.com/watch?v=bfi3iipTQo0">
  <div class="o-youtube-embed__video" style="background-image: url(https://i.picsum.photos/id/292/1600/900.jpg);">
    <div class="c-play o-youtube-embed__play"></div>
    <div class="o-youtube-embed__iframe"></div>
  </div>
  <div class="o-youtube-embed__caption o-youtube-embed__caption--overlay">
    <a class="o-youtube-embed__title" href="https://www.youtube.com/channel/UCWB20EVmTrCLegr64R9jEJA" target="_blank">
      Radish Time Lapse (68 days)
    </a>
  </div>
</div>
```

### Muted so maybe it could play on mobile at first click

This example also shows us that to override player params via `.o-youtube-embed__iframe` object's data attributes.

```html
<div class="o-youtube-embed" data-url="https://www.youtube.com/watch?v=smJmfgaQAR4">
  <div class="o-youtube-embed__video">
    <div class="c-play o-youtube-embed__play"></div>
    <div class="o-youtube-embed__iframe" data-mute="1"></div>
  </div>
  <div class="o-youtube-embed__caption o-youtube-embed__caption--overlay">
    <a class="o-youtube-embed__title" href="https://www.youtube.com/channel/UCWB20EVmTrCLegr64R9jEJA" target="_blank">
      Blooming Narcissus Time Lapse
    </a>
  </div>
</div>
```

### Pauses Automatically

When you use multiple video instance at the same page and when you try to play another video, currently playing video pause itself automatically.

### Summary

In short `.o-youtube-embed-helper` object will transform and produce your YouTube video with performance and support IE10+.

### Development

Clone this repo, go to the project directory and install dependencies with

```bash
npm install
```

and rebuild dist folder with

```bash
npm run dev
npm run prod
npm run build # alias of prod
```

or watch changes

```bash
npm run watch
```

## TODO

- [x] Add to the npm directory.
- [x] Add optional caption
- [ ] Add demo for original YouTube play icon
- [ ] Add custom events (consider this one)

## Contributors

- [Ömür Yanıkoğlu @hayatbiralem](https://twitter.com/hayatbiralem)

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
