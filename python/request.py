import os
import requests
from requests.auth import HTTPDigestAuth
import pprint

baseUrl = "https://cloud.mongodb.com/api/atlas/v1.0/"
auth = HTTPDigestAuth(
   os.environ["ATLAS_USER"],
   os.environ["ATLAS_USER_KEY"]
)

response = requests.get(baseUrl, auth = auth)
pprint.pprint(response.json())
