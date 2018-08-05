# -*- coding: utf-8 -*-
from flask import Flask
from flask_socketio import SocketIO

from websockets import (
      handle_client_connect_event,
)

from views import index

app = Flask(__name__)
socketio = SocketIO(app)
