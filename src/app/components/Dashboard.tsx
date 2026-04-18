import { Course } from '../types';

interface DashboardProps {
  username: string;
  courses: Course[];
  onCourseSelect: (courseId: string) => void;
  onLogout: () => void;
}

export function Dashboard({ username, courses, onCourseSelect, onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="bg-gradient-to-r from-[var(--python-color)] to-[var(--css-color)] bg-clip-text text-transparent">
            EduVerse
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, <span className="text-foreground">{username}</span></span>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="mb-2 opacity-0 animate-[fadeIn_0.6s_ease-out_0.1s_forwards]">
            Your Learning Journey
          </h2>
          <p className="text-muted-foreground opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
            Choose a course to continue your education
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-[var(--course-color)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--course-color)]/10 hover:-translate-y-1 cursor-pointer opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]"
              style={{
                ['--course-color' as string]: `var(--${course.id}-color)`,
                animationDelay: `${0.1 + index * 0.1}s`
              }}
              onClick={() => onCourseSelect(course.id)}
            >
              {/* Course Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `var(--${course.id}-color)20` }}
              >
                <span className="text-3xl">{course.icon}</span>
              </div>

              {/* Course Info */}
              <h3 className="mb-2 text-foreground">{course.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {course.description}
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground">Progress</span>
                  <span className="text-xs" style={{ color: `var(--${course.id}-color)` }}>
                    {course.progress}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 group-hover:animate-pulse"
                    style={{
                      width: `${course.progress}%`,
                      backgroundColor: `var(--${course.id}-color)`
                    }}
                  ></div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span>{course.lessons} lessons</span>
                <span>•</span>
                <span>{course.duration}</span>
              </div>

              {/* Start Learning Button */}
              <button
                className="w-full py-3 rounded-lg border border-[var(--course-color)] text-[var(--course-color)] hover:bg-[var(--course-color)] hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[var(--course-color)]/20"
                style={{ ['--course-color' as string]: `var(--${course.id}-color)` }}
              >
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
