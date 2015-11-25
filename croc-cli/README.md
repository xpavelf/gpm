# croc
monolithic repository manager

[![NPM version](https://img.shields.io/npm/v/croc.svg)](https://npmjs.org/package/croc)
[![Build Status](https://travis-ci.org/xpavelf/croc.svg?branch=master)](https://travis-ci.org/xpavelf/croc)

## What does it mean?

Well croc goes away from npm standard approach having packages in separated repositories. Instead all related packages can live in one repo so we can avoid endless cascading of commit, push, publish that usually happens if we need change package deep in our dependency tree.

## How croc works?

## Todo
* README.md


```
Usage:
  croc ls [--json]
  croc deps [--lenient --json]
  croc ( link [--lenient] | install | test | build )

Options:
  -h --help     Show this screen.
  --version     Show version.
  --json        Show information in JSON format.
  --lenient     Ignore that project dependency doesn't satisfies version (semver)
```