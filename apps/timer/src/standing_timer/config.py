import configparser
import os

PATH = os.path.expanduser("~/.standingTimer")
FILE_NAME = "config.ini"
FILE_PATH = PATH + "/" + FILE_NAME

config = configparser.ConfigParser()


def read_config_file():
    config.read(FILE_PATH)

    return config.sections()


def write_auth_config(token, server_url="standing-timer.poleselli.com"):
    config["AUTH"] = {
        "token": token,
        "server_url": server_url,
    }

    if not os.path.exists(PATH):
        os.makedirs(PATH)

    with open(FILE_PATH, "w+") as configfile:
        config.write(configfile)
