# WebApp Starter Kit

## Features

* This is built by me, for me. It might suit your requirements if you change it.
* No bells and whistles, and can be adapted to your workflow.
* Currently there's no production-ready build system. Everything happens in `src` and that folder is synced to the web root of the server.
* Dead simple and basic deployment using fabric. Deployment right now is just copying the folder using rsync, but you can make deployment more complex.
* An ansible playbook to provision a brand new ubuntu server ready to host this. No need to ever ssh and configure the server by hand.

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

## Provisioning

I use a setup to map `some-id.private.skyronic.com` to the project, which usually is a php application, but since it's an nginx you can use it to deploy static sites. Edit files in `ansible/`. For me, I just run

```
ansible-playbook -i hosts provision.yml
```

## Deployment

This opts for a simple rsync deploy, powered by fabric, and the rsync helper module of fabric.

```
$ grunt build
$ fab production deploy
```
