<p align="center">
  <img src="https://github.com/tmrxdev/terminatormc/blob/2c47ce4fb07fd208c2a8cdab0dccb7531fe62d8d/github-terminator-cover.png" alt="Terminator Banner" width="100%" />
</p>

<h1 align="center">Terminator</h1>

<p align="center">
  A public RCON console panel for Minecraft servers.
</p>

---

## 🧠 What is Terminator?

**Terminator** is a RCON console, designed for everyone to use. It's made for servers that want everyone to have console access.

### Upcoming:

- 🎮 Options for monitization via Tebex (eg. unlimited commands per month)
- 🤖 Option to use CAPTCHA against bots
- 🧑‍💼 Add multiple admin user-ids, and add moderators
- 🌐 Ability to disable the need of oAuth2 accounts
- 🌐 Ability to add different/multiple oAuth2 providers (eg: discord, google and authentik)

I'm currently not planning to add a native provider for e-mail login, for this you'll need to use a provider such as Okta, Supabase etc.

---

## ✨ Features

- ✅ **OAuth2 Login** (currently discord only)
- 📡 **RCON command interface**
- 🚫 **Command Blacklists** (e.g. `/stop`, `/ban`, `/kick`)
- 🧑‍💼 **Admin dashboard** 
- 🧾 **Command logging** (with user information)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tmrxdev/terminator.git
cd terminator
````

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment

Create a `.env` file in the root:

```env
DISCORD_CLIENT_ID=your_client_id
DISCORD_CLIENT_SECRET=your_client_secret
DISCORD_REDIRECT_URI=http://localhost:3000/callback
ADMIN_DISCORD_ID=123456789012345678

RCON_HOST=127.0.0.1
RCON_PORT=25575
RCON_PASSWORD=your_rcon_password
```

> ⚠️ Don't forget to replace the values, it won't work otherwise.

---

## 🚀 Running Terminator

```bash
npm run dev
```

This will start the development server on [localhost:3000](http://localhost:3000).

---

## 🔒 Security & Permissions

* Default blacklisted commands: `/stop`, `/restart`, `/ban`, `/kick`
* Admins can:

  * View all executed commands
  * Manage the blacklist
  * See who ran what

---

## 🧾 License

This project uses a **Custom Non-Commercial License**.

> You may use, modify, and share this code **for non-commercial purposes only**.
> You **must credit** the original author.
> You **may not** sublicense, patent, relicense, or use this project commercially.

See [`LICENSE`](./LICENSE) for full details.
(Commercial Usage is considered a minecraft server owned by a brand/company)

---

## 🙏 Credits

Created by [@tmrxdev](https://github.com/tmrxdev)
- Uses [node-rcon](https://github.com/pixelboomdev/node-rcon), and [Discord OAuth2](https://discord.com/developers/docs/topics/oauth2)

## 🚀 Demo Server
We're currently looking into hosting a 24/7 demo server, if you want us to show your server as a demo server, contact me on discord via @tmrxdev.
