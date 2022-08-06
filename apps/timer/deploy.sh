#!bin/bash

if [ -z "${TWINE_USERNAME}" ]; then
  echo "Please set your PyPi username in the \"TWINE_USERNAME\" env variable"
  exit 1
elif [ -z "${TWINE_PASSWORD}" ]; then
  echo "Please set your PyPi password in the \"TWINE_PASSWORD\" env variable"
  exit 1
fi

rm -r dist
python setup.py sdist;
twine upload --repository testpypi dist/*
