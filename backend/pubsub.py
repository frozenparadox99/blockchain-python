import time
from pubnub.pubnub import PubNub
from pubnub.pnconfiguration import PNConfiguration
from pubnub.callbacks import SubscribeCallback

subscribe_key='sub-c-a00f7070-8fac-11eb-bfcb-9a3fb4a80a34'
publish_key='pub-c-55a72f27-08e8-4ed5-91d0-f2886f06118a'

pnconfig = PNConfiguration()
pnconfig.subscribe_key = subscribe_key
pnconfig.publish_key = publish_key
pubnub = PubNub(pnconfig)

TEST_CHANNEL = 'TEST_CHANNEL'

pubnub.subscribe().channels([TEST_CHANNEL]).execute()

class Listener(SubscribeCallback):
    def message(self,pubnub,message_object):
        print(f'\n-- Incoming message object: {message_object}')

pubnub.add_listener(Listener())

def main():
    time.sleep(1)
    pubnub.publish().channel(TEST_CHANNEL).message({'foo':'bar'}).sync()

if __name__ == '__main__':
    main()