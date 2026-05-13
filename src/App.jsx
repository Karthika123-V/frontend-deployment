import "./App.css";

function App() {
  const stats = [
    { title: "Projects", value: "24" },
    { title: "Tasks", value: "186" },
    { title: "Teams", value: "12" },
    { title: "Productivity", value: "92%" },
  ];

  const projects = [
    {
      name: "AI Healthcare Dashboard",
      progress: 78,
      status: "In Progress",
    },
    {
      name: "Smart IoT Monitoring",
      progress: 45,
      status: "Pending",
    },
    {
      name: "Edge AI Analytics",
      progress: 92,
      status: "Completed",
    },
  ];

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h1 className="logo">PMS AI</h1>

        <button>Dashboard</button>
        <button>Projects</button>
        <button>Tasks</button>
        <button>Analytics</button>
        <button>Teams</button>
        <button>Calendar</button>
        <button>Settings</button>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Header */}
        <div className="header">
          <div>
            <h2>Welcome Back 👋</h2>
            <p>Manage projects with AI-powered productivity.</p>
          </div>

          <button className="newProjectBtn">+ New Project</button>
        </div>

        {/* Stats */}
        <div className="statsGrid">
          {stats.map((item) => (
            <div className="card" key={item.title}>
              <p>{item.title}</p>
              <h3>{item.value}</h3>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="projectsSection">
          <h2>Active Projects</h2>

          {projects.map((project) => (
            <div className="projectCard" key={project.name}>
              <div className="projectTop">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.status}</p>
                </div>

                <span>{project.progress}%</span>
              </div>

              <div className="progressBar">
                <div
                  className="progressFill"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;