import React from "react";
import Navbar from "./components/Navbar.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import CourseCard from "./components/CourseCard.jsx";
import InstructorCard from "./components/InstructorCard.jsx";
import FeatureCard from "./components/FeatureCard.jsx";
import TestimonialCard from "./components/TestimonialCard.jsx";
import Notice from "./components/Notice.jsx";
import PrimaryButton from "./components/PrimaryButton.jsx";
import StatCard from "./components/StatCard.jsx";
import Footer from "./components/Footer.jsx";

const courses = [
  {
    id: 1,
    title: "Web Development",
    instructor: "Maya Johnson",
    price: 49,
    category: "DEVELOPMENT",
    duration: "8 weeks",
    icon: "💻",
    color: "lavender",
    rating: "4.9",
  },
  {
    id: 2,
    title: "UI/UX Design Basics",
    instructor: "Daniel Kim",
    price: 35,
    category: "DESIGN",
    duration: "5 weeks",
    icon: "🎨",
    color: "peach",
    rating: "4.8",
  },
  {
    id: 3,
    title: "Data & Python",
    instructor: "Amina Rahimi",
    price: 59,
    category: "PROGRAMMING",
    duration: "7 weeks",
    icon: "📊",
    color: "mint",
    rating: "5.0",
  },
];

const instructors = [
  {
    id: 1,
    name: "Maya Johnson",
    role: "Front-end Developer",
    image: "https://i.pravatar.cc/120?img=47",
    courses: "12 courses",
  },
  {
    id: 2,
    name: "Daniel Kim",
    role: "Product Designer",
    image: "https://i.pravatar.cc/120?img=12",
    courses: "8 courses",
  },
  {
    id: 3,
    name: "Amina Rahimi",
    role: "Python Engineer",
    image: "https://i.pravatar.cc/120?img=44",
    courses: "10 courses",
  },
];

const features = [
  { id: 1, icon: "🧭", title: "Learn at your pace", description: "Study whenever it fits your schedule." },
  { id: 2, icon: "🏆", title: "Build real skills", description: "Practice with projects and useful tasks." },
  { id: 3, icon: "🤝", title: "Get support", description: "Learn with a welcoming community." },
];

const stats = [
  { id: 1, value: "12k+", label: "Active learners", icon: "👩‍🎓" },
  { id: 2, value: "85+", label: "Expert courses", icon: "📚" },
  { id: 3, value: "4.9/5", label: "Average rating", icon: "⭐" },
];

function App() {
  return (
    <div className="app-shell">
      <Navbar
        logo="learnhub."
        menuItems={["Explore", "My learning", "About us"]}
        actionLabel="Join for free"
      />

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</span>
            <h1>Small steps today.<br /><span>Big skills tomorrow.</span></h1>
            <p className="hero-description">
              Friendly, practical courses to help you grow your skills and turn your curiosity into confidence.
            </p>
            <div className="hero-actions">
              <PrimaryButton label="Explore courses" variant="primary" />
              <PrimaryButton label="How it works ↗" variant="secondary" />
            </div>
            <div className="learner-proof">
              <div className="avatar-stack">
                <img src="https://i.pravatar.cc/64?img=5" alt="Learner" />
                <img src="https://i.pravatar.cc/64?img=32" alt="Learner" />
                <img src="https://i.pravatar.cc/64?img=49" alt="Learner" />
              </div>
              <p><strong>12,000+</strong><br /><span>learners growing together</span></p>
            </div>
          </div>
          <div className="hero-art" aria-label="Learning illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="hero-note note-top">✦ Keep growing</div>
            <div className="hero-illustration">
              <div className="screen-top"><span /><span /><span /></div>
              <div className="screen-content">
                <div className="screen-sidebar"><i /><i /><i /><i /></div>
                <div className="screen-lines"><b /><b /><b /><div className="screen-chart"><span /><span /><span /><span /><span /></div></div>
              </div>
              <div className="plant-pot"><div className="plant-leaf leaf-a" /><div className="plant-leaf leaf-b" /><div className="plant-leaf leaf-c" /><div className="pot" /></div>
              <div className="floating-book">📘</div>
            </div>
            <div className="hero-note note-bottom">✓ Progress, not perfection</div>
          </div>
        </section>

        <section className="stats-row container" aria-label="LearnHub statistics">
          {stats.map((stat) => <StatCard key={stat.id} value={stat.value} label={stat.label} icon={stat.icon} />)}
        </section>

        <section className="section container">
          <SectionHeading
            eyebrow="CHOOSE YOUR PATH"
            title="Popular courses"
            description="Explore practical classes designed to help you take your next step."
            linkText="View all courses ↗"
          />
          <div className="course-grid">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                instructor={course.instructor}
                price={course.price}
                category={course.category}
                duration={course.duration}
                icon={course.icon}
                color={course.color}
                rating={course.rating}
              />
            ))}
          </div>
        </section>

        <section className="feature-section">
          <div className="container">
            <SectionHeading
              eyebrow="WHY LEARNHUB"
              title="Learning that works for you"
              description="A little structure, a lot of encouragement, and skills you can use in real life."
              centered
            />
            <div className="feature-grid">
              {features.map((feature) => (
                <FeatureCard key={feature.id} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
        </section>

        <section className="section container">
          <SectionHeading
            eyebrow="MEET YOUR MENTORS"
            title="Learn from kind experts"
            description="Meet instructors who make complicated topics feel simple."
          />
          <div className="instructor-grid">
            {instructors.map((person) => (
              <InstructorCard
                key={person.id}
                name={person.name}
                role={person.role}
                image={person.image}
                courses={person.courses}
              />
            ))}
          </div>
        </section>

        <section className="testimonial-section">
          <div className="container testimonial-layout">
            <div className="testimonial-intro">
              <span className="eyebrow">REAL PEOPLE, REAL PROGRESS</span>
              <h2>Good things happen when you keep learning.</h2>
              <p>Our learners remind us that progress can begin with one small step.</p>
            </div>
            <TestimonialCard
              quote="The lessons were clear, friendly, and easy to follow. I finally feel confident enough to start building my own projects."
              name="Lina Ahmad"
              role="Web development learner"
              image="https://i.pravatar.cc/100?img=45"
              rating={5}
            />
          </div>
        </section>

        <section className="container notice-wrap">
          <Notice
            type="success"
            title="Your learning journey starts here"
            message="Pick one course, set a small goal, and celebrate every step forward."
          />
        </section>

        <section className="cta-section container">
          <div>
            <span className="eyebrow">READY WHEN YOU ARE</span>
            <h2>Make room for your next big idea.</h2>
            <p>Join a community that believes learning is for everyone.</p>
          </div>
          <PrimaryButton label="Start learning free ↗" variant="light" />
        </section>
      </main>

      <Footer
        companyName="learnhub."
        description="Helping curious minds grow through friendly, practical learning."
        links={["Courses", "Our instructors", "Contact", "Privacy"]}
        copyright="© 2026 LearnHub. Keep learning."
      />
    </div>
  );
}

export default App;