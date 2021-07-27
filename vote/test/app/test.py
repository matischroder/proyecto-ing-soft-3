import unittest
import requests


class UnitTest(unittest.TestCase):
    url = 'https://proyecto-ing-soft-3-vote.herokuapp.com/'

    def test_status(self):
        response = requests.get(self.url)
        self.assertEqual(response.status_code, 200)

    def test_post_status(self):
        payload = {'vote': 'b'}
        headers = {
            'Cookie': 'voter_id=21d23vr74d34'
        }
        response = requests.post(self.url, headers=headers, data=payload)
        self.assertEqual(response.status_code, 200)

    def test_post_status_400(self):
        response = requests.post(self.url)
        self.assertEqual(response.status_code, 400)

    def test_get_voter_id_cookie(self):
        valid_cookie = '21d23vr74d34'
        payload = {'vote': 'a'}
        headers = {
            'Cookie': 'voter_id=21d23vr74d34'
        }
        response = requests.post(self.url, headers=headers, data=payload)
        self.assertEqual(response.cookies["voter_id"], valid_cookie)

    def test_set_new_cookie(self):
        payload = {'vote': 'a'}
        response = requests.post(self.url, data=payload)
        assert response.cookies["voter_id"] is not None
