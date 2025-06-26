<p align="center">
  <img src="banner.png" alt="Terminator Banner" width="100%" />
</p>

<h1 align="center">Terminator</h1>

<p align="center">
  A secure, public RCON console panel for Minecraft servers.<br />
  Built for communities. Powered by Discord login. Protected from chaos.
</p>

---

## 🧠 What is Terminator?

**Terminator** is a public-facing, browser-based **RCON console dashboard** for Minecraft servers. It lets users connect with a Discord login and safely interact with your server console.

### Key Concepts:

- 🎮 Let anyone run server commands — safely
- 🔐 Protect critical commands with a blacklist
- 🛠️ Admins can review logs, manage commands, and configure behavior

---

## ✨ Features

- ✅ **Discord login** via OAuth2
- 📡 **RCON command interface**
- 🚫 **Blacklist protection** (e.g. `/stop`, `/ban`, `/kick`)
- 🧑‍💼 **Admin dashboard** (by Discord ID)
- 🧾 **Command logging** for transparency
- 🧠 **CAPTCHA** on load to stop bots

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

> ⚠️ Replace the values above with your actual credentials and RCON server details.

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
* CAPTCHA is shown before command access to block bots

---

## 🧾 License

This project uses a **Custom Non-Commercial License**.

> You may use, modify, and share this code **for non-commercial purposes only**.
> You **must credit** the original author.
> You **may not** sublicense, patent, relicense, or use this project commercially.

See [`LICENSE`](./LICENSE) for full details.

---

## 🙏 Credits

Created by [@tmrx](https://github.com/tmrxdev)
Uses [mineflayer](https://github.com/PrismarineJS/mineflayer), [node-rcon](https://github.com/pixelboomdev/node-rcon), and [Discord OAuth2](https://discord.com/developers/docs/topics/oauth2)

---

## ⭐ Support

If you like Terminator, drop a ⭐ on the repo and share it with other Minecraft server admins!

```

---

Let me know if you want a matching `LICENSE` file or if you're using any specific stack (Next.js, Express, etc.) so I can add deployment instructions too.
```
