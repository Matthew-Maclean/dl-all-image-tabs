#!/usr/bin/python3

import os
import zipfile

def main():
    # because __file__ changes if you run like py build.py or ./build.py
    self_file = os.path.basename(__file__)

    folder = os.path.dirname(os.path.realpath(self_file))

    name = os.path.basename(os.path.normpath(folder))

    output = '{}.xpi'.format(name)

    files = []

    for (dirpath, dirs, filenames) in os.walk(folder):
        dirs[:] = [d for d in list(dirs) if not d.startswith('.')]

        for filename in filenames:
            path = os.path.relpath(os.path.join(dirpath, filename))
            
            if path != output and path != self_file:
                files.append(path)

    with zipfile.ZipFile(output, 'w') as output_file:
        for file in files:
            output_file.write(file)

    print('built {} files to {}'.format(len(files), output))

if __name__ == '__main__':
    main()
