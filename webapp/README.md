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
