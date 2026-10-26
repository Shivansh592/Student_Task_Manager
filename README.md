 <div align="center">

# DueEase

### A Better Way to Get Things Done.

**Plan your assignments, prioritize your tasks, and never lose sight of what's next.**

DueEase turns scattered to-dos into a clear plan — no chaos required.

**From Oh No to All Done.**

[Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Project Structure](#-project-structure)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

---

## 📌 About DueEase

Managing assignments, remembering deadlines, and keeping track of pending work can quickly become overwhelming.

**DueEase** is a student-focused task management web application designed to bring academic tasks into one organized space. It helps students manage their workload, monitor progress, and stay aware of upcoming deadlines.

Instead of switching between scattered notes and forgotten to-do lists, students can use DueEase to organize their work and focus on what needs to be done next.

The goal is simple: make task management more organized, accessible, and less stressful.

## ✨ Features

- 📊 **Task Dashboard** — View tasks and get a clearer picture of your workload.
- ➕ **Task Management** — Create and organize tasks in one place.
- ✏️ **Edit Tasks** — Update task details when plans change.
- ✅ **Task Completion Tracking** — Mark tasks as completed and monitor progress.
- 🔍 **Task Search** — Find tasks without scanning your entire list.
- 🎯 **Task Filtering** — Narrow down tasks to find the items you need.
- 📅 **Deadline Management** — Keep due dates visible and plan ahead.
- 💾 **MongoDB Integration** — Store task data in a database.
- 🎨 **User-Friendly Interface** — A clean interface designed around organizing tasks and tracking progress.

## 🛠️ Tech Stack

DueEase uses a JavaScript-based full-stack architecture.

| Technology | Purpose |
|---|---|
| HTML5 | Structures the web interface |
| CSS3 | Styling, layout, and responsive presentation |
| JavaScript | Frontend interactions and application logic |
| Node.js | Backend JavaScript runtime |
| Express.js | Web server and backend routes |
| MongoDB | Database for application data |
| Mongoose | Database connectivity and data models |
| Git & GitHub | Version control and source code hosting |

## 🏗️ How It Works

DueEase follows a client-server architecture.

1. **User interaction:** Students interact with the web interface to manage tasks.
2. **Frontend logic:** JavaScript handles interface interactions and communicates with the backend where required.
3. **Backend processing:** The Express server receives and processes application requests.
4. **Database operations:** Mongoose communicates with MongoDB to store and retrieve task data.
5. **Updated information:** The interface displays task information and progress based on the application's responses.

This structure separates the user interface, server-side logic, and data storage, making the application easier to maintain and extend.

## 🚀 Getting Started

Follow these steps to run DueEase locally.

### Prerequisites

Make sure you have the following installed or available:

- [Node.js](https://nodejs.org/) — includes npm
- [Git](https://git-scm.com/)
- A [MongoDB](https://www.mongodb.com/) database, either local or hosted
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/Shivansh592/Student_Task_Manager.git
```

### 2. Open the Project Directory

```bash
cd Student_Task_Manager
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a file named `.env` in the project root, alongside `server.js`.

Add the following variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

For a local MongoDB instance, the connection string may look like this:

```env
MONGO_URI=mongodb://127.0.0.1:27017/dueease
PORT=5000
```

**Important:** Use the local connection string only if MongoDB is installed and running on your computer. If you use MongoDB Atlas, use your Atlas connection string and configure database network access correctly.

Never commit your real `.env` file or expose database credentials in your public repository.

### 5. Start the Application

```bash
npm start
```

If Windows PowerShell blocks the `npm` script, try:

```powershell
npm.cmd start
```

When the server starts successfully, you should see messages indicating that MongoDB is connected and the server is running.

### 6. Open the Application

Visit:

**http://localhost:5000**

Your local DueEase application should now be accessible.

## 📂 Project Structure

```text
Student_Task_Manager/
│
├── models/
│   ├── Task.js              # Task data model
│   └── User.js              # User data model
│
├── public/
│   ├── index.html           # Frontend application
│   └── task-background.png  # Background image
│
├── .env                     # Local environment variables
├── .gitignore               # Files excluded from Git
├── package.json             # Project metadata and scripts
├── package-lock.json        # Dependency lockfile
├── server.js                # Express server and database connection
└── README.md                # Project documentation
```

*The `.env` file is intentionally excluded from version control.*

## 🔐 Environment Configuration

DueEase uses environment variables to separate configuration from source code.

| Variable | Purpose |
|---|---|
| `MONGO_URI` | MongoDB connection string |
| `PORT` | Server port; defaults to `5000` if not provided |

Keep credentials private and ensure `.env` is listed in `.gitignore`.

For hosted deployments, configure environment variables through the hosting provider rather than uploading your local `.env` file.

## 🧪 Troubleshooting

### MongoDB Connection Fails

- Verify that `MONGO_URI` is correctly configured.
- Make sure MongoDB is running if you use a local database.
- For MongoDB Atlas, check database credentials and network access settings.

### The Application Does Not Start

- Confirm that Node.js and npm are installed.
- Run `npm install` from the project directory.
- Check the terminal for errors.
- Verify that the `start` script exists in `package.json`.

### Port 5000 Is Already in Use

Stop the other application using that port or configure a different available port through the `PORT` environment variable.

### Changes Do Not Appear in the Browser

Save your files and refresh the browser. If needed, restart the local Node.js server after backend changes.

## 🔮 Future Improvements

Potential directions for future development include:

- 🔔 Automated deadline reminders
- 🔁 Recurring tasks and study routines
- 📆 Calendar-based task planning
- 📱 Improved mobile experience
- 📈 More detailed productivity analytics
- 🔐 Complete user authentication and personalized task spaces
- ☁️ Production deployment with secure environment configuration

These are possible future enhancements, not a claim that every feature is currently implemented.

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the changes locally.
5. Submit a pull request describing your improvements.

For significant changes, consider opening an issue first to discuss the proposed solution.

## 👨‍💻 Developer

**Shivansh Tiwari**

B.Tech Computer Science and Engineering

GitHub: [@Shivansh592](https://github.com/Shivansh592)

## 📄 License

No license has been specified in this repository yet. If you intend to distribute the project for reuse, choose and add an appropriate open-source license.

---

<div align="center">

### DueEase

**From Oh No to All Done.**

*Organize your tasks. Stay ahead of deadlines. Make room for what matters.*

</div>
