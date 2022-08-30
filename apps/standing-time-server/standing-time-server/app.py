from flask import Flask, request
from tinydb import TinyDB, Query
from datetime import datetime
from flask_cors import cross_origin

app = Flask(__name__)

db = TinyDB("standing-timer.json")


def today():
    return datetime.now().strftime("%Y-%m-%d")


@app.get("/times")
@cross_origin()
def get_times():
    return db.all()


@app.post("/times")
@cross_origin()
def post_times():
    request_data = request.get_json()
    date = request_data["date"] if "date" in request_data else today()

    Search = Query()
    prev_query = db.search(Search.date == date)

    if len(prev_query):
        prev = prev_query[0]
        db.update(
            {
                "standing_time": prev["standing_time"] + request_data["current_time"],
                "segments": prev["segments"] + request_data["segments"],
            },
            Search.date == date,
        )
    else:
        db.insert(
            {
                "date": date,
                "standing_time": request_data["current_time"],
                "segments": request_data["segments"],
            }
        )

    return {"statusText": "OK"}
