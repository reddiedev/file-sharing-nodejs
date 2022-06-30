# Simple filesharing webapp

I made this app as a convenient and fast way to transfer files from and between my smartphone and my desktop PC using a web browser. In the past, I found it hard to move files especially pictures since my smartphone uses IOS while my PC uses Windows. I often times used messenging platforms such as Telegram and Discord to do this but I find that it has some caveats such as file size limits, dumping a lot files in my message history which I won't realistically need in the future, and file restrictions.

## Architecture

1. `nodejs`
2. `express`
3. `multer`
4. `ejs`
5. `nodemon`

## Contributing

I am still learning using Git and Github, I will update this repo as soon as I have learned and set up the contributing process.

## Running the site

I envisioned the app to only run locally when needed so in order to actually transfer files, the two devices in question must be connected to the same local network

```
gh repo clone reddiedev/file-sharing-nodejs

npm install

npm start
```

## Acknowledgements

This project was largely inspired from a tutorial by Web Dev Simplified on [Youtube](https://youtu.be/AHXFMu8xVsc). You can view his original repo [here](https://github.com/WebDevSimplified/file-sharing-node-js)
