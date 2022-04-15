require 'httparty'
require 'json'

base_url = 'https://cloud.mongodb.com/api/atlas/v1.0/'
options = {
  :digest_auth => {
    :username=>ENV['ATLAS_USER'],
    :password=>ENV['ATLAS_USER_KEY']
  }
}

result = HTTParty.get(base_url, options)

pp JSON.parse(result.body())
