# Development
This document is what i've based my own code styling for this project off of. It's probably not perfect or even best practice, but it's how it has been done.
If a PR is submitted with drastically different code styling then i'll either request it be brought into compliance or do a manual merge and change it myself.

## Jinja-Style Formatting
This project uses Jinja-Style Formatting (But not the Jinja Engine itself) to display variables in a clean and clear manner.
You can see all of the variable names in use in *jinja.json* along with the description of that variable.
If you add any of your own variables when creating your own Nodes, it should be added to *jinja.json* so that the script automatically picks it up.

An example JSON entry is below:
```
"{{ certresolver }}": {
    "hidden": false,
    "replacement": "default",
    "name": "Certresolver",
    "description": "[Recommended] Sets the TLS certresolver used to collect ACME certificates. Setting this prevents some TLS issues.",
    "url": "https://doc.traefik.io/traefik/routing/routers/#certresolver"
  }
```
The 'hidden' entry says whether it's a user-modifiable option.
The 'replacement' entry provides the default entry. If modified by the user this will be overwritten.
The 'name' entry provides a user friendly name to display to the user.
The 'description' entry gives the user information as to what this option does and why it should/not be used.
The 'url' entry is a link to a source of knowledge for the user to learn more about the option.

## Credits
If you decide to add to this repo with your own Nodes for UnraidTraefik, please make sure you also add to *Nodes/.Credits.md* and add your name as well as the Node you created so you're credited properly for your work.
This allows me to make sure that everyone is properly credited so i'm not accused of stealing anyones work.