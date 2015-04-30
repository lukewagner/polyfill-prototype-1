#!/usr/bin/env python2
# -*- Mode: python -*-

import os, sys, difflib
from subprocess import Popen, PIPE, STDOUT

if not os.path.exists('a.out') or os.stat('a.out').st_mtime < os.stat('parser.h').st_mtime:
  print 'building'
  try:
    os.unlink('a.out')
  except:
    print '(no existing file)'
  proc = Popen(['sh', './build.sh'], stdout=PIPE)
  proc.communicate()
  assert proc.returncode == 0, 'failed to build'

print 'testing'

for i in os.listdir('samples'):
  if i.endswith('.js') and i.count('.') == 1:
    for extra in [[], ['1', '0']]:
      command = ['./a.out', os.path.join('samples', i)] + extra
      print ' '.join(command)
      out, err = Popen(command, stdout=PIPE).communicate()
      out = out.replace('\n\n', '\n')
      filename = os.path.join('samples', i + ('.' if extra else '') + '_'.join(extra) + ('.js' if extra else '.txt'))
      try:
        expected = open(filename).read()
      except:
        print 'no expected output for:\n', out, filename
        raise
      expected = expected.replace('\n\n', '\n')
      #print out
      #print '^v'
      #print expected
      assert out == expected, ''.join([a.rstrip()+'\n' for a in difflib.unified_diff(expected.split('\n'), out.split('\n'), fromfile='expected', tofile='actual')])

print 'ok.'

