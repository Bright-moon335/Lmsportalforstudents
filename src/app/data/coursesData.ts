import { Course } from '../types';

export const coursesData: Course[] = [
  {
    id: 'python',
    name: 'Python Programming',
    description: 'Master Python from basics to advanced concepts with hands-on projects',
    icon: '🐍',
    progress: 35,
    lessons: 30,
    duration: '8 weeks',
    content: [
      {
        day: 1,
        title: 'Introduction to Python',
        videoUrl: 'https://www.youtube.com/embed/kqtD5dpn9C8',
        videoDescription: 'Learn the basics of Python programming, including variables, data types, and basic operations.',
        notes: [
          {
            heading: 'What is Python?',
            content: 'Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991.',
          },
          {
            heading: 'Installing Python',
            content: 'Download Python from python.org and install it on your system. Verify installation by running "python --version" in your terminal.',
          },
          {
            heading: 'Your First Program',
            content: 'The classic "Hello, World!" program introduces you to Python syntax.',
            codeExample: `print("Hello, World!")`,
          },
          {
            heading: 'Variables and Data Types',
            content: 'Python supports various data types including integers, floats, strings, and booleans.',
            codeExample: `name = "Alice"\nage = 25\nheight = 5.6\nis_student = True`,
          },
        ],
        mcqs: [
          {
            question: 'What is Python?',
            options: [
              'A compiled programming language',
              'An interpreted programming language',
              'A database management system',
              'An operating system',
            ],
            correctAnswer: 1,
            explanation: 'Python is an interpreted programming language, meaning code is executed line by line at runtime.',
          },
          {
            question: 'Which function is used to display output in Python?',
            options: ['echo()', 'print()', 'display()', 'output()'],
            correctAnswer: 1,
            explanation: 'The print() function is used to display output in Python.',
          },
          {
            question: 'Which of the following is a valid variable name in Python?',
            options: ['2variable', 'my-variable', 'my_variable', 'my variable'],
            correctAnswer: 2,
            explanation: 'Variable names can contain letters, numbers, and underscores, but cannot start with a number or contain spaces or hyphens.',
          },
        ],
      },
      {
        day: 2,
        title: 'Control Flow and Loops',
        videoUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
        videoDescription: 'Understand conditional statements and loops to control program flow.',
        notes: [
          {
            heading: 'If Statements',
            content: 'Control the flow of your program with conditional statements.',
            codeExample: `age = 18\nif age >= 18:\n    print("You are an adult")\nelse:\n    print("You are a minor")`,
          },
          {
            heading: 'For Loops',
            content: 'Iterate over sequences like lists, strings, or ranges.',
            codeExample: `fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)`,
          },
          {
            heading: 'While Loops',
            content: 'Execute code repeatedly while a condition is true.',
            codeExample: `count = 0\nwhile count < 5:\n    print(count)\n    count += 1`,
          },
        ],
        mcqs: [
          {
            question: 'What will be the output of: if 5 > 3: print("True")',
            options: ['True', 'False', 'Error', 'Nothing'],
            correctAnswer: 0,
            explanation: 'Since 5 is greater than 3, the condition is True and "True" will be printed.',
          },
          {
            question: 'Which loop is used to iterate over a sequence?',
            options: ['while loop', 'for loop', 'do-while loop', 'repeat loop'],
            correctAnswer: 1,
            explanation: 'A for loop is specifically designed to iterate over sequences like lists, tuples, and strings.',
          },
        ],
      },
      {
        day: 3,
        title: 'Functions and Modules',
        videoUrl: 'https://www.youtube.com/embed/9Os0o3wzS_I',
        videoDescription: 'Learn how to write reusable code with functions and organize code with modules.',
        notes: [
          {
            heading: 'Defining Functions',
            content: 'Functions are reusable blocks of code that perform specific tasks.',
            codeExample: `def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Alice"))`,
          },
          {
            heading: 'Function Parameters',
            content: 'Functions can accept parameters and return values.',
            codeExample: `def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(result)  # Output: 8`,
          },
          {
            heading: 'Importing Modules',
            content: 'Use modules to organize and reuse code across different files.',
            codeExample: `import math\n\nprint(math.pi)  # Output: 3.141592653589793\nprint(math.sqrt(16))  # Output: 4.0`,
          },
        ],
        mcqs: [
          {
            question: 'What keyword is used to define a function in Python?',
            options: ['function', 'def', 'func', 'define'],
            correctAnswer: 1,
            explanation: 'The "def" keyword is used to define a function in Python.',
          },
          {
            question: 'What does the return statement do?',
            options: [
              'Ends the program',
              'Prints output',
              'Sends a value back to the caller',
              'Imports a module',
            ],
            correctAnswer: 2,
            explanation: 'The return statement sends a value back to the code that called the function.',
          },
        ],
      },
    ],
  },
  {
    id: 'html',
    name: 'HTML Fundamentals',
    description: 'Build the structure of web pages with HTML5',
    icon: '🌐',
    progress: 60,
    lessons: 20,
    duration: '4 weeks',
    content: [
      {
        day: 1,
        title: 'Introduction to HTML',
        videoUrl: 'https://www.youtube.com/embed/qz0aGYrrlhU',
        videoDescription: 'Learn the basics of HTML structure and essential tags.',
        notes: [
          {
            heading: 'What is HTML?',
            content: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of web content.',
          },
          {
            heading: 'HTML Document Structure',
            content: 'Every HTML document has a basic structure with DOCTYPE, html, head, and body tags.',
            codeExample: `<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Page</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>`,
          },
          {
            heading: 'Common HTML Tags',
            content: 'Learn essential tags like headings (h1-h6), paragraphs (p), links (a), and images (img).',
            codeExample: `<h1>Main Heading</h1>\n<p>This is a paragraph.</p>\n<a href="https://example.com">Visit Example</a>\n<img src="image.jpg" alt="Description">`,
          },
        ],
        mcqs: [
          {
            question: 'What does HTML stand for?',
            options: [
              'Hyper Text Markup Language',
              'High Tech Modern Language',
              'Home Tool Markup Language',
              'Hyperlinks and Text Markup Language',
            ],
            correctAnswer: 0,
            explanation: 'HTML stands for HyperText Markup Language.',
          },
          {
            question: 'Which tag is used for the largest heading?',
            options: ['<h6>', '<heading>', '<h1>', '<head>'],
            correctAnswer: 2,
            explanation: 'The <h1> tag is used for the largest heading, with <h6> being the smallest.',
          },
        ],
      },
      {
        day: 2,
        title: 'HTML Forms and Input',
        videoUrl: 'https://www.youtube.com/embed/fNcJuPIZ2WE',
        videoDescription: 'Create interactive forms with various input types.',
        notes: [
          {
            heading: 'Form Elements',
            content: 'Forms collect user input and send it to a server for processing.',
            codeExample: `<form action="/submit" method="post">\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name">\n    <button type="submit">Submit</button>\n</form>`,
          },
          {
            heading: 'Input Types',
            content: 'HTML5 provides various input types like text, email, password, number, date, and more.',
            codeExample: `<input type="email" placeholder="Enter email">\n<input type="password" placeholder="Password">\n<input type="number" min="1" max="100">`,
          },
        ],
        mcqs: [
          {
            question: 'Which attribute specifies where to send form data?',
            options: ['method', 'action', 'src', 'href'],
            correctAnswer: 1,
            explanation: 'The action attribute specifies the URL where form data should be sent.',
          },
          {
            question: 'Which input type is used for email addresses?',
            options: ['type="text"', 'type="mail"', 'type="email"', 'type="address"'],
            correctAnswer: 2,
            explanation: 'The type="email" attribute validates email address format.',
          },
        ],
      },
    ],
  },
  {
    id: 'css',
    name: 'CSS Styling',
    description: 'Style and design beautiful web pages with CSS3',
    icon: '🎨',
    progress: 45,
    lessons: 25,
    duration: '5 weeks',
    content: [
      {
        day: 1,
        title: 'CSS Basics',
        videoUrl: 'https://www.youtube.com/embed/yfoY53QXEnI',
        videoDescription: 'Learn CSS selectors, properties, and values to style your web pages.',
        notes: [
          {
            heading: 'What is CSS?',
            content: 'CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, and positioning.',
          },
          {
            heading: 'CSS Selectors',
            content: 'Selectors target HTML elements to apply styles. Common selectors include element, class, and ID selectors.',
            codeExample: `/* Element selector */\np {\n    color: blue;\n}\n\n/* Class selector */\n.highlight {\n    background: yellow;\n}\n\n/* ID selector */\n#header {\n    font-size: 24px;\n}`,
          },
          {
            heading: 'Colors and Backgrounds',
            content: 'Apply colors using names, hex codes, RGB, or HSL values.',
            codeExample: `body {\n    background-color: #f0f0f0;\n    color: rgb(51, 51, 51);\n}\n\n.box {\n    background: linear-gradient(to right, #667eea, #764ba2);\n}`,
          },
        ],
        mcqs: [
          {
            question: 'What does CSS stand for?',
            options: [
              'Creative Style Sheets',
              'Cascading Style Sheets',
              'Computer Style Sheets',
              'Colorful Style Sheets',
            ],
            correctAnswer: 1,
            explanation: 'CSS stands for Cascading Style Sheets.',
          },
          {
            question: 'Which symbol is used for class selectors?',
            options: ['#', '.', '*', '@'],
            correctAnswer: 1,
            explanation: 'The dot (.) symbol is used to target class selectors in CSS.',
          },
        ],
      },
      {
        day: 2,
        title: 'Flexbox Layout',
        videoUrl: 'https://www.youtube.com/embed/JJSoEo8JSnc',
        videoDescription: 'Master Flexbox for creating flexible and responsive layouts.',
        notes: [
          {
            heading: 'Introduction to Flexbox',
            content: 'Flexbox is a one-dimensional layout method for arranging items in rows or columns.',
            codeExample: `.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}`,
          },
          {
            heading: 'Flex Properties',
            content: 'Control the size and growth of flex items with flex-grow, flex-shrink, and flex-basis.',
            codeExample: `.item {\n    flex: 1;\n    /* Equivalent to: flex-grow: 1; flex-shrink: 1; flex-basis: 0%; */\n}`,
          },
        ],
        mcqs: [
          {
            question: 'Which property creates a flex container?',
            options: ['flex-container', 'display: flex', 'flexbox', 'flex: true'],
            correctAnswer: 1,
            explanation: 'display: flex creates a flex container and enables flexbox layout.',
          },
          {
            question: 'Which property aligns items along the main axis?',
            options: ['align-items', 'justify-content', 'align-content', 'flex-align'],
            correctAnswer: 1,
            explanation: 'justify-content aligns items along the main axis (horizontal by default).',
          },
        ],
      },
    ],
  },
  {
    id: 'sql',
    name: 'SQL Database',
    description: 'Query and manage databases with SQL',
    icon: '🗄️',
    progress: 20,
    lessons: 28,
    duration: '6 weeks',
    content: [
      {
        day: 1,
        title: 'Introduction to SQL',
        videoUrl: 'https://www.youtube.com/embed/HXV3zeQKqGY',
        videoDescription: 'Learn database fundamentals and basic SQL queries.',
        notes: [
          {
            heading: 'What is SQL?',
            content: 'SQL (Structured Query Language) is used to communicate with databases. It can retrieve, insert, update, and delete data.',
          },
          {
            heading: 'SELECT Statement',
            content: 'The SELECT statement retrieves data from database tables.',
            codeExample: `SELECT * FROM users;\n\nSELECT name, email FROM users WHERE age > 18;`,
          },
          {
            heading: 'Filtering with WHERE',
            content: 'Use WHERE clause to filter records based on conditions.',
            codeExample: `SELECT * FROM products WHERE price > 50 AND category = 'Electronics';`,
          },
        ],
        mcqs: [
          {
            question: 'What does SQL stand for?',
            options: [
              'Structured Query Language',
              'Simple Question Language',
              'Server Query Language',
              'Standard Query Language',
            ],
            correctAnswer: 0,
            explanation: 'SQL stands for Structured Query Language.',
          },
          {
            question: 'Which clause is used to filter results?',
            options: ['FILTER', 'WHERE', 'HAVING', 'SELECT'],
            correctAnswer: 1,
            explanation: 'The WHERE clause filters records based on specified conditions.',
          },
        ],
      },
      {
        day: 2,
        title: 'INSERT, UPDATE, DELETE',
        videoUrl: 'https://www.youtube.com/embed/Cz3WcZLRaWc',
        videoDescription: 'Learn how to modify database data with INSERT, UPDATE, and DELETE statements.',
        notes: [
          {
            heading: 'INSERT Statement',
            content: 'Add new records to a table.',
            codeExample: `INSERT INTO users (name, email, age)\nVALUES ('John Doe', 'john@example.com', 25);`,
          },
          {
            heading: 'UPDATE Statement',
            content: 'Modify existing records in a table.',
            codeExample: `UPDATE users\nSET age = 26\nWHERE name = 'John Doe';`,
          },
          {
            heading: 'DELETE Statement',
            content: 'Remove records from a table.',
            codeExample: `DELETE FROM users\nWHERE age < 18;`,
          },
        ],
        mcqs: [
          {
            question: 'Which statement adds new data to a table?',
            options: ['ADD', 'INSERT', 'CREATE', 'APPEND'],
            correctAnswer: 1,
            explanation: 'The INSERT statement adds new records to a database table.',
          },
          {
            question: 'What happens if you omit WHERE clause in DELETE?',
            options: [
              'Error occurs',
              'Nothing happens',
              'All records are deleted',
              'Only first record is deleted',
            ],
            correctAnswer: 2,
            explanation: 'Without a WHERE clause, DELETE removes all records from the table.',
          },
        ],
      },
    ],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Add interactivity to web pages with JavaScript',
    icon: '⚡',
    progress: 50,
    lessons: 35,
    duration: '10 weeks',
    content: [
      {
        day: 1,
        title: 'JavaScript Basics',
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        videoDescription: 'Introduction to JavaScript variables, data types, and operators.',
        notes: [
          {
            heading: 'What is JavaScript?',
            content: 'JavaScript is a programming language that enables interactive web pages. It runs in the browser and on servers (Node.js).',
          },
          {
            heading: 'Variables',
            content: 'Declare variables using let, const, or var.',
            codeExample: `let name = "Alice";\nconst age = 25;\nvar isStudent = true;`,
          },
          {
            heading: 'Functions',
            content: 'Functions are reusable blocks of code.',
            codeExample: `function greet(name) {\n    return \`Hello, \${name}!\`;\n}\n\nconsole.log(greet("Alice"));`,
          },
        ],
        mcqs: [
          {
            question: 'Which keyword declares a constant variable?',
            options: ['var', 'let', 'const', 'constant'],
            correctAnswer: 2,
            explanation: 'The const keyword declares a constant variable that cannot be reassigned.',
          },
          {
            question: 'How do you write a comment in JavaScript?',
            options: ['<!-- comment -->', '// comment', '# comment', '/* comment */'],
            correctAnswer: 1,
            explanation: 'Use // for single-line comments and /* */ for multi-line comments in JavaScript.',
          },
        ],
      },
    ],
  },
  {
    id: 'react',
    name: 'React Framework',
    description: 'Build modern web applications with React',
    icon: '⚛️',
    progress: 15,
    lessons: 40,
    duration: '12 weeks',
    content: [
      {
        day: 1,
        title: 'Introduction to React',
        videoUrl: 'https://www.youtube.com/embed/Ke90Tje7VS0',
        videoDescription: 'Learn React fundamentals including components, props, and state.',
        notes: [
          {
            heading: 'What is React?',
            content: 'React is a JavaScript library for building user interfaces. It uses a component-based architecture.',
          },
          {
            heading: 'Components',
            content: 'Components are reusable building blocks of React applications.',
            codeExample: `function Welcome(props) {\n    return <h1>Hello, {props.name}</h1>;\n}\n\nexport default Welcome;`,
          },
          {
            heading: 'JSX',
            content: 'JSX is a syntax extension that allows writing HTML-like code in JavaScript.',
            codeExample: `const element = <h1>Hello, World!</h1>;`,
          },
        ],
        mcqs: [
          {
            question: 'What is JSX?',
            options: [
              'A JavaScript framework',
              'A syntax extension for JavaScript',
              'A CSS preprocessor',
              'A database query language',
            ],
            correctAnswer: 1,
            explanation: 'JSX is a syntax extension that allows writing HTML-like code in JavaScript.',
          },
          {
            question: 'How do you pass data to a component?',
            options: ['state', 'props', 'params', 'arguments'],
            correctAnswer: 1,
            explanation: 'Props (properties) are used to pass data from parent to child components.',
          },
        ],
      },
    ],
  },
];
