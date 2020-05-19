# UnraidTraefikPlugin

https://caiorss.github.io/bookmarklet-maker/
Use the above to make a simple "button" that you can click on any Unraid Docker page to instantly run the script.

Simple script - Adds traefik entries to an Unraid Docker page
Edit the variables in main.js first to match with your domain format/name

You can easily add more %perquotes% to be replaced by appending to the "replaceArray" and including both the "%perquote%" and the value it should be swapped with.

You can add more fields by adding to the "traefikNodes" object. The values in it are standard HTML divs that are encoded using the Javascript "encodeURIComponent" function. All variables that need changing are replaced with a perquote.
