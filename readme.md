# Bootstrap3-ShowManySlideOneCarousel
This is a sample showing how to configure the Bootstrap 3 carousel to show many panels at once but only slide one at a time.

## Online Demo
I have put these up on two popular interactive playgrounds:

  - [CodePen](http://codepen.io/rtpHarry/pen/YPBydd/)
  - [Bootply](http://www.bootply.com/PMDIAzc1Qo)

## Description
This is a modification to the standard Bootstrap carousel which lets you show four panels at once but only slides them along one panel at a time. Check out one of the demos above to get more of a feel for the effect.

It is responsive and modifies the number of panels shown at a time on smaller screens.

I found the [original concept on Bootply](http://www.bootply.com/TkEfjDBeRP) but unfortunately tracing it back as far as the thread went back to one that started out with an anon post. This version is now almost a complete rewrite and incorporates many fixes but I do owe credit to the unknown author that made the original breakthrough.

This version has been updated to fix animation bugs and make it compatible with Bootstrap again now that it has moved to using css transitions for its animations. 

I've added in a Less stylesheet which means you can easily update the container name and make changes to the numbers of columns ([guide in the wiki](https://github.com/rtpHarry/Bootstrap3-ShowManySlideOneCarousel/wiki/Change-the-number-of-slides-visible-at-any-one-time)).

I've also optimised the JavaScript code to remove redundant calls and wrap it up safely.


## Quickstart - I don't use NPM, Git, Grunt, Less or any of those technologies
You should take some time to learn them but I'm not going to make you do it right now just so that you can use this in your project! 

Your best bet is to load up the sample on [CodePen](http://codepen.io/rtpHarry/pen/YPBydd/)

1. Copy the html and JavaScript over to your project
1. In the CSS (Less) panel look in the top right for a small eye symbol. Clicking this will compile the Less into CSS so you can use it without having any special software installed.

<!--
## Installing - NPM
You can install a copy of this by typing this into your command line terminal:

    > npm install bootstrap3-showmanyslideonecarousel

Note: this isn't a plugin or module, its a sample file so you will need to copy / tweak the files to integrate them into your project.
-->

## Installing - Git
You can install a copy of this by typing this into your command line terminal:

    > git clone https://github.com/rtpHarry/Bootstrap3-ShowManySlideOneCarousel.git

## Installing - Download
Download the [latest release from GitHub](https://github.com/rtpHarry/Bootstrap3-ShowManySlideOneCarousel/archive/master.zip)

## Rebuilding after you have made changes
If you make some tweaks to the JavaScript or Less files you can quickly regenerate them.

Using your command line terminal, navigate to the folder that has the `gruntfile.js`/`package.json` in. Enter the following command:

    > grunt dev

To generate the unminimised JS and CSS files with a CSS source map for debugging, or

    > grunt dist

To create the minified versions.

You will find the project files in the `/dist/` folder.

## Customisation - Changing the number of slides visible at any one time
This is quite easy but it involves editing both the LESS/CSS and the JS files so I have put this in a wiki item:

  - [Change the number of slides visible at any one time](https://github.com/rtpHarry/Bootstrap3-ShowManySlideOneCarousel/wiki/Change-the-number-of-slides-visible-at-any-one-time)

## Browser Compatibility
I've tested it in:

  - Chrome 41
  - Firefox 36.0.4
  - Internet Explorer 11

## Improvements
If you have feedback, please open an issue or initiate a pull request. I'm happy to make improvements where possible.

## Website
There is a blog post announcing this but all the information you need is in this repo:

  - [Bootstrap 3 Show Many Slide One Carousel](http://articles.runtings.co.uk/2015/03/bootstrap-3-show-many-slide-one-carousel.html)

## Release History
v1.0 - 27-Mar-2015 - Initial release

## License
This software is released under the [MIT License](http://choosealicense.com/licenses/mit/). 

I just picked it because its an unrestrictive one but as this is based in part on Bootstrap I think I might be tied to it. If this causes issues with your project please open an issue on GitHub and we can look into it.
