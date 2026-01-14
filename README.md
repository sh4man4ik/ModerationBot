# What is it?

ModerationBot is a Telegram bot that helps **moderate messages**. This is the initial code base that you can improve and
modify to suit your needs.

# How does it work?

The user sends a message to the bot. After that, it is sent to the administrator for moderation. If the administrator
approves it, the message is posted on the Telegram channel. If not, then it is not. Make sure that the bot is added to
the Telegram channel as administrator.

# Source code

1. Clone the repository:

```
git clone https://github.com/sh4man4ik/ModerationBot.git
```

2. Go to the directory:

```
cd ModerationBot
```

3. Download the dependencies:

```
npm install
```

4. Create a .env file in the root directory:

```
BOT_TOKEN="Bot token"
ADMIN_ID="Telegram ID of the moderator"
CHANNEL_ID="For example @channel"
```

5. Launch the bot:

```
npm run bot
```

# Tech stack

The following technologies are used to develop the bot: **JavaScript** and **Node.js**.

# Bot hosting

The code contains the comments **ONLY FOR RENDER**. If you use a different hosting method, just delete that code.
Otherwise, if you want to host a Telegram bot for free, you don't need to delete the code. How does it work and why?

1. Connect your repository with this code (or your own) to **Render** as a **Web Service**. Only there is a free plan.
   Also, without this code, Render will not allow you to build the project because it needs to listen to the port.

2. Next, copy the link provided by Render and leave it on the **UptimeRobot** website. Also, don't forget to set it to
   check our website every **14 minutes**. This is important to prevent our bot from falling sleep.
