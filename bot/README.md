# Bot Setup

This directory contains a simple Telegram bot implemented with `aiogram`.

## Requirements

* Python 3.12
* [`aiogram`](https://pypi.org/project/aiogram/) library
* [`python-dotenv`](https://pypi.org/project/python-dotenv/) to load `.env` files

Install the dependencies:

```bash
pip install aiogram python-dotenv
```

## Configuration

Create a `.env` file in this directory with the following variables:

```
TELEGRAM_BOT_TOKEN=<your bot token>
WEBAPP_URL=<url to open from the button>
BOT_USERNAME=<bot username without @>
TON_ADDRESS=<TON deposit address>
TON_TAG=<Ton Destination Tag>
```

## Running the Bot

Execute the bot with:

```bash
python bot/main.py
```

