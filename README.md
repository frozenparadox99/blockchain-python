**Activate the virtual environment**

```
source blockchain-env/bin/activate
```

**Install all packages**
```
pip3 install -r requirements.txt
```

**Run the tests**
Make sure you activate the virtual environment.

```
python3 -m pytest backend/tests
```

**Run the application and API**
Make sure you activate the virtual environment.

```
python3 -m backend.app
```

**Run a peer instance**
Make sure you activate the virtual environment.

```
export PEER=True && python3 -m backend.app
```