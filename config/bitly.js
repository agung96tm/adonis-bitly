const Env = use('Env')

module.exports = {
  accessToken: Env.get('BITLY_TOKEN', 'you can change this or use env')
}
