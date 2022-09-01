from flask import Flask, request
from tinydb import TinyDB, Query
from datetime import datetime
from flask_cors import cross_origin
from newrelic import agent
import time

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

    agent.record_custom_event("post_with_date", {"has_date": "date" in request_data})
    date = request_data["date"] if "date" in request_data else today()

    Search = Query()
    prev_query = db.search(Search.date == date)

    if len(prev_query):
        prev = prev_query[0]
        start_time = time.time()
        db.update(
            {
                "standing_time": prev["standing_time"] + request_data["current_time"],
                "segments": prev["segments"] + request_data["segments"],
            },
            Search.date == date,
        )
        time.sleep(0.5)
        agent.record_custom_metric("Custom/Timing/UpdateTime", time.time() - start_time)
    else:
        start_time = time.time()
        db.insert(
            {
                "date": date,
                "standing_time": request_data["current_time"],
                "segments": request_data["segments"],
            }
        )
        agent.record_custom_metric("Custom/Timing/InsertTime", time.time() - start_time)

    return {"statusText": "OK"}
