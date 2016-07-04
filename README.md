# chrome-workshop-unsubscriber
Chrome extension to automate mass unsubscribing all workshop items

When you visit your list of subscribed items for a particular game, a button will be displayed in the upper left corner. Click that button, and this script will unsubscribe off everything on the screen, reload the page, see if there is anything left, unsubscribe to that, and keep going till there is nothing left.

This script does not in anyway attempt to do anything abusive. I enjoy many games on Steam that have highly active modding communities. Sometimes I need to do a reset of the hundreds of even thousands of items I subscribed to.

The code is open. Feel free to have someone knowledgeable vet it for you.

# Instructions

Download manifest.json and unsubsciber.js to a directory.

Open the extensions setting in Chrome. Enable developer mode. Clicked Load Unpacked Extension, point to the directory you put those two files in, and you're done.

# FAQ

## Why isn't this on the app store?

To ensure that there is no fuzziness with regards to the code you're running on your browser. What you see here on github is what you get.

## Firefox?

Well, the code is simple enough so if someone wants to port this to firefox I'd happily accept a pull request or feel free to fork it.
