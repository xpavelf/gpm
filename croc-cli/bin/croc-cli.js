#!/usr/bin/env node
var doc = '' +
  'Usage:                                                                                \n' +
  '  croc ls [options] [<package>...]                                                    \n' +
  '  croc deps [options] [<package>...]                                                  \n' +
  '  croc link [--strict]                                                                \n' +
  '  croc install                                                                        \n' +
  '  croc test                                                                           \n' +
  '  croc build                                                                          \n' +
  '  croc publish                                                                        \n' +
  '  croc exec CMD                                                                       \n' +
  '                                                                                      \n' +
  'Options:                                                                              \n' +
  '  -h --help     Show this screen.                                                     \n' +
  '  --version     Show version.                                                         \n' +
  '  --json        Show information in JSON format.                                      \n' +
  '  --strict      Dependencies must statisfy version (semver)                           \n'

var docopt = require('docopt').docopt
var args = docopt(doc, { version: require('../package.json').version })

var deps = require('croc-deps')
var link = require('croc-link')
var exec = require('croc-exec')
var printer = require('../lib/dag-printer.js')

var pkgs = deps.packages({strict: args['--strict'], packages: args['<package>']})
if (args.ls) {
  if (args['--json']) {
    printer.packages(pkgs)
  } else {
    printer.packagesTable(pkgs)
  }
} else if (args.deps) {
  if (args['--json']) {
    printer.dependencies(pkgs)
  } else {
    printer.dependenciesTable(pkgs)
  }
} else if (args.link) {
  link.link(pkgs)
} else if (args.test) {
  exec.exec('npm test')
} else if (args.build) {
  exec.exec('npm run build')
} else if (args.install) {
  exec.exec('npm install')
} else if (args.publish) {
  exec.exec('npm show %PKG_NAME% versions --json | grep -q \\"%PKG_VERSION%\\" || npm publish')
} else if (args.exec) {
  exec.exec(args.CMD)
}
