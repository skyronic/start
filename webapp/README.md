# WebApp Starter Kit

## Development

### Initial setup

```
$ npm install
$ bower install
```

### Everyday Development
```
$ grunt
$ grunt watch

# In a different terminal
$ cd src
$ <start a http static server as you require>
```

I personally use `php -S 0.0.0.0:8080` or something like that to start a static server. Use whichever works for you, or write your own!

When you update the asset list, or do a `bower install`

## Deployment

This opts for a simple rsync deploy, powered by fabric, and the rsync helper module of fabric.

```
$ grunt build
$ fab production deploy
```
