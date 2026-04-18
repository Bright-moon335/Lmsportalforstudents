import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { Dashboard } from './components/Dashboard';
import { CourseView } from './components/CourseView';
import { coursesData } from './data/coursesData';
import { Course } from './types';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleLogin = (user: string) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setSelectedCourse(null);
  };

  const handleCourseSelect = (courseId: string) => {
    const course = coursesData.find(c => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
    }
  };

  const handleBackToDashboard = () => {
    setSelectedCourse(null);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (selectedCourse) {
    return <CourseView course={selectedCourse} onBack={handleBackToDashboard} />;
  }

  return (
    <Dashboard
      username={username}
      courses={coursesData}
      onCourseSelect={handleCourseSelect}
      onLogout={handleLogout}
    />
  );
}