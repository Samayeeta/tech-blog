import os
import json
from dotenv import load_dotenv
from firebase_admin import credentials, initialize_app,db

load_dotenv()
service_account_key = os.getenv("FIREBASE_SERVICE_ACCOUNT_KEY")

if not service_account_key:
    raise ValueError("The environment variable 'FIREBASE_SERVICE_ACCOUNT_KEY' is not set!")

service_account_dict = json.loads(service_account_key)


cred = credentials.Certificate(service_account_dict)
initialize_app(cred, {
    'databaseURL': 'https://techblog-22e3f-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

db_reference = db.reference('techblog')
print("Firebase Initialized!")
