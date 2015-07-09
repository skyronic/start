from fabric.api import *
from fabric.colors import green, yellow, red
from fabric.contrib.project import rsync_project
from fabric.contrib.console import confirm
from contextlib import contextmanager as _contextmanager


rsync_excludes = ("*.py", "*.pyc", "*.git", "data/*", "*.less")


def production():
	env.settings = 'production'
	env.user = 'anirudh'
	env.hosts = ['direct.private.skyronic.com']

def deploy():
	upload_app ()
	print(green("##################################################################"))
	print(green("## Finished deploy without any known errors. Please still test. ##"))
	print(green("##################################################################"))

def upload_app ():
	rsync_project(
		remote_dir= "/home/anirudh/webapp",
		local_dir="src/",
		exclude=rsync_excludes,
	)
