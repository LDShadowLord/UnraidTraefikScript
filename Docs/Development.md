# Development
This document is what i've based my own code styling for this project off of. It's probably not perfect or even best practice, but it's how it has been done.
If a PR is submitted with drastically different code styling then i'll either request it be brought into compliance or do a manual merge and change it myself.

## Nodes
A Node is comprised of several parts, some of which are optional. Once a Node has been created and fulfills the criteria below, the script will automatically identify it and offer it to users to add to the injection function.
* Template File in *Nodes/* folder
* Variable Entry in *jinja.json*
* Attribution in *Nodes/.credits.md*

### Template File
The template files are the files that the script uses to generate the final output and as such must be valid HTML so they can be injected into the page.

Each template file is named in Capital_Case with underscores to seperate words, and suffixed with the *.html* extension. It should only be prefixed with a *.* if it cannot be used, as the script will not load anything prefixed with a dot.

An example of a template file, with full comments, is available at *Nodes/.example.html*.

### Jinja.json
This project uses Jinja-Style Formatting (But not the Jinja Engine itself) to display variables in a clean and clear manner.
You can see all of the variable names in use in *jinja.json* along with the description of that variable.
If you add any of your own variables when creating your own Nodes, it must be added to *jinja.json* so that the script automatically picks it up.

An example JSON entry is below:
```
"{{ certresolver }}": {
    "hidden": false,
    "replacement": "default",
    "name": "Certresolver",
    "description": "[Recommended] Sets the TLS certresolver used to collect ACME certificates. Setting this prevents some TLS issues.",
    "url": "https://doc.traefik.io/traefik/routing/routers/#certresolver",
    "selected": false
  }
```
* The key, '{{ certresolver }}', is the Jinja-format variable that the script will look to replace. It must be entirely lowercase, and if multiple words are used then those words should be seperated by underscores.
* The 'hidden' entry says whether it's a user-modifiable option.
* The 'replacement' entry provides the default entry. If modified by the user this will be overwritten.
* The 'name' entry provides a user friendly name to display to the user.
* The 'description' entry gives the user information as to what this option does and why it should/not be used.
* The 'url' entry is a link to a source of knowledge for the user to learn more about the option.
* The 'selected' entry says whether the user has chosen this option. All 'true' options are used to generate the final configuration.

All fields should be populated. If you're unsure then the field should be 'null'. The URL field should be a Traefik Docs URL if possible, but if it's an internal variable then create a .md file in the *Docs/* folder to link to.

## Credits
If you decide to add to this repo with your own Nodes for UnraidTraefik, please make sure you also add to *Nodes/.credits.md* and add your name as well as the Node you created so you're credited properly for your work.

This allows me to make sure that everyone is properly credited so i'm not accused of stealing anyones work.