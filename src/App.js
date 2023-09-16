import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar'; // Import the Sidebar component

import projectData from './data/projectData';
import personalData from './data/personalData';
import blogData from './data/blogData';
import './App.css'; // Don't forget to import your main CSS file
const allList = ["All", ...new Set(projectData.map(project => (
  project.category
)))]

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [projects, setProjects] = useState(projectData);
  const [projectList, setProjectList] = useState(allList);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const filterCategory = (e) => {
    if (e === "All") {
      setProjects(projectData)
      return
    }
    const filteredCategory = projectData.filter(project => project.category === e)
    setProjects(filteredCategory)
  }

  return (
    <section className="App">
      <Header toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />}
      <main className={`content ${isSidebarOpen ? 'content-shifted' : ''}`}>

        <Home {...personalData} />
        <Projects projects={projects} projectList={projectList} filterCategory={filterCategory} />
        <Blog blogData={blogData} />
        <About {...personalData} />
        <Contact />
      </main>
      <Footer />
    </section>
  );
}

export default App;