import fileinput
import sys

data = []

for line in fileinput.input():
  if line not in data:
    data.append(line)

for d in data:
  sys.stdout.write(d)
