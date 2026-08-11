# 🌿 Garden Companion

**Garden Companion** is a fan-made collection tracker for **Magic Garden**.

It is designed to make it easier to keep track of collected Plants, Pets, and their different mutations while playing the game.

> **This is an unofficial fan project and is not affiliated with or endorsed by the developers of Magic Garden.**

---

## ✨ Features

### 🌱 Plants

Track all **64 Plants** across **13 collection categories**:

- Normal
- Wet
- Chilled
- Frozen
- Dawnlit
- Amberlit
- Thunderstruck
- Gold
- Rainbow
- Dawnbound
- Amberbound
- Thundercharged
- Max Weight

That makes a total of:

**832 Plant collection slots**

---

### 🐾 Pets

Track all **26 Pets** across **4 collection categories**:

- Normal
- Gold
- Rainbow
- Max Size

That makes a total of:

**104 Pet collection slots**

---

## 🔎 Collection Tools

Garden Companion includes:

- Search for Plants and Pets
- Expandable mutation sections
- Individual mutation progress bars
- Overall collection progress
- Hide Completed mode
- Collapse All button
- Clear All button with confirmation
- Automatic progress saving
- Separate progress for Plants and Pets
- Mutation-specific colors and icons
- Responsive layout for desktop and mobile

---

## 🖱️ How to Use

### Mark something as collected

**Left-click** a Plant or Pet card to mark it as collected.

Click it again to remove it from your collection.

### Open the Wiki

**Right-click** a Plant or Pet card to open its corresponding page on the Magic Garden Wiki.

### Search

Use the search box to find a specific Plant or Pet.

Mutation sections containing an uncollected search result will highlight to help you find what you are missing.

---

## 💾 Saving Progress

Collection progress is saved automatically using your browser's **localStorage**.

This means:

- Your progress stays after refreshing or closing the page.
- No account is required.
- Your collection data stays in your browser.

### Important

Progress does **not currently sync between devices**.

For example, progress saved on your PC will be separate from progress saved on your phone.

Clearing browser storage may also remove your saved collection progress.

---

## 📁 Project Structure

```text
garden-companion/
│
├── css/
│   └── style.css
│
├── data/
│   ├── plants.json
│   └── pets.json
│
├── images/
│   ├── plants/
│   ├── pets/
│   ├── mutations/
│   └── footer-garden.svg
│
├── js/
│   └── app.js
│
├── index.html
├── LICENSE
└── README.md
