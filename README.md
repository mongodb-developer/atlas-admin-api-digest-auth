# MongoDB Atlas Administration API — Digest Authentication Demo

This repository demonstrates how to call the [MongoDB Atlas Administration API](https://www.mongodb.com/docs/atlas/api/) using digest authentication. You can read the accompanying article ['Calling the MongoDB Atlas Admin API - How to do it from Node, Python, and Ruby'](https://www.mongodb.com/developer/how-to/nodejs-python-ruby-atlas-api/) for more information.

## Setup

To connect to the Atlas Administration API, you need to generate an [organization API key](https://www.mongodb.com/docs/atlas/configure-api-access/#std-label-create-org-api-key). Make sure you add your IP address in the API access list!

Then, export the following environment variables, where `ATLAS_USER` is your _public key_ and `ATLAS_USER_KEY` is your _private key_.

```bash
export ATLAS_USER=<public_key>
export ATLAS_USER_KEY=<private_key>
```

## Usage

The repository includes request examples for Python, Node.js and Ruby.

### Python Example

To run the Python example, execute:

```bash
cd python
pip install -r requirements.txt
python ./request.py
```

### Node.js Example

To run the Node.js example, execute:

```bash
cd node
npm install
node ./request.js
```

### Ruby Example

To run the Ruby example, execute:

```bash
cd ruby
bundle install
ruby ./request.rb
```

If you don't have Bundler, you can install the `httparty` gem manually:

```bash
cd ruby
gem install httparty
ruby ./request.rb
```

## Tests

The repo includes a naive unit test for each of the examples. The tests execute the request and check the standard output for the expected success message.

### Python Test

To run the Python test, execute:

```bash
cd python
pip install -r requirements.txt
python -m unittest
```

### Node.js Test

To run the Node.js test, execute:

```bash
cd node
npm install
npm test
```

### Ruby Test

To run the Ruby test, execute:

```bash
cd ruby
bundle install
ruby test_request.rb
```

## Disclaimer

Use at your own risk; not a supported MongoDB product