from unittest.mock import patch
import os
import unittest
import time
import pprint

class TestStringMethods(unittest.TestCase):
    @patch('pprint.pprint')
    def test_request(self, mock_print):
        import request
        time.sleep(4)

        mock_print.assert_called_once()
        message = mock_print.call_args.args[0]

        assert message["appName"] == "MongoDB Atlas"
        assert message["apiKey"]["publicKey"] == os.environ["ATLAS_USER"]

if __name__ == '__main__':
    unittest.main()