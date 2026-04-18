import { useState } from 'react';
import { Course, LessonContent } from '../types';

interface CourseViewProps {
  course: Course;
  onBack: () => void;
}

export function CourseView({ course, onBack }: CourseViewProps) {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedTab, setSelectedTab] = useState<'video' | 'notes' | 'mcqs'>('video');
  const [mcqAnswers, setMcqAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const currentContent = course.content[selectedDay - 1];

  const handleMcqAnswer = (questionIndex: number, optionIndex: number) => {
    setMcqAnswers({ ...mcqAnswers, [questionIndex]: optionIndex });
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const getScore = () => {
    let correct = 0;
    currentContent.mcqs.forEach((mcq, index) => {
      if (mcqAnswers[index] === mcq.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `var(--${course.id}-color)20` }}
              >
                <span className="text-2xl">{course.icon}</span>
              </div>
              <div>
                <h2 className="text-foreground">{course.name}</h2>
                <p className="text-sm text-muted-foreground">{course.lessons} lessons • {course.duration}</p>
              </div>
            </div>
          </div>

          {/* Day Selector */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {course.content.map((content) => (
              <button
                key={content.day}
                onClick={() => {
                  setSelectedDay(content.day);
                  setShowResults(false);
                  setMcqAnswers({});
                }}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                  selectedDay === content.day
                    ? 'text-white shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
                style={
                  selectedDay === content.day
                    ? {
                        backgroundColor: `var(--${course.id}-color)`,
                        boxShadow: `0 4px 12px var(--${course.id}-color)30`
                      }
                    : {}
                }
              >
                Day {content.day}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-2xl p-4 sticky top-24">
              <h3 className="mb-4 text-foreground">Content</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedTab('video')}
                  className={`w-full px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    selectedTab === 'video'
                      ? 'text-white'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                  }`}
                  style={
                    selectedTab === 'video'
                      ? { backgroundColor: `var(--${course.id}-color)` }
                      : {}
                  }
                >
                  <div className="flex items-center gap-3">
                    <span>▶️</span>
                    <span>Video Lesson</span>
                  </div>
                </button>
                <button
                  onClick={() => setSelectedTab('notes')}
                  className={`w-full px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    selectedTab === 'notes'
                      ? 'text-white'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                  }`}
                  style={
                    selectedTab === 'notes'
                      ? { backgroundColor: `var(--${course.id}-color)` }
                      : {}
                  }
                >
                  <div className="flex items-center gap-3">
                    <span>📝</span>
                    <span>Study Notes</span>
                  </div>
                </button>
                <button
                  onClick={() => setSelectedTab('mcqs')}
                  className={`w-full px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    selectedTab === 'mcqs'
                      ? 'text-white'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                  }`}
                  style={
                    selectedTab === 'mcqs'
                      ? { backgroundColor: `var(--${course.id}-color)` }
                      : {}
                  }
                >
                  <div className="flex items-center gap-3">
                    <span>✅</span>
                    <span>Practice MCQs</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
              <h3 className="mb-6 text-foreground">{currentContent.title}</h3>

              {/* Video Tab */}
              {selectedTab === 'video' && (
                <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
                  <div className="aspect-video bg-muted rounded-xl overflow-hidden border border-border">
                    <iframe
                      src={currentContent.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div>
                    <h4 className="mb-2 text-foreground">About this lesson</h4>
                    <p className="text-muted-foreground">{currentContent.videoDescription}</p>
                  </div>
                </div>
              )}

              {/* Notes Tab */}
              {selectedTab === 'notes' && (
                <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
                  <div className="prose prose-invert max-w-none">
                    {currentContent.notes.map((note, index) => (
                      <div key={index} className="mb-6">
                        <h4 className="mb-3 text-foreground flex items-center gap-2">
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white"
                            style={{ backgroundColor: `var(--${course.id}-color)` }}
                          >
                            {index + 1}
                          </span>
                          {note.heading}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{note.content}</p>
                        {note.codeExample && (
                          <pre className="mt-3 p-4 bg-muted/50 rounded-lg overflow-x-auto border border-border">
                            <code className="text-sm text-foreground">{note.codeExample}</code>
                          </pre>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MCQs Tab */}
              {selectedTab === 'mcqs' && (
                <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
                  {currentContent.mcqs.map((mcq, qIndex) => (
                    <div key={qIndex} className="bg-muted/30 rounded-xl p-6 border border-border">
                      <h4 className="mb-4 text-foreground">
                        Question {qIndex + 1}: {mcq.question}
                      </h4>
                      <div className="space-y-3">
                        {mcq.options.map((option, oIndex) => {
                          const isSelected = mcqAnswers[qIndex] === oIndex;
                          const isCorrect = mcq.correctAnswer === oIndex;
                          const showCorrect = showResults && isCorrect;
                          const showIncorrect = showResults && isSelected && !isCorrect;

                          return (
                            <button
                              key={oIndex}
                              onClick={() => !showResults && handleMcqAnswer(qIndex, oIndex)}
                              disabled={showResults}
                              className={`w-full px-4 py-3 rounded-lg text-left transition-all duration-200 border ${
                                showCorrect
                                  ? 'bg-green-500/20 border-green-500 text-green-400'
                                  : showIncorrect
                                  ? 'bg-red-500/20 border-red-500 text-red-400'
                                  : isSelected
                                  ? 'border-[var(--course-color)] bg-[var(--course-color)]/10'
                                  : 'border-border bg-muted/50 hover:bg-muted'
                              }`}
                              style={
                                !showResults && isSelected
                                  ? { ['--course-color' as string]: `var(--${course.id}-color)` }
                                  : {}
                              }
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs ${
                                    showCorrect
                                      ? 'border-green-500 bg-green-500 text-white'
                                      : showIncorrect
                                      ? 'border-red-500 bg-red-500 text-white'
                                      : isSelected
                                      ? 'border-current'
                                      : 'border-muted-foreground'
                                  }`}
                                >
                                  {showCorrect ? '✓' : showIncorrect ? '✗' : String.fromCharCode(65 + oIndex)}
                                </span>
                                <span>{option}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      {showResults && (
                        <div className="mt-4 p-3 bg-muted rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Explanation:</strong> {mcq.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}

                  {!showResults ? (
                    <button
                      onClick={checkAnswers}
                      className="w-full py-4 rounded-lg text-white transition-all duration-300 hover:shadow-lg"
                      style={{
                        backgroundColor: `var(--${course.id}-color)`,
                        boxShadow: `0 4px 12px var(--${course.id}-color)30`
                      }}
                    >
                      Submit Answers
                    </button>
                  ) : (
                    <div className="bg-card border-2 rounded-xl p-6 text-center"
                      style={{ borderColor: `var(--${course.id}-color)` }}
                    >
                      <h4 className="mb-2 text-foreground">Your Score</h4>
                      <p className="mb-4"
                        style={{ color: `var(--${course.id}-color)` }}
                      >
                        {getScore()} out of {currentContent.mcqs.length} correct
                      </p>
                      <button
                        onClick={() => {
                          setShowResults(false);
                          setMcqAnswers({});
                        }}
                        className="px-6 py-2 rounded-lg border transition-colors duration-200"
                        style={{
                          borderColor: `var(--${course.id}-color)`,
                          color: `var(--${course.id}-color)`
                        }}
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
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

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
