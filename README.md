# Adonis Bitly

This package is an **shorten url** built on top of [node-bitly](https://github.com/tanepiper/node-bitly).

## Getting Started

Install the package using the `adonis` CLI.

```bash
> adonis install adonis-bitly
```

Instruction: ([Click Here](https://github.com/agung96tm/adonis-bitly/blob/master/instructions.md)).


## Configure

Configure token inside the `config/bitly.js`
```js
const Env = use('Env')

module.exports = {
  // set in here
  accessToken: Env.get('BITLY_TOKEN', 'fixthistoken')
}
```

or inside the `.env`
```js
BITLY_TOKEN=7ab070f4e5xxxx0bac67xxxx24249b3b0606xxxx
```


## Usage

Just make long become short:

```js
// Controller
const Bitly = use('Bitly')

async index() {
  // get short url
  const result = await Bitly.shorten('https://github.com/agung96tm/adonis-bitly/')

  // example: http://bit.ly/2uWbQfS
  return result
}
```

If You need more detail:

```js
// Controller
const Bitly = use('Bitly')

async index() {
  // get detail url (set true)
  const result = await Bitly.shorten('https://github.com/agung96tm/adonis-bitly/', true)

  /**
   * example:
    {
      "url": "http://bit.ly/2UbtGSS",
      "hash": "2UbtGSS",
      "global_hash": "2UeD4xW",
      "long_url": "https://github.com/agung96tm/adonis-bitly/",
      "new_hash": 0
    }
   */
  return result
}
```


## How Can I Get Token
1. Login to https://bitly.com/
2. Open Your 'Edit Profile'
3. Click 'Generic Access Token'
4. Insert Your Password Bitly Password (if you login with google / facebook, try to reset password)
5. You will get that token
