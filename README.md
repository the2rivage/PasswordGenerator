# 🔐 Password Generator (React)

A modern React-based web application that generates secure and customizable random passwords with options for length, numbers, and special characters.

---

## 🚀 Features

* Generate random passwords instantly
* Customize password length
* Include/exclude:

  * Numbers (0–9)
  * Special characters (@#$%&*!)
* Copy password to clipboard
* Clean and responsive UI (Tailwind CSS)

---

## ⚛️ React Hooks Used

### 1. `useState`

* Used for managing:

  * Password value
  * Length of password
  * Toggle options (numbers & characters)

---

### 2. `useEffect`

* Automatically generates a new password whenever:

  * Length changes
  * Number/character options change

---

### 3. `useCallback`

* Optimizes performance by **memoizing functions**
* Used for:

  * `passwordGenerator`
  * `copyPasswordToClipboard`

👉 Prevents unnecessary re-creation of functions on every render

---

### 4. `useRef`

* Used to access the input field directly
* Helps in:

  * Selecting password text
  * Copying password to clipboard

---

## ⚡ Optimizations Used

* **useCallback Hook**

  * Avoids unnecessary function re-creation
  * Improves performance in re-renders

* **Controlled Re-renders**

  * Password regenerates only when dependencies change

* **Efficient DOM Access**

  * `useRef` used instead of re-rendering UI

---

## 🛠️ Tech Stack

* React
* Tailwind CSS
* JavaScript (ES6+)

---

## 📸 Preview

<img width="769" height="482" alt="image" src="https://github.com/user-attachments/assets/2e811d50-a018-472b-ba04-83ad9fe802b8" />


---

## 📦 Installation & Setup

```bash
git clone https://github.com/the2rivage/PasswordGenerator.git
cd PasswordGenerator
npm install
npm run dev
```



## 🙌 Author

Sahil Bainya

---
