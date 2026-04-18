export interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  progress: number;
  lessons: number;
  duration: string;
  content: LessonContent[];
}

export interface LessonContent {
  day: number;
  title: string;
  videoUrl: string;
  videoDescription: string;
  notes: Note[];
  mcqs: MCQ[];
}

export interface Note {
  heading: string;
  content: string;
  codeExample?: string;
}

export interface MCQ {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
