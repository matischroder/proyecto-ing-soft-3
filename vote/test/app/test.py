import unittest

from vote.app import get_redis
REDIS_HOST = "localhost"
REDIS_PORT = 6379
REDIS_PASSWORD = "redisredis"


class UnitTest(unittest.TestCase):
    def test_get_redis(self):
        result = get_redis()
        print(result)
        self.assertEqual(result, 6)


if __name__ == '__main__':
    unittest.main()
