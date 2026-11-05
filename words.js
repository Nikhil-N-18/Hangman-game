/**
 * Word Guessing Game - Master Word Database
 * Total Questions: 3123 (Minimum 500+ questions per category)
 *
 * Categories:
 * - Programming (587 questions)
 * - Technology (505 questions)
 * - Animals (503 questions)
 * - Fruits & Botany (505 questions)
 * - Sports & Athletics (512 questions)
 * - General Knowledge (511 questions)
 *
 * Difficulty Tiers:
 * - Easy: 3-5 letters
 * - Medium: 6-8 letters
 * - Hard: 9+ letters
 */

window.WORD_DATABASE = {
  "programming": {
    "easy": [
      {
        "word": "JAVA",
        "category": "Programming Language",
        "hint": "Object-oriented language famous for 'Write Once, Run Anywhere'.",
        "extraHint": "Compiles to bytecode executed on the Java Virtual Machine."
      },
      {
        "word": "RUST",
        "category": "Systems Language",
        "hint": "Fast, memory-safe language with zero-cost abstractions and no garbage collection.",
        "extraHint": "Employs an innovative borrow checker compiler system."
      },
      {
        "word": "RUBY",
        "category": "Dynamic Language",
        "hint": "Human-centric language designed by Yukihiro Matsumoto for programmer joy.",
        "extraHint": "Powers the renowned Ruby on Rails web framework."
      },
      {
        "word": "HTML",
        "category": "Web Standard",
        "hint": "The foundational markup language creating web page document structures.",
        "extraHint": "Uses tags like div, span, and p to structure hypertext."
      },
      {
        "word": "CSS",
        "category": "Web Styling",
        "hint": "Style sheet language used for designing layouts, colors, and visual animations.",
        "extraHint": "Powers modern CSS Grid, Flexbox, transitions, and media queries."
      },
      {
        "word": "SQL",
        "category": "Database Language",
        "hint": "Standard query language for storing and managing relational database tables.",
        "extraHint": "Uses declarative keywords like SELECT, JOIN, WHERE, and GROUP BY."
      },
      {
        "word": "PHP",
        "category": "Server Scripting",
        "hint": "Popular server-side scripting language powering WordPress and Drupal.",
        "extraHint": "Executes on servers to generate dynamic HTML output for browsers."
      },
      {
        "word": "SWIFT",
        "category": "Mobile Ecosystem",
        "hint": "Apple's modern programming language for building iOS and macOS apps.",
        "extraHint": "Replaced Objective-C with cleaner syntax and ARC memory management."
      },
      {
        "word": "DART",
        "category": "Client Frameworks",
        "hint": "Client-optimized language used by the cross-platform Flutter framework.",
        "extraHint": "Supports both JIT compilation for hot reload and AOT compilation."
      },
      {
        "word": "PERL",
        "category": "Scripting Language",
        "hint": "High-level scripting language renowned for text processing and regex.",
        "extraHint": "Created by Larry Wall in 1987 as a Unix scripting tool."
      },
      {
        "word": "LISP",
        "category": "Historic Language",
        "hint": "The second-oldest high-level language, pioneering prefix notation and macros.",
        "extraHint": "Invented by John McCarthy in 1958; uses nested parentheses."
      },
      {
        "word": "SCALA",
        "category": "JVM Language",
        "hint": "Multi-paradigm language integrating object-oriented and functional styles.",
        "extraHint": "Runs on the JVM and inter-operates smoothly with existing Java."
      },
      {
        "word": "JULIA",
        "category": "Scientific Computing",
        "hint": "High-performance language designed for numerical and scientific computing.",
        "extraHint": "Approaches C execution speed using multi-dispatch JIT compilation."
      },
      {
        "word": "COBOL",
        "category": "Legacy Business",
        "hint": "Ancient compiled language widely used in legacy banking and mainframe systems.",
        "extraHint": "Stands for Common Business-Oriented Language; designed in 1959."
      },
      {
        "word": "BASIC",
        "category": "Historical Language",
        "hint": "Beginner-friendly language created in 1964 at Dartmouth College.",
        "extraHint": "Stands for Beginner's All-purpose Symbolic Instruction Code."
      },
      {
        "word": "ADA",
        "category": "Mission-Critical",
        "hint": "Structured, statically typed language used extensively in avionics and defense.",
        "extraHint": "Named after Ada Lovelace; emphasizes safety and strong typing."
      },
      {
        "word": "ELM",
        "category": "Front-End Functional",
        "hint": "Purely functional language that compiles to JavaScript for building web user interfaces.",
        "extraHint": "Known for zero runtime exceptions and friendly compiler errors."
      },
      {
        "word": "CPP",
        "category": "Systems Programming",
        "hint": "General-purpose programming language developed as an extension of C with classes.",
        "extraHint": "Created by Bjarne Stroustrup in 1979; powers high-performance engines."
      },
      {
        "word": "ZIG",
        "category": "Modern Systems",
        "hint": "General-purpose systems programming language designed to replace C.",
        "extraHint": "Features compile-time code execution and no hidden control flow."
      },
      {
        "word": "NIM",
        "category": "Expressive Systems",
        "hint": "Statically typed compiled language that compiles down to C, C++, or JavaScript.",
        "extraHint": "Combines Python-like clean syntax with native binary speed."
      },
      {
        "word": "LUA",
        "category": "Embedded Scripting",
        "hint": "Lightweight, embeddable scripting language widely used in video game development.",
        "extraHint": "Famous for powering game engines like Roblox and World of Warcraft addons."
      },
      {
        "word": "VBA",
        "category": "Office Automation",
        "hint": "Event-driven programming language developed to automate Microsoft Office apps.",
        "extraHint": "Stands for Visual Basic for Applications; automates Excel macros."
      },
      {
        "word": "OCAML",
        "category": "Functional Systems",
        "hint": "General-purpose industrial-strength language extending the Caml dialect.",
        "extraHint": "Used heavily in financial quantitative trading and compiler design."
      },
      {
        "word": "TCL",
        "category": "Command Scripting",
        "hint": "High-level, general-purpose interpreted dynamic language created by John Ousterhout.",
        "extraHint": "Commonly paired with the Tk graphical user interface toolkit."
      },
      {
        "word": "AWK",
        "category": "Text Processing",
        "hint": "Domain-specific language designed for text processing and data extraction in Unix.",
        "extraHint": "Named after authors Alfred Aho, Peter Weinberger, and Brian Kernighan."
      },
      {
        "word": "SED",
        "category": "Stream Editor",
        "hint": "Unix utility that parses and transforms text using simple programming syntax.",
        "extraHint": "Specializes in search, find-and-replace, and line manipulation."
      },
      {
        "word": "VALA",
        "category": "GObject Language",
        "hint": "Object-oriented language whose compiler generates C code using the GObject system.",
        "extraHint": "Designed to make GNOME desktop application programming simpler."
      },
      {
        "word": "HACK",
        "category": "Type-Checked PHP",
        "hint": "Programming language developed by Meta as a typed dialect of PHP.",
        "extraHint": "Runs on the HipHop Virtual Machine (HHVM) with fast typing."
      },
      {
        "word": "APL",
        "category": "Array Programming",
        "hint": "Pioneering array-oriented programming language utilizing mathematical symbols.",
        "extraHint": "Created in the 1960s by Kenneth E. Iverson for mathematical notation."
      },
      {
        "word": "FORTH",
        "category": "Stack-Based Language",
        "hint": "Interactive stack-oriented language and operating environment designed by Chuck Moore.",
        "extraHint": "Uses reverse Polish postfix notation to manage data stacks."
      },
      {
        "word": "LOGO",
        "category": "Educational Language",
        "hint": "Educational programming language designed in 1967 famous for turtle graphics.",
        "extraHint": "Taught generations of children programming via moving screen turtles."
      },
      {
        "word": "VHDL",
        "category": "Hardware Description",
        "hint": "Hardware description language used in electronic design automation for FPGAs.",
        "extraHint": "Stands for VHSIC Hardware Description Language."
      },
      {
        "word": "CUDA",
        "category": "GPU Computing",
        "hint": "Parallel computing platform and API model created by Nvidia for graphics processing.",
        "extraHint": "Allows developers to harness GPU cores for high performance algorithms."
      },
      {
        "word": "GLSL",
        "category": "Shading Language",
        "hint": "High-level shading language based on the C syntax used in OpenGL.",
        "extraHint": "Executes directly on graphics hardware for 3D vertex and fragment shaders."
      },
      {
        "word": "HLSL",
        "category": "DirectX Shading",
        "hint": "High-level shading language developed by Microsoft for the Direct3D pipeline.",
        "extraHint": "Used to program custom graphics pipelines in Windows games."
      },
      {
        "word": "ARRAY",
        "category": "Data Structure",
        "hint": "Collection of elements stored at contiguous memory locations.",
        "extraHint": "Allows constant time O(1) random access via integer index offsets."
      },
      {
        "word": "STACK",
        "category": "Data Structure",
        "hint": "Linear data structure following the Last-In First-Out (LIFO) access principle.",
        "extraHint": "Provides push and pop operations; fundamental to function call stacks."
      },
      {
        "word": "QUEUE",
        "category": "Data Structure",
        "hint": "Linear collection following the First-In First-Out (FIFO) access order.",
        "extraHint": "Commonly used in print spools, breadth-first search, and task buffers."
      },
      {
        "word": "DEQUE",
        "category": "Data Structure",
        "hint": "Double-ended queue allowing insertion and deletion at both ends.",
        "extraHint": "Supports both FIFO queue and LIFO stack operations efficiently."
      },
      {
        "word": "HEAP",
        "category": "Data Structure",
        "hint": "Specialized tree-based data structure satisfying the heap priority property.",
        "extraHint": "Commonly implemented as a binary heap to power priority queues."
      },
      {
        "word": "TREE",
        "category": "Data Structure",
        "hint": "Non-linear hierarchical data structure consisting of connected nodes.",
        "extraHint": "Features a single root node with child nodes connected via edges."
      },
      {
        "word": "GRAPH",
        "category": "Data Structure",
        "hint": "Non-linear structure composed of a set of vertices linked by edges.",
        "extraHint": "Used to model social networks, road maps, and web link topologies."
      },
      {
        "word": "TRIE",
        "category": "Data Structure",
        "hint": "Tree-like search data structure used to store and retrieve keys in strings.",
        "extraHint": "Also known as a digital tree or prefix tree; ideal for autocomplete."
      },
      {
        "word": "UNION",
        "category": "Memory Layout",
        "hint": "Data type storing differing variables within the exact same allocated memory space.",
        "extraHint": "Occupies only as much memory as its single largest constituent member."
      },
      {
        "word": "ENUM",
        "category": "Type System",
        "hint": "Distinct data type consisting of a set of named integral constants.",
        "extraHint": "Enhances code clarity by replacing magic numbers with meaningful names."
      },
      {
        "word": "TUPLE",
        "category": "Data Structure",
        "hint": "Finite ordered list of elements, typically immutable in functional languages.",
        "extraHint": "Useful for returning multiple values from a function simultaneously."
      },
      {
        "word": "FLOAT",
        "category": "Numeric Type",
        "hint": "Numeric data type representing real numbers with fractional decimal points.",
        "extraHint": "Complies with the IEEE 754 standard for floating-point arithmetic."
      },
      {
        "word": "BTREE",
        "category": "Disk Tree",
        "hint": "Self-balancing multiway search tree optimized for systems writing large memory blocks.",
        "extraHint": "Standard indexing architecture used by most modern relational database engines."
      },
      {
        "word": "SLICE",
        "category": "Sub-Array",
        "hint": "Dynamically sized view into an underlying array without copying elements.",
        "extraHint": "Extensively used in Go, Rust, and Python for efficient slicing."
      },
      {
        "word": "BLOB",
        "category": "Binary Data",
        "hint": "Binary Large Object storing unstructured multimedia or raw binary chunks.",
        "extraHint": "Used in databases to store images, audio files, and compiled code assets."
      },
      {
        "word": "BYTE",
        "category": "Memory Unit",
        "hint": "Standard unit of digital storage capacity consisting of 8 contiguous bits.",
        "extraHint": "Capable of storing 256 distinct state combinations from 0x00 to 0xFF."
      },
      {
        "word": "LONG",
        "category": "Integral Type",
        "hint": "Primitive integer data type designed to hold wider numeric values than standard int.",
        "extraHint": "Typically allocated 64 bits of storage in 64-bit operating systems."
      },
      {
        "word": "RADIX",
        "category": "Number Base",
        "hint": "The base or number of unique digits used to represent numbers in a numeral system.",
        "extraHint": "Decimal has a radix of 10, whereas hexadecimal has a radix of 16."
      },
      {
        "word": "JSON",
        "category": "Data Interchange",
        "hint": "Lightweight human-readable data format based on JavaScript object syntax.",
        "extraHint": "Universally adopted as the standard serialization format for web APIs."
      },
      {
        "word": "XML",
        "category": "Markup Language",
        "hint": "Extensible markup language defining a set of rules for encoding documents.",
        "extraHint": "Utilizes user-defined nested tags; widely used in SOAP and RSS feeds."
      },
      {
        "word": "YAML",
        "category": "Configuration",
        "hint": "Human-friendly data serialization standard commonly used for configuration files.",
        "extraHint": "Relies strictly on whitespace indentation hierarchy without curly brackets."
      },
      {
        "word": "REST",
        "category": "Web Architecture",
        "hint": "Architectural style for network APIs using stateless standard HTTP verbs.",
        "extraHint": "Stands for Representational State Transfer; authored by Roy Fielding."
      },
      {
        "word": "GRPC",
        "category": "RPC Framework",
        "hint": "High-performance open source RPC framework developed by Google using HTTP/2.",
        "extraHint": "Serializes compact payload messages using Protocol Buffers."
      },
      {
        "word": "HTTP",
        "category": "Web Protocol",
        "hint": "Foundational application layer protocol powering data exchange on the World Wide Web.",
        "extraHint": "Stands for Hypertext Transfer Protocol; originally invented by Tim Berners-Lee."
      },
      {
        "word": "HTTPS",
        "category": "Secure Web",
        "hint": "Secure version of HTTP encrypted using Transport Layer Security (TLS).",
        "extraHint": "Protects sensitive web traffic against eavesdropping and man-in-the-middle attacks."
      },
      {
        "word": "TCP",
        "category": "Transport Protocol",
        "hint": "Reliable, connection-oriented transport protocol guaranteeing packet ordering.",
        "extraHint": "Stands for Transmission Control Protocol; features acknowledgments and retransmission."
      },
      {
        "word": "UDP",
        "category": "Transport Protocol",
        "hint": "Lightweight, connectionless transport protocol with no delivery guarantees.",
        "extraHint": "Stands for User Datagram Protocol; minimizes latency in video streaming."
      },
      {
        "word": "AJAX",
        "category": "Web Technique",
        "hint": "Set of web development techniques creating asynchronous web client requests.",
        "extraHint": "Enables updating web pages dynamically without reloading the entire page."
      },
      {
        "word": "CORS",
        "category": "Web Security",
        "hint": "HTTP-header based mechanism enabling servers to restrict cross-origin access.",
        "extraHint": "Stands for Cross-Origin Resource Sharing; enforced by web browsers."
      },
      {
        "word": "DOM",
        "category": "Browser Standard",
        "hint": "Programming interface representing the structured tree hierarchy of web documents.",
        "extraHint": "Stands for Document Object Model; manipulated dynamically via JavaScript."
      },
      {
        "word": "SVG",
        "category": "Vector Graphics",
        "hint": "XML-based markup standard for describing scalable two-dimensional vector images.",
        "extraHint": "Stands for Scalable Vector Graphics; retains crisp resolution at any scale."
      },
      {
        "word": "VITE",
        "category": "Build Tool",
        "hint": "Next-generation frontend tooling offering fast development server startup.",
        "extraHint": "Created by Evan You; harnesses native ES modules during development."
      },
      {
        "word": "BABEL",
        "category": "Transpiler",
        "hint": "Toolchain used to transpile modern ECMAScript into backwards-compatible JavaScript.",
        "extraHint": "Allows developers to safely adopt cutting-edge syntax across older browser versions."
      },
      {
        "word": "SASS",
        "category": "CSS Preprocessor",
        "hint": "CSS preprocessor adding variables, nested rules, mixins, and mathematical functions.",
        "extraHint": "Stands for Syntactically Awesome Style Sheets; compiles into standard CSS."
      },
      {
        "word": "REACT",
        "category": "UI Library",
        "hint": "Declarative component-based UI library developed and maintained by Meta.",
        "extraHint": "Popularized JSX syntax and an in-memory Virtual DOM reconciliation algorithm."
      },
      {
        "word": "VUE",
        "category": "Progressive Framework",
        "hint": "Progressive open source JavaScript framework created by Evan You.",
        "extraHint": "Features approachable single-file components and reactive data bindings."
      },
      {
        "word": "EMBER",
        "category": "Opinionated Framework",
        "hint": "Productive, battle-tested framework for building ambitious web applications.",
        "extraHint": "Emphasizes strict convention over configuration and robust URL routing."
      },
      {
        "word": "NUXT",
        "category": "Vue Framework",
        "hint": "Intuitive framework built atop Vue.js providing hybrid rendering and routing.",
        "extraHint": "Streamlines server-side rendering and static site generation for Vue apps."
      },
      {
        "word": "SOLID",
        "category": "Declarative UI",
        "hint": "Declarative JavaScript library for building user interfaces without a Virtual DOM.",
        "extraHint": "Uses fine-grained reactive primitives that update only specific modified text nodes."
      },
      {
        "word": "QWIK",
        "category": "Resumable UI",
        "hint": "Frontend framework designed for instant app loading via fine-grained lazy execution.",
        "extraHint": "Pioneered the resumability model; downloads zero JavaScript until user interaction."
      },
      {
        "word": "ASTRO",
        "category": "Content Framework",
        "hint": "All-in-one web framework designed for content-focused high-speed websites.",
        "extraHint": "Pioneered Islands Architecture, extracting zero-JS static HTML by default."
      },
      {
        "word": "FLASK",
        "category": "Python Microframework",
        "hint": "Lightweight WSGI Python microframework designed for quick API and app prototyping.",
        "extraHint": "Created by Armin Ronacher; gives developers freedom to select their own components."
      },
      {
        "word": "RAILS",
        "category": "Ruby Framework",
        "hint": "Full-stack web application framework following the MVC pattern in Ruby.",
        "extraHint": "Emphasizes convention over configuration and the DRY (Don't Repeat Yourself) doctrine."
      },
      {
        "word": "GIN",
        "category": "Go Web Framework",
        "hint": "High-performance HTTP web framework written in Go with a martini-like API.",
        "extraHint": "Features fast custom Radix tree routing and low memory allocations."
      },
      {
        "word": "PROXY",
        "category": "Network Gateway",
        "hint": "Intermediary server forwarding client requests to external destination servers.",
        "extraHint": "Used to mask IP addresses, bypass geo-restrictions, or cache outbound traffic."
      },
      {
        "word": "CDN",
        "category": "Distributed Cache",
        "hint": "Geographically distributed network of proxy servers delivering content quickly.",
        "extraHint": "Stands for Content Delivery Network; serves images and assets from nearby edge nodes."
      },
      {
        "word": "MYSQL",
        "category": "Relational Database",
        "hint": "World's most popular open-source relational database management system.",
        "extraHint": "Owned by Oracle; powers countless web apps via the LAMP software stack."
      },
      {
        "word": "REDIS",
        "category": "In-Memory Store",
        "hint": "In-memory data structure store used as a database, cache, and message broker.",
        "extraHint": "Supports data structures including strings, hashes, lists, sets, and hyperloglogs."
      },
      {
        "word": "NEOJ",
        "category": "Graph Database",
        "hint": "Native graph database designed to leverage data relationships as first-class citizens.",
        "extraHint": "Uses the expressive Cypher query language to traverse connected graph nodes."
      },
      {
        "word": "INDEX",
        "category": "Database Indexing",
        "hint": "Auxiliary data structure that improves the speed of database retrieval operations.",
        "extraHint": "Frequently implemented as B-trees or hash tables at the expense of write overhead."
      },
      {
        "word": "ACID",
        "category": "Database Principle",
        "hint": "Set of properties guaranteeing reliable database transaction processing.",
        "extraHint": "Stands for Atomicity, Consistency, Isolation, and Durability."
      },
      {
        "word": "QUERY",
        "category": "Data Request",
        "hint": "Formal request for information retrieved from a database table or collection.",
        "extraHint": "Expressed in declarative languages like SQL or structured query APIs."
      },
      {
        "word": "JOIN",
        "category": "Relational Clause",
        "hint": "SQL operation combining rows from two or more tables based on a related column.",
        "extraHint": "Includes INNER, LEFT, RIGHT, FULL OUTER, and CROSS join variants."
      },
      {
        "word": "ORM",
        "category": "Object Relational",
        "hint": "Programming technique converting data between incompatible type systems in databases.",
        "extraHint": "Stands for Object-Relational Mapping; allows interacting with tables as OOP models."
      },
      {
        "word": "ASYNC",
        "category": "Concurrency",
        "hint": "Programming paradigm where operations run independently of the main program flow.",
        "extraHint": "Prevents user interface freezes while awaiting long-running I/O or network tasks."
      },
      {
        "word": "AWAIT",
        "category": "Async Syntax",
        "hint": "Operator pausing async function execution until a Promise resolves or rejects.",
        "extraHint": "Enables writing asynchronous logic with the syntactic clarity of synchronous code."
      },
      {
        "word": "MUTEX",
        "category": "Mutual Exclusion",
        "hint": "Synchronization primitive preventing multiple threads from accessing shared memory simultaneously.",
        "extraHint": "Short for mutual exclusion; ensures only one thread executes a critical section."
      },
      {
        "word": "HELM",
        "category": "Kubernetes Packages",
        "hint": "Package manager for Kubernetes configuring complex applications via charts.",
        "extraHint": "Simplifies defining, installing, and upgrading complicated container deployments."
      },
      {
        "word": "JEST",
        "category": "Testing Framework",
        "hint": "Delightful JavaScript testing framework maintained by Meta with a focus on simplicity.",
        "extraHint": "Includes an integrated test runner, assertion library, and mock engine."
      },
      {
        "word": "MOCHA",
        "category": "Test Framework",
        "hint": "Feature-rich JavaScript test framework running on Node.js and in browsers.",
        "extraHint": "Provides serial test execution, descriptive reporting, and uncaught exception mapping."
      },
      {
        "word": "JUNIT",
        "category": "Java Testing",
        "hint": "Foundational unit testing framework for the Java programming language.",
        "extraHint": "Part of the xUnit family of test frameworks; pioneered annotation-based assertions."
      },
      {
        "word": "MOCK",
        "category": "Test Double",
        "hint": "Simulated object mimicking the behavior of real dependencies in controlled ways.",
        "extraHint": "Allows isolating units under test without calling external databases or APIs."
      },
      {
        "word": "STUB",
        "category": "Test Double",
        "hint": "Pre-programmed test double providing canned answers to calls made during test runs.",
        "extraHint": "Supplies static return values without recording interaction telemetry."
      },
      {
        "word": "LLVM",
        "category": "Compiler Core",
        "hint": "Modular and reusable compiler and toolchain technologies developed by Chris Lattner.",
        "extraHint": "Provides a universal intermediate representation and state-of-the-art optimizer."
      },
      {
        "word": "CLANG",
        "category": "C/C++ Compiler",
        "hint": "Modern C, C++, and Objective-C compiler front-end designed to work atop LLVM.",
        "extraHint": "Celebrated for fast compilation speeds and clear, expressive error diagnostics."
      },
      {
        "word": "GCC",
        "category": "GNU Compiler",
        "hint": "GNU Compiler Collection supporting C, C++, Fortran, Go, and other languages.",
        "extraHint": "Foundational open source compiler underpinning the entire GNU/Linux ecosystem."
      },
      {
        "word": "OAUTH",
        "category": "Open Authorization",
        "hint": "Open standard for access delegation commonly used to grant apps access to user accounts.",
        "extraHint": "Enables 'Log in with Google or GitHub' without sharing user account passwords."
      },
      {
        "word": "VIM",
        "category": "Terminal Editor",
        "hint": "Highly configurable text editor built to enable efficient text editing in shells.",
        "extraHint": "Famous for modal editing modes: normal, insert, visual, and command."
      },
      {
        "word": "EMACS",
        "category": "Extensible Editor",
        "hint": "Extensible, customizable, free/libre text editor and Lisp computing environment.",
        "extraHint": "Created by Richard Stallman; offers extensive customizability via Emacs Lisp."
      },
      {
        "word": "XCODE",
        "category": "Apple IDE",
        "hint": "Integrated development environment containing a suite of software development tools by Apple.",
        "extraHint": "Used to build, test, and package applications for iOS, macOS, watchOS, and tvOS."
      },
      {
        "word": "MAVEN",
        "category": "Java Build Tool",
        "hint": "Build automation tool used primarily for Java projects with standard POM XML files.",
        "extraHint": "Enforces standardized project structures and automatic artifact downloads."
      },
      {
        "word": "CARGO",
        "category": "Rust Manager",
        "hint": "The official Rust package manager and build system created by the Rust team.",
        "extraHint": "Downloads dependencies, compiles packages, runs unit tests, and uploads crates."
      },
      {
        "word": "NPM",
        "category": "Node Package Manager",
        "hint": "Default package manager for the JavaScript runtime environment Node.js.",
        "extraHint": "The largest software registry in the world, holding over two million packages."
      },
      {
        "word": "YARN",
        "category": "Fast Package Manager",
        "hint": "Fast, reliable, and secure dependency management tool created by Meta.",
        "extraHint": "Introduced deterministic lockfiles and parallelized package downloads."
      },
      {
        "word": "PNPM",
        "category": "Efficient Manager",
        "hint": "Fast, disk space efficient package manager using a content-addressable store.",
        "extraHint": "Links dependencies via hard links to eliminate duplicate storage across projects."
      },
      {
        "word": "PIP",
        "category": "Python Packages",
        "hint": "The standard package installer for Python libraries published on PyPI.",
        "extraHint": "Stands for 'Pip Installs Packages'; resolves and installs Python dependencies."
      },
      {
        "word": "GEM",
        "category": "Ruby Packages",
        "hint": "Standard package format and package manager for the Ruby programming language.",
        "extraHint": "Distributes reusable Ruby libraries and command-line programs via RubyGems."
      },
      {
        "word": "NUGET",
        "category": "NET Packages",
        "hint": "The package manager for .NET providing developers with access to shared libraries.",
        "extraHint": "Maintained by Microsoft for distributing compiled .NET assemblies and tools."
      },
      {
        "word": "APT",
        "category": "Debian Packages",
        "hint": "Package management system used by Debian, Ubuntu, and related Linux distributions.",
        "extraHint": "Resolves dependencies and installs compiled binary deb packages."
      },
      {
        "word": "RPM",
        "category": "RedHat Packages",
        "hint": "Package management system used by Red Hat Enterprise Linux, Fedora, and openSUSE.",
        "extraHint": "Manages the installation, verification, and upgrading of software archives."
      },
      {
        "word": "PRIMS",
        "category": "Minimum Spanning",
        "hint": "Greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.",
        "extraHint": "Grows a single spanning tree continuously from an arbitrary starting vertex."
      },
      {
        "word": "FLOYD",
        "category": "All-Pairs Paths",
        "hint": "Algorithm for finding shortest paths in a directed weighted graph between all pairs.",
        "extraHint": "Computes paths dynamically in O(V^3) time through matrix operations."
      },
      {
        "word": "BREAK",
        "category": "Control Flow",
        "hint": "Statement that terminates the innermost enclosing loop or switch construct.",
        "extraHint": "Immediately jumps execution to the statement directly following the loop."
      },
      {
        "word": "THROW",
        "category": "Error Handling",
        "hint": "Keyword signaling the occurrence of an exceptional error state in execution.",
        "extraHint": "Transfers control to the nearest matching catch block up the call stack."
      },
      {
        "word": "CATCH",
        "category": "Error Handling",
        "hint": "Block of code designated to intercept and handle thrown exception objects.",
        "extraHint": "Prevents program termination by responding gracefully to runtime errors."
      },
      {
        "word": "CONST",
        "category": "Type Qualifier",
        "hint": "Keyword declaring that a variable identifier cannot be reassigned after initialization.",
        "extraHint": "Signals immutability intent and allows compiler optimization."
      },
      {
        "word": "FINAL",
        "category": "Type Qualifier",
        "hint": "Java keyword preventing a variable reassignment, method override, or class subclassing.",
        "extraHint": "Guarantees that an implementation cannot be modified downstream."
      },
      {
        "word": "NEW",
        "category": "Memory Allocation",
        "hint": "Operator instantiating an object or allocating dynamic memory on the heap.",
        "extraHint": "Invokes the target class constructor to initialize the newly created object."
      },
      {
        "word": "LOCAL",
        "category": "Scope Tier",
        "hint": "Scope where variables are visible exclusively inside the declaring block or function.",
        "extraHint": "Allocated when the function begins and discarded when the scope exits."
      },
      {
        "word": "MACRO",
        "category": "Code Generation",
        "hint": "Rule or pattern specifying how a certain input sequence maps to replacement output.",
        "extraHint": "Processed by preprocessors in C or syntactic macro systems in Lisp and Rust."
      },
      {
        "word": "CHUNK",
        "category": "Code Splitting",
        "hint": "Segment of bundled code separated into a distinct file for asynchronous lazy loading.",
        "extraHint": "Optimizes initial web page loading performance by deferring unused scripts."
      },
      {
        "word": "TOKEN",
        "category": "Lexical Unit",
        "hint": "Categorized block of text representing a meaningful unit in source code.",
        "extraHint": "Produced by lexical analyzers; examples include identifiers, keywords, and operators."
      },
      {
        "word": "LEXER",
        "category": "Compiler Phase",
        "hint": "Component performing lexical analysis, transforming characters into a token stream.",
        "extraHint": "The first phase in a compiler pipeline, stripping whitespace and comments."
      },
      {
        "word": "PARAM",
        "category": "Function Definition",
        "hint": "Named variable listed in a function definition representing an expected input.",
        "extraHint": "Acts as a placeholder that receives the actual argument value passed at call time."
      },
      {
        "word": "UNARY",
        "category": "Operator Arity",
        "hint": "Operator that takes only a single operand to perform its computation.",
        "extraHint": "Examples include logical NOT (!), bitwise NOT (~), and negation (-)."
      },
      {
        "word": "OCTAL",
        "category": "Base Eight",
        "hint": "Positional numeral system with a base of 8 using only digits from 0 to 7.",
        "extraHint": "Historically utilized in computing and famously used for Unix file permissions like 755."
      },
      {
        "word": "ASCII",
        "category": "Character Code",
        "hint": "Historic 7-bit character encoding standard representing 128 specified characters.",
        "extraHint": "Stands for American Standard Code for Information Interchange; designed in 1963."
      },
      {
        "word": "GRID",
        "category": "CSS Layout",
        "hint": "Two-dimensional CSS layout system handling both rows and columns.",
        "extraHint": "Enables complex grid alignments without nested markup containers."
      },
      {
        "word": "VOID",
        "category": "Return Type",
        "hint": "Type indicating that a function yields no return value upon completion.",
        "extraHint": "Used in statically typed languages like C, C++, and Java."
      },
      {
        "word": "NULL",
        "category": "Empty Reference",
        "hint": "Literal representing the deliberate absence of any object value or address.",
        "extraHint": "Famously called the 'billion-dollar mistake' by Tony Hoare."
      },
      {
        "word": "SCOPE",
        "category": "Visibility Area",
        "hint": "Context in which variables and declarations are visible and accessible.",
        "extraHint": "Includes global, module, class, function, and block-level scopes."
      }
    ],
    "medium": [
      {
        "word": "GOLANG",
        "category": "Cloud Systems",
        "hint": "Fast concurrent language developed by engineers at Google.",
        "extraHint": "Features goroutines, channel synchronization, and rapid compilation."
      },
      {
        "word": "KOTLIN",
        "category": "Mobile Development",
        "hint": "Concise, modern language officially recommended by Google for Android.",
        "extraHint": "Developed by JetBrains; 100% interoperable with Java bytecode."
      },
      {
        "word": "PYTHON",
        "category": "General Purpose",
        "hint": "High-level language celebrated for readability, data science, and AI.",
        "extraHint": "Employs indentation syntax instead of curly braces."
      },
      {
        "word": "FORTRAN",
        "category": "Scientific Language",
        "hint": "Pioneering formula translating language designed for numeric computation.",
        "extraHint": "First created in 1957 by John Backus at IBM."
      },
      {
        "word": "ERLANG",
        "category": "Telecom & Concurrency",
        "hint": "General-purpose concurrent language designed for telecommunication switches.",
        "extraHint": "Built on the actor model; powers highly resilient systems."
      },
      {
        "word": "HASKELL",
        "category": "Functional Language",
        "hint": "Purely functional programming language with strong static typing and lazy evaluation.",
        "extraHint": "Named after logician Haskell Curry; forbids side effects."
      },
      {
        "word": "CLOJURE",
        "category": "Lisp on JVM",
        "hint": "Modern, dynamic, functional dialect of the Lisp language targeting the JVM.",
        "extraHint": "Emphasizes immutable data structures and software transactional memory."
      },
      {
        "word": "ELIXIR",
        "category": "Concurrent Systems",
        "hint": "Dynamic, functional language running on the Erlang BEAM virtual machine.",
        "extraHint": "Popularized by the Phoenix web framework for high concurrency."
      },
      {
        "word": "PASCAL",
        "category": "Historical Language",
        "hint": "Influential procedural language designed by Niklaus Wirth for teaching structured code.",
        "extraHint": "Popularized in the 1970s and 1980s via Turbo Pascal."
      },
      {
        "word": "MATLAB",
        "category": "Numerical Computing",
        "hint": "Proprietary multi-paradigm programming environment for matrix manipulation.",
        "extraHint": "Widely utilized across engineering universities and aerospace research."
      },
      {
        "word": "GROOVY",
        "category": "JVM Scripting",
        "hint": "Agile, dynamic language for the Java platform with concise scripting syntax.",
        "extraHint": "Often used in Apache Groovy, Gradle build scripts, and Jenkins."
      },
      {
        "word": "ASSEMBLY",
        "category": "Low-Level Language",
        "hint": "Human-readable symbolic representation of machine architecture instructions.",
        "extraHint": "Maps directly to CPU opcodes such as MOV, ADD, and JMP."
      },
      {
        "word": "SOLIDITY",
        "category": "Smart Contracts",
        "hint": "Object-oriented language designed for writing smart contracts on Ethereum.",
        "extraHint": "Compiles to Ethereum Virtual Machine (EVM) bytecode."
      },
      {
        "word": "FSHARP",
        "category": "Functional .NET",
        "hint": "Functional-first, cross-platform programming language in the .NET ecosystem.",
        "extraHint": "Offers type inference, pattern matching, and asynchronous workflows."
      },
      {
        "word": "CSHARP",
        "category": "Object-Oriented",
        "hint": "Modern general-purpose language developed by Microsoft as part of .NET.",
        "extraHint": "Created by Anders Hejlsberg; powers Unity games and enterprise apps."
      },
      {
        "word": "PROLOG",
        "category": "Logic Programming",
        "hint": "Logic programming language associated with computational linguistics and expert systems.",
        "extraHint": "Solves problems by evaluating facts, rules, and logic queries."
      },
      {
        "word": "SCHEME",
        "category": "Minimalist Lisp",
        "hint": "Minimalist dialect of the Lisp family developed by Guy Steele and Gerald Sussman.",
        "extraHint": "Emphasizes conceptual simplicity and hygienic macro expansion."
      },
      {
        "word": "CRYSTAL",
        "category": "Ruby-like Compiled",
        "hint": "General-purpose language with syntax heavily inspired by Ruby but statically typed.",
        "extraHint": "Compiles to efficient native code via an LLVM backend."
      },
      {
        "word": "SIMULA",
        "category": "First OOP Language",
        "hint": "First object-oriented programming language developed in the 1960s in Norway.",
        "extraHint": "Introduced objects, classes, subclasses, and virtual methods."
      },
      {
        "word": "RACKET",
        "category": "Modern Lisp",
        "hint": "Multi-paradigm language in the Lisp family designed for language creation.",
        "extraHint": "Includes extensive macro capabilities and graphical toolkits."
      },
      {
        "word": "COFFEE",
        "category": "Transpiled Language",
        "hint": "Transpiles into JavaScript to provide a more concise and readable syntax.",
        "extraHint": "Popularized features later adopted by modern ES6 JavaScript."
      },
      {
        "word": "VERILOG",
        "category": "Hardware Description",
        "hint": "Hardware description language used to model electronic systems and microchips.",
        "extraHint": "Used to verify digital circuits at register-transfer levels."
      },
      {
        "word": "OPENCL",
        "category": "Heterogeneous Compute",
        "hint": "Framework for writing programs that execute across heterogeneous CPU and GPU platforms.",
        "extraHint": "Maintained by the Khronos Group as an open industry standard."
      },
      {
        "word": "BYTECODE",
        "category": "Intermediate Code",
        "hint": "Form of instruction set designed for efficient execution by a software interpreter.",
        "extraHint": "Intermediate state between human source code and machine binaries."
      },
      {
        "word": "OPCODE",
        "category": "Machine Code",
        "hint": "Portion of a machine language instruction specifying the operation to be performed.",
        "extraHint": "Directly decoded by central processing units during fetch-execute cycles."
      },
      {
        "word": "MATRIX",
        "category": "Data Structure",
        "hint": "Rectangular two-dimensional array of elements arranged in rows and columns.",
        "extraHint": "Essential in 3D graphics transformations, machine learning, and physics."
      },
      {
        "word": "TENSOR",
        "category": "Data Structure",
        "hint": "Multi-dimensional geometric array of numeric values generalizing vectors.",
        "extraHint": "The core mathematical building block of deep learning frameworks."
      },
      {
        "word": "BITMAP",
        "category": "Data Structure",
        "hint": "Array of individual bits where each bit represents a boolean flag.",
        "extraHint": "Used for compact set representations, pixel storage, and disk allocators."
      },
      {
        "word": "VECTOR",
        "category": "Data Structure",
        "hint": "Dynamically resizing sequential array that expands automatically when filled.",
        "extraHint": "Commonly provided in standard libraries like C++ std::vector."
      },
      {
        "word": "RECORD",
        "category": "Data Structure",
        "hint": "Compound data structure grouping multiple fields of differing data types.",
        "extraHint": "Corresponds to a single row in relational database tables."
      },
      {
        "word": "BUFFER",
        "category": "Memory Region",
        "hint": "Physical memory storage used to temporarily hold data while in transit.",
        "extraHint": "Prevents data starvation or bottleneck stalls between devices."
      },
      {
        "word": "STRUCT",
        "category": "Composite Type",
        "hint": "User-defined composite type grouping variables under a single identifier in C.",
        "extraHint": "Organizes related properties sequentially in memory."
      },
      {
        "word": "STRING",
        "category": "Core Data Type",
        "hint": "Contiguous sequence of textual characters enclosed in quotes.",
        "extraHint": "Commonly encoded in modern applications using UTF-8 or UTF-16 formats."
      },
      {
        "word": "INTEGER",
        "category": "Numeric Type",
        "hint": "Fundamental data type representing whole numbers without fractional components.",
        "extraHint": "Can be signed or unsigned with fixed bit-widths such as 32 or 64."
      },
      {
        "word": "DOUBLE",
        "category": "Numeric Type",
        "hint": "Double-precision floating-point number occupying 64 bits of storage.",
        "extraHint": "Offers roughly 15 to 17 significant decimal digits of numeric precision."
      },
      {
        "word": "BOOLEAN",
        "category": "Logical Type",
        "hint": "Primitive data type that can hold only one of two logical states: true or false.",
        "extraHint": "Named after 19th-century English mathematician George Boole."
      },
      {
        "word": "POINTER",
        "category": "Memory Address",
        "hint": "Variable whose primary value holds the direct hardware memory address of another.",
        "extraHint": "Accessed and manipulated using reference and dereference operators in C."
      },
      {
        "word": "OBJECT",
        "category": "Object-Oriented",
        "hint": "Instance of a class containing bundled data attributes and executable methods.",
        "extraHint": "The central building block of object-oriented programming designs."
      },
      {
        "word": "HASHMAP",
        "category": "Data Structure",
        "hint": "Key-value pair map implementation utilizing an underlying hash table algorithm.",
        "extraHint": "Provides fast lookups and updates keyed by arbitrary hashable objects."
      },
      {
        "word": "SKIPLIST",
        "category": "Data Structure",
        "hint": "Probabilistic data structure maintaining multiple layers of linked node express lanes.",
        "extraHint": "Allows fast O(log n) lookups without complex tree rebalancing rotations."
      },
      {
        "word": "REDBLACK",
        "category": "Balanced Tree",
        "hint": "Self-balancing binary search tree where each node carries a color bit property.",
        "extraHint": "Guarantees logarithmic search times by preventing subtree skewing."
      },
      {
        "word": "AVLTREE",
        "category": "Balanced Tree",
        "hint": "First self-balancing binary search tree discovered, maintaining strict heights.",
        "extraHint": "Invented by Georgy Adelson-Velsky and Evgenii Landis in 1962."
      },
      {
        "word": "QUADTREE",
        "category": "Spatial Index",
        "hint": "Tree data structure where each internal node branches into exactly four quadrants.",
        "extraHint": "Widely utilized in 2D collision detection and spatial image compression."
      },
      {
        "word": "OCTREE",
        "category": "Spatial Index",
        "hint": "Tree data structure where each node subdivides 3D space into eight octants.",
        "extraHint": "Indispensable in 3D game engines, ray tracing, and spatial partitioning."
      },
      {
        "word": "LOOKUP",
        "category": "Search Pattern",
        "hint": "Systematic operation retrieving specific data matching a designated identifier.",
        "extraHint": "Can refer to database indexing, dictionary queries, or hash lookups."
      },
      {
        "word": "BIGINT",
        "category": "Arbitrary Precision",
        "hint": "Numeric data type able to represent arbitrarily massive integers without overflow.",
        "extraHint": "Essential in public-key cryptography and astronomical calculations."
      },
      {
        "word": "SYMBOL",
        "category": "Primitive Type",
        "hint": "Unique and immutable primitive identifier frequently used as object keys.",
        "extraHint": "Introduced in JavaScript ES6 to prevent accidental property collisions."
      },
      {
        "word": "NULLPTR",
        "category": "Pointers",
        "hint": "Literal representing a null pointer constant explicitly in modern C++.",
        "extraHint": "Avoids the type ambiguities historically associated with the NULL macro."
      },
      {
        "word": "DISJOINT",
        "category": "Set Partition",
        "hint": "Data structure tracking a partition of elements into non-overlapping subsets.",
        "extraHint": "Provides near constant time find and union operations with path compression."
      },
      {
        "word": "MULTISET",
        "category": "Collection Type",
        "hint": "Associative container that stores elements allowing duplicate value entries.",
        "extraHint": "Also called a bag; tracks frequencies of individual member keys."
      },
      {
        "word": "GRAPHQL",
        "category": "Query Language",
        "hint": "API query language and server runtime developed by Meta in 2012.",
        "extraHint": "Allows clients to request precisely the data fields they require in one call."
      },
      {
        "word": "COOKIE",
        "category": "Browser Storage",
        "hint": "Small piece of data stored in user browsers and sent back with subsequent requests.",
        "extraHint": "Used for session authentication, personalized preferences, and user tracking."
      },
      {
        "word": "SESSION",
        "category": "Server State",
        "hint": "Server-side state tracking user interactions across a series of web requests.",
        "extraHint": "Commonly referenced on client browsers via an encrypted session ID cookie."
      },
      {
        "word": "CANVAS",
        "category": "HTML5 Graphics",
        "hint": "HTML5 element used to draw dynamic 2D and 3D graphics on the fly via scripts.",
        "extraHint": "Powers interactive browser games, data visualizations, and image filters."
      },
      {
        "word": "WEBPACK",
        "category": "Module Bundler",
        "hint": "Static module bundler that compiles JavaScript modules into optimized bundles.",
        "extraHint": "Processes complex dependency graphs of JavaScript, CSS, and asset files."
      },
      {
        "word": "ROLLUP",
        "category": "Module Bundler",
        "hint": "Module bundler for JavaScript which compiles small pieces of code into libraries.",
        "extraHint": "Pioneered efficient ES module tree-shaking dead code elimination."
      },
      {
        "word": "PARCEL",
        "category": "Zero-Config Bundler",
        "hint": "Zero configuration build tool and module bundler with fast multi-core compilation.",
        "extraHint": "Automatically detects dependencies from HTML entry points."
      },
      {
        "word": "TAILWIND",
        "category": "CSS Framework",
        "hint": "Utility-first CSS framework packed with classes to build custom modern designs.",
        "extraHint": "Enables styling web components directly within HTML templates."
      },
      {
        "word": "ANGULAR",
        "category": "Web Framework",
        "hint": "TypeScript-based open source web application framework developed by Google.",
        "extraHint": "Features two-way data binding, dependency injection, and comprehensive tooling."
      },
      {
        "word": "SVELTE",
        "category": "Compiler Framework",
        "hint": "Component framework that shifts work into compile-time rather than browser run-time.",
        "extraHint": "Compiles components directly into tiny, surgical vanilla DOM manipulation code."
      },
      {
        "word": "NEXTJS",
        "category": "React Framework",
        "hint": "Full-stack React framework featuring server-side rendering and static export.",
        "extraHint": "Developed by Vercel; provides built-in routing, API routes, and image optimization."
      },
      {
        "word": "EXPRESS",
        "category": "Node Framework",
        "hint": "Minimalist and flexible web application framework for Node.js servers.",
        "extraHint": "Provides a robust set of features for routing and asynchronous middleware."
      },
      {
        "word": "NESTJS",
        "category": "Enterprise Node",
        "hint": "Progressive Node.js framework building efficient and scalable server applications.",
        "extraHint": "Combines TypeScript, object-oriented concepts, and functional reactive programming."
      },
      {
        "word": "FASTIFY",
        "category": "Fast Node",
        "hint": "Highly focused Node.js web framework providing low overhead and high throughput.",
        "extraHint": "Boasts exceptional performance, JSON schema validation, and plugin modularity."
      },
      {
        "word": "DJANGO",
        "category": "Python Framework",
        "hint": "Batteries-included high-level Python web framework encouraging rapid development.",
        "extraHint": "Includes a built-in admin panel, ORM, authentication, and form validation."
      },
      {
        "word": "FASTAPI",
        "category": "Modern Python",
        "hint": "High-performance Python web framework for building APIs with Python type hints.",
        "extraHint": "Generates interactive Swagger documentation automatically from Pydantic schemas."
      },
      {
        "word": "SPRING",
        "category": "Enterprise Java",
        "hint": "Inversion-of-control framework for modern enterprise Java applications.",
        "extraHint": "Simplifies dependency injection, database access, security, and cloud deployment."
      },
      {
        "word": "LARAVEL",
        "category": "PHP Framework",
        "hint": "Elegant PHP web framework featuring expressive syntax and robust tooling.",
        "extraHint": "Includes the Eloquent ORM, Artisan CLI, and Blade templating engine."
      },
      {
        "word": "ROUTER",
        "category": "Network & Web",
        "hint": "Mechanism directing incoming web requests to matching code controller handlers.",
        "extraHint": "Maps URL paths and HTTP methods to specific backend execution functions."
      },
      {
        "word": "PAYLOAD",
        "category": "Network Data",
        "hint": "The essential transmitted data carried inside a network packet or HTTP request body.",
        "extraHint": "Excludes overhead protocol headers, routing information, and checksums."
      },
      {
        "word": "ENDPOINT",
        "category": "API URL",
        "hint": "Specific digital address where an API receives requests for data resources.",
        "extraHint": "Typically formatted as a URL path paired with an expected HTTP method."
      },
      {
        "word": "POSTGRES",
        "category": "Relational Database",
        "hint": "Advanced open-source relational database emphasizing extensibility and SQL compliance.",
        "extraHint": "Supports JSON queries, full-text search, and foreign data wrappers."
      },
      {
        "word": "MARIADB",
        "category": "Open Source DB",
        "hint": "Community-developed fork of MySQL created by its original developers.",
        "extraHint": "Maintains high MySQL compatibility while adding modern performance storage engines."
      },
      {
        "word": "SQLITE",
        "category": "Embedded Database",
        "hint": "C-language library implementing a self-contained, serverless zero-config SQL engine.",
        "extraHint": "Stores the entire database in a single cross-platform disk file."
      },
      {
        "word": "ORACLE",
        "category": "Enterprise Database",
        "hint": "Multi-model relational database management system built for enterprise workloads.",
        "extraHint": "Known for robust clustering, high availability, and PL/SQL procedural extensions."
      },
      {
        "word": "MONGODB",
        "category": "Document Database",
        "hint": "Source-available document-oriented database using flexible JSON-like BSON records.",
        "extraHint": "Eliminates rigid schema constraints, scaling horizontally via sharding."
      },
      {
        "word": "COUCHDB",
        "category": "Document Store",
        "hint": "Open source database using JSON documents, HTTP APIs, and MapReduce queries.",
        "extraHint": "Features reliable multi-master masterless replication for distributed setups."
      },
      {
        "word": "DYNAMODB",
        "category": "Cloud Database",
        "hint": "Fully managed proprietary NoSQL database service provided by Amazon Web Services.",
        "extraHint": "Guarantees single-digit millisecond latency at any operational scale."
      },
      {
        "word": "BIGQUERY",
        "category": "Data Warehouse",
        "hint": "Serverless, cost-effective multicloud enterprise data warehouse by Google Cloud.",
        "extraHint": "Executes super-fast SQL queries across petabytes of data using Dremel technology."
      },
      {
        "word": "SPANNER",
        "category": "Globally Distributed",
        "hint": "Globally distributed NewSQL database service developed by Google.",
        "extraHint": "Combines relational database ACID transactions with NoSQL horizontal scalability."
      },
      {
        "word": "SHARDING",
        "category": "Horizontal Scale",
        "hint": "Database partitioning architecture dividing large tables horizontally across nodes.",
        "extraHint": "Distributes storage and computational load across separate database servers."
      },
      {
        "word": "ROLLBACK",
        "category": "Transaction Control",
        "hint": "Operation returning the database to a prior state by undoing uncommitted changes.",
        "extraHint": "Triggered automatically when a transaction encounters an error or integrity violation."
      },
      {
        "word": "COMMIT",
        "category": "Transaction Save",
        "hint": "Database command permanently recording all modifications performed in a transaction.",
        "extraHint": "Guarantees transaction durability so changes persist even through power outages."
      },
      {
        "word": "TRIGGER",
        "category": "Database Routine",
        "hint": "Procedural code automatically executed in response to designated table events.",
        "extraHint": "Fires upon specific INSERT, UPDATE, or DELETE operations to enforce business rules."
      },
      {
        "word": "PRISMA",
        "category": "Next-Gen ORM",
        "hint": "Next-generation Node.js and TypeScript ORM with auto-generated queries.",
        "extraHint": "Provides declarative schema modeling and fully type-safe database access."
      },
      {
        "word": "FACTORY",
        "category": "Design Pattern",
        "hint": "Creational pattern providing an interface for creating objects in a superclass.",
        "extraHint": "Allows subclasses to alter the exact type of objects that will be instantiated."
      },
      {
        "word": "BUILDER",
        "category": "Design Pattern",
        "hint": "Creational pattern separating complex object construction from its representation.",
        "extraHint": "Enables step-by-step assembly of complex objects with configurable parameters."
      },
      {
        "word": "ADAPTER",
        "category": "Design Pattern",
        "hint": "Structural pattern allowing incompatible interfaces to collaborate smoothly.",
        "extraHint": "Acts as an intermediary wrapper translating one interface into another."
      },
      {
        "word": "FACADE",
        "category": "Design Pattern",
        "hint": "Structural pattern providing a simplified interface to a complex subsystem.",
        "extraHint": "Shields client code from the convoluted details of underlying libraries."
      },
      {
        "word": "OBSERVER",
        "category": "Design Pattern",
        "hint": "Behavioral pattern where an object notifies multiple subscribers about state changes.",
        "extraHint": "Forms the basis of event-driven architectures and model-view frameworks."
      },
      {
        "word": "STRATEGY",
        "category": "Design Pattern",
        "hint": "Behavioral pattern defining a family of interchangeable algorithm implementations.",
        "extraHint": "Allows switching algorithms dynamically at runtime depending on client context."
      },
      {
        "word": "COMMAND",
        "category": "Design Pattern",
        "hint": "Behavioral pattern turning a request into a stand-alone object containing all data.",
        "extraHint": "Enables queuing requests, undo/redo capabilities, and deferred executions."
      },
      {
        "word": "ITERATOR",
        "category": "Design Pattern",
        "hint": "Behavioral pattern providing sequential traversal of a collection without exposing internals.",
        "extraHint": "Powers standard 'for-each' loops and custom iterable collection protocols."
      },
      {
        "word": "MEDIATOR",
        "category": "Design Pattern",
        "hint": "Behavioral pattern restricting direct communications between objects via an intermediary.",
        "extraHint": "Reduces chaotic dependencies between communicating components."
      },
      {
        "word": "MEMENTO",
        "category": "Design Pattern",
        "hint": "Behavioral pattern saving and restoring the previous state of an object.",
        "extraHint": "Enables implementing undo checkpoints without violating data encapsulation."
      },
      {
        "word": "VISITOR",
        "category": "Design Pattern",
        "hint": "Behavioral pattern separating algorithms from the data objects on which they operate.",
        "extraHint": "Allows adding new operations to existing class hierarchies without editing them."
      },
      {
        "word": "PIPELINE",
        "category": "Processing Pattern",
        "hint": "Chain of data-processing elements where the output of each element is the next's input.",
        "extraHint": "Facilitates streaming data transformations and functional composition."
      },
      {
        "word": "MONOLITH",
        "category": "Architecture",
        "hint": "Software application where all modular components are built into a single program.",
        "extraHint": "Contrasts with microservices; easier to debug initially but harder to scale teams."
      },
      {
        "word": "PROMISE",
        "category": "Async Value",
        "hint": "Object representing the eventual completion or failure of an asynchronous action.",
        "extraHint": "Features three states: pending, fulfilled, or rejected; chained via .then()."
      },
      {
        "word": "CALLBACK",
        "category": "Functional Flow",
        "hint": "Function passed as an argument into another function to be executed later.",
        "extraHint": "Can lead to 'callback hell' when nested deeply in asynchronous architectures."
      },
      {
        "word": "FUTURE",
        "category": "Concurrency",
        "hint": "Read-only placeholder variable representing an asynchronous computation result.",
        "extraHint": "Once completed, its value becomes accessible across parallel execution threads."
      },
      {
        "word": "REACTIVE",
        "category": "Programming Flow",
        "hint": "Declarative programming paradigm concerned with data streams and change propagation.",
        "extraHint": "Automatically recalculates downstream values whenever an observed dependency updates."
      },
      {
        "word": "DEADLOCK",
        "category": "Concurrency Bug",
        "hint": "Condition where two or more processes are unable to proceed because each holds a lock.",
        "extraHint": "Each process waits perpetually for a resource locked by the other participant."
      },
      {
        "word": "DOCKER",
        "category": "Containerization",
        "hint": "Platform packaging software and dependencies into lightweight isolated containers.",
        "extraHint": "Eliminates the 'it works on my machine' bug by containerizing environments."
      },
      {
        "word": "PODMAN",
        "category": "Daemonless Container",
        "hint": "Daemonless container engine for developing, managing, and running OCI containers.",
        "extraHint": "Provides rootless container execution without requiring an always-on background daemon."
      },
      {
        "word": "ANSIBLE",
        "category": "Automation Engine",
        "hint": "Radically simple IT automation engine automating cloud provisioning and config.",
        "extraHint": "Operates agentlessly over SSH using readable YAML configuration playbooks."
      },
      {
        "word": "JENKINS",
        "category": "Automation Server",
        "hint": "Open source automation server providing hundreds of plugins to support CI/CD.",
        "extraHint": "Automates building, testing, and deploying complex software engineering pipelines."
      },
      {
        "word": "GITHUB",
        "category": "Code Collaboration",
        "hint": "Cloud-based hosting service for software development and version control using Git.",
        "extraHint": "Acquired by Microsoft; hosts millions of open source projects and code repositories."
      },
      {
        "word": "GITLAB",
        "category": "DevSecOps Platform",
        "hint": "Complete open source DevOps platform delivered as a single comprehensive application.",
        "extraHint": "Combines Git repository hosting, issue tracking, and integrated CI/CD pipelines."
      },
      {
        "word": "ACTIONS",
        "category": "CI/CD Workflows",
        "hint": "Automation platform enabling custom workflows directly within GitHub repositories.",
        "extraHint": "Executes automated tests, linters, and cloud deployments on pull requests."
      },
      {
        "word": "GRAFANA",
        "category": "Visualization Tool",
        "hint": "Multi-platform open source analytics and interactive visualization web application.",
        "extraHint": "Generates customizable dashboards displaying charts, graphs, and system metrics."
      },
      {
        "word": "DATADOG",
        "category": "Observability SaaS",
        "hint": "Monitoring and analytics platform for cloud-scale infrastructure and applications.",
        "extraHint": "Provides end-to-end distributed tracing, log management, and network metrics."
      },
      {
        "word": "SENTRY",
        "category": "Error Monitoring",
        "hint": "Application monitoring platform helping developers track and resolve software crashes.",
        "extraHint": "Captures real-time stack traces, affected user counts, and errorbreadcrumbs."
      },
      {
        "word": "LOGSTASH",
        "category": "Data Pipeline",
        "hint": "Server-side data processing pipeline that ingests data from multiple sources.",
        "extraHint": "Parses, transforms, and ships log streams into targets like Elasticsearch."
      },
      {
        "word": "KIBANA",
        "category": "Log Visualization",
        "hint": "Frontend application that visualizes data indexed in Elasticsearch clusters.",
        "extraHint": "Forms the 'K' in the widespread open source ELK observability stack."
      },
      {
        "word": "HEROKU",
        "category": "Cloud Platform",
        "hint": "Cloud Platform as a Service (PaaS) enabling developers to deploy web apps easily.",
        "extraHint": "Pioneered Git-based application deployment using lightweight dyno containers."
      },
      {
        "word": "VERCEL",
        "category": "Frontend Cloud",
        "hint": "Cloud platform for frontend developers, providing instantaneous preview deployments.",
        "extraHint": "Specializes in Next.js, static assets, and global serverless edge functions."
      },
      {
        "word": "NETLIFY",
        "category": "Web Hosting",
        "hint": "Cloud hosting and serverless backend platform for web applications and static sites.",
        "extraHint": "Automates builds directly from Git commits with instant global CDN distribution."
      },
      {
        "word": "LAMBDA",
        "category": "Serverless Compute",
        "hint": "Event-driven, serverless computing platform provided by Amazon Web Services.",
        "extraHint": "Executes user code in response to events while automatically provisioning resources."
      },
      {
        "word": "INGRESS",
        "category": "Kubernetes Routing",
        "hint": "API object managing external access to services within a Kubernetes cluster.",
        "extraHint": "Provides load balancing, SSL termination, and name-based virtual hosting."
      },
      {
        "word": "ROLLOUT",
        "category": "Gradual Release",
        "hint": "Staged process of deploying an update across servers to minimize downtime.",
        "extraHint": "Allows monitoring system health metrics before routing full traffic to new versions."
      },
      {
        "word": "CANARY",
        "category": "Release Strategy",
        "hint": "Deployment technique where new code is exposed to a tiny subset of users first.",
        "extraHint": "Named after canaries in coal mines; detects bugs before broad deployment."
      },
      {
        "word": "COMPILER",
        "category": "System Program",
        "hint": "Computer program translating computer code written in one language into another.",
        "extraHint": "Translates human-readable source code directly into machine-executable binary."
      },
      {
        "word": "LINKER",
        "category": "Build Utility",
        "hint": "System program combining one or more object code files into a single executable binary.",
        "extraHint": "Resolves external function references and assigns memory addresses across object modules."
      },
      {
        "word": "LOADER",
        "category": "Operating System",
        "hint": "Part of an operating system responsible for loading programs and libraries into RAM.",
        "extraHint": "Allocates memory space and initializes base registers before program execution begins."
      },
      {
        "word": "PROFILER",
        "category": "Performance Tool",
        "hint": "Software analysis tool measuring the memory, CPU duration, and frequency of calls.",
        "extraHint": "Pinpoints software bottlenecks, memory leaks, and performance hotspots."
      },
      {
        "word": "DEBUGGER",
        "category": "Diagnostic Utility",
        "hint": "Specialized software tool used to test and eliminate bugs from target code.",
        "extraHint": "Allows setting breakpoints, stepping through execution lines, and inspecting variables."
      },
      {
        "word": "LINTER",
        "category": "Static Analysis",
        "hint": "Static code analysis tool flagging programming bugs, syntax errors, and style violations.",
        "extraHint": "Checks source code compliance automatically without running the program."
      },
      {
        "word": "MINIFIER",
        "category": "Asset Optimizer",
        "hint": "Utility removing unnecessary characters from source code without altering functionality.",
        "extraHint": "Strips whitespace, comments, and shortens variable names to reduce file size."
      },
      {
        "word": "PRETTIER",
        "category": "Opinionated Cleaner",
        "hint": "Opinionated code formatter supporting JavaScript, CSS, HTML, and more.",
        "extraHint": "Enforces consistent code style across an entire development team automatically."
      },
      {
        "word": "ESLINT",
        "category": "JavaScript Linter",
        "hint": "Pluggable and configurable static code analysis tool for identifying JavaScript bugs.",
        "extraHint": "Evaluates code patterns against configurable community and team guidelines."
      },
      {
        "word": "CYPRESS",
        "category": "End-to-End Testing",
        "hint": "Modern frontend testing tool built for the modern web, running directly in browsers.",
        "extraHint": "Automates real browser clicks, network intercepts, and end-to-end user journeys."
      },
      {
        "word": "SELENIUM",
        "category": "Legacy Automation",
        "hint": "Open source automated testing suite for web applications across different platforms.",
        "extraHint": "Controls browsers through a standardized WebDriver protocol interface."
      },
      {
        "word": "PYTEST",
        "category": "Python Testing",
        "hint": "Mature testing framework making it easy to write small, readable tests in Python.",
        "extraHint": "Features detailed assert introspection and an extensive ecosystem of plugins."
      },
      {
        "word": "COVERAGE",
        "category": "Test Metric",
        "hint": "Metric measuring the percentage of source code executed while running a test suite.",
        "extraHint": "Helps developers identify unexercised logic branches and untested functions."
      },
      {
        "word": "FUZZING",
        "category": "Security Testing",
        "hint": "Automated software testing technique inputting invalid, unexpected, or random data.",
        "extraHint": "Uncovers memory corruption errors, assertion crashes, and unhandled exceptions."
      },
      {
        "word": "HASHING",
        "category": "One-Way Function",
        "hint": "Transforming arbitrary input data into a fixed-size string of bytes via an algorithm.",
        "extraHint": "One-way mathematical process; virtually impossible to invert back to original input."
      },
      {
        "word": "SALTING",
        "category": "Password Defense",
        "hint": "Adding random string data to passwords prior to hashing them.",
        "extraHint": "Thwarts rainbow table attacks and ensures identical passwords yield different hashes."
      },
      {
        "word": "CIPHER",
        "category": "Cryptographic Algorithm",
        "hint": "Algorithm for performing encryption or decryption following a well-defined series of steps.",
        "extraHint": "Historical examples include Caesar and Vigenere; modern examples include AES."
      },
      {
        "word": "FIREWALL",
        "category": "Network Shield",
        "hint": "Network security system monitoring and controlling incoming and outgoing traffic.",
        "extraHint": "Filters packets based on predetermined security rules to block unauthorized access."
      },
      {
        "word": "EXPLOIT",
        "category": "Attack Tool",
        "hint": "Piece of software or sequence of commands that takes advantage of a security bug.",
        "extraHint": "Used by attackers to gain control, escalate privileges, or cause denial of service."
      },
      {
        "word": "OVERFLOW",
        "category": "Memory Corruption",
        "hint": "Anomaly where a program writing data to a buffer overruns its boundary and overwrites memory.",
        "extraHint": "Classic attack vector allowing adversaries to execute arbitrary shellcode instructions."
      },
      {
        "word": "HONEYPOT",
        "category": "Deception Security",
        "hint": "Decoy computer system intended to mimic likely targets of cyberattacks.",
        "extraHint": "Lures adversaries to study their techniques and alert defenders to active intrusions."
      },
      {
        "word": "BACKDOOR",
        "category": "Hidden Access",
        "hint": "Covert method of bypassing normal authentication or security controls in a system.",
        "extraHint": "Can be installed secretly by attackers or inadvertently left by software developers."
      },
      {
        "word": "CHECKSUM",
        "category": "Data Integrity",
        "hint": "Small-sized datum derived from a block of digital data for detecting transmission errors.",
        "extraHint": "Calculated via algorithms like CRC32 or MD5 to verify file download integrity."
      },
      {
        "word": "ENTROPY",
        "category": "Randomness Measure",
        "hint": "Measure of randomness or unpredictability in a set of cryptographic data or passwords.",
        "extraHint": "Higher entropy denotes greater unpredictability and resilience against guessing."
      },
      {
        "word": "BCRYPT",
        "category": "Password Hashing",
        "hint": "Password-hashing function based on the Blowfish cipher with adaptable work factor.",
        "extraHint": "Designed by Niels Provos and David Mazieres; deliberately slow to thwart brute-forcing."
      },
      {
        "word": "CRYPTO",
        "category": "Cryptography",
        "hint": "The practice and study of techniques for secure communication in computing.",
        "extraHint": "Protects sensitive data through mathematics, encryption, and signatures."
      },
      {
        "word": "FIREBASE",
        "category": "Cloud Backend",
        "hint": "Platform developed by Google for creating mobile and web applications without servers.",
        "extraHint": "Provides real-time databases, authentication, hosting, and cloud messaging."
      },
      {
        "word": "MONGOCLI",
        "category": "Database Tool",
        "hint": "Command-line interface for managing database clusters and automated workflows.",
        "extraHint": "Interacts directly with document database servers from terminal consoles."
      },
      {
        "word": "POSTMAN",
        "category": "API Platform",
        "hint": "Popular API platform for building, designing, testing, and mocking REST endpoints.",
        "extraHint": "Allows sending custom HTTP requests with graphical response inspection."
      },
      {
        "word": "SUBLIME",
        "category": "Text Editor",
        "hint": "Sophisticated text editor for code, markup, and prose with lightning fast search.",
        "extraHint": "Known for its responsive performance, multiple cursors, and custom packages."
      },
      {
        "word": "VSCODE",
        "category": "Code Editor",
        "hint": "Source-code editor developed by Microsoft that is widely popular among developers.",
        "extraHint": "Features built-in debugging, Git integration, and an expansive extension marketplace."
      },
      {
        "word": "INTELLIJ",
        "category": "Java IDE",
        "hint": "Powerful integrated development environment developed by JetBrains for Java and Kotlin.",
        "extraHint": "Celebrated for intelligent code completion and deep refactoring capabilities."
      },
      {
        "word": "ECLIPSE",
        "category": "Classic IDE",
        "hint": "Open source integrated development environment historically used for Java development.",
        "extraHint": "Features an extensible modular plugin architecture managed by the Eclipse Foundation."
      },
      {
        "word": "GRADLE",
        "category": "Build Automation",
        "hint": "Build automation tool known for its flexibility and support for multi-language projects.",
        "extraHint": "Uses a Groovy or Kotlin DSL to manage dependencies and build pipelines."
      },
      {
        "word": "COMPOSER",
        "category": "PHP Manager",
        "hint": "Application-level dependency manager for the PHP programming language.",
        "extraHint": "Resolves project requirements and generates an optimized class autoloader."
      },
      {
        "word": "HOMEBREW",
        "category": "Package Manager",
        "hint": "Free and open-source software package management system for macOS and Linux.",
        "extraHint": "Installs missing command-line packages seamlessly using simple Ruby formulae."
      },
      {
        "word": "PACMAN",
        "category": "Arch Packages",
        "hint": "Lightweight package manager combining a simple binary package format with easy building.",
        "extraHint": "The default command-line package tool for Arch Linux distributions."
      },
      {
        "word": "HEAPSORT",
        "category": "Sorting Algorithm",
        "hint": "Comparison-based sorting technique based on a binary heap data structure.",
        "extraHint": "Maintains O(n log n) runtime without requiring auxiliary memory arrays."
      },
      {
        "word": "DIJKSTRA",
        "category": "Graph Algorithm",
        "hint": "Algorithm for finding the shortest paths between nodes in a weighted graph.",
        "extraHint": "Conceived by computer scientist Edsger W. Dijkstra in 1956."
      },
      {
        "word": "AODSTAR",
        "category": "Search Algorithm",
        "hint": "Graph traversal and path search algorithm widely used in video games for pathfinding.",
        "extraHint": "Combines actual distance with a heuristic estimate to find the optimal path."
      },
      {
        "word": "BELLMAN",
        "category": "Shortest Path",
        "hint": "Algorithm computing shortest paths from a single source vertex on a weighted digraph.",
        "extraHint": "Capable of detecting negative weight cycles in graphs."
      },
      {
        "word": "KRUSKAL",
        "category": "Minimum Spanning",
        "hint": "Minimum-spanning-tree algorithm that finds an edge of least possible weight.",
        "extraHint": "Operates greedily by adding non-cyclical edges using a disjoint-set structure."
      },
      {
        "word": "GREEDY",
        "category": "Algorithm Strategy",
        "hint": "Algorithmic paradigm that makes the locally optimal choice at each intermediate stage.",
        "extraHint": "Often yields fast approximation solutions for complex optimization problems."
      },
      {
        "word": "DYNAMIC",
        "category": "Programming Method",
        "hint": "Mathematical optimization method breaking problems into overlapping subproblems.",
        "extraHint": "Solves each subproblem exactly once and stores the results in a lookup table."
      },
      {
        "word": "INHERIT",
        "category": "OOP Principle",
        "hint": "Mechanism where a new class adopts fields and methods from an existing base class.",
        "extraHint": "Facilitates code reuse and establishes 'is-a' architectural relationships."
      },
      {
        "word": "ABSTRACT",
        "category": "OOP Concept",
        "hint": "Hiding the complex reality while exposing only the essential operational features.",
        "extraHint": "Implemented through abstract classes and interface contracts across languages."
      },
      {
        "word": "OVERLOAD",
        "category": "Method Variant",
        "hint": "Ability to create multiple functions with the identical name but differing signatures.",
        "extraHint": "Resolved by the compiler during type analysis based on argument counts and types."
      },
      {
        "word": "OVERRIDE",
        "category": "OOP Mechanism",
        "hint": "Language feature allowing a subclass to provide a specific implementation of a parent method.",
        "extraHint": "Enables dynamic method dispatch and runtime polymorphic behavior."
      },
      {
        "word": "CLOSURE",
        "category": "Functional Concept",
        "hint": "Function bundled together with references to its surrounding lexical environment.",
        "extraHint": "Preserves access to outer scope variables even after outer execution completes."
      },
      {
        "word": "EVENTBUS",
        "category": "Messaging Pattern",
        "hint": "Mechanism allowing components to communicate with each other without knowing about each other.",
        "extraHint": "Dispatches events across decoupled software modules via publish-subscribe."
      },
      {
        "word": "MUTABLE",
        "category": "State Behavior",
        "hint": "Object state that can be modified after it is initially constructed.",
        "extraHint": "Opposite of immutable; can introduce bugs in multi-threaded environments."
      },
      {
        "word": "VOLATILE",
        "category": "Memory Qualifier",
        "hint": "Variable modifier telling the compiler that its value may change unexpectedly.",
        "extraHint": "Prevents the compiler from applying caching optimizations on hardware registers."
      },
      {
        "word": "ATOMIC",
        "category": "Thread Safety",
        "hint": "Operation that runs completely without the possibility of interference by other threads.",
        "extraHint": "Indivisible hardware-level instruction fundamental to lock-free programming."
      },
      {
        "word": "GARBAGE",
        "category": "Memory Collection",
        "hint": "Automatic memory management form identifying and reclaiming unused allocated memory.",
        "extraHint": "Languages like Java, Go, and Python automate heap collection to avoid leaks."
      },
      {
        "word": "HEAPMEM",
        "category": "Dynamic Memory",
        "hint": "Region of memory where dynamically allocated variables reside during execution.",
        "extraHint": "Managed via allocators; requires explicit freeing or automatic garbage collection."
      },
      {
        "word": "STACKMEM",
        "category": "Static Memory",
        "hint": "Region of memory storing temporary local variables and function execution call frames.",
        "extraHint": "Automatically allocated and deallocated as execution enters and leaves scopes."
      },
      {
        "word": "POINTERS",
        "category": "Memory Targets",
        "hint": "Variables storing numeric hardware addresses pointing directly to memory values.",
        "extraHint": "Mastery over pointers is essential for low-level systems programming in C and C++."
      },
      {
        "word": "REFERENC",
        "category": "Alias Mechanism",
        "hint": "Alternative name or direct alias for an already existing variable in storage.",
        "extraHint": "Unlike pointers, references in modern languages cannot easily point to arbitrary memory."
      },
      {
        "word": "DELEGATE",
        "category": "Design Role",
        "hint": "Object-oriented design pattern where an object handles a request by delegating to a helper.",
        "extraHint": "Promotes compositional architectures over deep inheritance hierarchies."
      },
      {
        "word": "SOURCE",
        "category": "Code Asset",
        "hint": "Human-readable instructions written by software developers before compilation.",
        "extraHint": "Maintained inside version control repositories and edited within code IDEs."
      },
      {
        "word": "BINARY",
        "category": "Base Two",
        "hint": "Number system using only digits 0 and 1 representing digital semiconductor states.",
        "extraHint": "Forms the fundamental machine instruction and data representation inside CPUs."
      },
      {
        "word": "CONTINUE",
        "category": "Control Flow",
        "hint": "Statement skipping the rest of the current loop iteration and advancing to the next.",
        "extraHint": "Transfers control to the loop condition evaluation or increment step."
      },
      {
        "word": "RETURN",
        "category": "Control Flow",
        "hint": "Statement terminating function execution and optionally passing a value back.",
        "extraHint": "Hands execution control back to the invoking caller function."
      },
      {
        "word": "FINALLY",
        "category": "Error Handling",
        "hint": "Code block guaranteed to execute after try and catch blocks finish.",
        "extraHint": "Frequently employed to close open files, sockets, and release resources."
      },
      {
        "word": "SWITCH",
        "category": "Control Flow",
        "hint": "Multi-way branch statement transferring control to matching case constants.",
        "extraHint": "Provides a cleaner alternative to cascading if-else ladders."
      },
      {
        "word": "DEFAULT",
        "category": "Control Flow",
        "hint": "Clause within a switch statement executed when no case constants match.",
        "extraHint": "Acts as the catch-all fallback branch in conditional evaluation."
      },
      {
        "word": "IMPORT",
        "category": "Module System",
        "hint": "Keyword used to bring external libraries, modules, or declarations into scope.",
        "extraHint": "Enables modular software architectures and code reuse."
      },
      {
        "word": "EXPORT",
        "category": "Module System",
        "hint": "Keyword making internal module variables, functions, or classes publicly accessible.",
        "extraHint": "Exposes a public API surface from a JavaScript or TypeScript module."
      },
      {
        "word": "STATIC",
        "category": "Scope Modifier",
        "hint": "Modifier declaring that a member belongs to the class type itself rather than instances.",
        "extraHint": "Can be accessed directly without instantiating an instance of the class."
      },
      {
        "word": "PUBLIC",
        "category": "Access Control",
        "hint": "Access modifier allowing a class member to be accessed from any other code.",
        "extraHint": "Exposes components openly without encapsulation restrictions."
      },
      {
        "word": "PRIVATE",
        "category": "Access Control",
        "hint": "Access modifier restricting member access exclusively to within the declaring class.",
        "extraHint": "Enforces strict encapsulation and shields internal state implementation."
      },
      {
        "word": "FRIEND",
        "category": "Access Control",
        "hint": "C++ keyword granting external functions or classes access to private members.",
        "extraHint": "Bypasses standard encapsulation boundaries for tightly coupled utilities."
      },
      {
        "word": "VIRTUAL",
        "category": "Polymorphism",
        "hint": "Keyword declaring that a method can be overridden by derived classes in C++.",
        "extraHint": "Enables runtime polymorphic dynamic dispatch via virtual method tables."
      },
      {
        "word": "SEALED",
        "category": "Type Hierarchy",
        "hint": "Keyword restricting which other classes or interfaces may extend or implement a type.",
        "extraHint": "Allows compilers to verify exhaustive pattern matching over closed hierarchies."
      },
      {
        "word": "EXTENDS",
        "category": "Inheritance",
        "hint": "Keyword used in Java, TypeScript, and PHP to establish class inheritance.",
        "extraHint": "Derives child classes that inherit properties and methods from a parent."
      },
      {
        "word": "DELETE",
        "category": "Memory Deallocation",
        "hint": "Operator used in C++ to free dynamically allocated heap memory manually.",
        "extraHint": "Must be called on memory allocated via new to prevent memory leaks."
      },
      {
        "word": "SIZEOF",
        "category": "Compile-Time Operator",
        "hint": "Operator returning the memory size in bytes of a data type or expression.",
        "extraHint": "Evaluated at compile-time to assist portable memory allocations in C."
      },
      {
        "word": "TYPEOF",
        "category": "Type Reflection",
        "hint": "Unary operator returning a string indicating the data type of an unevaluated operand.",
        "extraHint": "Used in JavaScript to check whether an identifier is string, number, or function."
      },
      {
        "word": "CASTING",
        "category": "Type Conversion",
        "hint": "Explicit or implicit conversion of an entity of one data type into another.",
        "extraHint": "Includes safe upcasting in class hierarchies and risky downcasting."
      },
      {
        "word": "COERCION",
        "category": "Type Conversion",
        "hint": "Implicit automatic conversion of values from one data type to another by runtimes.",
        "extraHint": "Notorious in JavaScript when adding numbers and strings together."
      },
      {
        "word": "STRICT",
        "category": "Mode Directive",
        "hint": "Pragma directive enforcing tighter parsing and error handling in JavaScript.",
        "extraHint": "Disables silent errors, forbids global variable creation, and optimizes execution."
      },
      {
        "word": "GLOBAL",
        "category": "Scope Tier",
        "hint": "Scope containing variables accessible from any region within the entire program.",
        "extraHint": "Overuse of global variables is generally discouraged due to namespace pollution."
      },
      {
        "word": "LEXICAL",
        "category": "Scope Rules",
        "hint": "Scoping convention where variable scope is determined by its physical location in source.",
        "extraHint": "Also called static scoping; enables closures to capture surrounding variables."
      },
      {
        "word": "HOISTING",
        "category": "JavaScript Behavior",
        "hint": "Runtime behavior where variable and function declarations are moved to the top of scope.",
        "extraHint": "Occurs during compilation phase; functions can be called before declaration."
      },
      {
        "word": "RENAME",
        "category": "Refactoring",
        "hint": "Standard refactoring transforming an identifier name across all reference sites.",
        "extraHint": "Automated by IDEs to safely update code clarity without breaking references."
      },
      {
        "word": "INLINE",
        "category": "Compiler Hint",
        "hint": "Keyword or compiler optimization replacing function calls with the actual function body.",
        "extraHint": "Eliminates call overhead at the expense of potential binary size expansion."
      },
      {
        "word": "HEADER",
        "category": "Source File",
        "hint": "File containing declarations of functions, classes, and macros in C and C++.",
        "extraHint": "Typically carries a .h or .hpp extension; shared across source files via include."
      },
      {
        "word": "INCLUDE",
        "category": "Preprocessor",
        "hint": "Directive causing the contents of a specified file to be inserted into the source stream.",
        "extraHint": "Standard mechanism for sharing common declarations across C compilation units."
      },
      {
        "word": "PRAGMA",
        "category": "Compiler Directive",
        "hint": "Machine-dependent compiler directive issuing special instructions to the compiler.",
        "extraHint": "Common examples include #pragma once to prevent multiple header inclusions."
      },
      {
        "word": "PACKAGE",
        "category": "Namespace Unit",
        "hint": "Namespace mechanism in Java and Go grouping related classes and source files.",
        "extraHint": "Corresponds to directory structures and controls visibility of internal members."
      },
      {
        "word": "MODULE",
        "category": "Code Unit",
        "hint": "Independent, interchangeable unit of software containing one or more subroutines.",
        "extraHint": "Modern programming standard organizing code with explicit imports and exports."
      },
      {
        "word": "LIBRARY",
        "category": "Code Asset",
        "hint": "Collection of non-volatile resources used by computer programs for software development.",
        "extraHint": "Includes precompiled code, configuration data, documentation, and message templates."
      },
      {
        "word": "ASSETS",
        "category": "Project Resources",
        "hint": "Static media files including images, sounds, fonts, and stylesheets in an app.",
        "extraHint": "Bundled with executable binaries or served statically from content delivery networks."
      },
      {
        "word": "BUNDLE",
        "category": "Packaging",
        "hint": "Collection of software components packaged together into a unified distribution file.",
        "extraHint": "Reduces HTTP request round-trips when serving web applications to browsers."
      },
      {
        "word": "TARBALL",
        "category": "Archive Format",
        "hint": "Archive file format grouping multiple files together, often compressed with gzip.",
        "extraHint": "Carries the .tar.gz extension; universally used for software distribution on Unix."
      },
      {
        "word": "ZIPFILE",
        "category": "Archive Format",
        "hint": "Popular archive file format supporting lossless data compression of multiple files.",
        "extraHint": "Standard distribution archive format across Windows, macOS, and Linux systems."
      },
      {
        "word": "PARSER",
        "category": "Compiler Phase",
        "hint": "Compiler component analyzing a string of symbols into an abstract syntax tree.",
        "extraHint": "Validates input code against formal grammar specifications and reports syntax errors."
      },
      {
        "word": "ASTREE",
        "category": "Syntax Tree",
        "hint": "Tree representation of the abstract syntactic structure of source code.",
        "extraHint": "Nodes in the abstract syntax tree represent programming constructs and expressions."
      },
      {
        "word": "EMITTER",
        "category": "Compiler Phase",
        "hint": "Final phase in a compiler responsible for producing target machine instructions or bytecode.",
        "extraHint": "Outputs the finalized executable code from optimized intermediate representations."
      },
      {
        "word": "BACKEND",
        "category": "Architecture",
        "hint": "The data access layer and server logic operating behind the user-facing frontend.",
        "extraHint": "Handles business rules, database queries, authentication, and secure integrations."
      },
      {
        "word": "GATEWAY",
        "category": "API Routing",
        "hint": "Server that acts as an API front-end, routing requests, composing, and enforcing policies.",
        "extraHint": "Enforces rate limiting, token authentication, and SSL termination across microservices."
      },
      {
        "word": "MONITOR",
        "category": "System Health",
        "hint": "Continuous observation system tracking uptime, latency, and resource metrics.",
        "extraHint": "Notifies on-call engineering teams whenever anomalies or outages occur."
      },
      {
        "word": "WEBHOOK",
        "category": "HTTP Callback",
        "hint": "User-defined HTTP callback triggered automatically when a specific event occurs.",
        "extraHint": "Allows third-party systems like Stripe or GitHub to notify servers in real-time."
      },
      {
        "word": "HEADERS",
        "category": "HTTP Metadata",
        "hint": "Key-value pairs transmitted in HTTP requests and responses providing request context.",
        "extraHint": "Specify content types, caching instructions, authentication tokens, and cookies."
      },
      {
        "word": "COOKIES",
        "category": "Client Storage",
        "hint": "Small blocks of data placed on a client computer by web servers during browsing.",
        "extraHint": "Track user logins, shopping carts, and analytical telemetry across browser visits."
      },
      {
        "word": "STORAGE",
        "category": "Data Repository",
        "hint": "Mechanism where digital data is retained electronically for processing.",
        "extraHint": "Encompasses fast volatile RAM as well as durable non-volatile SSDs and hard disks."
      },
      {
        "word": "CACHING",
        "category": "Speed Technique",
        "hint": "Technique storing copies of frequently accessed data in high-speed access layers.",
        "extraHint": "Drastically cuts down read latency and reduces repetitive database strain."
      },
      {
        "word": "INVALID",
        "category": "Cache Busting",
        "hint": "The process of removing obsolete or stale entries from an active cache layer.",
        "extraHint": "Known as one of the two hardest problems in computer science along with naming."
      },
      {
        "word": "EXPIRY",
        "category": "Cache Policy",
        "hint": "Designated lifespan or timestamp after which cached data is considered stale.",
        "extraHint": "Configured using HTTP headers like Cache-Control and Max-Age."
      },
      {
        "word": "REFACTOR",
        "category": "Code Maintenance",
        "hint": "Restructuring existing code without modifying its observable external behavior.",
        "extraHint": "Enhances non-functional code attributes like maintainability, readability, and speed."
      },
      {
        "word": "OPTIMIZE",
        "category": "Speed Tuning",
        "hint": "Improving the efficiency of software by reducing resource consumption or execution time.",
        "extraHint": "Balancing CPU instruction cycles, memory footprints, and algorithmic efficiency."
      },
      {
        "word": "SYNTAX",
        "category": "Grammar Rules",
        "hint": "Set of rules that defines the combinations of symbols considered correctly structured.",
        "extraHint": "Enforced strictly by compilers and interpreters during the parsing phase."
      },
      {
        "word": "SEMANTIC",
        "category": "Code Meaning",
        "hint": "The philosophical meaning and runtime behavior of syntactically valid code instructions.",
        "extraHint": "Errors in semantics cause programs to compile cleanly but produce incorrect results."
      },
      {
        "word": "TERMINAL",
        "category": "CLI Interface",
        "hint": "Text-based user interface used to enter instructions and interact directly with the OS.",
        "extraHint": "Accepts keyboard commands without requiring a graphical pointing device."
      },
      {
        "word": "CONSOLE",
        "category": "Developer Tool",
        "hint": "Panel displaying logged diagnostic messages, warnings, errors, and interactive commands.",
        "extraHint": "Accessible in browser developer tools via console.log() and terminal stdio."
      },
      {
        "word": "ARGUMENT",
        "category": "Function Call",
        "hint": "Specific value passed into a subroutine or function during its runtime invocation.",
        "extraHint": "Supplies the actual data matching the parameters declared in the function signature."
      },
      {
        "word": "OPERAND",
        "category": "Math Operation",
        "hint": "The quantity or entity on which a mathematical or logical operation is performed.",
        "extraHint": "In the expression 5 + 3, the numbers 5 and 3 are the operands."
      },
      {
        "word": "OPERATOR",
        "category": "Syntax Symbol",
        "hint": "Character or symbol representing a specific mathematical, relational, or logical task.",
        "extraHint": "Common examples include addition (+), assignment (=), and strict equality (===)."
      },
      {
        "word": "BINARYOP",
        "category": "Operator Arity",
        "hint": "Operator requiring two operands to compute a resulting value.",
        "extraHint": "Includes standard arithmetic operators like addition (+), subtraction (-), and division (/)."
      },
      {
        "word": "TERNARY",
        "category": "Conditional Operator",
        "hint": "Operator taking three operands, frequently used as a concise inline if-else expression.",
        "extraHint": "Formatted as condition ? exprIfTrue : exprIfFalse across many languages."
      },
      {
        "word": "BITWISE",
        "category": "Binary Operation",
        "hint": "Operation calculating at the level of individual binary digits or bits.",
        "extraHint": "Includes bitwise AND (&), OR (|), XOR (^), and bit shifts (<<, >>)."
      },
      {
        "word": "LOGICAL",
        "category": "Boolean Operation",
        "hint": "Operation that evaluates truth values to produce a boolean true or false output.",
        "extraHint": "Fundamental examples include AND (&&), OR (||), and NOT (!)."
      },
      {
        "word": "RELATION",
        "category": "Comparison",
        "hint": "Operation testing the relationship between two entities to return a boolean.",
        "extraHint": "Includes greater than (>), less than (<), equal to (==), and not equal (!=)."
      },
      {
        "word": "EQUALITY",
        "category": "Value Check",
        "hint": "State or check determining whether two expressions evaluate to the same value.",
        "extraHint": "Strict equality (===) checks both value and type without performing type coercion."
      },
      {
        "word": "ASSIGN",
        "category": "Value Storage",
        "hint": "Statement storing a computed value into a designated memory location or variable.",
        "extraHint": "Typically represented by the single equals sign (=)."
      },
      {
        "word": "LVALUE",
        "category": "Memory Location",
        "hint": "Expression representing an identifiable memory location that can appear on the left of assignment.",
        "extraHint": "References an object that persists beyond a single expression."
      },
      {
        "word": "RVALUE",
        "category": "Temporary Value",
        "hint": "Expression representing a temporary value that does not have an identifiable memory address.",
        "extraHint": "Appears on the right-hand side of assignments and can be moved efficiently in C++."
      },
      {
        "word": "LITERAL",
        "category": "Hardcoded Value",
        "hint": "Source code representation of a fixed value directly written into the code.",
        "extraHint": "Examples include the integer 42, the string 'hello', and the boolean true."
      },
      {
        "word": "CONSTANT",
        "category": "Immutable Value",
        "hint": "Identifier whose associated value cannot be altered during normal program execution.",
        "extraHint": "Helps eliminate magic numbers and documents fixed environmental values."
      },
      {
        "word": "VARIABLE",
        "category": "Named Storage",
        "hint": "Storage location paired with an associated symbolic identifier holding data that may mutate.",
        "extraHint": "Can be declared using language keywords like let, var, or explicit types."
      },
      {
        "word": "IDENTIFY",
        "category": "Naming Rules",
        "hint": "Tokens in code representing names chosen by programmers for variables, functions, and types.",
        "extraHint": "Must conform to language lexical rules regarding valid starting characters and digits."
      },
      {
        "word": "KEYWORD",
        "category": "Reserved Word",
        "hint": "Word reserved by a programming language that has a predefined, unalterable meaning.",
        "extraHint": "Cannot be chosen as custom identifier names for variables or functions."
      },
      {
        "word": "RESERVED",
        "category": "Language Words",
        "hint": "Set of words claimed by language specifications that cannot be used as identifiers.",
        "extraHint": "Includes words reserved for potential future language feature expansions."
      },
      {
        "word": "COMMENT",
        "category": "Documentation",
        "hint": "Programmer-readable explanation or annotation written directly in the source code.",
        "extraHint": "Ignored completely by compilers and interpreters during execution."
      },
      {
        "word": "INSPECT",
        "category": "Reflection",
        "hint": "Ability of a program to examine the type and properties of an object at runtime.",
        "extraHint": "Enables building dynamic debuggers, serializers, and dependency injection containers."
      },
      {
        "word": "REFLECT",
        "category": "Metaprogramming",
        "hint": "Ability of a computer program to examine, introspect, and modify its own structure at runtime.",
        "extraHint": "Powers advanced enterprise frameworks to instantiate classes dynamically."
      },
      {
        "word": "SUBCLASS",
        "category": "Derived Class",
        "hint": "Class derived from another base class, inheriting its characteristics and behaviors.",
        "extraHint": "Can extend parent capabilities and override existing virtual method implementations."
      },
      {
        "word": "DESTRUCT",
        "category": "Object Cleanup",
        "hint": "Special method invoked automatically when an object is about to be destroyed from memory.",
        "extraHint": "Releases external operating system resources, file handles, and network connections."
      },
      {
        "word": "ALLOCATE",
        "category": "Memory Request",
        "hint": "Reservation of a block of memory by a program from the operating system or runtime heap.",
        "extraHint": "Performed via low-level primitives like malloc() in C or new in modern languages."
      },
      {
        "word": "DEALLOC",
        "category": "Memory Release",
        "hint": "Returning previously allocated memory blocks back to the memory manager.",
        "extraHint": "Failing to deallocate unused memory leads to progressive memory leaks."
      },
      {
        "word": "SEGFAULT",
        "category": "Memory Crash",
        "hint": "Fatal error caused by a program attempting to access an unauthorized memory address.",
        "extraHint": "Occurs when dereferencing null or unmapped memory pointers, crashing the process."
      },
      {
        "word": "BITSHIFT",
        "category": "Bit Operation",
        "hint": "Operation shifting all bits of a binary value left or right by specified positions.",
        "extraHint": "Shifting left by one bit multiplies by two; shifting right divides by two."
      },
      {
        "word": "ENDIAN",
        "category": "Byte Ordering",
        "hint": "The sequential order in which bytes of a multi-byte word are stored in computer memory.",
        "extraHint": "Little-endian stores the least significant byte first; big-endian stores the most."
      },
      {
        "word": "BOOLEANS",
        "category": "Logic Type",
        "hint": "Primitive data entities holding strictly one of two possible states: true or false.",
        "extraHint": "Form the mathematical basis of digital semiconductor logic gates."
      },
      {
        "word": "UNICODE",
        "category": "Character Standard",
        "hint": "Universal character encoding standard assigning unique numbers to characters worldwide.",
        "extraHint": "Encompasses thousands of international alphabets, historical scripts, and emojis."
      },
      {
        "word": "DESERIAL",
        "category": "Object Reconstruction",
        "hint": "Reconstructing in-memory data structures from a serialized byte or text format.",
        "extraHint": "Reverses serialization to restore active objects from JSON, XML, or binary files."
      },
      {
        "word": "ENCODER",
        "category": "Data Transformation",
        "hint": "Algorithm or device that converts information from one format or code to another.",
        "extraHint": "Examples include base64 encoders, video compression encoders, and URL encoders."
      },
      {
        "word": "DECODER",
        "category": "Data Transformation",
        "hint": "Component that reverses the encoding process, restoring data to its original form.",
        "extraHint": "Transforms encoded bit streams or character representations back into intelligible data."
      },
      {
        "word": "STREAM",
        "category": "Continuous Data",
        "hint": "Sequence of data elements made available over time in sequential chunks.",
        "extraHint": "Enables processing massive files or live audio without reading entire datasets into RAM."
      },
      {
        "word": "SOCKETS",
        "category": "Network Channels",
        "hint": "Bidirectional inter-process communication endpoints established across IP networks.",
        "extraHint": "Enable client and server processes to stream binary or textual data back and forth."
      },
      {
        "word": "BLOCKING",
        "category": "Execution Stall",
        "hint": "Execution state where a process pauses and waits for an operation to complete.",
        "extraHint": "Synchronous disk reads or network calls block the executing thread until data arrives."
      },
      {
        "word": "LATENCY",
        "category": "Time Delay",
        "hint": "Time interval between the stimulation of a software system and its observable response.",
        "extraHint": "Critical metric measured in milliseconds across networking, game engines, and APIs."
      },
      {
        "word": "UNITTEST",
        "category": "Granular Testing",
        "hint": "Automated test verifying the correctness of an isolated individual function or class.",
        "extraHint": "Runs swiftly in memory without connecting to external networks or live databases."
      },
      {
        "word": "MOCKING",
        "category": "Test Isolation",
        "hint": "Creating fake simulated implementations of complex dependencies for unit test isolation.",
        "extraHint": "Ensures tests remain repeatable, fast, and deterministic without external outages."
      },
      {
        "word": "STUBBING",
        "category": "Test Canned Data",
        "hint": "Providing hardcoded return values for function calls invoked during test execution.",
        "extraHint": "Simplifies verifying logic branches without executing complex downstream calculations."
      },
      {
        "word": "FIXTURE",
        "category": "Test Environment",
        "hint": "Consistent, repeatable baseline environment established before running automated tests.",
        "extraHint": "Sets up test database records, mock servers, and configuration states cleanly."
      },
      {
        "word": "TEARDOWN",
        "category": "Test Cleanup",
        "hint": "Execution phase cleaning up temporary files and closing connections after tests complete.",
        "extraHint": "Ensures individual test runs do not leak state or pollute subsequent test executions."
      },
      {
        "word": "SNAPSHOT",
        "category": "UI Regression Test",
        "hint": "Testing technique comparing the rendered output of a component against an approved baseline.",
        "extraHint": "Instantly flags accidental visual modifications or layout regressions in frontend code."
      },
      {
        "word": "HEADLESS",
        "category": "Automated Browser",
        "hint": "Web browser operating without a graphical user interface, controlled via code scripts.",
        "extraHint": "Used in continuous integration environments to execute automated end-to-end tests."
      },
      {
        "word": "DRIVER",
        "category": "System Interface",
        "hint": "Software component enabling an operating system to interact with hardware devices.",
        "extraHint": "Translates generic OS commands into device-specific hardware instructions."
      },
      {
        "word": "FIRMWARE",
        "category": "Embedded Software",
        "hint": "Permanent software programmed into a hardware device's non-volatile read-only memory.",
        "extraHint": "Controls low-level hardware operations of microcontrollers, keyboards, and routers."
      },
      {
        "word": "BOOTLOAD",
        "category": "Startup Program",
        "hint": "Small computer program that loads the primary operating system kernel into memory on boot.",
        "extraHint": "Initializes essential hardware registers and transfers execution to the OS kernel."
      },
      {
        "word": "KERNEL",
        "category": "Core OS Engine",
        "hint": "Central core of an operating system having complete control over everything in the system.",
        "extraHint": "Manages memory allocation, process scheduling, hardware interrupts, and system calls."
      },
      {
        "word": "SYSCALL",
        "category": "Kernel Request",
        "hint": "Programmatic request made by user space software to the operating system kernel.",
        "extraHint": "Provides controlled access to hardware devices, file systems, and network connections."
      },
      {
        "word": "PROCESS",
        "category": "Running Program",
        "hint": "Instance of a computer program being executed by one or many computer processors.",
        "extraHint": "Owns an isolated virtual memory address space, open file descriptors, and security tokens."
      },
      {
        "word": "THREADS",
        "category": "Execution Unit",
        "hint": "The smallest sequence of programmed instructions managed independently by an OS scheduler.",
        "extraHint": "Threads within the same process share identical memory address space and global variables."
      },
      {
        "word": "DAEMON",
        "category": "Background Process",
        "hint": "Computer program that runs as a background process rather than under interactive control.",
        "extraHint": "Standard convention on Unix; services background network requests and system tasks."
      },
      {
        "word": "SERVICE",
        "category": "Background System",
        "hint": "Continuous background process providing specified functions across an operating system.",
        "extraHint": "Examples include database daemons, web servers, and automated backup services."
      },
      {
        "word": "SANDBOX",
        "category": "Security Isolation",
        "hint": "Isolated testing and execution environment restricting what resources a program can access.",
        "extraHint": "Prevents untrusted software from damaging the host operating system or stealing data."
      },
      {
        "word": "BUNDLER",
        "category": "Asset Packager",
        "hint": "Combines modules, images, and styles into optimized delivery bundles.",
        "extraHint": "Crucial for modern frontend performance and dependency resolution."
      },
      {
        "word": "POSTCSS",
        "category": "CSS Processor",
        "hint": "Tool for transforming styles with JS plugins like autoprefixer.",
        "extraHint": "Adds vendor prefixes and future CSS syntax compatibility."
      },
      {
        "word": "MATERIAL",
        "category": "Design System",
        "hint": "Design system developed by Google emphasizing grid layouts and depth.",
        "extraHint": "Powers visual themes across Android, web, and Flutter applications."
      },
      {
        "word": "FLEXBOX",
        "category": "CSS Layout",
        "hint": "One-dimensional CSS layout model for distributing space along an axis.",
        "extraHint": "Offers flexible alignment and ordering of child elements."
      },
      {
        "word": "OPACITY",
        "category": "Transparency",
        "hint": "Property specifying the degree of transparency of an element.",
        "extraHint": "Ranges from 0 for fully transparent to 1 for fully opaque."
      },
      {
        "word": "POSITION",
        "category": "Layout Geometry",
        "hint": "CSS property specifying the positioning method used for an element.",
        "extraHint": "Includes static, relative, absolute, fixed, and sticky."
      },
      {
        "word": "DISPLAY",
        "category": "Rendering Mode",
        "hint": "CSS property determining how an element is rendered in document flow.",
        "extraHint": "Includes block, inline, inline-block, flex, grid, and none."
      },
      {
        "word": "MARGIN",
        "category": "Box Spacing",
        "hint": "CSS box model area providing clear space outside an element border.",
        "extraHint": "Creates separation distances between adjacent layout elements."
      },
      {
        "word": "PADDING",
        "category": "Inner Spacing",
        "hint": "CSS box model area providing space between content and its border.",
        "extraHint": "Expands the clickable touch target and interior breathing room."
      },
      {
        "word": "BORDER",
        "category": "Box Boundary",
        "hint": "Visual boundary wrapping around padding and content of an element.",
        "extraHint": "Can be styled with custom widths, colors, and border-radius corners."
      },
      {
        "word": "RADIUS",
        "category": "Rounded Corners",
        "hint": "CSS property giving visual elements smooth, curved circular corners.",
        "extraHint": "Used extensively in glassmorphism cards and pill-shaped buttons."
      },
      {
        "word": "SHADOW",
        "category": "Visual Depth",
        "hint": "CSS effect adding depth, soft elevation, and glow behind elements.",
        "extraHint": "Configured via offset, blur radius, spread, and shadow color."
      },
      {
        "word": "GRADIENT",
        "category": "Color Transition",
        "hint": "Visual transition blending smoothly between two or more designated colors.",
        "extraHint": "Includes linear, radial, and conic color blend patterns."
      },
      {
        "word": "BACKDROP",
        "category": "Glassmorphism",
        "hint": "CSS filter applied to the area behind an element for frosted glass effects.",
        "extraHint": "Uses backdrop-filter blur to create modern translucent UI panels."
      },
      {
        "word": "FUNCTION",
        "category": "Subroutine",
        "hint": "Reusable block of code instructions performing a specific operation.",
        "extraHint": "Can accept inputs as arguments and return output values."
      },
      {
        "word": "METHOD",
        "category": "Class Function",
        "hint": "Function associated with and operating on instances of an object class.",
        "extraHint": "Has access to private instance data and internal member methods."
      },
      {
        "word": "ROUTINE",
        "category": "Subprogram",
        "hint": "Sequence of instructions designed to perform a distinct operational task.",
        "extraHint": "A foundational concept in structured software decomposition."
      },
      {
        "word": "BRANCH",
        "category": "Execution Path",
        "hint": "Point where software chooses one of several alternative execution paths.",
        "extraHint": "Conditional branches alter the flow of CPU instruction execution."
      },
      {
        "word": "MUTATION",
        "category": "State Change",
        "hint": "Modifying the internal data state of a variable or data structure.",
        "extraHint": "Pure functional programming minimizes mutations to avoid side effects."
      },
      {
        "word": "PUREFUNC",
        "category": "Deterministic",
        "hint": "Function returning identical results for identical inputs with no side effects.",
        "extraHint": "Fundamental building block of functional programming architectures."
      },
      {
        "word": "MACHINE",
        "category": "Hardware Level",
        "hint": "Physical electronic computer hardware executing low-level instructions.",
        "extraHint": "Decodes binary machine instructions directly on microprocessors."
      },
      {
        "word": "HARDWARE",
        "category": "Physical System",
        "hint": "Physical physical components of a computer such as CPU, RAM, and motherboard.",
        "extraHint": "Contrasts with intangible software executing atop physical circuits."
      },
      {
        "word": "SOFTWARE",
        "category": "Code Programs",
        "hint": "Collection of computer programs, procedures, and documentation performing tasks.",
        "extraHint": "Directs hardware components to carry out useful computational work."
      },
      {
        "word": "SYSTEM",
        "category": "Core Platform",
        "hint": "Foundational software managing computer hardware and platform resources.",
        "extraHint": "Includes operating systems, device drivers, and system services."
      },
      {
        "word": "NETWORK",
        "category": "Interconnect",
        "hint": "Group of two or more computer systems linked together to share data.",
        "extraHint": "Facilitates communication via standardized protocols like TCP/IP."
      },
      {
        "word": "INTERNET",
        "category": "Global Network",
        "hint": "Global system of interconnected computer networks utilizing the TCP/IP suite.",
        "extraHint": "Connects billions of personal, commercial, and governmental devices."
      },
      {
        "word": "INTRANET",
        "category": "Private Network",
        "hint": "Private network accessible strictly to authorized members of an organization.",
        "extraHint": "Provides secure internal collaboration platforms, wikis, and databases."
      },
      {
        "word": "EXTRANET",
        "category": "Partner Network",
        "hint": "Controlled private network allowing third-party partners controlled access.",
        "extraHint": "Enables business partners to exchange data without exposing full intranets."
      },
      {
        "word": "ETHERNET",
        "category": "Wired Network",
        "hint": "Family of wired computer networking technologies commonly used in LANs.",
        "extraHint": "Transmits data frames across twisted pair copper or optical fiber links."
      },
      {
        "word": "WIRELESS",
        "category": "Radio Network",
        "hint": "Telecommunications in which electromagnetic waves carry signals over air.",
        "extraHint": "Powers modern Wi-Fi, Bluetooth, cellular 5G, and satellite networks."
      },
      {
        "word": "CELLULAR",
        "category": "Mobile Network",
        "hint": "Communication network where the link to nodes is wireless across cell sites.",
        "extraHint": "Provides mobile data connectivity across 4G LTE and 5G cellular networks."
      },
      {
        "word": "MALWARE",
        "category": "Malicious Code",
        "hint": "Any software intentionally designed to cause damage to a computer or network.",
        "extraHint": "Encompasses viruses, worms, Trojan horses, ransomware, and spyware."
      },
      {
        "word": "SPYWARE",
        "category": "Covert Tracking",
        "hint": "Malware that covertly gathers information about a user and transmits it out.",
        "extraHint": "Records keystrokes, browsing habits, and passwords without user consent."
      },
      {
        "word": "ADWARE",
        "category": "Ad Software",
        "hint": "Software that automatically displays or downloads unwanted advertising materials.",
        "extraHint": "Often bundled with free software utilities to generate ad revenue."
      },
      {
        "word": "TROJAN",
        "category": "Deceptive Threat",
        "hint": "Malware disguised as legitimate or harmless software to trick users into installation.",
        "extraHint": "Creates backdoors allowing attackers unauthorized remote access to computers."
      },
      {
        "word": "ROOTKIT",
        "category": "Stealth Control",
        "hint": "Stealthy type of software designed to hide the existence of malware from the OS.",
        "extraHint": "Operates at kernel or hypervisor levels to maintain persistent stealth control."
      },
      {
        "word": "BOTNET",
        "category": "Zombie Network",
        "hint": "Network of compromised computers controlled remotely by a threat actor.",
        "extraHint": "Harnessed to launch massive distributed denial-of-service (DDoS) attacks."
      },
      {
        "word": "PHISHING",
        "category": "Social Scam",
        "hint": "Social engineering attack attempting to acquire sensitive credentials deceptively.",
        "extraHint": "Masquerades as trustworthy entities via deceptive emails and landing pages."
      },
      {
        "word": "SPOOFING",
        "category": "Identity Masquerade",
        "hint": "Situation in which a person or program successfully masquerades as another.",
        "extraHint": "Includes IP address spoofing, email sender spoofing, and website spoofing."
      },
      {
        "word": "SNIFFING",
        "category": "Packet Capture",
        "hint": "Monitoring and analyzing data packets traversing a computer network link.",
        "extraHint": "Performed legitimately for troubleshooting or maliciously to intercept passwords."
      },
      {
        "word": "AUDITING",
        "category": "Security Review",
        "hint": "Systematic evaluation of software and systems to verify security and compliance.",
        "extraHint": "Identifies architectural vulnerabilities and ensures adherence to regulations."
      },
      {
        "word": "KEYPAIR",
        "category": "Asymmetric Keys",
        "hint": "Matched pair of cryptographic keys: one public and one secret private key.",
        "extraHint": "Powers asymmetric encryption algorithms like RSA and elliptic curve crypto."
      },
      {
        "word": "DIGITAL",
        "category": "Discrete States",
        "hint": "Expressing data using discrete numerical digits, typically binary 0 and 1.",
        "extraHint": "Forms the basis of all modern digital microchips and computing architectures."
      },
      {
        "word": "ANALOG",
        "category": "Continuous Signals",
        "hint": "Representing data using continuously variable physical quantities like voltage.",
        "extraHint": "Preceded digital computing and remains vital in audio and RF electronics."
      },
      {
        "word": "BITRATE",
        "category": "Data Frequency",
        "hint": "Number of bits that are conveyed or processed per unit of time in a stream.",
        "extraHint": "Defines audio fidelity, video streaming resolution, and transmission speed."
      }
    ],
    "hard": [
      {
        "word": "TYPESCRIPT",
        "category": "Typed JavaScript",
        "hint": "Statically typed superset of JavaScript developed and maintained by Microsoft.",
        "extraHint": "Adds interfaces, enums, and static type-checks before transpiling."
      },
      {
        "word": "JAVASCRIPT",
        "category": "Web Programming",
        "hint": "The quintessential web language that powers interactive browser logic.",
        "extraHint": "Invented by Brendan Eich in 1995 in just 10 days at Netscape."
      },
      {
        "word": "POWERSHELL",
        "category": "System Automation",
        "hint": "Task automation and configuration management framework developed by Microsoft.",
        "extraHint": "Processes .NET objects directly in pipelines rather than text streams."
      },
      {
        "word": "SMALLTALK",
        "category": "Pure OOP Language",
        "hint": "Pioneering object-oriented dynamically typed reflective language from Xerox PARC.",
        "extraHint": "Everything in Smalltalk is strictly an object responding to messages."
      },
      {
        "word": "HASHTABLE",
        "category": "Data Structure",
        "hint": "Associative array data structure mapping key values to index buckets via a hash.",
        "extraHint": "Offers average constant time O(1) performance for searches and inserts."
      },
      {
        "word": "LINKEDLIST",
        "category": "Data Structure",
        "hint": "Linear sequence of data nodes where each node points explicitly to the next.",
        "extraHint": "Enables constant time O(1) insertions without shifting adjacent elements."
      },
      {
        "word": "RINGBUFFER",
        "category": "Circular Queue",
        "hint": "Fixed-size circular data buffer connected end-to-end like a continuous loop.",
        "extraHint": "Ideal for buffering continuous audio streams and real-time sensor inputs."
      },
      {
        "word": "WEBSOCKET",
        "category": "Network Protocol",
        "hint": "Full-duplex bidirectional communication channel operating over a single TCP socket.",
        "extraHint": "Powers live interactive chat rooms, stock tickers, and online multiplayer games."
      },
      {
        "word": "BOOTSTRAP",
        "category": "UI Framework",
        "hint": "Popular open-source CSS framework originally created by developers at Twitter.",
        "extraHint": "Provides responsive mobile-first grid systems and prebuilt UI widgets."
      },
      {
        "word": "MIDDLEWARE",
        "category": "Software Layer",
        "hint": "Software layer that sits between the incoming request and the final route handler.",
        "extraHint": "Handles logging, authentication checks, parsing, and error interception."
      },
      {
        "word": "MEMCACHED",
        "category": "Memory Cache",
        "hint": "General-purpose distributed memory caching system designed to speed up websites.",
        "extraHint": "Caches arbitrary data chunks in RAM to alleviate database query workloads."
      },
      {
        "word": "CASSANDRA",
        "category": "Distributed NoSQL",
        "hint": "Decentralized, highly scalable column-family database created by Apache.",
        "extraHint": "Offers linear scalability and zero single point of failure across large clusters."
      },
      {
        "word": "FIRESTORE",
        "category": "Realtime Cloud DB",
        "hint": "Flexible, scalable NoSQL cloud database for client and server development by Google.",
        "extraHint": "Keeps data synchronized across client apps in real-time with offline support."
      },
      {
        "word": "SNOWFLAKE",
        "category": "Cloud Warehouse",
        "hint": "Cloud-based data platform offering separate compute and storage architectures.",
        "extraHint": "Enables concurrent analytical querying without resource contention."
      },
      {
        "word": "CLICKHOUSE",
        "category": "Columnar Database",
        "hint": "Open source column-oriented database management system for real-time analytics.",
        "extraHint": "Processes billions of rows per second for high-speed OLAP reporting."
      },
      {
        "word": "PARTITION",
        "category": "Data Subdivision",
        "hint": "Division of a logical database or its elements into distinct independent parts.",
        "extraHint": "Allows database queries to scan only relevant segments, improving query times."
      },
      {
        "word": "TRANSACTION",
        "category": "ACID Sequence",
        "hint": "Logical unit of work composed of one or more database manipulation operations.",
        "extraHint": "Must execute completely or fail completely to preserve data integrity."
      },
      {
        "word": "MIGRATION",
        "category": "Schema Evolution",
        "hint": "Version-controlled management of incremental modifications to relational schemas.",
        "extraHint": "Allows developer teams to apply, track, and roll back database structure updates."
      },
      {
        "word": "SINGLETON",
        "category": "Design Pattern",
        "hint": "Creational pattern ensuring a class has only one globally accessible instance.",
        "extraHint": "Restricts object creation while providing a singular global coordinate access point."
      },
      {
        "word": "PROTOTYPE",
        "category": "Design Pattern",
        "hint": "Creational pattern enabling cloning of existing objects without coupling to classes.",
        "extraHint": "Copies existing objects via a clone interface to avoid duplicate construction."
      },
      {
        "word": "DECORATOR",
        "category": "Design Pattern",
        "hint": "Structural pattern attaching new behaviors to objects by placing them inside wrappers.",
        "extraHint": "Offers a flexible alternative to subclassing for extending functionality dynamically."
      },
      {
        "word": "COMPOSITE",
        "category": "Design Pattern",
        "hint": "Structural pattern composing objects into tree structures to represent hierarchies.",
        "extraHint": "Treats individual objects and complex compositions of objects uniformly."
      },
      {
        "word": "SERVERLESS",
        "category": "Cloud Paradigm",
        "hint": "Execution model where the cloud provider dynamically manages server infrastructure.",
        "extraHint": "Charges only for exact compute time consumed while executing functions."
      },
      {
        "word": "EVENTLOOP",
        "category": "Async Engine",
        "hint": "Programming construct that waits for and dispatches events or messages in a program.",
        "extraHint": "Powers JavaScript's non-blocking single-threaded asynchronous execution."
      },
      {
        "word": "SEMAPHORE",
        "category": "Synchronization",
        "hint": "Synchronization variable used to control concurrent access to a common resource.",
        "extraHint": "Maintains an integer counter tracking available permitted simultaneous accesses."
      },
      {
        "word": "COROUTINE",
        "category": "Cooperative Async",
        "hint": "Function that can suspend its execution and yield control back to the caller.",
        "extraHint": "Resumes from where it paused; enables cooperative multitasking without thread overhead."
      },
      {
        "word": "KUBERNETES",
        "category": "Orchestration",
        "hint": "Open source container orchestration system automating deployment and scaling.",
        "extraHint": "Originally designed by Google; manages containerized workloads across node clusters."
      },
      {
        "word": "CONTAINER",
        "category": "Virtualization",
        "hint": "Standard unit of software packaging code and all dependencies together.",
        "extraHint": "Shares the host OS kernel while providing isolated user spaces and processes."
      },
      {
        "word": "TERRAFORM",
        "category": "Infrastructure Code",
        "hint": "Open-source infrastructure as code software tool created by HashiCorp.",
        "extraHint": "Enables declaratively defining cloud resources across AWS, GCP, and Azure."
      },
      {
        "word": "BITBUCKET",
        "category": "Repository Hosting",
        "hint": "Git-based code hosting and collaboration tool developed and maintained by Atlassian.",
        "extraHint": "Integrates tightly with Jira and Confluence project management environments."
      },
      {
        "word": "PROMETHEUS",
        "category": "Metrics & Alerting",
        "hint": "Open source systems monitoring and alerting toolkit originally built at SoundCloud.",
        "extraHint": "Collects and records real-time metrics in a time-series database with PromQL."
      },
      {
        "word": "CLOUDFLARE",
        "category": "Edge Infrastructure",
        "hint": "Global cloud services provider offering DDoS mitigation, DNS, and edge computing.",
        "extraHint": "Accelerates web performance while shielding origins behind a vast reverse proxy."
      },
      {
        "word": "DEPLOYMENT",
        "category": "Release Process",
        "hint": "The process of packaging and transferring software releases into production.",
        "extraHint": "Transforms raw source code into active, accessible user-facing services."
      },
      {
        "word": "INTERPRETER",
        "category": "Execution Engine",
        "hint": "Program executing instructions written in a programming or scripting language directly.",
        "extraHint": "Runs source instructions line-by-line without requiring an ahead-of-time compilation step."
      },
      {
        "word": "TRANSPILER",
        "category": "Source-to-Source",
        "hint": "Source-to-source compiler translating code between two high-level languages.",
        "extraHint": "Converts languages like TypeScript, CoffeeScript, or modern ESNext into vanilla JS."
      },
      {
        "word": "ASSEMBLER",
        "category": "Machine Translator",
        "hint": "Program translating symbolic assembly language instructions into raw machine opcodes.",
        "extraHint": "Converts human-readable mnemonics like MOV and ADD into binary machine instructions."
      },
      {
        "word": "FORMATTER",
        "category": "Code Cleaner",
        "hint": "Automated utility that reformats source code according to standardized style rules.",
        "extraHint": "Examples like Prettier and Black eliminate team debates regarding code layout."
      },
      {
        "word": "PLAYWRIGHT",
        "category": "Browser Automation",
        "hint": "Framework developed by Microsoft for reliable end-to-end browser automation.",
        "extraHint": "Enables cross-browser testing across Chromium, WebKit, and Firefox engines."
      },
      {
        "word": "ASSERTION",
        "category": "Test Check",
        "hint": "Boolean expression declared by a programmer to be true at a specific point in code.",
        "extraHint": "Causes execution to halt with an error if the specified condition fails."
      },
      {
        "word": "REFACTORING",
        "category": "Code Improvement",
        "hint": "The systematic process of restructuring existing code without altering its external behavior.",
        "extraHint": "Improves code readability, reduces architectural complexity, and aids maintainability."
      },
      {
        "word": "BENCHMARK",
        "category": "Speed Evaluation",
        "hint": "Standardized test or series of tests measuring the performance of code or systems.",
        "extraHint": "Quantifies execution time, throughput, and resource consumption against baselines."
      },
      {
        "word": "ENCRYPTION",
        "category": "Data Protection",
        "hint": "The process of converting plain information into unintelligible ciphertext.",
        "extraHint": "Requires a secret cryptographic key to decrypt and restore the original information."
      },
      {
        "word": "CERTIFICATE",
        "category": "Digital Identity",
        "hint": "Electronic document using a digital signature to bind a public key with an identity.",
        "extraHint": "Issued by trusted Certificate Authorities (CAs) to authenticate secure websites."
      },
      {
        "word": "VULNERABILITY",
        "category": "Security Flaw",
        "hint": "Weakness in an information system or software that can be exploited by a threat actor.",
        "extraHint": "Cataloged globally under the Common Vulnerabilities and Exposures (CVE) database."
      },
      {
        "word": "INJECTION",
        "category": "Code Attack",
        "hint": "Attack where untrusted input is interpreted as code commands by an interpreter.",
        "extraHint": "SQL injection and command injection are severe examples of this vulnerability class."
      },
      {
        "word": "SANITIZATION",
        "category": "Input Cleansing",
        "hint": "Process of cleaning or filtering user input to prevent malicious code execution.",
        "extraHint": "Strips risky characters or tags before data is passed to queries or HTML outputs."
      },
      {
        "word": "RATELIMITING",
        "category": "Traffic Defense",
        "hint": "Mechanism controlling the rate of incoming requests sent to a network interface or API.",
        "extraHint": "Prevents server exhaustion, brute force guessing, and distributed denial of service."
      },
      {
        "word": "CLANGUAGE",
        "category": "Systems Language",
        "hint": "Dennis Ritchie's classic language that forms the foundation of modern computing.",
        "extraHint": "Provides low-level access to memory while retaining cross-platform portability."
      },
      {
        "word": "DOCKERFILE",
        "category": "DevOps Config",
        "hint": "Text document containing all the commands a user could call to assemble an image.",
        "extraHint": "Automates the building of containerized application deployment environments."
      },
      {
        "word": "QUICKSORT",
        "category": "Sorting Algorithm",
        "hint": "Efficient divide-and-conquer sorting algorithm selecting a pivot element.",
        "extraHint": "Sorts sub-arrays in-place with average O(n log n) time complexity."
      },
      {
        "word": "MERGESORT",
        "category": "Sorting Algorithm",
        "hint": "Divide-and-conquer algorithm dividing arrays in half, sorting and merging them.",
        "extraHint": "Guarantees predictable O(n log n) sorting performance with stable ordering."
      },
      {
        "word": "RECURSION",
        "category": "Core Concept",
        "hint": "Method of solving a computational problem where the solution depends on smaller instances.",
        "extraHint": "Functions invoke themselves until reaching a designated base termination condition."
      },
      {
        "word": "MEMOIZATION",
        "category": "Optimization",
        "hint": "Optimization technique caching results of expensive function calls to avoid recomputation.",
        "extraHint": "Transforms exponential recursive time complexities into linear lookups."
      },
      {
        "word": "BACKTRACK",
        "category": "Search Technique",
        "hint": "General algorithmic technique incrementally building candidates and abandoning failures.",
        "extraHint": "Classic approach for solving mazes, Sudoku puzzles, and the N-Queens problem."
      },
      {
        "word": "BRANCHING",
        "category": "Control Flow",
        "hint": "Instruction in a computer program that can cause a computer to begin executing another instruction.",
        "extraHint": "Manifests as if-else conditions, switch cases, and conditional jumps."
      },
      {
        "word": "POLYMORPH",
        "category": "OOP Principle",
        "hint": "Provision of a single interface to entities of different data types.",
        "extraHint": "Allows subclasses to provide specific implementations of methods defined by parents."
      },
      {
        "word": "ENCAPSULE",
        "category": "OOP Principle",
        "hint": "Bundling of data with the methods that operate on that data within a capsule.",
        "extraHint": "Restricts direct access to internal object components to safeguard state."
      },
      {
        "word": "INTERFACE",
        "category": "Contract Type",
        "hint": "Abstract type defining a contract of methods that implementing classes must satisfy.",
        "extraHint": "Enables decoupled architectures and dependency inversion without concrete coupling."
      },
      {
        "word": "GENERATOR",
        "category": "Iterator Producer",
        "hint": "Function that can pause execution and yield multiple values sequentially on demand.",
        "extraHint": "Generates items lazily without instantiating entire lists into memory."
      },
      {
        "word": "IMMUTABLE",
        "category": "State Behavior",
        "hint": "Object whose state cannot be altered in memory after it is initially created.",
        "extraHint": "Eliminates side effects and guarantees complete thread safety in concurrency."
      },
      {
        "word": "INSPECTOR",
        "category": "Developer Tool",
        "hint": "Tool enabling developers to view and modify DOM nodes and styling in real-time.",
        "extraHint": "Built directly into modern web browsers under the Developer Tools pane."
      },
      {
        "word": "PROTECTED",
        "category": "Access Control",
        "hint": "Access modifier allowing access within the declaring class and its derived subclasses.",
        "extraHint": "Permits inheritance hierarchies to interact with internal members."
      },
      {
        "word": "IMPLEMENTS",
        "category": "Type Contract",
        "hint": "Keyword indicating that a class pledges to fulfill an interface contract.",
        "extraHint": "Requires defining all method signatures mandated by the specified interface."
      },
      {
        "word": "INSTANCEOF",
        "category": "Type Checking",
        "hint": "Operator testing whether an object has in its prototype chain the prototype of a constructor.",
        "extraHint": "Verifies whether an object is an instance of a specific class hierarchy."
      },
      {
        "word": "SHADOWING",
        "category": "Scope Collision",
        "hint": "Condition where a variable declared within an inner scope masks a variable in an outer scope.",
        "extraHint": "Can cause subtle bugs when developers assume they are modifying the outer variable."
      },
      {
        "word": "NAMESPACE",
        "category": "Declarative Scope",
        "hint": "Declarative region providing a scope to identifiers to prevent naming conflicts.",
        "extraHint": "Allows grouping logical libraries under unique identifiers like std:: or boost::."
      },
      {
        "word": "FRAMEWORK",
        "category": "Software Platform",
        "hint": "Reusable software environment providing particular functionality as part of a larger platform.",
        "extraHint": "Inverts control: the framework calls user code rather than user code calling libraries."
      },
      {
        "word": "HOTRELOAD",
        "category": "Developer Feature",
        "hint": "Feature injecting updated code directly into a running app without losing state.",
        "extraHint": "Pioneered in web and mobile frameworks like Flutter and React to accelerate coding."
      },
      {
        "word": "ALGORITHM",
        "category": "Computer Science",
        "hint": "Finite sequence of rigorous instructions used to solve a class of specific problems.",
        "extraHint": "Can be expressed in natural language, pseudocode, or direct programming syntax."
      },
      {
        "word": "HEURISTIC",
        "category": "Problem Solving",
        "hint": "Practical method not guaranteed to be optimal or perfect, but sufficient for immediate goals.",
        "extraHint": "Speeds up finding a satisfactory solution where exhaustive search is impractical."
      },
      {
        "word": "DEBUGGING",
        "category": "Software Repair",
        "hint": "Process of detecting, analyzing, and removing errors or unexpected bugs from software.",
        "extraHint": "Involves stepping through code with breakpoints and examining variable states."
      },
      {
        "word": "PROFILING",
        "category": "Performance",
        "hint": "Dynamic program analysis investigating memory usage, time complexity, and call metrics.",
        "extraHint": "Guides developers to optimize critical inner loops and eliminate performance bottlenecks."
      },
      {
        "word": "SIGNATURE",
        "category": "Function Contract",
        "hint": "Defines the inputs and outputs of a function, including parameter types and return type.",
        "extraHint": "Used by compilers to enforce type safety and resolve polymorphic method overloading."
      },
      {
        "word": "DOCSTRING",
        "category": "In-Code Docs",
        "hint": "String literal specified in source code used to document a specific code segment.",
        "extraHint": "Extensively used in Python to document functions, classes, and modules interactively."
      },
      {
        "word": "METACLASS",
        "category": "OOP Architecture",
        "hint": "Class whose instances are themselves classes rather than normal data objects.",
        "extraHint": "Defines how classes behave and are constructed in languages like Python and Smalltalk."
      },
      {
        "word": "INHERITANCE",
        "category": "Code Reuse",
        "hint": "Mechanism whereby one class acquires all fields and methods from another parent class.",
        "extraHint": "Establishes hierarchical type relationships and facilitates polymorphic code reuse."
      },
      {
        "word": "SUPERCLASS",
        "category": "Parent Class",
        "hint": "Class from which other derived subclasses inherit properties and methods.",
        "extraHint": "Also known as a base class or parent class in object-oriented programming."
      },
      {
        "word": "CONSTRUCT",
        "category": "Object Creation",
        "hint": "Special method called automatically when an instance of a class is created in memory.",
        "extraHint": "Initializes object state variables and allocates required backing resources."
      },
      {
        "word": "REGISTERS",
        "category": "CPU Storage",
        "hint": "Small, high-speed storage locations directly inside the central processing unit.",
        "extraHint": "Hold temporary operands and memory addresses for single-cycle execution."
      },
      {
        "word": "HEXADECIMAL",
        "category": "Base Sixteen",
        "hint": "Positional numeral system with a radix of 16 using digits 0-9 and letters A-F.",
        "extraHint": "Convenient human-readable shorthand for representing raw binary bytes."
      },
      {
        "word": "CHARACTER",
        "category": "Text Element",
        "hint": "Single textual unit such as a letter, digit, punctuation mark, or whitespace.",
        "extraHint": "Stored digitally as integer code points defined by standards like ASCII or Unicode."
      },
      {
        "word": "STRINGIFY",
        "category": "Serialization",
        "hint": "The operation of converting an in-memory data object into a serialized string representation.",
        "extraHint": "Commonly executed via JSON.stringify() to transmit data across HTTP networks."
      },
      {
        "word": "THREADPOOL",
        "category": "Concurrency Pattern",
        "hint": "Collection of pre-instantiated worker threads waiting to execute queued tasks.",
        "extraHint": "Eliminates the performance overhead of repeatedly spawning and tearing down threads."
      },
      {
        "word": "ASYNCHRONY",
        "category": "Execution Flow",
        "hint": "Occurrence of events independent of the main program flow without blocking.",
        "extraHint": "Enables modern user interfaces to remain smooth and responsive during long I/O tasks."
      },
      {
        "word": "NONBLOCKING",
        "category": "Concurrent Flow",
        "hint": "I/O paradigm where operations return immediately instead of stalling execution.",
        "extraHint": "Allows a single thread to service thousands of concurrent network connections."
      },
      {
        "word": "COROUTINES",
        "category": "Cooperative Tasks",
        "hint": "Functions that can suspend execution to be resumed later at explicit yield points.",
        "extraHint": "Power lightweight green threads and asynchronous programming across Kotlin and Python."
      },
      {
        "word": "MULTIPLEX",
        "category": "I/O Management",
        "hint": "Method by which multiple signals or data streams are combined over a shared medium.",
        "extraHint": "I/O multiplexing primitives like epoll and kqueue monitor hundreds of sockets simultaneously."
      },
      {
        "word": "THROUGHPUT",
        "category": "Data Rate",
        "hint": "Amount of data or number of transactions processed by a system in a given time period.",
        "extraHint": "Commonly quantified as queries per second (QPS) or megabytes per second (MB/s)."
      },
      {
        "word": "BANDWIDTH",
        "category": "Network Capacity",
        "hint": "Maximum rate of data transfer across a given path in a network connection.",
        "extraHint": "Measured in bits per second; defines the upper throughput ceiling of network links."
      },
      {
        "word": "BOTTLENECK",
        "category": "Performance Pinch",
        "hint": "Component or process whose limited capacity restricts the throughput of an entire system.",
        "extraHint": "Common bottlenecks include disk I/O, database locks, and unindexed search queries."
      },
      {
        "word": "REGRESSION",
        "category": "Software Defect",
        "hint": "Software bug where a feature that previously worked correctly stops functioning.",
        "extraHint": "Prevented by maintaining comprehensive automated test suites run on every commit."
      },
      {
        "word": "INTEGRATE",
        "category": "System Testing",
        "hint": "Testing phase where individual software modules are combined and tested as a group.",
        "extraHint": "Verifies that decoupled components, database layers, and APIs collaborate smoothly."
      },
      {
        "word": "RESPONSIVE",
        "category": "Web Design",
        "hint": "Design approach making web pages render dynamically on all screen sizes.",
        "extraHint": "Utilizes fluid grids, flexible images, and CSS media queries."
      },
      {
        "word": "ANIMATION",
        "category": "Visual Motion",
        "hint": "Technique animating visual properties smoothly between keyframes.",
        "extraHint": "Enhances interactive user experience and feedback in modern UIs."
      },
      {
        "word": "TRANSITION",
        "category": "State Change",
        "hint": "Smooth CSS interpolation between two visual property states.",
        "extraHint": "Animates changes in colors, transforms, and opacities."
      },
      {
        "word": "TRANSFORM",
        "category": "CSS Geometry",
        "hint": "CSS property modifying the coordinate space of visual elements.",
        "extraHint": "Supports 2D and 3D translation, rotation, scaling, and skewing."
      },
      {
        "word": "UNDEFINED",
        "category": "Missing Value",
        "hint": "Primitive value automatically assigned to variables that have not been initialized.",
        "extraHint": "Commonly encountered in JavaScript when inspecting unset properties."
      },
      {
        "word": "REFERENCE",
        "category": "Value Alias",
        "hint": "Direct alias referencing an existing object or variable in memory.",
        "extraHint": "Safe alternative to raw pointers, widely used in C++, Java, and C#."
      },
      {
        "word": "IDENTIFIER",
        "category": "Naming Token",
        "hint": "Name chosen by a programmer to identify variables, classes, and methods.",
        "extraHint": "Must conform to character naming rules defined by the language grammar."
      },
      {
        "word": "STATEMENT",
        "category": "Code Directive",
        "hint": "Syntactic unit of code expressing an action to be carried out.",
        "extraHint": "Programs consist of a sequence of statements executed in order."
      },
      {
        "word": "EXPRESSION",
        "category": "Evaluated Code",
        "hint": "Combination of variables, operators, and functions producing a value.",
        "extraHint": "Can be evaluated to yield a concrete resulting data value."
      },
      {
        "word": "PROCEDURE",
        "category": "Routine",
        "hint": "Subroutine that performs a sequence of steps without returning a value.",
        "extraHint": "Contrasts with functions in procedural languages like Pascal."
      },
      {
        "word": "SUBROUTINE",
        "category": "Subprogram",
        "hint": "Callable sequence of code instructions performing a designated computation.",
        "extraHint": "Saves memory by allowing identical code to be invoked repeatedly."
      },
      {
        "word": "PARAMETER",
        "category": "Function Input",
        "hint": "Variable declared in a function definition representing an expected input.",
        "extraHint": "Receives concrete argument values passed during function invocation."
      },
      {
        "word": "ITERATION",
        "category": "Looping",
        "hint": "Repeated execution of a sequence of code instructions inside a loop.",
        "extraHint": "Implemented using for, while, and do-while programming loops."
      },
      {
        "word": "CONDITION",
        "category": "Branch Test",
        "hint": "Expression evaluating to true or false determining execution branching.",
        "extraHint": "Used in if-statements, switch cases, and loop termination checks."
      },
      {
        "word": "SIDEEFFECT",
        "category": "External Impact",
        "hint": "Modification of state or interaction with outside world outside return value.",
        "extraHint": "Includes mutating global variables, logging to console, and writing to disk."
      },
      {
        "word": "INTERPRET",
        "category": "Script Runner",
        "hint": "Executes source instructions line by line without prior compilation.",
        "extraHint": "Provides high developer agility with interactive shells and fast testing."
      },
      {
        "word": "APPLICATION",
        "category": "End-User App",
        "hint": "Software package designed to perform specific user-facing tasks.",
        "extraHint": "Encompasses web applications, mobile apps, and desktop utilities."
      },
      {
        "word": "BLUETOOTH",
        "category": "Short-Range Link",
        "hint": "Short-range wireless technology standard for exchanging data between devices.",
        "extraHint": "Commonly pairs wireless headphones, keyboards, and mobile accessories."
      },
      {
        "word": "SATELLITE",
        "category": "Orbital Relay",
        "hint": "Orbital relay device receiving and retransmitting data communications.",
        "extraHint": "Provides global internet access to remote regions via low Earth orbit constellations."
      },
      {
        "word": "ANTIVIRUS",
        "category": "Malware Shield",
        "hint": "Software designed to detect, prevent, and remove computer malware and viruses.",
        "extraHint": "Scans system files against known signature databases and behavioral anomalies."
      },
      {
        "word": "RANSOMWARE",
        "category": "Data Extortion",
        "hint": "Type of malware that encrypts files and demands payment for the decryption key.",
        "extraHint": "Inflicts devastating disruptions on hospitals, cities, and corporate systems."
      },
      {
        "word": "SYMMETRIC",
        "category": "Shared Secret",
        "hint": "Cryptography form where identical secret keys are used for encryption and decryption.",
        "extraHint": "Fast and efficient; examples include AES (Advanced Encryption Standard)."
      },
      {
        "word": "ASYMMETRIC",
        "category": "Public Key",
        "hint": "Cryptography using mathematical keypairs: a public key and a private key.",
        "extraHint": "Solves key distribution challenges; foundational to HTTPS and digital signatures."
      }
    ]
  },
  "technology": {
    "easy": [
      {
        "word": "ALARM",
        "category": "Warning Sounder",
        "hint": "Warning device sounding an alert when thresholds or intrusions occur.",
        "extraHint": "Alerts administrators to server overheating or battery UPS failures."
      },
      {
        "word": "AMP",
        "category": "Current Unit",
        "hint": "Standard unit measuring the rate of flow of electric charge per second.",
        "extraHint": "Short for ampere; electrical fuses are rated in amperes to prevent fires."
      },
      {
        "word": "APP",
        "category": "Software Program",
        "hint": "Self-contained software package designed to carry out a specific task.",
        "extraHint": "Short for application; downloaded from mobile and desktop app stores."
      },
      {
        "word": "AUDIO",
        "category": "Sound Tech",
        "hint": "Electronic recording, transmission, or reproduction of acoustic sound waves.",
        "extraHint": "Handled by sound processing chips and heard through headphones and speakers."
      },
      {
        "word": "BAUD",
        "category": "Modulation Unit",
        "hint": "Measurement of data transmission speed representing signal symbol changes.",
        "extraHint": "Historically used to characterize the speed of analog telephone modems."
      },
      {
        "word": "BITS",
        "category": "Binary Digits",
        "hint": "The basic indivisible units of information in computing and digital communication.",
        "extraHint": "Can store strictly a 0 or 1; eight individual bits form a single byte."
      },
      {
        "word": "BOT",
        "category": "Automated Worker",
        "hint": "Software script executing automated and repetitive tasks over networks.",
        "extraHint": "Crawls web pages, indexes search terms, or automates chat dialogues."
      },
      {
        "word": "BUS",
        "category": "Signal Pathway",
        "hint": "Communication system transferring data between internal computer parts.",
        "extraHint": "Interconnects processors, system memory, and expansion slot buses."
      },
      {
        "word": "CABLE",
        "category": "Protected Leads",
        "hint": "Enclosed assembly of electrical wires or optical fibers within a jacket.",
        "extraHint": "Includes HDMI, Ethernet, DisplayPort, and heavy electrical power cables."
      },
      {
        "word": "CART",
        "category": "Game Cartridge",
        "hint": "Removable memory cartridge holding game ROMs for classic consoles.",
        "extraHint": "Pioneered by vintage video game systems like Atari, NES, and Game Boy."
      },
      {
        "word": "CELL",
        "category": "Network Sector",
        "hint": "Geographic area served by a cellular mobile base station transmitter.",
        "extraHint": "Seamlessly hands off phone calls as commuters travel between cell zones."
      },
      {
        "word": "CHIP",
        "category": "Integrated Circuit",
        "hint": "Microscopic piece of semiconductor material containing circuit gates.",
        "extraHint": "Fabricated onto silicon wafers to produce processors and flash memory."
      },
      {
        "word": "CLOCK",
        "category": "Cycle Timer",
        "hint": "Quartz oscillator producing periodic electronic pulses synchronizing CPUs.",
        "extraHint": "Clock frequency is measured in gigahertz (billions of cycles per second)."
      },
      {
        "word": "CODEC",
        "category": "Media Compressor",
        "hint": "Software or hardware module compressing and decompressing audio and video.",
        "extraHint": "Reduces file sizes for streaming; examples include MP3, AAC, and HEVC."
      },
      {
        "word": "CORD",
        "category": "Flexible Lead",
        "hint": "Insulated flexible wire carrying electric power or signal data.",
        "extraHint": "Connects desktop computers and monitors to AC wall power outlets."
      },
      {
        "word": "CORE",
        "category": "Processor Unit",
        "hint": "Independent processing engine inside a multicore microprocessor chip.",
        "extraHint": "Modern consumer CPUs house 8, 16, or more cores executing tasks in parallel."
      },
      {
        "word": "CPU",
        "category": "Central Processor",
        "hint": "The primary electronic circuitry that executes computer programs.",
        "extraHint": "Stands for Central Processing Unit; often dubbed the computer's brain."
      },
      {
        "word": "DIAL",
        "category": "Rotary Knob",
        "hint": "Round rotary control knob used to adjust settings or display measurements.",
        "extraHint": "Found on laboratory power supplies, analog radios, and testing meters."
      },
      {
        "word": "DIODE",
        "category": "One-Way Valve",
        "hint": "Two-terminal electronic component that conducts current primarily in one direction.",
        "extraHint": "Protects delicate circuitry against reverse polarity and rectifies alternating current."
      },
      {
        "word": "DISK",
        "category": "Magnetic Platter",
        "hint": "Thin, flat circular plate on which data is stored magnetically or optically.",
        "extraHint": "Spins at high speeds inside mechanical hard disk drives under read heads."
      },
      {
        "word": "DRIVE",
        "category": "Storage Mechanism",
        "hint": "Computer peripheral used to write and retrieve data from digital media.",
        "extraHint": "Encompasses solid-state drives, hard drives, and flash thumb sticks."
      },
      {
        "word": "DRONE",
        "category": "Unmanned Aircraft",
        "hint": "Unmanned aerial vehicle controlled remotely or autonomously via onboard computers.",
        "extraHint": "Equipped with motorized rotors and stabilized camera gimbals for aerial imaging."
      },
      {
        "word": "DUAL",
        "category": "Two-Part Setup",
        "hint": "Architecture employing two matching components operating collaboratively.",
        "extraHint": "Refers to dual-core processors, dual-band Wi-Fi, and dual-monitor desks."
      },
      {
        "word": "FAN",
        "category": "Thermal Cooler",
        "hint": "Hardware cooling fan circulating ambient air over heat exchangers.",
        "extraHint": "Prevents critical semiconductor components from thermal throttling."
      },
      {
        "word": "FIBER",
        "category": "Optical Glass",
        "hint": "Thin strand of purified glass transmitting digital data as light pulses.",
        "extraHint": "Enables multi-gigabit broadband transmissions across intercity backbones."
      },
      {
        "word": "FLASH",
        "category": "Solid Memory",
        "hint": "Non-volatile electronic memory technology that can be erased and rewritten.",
        "extraHint": "Underpins modern USB thumb keys, memory cards, and fast NVMe SSDs."
      },
      {
        "word": "FLASK",
        "category": "Chemistry Glass",
        "hint": "Bottle-shaped glass container with a narrow neck used in scientific laboratories.",
        "extraHint": "Includes Erlenmeyer conical flasks and round-bottom boiling flasks for distillation."
      },
      {
        "word": "GATE",
        "category": "Logic Circuit",
        "hint": "Fundamental semiconductor circuit performing elementary boolean calculations.",
        "extraHint": "Combines transistors to execute AND, OR, NOT, NAND, and NOR operations."
      },
      {
        "word": "GEAR",
        "category": "Toothed Wheel",
        "hint": "Toothed mechanical wheel that engages with another to transmit rotational torque.",
        "extraHint": "Essential precision component in robotics, 3D printers, and camera zoom lenses."
      },
      {
        "word": "GIGA",
        "category": "One Billion",
        "hint": "Metric prefix denoting a multiplier of one billion (10 to the 9th power).",
        "extraHint": "Appears in gigahertz clock frequencies and gigabyte memory capacities."
      },
      {
        "word": "GPU",
        "category": "Graphics Processor",
        "hint": "Specialized processor accelerating 3D rendering and mathematical tasks.",
        "extraHint": "Stands for Graphics Processing Unit; powers games and AI models."
      },
      {
        "word": "GRID",
        "category": "Electrical Network",
        "hint": "Interconnected network delivering electrical electricity across large regions.",
        "extraHint": "Connects power stations to consumer households and corporate data centers."
      },
      {
        "word": "HDD",
        "category": "Magnetic Storage",
        "hint": "Electro-mechanical data storage device using rotating magnetic platters.",
        "extraHint": "Stands for Hard Disk Drive; stores bulk data at lower price points."
      },
      {
        "word": "HERTZ",
        "category": "Cycle Frequency",
        "hint": "Unit of frequency measuring periodic oscillations or cycles per second.",
        "extraHint": "Quantifies CPU clock rates in gigahertz and monitor refresh rates in hertz."
      },
      {
        "word": "HOST",
        "category": "Network Computer",
        "hint": "Computer or other device connected to a computer network offering services.",
        "extraHint": "Provides web pages, database records, and remote storage access to clients."
      },
      {
        "word": "HUB",
        "category": "Network Center",
        "hint": "Hardware device connecting multiple devices together on a local network.",
        "extraHint": "Broadcasts incoming network data packets to all connected ports."
      },
      {
        "word": "ICON",
        "category": "Graphic Symbol",
        "hint": "Pictorial visual image displayed on computer screens representing a program.",
        "extraHint": "Clicking or tapping an icon opens associated files, apps, or settings menus."
      },
      {
        "word": "KILO",
        "category": "One Thousand",
        "hint": "Metric prefix denoting a multiplication factor of one thousand (10 to the 3rd).",
        "extraHint": "Encountered in kilobits per second transmission speeds and kilohertz audio."
      },
      {
        "word": "LASER",
        "category": "Coherent Beam",
        "hint": "Device producing intense coherent light via stimulated emission radiation.",
        "extraHint": "Reads optical discs, scans barcodes, and powers high-speed fiber links."
      },
      {
        "word": "LCD",
        "category": "Liquid Crystal",
        "hint": "Flat-panel display technology utilizing liquid crystals to form pixels.",
        "extraHint": "Stands for Liquid Crystal Display; lit by energy-efficient backlights."
      },
      {
        "word": "LED",
        "category": "Solid-State Light",
        "hint": "Semiconductor light source emitting photons when electric current flows.",
        "extraHint": "Stands for Light Emitting Diode; illuminates screens and indicators."
      },
      {
        "word": "LENS",
        "category": "Optical Element",
        "hint": "Transparent curved glass or plastic disk focusing light rays to form images.",
        "extraHint": "The critical optical element in smartphone cameras, microscopes, and projectors."
      },
      {
        "word": "LIDAR",
        "category": "Laser Scanning",
        "hint": "Method for determining ranges by targeting an object with a laser and measuring reflection.",
        "extraHint": "Creates high-resolution 3D point cloud maps for self-driving cars and archaeology."
      },
      {
        "word": "LINK",
        "category": "Data Connection",
        "hint": "Communication pathway bridging two distinct electronic devices or networks.",
        "extraHint": "Maintains connectivity over fiber cables, twisted copper, or radio links."
      },
      {
        "word": "LINUX",
        "category": "Open-Source OS",
        "hint": "Family of open-source Unix-like operating systems based on the Linux kernel.",
        "extraHint": "Created by Linus Torvalds in 1991; powers cloud servers, supercomputers, and Android."
      },
      {
        "word": "LOAD",
        "category": "Power Demand",
        "hint": "Electrical power consumed by an appliance or circuit connected to a supply.",
        "extraHint": "Higher computing workloads increase electrical load and thermal heat output."
      },
      {
        "word": "LOGIC",
        "category": "Boolean Thinking",
        "hint": "Reasoning governed by strict mathematical principles in digital systems.",
        "extraHint": "Implemented using semiconductor logic gates like AND, OR, and XOR."
      },
      {
        "word": "MACRO",
        "category": "Automated Sequence",
        "hint": "Single programmatic trigger that executes a sequence of automated actions.",
        "extraHint": "Saves time by automating repetitive keyboard keystrokes and workflows."
      },
      {
        "word": "MEGA",
        "category": "One Million",
        "hint": "Metric prefix representing multiplication by one million (10 to the 6th power).",
        "extraHint": "Used in megabytes of cache storage and megapixels of camera sensors."
      },
      {
        "word": "MENU",
        "category": "Options List",
        "hint": "List of command options or choices presented on screen to a computer user.",
        "extraHint": "Permits easy navigation through application features and device settings."
      },
      {
        "word": "METER",
        "category": "Measuring Device",
        "hint": "Precision instrument measuring physical quantities like voltage or power.",
        "extraHint": "Measures electrical current, resistance, network signal, and temperature."
      },
      {
        "word": "MICRO",
        "category": "One Millionth",
        "hint": "Metric prefix representing one millionth (10 to the minus 6) or miniature.",
        "extraHint": "Appears in microcontrollers, microchips, and microscopic electronics."
      },
      {
        "word": "MODE",
        "category": "Operating State",
        "hint": "Distinct operating state or condition in which a hardware system functions.",
        "extraHint": "Examples include flight mode, safe mode, silent mode, and dark mode."
      },
      {
        "word": "MODEM",
        "category": "Network Hardware",
        "hint": "Hardware device converting digital signals into analog signals for transmission lines.",
        "extraHint": "Stands for Modulator-Demodulator; bridges domestic homes to ISP networks."
      },
      {
        "word": "MOTOR",
        "category": "Rotary Mover",
        "hint": "Machine converting electrical energy into mechanical rotational motion.",
        "extraHint": "Drives cooling fan blades, optical disc spindles, and robotic joint gears."
      },
      {
        "word": "MOUSE",
        "category": "Pointing Device",
        "hint": "Handheld desktop pointing device detecting 2D motion across mousepads.",
        "extraHint": "Features physical buttons and scroll wheels to navigate screen cursors."
      },
      {
        "word": "MUTE",
        "category": "Sound Silence",
        "hint": "Command or physical switch silencing audio output from speakers instantly.",
        "extraHint": "Conveniently silences microphone audio inputs during video conference meetings."
      },
      {
        "word": "NANO",
        "category": "One Billionth",
        "hint": "Prefix denoting a factor of one billionth (10 to the minus 9th power).",
        "extraHint": "Describes semiconductor transistor gate lithography measurements in nanometers."
      },
      {
        "word": "NODE",
        "category": "Network Point",
        "hint": "Connection point or redistribution hub in an interconnected network.",
        "extraHint": "Includes routers, computers, servers, and connected smart home switches."
      },
      {
        "word": "OHMS",
        "category": "Resistance Unit",
        "hint": "Unit of electrical resistance opposing the flow of electric current.",
        "extraHint": "Ohm's Law states that current equals voltage divided by total resistance."
      },
      {
        "word": "ONE",
        "category": "Binary High",
        "hint": "The numeric value 1 representing high voltage or true in digital circuits.",
        "extraHint": "The complementary binary digit to zero underpinning microprocessors."
      },
      {
        "word": "OPTIC",
        "category": "Light Science",
        "hint": "Relating to the scientific phenomena of visible light and refractive lenses.",
        "extraHint": "Utilized in camera lenses, optical microscopes, and fiber optic links."
      },
      {
        "word": "PACK",
        "category": "Battery Array",
        "hint": "Assembly of interconnected battery cells delivering high voltage and capacity.",
        "extraHint": "Drives electric vehicle powertrains and provides uninterruptible backup."
      },
      {
        "word": "PANEL",
        "category": "Flat Surface",
        "hint": "Flat board or screen surface displaying visual graphics or mounting switches.",
        "extraHint": "Includes solar photovoltaic panels and high-definition display panels."
      },
      {
        "word": "PATCH",
        "category": "Software Fix",
        "hint": "Quick software update repairing identified security vulnerabilities or bugs.",
        "extraHint": "Deployed to protect operating systems from emerging cyber threats."
      },
      {
        "word": "PICO",
        "category": "One Trillionth",
        "hint": "Metric prefix denoting one trillionth (10 to the minus 12th power).",
        "extraHint": "Utilized in electronics to quantify small capacitances in picofarads."
      },
      {
        "word": "PIN",
        "category": "Contact Lead",
        "hint": "Conductive metal pin or prong establishing an electrical contact joint.",
        "extraHint": "Microprocessor sockets house thousands of micro pins for power and data."
      },
      {
        "word": "PING",
        "category": "Network Latency",
        "hint": "Network utility measuring the round-trip latency time to a remote server.",
        "extraHint": "Reports latency in milliseconds; lower ping is vital for competitive gaming."
      },
      {
        "word": "PIXEL",
        "category": "Picture Element",
        "hint": "The smallest controllable visual element on a digital display screen.",
        "extraHint": "Arranged in red, green, and blue sub-pixels to form full-color images."
      },
      {
        "word": "PLUG",
        "category": "Connector Head",
        "hint": "Movable connector with projecting pins inserted into a matching jack.",
        "extraHint": "Mates with female sockets to establish electrical or audio continuity."
      },
      {
        "word": "PORT",
        "category": "Connection Socket",
        "hint": "Engineered physical jack or logical network address accepting connections.",
        "extraHint": "Physical examples include USB ports; logical examples include port 443."
      },
      {
        "word": "POWER",
        "category": "Energy Delivery",
        "hint": "Rate at which electrical energy is transferred through a power circuit.",
        "extraHint": "Delivered by power supply units (PSUs) and measured in electrical watts."
      },
      {
        "word": "PROBE",
        "category": "Sensor Lead",
        "hint": "Physical sensor or diagnostic needle placed into circuits to test voltages.",
        "extraHint": "Transfers circuit wave signals onto oscilloscope screens for debugging."
      },
      {
        "word": "QUAD",
        "category": "Four-Part Setup",
        "hint": "System design integrating four identical processing or communication units.",
        "extraHint": "Encompasses quad-core microprocessors and quad-channel memory boards."
      },
      {
        "word": "QUBIT",
        "category": "Quantum Bit",
        "hint": "Basic unit of quantum information, the quantum analogue of the classical binary bit.",
        "extraHint": "Capable of existing in quantum superposition of both 0 and 1 states at once."
      },
      {
        "word": "RADAR",
        "category": "Radio Detection",
        "hint": "Detection system using radio waves to determine distance, angle, or velocity of objects.",
        "extraHint": "Used in air traffic control, maritime navigation, and vehicular collision avoidance."
      },
      {
        "word": "RADIO",
        "category": "Wireless Waves",
        "hint": "Technology using electromagnetic radio frequencies to carry signals.",
        "extraHint": "Underpins Wi-Fi, Bluetooth, mobile cellular communications, and radar."
      },
      {
        "word": "RAM",
        "category": "Computer Memory",
        "hint": "Volatile high-speed working memory storing active application data.",
        "extraHint": "Stands for Random Access Memory; loses all data when powered down."
      },
      {
        "word": "RELAY",
        "category": "Electromagnet Switch",
        "hint": "Electrically controlled switch using an electromagnet to move contacts.",
        "extraHint": "Allows delicate low-voltage logic to control heavy industrial motors."
      },
      {
        "word": "ROBOT",
        "category": "Automated Entity",
        "hint": "Autonomous or semi-autonomous machine designed to execute physical tasks.",
        "extraHint": "Employed on automotive assembly lines, warehouse sorting, and outer space."
      },
      {
        "word": "ROM",
        "category": "Firmware Memory",
        "hint": "Non-volatile memory permanently storing bootstrap instructions.",
        "extraHint": "Stands for Read-Only Memory; retains data without electrical power."
      },
      {
        "word": "ROOT",
        "category": "Top Directory",
        "hint": "The top-level base directory in a file system hierarchy, or superuser access.",
        "extraHint": "Possesses total unrestricted administrative control over operating systems."
      },
      {
        "word": "SCAN",
        "category": "Digital Capture",
        "hint": "The act of analyzing an image, document, or object sequentially with a beam.",
        "extraHint": "Converts paper receipts, photos, and barcodes into digital bit patterns."
      },
      {
        "word": "SIM",
        "category": "Subscriber Card",
        "hint": "Smart card securely storing international mobile subscriber identity keys.",
        "extraHint": "Stands for Subscriber Identity Module; fits into cellular phones."
      },
      {
        "word": "SITE",
        "category": "Web Location",
        "hint": "Collection of related web pages located under a single internet domain name.",
        "extraHint": "Accessible via web browsers over the internet through HTTP protocols."
      },
      {
        "word": "SLOT",
        "category": "Expansion Socket",
        "hint": "Engineered socket on a motherboard receiving add-in cards or memory sticks.",
        "extraHint": "Includes PCI Express x16 slots, RAM DIMM slots, and M.2 storage slots."
      },
      {
        "word": "SMART",
        "category": "Connected Tech",
        "hint": "Electronic device possessing computing intelligence and network connectivity.",
        "extraHint": "Describes modern smartphones, smartwatches, and smart home appliances."
      },
      {
        "word": "SONAR",
        "category": "Acoustic Detection",
        "hint": "Navigation system utilizing acoustic sound waves to locate submerged objects.",
        "extraHint": "Navigates naval submarines and maps deep ocean seafloor trenches."
      },
      {
        "word": "SSD",
        "category": "Solid-State Storage",
        "hint": "Fast electronic storage medium utilizing semiconductor flash memory.",
        "extraHint": "Stands for Solid-State Drive; features no moving mechanical parts."
      },
      {
        "word": "TAPE",
        "category": "Magnetic Film",
        "hint": "Long magnetic coated plastic ribbon used for storing digital data archives.",
        "extraHint": "Employed by enterprise data vaults for long-term secure cold data backups."
      },
      {
        "word": "TERA",
        "category": "One Trillion",
        "hint": "Metric prefix representing one trillion (10 to the 12th power) units.",
        "extraHint": "Standard capacity measurement for modern high-capacity SSDs and hard drives."
      },
      {
        "word": "TEST",
        "category": "Validation Run",
        "hint": "Trial or procedure conducted to verify performance, durability, or safety.",
        "extraHint": "Hardware components undergo stress testing to verify stability under load."
      },
      {
        "word": "TRACK",
        "category": "Storage Ring",
        "hint": "Concentric circular path on a magnetic disk or optical media platter.",
        "extraHint": "Subdivided into sectors where binary files are read and written."
      },
      {
        "word": "USB",
        "category": "Universal Interface",
        "hint": "Standard connection interface for peripherals, data, and power.",
        "extraHint": "Stands for Universal Serial Bus; widely ubiquitous across devices."
      },
      {
        "word": "USER",
        "category": "Human Operator",
        "hint": "Person who uses or operates a computer, network, or electronic service.",
        "extraHint": "Interacts with software interfaces using keyboards, mice, or touchscreens."
      },
      {
        "word": "VIDEO",
        "category": "Visual Media",
        "hint": "Electronic broadcasting, recording, and playback of moving visual images.",
        "extraHint": "Displayed across monitors, smartphones, and high-definition televisions."
      },
      {
        "word": "VIEW",
        "category": "Screen Display",
        "hint": "Visual perspective or UI panel presented on a computer display monitor.",
        "extraHint": "Can refer to database query results or window viewing layouts in graphics apps."
      },
      {
        "word": "VOLT",
        "category": "Electric Potential",
        "hint": "Standard International unit of electrical potential difference and electromotive force.",
        "extraHint": "Pushes electrical current through wires; standard USB supplies 5 volts."
      },
      {
        "word": "WATT",
        "category": "Power Rating",
        "hint": "Unit of electric power quantifying the rate of energy consumption per second.",
        "extraHint": "Monitors the power usage of computer hardware and server power supplies."
      },
      {
        "word": "WAVE",
        "category": "Oscillation",
        "hint": "Periodic disturbance traveling through a medium or space carrying energy.",
        "extraHint": "Encompasses radio waves, light waves, sound waves, and electrical waveforms."
      },
      {
        "word": "WEB",
        "category": "Hypertext Network",
        "hint": "Interlinked hypertext document system accessed over the internet.",
        "extraHint": "Created at CERN by Tim Berners-Lee; viewed using web browsers."
      },
      {
        "word": "WIRE",
        "category": "Metal Conductor",
        "hint": "Slender flexible metallic strand conducting electric currents easily.",
        "extraHint": "Commonly manufactured from copper or aluminum enclosed in insulation."
      },
      {
        "word": "ZERO",
        "category": "Binary Low",
        "hint": "The numeric value 0 representing low voltage or false in digital circuits.",
        "extraHint": "One of two binary digits composing the mathematical bedrock of all software."
      },
      {
        "word": "ZOOM",
        "category": "Magnification",
        "hint": "Changing the focal length of a camera lens to make subjects appear nearer.",
        "extraHint": "Available as optical lens zoom or software digital image crop magnification."
      }
    ],
    "medium": [
      {
        "word": "ACTUATOR",
        "category": "Mechanical Control",
        "hint": "Component of a machine responsible for moving and controlling a mechanism or system.",
        "extraHint": "Converts electrical energy into mechanical physical motion, such as motors and solenoids."
      },
      {
        "word": "ADAPTER",
        "category": "Connector Bridge",
        "hint": "Device that converts attributes of one electrical device or system to those of another.",
        "extraHint": "Bridges incompatible plug shapes or transforms voltage levels for foreign travel."
      },
      {
        "word": "ADAPTERS",
        "category": "Connector Bridges",
        "hint": "Hardware accessories facilitating connection between different physical interfaces.",
        "extraHint": "Adapt modern USB Type-C ports to legacy VGA, HDMI, or Ethernet jacks."
      },
      {
        "word": "ADWARE",
        "category": "Ad-Generating Code",
        "hint": "Software that automatically displays or downloads unwanted advertising materials.",
        "extraHint": "Often packaged alongside freeware; clutters web browsers with pop-ups and redirects."
      },
      {
        "word": "ALKALINE",
        "category": "Disposable Cell",
        "hint": "Type of primary battery dependent upon the reaction between zinc and manganese dioxide.",
        "extraHint": "Standard household consumer battery format found in AA and AAA sizes for remotes."
      },
      {
        "word": "ANDROID",
        "category": "Mobile Platform",
        "hint": "Mobile operating system based on a modified version of the Linux kernel by Google.",
        "extraHint": "The most widely deployed operating system worldwide, powering billions of smartphones."
      },
      {
        "word": "ANTENNA",
        "category": "Radio Transceiver",
        "hint": "Electrical device converting electric currents into radio waves, and vice versa.",
        "extraHint": "Transmits and receives signals for Wi-Fi routers, mobile towers, and satellites."
      },
      {
        "word": "ANTENNAS",
        "category": "Radio Transceiver",
        "hint": "Conductors that convert radio frequency currents into electromagnetic fields.",
        "extraHint": "Equipped on telecommunications masts, Wi-Fi routers, and mobile devices."
      },
      {
        "word": "ARDUINO",
        "category": "Microcontroller",
        "hint": "Open-source electronics platform based on easy-to-use hardware and software boards.",
        "extraHint": "Pioneered affordable microcontroller tinkering for robotics and sensor hobbyists."
      },
      {
        "word": "BARCODE",
        "category": "Optical Code",
        "hint": "Machine-readable optical label containing information about the item to which it is attached.",
        "extraHint": "Read rapidly at retail checkouts using optical laser scanners or camera imagers."
      },
      {
        "word": "BATTERY",
        "category": "Chemical Power",
        "hint": "Device consisting of one or more electrochemical cells with external connections.",
        "extraHint": "Stores chemical energy and converts it into electrical power to run portable electronics."
      },
      {
        "word": "BEACONS",
        "category": "Wireless Emitters",
        "hint": "Small wireless transmitters using Bluetooth Low Energy to broadcast signals.",
        "extraHint": "Enable indoor navigation and location-based notifications in malls and airports."
      },
      {
        "word": "BEAKER",
        "category": "Glass Container",
        "hint": "Cylindrical glass container with a flat bottom used in laboratories for mixing liquids.",
        "extraHint": "Made of heat-resistant borosilicate glass with graduated measurement markings."
      },
      {
        "word": "BLURAY",
        "category": "Optical Disc",
        "hint": "Digital optical disc data storage format designed to supersede the DVD format.",
        "extraHint": "Uses a blue-violet laser to read high-density discs holding HD and 4K movies."
      },
      {
        "word": "BOTNET",
        "category": "Compromised Network",
        "hint": "Number of internet-connected devices, each running one or more bots under remote control.",
        "extraHint": "Marshaled by malicious operators to execute colossal distributed denial of service attacks."
      },
      {
        "word": "BROWSER",
        "category": "Web Navigator",
        "hint": "Software application used to access and view websites on the World Wide Web.",
        "extraHint": "Renders HTML documents, CSS styling, and executes client JavaScript code."
      },
      {
        "word": "BUNSEN",
        "category": "Gas Burner",
        "hint": "Small adjustable gas burner used in laboratories to heat chemicals and sterilize tools.",
        "extraHint": "Invented by Robert Bunsen; produces a single open gas flame."
      },
      {
        "word": "BURETTE",
        "category": "Titration Tube",
        "hint": "Graduated glass tube with a tap at one end, for delivering known volumes of a liquid.",
        "extraHint": "Standard apparatus utilized in analytical chemistry quantitative titration assays."
      },
      {
        "word": "CALIPER",
        "category": "Precision Gauge",
        "hint": "Instrument for measuring external or internal physical dimensions of an object.",
        "extraHint": "Features vernier or digital LCD readouts measuring down to hundredths of a millimeter."
      },
      {
        "word": "CELLULAR",
        "category": "Mobile Radio",
        "hint": "Wireless mobile communication based on adjacent geographic cell sectors.",
        "extraHint": "Delivers high-speed internet data and phone calling to mobile smartphones."
      },
      {
        "word": "CHARGER",
        "category": "Power Supply",
        "hint": "Device used to put energy into a secondary cell or rechargeable battery.",
        "extraHint": "Supplies controlled direct current to restore chemical energy in exhausted batteries."
      },
      {
        "word": "CHARGERS",
        "category": "Power Supplies",
        "hint": "Electronic devices supplying electrical current to recharge secondary batteries.",
        "extraHint": "Feature intelligent charging circuits regulating current flow to prolong battery life."
      },
      {
        "word": "CHATBOT",
        "category": "Conversational AI",
        "hint": "Software application used to conduct an on-line chat conversation via text or speech.",
        "extraHint": "Simulates human conversation to provide customer support or interactive information."
      },
      {
        "word": "CHIPSET",
        "category": "Motherboard Logic",
        "hint": "Set of integrated circuits that manage data flow between processor, memory, and peripherals.",
        "extraHint": "Coordinates communication between CPU and Southbridge/Northbridge buses."
      },
      {
        "word": "CHIPSETS",
        "category": "System Controllers",
        "hint": "Groups of integrated microcircuits that work together to manage motherboard buses.",
        "extraHint": "Control PCIe lane allocation, USB controllers, and memory communication channels."
      },
      {
        "word": "CHROME",
        "category": "Web Browser",
        "hint": "Widespread web browser developed by Google powered by the Blink engine.",
        "extraHint": "Celebrated for swift browsing speeds, vast extension support, and sync."
      },
      {
        "word": "CIRCUIT",
        "category": "Electronics",
        "hint": "Complete closed path through which electric current can flow to perform work.",
        "extraHint": "Assembled onto printed circuit boards using copper traces and solder pads."
      },
      {
        "word": "COAXIAL",
        "category": "Shielded Cable",
        "hint": "Electrical cable with an inner conductor surrounded by a tubular insulating layer.",
        "extraHint": "Historically used for cable television distribution and high-speed DOCSIS modems."
      },
      {
        "word": "COMPASS",
        "category": "Direction Finder",
        "hint": "Instrument containing a magnetized pointer showing the direction of magnetic north.",
        "extraHint": "Ancient navigational tool guiding sailors, explorers, and hikers across the world."
      },
      {
        "word": "CONSOLE",
        "category": "Gaming Machine",
        "hint": "Dedicated computer hardware designed primarily for playing interactive video games.",
        "extraHint": "Connects to home televisions, featuring specialized gamepads and high-res GPUs."
      },
      {
        "word": "CONSOLES",
        "category": "Gaming Hardware",
        "hint": "Dedicated electronic systems designed to output video game entertainment to TVs.",
        "extraHint": "Popular systems include Sony PlayStation, Microsoft Xbox, and Nintendo Switch."
      },
      {
        "word": "COOKIES",
        "category": "Web Trackers",
        "hint": "Small files placed on a computer by websites to store browsing preferences.",
        "extraHint": "Keep users logged into web accounts across subsequent browser visits."
      },
      {
        "word": "COOLANT",
        "category": "Transfer Fluid",
        "hint": "Specially formulated liquid circulating through cooling loops to transfer heat.",
        "extraHint": "Treated with anti-corrosive agents and biocides to prevent internal algae growth."
      },
      {
        "word": "COOLING",
        "category": "Heat Removal",
        "hint": "The process of removing waste heat from processors and power electronics.",
        "extraHint": "Prevents performance throttling and safeguards semiconductors against burn-in."
      },
      {
        "word": "COUPLER",
        "category": "Cable Joiner",
        "hint": "Device used to join two cable ends together to extend the length of a connection.",
        "extraHint": "Commonly utilized in RJ45 Ethernet installations to connect two shorter cables."
      },
      {
        "word": "CRYSTAL",
        "category": "Quartz Clock",
        "hint": "Piezoelectric quartz crystal oscillating at precise stable frequencies.",
        "extraHint": "Serves as the master clock heartbeat synchronizing microprocessor cycles."
      },
      {
        "word": "CURRENT",
        "category": "Electron Flow",
        "hint": "Flow of electric charge carrying energy through conductive metallic wires.",
        "extraHint": "Measured in amperes; flowing electrons power microchips and components."
      },
      {
        "word": "CYBERNET",
        "category": "Digital Domain",
        "hint": "The interconnected digital sphere of computers, networks, and communication.",
        "extraHint": "Describes systems where physical machinery is controlled via computer code."
      },
      {
        "word": "DEBIAN",
        "category": "Community OS",
        "hint": "Free and open-source software operating system developed by a volunteer community.",
        "extraHint": "Known for legendary stability and rigorous adherence to the Debian Free Software Guidelines."
      },
      {
        "word": "DECIBEL",
        "category": "Acoustic Metric",
        "hint": "Logarithmic unit used to measure sound intensity and electrical signal levels.",
        "extraHint": "Quantifies noise pollution, headphone volume, and amplifier signal-to-noise ratios."
      },
      {
        "word": "DESKTOP",
        "category": "Stationary PC",
        "hint": "Personal computer designed for regular use at a single stationary desk location.",
        "extraHint": "Features modular PC cases, separate display monitors, and external keyboards."
      },
      {
        "word": "DESKTOPS",
        "category": "Workstation PCs",
        "hint": "Personal computers designed for regular use at a single stationary location.",
        "extraHint": "Equipped with dedicated monitors, external mechanical keyboards, and mice."
      },
      {
        "word": "DIGITAL",
        "category": "Discrete Code",
        "hint": "Expressed in discrete numerical digits, especially binary zeros and ones.",
        "extraHint": "Contrasts with continuous analog physical signals, resisting electronic noise."
      },
      {
        "word": "DISPLAY",
        "category": "Visual Screen",
        "hint": "Electronic visual device presenting graphics and textual information to users.",
        "extraHint": "Manufactured using OLED, LCD, or quantum-dot visual panel technologies."
      },
      {
        "word": "DOCKING",
        "category": "Expansion Base",
        "hint": "Hardware station providing desktop power, multiple monitor ports, and USB hubs.",
        "extraHint": "Allows laptops to transform into full multi-display workstations with a single cable."
      },
      {
        "word": "DONGLE",
        "category": "Hardware Adapter",
        "hint": "Small piece of computer hardware that connects to a port on another device.",
        "extraHint": "Provides missing connectivity ports such as HDMI, Ethernet, or wireless mouse links."
      },
      {
        "word": "DONGLES",
        "category": "Interface Adapters",
        "hint": "Compact hardware adapters that plug into computer ports to add wireless or video.",
        "extraHint": "Provide wireless mouse connections, hardware security keys, and display outputs."
      },
      {
        "word": "DRIVERS",
        "category": "Device Interfaces",
        "hint": "Software components allowing operating systems to communicate with hardware.",
        "extraHint": "Direct communication between OS kernels and graphics cards, mice, and printers."
      },
      {
        "word": "DROPBOX",
        "category": "File Hosting",
        "hint": "File hosting service offering cloud storage, file synchronization, and personal cloud.",
        "extraHint": "Pioneered effortless background folder synchronization across desktop computers."
      },
      {
        "word": "EARBUDS",
        "category": "In-Ear Audio",
        "hint": "Tiny audio speakers designed to fit snugly inside the listener's ear canals.",
        "extraHint": "Popularized by wireless models like AirPods, featuring compact pocket charging cases."
      },
      {
        "word": "EARPHONE",
        "category": "Compact Audio",
        "hint": "Small electronic audio speaker designed to fit closely inside human ears.",
        "extraHint": "Delivers private stereo sound from portable music players, laptops, and smartphones."
      },
      {
        "word": "ELECTRON",
        "category": "Charge Carrier",
        "hint": "Subatomic particle whose movement generates electrical currents in circuits.",
        "extraHint": "Flows through conductive copper wires and semiconductor transistor gates."
      },
      {
        "word": "ENCODER",
        "category": "Signal Converter",
        "hint": "Sensing device providing feedback by converting motion into electrical signals.",
        "extraHint": "Measures motor shaft rotation angles in CNC mills and robotic joints."
      },
      {
        "word": "EREADER",
        "category": "Digital Reading",
        "hint": "Handheld electronic device designed primarily for the purpose of reading digital books.",
        "extraHint": "Utilizes electronic paper E-Ink displays reflecting natural ambient light without glare."
      },
      {
        "word": "ETHERNET",
        "category": "Wired Networking",
        "hint": "Family of wired networking technologies commonly used in local area networks (LAN).",
        "extraHint": "Transmits data across Cat6 twisted copper pairs or high-speed fiber-optic strands."
      },
      {
        "word": "EXPLOIT",
        "category": "System Breach",
        "hint": "Code taking deliberate advantage of a software vulnerability to gain access.",
        "extraHint": "Used by black-hat hackers to execute arbitrary code or steal databases."
      },
      {
        "word": "FANLESS",
        "category": "Passive Cooling",
        "hint": "Design cooling computer components through convection without using spinning fans.",
        "extraHint": "Ensures completely silent operation and eliminates dust accumulation inside enclosures."
      },
      {
        "word": "FEDORA",
        "category": "Linux Platform",
        "hint": "Linux distribution developed by the Fedora Project, sponsored by Red Hat.",
        "extraHint": "Serves as an upstream testing ground for innovations in Red Hat Enterprise Linux."
      },
      {
        "word": "FERRITE",
        "category": "Magnetic Ceramic",
        "hint": "Ceramic material made by mixing iron oxide with other metallic elements.",
        "extraHint": "Used in magnetic cores for transformers, inductors, and noise-filtering ferrite beads."
      },
      {
        "word": "FILTERS",
        "category": "Signal Cleaners",
        "hint": "Electronic circuits or optical elements designed to remove unwanted frequencies.",
        "extraHint": "Strip electronic noise from audio signals and eliminate glare from camera lenses."
      },
      {
        "word": "FIREFOX",
        "category": "Open Browser",
        "hint": "Free and open-source web browser created and maintained by Mozilla.",
        "extraHint": "Prioritizes user privacy, open web standards, and robust tracking protection."
      },
      {
        "word": "FIREWALL",
        "category": "Network Security",
        "hint": "Security system monitoring and filtering network traffic according to rules.",
        "extraHint": "Blocks malicious intrusion attempts while allowing authorized business traffic."
      },
      {
        "word": "FIRMWARE",
        "category": "Embedded Software",
        "hint": "Specific class of computer software providing low-level control for device hardware.",
        "extraHint": "Stored permanently on flash ROM chips; initializes components upon device startup."
      },
      {
        "word": "FITTINGS",
        "category": "Tube Connectors",
        "hint": "Threaded hardware joints securing liquid cooling tubes onto blocks and radiators.",
        "extraHint": "Utilize compression rings and rubber O-rings to prevent dangerous fluid leaks."
      },
      {
        "word": "FLASHER",
        "category": "Firmware Tool",
        "hint": "Hardware or software utility used to write updated code to flash ROM chips.",
        "extraHint": "Upgrades motherboard BIOS and microcontrollers to support new CPU generations."
      },
      {
        "word": "GADGETS",
        "category": "Tech Devices",
        "hint": "Small technological items or devices having a particular ingenious function.",
        "extraHint": "Encompasses fitness trackers, smart home plugs, and wireless accessories."
      },
      {
        "word": "GAMEPAD",
        "category": "Console Controller",
        "hint": "Handheld game controller held in two hands with fingers used to provide input.",
        "extraHint": "Equipped with analog thumbsticks, directional D-pads, trigger buttons, and haptics."
      },
      {
        "word": "GATEWAY",
        "category": "Network Node",
        "hint": "Network node serving as an entrance to another network with different protocols.",
        "extraHint": "Translates packet formats between local corporate networks and the wider internet."
      },
      {
        "word": "GIMBAL",
        "category": "Camera Stabilizer",
        "hint": "Pivoted support that allows the rotation of an object about three independent axes.",
        "extraHint": "Uses motorized brushless gyros to eliminate shaky camera movements in video production."
      },
      {
        "word": "GIMBALS",
        "category": "Motorized Mounts",
        "hint": "Motorized mechanical pivots stabilizing camera sensors along three axes.",
        "extraHint": "Eliminate handshake vibrations in cinematic film production and drone filming."
      },
      {
        "word": "GRAPHENE",
        "category": "Wonder Material",
        "hint": "Single layer of carbon atoms arranged in a two-dimensional honeycomb lattice.",
        "extraHint": "Incredibly strong, lightweight, and an exceptional conductor of electricity and heat."
      },
      {
        "word": "GRAPHICS",
        "category": "Video Rendering",
        "hint": "Specialized circuit designed to manipulate and alter memory to accelerate image creation.",
        "extraHint": "Contained on GPUs; processes thousands of shader calculation threads concurrently."
      },
      {
        "word": "HARDDISK",
        "category": "Magnetic Storage",
        "hint": "Data storage device using magnetic storage to store and retrieve digital information.",
        "extraHint": "Utilizes spinning platters read by moving magnetic heads inside a sealed case."
      },
      {
        "word": "HEADSET",
        "category": "Audio & Mic",
        "hint": "Combination of headphones and a boom microphone worn on the user's head.",
        "extraHint": "Essential gear for gaming voice chat, call centers, and hands-free communications."
      },
      {
        "word": "HEATSINK",
        "category": "Thermal Cooling",
        "hint": "Passive heat exchanger that transfers heat generated by electronic components to air.",
        "extraHint": "Equipped with aluminum or copper fins to dissipate high CPU thermal output."
      },
      {
        "word": "HOTSPOT",
        "category": "Wireless Access",
        "hint": "Physical location where people may access the internet using Wi-Fi technology.",
        "extraHint": "Commonly broadcast from smartphones or public airport and coffee shop routers."
      },
      {
        "word": "HUMANOID",
        "category": "Anthropomorphic Bot",
        "hint": "Robot with its body shape built to resemble the human body form.",
        "extraHint": "Features a torso, head, two arms, and two legs for operating in human environments."
      },
      {
        "word": "ICLOUD",
        "category": "Apple Cloud",
        "hint": "Cloud storage and cloud computing service from Apple integrated into iOS and macOS.",
        "extraHint": "Stores user photos, device backups, notes, and keychain passwords across Apple gear."
      },
      {
        "word": "INDUCTOR",
        "category": "Electronic Component",
        "hint": "Passive electronic component that stores energy in a magnetic field when current flows.",
        "extraHint": "Used in power regulation circuits, chokes, and DC-DC converters on motherboards."
      },
      {
        "word": "INFRARED",
        "category": "Optical Radiation",
        "hint": "Electromagnetic radiation with wavelengths longer than visible light but shorter than radio.",
        "extraHint": "Commonly utilized in consumer television remote controls and night-vision cameras."
      },
      {
        "word": "INHALER",
        "category": "Medical Delivery",
        "hint": "Medical device used for delivering medication into the lungs via inhalation.",
        "extraHint": "Provides targeted relief for asthma and respiratory conditions through aerosol mist."
      },
      {
        "word": "INVERTER",
        "category": "Power Converter",
        "hint": "Electronic device or circuitry that changes direct current (DC) to alternating current (AC).",
        "extraHint": "Used in uninterruptible power supplies (UPS), solar systems, and electric cars."
      },
      {
        "word": "JOYSTICK",
        "category": "Input Device",
        "hint": "Input device consisting of a stick that pivots on a base to report its angle.",
        "extraHint": "Popular in flight simulators, gaming controllers, and industrial crane controls."
      },
      {
        "word": "KERNEL",
        "category": "Core OS Engine",
        "hint": "Core program at the heart of an operating system having total control over system hardware.",
        "extraHint": "Dispatches CPU time, manages physical memory pages, and handles system interrupts."
      },
      {
        "word": "KEYCAP",
        "category": "Keyboard Part",
        "hint": "Plastic cover placed over the mechanical switch on a computer keyboard.",
        "extraHint": "Often molded from durable PBT or ABS plastic with double-shot legend lettering."
      },
      {
        "word": "KEYPADS",
        "category": "Input Panels",
        "hint": "Sets of alphanumeric buttons arranged in a pad or block used to enter input data.",
        "extraHint": "Found on PIN entry security terminals, door locks, and numeric keyboard sections."
      },
      {
        "word": "LAPTOP",
        "category": "Portable Computer",
        "hint": "Small, portable personal computer with a clamshell form factor and integrated display.",
        "extraHint": "Combines battery power, keyboard, trackpad, and processor in a slim notebook chassis."
      },
      {
        "word": "LAPTOPS",
        "category": "Clamshell PCs",
        "hint": "Portable computers with integrated screens and keyboards folding for transit.",
        "extraHint": "Provide all-day battery life for mobile work, studying, and travel computing."
      },
      {
        "word": "LATENCY",
        "category": "Network Delay",
        "hint": "Time interval between sending a data packet and receiving an acknowledgment.",
        "extraHint": "Critical in real-time gaming, financial high-frequency trading, and VoIP calls."
      },
      {
        "word": "LEDLIGHT",
        "category": "Solid-State Light",
        "hint": "Semiconductor light source that emits light when current flows through it.",
        "extraHint": "Stands for Light Emitting Diode; illuminated displays, indicators, and bulbs efficiently."
      },
      {
        "word": "LITHIUM",
        "category": "Battery Metal",
        "hint": "Lightweight alkali metal utilized in high-energy rechargeable battery chemistries.",
        "extraHint": "Powers modern smartphones, laptops, electric vehicles, and cordless power tools."
      },
      {
        "word": "LOGGERS",
        "category": "Data Recorders",
        "hint": "Electronic instruments that record measurements over time using built-in sensors.",
        "extraHint": "Log ambient temperature, humidity, vibration, and air quality across shipments."
      },
      {
        "word": "LUMENS",
        "category": "Light Output",
        "hint": "Measure of the total quantity of visible light emitted by a source per unit time.",
        "extraHint": "Rates the brightness of projector bulbs, LED monitors, and photographic studio lamps."
      },
      {
        "word": "MACHINE",
        "category": "Mechanism",
        "hint": "Apparatus using mechanical power and having several parts to perform tasks.",
        "extraHint": "Transforms electrical energy into physical work or computational calculations."
      },
      {
        "word": "MAGNETIC",
        "category": "Storage Media",
        "hint": "Storage of data on a magnetized medium using different patterns of magnetization.",
        "extraHint": "Applied in magnetic tapes, hard disk platters, and legacy floppy diskettes."
      },
      {
        "word": "MAGNETS",
        "category": "Field Emitters",
        "hint": "Objects producing magnetic fields attracting or repelling magnetic materials.",
        "extraHint": "Essential components in computer loudspeakers, cooling fans, and disk drives."
      },
      {
        "word": "MALWARE",
        "category": "Malicious Software",
        "hint": "Software intentionally designed to cause damage to a computer, server, or computer network.",
        "extraHint": "Umbrella term encompassing trojans, worms, ransomware, spyware, and adware."
      },
      {
        "word": "MODULAR",
        "category": "Custom Parts",
        "hint": "Constructed with standardized units or dimensions for flexible arrangement.",
        "extraHint": "Modular power supplies allow connecting only the specific cables needed."
      },
      {
        "word": "MODULARS",
        "category": "Custom Systems",
        "hint": "Constructed with standardized interchangeable parts for easy maintenance.",
        "extraHint": "Modular power supplies allow connecting only the necessary internal power cables."
      },
      {
        "word": "MODULES",
        "category": "System Parts",
        "hint": "Independent self-contained units of hardware or software with defined interfaces.",
        "extraHint": "Allows modular hardware upgrades and hot-swappable enterprise server blades."
      },
      {
        "word": "MONITOR",
        "category": "Visual Output",
        "hint": "Output device displaying visual images and text generated by connected computers.",
        "extraHint": "Equipped with LCD, OLED, or IPS panels in varying aspect ratios like 16:9 or 21:9."
      },
      {
        "word": "NANOTECH",
        "category": "Atomic Scale",
        "hint": "Technology conducted at the nanoscale between 1 and 100 nanometers.",
        "extraHint": "Enables engineering novel carbon nanotubes and ultra-dense semiconductor transistors."
      },
      {
        "word": "NETSURF",
        "category": "Compact Browser",
        "hint": "Lightweight open-source web browser engine designed for low-memory systems.",
        "extraHint": "Renders HTML documents on vintage computing hardware and embedded boards."
      },
      {
        "word": "NETWORK",
        "category": "System Link",
        "hint": "Interconnected group of computer systems linked to exchange shared data.",
        "extraHint": "Facilitates seamless communication using Ethernet and Internet protocols."
      },
      {
        "word": "NFCTECH",
        "category": "Near Field Link",
        "hint": "Set of communication protocols for communication between two devices over small distance.",
        "extraHint": "Powers contactless tap-to-pay mobile payments like Apple Pay and Google Wallet."
      },
      {
        "word": "NOTEBOOK",
        "category": "Portable PC",
        "hint": "Extremely portable personal computer designed to fold shut for transportation.",
        "extraHint": "Lightweight laptop computer suited for mobile productivity and business travel."
      },
      {
        "word": "ODOMETER",
        "category": "Distance Counter",
        "hint": "Instrument used for measuring the total distance traveled by a vehicle.",
        "extraHint": "Tracks vehicle mileage over its lifespan, stored securely in digital cluster memory."
      },
      {
        "word": "ONEDRIVE",
        "category": "Microsoft Cloud",
        "hint": "File hosting and synchronization service operated by Microsoft as part of Office.",
        "extraHint": "Synchronizes desktop files, pictures, and documents seamlessly to cloud servers."
      },
      {
        "word": "OPTICAL",
        "category": "Light-Based Media",
        "hint": "Storage medium that uses laser light to read and write digital data on discs.",
        "extraHint": "Includes compact discs (CDs), digital versatile discs (DVDs), and Blu-ray media."
      },
      {
        "word": "OPTICS",
        "category": "Light Systems",
        "hint": "The branch of physics that studies the behavior and properties of light.",
        "extraHint": "Encompasses camera lenses, laser diodes, fiber-optic cables, and optical sensors."
      },
      {
        "word": "OXIMETER",
        "category": "Blood Oxygen",
        "hint": "Medical device monitoring the oxygen saturation level of human blood non-invasively.",
        "extraHint": "Clips onto a finger and passes wavelengths of light through skin to measure SpO2."
      },
      {
        "word": "PACKETS",
        "category": "Data Envelopes",
        "hint": "Formatted blocks of digital data carried across packet-switched networks.",
        "extraHint": "Include routing headers with destination IP addresses and payload chunks."
      },
      {
        "word": "PHISHING",
        "category": "Deceptive Fraud",
        "hint": "Form of social engineering where attackers deceive people into revealing sensitive info.",
        "extraHint": "Commonly executed via counterfeit emails designed to mimic banks or services."
      },
      {
        "word": "PIPETTE",
        "category": "Liquid Measuring",
        "hint": "Laboratory tool used in chemistry and biology to transport measured volumes of liquid.",
        "extraHint": "Dispenses microscopic microliter volumes of reagent fluids during DNA assays."
      },
      {
        "word": "PLOTTER",
        "category": "Vector Printing",
        "hint": "Specialized computer printer drawing high-precision vector graphics on paper.",
        "extraHint": "Used by architects, cartographers, and civil engineers for blueprints."
      },
      {
        "word": "PRINTER",
        "category": "Hardcopy Output",
        "hint": "Hardware output device transferring digital text and images onto physical paper.",
        "extraHint": "Includes laser printers, inkjet mechanisms, and thermal receipt machines."
      },
      {
        "word": "PROGRAM",
        "category": "Code Sequence",
        "hint": "Collection of instructions executed by a computer to carry out specific work.",
        "extraHint": "Written by developers to automate workflows, calculate data, or render visuals."
      },
      {
        "word": "PULSES",
        "category": "Signal Bursts",
        "hint": "Rapid, transient changes in the amplitude of an electrical voltage or light wave.",
        "extraHint": "Convey digital binary ones and zeros across high-speed electronic buses."
      },
      {
        "word": "PUMPUNIT",
        "category": "Coolant Mover",
        "hint": "Miniature mechanical pump maintaining liquid flow throughout a cooling loop.",
        "extraHint": "Keeps water circulating smoothly through water blocks and cooling radiators."
      },
      {
        "word": "QRCODE",
        "category": "Matrix Barcode",
        "hint": "Two-dimensional matrix barcode invented in 1994 by Japanese company Denso Wave.",
        "extraHint": "Quickly read by smartphone cameras to open URLs, pay bills, and view menus."
      },
      {
        "word": "QUANTUM",
        "category": "Quantum Physics",
        "hint": "Branch of physics describing nature at the smallest scales of energy levels and atoms.",
        "extraHint": "Harnessed by quantum computers to process complex calculations simultaneously."
      },
      {
        "word": "QUARTZ",
        "category": "Clock Crystal",
        "hint": "Mineral exhibiting piezoelectricity, vibrating at precise stable frequencies.",
        "extraHint": "Serves as the internal timekeeping reference clock inside quartz watches and CPUs."
      },
      {
        "word": "RADIATOR",
        "category": "Heat Exchanger",
        "hint": "Device consisting of tubes and fins designed to cool circulating liquid.",
        "extraHint": "Mounted on computer cases with fans to dissipate heat carried by liquid cooling loops."
      },
      {
        "word": "REGISTRY",
        "category": "Windows Database",
        "hint": "Hierarchical database storing low-level settings for Microsoft Windows and applications.",
        "extraHint": "Contains hardware configurations, driver settings, file associations, and policies."
      },
      {
        "word": "RELAYS",
        "category": "Switching Units",
        "hint": "Electrically operated switches that open and close circuits electromechanically.",
        "extraHint": "Allow microcontrollers to safely actuate high-power industrial machinery."
      },
      {
        "word": "RESISTOR",
        "category": "Electronic Component",
        "hint": "Passive electrical component implementing electrical resistance in electronic circuits.",
        "extraHint": "Limits current flow, divides voltages, and protects sensitive semiconductors."
      },
      {
        "word": "RFIDCHIP",
        "category": "Radio Tag",
        "hint": "Small electronic tag using radio-frequency electromagnetic fields to identify objects.",
        "extraHint": "Enables contactless asset tracking, electronic toll collection, and inventory logging."
      },
      {
        "word": "ROBOTIC",
        "category": "Automation",
        "hint": "Relating to programmable robots and automated mechanical machinery.",
        "extraHint": "Robotic arms automate high-precision welding on modern vehicle assembly lines."
      },
      {
        "word": "ROOTKIT",
        "category": "Stealth Privilege",
        "hint": "Collection of computer software designed to enable access to a computer while hiding itself.",
        "extraHint": "Modifies kernel data structures or hypervisors to remain invisible to security tools."
      },
      {
        "word": "ROUTER",
        "category": "Networking Device",
        "hint": "Networking device that forwards data packets between computer networks.",
        "extraHint": "Inspects destination IP addresses and determines the optimal packet routing path."
      },
      {
        "word": "ROUTERS",
        "category": "Path Directors",
        "hint": "Networking hardware devices directing traffic packets between networks.",
        "extraHint": "Select the most efficient route across the internet to reach destination servers."
      },
      {
        "word": "ROUTING",
        "category": "Traffic Directing",
        "hint": "Process of selecting paths for traffic in a network or across multiple networks.",
        "extraHint": "Guided by dynamic routing tables and protocols like BGP and OSPF."
      },
      {
        "word": "SAFARI",
        "category": "Apple Browser",
        "hint": "Web browser developed by Apple optimized for energy efficiency across devices.",
        "extraHint": "The default browser preinstalled on macOS, iOS, iPadOS, and Apple platforms."
      },
      {
        "word": "SCANNER",
        "category": "Document Imager",
        "hint": "Optical input device capturing physical documents and photos as digital files.",
        "extraHint": "Converts paper records, receipts, and art into high-resolution PDF scans."
      },
      {
        "word": "SECURITY",
        "category": "Cyber Defense",
        "hint": "Measures taken to guard computers and networks against unauthorized access.",
        "extraHint": "Protects private data through passwords, firewalls, and strong encryption."
      },
      {
        "word": "SENSOR",
        "category": "Detection Device",
        "hint": "Device that detects or measures physical properties and converts them into signals.",
        "extraHint": "Measures environmental variables including temperature, light, pressure, and motion."
      },
      {
        "word": "SENSORS",
        "category": "Detectors",
        "hint": "Devices that detect and respond to physical stimuli from the environment.",
        "extraHint": "Measure light levels, temperature, proximity, pressure, and orientation."
      },
      {
        "word": "SILICON",
        "category": "Semiconductor Element",
        "hint": "Chemical element with atomic number 14, widely used as a semiconductor material.",
        "extraHint": "Forms the fundamental physical substrate for computer microchips and wafers."
      },
      {
        "word": "SOCKETS",
        "category": "Connection Points",
        "hint": "Physical motherboard sockets receiving CPUs or network communication endpoints.",
        "extraHint": "Connects microprocessors to pins or binds software processes to IP ports."
      },
      {
        "word": "SOLENOID",
        "category": "Linear Actuator",
        "hint": "Coil of wire acting as an electromagnet when carrying an electric current.",
        "extraHint": "Converts electrical pulses into linear mechanical motion to open valves and latches."
      },
      {
        "word": "SOUNDBAR",
        "category": "Home Audio",
        "hint": "Acoustic device containing multiple speakers housed in a single long enclosure.",
        "extraHint": "Mounted beneath flat-screen TVs to enhance dialogue clarity and cinematic audio."
      },
      {
        "word": "SPEAKER",
        "category": "Audio Transducer",
        "hint": "Electroacoustic device that converts electrical audio signals into sound waves.",
        "extraHint": "Reproduces music and speech across consumer televisions, stereos, and phones."
      },
      {
        "word": "SPLITTER",
        "category": "Signal Divider",
        "hint": "Device that divides a single input cable signal into multiple separate output paths.",
        "extraHint": "Used to split headphone audio jacks or distribute coaxial television signals."
      },
      {
        "word": "SPOOFING",
        "category": "Identity Imposture",
        "hint": "Act of disguising a communication from an unknown source as being from a known source.",
        "extraHint": "Includes IP address spoofing, email address forging, and caller ID masquerades."
      },
      {
        "word": "SPYWARE",
        "category": "Surveillance Tool",
        "hint": "Software aiming to gather information about a person or organization without knowledge.",
        "extraHint": "Tracks web browsing history, intercepts sensitive keystrokes, and records screen grabs."
      },
      {
        "word": "STATIC",
        "category": "Electric Charge",
        "hint": "Stationary electric charge typically produced by friction between materials.",
        "extraHint": "Electrostatic discharge (ESD) can destroy delicate computer semiconductor microchips."
      },
      {
        "word": "STEPPER",
        "category": "Precision Motor",
        "hint": "Brushless DC electric motor that divides a full rotation into a number of equal steps.",
        "extraHint": "Provides precise position control in 3D printers, CNC mills, and disk drives."
      },
      {
        "word": "STORAGE",
        "category": "Data Retention",
        "hint": "Hardware apparatus in which digital information is retained for processing.",
        "extraHint": "Encompasses solid-state drives, flash memory, magnetic platters, and tapes."
      },
      {
        "word": "STYLUS",
        "category": "Digital Pen",
        "hint": "Pen-shaped instrument used to input commands and draw on touchscreen surfaces.",
        "extraHint": "Offers pressure sensitivity and palm rejection for digital art and note taking."
      },
      {
        "word": "STYLUSES",
        "category": "Digital Pens",
        "hint": "Pen-like pointing instruments used to draw and write on digitizer touchscreens.",
        "extraHint": "Provide pressure sensitivity and tilt recognition for graphic artists and illustrators."
      },
      {
        "word": "SUBNET",
        "category": "Network Partition",
        "hint": "Logically visible subdivision of an IP network sharing a common routing prefix.",
        "extraHint": "Improves network routing efficiency and isolates departmental traffic segments."
      },
      {
        "word": "SWITCH",
        "category": "Networking Hardware",
        "hint": "Networking hardware that connects devices on a computer network using packet switching.",
        "extraHint": "Operates at the Data Link Layer (OSI Layer 2), directing packets via MAC addresses."
      },
      {
        "word": "SWITCHES",
        "category": "Local Hubs",
        "hint": "Network devices connecting multiple client computers within a local LAN.",
        "extraHint": "Forward network packets directly to destination ports using MAC hardware IDs."
      },
      {
        "word": "SYSTEMS",
        "category": "Interconnected",
        "hint": "Sets of connected things or parts forming a complex whole in computing.",
        "extraHint": "Encompasses operating systems, distributed cloud networks, and databases."
      },
      {
        "word": "TABLET",
        "category": "Mobile Computer",
        "hint": "Wireless portable personal computer with a touchscreen interface as primary input.",
        "extraHint": "Pioneered for casual browsing, media streaming, digital art, and digital reading."
      },
      {
        "word": "TABLETPC",
        "category": "Portable Screen",
        "hint": "Thin, flat mobile computer with a touchscreen display and rechargeable battery.",
        "extraHint": "Ideal for watching media, drawing digital art, and reading ebooks on the move."
      },
      {
        "word": "TABLETS",
        "category": "Touch Screens",
        "hint": "Flat mobile personal computers controlled primarily via capacitive touchscreens.",
        "extraHint": "Popular for streaming video, reading ebooks, browsing, and digital sketching."
      },
      {
        "word": "TELECOM",
        "category": "Communications",
        "hint": "Electronic systems used for transmitting messages over large distances.",
        "extraHint": "Includes worldwide telephone networks, fiber lines, and radio satellites."
      },
      {
        "word": "THERMAL",
        "category": "Heat Energy",
        "hint": "Relating to heat and temperature generation within electronic computing chips.",
        "extraHint": "Managed through copper heat pipes, liquid coolers, and spinning case fans."
      },
      {
        "word": "TIMERS",
        "category": "Clock Circuits",
        "hint": "Specialized hardware circuits generating precise electronic time delays or pulses.",
        "extraHint": "Used in microcontrollers to schedule periodic tasks and pulse-width modulation (PWM)."
      },
      {
        "word": "TOROID",
        "category": "Donut Core",
        "hint": "Doughnut-shaped magnetic core used in electrical inductors and transformers.",
        "extraHint": "Confines magnetic flux inside the core, minimizing electromagnetic radiation interference."
      },
      {
        "word": "TOUCHPAD",
        "category": "Laptop Pointer",
        "hint": "Flat touch-sensitive surface on a laptop computer used instead of a mouse.",
        "extraHint": "Allows finger gestures for scrolling, right-clicking, zooming, and window navigation."
      },
      {
        "word": "TRACKPAD",
        "category": "Touch Controller",
        "hint": "Pointing device featuring a tactile sensor to translate finger motion to screen cursors.",
        "extraHint": "Integrated directly onto laptop chassis, supporting multi-touch gestures."
      },
      {
        "word": "TROJAN",
        "category": "Disguised Malware",
        "hint": "Malware that misleads users of its true intent by masquerading as useful software.",
        "extraHint": "Once opened, it installs stealthy backdoors granting attackers remote shell control."
      },
      {
        "word": "TUBING",
        "category": "Coolant Pipes",
        "hint": "Flexible or rigid pipes channeling liquid coolant between water cooling modules.",
        "extraHint": "Available in soft PVC, clear acrylic, or rigid PETG plastic for aesthetic routing."
      },
      {
        "word": "TWEETER",
        "category": "High-Pitch Speaker",
        "hint": "Specialized loudspeaker driver designed to produce high audio frequencies.",
        "extraHint": "Handles crisp treble sounds, cymbals, and vocal harmonics in stereo monitors."
      },
      {
        "word": "UBUNTU",
        "category": "Linux Distribution",
        "hint": "Popular Debian-based Linux operating system designed for desktops and cloud servers.",
        "extraHint": "Developed by Canonical; celebrated for user-friendly desktop experience and long support."
      },
      {
        "word": "VALVES",
        "category": "Flow Restrictors",
        "hint": "Devices regulating or controlling the flow of fluids by opening or closing passageways.",
        "extraHint": "Solenoid valves electronically control coolant and pneumatic lines in automation."
      },
      {
        "word": "VARISTOR",
        "category": "Surge Protector",
        "hint": "Electronic component whose electrical resistance varies with the applied voltage.",
        "extraHint": "Clamps dangerous voltage spikes in surge protectors to shield delicate computers."
      },
      {
        "word": "VOLTAGE",
        "category": "Electric Potential",
        "hint": "Difference in electric potential between two points, driving electrical current flow.",
        "extraHint": "Modern CPU cores operate at voltages often ranging between 1.0 and 1.4 volts."
      },
      {
        "word": "WEBCAM",
        "category": "Video Input",
        "hint": "Video camera that feeds or streams an image or video in real time through a computer.",
        "extraHint": "Essential for video conference calls over Zoom, Teams, and live video streaming."
      },
      {
        "word": "WEBCAMS",
        "category": "Video Cameras",
        "hint": "Digital cameras connected to computers that feed video in real-time.",
        "extraHint": "Permit visual video conference calling across Zoom, Meet, and FaceTime."
      },
      {
        "word": "WIDGETS",
        "category": "UI Components",
        "hint": "Small application tools or graphical controls embedded in desktops and home screens.",
        "extraHint": "Display real-time weather, clocks, battery levels, and calendar events at a glance."
      },
      {
        "word": "WINDOWS",
        "category": "Operating System",
        "hint": "Graphical operating system family developed and marketed by Microsoft.",
        "extraHint": "The dominant desktop operating system globally, currently in Windows 11 iteration."
      },
      {
        "word": "WIRELESS",
        "category": "Cable-Free",
        "hint": "Telecommunications in which electromagnetic waves carry signals over air.",
        "extraHint": "Eliminates physical cables for internet access, audio, and device pairing."
      }
    ],
    "hard": [
      {
        "word": "ACCELERATOR",
        "category": "Hardware Engine",
        "hint": "Specialized hardware designed to speed up specific computational workloads.",
        "extraHint": "Examples include graphics processing units and dedicated neural network processors."
      },
      {
        "word": "ACCELEROMETER",
        "category": "Motion Sensor",
        "hint": "Electromechanical device measuring acceleration forces, both static and dynamic.",
        "extraHint": "Detects screen rotation, step counting, and sudden vehicular crash impacts."
      },
      {
        "word": "ACCELEROMETERS",
        "category": "Motion Detectors",
        "hint": "Electromechanical sensors measuring acceleration forces along Cartesian axes.",
        "extraHint": "Track steps in fitness smartbands and trigger vehicle airbags during collisions."
      },
      {
        "word": "ACCUMULATOR",
        "category": "Rechargeable Cell",
        "hint": "Apparatus by which electrical energy is stored chemically for repeated reuse.",
        "extraHint": "Encompasses lead-acid automobile batteries and advanced lithium-ion cells."
      },
      {
        "word": "ALGORITHM",
        "category": "Calculation Logic",
        "hint": "Finite sequence of rigorous instructions used to solve a class of specific problems.",
        "extraHint": "Forms the step-by-step computational procedure behind all automated computing logic."
      },
      {
        "word": "ALTIMETER",
        "category": "Height Gauge",
        "hint": "Instrument used to measure the altitude of an object above a fixed level.",
        "extraHint": "Crucial aviation instrument measuring atmospheric pressure or radar reflections."
      },
      {
        "word": "AMPLIFIER",
        "category": "Audio Booster",
        "hint": "Electronic device that increases the power of a signal, boosting audio for speakers.",
        "extraHint": "Drives high-impedance studio headphones and multi-channel home theatre setups."
      },
      {
        "word": "ANEMOMETER",
        "category": "Wind Speed Gauge",
        "hint": "Device used for measuring wind speed and direction in meteorological stations.",
        "extraHint": "Provides wind velocity readings for weather forecasting and wind turbine control."
      },
      {
        "word": "ANTIVIRUS",
        "category": "Malware Defense",
        "hint": "Software designed to prevent, detect, and remove malicious computer software.",
        "extraHint": "Scans storage files against known signature hashes and monitors memory behaviors."
      },
      {
        "word": "ANTIVIRUSES",
        "category": "Security Software",
        "hint": "Software programs designed to detect and eliminate malicious computer software.",
        "extraHint": "Monitors file systems in real-time to intercept known viruses and zero-day threats."
      },
      {
        "word": "ARTIFICIALINTELLIGENCE",
        "category": "Machine Cognition",
        "hint": "Simulation of human intelligence processes by computer systems and algorithms.",
        "extraHint": "Underpins natural language chatbots, autonomous driving, and advanced image generation."
      },
      {
        "word": "ASTRONOMICAL",
        "category": "Space Science",
        "hint": "Relating to astronomy and the scientific study of celestial space objects.",
        "extraHint": "Studied using giant ground-based optical mirrors and space orbital telescopes."
      },
      {
        "word": "AUGMENTEDREALITY",
        "category": "Overlay Graphics",
        "hint": "Interactive experience enhancing the real world with computer-generated graphics.",
        "extraHint": "Overlays digital navigational arrows, 3D models, and annotations onto glasses."
      },
      {
        "word": "AUTHENTIC",
        "category": "Identity Check",
        "hint": "The process of verifying that an entity or individual is who they claim to be.",
        "extraHint": "Validated via factors like knowledge (passwords), possession (tokens), or biometric traits."
      },
      {
        "word": "AUTHENTICATION",
        "category": "Identity Verification",
        "hint": "The process of verifying the identity of a user, process, or computing device.",
        "extraHint": "Employs security credentials such as passwords, biometrics, and physical 2FA tokens."
      },
      {
        "word": "AUTHORIZATION",
        "category": "Access Rights",
        "hint": "Function of specifying access rights and privileges to protected digital resources.",
        "extraHint": "Determines whether an authenticated user is permitted to read or modify a file."
      },
      {
        "word": "AUTOCLAVE",
        "category": "Steam Sterilizer",
        "hint": "Machine that uses steam under high pressure to kill harmful bacteria and viruses.",
        "extraHint": "Sterilizes surgical instruments and laboratory glassware to prevent infection."
      },
      {
        "word": "AUTONOMOUS",
        "category": "Self-Governing",
        "hint": "System capable of performing tasks in an unpredictable environment without human input.",
        "extraHint": "Applies to self-driving automobiles, robotic vacuums, and autonomous drones."
      },
      {
        "word": "AUTONOMOUSVEHICLE",
        "category": "Self-Driving Car",
        "hint": "Motor vehicle using automated driving systems to navigate roads without human input.",
        "extraHint": "Uses cameras, LiDAR sensors, and deep neural networks to navigate traffic safely."
      },
      {
        "word": "BANDWIDTH",
        "category": "Transmission Capacity",
        "hint": "Maximum rate of data transfer across a given digital communication path.",
        "extraHint": "Quantified in megabits or gigabits per second (Mbps / Gbps)."
      },
      {
        "word": "BAROMETERS",
        "category": "Pressure Sensors",
        "hint": "Scientific instruments measuring atmospheric pressure to gauge altitude and weather.",
        "extraHint": "Integrated into modern smartphones to calculate precise indoor floor elevation."
      },
      {
        "word": "BATTERIES",
        "category": "Chemical Cells",
        "hint": "Electrochemical devices storing chemical energy to provide portable DC power.",
        "extraHint": "Power cordless power tools, laptops, smartphones, and electric vehicle drivetrains."
      },
      {
        "word": "BIOMETRIC",
        "category": "Biological Metric",
        "hint": "Body measurements and calculations relating to human characteristics for identification.",
        "extraHint": "Encompasses facial recognition, fingerprint scanning, and retinal imaging."
      },
      {
        "word": "BIOMETRICS",
        "category": "Identity Verification",
        "hint": "Body measurements and calculations related to human characteristics for authentication.",
        "extraHint": "Encompasses fingerprint sensors, facial recognition, and retinal eye scanners."
      },
      {
        "word": "BLOCKCHAIN",
        "category": "Distributed Ledger",
        "hint": "Decentralized, distributed, and public digital ledger consisting of records called blocks.",
        "extraHint": "Underpins cryptocurrencies and decentralized smart contract networks like Ethereum."
      },
      {
        "word": "BLUETOOTH",
        "category": "Wireless Standard",
        "hint": "Short-range wireless standard for exchanging data between fixed and mobile devices.",
        "extraHint": "Employs short-wavelength UHF radio waves in the 2.4 GHz ISM frequency band."
      },
      {
        "word": "BREADBOARD",
        "category": "Prototyping",
        "hint": "Construction base used for prototyping electronics without requiring soldering.",
        "extraHint": "Features interconnected spring clips for quick insertion and removal of wires."
      },
      {
        "word": "BROADBAND",
        "category": "High-Speed Internet",
        "hint": "High-capacity transmission technique using a wide range of frequencies.",
        "extraHint": "Provides high-speed continuous internet access replacing legacy dial-up connections."
      },
      {
        "word": "BROADCASTING",
        "category": "Mass Transmission",
        "hint": "Distribution of audio or video content to a dispersed audience via electronic media.",
        "extraHint": "Encompasses over-the-air radio, terrestrial television, and satellite channels."
      },
      {
        "word": "CAMCORDER",
        "category": "Video Recorder",
        "hint": "Self-contained portable electronic device with video and sound recording capabilities.",
        "extraHint": "Historically recorded onto magnetic tape; modern models record 4K video to SD cards."
      },
      {
        "word": "CAPACITANCE",
        "category": "Charge Storage",
        "hint": "The ability of an electronic system or component to store an electric charge.",
        "extraHint": "Measured in farads; capacitors store charge to stabilize microprocessor power."
      },
      {
        "word": "CAPACITOR",
        "category": "Electronic Component",
        "hint": "Passive electronic component with two terminals that stores energy electrostatically.",
        "extraHint": "Smooths voltage ripples and stabilizes power delivery to microprocessors."
      },
      {
        "word": "CELLPHONE",
        "category": "Mobile Telephone",
        "hint": "Portable telephone that can make and receive calls over a radio frequency link.",
        "extraHint": "Evolved into modern smartphones capable of web browsing, gaming, and computing."
      },
      {
        "word": "CENTRIFUGE",
        "category": "Laboratory Machine",
        "hint": "Device that uses centrifugal force to separate fluids of different densities.",
        "extraHint": "Spins biological samples at thousands of RPMs to separate blood plasma and cellular DNA."
      },
      {
        "word": "CHROMECAST",
        "category": "Streaming Dongle",
        "hint": "Line of digital media players developed by Google that plug directly into HDMI ports.",
        "extraHint": "Enables users to stream video and music from smartphones directly to television screens."
      },
      {
        "word": "CIRCUITRY",
        "category": "Electronics System",
        "hint": "System of electrical circuits performing specific electronic tasks.",
        "extraHint": "Interconnects transistors, resistors, capacitors, and microcontrollers."
      },
      {
        "word": "CLIPBOARD",
        "category": "Buffer Mechanism",
        "hint": "Temporary storage area for data that the user cuts or copies from one place to another.",
        "extraHint": "Accessible via keyboard shortcuts like Ctrl+C (copy) and Ctrl+V (paste)."
      },
      {
        "word": "CLOUDSTORE",
        "category": "Remote Storage",
        "hint": "Model of computer data storage where digital data is stored in logical pools remotely.",
        "extraHint": "Maintained and managed by cloud hosting providers like AWS, Google Cloud, and Azure."
      },
      {
        "word": "COMPONENTIZATION",
        "category": "Modular Architecture",
        "hint": "Practice of dividing a complex hardware system into reusable, modular parts.",
        "extraHint": "Facilitates rapid replacement of failed power supplies, storage drives, and fans."
      },
      {
        "word": "CONDUCTIVITY",
        "category": "Current Flow",
        "hint": "The degree to which a specified material conducts electricity and allows electrons.",
        "extraHint": "Metals like copper and gold exhibit high electrical conductivity in electronics."
      },
      {
        "word": "CONFIDENTIAL",
        "category": "Information Privacy",
        "hint": "Ensuring that sensitive information is accessible only to authorized individuals.",
        "extraHint": "Protected using end-to-end cryptographic encryption and rigorous access controls."
      },
      {
        "word": "CONTAINERIZATION",
        "category": "Lightweight OS",
        "hint": "Operating-system-level virtualization method deploying apps in isolated containers.",
        "extraHint": "Popularized by Docker and Kubernetes; shares the host OS kernel efficiently."
      },
      {
        "word": "CONTROLLERS",
        "category": "Hardware Drivers",
        "hint": "Hardware chips or expansion boards managing peripheral devices and storage arrays.",
        "extraHint": "Direct data transfers between system memory and connected storage drives."
      },
      {
        "word": "CONVERTER",
        "category": "Power Device",
        "hint": "Electrical circuit that converts electric energy from one form or voltage level to another.",
        "extraHint": "Steps down high voltages to precise low voltages required by microprocessors."
      },
      {
        "word": "COOLINGTOWER",
        "category": "Industrial Chiller",
        "hint": "Heat rejection device that extracts waste heat to the atmosphere through water.",
        "extraHint": "Used to cool large commercial data centers and massive industrial facilities."
      },
      {
        "word": "CRYOGENICS",
        "category": "Deep Freeze",
        "hint": "Branch of physics dealing with the production and effects of very low temperatures.",
        "extraHint": "Refrigerates superconducting quantum computer chips down near absolute zero."
      },
      {
        "word": "CRYOPRESERVATION",
        "category": "Deep Cold Storage",
        "hint": "Process where biological organelles or cells are preserved by cooling to sub-zero temps.",
        "extraHint": "Utilizes liquid nitrogen cryogenics to store stem cells and genetic archives."
      },
      {
        "word": "CURVEDSCREEN",
        "category": "Immersive Display",
        "hint": "Display panel engineered with a gentle physical curve matching human eye curvature.",
        "extraHint": "Enhances peripheral immersion and reduces optical distortion on ultrawide monitors."
      },
      {
        "word": "CYBERSECURITY",
        "category": "Digital Defense",
        "hint": "Practice of protecting computer systems and networks from malicious digital attacks.",
        "extraHint": "Employs encryption, threat hunting, multi-factor authentication, and firewalls."
      },
      {
        "word": "DATACENTER",
        "category": "Server Facility",
        "hint": "Dedicated building or facility used to house computer systems and associated components.",
        "extraHint": "Features redundant power supplies, backup generators, environmental cooling, and security."
      },
      {
        "word": "DECENTRALIZED",
        "category": "Distributed Network",
        "hint": "System architecture where control and decision-making are distributed among nodes.",
        "extraHint": "Underpins peer-to-peer networks and blockchain ledgers without a central authority."
      },
      {
        "word": "DECRYPTION",
        "category": "Data Extraction",
        "hint": "The process of taking encoded ciphertext and converting it back into plaintext.",
        "extraHint": "Requires knowledge of the secret cryptographic key matching the encryption cipher."
      },
      {
        "word": "DECRYPTOR",
        "category": "Security Module",
        "hint": "Component that converts ciphertext back into intelligible plaintext using a key.",
        "extraHint": "Enables authorized recipients to read previously encrypted messages or files."
      },
      {
        "word": "DEFIBRILL",
        "category": "Heart Restorer",
        "hint": "Device that applies an electric charge or current to the heart muscle to restore rhythm.",
        "extraHint": "Automated external versions (AEDs) guide bystanders to save cardiac arrest victims."
      },
      {
        "word": "DIGITIZER",
        "category": "Pen Input",
        "hint": "Device that converts analog touch or stylus movement into digital coordinates on screen.",
        "extraHint": "Enables pressure-sensitive drawing and handwriting input on tablets and drawing pads."
      },
      {
        "word": "ELECTRODE",
        "category": "Conductor Lead",
        "hint": "Electrical conductor used to make contact with a nonmetallic part of a circuit.",
        "extraHint": "Transfers electrical current into semiconductors, batteries, and electronic sensors."
      },
      {
        "word": "ELECTROMAGNETIC",
        "category": "Wave Radiation",
        "hint": "Radiation consisting of coupled oscillating electric and magnetic fields.",
        "extraHint": "Encompasses radio waves, microwaves, infrared, visible light, and X-rays."
      },
      {
        "word": "ELECTROMAGNETISM",
        "category": "Fundamental Force",
        "hint": "Fundamental physical interaction that occurs between electrically charged particles.",
        "extraHint": "Governs radio wave transmission, electric motor torque, and transformer induction."
      },
      {
        "word": "ENCRYPTION",
        "category": "Data Protection",
        "hint": "The process of encoding information so only authorized parties can access it.",
        "extraHint": "Converts readable plaintext into unreadable ciphertext using cryptographic mathematical algorithms."
      },
      {
        "word": "ENCRYPTOR",
        "category": "Security Module",
        "hint": "Hardware or software component that transforms plain information into ciphertext.",
        "extraHint": "Protects sensitive data stored at rest on hard drives or in transit across networks."
      },
      {
        "word": "EQUALIZER",
        "category": "Audio Shaping",
        "hint": "Audio device or software filter adjusting the balance of frequency components.",
        "extraHint": "Allows boosting bass frequencies, enhancing vocal midranges, or cutting treble hiss."
      },
      {
        "word": "EXPANSION",
        "category": "System Upgrades",
        "hint": "Cards plugged into motherboard expansion slots to add capabilities to computers.",
        "extraHint": "Standard modern format is PCI Express (PCIe), supporting GPUs and capture cards."
      },
      {
        "word": "EXPLOITATION",
        "category": "Attack Execution",
        "hint": "Software tool or technique taking deliberate advantage of a computer security flaw.",
        "extraHint": "Weaponizes software bugs to execute arbitrary payloads or escalate user privileges."
      },
      {
        "word": "FANSYSTEM",
        "category": "Forced Air",
        "hint": "Active cooling system using rotating blades to move cool air across heatsinks.",
        "extraHint": "Prevents sensitive electronics from exceeding dangerous thermal operating ceilings."
      },
      {
        "word": "FERROELECTRICITY",
        "category": "Spontaneous Dipole",
        "hint": "Property of certain materials that have a spontaneous electric polarization.",
        "extraHint": "Studied for non-volatile ferroelectric RAM (FeRAM) offering high-speed memory writes."
      },
      {
        "word": "FIBERGLASS",
        "category": "PCB Material",
        "hint": "Reinforced plastic material woven with glass fibers forming circuit board substrates.",
        "extraHint": "Provides thermal stability and non-conductive mechanical support for copper traces."
      },
      {
        "word": "FIBEROPTIC",
        "category": "High-Speed Cable",
        "hint": "Technology transmitting data as pulses of light along strands of glass fibers.",
        "extraHint": "Offers extreme bandwidth and near immune resistance to electromagnetic interference."
      },
      {
        "word": "FIBEROPTICS",
        "category": "Light Transmission",
        "hint": "Strands of glass or plastic used to transmit telephone and internet signals.",
        "extraHint": "Provide extreme bandwidth over immense distances without electrical interference."
      },
      {
        "word": "FILESYSTEM",
        "category": "Data Organization",
        "hint": "Method and data structure that an operating system uses to control how data is stored.",
        "extraHint": "Examples include NTFS, ext4, APFS, and FAT32, structuring directory trees."
      },
      {
        "word": "FINGERPRINT",
        "category": "Biometric Sensor",
        "hint": "Biometric system scanning the unique friction ridges of a human finger.",
        "extraHint": "Provides rapid phone unlocking and secure authentication on modern mobile devices."
      },
      {
        "word": "FIREWALLS",
        "category": "Traffic Guard",
        "hint": "Network security devices monitoring and controlling network traffic flows.",
        "extraHint": "Enforce perimeter security rules to prevent unauthorized outside access."
      },
      {
        "word": "FITNESSTRACK",
        "category": "Health Gadget",
        "hint": "Electronic device monitoring biometric indicators such as heart rate and steps.",
        "extraHint": "Helps users track physical wellness metrics through dedicated companion apps."
      },
      {
        "word": "FLASHDRIVE",
        "category": "Portable Storage",
        "hint": "Data storage device that includes flash memory with an integrated USB interface.",
        "extraHint": "Compact pocket storage device replacing legacy floppy disks and optical CDs."
      },
      {
        "word": "GEOLOCATION",
        "category": "Position Finding",
        "hint": "Identification or estimation of the real-world geographic location of an object.",
        "extraHint": "Determined through GPS coordinates, cell tower triangulation, or Wi-Fi BSSID maps."
      },
      {
        "word": "GLUCOMETER",
        "category": "Blood Glucose",
        "hint": "Medical device for determining the approximate concentration of glucose in the blood.",
        "extraHint": "Essential diagnostic gadget used daily by individuals managing diabetes."
      },
      {
        "word": "GRAPHICSCARDS",
        "category": "GPU Modules",
        "hint": "Expansion cards that generate a feed of output images to a display device.",
        "extraHint": "Equipped with dedicated video RAM and thousands of parallel shader execution cores."
      },
      {
        "word": "GYROSCOPE",
        "category": "Orientation Sensor",
        "hint": "Device used for measuring or maintaining orientation and angular velocity.",
        "extraHint": "Found inside smartphones, drones, and aircraft to detect tilting and rotational movement."
      },
      {
        "word": "HEADMOUNT",
        "category": "VR Display",
        "hint": "Display device worn on the head with display optics positioned in front of eyes.",
        "extraHint": "Immerses users inside virtual reality environments or overlays augmented graphics."
      },
      {
        "word": "HEADPHONES",
        "category": "Personal Audio",
        "hint": "Pair of small loudspeaker drivers worn on or around the head over user's ears.",
        "extraHint": "Provides private listening, featuring active noise cancellation (ANC) circuitry."
      },
      {
        "word": "HEATSINKS",
        "category": "Thermal Radiators",
        "hint": "Metal components conducting heat away from processors to cooling air.",
        "extraHint": "Equipped with dense copper or aluminum fins and heat pipes for heat dissipation."
      },
      {
        "word": "HETEROGENEOUS",
        "category": "Mixed Architecture",
        "hint": "Computing systems using different types of computational processing units in tandem.",
        "extraHint": "Combines CPU cores, GPU graphics pipelines, and neural AI accelerators on one SoC."
      },
      {
        "word": "HYGROMETER",
        "category": "Humidity Sensor",
        "hint": "Instrument used to measure the amount of water vapor in air or confined spaces.",
        "extraHint": "Monitors climate conditions inside data center server rooms and greenhouses."
      },
      {
        "word": "HYPERTHREAD",
        "category": "Parallel Compute",
        "hint": "Technology allowing multiple threads to run on each CPU core simultaneously.",
        "extraHint": "Improves processor execution efficiency by utilizing idle functional execution units."
      },
      {
        "word": "HYPERVISOR",
        "category": "Virtual Machine",
        "hint": "Software, firmware, or hardware that creates and runs virtual computer machines.",
        "extraHint": "Enables running multiple isolated guest operating systems on a single physical host."
      },
      {
        "word": "INCUBATOR",
        "category": "Controlled Chamber",
        "hint": "Apparatus used to hatch eggs or maintain environmental conditions for bacterial cultures.",
        "extraHint": "Maintains optimal warmth, humidity, and oxygen levels for biological samples."
      },
      {
        "word": "INFRAREDCAM",
        "category": "Thermal Imager",
        "hint": "Camera that creates an image using infrared radiation emitted by warm objects.",
        "extraHint": "Used in firefighting, search-and-rescue, building energy audits, and night surveillance."
      },
      {
        "word": "INFRASTRUCTURE",
        "category": "Hardware Base",
        "hint": "The fundamental physical hardware systems serving a computing enterprise.",
        "extraHint": "Encompasses cloud server racks, network backbones, power arrays, and cooling."
      },
      {
        "word": "INTERCONNECT",
        "category": "System Bus",
        "hint": "Physical or logical connection linking separate processing nodes or chips together.",
        "extraHint": "High-speed buses like PCIe and NVLink transfer data rapidly between processors."
      },
      {
        "word": "INTERCONNECTION",
        "category": "Linked Systems",
        "hint": "Mutual connection between separate digital networks or computer processing chips.",
        "extraHint": "High-speed buses permit multi-core processors to share data across memory caches."
      },
      {
        "word": "KEYLOGGER",
        "category": "Keystroke Tracker",
        "hint": "Surveillance technology used to record keystrokes typed on a computer keyboard.",
        "extraHint": "Used by cybercriminals to steal login passwords, credit card numbers, and messages."
      },
      {
        "word": "LASERDIODE",
        "category": "Coherent Light",
        "hint": "Semiconductor device that produces coherent light radiation through stimulated emission.",
        "extraHint": "Used to read optical discs, scan barcodes, and transmit gigabits through fiber cables."
      },
      {
        "word": "LIDARSCAN",
        "category": "Laser Mapping",
        "hint": "Remote sensing method examining the Earth's surface using pulsed laser beams.",
        "extraHint": "Enables autonomous vehicles to detect pedestrians and obstacles in three dimensions."
      },
      {
        "word": "LIQUIDCOOL",
        "category": "Water Loop",
        "hint": "Cooling setup circulating liquid through water blocks to absorb processor heat.",
        "extraHint": "Transfers heat away from hot microchips to radiators more efficiently than air."
      },
      {
        "word": "LOUDSPEAKER",
        "category": "Audio Transducer",
        "hint": "Electroacoustic transducer that converts an electrical audio signal into sound.",
        "extraHint": "Fills rooms with music and movie dialogue through physical vibrating cones."
      },
      {
        "word": "MACHINELEARNING",
        "category": "Statistical Learning",
        "hint": "Subfield of AI focusing on algorithms that learn and improve from experience and data.",
        "extraHint": "Trains deep neural networks to recognize patterns, translate languages, and classify images."
      },
      {
        "word": "MAGNETOMETER",
        "category": "Compass Sensor",
        "hint": "Instrument measuring magnetic forces, commonly used as a digital compass.",
        "extraHint": "Calculates heading direction by orienting against the Earth's natural magnetic field."
      },
      {
        "word": "MAGNETOMETERS",
        "category": "Magnetic Sensors",
        "hint": "Instruments measuring magnetic field strength, used as digital compasses.",
        "extraHint": "Provide directional headings for aerial drones, smartphones, and spacecraft."
      },
      {
        "word": "MAINFRAME",
        "category": "Enterprise System",
        "hint": "High-performance computer utilized for large-scale enterprise computing.",
        "extraHint": "Renowned for legendary reliability, uptime, and high-volume transaction processing."
      },
      {
        "word": "MAINFRAMES",
        "category": "Bulk Computers",
        "hint": "Large high-throughput computers used primarily by large organizations for critical tasks.",
        "extraHint": "Execute massive census calculations, banking transactions, and airline bookings."
      },
      {
        "word": "MECHANICAL",
        "category": "Keyboard Type",
        "hint": "Keyboard built with high-quality individual physical switches under every single key.",
        "extraHint": "Offers distinct tactile feedback, audible clicks, and durable cherry-style switches."
      },
      {
        "word": "MEMORYCARD",
        "category": "Compact Storage",
        "hint": "Electronic data storage device used for storing digital information in cameras and phones.",
        "extraHint": "Available in formats like SD and microSD, offering high capacity in tiny form factors."
      },
      {
        "word": "METAVERSE",
        "category": "Virtual World",
        "hint": "Hypothetical iteration of the internet as a single, universal, immersive virtual world.",
        "extraHint": "Experienced through virtual reality headsets, augmented reality glasses, and 3D avatars."
      },
      {
        "word": "MICROCHIP",
        "category": "Integrated Circuit",
        "hint": "Set of electronic circuits on one small flat piece of semiconductor material.",
        "extraHint": "Forms the basis of all modern electronics including processors and memory."
      },
      {
        "word": "MICROCONTROLLER",
        "category": "Embedded Chip",
        "hint": "Compact integrated circuit designed to govern a specific operation in an embedded system.",
        "extraHint": "Combines CPU, memory, and programmable input/output peripherals on a single chip."
      },
      {
        "word": "MICROELECTRODE",
        "category": "Miniature Lead",
        "hint": "Extremely small electrode used to record electrical signals from individual cells.",
        "extraHint": "Used in neuroscience research to monitor neural action potentials inside living brains."
      },
      {
        "word": "MICROELECTRONICS",
        "category": "Sub-Millimeter Tech",
        "hint": "The study and manufacture of extremely small electronic components and microchips.",
        "extraHint": "Enables packing billions of transistors onto fingernail-sized silicon computer dies."
      },
      {
        "word": "MICROFABRICATION",
        "category": "Chip Lithography",
        "hint": "Process of fabricating miniature structures on the micrometric scale for microchips.",
        "extraHint": "Uses photolithography, chemical etching, and ion implantation on silicon wafers."
      },
      {
        "word": "MICROMETER",
        "category": "Fine Measurement",
        "hint": "Device incorporating a calibrated screw widely used for precise measurement of components.",
        "extraHint": "Measures mechanical engineering tolerances down to single micrometers."
      },
      {
        "word": "MICROPHONE",
        "category": "Audio Transducer",
        "hint": "Transducer converting acoustic sound waves into an electrical audio signal.",
        "extraHint": "Includes condenser microphones for studio podcasts and dynamic mics for stage use."
      },
      {
        "word": "MICROPROC",
        "category": "Central Processor",
        "hint": "Computer processor where data processing logic and control is on one chip.",
        "extraHint": "Executes instructions fetched from computer memory to perform computations."
      },
      {
        "word": "MICROPROCESSOR",
        "category": "Integrated Brain",
        "hint": "Complete central processing unit fabricated onto a single integrated circuit.",
        "extraHint": "The computational powerhouse found at the heart of modern personal computers."
      },
      {
        "word": "MICROPROCESSORS",
        "category": "Silicon Brains",
        "hint": "Integrated circuits containing all the central processing logic of a computer.",
        "extraHint": "Fetch, decode, and execute machine instructions to run operating systems and apps."
      },
      {
        "word": "MICROSCOPE",
        "category": "Magnifying Tool",
        "hint": "Laboratory instrument used to examine objects that are too small to be seen by naked eye.",
        "extraHint": "Includes optical lens microscopes and high-resolution electron beam instruments."
      },
      {
        "word": "MICROWAVE",
        "category": "Radio Transmission",
        "hint": "Form of electromagnetic radiation used for point-to-point wireless communications.",
        "extraHint": "Operates at high frequencies to transmit radar signals and inter-city cellular backhauls."
      },
      {
        "word": "MINICOMPUTER",
        "category": "Historical System",
        "hint": "Class of smaller computers developed in the mid-1960s bridging micros and mainframes.",
        "extraHint": "Historically popularized by companies like Digital Equipment Corporation (DEC)."
      },
      {
        "word": "MOTHERBOARD",
        "category": "Hardware Backbone",
        "hint": "The main printed circuit board containing principal components of a computer.",
        "extraHint": "Connects CPU, RAM, storage drives, and expansion cards via data buses."
      },
      {
        "word": "MOTHERBOARDS",
        "category": "Main Circuits",
        "hint": "Primary circuit boards in computers containing connectors for all components.",
        "extraHint": "House the CPU socket, RAM slots, PCIe lanes, and system chipset."
      },
      {
        "word": "MULTIMEDIA",
        "category": "Rich Content",
        "hint": "Content using a combination of different content forms such as text, audio, and video.",
        "extraHint": "Streamed over broadband networks and rendered in high definition on smart devices."
      },
      {
        "word": "MULTIMETER",
        "category": "Test Instrument",
        "hint": "Electronic measuring instrument combining voltmeter, ammeter, and ohmmeter functions.",
        "extraHint": "Used by technicians to test continuity, measure resistance, and diagnose circuits."
      },
      {
        "word": "MULTIPROCESSOR",
        "category": "Parallel Computing",
        "hint": "Computer system with two or more central processing units sharing main memory.",
        "extraHint": "Executes complex multithreaded simulations and enterprise databases in parallel."
      },
      {
        "word": "NANOTECHNOLOGY",
        "category": "Molecular Scale Tech",
        "hint": "The branch of technology dealing with dimensions of less than 100 nanometers.",
        "extraHint": "Enables atomic-scale manufacturing of carbon nanotubes and ultra-dense microchips."
      },
      {
        "word": "NAVIGATION",
        "category": "Location Guidance",
        "hint": "Process of monitoring and controlling the movement of a craft or vehicle.",
        "extraHint": "Modern satellite systems provide turn-by-turn guidance on smartphone screens."
      },
      {
        "word": "NEBULIZER",
        "category": "Aerosol Machine",
        "hint": "Drug delivery device used to administer medication in the form of a mist inhaled into lungs.",
        "extraHint": "Powered by compressed air or ultrasonic vibrations for clinical respiratory therapy."
      },
      {
        "word": "NETWORKCARDS",
        "category": "NIC Interfaces",
        "hint": "Hardware components connecting computers to computer networks over Ethernet.",
        "extraHint": "Feature unique hardware MAC addresses to identify devices on local subnets."
      },
      {
        "word": "NEURALNET",
        "category": "Machine Learning",
        "hint": "Computational model inspired by the biological neural networks of human brains.",
        "extraHint": "Composed of interconnected artificial neurons computing non-linear transformations."
      },
      {
        "word": "NIGHTVISION",
        "category": "Optoelectronic",
        "hint": "Optical device that allows images to be produced in levels of light approaching total darkness.",
        "extraHint": "Amplifies ambient starlight or detects thermal infrared radiation."
      },
      {
        "word": "OPTOELECTRONICS",
        "category": "Light-Electric Tech",
        "hint": "The study and application of electronic devices that source, detect, and control light.",
        "extraHint": "Encompasses LEDs, laser diodes, photodetectors, optical fibers, and solar cells."
      },
      {
        "word": "OPTOISOLATOR",
        "category": "Optical Coupler",
        "hint": "Component that transfers electrical signals between isolated circuits using light.",
        "extraHint": "Protects delicate low-voltage microcontrollers from dangerous high-voltage spikes."
      },
      {
        "word": "OSCILLOSCOPE",
        "category": "Test Equipment",
        "hint": "Electronic test instrument that graphically displays varying signal voltages over time.",
        "extraHint": "Essential diagnostic tool for visualizing wave shapes, noise, and frequency jitter."
      },
      {
        "word": "OVERCLOCK",
        "category": "Performance Tuning",
        "hint": "Increasing the clock rate of a computer component beyond factory specifications.",
        "extraHint": "Boosts processing speed at the expense of higher power draw and heat generation."
      },
      {
        "word": "PACEMAKER",
        "category": "Heart Regulator",
        "hint": "Small device placed in the chest to help control abnormal heart rhythms.",
        "extraHint": "Uses low-energy electrical pulses to prompt the heart to beat at a normal rate."
      },
      {
        "word": "PACKETIZE",
        "category": "Data Packaging",
        "hint": "The act of packaging computer data into discrete units called packets for transmission.",
        "extraHint": "Divides continuous streams into routable chunks carrying headers and payloads."
      },
      {
        "word": "PARTITION",
        "category": "Disk Subdivision",
        "hint": "Logical division of a hard disk drive or solid-state drive treated as an isolated drive.",
        "extraHint": "Separates operating system binaries from user storage or allows dual-booting OSes."
      },
      {
        "word": "PASSPHRASE",
        "category": "Security Credential",
        "hint": "Sequence of words or other text used to control access to a computer system.",
        "extraHint": "Longer and more resilient against brute-force attacks than simple short passwords."
      },
      {
        "word": "PATCHPANEL",
        "category": "Network Hub",
        "hint": "Mounted hardware unit containing ports used to connect and route circuit circuits.",
        "extraHint": "Central organizing point for structural network cabling inside enterprise server racks."
      },
      {
        "word": "PEDOMETER",
        "category": "Step Counter",
        "hint": "Portable device that counts each step a person takes by detecting hip motion.",
        "extraHint": "Classic mechanical and digital health gadget promoting daily walking goals."
      },
      {
        "word": "PERIPHERAL",
        "category": "Auxiliary Device",
        "hint": "Auxiliary device used to put information into and get information out of computer.",
        "extraHint": "Examples include computer mice, keyboards, printers, and external hard drives."
      },
      {
        "word": "PHOTODIODE",
        "category": "Light Sensor",
        "hint": "Semiconductor diode that converts light into an electrical current.",
        "extraHint": "Used in optical sensors, infrared remote receivers, and fiber-optic data links."
      },
      {
        "word": "PHOTOVOLTAIC",
        "category": "Solar Energy",
        "hint": "Relating to the production of electric current at the junction of two substances.",
        "extraHint": "Harnessed by rooftop solar panels to generate clean electricity from sunlight."
      },
      {
        "word": "PIEZOELECTRIC",
        "category": "Stress Voltage",
        "hint": "Electric charge that accumulates in certain solid materials in response to applied stress.",
        "extraHint": "Harnessed by quartz crystal clocks, barbecue grill igniters, and ultrasonic probes."
      },
      {
        "word": "PIEZOELECTRICITY",
        "category": "Stress Electricity",
        "hint": "Electric charge accumulating in certain solid materials in response to applied mechanical stress.",
        "extraHint": "Harnessed in quartz timepieces, ultrasound imaging probes, and acoustic pickups."
      },
      {
        "word": "PLAYSTATION",
        "category": "Gaming Console",
        "hint": "Video game console brand created and developed by Sony Interactive Entertainment.",
        "extraHint": "Famous gaming hardware line featuring custom AMD APUs, DualSense haptics, and 4K games."
      },
      {
        "word": "POTENTIOMETER",
        "category": "Variable Resistor",
        "hint": "Three-terminal resistor with a sliding contact forming an adjustable voltage divider.",
        "extraHint": "Commonly utilized as rotary volume controls and analog gaming thumbstick sensors."
      },
      {
        "word": "POTENTIOMETERS",
        "category": "Rotary Resistors",
        "hint": "Three-terminal resistors with sliding contacts forming adjustable voltage dividers.",
        "extraHint": "Provide smooth physical control for audio volume dials and joystick thumbsticks."
      },
      {
        "word": "PROCESSOR",
        "category": "Hardware Component",
        "hint": "The electronic circuitry that executes instructions comprising a computer program.",
        "extraHint": "Often called the CPU; performs arithmetic, logic, and control operations."
      },
      {
        "word": "PROCESSORS",
        "category": "CPU Chips",
        "hint": "Semiconductor circuits that carry out instructions comprising computer programs.",
        "extraHint": "Perform foundational arithmetic, logic, and control operations inside computers."
      },
      {
        "word": "PROJECTOR",
        "category": "Optical Display",
        "hint": "Optical device projecting an image or moving video onto a large surface or wall.",
        "extraHint": "Utilizes high-output LED, laser, or lamp light engines paired with DLP or LCD chips."
      },
      {
        "word": "PROTRACTOR",
        "category": "Angle Measuring",
        "hint": "Measuring instrument, typically made of transparent plastic, for measuring angles.",
        "extraHint": "Standard geometry tool marked with degrees from 0 to 180 or 360."
      },
      {
        "word": "PULSOMETER",
        "category": "Pulse Monitor",
        "hint": "Medical or fitness instrument used to measure human heart pulse rates.",
        "extraHint": "Employs optical photoplethysmography sensors to track blood flow pulses in skin."
      },
      {
        "word": "QUADCOPTER",
        "category": "Rotor Aircraft",
        "hint": "Multi-rotor helicopter lifted and propelled by four independent spinning rotors.",
        "extraHint": "Maintains flight stabilization through computerized micro-adjustments to motor speeds."
      },
      {
        "word": "RACKMOUNT",
        "category": "Server Chassis",
        "hint": "Standardized frame or enclosure for mounting multiple electronic equipment modules.",
        "extraHint": "Built to standard 19-inch rack widths used globally in data centers and server rooms."
      },
      {
        "word": "RADARSYSTEM",
        "category": "Radio Detection",
        "hint": "Object-detection system using radio waves to determine distance and velocity.",
        "extraHint": "Essential for air traffic controllers guiding aircraft safely through international skies."
      },
      {
        "word": "RADIOFREQ",
        "category": "Electromagnetic",
        "hint": "Rate of oscillation in the range of radio waves used in telecommunications.",
        "extraHint": "Transmits wireless data across Wi-Fi, cellular networks, radar, and broadcasting."
      },
      {
        "word": "RANSOMWARE",
        "category": "Extortion Malware",
        "hint": "Malware employing encryption to hold a victim's information at ransom.",
        "extraHint": "Critical files are encrypted; threat actors demand cryptocurrency for decryption keys."
      },
      {
        "word": "RASPBERRY",
        "category": "Single-Board Computer",
        "hint": "Series of small single-board computers developed in the UK to promote computing.",
        "extraHint": "Runs full Linux distributions like Debian from a microSD card with GPIO pins."
      },
      {
        "word": "RECTIFICATION",
        "category": "AC-DC Conversion",
        "hint": "The process of converting alternating current (AC) into direct current (DC).",
        "extraHint": "Carried out by semiconductor bridge rectifiers inside laptop power adapters."
      },
      {
        "word": "RECTIFIER",
        "category": "AC to DC",
        "hint": "Electrical device that converts alternating current into direct current.",
        "extraHint": "The foundational input stage in power supply bricks for laptops and smartphones."
      },
      {
        "word": "REFRESHRATE",
        "category": "Display Speed",
        "hint": "Number of times per second that a display hardware updates its buffer image.",
        "extraHint": "Measured in Hertz (Hz); gaming monitors frequently operate at 144Hz, 240Hz, or higher."
      },
      {
        "word": "RELAYSWITCH",
        "category": "Electric Switch",
        "hint": "Electrically operated switch using an electromagnet to mechanically open or close contacts.",
        "extraHint": "Allows low-power circuits to safely switch on and off high-voltage electrical machinery."
      },
      {
        "word": "REPEATERS",
        "category": "Signal Boosters",
        "hint": "Electronic devices that receive weak signals, amplify them, and retransmit.",
        "extraHint": "Extend the effective transmission range of Wi-Fi networks and cellular towers."
      },
      {
        "word": "RESERVOIR",
        "category": "Fluid Basin",
        "hint": "Chamber in a liquid cooling loop holding reserve coolant and bleeding air bubbles.",
        "extraHint": "Simplifies filling and maintaining custom water cooling setups inside PC cases."
      },
      {
        "word": "RESOLUTION",
        "category": "Pixel Density",
        "hint": "Number of distinct pixels in each dimension that can be displayed on screen.",
        "extraHint": "Common standards include 1080p Full HD, 1440p Quad HD, and 3840x2160 4K Ultra HD."
      },
      {
        "word": "SATELLITE",
        "category": "Orbital Link",
        "hint": "Artificial body placed in orbit around earth to relay communications or collect data.",
        "extraHint": "Powers GPS navigation constellations and low-latency broadband like Starlink."
      },
      {
        "word": "SATELLITENAV",
        "category": "GPS Navigation",
        "hint": "System of satellites providing autonomous geospatial positioning globally.",
        "extraHint": "Includes GPS, GLONASS, Galileo, and BeiDou satellite constellations."
      },
      {
        "word": "SATELLITES",
        "category": "Orbital Network",
        "hint": "Artificial machines placed in orbit to collect data or relay telecommunications.",
        "extraHint": "Enable global positioning navigation and worldwide internet connectivity from space."
      },
      {
        "word": "SEISMOGRAPH",
        "category": "Earthquake Sensor",
        "hint": "Instrument that measures and records details of earthquakes and ground motions.",
        "extraHint": "Detects tectonic plate vibrations to warn of impending tsunamis and structural hazards."
      },
      {
        "word": "SEMICONDUCT",
        "category": "Materials Class",
        "hint": "Material whose electrical conductivity falls between that of a conductor and insulator.",
        "extraHint": "Silicon and germanium are prime examples utilized in computer chip manufacturing."
      },
      {
        "word": "SEMICONDUCTING",
        "category": "Solid-State Nature",
        "hint": "Exhibiting electrical conductivity intermediate between conductors and insulators.",
        "extraHint": "Semiconducting silicon enables electronic switching and digital computer logic."
      },
      {
        "word": "SEMICONDUCTOR",
        "category": "Solid-State Material",
        "hint": "Solid substance having conductivity between that of an insulator and conductor.",
        "extraHint": "Silicon and germanium form the bedrock of the entire global microchip industry."
      },
      {
        "word": "SEMICONDUCTORS",
        "category": "Chip Foundations",
        "hint": "Solid substances whose electrical conductivity can be controlled via doping.",
        "extraHint": "Form the microscopic transistors, diodes, and flash cells powering digital computers."
      },
      {
        "word": "SERVERFARM",
        "category": "Cluster Facility",
        "hint": "Collection of computer servers usually maintained by an enterprise to deliver services.",
        "extraHint": "Renders millions of web search queries, cloud documents, and streaming video files."
      },
      {
        "word": "SERVOMOTOR",
        "category": "Robotics Component",
        "hint": "Rotary actuator allowing precise control of angular position, velocity, and acceleration.",
        "extraHint": "Utilizes sensor feedback to maintain precise angles in robotics and RC models."
      },
      {
        "word": "SMARTBAND",
        "category": "Fitness Tracker",
        "hint": "Wearable wristband designed primarily to monitor daily physical fitness activity.",
        "extraHint": "Counts daily steps, estimates calories burned, and logs nightly sleep stages."
      },
      {
        "word": "SMARTCARD",
        "category": "Secure Plastic",
        "hint": "Plastic payment or identity card with an embedded integrated circuit chip.",
        "extraHint": "Provides tamper-resistant cryptographic authentication for banking and transit."
      },
      {
        "word": "SMARTPHONE",
        "category": "Mobile Device",
        "hint": "Portable handheld computer integrating cellular calling with mobile computing.",
        "extraHint": "Features capacitive touchscreens, high-res cameras, and vast app ecosystems."
      },
      {
        "word": "SMARTPHONES",
        "category": "Mobile Devices",
        "hint": "Cellular phones that perform many of the functions of a computer.",
        "extraHint": "Equipped with touchscreen interfaces, mobile operating systems, and cameras."
      },
      {
        "word": "SMARTWATCH",
        "category": "Wearable Computer",
        "hint": "Wearable computer in the form of a watch providing local touchscreen interface.",
        "extraHint": "Tracks biometric heart rates, GPS fitness runs, and displays phone notifications."
      },
      {
        "word": "SOLDERING",
        "category": "Assembly Process",
        "hint": "Process in which metal items are joined together by melting a filler metal alloy.",
        "extraHint": "Uses low-melting solder wire and a heated iron to mount components to PCBs."
      },
      {
        "word": "SOLIDSTATE",
        "category": "Storage Technology",
        "hint": "Storage technology using flash memory without moving parts or spinning platters.",
        "extraHint": "Offers near-instantaneous seek times, silent operation, and durable shock resistance."
      },
      {
        "word": "SONARSYSTEM",
        "category": "Sound Navigation",
        "hint": "Technique that uses sound propagation to navigate and detect submerged objects.",
        "extraHint": "Used by submarines to map ocean floors and locate underwater hazards in dark waters."
      },
      {
        "word": "SOUNDCARDS",
        "category": "Audio Modules",
        "hint": "Internal computer expansion cards facilitating the input and output of audio signals.",
        "extraHint": "Provide high-fidelity digital-to-analog audio conversion for studio sound."
      },
      {
        "word": "SPECTROMETER",
        "category": "Light Analysis",
        "hint": "Scientific instrument used to separate and measure spectral components of physical phenomena.",
        "extraHint": "Analyzes light spectra to identify chemical compositions of distant stars."
      },
      {
        "word": "SPECTROPHOTOMETER",
        "category": "Light Gauge",
        "hint": "Instrument measuring how much light a chemical substance absorbs at each wavelength.",
        "extraHint": "Standard analytical tool used in biology and chemistry to quantify sample densities."
      },
      {
        "word": "SPEEDOMETER",
        "category": "Speed Gauge",
        "hint": "Gauge that measures and displays the instantaneous speed of a vehicle.",
        "extraHint": "Essential dashboard safety instrument fitted to all road transport vehicles."
      },
      {
        "word": "SUBWOOFER",
        "category": "Low Bass Speaker",
        "hint": "Loudspeaker designed to reproduce low-pitched audio frequencies known as bass.",
        "extraHint": "Handles deep rumbling sound effects in cinema films and electronic music tracks."
      },
      {
        "word": "SUPERCHARGER",
        "category": "Fast Power System",
        "hint": "High-power direct-current charging station for rapid electric vehicle recharges.",
        "extraHint": "Replenishes large electric vehicle battery packs in minutes using hundreds of kilowatts."
      },
      {
        "word": "SUPERCOMP",
        "category": "Apex Computer",
        "hint": "High-level computer performing at or near the highest operational rate for computers.",
        "extraHint": "Equipped with thousands of processors executing trillions of floating-point operations per second."
      },
      {
        "word": "SUPERCOMPUTER",
        "category": "Extreme Compute",
        "hint": "Computer at the frontline of current processing capacity, especially speed.",
        "extraHint": "Combines tens of thousands of processing cores to run climate and physics models."
      },
      {
        "word": "SUPERCONDUCT",
        "category": "Zero Resistance",
        "hint": "State of zero electrical resistance occurring in certain materials at low temperatures.",
        "extraHint": "Enables powerful electromagnet coils used in MRI scanners and maglev trains."
      },
      {
        "word": "SUPERCONDUCTIVITY",
        "category": "Zero Resistance State",
        "hint": "Phenomenon where a material exhibits zero electrical resistance below critical temp.",
        "extraHint": "Allows powerful electromagnet coils used in medical MRI machines and particle accelerators."
      },
      {
        "word": "SUPERCONDUCTOR",
        "category": "Zero Resistance",
        "hint": "Material that conducts electricity with zero electrical resistance below a critical temp.",
        "extraHint": "Expels magnetic fields; used in magnetic levitation trains and particle colliders."
      },
      {
        "word": "SUPERCONDUCTORS",
        "category": "Frictionless Currents",
        "hint": "Materials conducting electric current without any resistance or energy loss.",
        "extraHint": "Enable floating maglev passenger trains and ultra-sensitive quantum computing chips."
      },
      {
        "word": "SUPERHEATING",
        "category": "Thermal Physics",
        "hint": "Phenomenon where a liquid is heated to a temperature higher than its boiling point.",
        "extraHint": "Carefully managed inside thermal boiler systems and industrial cooling towers."
      },
      {
        "word": "TACHOMETER",
        "category": "RPM Counter",
        "hint": "Instrument measuring the rotation speed of a shaft or disk in a motor.",
        "extraHint": "Displays revolutions per minute (RPM) on automotive dashboards and industrial machinery."
      },
      {
        "word": "TELECOMMUNICATION",
        "category": "Global Networks",
        "hint": "Transmission of information by various types of technologies over wire or radio.",
        "extraHint": "Encompasses satellite relays, telephone switches, undersea fiber, and cellular masts."
      },
      {
        "word": "TELECOMMUNICATIONS",
        "category": "Global Relays",
        "hint": "The transmission of information across significant distances by electronic means.",
        "extraHint": "Connects the planet through undersea optical cables, satellites, and cell towers."
      },
      {
        "word": "TELEMETRY",
        "category": "Remote Monitoring",
        "hint": "In situ collection of measurements or other data at remote points and transmission.",
        "extraHint": "Monitors system health, flight statistics, and server vitals across distances."
      },
      {
        "word": "TELESCOPE",
        "category": "Astronomical Tool",
        "hint": "Optical instrument designed to make distant objects appear nearer using curved mirrors.",
        "extraHint": "Observes distant planets, glowing nebulae, and ancient galaxies across the universe."
      },
      {
        "word": "TELEVISION",
        "category": "Broadcast Video",
        "hint": "Telecommunication medium used for transmitting moving images in monochrome or color.",
        "extraHint": "Modern smart TVs connect to internet networks to stream high-definition content."
      },
      {
        "word": "THERMALPASTE",
        "category": "Thermal Compound",
        "hint": "Thermally conductive paste applied between processors and heatsinks.",
        "extraHint": "Fills microscopic air gaps to maximize heat transfer efficiency away from the silicon die."
      },
      {
        "word": "THERMOCOUPLE",
        "category": "Heat Sensor",
        "hint": "Sensor measuring temperature consisting of two different conductors joined at ends.",
        "extraHint": "Withstands extreme thermal environments to measure engine and furnace heat."
      },
      {
        "word": "THERMODYNAMICS",
        "category": "Heat Physics",
        "hint": "Branch of physics dealing with heat, work, and temperature, and their relation to energy.",
        "extraHint": "Governs the design of computer cooling systems, heat sinks, and thermal interfaces."
      },
      {
        "word": "THERMOMETER",
        "category": "Temperature Sensor",
        "hint": "Device that measures temperature or a temperature gradient using physical properties.",
        "extraHint": "Monitors processor core temperatures to regulate cooling fan speeds."
      },
      {
        "word": "THERMOSTAT",
        "category": "Climate Controller",
        "hint": "Device monitoring and regulating temperature in a heating and cooling system.",
        "extraHint": "Smart thermostats learn household habits and adjust HVAC usage to conserve power."
      },
      {
        "word": "THROTTLING",
        "category": "Thermal Defense",
        "hint": "Automatic reduction of CPU or GPU clock speed to prevent damage from overheating.",
        "extraHint": "Kicks in when chip temperatures exceed safe thresholds under heavy computational loads."
      },
      {
        "word": "THROUGHPUT",
        "category": "Transmission Rate",
        "hint": "Actual rate at which data is successfully transmitted over a network channel.",
        "extraHint": "Quantifies performance considering protocol overhead and network congestion."
      },
      {
        "word": "TOUCHSCREEN",
        "category": "Display Interface",
        "hint": "Display device allowing the user to interact directly with what is displayed via touch.",
        "extraHint": "Uses capacitive sensor grids detecting electrical charge from human fingertips."
      },
      {
        "word": "TRACKBALL",
        "category": "Pointing Device",
        "hint": "Computer pointing device consisting of a ball held by a socket containing sensors.",
        "extraHint": "Operated by rolling the ball with fingers rather than moving the entire device."
      },
      {
        "word": "TRANSFORMER",
        "category": "Deep Learning",
        "hint": "Deep learning architecture relying entirely on attention mechanisms to draw dependencies.",
        "extraHint": "The foundational architectural backbone powering modern Large Language Models."
      },
      {
        "word": "TRANSISTOR",
        "category": "Semiconductor",
        "hint": "Microscopic semiconductor device used to amplify or switch electrical signals.",
        "extraHint": "Billions of microscopic transistors are etched onto modern CPU silicon dies."
      },
      {
        "word": "TRANSISTORS",
        "category": "Solid-State Switch",
        "hint": "Semiconductor devices used to amplify or switch electrical signals and power.",
        "extraHint": "The fundamental building blocks that constitute modern computer processors."
      },
      {
        "word": "TRANSMISSION",
        "category": "Signal Propagation",
        "hint": "The act of sending electronic signals or data packets over a communication link.",
        "extraHint": "Carried across fiber-optic strands, coaxial cables, or wireless radio frequencies."
      },
      {
        "word": "TURBOGENERATOR",
        "category": "Rotary Power Unit",
        "hint": "Generator driven directly by a turbine used in power stations to generate electricity.",
        "extraHint": "Produces high-voltage AC electric power for national regional electricity grids."
      },
      {
        "word": "ULTRABOOK",
        "category": "Slim Laptop",
        "hint": "Category of higher-end subnotebooks defined by Intel featuring slim profiles.",
        "extraHint": "Combines lightweight aluminum chassis with all-day battery life and SSDs."
      },
      {
        "word": "ULTRASONIC",
        "category": "Acoustic Sensor",
        "hint": "Sensor measuring distance by emitting high-frequency sound waves and timing echoes.",
        "extraHint": "Widely utilized in automotive parking assist sensors and obstacle-detecting robots."
      },
      {
        "word": "UNDERVOLT",
        "category": "Power Tuning",
        "hint": "Reducing the operating voltage supplied to a processor to decrease operating temperature.",
        "extraHint": "Maintains performance while improving battery life and eliminating thermal throttling."
      },
      {
        "word": "VIRTUALBOX",
        "category": "Hypervisor Tool",
        "hint": "Free and open-source hosted hypervisor for x86 virtualization developed by Oracle.",
        "extraHint": "Allows users to run guest operating systems inside windows on host computers."
      },
      {
        "word": "VIRTUALIZATION",
        "category": "Resource Abstraction",
        "hint": "Act of creating a virtual rather than actual version of computer hardware platforms.",
        "extraHint": "Enables running diverse operating systems concurrently on identical physical hardware."
      },
      {
        "word": "VIRTUALREALITY",
        "category": "Simulated Immersion",
        "hint": "Computer-generated simulation of an interactive three-dimensional environment.",
        "extraHint": "Experienced through stereoscopic head-mounted displays and motion-tracking controllers."
      },
      {
        "word": "VULNERABLE",
        "category": "System Weakness",
        "hint": "Flaw or weakness in system security procedures, design, or implementation.",
        "extraHint": "Can be exploited by malicious actors to breach information security boundaries."
      },
      {
        "word": "WATERBLOCK",
        "category": "Liquid Mount",
        "hint": "Copper block mounted atop a processor with micro-channels for liquid coolant.",
        "extraHint": "Absorbs heat directly from processor heat spreaders into the cooling fluid flow."
      },
      {
        "word": "WATERCOOL",
        "category": "Liquid Cooling",
        "hint": "Cooling system that uses liquid coolant circulating through tubes to dissipate heat.",
        "extraHint": "Transfers heat away from high-end processors much more quietly than fans."
      },
      {
        "word": "WIREFRAME",
        "category": "3D Geometric Mesh",
        "hint": "Visual presentation of a three-dimensional object using lines connecting vertices.",
        "extraHint": "The foundational geometric skeleton used in computer-aided design (CAD) and 3D games."
      },
      {
        "word": "WIRELESSPAD",
        "category": "Inductive Charger",
        "hint": "Charging pad transmitting electrical energy across space via electromagnetic induction.",
        "extraHint": "Enables charging smartphones and earbuds simply by placing them onto the pad surface."
      },
      {
        "word": "WORKSTATION",
        "category": "High-Performance PC",
        "hint": "Special computer designed for technical or scientific applications with immense power.",
        "extraHint": "Features multi-core enterprise CPUs, ECC memory, and workstation-grade GPUs."
      },
      {
        "word": "WORKSTATIONS",
        "category": "Heavy Compute",
        "hint": "Special computers designed for technical, graphical, or scientific applications.",
        "extraHint": "Pack multi-core CPUs, massive ECC RAM, and high-performance workstation GPUs."
      }
    ]
  },
  "animals": {
    "easy": [
      {
        "word": "AGAMA",
        "category": "Spiny Lizard",
        "hint": "Old World lizard where breeding males display brilliant red and blue body colors.",
        "extraHint": "Often called the 'Spider-Man lizard' due to vibrant blue and red coloration."
      },
      {
        "word": "AKITA",
        "category": "Japanese Spits Dog",
        "hint": "Large, powerful Japanese dog breed renowned for unwavering loyalty.",
        "extraHint": "Celebrated in Japan through the legendary story of the faithful dog Hachiko."
      },
      {
        "word": "ANT",
        "category": "Social Insect",
        "hint": "Tiny colonial insect capable of lifting fifty times its own body weight.",
        "extraHint": "Constructs complex subterranean nests governed by a fertile egg-laying queen."
      },
      {
        "word": "APE",
        "category": "Primate",
        "hint": "Intelligent tailless primate closely related to human beings.",
        "extraHint": "Includes chimpanzees, gorillas, orangutans, bonobos, and gibbons."
      },
      {
        "word": "BASS",
        "category": "Gamefish",
        "hint": "Popular predatory game fish found in lakes, rivers, and coastal waters.",
        "extraHint": "Strikes topwater lures with ferocious aerial jumps when hooked by anglers."
      },
      {
        "word": "BAT",
        "category": "Flying Mammal",
        "hint": "The only mammal capable of true sustained flight through the air.",
        "extraHint": "Uses high-frequency echolocation biosonar pulses to navigate at night."
      },
      {
        "word": "BEAR",
        "category": "Large Carnivoran",
        "hint": "Large, powerful omnivorous mammal with thick shaggy fur and strong claws.",
        "extraHint": "Hibernates in sheltered dens through harsh winters, living off body fat."
      },
      {
        "word": "BEE",
        "category": "Winged Pollinator",
        "hint": "Flying social insect that collects pollen and produces golden honey.",
        "extraHint": "Performs an intricate waggle dance to communicate flower coordinates to the hive."
      },
      {
        "word": "BIRD",
        "category": "Feathered Vertebrate",
        "hint": "Warm-blooded egg-laying vertebrate characterized by feathers and wings.",
        "extraHint": "Possesses lightweight hollow bones and high-efficiency air sac lungs."
      },
      {
        "word": "BISON",
        "category": "Plains Giant",
        "hint": "Massive shaggy-haired bovines that historically roamed the North American plains.",
        "extraHint": "Possesses a large shoulder hump and survived near-extinction through conservation."
      },
      {
        "word": "BOA",
        "category": "Constrictor",
        "hint": "Large, heavy-bodied non-venomous snake that subdues prey by constriction.",
        "extraHint": "Gives birth to live young rather than laying eggs on forest floors."
      },
      {
        "word": "BOAR",
        "category": "Wild Swine",
        "hint": "Wild ancestor of the domestic pig armed with sharp protruding canine tusks.",
        "extraHint": "Roots through forest soil with a cartilaginous snout for roots and acorns."
      },
      {
        "word": "BOXER",
        "category": "Working Dog",
        "hint": "Medium-to-large domestic dog breed known for playfulness and muscular build.",
        "extraHint": "Named Boxer because it often stands on its hind legs to bat with its front paws."
      },
      {
        "word": "BUG",
        "category": "True Insect",
        "hint": "Insect belonging to the order Hemiptera with piercing-sucking mouthparts.",
        "extraHint": "Includes shield bugs, cicadas, bedbugs, aphids, and water striders."
      },
      {
        "word": "BULL",
        "category": "Male Bovine",
        "hint": "Intact adult male bovine known for muscular strength and protective horns.",
        "extraHint": "Displays powerful dominance posturing, pawing ground when aggravated."
      },
      {
        "word": "CALF",
        "category": "Young Bovine",
        "hint": "Young juvenile bovine offspring of domestic cattle or wild bisons.",
        "extraHint": "Stands and nurses within an hour of birth, gaining strength rapidly."
      },
      {
        "word": "CAMEL",
        "category": "Desert Ship",
        "hint": "Humped ungulate adapted to arid deserts, storing fat reserves inside its humps.",
        "extraHint": "Can drink up to 40 gallons of water in minutes and withstand extreme dehydration."
      },
      {
        "word": "CARP",
        "category": "Hardy Freshwater Fish",
        "hint": "Hardy omnivorous freshwater fish capable of thriving in murky waters.",
        "extraHint": "Can survive in low-oxygen conditions and lives for decades in calm lakes."
      },
      {
        "word": "CAT",
        "category": "Domestic Feline",
        "hint": "Small carnivorous domestic mammal famous for agility, purring, and night vision.",
        "extraHint": "Possesses flexible spines and a righting reflex allowing feet-first landings."
      },
      {
        "word": "CLAM",
        "category": "Bivalve Mollusk",
        "hint": "Invertebrate animal enclosed within two hinged calcified shell halves.",
        "extraHint": "Buries into sandy mud, using siphon tubes to filter plankton from water."
      },
      {
        "word": "COBRA",
        "category": "Hooded Venomous Snake",
        "hint": "Venomous snake that spreads a dramatic neck hood and rears up when threatened.",
        "extraHint": "The king cobra is the longest venomous snake on Earth, feeding primarily on other snakes."
      },
      {
        "word": "COD",
        "category": "Coldwater Fish",
        "hint": "Important commercial food fish inhabiting cold waters of the North Atlantic.",
        "extraHint": "Features a chin barbel sensor used to locate mollusks along ocean floors."
      },
      {
        "word": "COLT",
        "category": "Young Male Horse",
        "hint": "Young male horse typically under the age of four years old.",
        "extraHint": "Spirited and playful, learning herd etiquette through mock chasing games."
      },
      {
        "word": "CORAL",
        "category": "Reef Builder",
        "hint": "Marine invertebrate animal that secretes calcium carbonate to construct ocean reefs.",
        "extraHint": "Lives in mutual symbiosis with photosynthetic zooxanthellae algae cells."
      },
      {
        "word": "CORGI",
        "category": "Welsh Cattle Dog",
        "hint": "Short-legged herding dog breed favored for decades by Queen Elizabeth II.",
        "extraHint": "Legend says woodland fairies harnessed corgis to pull fairy coaches into battle."
      },
      {
        "word": "COW",
        "category": "Domestic Bovine",
        "hint": "Female domesticated bovine raised worldwide for milk and beef production.",
        "extraHint": "Possesses a specialized four-compartment ruminant stomach to digest grass."
      },
      {
        "word": "CRAB",
        "category": "Decapod Crustacean",
        "hint": "Broad-bodied decapod crustacean famous for walking sideways with two pincers.",
        "extraHint": "Undergoes periodic molting to shed rigid chitin exoskeletons as it grows larger."
      },
      {
        "word": "CRAKE",
        "category": "Marsh Rail",
        "hint": "Small, secretive wetland bird living inside dense reedbeds and sedge marshes.",
        "extraHint": "Slender body allows it to slip through thick reeds without bending stems."
      },
      {
        "word": "CROW",
        "category": "Intelligent Corvid",
        "hint": "All-black intelligent bird capable of tool use, facial recognition, and reasoning.",
        "extraHint": "Crows remember human faces that treated them poorly and alert flock mates."
      },
      {
        "word": "DACE",
        "category": "River Minnow",
        "hint": "Small, silvery freshwater fish belonging to the carp family in flowing streams.",
        "extraHint": "Swims in darting schools, feeding on surface insects and aquatic larvae."
      },
      {
        "word": "DEER",
        "category": "Antlered Herbivore",
        "hint": "Hoofed ruminant mammal where males grow and shed branching bony antlers annually.",
        "extraHint": "Possesses acute peripheral vision and scent glands for communicating across woods."
      },
      {
        "word": "DINGO",
        "category": "Australian Wild Dog",
        "hint": "Ancient lineage of feral wild canine native to the Australian continent.",
        "extraHint": "Acts as an apex terrestrial predator regulating kangaroo and wallaby populations."
      },
      {
        "word": "DOG",
        "category": "Canine Companion",
        "hint": "Domesticated descendant of the wolf known as humanity's best friend.",
        "extraHint": "Bred into hundreds of specialized breeds for herding, hunting, and companionship."
      },
      {
        "word": "DOVE",
        "category": "Symbolic Bird",
        "hint": "Plump bird with a small head and gentle cooing call, symbolizing peace.",
        "extraHint": "Pigeon and dove parents nourish nestlings with nutrient-rich crop milk."
      },
      {
        "word": "DUCK",
        "category": "Web-Footed Bird",
        "hint": "Common aquatic waterfowl with waterproof plumage and a flat bill for dabbling.",
        "extraHint": "Glands near the tail secrete waterproofing oils that ducks preen across feathers."
      },
      {
        "word": "EAGLE",
        "category": "Majestic Raptor",
        "hint": "Large bird of prey with incredible visual acuity and powerful hooked talons.",
        "extraHint": "Can spot a rabbit from two miles away while soaring high on thermal drafts."
      },
      {
        "word": "EEL",
        "category": "Elongated Fish",
        "hint": "Snake-like ray-finned fish that can swim both forwards and backwards.",
        "extraHint": "Freshwater eels migrate thousands of miles across oceans to spawn in Sargasso."
      },
      {
        "word": "EGRET",
        "category": "White Heron",
        "hint": "Graceful white wading bird with long black legs and yellow dagger bills.",
        "extraHint": "Hunted near extinction for hat plumes in Victorian times, sparking bird conservation."
      },
      {
        "word": "ELK",
        "category": "Large Cervid",
        "hint": "One of the largest species within the deer family native to North America.",
        "extraHint": "Males grow majestic branching antlers and emit echoing bugle vocal calls."
      },
      {
        "word": "EMU",
        "category": "Australian Runner",
        "hint": "Large, fast-running flightless bird native to Australia with shaggy grey feathers.",
        "extraHint": "Can sprint 30 mph and possesses three toes on each foot built for speed."
      },
      {
        "word": "FLEA",
        "category": "Parasitic Jumper",
        "hint": "Wingless parasitic insect that feeds on blood and jumps 200 times its length.",
        "extraHint": "Uses specialized resilin protein pads to spring onto mammal hosts."
      },
      {
        "word": "FLY",
        "category": "Two-Winged Insect",
        "hint": "Two-winged insect possessing fast reflexes and compound faceted eyes.",
        "extraHint": "Uses vibrating gyroscopic halteres behind wings for agile aerobatic maneuvers."
      },
      {
        "word": "FOAL",
        "category": "Young Equine",
        "hint": "Young juvenile horse, pony, or donkey under one year of age.",
        "extraHint": "Runs alongside its mother within hours of birth on long spindly legs."
      },
      {
        "word": "FOX",
        "category": "Cunning Canine",
        "hint": "Small omnivorous mammal with a bushy tail, pointed snout, and keen hearing.",
        "extraHint": "Can hear mice rustling beneath thick winter snow before pouncing with headfirst dives."
      },
      {
        "word": "FROG",
        "category": "Tailless Amphibian",
        "hint": "Short-bodied, tailless amphibian with long hind legs adapted for jumping.",
        "extraHint": "Absorbs water and oxygen directly through its permeable, moist skin."
      },
      {
        "word": "GAR",
        "category": "Primitive Fish",
        "hint": "Primitive freshwater fish with an elongated needle snout and diamond scales.",
        "extraHint": "Equipped with ganoid armor scales and vascularized swim bladders for air."
      },
      {
        "word": "GECKO",
        "category": "Wall-Climbing Lizard",
        "hint": "Small nocturnal lizard with toe pads covered in microscopic hairs that stick to glass.",
        "extraHint": "Utilizes van der Waals molecular forces to sprint upside down across smooth ceilings."
      },
      {
        "word": "GOAT",
        "category": "Sure-Footed Bovid",
        "hint": "Agile horned herbivore capable of climbing steep mountain cliffs and dams.",
        "extraHint": "Possesses horizontal rectangular pupils providing wide peripheral panoramic vision."
      },
      {
        "word": "GOOSE",
        "category": "V-Formation Migrator",
        "hint": "Large waterfowl that flies in aerodynamic V-formations across continents in autumn.",
        "extraHint": "Loudly honks while migrating to encourage lead flyers and maintain flock spacing."
      },
      {
        "word": "GUAN",
        "category": "Forest Bird",
        "hint": "Large arboreal game bird inhabiting Central and South American cloud forests.",
        "extraHint": "Known for loud wing-whirring displays made as it glides between tall trees."
      },
      {
        "word": "GULL",
        "category": "Coastal Seabird",
        "hint": "Omnivorous coastal seabird with grey and white plumage and keen scavenging habits.",
        "extraHint": "Dives for fish and drops hard-shelled mollusks onto rocks to smash them open."
      },
      {
        "word": "HARE",
        "category": "Fast Lagomorph",
        "hint": "Fast-running mammal with long ears and powerful hind legs built for sprinting.",
        "extraHint": "Born fully furred with open eyes; relies on speed rather than burrows."
      },
      {
        "word": "HAWK",
        "category": "Woodland Raptor",
        "hint": "Medium-sized bird of prey with broad wings and a long tail built for maneuvering.",
        "extraHint": "Hunts small rodents, reptiles, and birds through dense forest tree lines."
      },
      {
        "word": "HEN",
        "category": "Domestic Bird",
        "hint": "Female domestic chicken kept worldwide for egg production and poultry meat.",
        "extraHint": "Clucks softly to communicate with chicks before they hatch from shells."
      },
      {
        "word": "HERON",
        "category": "Patient Wader",
        "hint": "Long-legged freshwater wading bird that stands motionless before spearing fish.",
        "extraHint": "Strikes with lightning speed by extending its S-shaped neck forward like a spear."
      },
      {
        "word": "HIPPO",
        "category": "River Giant",
        "hint": "Heavy semi-aquatic African mammal that spends days submerged in fresh rivers.",
        "extraHint": "Despite bulky appearance, can sprint 19 mph on land and possesses massive tusks."
      },
      {
        "word": "HORSE",
        "category": "Equine Companion",
        "hint": "Domesticated odd-toed ungulate that has served human transport and agriculture.",
        "extraHint": "Can sleep both lying down and standing up thanks to a stay-apparatus lock."
      },
      {
        "word": "HUSKY",
        "category": "Arctic Sled Dog",
        "hint": "Thick-coated working sled dog breed originating from northeastern Siberia.",
        "extraHint": "Bred by the Chukchi people; celebrated for striking blue eyes and howling."
      },
      {
        "word": "HYENA",
        "category": "Scavenger & Hunter",
        "hint": "Carnivoran mammal famous for bone-crushing jaws and vocalizing laughing sounds.",
        "extraHint": "Lives in complex matriarchal clans led by dominant females on African plains."
      },
      {
        "word": "HYRAX",
        "category": "Rock Dassie",
        "hint": "Small, furry herbivorous mammal living in rocky outcrops across Africa.",
        "extraHint": "Surprisingly, the hyrax is the closest living terrestrial evolutionary relative of the elephant!"
      },
      {
        "word": "IBEX",
        "category": "Alpine Mountain Goat",
        "hint": "Wild mountain goat with large curved ridged horns living on sheer cliffs.",
        "extraHint": "Defies gravity by scaling nearly vertical rock faces and dams to lick mineral salts."
      },
      {
        "word": "JAY",
        "category": "Corvid Bird",
        "hint": "Noisy, brightly colored crested bird belonging to the intelligent crow family.",
        "extraHint": "Blue jays bury acorns in forest floors, helping propagate oak woodland trees."
      },
      {
        "word": "KIWI",
        "category": "New Zealand Icon",
        "hint": "Small flightless nocturnal bird with hair-like feathers and nostrils at bill tip.",
        "extraHint": "The national emblem of New Zealand; lays an egg that is 20% of its body weight."
      },
      {
        "word": "KOALA",
        "category": "Eucalyptus Marsupial",
        "hint": "Australian tree-dwelling marsupial with round ears and a large black nose.",
        "extraHint": "Sleeps up to 20 hours a day because its diet of toxic eucalyptus leaves has low energy."
      },
      {
        "word": "KOI",
        "category": "Ornamental Carp",
        "hint": "Colorful domesticated varieties of common carp kept in decorative garden ponds.",
        "extraHint": "Prized in Japan as symbols of good fortune, perseverance, and long life."
      },
      {
        "word": "KRAIT",
        "category": "Venomous Elapid",
        "hint": "Highly venomous nocturnal snake native to the Indian subcontinent and Southeast Asia.",
        "extraHint": "Possesses potent neurotoxic venom, hiding beneath leaf litter and inside huts."
      },
      {
        "word": "KUDU",
        "category": "Spiral-Horned Antelope",
        "hint": "African antelope species where males boast magnificent long corkscrew horns.",
        "extraHint": "Possesses large sensitive ears and leaps over eight-foot fences with ease."
      },
      {
        "word": "LAMA",
        "category": "Woolly Camelid",
        "hint": "Domesticated South American camelid valued as a reliable beast of burden.",
        "extraHint": "Possesses a soft fleece coat and warns herds by sounding high-pitched alarms."
      },
      {
        "word": "LARK",
        "category": "Singing Grassland Bird",
        "hint": "Small terrestrial passerine bird celebrated for melodious singing in flight.",
        "extraHint": "Skylarks sing complex, continuous warbling songs while hovering high in sky."
      },
      {
        "word": "LION",
        "category": "Apex Predator",
        "hint": "Majestic big cat known as the 'King of the Jungle' that lives in social prides.",
        "extraHint": "Males possess a grand mane of fur; roars can be heard five miles away across savannas."
      },
      {
        "word": "LLAMA",
        "category": "Andean Pack Animal",
        "hint": "Domesticated South American camelid used as a pack animal in high Andes.",
        "extraHint": "Social herd animal that communicates through humming and spits defensively."
      },
      {
        "word": "LYNX",
        "category": "Northern Wild Cat",
        "hint": "Medium-sized wild cat with triangular black ear tufts and snowshoe-like paws.",
        "extraHint": "Specializes in hunting snowshoe hares across northern boreal forests in winter."
      },
      {
        "word": "MACAW",
        "category": "Vibrant Rainforest Bird",
        "hint": "Large, long-tailed parrot native to Central and South America with brilliant plumage.",
        "extraHint": "Possesses a powerful beak capable of cracking open rock-hard Brazil nuts."
      },
      {
        "word": "MAMBA",
        "category": "Fast African Snake",
        "hint": "Highly venomous, fast-moving African snake species renowned for potent neurotoxins.",
        "extraHint": "The black mamba is named for the inky-black interior lining of its open mouth."
      },
      {
        "word": "MARE",
        "category": "Adult Female Horse",
        "hint": "Mature female horse typically over four years of age.",
        "extraHint": "Carries developing foals for an 11-month gestation period before giving birth."
      },
      {
        "word": "MICE",
        "category": "Small Rodents",
        "hint": "Small rodents with pointed snouts, round ears, and long scaly tails.",
        "extraHint": "Prolific breeders that can produce dozens of offspring every single year."
      },
      {
        "word": "MINK",
        "category": "Semi-Aquatic Hunter",
        "hint": "Sleek, dark-furred semi-aquatic carnivore valued for luxurious water-repellent fur.",
        "extraHint": "Hunts fish, frogs, and waterfowl along riverbanks and lake shorelines."
      },
      {
        "word": "MOA",
        "category": "Extinct Giant",
        "hint": "Extinct flightless bird of New Zealand that was hunted to extinction.",
        "extraHint": "Some species grew over ten feet tall, grazing like woodland herbivores."
      },
      {
        "word": "MOLE",
        "category": "Subterranean Digger",
        "hint": "Small subterranean mammal with paddle-like paws adapted for digging tunnels.",
        "extraHint": "Nearly blind; locates earthworms using keen sensory snout whiskers."
      },
      {
        "word": "MOOSE",
        "category": "Largest Deer",
        "hint": "The largest extant deer species, recognized by broad, palmate flat antlers.",
        "extraHint": "Enjoys wading in marshy lakes to feed on nutrient-rich submerged aquatic weeds."
      },
      {
        "word": "MOTH",
        "category": "Nocturnal Insect",
        "hint": "Nocturnal winged insect covered in powdery scales with feathery antennae.",
        "extraHint": "Navigates by the moon, causing it to spiral erratically around artificial lamps."
      },
      {
        "word": "MULE",
        "category": "Equine Hybrid",
        "hint": "Sturdy, sure-footed hybrid offspring of a male donkey and female horse.",
        "extraHint": "Celebrated for endurance, calm temperament, and strength as a pack animal."
      },
      {
        "word": "MYNA",
        "category": "Vocal Starling",
        "hint": "Intelligent starling species native to Southern Asia renowned for vocal mimicry.",
        "extraHint": "Hill mynas can mimic human speech with astonishing clarity and inflection."
      },
      {
        "word": "NEWT",
        "category": "Semi-Aquatic Amphibian",
        "hint": "Small, slender amphibian with a long tail that lives in ponds and woods.",
        "extraHint": "Can regenerate fully functional limbs, eyes, and spinal cord tissue."
      },
      {
        "word": "NODDY",
        "category": "Tropical Tern",
        "hint": "Tropical dark-plumaged tern that nests on oceanic coral atolls and sea cliffs.",
        "extraHint": "Catches small fish driven to the ocean surface by hunting tuna schools."
      },
      {
        "word": "ORCA",
        "category": "Killer Whale",
        "hint": "Apex oceanic predator belonging to the dolphin family with black-and-white coloring.",
        "extraHint": "Hunts in sophisticated family pods employing coordinated hunting tactics."
      },
      {
        "word": "ORYX",
        "category": "Desert Antelope",
        "hint": "Desert-dwelling antelope with long, straight spear-like horns and masked face.",
        "extraHint": "Can endure intense heat by allowing its internal body temperature to rise safely."
      },
      {
        "word": "OTTER",
        "category": "Aquatic Mustelid",
        "hint": "Playful semi-aquatic mammal with dense water-repellent fur and webbed feet.",
        "extraHint": "Sea otters use smooth rocks as tools to crack open clams and sea urchins on bellies."
      },
      {
        "word": "OWL",
        "category": "Nocturnal Predator",
        "hint": "Nocturnal bird of prey with forward-facing eyes, silent flight, and 270-degree neck turn.",
        "extraHint": "Fringed wing feathers muffle the sound of air, enabling silent swoops on prey."
      },
      {
        "word": "PANDA",
        "category": "Bamboo Bear",
        "hint": "Iconic black-and-white bear native to mountain bamboo forests in central China.",
        "extraHint": "Spends up to 14 hours every single day chewing through fibrous bamboo shoots."
      },
      {
        "word": "PIG",
        "category": "Domestic Ungulate",
        "hint": "Highly intelligent omnivorous mammal with a flat cartilaginous snout.",
        "extraHint": "Rolls in cool mud baths to regulate body temperature and deter bugs."
      },
      {
        "word": "PIKE",
        "category": "Freshwater Hunter",
        "hint": "Voracious predatory freshwater fish with needle-sharp teeth and duckbill snout.",
        "extraHint": "Ambushes smaller fish and ducklings with explosive bursts of speed."
      },
      {
        "word": "PIPIT",
        "category": "Meadow Bird",
        "hint": "Slender, streaked ground-dwelling bird that walks rather than hops across turf.",
        "extraHint": "Meadow and tree pipits perform parachute singing display flights in spring."
      },
      {
        "word": "PUDU",
        "category": "Smallest Deer",
        "hint": "The smallest deer species in the world, native to South American rainforests.",
        "extraHint": "Stands only 14 inches tall, hiding from predators inside dense bamboo thickets."
      },
      {
        "word": "PUG",
        "category": "Wrinkled Companion",
        "hint": "Small dog breed characterized by wrinkled faces, short snouts, and curled tails.",
        "extraHint": "Bred as pampered lapdogs for ancient Chinese emperors and European royalty."
      },
      {
        "word": "PUMA",
        "category": "American Big Cat",
        "hint": "Solitary wild cat native to the Americas, also known as mountain lion.",
        "extraHint": "Leaps up to 40 feet horizontally when ambushing deer in rocky canyons."
      },
      {
        "word": "RACER",
        "category": "Swift Snake",
        "hint": "Fast, slender non-venomous colubrid snake widespread across North America.",
        "extraHint": "Relies on speed and keen eyesight to flee predators or pursue frogs and mice."
      },
      {
        "word": "RAM",
        "category": "Male Sheep",
        "hint": "Adult male sheep armed with large spiral curling defensive horns.",
        "extraHint": "Charges competing rival males at 20 mph during autumn breeding ruts."
      },
      {
        "word": "RAY",
        "category": "Flat Fish",
        "hint": "Cartilaginous fish with broad pectoral fins that ripple like underwater wings.",
        "extraHint": "Closely related to sharks; glides gracefully over sandy shallow seabeds."
      },
      {
        "word": "RHINO",
        "category": "Horned Giant",
        "hint": "Massive horned herbivore with thick protective dermal armor skin folds.",
        "extraHint": "Horns are made of keratin—the same protein found in human hair and fingernails."
      },
      {
        "word": "ROBIN",
        "category": "Red-Breasted Songbird",
        "hint": "Beloved garden bird with a bright orange-red breast and inquisitive nature.",
        "extraHint": "Follows gardeners turning over soil to snatch freshly unearthed earthworms."
      },
      {
        "word": "ROOK",
        "category": "Colonial Corvid",
        "hint": "Black corvid bird nesting in noisy treetop colonies known as rookeries.",
        "extraHint": "Distinguished from crows by the bare grey skin around the base of its bill."
      },
      {
        "word": "SEAL",
        "category": "Pinniped Swimmer",
        "hint": "Semi-aquatic marine mammal with sleek flippers adapted for agile swimming.",
        "extraHint": "Hauls out onto rocky shores and arctic ice floes to bask and rear pups."
      },
      {
        "word": "SHARK",
        "category": "Cartilaginous Fish",
        "hint": "Ancient apex marine predator possessing a skeleton made of flexible cartilage.",
        "extraHint": "Equipped with multiple rows of replaceable teeth and ampullae electroreceptors."
      },
      {
        "word": "SHIBA",
        "category": "Japanese Brushwood Dog",
        "hint": "Spirited, fox-like Japanese hunting dog breed with a curled tail and prick ears.",
        "extraHint": "Famous for its independent personality, cleanliness, and iconic 'Shiba scream'."
      },
      {
        "word": "SHREW",
        "category": "Tiny Insectivore",
        "hint": "Tiny, mouse-like mammal with a pointed snout, small eyes, and frantic metabolism.",
        "extraHint": "Must consume up to its entire body weight in insects every 24 hours to stay alive."
      },
      {
        "word": "SKINK",
        "category": "Smooth Lizard",
        "hint": "Lizard characterized by smooth, glossy scales and short, reduced limbs.",
        "extraHint": "Blue-tongued skinks puff up and flash an azure tongue to frighten off predators."
      },
      {
        "word": "SKUA",
        "category": "Fierce Seabird",
        "hint": "Powerful, aggressive seabird that preys upon penguin eggs and chicks.",
        "extraHint": "Attacks human researchers who venture too close to its tundra ground nesting sites."
      },
      {
        "word": "SKUNK",
        "category": "Defensive Mammal",
        "hint": "Black-and-white patterned mammal capable of spraying noxious defensive liquids.",
        "extraHint": "Ejects foul-smelling sulfurous secretions up to ten feet from anal scent glands."
      },
      {
        "word": "SLOTH",
        "category": "Slow Canopy Dweller",
        "hint": "Tree-dwelling tropical mammal famous for slow movements and upside-down hanging.",
        "extraHint": "Features algae-tinted green fur providing camouflage high in rainforest trees."
      },
      {
        "word": "SLUG",
        "category": "Shell-Less Mollusk",
        "hint": "Gastropod mollusk lacking an external protective shell, moving on slime.",
        "extraHint": "Secretes hygroscopic mucus that protects its moist body from drying out."
      },
      {
        "word": "SNIPE",
        "category": "Camouflaged Wader",
        "hint": "Secretive marshland wader with cryptic brown plumage and a very long bill.",
        "extraHint": "Makes an eerie 'drumming' or 'bleating' sound using vibrating outer tail feathers in dive."
      },
      {
        "word": "SOLE",
        "category": "Flat Bottom Fish",
        "hint": "Flatfish living on sandy sea bottoms with both eyes on its right side.",
        "extraHint": "Blends seamlessly into ocean sediments using active chromatophore camouflage."
      },
      {
        "word": "SQUID",
        "category": "Ten-Limbed Cephalopod",
        "hint": "Fast-swimming cephalopod with eight arms, two tentacles, and bilateral fins.",
        "extraHint": "Giant squid possess the largest eyes in the animal kingdom, measuring a foot wide."
      },
      {
        "word": "STAG",
        "category": "Adult Male Deer",
        "hint": "Mature adult male deer bearing an impressive set of branching bony antlers.",
        "extraHint": "Bellows loudly to challenge rival bucks during autumn breeding seasons."
      },
      {
        "word": "STILT",
        "category": "Extremely Long Legs",
        "hint": "Wading bird with black-and-white plumage and impossibly long pink legs.",
        "extraHint": "Has the longest legs relative to body size of any bird other than flamingos."
      },
      {
        "word": "STOAT",
        "category": "Short-Tailed Weasel",
        "hint": "Small mustelid whose brown summer coat turns completely snowy white in winter.",
        "extraHint": "Known as ermine when in pure white winter pelage with a black-tipped tail."
      },
      {
        "word": "STORK",
        "category": "Migratory Wader",
        "hint": "Large, long-legged wader famous in folklore for delivering newborn babies to doorsteps.",
        "extraHint": "Nests atop chimney stacks and telephone poles in European villages."
      },
      {
        "word": "SWAN",
        "category": "Graceful Waterfowl",
        "hint": "Large, elegant waterfowl with long curved necks and pristine white or black plumage.",
        "extraHint": "Pairs mate for life and engage in synchronized courtship dance routines on lakes."
      },
      {
        "word": "TAPIR",
        "category": "Forest Herbivore",
        "hint": "Large herbivorous mammal with a short, prehensile snout living in tropical forests.",
        "extraHint": "Excellent swimmer that retreats into deep river water when pursued by big cats."
      },
      {
        "word": "TERN",
        "category": "Graceful Seabird",
        "hint": "Slender seabird with long pointed wings and a deeply forked tail.",
        "extraHint": "The Arctic tern flies from the Arctic to Antarctic and back annually."
      },
      {
        "word": "TICK",
        "category": "Blood Parasite",
        "hint": "Eight-legged arachnid parasite that latches onto hosts to feed on blood.",
        "extraHint": "Can transmit bacterial pathogens such as Lyme disease through its saliva."
      },
      {
        "word": "TIGER",
        "category": "Striped Big Cat",
        "hint": "The largest extant cat species, instantly recognizable by dark vertical stripes.",
        "extraHint": "Excellent swimmers who often bathe in rivers and lakes to cool down in tropical heat."
      },
      {
        "word": "TIT",
        "category": "Small Songbird",
        "hint": "Small, active woodland songbird that flits between tree branches for seeds.",
        "extraHint": "Includes chickadees, blue tits, and great tits frequenting garden bird feeders."
      },
      {
        "word": "TOAD",
        "category": "Dry-Skinned Amphibian",
        "hint": "Terrestrial amphibian characterized by dry, warty skin and short hopping legs.",
        "extraHint": "Possesses parotoid glands behind the eyes that secrete bitter defensive toxins."
      },
      {
        "word": "TUNA",
        "category": "Warm-Blooded Swimmer",
        "hint": "Powerful, fast-swimming predatory marine fish capable of crossing entire oceans.",
        "extraHint": "One of the few fish species that can maintain warm internal body temperatures."
      },
      {
        "word": "VOLE",
        "category": "Meadow Mouse",
        "hint": "Small stocky rodent with a blunt snout and short tail common in grassland fields.",
        "extraHint": "Digs extensive surface runways beneath grass thatch, reproducing prolifically."
      },
      {
        "word": "WASP",
        "category": "Stinging Insect",
        "hint": "Narrow-waisted stinging insect that builds papery nests from chewed wood.",
        "extraHint": "Predatory hunters that paralyze garden caterpillars to feed developing larvae."
      },
      {
        "word": "WHALE",
        "category": "Ocean Giant",
        "hint": "Colossal marine mammal that breathes air through blowholes on its head.",
        "extraHint": "Blue whales are the largest creatures ever known to have lived on planet Earth."
      },
      {
        "word": "WOLF",
        "category": "Pack Hunter",
        "hint": "Apex canid predator native to wilderness areas across Eurasia and North America.",
        "extraHint": "Hunts large ungulates in structured packs governed by alpha breeding pairs."
      },
      {
        "word": "WORM",
        "category": "Annelid Invertebrate",
        "hint": "Tubular segmented invertebrate that burrows through underground soil.",
        "extraHint": "Ingests decaying soil matter, aerating gardens and creating rich humus compost."
      },
      {
        "word": "WREN",
        "category": "Tiny Songbird",
        "hint": "Tiny round bird with a perky upright tail and remarkably loud singing voice.",
        "extraHint": "Constructs multiple dome-shaped dummy nests among thick tangled vegetation."
      },
      {
        "word": "YAK",
        "category": "Himalayan Bovine",
        "hint": "Long-haired domesticated bovid found throughout the Himalayan mountain plateau.",
        "extraHint": "Provides milk, wool, and heavy transport across freezing high-altitude terrain."
      },
      {
        "word": "ZEBRA",
        "category": "Striped Equid",
        "hint": "African equid celebrated for distinctive black and white striped coats.",
        "extraHint": "No two zebras share identical stripes; stripes confuse biting tsetse flies."
      },
      {
        "word": "ZEBU",
        "category": "Humped Cattle",
        "hint": "Subspecies of domestic cattle originating in South Asia featuring a fatty hump.",
        "extraHint": "Highly resistant to tropical diseases, heat waves, and biting parasites."
      }
    ],
    "medium": [
      {
        "word": "AARDVARK",
        "category": "African Digger",
        "hint": "Medium-sized burrowing mammal native to Africa with rabbit ears and a pig snout.",
        "extraHint": "Name translates to 'earth pig' in Afrikaans; excavates huge termite mounds at night."
      },
      {
        "word": "ACCENTOR",
        "category": "Alpine Bird",
        "hint": "Hardy mountain bird that hops along rocky alpine screes and mountain huts.",
        "extraHint": "The dunnock and alpine accentor are well-known species in this family."
      },
      {
        "word": "ALPACA",
        "category": "Fiber Camelid",
        "hint": "Domesticated Andean camelid bred for luxurious, silky fleece fibers.",
        "extraHint": "Smaller than llamas, with soft fleece produced in over twenty natural shades."
      },
      {
        "word": "ANACONDA",
        "category": "Heavyweight Snake",
        "hint": "Massive aquatic boa native to the Amazon basin, the heaviest snake in the world.",
        "extraHint": "Spends most of its time submerged in murky swamps waiting to ambush caimans and capybaras."
      },
      {
        "word": "ANHINGA",
        "category": "Snakebird",
        "hint": "Water bird that swims with its body submerged, showing only a sinuous neck.",
        "extraHint": "Spears fish with a dagger-like bill, tossing them into the air to swallow headfirst."
      },
      {
        "word": "ANTEATER",
        "category": "Insect Specialist",
        "hint": "Toothless mammal featuring an elongated tubular snout and long sticky tongue.",
        "extraHint": "Can flick its two-foot tongue up to 160 times per minute to lap up thousands of ants."
      },
      {
        "word": "ANTELOPE",
        "category": "Swift Herbivore",
        "hint": "Slender, fleet-footed horned ruminant widespread across African grasslands.",
        "extraHint": "Leaps high into the air in a behavior called stotting to signal alertness to predators."
      },
      {
        "word": "AUKLET",
        "category": "Small Pacific Auk",
        "hint": "Small, gregarious Pacific seabird with bizarre facial plumes and bright crests.",
        "extraHint": "Crested auklets emit a sweet citrus odor that smells like crushed tangerines."
      },
      {
        "word": "AVOCET",
        "category": "Upturned Bill Wader",
        "hint": "Striking black-and-white wading bird with a slender upward-curving bill.",
        "extraHint": "Sweeps its bill from side to side through shallow water to catch tiny aquatic insects."
      },
      {
        "word": "AXOLOTL",
        "category": "Neotenic Salamander",
        "hint": "Mexican aquatic salamander that remains in larval form its entire adult life.",
        "extraHint": "Celebrated for its remarkable ability to regenerate lost limbs, heart, and spine."
      },
      {
        "word": "BABOON",
        "category": "Ground Primate",
        "hint": "Large African ground-dwelling monkey with a dog-like muzzle and cheek pouches.",
        "extraHint": "Travels in large social troops led by coalitions of adult males across savannas."
      },
      {
        "word": "BADGER",
        "category": "Burrowing Mustelid",
        "hint": "Short-legged, heavy-set omnivore famous for fierce defense and digging claws.",
        "extraHint": "Constructs extensive underground networks of burrow chambers known as setts."
      },
      {
        "word": "BASILISK",
        "category": "Jesus Lizard",
        "hint": "Central American lizard capable of sprinting across the surface of water.",
        "extraHint": "Possesses fringed scales on its rear toes that trap air bubbles, enabling water runs."
      },
      {
        "word": "BEAGLE",
        "category": "Scent Hound",
        "hint": "Small hound dog breed developed primarily for tracking rabbits by scent.",
        "extraHint": "Famous for long floppy ears, white-tipped tail, and melodious hunting bay."
      },
      {
        "word": "BEAVER",
        "category": "Ecosystem Engineer",
        "hint": "Large semi-aquatic rodent that fells trees to build elaborate dams and lodges.",
        "extraHint": "Features flat scaly paddle tails and iron-reinforced orange teeth that continuously grow."
      },
      {
        "word": "BEETLE",
        "category": "Armored Insect",
        "hint": "Insect belonging to the order Coleoptera with hardened wing covers called elytra.",
        "extraHint": "Accounts for roughly 25% of all known animal species discovered on Earth."
      },
      {
        "word": "BELUGA",
        "category": "White Whale",
        "hint": "Arctic whale known as the 'sea canary' due to its high-pitched birdlike chirps.",
        "extraHint": "Possesses a flexible neck and a bulbous forehead acoustic organ called a melon."
      },
      {
        "word": "BENGAL",
        "category": "Spotted Cat Breed",
        "hint": "Domestic cat breed developed to exhibit the exotic spotted pattern of leopards.",
        "extraHint": "Bred by crossing domestic cats with the Asian leopard cat; loves playing with water."
      },
      {
        "word": "BICHON",
        "category": "Velvet Powder-Puff",
        "hint": "Cheerful small dog breed with a curly white coat that resembles a cotton ball.",
        "extraHint": "Known for its merry disposition and hypoallergenic low-shedding white curls."
      },
      {
        "word": "BITTERN",
        "category": "Camouflaged Heron",
        "hint": "Secretive marshland bird that stretches its neck vertically to mimic reeds.",
        "extraHint": "Males produce a deep, foghorn-like booming vocalization carrying across marshes."
      },
      {
        "word": "BLENNY",
        "category": "Bottom Fish",
        "hint": "Small elongated marine fish with blunt heads that perches on rocky coastal reefs.",
        "extraHint": "Hides in crevices and empty barnacle shells, peering out with inquisitive eyes."
      },
      {
        "word": "BLUEBIRD",
        "category": "Thrush Family",
        "hint": "Medium-sized North American thrush with brilliant azure-blue plumage.",
        "extraHint": "A beloved symbol of happiness that readily nests in roadside wooden birdhouses."
      },
      {
        "word": "BOBCAT",
        "category": "Wild North American Cat",
        "hint": "North American predator with a bobbed tail, tufted ears, and spotted fur.",
        "extraHint": "Adaptable hunter stalking rabbits, rodents, and birds through forests and deserts."
      },
      {
        "word": "BUFFALO",
        "category": "Water Bovine",
        "hint": "Large horned bovine widespread in wetlands across Africa and Southern Asia.",
        "extraHint": "Cape buffalo are known as 'Black Death' in Africa for fierce herd defense."
      },
      {
        "word": "BULLDOG",
        "category": "Muscular Dog",
        "hint": "Stocky, muscular dog breed with a wrinkled face and distinctive pushed-in nose.",
        "extraHint": "Originally bred for bull-baiting; now a beloved docile family companion."
      },
      {
        "word": "BULLFROG",
        "category": "Giant Amphibian",
        "hint": "Large freshwater frog with a deep, cow-like resonant bellowing call.",
        "extraHint": "Gorges opportunistically on insects, crayfish, smaller frogs, and even small birds."
      },
      {
        "word": "BUSHBABY",
        "category": "Galago",
        "hint": "Small nocturnal African primate with enormous saucer eyes and spring-loaded legs.",
        "extraHint": "Can leap seven feet straight up into tree branches to snatch insects in dark."
      },
      {
        "word": "BUSTARD",
        "category": "Heavy Flying Bird",
        "hint": "Large terrestrial bird capable of flight, with some species weighing over 40 lbs.",
        "extraHint": "The kori bustard is the heaviest animal capable of self-powered flight on Earth."
      },
      {
        "word": "BUZZARD",
        "category": "Broad-Winged Raptor",
        "hint": "Medium-to-large raptor that circles high in open skies hunting rodents.",
        "extraHint": "Frequently seen perched motionless on roadside fence posts watching for field voles."
      },
      {
        "word": "CAIMAN",
        "category": "Alligatorid",
        "hint": "Medium-to-large crocodilian native to Central and South American swamps.",
        "extraHint": "Equipped with heavily armored belly scales, hunting fish and snails at night."
      },
      {
        "word": "CANINE",
        "category": "Dog Family Member",
        "hint": "Carnivorous mammal belonging to the biological family Canidae.",
        "extraHint": "Characterized by slender bodies, bushy tails, non-retractable claws, and keen scent."
      },
      {
        "word": "CAPYBARA",
        "category": "Largest Rodent",
        "hint": "The largest living rodent in the world, semi-aquatic and native to South America.",
        "extraHint": "Lives in social herds along riverbanks; highly docile and beloved by other animals."
      },
      {
        "word": "CARACAL",
        "category": "Desert Lynx",
        "hint": "Medium-sized African and Asian wild cat with distinctive black tufts on ears.",
        "extraHint": "Can leap nine feet into the air to swat flying game birds right out of the sky."
      },
      {
        "word": "CARIBOU",
        "category": "Northern Reindeer",
        "hint": "Arctic and subarctic deer species where both sexes grow branching antlers.",
        "extraHint": "Undertakes colossal migrations across thousands of miles of frozen tundra."
      },
      {
        "word": "CHAMOIS",
        "category": "Mountain Goat-Antelope",
        "hint": "Agile goat-antelope species native to mountain ranges in Europe.",
        "extraHint": "Features rubbery hoof pads allowing it to bound across icy rock screes effortlessly."
      },
      {
        "word": "CHEETAH",
        "category": "Fastest Land Mammal",
        "hint": "Slender spotted carnivore capable of sprinting at speeds reaching 70 mph.",
        "extraHint": "Possesses distinctive black tear-stripe facial markings and non-retractable claws."
      },
      {
        "word": "CHIPMUNK",
        "category": "Striped Rodent",
        "hint": "Small striped ground-dwelling rodent featuring expandable cheek pouches.",
        "extraHint": "Carries nuts, seeds, and grains inside internal cheek pouches back to storage dens."
      },
      {
        "word": "CHOUGH",
        "category": "Red-Billed Corvid",
        "hint": "Glossy black corvid with a slender curved red bill and bright red legs.",
        "extraHint": "Performs breathtaking aerobatic swoops and rolls along stormy coastal sea cliffs."
      },
      {
        "word": "CHOWCHOW",
        "category": "Lion Dog",
        "hint": "Ancient Chinese dog breed featuring a thick lion-like mane and blue-black tongue.",
        "extraHint": "Known as the Songshi Quan ('puffy-lion dog') in China; highly dignified and aloof."
      },
      {
        "word": "CICADA",
        "category": "Nocturnal Singer",
        "hint": "Insect famous for loud buzzing mating choruses produced by abdominal tymbals.",
        "extraHint": "Periodical cicadas spend 13 or 17 years underground as nymphs before emerging."
      },
      {
        "word": "COALTIT",
        "category": "Conifer Tit",
        "hint": "Tiny active tit with a white patch on the nape of its black head.",
        "extraHint": "Specializes in foraging for tiny insects in the needles of pine and spruce trees."
      },
      {
        "word": "COLLIE",
        "category": "Herding Dog",
        "hint": "Graceful, intelligent Scottish herding dog breed with a long slender muzzle.",
        "extraHint": "Famous worldwide through the heroic fictional television dog character Lassie."
      },
      {
        "word": "COLUGO",
        "category": "Flying Lemur",
        "hint": "Gliding mammal native to Southeast Asia with the most extensive gliding membrane of all.",
        "extraHint": "Glides over 400 feet between tall rainforest emergent trees with minimal altitude loss."
      },
      {
        "word": "CONDOR",
        "category": "Colossal Scavenger",
        "hint": "One of the largest flying birds in the world with a wingspan exceeding ten feet.",
        "extraHint": "California and Andean condors glide effortlessly for hours without flapping wings."
      },
      {
        "word": "COUCAL",
        "category": "Ground Cuckoo",
        "hint": "Large, heavy-billed predatory bird belonging to the cuckoo family in brush.",
        "extraHint": "Unlike parasitic cuckoos, coucals build their own domed nests and rear chicks."
      },
      {
        "word": "COUGAR",
        "category": "Mountain Lion",
        "hint": "Large solitary feline native to the Americas, also known as a puma or panther.",
        "extraHint": "Possesses immense leaping ability, springing up to 40 feet horizontally."
      },
      {
        "word": "COYOTE",
        "category": "North American Canine",
        "hint": "Clever canine native to North America celebrated for eerie howling choruses.",
        "extraHint": "Known as the trickster in Native American folklore; thrives in cities and wilderness."
      },
      {
        "word": "CRICKET",
        "category": "Chirping Insect",
        "hint": "Jumping insect famous for musical chirping created by rubbing its wings together.",
        "extraHint": "The chirping rate of snowy tree crickets correlates mathematically with air temperature."
      },
      {
        "word": "CUCKOO",
        "category": "Brood Parasite",
        "hint": "Bird famous for laying its eggs secretly inside the nests of other bird species.",
        "extraHint": "The newly hatched cuckoo chick instinctively rolls the host bird's eggs out of nest."
      },
      {
        "word": "CURASSOW",
        "category": "Arboreal Game Bird",
        "hint": "Large, turkey-like South American bird with curly head crests and yellow bills.",
        "extraHint": "Forages on rainforest floors for fallen fruit, flying into canopies to roost."
      },
      {
        "word": "CURLEW",
        "category": "Long-Billed Wader",
        "hint": "The largest European wading bird, celebrated for a haunting, bubbly call.",
        "extraHint": "Its long decurved bill reaches deep into intertidal mud to extract lugworms."
      },
      {
        "word": "DARTER",
        "category": "Snakebird Relative",
        "hint": "Tropical water bird with a long thin neck and needle-sharp dagger bill.",
        "extraHint": "Spears fish underwater, tossing them into the air to swallow them headfirst."
      },
      {
        "word": "DESMAN",
        "category": "Aquatic Mole",
        "hint": "Semi-aquatic insectivore related to moles with a long flexible tubular snout.",
        "extraHint": "Uses its flat paddle tail and webbed hind feet to hunt aquatic insects in rivers."
      },
      {
        "word": "DIKDIK",
        "category": "Tiny Antelope",
        "hint": "Tiny antelope native to eastern and southern Africa standing just 14 inches tall.",
        "extraHint": "Pairs mate for life and mark territory boundaries with secretions from eye glands."
      },
      {
        "word": "DIPPER",
        "category": "Aquatic Songbird",
        "hint": "Chubby songbird that walks underwater along stony riverbeds to feed on larvae.",
        "extraHint": "Possesses dense waterproof plumage, a third eyelid flap, and heavy bones."
      },
      {
        "word": "DOBERMAN",
        "category": "Sleek Guard Dog",
        "hint": "Medium-large domestic dog breed developed as an alert and loyal protector.",
        "extraHint": "Bred by German tax collector Louis Dobermann for defense and obedience."
      },
      {
        "word": "DOLPHIN",
        "category": "Intelligent Cetacean",
        "hint": "Highly intelligent marine mammal known for playful leaps and echolocation clicks.",
        "extraHint": "Uses complex whistling vocalizations to communicate with pod mates."
      },
      {
        "word": "DONKEY",
        "category": "Sturdy Equine",
        "hint": "Domesticated beast of burden known for large ears, braying calls, and sure footing.",
        "extraHint": "Possesses incredible desert stamina and guards livestock against coyotes."
      },
      {
        "word": "DRONGO",
        "category": "Glossy Black Bird",
        "hint": "Fearless, aggressive bird with a forked tail known for mimicking other bird calls.",
        "extraHint": "Fork-tailed drongos deceive meerkats with false alarm calls to steal their food."
      },
      {
        "word": "DUGONG",
        "category": "Sirenian",
        "hint": "Marine herbivore closely related to manatees possessing a fluked whale-like tail.",
        "extraHint": "Grazes peacefully on underwater seagrass meadows in warm Indo-Pacific coastal waters."
      },
      {
        "word": "DUIKER",
        "category": "Forest Antelope",
        "hint": "Small to medium-sized forest antelope known for diving into dense thickets.",
        "extraHint": "Possesses a slight crest of hair on forehead and feeds on fallen rainforest fruit."
      },
      {
        "word": "DUNLIN",
        "category": "Small Shorebird",
        "hint": "Small, gregarious sandpiper that feeds along muddy coastal tidal estuaries.",
        "extraHint": "Flocks execute mesmerizing synchronized aerial maneuvers when evading hunting falcons."
      },
      {
        "word": "DUNNOCK",
        "category": "Hedge Accentor",
        "hint": "Unassuming brown garden bird with a slender bill and complex mating systems.",
        "extraHint": "Often called the hedge sparrow, though it belongs to the accentor bird family."
      },
      {
        "word": "ECHIDNA",
        "category": "Spiny Anteater",
        "hint": "Spiny egg-laying monotreme covered in defensive quills native to Australia.",
        "extraHint": "Uses a sticky elongated tongue to extract ants and termites from decaying logs."
      },
      {
        "word": "ELEPHANT",
        "category": "Largest Land Mammal",
        "hint": "Massive intelligent mammal with an elongated trunk, tusks, and large fan ears.",
        "extraHint": "Possesses incredible memory, complex emotions, and communicates via seismic infrasound."
      },
      {
        "word": "FALCON",
        "category": "Speed Diver",
        "hint": "High-speed bird of prey famous for aerodynamic diving flights called stoops.",
        "extraHint": "The peregrine falcon dives at speeds over 240 mph, making it Earth's fastest animal."
      },
      {
        "word": "FANTAIL",
        "category": "Display Bird",
        "hint": "Small insectivorous bird that constantly fans out its broad tail like a Spanish fan.",
        "extraHint": "Flutters erratically through foliage, flushing out hiding insects with tail flicks."
      },
      {
        "word": "FELINE",
        "category": "Cat Family Member",
        "hint": "Mammal of the family Felidae featuring retractable claws and lithe bodies.",
        "extraHint": "Apex ambush predators ranging from small domestic mousers to giant tigers."
      },
      {
        "word": "FERRET",
        "category": "Domestic Mustelid",
        "hint": "Domesticated form of the European polecat kept as pets and for rabbit hunting.",
        "extraHint": "Possesses a flexible, sinuous body enabling it to squeeze through narrow piping."
      },
      {
        "word": "FLAMINGO",
        "category": "Pink Wader",
        "hint": "Tall wading bird famous for standing on one leg and filtering algae with upside-down bills.",
        "extraHint": "Acquires its brilliant pink coloration from carotenoid pigments in brine shrimp diets."
      },
      {
        "word": "FULMAR",
        "category": "Arctic Seabird",
        "hint": "Gull-like petrel that glides effortlessly above stormy northern ocean swells.",
        "extraHint": "Defends cliffside nests by spitting noxious, foul-smelling stomach oil at intruders."
      },
      {
        "word": "GANNET",
        "category": "Plunge Diver",
        "hint": "Large seabird that plunge-dives into the ocean at 60 mph from 100 feet in air.",
        "extraHint": "Features air-sac cushions in its face and chest to absorb high-speed water impact."
      },
      {
        "word": "GAZELLE",
        "category": "Graceful Antelope",
        "hint": "Small, swift antelope capable of running at high sustained speeds.",
        "extraHint": "Evades cheetahs through zigzagging leaps and incredible agility across plains."
      },
      {
        "word": "GERBIL",
        "category": "Desert Rodent",
        "hint": "Small hopping desert rodent adapted to arid climates with furry tails.",
        "extraHint": "Produces minimal odorless urine and conserves water through efficient desert kidneys."
      },
      {
        "word": "GHARIAL",
        "category": "Fish-Eating Crocodilian",
        "hint": "Fish-eating crocodilian with an extraordinarily long, slender needle-toothed snout.",
        "extraHint": "Native to the northern Indian subcontinent; snatches fish with swift side-swipes."
      },
      {
        "word": "GIBBON",
        "category": "Lesser Ape",
        "hint": "Small arboreal ape famous for swinging through forest canopies via brachiation.",
        "extraHint": "Possesses ball-and-socket wrist joints allowing effortless tree branch swinging."
      },
      {
        "word": "GIRAFFE",
        "category": "Tallest Animal",
        "hint": "The tallest living terrestrial animal, featuring an elongated neck and long legs.",
        "extraHint": "Uses an 18-inch prehensile purplish-black tongue to strip leaves from thorny trees."
      },
      {
        "word": "GODWIT",
        "category": "Long-Billed Wader",
        "hint": "Shorebird featuring a long, slightly upturned bill for probing deep in tidal mud.",
        "extraHint": "The bar-tailed godwit flies non-stop 7,000 miles from Alaska to New Zealand."
      },
      {
        "word": "GOPHER",
        "category": "Burrowing Rodent",
        "hint": "Fossorial burrowing rodent featuring large fur-lined external cheek pouches.",
        "extraHint": "Excavates intricate tunnel networks, leaving characteristic horseshoe dirt mounds."
      },
      {
        "word": "GROUPER",
        "category": "Heavy Reef Fish",
        "hint": "Large-mouthed predatory fish that swallows prey whole by creating suction.",
        "extraHint": "Goliath groupers can grow up to 8 feet in length and weigh over 800 pounds."
      },
      {
        "word": "GROUSE",
        "category": "Game Bird",
        "hint": "Plump, ground-dwelling game bird inhabiting moorlands, prairies, and taiga.",
        "extraHint": "Males perform elaborate communal courtship displays on open dancing grounds called leks."
      },
      {
        "word": "GUANACO",
        "category": "Wild Camelid",
        "hint": "Wild South American camelid related to llamas that roams the arid Patagonian plains.",
        "extraHint": "Can run at speeds of 35 mph across rocky Andean steppes to escape pumas."
      },
      {
        "word": "HADDOCK",
        "category": "Marine Food Fish",
        "hint": "Marine fish belonging to the cod family marked by a black 'thumbprint' spot.",
        "extraHint": "Important commercial catch in North Atlantic waters, popular in traditional fish and chips."
      },
      {
        "word": "HALIBUT",
        "category": "Giant Flatfish",
        "hint": "The largest of all flatfish, capable of reaching over eight feet in length.",
        "extraHint": "Demersal predator hunting cod, crabs, and squid on cold ocean seafloors."
      },
      {
        "word": "HAMERKOP",
        "category": "Hammerhead Stork",
        "hint": "African water bird with an elongated backward-pointing crest resembling a hammer.",
        "extraHint": "Constructs massive domed stick nests weighing up to 100 pounds in trees."
      },
      {
        "word": "HAMSTER",
        "category": "Pocket Rodent",
        "hint": "Small crepuscular rodent widely kept as a domestic pet with expandable cheeks.",
        "extraHint": "Runs miles each night on exercise wheels and hoards seeds inside underground tunnels."
      },
      {
        "word": "HEDGEHOG",
        "category": "Spiny Insectivore",
        "hint": "Small nocturnal mammal covered in thousands of stiff, keratin-based defensive spines.",
        "extraHint": "Curls into a spiny impenetrable ball when threatened, tucking in head and limbs."
      },
      {
        "word": "HERRING",
        "category": "Forage Fish",
        "hint": "Silvery schooling forage fish that forms massive underwater bait balls.",
        "extraHint": "Crucial keystone species feeding whales, dolphins, seabirds, seals, and sharks."
      },
      {
        "word": "HOATZIN",
        "category": "Stinkbird",
        "hint": "Bizarre South American bird whose chicks possess functional wing claws.",
        "extraHint": "Feeds strictly on leaves; ferments food in an enlarged crop smelling like cow manure."
      },
      {
        "word": "HONEYBEE",
        "category": "Social Pollinator",
        "hint": "Social insect that produces golden honey, beeswax, and pollinates crops.",
        "extraHint": "Communicates the direction and distance to flower nectar using a complex 'waggle dance'."
      },
      {
        "word": "HOOPOE",
        "category": "Crested Bird",
        "hint": "Colorful bird with a dramatic fan-like crest of feathers and long curved bill.",
        "extraHint": "Celebrated in ancient Egyptian and Persian mythology as a symbol of virtue."
      },
      {
        "word": "HORNET",
        "category": "Large Wasp",
        "hint": "The largest eusocial wasp species, building papery carton nests in trees.",
        "extraHint": "Can sting repeatedly without losing its stinger; aggressively defends nest colonies."
      },
      {
        "word": "IGUANA",
        "category": "Spiny Herbivorous Lizard",
        "hint": "Large herbivorous lizard with a spiny crest running along its back and tail.",
        "extraHint": "Marine iguanas in the Galapagos dive deep into cold ocean surf to graze on algae."
      },
      {
        "word": "IMPALA",
        "category": "Leaping Antelope",
        "hint": "Medium-sized African antelope renowned for spectacular soaring leaps.",
        "extraHint": "Can bound up to 30 feet in length and 10 feet in height to escape hunting wild dogs."
      },
      {
        "word": "JACANA",
        "category": "Lotus Bird",
        "hint": "Tropical wader possessing extraordinarily long toes enabling it to walk on floating lily pads.",
        "extraHint": "Often dubbed the 'Jesus bird' because it appears to walk directly on the surface of water."
      },
      {
        "word": "JACKAL",
        "category": "African Wild Canine",
        "hint": "Slender medium-sized wild canid native to Africa and southeastern Europe.",
        "extraHint": "Adaptable opportunistic omnivore hunting small game and scavenging carrion."
      },
      {
        "word": "JAEGER",
        "category": "Parasitic Skua",
        "hint": "Aggressive predatory seabird that steals caught fish from other flying birds.",
        "extraHint": "Chases terns and gulls relentlessly until they drop or regurgitate their prey."
      },
      {
        "word": "JAGUAR",
        "category": "New World Big Cat",
        "hint": "Compact muscular big cat native to the Americas with an exceptionally powerful bite.",
        "extraHint": "Can pierce turtle shells and caiman armor; revered in ancient Mayan mythology."
      },
      {
        "word": "KANGAROO",
        "category": "Hopping Marsupial",
        "hint": "Large Australian marsupial with powerful hind legs built for bounding hops.",
        "extraHint": "Females carry developing joey offspring in an insulated abdominal pouch."
      },
      {
        "word": "KOMODO",
        "category": "Giant Monitor Lizard",
        "hint": "The largest living species of lizard, growing up to ten feet in length in Indonesia.",
        "extraHint": "Hunts deer with powerful bites, serrated teeth, and anticoagulating toxic saliva."
      },
      {
        "word": "LABRADOR",
        "category": "Water Retriever",
        "hint": "Gentle, friendly water retriever dog breed with an otter-like swimming tail.",
        "extraHint": "Consistently ranked as the world's most popular family pet dog for decades."
      },
      {
        "word": "LADYBUG",
        "category": "Spotted Beetle",
        "hint": "Small round red or yellow beetle adorned with black spots that eats aphids.",
        "extraHint": "Gardener's ally; a single ladybug can devour thousands of destructive crop aphids."
      },
      {
        "word": "LAPWING",
        "category": "Peewit Bird",
        "hint": "Crested wader with iridescent green plumage and a distinctive 'peewit' call.",
        "extraHint": "Performs dramatic tumbling spring courtship aerobatics over agricultural fields."
      },
      {
        "word": "LEMMING",
        "category": "Tundra Rodent",
        "hint": "Small arctic rodent known for periodic population explosions on northern tundra.",
        "extraHint": "Does not commit mass suicide; disperses in vast wandering numbers when food depletes."
      },
      {
        "word": "LEOPARD",
        "category": "Spotted Big Cat",
        "hint": "Stealthy African and Asian feline celebrated for rosette spots and climbing agility.",
        "extraHint": "Frequently drags heavy prey carcasses up into acacia trees to keep them from hyenas."
      },
      {
        "word": "LINNET",
        "category": "Finch",
        "hint": "Small, slender finch where breeding males sport a crimson forehead and breast.",
        "extraHint": "Feeds on seeds from dandelions and thistles, warbling melodious songs from hedges."
      },
      {
        "word": "LIZARD",
        "category": "Reptile",
        "hint": "Widespread group of squamate reptiles with scaly skin, four legs, and movable eyelids.",
        "extraHint": "Many species can detach their tail when grabbed by predators, later regrowing it."
      },
      {
        "word": "LOBSTER",
        "category": "Clawed Crustacean",
        "hint": "Bottom-dwelling marine crustacean with large, muscular claws and hard exoskeleton.",
        "extraHint": "Possesses a heavy crusher claw and a sharp cutter claw for eating mollusks."
      },
      {
        "word": "LOCUST",
        "category": "Swarming Grasshopper",
        "hint": "Grasshopper species that enters a gregarious swarming phase in high populations.",
        "extraHint": "Colossal swarms of billions can strip agricultural farmlands of crops in hours."
      },
      {
        "word": "MACKEREL",
        "category": "Pelagic Swimmer",
        "hint": "Streamlined, fast-swimming pelagic fish with iridescent green-blue barred backs.",
        "extraHint": "Possesses a rich oily flesh, migrating in huge schools near the ocean surface."
      },
      {
        "word": "MALAMUTE",
        "category": "Arctic Sled Dog",
        "hint": "Large, powerful arctic working dog breed bred to haul heavy freight sleds.",
        "extraHint": "Possesses a dense double coat and immense endurance in sub-zero blizzards."
      },
      {
        "word": "MALLARD",
        "category": "Wild Duck",
        "hint": "Common wild dabbling duck where males display glossy green heads and white collars.",
        "extraHint": "The direct ancestor of almost all domesticated domestic duck breeds."
      },
      {
        "word": "MALTESE",
        "category": "Silky Toy Dog",
        "hint": "Small toy dog breed covered in a long, flowing mantle of pure white silky hair.",
        "extraHint": "Prized as a gentle lap companion since ancient Roman and Greek civilizations."
      },
      {
        "word": "MANATEE",
        "category": "Sea Cow",
        "hint": "Gentle, slow-moving aquatic herbivore that grazes on underwater seagrass beds.",
        "extraHint": "Can hold its breath underwater for up to 20 minutes while resting on river beds."
      },
      {
        "word": "MANDRILL",
        "category": "Colorful Baboon",
        "hint": "The largest monkey in the world, with striking blue and red ridges on its face.",
        "extraHint": "Dominant males sport vibrant blue and crimson facial markings and golden beards."
      },
      {
        "word": "MANTARAY",
        "category": "Gentle Giant Ray",
        "hint": "Colossal filter-feeding ray with horn-like cephalic fins funneling plankton.",
        "extraHint": "Can boast wingspans reaching 29 feet and frequently performs acrobatics above water."
      },
      {
        "word": "MANTIS",
        "category": "Praying Insect",
        "hint": "Predatory insect with folded front raptorial legs held as if in prayer.",
        "extraHint": "The only insect capable of turning its triangular head a full 180 degrees to track prey."
      },
      {
        "word": "MARGAY",
        "category": "Arboreal Wildcat",
        "hint": "Small spotted feline native to Central and South America with flexible ankles.",
        "extraHint": "Can rotate its hind feet 180 degrees to run down tree trunks completely headfirst."
      },
      {
        "word": "MARMOT",
        "category": "Alpine Rodent",
        "hint": "Large ground squirrel living in mountainous rocky terrain and high alpine meadows.",
        "extraHint": "Whistles shrill alarm warnings to alert colony members of approaching golden eagles."
      },
      {
        "word": "MARSHTIT",
        "category": "Small Tit",
        "hint": "Small woodland bird with a glossy black cap and tiny black bib under bill.",
        "extraHint": "Caches thousands of seeds each autumn, remembering exact hiding spots months later."
      },
      {
        "word": "MARTEN",
        "category": "Arboreal Mustelid",
        "hint": "Slender, agile mustelid adapted to living and hunting in coniferous tree canopies.",
        "extraHint": "Leaps effortlessly between tree branches pursuing squirrels and nesting birds."
      },
      {
        "word": "MASTIFF",
        "category": "Gentle Giant Dog",
        "hint": "Colossal, muscular working dog breed recognized for its massive head and jaw.",
        "extraHint": "One of the heaviest dog breeds in the world, with adult males often exceeding 200 lbs."
      },
      {
        "word": "MEERKAT",
        "category": "Sentinel Forager",
        "hint": "Small mongoose species living in underground burrows across the Kalahari Desert.",
        "extraHint": "Takes turns standing upright on hind legs as sentinels watching skies for hawks."
      },
      {
        "word": "MEGAPODE",
        "category": "Mound Builder",
        "hint": "Australian bird that incubates eggs in gigantic decomposing compost mounds.",
        "extraHint": "Males use their bills as thermometers to test compost temperature, adding or removing leaf matter."
      },
      {
        "word": "MERLIN",
        "category": "Small Falcon",
        "hint": "Small, fast falcon that hunts small songbirds through rapid, low-level flight.",
        "extraHint": "Historically known as the 'lady's hawk' in medieval falconry traditions."
      },
      {
        "word": "MINNOW",
        "category": "Small Fish",
        "hint": "Small freshwater fish widely used as live bait by recreational anglers.",
        "extraHint": "Forms dense coordinated schools in shallow streams to confuse aquatic predators."
      },
      {
        "word": "MONARCH",
        "category": "Flycatcher Bird",
        "hint": "Tropical passerine bird characterized by agile aerial hawking and bold crests.",
        "extraHint": "Inhabits forest canopies across Australasia, building tidy mossy cup nests."
      },
      {
        "word": "MONGOOSE",
        "category": "Snake Fighter",
        "hint": "Quick, agile mammal renowned for its ability to fight and kill venomous cobras.",
        "extraHint": "Possesses specialized acetylcholine receptor mutations granting partial venom immunity."
      },
      {
        "word": "MONKEY",
        "category": "Primate",
        "hint": "Intelligent primate typically possessing a long tail and dexterous hands.",
        "extraHint": "New World monkeys possess prehensile tails acting like a fifth grasping limb."
      },
      {
        "word": "MOORHEN",
        "category": "Water Hen",
        "hint": "Black wetland bird with a distinctive bright red frontal shield above its beak.",
        "extraHint": "Paddles across freshwater ponds, jerking its head rhythmically with each stroke."
      },
      {
        "word": "MOSQUITO",
        "category": "Blood-Feeding Insect",
        "hint": "Slender two-winged insect where females pierce skin to feed on blood proteins.",
        "extraHint": "Vector for human diseases like malaria, yellow fever, and dengue virus."
      },
      {
        "word": "MUDPUPPY",
        "category": "Aquatic Salamander",
        "hint": "Large fully aquatic salamander retaining bushy red external gills its entire life.",
        "extraHint": "Inhabits murky rivers and lakes across eastern North America, active year-round."
      },
      {
        "word": "MULLET",
        "category": "Jumping Fish",
        "hint": "Coastal marine fish famous for leaping completely out of the water repeatedly.",
        "extraHint": "Feeds on microscopic algae and detritus filtered from sandy bottom sediments."
      },
      {
        "word": "MUSKRAT",
        "category": "Aquatic Rodent",
        "hint": "Medium-sized semi-aquatic rodent native to wetlands across North America.",
        "extraHint": "Builds dome-shaped push-up houses from cattails, swimming with a flattened rudder tail."
      },
      {
        "word": "NARWHAL",
        "category": "Unicorn Whale",
        "hint": "Arctic whale species where males possess a long, helical protruding tusk.",
        "extraHint": "The tusk is actually a sensory canine tooth with millions of nerve endings."
      },
      {
        "word": "NAUTILUS",
        "category": "Chambered Cephalopod",
        "hint": "Pelagic marine mollusk possessing a spiral partitioned shell and primitive pinhole eyes.",
        "extraHint": "Adjusts buoyancy by regulating gas and liquid ratios inside shell chambers."
      },
      {
        "word": "NUTHATCH",
        "category": "Tree Climber",
        "hint": "Compact blue-grey woodland bird that can walk headfirst down tree trunks.",
        "extraHint": "Wedges nuts into bark crevices before hacking them open with its sharp bill."
      },
      {
        "word": "NUTRIA",
        "category": "Coypu",
        "hint": "Large semi-aquatic rodent native to South America with bright orange incisor teeth.",
        "extraHint": "Inhabits freshwater marshes, digging burrows that can destabilize river levees."
      },
      {
        "word": "OCELOT",
        "category": "Small Spotted Cat",
        "hint": "Medium-sized wild cat native to southwestern North America and South America.",
        "extraHint": "Features patterned ring rosettes and large rounded ears with white spots."
      },
      {
        "word": "OCTOPUS",
        "category": "Eight-Armed Cephalopod",
        "hint": "Soft-bodied, eight-armed cephalopod with remarkable camouflage capabilities.",
        "extraHint": "Possesses three hearts, blue copper blood, and solves complex puzzles and mazes."
      },
      {
        "word": "OPOSSUM",
        "category": "American Marsupial",
        "hint": "The only marsupial species native to North America north of the Rio Grande.",
        "extraHint": "Feigns death by playing dead and releasing foul odors when cornered by predators."
      },
      {
        "word": "ORIOLE",
        "category": "Songbird",
        "hint": "Brilliantly colored songbird with bright yellow or orange and black plumage.",
        "extraHint": "Constructs intricate woven hanging pouch nests suspended from slender tree branches."
      },
      {
        "word": "OSPREY",
        "category": "Fish Hawk",
        "hint": "Fish-eating bird of prey featuring reversible outer toes and barbed foot pads.",
        "extraHint": "Plunges feet-first into lakes and oceans to snatch slippery live fish."
      },
      {
        "word": "OSTRICH",
        "category": "Largest Living Bird",
        "hint": "Colossal flightless African bird that can sprint at speeds up to 45 mph.",
        "extraHint": "Lays the largest eggs of any living bird; possesses powerful defensive kicking legs."
      },
      {
        "word": "PANGOLIN",
        "category": "Scaly Insectivore",
        "hint": "Solitary nocturnal mammal covered in large, overlapping keratin scales.",
        "extraHint": "The only mammal with true scales; rolls into a tight ball when alarmed by predators."
      },
      {
        "word": "PANTHER",
        "category": "Melanistic Leopard",
        "hint": "Melanistic color variant of leopards or jaguars with sleek black coats.",
        "extraHint": "Possesses piercing yellow or green eyes and excels at nocturnal hunting."
      },
      {
        "word": "PAPILLON",
        "category": "Butterfly Spaniel",
        "hint": "Toy spaniel named for its large, upright fringed ears resembling butterfly wings.",
        "extraHint": "Remarkably agile and intelligent, frequently excelling in canine agility competitions."
      },
      {
        "word": "PARAKEET",
        "category": "Small Parrot",
        "hint": "Small, slender parrot with a long, tapering tail and playful disposition.",
        "extraHint": "Includes the Australian budgerigar, among the most popular pet birds worldwide."
      },
      {
        "word": "PARROT",
        "category": "Vocal Tropical Bird",
        "hint": "Intelligent tropical bird with a curved beak, bright feathers, and zygodactyl feet.",
        "extraHint": "Capable of mimicking human speech phrases and solving complex reasoning tests."
      },
      {
        "word": "PEACOCK",
        "category": "Iridescent Showman",
        "hint": "Male peafowl celebrated for its extravagant, iridescent eye-spotted tail train.",
        "extraHint": "Fans out its giant eye-spotted plumage train to attract female peahens in courtship."
      },
      {
        "word": "PECCARY",
        "category": "Javelina",
        "hint": "Medium-sized pig-like mammal native to the Americas with sharp canine tusks.",
        "extraHint": "Travels in tight social bands, foraging for prickly pear cacti in deserts."
      },
      {
        "word": "PELICAN",
        "category": "Pouch Fisher",
        "hint": "Large water bird with a long bill and an enormous throat pouch for scooping fish.",
        "extraHint": "Dips its pouch into water to net schools of fish, draining gallons of water before swallowing."
      },
      {
        "word": "PENGUIN",
        "category": "Flightless Swimmer",
        "hint": "Flightless aquatic bird wearing a black-and-white tuxedo coat native to Southern Hemisphere.",
        "extraHint": "Flies underwater using powerful flipper wings, diving hundreds of feet deep for krill."
      },
      {
        "word": "PERSIAN",
        "category": "Long-Haired Cat",
        "hint": "Ancient domestic cat breed characterized by a round flat face and long fluffy fur.",
        "extraHint": "Quiet and gentle lap cat prized since Victorian times for luxurious grooming."
      },
      {
        "word": "PETREL",
        "category": "Tubenoser",
        "hint": "Pelagic seabird that spends almost its entire lifespan wandering open oceans.",
        "extraHint": "Features tubular nostrils on top of bill used to excrete excess ocean salt."
      },
      {
        "word": "PHEASANT",
        "category": "Colorful Game Bird",
        "hint": "Game bird native to Asia where males sport rich copper plumage and red eye patches.",
        "extraHint": "Flushes into explosive vertical flight with loud wing clatter when surprised in brush."
      },
      {
        "word": "PIGEON",
        "category": "Homing Bird",
        "hint": "Stout-bodied bird with a small head renowned for extraordinary homing navigation.",
        "extraHint": "Homing pigeons navigated carrying vital messages across battlefields in wartime."
      },
      {
        "word": "PIRANHA",
        "category": "Razor-Toothed Fish",
        "hint": "South American freshwater fish famous for razor-sharp teeth and voracious schools.",
        "extraHint": "Possesses extraordinarily strong jaws; feeds on fish, seeds, and fallen fruit."
      },
      {
        "word": "PLANTAIN",
        "category": "Banana Eater",
        "hint": "Large African canopy bird with a stout bill belonging to the turaco family.",
        "extraHint": "Leaps through fruit trees, feeding on wild figs, berries, and plantain fruits."
      },
      {
        "word": "PLATYPUS",
        "category": "Egg-Laying Mammal",
        "hint": "Semi-aquatic monotreme possessing a duck-like bill, beaver tail, and webbed feet.",
        "extraHint": "Males possess venomous ankle spurs; hunts aquatic larvae using electroreception."
      },
      {
        "word": "PLOVER",
        "category": "Shorebird",
        "hint": "Compact shorebird with a short bill that runs in quick stops and starts on sand.",
        "extraHint": "Lays cryptic speckled eggs directly in sandy scrapes, feigning broken wings if found."
      },
      {
        "word": "POCHARD",
        "category": "Diving Duck",
        "hint": "Medium-sized diving duck with a rich chestnut-red head and silver-grey back.",
        "extraHint": "Dives completely underwater to forage for submerged pondweeds and water insects."
      },
      {
        "word": "POODLE",
        "category": "Intelligent Water Dog",
        "hint": "Highly intelligent dog breed with dense curly moisture-resistant coats.",
        "extraHint": "Originally bred as duck-hunting water retrievers in Germany and France."
      },
      {
        "word": "POSSUM",
        "category": "Australian Marsupial",
        "hint": "Arboreal diprotodont marsupial with a prehensile tail and nocturnal habits.",
        "extraHint": "Brush-tailed and ring-tailed species inhabit Australian suburban garden trees."
      },
      {
        "word": "PUFFIN",
        "category": "Sea Parrot",
        "hint": "Pelagic seabird featuring a large, brightly colored triangular beak in breeding season.",
        "extraHint": "Flies underwater with flipper wings, carrying dozens of small fish lined up in its beak."
      },
      {
        "word": "PYTHON",
        "category": "Constrictor Snake",
        "hint": "Non-venomous constrictor snake that wraps coils around prey to restrict blood flow.",
        "extraHint": "Can unhinge flexible jaw ligaments to swallow prey larger than its own head whole."
      },
      {
        "word": "QUOKKA",
        "category": "Smiling Marsupial",
        "hint": "Small round-eared marsupial native to Rottnest Island near Western Australia.",
        "extraHint": "Dubbed the 'happiest animal in the world' due to its friendly expression in selfies."
      },
      {
        "word": "RACCOON",
        "category": "Masked Forager",
        "hint": "Medium-sized mammal native to North America with a black eye mask and ringed tail.",
        "extraHint": "Features dexterous front paws allowing it to pry open trash cans and unlatch doors."
      },
      {
        "word": "REDPANDA",
        "category": "Tree Forager",
        "hint": "Small arboreal mammal with reddish-brown fur, a ringed tail, and white markings.",
        "extraHint": "Native to the eastern Himalayas; uses its bushy tail to wrap itself for warmth."
      },
      {
        "word": "REDPOLL",
        "category": "Arctic Finch",
        "hint": "Small brownish-grey finch displaying a bright red cap patch on its forehead.",
        "extraHint": "Survives bitter sub-zero arctic winters by caching birch seeds inside throat pouches."
      },
      {
        "word": "REDSHANK",
        "category": "Marsh Sentinel",
        "hint": "Wading bird with bright orange-red legs whose alarm calls alert entire marshes.",
        "extraHint": "Known as the 'warden of the marshes' because it shrieks alarm at any intruder."
      },
      {
        "word": "REDSTART",
        "category": "Chat Bird",
        "hint": "Slender insectivorous bird with a constantly quivering bright orange-red tail.",
        "extraHint": "Catches flying insects on the wing, bobbing its vibrant tail upon landing."
      },
      {
        "word": "REDWING",
        "category": "Winter Thrush",
        "hint": "Small migratory thrush recognized by a rusty-red patch under each wing.",
        "extraHint": "Migrates at night; its thin 'seep' flight calls can be heard in autumn night skies."
      },
      {
        "word": "REINDEER",
        "category": "Arctic Deer",
        "hint": "Arctic and subarctic deer species where both males and females grow antlers.",
        "extraHint": "Also known as caribou; features specialized hooves adapted for walking on snow."
      },
      {
        "word": "RODENT",
        "category": "Gnawing Mammal",
        "hint": "Mammal characterized by a single pair of continuously growing incisors in jaws.",
        "extraHint": "Accounts for roughly 40% of all mammal species found across the globe."
      },
      {
        "word": "ROLLER",
        "category": "Colorful Bird",
        "hint": "Old World bird named for aerial acrobatics and rolling dives performed in flight.",
        "extraHint": "Possesses brilliant turquoise and blue plumage, catching large insects on the wing."
      },
      {
        "word": "ROOKERY",
        "category": "Bird Colony",
        "hint": "Dense communal breeding colony of rooks, penguins, or marine seals.",
        "extraHint": "Provides safety in numbers against ground predators during egg incubation."
      },
      {
        "word": "SAMOYED",
        "category": "Smiling White Dog",
        "hint": "Fluffy white arctic herding dog breed bred by Siberian nomadic tribes.",
        "extraHint": "Features an upturned 'Samoyed smile' that prevents icicles forming on lips."
      },
      {
        "word": "SANDCAT",
        "category": "Desert Feline",
        "hint": "Small wild cat living in arid deserts with fur-covered paws that insulate from hot sand.",
        "extraHint": "Can survive without drinking water, obtaining all required hydration from prey."
      },
      {
        "word": "SARDINE",
        "category": "Small Oily Fish",
        "hint": "Small, silvery epipelagic fish belonging to the herring family.",
        "extraHint": "Packed into dense bait balls in the annual South African sardine run."
      },
      {
        "word": "SCORPION",
        "category": "Stinging Arachnid",
        "hint": "Predatory arachnid featuring grasping pincers and a curved tail with a venomous stinger.",
        "extraHint": "Fluoresces brilliant glowing neon blue-green under ultraviolet black light."
      },
      {
        "word": "SEAGULL",
        "category": "Coastal Scavenger",
        "hint": "Common coastal seabird recognized by grey-and-white plumage and loud squawking.",
        "extraHint": "Opportunistic forager that catches fish and boldly scavenges picnic scraps."
      },
      {
        "word": "SEAHORSE",
        "category": "Equine Fish",
        "hint": "Small marine fish with a horse-like head, prehensile tail, and armor plates.",
        "extraHint": "Males possess a specialized brood pouch where they fertilize and carry developing eggs."
      },
      {
        "word": "SEALION",
        "category": "Eared Pinniped",
        "hint": "Marine pinniped with visible external ear flaps and rotating hind flippers for walking.",
        "extraHint": "Highly agile on land; barks loudly while hauling out in noisy coastal colonies."
      },
      {
        "word": "SEAOTTER",
        "category": "Tool-Using Mustelid",
        "hint": "Marine mammal with dense water-repellent fur that floats on its back in kelp beds.",
        "extraHint": "Wraps itself in giant kelp fronds while sleeping so it does not drift away into currents."
      },
      {
        "word": "SEASNAKE",
        "category": "Pelagic Reptile",
        "hint": "Venomous marine snake with a paddle-shaped tail and flattened body for swimming.",
        "extraHint": "Possesses highly potent neurotoxic venom, absorbing oxygen through its skin underwater."
      },
      {
        "word": "SERVAL",
        "category": "Long-Legged Cat",
        "hint": "Slender African wild cat with exceptionally long legs and oversized radar ears.",
        "extraHint": "Uses acute hearing to detect rodents burrowing underground before leaping 9 feet high."
      },
      {
        "word": "SETTER",
        "category": "Bird Hunting Dog",
        "hint": "Type of gundog bred to locate game birds by crouching or 'setting' on scent.",
        "extraHint": "Includes Irish, English, and Gordon Setters with silky feathered coats."
      },
      {
        "word": "SHEPHERD",
        "category": "Pastoral Dog",
        "hint": "Working dog breed developed specifically to guard and drive flocks of sheep.",
        "extraHint": "German Shepherds excel in police work, search-and-rescue, and military roles."
      },
      {
        "word": "SHIHTZU",
        "category": "Chrysanthemum Dog",
        "hint": "Compact companion dog breed with a short muzzle and luxurious floor-length coat.",
        "extraHint": "Bred in Tibetan monasteries and gifted to Chinese royalty as royal lap warmers."
      },
      {
        "word": "SHOEBILL",
        "category": "Whale-Headed Stork",
        "hint": "Colossal prehistoric-looking African marsh bird with a massive shoe-shaped bill.",
        "extraHint": "Stands motionless for hours before lunging forward to clamp down on lungfish."
      },
      {
        "word": "SHRIKE",
        "category": "Butcherbird",
        "hint": "Predatory songbird with a hooked raptor-like bill that impales prey on thorns.",
        "extraHint": "Stores insects, lizards, and mice on barbed wire fences to eat later in larder caches."
      },
      {
        "word": "SHRIMP",
        "category": "Small Crustacean",
        "hint": "Small decapod crustacean swimming backwards using tail flicks across oceans.",
        "extraHint": "Crucial food source for larger fish, whales, seabirds, and human cuisine."
      },
      {
        "word": "SIAMESE",
        "category": "Pointed Cat Breed",
        "hint": "Distinctive Asian cat breed with slender bodies, striking blue eyes, and color points.",
        "extraHint": "Known for highly vocal, conversational meows and affectionate loyalty."
      },
      {
        "word": "SISKIN",
        "category": "Yellow Finch",
        "hint": "Small, agile finch with yellow-green plumage and a deeply notched tail.",
        "extraHint": "Hangs upside down from spruce and alder cones to extract tiny tree seeds with bill."
      },
      {
        "word": "SNAPPER",
        "category": "Reef Fish",
        "hint": "Marine ray-finned fish known for large canine teeth and bright red coloration.",
        "extraHint": "Red snappers are prized commercial catches inhabiting rocky reefs in the Gulf of Mexico."
      },
      {
        "word": "SPANIEL",
        "category": "Gun Dog",
        "hint": "Type of gun dog bred to flush game birds out from dense brush and wetlands.",
        "extraHint": "Encompasses Cocker, Springer, and Cavalier King Charles Spaniel varieties."
      },
      {
        "word": "SPARROW",
        "category": "City Bird",
        "hint": "Small, adaptable brown songbird common in urban cities and farmlands worldwide.",
        "extraHint": "Thrives alongside human settlements, foraging for breadcrumbs and weed seeds."
      },
      {
        "word": "SPHYNX",
        "category": "Hairless Cat Breed",
        "hint": "Cat breed known for its lack of fur, large ears, and wrinkled skin.",
        "extraHint": "Warm to the touch; requires periodic sponge baths to absorb natural skin oils."
      },
      {
        "word": "SPIDER",
        "category": "Eight-Legged Weaver",
        "hint": "Eight-legged predatory arachnid that spins intricate silk webs to snare flying insects.",
        "extraHint": "Silk proteins are pound-for-pound stronger than steel and exceptionally elastic."
      },
      {
        "word": "SQUIRREL",
        "category": "Bushy-Tailed Rodent",
        "hint": "Agile bushy-tailed tree rodent famous for caching acorns for winter survival.",
        "extraHint": "Features sharp curved claws allowing it to run down tree trunks completely headfirst."
      },
      {
        "word": "STARFISH",
        "category": "Sea Star",
        "hint": "Marine invertebrate with radiating arms, tube feet, and central digestive disk.",
        "extraHint": "Can regenerate lost arms; pries open clams before pushing its stomach outward."
      },
      {
        "word": "STARLING",
        "category": "Murmuration Bird",
        "hint": "Iridescent speckled bird celebrated for massive swirling aerial flock dances.",
        "extraHint": "Thousands of starlings execute fluid, synchronized murmuration patterns at dusk."
      },
      {
        "word": "STINGRAY",
        "category": "Flat Cartilaginous Fish",
        "hint": "Flattened cartilaginous fish with broad pectoral fins that undulate like wings.",
        "extraHint": "Possesses a venomous barbed spine on its tail used strictly in self-defense."
      },
      {
        "word": "STURGEON",
        "category": "Ancient Armored Fish",
        "hint": "Ancient cartilaginous bony fish covered in five rows of bony scutes.",
        "extraHint": "Females take decades to mature; prized for harvesting black culinary caviar."
      },
      {
        "word": "SUNBIRD",
        "category": "Old World Nectar Bird",
        "hint": "Small, brilliantly iridescent tropical bird that feeds on floral nectar.",
        "extraHint": "The Old World ecological counterpart to the hummingbirds of the Americas."
      },
      {
        "word": "SWALLOW",
        "category": "Aerial Feeder",
        "hint": "Small bird with streamlined wings and a deeply forked tail catching bugs in flight.",
        "extraHint": "Builds mud cup nests beneath the eaves of barns and cliff overhangs."
      },
      {
        "word": "TAIPAN",
        "category": "Deadly Snake",
        "hint": "Large, fast-moving and highly venomous elapid snake native to Australia.",
        "extraHint": "The inland taipan possesses the most toxic venom of any reptile on planet Earth."
      },
      {
        "word": "TARPON",
        "category": "Silver King",
        "hint": "Large, silvery game fish capable of breathing air using a modified swim bladder.",
        "extraHint": "Revered by sports anglers for ferocious fighting leaps when hooked on fly rods."
      },
      {
        "word": "TENREC",
        "category": "Madagascar Wonder",
        "hint": "Diverse family of small mammals native to Madagascar resembling hedgehogs and shrews.",
        "extraHint": "The streaked tenrec rubs specialized quills together to produce sound via stridulation."
      },
      {
        "word": "TERMITE",
        "category": "Wood-Eating Insect",
        "hint": "Social insect that feeds on cellulose and builds massive desert mounds.",
        "extraHint": "Harbors symbiotic gut protozoa capable of digesting tough dead wood fibers."
      },
      {
        "word": "TERRAPIN",
        "category": "Brackish Turtle",
        "hint": "Small turtle living in fresh or brackish water with diamond-patterned shell plates.",
        "extraHint": "Diamondback terrapins inhabit coastal tidal salt marshes along Atlantic coasts."
      },
      {
        "word": "TERRIER",
        "category": "Feisty Hunter",
        "hint": "Type of dog breed originally bred to hunt vermin, rats, and burrowing pests.",
        "extraHint": "Known for tenacious courage, wiry coats, and energetic personalities."
      },
      {
        "word": "THRUSH",
        "category": "Vocal Songbird",
        "hint": "Songbird with a spotted breast celebrated for rich, flute-like melodic songs.",
        "extraHint": "Smashes hard snail shells against favorite garden rocks called anvils to eat meat."
      },
      {
        "word": "TILAPIA",
        "category": "Cichlid Fish",
        "hint": "Freshwater cichlid fish native to Africa and widely cultivated in aquaculture.",
        "extraHint": "Hardy and fast-growing; feeds on algae and plant matter in warm farm ponds."
      },
      {
        "word": "TINAMOU",
        "category": "Ancient Ground Bird",
        "hint": "Ancient ground bird related to ostriches that lays glossy porcelain-colored eggs.",
        "extraHint": "Eggs look like polished ceramic jewels in shades of turquoise, purple, and green."
      },
      {
        "word": "TORTOISE",
        "category": "Terrestrial Shelled Reptile",
        "hint": "Land-dwelling reptile with elephantine feet and a high, domed protective shell.",
        "extraHint": "Galapagos tortoises can live well over 150 years on sparse volcanic islands."
      },
      {
        "word": "TOUCAN",
        "category": "Giant-Billed Bird",
        "hint": "Neotropical bird famous for its massive, brightly colored, lightweight bill.",
        "extraHint": "Uses its huge bill to reach distant fruit on branches and regulate body temperature."
      },
      {
        "word": "TREEFROG",
        "category": "Arboreal Hopper",
        "hint": "Small frog featuring enlarged adhesive suction toe pads for climbing tree leaves.",
        "extraHint": "Many species are translucent green with vibrant red or golden eyes for camouflage."
      },
      {
        "word": "TURACO",
        "category": "African Canopy Bird",
        "hint": "Arboreal African bird with brilliant green plumage containing true copper pigments.",
        "extraHint": "Features a prominent crest and runs through tree branches almost like a squirrel."
      },
      {
        "word": "TURKEY",
        "category": "Game Bird",
        "hint": "Large North American game bird with a fleshy wattle hanging from its beak.",
        "extraHint": "Male toms fan out tail feathers and strut proudly while making gobbling sounds."
      },
      {
        "word": "TURTLE",
        "category": "Shelled Reptile",
        "hint": "Reptile enclosed inside a bony protective carapace fused to its ribs and spine.",
        "extraHint": "Sea turtles navigate thousands of miles across oceans using Earth's magnetic fields."
      },
      {
        "word": "VICUNA",
        "category": "Wild Andean Camelid",
        "hint": "Delicate wild camelid native to high alpine Andes producing rare fleece.",
        "extraHint": "Fleece is among the finest and most expensive natural fibers in the world."
      },
      {
        "word": "VULTURE",
        "category": "Scavenger Bird",
        "hint": "Large scavenging bird of prey with a featherless head that feeds upon carrion.",
        "extraHint": "Possesses corrosive stomach acid capable of neutralizing anthrax, cholera, and botulism."
      },
      {
        "word": "WAGTAIL",
        "category": "Pumping Tail Bird",
        "hint": "Slender songbird with a long tail that pumps up and down constantly while walking.",
        "extraHint": "Struts along riverbanks and parking lots catching flying midges and insects."
      },
      {
        "word": "WALLABY",
        "category": "Small Bounding Marsupial",
        "hint": "Small-to-medium sized macropod native to Australia and neighboring islands.",
        "extraHint": "Closely related to kangaroos but smaller, thriving in brush and rocky outcroppings."
      },
      {
        "word": "WALLEYE",
        "category": "Nocturnal Predatory Fish",
        "hint": "Freshwater fish named for opaque, pearlescent eyes that reflect light at night.",
        "extraHint": "Equipped with a reflective tapetum lucidum layer for hunting in dark waters."
      },
      {
        "word": "WALRUS",
        "category": "Tusked Pinniped",
        "hint": "Large marine mammal recognized by prominent ivory tusks and whiskered snout.",
        "extraHint": "Uses long tusks to haul its heavy body onto sea ice and excavate benthic clams."
      },
      {
        "word": "WARBLER",
        "category": "Melodious Songbird",
        "hint": "Small, active insectivorous songbird celebrated for high-pitched warbling tunes.",
        "extraHint": "Frequents reed beds and canopies during spring migrations across continents."
      },
      {
        "word": "WARTHOG",
        "category": "Tusked African Pig",
        "hint": "Wild pig native to sub-Saharan Africa featuring facial wattles and curved tusks.",
        "extraHint": "Backs into underground burrows rear-first so its sharp tusks face outward."
      },
      {
        "word": "WEASEL",
        "category": "Slender Hunter",
        "hint": "Small, elongated carnivorous mammal with a long neck and short legs.",
        "extraHint": "Can pursue mice, voles, and burrowing rodents directly into their underground tunnels."
      },
      {
        "word": "WEEVIL",
        "category": "Snouted Beetle",
        "hint": "Type of beetle recognized by an elongated downward-curving rostrum snout.",
        "extraHint": "Bores holes into acorn nuts and cotton bolls with tiny jaws at the tip of snout."
      },
      {
        "word": "WHEATEAR",
        "category": "Migratory Chat",
        "hint": "Small ground-dwelling bird with a striking white rump patch visible in flight.",
        "extraHint": "Undertakes one of the longest migrations of any songbird from Africa to Arctic."
      },
      {
        "word": "WHIMBREL",
        "category": "Curved-Bill Wader",
        "hint": "Large shorebird with an elegant downward-curving bill for probing crab burrows.",
        "extraHint": "Recognized by bold striped crown markings, wintering along coastal mudflats."
      },
      {
        "word": "WHINCHAT",
        "category": "Grassland Chat",
        "hint": "Small perching bird that nests in rough pastures, heaths, and gorse scrub.",
        "extraHint": "Perches prominently atop tall flower stems and fence posts scanning for beetles."
      },
      {
        "word": "WHIPPET",
        "category": "Medium Sighthound",
        "hint": "Slender, aerodynamic sighthound capable of high-speed sprinting bursts.",
        "extraHint": "Known as the 'poor man's racehorse', reaching speeds of up to 35 mph."
      },
      {
        "word": "WHITEEYE",
        "category": "Tropical Passerine",
        "hint": "Small olive-green tropical songbird featuring a distinct white ring around eyes.",
        "extraHint": "Flits actively in canopy foliage, drinking flower nectar and eating berries."
      },
      {
        "word": "WHITING",
        "category": "Silver Fish",
        "hint": "Slender marine fish related to cod found in shallow Atlantic coastal bays.",
        "extraHint": "Delicate white meat makes it a popular food fish throughout European waters."
      },
      {
        "word": "WIGEON",
        "category": "Grazing Duck",
        "hint": "Medium-sized dabbling duck that feeds primarily by grazing on green grasses.",
        "extraHint": "Males produce a characteristic whistling call echoing across winter coastal flats."
      },
      {
        "word": "WOMBAT",
        "category": "Burrowing Marsupial",
        "hint": "Short-legged, muscular quadrupedal marsupial native to southeastern Australia.",
        "extraHint": "Famous for producing cubic scat droppings that do not roll off rocks and logs."
      },
      {
        "word": "WOODCOCK",
        "category": "Forest Shorebird",
        "hint": "Secretive woodland wader with large eyes set far back on its head for 360 vision.",
        "extraHint": "Performs an iconic bouncy 'rocking walk' as it probes soft forest mud for worms."
      }
    ],
    "hard": [
      {
        "word": "ALBATROSS",
        "category": "Ocean Wanderer",
        "hint": "Colossal seabird with the largest wingspan of any living bird, up to 11.5 feet.",
        "extraHint": "Can dynamic-soar over ocean waves for thousands of miles without flapping its wings."
      },
      {
        "word": "ALLIGATOR",
        "category": "Freshwater Reptile",
        "hint": "Large aquatic reptile with a broad, rounded U-shaped snout native to America and China.",
        "extraHint": "Survives freezing winter ponds by sticking its nostrils above ice in brumation."
      },
      {
        "word": "ARMADILLO",
        "category": "Armored Mammal",
        "hint": "Mammal protected by a leathery armor shell composed of dermal bone plates.",
        "extraHint": "Three-banded armadillos can roll up into an impenetrable armored ball when threatened."
      },
      {
        "word": "BANDICOOT",
        "category": "Snouted Marsupial",
        "hint": "Small terrestrial omnivorous marsupial native to the Australia-New Guinea region.",
        "extraHint": "Features an elongated pointed snout used to probe leaf litter for beetles and worms."
      },
      {
        "word": "BASKINGSHARK",
        "category": "Filter-Feeding Shark",
        "hint": "The second-largest living fish, cruising ocean surfaces with mouth wide open.",
        "extraHint": "Filters thousands of tons of seawater every hour to extract planktonic organisms."
      },
      {
        "word": "BEARDEDDRAGON",
        "category": "Inland Lizard",
        "hint": "Australian desert lizard named for the spiny pouch beneath its throat.",
        "extraHint": "Puffs out its throat pouch and turns it jet black when displaying or defending."
      },
      {
        "word": "BIGHORNSHEEP",
        "category": "Rocky Mountain Bovid",
        "hint": "Wild sheep of North America famous for massive curling horns grown by rams.",
        "extraHint": "Clashes horns in thunderous head-on collisions at 20 mph during autumn mating ruts."
      },
      {
        "word": "BLACKBEAR",
        "category": "Forest Bear",
        "hint": "Widespread medium-sized bear native to forests across North America.",
        "extraHint": "Talented tree climber that spends winter hibernating in hollow logs and caves."
      },
      {
        "word": "BLACKWIDOW",
        "category": "Hourglass Spider",
        "hint": "Glossy black spider with a distinctive red hourglass marking on its abdomen.",
        "extraHint": "Produces potent latrotoxin venom; females occasionally devour mates after breeding."
      },
      {
        "word": "BLUEFOOTED",
        "category": "Booby Seabird",
        "hint": "Marine seabird famous for vibrant turquoise webbed feet displayed in courtship.",
        "extraHint": "Performs an amusing high-stepping dance lifting its bright blue feet for mates."
      },
      {
        "word": "BOACONSTRICTOR",
        "category": "Heavyweight Snake",
        "hint": "Large solitary constrictor snake native to Central and South America.",
        "extraHint": "Uses heat-sensing lip pits to detect warm-blooded prey in dark rainforest nights."
      },
      {
        "word": "BRAMBLING",
        "category": "Migratory Finch",
        "hint": "Northern finch that migrates south in winter in massive swirling flocks.",
        "extraHint": "Closely related to the chaffinch, feeding on beech mast in European woods."
      },
      {
        "word": "BULLFINCH",
        "category": "Plump Finch",
        "hint": "Plump, shy woodland finch where males display a vibrant bright rose-red breast.",
        "extraHint": "Feeds on fruit tree flower buds in spring, whistling soft piping calls."
      },
      {
        "word": "BUTTERFLY",
        "category": "Winged Insect",
        "hint": "Insect with large, brilliantly colored wings covered in microscopic scales.",
        "extraHint": "Undergoes complete metamorphosis from a crawling caterpillar into a flying adult."
      },
      {
        "word": "CAECILIAN",
        "category": "Limbless Amphibian",
        "hint": "Blind, worm-like burrowing amphibian lacking all limbs and living underground.",
        "extraHint": "Uses chemosensory tentacles near eyes to navigate through moist tropical soils."
      },
      {
        "word": "CAPERCAILLIE",
        "category": "Giant Woodland Grouse",
        "hint": "Massive black woodland grouse native to pine forests of Eurasia.",
        "extraHint": "Males perform elaborate courtship displays with fanned tails, clicking and hissing."
      },
      {
        "word": "CASSOWARY",
        "category": "Rainforest Giant Bird",
        "hint": "Heavy flightless bird with glossy black plumage, blue neck, and a bony head casque.",
        "extraHint": "Armed with a four-inch dagger claw on each inner toe capable of defensive kicks."
      },
      {
        "word": "CATERPILLAR",
        "category": "Larval Butterfly",
        "hint": "The larval stage of butterflies and moths with chewing mouthparts and ravenous appetite.",
        "extraHint": "Gorges on host plant leaves, molting multiple times before forming a pupa chrysalis."
      },
      {
        "word": "CENTIPEDE",
        "category": "Multi-Legged Hunter",
        "hint": "Elongated predatory arthropod possessing one pair of venomous legs per segment.",
        "extraHint": "Swift nocturnal hunter delivering painful bites using modified venom fangs called forcipules."
      },
      {
        "word": "CHAFFINCH",
        "category": "European Finch",
        "hint": "Common European woodland finch with a cheerful rhythmic territorial song.",
        "extraHint": "Forages on forest floors for fallen beechnuts and seeds throughout winter."
      },
      {
        "word": "CHAMELEON",
        "category": "Color-Changing Lizard",
        "hint": "Reptile known for independently moving eyes, zygodactyl feet, and color shifts.",
        "extraHint": "Shoots an elastic projectile tongue twice its body length to snatch insects."
      },
      {
        "word": "CHIHUAHUA",
        "category": "Purse Dog",
        "hint": "The smallest recognized dog breed in the world, named after the Mexican state.",
        "extraHint": "Possesses a spirited terrier-like temperament, weighing under six pounds."
      },
      {
        "word": "CHIMPANZEE",
        "category": "Great Ape",
        "hint": "Our closest living evolutionary relative, sharing 98.7% of human DNA.",
        "extraHint": "Uses stones to crack nuts, twigs to fish for termites, and displays complex culture."
      },
      {
        "word": "CHINCHILLA",
        "category": "Velvet Rodent",
        "hint": "Andean rodent possessing the densest fur of any land mammal on Earth.",
        "extraHint": "Cleans its dense coat by taking dust baths in volcanic ash rather than water."
      },
      {
        "word": "CLOUDEDLEOPARD",
        "category": "Arboreal Cat",
        "hint": "Secretive wild cat native to Asian rainforests with cloud-like coat patterns.",
        "extraHint": "Possesses the longest canine teeth relative to skull size of any living feline."
      },
      {
        "word": "COPPERHEAD",
        "category": "Camouflaged Viper",
        "hint": "North American pit viper sporting hourglass-shaped reddish-brown saddle marks.",
        "extraHint": "Relies on cryptic dead-leaf camouflage, freezing in place when humans approach."
      },
      {
        "word": "CORMORANT",
        "category": "Aquatic Pursuit Bird",
        "hint": "Fish-eating seabird that swims underwater propelled by webbed feet.",
        "extraHint": "Lacks fully waterproof plumage, often seen perching on rocks with wings spread to dry."
      },
      {
        "word": "COTTONMOUTH",
        "category": "Water Moccasin",
        "hint": "Semi-aquatic pit viper named for the stark white interior of its open mouth.",
        "extraHint": "Gapes its mouth defensively when alarmed, swimming with its entire body buoyant on water."
      },
      {
        "word": "CRESTEDTIT",
        "category": "Crested Songbird",
        "hint": "Small songbird featuring a prominent pointed black-and-white feathered crest.",
        "extraHint": "Inhabits pine forests of northern Europe, storing conifer seeds under lichen."
      },
      {
        "word": "CROCODILE",
        "category": "Ancient Armored Reptile",
        "hint": "Large semi-aquatic predatory reptile with a V-shaped snout and immense bite force.",
        "extraHint": "Possesses salt glands allowing it to thrive in brackish estuaries and coastlines."
      },
      {
        "word": "CROSSBILL",
        "category": "Conifer Finch",
        "hint": "Finch featuring unique crossed bill tips adapted for prying open pine cone scales.",
        "extraHint": "Uses its crossed mandibles like a lever to extract conifer seeds from cones."
      },
      {
        "word": "CRUSTACEAN",
        "category": "Hard-Shelled Invertebrate",
        "hint": "Arthropod characterized by a chitinous exoskeleton and jointed appendages.",
        "extraHint": "Includes lobsters, crabs, shrimp, crayfish, krill, and barnacles across all oceans."
      },
      {
        "word": "CUTTLEFISH",
        "category": "Master of Camouflage",
        "hint": "Cephalopod capable of changing skin color, pattern, and texture instantaneously.",
        "extraHint": "Possesses an internal porous cuttlebone used to adjust buoyancy in water."
      },
      {
        "word": "DACHSHUND",
        "category": "Badger Hound",
        "hint": "Long-bodied, short-legged scent hound colloquially known as a wiener dog.",
        "extraHint": "Bred in Germany to burrow deep underground into burrows to flush out badgers."
      },
      {
        "word": "DALMATIAN",
        "category": "Spotted Carriage Dog",
        "hint": "Medium-sized dog breed famous for its unique spotted white-and-black coat.",
        "extraHint": "Historically served as firehouse carriage dogs clearing paths for horse engines."
      },
      {
        "word": "DAMSELFLY",
        "category": "Slender Aerial Insect",
        "hint": "Delicate aquatic insect that folds its wings back along its abdomen at rest.",
        "extraHint": "Smaller and more slender than dragonflies, hovering above quiet pond vegetation."
      },
      {
        "word": "DIAMONDBACK",
        "category": "Large Rattlesnake",
        "hint": "The largest and most venomous rattlesnake species in North America.",
        "extraHint": "Features dark diamond-shaped blotches outlined in white along its muscular back."
      },
      {
        "word": "DRAGONFLY",
        "category": "Aerial Insect Hunter",
        "hint": "Ancient winged insect with multifaceted compound eyes and incredible flight agility.",
        "extraHint": "Can fly in all six directions, hover in place, and captures 95% of prey it pursues."
      },
      {
        "word": "DROMEDARY",
        "category": "One-Humped Camel",
        "hint": "Single-humped camel native to the deserts of the Middle East and North Africa.",
        "extraHint": "Stores up to 80 pounds of fat in its single hump to nourish long desert crossings."
      },
      {
        "word": "EARTHWORM",
        "category": "Soil Annelid",
        "hint": "Segmented burrowing worm that digests organic matter to enrich and aerate soils.",
        "extraHint": "Lacks lungs, absorbing oxygen directly through its moist mucus-coated skin."
      },
      {
        "word": "FIELDFARE",
        "category": "Winter Thrush",
        "hint": "Large, colorful northern thrush with a slate-grey crown and spotted chestnut breast.",
        "extraHint": "Forms noisy flocks in winter orchards, defending berry bushes from rivals."
      },
      {
        "word": "FISHINGCAT",
        "category": "Aquatic Feline",
        "hint": "Medium-sized wild cat native to South Asian mangrove wetlands that hunts fish.",
        "extraHint": "Dives into rivers to catch fish, swimming skillfully with partially webbed front paws."
      },
      {
        "word": "FLOWERPECKER",
        "category": "Berry Eater",
        "hint": "Tiny, stout tropical bird specialized in feeding on mistletoe berries.",
        "extraHint": "Spreads parasitic mistletoe seeds by defecating sticky seeds onto tree branches."
      },
      {
        "word": "FLYINGFOX",
        "category": "Giant Fruit Bat",
        "hint": "One of the largest bats in the world with a wingspan reaching nearly five feet.",
        "extraHint": "Feeds strictly on ripe tropical fruit and flower nectar, acting as a crucial pollinator."
      },
      {
        "word": "FRIGATEBIRD",
        "category": "Pirate Seabird",
        "hint": "Seabird where males inflate an enormous scarlet throat sac to attract mates.",
        "extraHint": "Harasses other seabirds in mid-air until they disgorge freshly caught fish."
      },
      {
        "word": "GALLINULE",
        "category": "Purple Swamphen",
        "hint": "Brilliantly colored wetland bird with rich purple-blue plumage and red shield.",
        "extraHint": "Uses long toes to grasp food and climb through tangled floating aquatic plants."
      },
      {
        "word": "GILAMONSTER",
        "category": "Venomous Lizard",
        "hint": "Heavy, slow-moving lizard native to the American Southwest with beaded pink scales.",
        "extraHint": "One of the few venomous lizards on Earth; grooved teeth channel venom into bites."
      },
      {
        "word": "GOLDFINCH",
        "category": "Yellow Finch",
        "hint": "Small songbird with bright yellow plumage and a black cap and wings.",
        "extraHint": "Feeds voraciously on thistle seeds in open meadows and suburban gardens."
      },
      {
        "word": "GRASSHOPPER",
        "category": "Singing Jumper",
        "hint": "Herbivorous insect with powerful jumping hind legs and chewing mouthparts.",
        "extraHint": "Produces buzzing music by rubbing ridges on hind legs against wing edges."
      },
      {
        "word": "GREATDANE",
        "category": "Apollo of Dogs",
        "hint": "One of the tallest dog breeds in the world, characterized by an imposing graceful stature.",
        "extraHint": "Originally bred in Germany to hunt wild boar; gentle and affectionate with families."
      },
      {
        "word": "GREATWHITE",
        "category": "Apex Ocean Shark",
        "hint": "Apex predatory shark possessing hundreds of triangular serrated teeth.",
        "extraHint": "Can detect a single drop of blood in 25 million drops of water miles away."
      },
      {
        "word": "GREENFINCH",
        "category": "Olive Finch",
        "hint": "Robust finch with olive-green plumage and bright yellow wing flashes.",
        "extraHint": "Frequent visitor to garden seed feeders, singing wheezing twittering songs."
      },
      {
        "word": "GREENSHANK",
        "category": "Long-Legged Wader",
        "hint": "Slender wading bird with long greenish legs and a slightly upturned bill.",
        "extraHint": "Dashes swiftly through shallow tidal pools chasing small fish and shrimp."
      },
      {
        "word": "GREYHOUND",
        "category": "Sighthound Sprinter",
        "hint": "Gentle, slender dog breed built for immense chasing speed and racing.",
        "extraHint": "Can reach sprinting speeds exceeding 40 mph thanks to aerodynamic physiques."
      },
      {
        "word": "GRIZZLYBEAR",
        "category": "Brown Bear Subspecies",
        "hint": "Massive apex bear recognized by a prominent muscular shoulder hump.",
        "extraHint": "Excavates ground squirrel dens and snatches leaping salmon from Alaskan river falls."
      },
      {
        "word": "GUILLEMOT",
        "category": "Murre",
        "hint": "Pelagic seabird that nests in dense colonies on tiny ledges of sea cliffs.",
        "extraHint": "Lays pyriform pear-shaped eggs that roll in a tight circle rather than falling off cliffs."
      },
      {
        "word": "GUINEAFOWL",
        "category": "Polka-Dot Bird",
        "hint": "African game bird with speckled grey-and-white plumage and a bony helmet casque.",
        "extraHint": "Roams in noisy social flocks, sounding loud alarm clatter at approaching predators."
      },
      {
        "word": "GUINEAPIG",
        "category": "Cavy Pet",
        "hint": "Domesticated South American rodent vocalizing through squeaks and whistles.",
        "extraHint": "Originally domesticated by Andean indigenous peoples; requires dietary Vitamin C."
      },
      {
        "word": "HAMMERHEAD",
        "category": "Cephalofoil Shark",
        "hint": "Shark recognized by the flattened hammer-shaped lateral extension of its head.",
        "extraHint": "The wide hammer head provides panoramic 360-degree vision and electro-sensory reach."
      },
      {
        "word": "HELLBENDER",
        "category": "Giant Water Dog",
        "hint": "Large aquatic salamander native to clear, rocky streams in eastern North America.",
        "extraHint": "Breathes through loose, wrinkly skin folds that maximize oxygen uptake from water."
      },
      {
        "word": "HIPPOPOTAMUS",
        "category": "River Giant",
        "hint": "Massive semi-aquatic African mammal that secretes a red 'blood sweat' sunscreen.",
        "extraHint": "Possesses formidable canine tusks up to 20 inches long; highly territorial in rivers."
      },
      {
        "word": "HONEYEATER",
        "category": "Australian Nectar Bird",
        "hint": "Diverse family of Australasian birds with brush-tipped tongues for nectar.",
        "extraHint": "Major pollinators of eucalyptus, banksia, and grevillea flowering trees."
      },
      {
        "word": "HUMMINGBIRD",
        "category": "Hovering Gem",
        "hint": "Tiny bird capable of hovering in mid-air and flying backwards by beating wings 80 times/sec.",
        "extraHint": "Feeds on flower nectar and possesses the fastest metabolism of any bird on Earth."
      },
      {
        "word": "INVERTEBRATE",
        "category": "Spineless Animal",
        "hint": "Animal lacking a vertebral column or backbone, comprising 97% of all animal species.",
        "extraHint": "Encompasses insects, mollusks, arachnids, jellyfish, crustaceans, and sponges."
      },
      {
        "word": "JAGUARUNDI",
        "category": "Otter Cat",
        "hint": "Slender, unspotted wild cat native to the Americas with short legs and small ears.",
        "extraHint": "Diurnal hunter that communicates through over a dozen bird-like whistle chirps."
      },
      {
        "word": "JELLYFISH",
        "category": "Gelatinous Swimmer",
        "hint": "Free-swimming marine animal with a gelatinous umbrella bell and trailing tentacles.",
        "extraHint": "Lacks a brain, heart, and bones; stings prey using microscopic nematocysts."
      },
      {
        "word": "KINGFISHER",
        "category": "Stream Diver",
        "hint": "Brightly colored bird with a large dagger-shaped bill that dives for river fish.",
        "extraHint": "Its aerodynamic streamlined beak inspired the quiet nose shape of Japan's bullet trains."
      },
      {
        "word": "KITTIWAKE",
        "category": "Cliff Gull",
        "hint": "Small, gentle oceanic gull that nests exclusively on sheer vertical sea cliffs.",
        "extraHint": "Named for its loud, nasal 'kitti-waak' call echoing across breeding sea colonies."
      },
      {
        "word": "KLIPSPRINGER",
        "category": "Rock Jumper",
        "hint": "Small African antelope that stands on the tips of tiny cylindrical rubbery hooves.",
        "extraHint": "Bounds effortlessly between isolated boulder pinnacles on rocky mountain slopes."
      },
      {
        "word": "KOMODODRAGON",
        "category": "Monitor Lizard",
        "hint": "The heaviest living lizard on Earth, growing over nine feet on Indonesian islands.",
        "extraHint": "Hunts deer and water buffalo with serrated teeth and venomous anticoagulant bite."
      },
      {
        "word": "LEATHERBACK",
        "category": "Giant Sea Turtle",
        "hint": "The largest sea turtle in the world, lacking a bony shell and having leathery skin.",
        "extraHint": "Dives over 4,000 feet deep into freezing ocean depths feeding strictly on jellyfish."
      },
      {
        "word": "MILLIPEDE",
        "category": "Detritivore Arthropod",
        "hint": "Slow-moving arthropod with two pairs of legs on most body segments, eating decaying leaves.",
        "extraHint": "Curls into a tight defensive spiral and secretes foul-smelling fluids when disturbed."
      },
      {
        "word": "MOUNTAINGOAT",
        "category": "Alpine Climber",
        "hint": "Sure-footed white goat-antelope endemic to steep cliffs of western North America.",
        "extraHint": "Scales near-vertical rock precipices using split hooves with rough traction pads."
      },
      {
        "word": "NEWFOUNDLAND",
        "category": "Water Rescue Dog",
        "hint": "Massive working dog breed with webbed feet and a water-resistant double coat.",
        "extraHint": "Natural lifeguard dog renowned for instinctively rescuing drowning swimmers."
      },
      {
        "word": "NIGHTHERON",
        "category": "Nocturnal Fisher",
        "hint": "Stocky, short-legged heron with red eyes and black crown that fishes at dusk.",
        "extraHint": "Stands motionless at water's edge waiting for fish and crabs to swim within reach."
      },
      {
        "word": "NIGHTINGALE",
        "category": "Nocturnal Songster",
        "hint": "Small plain brown songbird famous for its rich, melodious nocturnal singing.",
        "extraHint": "Sings continuously through spring nights, celebrated in European poetry for centuries."
      },
      {
        "word": "NUTCRACKER",
        "category": "Pine Seed Corvid",
        "hint": "Spotted corvid specialized in harvesting and caching pine and hazel nuts.",
        "extraHint": "Possesses a specialized sublingual pouch holding dozens of pine seeds at once."
      },
      {
        "word": "ORANGUTAN",
        "category": "Arboreal Great Ape",
        "hint": "Red-haired great ape native to the rainforests of Borneo and Sumatra.",
        "extraHint": "Spends nearly its entire life in trees, building a fresh sleeping nest each evening."
      },
      {
        "word": "OYSTERCATCHER",
        "category": "Chisel Wader",
        "hint": "Stocky coastal wading bird with a bright orange-red chisel-like bill.",
        "extraHint": "Uses its strong bill to pry open mussels, limpets, and oysters on rocky coasts."
      },
      {
        "word": "PALLASCAT",
        "category": "Steppe Cat",
        "hint": "Small wild cat inhabiting Central Asian steppes with the densest fur of any cat.",
        "extraHint": "Features low-set ears and flat pupils, stalking pikas across freezing rock screes."
      },
      {
        "word": "PEKINGESE",
        "category": "Lion Dog Breed",
        "hint": "Ancient toy dog breed originating from imperial palaces in ancient China.",
        "extraHint": "Bred to resemble Chinese guardian lions, pampered exclusively by Chinese emperors."
      },
      {
        "word": "PHALAROPE",
        "category": "Spinning Wader",
        "hint": "Small shorebird that spins in tight circles on water to create feeding vortexes.",
        "extraHint": "The spinning vortex pulls aquatic insect larvae up to the surface to be eaten."
      },
      {
        "word": "POLARBEAR",
        "category": "Arctic Apex Predator",
        "hint": "The largest extant land carnivore, adapted for life on Arctic sea ice.",
        "extraHint": "Possesses translucent hollow fur, black skin to absorb heat, and thick fat blubber."
      },
      {
        "word": "POMERANIAN",
        "category": "Fluffy Toy Dog",
        "hint": "Tiny toy dog breed with an exuberant personality and thick puff-ball double coat.",
        "extraHint": "Popularized by British royal figures including Queen Victoria in the 19th century."
      },
      {
        "word": "PORCUPINE",
        "category": "Quilled Rodent",
        "hint": "Rodent recognized by its protective coat of sharp, barbed defensive quills.",
        "extraHint": "Cannot shoot its quills, but releases them easily upon contact with attacking predators."
      },
      {
        "word": "PRAIRIEDOG",
        "category": "Colonial Rodent",
        "hint": "Burrowing ground squirrel that builds vast underground 'towns' across prairies.",
        "extraHint": "Employs an extraordinarily complex vocal language with distinct calls for each predator."
      },
      {
        "word": "PRATINCOLE",
        "category": "Swallow Plover",
        "hint": "Slender shorebird with long pointed wings that catches insects in flight like a swallow.",
        "extraHint": "Hawks over marshlands at dusk, resting on flat dry mud during heat of day."
      },
      {
        "word": "PRAYINGMANTIS",
        "category": "Ambush Predator",
        "hint": "Carnivorous insect holding spiked raptorial forelegs in a prayer-like posture.",
        "extraHint": "Can swivel its triangular head 180 degrees, ambushing crickets and even hummingbirds."
      },
      {
        "word": "PROBOSCIS",
        "category": "Long-Nosed Monkey",
        "hint": "Endangered monkey native to Borneo where males sport an enormous pendulous nose.",
        "extraHint": "Excellent swimmer with partially webbed feet, crossing crocodile rivers in trees."
      },
      {
        "word": "PRONGHORN",
        "category": "Fastest North American Mammal",
        "hint": "Antelope-like mammal capable of sustained running speeds reaching 55 mph.",
        "extraHint": "The fastest land animal in the Western Hemisphere, outpacing all modern predators."
      },
      {
        "word": "PTARMIGAN",
        "category": "Snow Grouse",
        "hint": "Arctic game bird whose feathered feet and plumage turn pure white in winter.",
        "extraHint": "Burrows into soft snowdrifts to stay insulated from freezing howling blizzards."
      },
      {
        "word": "RATTLESNAKE",
        "category": "Viper with Rattle",
        "hint": "Pit viper possessing a tail rattle made of interlocking keratin segments.",
        "extraHint": "Vibrates its tail rattle up to 50 times per second to warn intruders before striking."
      },
      {
        "word": "RAZORBILL",
        "category": "Black-and-White Auk",
        "hint": "Deep-diving seabird with a thick, blunt black bill marked by vertical white lines.",
        "extraHint": "Swims underwater with powerful wing beats, diving hundreds of feet for sandeels."
      },
      {
        "word": "RETRIEVER",
        "category": "Water Fetch Dog",
        "hint": "Hunting dog breed bred to retrieve game birds safely without tooth marks.",
        "extraHint": "Includes Golden and Labrador Retrievers, among the most popular family pets globally."
      },
      {
        "word": "RHINOCEROS",
        "category": "Armored Giant",
        "hint": "Massive horned ungulate with thick armor-like skin folds and poor eyesight.",
        "extraHint": "Horns are made of compressed keratin fibers, the same protein as human nails."
      },
      {
        "word": "ROADRUNNER",
        "category": "Chaparral Bird",
        "hint": "Fast-running ground cuckoo native to southwestern deserts of North America.",
        "extraHint": "Can sprint at 20 mph, hunting venomous rattlesnakes, scorpions, and tarantulas."
      },
      {
        "word": "ROTTWEILER",
        "category": "Drover Mastiff",
        "hint": "Robust, powerful working dog breed historically used to herd cattle.",
        "extraHint": "Known for its loyalty, strength, and black coat with rich tan markings."
      },
      {
        "word": "SAINTBERNARD",
        "category": "Alpine Rescue Dog",
        "hint": "Colossal Swiss working dog breed historically bred for mountain rescue at hospice.",
        "extraHint": "Rescued lost, freezing travelers trapped in deep snowdrifts in the Great St Bernard Pass."
      },
      {
        "word": "SALAMANDER",
        "category": "Tailed Amphibian",
        "hint": "Lizard-like amphibian with moist skin, a long tail, and four equal-length legs.",
        "extraHint": "Inhabits damp rotting forest logs, breathing through skin or feathery gills."
      },
      {
        "word": "SANDGROUSE",
        "category": "Desert Water Carrier",
        "hint": "Arid-zone bird whose breast feathers can soak up water like a sponge.",
        "extraHint": "Flies 50 miles to water holes, soaking breast feathers to fly water back to chicks."
      },
      {
        "word": "SANDPIPER",
        "category": "Shore Runner",
        "hint": "Small wading bird that probes sandy ocean shores for crustaceans between waves.",
        "extraHint": "Sprints rapidly back and forth following the ebb and flow of breaking ocean surf."
      },
      {
        "word": "SEAANEMONE",
        "category": "Flower Invertebrate",
        "hint": "Sedentary marine predatory polyp with stinging tentacles resembling a garden flower.",
        "extraHint": "Provides a stinging protective home for immune clownfish in coral reef communities."
      },
      {
        "word": "SEACUCUMBER",
        "category": "Benthic Invertebrate",
        "hint": "Leathery marine invertebrate that scavenges organic debris from ocean floors.",
        "extraHint": "Can expel its internal organs defensively through self-evisceration when attacked."
      },
      {
        "word": "SEAURCHIN",
        "category": "Spiny Marine Ball",
        "hint": "Globular spiny echinoderm that grazes on marine kelp forests on rocky seabeds.",
        "extraHint": "Moves slowly using hundreds of tiny tube feet and five-toothed Aristotle's lanterns."
      },
      {
        "word": "SHEARWATER",
        "category": "Pelagic Glider",
        "hint": "Medium-sized petrel that shears across wave crests with stiff wings.",
        "extraHint": "Nests in burrows on offshore islands, flying thousands of miles on foraging trips."
      },
      {
        "word": "SNAPPINGTURTLE",
        "category": "Freshwater Turtle",
        "hint": "Freshwater turtle with powerful hooked jaws and a saw-toothed tail.",
        "extraHint": "Alligator snappers possess a pink, worm-like tongue lure to attract curious fish."
      },
      {
        "word": "SNOWLEOPARD",
        "category": "Ghost of the Mountains",
        "hint": "Solitary big cat native to rugged mountain ranges of Central Asia.",
        "extraHint": "Possesses a long, thick furry tail used for balance and wrapped around the face for warmth."
      },
      {
        "word": "SPIDERMONKEY",
        "category": "Prehensile Primate",
        "hint": "Primate with long spindly limbs and an agile prehensile tail with a tactile pad.",
        "extraHint": "Swings through South American rainforest canopies like a gymnast using its tail."
      },
      {
        "word": "SQUIRRELMONKEY",
        "category": "Canopy Primate",
        "hint": "Small, agile New World monkey living in massive social canopy troops.",
        "extraHint": "Features high brain-to-body mass ratio and communicates via bird-like chirps."
      },
      {
        "word": "STONECHAT",
        "category": "Heathland Bird",
        "hint": "Small chat whose sharp call sounds like two pebbles being knocked together.",
        "extraHint": "Pairs stay together year-round on coastal heaths and moorlands."
      },
      {
        "word": "SUGARGLIDER",
        "category": "Gliding Marsupial",
        "hint": "Small nocturnal gliding possum with a gliding membrane extending from wrists to ankles.",
        "extraHint": "Glides up to 150 feet between forest trees to feed on sweet acacia gum and nectar."
      },
      {
        "word": "SWALLOWTAIL",
        "category": "Fork-Tailed Butterfly",
        "hint": "Large, colorful butterfly featuring distinct tail extensions on its hindwings.",
        "extraHint": "Caterpillars possess an orange forked scent gland called an osmeterium for defense."
      },
      {
        "word": "SWORDFISH",
        "category": "Billfish",
        "hint": "Predatory billfish featuring a long, flat bill resembling a broadsword.",
        "extraHint": "Slashes at schools of squid and mackerel with its bill to stun them before eating."
      },
      {
        "word": "TARANTULA",
        "category": "Hairy Spider",
        "hint": "Large, hairy arachnid that hunts at night without spinning aerial capture webs.",
        "extraHint": "Kicks irritating urticating hairs from its abdomen to deter approaching predators."
      },
      {
        "word": "TASMANIAN",
        "category": "Carnivorous Marsupial",
        "hint": "Stocky carnivorous marsupial with black fur and an ear-splitting screech.",
        "extraHint": "Possesses one of the strongest bite forces relative to body size of any mammal on Earth."
      },
      {
        "word": "TIGERSHARK",
        "category": "Striped Predator",
        "hint": "Large apex shark recognized by dark vertical stripes on young and voracious appetite.",
        "extraHint": "Known as the 'wastebasket of the sea', swallowing fish, turtles, and even license plates."
      },
      {
        "word": "TREECREEPER",
        "category": "Bark Forager",
        "hint": "Small brown mottled woodland bird that spirals up tree trunks searching for bark bugs.",
        "extraHint": "Uses its stiff woodpecker-like tail feathers as a prop while climbing."
      },
      {
        "word": "TREEKANGAROO",
        "category": "Arboreal Macropod",
        "hint": "Tree-dwelling kangaroo species adapted for living high in rainforest canopies.",
        "extraHint": "Possesses muscular forelimbs and a long non-prehensile balancing tail for climbing."
      },
      {
        "word": "TROPICBIRD",
        "category": "Pelagic Tail-Streamer",
        "hint": "Dazzling white pelagic seabird with exceptionally long central tail streamers.",
        "extraHint": "Flies with rapid pigeon-like wing beats far out over warm tropical ocean waters."
      },
      {
        "word": "TURNSTONE",
        "category": "Rock Flipper",
        "hint": "Stocky shorebird that uses its stout bill to flip over coastal stones and seaweed.",
        "extraHint": "Uncovers hiding sandhoppers, crabs, and marine worms beneath beach debris."
      },
      {
        "word": "VAMPIREBAT",
        "category": "Blood-Feeding Bat",
        "hint": "Small leaf-nosed bat that feeds exclusively on the blood of sleeping livestock.",
        "extraHint": "Saliva contains an anticoagulant enzyme named draculin that keeps blood flowing freely."
      },
      {
        "word": "WATERBUFFALO",
        "category": "Domestic Bovine",
        "hint": "Large bovid native to Asia, essential for pulling plows through flooded rice paddies.",
        "extraHint": "Loves wallowing in deep mud pools to cool off and shield its skin from biting flies."
      },
      {
        "word": "WHALESHARK",
        "category": "Gentle Giant Fish",
        "hint": "The largest living fish in the world, filter-feeding plankton with a gaping mouth.",
        "extraHint": "Docile ocean giant covered in a unique celestial pattern of white spots and stripes."
      },
      {
        "word": "WILDEBEEST",
        "category": "Migrating Bovine",
        "hint": "Large horned antelope that undertakes colossal annual migrations in the Serengeti.",
        "extraHint": "Over one million wildebeest cross crocodile-infested rivers following rains."
      },
      {
        "word": "WOLVERINE",
        "category": "Fierce Mustelid",
        "hint": "Stocky, muscular northern carnivore renowned for fearless ferocity and strength.",
        "extraHint": "Can defend kills against wolves and bears; roams vast frozen arctic tundra territories."
      },
      {
        "word": "WOODCHUCK",
        "category": "Groundhog",
        "hint": "Stocky burrowing marmot celebrated in folklore for predicting spring weather.",
        "extraHint": "Excavates extensive underground burrow complexes and hibernates through winter."
      },
      {
        "word": "WOODPECKER",
        "category": "Tree Drummer",
        "hint": "Bird that pecks tree trunks with a chisel-like bill to extract wood-boring insects.",
        "extraHint": "Features shock-absorbing skull bones and a tongue that wraps around its brain."
      }
    ]
  },
  "fruits": {
    "easy": [
      {
        "word": "ACAI",
        "category": "Amazon Palm Berry",
        "hint": "Small, round deep purple palm fruit harvested from Amazonian acai palms.",
        "extraHint": "Famous worldwide as a superfood bowl ingredient paired with granola and fruit."
      },
      {
        "word": "ACORN",
        "category": "Ribbed Squash",
        "hint": "Small winter squash with dark green ridged skin and sweet yellow-orange interior.",
        "extraHint": "Named for its resemblance to an oak acorn; delicious halved and baked with maple syrup."
      },
      {
        "word": "ANJOU",
        "category": "Green Winter Pear",
        "hint": "Egg-shaped winter pear with smooth green skin that remains green even when ripe.",
        "extraHint": "Dense, sweet flesh is excellent for fresh eating, poaching in wine, and baking."
      },
      {
        "word": "APPLE",
        "category": "Pome Fruit",
        "hint": "Crisp, sweet or tart orchard fruit growing in red, green, and yellow varieties.",
        "extraHint": "Rich in dietary pectin fiber; keeps the doctor away according to popular folklore."
      },
      {
        "word": "ARIL",
        "category": "Seed Covering",
        "hint": "Specialized outgrowth from a seed that partly or completely covers the seed.",
        "extraHint": "The sweet translucent edible portion of lychee, pomegranate, and rambutan."
      },
      {
        "word": "ASAM",
        "category": "Souring Fruit",
        "hint": "Small, sour tropical fruit widely used in Malaysian and Indonesian cooking.",
        "extraHint": "Provides a sharp fruity tang to traditional fish curries and sour broths."
      },
      {
        "word": "BACON",
        "category": "Cold-Hardy Avocado",
        "hint": "Oval avocado cultivar with smooth green skin and light, creamy butter flesh.",
        "extraHint": "Bred in California in 1951; withstands freezing winter temperatures down to 24°F."
      },
      {
        "word": "BAEL",
        "category": "Wood Apple",
        "hint": "Sacred Indian fruit with a woody green shell and sweet aromatic fibrous pulp.",
        "extraHint": "Revered in Ayurvedic medicine for digestive health and dedicated to Lord Shiva."
      },
      {
        "word": "BER",
        "category": "Indian Plum",
        "hint": "Small, sweet and tart fruit native to India, also known as Indian jujube.",
        "extraHint": "Eaten fresh with salt and chili or pickled; sacred in Hindu traditions."
      },
      {
        "word": "BERRY",
        "category": "Fleshy Fruit",
        "hint": "Small fleshy fruit without a stone produced from a single flower ovary.",
        "extraHint": "Botanical classification includes blueberries, tomatoes, grapes, and bananas."
      },
      {
        "word": "BING",
        "category": "Sweet Dark Cherry",
        "hint": "Large, dark red sweet cherry cultivar developed in Oregon in 1875.",
        "extraHint": "Firm, juicy, and exceptionally sweet; named after Manchurian orchard foreman Ah Bing."
      },
      {
        "word": "BLUSH",
        "category": "Color Tinge",
        "hint": "Rosy reddish or pinkish flush developing across the sun-exposed skin of fruit.",
        "extraHint": "Signals that apples, peaches, and pears have received ample natural sunshine."
      },
      {
        "word": "BOSC",
        "category": "Cinnamon Pear",
        "hint": "Elegant, elongated pear featuring rough cinnamon-brown russet skin and spicy flavor.",
        "extraHint": "Maintains its firm, sculpted shape when poached in red wine with cloves."
      },
      {
        "word": "CACAO",
        "category": "Chocolate Fruit",
        "hint": "Oval ridged tree pod containing sweet white pulp surrounding cocoa beans.",
        "extraHint": "The white pulp tastes like sweet mango-lychee; inner seeds are roasted into chocolate."
      },
      {
        "word": "CANES",
        "category": "Berry Stems",
        "hint": "The slender, flexible woody stems of bramble fruit bushes like raspberries.",
        "extraHint": "Pruned annually by berry growers to encourage vigorous summer fruit yields."
      },
      {
        "word": "CAROB",
        "category": "St Johns Bread",
        "hint": "Sweet, leathery dark brown tree pod containing hard seeds and chocolate-like pulp.",
        "extraHint": "Roasted and ground into a natural caffeine-free substitute for cocoa powder."
      },
      {
        "word": "CIDER",
        "category": "Apple Beverage",
        "hint": "Beverage made from the crushed juice of pressed apples, either sweet or fermented.",
        "extraHint": "Traditional autumn drink served warm with cinnamon sticks and allspice."
      },
      {
        "word": "CLAPP",
        "category": "Favorite Summer Pear",
        "hint": "Large, sweet summer pear with greenish-yellow skin blushing bright red.",
        "extraHint": "Matures in August before Bartlett pears; tender and exceptionally juicy."
      },
      {
        "word": "CORE",
        "category": "Central Structure",
        "hint": "The tough central portion of a pome fruit containing the seeds.",
        "extraHint": "Encountered when eating apples and pears; surrounded by sweet edible flesh."
      },
      {
        "word": "DANCY",
        "category": "Christmas Tangerine",
        "hint": "Historic American tangerine variety traditionally tucked into children's holiday stockings.",
        "extraHint": "Intensely flavored with sweet, rich juice and spicy, aromatic essential peel oils."
      },
      {
        "word": "DATE",
        "category": "Sweet Palm Fruit",
        "hint": "Chewy, caramel-sweet fruit harvested from date palm trees across desert oases.",
        "extraHint": "Medjool dates are prized for jumbo size, soft texture, and natural honey flavor."
      },
      {
        "word": "DUKU",
        "category": "Lansium Fruit",
        "hint": "Sweet, translucent segmented fruit native to Southeast Asia with thin skin.",
        "extraHint": "Closely related to langsat; eaten fresh by popping segments from the peel."
      },
      {
        "word": "FIANO",
        "category": "Ancient Italian Grape",
        "hint": "Ancient white grape cultivated in Campania, Italy, since ancient Roman times.",
        "extraHint": "Honeybees love the sweet grapes, giving rise to its Latin name Vitis apiana."
      },
      {
        "word": "FIG",
        "category": "Inverted Flower",
        "hint": "Soft, sweet pear-shaped fruit with chewy skin and crunchy seeds inside.",
        "extraHint": "Botanically an inverted inflorescence (syconium) pollinated by specialized tiny fig wasps."
      },
      {
        "word": "FLESH",
        "category": "Edible Pulp",
        "hint": "The soft, succulent, edible substance of a fruit between skin and seed.",
        "extraHint": "Packed with water, natural sugars, vitamins, and refreshing fruit acids."
      },
      {
        "word": "FRUIT",
        "category": "Botanical Structure",
        "hint": "The seed-bearing structure in flowering plants formed from the ovary after flowering.",
        "extraHint": "Provides sweet nourishment to animals that disperse the seeds within."
      },
      {
        "word": "FUJI",
        "category": "Japanese Apple",
        "hint": "Crisp, sweet apple variety developed in Japan by crossbreeding Red Delicious and Ralls.",
        "extraHint": "Known for exceptional shelf life and refreshing, honey-sweet crunch."
      },
      {
        "word": "GALA",
        "category": "Sweet Apple",
        "hint": "Mildly sweet apple with red-orange striped skin developed in New Zealand in the 1930s.",
        "extraHint": "A favorite lunchbox snacking apple with thin skin and aromatic crispness."
      },
      {
        "word": "GALIA",
        "category": "Hybrid Sweet Melon",
        "hint": "Green-fleshed hybrid melon with netted golden rind developed in Israel in 1973.",
        "extraHint": "Combines the sweet green flesh of honeydew with the netting aroma of cantaloupe."
      },
      {
        "word": "GAMAY",
        "category": "Beaujolais Grape",
        "hint": "Purple grape variety producing light-bodied, fruity red wines in Beaujolais.",
        "extraHint": "Celebrated worldwide every November during festive Beaujolais Nouveau celebrations."
      },
      {
        "word": "GENIP",
        "category": "Spanish Lime",
        "hint": "Small green fruit with a brittle shell enclosing sweet, tangy orange pulp.",
        "extraHint": "Popular Caribbean street snack, sucked from the shell around a large seed."
      },
      {
        "word": "GLENN",
        "category": "Peach Mango",
        "hint": "Florida mango cultivar celebrated for its sweet, silky flesh with hints of peach.",
        "extraHint": "Mild, sweet, and highly aromatic tree prized by tropical home gardeners."
      },
      {
        "word": "GOURD",
        "category": "Hard-Shelled Fruit",
        "hint": "Hard-shelled fleshy fruit belonging to the Cucurbitaceae plant family.",
        "extraHint": "Dried into durable musical instruments, ladles, containers, and birdhouses."
      },
      {
        "word": "GRAPE",
        "category": "Vine Berry",
        "hint": "Small smooth-skinned sweet berry growing in hanging bunches on woody vines.",
        "extraHint": "Eaten fresh as table grapes, dried into raisins, or fermented into fine wines."
      },
      {
        "word": "GROVE",
        "category": "Citrus Field",
        "hint": "Small wood, orchard, or group of trees, especially fruit or nut trees.",
        "extraHint": "Famous Florida and California orange and lemon groves perfume spring breezes."
      },
      {
        "word": "GUABA",
        "category": "Ice Cream Bean Pod",
        "hint": "Long ridged green tree pod enclosing soft, sweet white cottony pulp around seeds.",
        "extraHint": "A beloved refreshing sweet treat sold on street corners in Andean South America."
      },
      {
        "word": "GUAMO",
        "category": "Ice Cream Pod",
        "hint": "Leguminous tree pod containing sweet, fluffy white pulp around black seeds.",
        "extraHint": "Beloved across tropical South America for its sweet, sugary dessert-like aril."
      },
      {
        "word": "GUAVA",
        "category": "Fragrant Tropical Fruit",
        "hint": "Round tropical fruit with sweet, aromatic pink or white flesh and tiny hard seeds.",
        "extraHint": "Possesses a strong, sweet floral aroma; eaten fresh or cooked into guava paste paste."
      },
      {
        "word": "GWEN",
        "category": "Compact Avocado Tree",
        "hint": "Dwarf avocado variety producing fruit similar in taste and texture to Hass.",
        "extraHint": "Ideal for small home gardens and containers, yielding rich nutty green fruit."
      },
      {
        "word": "HADEN",
        "category": "Parent of Florida Mangoes",
        "hint": "Historic Florida mango cultivar that gave rise to dozens of modern varieties.",
        "extraHint": "Seedling planted in Coconut Grove in 1902 that transformed commercial mango farming."
      },
      {
        "word": "HASS",
        "category": "Pebbled Avocado",
        "hint": "The most popular commercial avocado cultivar, featuring dark pebbly skin when ripe.",
        "extraHint": "Discovered by California postman Rudolph Hass; prized for creamy, high-oil flesh."
      },
      {
        "word": "HOSUI",
        "category": "Juicy Russet Pear",
        "hint": "Large Japanese Asian pear with a golden-bronze skin and sweet-tart juice.",
        "extraHint": "Ripens in late summer, offering a refreshing burst of sweet juice when bitten."
      },
      {
        "word": "ILAMA",
        "category": "Central American Fruit",
        "hint": "Tropical fruit native to Central America with either pink or white sweet pulp.",
        "extraHint": "Eaten chilled by scooping out the custard-like sweet flesh with a spoon."
      },
      {
        "word": "INGA",
        "category": "Ice Cream Bean",
        "hint": "Long green tree pod containing fluffy white pulp tasting like vanilla ice cream.",
        "extraHint": "Native to the Amazon basin; seeds and sweet cottony arils are eaten fresh."
      },
      {
        "word": "JAFFA",
        "category": "Middle Eastern Orange",
        "hint": "Famous sweet orange variety with a thick peel developed by Arab farmers near Jaffa.",
        "extraHint": "Highly exported across the Mediterranean for centuries for its sweet, seedless juice."
      },
      {
        "word": "JUICE",
        "category": "Liquid Essence",
        "hint": "The natural fluid, liquid, or moisture contained within fruit tissues.",
        "extraHint": "Extracted by squeezing, pressing, or blending fresh ripe citrus and berries."
      },
      {
        "word": "KEITT",
        "category": "Giant Green Mango",
        "hint": "Massive late-season mango that stays green with a slight pink blush when ripe.",
        "extraHint": "Remains sweet and fiberless even when fruits grow to over two pounds in weight."
      },
      {
        "word": "KENT",
        "category": "Sweet Late Mango",
        "hint": "Large, sweet mango cultivar with dark green skin blushing red and fiberless pulp.",
        "extraHint": "Originating in Florida; sweet, rich, and juicy with a long summer season."
      },
      {
        "word": "KEPEL",
        "category": "Perfume Fruit",
        "hint": "Rare Indonesian fruit that was historically reserved for royal princesses.",
        "extraHint": "Consuming the fruit was believed to give bodily sweat a pleasant violet aroma."
      },
      {
        "word": "KESAR",
        "category": "Saffron Mango",
        "hint": "Renowned mango cultivar from Gujarat, India, celebrated for intense saffron aroma.",
        "extraHint": "Known as the 'Queen of Mangoes'; prized for making traditional Gujarati aamras."
      },
      {
        "word": "KISHU",
        "category": "Tiny Seedless Citrus",
        "hint": "Miniature seedless mandarin variety smaller than a golf ball with sweet pulp.",
        "extraHint": "One of the oldest citrus varieties in Japan, celebrated for kid-friendly snacking."
      },
      {
        "word": "KIWI",
        "category": "Chinese Gooseberry",
        "hint": "Small oval fruit with fuzzy brown skin and vibrant emerald-green seeded flesh.",
        "extraHint": "Native to China; renamed kiwi in New Zealand after the country's national flightless bird."
      },
      {
        "word": "KOKUM",
        "category": "Cooling Fruit",
        "hint": "Dark purple fruit native to the Western Ghats of India used as a souring spice.",
        "extraHint": "Dried rinds infuse curries and cool summer drinks like sol kadhi."
      },
      {
        "word": "KOSUI",
        "category": "Sweet Japanese Pear",
        "hint": "The most popular russet Asian pear variety in Japan, sweet and very juicy.",
        "extraHint": "Features a tender, fine-grained texture with rich natural sugar sweetness."
      },
      {
        "word": "LEMON",
        "category": "Sour Citrus",
        "hint": "Bright yellow citrus fruit prized worldwide for acidic juice and fragrant zest.",
        "extraHint": "High citric acid content gives lemon juice its sharp sour taste in cooking and drinks."
      },
      {
        "word": "LIME",
        "category": "Green Citrus",
        "hint": "Small, round green citrus fruit with sharp acidic juice and fragrant zest.",
        "extraHint": "Essential ingredient in guacamole, key lime pies, ceviche marinades, and cocktails."
      },
      {
        "word": "LUFFA",
        "category": "Bath Sponge Gourd",
        "hint": "Elongated gourd fruit that turns into a natural fibrous scrubbing sponge when dried.",
        "extraHint": "Young immature gourds are eaten as a succulent vegetable in Chinese soups."
      },
      {
        "word": "LULO",
        "category": "Naranjilla",
        "hint": "Subtropical fruit from the Andes with citrus-rhubarb jelly green pulp.",
        "extraHint": "The star ingredient in 'lulo juice', popular throughout Colombia and Ecuador."
      },
      {
        "word": "MALIC",
        "category": "Apple Acid",
        "hint": "Organic dicarboxylic acid contributing to the pleasantly sour taste of green apples.",
        "extraHint": "Derived from the Latin word 'malum' meaning apple; sharp and refreshing."
      },
      {
        "word": "MAMEY",
        "category": "Sapote Giant",
        "hint": "Large oval fruit with sandpaper skin and creamy orange-coral flesh tasting of sweet potato.",
        "extraHint": "A staple milkshake and dessert ingredient throughout Cuba and the Caribbean."
      },
      {
        "word": "MANGO",
        "category": "King of Fruits",
        "hint": "Juicy tropical stone fruit with sweet, golden flesh and an intoxicating fragrance.",
        "extraHint": "The national fruit of India, Pakistan, and the Philippines; over 500 varieties exist."
      },
      {
        "word": "MAQUI",
        "category": "Patagonian Superberry",
        "hint": "Small, deep purple-black berry native to the temperate rainforests of Chile.",
        "extraHint": "Revered by the Mapuche people for centuries as a natural stamina enhancer."
      },
      {
        "word": "MARRS",
        "category": "Early Texas Orange",
        "hint": "Early-season sweet orange cultivar discovered as a limb sport in Texas in 1927.",
        "extraHint": "Low in acid and seedless, producing heavy clusters of sweet juicy fruit."
      },
      {
        "word": "MELON",
        "category": "Gourd Fruit",
        "hint": "Large sweet fleshy fruit growing on trailing vines with seeds in central cavity.",
        "extraHint": "Encompasses watermelons, honeydews, cantaloupes, and sweet dessert melons."
      },
      {
        "word": "MEYER",
        "category": "Sweet Floral Lemon",
        "hint": "Hybrid citrus cross of lemon and mandarin orange with thin skin and floral juice.",
        "extraHint": "Much sweeter and less acidic than regular lemons; beloved by pastry chefs for curd."
      },
      {
        "word": "MUNDU",
        "category": "Garcinia Fruit",
        "hint": "Yellow-orange tropical fruit related to mangosteen native to Indonesia.",
        "extraHint": "Features a pleasantly sweet and sour pulp used in jams and cooling drinks."
      },
      {
        "word": "MUTSU",
        "category": "Crisp Japanese Pome",
        "hint": "Large, crisp greenish-yellow apple developed in Japan by crossing Golden and Indo.",
        "extraHint": "Also known as Crispin; features sweet, honeyed flesh that keeps its shape in pies."
      },
      {
        "word": "NANCE",
        "category": "Yellow Golden Berry",
        "hint": "Small, round yellow fruit with a pungent, sweet-tart aroma in Central America.",
        "extraHint": "Fermented into festive chicha or eaten with shaved ice and sweetened milk."
      },
      {
        "word": "NASHI",
        "category": "Asian Sand Pear",
        "hint": "Round, crisp Asian pear with golden-russet skin and high water content.",
        "extraHint": "Eaten crisp like an apple rather than soft; exceptionally juicy and refreshing."
      },
      {
        "word": "NONI",
        "category": "Cheese Fruit",
        "hint": "Yellowish-white tropical fruit known for pungent, strong smell resembling rotten cheese.",
        "extraHint": "Used in traditional Polynesian healing practices and bottled as wellness tonics."
      },
      {
        "word": "NOPAL",
        "category": "Cactus Pad and Fruit",
        "hint": "The edible flat green pads and sweet fruits of the prickly pear cactus.",
        "extraHint": "Used in traditional Mexican cooking as a tender savory vegetable and sweet fruit."
      },
      {
        "word": "OKRA",
        "category": "Lady Finger Pod",
        "hint": "Slender green ridged seed pod containing mucilaginous juice and edible round seeds.",
        "extraHint": "Thickens traditional Southern gumbo stews; popular fried in crisp cornmeal."
      },
      {
        "word": "OLIVE",
        "category": "Mediterranean Drupe",
        "hint": "Small bitter fruit pressed to yield golden olive oil or cured in brine to eat.",
        "extraHint": "Symbol of peace since antiquity; curing leaches out bitter compound oleuropein."
      },
      {
        "word": "OPAL",
        "category": "Golden Russet-Free",
        "hint": "Vibrant yellow apple cultivar that naturally resists browning when sliced open.",
        "extraHint": "Cross between Golden Delicious and Topaz with a floral, sweet-tart crunch."
      },
      {
        "word": "PEACH",
        "category": "Velvet Drupe",
        "hint": "Juicy summer stone fruit with fuzzy velvety skin and sweet yellow or white flesh.",
        "extraHint": "Originated in ancient China where it was revered as a sacred symbol of immortality."
      },
      {
        "word": "PEAR",
        "category": "Pome Fruit",
        "hint": "Sweet, juicy bell-shaped fruit with soft, slightly granular melting flesh.",
        "extraHint": "Ripens from the inside out; prized varieties include Bartlett, Bosc, and Anjou."
      },
      {
        "word": "PECAN",
        "category": "Southern Drupe",
        "hint": "Sweet, rich buttery nut-like seed harvested from hickory trees in the US.",
        "extraHint": "The iconic centerpiece of Southern pecan pies and praline confections."
      },
      {
        "word": "PEEL",
        "category": "Outer Skin",
        "hint": "The outer protective layer or skin of a fruit like an orange, banana, or apple.",
        "extraHint": "Often rich in aromatic essential oils, bitter zest, and protective waxes."
      },
      {
        "word": "PEPE",
        "category": "Melon Pear",
        "hint": "Also known as pepino melon, a sweet juicy South American fruit resembling melon.",
        "extraHint": "Features cream-colored skin with purple stripes and cucumber-cantaloupe flavor."
      },
      {
        "word": "PEPI",
        "category": "Pepino Melon",
        "hint": "Sweet, aromatic South American fruit with creamy yellow skin and purple streaks.",
        "extraHint": "Has a crisp, refreshing flavor combining sweet cantaloupe and fresh cucumber."
      },
      {
        "word": "PERRY",
        "category": "Pear Cider",
        "hint": "Alcoholic beverage made from fermented pear juice, similar to apple cider.",
        "extraHint": "Crafted for centuries in England and France using traditional tart perry pears."
      },
      {
        "word": "PINOT",
        "category": "Burgundy Grape",
        "hint": "Noble wine grape family encompassing Pinot Noir, Pinot Gris, and Pinot Blanc.",
        "extraHint": "Pinot Noir is celebrated for delicate cherry, forest floor, and truffle aromas."
      },
      {
        "word": "PITH",
        "category": "Spongy Layer",
        "hint": "The white, spongy inner layer beneath the zest rind of citrus fruits.",
        "extraHint": "Rich in dietary fiber and bioflavonoids; has a mild, slightly bitter taste."
      },
      {
        "word": "PLUM",
        "category": "Smooth Drupe",
        "hint": "Smooth-skinned stone fruit with sweet, juicy flesh ranging from purple to yellow.",
        "extraHint": "Dried into sweet prunes; belongs to the Prunus genus along with cherries and peaches."
      },
      {
        "word": "PLUOT",
        "category": "Hybrid Stone Fruit",
        "hint": "Complex fruit hybrid bred from cross-pollinating plums and apricots.",
        "extraHint": "Inherits sweet plum juicy flesh with a delicate floral apricot fragrance."
      },
      {
        "word": "PRIMA",
        "category": "Scab-Free Apple",
        "hint": "Early-maturing disease-resistant apple with dark red blush over yellow skin.",
        "extraHint": "Developed through cooperative university breeding for natural orchard health."
      },
      {
        "word": "PRUNE",
        "category": "Dried Plum",
        "hint": "Sweet, chewy dried European plum variety known for promoting digestion.",
        "extraHint": "Rich in potassium, soluble fiber, and sorbitol; enjoyed as a healthy snack."
      },
      {
        "word": "REED",
        "category": "Giant Round Avocado",
        "hint": "Large, spherical summer avocado variety with thick, pebbly green skin.",
        "extraHint": "Can grow as large as a softball; remains green when ripe with exceptional butter flavor."
      },
      {
        "word": "RIND",
        "category": "Tough Peel",
        "hint": "The thick, tough outer protective covering of melons, citrus, and cheeses.",
        "extraHint": "Shields delicate inner juicy pulp from drying out in scorching summer heat."
      },
      {
        "word": "ROMA",
        "category": "Plum Tomato",
        "hint": "Elongated, egg-shaped plum tomato with thick flesh and few interior seeds.",
        "extraHint": "The classic culinary choice for cooking thick tomato sauces and canning paste."
      },
      {
        "word": "ROME",
        "category": "Baker Apple",
        "hint": "Round, glossy red heirloom apple historically hailed as the finest baking apple.",
        "extraHint": "Holds its shape firmly when baked whole with cinnamon and brown sugar."
      },
      {
        "word": "ROWAN",
        "category": "Mountain Berry",
        "hint": "Scarlet-red pome berry growing in dense clusters on European mountain ash trees.",
        "extraHint": "High in Vitamin C; traditionally cooked into bitter-tart jellies for wild game."
      },
      {
        "word": "SALAK",
        "category": "Snakefruit",
        "hint": "Teardrop fruit covered in overlapping reddish-brown scaly skin like a snake.",
        "extraHint": "Snapping off the tip reveals three crisp garlic-shaped cloves with an apple-pineapple crunch."
      },
      {
        "word": "SEED",
        "category": "Reproductive Unit",
        "hint": "Embryonic plant enclosed in a protective outer coat inside a fruit.",
        "extraHint": "Can be tiny and edible like in kiwis or large and stone-like like in peaches."
      },
      {
        "word": "SHIRO",
        "category": "Golden Yellow Plum",
        "hint": "Round, sweet yellow Japanese plum with translucent skin and very juicy flesh.",
        "extraHint": "Introduced by legendary plant breeder Luther Burbank in California in 1899."
      },
      {
        "word": "SLOE",
        "category": "Wild Blackthorn Berry",
        "hint": "Small, astringent blue-black wild plum growing on spiny blackthorn bushes.",
        "extraHint": "Steeped in gin with sugar to produce traditional English crimson sloe gin."
      },
      {
        "word": "SNOOT",
        "category": "Stone Fruit",
        "hint": "A common regional name for wild drupe fruits found in hedgerows.",
        "extraHint": "Yields rustic jams and compotes in traditional rural European homesteads."
      },
      {
        "word": "STEM",
        "category": "Fruit Stalk",
        "hint": "The slender plant stalk connecting a hanging fruit to its parent branch.",
        "extraHint": "Transports water and sweet carbohydrates as fruit grows and matures on the vine."
      },
      {
        "word": "SYRAH",
        "category": "Dark Spiced Grape",
        "hint": "Dark-skinned red grape variety celebrated for blackberry, pepper, and smoke notes.",
        "extraHint": "Known as Shiraz in Australia; produces full-bodied wines with firm tannins."
      },
      {
        "word": "TARAP",
        "category": "Wild Breadfruit",
        "hint": "Rare tropical fruit native to Borneo with soft fleshy spines and creamy pulp.",
        "extraHint": "Flesh tastes like sweet pear custard; highly perishable within hours of harvest."
      },
      {
        "word": "TYSON",
        "category": "Sugar Pear",
        "hint": "Old American heirloom summer pear with golden russet skin and perfumed juice.",
        "extraHint": "One of the finest early summer pears, sweet and juicy like warm honey."
      },
      {
        "word": "UGLI",
        "category": "Tangelo Fruit",
        "hint": "Jamaican tangelo hybrid with wrinkly, loose yellowish-green skin.",
        "extraHint": "A natural cross of Seville orange, grapefruit, and tangerine with sweet flesh."
      },
      {
        "word": "VINE",
        "category": "Climbing Plant",
        "hint": "Long, slender trailing or climbing plant stem supporting heavy fruit clusters.",
        "extraHint": "Supports hanging bunches of grapes, watermelons, kiwis, and passionfruits."
      },
      {
        "word": "WAMPI",
        "category": "Clustered Asian Berry",
        "hint": "Small round fruit hanging in dense clusters on Chinese evergreen trees.",
        "extraHint": "Skin and flesh are both eaten, delivering a sweet grape-grapefruit balance."
      },
      {
        "word": "YUZU",
        "category": "Japanese Citrus",
        "hint": "Bumpy Japanese citrus fruit celebrated for an intoxicating aroma of grapefruit and lime.",
        "extraHint": "Prized in Japanese cuisine for yuzu kosho chili paste, ponzu sauce, and yuzu tea."
      },
      {
        "word": "ZEST",
        "category": "Aromatic Rind",
        "hint": "The colorful outer skin of citrus fruit used for flavoring savory dishes and desserts.",
        "extraHint": "Packed with intense volatile essential oils that perfume baked tarts and pastries."
      }
    ],
    "medium": [
      {
        "word": "ACEROLA",
        "category": "Barbados Cherry",
        "hint": "Small, bright red tropical berry-like fruit containing extraordinary Vitamin C levels.",
        "extraHint": "Contains thirty times more Vitamin C per ounce than fresh oranges."
      },
      {
        "word": "ACHACHA",
        "category": "Bolivian Wonder Fruit",
        "hint": "Orange teardrop fruit related to mangosteen grown in the Bolivian Amazon.",
        "extraHint": "Features a thick protective rind enclosing sweet, refreshing, tangy white flesh."
      },
      {
        "word": "ALBARINO",
        "category": "Galician White Grape",
        "hint": "Coastal white grape from Galicia, Spain, prized for salty minerality and stone fruit.",
        "extraHint": "Pairs harmoniously with fresh Atlantic octopus, scallops, and shellfish tapas."
      },
      {
        "word": "ALLSPICE",
        "category": "Pimento Berry",
        "hint": "Dried unripe berry of Pimenta dioica combining cinnamon, nutmeg, and clove scents.",
        "extraHint": "The essential signature seasoning in Jamaican jerk marinades and pickling."
      },
      {
        "word": "ALMOND",
        "category": "Botanical Drupe",
        "hint": "The edible seed of a tree drupe fruit enclosed within a hard wooden shell.",
        "extraHint": "Botanically the seed of a drupe related to peaches, not a true botanical nut."
      },
      {
        "word": "ALPHONSO",
        "category": "King of Mangoes",
        "hint": "Renowned Indian mango cultivar prized for intense sweetness, rich aroma, and deep saffron hue.",
        "extraHint": "Known as the 'King of Mangoes' in India; highly coveted during spring harvest."
      },
      {
        "word": "AMBROSIA",
        "category": "Honey Apple",
        "hint": "Sweet, bi-colored dessert apple discovered as a chance seedling in British Columbia.",
        "extraHint": "Features a lovely pink-red blush over creamy yellow, named after food of the gods."
      },
      {
        "word": "AMRAPALI",
        "category": "Hybrid Indian Mango",
        "hint": "Prized Indian hybrid cross of Dasheri and Neelum producing rich orange pulp.",
        "extraHint": "High in beta-carotene; compact tree ideal for high-density orchard planting."
      },
      {
        "word": "APRICOT",
        "category": "Golden Drupe",
        "hint": "Small, velvety golden-orange stone fruit with a tart-sweet flavor balance.",
        "extraHint": "Rich in beta-carotene; widely dried into sweet chewy snacks across Central Asia."
      },
      {
        "word": "APRIUM",
        "category": "Apricot-Plum Hybrid",
        "hint": "Fruit hybrid leaning predominantly toward apricot genetics with plum traits.",
        "extraHint": "Features fuzzy apricot-like skin and sweet, firm flesh with intense sugar content."
      },
      {
        "word": "ARATIKU",
        "category": "Wild Custard Fruit",
        "hint": "Wild Brazilian rainforest fruit related to soursop with sweet creamy pulp.",
        "extraHint": "Foraged in South American savannas for refreshing sweet-sour pulp."
      },
      {
        "word": "ARILLODE",
        "category": "False Aril",
        "hint": "Structure resembling an aril arising from tissues other than the seed stalk.",
        "extraHint": "Examples include the fragrant red lace mace covering nutmeg kernels."
      },
      {
        "word": "ARONIA",
        "category": "Chokeberry",
        "hint": "Dark purple astringent berry packed with among the highest antioxidant levels.",
        "extraHint": "Simmered into rich syrups, antioxidant wellness tonics, and artisan wines."
      },
      {
        "word": "ASHGOURD",
        "category": "Wax Gourd",
        "hint": "Large winter melon covered in a white chalky wax that preserves it for months.",
        "extraHint": "Used in Ayurvedic medicine and sweetened into traditional Indian petha confections."
      },
      {
        "word": "ATAULFO",
        "category": "Honey Mango",
        "hint": "Small, golden-yellow Mexican mango variety with a thin skin and fiberless buttery flesh.",
        "extraHint": "Also marketed as the Champagne mango; features a small, flat seed."
      },
      {
        "word": "ATEMOYA",
        "category": "Sugar Apple Hybrid",
        "hint": "Delicious hybrid cross of the sugar apple and cherimoya bred in 1908.",
        "extraHint": "Features smooth creamy white flesh tasting like vanilla custard and pina colada."
      },
      {
        "word": "AVOCADO",
        "category": "Alligator Pear",
        "hint": "Creamy, single-seeded berry fruit loaded with heart-healthy monounsaturated fats.",
        "extraHint": "The star ingredient in guacamole; has a rich, buttery, savory culinary profile."
      },
      {
        "word": "BABCOCK",
        "category": "White Freestone Peach",
        "hint": "Sweet, low-acid white peach variety with smooth ivory skin blushing pink.",
        "extraHint": "Introduced in California in 1935; exceptionally sweet and perfumed."
      },
      {
        "word": "BACUPARI",
        "category": "Amazonian Garcinia",
        "hint": "Yellow-orange tropical fruit with a tough rind enclosing sweet translucent pulp.",
        "extraHint": "Prized for refreshing acidic aril and studied for potent antioxidant compounds."
      },
      {
        "word": "BALATON",
        "category": "Hungarian Tart Cherry",
        "hint": "Hungarian heirloom sour cherry with mahogany skin and dark, sweet-tart juice.",
        "extraHint": "Features rich red juice that does not dilute when baked into cherry desserts."
      },
      {
        "word": "BALDWIN",
        "category": "New England Apple",
        "hint": "Historic American heirloom apple with bright red blush over green.",
        "extraHint": "The most popular apple in New England before the legendary 1934 freeze."
      },
      {
        "word": "BANANA",
        "category": "Tropical Staple",
        "hint": "Curved yellow tropical fruit growing in hanging clusters known as hands.",
        "extraHint": "Botanically a berry; rich in potassium and convenient to peel and eat on the go."
      },
      {
        "word": "BAOBAB",
        "category": "Tree of Life Fruit",
        "hint": "Velvety pod containing powdery dry fruit pulp packed with calcium and Vitamin C.",
        "extraHint": "The only fruit in the world that naturally dries directly on the tree branch before harvest."
      },
      {
        "word": "BARBERA",
        "category": "Piedmont Red Grape",
        "hint": "Popular Italian red grape celebrated for deep ruby color, low tannins, and high acidity.",
        "extraHint": "Delicious with Italian cuisine; displays notes of sour cherry, blackberry, and herbs."
      },
      {
        "word": "BARBERRY",
        "category": "Tart Red Berry",
        "hint": "Small, elongated tart red berry used extensively in Persian jeweled rice pilafs.",
        "extraHint": "Known as zereshk in Iran; provides bright acidic tang to savory poultry dishes."
      },
      {
        "word": "BARTLETT",
        "category": "Williams Pear",
        "hint": "The most popular eating pear in North America, turning golden-yellow when ripe.",
        "extraHint": "Known as the Williams pear in Britain; exceptionally juicy, sweet, and aromatic."
      },
      {
        "word": "BERGAMOT",
        "category": "Perfume Citrus",
        "hint": "Fragrant citrus fruit cultivated in Calabria, Italy, valued for its aromatic essential oil.",
        "extraHint": "The signature flavoring oil infusing Earl Grey tea and high-end French perfumes."
      },
      {
        "word": "BILBERRY",
        "category": "Wild Blue Berry",
        "hint": "Small European wild cousin of the blueberry with deep purple-staining flesh.",
        "extraHint": "Unlike cultivated blueberries, bilberries have dark red juice that stains lips blue."
      },
      {
        "word": "BILIMBI",
        "category": "Cucumber Tree",
        "hint": "Elongated, ribbed sour green fruit growing directly from tree trunks.",
        "extraHint": "Intensely acidic; used across Southeast Asia as a souring agent in curries."
      },
      {
        "word": "BINJAI",
        "category": "White Mango",
        "hint": "Wild mango species native to Borneo and Sumatra with white fibrous pulp.",
        "extraHint": "Emits an intense, pungent fragrance; eaten fresh with sambal or in fish stews."
      },
      {
        "word": "BIRYBA",
        "category": "Rollinia Fruit",
        "hint": "Yellow conical fruit covered in soft, fleshy spines native to the Amazon.",
        "extraHint": "Flesh has a soft, creamy texture reminiscent of warm lemon meringue pie."
      },
      {
        "word": "BLOSSOM",
        "category": "Fruit Flower",
        "hint": "The vibrant flower of a stone fruit or pome tree preceding fruit set in spring.",
        "extraHint": "Attracts buzzing honeybees and wild pollinators to fertilize developing crops."
      },
      {
        "word": "BOROJO",
        "category": "Amazonian Energy Fruit",
        "hint": "Large brown fruit native to the Chocó region of Colombia hailed for energy.",
        "extraHint": "Blended into famous Colombian 'jugo de amor' smoothies with milk and honey."
      },
      {
        "word": "BRAEBURN",
        "category": "Crisp New Zealand Apple",
        "hint": "Bi-colored apple with a balanced sweet-tart flavor and firm, aromatic bite.",
        "extraHint": "Ideal for baking pies because it holds its shape firmly under oven heat."
      },
      {
        "word": "BRAMBLE",
        "category": "Thorny Shrub",
        "hint": "Rough, tangled, prickly shrub belonging to the genus Rubus.",
        "extraHint": "Produces wild blackberries, raspberries, and dewberries on arching canes."
      },
      {
        "word": "BRAMLEY",
        "category": "British Cooker Apple",
        "hint": "Large, tart green English cooking apple famous for high acid content.",
        "extraHint": "Bakes down into a light, fluffy, golden cloud; the definitive British pie apple."
      },
      {
        "word": "BREADNUT",
        "category": "Maya Nut",
        "hint": "Tropical tree fruit containing nutritious edible seeds tasting like chestnuts.",
        "extraHint": "Ancient staple crop of the Maya civilization, dried into protein-rich flour."
      },
      {
        "word": "BUFFALO",
        "category": "Silver Wild Berry",
        "hint": "Hardy wild berry shrub native to western North American river valleys.",
        "extraHint": "Produces small, tart red berries historically dried with bison meat in pemmican."
      },
      {
        "word": "BURBANK",
        "category": "Heritage Japanese Plum",
        "hint": "Classic red-and-yellow Japanese plum bred by Luther Burbank in California.",
        "extraHint": "Aromatic and sweet; served as the parent stock for dozens of modern plum hybrids."
      },
      {
        "word": "CABERNET",
        "category": "Wine Grape",
        "hint": "World-renowned red wine grape variety famous for blackcurrant and cedar notes.",
        "extraHint": "The most widely planted wine grape in the world, originating in Bordeaux."
      },
      {
        "word": "CALABASH",
        "category": "Bottle Gourd",
        "hint": "Hard-shelled vine fruit dried and hollowed out for water bottles and maracas.",
        "extraHint": "One of the earliest cultivated plant species in human history across Africa and Asia."
      },
      {
        "word": "CALVILLE",
        "category": "French Gourmet Apple",
        "hint": "Historic French ribbed heirloom apple prized since the 17th century at Versailles.",
        "extraHint": "Favored by King Louis XIV; exceptionally rich in Vitamin C and culinary acidity."
      },
      {
        "word": "CAMUCAMU",
        "category": "Amazonian Super-Berry",
        "hint": "Small, purplish-red fruit native to the Amazon rainforest with highest recorded Vitamin C.",
        "extraHint": "Grows along riverbanks; dried into potent antioxidant powder for smoothies."
      },
      {
        "word": "CANARY",
        "category": "Bright Yellow Melon",
        "hint": "Bright canary-yellow smooth melon with sweet, pale ivory-green flesh.",
        "extraHint": "Sweet and slightly tangy; stores exceptionally well without refrigeration."
      },
      {
        "word": "CANISTEL",
        "category": "Eggfruit",
        "hint": "Bright yellow tropical fruit with sweet, dense flesh resembling cooked egg yolk.",
        "extraHint": "Tastes like sweet pumpkin cheesecake; blended into custards and eggnogs."
      },
      {
        "word": "CARABAO",
        "category": "Philippine Sweet Mango",
        "hint": "The famous National Mango of the Philippines, reputed as one of the sweetest on Earth.",
        "extraHint": "Guinness World Records once cited it as having the sweetest recorded fruit brix."
      },
      {
        "word": "CARACARA",
        "category": "Pink Navel Orange",
        "hint": "Red-fleshed navel orange with sweet, low-acid juice and notes of cranberry.",
        "extraHint": "Discovered as a spontaneous branch mutation in Venezuela in 1976."
      },
      {
        "word": "CARISSA",
        "category": "Natal Plum",
        "hint": "Bright crimson coastal plum native to South Africa with sweet red flesh.",
        "extraHint": "Armed with sharp Y-shaped thorns; yields ruby-red preserves and jellies."
      },
      {
        "word": "CASABA",
        "category": "Wrinkled Winter Melon",
        "hint": "Late-ripening winter melon with bright yellow furrowed rind and mild white flesh.",
        "extraHint": "Keeps exceptionally well into winter months without spoiling in root cellars."
      },
      {
        "word": "CASHEW",
        "category": "Drupe Seed",
        "hint": "Kidney-shaped seed growing beneath a fleshy, juicy tropical cashew apple.",
        "extraHint": "The outer shell contains caustic anacardic acids removed during steaming."
      },
      {
        "word": "CAYENNE",
        "category": "Red Powder Pepper",
        "hint": "Slender, tapering red chili pepper dried and ground into universal cayenne pepper.",
        "extraHint": "Adds clean, bright heat to sauces, rubs, and traditional Buffalo chicken wings."
      },
      {
        "word": "CEMPEDAK",
        "category": "Jackfruit Cousin",
        "hint": "Tropical fruit native to Southeast Asia closely related to the jackfruit.",
        "extraHint": "Smaller than jackfruit with sweet, custard-like arils often battered and fried."
      },
      {
        "word": "CHANDLER",
        "category": "Giant Pink Pomelo",
        "hint": "Large, sweet pink pomelo variety with thick peel and mild, non-bitter pulp.",
        "extraHint": "Easy to peel and separate into crisp juice sacs; native to Southeast Asia."
      },
      {
        "word": "CHAUNSA",
        "category": "Honey Sweet Mango",
        "hint": "Exquisite mango variety from Pakistan celebrated for rich, honey-sweet perfume.",
        "extraHint": "Soft, succulent pulp dissolves in the mouth with an intoxicating tropical fragrance."
      },
      {
        "word": "CHAYOTE",
        "category": "Mirliton Pear Gourd",
        "hint": "Wrinkled, pear-shaped light green squash with a single soft edible flat seed.",
        "extraHint": "Staple in Mesoamerican cooking; boiled, stuffed, mashed, or pickled in jars."
      },
      {
        "word": "CHEBERRY",
        "category": "Chinese Mulberry",
        "hint": "Small, round red fruit with bumpy skin tasting like a cross between fig and mulberry.",
        "extraHint": "Also known as melonberry; native to China where trees grow on mountain slopes."
      },
      {
        "word": "CHELAN",
        "category": "Early Black Cherry",
        "hint": "Early-ripening dark sweet cherry that harvests two weeks before Bing cherries.",
        "extraHint": "Firm, mahogany-red fruit with round shape and pleasant sweet taste."
      },
      {
        "word": "CHENIN",
        "category": "Loire White Grape",
        "hint": "Versatile white grape variety from the Loire Valley making dry, sparkling, and sweet wines.",
        "extraHint": "South Africa's most planted grape, where it was historically known as Steen."
      },
      {
        "word": "CHERAPU",
        "category": "Button Mangosteen",
        "hint": "Small, bright orange tropical fruit resembling a miniature mangosteen with sweet aril.",
        "extraHint": "Native to Southeast Asia; eaten fresh or cooked into sweet, fragrant preserves."
      },
      {
        "word": "CHERRY",
        "category": "Small Drupe",
        "hint": "Small, round, deep red or black stone fruit growing in pairs on long stems.",
        "extraHint": "Available in sweet eating varieties like Bing and sour baking types like Montmorency."
      },
      {
        "word": "CHESTNUT",
        "category": "Sweet Tree Seed",
        "hint": "Sweet edible nut harvested from prickly spiny burrs on deciduous trees.",
        "extraHint": "Traditionally roasted over glowing open coals during festive winter holidays."
      },
      {
        "word": "CHILLI",
        "category": "Spicy Fruit",
        "hint": "Botanical berry fruit of Capsicum plants containing spicy capsaicin heat.",
        "extraHint": "Used worldwide to add fiery warmth and pungency to culinary dishes."
      },
      {
        "word": "CHINOTTO",
        "category": "Bitter Italian Citrus",
        "hint": "Small, bitter citrus fruit essential to Italian amaro liqueurs and sodas.",
        "extraHint": "Gives the dark Italian soft drink Chinotto its bittersweet herbal flavor."
      },
      {
        "word": "CHIRONJA",
        "category": "Puerto Rican Citrus",
        "hint": "Spontaneous natural citrus cross between an orange and grapefruit discovered in 1956.",
        "extraHint": "Eaten halved with a spoon like grapefruit, but lacking all bitter flavor."
      },
      {
        "word": "CHOJURO",
        "category": "Butterscotch Pear",
        "hint": "Historic Japanese Asian pear with dark russet skin and a rich butterscotch flavor.",
        "extraHint": "Known as the rum pear for its unique spiced caramel dessert aroma."
      },
      {
        "word": "CHUTNEY",
        "category": "Spiced Preserve",
        "hint": "Spicy, savory, and sweet condiment made of fruits, vinegar, sugar, and spices.",
        "extraHint": "Classic accompaniment in Indian cuisine, famous with green mangoes and tamarind."
      },
      {
        "word": "CINSAULT",
        "category": "Blending Grape",
        "hint": "Juicy, light-skinned red grape variety providing floral strawberry aroma in Rhone.",
        "extraHint": "Crossed with Pinot Noir in 1925 in South Africa to create the unique Pinotage grape."
      },
      {
        "word": "CITRANGE",
        "category": "Hardy Citrus Hybrid",
        "hint": "Citrus hybrid developed by crossing sweet orange with cold-hardy trifoliate orange.",
        "extraHint": "Used as a cold-tolerant rootstock for commercial citrus grafting worldwide."
      },
      {
        "word": "CITRIC",
        "category": "Citrus Acid",
        "hint": "Weak organic acid found naturally in citrus fruits giving them sharp tartness.",
        "extraHint": "Provides the characteristic mouth-puckering sourness of lemons and limes."
      },
      {
        "word": "CITRON",
        "category": "Ancient Citrus",
        "hint": "Ancient large fragrant citrus fruit with an extraordinarily thick, white inner rind.",
        "extraHint": "One of the three original ancestral citrus types; candied peel is used in fruitcakes."
      },
      {
        "word": "CLUSTER",
        "category": "Hanging Bunch",
        "hint": "Group of fruits growing or hanging closely together on a single stem or twig.",
        "extraHint": "Characteristic growth habit of table grapes, cherry tomatoes, and redcurrants."
      },
      {
        "word": "COCKTAIL",
        "category": "Mandarin Pomelo",
        "hint": "Sweet, exceptionally juicy hybrid cross between Frua mandarin and Siamese Sweet pomelo.",
        "extraHint": "Lacks all bitterness, producing enormous quantities of fragrant sweet juice."
      },
      {
        "word": "COCONUT",
        "category": "Tropical Drupe",
        "hint": "Large fibrous drupe harvested from palm trees providing water, milk, and white meat.",
        "extraHint": "Bobs across ocean currents for months before washing ashore on distant tropical atolls."
      },
      {
        "word": "COMICE",
        "category": "Gourmet Dessert Pear",
        "hint": "Chubby, round pear heralded as the sweetest and juiciest of all pear varieties.",
        "extraHint": "Known as the 'Christmas pear'; prized in holiday gourmet fruit gift baskets."
      },
      {
        "word": "COMPOTE",
        "category": "Stewed Fruit",
        "hint": "Dessert of fruit stewed in a sugar syrup, often with spices like vanilla and clove.",
        "extraHint": "Gently cooked to soften fruit while preserving recognizable whole fruit pieces."
      },
      {
        "word": "CONCORD",
        "category": "Fox Grape",
        "hint": "Hardy North American grape variety with deep purple skin and slip-skin pulp.",
        "extraHint": "The signature grape providing the nostalgic flavor of Welch's grape jelly and juice."
      },
      {
        "word": "CORTLAND",
        "category": "Snow White Apple",
        "hint": "Sweet-tart heritage apple bred in New York famous for snow-white flesh.",
        "extraHint": "Flesh resists browning when sliced, making it ideal for fruit platters and salads."
      },
      {
        "word": "CORVINA",
        "category": "Amarone Grape",
        "hint": "The primary red grape variety in Italy's prestigious Amarone della Valpolicella.",
        "extraHint": "Grapes are dried on bamboo straw mats for months to concentrate sugars before fermentation."
      },
      {
        "word": "COWBERRY",
        "category": "Wild Lingonberry",
        "hint": "Small, edible bright red berry growing wild on dwarf tundra shrubs.",
        "extraHint": "Commonly known as lingonberry in Scandinavia; makes sweet tart condiments."
      },
      {
        "word": "CRENSHAW",
        "category": "Gourmet Casaba Hybrid",
        "hint": "Large, oblong winter melon with corrugated yellow-green skin and salmon flesh.",
        "extraHint": "A cross between Persian and Casaba melons celebrated for rich sweet perfume."
      },
      {
        "word": "CUCUMBER",
        "category": "Refreshing Gourd",
        "hint": "Cylindrical green fruit with high water content, crisp flesh, and cooling seeds.",
        "extraHint": "Botanically a berry; sliced into crisp garden salads or pickled in brine jars."
      },
      {
        "word": "CUPUACU",
        "category": "Chocolate Relative",
        "hint": "Large oval tropical fruit related to cacao with creamy, fragrant pulp.",
        "extraHint": "Tastes like a mix of chocolate, banana, and passionfruit; yields cupuacu butter."
      },
      {
        "word": "CURRANT",
        "category": "Cluster Berry",
        "hint": "Small, glossy berry growing in translucent hanging strands in red, black, and white.",
        "extraHint": "Blackcurrants have an intense earthy aroma and provide the base for crème de cassis."
      },
      {
        "word": "DAMSON",
        "category": "Tart Blue Plum",
        "hint": "Small, oval plum variety with dark blue-black skin and acidic astringent flesh.",
        "extraHint": "Prized for centuries in Britain for making damson jam, fruit cheeses, and damson gin."
      },
      {
        "word": "DASHERI",
        "category": "Sweet North Indian Mango",
        "hint": "Famous aromatic mango cultivar originating near Lucknow in Northern India.",
        "extraHint": "Sweet, fiberless pulp with an elongated shape and vibrant green-yellow skin."
      },
      {
        "word": "DEWBERRY",
        "category": "Trailing Bramble",
        "hint": "Wild trailing bramble berry closely related to blackberries that creeps along ground.",
        "extraHint": "Ripens earlier than upright blackberries, producing sweet purple-black fruits."
      },
      {
        "word": "DILLENIA",
        "category": "Elephant Apple",
        "hint": "Large, hard tropical fruit with overlapping thick fleshy sepals in India.",
        "extraHint": "Wild elephants feast on the fallen fruits in tropical riverbank forests."
      },
      {
        "word": "DOLCETTO",
        "category": "Sweet Little One",
        "hint": "Early-ripening Italian black grape yielding fruity, round, and dry red wines.",
        "extraHint": "Name translates to 'little sweet one' in Italian, referring to the sweet ripe grape berries."
      },
      {
        "word": "DRUPELET",
        "category": "Tiny Drupe",
        "hint": "One of the small individual stone fruit segments that make up an aggregate berry.",
        "extraHint": "Each tiny round bubble on a blackberry or raspberry contains its own miniature seed."
      },
      {
        "word": "DUNCAN",
        "category": "Heritage Grapefruit",
        "hint": "The oldest recognized grapefruit cultivar, famous for intense flavor and seeds.",
        "extraHint": "Named after AL Duncan; heralded by fruit connoisseurs for exceptional sweetness."
      },
      {
        "word": "DURIAN",
        "category": "King with Odor",
        "hint": "Spiky tropical fruit famous for intense, pungent sulfurous odor and rich custard flesh.",
        "extraHint": "Banned on public transit in Southeast Asia, yet revered by locals as the king of fruits."
      },
      {
        "word": "EGREMONT",
        "category": "English Russet Apple",
        "hint": "Small, round English dessert apple with textured golden-russet skin and nutty bite.",
        "extraHint": "Known as the Egremont Russet; pairs classically with sharp cheddar cheese."
      },
      {
        "word": "ELBERTA",
        "category": "Classic Yellow Peach",
        "hint": "Famous American heirloom peach variety with yellow flesh and red blush.",
        "extraHint": "Introduced in Georgia in 1870; the historic gold standard for canning peaches."
      },
      {
        "word": "EMPIRE",
        "category": "New York Apple",
        "hint": "Cross between McIntosh and Red Delicious bred at Cornell University in 1945.",
        "extraHint": "Possesses a dark red blush over green and sweet, juicy, crisp white flesh."
      },
      {
        "word": "ENDOCARP",
        "category": "Inner Pit",
        "hint": "The innermost layer of the pericarp of a fruit that directly surrounds seeds.",
        "extraHint": "Forms the hard, woody stone pit of a peach or the papery seed chamber of an apple."
      },
      {
        "word": "ENTOWEK",
        "category": "Red Wild Jackfruit",
        "hint": "Wild tropical fruit from Borneo featuring vibrant red, fleshy sweet arils.",
        "extraHint": "Grows deep in virgin rainforests, highly sought after by local indigenous foragers."
      },
      {
        "word": "EUREKA",
        "category": "Commercial Lemon",
        "hint": "The most widely cultivated commercial supermarket lemon in the Western world.",
        "extraHint": "Bears fruit year-round with bright yellow skin, acidic juice, and few seeds."
      },
      {
        "word": "EXOCARP",
        "category": "Outer Skin",
        "hint": "The outermost botanical layer of the pericarp of a fruit, forming the skin.",
        "extraHint": "Protects developing fruits from fungal infections, insects, and solar sunburn."
      },
      {
        "word": "FALLGLO",
        "category": "Autumn Tangerine",
        "hint": "Early-ripening tangerine hybrid cross of Bower mandarin and Temple tangelo.",
        "extraHint": "Harvested in October in Florida; deep orange skin with juicy tart-sweet flavor."
      },
      {
        "word": "FANTASIA",
        "category": "Freestone Nectarine",
        "hint": "Classic California yellow nectarine with brilliant red blush and melting flesh.",
        "extraHint": "Ripens in mid-summer; sweet and tangy with heavy juice yields."
      },
      {
        "word": "FEIJOA",
        "category": "Pineapple Guava",
        "hint": "Small green oval fruit native to South America with an intoxicating perfume aroma.",
        "extraHint": "Scooped with a spoon to eat the sweet, aromatic jelly center smelling of guava and mint."
      },
      {
        "word": "FORELLE",
        "category": "Trout Pear",
        "hint": "Small, sweet heirloom pear characterized by red freckles resembling a rainbow trout.",
        "extraHint": "One of the oldest European pear varieties, turning golden yellow with scarlet speckles."
      },
      {
        "word": "FOXBERRY",
        "category": "Mountain Cranberry",
        "hint": "Low-growing wild red berry fruit harvested across northern boreal forests.",
        "extraHint": "Another name for lingonberry; makes delicious preserves for roast game meats."
      },
      {
        "word": "FRUCTOSE",
        "category": "Fruit Sugar",
        "hint": "Simple ketonic monosaccharide sugar found naturally in honey, tree fruits, and berries.",
        "extraHint": "The sweetest of all naturally occurring carbohydrate sugars on Earth."
      },
      {
        "word": "FUERTE",
        "category": "Winter Avocado",
        "hint": "Historic California avocado cultivar with smooth green skin and rich creamy texture.",
        "extraHint": "The leading commercial avocado before being surpassed by the bumpy Hass variety."
      },
      {
        "word": "GANDARIA",
        "category": "Plum Mango",
        "hint": "Small Indonesian fruit looking like a miniature mango with an edible skin.",
        "extraHint": "The entire fruit including purple interior seed is eaten fresh or pickled."
      },
      {
        "word": "GARCINIA",
        "category": "Mangosteen Genus",
        "hint": "Genus of tropical evergreen trees producing sweet-sour fruits and gamboge resin.",
        "extraHint": "Includes mangosteen, kokum, and achachairu, rich in natural xanthone antioxidants."
      },
      {
        "word": "GOUBERRY",
        "category": "Silverberry Relative",
        "hint": "Small red berry speckled with silver dots growing on Elaeagnus bushes.",
        "extraHint": "Juicy, sweet-tart flavor with high lycopene content; eaten fresh or in jams."
      },
      {
        "word": "GRANNY",
        "category": "Green Tart Apple",
        "hint": "Crisp, bright green apple variety with a famously sharp, acidic punch.",
        "extraHint": "Discovered in Australia by Maria Ann Smith in 1868; the classic pie apple."
      },
      {
        "word": "GRENACHE",
        "category": "Sun-Loving Grape",
        "hint": "Late-ripening red grape variety thriving in hot Mediterranean climates like Rhone.",
        "extraHint": "Contributes sweet raspberry and white pepper notes to Chateauneuf-du-Pape blends."
      },
      {
        "word": "HABANERO",
        "category": "Lantern Pepper",
        "hint": "Small, fiery orange chili pepper with a distinctive fruity, floral heat.",
        "extraHint": "Ranges from 100,000 to 350,000 Scoville Heat Units; popular in Caribbean hot sauces."
      },
      {
        "word": "HARALSON",
        "category": "Cold Hardy Apple",
        "hint": "Tart, crisp winter apple bred by the University of Minnesota for harsh winters.",
        "extraHint": "Firm, juicy, and acid; stores exceptionally well into spring root cellars."
      },
      {
        "word": "HARDIRED",
        "category": "Cold-Hardy Nectarine",
        "hint": "Cold-hardy nectarine cultivar bred to withstand chilly northern winter freezes.",
        "extraHint": "Produces sweet, juicy yellow-fleshed fruit with deep red skin in home gardens."
      },
      {
        "word": "HAWTHORN",
        "category": "Thorny Berry",
        "hint": "Small red berry fruit growing on thorny hedgerow bushes across the countryside.",
        "extraHint": "Known as haws; used in Chinese candied skewers called tanghulu and heart tonics."
      },
      {
        "word": "HAZELNUT",
        "category": "Filbert Nut",
        "hint": "Rich, sweet spherical nut encased in a hard shell with a fringed outer husk.",
        "extraHint": "Pairs famously with cocoa to produce decadent chocolate-hazelnut spreads."
      },
      {
        "word": "HIMSAGAR",
        "category": "Bengal Mango",
        "hint": "Beloved mango cultivar from West Bengal and Bangladesh with silky fiberless pulp.",
        "extraHint": "A short-season culinary gem with rich golden interior and deep sweet flavor."
      },
      {
        "word": "HONEYDEW",
        "category": "Smooth Green Melon",
        "hint": "Round melon with a smooth, pale cream-green rind and sweet, pale green flesh.",
        "extraHint": "Sweet and aromatic; popular in fresh fruit salads and chilled breakfast melon bowls."
      },
      {
        "word": "HUDSON",
        "category": "Late Winter Cherry",
        "hint": "Very late-maturing sweet dark cherry variety discovered in Hudson Valley, New York.",
        "extraHint": "Extends the fresh cherry season into late summer with firm, sweet black fruit."
      },
      {
        "word": "IDARED",
        "category": "Idaho Red Apple",
        "hint": "Bright red winter apple bred in Moscow, Idaho, by crossing Jonathan and Wagener.",
        "extraHint": "Possesses crisp, fine-grained tart flesh that retains its shape in cooking."
      },
      {
        "word": "IVYGOURD",
        "category": "Tindora",
        "hint": "Small, smooth green vine fruit resembling a miniature cucumber in tropical Asia.",
        "extraHint": "Crisp and juicy; sliced into spicy stir-fries or eaten raw with dipping salts."
      },
      {
        "word": "JALAPENO",
        "category": "Classic Green Chili",
        "hint": "Medium-sized green chili pepper famous for moderate heat and crisp texture.",
        "extraHint": "Smoked and dried jalapenos are known culinarily as rich, smoky chipotle peppers."
      },
      {
        "word": "JICAMA",
        "category": "Yam Bean Fruit",
        "hint": "Starchy climbing vine that produces crisp, sweet, watery edible underground tubers.",
        "extraHint": "Sliced raw and dusted with chili powder and lime juice as a Mexican street snack."
      },
      {
        "word": "JONAGOLD",
        "category": "Golden-Jonathan Cross",
        "hint": "Large apple variety combining the sweet golden flavor of Golden Delicious with Jonathan tang.",
        "extraHint": "Features a lovely red blush over yellow skin and honeyed tart flesh."
      },
      {
        "word": "JONAMAC",
        "category": "Sweet Autumn Apple",
        "hint": "Cross between Jonathan and McIntosh bred in New York, ripening in early autumn.",
        "extraHint": "Features dark red skin with sweet, aromatic flesh reminiscent of both parents."
      },
      {
        "word": "JONATHAN",
        "category": "Classic American Apple",
        "hint": "Bright red heirloom apple with a lively, spicy, tart-sweet flavor balance.",
        "extraHint": "Discovered in Woodstock, New York, in the 1820s; fantastic for fresh apple sauce."
      },
      {
        "word": "JUJUBE",
        "category": "Chinese Date",
        "hint": "Sweet oval fruit that turns wrinkled and chewy like a date when fully dried.",
        "extraHint": "Cultivated in China for over 4,000 years; revered in traditional herbal medicine."
      },
      {
        "word": "KABOCHA",
        "category": "Japanese Pumpkin",
        "hint": "Sweet Japanese winter squash with dark knobby green rind and dense orange flesh.",
        "extraHint": "Sweeter than pumpkin with a fluffy, chestnut-like texture in tempura dishes."
      },
      {
        "word": "KABOSU",
        "category": "Japanese Green Citrus",
        "hint": "Juicy Japanese citrus fruit used like lemon juice to season grilled fish.",
        "extraHint": "Closely related to yuzu, harvested green to season sashimi and hot pot broths."
      },
      {
        "word": "KANDIS",
        "category": "Sour Garcinia",
        "hint": "Small, bright yellow wild fruit used across Indonesia as a souring condiment.",
        "extraHint": "Dried sliced rinds add fruity acidity to traditional Sumatran beef rendang."
      },
      {
        "word": "KASTURI",
        "category": "Borneo Black Mango",
        "hint": "Small wild mango endemic to southern Borneo with purple-black skin.",
        "extraHint": "Flesh is vibrant orange, fiberless, and celebrated for an intoxicating perfume aroma."
      },
      {
        "word": "KELEDANG",
        "category": "Bornean Orange Aril",
        "hint": "Rare tropical fruit native to Borneo with rough skin and bright orange flesh.",
        "extraHint": "Arils taste like a delicious sweet fusion of jackfruit, mango, and mangosteen."
      },
      {
        "word": "KEYLIME",
        "category": "Small Floridian Lime",
        "hint": "Small, spherical lime variety famous for intense aroma and tart yellow juice.",
        "extraHint": "The foundational ingredient of Florida's famous sweetened condensed milk Key Lime pie."
      },
      {
        "word": "KINNOW",
        "category": "Pakistani Citrus",
        "hint": "High-yield mandarin hybrid cultivated extensively in Punjab, Pakistan.",
        "extraHint": "Known for extraordinarily juicy pulp and sweet flavor, exported across the Middle East."
      },
      {
        "word": "KUMQUAT",
        "category": "Eat-Whole Citrus",
        "hint": "Small olive-sized oval citrus fruit eaten entirely whole, including sweet peel.",
        "extraHint": "The thin outer skin is deliciously sweet, while the inner juice vesicles are sour."
      },
      {
        "word": "KUNDANG",
        "category": "Plum Mango Fruit",
        "hint": "Small oval fruit native to Southeast Asia with bright orange edible skin.",
        "extraHint": "Young green fruits are pickled, while ripe orange fruits are sweet and eaten fresh."
      },
      {
        "word": "LANGRA",
        "category": "Vibrant Green Mango",
        "hint": "Legendary Indian mango that remains lime-green even when completely sweet and ripe.",
        "extraHint": "Originating in Varanasi; renowned for distinct citrus floral notes and silky texture."
      },
      {
        "word": "LANGSAT",
        "category": "Southern Asian Cluster",
        "hint": "Small oval fruit with thin beige skin that peels away to reveal sweet segments.",
        "extraHint": "Common street fruit across Thailand and Malaysia, sweet with gentle acidity."
      },
      {
        "word": "LAPINS",
        "category": "Jumbo Sweet Cherry",
        "hint": "Large, dark mahogany-red sweet cherry with firm, split-resistant flesh.",
        "extraHint": "Bred by crossing Van and Stella cherries; highly crack-resistant after summer rains."
      },
      {
        "word": "LIBERTY",
        "category": "Disease-Free Apple",
        "hint": "Crisp, tart-sweet red apple cultivar bred for exceptional natural disease resistance.",
        "extraHint": "Requires minimal pesticide spraying; beloved by organic homestead orchards."
      },
      {
        "word": "LIMEQUAT",
        "category": "Citrus Dwarf Hybrid",
        "hint": "Hybrid cross between a Key lime and a kumquat with sweet skin and sour juice.",
        "extraHint": "Small oval fruit eaten entirely whole, combining sweet rind and acidic juice."
      },
      {
        "word": "LISBON",
        "category": "Thorny Lemon Tree",
        "hint": "Cold-hardy lemon variety with smooth, thin skin and high acidic juice yields.",
        "extraHint": "Dense tree foliage protects lemons from frost and high desert summer winds."
      },
      {
        "word": "LONGAN",
        "category": "Dragon Eye",
        "hint": "Small round fruit with a thin brown shell and translucent flesh around a dark seed.",
        "extraHint": "Called 'dragon eye' in Cantonese because the black seed shines through translucent flesh."
      },
      {
        "word": "LOQUAT",
        "category": "Subtropical Pome",
        "hint": "Small oval golden-orange fruit native to China with sweet, tangy juicy flesh.",
        "extraHint": "Also known as Japanese plum; contains two to four smooth brown inner seeds."
      },
      {
        "word": "LUCUMA",
        "category": "Gold of the Incas",
        "hint": "Subtropical Andean fruit with bright yellow dry flesh tasting like maple syrup.",
        "extraHint": "The most popular ice cream flavor in Peru, dried into sweet nutrient-dense powder."
      },
      {
        "word": "LYCHEE",
        "category": "Sweet Soapberry",
        "hint": "Small tropical fruit with a rough pinkish-red shell and translucent sweet white aril.",
        "extraHint": "Native to southeastern China; celebrated for floral aroma and grape-like sweetness."
      },
      {
        "word": "MABOLO",
        "category": "Velvet Apple",
        "hint": "Tropical fruit with velvety reddish-brown fur skin and sweet, dry cheese-like flesh.",
        "extraHint": "Known as velvet persimmon; native to the Philippines with dark ebony wood."
      },
      {
        "word": "MAGNESS",
        "category": "Blight-Resistant Pear",
        "hint": "High-quality dessert pear bred by USDA for exceptional fire blight resistance.",
        "extraHint": "Rich, aromatic, melting sweet flesh with almost no grit cells in the pulp."
      },
      {
        "word": "MALBEC",
        "category": "Argentine Grape",
        "hint": "Purple grape variety celebrated in Argentina for plush blackberry and cocoa flavors.",
        "extraHint": "Thrives in high-altitude vineyards of Mendoza beneath the snowy Andes."
      },
      {
        "word": "MALLIKA",
        "category": "Citrus Mango Hybrid",
        "hint": "Indian mango hybrid combining Neelum and Dasheri with notes of citrus and melon.",
        "extraHint": "Features fiberless, vibrant orange flesh with an exceptionally rich dessert flavor."
      },
      {
        "word": "MANDARIN",
        "category": "Small Citrus",
        "hint": "Small, easy-to-peel sweet citrus fruit with distinct loose pebbled skin.",
        "extraHint": "Traditional symbol of abundance and good fortune during Lunar New Year feasts."
      },
      {
        "word": "MAPRANG",
        "category": "Sweet Mango Plum",
        "hint": "Thai fruit resembling a miniature mango with sweet, juicy orange pulp.",
        "extraHint": "Entire fruit including skin is eaten fresh, tasting like mango with a hint of plum."
      },
      {
        "word": "MARANG",
        "category": "Fragrant Wild Fruit",
        "hint": "Tropical fruit native to Borneo and the Philippines covered in soft spines.",
        "extraHint": "Once cracked open, emits a sweet scent and reveals snow-white melting arils."
      },
      {
        "word": "MAROLO",
        "category": "Savanna Custard Fruit",
        "hint": "Large Brazilian savanna fruit with thick green rind and sweet yellow pulp.",
        "extraHint": "Emits a powerful fruity aroma that perfumes entire rooms when fully ripe."
      },
      {
        "word": "MARULA",
        "category": "African Tree Fruit",
        "hint": "Golden-yellow African fruit with a tart flavor rich in Vitamin C.",
        "extraHint": "A favorite feast for African elephants; fermented to make famous Amarula liqueur."
      },
      {
        "word": "MAYPOP",
        "category": "Wild Passionflower",
        "hint": "Hardy purple passionflower fruit native to the southeastern United States.",
        "extraHint": "Named 'maypop' because the hollow fruits pop loudly when stepped on."
      },
      {
        "word": "MCINTOSH",
        "category": "Ruby Red Apple",
        "hint": "Classic red-and-green apple with tender, juicy white flesh and tart flavor.",
        "extraHint": "Discovered in Ontario in 1811; the namesake of Apple's Macintosh computer."
      },
      {
        "word": "MEDLAR",
        "category": "Ancient Fruit",
        "hint": "Brown pome fruit eaten in winter after undergoing a soft bletting decay process.",
        "extraHint": "Popular across medieval Europe; develops a spiced apple butter flavor when bletted."
      },
      {
        "word": "MELOGOLD",
        "category": "Sweet Citrus Cross",
        "hint": "Triploid citrus hybrid cross between a pomelo and grapefruit bred in California.",
        "extraHint": "Sweeter and milder than standard grapefruit with thinner peel than pomelos."
      },
      {
        "word": "MELROSE",
        "category": "Ohio State Apple",
        "hint": "The official State Apple of Ohio, bred by crossing Jonathan and Red Delicious.",
        "extraHint": "Heavy winter apple that develops a rich, sweet, honey-like flavor in storage."
      },
      {
        "word": "MERLOT",
        "category": "Plum Wine Grape",
        "hint": "Popular dark blue wine grape variety prized for soft, luscious plum flavors.",
        "extraHint": "Its name derives from the French word for blackbird; pairs smoothly with food."
      },
      {
        "word": "MESOCARP",
        "category": "Middle Flesh",
        "hint": "The middle fleshy layer of the pericarp of a fruit, between exocarp and endocarp.",
        "extraHint": "Forms the thick, succulent, sweet edible part of peaches, mangoes, and plums."
      },
      {
        "word": "MESQUITE",
        "category": "Desert Bean Pod",
        "hint": "Sweet, golden seed pod harvested from drought-hardy desert mesquite trees.",
        "extraHint": "Ground into naturally sweet, gluten-free flour with caramel and molasses notes."
      },
      {
        "word": "METEOR",
        "category": "Cold-Hardy Tart Cherry",
        "hint": "Spur-type sour cherry bred in Minnesota to survive harsh sub-zero prairie winters.",
        "extraHint": "Produces large, bright red cherries with clear juice and small pits for pies."
      },
      {
        "word": "METHLEY",
        "category": "Sweet Early Plum",
        "hint": "Early-ripening Japanese plum with reddish-purple skin and juicy sweet red flesh.",
        "extraHint": "Heavy producer in early summer; delicious eaten fresh right off the branch."
      },
      {
        "word": "MINNEOLA",
        "category": "Honeybell Tangelo",
        "hint": "Famous bell-shaped citrus hybrid of Darcy tangerine and Duncan grapefruit.",
        "extraHint": "Prized for juicy sweetness and prominent raised neck; harvested in January."
      },
      {
        "word": "MONSTERA",
        "category": "Swiss Cheese Fruit",
        "hint": "Elongated cone fruit from Monstera deliciosa tasting of banana and pineapple.",
        "extraHint": "Must be eaten only when green scales naturally fall off to avoid oxalates."
      },
      {
        "word": "MOONGLOW",
        "category": "Early Blight Pear",
        "hint": "Large yellow-bronze pear with soft, juicy white flesh and mild sweet aroma.",
        "extraHint": "Excellent for home canning, salads, and fresh eating straight from the tree."
      },
      {
        "word": "MOORPARK",
        "category": "Heirloom Apricot",
        "hint": "Historic English apricot variety celebrated for exceptional rich perfume flavor.",
        "extraHint": "Cultivated since 1688 at Moor Park; renowned as one of the finest dessert apricots."
      },
      {
        "word": "MOREAU",
        "category": "French Sweet Cherry",
        "hint": "Early-season dark sweet French cherry with firm, heart-shaped black fruit.",
        "extraHint": "One of the earliest sweet cherries to hit farmers markets across southern France."
      },
      {
        "word": "MORICHE",
        "category": "Mauritia Palm Fruit",
        "hint": "Scaly oval fruit harvested from the buriti palm tree across Amazonian swamps.",
        "extraHint": "Packed with Vitamin A; eaten fresh or pressed into golden cosmetic buriti oil."
      },
      {
        "word": "MULBERRY",
        "category": "Tree Berry",
        "hint": "Sweet, elongated aggregate berry growing on deciduous Morus trees.",
        "extraHint": "Silkworm caterpillars feed exclusively on the leaves of the white mulberry tree."
      },
      {
        "word": "MURCOTT",
        "category": "Honey Tangerine",
        "hint": "Sweet late-season mandarin-orange hybrid known as the Honey Tangerine.",
        "extraHint": "Rich in sugars and juice; the foundation of late winter Florida citrus sales."
      },
      {
        "word": "MUSCAT",
        "category": "Ancient Perfume Grape",
        "hint": "Ancient grape family renowned for its distinctive, sweet, unctuous floral grape scent.",
        "extraHint": "One of the oldest domesticated grape varieties on Earth, dating back to antiquity."
      },
      {
        "word": "NEBBIOLO",
        "category": "Piedmont King",
        "hint": "Noble Italian grape variety behind the prestigious Barolo and Barbaresco wines.",
        "extraHint": "Named from 'nebbia' (fog) for the dense autumn mists shrouding Piedmont hills."
      },
      {
        "word": "NECTAR",
        "category": "Sweet Liquid",
        "hint": "Sugary fluid secreted by plants within flowers to encourage pollinator visits.",
        "extraHint": "Bees collect floral nectar and transform it into rich golden honeycombs."
      },
      {
        "word": "NEELUM",
        "category": "South Indian Mango",
        "hint": "Late-season Indian mango cultivar renowned for smooth floral aroma and sweet pulp.",
        "extraHint": "Bears heavy yields annually, highly prized for long shelf life during transit."
      },
      {
        "word": "NUTMEG",
        "category": "Aromatic Seed",
        "hint": "Fragrant inner seed of a yellow tropical peach-like fruit on Myristica trees.",
        "extraHint": "Grated freshly over custards, eggnog, pumpkin pies, and béchamel sauces."
      },
      {
        "word": "OLALLIE",
        "category": "California Blackberry",
        "hint": "Blackberry hybrid bred in Oregon in 1935 and popularized in sunny California.",
        "extraHint": "Produces sweet, glossy black berries prized for fresh crumbles and preserves."
      },
      {
        "word": "ORANGE",
        "category": "Citrus Fruit",
        "hint": "Round citrus fruit famous for vibrant orange color and sweet, tangy juice.",
        "extraHint": "Rich in immune-boosting Vitamin C; segmented pulp enclosed in an aromatic zest peel."
      },
      {
        "word": "ORCHARD",
        "category": "Fruit Grove",
        "hint": "Intentional planting of trees or shrubs maintained for food fruit production.",
        "extraHint": "Encompasses commercial apple, cherry, peach, pear, and citrus groves."
      },
      {
        "word": "ORLANDO",
        "category": "Early Tangelo",
        "hint": "Mild, sweet citrus hybrid of tangerine and grapefruit with cupped leaves.",
        "extraHint": "One of the earliest tangelos to mature in autumn, offering mild sweet juice."
      },
      {
        "word": "PACKHAM",
        "category": "Triumph Pear",
        "hint": "Large, bumpy green pear variety with sweet, exceptionally juicy white flesh.",
        "extraHint": "Bred in Australia in 1896; retains its green color even when fully ripe and sweet."
      },
      {
        "word": "PALMER",
        "category": "Late Season Red Mango",
        "hint": "Large, elongated mango variety with red-purple skin and smooth sweet pulp.",
        "extraHint": "Widely cultivated in Brazil for international export during northern winter months."
      },
      {
        "word": "PAPAYA",
        "category": "Tropical Melon",
        "hint": "Large tropical fruit with sweet salmon-pink flesh and peppery black round seeds.",
        "extraHint": "Contains papain, a natural proteolytic enzyme used as a meat tenderizer."
      },
      {
        "word": "PAWPAW",
        "category": "American Custard Fruit",
        "hint": "The largest edible fruit native to North America, growing wild in river valleys.",
        "extraHint": "Features creamy golden-yellow custard flesh tasting like banana, mango, and melon."
      },
      {
        "word": "PECTIN",
        "category": "Natural Gelling",
        "hint": "Soluble gelatinous polysaccharide found in ripe fruits used to set jams.",
        "extraHint": "Apples, quinces, and citrus rinds are naturally high in jam-setting pectin."
      },
      {
        "word": "PEDALAI",
        "category": "Bornean Forest Fruit",
        "hint": "Wild tropical rainforest tree fruit native to Borneo with orange-red flesh.",
        "extraHint": "Arils are sweet and fragrant, while seeds can be roasted like chestnuts."
      },
      {
        "word": "PEPPER",
        "category": "Capsicum Fruit",
        "hint": "Fleshy hollow fruit ranging from sweet bell peppers to fiery habaneros.",
        "extraHint": "Botanically berries; available in vibrant green, yellow, orange, and red colors."
      },
      {
        "word": "PERICARP",
        "category": "Fruit Wall",
        "hint": "The entire wall of a fruit developed from the ovary wall enclosing the seeds.",
        "extraHint": "Composed of three distinct layers: the outer exocarp, mesocarp, and inner endocarp."
      },
      {
        "word": "PHYSALIS",
        "category": "Cape Gooseberry",
        "hint": "Bright orange berry enclosed within a delicate, papery lantern-like calyx.",
        "extraHint": "Also called goldenberry; provides sweet-tart floral flavor to tarts and dipping chocolates."
      },
      {
        "word": "PINKLADY",
        "category": "Cripps Pink Apple",
        "hint": "Trademarked crisp apple variety with a distinctive blushing pink skin and fizz tartness.",
        "extraHint": "The first apple to be marketed under a brand name, requiring long sun exposure."
      },
      {
        "word": "PIPPIN",
        "category": "Newtown Apple",
        "hint": "Historic American green-yellow apple grown by George Washington and Thomas Jefferson.",
        "extraHint": "Exported to Queen Victoria; renowned for intense complex acidity and cider quality."
      },
      {
        "word": "PITAHAYA",
        "category": "Central Cactus Fruit",
        "hint": "Vibrant cactus fruit with white or magenta pulp and edible black seeds.",
        "extraHint": "Harvested from climbing night-blooming cereus cacti in tropical climates."
      },
      {
        "word": "PITOMBA",
        "category": "Amazonian Fruit",
        "hint": "Small, bright yellow fruit native to Brazil with juicy, sweet-tart pulp.",
        "extraHint": "Popular in northeastern Brazil; eaten fresh or blended into chilled juices."
      },
      {
        "word": "PLANTAIN",
        "category": "Cooking Banana",
        "hint": "Starchy, firm banana variety used as a staple vegetable in tropical cooking.",
        "extraHint": "Cooked green as savory chips or fried when ripe and black as sweet maduros."
      },
      {
        "word": "POBLANO",
        "category": "Ancho Pepper",
        "hint": "Large, mild dark green chili pepper with rich, earthy, savory vegetable flavor.",
        "extraHint": "The classic pepper stuffed for chiles rellenos; dried poblanos are called ancho chilies."
      },
      {
        "word": "POLLEN",
        "category": "Floral Dust",
        "hint": "Fine powdery substance consisting of microscopic pollen grains produced by flowers.",
        "extraHint": "Transferred by bees between blossoms to initiate fruit development and seed growth."
      },
      {
        "word": "POMACE",
        "category": "Fruit Residue",
        "hint": "The solid remains of fruit after pressing for juice, cider, or winemaking.",
        "extraHint": "Consists of skins, seeds, and pulp; often distilled into pomace brandies like grappa."
      },
      {
        "word": "POMELO",
        "category": "Giant Citrus",
        "hint": "The largest of all citrus fruits, featuring a very thick rind and sweet, mild pulp.",
        "extraHint": "Ancestor of the modern grapefruit, native to Southeast Asia and Malaysia."
      },
      {
        "word": "PONKAN",
        "category": "Chinese Honey Citrus",
        "hint": "High-quality loose-skin mandarin variety widely grown throughout Asia.",
        "extraHint": "Sweet, aromatic, and juicy with an open puffy rind that peels in one piece."
      },
      {
        "word": "PRESERVE",
        "category": "Jammed Fruit",
        "hint": "Preparation of whole or chopped fruit cooked with sugar until thickened.",
        "extraHint": "Preserves the summer fruit harvest for enjoyment throughout chilly winter months."
      },
      {
        "word": "PROSECCO",
        "category": "Sparkling Glera",
        "hint": "Sparkling Italian wine crafted from the Glera grape in the Veneto region.",
        "extraHint": "Celebrated for fresh, floral bubbles with notes of green apple and white peach."
      },
      {
        "word": "PUMPKIN",
        "category": "Autumn Squash",
        "hint": "Round, ribbed orange winter squash celebrated in autumn pies and jack-o-lanterns.",
        "extraHint": "Rich in Vitamin A; seeds can be roasted into crunchy, protein-rich pepitas."
      },
      {
        "word": "QUINCE",
        "category": "Aromatic Pome",
        "hint": "Hard, knobby golden-yellow pome fruit with an intense floral perfume aroma.",
        "extraHint": "Too astringent to eat raw; simmers into pink paste and fragrant quince jelly."
      },
      {
        "word": "RAINIER",
        "category": "Golden Yellow Cherry",
        "hint": "Premium cherry cultivar with golden-yellow skin blushing bright pink and sweet honey flesh.",
        "extraHint": "Bred in Washington State; possesses higher sugar brix than red sweet cherries."
      },
      {
        "word": "RAISIN",
        "category": "Dried Grape",
        "hint": "Sweet dried grape produced by dehydrating table grapes in natural sunshine.",
        "extraHint": "Concentrates natural grape sugars into chewy, energy-dense baking ingredients."
      },
      {
        "word": "RAMBAI",
        "category": "Cluster Fruit",
        "hint": "Small, round tropical fruit hanging in long strings from tree trunks.",
        "extraHint": "Features translucent sweet-sour flesh divided into three to five segments."
      },
      {
        "word": "RAMBUTAN",
        "category": "Hairy Tropical Fruit",
        "hint": "Red tropical fruit covered in soft, pliable hair-like spines called spinterns.",
        "extraHint": "Name derives from the Malay word for 'hair'; reveals a sweet, translucent jelly aril."
      },
      {
        "word": "RANGPUR",
        "category": "Mandarin Lime",
        "hint": "Highly acidic citrus hybrid with orange peel and flesh used as a lime substitute.",
        "extraHint": "Smells of mandarin and lime; used in Britain to flavor aromatic specialty gins."
      },
      {
        "word": "REDGLOBE",
        "category": "Jumbo Table Grape",
        "hint": "Large, round red table grape with firm, crisp flesh and large seeds.",
        "extraHint": "A festive favorite across Asian markets during Lunar New Year celebrations."
      },
      {
        "word": "REDGOLD",
        "category": "Late Season Nectarine",
        "hint": "Large freestone nectarine with golden yellow flesh and deep red skin blush.",
        "extraHint": "One of the most widely planted commercial nectarines, noted for firm shipping quality."
      },
      {
        "word": "REDHAVEN",
        "category": "Early Summer Peach",
        "hint": "Classic freestone peach with bright red skin over golden yellow flesh.",
        "extraHint": "High-yielding orchard variety celebrated for sweet dessert flavor and firm texture."
      },
      {
        "word": "RIESLING",
        "category": "Floral White Grape",
        "hint": "Aromatic white grape variety originating in Germany with piercing floral perfume.",
        "extraHint": "Capable of aging for decades; reflects vineyard terroir with notes of slate and lime."
      },
      {
        "word": "ROYALANN",
        "category": "Napoleon Cherry",
        "hint": "Large, sweet cherry with golden-yellow skin blushing crimson and firm flesh.",
        "extraHint": "The historic cultivar preferred for crafting gourmet maraschino cocktail cherries."
      },
      {
        "word": "RUSSET",
        "category": "Rough Skinned Apple",
        "hint": "Historic apple variety characterized by rough, sandpaper-like bronze skin.",
        "extraHint": "Possesses a rich, nutty, aromatic flavor prized for artisanal hard ciders."
      },
      {
        "word": "SANTOL",
        "category": "Cotton Fruit",
        "hint": "Tropical fruit with a thick rind and pillowy, cotton-like sweet-sour pulp.",
        "extraHint": "The translucent white pulp around the seeds is sucked for refreshing flavor."
      },
      {
        "word": "SATSUMA",
        "category": "Juicy Mandarin",
        "hint": "Cold-hardy, seedless mandarin variety with tender, exceptionally juicy pulp.",
        "extraHint": "Originating from Satsuma province in Japan; ripens very early in autumn."
      },
      {
        "word": "SATURN",
        "category": "Donut Peach",
        "hint": "Saucer-shaped flat peach variety with sunken center and creamy white sweet flesh.",
        "extraHint": "Also known as the bagel peach or UFO peach; easy to eat without peeling."
      },
      {
        "word": "SECKEL",
        "category": "Sugar Pear",
        "hint": "Tiny, chubby heirloom pear renowned as the sweetest of all pear varieties.",
        "extraHint": "Can be eaten whole in two bites, core and all; delicious pickled in spiced syrup."
      },
      {
        "word": "SEMILLON",
        "category": "Golden French Grape",
        "hint": "Golden-skinned grape variety used in Bordeaux white blends and sweet Sauternes.",
        "extraHint": "Susceptible to beneficial 'noble rot' fungus that concentrates sweet honeyed flavors."
      },
      {
        "word": "SERRANO",
        "category": "Mountain Chili Pepper",
        "hint": "Crisp, bright green chili pepper sharper and hotter than the classic jalapeno.",
        "extraHint": "Finely diced raw into fresh pico de gallo salsas and guacamole in Mexico."
      },
      {
        "word": "SERVICE",
        "category": "Juneberry",
        "hint": "Sweet purple-blue pome fruit closely resembling a blueberry in size and hue.",
        "extraHint": "Grows wild on Amelanchier trees; tastes of sweet blueberry and mild almond."
      },
      {
        "word": "SEVILLE",
        "category": "Bitter Marmalade Orange",
        "hint": "Bitter, sour orange variety prized for making traditional English orange marmalade.",
        "extraHint": "High natural pectin content and bitter essential oils produce perfect marmalade set."
      },
      {
        "word": "SHAMOUTI",
        "category": "Palestine Orange",
        "hint": "Oval, nearly seedless sweet orange with thick leathery peel and fragrant juice.",
        "extraHint": "The premier export orange of the Levant region throughout the 20th century."
      },
      {
        "word": "SHIRAZ",
        "category": "Australian Grape",
        "hint": "The Australian name for the Syrah grape, producing bold, peppery red wines.",
        "extraHint": "Old-vine Barossa Valley Shiraz wines are among the most celebrated globally."
      },
      {
        "word": "SKEENA",
        "category": "Firm Dark Cherry",
        "hint": "Late-season dark sweet cherry with kidney shape and exceptionally firm bite.",
        "extraHint": "Bred in Summerland, British Columbia, for long shelf life and sweet flavor."
      },
      {
        "word": "SOURSOP",
        "category": "Guanabana",
        "hint": "Large spiny green fruit with fibrous, creamy white pulp tasting of citrus and berry.",
        "extraHint": "Popular across the Caribbean for refreshing soursop smoothies and ice creams."
      },
      {
        "word": "SPARTAN",
        "category": "Sweet McIntosh Child",
        "hint": "Small, sweet, dark purple-red apple developed in British Columbia in 1936.",
        "extraHint": "A cross between McIntosh and Newtown Pippin with crisp, fragrant white flesh."
      },
      {
        "word": "SQUASH",
        "category": "Vine Fruit",
        "hint": "Fleshy gourd fruit cultivated in summer and winter varieties on creeping vines.",
        "extraHint": "Encompasses butternut, acorn, kabocha, pumpkin, and tender green zucchini."
      },
      {
        "word": "STANLEY",
        "category": "Prune Plum",
        "hint": "European plum cultivar with deep purple skin and dense, sweet yellow-green flesh.",
        "extraHint": "Freestone plum excellent for fresh eating, baking tarts, and drying into prunes."
      },
      {
        "word": "STELLA",
        "category": "Self-Fertile Sweet Cherry",
        "hint": "The first self-fertile sweet dark cherry variety bred in British Columbia.",
        "extraHint": "Allows gardeners to harvest sweet black cherries from a single backyard tree."
      },
      {
        "word": "STRAND",
        "category": "Berry String",
        "hint": "Slender cascading string of individual berries hanging together on a stem.",
        "extraHint": "Encountered when picking strings of glistening redcurrants and blackcurrants."
      },
      {
        "word": "SUDACHI",
        "category": "Tokushima Citrus",
        "hint": "Small, round green citrus fruit native to Tokushima Prefecture in Japan.",
        "extraHint": "Prizewinning Japanese sour citrus whose fragrant juice elevates udon and soba."
      },
      {
        "word": "SULTANA",
        "category": "Golden Raisin",
        "hint": "Pale amber dried seedless grape noted for juicy softness and sweet flavor.",
        "extraHint": "Treated with vegetable oil and warm air to preserve its golden translucent hue."
      },
      {
        "word": "SUNBURST",
        "category": "Sweet Florida Tangerine",
        "hint": "Dark orange, easy-to-peel tangerine hybrid bred by crossing two citrus crosses.",
        "extraHint": "Bears heavy crops in November and December; sweet with high juice volume."
      },
      {
        "word": "SUNCREST",
        "category": "Flavorful Heirloom Peach",
        "hint": "Celebrated heirloom yellow peach made famous in the book 'Epitaph for a Peach.'",
        "extraHint": "Possesses an authentic, old-fashioned balance of sweet peach sugars and acidity."
      },
      {
        "word": "SWEETIE",
        "category": "Israeli Green Citrus",
        "hint": "Sweet green citrus fruit bred in Israel by crossing grapefruit with pomelo.",
        "extraHint": "Also called Oroblanco; stays bright green even when fully sweet and ripe."
      },
      {
        "word": "SWEETSOP",
        "category": "Sugar Apple",
        "hint": "Sweet tropical fruit with knobby greenish-grey segmented rind and creamy pulp.",
        "extraHint": "Breaks apart easily when ripe, revealing sweet, fragrant sugar-custard segments."
      },
      {
        "word": "SYCONIUM",
        "category": "Fig Structure",
        "hint": "Fleshy hollow stem structure bearing multiple flowers internally like a fig.",
        "extraHint": "The unique inverted floral structure characteristic of the Ficus plant family."
      },
      {
        "word": "TABASCO",
        "category": "Louisiana Chili",
        "hint": "Small, intensely juicy chili pepper famous for flavoring iconic Tabasco pepper sauce.",
        "extraHint": "Aged for three years in white oak whiskey barrels with salt on Avery Island."
      },
      {
        "word": "TAMARIND",
        "category": "Sour Pod",
        "hint": "Brown bean-like pod enclosing sticky, tart pulp used in chutneys and curries.",
        "extraHint": "Provides the signature tangy sweet-sour note in Worcestershire sauce and pad thai."
      },
      {
        "word": "TANGELO",
        "category": "Citrus Hybrid",
        "hint": "Juicy citrus hybrid created by crossing a tangerine with a pomelo or grapefruit.",
        "extraHint": "Easily identified by a distinctive protruding neck knob at the stem end."
      },
      {
        "word": "TANGOR",
        "category": "Mandarin Orange Cross",
        "hint": "Citrus hybrid resulting from crossing a sweet orange with a mandarin.",
        "extraHint": "Features rich, complex sweet flavor and easily peeled aromatic rind."
      },
      {
        "word": "TANNAT",
        "category": "Uruguayan Red Grape",
        "hint": "Powerfully tannic red grape variety native to southwest France and championed in Uruguay.",
        "extraHint": "Known for having some of the highest antioxidant polyphenols of any wine grape."
      },
      {
        "word": "TAROCCO",
        "category": "Half-Blood Orange",
        "hint": "Italian blood orange variety renowned for exceptionally sweet, raspberry-scented juice.",
        "extraHint": "Features a subtle red blush in the flesh, hailed as one of the sweetest oranges in Italy."
      },
      {
        "word": "TARTARIC",
        "category": "Grape Acid",
        "hint": "White crystalline organic acid occurring naturally in many plants, especially grapes.",
        "extraHint": "Forms harmless 'wine diamonds' (potassium bitartrate) on corks in aged bottles."
      },
      {
        "word": "TAYBERRY",
        "category": "Scottish Hybrid",
        "hint": "Cross between a blackberry and raspberry bred in Dundee, Scotland, in 1979.",
        "extraHint": "Produces large, sweet, aromatic purple berries eaten fresh or made into jams."
      },
      {
        "word": "TEMPLE",
        "category": "Tangor Hybrid",
        "hint": "Naturally occurring tangor cross of mandarin and sweet orange found in Florida in 1896.",
        "extraHint": "Features spicy, complex sweet-tart juice and pebbled, easy-to-peel orange skin."
      },
      {
        "word": "THIMBLE",
        "category": "Velvet Wild Bramble",
        "hint": "Delicate, hemispherical wild red raspberry relative lacking prickly canes.",
        "extraHint": "Features velvety leaves; ripe berries separate easily like a tailor's thimble."
      },
      {
        "word": "THOMPSON",
        "category": "Seedless White Grape",
        "hint": "The most popular green seedless table grape and commercial raisin grape.",
        "extraHint": "Known as Sultanina in the Old World; accounts for vast commercial raisin output."
      },
      {
        "word": "TOMATO",
        "category": "Botanical Fruit",
        "hint": "Juicy red berry fruit widely cultivated and utilized in savory cooking.",
        "extraHint": "Botanically an ovary-derived berry; essential to Italian pastas and Mexican salsas."
      },
      {
        "word": "TOTAPURI",
        "category": "Parrot Beak Mango",
        "hint": "Mango with a prominent curved beak-like tip at its stem end, widespread in India.",
        "extraHint": "Used extensively in commercial fruit processing for mango pulp and spicy pickles."
      },
      {
        "word": "VALENCIA",
        "category": "Juice Orange",
        "hint": "Late-season sweet orange cultivar prized worldwide for abundant sweet juice.",
        "extraHint": "Bred in California; accounts for the majority of commercial orange juice production."
      },
      {
        "word": "VANILLA",
        "category": "Orchid Bean Pod",
        "hint": "Aromatic cured bean pod harvested from climbing tropical Vanilla orchids.",
        "extraHint": "The world's most popular sweet baking flavor; requires labor-intensive hand pollination."
      },
      {
        "word": "VIOGNIER",
        "category": "Floral White Grape",
        "hint": "Rare white grape variety renowned for opulent aromas of peach, apricot, and honeysuckle.",
        "extraHint": "The sole white grape permitted in the prestigious northern Rhone appellation of Condrieu."
      },
      {
        "word": "WALNUT",
        "category": "Brain-Shaped Drupe",
        "hint": "Nut-like seed of a drupe fruit with a wrinkled shell resembling human brain.",
        "extraHint": "Packed with alpha-linolenic omega-3 fatty acids that support brain health."
      },
      {
        "word": "WAMPEE",
        "category": "Citrus Relative",
        "hint": "Small, round yellow-brown fruit hanging in clusters on tropical Asian trees.",
        "extraHint": "Thin peel encloses translucent jelly-like flesh tasting of sweet grape and lime."
      },
      {
        "word": "WARREN",
        "category": "Gourmet Heirloom Pear",
        "hint": "Exquisite dessert pear heralded by food critics for silky, completely grit-free flesh.",
        "extraHint": "Discovered in Mississippi; sweet, spicy, and buttery with intense juice."
      },
      {
        "word": "WAXGOURD",
        "category": "Preserving Melon",
        "hint": "Large, oblong gourd fruit with mild white flesh and waxy protective coating.",
        "extraHint": "Absorbs rich broth flavors in traditional Chinese winter melon soup banquets."
      },
      {
        "word": "WEALTHY",
        "category": "Minnesota Pioneer",
        "hint": "First hardy apple variety developed in Minnesota by pioneer horticulturist Peter Gideon.",
        "extraHint": "Crimson-striped fruit with tender, juicy white flesh that revolutionized prairie orchards."
      },
      {
        "word": "WINESAP",
        "category": "Historic Heritage Apple",
        "hint": "Ancient American heirloom apple renowned for intense tartness and wine-like tang.",
        "extraHint": "Grown since colonial Virginia; celebrated for hard cider and winter cellaring."
      },
      {
        "word": "ZESTAR",
        "category": "Early Season Snap",
        "hint": "Early-ripening crisp apple cultivar with a lively sweet-tart kick and brown sugar note.",
        "extraHint": "Bred in Minnesota to offer autumn-quality crispness in early August."
      },
      {
        "word": "ZUCCHINI",
        "category": "Summer Squash",
        "hint": "Slender green summer squash harvested while young with soft, edible seeds and skin.",
        "extraHint": "Versatile culinary fruit sauteed, grilled, spiralized into noodles, or baked in bread."
      },
      {
        "word": "ZUTANO",
        "category": "Early Season Avocado",
        "hint": "Shiny, pear-shaped green avocado with light flesh and thin skin.",
        "extraHint": "Ripens very early in autumn; widely planted in orchards as a pollenizer for Hass trees."
      }
    ],
    "hard": [
      {
        "word": "ACHACHAIRU",
        "category": "Bolivian Amazon Fruit",
        "hint": "Bright orange tropical fruit related to mangosteen with thick protective rind.",
        "extraHint": "White pulp is delightfully sweet and acidic; celebrated annually at Bolivian fruit fairs."
      },
      {
        "word": "AGLIANICO",
        "category": "Barolo of the South",
        "hint": "Full-bodied red grape producing intense, long-aging wines in Southern Italy.",
        "extraHint": "Grown on volcanic soils around Mount Vulture with notes of black cherry and leather."
      },
      {
        "word": "AGUAYMANTO",
        "category": "Inca Golden Berry",
        "hint": "Small golden-orange berry enclosed inside a papery lantern husk.",
        "extraHint": "Celebrated across Peru as a nutrient-dense snack with tart sweet flavor."
      },
      {
        "word": "AMBERSWEET",
        "category": "Florida Hybrid",
        "hint": "Citrus fruit hybrid combining sweet orange, tangerine, and grapefruit genetics.",
        "extraHint": "Easy to peel like a tangerine with the sweet juice character of an orange."
      },
      {
        "word": "ARTOCARPUS",
        "category": "Tropical Mulberry Genus",
        "hint": "Genus of tropical trees encompassing breadfruit, jackfruit, cempedak, and marang.",
        "extraHint": "Produces massive, aggregate composite fruits with sweet edible fibrous arils."
      },
      {
        "word": "BEACHPLUM",
        "category": "Coastal Dunes Drupe",
        "hint": "Wild plum shrub native to sandy coastal dunes of eastern North America.",
        "extraHint": "Foraged on Cape Cod to craft famous ruby-hued wild beach plum jelly."
      },
      {
        "word": "BEARBERRY",
        "category": "Kinnikinnick",
        "hint": "Low-growing evergreen groundcover shrub producing shiny, scarlet red berries.",
        "extraHint": "A vital winter survival food for wild bears; leaves used in herbal smoking mixes."
      },
      {
        "word": "BEEFSTEAK",
        "category": "Giant Slicing Tomato",
        "hint": "Massive, juicy heirloom tomato variety that can weigh up to two pounds.",
        "extraHint": "Classic thick-sliced burger tomato with meaty flesh and traditional sweet-tart flavor."
      },
      {
        "word": "BIRDCHERRY",
        "category": "Hackberry Cousin",
        "hint": "Small, bitter black cherry fruit growing in hanging raceme clusters on wild trees.",
        "extraHint": "Eaten by wild birds; foraged in Scandinavian folklore for syrups and herbal wines."
      },
      {
        "word": "BITTERMELON",
        "category": "Medicinal Gourd",
        "hint": "Bumpy, wrinkled green gourd with an intensely bitter taste used in Asian cooking.",
        "extraHint": "Stir-fried with eggs or pork; celebrated for naturally moderating blood sugar levels."
      },
      {
        "word": "BLACKBERRY",
        "category": "Bramble Berry",
        "hint": "Aggregate dark purple fruit composed of tiny juicy drupelets on thorny canes.",
        "extraHint": "Picked wild from sprawling thorny bramble hedgerows throughout late summer."
      },
      {
        "word": "BLACKCHERRY",
        "category": "Wild Forest Drupe",
        "hint": "Large wild North American cherry tree producing small, bittersweet black cherries.",
        "extraHint": "Wood is prized for fine furniture; cherries flavor traditional wild cherry cough drops."
      },
      {
        "word": "BLACKCURRANT",
        "category": "Deep Tart Berry",
        "hint": "Pungent, deep purple-black currant loaded with exceptional Vitamin C levels.",
        "extraHint": "Widespread in Britain for Ribena cordial drinks, jams, and blackcurrant cordials."
      },
      {
        "word": "BLOODORANGE",
        "category": "Crimson Citrus",
        "hint": "Sweet orange variety with dark crimson, blood-colored interior flesh.",
        "extraHint": "Anthocyanin antioxidant pigments develop the deep crimson hue during chilly nights."
      },
      {
        "word": "BLUEBERRY",
        "category": "Antioxidant Berry",
        "hint": "Small, indigo-blue berry with sweet juicy flesh and a pale waxy bloom coating.",
        "extraHint": "Packed with anthocyanin antioxidants that support brain health and eyesight."
      },
      {
        "word": "BOYSENBERRY",
        "category": "Hybrid Bramble",
        "hint": "Large, deep maroon bramble berry created as a cross of blackberry and raspberry.",
        "extraHint": "Bred in California by Rudolph Boysen and popularized by Walter Knott at Knott's Berry Farm."
      },
      {
        "word": "BREADFRUIT",
        "category": "Starchy Island Staple",
        "hint": "Large starchy tropical fruit that smells like freshly baked bread when roasted.",
        "extraHint": "Historically central to Pacific island migrations and the infamous Mutiny on the Bounty."
      },
      {
        "word": "BUFFALOBERRY",
        "category": "Silver Native Berry",
        "hint": "Small wild scarlet berry growing on thorny silver-leaved shrubs in prairies.",
        "extraHint": "Traditionally served by Native American tribes as a relish for roasted bison."
      },
      {
        "word": "BULLACEPLUM",
        "category": "Wild English Plum",
        "hint": "Small, round wild plum native to Britain with dark blue or yellowish skin.",
        "extraHint": "Ripens late in October after first frosts sweeten the tart wild fruit."
      },
      {
        "word": "BUTTERNUT",
        "category": "Sweet Winter Squash",
        "hint": "Bell-shaped winter squash with tan skin and sweet, nutty, deep-orange flesh.",
        "extraHint": "Roasts to a creamy, velvety texture ideal for autumnal puréed soups."
      },
      {
        "word": "CACTUSFRUIT",
        "category": "Nopal Tuna",
        "hint": "Sweet, juicy fruit harvested from prickly pear cactus pads in arid deserts.",
        "extraHint": "Also called tuna in Spanish; packed with dietary fiber, calcium, and antioxidants."
      },
      {
        "word": "CALAMANSI",
        "category": "Philippine Lime",
        "hint": "Small, round citrus hybrid widespread in Filipino cuisine with tart orange pulp.",
        "extraHint": "Used to season pancit noodles, dipping sauces, and refreshing calamansi juices."
      },
      {
        "word": "CANTALOUPE",
        "category": "Netted Melon",
        "hint": "Sweet melon with netted corky rind and fragrant, soft salmon-orange flesh.",
        "extraHint": "European cantaloupes feature ribbed non-netted rinds; named after Cantalupo, Italy."
      },
      {
        "word": "CAPEGOOSEBERRY",
        "category": "Lantern Fruit",
        "hint": "Small round golden berry wrapped inside a protective bladder-like papery husk.",
        "extraHint": "Native to South America; loaded with Vitamin A, iron, and a citrus-plum tang."
      },
      {
        "word": "CARMENERE",
        "category": "Lost Bordeaux Grape",
        "hint": "Historic red grape thought extinct until rediscovered thriving in Chile in 1994.",
        "extraHint": "Displays distinctive savory notes of bell pepper, black cherry, and cocoa."
      },
      {
        "word": "CAVENDISH",
        "category": "Commercial Banana",
        "hint": "The dominant commercial export banana cultivar grown throughout the world.",
        "extraHint": "Replaced the Gros Michel banana in the 1950s after Panama disease decimated crops."
      },
      {
        "word": "CHARDONNAY",
        "category": "White Wine Grape",
        "hint": "Green-skinned grape variety originating in Burgundy producing rich white wines.",
        "extraHint": "Can express crisp green apple when unoaked or rich buttery vanilla when oaked."
      },
      {
        "word": "CHARENTAIS",
        "category": "French Gourmet Melon",
        "hint": "Small, ribbed French cantaloupe variety with intense sweet perfume and orange flesh.",
        "extraHint": "Prized by French gourmets for intoxicating floral fragrance and high sugar brix."
      },
      {
        "word": "CHARICHUELO",
        "category": "Amazonian Garcinia",
        "hint": "Yellow-orange tropical fruit native to South America with sweet translucent pulp.",
        "extraHint": "Related to mangosteen, offering a pleasant, thirst-quenching sweet-tart flavor."
      },
      {
        "word": "CHERIMOYA",
        "category": "Custard Apple",
        "hint": "Heart-shaped green fruit with scaly skin and creamy, sweet custard-like pulp.",
        "extraHint": "Mark Twain famously described the cherimoya as 'the most delicious fruit known to men.'"
      },
      {
        "word": "CHERRYPLUM",
        "category": "Myrobalan Plum",
        "hint": "Small round wild plum species native to Southeast Europe and Western Asia.",
        "extraHint": "Ripens in shades of yellow and crimson, used in Georgian tkemali sour sauces."
      },
      {
        "word": "CHIEFTAIN",
        "category": "Iowa Heirloom Apple",
        "hint": "Juicy, sweet-tart apple bred by crossing Jonathan and Delicious at Iowa State.",
        "extraHint": "Features bright red skin and pleasant aromatic crunch for late autumn snacking."
      },
      {
        "word": "CHOKEBERRY",
        "category": "Black Aronia",
        "hint": "Glossy dark purple-black berry known for astringent, dry mouthfeel when raw.",
        "extraHint": "Rich in polyphenols; processed into sweetened juices, fruit leather, and jams."
      },
      {
        "word": "CITRUMELO",
        "category": "Cold-Hardy Grapefruit",
        "hint": "Hardy hybrid rootstock cross between Duncan grapefruit and trifoliate orange.",
        "extraHint": "Confers deep root vitality and cold resistance to commercial citrus groves."
      },
      {
        "word": "CLAPPPEAR",
        "category": "Summer Pear",
        "hint": "Large, handsome summer pear with tender, melting, juicy white flesh.",
        "extraHint": "Ripens earlier than Bartlett pears, heralding the late-summer pear harvest."
      },
      {
        "word": "CLEMENTINE",
        "category": "Seedless Citrus",
        "hint": "Small, seedless mandarin hybrid with an easy-to-peel skin and sweet segments.",
        "extraHint": "A spontaneous natural cross between sweet orange and Mediterranean mandarin."
      },
      {
        "word": "CLEOPATRA",
        "category": "Spice Mandarin",
        "hint": "Small, acidic mandarin orange variety widely used as a disease-resistant rootstock.",
        "extraHint": "Native to India; bears small, ornamental orange fruits with spicy zest."
      },
      {
        "word": "CLOUDBERRY",
        "category": "Arctic Gold Berry",
        "hint": "Golden-amber aggregate berry growing in peat bogs across subarctic tundra.",
        "extraHint": "Known as 'Arctic gold'; prized in Nordic cuisine for rare liqueurs and cloudberry tarts."
      },
      {
        "word": "CORNELIAN",
        "category": "Dogwood Cherry",
        "hint": "Bright red, olive-shaped tart fruit growing on Cornus mas dogwood trees.",
        "extraHint": "Enjoyed across Eastern Europe and the Caucasus in jams, drinks, and cordials."
      },
      {
        "word": "CRABAPPLE",
        "category": "Wild Pome",
        "hint": "Small wild ancestral apple tree producing miniature, intensely tart pome fruits.",
        "extraHint": "High natural pectin content makes crabapples ideal for thickening homemade jams."
      },
      {
        "word": "CRANBERRY",
        "category": "Bog Berry",
        "hint": "Small, hard, tart red berry that grows on low creeping vines in acidic bogs.",
        "extraHint": "Commercial bogs are flooded with water so floating berries can be wet-harvested."
      },
      {
        "word": "CRESTHAVEN",
        "category": "Freestone Peach",
        "hint": "Large, firm yellow freestone peach with deep red blush and rich sweet flavor.",
        "extraHint": "Bred in Michigan; ideal for home canning and freezing without browning."
      },
      {
        "word": "CRISTALINA",
        "category": "Early Sweet Cherry",
        "hint": "Early dark sweet cherry variety bred in Summerland, British Columbia.",
        "extraHint": "Features dark red, glossy heart-shaped fruit with firm, sweet, luscious flesh."
      },
      {
        "word": "CROWBERRY",
        "category": "Black Arctic Berry",
        "hint": "Dwarf evergreen heath producing small, shiny black berries in cold tundra.",
        "extraHint": "Harvested by Inuit and Nordic foragers, frozen under winter snow for vitamins."
      },
      {
        "word": "DAMSONPLUM",
        "category": "Astringent Preserve",
        "hint": "Subspecies of European plum famous for oval purple-black fruit and sharp tartness.",
        "extraHint": "Simmered with sugar into rich, thick damson jam and ruby damson gin."
      },
      {
        "word": "DISCOVERY",
        "category": "Early English Apple",
        "hint": "Early-ripening bright crimson English dessert apple with crisp, juicy flesh.",
        "extraHint": "Introduced in Essex in 1949; delicious eaten straight from the tree in August."
      },
      {
        "word": "DRAGONFRUIT",
        "category": "Pitahaya",
        "hint": "Vibrant magenta cactus fruit with green scales and white or red speckled flesh.",
        "extraHint": "Mild, refreshing kiwi-like flavor; harvested from night-blooming Hylocereus cacti."
      },
      {
        "word": "ELDERBERRY",
        "category": "Dark Cluster Berry",
        "hint": "Tiny, dark purple berry growing in heavy hanging umbel clusters on elder bushes.",
        "extraHint": "Simmered into soothing immune-supporting syrups to treat winter colds and flus."
      },
      {
        "word": "ELEPHANTAPPLE",
        "category": "Dillenia Fruit",
        "hint": "Hard, large green tropical fruit with thick overlapping fleshy sepals.",
        "extraHint": "Used in Assamese curries and fish stews for its pleasant green apple sourness."
      },
      {
        "word": "FAIRCHILD",
        "category": "Early Mandarin Cross",
        "hint": "Richly flavored hybrid cross between Clementine mandarin and Orlando tangelo.",
        "extraHint": "Deep orange pebbled peel enclosing sweet, highly aromatic, richly pigmented pulp."
      },
      {
        "word": "FINGERLIME",
        "category": "Citrus Caviar",
        "hint": "Slender Australian rainforest fruit containing caviar-like translucent juice vesicles.",
        "extraHint": "When cut open, tiny round juice pearls pop with vibrant lime acidity on the palate."
      },
      {
        "word": "FLAVORTOP",
        "category": "Gourmet Nectarine",
        "hint": "Large, sweet yellow freestone nectarine with bright crimson skin and rich flavor.",
        "extraHint": "Consistently wins fruit tastings for its luscious balance of sugars and peach acids."
      },
      {
        "word": "GOJIBERRY",
        "category": "Wolfberry",
        "hint": "Bright orange-red ellipsoidal berry cultivated in Ningxia, China, hailed as a superfood.",
        "extraHint": "Dried like raisins; treasured in Chinese medicine to nourish eyes and longevity."
      },
      {
        "word": "GOLDENDELICIOUS",
        "category": "Sweet Yellow Apple",
        "hint": "Pale green to golden-yellow apple discovered in West Virginia in 1905.",
        "extraHint": "Naturally sweet, versatile apple suitable for fresh salads, baking, and cider."
      },
      {
        "word": "GOOSEBERRY",
        "category": "Translucent Berry",
        "hint": "Ribbed, translucent green or purple berry with a tart, refreshing flavor.",
        "extraHint": "Often baked into traditional summer crumbles, tarts, and fool desserts with cream."
      },
      {
        "word": "GRAPEFRUIT",
        "category": "Tart-Sweet Citrus",
        "hint": "Large, round citrus fruit known for slightly bitter, tart, and acidic pink flesh.",
        "extraHint": "So named because fruits grow in hanging clusters resembling giant bunches of grapes."
      },
      {
        "word": "GRAVENSTEIN",
        "category": "Danish Heritage Apple",
        "hint": "Celebrated heirloom apple with green-yellow skin washed in red stripes.",
        "extraHint": "Unsurpassed for homemade applesauce, fresh cider, and traditional pies."
      },
      {
        "word": "GREENGAGE",
        "category": "Sweet Green Plum",
        "hint": "Small, rounded plum variety with pale green or yellowish skin and rich syrup flesh.",
        "extraHint": "Regarded by French culinary chefs as one of the sweetest, finest dessert plums."
      },
      {
        "word": "HONEYCRISP",
        "category": "Juicy Apple",
        "hint": "Celebrated apple cultivar bred at University of Minnesota for explosive crispness.",
        "extraHint": "Features exceptionally large cells that rupture when bitten, releasing a burst of juice."
      },
      {
        "word": "HUCKLEBERRY",
        "category": "Wild Mountain Berry",
        "hint": "Small wild blue or purple berry native to mountain slopes of western North America.",
        "extraHint": "Grizzly bears feast on mountain huckleberries; cannot be easily cultivated commercially."
      },
      {
        "word": "JABUTICABA",
        "category": "Brazilian Grape Tree",
        "hint": "Purple-black grape-like fruit that grows directly on the trunk and bark of trees.",
        "extraHint": "Cauliflorous tree produces fruit directly from its wood, eaten fresh or fermented."
      },
      {
        "word": "JACKFRUIT",
        "category": "Colossal Tree Fruit",
        "hint": "The largest tree-borne fruit in the world, capable of weighing up to 80 pounds.",
        "extraHint": "Young unripe jackfruit has a meaty texture widely used as a plant-based pork substitute."
      },
      {
        "word": "KAFFIRLIME",
        "category": "Aromatic Citrus",
        "hint": "Bumpy, wrinkled green citrus fruit whose aromatic double-leaves season Thai curries.",
        "extraHint": "Leaves and zest provide an unmistakable citrus floral aroma to tom yum soups."
      },
      {
        "word": "LEMONDROP",
        "category": "Mangosteen Relative",
        "hint": "Bright yellow tropical fruit with sweet-tart pulp tasting like a lemon drop candy.",
        "extraHint": "Bears heavy crops in tropical home gardens, eaten fresh by slicing peel in half."
      },
      {
        "word": "LINGONBERRY",
        "category": "Boreal Berry",
        "hint": "Small, tart red berry that grows on low evergreen shrubs across northern Scandinavia.",
        "extraHint": "Traditionally served as a sweetened relish alongside Swedish meatballs and pancakes."
      },
      {
        "word": "LOGANBERRY",
        "category": "Heritage Hybrid",
        "hint": "Accidental hybrid cross of blackberry and raspberry discovered in California in 1881.",
        "extraHint": "Named after judge James Logan; produces elongated, deep red, pleasantly acidic berries."
      },
      {
        "word": "MANGOSTEEN",
        "category": "Queen of Fruits",
        "hint": "Purple tropical fruit with a thick bitter rind enclosing juicy, snow-white segments.",
        "extraHint": "Known as the 'Queen of Fruits' for exquisite sweet-tangy peach-strawberry flavor."
      },
      {
        "word": "MARIONBERRY",
        "category": "Oregon Blackberry",
        "hint": "Cultivar of blackberry bred in Marion County, Oregon, hailed as the king of blackberries.",
        "extraHint": "Celebrated for complex, rich, earthy flavor profile in artisan berry pies."
      },
      {
        "word": "MARMALADE",
        "category": "Citrus Preserve",
        "hint": "Fruit preserve made from the juice and peel of citrus fruits boiled with sugar.",
        "extraHint": "Traditionally made with bitter Seville oranges to achieve iconic bittersweet balance."
      },
      {
        "word": "MIRABELLE",
        "category": "French Petite Plum",
        "hint": "Small, sweet golden-yellow plum cultivated primarily in the Lorraine region of France.",
        "extraHint": "Celebrated for making Mirabelle eau-de-vie fruit brandy, fruit tarts, and preserves."
      },
      {
        "word": "MONTMORENCY",
        "category": "Pie Tart Cherry",
        "hint": "The gold standard sour pie cherry, featuring bright red skin and clear tart juice.",
        "extraHint": "Grown extensively in Michigan and Wisconsin for cherry pies, jams, and juices."
      },
      {
        "word": "MOURVEDRE",
        "category": "Bandol Red Grape",
        "hint": "Thick-skinned red grape producing dark, earthy, gamey wines in Provence and Rhone.",
        "extraHint": "Known as Mataro in Australia and California; thrives in scorching coastal sun."
      },
      {
        "word": "MUSCADINE",
        "category": "Southern Wild Grape",
        "hint": "Large, thick-skinned grape native to the southeastern US with musky sweetness.",
        "extraHint": "High in resveratrol; thrives in hot, humid Southern climates where other vines fail."
      },
      {
        "word": "MUSKMELON",
        "category": "Aromatic Melon",
        "hint": "Sweet, heavily scented melon species encompassing cantaloupes and honeydews.",
        "extraHint": "Named for the rich, musky sweet fragrance emitted when fruits reach peak ripeness."
      },
      {
        "word": "MYRTLEBERRY",
        "category": "Mediterranean Drupe",
        "hint": "Small, aromatic blue-black berry growing on fragrant wild myrtle shrubs.",
        "extraHint": "Macerated in alcohol in Sardinia to produce traditional Mirto digestif liqueur."
      },
      {
        "word": "NAMDOKMAI",
        "category": "Thai Dessert Mango",
        "hint": "Famous Thai mango cultivar with an elongated, sharply pointed teardrop shape.",
        "extraHint": "The classic mango served across Thailand alongside warm sweet coconut sticky rice."
      },
      {
        "word": "NECTARINE",
        "category": "Smooth Peach",
        "hint": "Genetic cultivar of the peach characterized by smooth, fuzz-free skin.",
        "extraHint": "A recessive peach gene produces smooth skin without altering peach juicy sweetness."
      },
      {
        "word": "NIJISSEIKI",
        "category": "Twentieth Century Pear",
        "hint": "The most famous green-skinned Asian pear in Japan, crisp, juicy, and refreshing.",
        "extraHint": "Round like an apple with delicate thin skin and sweet thirst-quenching juice."
      },
      {
        "word": "NORTHERNSPY",
        "category": "Vintage Pie Apple",
        "hint": "Famous 19th-century American pie apple with striped skin and tart, juicy flesh.",
        "extraHint": "Popular folk proverb says: 'Northern Spy, it's the only apple for pie!'"
      },
      {
        "word": "NORTHSTAR",
        "category": "Dwarf Pie Cherry",
        "hint": "Dwarf sour cherry tree bred at University of Minnesota for small home gardens.",
        "extraHint": "Bears heavy crops of dark red cherries with red flesh and delicious tart flavor."
      },
      {
        "word": "OLALLIEBERRY",
        "category": "California Bramble",
        "hint": "Blackberry hybrid bred in 1935 producing sweet, glossy black fruit in California.",
        "extraHint": "A staple of roadside fruit stands along Highway 1 in California during summer."
      },
      {
        "word": "OROBIANCO",
        "category": "White Citrus Cross",
        "hint": "Sweet white grapefruit-pomelo hybrid with thick rind and zero bitterness.",
        "extraHint": "Name means 'white gold' in Italian; segments can be eaten without adding sugar."
      },
      {
        "word": "ORTANIQUE",
        "category": "Jamaican Tangor",
        "hint": "Natural tangor hybrid discovered in Manchester, Jamaica, with rich sweet juice.",
        "extraHint": "Name combines 'Orange', 'Tangerine', and 'Unique'; possesses high sugar brix."
      },
      {
        "word": "PARSONBROWN",
        "category": "Historic Florida Orange",
        "hint": "Historic early-season Florida sweet orange discovered in 1865 near Webster.",
        "extraHint": "One of the foundational commercial varieties that built the Florida citrus trade."
      },
      {
        "word": "PASSIONFRUIT",
        "category": "Purple Tropics",
        "hint": "Round purple tropical fruit filled with aromatic orange pulp and crunchy seeds.",
        "extraHint": "Named by Spanish missionaries after the Passion of Christ due to floral symbolism."
      },
      {
        "word": "PERSIMMON",
        "category": "Sweet Sharon Fruit",
        "hint": "Glossy orange-red autumn fruit that turns honey-sweet when fully ripe.",
        "extraHint": "Astringent Hachiya types must soften completely to jelly; Fuyu types can be eaten crisp."
      },
      {
        "word": "PINEAPPLE",
        "category": "Compound Tropical Fruit",
        "hint": "Large tropical fruit with spiky crown, diamond rind, and sweet fibrous yellow pulp.",
        "extraHint": "A multiple fruit formed from dozens of individual fused flowers on a central core."
      },
      {
        "word": "PINKERTON",
        "category": "Long-Necked Avocado",
        "hint": "Elongated, pear-shaped avocado cultivar featuring heavy yields of creamy flesh.",
        "extraHint": "Possesses a very small inner seed, yielding exceptional edible flesh per fruit."
      },
      {
        "word": "PISTACHIO",
        "category": "Green Drupe Seed",
        "hint": "Small green culinary nut enclosed within a partially split beige shell.",
        "extraHint": "Native to Central Asia and the Middle East; prized for distinctive green tint."
      },
      {
        "word": "POINTEDGOURD",
        "category": "Parwal Gourd",
        "hint": "Small green gourd with pointed ends widely used in North Indian savory cooking.",
        "extraHint": "Stuffed with spiced fillings or cooked with potatoes in traditional curries."
      },
      {
        "word": "POMEGRANATE",
        "category": "Jeweled Arils",
        "hint": "Ancient round red fruit filled with hundreds of jewel-like ruby juice arils.",
        "extraHint": "Revered across Greek mythology and ancient Persia as a symbol of fertility and life."
      },
      {
        "word": "PRESIDENT",
        "category": "Giant English Plum",
        "hint": "Large, oval late-season European plum with deep purple skin and yellow flesh.",
        "extraHint": "Introduced in Hertfordshire, England, in 1901; excellent for baking and jams."
      },
      {
        "word": "PRICKLYFRUIT",
        "category": "Cactus Pear",
        "hint": "Spiny, sweet oval fruit growing on the flat pads of Opuntia prickly pear cacti.",
        "extraHint": "Ruby-red sweet interior is strained to make refreshing cactus aguas frescas."
      },
      {
        "word": "PRIMITIVO",
        "category": "Puglian Red Grape",
        "hint": "Deep, jammy red grape cultivated across Puglia in the heel of Italy.",
        "extraHint": "Produces hearty, full-bodied wines with high alcohol and sweet plum notes."
      },
      {
        "word": "RASPBERRY",
        "category": "Hollow Core Berry",
        "hint": "Delicate red or golden aggregate fruit that leaves its core receptacle behind when picked.",
        "extraHint": "Features a hollow cup shape when harvested; sweet with a vibrant floral acidity."
      },
      {
        "word": "REDCURRANT",
        "category": "Translucent Red Berry",
        "hint": "Translucent jewel-like red berries hanging in elegant cascading strings.",
        "extraHint": "Their sharp tartness makes redcurrants a classic garnish for roasts and summer puddings."
      },
      {
        "word": "REDDELICIOUS",
        "category": "Striped Classic Apple",
        "hint": "Historic American apple variety recognized by its conic shape and five base points.",
        "extraHint": "Discovered in Iowa in 1872; iconic deep red skin and mild sweet flavor."
      },
      {
        "word": "RIDGEGOURD",
        "category": "Angled Luffa",
        "hint": "Dark green ridged vegetable gourd widely cultivated across Southern Asia.",
        "extraHint": "Known as tori or luffa acutangula; peeled and simmered in spiced savory stews."
      },
      {
        "word": "ROSEAPPLE",
        "category": "Water Apple",
        "hint": "Bell-shaped tropical fruit with crisp, watery flesh and a delicate rosewater scent.",
        "extraHint": "Popular thirst-quencher across Southeast Asia; eaten raw with spiced salt."
      },
      {
        "word": "SALMONBERRY",
        "category": "Pacific Bramble",
        "hint": "Moisture-loving bramble berry native to Pacific Northwest forests.",
        "extraHint": "Produces golden-yellow to ruby-red berries shaped like raspberries, eaten by coastal bears."
      },
      {
        "word": "SALUSTIANA",
        "category": "Sweet Spanish Orange",
        "hint": "Early-ripening seedless sweet orange discovered in Enova, Spain, in 1950.",
        "extraHint": "Produces high yields of sweet, clear juice ideal for fresh morning squeezing."
      },
      {
        "word": "SANGIOVESE",
        "category": "Chianti Grape",
        "hint": "Italy's most planted red grape, the signature variety in Chianti Classico and Brunello.",
        "extraHint": "Produces savory wines with high acidity, firm tannins, and notes of sour red cherry."
      },
      {
        "word": "SANMARZANO",
        "category": "Italian Plum Tomato",
        "hint": "Famous Italian heirloom plum tomato grown in volcanic soils near Mount Vesuvius.",
        "extraHint": "Prized by master pizza chefs for balanced sweetness, low acidity, and rich sauce set."
      },
      {
        "word": "SAPODILLA",
        "category": "Chiku",
        "hint": "Brown tropical fruit with grainy, sweet pulp tasting like brown sugar and pear.",
        "extraHint": "The latex sap of the sapodilla tree was historically tapped to make natural chicle chewing gum."
      },
      {
        "word": "SASKATOON",
        "category": "Prairie Berry",
        "hint": "Native Canadian prairie pome fruit related to apples with deep purple skin.",
        "extraHint": "Celebrated across Western Canada in traditional sweet saskatoon berry pies."
      },
      {
        "word": "SAUVIGNON",
        "category": "Aromatic Grape",
        "hint": "Green grape variety renowned for vibrant herbal aromas and crisp citrus acidity.",
        "extraHint": "Sauvignon Blanc is famous in New Zealand for gooseberry and passionfruit notes."
      },
      {
        "word": "SEABUCKTHORN",
        "category": "Thorny Orange Berry",
        "hint": "Vibrant orange berry packed with oils and Vitamin C growing on spiny coastal shrubs.",
        "extraHint": "Juiced for tangy golden wellness tonics and used in high-end cosmetic skincare creams."
      },
      {
        "word": "SERVICEBERRY",
        "category": "Juneberry Pome",
        "hint": "Sweet purple pome fruit resembling blueberries hanging on small woodland trees.",
        "extraHint": "Tastes like sweet blueberry accented by a mild nutty hint of almond."
      },
      {
        "word": "SHINSEIKI",
        "category": "New Century Pear",
        "hint": "Bright yellow Asian pear cultivar with crisp, sweet, and mild white flesh.",
        "extraHint": "Ripens early in summer; name translates to 'New Century' in Japanese."
      },
      {
        "word": "SILVERBERRY",
        "category": "Wolf Willow Fruit",
        "hint": "Dry, mealy silver-scaled berry fruit growing on native prairie riverbank shrubs.",
        "extraHint": "A valuable winter wildlife forage for songbirds and small forest mammals."
      },
      {
        "word": "SNAKEGOURD",
        "category": "Serpentine Fruit",
        "hint": "Long, twisted green gourd fruit that resembles a dangling snake on vine trellises.",
        "extraHint": "Popular in Indian and Southeast Asian cuisine, cooked in curries and lentil dahls."
      },
      {
        "word": "SOURCHERRY",
        "category": "Baking Drupe",
        "hint": "Acidic species of Prunus cerasus cultivated for pies, jams, and brandies.",
        "extraHint": "Lower in sugar and higher in acid than sweet cherries, retaining vibrant red color."
      },
      {
        "word": "SOURORANGE",
        "category": "Seville Bitter",
        "hint": "Rough-skinned sour orange widely grown for aromatic peel, blossoms, and marmalade.",
        "extraHint": "Essential for Cuban mojo marinades, orange flower water, and curacao liqueurs."
      },
      {
        "word": "SPONGEGOURD",
        "category": "Luffa Vine",
        "hint": "Long green vine gourd whose fibrous interior vascular system forms bath luffas.",
        "extraHint": "Harvested young and tender as a sweet culinary squash in Asian stir-fries."
      },
      {
        "word": "STARAPPLE",
        "category": "Caimito",
        "hint": "Round purple or green tropical fruit revealing a star pattern when sliced across.",
        "extraHint": "Milky, sweet translucent pulp eaten chilled with a spoon in tropical gardens."
      },
      {
        "word": "STARFRUIT",
        "category": "Carambola",
        "hint": "Oblong tropical fruit with five prominent ridges that forms stars when sliced crosswise.",
        "extraHint": "Crisp, juicy flesh with a sweet-tart flavor; entire fruit including waxy skin is edible."
      },
      {
        "word": "STRAWBERRY",
        "category": "Aggregate Berry",
        "hint": "Sweet, heart-shaped red fruit with tiny seed-like achenes on outer skin.",
        "extraHint": "Botanically an aggregate accessory fruit whose seeds sit directly on red flesh."
      },
      {
        "word": "SWEETANGO",
        "category": "Crisp Minnesotan",
        "hint": "Modern apple cultivar bred from Honeycrisp and Zestar with explosive juicy snap.",
        "extraHint": "Features vibrant red coloring and notes of brown sugar, honey, and spice."
      },
      {
        "word": "SWEETCHERRY",
        "category": "Fresh Orchard Drupe",
        "hint": "Species of Prunus avium cultivated for delicious fresh hand snacking.",
        "extraHint": "Grown in temperate valleys globally; includes Bing, Rainier, and Stella types."
      },
      {
        "word": "TAHITILIME",
        "category": "Persian Lime",
        "hint": "The primary seedless commercial lime sold in Western grocery supermarkets.",
        "extraHint": "Triploid hybrid cross; larger than Key lime with smooth, dark green skin."
      },
      {
        "word": "TAMARILLO",
        "category": "Tree Tomato",
        "hint": "Egg-shaped subtropical fruit with red or golden skin and tangy, tart sweet pulp.",
        "extraHint": "Cut in half and scooped with a spoon; popular in New Zealand jams and chutneys."
      },
      {
        "word": "TANGERINE",
        "category": "Citrus Variety",
        "hint": "Deep orange variety of mandarin with a bright, sweet, and tangy flavor.",
        "extraHint": "Named after the historic Moroccan port city of Tangier from which it was shipped."
      },
      {
        "word": "TEMPRANILLO",
        "category": "Spanish Red Grape",
        "hint": "Spain's premier red wine grape, the backbone of Rioja and Ribera del Duero wines.",
        "extraHint": "Named from 'temprano' (early) because it ripens weeks earlier than most Spanish grapes."
      },
      {
        "word": "THIMBLEBERRY",
        "category": "Velvet Wild Fruit",
        "hint": "Delicate, hemispherical wild red aggregate fruit with broad, soft velvety leaves.",
        "extraHint": "Too fragile for commercial transport; relished by hikers along woodland trails."
      },
      {
        "word": "TOMATILLO",
        "category": "Husk Tomato",
        "hint": "Small green fruit encased inside a papery lantern husk related to groundcherries.",
        "extraHint": "The essential tart, tangy green base for authentic Mexican salsa verde sauces."
      },
      {
        "word": "TOMMYATKINS",
        "category": "Export Mango",
        "hint": "The most widely exported commercial mango cultivar in the global fruit trade.",
        "extraHint": "Prized by shippers for thick skin, disease resistance, and vibrant red blush."
      },
      {
        "word": "TORRONTES",
        "category": "Argentine White Grape",
        "hint": "Aromatic white grape native to Argentina with exuberant aromas of rose and jasmine.",
        "extraHint": "Produces dry, refreshingly crisp white wines in high Andean mountain valleys."
      },
      {
        "word": "VERMENTINO",
        "category": "Mediterranean Grape",
        "hint": "Crisp white grape variety thriving along Mediterranean coasts in Italy and France.",
        "extraHint": "Features notes of lime, green almond, and saline breezes from the sea."
      },
      {
        "word": "WATERMELON",
        "category": "Summer Melon",
        "hint": "Massive, refreshing melon with green striped rind and crisp, juicy red interior.",
        "extraHint": "Composed of over 91% water by weight; contains high levels of lycopene."
      },
      {
        "word": "WHITECURRANT",
        "category": "Albino Currant",
        "hint": "Sweet, translucent white cultivar of the redcurrant with lower acidity.",
        "extraHint": "Sweeter than redcurrants; prized as a fresh dessert berry and in champagne jellies."
      },
      {
        "word": "WHORTLEBERRY",
        "category": "Moorland Wild Berry",
        "hint": "Small dark blue wild berry native to European acidic heathlands and moors.",
        "extraHint": "Traditional British name for bilberry, harvested with wooden rakes for pies."
      },
      {
        "word": "WINEBERRY",
        "category": "Japanese Bramble",
        "hint": "Wild Asian raspberry relative with bristly red canes and sweet orange-red berries.",
        "extraHint": "The developing berry is enclosed in a sticky glandular calyx until ripe."
      },
      {
        "word": "WINTERMELON",
        "category": "Ash Gourd",
        "hint": "Large vine fruit with thick white flesh coated in a protective powdery white ash.",
        "extraHint": "Mild flesh absorbs rich flavors in savory Chinese soups, braises, and sweet tea."
      },
      {
        "word": "YOUNGBERRY",
        "category": "Deep Purple Bramble",
        "hint": "Hybrid cross between blackberry, raspberry, and dewberry bred in Louisiana.",
        "extraHint": "Sweeter and earlier than common blackberries with rich purple-black color."
      },
      {
        "word": "ZINFANDEL",
        "category": "Bramble Grape",
        "hint": "Red grape variety famous in California for jammy blackberry and pepper notes.",
        "extraHint": "Genetically identical to the Italian Primitivo and Croatian Crljenak Kastelanski."
      }
    ]
  },
  "sports": {
    "easy": [
      {
        "word": "ACE",
        "category": "Tennis Winner",
        "hint": "A legal serve that is not touched by the receiver, winning the point instantly.",
        "extraHint": "Master servers like John Isner and Pete Sampras built careers on aces."
      },
      {
        "word": "ARM",
        "category": "Throwing Limb",
        "hint": "The upper limb used by pitchers, quarterbacks, and javelin throwers to deliver throws.",
        "extraHint": "Scouts evaluate velocity, arm slot mechanics, and release angle in pitchers."
      },
      {
        "word": "BAG",
        "category": "Baseball Base",
        "hint": "Square canvas-covered cushion marking first, second, and third base on infield.",
        "extraHint": "Base runners slide headfirst or feet-first to touch the bag before tags."
      },
      {
        "word": "BALL",
        "category": "Spherical Object",
        "hint": "Round or spherical object kicked, thrown, hit, or bounced in games.",
        "extraHint": "Made of leather, rubber, plastic, or wound yarn with pressurized air centers."
      },
      {
        "word": "BMX",
        "category": "Bicycle Motocross",
        "hint": "Off-road bicycle racing and freestyle stunts performed on compact 20-inch bikes.",
        "extraHint": "Racers battle around dirt tracks with banked berms and massive jumping doubles."
      },
      {
        "word": "BOOT",
        "category": "Athletic Footwear",
        "hint": "Specialized footwear with ankle support and cleated studs for field traction.",
        "extraHint": "Soccer boots feature molded studs allowing players to change direction on wet grass."
      },
      {
        "word": "BOUT",
        "category": "Boxing Match",
        "hint": "A single competitive combat match between two boxers, wrestlers, or fencers.",
        "extraHint": "Championship boxing bouts typically consist of up to twelve three-minute rounds."
      },
      {
        "word": "BOW",
        "category": "Archery Weapon",
        "hint": "Flexible weapon used to propel feathered arrows toward distant targets.",
        "extraHint": "Draw weight is measured in pounds; types include recurve, longbow, and compound."
      },
      {
        "word": "BOXER",
        "category": "Pugilist Fighter",
        "hint": "Combat athlete who trains in striking with padded gloves inside a boxing ring.",
        "extraHint": "Masters jab timing, head movement, footwork angles, and defensive bob-and-weave."
      },
      {
        "word": "CAP",
        "category": "National Appearance",
        "hint": "Award or ceremonial cap given to an athlete for representing national team in a match.",
        "extraHint": "Footballers who represent their country one hundred times enter the Century Club."
      },
      {
        "word": "CLUB",
        "category": "Golf Implement",
        "hint": "Long-shafted implement with a specialized head used to strike golf balls.",
        "extraHint": "Includes woods, irons, wedges, and putters, limited to 14 clubs in a golf bag."
      },
      {
        "word": "COACH",
        "category": "Team Strategist",
        "hint": "Person responsible for training athletes, establishing game tactics, and calling plays.",
        "extraHint": "Analyzes game film, designs tactical formations, and conducts practice drills."
      },
      {
        "word": "CUP",
        "category": "Trophy Tournament",
        "hint": "Championship tournament or trophy awarded to victorious sports clubs.",
        "extraHint": "Includes prestigious competitions like the FA Cup, Stanley Cup, and World Cup."
      },
      {
        "word": "DARTS",
        "category": "Throwing Game",
        "hint": "Precision throwing game where small missiles are thrown at a circular dartboard.",
        "extraHint": "Players aim for the triple-20 bed to hit a perfect maximum score of 180 points."
      },
      {
        "word": "DASH",
        "category": "Short Sprint",
        "hint": "High-speed sprint race over a short distance like 40 yards or 100 meters.",
        "extraHint": "The 40-yard dash is the marquee speed measurement at the NFL scouting combine."
      },
      {
        "word": "DIVE",
        "category": "Water Entry",
        "hint": "Plunging headfirst or feet-first into water from a platform or springboard.",
        "extraHint": "Judged on takeoff height, mid-air twists, somersaults, and clean rip entries."
      },
      {
        "word": "DIVER",
        "category": "Aquatic Acrobat",
        "hint": "Athlete leaping into water while performing somersaults and aerial twists.",
        "extraHint": "Aims to enter water completely vertically with toes pointed and minimal splash."
      },
      {
        "word": "DRAW",
        "category": "Tie Outcome",
        "hint": "Contest ending with equal scores where neither competitor or team wins.",
        "extraHint": "Common result in chess matches, test cricket matches, and soccer league games."
      },
      {
        "word": "DUEL",
        "category": "One-on-One Contest",
        "hint": "Intense head-to-head athletic contest between two individual rivals.",
        "extraHint": "Features one-on-one battles between batter and pitcher or striker and goalie."
      },
      {
        "word": "DUNK",
        "category": "Above Rim Score",
        "hint": "Basketball shot where a player jumps and thrusts the ball directly down hoop.",
        "extraHint": "Pioneered in streetball and popularized by high-flying NBA superstars."
      },
      {
        "word": "FANS",
        "category": "Supporters",
        "hint": "Enthusiastic spectators cheering for their favorite athletes and sports clubs.",
        "extraHint": "Fill stadium bleachers, singing team anthems and waving colorful team banners."
      },
      {
        "word": "FOUL",
        "category": "Rule Violation",
        "hint": "Infraction of the rules of a game penalized by referees or game officials.",
        "extraHint": "Can result in free throws, penalty kicks, sin-bin suspensions, or ejections."
      },
      {
        "word": "GAME",
        "category": "Match Unit",
        "hint": "Contest played according to rules, or a scoring segment within tennis sets.",
        "extraHint": "Tennis players must win six games with a two-game margin to win a set."
      },
      {
        "word": "GATE",
        "category": "Slalom Marker",
        "hint": "Paired flexible poles through which downhill skiers must steer turns cleanly.",
        "extraHint": "Missing a gate results in immediate disqualification in Olympic slalom events."
      },
      {
        "word": "GEAR",
        "category": "Athletic Equipment",
        "hint": "Apparatus, protective equipment, and clothing used in athletic sports.",
        "extraHint": "Includes helmets, pads, cleats, uniforms, and gloves tailored for each sport."
      },
      {
        "word": "GOAL",
        "category": "Scoring Target",
        "hint": "Net or structure into which players aim to score points or goals.",
        "extraHint": "Guarded by goalkeepers in soccer, hockey, lacrosse, and water polo."
      },
      {
        "word": "GOLF",
        "category": "Club and Ball Sport",
        "hint": "Precision sport where players use clubs to hit balls into a series of holes.",
        "extraHint": "Played across 18 scenic holes; players strive to finish under par with fewest strokes."
      },
      {
        "word": "GRIP",
        "category": "Hand Hold",
        "hint": "Manner of holding a racket, bat, or golf club, or holding an opponent's gi.",
        "extraHint": "A secure grip prevents clubs slipping and maximizes wrist snap acceleration."
      },
      {
        "word": "GYM",
        "category": "Fitness Facility",
        "hint": "Facility equipped with weights, machines, and spaces for physical exercise.",
        "extraHint": "Short for gymnasium; where athletes lift weights, train cardio, and spar."
      },
      {
        "word": "HALF",
        "category": "Game Segment",
        "hint": "One of two equal playing periods comprising a regulation sporting match.",
        "extraHint": "Soccer matches consist of two 45-minute halves separated by halftime."
      },
      {
        "word": "HEAT",
        "category": "Preliminary Race",
        "hint": "Preliminary qualifying race where top finishers advance to semifinals or finals.",
        "extraHint": "Swimmers and sprinters compete in heats to seed lanes for championship finals."
      },
      {
        "word": "HEEL",
        "category": "Foot Strike",
        "hint": "The back part of the human foot below the ankle impacting ground in running.",
        "extraHint": "Runners transition between heel strikes, midfoot landings, and toe springs."
      },
      {
        "word": "HELM",
        "category": "Steering Tiller",
        "hint": "Tiller or wheel used to steer a sailing boat or racing yacht across waves.",
        "extraHint": "Helmsmen maintain course headings while coordinating jibes and sail trims."
      },
      {
        "word": "HOOP",
        "category": "Basketball Target",
        "hint": "Circular metal rim with an eighteen-inch diameter hanging a mesh net.",
        "extraHint": "Mounted ten feet above the court surface on a backboard for scoring."
      },
      {
        "word": "HORN",
        "category": "End of Period Buzzer",
        "hint": "Loud audible horn sounded to signal the conclusion of playing time in arenas.",
        "extraHint": "Hockey goal horns blast triumphantly whenever home teams score puck goals."
      },
      {
        "word": "IRON",
        "category": "Golf Club",
        "hint": "Golf club with a solid metal blade head used for accurate mid-range fairway shots.",
        "extraHint": "Numbered 1 through 9; higher numbers feature greater loft for higher trajectories."
      },
      {
        "word": "JOG",
        "category": "Gentle Running",
        "hint": "Form of running at a steady, gentle pace for recreational aerobic fitness.",
        "extraHint": "Improves cardiovascular endurance without placing extreme stress on knees."
      },
      {
        "word": "JUDO",
        "category": "Japanese Martial Art",
        "hint": "Modern Japanese martial art focused on throwing opponents to ground and pinning them.",
        "extraHint": "Founded in 1882 by Jigoro Kano; translates to 'the gentle way' in Japanese."
      },
      {
        "word": "JUMP",
        "category": "Vertical Leap",
        "hint": "Pushing off a surface into the air using muscular power in the legs.",
        "extraHint": "Measured in vertical jump tests for basketball, football, and volleyball scouts."
      },
      {
        "word": "KENDO",
        "category": "Bamboo Sword Fencing",
        "hint": "Modern Japanese martial art of sword-fighting using split bamboo shinai.",
        "extraHint": "Practitioners wear heavy protective bogu armor and strike with decisive kiai shouts."
      },
      {
        "word": "KICK",
        "category": "Foot Strike",
        "hint": "Striking a ball or opponent with the foot or lower leg with force.",
        "extraHint": "Fundamental action in soccer passing, football punts, and martial arts strikes."
      },
      {
        "word": "KNOT",
        "category": "Nautical Speed",
        "hint": "Unit of maritime speed equal to one nautical mile per hour used in sailing.",
        "extraHint": "Regatta sailors measure boat speed and wind velocity in nautical knots."
      },
      {
        "word": "LANE",
        "category": "Track or Pool Strip",
        "hint": "Marked linear corridor assigned to an individual runner, swimmer, or bowler.",
        "extraHint": "Olympic tracks feature eight to nine lanes with staggered starting staggered lines."
      },
      {
        "word": "LAPS",
        "category": "Completed Circuits",
        "hint": "Complete trips around a circular running track, swimming pool, or auto oval.",
        "extraHint": "Formula One races require drivers to complete 50 to 70 laps to take checkered flags."
      },
      {
        "word": "LAYUP",
        "category": "Close Range Basket",
        "hint": "One-handed basketball shot made off the backboard near the rim while driving.",
        "extraHint": "The fundamental high-percentage shot practiced by all basketball players."
      },
      {
        "word": "LEAD",
        "category": "First Position",
        "hint": "Position of being ahead of all other competitors during a sporting race.",
        "extraHint": "Lead runners set race pacing while conserving energy against wind resistance."
      },
      {
        "word": "LEAP",
        "category": "Explosive Bound",
        "hint": "Propelling oneself upward or forward off both feet into the air.",
        "extraHint": "Long jumpers leap into sand pits; basketball forwards leap for rim rebounds."
      },
      {
        "word": "LIFT",
        "category": "Weight Movement",
        "hint": "Raising a heavy barbell or dumbbell against gravity in resistance training.",
        "extraHint": "Olympic lifts include the explosive snatch and the clean-and-jerk."
      },
      {
        "word": "LINE",
        "category": "Court Boundary",
        "hint": "Chalk or painted boundary demarcating the active field of play in sports.",
        "extraHint": "Balls landing on the boundary line are called in in tennis and soccer."
      },
      {
        "word": "LOCK",
        "category": "Wrestling Hold",
        "hint": "Grappling maneuver that forces an opponent's joint beyond normal range of motion.",
        "extraHint": "Includes armbars, kneebars, and kimura locks forcing submission taps."
      },
      {
        "word": "LOSS",
        "category": "Defeat Result",
        "hint": "Result of a contest where an athlete or team is defeated by the opponent.",
        "extraHint": "Recorded in team standings alongside wins and draws throughout a season."
      },
      {
        "word": "LUGE",
        "category": "Feet-First Sledding",
        "hint": "High-speed winter sport where racers slide down an ice track lying supine on sleds.",
        "extraHint": "Athletes steer subtle calf presses on sled runners, reaching 85 mph feet-first."
      },
      {
        "word": "MARK",
        "category": "Starting Point",
        "hint": "Designated spot or line where athletes begin races, or catching an Aussie ball.",
        "extraHint": "Sprinters take their positions at starting blocks upon the command 'On your marks.'"
      },
      {
        "word": "MASK",
        "category": "Face Protector",
        "hint": "Protective cage or visor worn over the face to guard against flying pucks.",
        "extraHint": "Worn by baseball catchers, hockey goalies, fencers, and paintball competitors."
      },
      {
        "word": "MATE",
        "category": "Team Partner",
        "hint": "Fellow member of an athletic sports club working toward victory together.",
        "extraHint": "Teammates support one another through shared passing and defensive backup."
      },
      {
        "word": "MATS",
        "category": "Cushioned Floor",
        "hint": "Padded floor covering absorbing impacts in gymnastics, wrestling, and judo.",
        "extraHint": "Protects martial artists and gymnasts from traumatic falls and throws."
      },
      {
        "word": "MESH",
        "category": "Netting Material",
        "hint": "Interlaced network of cords forming the netting on goals, hoops, and rackets.",
        "extraHint": "Nylon mesh catches football field goals, basketball shots, and lacrosse balls."
      },
      {
        "word": "MILE",
        "category": "Distance Unit",
        "hint": "Imperial unit of distance equal to 5,280 feet, historic distance running event.",
        "extraHint": "Roger Bannister made history in 1954 by running the world's first sub-4-minute mile."
      },
      {
        "word": "MITT",
        "category": "Baseball Glove",
        "hint": "Padded leather glove with webbed pocket worn by baseball fielders.",
        "extraHint": "Catcher's mitts and first baseman mitts feature extra padding for fastballs."
      },
      {
        "word": "MOVE",
        "category": "Athletic Action",
        "hint": "Specific tactical maneuver or physical technique executed during a contest.",
        "extraHint": "Encompasses crossover dribbles, spinning back kicks, and defensive slide tackles."
      },
      {
        "word": "MVPS",
        "category": "Top Performers",
        "hint": "Most Valuable Player awards presented to the outstanding athlete in a league.",
        "extraHint": "Voted on by sports journalists and coaches at the conclusion of regular seasons."
      },
      {
        "word": "NETS",
        "category": "Cords Barrier",
        "hint": "Mesh barrier dividing courts or capturing balls behind goal frames.",
        "extraHint": "Suspended across tennis, volleyball, badminton, and pickleball courts."
      },
      {
        "word": "OAR",
        "category": "Rowing Lever",
        "hint": "Long wooden or carbon pole with a flat blade used to row boats through water.",
        "extraHint": "Pivots within an oarlock, acting as a second-class lever to propel crew shells."
      },
      {
        "word": "OPEN",
        "category": "Championship Event",
        "hint": "Tournament in which any competitor may enter regardless of professional status.",
        "extraHint": "Prestigious major championships include the US Open, British Open, and French Open."
      },
      {
        "word": "OVAL",
        "category": "Running Arena",
        "hint": "Elliptical running track or stadium field used in speed skating and Aussie football.",
        "extraHint": "Olympic speed skaters race counterclockwise around frozen 400-meter ice ovals."
      },
      {
        "word": "OVER",
        "category": "Cricket Six Balls",
        "hint": "Set of six consecutive legal deliveries bowled by a cricket bowler from one end.",
        "extraHint": "Bowlers alternate ends after each over while fielders rotate positions."
      },
      {
        "word": "PACE",
        "category": "Running Speed",
        "hint": "Rate of speed or tempo maintained by an athlete across an endurance contest.",
        "extraHint": "Pace rabbits lead marathons through early miles to set world record tempos."
      },
      {
        "word": "PACK",
        "category": "Racer Group",
        "hint": "Dense cluster of competing cyclists, runners, or wolves moving together.",
        "extraHint": "Cyclists inside the main peloton pack save up to 40% energy by drafting."
      },
      {
        "word": "PACT",
        "category": "Team Agreement",
        "hint": "Tactical mutual understanding between teammates or breakaway cycling riders.",
        "extraHint": "Breakaway riders agree to rotate turns taking the wind at the front of pace lines."
      },
      {
        "word": "PADEL",
        "category": "Enclosed Racket Sport",
        "hint": "Racket sport typically played in doubles on an enclosed glass-walled court.",
        "extraHint": "The ball can be played off glass enclosure walls, similar to squash with a net."
      },
      {
        "word": "PADS",
        "category": "Protective Gear",
        "hint": "Cushioned protective armor worn to absorb physical impacts and checks.",
        "extraHint": "Worn on knees, shins, shoulders, and hips in football, hockey, and cricket."
      },
      {
        "word": "PASS",
        "category": "Teammate Transfer",
        "hint": "Kicking, throwing, or hitting a ball or puck directly to a fellow teammate.",
        "extraHint": "Essential tactical skill for advancing play and breaking through defensive lines."
      },
      {
        "word": "PATH",
        "category": "Running Route",
        "hint": "Trail, course, or track along which athletes run, hike, or ski.",
        "extraHint": "Cross-country runners traverse hilly forest paths through mud, roots, and turf."
      },
      {
        "word": "PEAK",
        "category": "Summit or Form",
        "hint": "Reaching the highest physical fitness state, or summiting an alpine mountain.",
        "extraHint": "Athletes periodize training cycles to peak physically for Olympic championship events."
      },
      {
        "word": "PINS",
        "category": "Bowling Targets",
        "hint": "Bottle-shaped wooden targets arranged in an inverted triangle in tenpin bowling.",
        "extraHint": "Bowlers aim for the pocket between the 1 and 3 pins to achieve rolling strikes."
      },
      {
        "word": "PIPE",
        "category": "Snowboard Halfpipe",
        "hint": "Semicircular snow trench with vertical lip walls used in freestyle snowboarding.",
        "extraHint": "Riders launch high out of the pipe to execute inverted 1080 and 1440 spins."
      },
      {
        "word": "PITS",
        "category": "Auto Service Lane",
        "hint": "Service lane along a racetrack where race cars receive fresh tires and fuel.",
        "extraHint": "Formula One pit crews execute four-tire changes in under two lightning seconds."
      },
      {
        "word": "PLAY",
        "category": "Game Execution",
        "hint": "Specific planned tactical maneuver carried out by an offense or defense.",
        "extraHint": "Quarterbacks call audibles at line of scrimmage to change designated passing plays."
      },
      {
        "word": "POLE",
        "category": "Vault Implement",
        "hint": "Long, flexible fiberglass or carbon fiber pole used to vault over crossbars.",
        "extraHint": "Bends into a deep U-shape under athlete momentum before snapping straight."
      },
      {
        "word": "POLO",
        "category": "Equestrian Sport",
        "hint": "Team sport played on horseback where riders use long wooden mallets to hit balls.",
        "extraHint": "Known as the 'Sport of Kings'; teams of four riders gallop across vast outdoor fields."
      },
      {
        "word": "POOL",
        "category": "Swimming Basin",
        "hint": "Artificial basin of water maintained for swimming, diving, and water polo.",
        "extraHint": "Olympic competition pools measure 50 meters long with ten marked lane ropes."
      },
      {
        "word": "POST",
        "category": "Goal Upright",
        "hint": "Vertical upright beam framing the sides of goal structures in field sports.",
        "extraHint": "Hitting the goal post or crossbar produces a resounding metallic clatter."
      },
      {
        "word": "PROS",
        "category": "Paid Athletes",
        "hint": "Athletes who compete in sports professionally for financial compensation.",
        "extraHint": "Earn livelihoods through tournament purses, team contracts, and sponsorships."
      },
      {
        "word": "PUCK",
        "category": "Hockey Disc",
        "hint": "Vulcanized rubber disc used in ice hockey instead of a bouncing ball.",
        "extraHint": "Frozen solid before games to prevent bouncing erratically across the ice surface."
      },
      {
        "word": "PULL",
        "category": "Strength Movement",
        "hint": "Exerting muscular force to draw an object or barbell toward the body.",
        "extraHint": "Foundational functional movement in rowing strokes, pull-ups, and deadlifts."
      },
      {
        "word": "PUNT",
        "category": "Drop Kick",
        "hint": "Kicking a football by dropping it from hands and striking before it touches ground.",
        "extraHint": "Punters loft high, spiraling kicks with long hang times to allow coverage units downfield."
      },
      {
        "word": "PUSH",
        "category": "Strength Movement",
        "hint": "Exerting muscular force to move an object or opponent away from the body.",
        "extraHint": "Crucial upper-body mechanic in bench presses, push-ups, and football blocking."
      },
      {
        "word": "RACE",
        "category": "Speed Contest",
        "hint": "Competition of speed against competitors or the clock to cross lines first.",
        "extraHint": "Encompasses foot races, horse races, auto races, rowing regattas, and regattas."
      },
      {
        "word": "RACK",
        "category": "Billiard Triangle",
        "hint": "Triangular wooden or plastic frame used to group billiard balls tightly together.",
        "extraHint": "Pool players break the racked triangle with a powerful opening break shot."
      },
      {
        "word": "RALLY",
        "category": "Road Stage Racing",
        "hint": "Motorsport racing on public roads or off-road tracks with modified production cars.",
        "extraHint": "Drivers rely on rapid turn-by-turn pace notes called out by co-drivers in passenger seats."
      },
      {
        "word": "RAMP",
        "category": "Skate Obstacle",
        "hint": "Sloped incline structure used by skateboarders and BMX riders to launch aerials.",
        "extraHint": "Includes quarterpipes, launch kickers, mega-ramps, and vert halfpipes."
      },
      {
        "word": "RANK",
        "category": "Standing Position",
        "hint": "Position of an athlete or team in an official competitive leaderboard hierarchy.",
        "extraHint": "Tennis pros compete throughout the ATP tour to achieve the prestigious World No. 1 rank."
      },
      {
        "word": "RELAY",
        "category": "Team Track Race",
        "hint": "Track running event where teams of four runners pass a baton around the oval.",
        "extraHint": "Baton handoffs must occur within strict 20-meter acceleration exchange zones."
      },
      {
        "word": "REST",
        "category": "Recovery Period",
        "hint": "Interval of inactive recovery allowing muscle glycogen and stamina to replenish.",
        "extraHint": "Essential component of sports periodization preventing overtraining and injury."
      },
      {
        "word": "RIDE",
        "category": "Equestrian or Board",
        "hint": "Mounting and controlling a horse, bicycle, surfboard, or skateboard.",
        "extraHint": "Surfers ride barrel tubes; equestrians guide horses through dressage circuits."
      },
      {
        "word": "RIMS",
        "category": "Basketball Hoops",
        "hint": "Solid circular steel hoops measuring 18 inches in diameter holding nets.",
        "extraHint": "Equipped with breakaway spring mechanisms to absorb the force of powerful dunks."
      },
      {
        "word": "RING",
        "category": "Combat Enclosure",
        "hint": "Square raised canvas platform enclosed by ropes where boxers fight.",
        "extraHint": "Boxers touch gloves in the center before retreating to neutral corners."
      },
      {
        "word": "RINK",
        "category": "Ice Surface",
        "hint": "Enclosed frozen ice surface used for ice hockey, curling, and figure skating.",
        "extraHint": "Resurfaced between playing periods by heavy ice-smoothing Zamboni machines."
      },
      {
        "word": "RIPS",
        "category": "Clean Dive Entries",
        "hint": "Diving entries into water creating virtually zero splash, sounding like tearing paper.",
        "extraHint": "Clean rip entries earn the highest execution marks from Olympic diving judges."
      },
      {
        "word": "ROPE",
        "category": "Climbing Line",
        "hint": "Dynamic nylon braided cord used to protect rock climbers and mountaineers.",
        "extraHint": "Engineered to stretch elastically under fall loads to reduce deceleration force on spines."
      },
      {
        "word": "ROW",
        "category": "Boat Propulsion",
        "hint": "Propelling a boat through water using oars through coordinated strokes.",
        "extraHint": "Crew athletes row facing backward, matching tempo set by the stroke seat."
      },
      {
        "word": "ROWS",
        "category": "Rowing Strokes",
        "hint": "Pulling strokes taken by rowers using oars to propel racing crew shells.",
        "extraHint": "Coxswains call out stroke ratings per minute to maintain competitive rhythm."
      },
      {
        "word": "RUGBY",
        "category": "Full-Contact Sport",
        "hint": "Full-contact team sport carrying an oval ball across try lines without forward passes.",
        "extraHint": "Includes Rugby Union and Rugby League, famous for scrums, rucks, and mauls."
      },
      {
        "word": "RUN",
        "category": "Foot Locomotion",
        "hint": "Fast bipedal gait where both feet are off the ground simultaneously.",
        "extraHint": "Foundational aerobic athletic movement in track sprints, soccer, and marathons."
      },
      {
        "word": "RUNS",
        "category": "Cricket Points",
        "hint": "Units of scoring in cricket accumulated by batsmen running between wickets.",
        "extraHint": "A batsman scoring 100 runs in a single innings achieves a celebrated century."
      },
      {
        "word": "RUSH",
        "category": "Football Charge",
        "hint": "Charging forward with the football on running plays, or rushing the passer.",
        "extraHint": "Defensive ends rush around offensive tackles to tackle quarterbacks for sacks."
      },
      {
        "word": "SAIL",
        "category": "Fabric Wing",
        "hint": "Piece of fabric catching wind to propel watercraft across lakes and seas.",
        "extraHint": "Sailors adjust sail trim using sheets to maximize aerodynamic lift."
      },
      {
        "word": "SAMBO",
        "category": "Soviet Grappling",
        "hint": "Soviet martial art and combat sport combining judo with traditional folk wrestling.",
        "extraHint": "Stands for 'self-defense without weapons'; emphasizes rapid leg lock submissions."
      },
      {
        "word": "SEAM",
        "category": "Ball Stitching",
        "hint": "The stitched raised seam holding leather panels of a baseball or cricket ball.",
        "extraHint": "Pitchers grip raised seams with fingertips to generate cutting curveball spin."
      },
      {
        "word": "SEAT",
        "category": "Rower Station",
        "hint": "Slide seat in a rowing boat or saddle position on a racing bicycle.",
        "extraHint": "Rowers sit on sliding rolling seats to engage powerful leg drive muscles in strokes."
      },
      {
        "word": "SEED",
        "category": "Tournament Ranking",
        "hint": "Preliminary ranking assigned to a competitor or team in a tournament draw bracket.",
        "extraHint": "Top seeds are arranged in brackets to avoid facing each other in early rounds."
      },
      {
        "word": "SETS",
        "category": "Scoring Divisions",
        "hint": "Structured divisions within matches in tennis, volleyball, and table tennis.",
        "extraHint": "Volleyball matches are decided by the best three out of five 25-point sets."
      },
      {
        "word": "SHIN",
        "category": "Lower Leg",
        "hint": "The front portion of the human lower leg below the knee vulnerable to impacts.",
        "extraHint": "Shielded by foam-padded hard composite shinguards in soccer and field hockey."
      },
      {
        "word": "SHOT",
        "category": "Scoring Attempt",
        "hint": "Attempt to score a goal or basket by directing a ball or puck at the net.",
        "extraHint": "Can take the form of slapshots, jump shots, penalty kicks, or curling throws."
      },
      {
        "word": "SHOW",
        "category": "Horse Jumping",
        "hint": "Competitive equestrian jumping contest evaluating horse agility over fences.",
        "extraHint": "Riders guide show jumping horses through complex courses of colourful rails."
      },
      {
        "word": "SINK",
        "category": "Putt Drop",
        "hint": "Successfully rolling a golf putt into the cup hole on the green.",
        "extraHint": "Golfers celebrate sinking long, curling birdie putts across sloping greens."
      },
      {
        "word": "SKI",
        "category": "Snow Runner",
        "hint": "Long, narrow runner strapped to boots used for gliding across frozen snow.",
        "extraHint": "Features metal edges for carving turns down steep alpine downhill slopes."
      },
      {
        "word": "SKIS",
        "category": "Snow Gliders",
        "hint": "Pair of long runners strapped to boots for gliding across snowy slopes.",
        "extraHint": "Downhill racing skis are longer and stiffer to provide stability at 80 mph."
      },
      {
        "word": "SLAM",
        "category": "Heavy Dunk",
        "hint": "Powerful, forceful basketball dunk rattling the backboard rim.",
        "extraHint": "Slam dunk contests celebrate gravity-defying athletic leaps and windmill jams."
      },
      {
        "word": "SLED",
        "category": "Snow Slider",
        "hint": "Vehicle with runners used for sliding down snow or iced tracks under gravity.",
        "extraHint": "Encompasses bobsleds, luge, skeleton, and dog-pulled backcountry cargo sleds."
      },
      {
        "word": "SLIP",
        "category": "Defensive Fielding",
        "hint": "Fielding position in cricket located beside and behind the wicketkeeper.",
        "extraHint": "Slip fielders crouch low to catch fast edges deflected off the batsman's bat."
      },
      {
        "word": "SLOW",
        "category": "Tactical Tempo",
        "hint": "Deliberately reducing game tempo to control clock or frustrate fast opponents.",
        "extraHint": "Basketball teams slow down pace to execute half-court offensive sets in playoffs."
      },
      {
        "word": "SNAP",
        "category": "Play Initiation",
        "hint": "Passing the football backward between legs from center to quarterback to start play.",
        "extraHint": "Executed silently using cadence counts or visual foot taps in noisy stadiums."
      },
      {
        "word": "SNOW",
        "category": "Frozen Precipitation",
        "hint": "Atmospheric water vapor frozen into ice crystals covering winter ski pistes.",
        "extraHint": "Ski resorts groom fresh powdery snow into smooth corduroy lanes with snowcats."
      },
      {
        "word": "SOLE",
        "category": "Shoe Bottom",
        "hint": "The underside bottom surface of an athletic sports shoe providing traction.",
        "extraHint": "Studded with rubber cleats for turf or fitted with smooth gum rubber for squash."
      },
      {
        "word": "SPIN",
        "category": "Rotational Twist",
        "hint": "Imparting rotational movement to a ball to alter its flight trajectory or bounce.",
        "extraHint": "Topspin dips balls down sharply; backspin makes tennis balls bite and skid."
      },
      {
        "word": "SPUR",
        "category": "Rider Implement",
        "hint": "Metal tool attached to the heel of a riding boot used to direct horses.",
        "extraHint": "Gently aids communication between equestrian rider legs and trained mounts."
      },
      {
        "word": "STAR",
        "category": "Celebrated Athlete",
        "hint": "Renowned, elite athlete celebrated for extraordinary skill and game accomplishments.",
        "extraHint": "All-Star games showcase the premier athletic talents of sports leagues."
      },
      {
        "word": "STEP",
        "category": "Stride Unit",
        "hint": "Single movement of foot in walking, running, or executing a dribble step.",
        "extraHint": "Basketball rules permit up to two steps after gathering dribble on a layup drive."
      },
      {
        "word": "STOP",
        "category": "Defensive Halting",
        "hint": "Preventing opposing offenses from scoring points on a drive or possession.",
        "extraHint": "Defenses pride themselves on clutch fourth-down goal-line stops in football."
      },
      {
        "word": "SUIT",
        "category": "Uniform Outfit",
        "hint": "Specialized athletic clothing engineered for hydrodynamics or aerodynamics.",
        "extraHint": "Speed skaters wear skin-tight aerodynamic suits to reduce drag resistance."
      },
      {
        "word": "SUMO",
        "category": "Japanese Wrestling",
        "hint": "Full-contact wrestling where a rikishi attempts to force opponents out of a ring.",
        "extraHint": "Rich in Shinto ritual traditions, salt-purification throws, and heavy physical clashes."
      },
      {
        "word": "SURF",
        "category": "Ocean Waves",
        "hint": "Breaking ocean waves ridden by surfers standing upright on fiberglass boards.",
        "extraHint": "Surfers paddle into the swell before popping up onto their feet in the pocket."
      },
      {
        "word": "SWIM",
        "category": "Water Locomotion",
        "hint": "Self-propulsion of a person through water using coordinated limbs.",
        "extraHint": "Olympic strokes include freestyle crawl, backstroke, breaststroke, and butterfly."
      },
      {
        "word": "TACK",
        "category": "Sailing Maneuver",
        "hint": "Turning the bow of a sailboat through the wind so the wind shifts to other side.",
        "extraHint": "Sailors zig-zag upwind through a series of tactical starboard and port tacks."
      },
      {
        "word": "TACT",
        "category": "Strategic Discipline",
        "hint": "Carefully planned actions or strategies executed to outwit sports opponents.",
        "extraHint": "Teams alter tactical formations to counter opponent strengths and weaknesses."
      },
      {
        "word": "TEAM",
        "category": "Athletic Group",
        "hint": "Group of athletes collaborating together to compete against rival opponents.",
        "extraHint": "United by shared tactics, coaching, uniforms, and cooperative teamwork goals."
      },
      {
        "word": "TEES",
        "category": "Golf Pegs",
        "hint": "Small wooden or plastic pegs used to elevate golf balls for opening drive shots.",
        "extraHint": "Allow golfers to sweep upward on drives with large-headed 460cc drivers."
      },
      {
        "word": "TENS",
        "category": "Score Decades",
        "hint": "Ten-point increments or perfect ten scores awarded in athletic judging.",
        "extraHint": "Nadia Comaneci made Olympic history in 1976 by scoring the first perfect ten in gymnastics."
      },
      {
        "word": "TIDE",
        "category": "Ocean Current",
        "hint": "Periodic rise and fall of coastal sea levels influencing surf and sailing regattas.",
        "extraHint": "Surfers study incoming high tides and offshore winds to find optimal wave breaks."
      },
      {
        "word": "TIED",
        "category": "Even Scores",
        "hint": "Condition where opposing competitors have accumulated identical point totals.",
        "extraHint": "Deadlocked tied scores trigger sudden-death extra time or penalty shootouts."
      },
      {
        "word": "TIES",
        "category": "Equal Scores",
        "hint": "Instances where two competitors finish a contest with identical scores.",
        "extraHint": "Resolved in playoffs via extra time, tiebreaker sets, or sudden-death shootouts."
      },
      {
        "word": "TIME",
        "category": "Game Clock",
        "hint": "The duration of play regulated by game clocks and official timekeepers.",
        "extraHint": "Coaches call timeouts to stop the clock and diagram crucial endgame plays."
      },
      {
        "word": "TOES",
        "category": "Foot Extremities",
        "hint": "Digits of the foot used for balance, pushing off in sprints, and toe kicks.",
        "extraHint": "Swimmers point toes backward to reduce drag and maximize flutter kick thrust."
      },
      {
        "word": "TOSS",
        "category": "Coin Flip or Throw",
        "hint": "Throwing a coin to determine playing sides, or tossing a ball into play.",
        "extraHint": "Cricket captains meet on the pitch for the ceremonial coin toss before tests."
      },
      {
        "word": "TOUR",
        "category": "Circuit Series",
        "hint": "Series of professional tournaments held throughout a season across the globe.",
        "extraHint": "Includes the ATP tennis tour, PGA golf tour, and cycling's UCI WorldTour."
      },
      {
        "word": "TRAP",
        "category": "Clay Target",
        "hint": "Clay pigeon target hurled into the air by an oscillating launcher for shooting.",
        "extraHint": "Shotgun shooters fire at clay targets hurtling across open outdoor ranges."
      },
      {
        "word": "TRIM",
        "category": "Sail Adjustment",
        "hint": "Adjusting the tension of boat sails to maximize aerodynamic wind drive.",
        "extraHint": "Trimmers ease and haul in sheets as boats change heading angles to the breeze."
      },
      {
        "word": "TRIP",
        "category": "Illegal Foul",
        "hint": "Fouling an opponent by catching their foot or leg to cause a fall.",
        "extraHint": "Penalized with direct free kicks in soccer and two-minute minor penalties in hockey."
      },
      {
        "word": "TURF",
        "category": "Grass Surface",
        "hint": "Layer of mown grass and soil or synthetic artificial turf covering sports fields.",
        "extraHint": "Artificial turf features synthetic green fibers infilled with crumb rubber granules."
      },
      {
        "word": "TWIN",
        "category": "Paired Setup",
        "hint": "Twin-engine powerboats, twin fin surfboards, or paired synchronised athletes.",
        "extraHint": "Twin-fin surfboards provide loose, skate-like agility across small summer waves."
      },
      {
        "word": "UMPS",
        "category": "Game Umpires",
        "hint": "Colloquial abbreviation for the umpires officiating baseball or cricket matches.",
        "extraHint": "Home plate umpires crouch behind catchers to signal strikes with booming calls."
      },
      {
        "word": "VAIN",
        "category": "Futile Effort",
        "hint": "Heroic athletic efforts falling just short of victory in hard-fought finals.",
        "extraHint": "Underdog teams battle courageously before conceding narrow defeats in stoppage time."
      },
      {
        "word": "VEST",
        "category": "Safety Garment",
        "hint": "Sleeveless protective garment worn across chest in fencing and watersports.",
        "extraHint": "Buoyancy life vests protect waterskiers; electronic lamé vests score fencing hits."
      },
      {
        "word": "VIEW",
        "category": "Spectator Sightline",
        "hint": "Sightline from grandstand seats overlooking the playing field or track.",
        "extraHint": "Modern stadiums design steep cantilevered bowl seating to provide unobstructed views."
      },
      {
        "word": "WALK",
        "category": "Brisk Stride",
        "hint": "Gait where at least one foot remains in continuous contact with the ground.",
        "extraHint": "Olympic race walking requires straight knee contact throughout ground phases."
      },
      {
        "word": "WAVE",
        "category": "Ocean Swell",
        "hint": "Ridge of water moving across the ocean surface, ridden by surfers and windsurfers.",
        "extraHint": "Iconic surf breaks like Banzai Pipeline produce hollow breaking wave barrels."
      },
      {
        "word": "WEAR",
        "category": "Athletic Apparel",
        "hint": "Sporting garments and specialized apparel engineered for active performance.",
        "extraHint": "Crafted from moisture-wicking synthetic fabrics to keep athletes dry and cool."
      },
      {
        "word": "WHIP",
        "category": "Lashing Motion",
        "hint": "Lashing kinetic motion executed by arms and wrists in javelin, baseball, and golf.",
        "extraHint": "Golfers create lagging whip action in clubshafts to unleash explosive clubhead speed."
      },
      {
        "word": "WIND",
        "category": "Atmospheric Breeze",
        "hint": "Moving air currents influencing ball flight, sailing boats, and track records.",
        "extraHint": "Sprints with tailwinds exceeding 2.0 meters per second cannot count for world records."
      },
      {
        "word": "WING",
        "category": "Flank Sector",
        "hint": "Outer lateral area of a playing pitch or court occupied by wing forwards.",
        "extraHint": "Wingers exploit open space along flanks to whip dangerous crosses into the box."
      },
      {
        "word": "WINS",
        "category": "Victories",
        "hint": "Successful outcomes where an athlete or team triumphs over opponents.",
        "extraHint": "Teams with the highest win percentage qualify for championship playoff brackets."
      },
      {
        "word": "WIRE",
        "category": "Finish Line",
        "hint": "The physical finish line or overhead photo-finish camera wire in horse racing.",
        "extraHint": "Horses battle down the homestretch neck-and-neck, diving down to the wire."
      },
      {
        "word": "WOOD",
        "category": "Golf Driver",
        "hint": "Class of long-distance golf clubs historically crafted from persimmon wood.",
        "extraHint": "Modern woods are hollow titanium and carbon fiber alloy clubs used for tee drives."
      },
      {
        "word": "WUSHU",
        "category": "Exhibition Martial Art",
        "hint": "Chinese martial art developed into a formal exhibition and full-contact sport.",
        "extraHint": "Features acrobatic aerial leaps, broadsword forms, and spear routines."
      },
      {
        "word": "YARD",
        "category": "Football Metric",
        "hint": "Imperial unit of distance equal to three feet, the standard measurement in football.",
        "extraHint": "Offenses must gain ten yards within four downs to earn a fresh set of downs."
      },
      {
        "word": "ZONE",
        "category": "Playing Area",
        "hint": "Designated spatial region on a court or field, or peak mental flow state.",
        "extraHint": "Athletes describe being 'in the zone' when action feels slowed down and effortless."
      }
    ],
    "medium": [
      {
        "word": "AIKIDO",
        "category": "Harmonious Martial Art",
        "hint": "Japanese martial art focused on redirecting opponent momentum into joint locks.",
        "extraHint": "Founded by Morihei Ueshiba; translates to 'the way of harmonious spirit.'"
      },
      {
        "word": "ALLEYOOP",
        "category": "Mid-Air Catch Dunk",
        "hint": "Basketball play where one player lofts the ball near the rim for a teammate to slam.",
        "extraHint": "Requires exquisite timing, court chemistry, and explosive vertical athleticism."
      },
      {
        "word": "ANGLING",
        "category": "Recreational Fishing",
        "hint": "Catching wild fish using an angle or hook attached to a fishing line and rod.",
        "extraHint": "Encompasses tranquil freshwater lake outings and high-seas saltwater tournaments."
      },
      {
        "word": "ARCHERY",
        "category": "Bow and Arrow",
        "hint": "Sport or skill of using a bow to shoot feathered arrows at distant targets.",
        "extraHint": "Archers master steady breathing, anchor points, and finger releases on target bullseyes."
      },
      {
        "word": "ARENAS",
        "category": "Indoor Stadiums",
        "hint": "Enclosed indoor sporting venues with tiered seating surrounding playing floors.",
        "extraHint": "Host professional basketball games, hockey matches, boxing bouts, and concerts."
      },
      {
        "word": "ATHLETE",
        "category": "Sports Performer",
        "hint": "Person proficient in sports, physical exercises, or competitive games.",
        "extraHint": "Maintains peak cardiovascular conditioning, nutrition, and muscular health."
      },
      {
        "word": "BANNER",
        "category": "Championship Flag",
        "hint": "Fabric pennant or flag hung in stadium rafters celebrating title championships.",
        "extraHint": "Raised high above basketball courts to commemorate historic championship seasons."
      },
      {
        "word": "BARBELL",
        "category": "Weightlifting Bar",
        "hint": "Long steel bar onto which circular iron or rubber weight plates are loaded.",
        "extraHint": "Used for foundational strength exercises including squats, deadlifts, and bench presses."
      },
      {
        "word": "BASEBALL",
        "category": "Bat-and-Ball Game",
        "hint": "America's pastime where batters hit pitches and run around four bases to score.",
        "extraHint": "Features nine innings, ninety-foot base paths, strikeouts, home runs, and curveballs."
      },
      {
        "word": "BATSMAN",
        "category": "Cricket Striker",
        "hint": "Cricket player who defends the stumps with a flat wooden willow bat.",
        "extraHint": "Scores runs by hitting deliveries through gaps in the outfield fielders."
      },
      {
        "word": "BATSMEN",
        "category": "Cricket Hitters",
        "hint": "Cricket players taking turns batting at the wicket to score runs.",
        "extraHint": "Bat in pairs, communicating with loud calls of 'yes', 'no', and 'wait' between creases."
      },
      {
        "word": "BATTER",
        "category": "Baseball Hitter",
        "hint": "Player standing in the batter's box attempting to hit pitches with a bat.",
        "extraHint": "Aims to hit line drives through gaps in the field or smash ball over outfield walls."
      },
      {
        "word": "BIATHLON",
        "category": "Skiing and Shooting",
        "hint": "Winter sport combining cross-country skiing endurance with rifle marksmanship.",
        "extraHint": "Athletes must calm racing heartbeats after skiing sprints to hit tiny rifle targets."
      },
      {
        "word": "BLOCKER",
        "category": "Net Defender",
        "hint": "Volleyball or football player tasked with stopping attacks at line or net.",
        "extraHint": "Volleyball middle blockers form two-person block walls to reject spikes."
      },
      {
        "word": "BOATING",
        "category": "Watercraft Sport",
        "hint": "Recreation or competition using motorized, sail, or rowed water vessels.",
        "extraHint": "Encompasses powerboat racing, sailing regattas, and recreational lake cruising."
      },
      {
        "word": "BOBSLED",
        "category": "Four-Man Sled",
        "hint": "Winter Olympic sliding sport down an iced track in a streamlined bullet sled.",
        "extraHint": "Requires explosive team push starts before jumping inside the aerodynamic hull."
      },
      {
        "word": "BOULDER",
        "category": "Low-Level Climbing",
        "hint": "Form of rock climbing performed on small rock formations without safety ropes.",
        "extraHint": "Athletes solve complex climbing 'problems' above cushioned ground crash pads."
      },
      {
        "word": "BOWLER",
        "category": "Cricket Delivery",
        "hint": "Cricket player who bowls the ball toward the batsman defending the wicket.",
        "extraHint": "Fast bowlers deliver balls at 95 mph; spin bowlers turn balls sharply off turf."
      },
      {
        "word": "BOWLERS",
        "category": "Cricket Pitchers",
        "hint": "Cricket players who deliver the ball with a straight arm towards wickets.",
        "extraHint": "Vary speed, swing, seam, and spin to deceive opposing batsmen."
      },
      {
        "word": "BOWLING",
        "category": "Tenpin Rolling",
        "hint": "Target sport where players roll a heavy bowling ball down a lane toward ten pins.",
        "extraHint": "Knocking down all ten pins on the first ball in a frame earns a strike."
      },
      {
        "word": "BOXING",
        "category": "Combat Sport",
        "hint": "Combat sport in which two people wearing padded gloves throw punches in a ring.",
        "extraHint": "Fought over scheduled rounds; outcomes decided by judge scoring or knockouts."
      },
      {
        "word": "BRACKET",
        "category": "Tournament Grid",
        "hint": "Diagram representing the series of games played during a tournament.",
        "extraHint": "Millions of sports fans fill out brackets attempting to predict tournament champions."
      },
      {
        "word": "BRIDLE",
        "category": "Horse Headgear",
        "hint": "Tack headgear fitted on a horse's head including bit and reins for steering.",
        "extraHint": "Allows riders to communicate subtle directional cues to horses through reins."
      },
      {
        "word": "BUNKER",
        "category": "Sand Trap Hazard",
        "hint": "Depression on a golf course filled with sand forming a challenging hazard.",
        "extraHint": "Requires opening clubfaces of sand wedges to splash balls softly out onto greens."
      },
      {
        "word": "CANOEING",
        "category": "Single-Bladed Paddling",
        "hint": "Paddling sport in an open canoe using a single-bladed paddle while kneeling or seated.",
        "extraHint": "Requires mastering J-stroke steering maneuvers to keep canoes traveling straight."
      },
      {
        "word": "CAPOEIRA",
        "category": "Afro-Brazilian Art",
        "hint": "Afro-Brazilian martial art combining elements of fight, acrobatics, and dance.",
        "extraHint": "Practitioners perform sweeping kicks and cartwheels to the rhythm of berimbau music."
      },
      {
        "word": "CAPTAIN",
        "category": "Team Leader",
        "hint": "Team member chosen to lead teammates on the field and confer with referees.",
        "extraHint": "Wears the captain's armband in soccer; calls the coin toss in cricket."
      },
      {
        "word": "CAPTAINS",
        "category": "Squad Leaders",
        "hint": "Chosen leaders of sports teams who motivate teammates and speak to referees.",
        "extraHint": "Wear commemorative armbands and hoist trophies first during celebrations."
      },
      {
        "word": "CATCHER",
        "category": "Home Plate Guard",
        "hint": "Baseball player crouching behind home plate to receive pitches and block balls.",
        "extraHint": "Wears heavy shin guards, chest protector, and helmet to block foul balls."
      },
      {
        "word": "CENTER",
        "category": "Basketball Giant",
        "hint": "The tallest player on a basketball court, dominating the paint and rebounds.",
        "extraHint": "Protects the rim with blocked shots and scores through close-range hook shots."
      },
      {
        "word": "CHAMPION",
        "category": "First Place Winner",
        "hint": "Athlete or team that wins first place in a sporting tournament or league.",
        "extraHint": "Celebrates with trophy presentations, victory laps, and championship rings."
      },
      {
        "word": "CLEATS",
        "category": "Studded Shoes",
        "hint": "Athletic footwear fitted with projecting studs to provide traction on turf.",
        "extraHint": "Prevents slipping when making explosive lateral cuts on wet natural grass fields."
      },
      {
        "word": "CLIMBER",
        "category": "Rock Athlete",
        "hint": "Athlete ascending steep natural cliffs, alpine peaks, or indoor climbing walls.",
        "extraHint": "Chalks hands to absorb finger sweat and places feet on microscopic rock edges."
      },
      {
        "word": "CLIMBING",
        "category": "Rock Ascent",
        "hint": "Ascending steep natural rock cliffs or artificial indoor climbing walls with hands.",
        "extraHint": "Disciplines include lead climbing with ropes, speed climbing, and unroped bouldering."
      },
      {
        "word": "CLINCH",
        "category": "Close Standing Grip",
        "hint": "Grappling posture where fighters hold each other closely around neck and torso.",
        "extraHint": "Muay Thai fighters use the plum collar clinch to deliver punishing knee strikes."
      },
      {
        "word": "COACHES",
        "category": "Tactical Leaders",
        "hint": "Instructors and strategists who guide and train athletes and team squads.",
        "extraHint": "Make substitutions, call timeouts, and motivate teams during halftime breaks."
      },
      {
        "word": "CONTEST",
        "category": "Sporting Event",
        "hint": "Athletic competition between two or more competitors striving for victory.",
        "extraHint": "Provides a test of physical strength, strategic intelligence, and mental toughness."
      },
      {
        "word": "COURTS",
        "category": "Marked Surfaces",
        "hint": "Hard playing surfaces marked with boundary lines for tennis and basketball.",
        "extraHint": "Constructed from polished hardwood, asphalt, red clay, or synthetic turf."
      },
      {
        "word": "CRAMPONS",
        "category": "Ice Spikes",
        "hint": "Steel or titanium spiked traction devices strapped to mountaineering boots.",
        "extraHint": "Bites into steep glacial ice walls, preventing mountaineers from slipping down couloirs."
      },
      {
        "word": "CRASHPAD",
        "category": "Bouldering Mat",
        "hint": "Dense, portable foam mattress laid on the ground beneath rock boulder problems.",
        "extraHint": "Cushions falls from ten or twenty feet, protecting ankles from jagged talus rocks."
      },
      {
        "word": "CRICKET",
        "category": "Bat-and-Ball Sport",
        "hint": "Bat-and-ball game played between two teams of eleven players on an oval grass pitch.",
        "extraHint": "Bowlers attempt to knock down bails on wickets while batsmen score runs across creases."
      },
      {
        "word": "CURLING",
        "category": "Ice Chess",
        "hint": "Sport where players slide polished granite stones across ice toward a target house.",
        "extraHint": "Teammates vigorously sweep brooms across ice to melt thin water layers and guide stone curl."
      },
      {
        "word": "CYCLING",
        "category": "Bicycle Riding",
        "hint": "Riding bicycles for transport, recreation, and high-speed competitive races.",
        "extraHint": "Encompasses road races like the Tour de France, mountain biking, and velodrome sprints."
      },
      {
        "word": "CYCLIST",
        "category": "Bicycle Racer",
        "hint": "Athlete who rides racing bicycles in road, mountain, track, or gravel events.",
        "extraHint": "Maintains high pedaling cadences while tucking into aerodynamic race positions."
      },
      {
        "word": "DEFENDER",
        "category": "Backline Player",
        "hint": "Soccer player positioned in front of the goalkeeper tasked with stopping attacks.",
        "extraHint": "Marks opposing forwards, blocks shots, and clears loose balls from the box."
      },
      {
        "word": "DEFENSE",
        "category": "Preventing Scores",
        "hint": "The team or tactical unit working to prevent the opposing offense from scoring.",
        "extraHint": "Championship-winning coaches emphasize that disciplined defense wins titles."
      },
      {
        "word": "DEUCES",
        "category": "Tied Game State",
        "hint": "Score of 40-40 in a tennis game, requiring a player to win two consecutive points.",
        "extraHint": "The next point won awards Advantage; winning the following point secures the game."
      },
      {
        "word": "DIAMOND",
        "category": "Baseball Infield",
        "hint": "The square-shaped infield area delimited by the four bases in baseball.",
        "extraHint": "Composed of manicured clay basepaths, pitcher's mound, and emerald green turf."
      },
      {
        "word": "DISCUS",
        "category": "Spinning Throw",
        "hint": "Track and field event where athletes spin in a circle to throw a heavy disc.",
        "extraHint": "Ancient Greek Olympic event; throwers generate immense rotational angular momentum."
      },
      {
        "word": "DIVING",
        "category": "Acrobatic Water Entry",
        "hint": "Acrobatic sport of jumping into water from platforms or springboards with style.",
        "extraHint": "Divers execute twists and somersaults, striving for minimal splash on water entry."
      },
      {
        "word": "DOCKING",
        "category": "Boat Mooring",
        "hint": "Bringing a racing yacht or rowing shell alongside a pier or marina dock.",
        "extraHint": "Rowing crews dock carefully after grueling regatta races on lakes."
      },
      {
        "word": "DRIBBLE",
        "category": "Ball Bouncing",
        "hint": "Bouncing or tapping a ball continuously along the floor while moving.",
        "extraHint": "Fundamental skill required in basketball and soccer to advance without traveling."
      },
      {
        "word": "DUGOUT",
        "category": "Baseball Shelter",
        "hint": "Sunken bench area where baseball players and coaches sit while not on the field.",
        "extraHint": "Contains bat racks, helmet cubbies, water coolers, and sunflower seed buckets."
      },
      {
        "word": "FADEAWAY",
        "category": "Falling Jumper",
        "hint": "Jump shot taken while jumping backward away from the defending opponent.",
        "extraHint": "Made famous by Michael Jordan and Kobe Bryant; nearly impossible to block."
      },
      {
        "word": "FAIRPLAY",
        "category": "Ethical Conduct",
        "hint": "Ethical and honest behavior shown by athletes participating in competition.",
        "extraHint": "Kicking the soccer ball out of bounds when an opponent is injured exemplifies fair play."
      },
      {
        "word": "FAIRWAY",
        "category": "Mown Golf Grass",
        "hint": "Smoothly mown stretch of grass between the golf tee box and the putting green.",
        "extraHint": "Golfers aim tee shots to land safely on fairways for clean, unobstructed second shots."
      },
      {
        "word": "FENCER",
        "category": "Swordplay Competitor",
        "hint": "Athlete who competes in sword combat using a foil, epee, or sabre blade.",
        "extraHint": "Lunges and parries along a narrow metallic piste strip with electric hit scoring."
      },
      {
        "word": "FENCING",
        "category": "Bladed Combat Sport",
        "hint": "Swordplay combat sport where competitors duel using foil, epee, or sabre blades.",
        "extraHint": "Points are scored through electronic weapon tip contacts on conductive laminar vests."
      },
      {
        "word": "FIELDED",
        "category": "Gathered Ball",
        "hint": "The act of successfully gathering, catching, or picking up a struck ball.",
        "extraHint": "Clean fielding prevents base runners from taking extra bases on hits."
      },
      {
        "word": "FIELDS",
        "category": "Grass Expanses",
        "hint": "Expansive outdoor turf or grass areas where field sports are contested.",
        "extraHint": "Marked with chalk boundary sidelines, hash marks, endzones, and penalty areas."
      },
      {
        "word": "FLIPPERS",
        "category": "Swim Fins",
        "hint": "Rubber fin-like footwear worn by swimmers and divers to increase propulsion.",
        "extraHint": "Helps snorkelers and divers glide efficiently through deep ocean currents."
      },
      {
        "word": "FOOTBALL",
        "category": "Gridiron Sport",
        "hint": "Team sport played on a 100-yard field aiming to advance an oval ball into endzones.",
        "extraHint": "Features tactical touchdowns, field goals, downs, and intense physical tackling."
      },
      {
        "word": "FREEDIVE",
        "category": "Breath-Hold Diving",
        "hint": "Underwater diving that relies on breath-holding until resurfacing without tanks.",
        "extraHint": "Divers calm heart rates through meditation, descending hundreds of feet deep."
      },
      {
        "word": "FREEKICK",
        "category": "Direct Soccer Restart",
        "hint": "Unobstructed kick awarded to a team after an opponent commits an infraction.",
        "extraHint": "Direct free kicks can be struck directly into the net to score a goal."
      },
      {
        "word": "FREERIDE",
        "category": "Off-Piste Skiing",
        "hint": "Skiing or snowboarding on ungroomed natural mountain powder terrain without gates.",
        "extraHint": "Judged on line choice, fluid speed, control, and cliff-drop jump landings."
      },
      {
        "word": "FULLBACK",
        "category": "Wide Defensive Back",
        "hint": "Defensive player guarding the wide flanks in soccer or running in football.",
        "extraHint": "Soccer fullbacks overlap into attack; football fullbacks lead block for halfbacks."
      },
      {
        "word": "FUMBLE",
        "category": "Dropped Football",
        "hint": "Accidental loss of ball possession by an offensive runner before down by contact.",
        "extraHint": "Defenders scramble to recover loose fumbles on turf to change game possession."
      },
      {
        "word": "FUMBLES",
        "category": "Dropped Possessions",
        "hint": "Loose balls dropped by offensive ball-carriers in football before down.",
        "extraHint": "Triggers a frantic scramble of 300-pound linemen diving onto the turf."
      },
      {
        "word": "GLOVES",
        "category": "Hand Protection",
        "hint": "Padded gear worn on hands to absorb punches, grip clubs, or catch baseballs.",
        "extraHint": "Heavy 16-ounce boxing gloves protect both boxer fists and sparring partners."
      },
      {
        "word": "GOALIE",
        "category": "Net Guardian",
        "hint": "Player stationed in front of net tasked with stopping pucks or balls from entering.",
        "extraHint": "Ice hockey goalies wear massive leg pads and blocker gloves to make clutch saves."
      },
      {
        "word": "GOALKICK",
        "category": "Goal Restart",
        "hint": "Kick taken from within the goal box by goalkeeper after attackers put ball out.",
        "extraHint": "Allows defensive teams to reset their formation and build possession from the back."
      },
      {
        "word": "HALFPIPE",
        "category": "U-Shaped Ice Trench",
        "hint": "U-shaped snow ramp with vertical walls used for aerial freestyle tricks.",
        "extraHint": "Riders pump transition walls to launch 20 feet above lip, spinning rotations."
      },
      {
        "word": "HALFTIME",
        "category": "Intermission Break",
        "hint": "The intermission interval separating the two halves of a sports game.",
        "extraHint": "Allows players to rehydrate, receive medical treatment, and review tactics."
      },
      {
        "word": "HANDBALL",
        "category": "Fast Court Sport",
        "hint": "High-scoring team sport where players pass and bounce a ball to throw into goals.",
        "extraHint": "Teams of seven players execute rapid jumping shots past diving goalkeepers."
      },
      {
        "word": "HARNESS",
        "category": "Safety Strapping",
        "hint": "System of safety straps worn around waist and thighs in rock climbing and sailing.",
        "extraHint": "Secures climbers to belay ropes, catching falls safely without spinal trauma."
      },
      {
        "word": "HATTRICK",
        "category": "Three-Goal Feat",
        "hint": "Achievement of scoring three goals in a single sports game by one individual.",
        "extraHint": "Fans traditionally shower the ice with baseball caps when a hockey player scores three."
      },
      {
        "word": "HEADER",
        "category": "Soccer Aerial",
        "hint": "Striking a soccer ball in mid-air using the forehead to pass or shoot at net.",
        "extraHint": "Requires timing vertical leaps to power aerial crosses past diving goalkeepers."
      },
      {
        "word": "HELMET",
        "category": "Head Protection",
        "hint": "Rigid protective headgear absorbing impact forces during collisions.",
        "extraHint": "Mandatory safety gear in football, hockey, cycling, baseball, and motorsports."
      },
      {
        "word": "HIGHJUMP",
        "category": "Bar Clearance",
        "hint": "Field event where competitors leap over a horizontal bar onto a cushioned mat.",
        "extraHint": "Most modern jumpers use the 'Fosbury Flop' technique, arching backward over the bar."
      },
      {
        "word": "HOCKEY",
        "category": "Puck or Ball Sport",
        "hint": "Fast team sport played on ice or turf where players use sticks to shoot into nets.",
        "extraHint": "Ice hockey features hard vulcanized rubber pucks, razor-sharp skates, and body checks."
      },
      {
        "word": "HURDLE",
        "category": "Track Barrier",
        "hint": "Lightweight upright wooden barrier that track sprinters leap over in races.",
        "extraHint": "Designed to tip forward safely if hit by trailing legs during hurdle clearance."
      },
      {
        "word": "HURDLES",
        "category": "Obstacle Sprint",
        "hint": "Track sprint where runners leap over evenly spaced wooden barriers at speed.",
        "extraHint": "Requires precise rhythmic stride pacing to clear hurdles cleanly without stuttering."
      },
      {
        "word": "ICEAXE",
        "category": "Mountaineer Tool",
        "hint": "Multi-purpose hiking and climbing tool used by mountaineers in snow and ice.",
        "extraHint": "Used to arrest catastrophic sliding falls by digging the pick deeply into hard snow."
      },
      {
        "word": "INNINGS",
        "category": "Baseball Frame",
        "hint": "Division of a baseball or cricket game where teams alternate batting and fielding.",
        "extraHint": "A regulation Major League Baseball game consists of nine complete innings."
      },
      {
        "word": "JAVELIN",
        "category": "Spear Throwing",
        "hint": "Athletics field event where athletes throw a light metal-tipped spear for distance.",
        "extraHint": "Throwers sprint down a runway before releasing the spear with a sweeping overhand whip."
      },
      {
        "word": "JETSKI",
        "category": "Personal Watercraft",
        "hint": "Small motorized personal watercraft propelled by an internal water jet pump.",
        "extraHint": "Steered by handlebars, carving through coastal surf and lake waves at 60 mph."
      },
      {
        "word": "JIUJITSU",
        "category": "Ground Submission Art",
        "hint": "Grappling martial art focused on ground fighting, joint locks, and chokeholds.",
        "extraHint": "Allows smaller practitioners to successfully defend against larger attackers with leverage."
      },
      {
        "word": "JUDGES",
        "category": "Scoring Panel",
        "hint": "Officials who evaluate performance in gymnastics, figure skating, and diving.",
        "extraHint": "Assign numerical scores based on technical execution, difficulty, and artistic style."
      },
      {
        "word": "JUMPER",
        "category": "Field Athlete",
        "hint": "Competitor specializing in high jump, long jump, triple jump, or hurdles.",
        "extraHint": "Translates horizontal sprinting speed into explosive upward takeoff lift."
      },
      {
        "word": "JUMPERS",
        "category": "Field Leapers",
        "hint": "Athletes specializing in high jump, long jump, and triple jump events.",
        "extraHint": "Execute explosive penultimate stride takeoffs into sand pits or foam mats."
      },
      {
        "word": "JUMPSHOT",
        "category": "Elevated Release",
        "hint": "Shot taken by jumping vertically into the air and releasing the ball at peak height.",
        "extraHint": "Forms the bedrock of outside shooting across high school, college, and the NBA."
      },
      {
        "word": "KARATE",
        "category": "Striking Martial Art",
        "hint": "Striking martial art originating in Okinawa utilizing punches, kicks, and open hands.",
        "extraHint": "Focuses on linear power, katas, and disciplined board-breaking strikes."
      },
      {
        "word": "KARTING",
        "category": "Open-Wheel Mini",
        "hint": "Variant of open-wheel motorsport racing with small, open four-wheeled go-karts.",
        "extraHint": "The stepping-stone training ground where all Formula One world champions begin."
      },
      {
        "word": "KAYAKING",
        "category": "Double-Bladed Paddling",
        "hint": "Paddling sport using a kayak where the paddler uses a double-bladed paddle.",
        "extraHint": "Includes whitewater river slalom rapids and calm flatwater Olympic sprint regattas."
      },
      {
        "word": "KICKERS",
        "category": "Field Goal Specialists",
        "hint": "Football players specializing in kicking field goals, extra points, and kickoffs.",
        "extraHint": "High-pressure role where games are often won or lost on last-second kicks."
      },
      {
        "word": "KICKOFF",
        "category": "Match Commencement",
        "hint": "Ceremonial opening kick initiating the start of play in soccer or football.",
        "extraHint": "Takes place from the center circle or 35-yard line to open halves."
      },
      {
        "word": "KRAVMAGA",
        "category": "Military Defense",
        "hint": "Self-defense system developed for the Israel Defense Forces emphasizing aggression.",
        "extraHint": "Focuses on real-world situational awareness and neutralizing immediate street threats."
      },
      {
        "word": "KUNGFU",
        "category": "Chinese Martial Art",
        "hint": "Traditional Chinese martial arts emphasizing fluid stances and strikes.",
        "extraHint": "Famously inspired by the movements of animals including tiger, crane, and snake."
      },
      {
        "word": "LACROSSE",
        "category": "Indigenous Sport",
        "hint": "Native American contact sport using long sticks with mesh nets to catch and throw balls.",
        "extraHint": "Regarded as the oldest organized sport in North America, originally called the Creator's Game."
      },
      {
        "word": "LIBERO",
        "category": "Defensive Specialist",
        "hint": "Specialized defensive volleyball player wearing a contrasting jersey color.",
        "extraHint": "Cannot serve, block, or attack above the net; excels at digging blistering spikes."
      },
      {
        "word": "LINEMAN",
        "category": "Trench Footballer",
        "hint": "Large, powerful athlete competing along the offensive or defensive line.",
        "extraHint": "Battles in the physical line-of-scrimmage trenches on every single snap."
      },
      {
        "word": "LINESMAN",
        "category": "Assistant Referee",
        "hint": "Official positioned along boundary touchlines carrying a signaling flag.",
        "extraHint": "Signals when balls cross boundaries and flags offside infractions to the referee."
      },
      {
        "word": "LONGJUMP",
        "category": "Horizontal Leap",
        "hint": "Field event where athletes sprint down a runway and leap into a sandy pit.",
        "extraHint": "Jumpers aim to generate maximum horizontal velocity off an 8-inch takeoff board."
      },
      {
        "word": "MARATHON",
        "category": "Long-Distance Race",
        "hint": "Long-distance foot race with an official distance of 26.2 miles (42.195 km).",
        "extraHint": "Commemorates the legendary run of Greek soldier Pheidippides from Marathon to Athens."
      },
      {
        "word": "MATCHES",
        "category": "Competitive Contests",
        "hint": "Formal sporting contests played according to official rules between opponents.",
        "extraHint": "Include five-set tennis matches, soccer fixtures, and rugby derbies."
      },
      {
        "word": "MEDALIST",
        "category": "Podium Winner",
        "hint": "Athlete who finishes in the top three positions at the Olympic Games.",
        "extraHint": "Awarded gold, silver, or bronze medals during ceremonial anthem presentations."
      },
      {
        "word": "MEDALS",
        "category": "Podium Awards",
        "hint": "Metal medallions presented to top three podium finishers: gold, silver, bronze.",
        "extraHint": "Awarded at Olympic Games, accompanied by national anthems of winning countries."
      },
      {
        "word": "MUAYTHAI",
        "category": "Art of Eight Limbs",
        "hint": "Combat sport of Thailand utilizing punches, kicks, elbows, and knee strikes.",
        "extraHint": "Known as the 'Art of Eight Limbs' because eight points of contact are weaponized."
      },
      {
        "word": "NUTMEG",
        "category": "Between Legs Dribble",
        "hint": "Playing the ball directly through an opponent's legs before retrieving it.",
        "extraHint": "Regarded as one of the most embarrassing and stylish skill moves in world soccer."
      },
      {
        "word": "NUTMEGS",
        "category": "Between-Leg Passes",
        "hint": "Skillful kicks passing the ball directly through an opponent's legs.",
        "extraHint": "Causes stadiums to roar in appreciation of dazzling footwork skill."
      },
      {
        "word": "OCTAGON",
        "category": "MMA Cage",
        "hint": "Eight-sided padded wire cage used as the competition arena in UFC matches.",
        "extraHint": "Enclosed to keep fighters safely inside during takedowns and submission scrambles."
      },
      {
        "word": "OFFENSE",
        "category": "Attacking Unit",
        "hint": "The team in possession of the ball attempting to advance and score points.",
        "extraHint": "Utilizes scripted passing plays and dynamic ball movement to create scoring."
      },
      {
        "word": "OFFSIDE",
        "category": "Field Infraction",
        "hint": "Positioning infraction in soccer, hockey, and football restricting player positions.",
        "extraHint": "In soccer, an attacker cannot be nearer to the goal line than the second-to-last defender."
      },
      {
        "word": "OUTINGS",
        "category": "Pitcher Appearances",
        "hint": "A starting or relief pitcher's performance appearance in a game.",
        "extraHint": "Managers evaluate innings pitched, pitch counts, strikeouts, and walks."
      },
      {
        "word": "PADDLE",
        "category": "Handheld Racket",
        "hint": "Solid wooden, composite, or rubberized paddle used to hit balls in table tennis.",
        "extraHint": "Table tennis rubber pimples impart heavy backspin, topspin, and sidespin on balls."
      },
      {
        "word": "PANENKA",
        "category": "Chipped Penalty",
        "hint": "Audacious penalty kick chipped gently into the center as the goalie dives away.",
        "extraHint": "Invented by Antonin Panenka in the 1976 Euro final; requires supreme nerves."
      },
      {
        "word": "PARKOUR",
        "category": "Urban Movement",
        "hint": "Training discipline using movement developed from military obstacle course training.",
        "extraHint": "Athletes overcome urban architectural obstacles rapidly via vaults, wall runs, and rolls."
      },
      {
        "word": "PASSERS",
        "category": "Ball Distributors",
        "hint": "Athletes renowned for vision, touch, and accuracy in distributing passes.",
        "extraHint": "Elite playmakers unlock packed defensive lines with pinpoint forward passing."
      },
      {
        "word": "PENALTY",
        "category": "Disciplinary Sanction",
        "hint": "Punishment imposed for violation of sporting rules on players or teams.",
        "extraHint": "Can award free kicks, penalty shots, yardage losses, or player sin-bins."
      },
      {
        "word": "PITCHER",
        "category": "Baseball Thrower",
        "hint": "Player who throws baseballs from the mound toward the catcher's mitt.",
        "extraHint": "Masters arsenals of pitches including four-seam fastballs, sliders, and changeups."
      },
      {
        "word": "PITCHES",
        "category": "Mound Deliveries",
        "hint": "Baseball deliveries thrown toward home plate from the elevated pitching rubber.",
        "extraHint": "Pitchers mix fastballs, sliders, curveballs, and changeups to deceive batters."
      },
      {
        "word": "PLAYOFFS",
        "category": "Postseason Series",
        "hint": "Series of elimination games played after the regular season to determine champions.",
        "extraHint": "High-intensity postseason tournaments where every game and possession matters."
      },
      {
        "word": "PODIUM",
        "category": "Winner Platform",
        "hint": "Three-tiered platform where the top three finishers stand during medal ceremonies.",
        "extraHint": "The gold medalist stands atop the highest central tier flanked by silver and bronze."
      },
      {
        "word": "PUNTER",
        "category": "Special Teams Kicker",
        "hint": "Player who receives a long snap and drops the ball to kick it downfield before it touches turf.",
        "extraHint": "Aims to pin opposing offenses deep inside their own 20-yard line with high hang time."
      },
      {
        "word": "PUNTERS",
        "category": "Field Position Kickers",
        "hint": "Specialists who punt the football on fourth down to flip field position.",
        "extraHint": "Aims to launch high spiraling kicks pinned near opponent goal lines."
      },
      {
        "word": "RACKET",
        "category": "Strung Implement",
        "hint": "Lightweight frame strung with taut synthetic strings used in tennis and squash.",
        "extraHint": "Modern frames crafted from graphite and carbon fiber deliver lightweight power."
      },
      {
        "word": "RAFTING",
        "category": "Whitewater Sport",
        "hint": "Navigating an inflatable raft down turbulent whitewater river rapids.",
        "extraHint": "Rafters paddle synchronously under the commands of an experienced river guide."
      },
      {
        "word": "REBOUND",
        "category": "Carom Recovery",
        "hint": "Gaining possession of the ball after a missed field goal attempt in basketball.",
        "extraHint": "Hall of fame rebounders box out opposing players using hip position and leverage."
      },
      {
        "word": "REFEREE",
        "category": "Match Official",
        "hint": "Official with ultimate authority to enforce game rules on the field of play.",
        "extraHint": "Blows a whistle, signals fouls, and issues penalty cards in soccer and basketball."
      },
      {
        "word": "REFEREES",
        "category": "Game Arbiters",
        "hint": "Officials presiding over competitive matches with whistles and penalty cards.",
        "extraHint": "Maintain player safety, manage game flow, and enforce sporting regulations."
      },
      {
        "word": "RELIEVER",
        "category": "Bullpen Pitcher",
        "hint": "Pitcher who enters the game after the starting pitcher is removed from the mound.",
        "extraHint": "Brought into high-leverage innings with runners on base to strand opposing threats."
      },
      {
        "word": "RESERVES",
        "category": "Bench Substitutes",
        "hint": "Players who sit on the team bench ready to enter games as tactical substitutes.",
        "extraHint": "Provide energy, rest for starters, and specialized situational skills."
      },
      {
        "word": "RETURN",
        "category": "Service Answer",
        "hint": "Shot hitting an opponent's serve back across the net in tennis or badminton.",
        "extraHint": "A deep, penetrating return of serve neutralizes server advantage in tennis points."
      },
      {
        "word": "ROSTERS",
        "category": "Team Player Lists",
        "hint": "The official registered lists of eligible athletes belonging to a team.",
        "extraHint": "General managers construct rosters balancing superstar talent and cap space."
      },
      {
        "word": "ROWING",
        "category": "Oar Racing",
        "hint": "Sport of racing boats on water using oars locked into oarlocks as levers.",
        "extraHint": "Crew teams row in synchronized harmony guided by instructions from the coxswain."
      },
      {
        "word": "RUNNER",
        "category": "Track Athlete",
        "hint": "Athlete competing in foot races ranging from sprints to ultramarathons.",
        "extraHint": "Masters pacing, aerobic respiration, and tactical positioning on the track."
      },
      {
        "word": "RUNNERS",
        "category": "Foot Racers",
        "hint": "Athletes participating in track, road, and trail running events.",
        "extraHint": "Wear lightweight breathable singlets and carbon-plated racing shoes."
      },
      {
        "word": "RUNOUT",
        "category": "Cricket Dismissal",
        "hint": "Dismissal method in cricket when bails are knocked off while a batsman is running.",
        "extraHint": "Occurs when fielders throw the ball directly into the stumps before batsmen ground bat."
      },
      {
        "word": "SADDLE",
        "category": "Horse Seat",
        "hint": "Leather supportive structure strapped to the back of a horse for a rider.",
        "extraHint": "Fitted with stirrups to support rider balance during jumps and dressage routines."
      },
      {
        "word": "SAFETY",
        "category": "Deep Secondary",
        "hint": "Defensive football back positioned deep downfield to prevent long touchdown passes.",
        "extraHint": "Includes free safeties roaming deep centerfield and physical strong safeties near the box."
      },
      {
        "word": "SAILING",
        "category": "Wind-Powered Boating",
        "hint": "Navigating a boat propelled by the wind caught in fabric sails across water.",
        "extraHint": "Requires tactical mastery of wind shifts, boat trim, tacking, and gybing around buoys."
      },
      {
        "word": "SCORING",
        "category": "Points Generation",
        "hint": "The act of earning points, goals, or runs in athletic competition.",
        "extraHint": "Coaches design offensive plays to maximize scoring opportunities near the net."
      },
      {
        "word": "SEEDING",
        "category": "Tournament Ranking",
        "hint": "Process of ranking competitors to generate fair tournament bracket matchups.",
        "extraHint": "Prevents top-ranked athletes from eliminating each other in opening rounds."
      },
      {
        "word": "SERVES",
        "category": "Point Openers",
        "hint": "Overhead shots or throws putting the ball into active play to start points.",
        "extraHint": "Tennis aces occur when servers blast unreturnable serves inside service boxes."
      },
      {
        "word": "SETTERS",
        "category": "Volleyball Playmakers",
        "hint": "Volleyball players who receive passes and set the ball high for spikers.",
        "extraHint": "The quarterback of the volleyball court, orchestrating offensive hits."
      },
      {
        "word": "SHIELD",
        "category": "Protective Gear",
        "hint": "Protective guard worn over shins, groin, or teeth to deflect physical impacts.",
        "extraHint": "Shin shields prevent painful bruising from errant soccer cleat kicks."
      },
      {
        "word": "SHOOTING",
        "category": "Precision Target",
        "hint": "Competitive sport involving tests of precision, speed, and accuracy using firearms.",
        "extraHint": "Includes Olympic air rifle, pistol, clay pigeon trap, and skeet disciplines."
      },
      {
        "word": "SHOTPUT",
        "category": "Heavy Sphere Put",
        "hint": "Track and field event where competitors push or 'put' a heavy metal spherical ball.",
        "extraHint": "Weighs 16 lbs for men; athletes use rotational spin or glide techniques in a circle."
      },
      {
        "word": "SHOWDOWN",
        "category": "Climactic Contest",
        "hint": "High-stakes, anticipated confrontation between two legendary athletic rivals.",
        "extraHint": "Captivates sports audiences worldwide with intense championship drama."
      },
      {
        "word": "SKATER",
        "category": "Ice or Street Athlete",
        "hint": "Athlete who glides on ice skates, roller skates, or rollerblades.",
        "extraHint": "Figure skaters execute graceful triple axel jumps; speed skaters race laps."
      },
      {
        "word": "SKATERS",
        "category": "Ice Racers",
        "hint": "Athletes who glide on ice or pavement wearing bladed or wheeled skates.",
        "extraHint": "Compete in short track speed skating pack races around tight indoor ovals."
      },
      {
        "word": "SKATING",
        "category": "Ice or Street Glide",
        "hint": "Gliding on ice or pavement using bladed skates or four-wheeled roller skates.",
        "extraHint": "Encompasses speed skating sprint ovals and acrobatic figure skating choreography."
      },
      {
        "word": "SKELETON",
        "category": "Head-First Sledding",
        "hint": "Winter sliding sport where athletes sprint and dive headfirst onto small steel sleds.",
        "extraHint": "Competitors steer with subtle shoulder shifts inches above the roaring ice track."
      },
      {
        "word": "SKIBOOTS",
        "category": "Rigid Footwear",
        "hint": "Rigid plastic boots with metal buckles engineered to lock into ski bindings.",
        "extraHint": "Transfers subtle foot and ankle steering movements directly to ski edges."
      },
      {
        "word": "SKIING",
        "category": "Snow Gliding",
        "hint": "Gliding on snow using long, flat runners called skis attached to boots.",
        "extraHint": "Encompasses alpine downhill speed races, slalom gates, and cross-country treks."
      },
      {
        "word": "SNEAKER",
        "category": "Athletic Shoe",
        "hint": "Flexible rubber-soled sports shoe designed for athletic activity and gym running.",
        "extraHint": "Features shock-absorbing foam midsoles to cushion foot strike impact forces."
      },
      {
        "word": "SNOOKER",
        "category": "Cue Sport",
        "hint": "Cue sport played on a large green baize table with pockets using cues and 22 balls.",
        "extraHint": "Players alternate potting red balls and colored balls to achieve a maximum 147 break."
      },
      {
        "word": "SNORKEL",
        "category": "Breathing Tube",
        "hint": "Curved tube allowing swimmers to breathe air while floating face down in water.",
        "extraHint": "Enables surface snorkelers to observe coral reefs without lifting heads to breathe."
      },
      {
        "word": "SOCCER",
        "category": "Team Ball Sport",
        "hint": "The world's most popular sport played by two teams of eleven players kicking a ball.",
        "extraHint": "Governed globally by FIFA; players cannot touch the ball with hands or arms except goalkeepers."
      },
      {
        "word": "SOFTBALL",
        "category": "Baseball Variant",
        "hint": "Bat-and-ball sport played on a smaller diamond with underhand pitching deliveries.",
        "extraHint": "Features a larger, softer ball and seven innings of fast-pitch or slow-pitch action."
      },
      {
        "word": "SPARRING",
        "category": "Training Combat",
        "hint": "Form of training where athletes practice combat moves with controlled contact.",
        "extraHint": "Allows boxers and martial artists to sharpen reflexes without sustaining severe injury."
      },
      {
        "word": "SPIKERS",
        "category": "Attacking Hitters",
        "hint": "Volleyball attackers who jump and hit the set ball downwards with power.",
        "extraHint": "Hitters approach with explosive three-step jumps to smash balls down into courts."
      },
      {
        "word": "SPRINT",
        "category": "High-Speed Running",
        "hint": "Short-distance running race where athletes sprint at maximum velocity from blocks.",
        "extraHint": "Includes the classic 100m, 200m, and 400m Olympic dash events on synthetic tracks."
      },
      {
        "word": "SQUASH",
        "category": "Walled Court Sport",
        "hint": "High-intensity racket sport played in a four-walled court with a hollow rubber ball.",
        "extraHint": "Players alternate striking the ball against front walls before it bounces twice on floor."
      },
      {
        "word": "STADIA",
        "category": "Outdoor Venues",
        "hint": "Plural of stadium; large outdoor sporting venues with spectator grandstands.",
        "extraHint": "Surround regulation soccer pitches, gridiron fields, and running track ovals."
      },
      {
        "word": "STARTER",
        "category": "Opening Player",
        "hint": "Player selected in the starting lineup to begin a match from the opening whistle.",
        "extraHint": "Competes for initial game momentum before giving way to substitute reserves."
      },
      {
        "word": "STEPBACK",
        "category": "Separation Jumper",
        "hint": "Basketball shooting move where a player steps backward before jumping to shoot.",
        "extraHint": "Creates space between shooter and defender for an uncontested three-pointer."
      },
      {
        "word": "STRIKE",
        "category": "Baseball Whiff",
        "hint": "Pitch swung at and missed, hit foul, or passing through the strike zone unhit.",
        "extraHint": "Accumulating three strikes results in a strikeout, retiring the batter."
      },
      {
        "word": "STRIKER",
        "category": "Forward Scorer",
        "hint": "Attacking soccer forward whose primary objective is scoring goals.",
        "extraHint": "Positioned nearest to opponent net, ready to capitalize on crosses and through balls."
      },
      {
        "word": "STRIKES",
        "category": "Baseball Count",
        "hint": "Called or swinging strikes charged to batters during at-bats.",
        "extraHint": "Three strikes accumulate to record a strikeout against the batting team."
      },
      {
        "word": "SURFERS",
        "category": "Wave Athletes",
        "hint": "Riders who paddle out and ride breaking ocean waves standing on surfboards.",
        "extraHint": "Wax board decks for foot grip and wear ankle leashes connected to tails."
      },
      {
        "word": "SURFING",
        "category": "Ocean Wave Riding",
        "hint": "Water sport where wave riders ride standing up on surfboards on ocean swells.",
        "extraHint": "Pioneered in ancient Polynesia and Hawaii; scored on tube rides, carves, and airs."
      },
      {
        "word": "SWEEPER",
        "category": "Free Defender",
        "hint": "Soccer defender positioned behind the defensive backline to sweep up through balls.",
        "extraHint": "Pioneered in Italian catenaccio systems; acts as the last line before the goalkeeper."
      },
      {
        "word": "SWIMMER",
        "category": "Aquatic Racer",
        "hint": "Athlete who propels through water in competitive racing or artistic events.",
        "extraHint": "Trains in 50-meter Olympic pools, mastering streamlined flipper turns."
      },
      {
        "word": "SWIMMERS",
        "category": "Pool Racers",
        "hint": "Athletes who compete in pool and open-water swimming races.",
        "extraHint": "Train with kickboards, pull buoys, and paddles to refine stroke efficiency."
      },
      {
        "word": "SWIMMING",
        "category": "Aquatic Racing",
        "hint": "Self-propulsion through water using coordinated arm strokes and kicking legs.",
        "extraHint": "Competitive strokes include freestyle, backstroke, breaststroke, and butterfly."
      },
      {
        "word": "TACKLE",
        "category": "Defensive Halting",
        "hint": "Physical act of forcing an opponent carrying the ball down to the playing ground.",
        "extraHint": "Legal defensive technique executed across American football, rugby, and Aussie rules."
      },
      {
        "word": "TACKLER",
        "category": "Defensive Hitter",
        "hint": "Player on defense who executes a physical tackle on the ball-carrier.",
        "extraHint": "Form tacklers wrap arms around thighs and drive through hips on contact."
      },
      {
        "word": "TACKLES",
        "category": "Physical Challenges",
        "hint": "Physical challenges dispossessing opponents of the ball or halting runners.",
        "extraHint": "Must be executed with proper form and timing to avoid dangerous injury penalties."
      },
      {
        "word": "TACKLING",
        "category": "Halting Action",
        "hint": "Physical act of stopping an opponent carrying the ball in contact sports.",
        "extraHint": "Fundamental defensive skill in rugby, American football, and soccer."
      },
      {
        "word": "TAKEDOWN",
        "category": "Ground Maneuver",
        "hint": "Technique that brings an opposing fighter from a standing posture to the canvas.",
        "extraHint": "Scored as two points in collegiate wrestling; executes via single or double leg drives."
      },
      {
        "word": "TARGET",
        "category": "Precision Mark",
        "hint": "Circular concentric board aimed at in archery, rifle shooting, and darts.",
        "extraHint": "Hitting the innermost central ring scores maximum points in shooting sports."
      },
      {
        "word": "TENNIS",
        "category": "Racket Court Sport",
        "hint": "Racket sport played individually or in pairs hitting felt balls across a center net.",
        "extraHint": "Competed on grass, clay, and hard courts; Grand Slams include Wimbledon and US Open."
      },
      {
        "word": "THROWIN",
        "category": "Sideline Restart",
        "hint": "Method of restarting soccer play with two hands overhead after ball crosses touchline.",
        "extraHint": "Both feet must remain firmly on or behind the sideline during the throw-in delivery."
      },
      {
        "word": "TIGHTEND",
        "category": "Hybrid Footballer",
        "hint": "Offensive football player who lines up on the offensive line to block and catch passes.",
        "extraHint": "Possesses the size of an offensive lineman with the speed of a wide receiver."
      },
      {
        "word": "TIMEOUT",
        "category": "Clock Stoppage",
        "hint": "Temporary halt of game play called by coaches to rest players and plan tactics.",
        "extraHint": "Coaches call timeouts in final seconds to advance the ball and draw up plays."
      },
      {
        "word": "TOURNEY",
        "category": "Tournament Series",
        "hint": "Colloquial term for a multi-game tournament or championship contest.",
        "extraHint": "Fans pack sports bars during March basketball tourney bracket games."
      },
      {
        "word": "TRACKS",
        "category": "Running Ovals",
        "hint": "Synthetic rubberized running ovals with lane lines for track and field races.",
        "extraHint": "Standard outdoor tracks measure 400 meters per lap around two parallel straights."
      },
      {
        "word": "TROPHY",
        "category": "Victory Prize",
        "hint": "Ornamental cup or statue awarded as a tangible prize for sporting victory.",
        "extraHint": "Iconic examples include the FIFA World Cup, Stanley Cup, and Wimbledon Trophy."
      },
      {
        "word": "TURNOVER",
        "category": "Lost Possession",
        "hint": "Occurs when a team loses possession of the ball to the opposing team via error.",
        "extraHint": "Caused by bad passes, traveling violations, stepping out of bounds, or steals."
      },
      {
        "word": "UMPIRE",
        "category": "Official Arbiter",
        "hint": "Official presiding over baseball, cricket, tennis, and field sports.",
        "extraHint": "Calls balls and strikes behind home plate or makes leg-before-wicket rulings."
      },
      {
        "word": "UMPIRES",
        "category": "Baseball Officials",
        "hint": "Crew of officials presiding over baseball and cricket matches.",
        "extraHint": "Four-man crews cover home plate and the three infield base bags in baseball."
      },
      {
        "word": "UPPERCUT",
        "category": "Upward Boxing Punch",
        "hint": "Vertical, upward punch thrown with the rear hand targeting the opponent's chin.",
        "extraHint": "Generates immense knockout power by driving up from the hips and knees."
      },
      {
        "word": "VAULTER",
        "category": "Pole Vault Specialist",
        "hint": "Track athlete who uses a long fiberglass pole to catapult over a high crossbar.",
        "extraHint": "Sprints at full speed with a 16-foot pole before planting into the slide box."
      },
      {
        "word": "VICTORY",
        "category": "Competitive Triumph",
        "hint": "The defeat of an opponent in an athletic game, tournament, or race.",
        "extraHint": "The ultimate goal driving athletes through thousands of hours of training."
      },
      {
        "word": "VOLLEY",
        "category": "Mid-Air Strike",
        "hint": "Striking a ball in mid-air before it bounces onto the court or field surface.",
        "extraHint": "Classic tennis maneuver executed at net to put away points with reflex drop volleys."
      },
      {
        "word": "WAKESURF",
        "category": "Endless Boat Wave",
        "hint": "Surfing the continuous wave generated directly behind a specialized ballast boat.",
        "extraHint": "Riders toss the tow rope into the boat and surf the endless boat wave freely."
      },
      {
        "word": "WEIGHTS",
        "category": "Resistance Plates",
        "hint": "Heavy iron or urethane plates lifted to build muscular strength and hypertrophy.",
        "extraHint": "Progressively loaded onto bars or cable machines to challenge athlete strength."
      },
      {
        "word": "WETSUIT",
        "category": "Thermal Neoprene",
        "hint": "Tight garment made of foamed neoprene worn by surfers to retain body heat in cold sea.",
        "extraHint": "Traps a thin layer of water against skin warmed naturally by body heat."
      },
      {
        "word": "WINGER",
        "category": "Flank Attacker",
        "hint": "Player positioned along the outer touchlines of soccer, rugby, or hockey fields.",
        "extraHint": "Sprints down flanks to whip aerial crosses into penalty boxes for strikers."
      },
      {
        "word": "WINNER",
        "category": "Triumphant Athlete",
        "hint": "The competitor or team that finishes first or scores most points in a contest.",
        "extraHint": "Ascends the top tier of the podium to receive gold medals and championship trophies."
      },
      {
        "word": "WINNERS",
        "category": "Triumphant Athletes",
        "hint": "The competitors who finish in first place or score more points in a game.",
        "extraHint": "Celebrate championship victories with champagne showers in locker rooms."
      },
      {
        "word": "WRESTLER",
        "category": "Grappling Combatant",
        "hint": "Athlete who competes in hand-to-hand combat using pins, throws, and takedowns.",
        "extraHint": "Competes within strict weight classes on circular cushioned wrestling mats."
      }
    ],
    "hard": [
      {
        "word": "ATHLETICISM",
        "category": "Physical Prowess",
        "hint": "The physical qualities such as strength, agility, and speed of an athlete.",
        "extraHint": "Evaluated by sports scouts measuring vertical jumps, sprints, and flexibility."
      },
      {
        "word": "BACKSTROKE",
        "category": "Inverted Swimming",
        "hint": "Swimming stroke swum on the back using alternating arm pulls and flutter kicks.",
        "extraHint": "Swimmers start inside the pool facing the starting blocks, pulling from wall."
      },
      {
        "word": "BADMINTON",
        "category": "Shuttlecock Sport",
        "hint": "Racquet sport played using lightweight racquets to hit a feathered shuttlecock.",
        "extraHint": "The shuttlecock can reach smash speeds over 300 mph, the fastest projectile in sports."
      },
      {
        "word": "BAREFOOTING",
        "category": "No-Ski Water Tow",
        "hint": "High-speed waterskiing performed on bare human feet without using any skis.",
        "extraHint": "Requires boat speeds exceeding 40 mph to generate enough lift under bare soles."
      },
      {
        "word": "BASESTEALING",
        "category": "Speed Baserunning",
        "hint": "The act of advancing to the next baseball base while the pitcher throws a pitch.",
        "extraHint": "Demands explosive first-step acceleration and headfirst sliding technique."
      },
      {
        "word": "BASKETBALL",
        "category": "Court Sport",
        "hint": "Fast-paced game where five players shoot an inflated ball through an elevated hoop.",
        "extraHint": "Invented in 1891 by Dr. James Naismith; features dribbling, passing, and slam dunks."
      },
      {
        "word": "BICYCLEKICK",
        "category": "Overhead Acrobat",
        "hint": "Striking an aerial ball with an acrobatic overhead bicycle kick while airborne.",
        "extraHint": "Player throws body backward into the air, kicking the ball upside-down into the net."
      },
      {
        "word": "BILLIARDS",
        "category": "Pocketless Table",
        "hint": "Cue sport played on a cloth-covered table without pockets using three balls.",
        "extraHint": "Points are scored by cannoning one cue ball off both object balls successfully."
      },
      {
        "word": "BLACKBELT",
        "category": "Master Rank",
        "hint": "High rank awarded in martial arts signifying mastery of foundational techniques.",
        "extraHint": "Represents years of disciplined training, dedication, and technical proficiency."
      },
      {
        "word": "BLEACHERS",
        "category": "Tiered Benches",
        "hint": "Raised, tiered rows of uncovered bench seating for spectators in stadiums.",
        "extraHint": "Traditional, affordable gathering place for passionate hometown sports fans."
      },
      {
        "word": "BOARDERCROSS",
        "category": "Multi-Rider Snow Race",
        "hint": "High-speed snowboard race where four or six riders race down a banked berm track.",
        "extraHint": "Riders jostle shoulder-to-shoulder over rollers, gap jumps, and sharp switchbacks."
      },
      {
        "word": "BOBSLEIGH",
        "category": "Gravity Sledding",
        "hint": "Winter sport where teams make timed runs down narrow, twisting iced tracks in sleds.",
        "extraHint": "Speeds exceed 90 mph as sleds pull massive gravitational G-forces around banked ice walls."
      },
      {
        "word": "BODYBUILDING",
        "category": "Physique Sport",
        "hint": "Sport utilizing progressive resistance exercise to develop muscular symmetry.",
        "extraHint": "Competitors pose on stage judged on muscle mass, definition, and stage presence."
      },
      {
        "word": "BREASTSTROKE",
        "category": "Froglike Stroke",
        "hint": "Swimming stroke swum chest-down where arms push forward and legs frog kick.",
        "extraHint": "The oldest known swimming stroke; requires simultaneous, symmetrical limb motion."
      },
      {
        "word": "BUNGEEJUMPING",
        "category": "Elastic Freefall",
        "hint": "Leaping from a tall structure while connected to a thick elastic suspension cord.",
        "extraHint": "Jumpers freefall toward rivers or canyons before the bungee cord rebounds them."
      },
      {
        "word": "CALISTHENICS",
        "category": "Bodyweight Fitness",
        "hint": "Exercises utilizing only body weight as resistance to develop strength and agility.",
        "extraHint": "Mastery over bodyweight movements like muscle-ups, handstands, and levers."
      },
      {
        "word": "CANYONING",
        "category": "Gorge Exploration",
        "hint": "Navigating down mountain canyons using scrambling, abseiling, jumping, and sliding.",
        "extraHint": "Climbers rappel through gushing waterfalls and leap into natural rock plunge pools."
      },
      {
        "word": "CARABINER",
        "category": "Climbing Clip",
        "hint": "Metal loop with a spring-loaded gate used to connect climbing ropes and gear.",
        "extraHint": "Rated to hold thousands of pounds of force; essential for rock climbing anchor systems."
      },
      {
        "word": "CARDIOVASCULAR",
        "category": "Aerobic Heart System",
        "hint": "Relating to the circulatory heart and blood vessels providing oxygen to muscles.",
        "extraHint": "Endurance runners develop powerful cardiovascular efficiency through distance running."
      },
      {
        "word": "CENTERFIELD",
        "category": "Outfield General",
        "hint": "Outfielder covering the vast middle pasture with exceptional speed.",
        "extraHint": "Commands the outfield, tracking down deep fly balls in the power alleys."
      },
      {
        "word": "CHAMPIONSHIP",
        "category": "Title Tournament",
        "hint": "Competition to decide the overall winner or champion in a sport league.",
        "extraHint": "Winning teams hoist league championship trophies after grueling playoff tournaments."
      },
      {
        "word": "CHAMPIONSHIPS",
        "category": "Title Contests",
        "hint": "Competitions held to decide the supreme champion of a sport league.",
        "extraHint": "Victorious players receive championship rings and banner raisings."
      },
      {
        "word": "CLUBHOUSE",
        "category": "Locker Room Suite",
        "hint": "Locker room and lounge facility where professional team athletes prepare for games.",
        "extraHint": "Features treatment tables, hydrotherapy baths, dining rooms, and video review rooms."
      },
      {
        "word": "COASTEERING",
        "category": "Rocky Coast Traverse",
        "hint": "Traversing rocky intertidal coastlines on foot or swimming without boats.",
        "extraHint": "Combines sea swimming, cliff jumping, wave riding, and technical rock scrambling."
      },
      {
        "word": "COMPETITION",
        "category": "Athletic Contest",
        "hint": "Event or contest in which people compete against each other to win.",
        "extraHint": "Drives athletes to train relentlessly to achieve peak physical performance."
      },
      {
        "word": "CORNERBACK",
        "category": "Cover Corner",
        "hint": "Defensive back positioned across from wide receivers to contest downfield passes.",
        "extraHint": "Requires elite backward hip-turning agility and breakaway sprinting speed."
      },
      {
        "word": "CORNERFLAG",
        "category": "Pitch Marker",
        "hint": "Bright flag mounted on a flexible post placed at the four corners of a soccer pitch.",
        "extraHint": "Marks where corner kicks are taken; cannot be moved or removed during play."
      },
      {
        "word": "CORNERKICK",
        "category": "Restart From Corner",
        "hint": "Free kick taken from the corner arc after the ball crosses goal line off a defender.",
        "extraHint": "Inswinging and outswinging crosses provide prime aerial scoring opportunities."
      },
      {
        "word": "CROSSOVER",
        "category": "Ankle-Breaker Move",
        "hint": "Dribbling maneuver where a basketball player bounces the ball rapidly across body.",
        "extraHint": "Changes direction instantaneously to shake off defenders and drive to the hoop."
      },
      {
        "word": "DECATHLETE",
        "category": "All-Around Track Athlete",
        "hint": "Track and field athlete competing across ten running, jumping, and throwing events.",
        "extraHint": "Must excel in explosive sprinting, high jumping, throwing, and distance running."
      },
      {
        "word": "DECATHLON",
        "category": "Ten-Event Contest",
        "hint": "Combined track and field competition consisting of ten diverse sporting events.",
        "extraHint": "The winner of the Olympic decathlon is traditionally crowned the world's greatest athlete."
      },
      {
        "word": "DEFENSIVE",
        "category": "Protecting Net",
        "hint": "Relating to the prevention of scoring by the opposing athletic team.",
        "extraHint": "Defensive specialists focus on shot contests, deflections, and rebounds."
      },
      {
        "word": "DODGEBALL",
        "category": "Court Elimination",
        "hint": "Gym sport where players attempt to throw inflated balls and hit opponents to eliminate them.",
        "extraHint": "Catching an opponent's thrown ball allows an eliminated teammate to re-enter play."
      },
      {
        "word": "DRAGONBOAT",
        "category": "Paddled Canoe Race",
        "hint": "Long, traditional Chinese paddled watercraft decorated with dragon heads.",
        "extraHint": "Twenty paddlers paddle in sync to the rhythmic beat of a stern drum."
      },
      {
        "word": "DRAGRACING",
        "category": "Quarter-Mile Sprint",
        "hint": "Accelerating two high-horsepower race cars down a straight quarter-mile track.",
        "extraHint": "Top Fuel dragsters generate 11,000 horsepower, reaching 330 mph in under 4 seconds."
      },
      {
        "word": "EXPEDITION",
        "category": "Mountaineering Trek",
        "hint": "Major organized journey undertaken by mountaineers to summit remote peaks.",
        "extraHint": "Teams establish high-altitude camps with Sherpa guides on Mount Everest."
      },
      {
        "word": "EXTRATIME",
        "category": "Overtime Period",
        "hint": "Additional playing time added to a deadlocked match to decide a winner.",
        "extraHint": "Consists of two 15-minute halves in soccer tournaments before penalty shootouts."
      },
      {
        "word": "FASTBREAK",
        "category": "Speed Attack",
        "hint": "Offensive transition strategy rushing the ball downcourt before defense sets up.",
        "extraHint": "Produces easy transition layups, alley-oops, and open trailer three-pointers."
      },
      {
        "word": "FIGURESKATING",
        "category": "Ice Choreography",
        "hint": "Sport where individuals or pairs perform spins, jumps, and footwork on ice.",
        "extraHint": "Scored on technical elements like quadruple toe loops and artistic musicality."
      },
      {
        "word": "FIRSTBASE",
        "category": "Infield Corner",
        "hint": "Baseball infielder stationed at first base tasked with catching infield throws.",
        "extraHint": "Tall, flexible fielders stretch off the bag to scoop errant throws for force-outs."
      },
      {
        "word": "FLYFISHING",
        "category": "Artificial Fly Casting",
        "hint": "Angling method using a weighted fly line to cast lightweight artificial insect lures.",
        "extraHint": "Anglers cast rhythmic loops of line, landing delicate dry flies on river currents."
      },
      {
        "word": "FORMULAONE",
        "category": "Apex Open-Wheel",
        "hint": "The highest class of international single-seater auto racing sanctioned by FIA.",
        "extraHint": "Hybrid turbo race cars pull over 5 Gs through corners at speeds exceeding 220 mph."
      },
      {
        "word": "FOULSHOOTING",
        "category": "Free Throw Shots",
        "hint": "Taking uncontested 15-foot free throw shots after being fouled in basketball.",
        "extraHint": "Consistent foul shooting in the clutch wins tight fourth-quarter basketball games."
      },
      {
        "word": "FREETHROW",
        "category": "Uncontested Shot",
        "hint": "Unguarded shot from the free-throw line awarded after fouls worth one point.",
        "extraHint": "Shooters take rhythm dribbles and deep breaths before shooting from 15 feet."
      },
      {
        "word": "FREEWEIGHTS",
        "category": "Unrestricted Loads",
        "hint": "Lifting weights such as barbells and dumbbells not constrained by machines.",
        "extraHint": "Engages stabilizing core muscles throughout natural three-dimensional movement arcs."
      },
      {
        "word": "GOALKEEPER",
        "category": "Net Guardian",
        "hint": "Designated player defending the goal against opponent scoring shots.",
        "extraHint": "Allowed to use hands within the penalty box in soccer to make diving saves."
      },
      {
        "word": "GOALKEEPERS",
        "category": "Net Protectors",
        "hint": "Specialized athletes stationed in goal to prevent pucks or balls from entering.",
        "extraHint": "Wear protective padded gloves to catch shots and direct defensive wall alignments."
      },
      {
        "word": "GOALTENDER",
        "category": "Hockey Netminder",
        "hint": "The ice hockey goalie who defends the net against vulcanized rubber slapshots.",
        "extraHint": "Drops into butterfly slides on ice to cover lower net corners with leg pads."
      },
      {
        "word": "GRAPPLING",
        "category": "Close Contact Wrestling",
        "hint": "Hand-to-hand combat technique that involves seizing and gripping the opponent.",
        "extraHint": "Forms the core of submission wrestling, Brazilian jiu-jitsu, and Olympic judo."
      },
      {
        "word": "GYMNASTICS",
        "category": "Acrobatic Sport",
        "hint": "Sport involving physical exercises requiring balance, strength, and flexibility.",
        "extraHint": "Disciplines include floor exercise, balance beam, vault, and uneven bars."
      },
      {
        "word": "HEPTATHLETE",
        "category": "Multi-Event Woman",
        "hint": "Female track athlete competing across the seven events of the heptathlon.",
        "extraHint": "Demands speed in hurdles, endurance in the 800m, and technical field mastery."
      },
      {
        "word": "HEPTATHLON",
        "category": "Seven-Event Contest",
        "hint": "Track and field combined contest consisting of seven different events for women.",
        "extraHint": "Includes 100m hurdles, high jump, shot put, 200m, long jump, javelin, and 800m."
      },
      {
        "word": "HOMERUNNER",
        "category": "Slugger Batter",
        "hint": "Baseball batter celebrated for hitting balls over outfield walls for home runs.",
        "extraHint": "Power sluggers drive in multiple runs with towering round-tripper hits."
      },
      {
        "word": "HYDROFOIL",
        "category": "Elevated Wing Board",
        "hint": "Watercraft featuring underwater wings that lift the entire hull out of the water.",
        "extraHint": "Drastically cuts hydrodynamic drag, flying smoothly above choppy ocean swells."
      },
      {
        "word": "INLINEHOCKEY",
        "category": "Inline Skate Sport",
        "hint": "Fast team hockey game played on dry indoor sport court tiles with inline skates.",
        "extraHint": "Fast and flowing, played with four skaters aside and no physical checking allowed."
      },
      {
        "word": "INTERCEPTION",
        "category": "Turnover Catch",
        "hint": "Catching a pass thrown by the opposing team's quarterback in football.",
        "extraHint": "Defensive backs can run intercepted passes back into the endzone for a 'pick-six.'"
      },
      {
        "word": "INTERCEPTIONS",
        "category": "Turnover Catches",
        "hint": "Catches made by defenders intercepting passes thrown by opposing quarterbacks.",
        "extraHint": "Momentum-shifting plays that flip field position and can be returned for touchdowns."
      },
      {
        "word": "JUMBOTRON",
        "category": "Giant Stadium Screen",
        "hint": "Massive high-definition video display screen suspended inside modern sports arenas.",
        "extraHint": "Shows live game action, instant slow-motion replays, and crowd kiss cams."
      },
      {
        "word": "KICKBOXING",
        "category": "Striking Combat",
        "hint": "Stand-up combat sport based on kicking and punching with padded gloves.",
        "extraHint": "Combines western boxing punches with dynamic martial arts roundhouse kicks."
      },
      {
        "word": "KITESURFING",
        "category": "Power Kite Boarding",
        "hint": "Water sport where wind power propels riders across water using a large kite.",
        "extraHint": "Riders can launch themselves 50 feet into the air to perform aerial board grabs."
      },
      {
        "word": "KNEEBOARD",
        "category": "Kneeling Water Board",
        "hint": "Towed watersport where the rider kneels on a padded contoured board with strap.",
        "extraHint": "Accessible entry into watersports, permitting effortless carving turns and flips."
      },
      {
        "word": "LEADERBOARD",
        "category": "Score Standings",
        "hint": "Display board showing the current rankings and scores of competitors in a tournament.",
        "extraHint": "Golf leaderboards update shot-by-shot, showing who leads under-par scores."
      },
      {
        "word": "LEFTFIELD",
        "category": "Outfield Position",
        "hint": "Outfield player defending the left side of the outfield behind the shortstop.",
        "extraHint": "Fields line drives pulled into the gap by right-handed power pull hitters."
      },
      {
        "word": "LINEBACKER",
        "category": "Defensive Anchor",
        "hint": "Defensive player in American football lined up behind defensive linemen.",
        "extraHint": "Tasks include tackling rushing running backs and dropping back into pass coverage."
      },
      {
        "word": "LINEBACKERS",
        "category": "Defensive Footballers",
        "hint": "Key defensive players positioned behind the defensive line in football.",
        "extraHint": "Act as the quarterbacks of the defense, calling out opposing pre-snap audibles."
      },
      {
        "word": "MARATHONER",
        "category": "Distance Runner",
        "hint": "Long-distance runner who specializes in competing in 26.2-mile road races.",
        "extraHint": "Undergoes months of high-mileage training to conquer cardiovascular fatigue."
      },
      {
        "word": "MIDFIELDER",
        "category": "Pitch Engine",
        "hint": "Soccer player positioned between defenders and forwards linking team play.",
        "extraHint": "Commands the center of the pitch, distributing passes and breaking up attacks."
      },
      {
        "word": "MIDFIELDERS",
        "category": "Center Pitch Players",
        "hint": "Soccer players operating across the middle third connecting defense and attack.",
        "extraHint": "Box-to-box midfielders cover miles of turf tackling and initiating attacks."
      },
      {
        "word": "MOTOCROSS",
        "category": "Off-Road Motorcycle",
        "hint": "Off-road motorcycle racing held on enclosed outdoor dirt courses with jumps.",
        "extraHint": "Riders navigate ruts, whoops, and double jumps on powerful suspension dirt bikes."
      },
      {
        "word": "MOTORSPORTS",
        "category": "Engine Racing",
        "hint": "High-speed competitions involving the racing of motorized vehicles.",
        "extraHint": "Encompasses Formula One Grand Prix circuits, NASCAR ovals, and Dakar rallies."
      },
      {
        "word": "MOUNTAINBIKING",
        "category": "Off-Road Cycling",
        "hint": "Cycling off-road over rough terrain using specially designed mountain bicycles.",
        "extraHint": "Equipped with wide knobby tires, hydraulic disc brakes, and plush front/rear shocks."
      },
      {
        "word": "MOUNTAINEERING",
        "category": "Alpine Peak Ascent",
        "hint": "Sport of climbing high mountains involving technical snow, ice, and rock routes.",
        "extraHint": "Climbers use crampons and ice axes to navigate crevasse fields and summit peaks."
      },
      {
        "word": "MOUTHGUARD",
        "category": "Dental Protector",
        "hint": "Protective flexible plastic guard worn over teeth to prevent concussion and fracture.",
        "extraHint": "Mandatory safety equipment in boxing, football, hockey, rugby, and martial arts."
      },
      {
        "word": "NOSETACKLE",
        "category": "Interior Lineman",
        "hint": "Massive defensive lineman lined up directly opposite the offensive center.",
        "extraHint": "Demands double-team blocks to stop inside running plays through the interior A-gap."
      },
      {
        "word": "OFFENSIVE",
        "category": "Scoring Attack",
        "hint": "Relating to the generation of points and attacks against opponent defenses.",
        "extraHint": "Modern offenses utilize spacing and analytics to generate efficient shots."
      },
      {
        "word": "OFFSIDELINE",
        "category": "Tactical Offside",
        "hint": "Imaginary transverse line determining player offside positions on a pitch.",
        "extraHint": "Defenders coordinate steps to maintain an offside line against attacking forwards."
      },
      {
        "word": "OFFSIDETRAP",
        "category": "Defensive Tactic",
        "hint": "Tactical maneuver where defenders step up in unison to catch attackers offside.",
        "extraHint": "Requires flawless defensive communication; mistakes leave attackers clean on goal."
      },
      {
        "word": "OUTFIELDER",
        "category": "Deep Defense",
        "hint": "Baseball player stationed beyond the infield bases to catch deep fly balls.",
        "extraHint": "Encompasses left, center, and right fielders possessing strong throwing arms."
      },
      {
        "word": "OUTFIELDERS",
        "category": "Baseball Deep Field",
        "hint": "Defensive baseball players covering the deep pasture beyond the infield dirt.",
        "extraHint": "Sprint to track down deep fly balls and rob home runs over outfield walls."
      },
      {
        "word": "PADDLEBOARDING",
        "category": "Stand-Up Paddling",
        "hint": "Water sport where riders stand on large floating boards using a long single paddle.",
        "extraHint": "Popular on calm ocean bays, scenic lakes, and ocean surf breaks worldwide."
      },
      {
        "word": "PARAGLIDING",
        "category": "Glider Canopy Flight",
        "hint": "Foot-launched glider aircraft where the pilot sits in a harness suspended beneath canopy.",
        "extraHint": "Soars for hours along mountain ridges, climbing thousands of feet on thermal air."
      },
      {
        "word": "PENALTYBOX",
        "category": "Sin Bin Enclosure",
        "hint": "Enclosed bench area in ice hockey where penalized players serve time penalties.",
        "extraHint": "Forces penalized teams to play short-handed during opponent power plays."
      },
      {
        "word": "PENALTYKICK",
        "category": "Direct Net Strike",
        "hint": "Uncontested direct shot at goal from twelve yards awarded for penalty box fouls.",
        "extraHint": "High-pressure duel between penalty shooter and diving goalkeeper in soccer."
      },
      {
        "word": "PENALTYSHOOTOUT",
        "category": "Deciding Shootout",
        "hint": "Tiebreaker method in soccer or hockey where individual players take penalty shots.",
        "extraHint": "Goalkeepers guess dive angles while shooters aim for side netting under pressure."
      },
      {
        "word": "PENTATHLON",
        "category": "Five-Event Sport",
        "hint": "Olympic sport consisting of fencing, swimming, horse jumping, laser run, and shooting.",
        "extraHint": "Originally conceived by Baron Pierre de Coubertin to simulate cavalry survival skills."
      },
      {
        "word": "PICKLEBALL",
        "category": "Paddle Sport",
        "hint": "Fast-growing paddle sport combining elements of tennis, badminton, and ping pong.",
        "extraHint": "Played on a badminton-sized court with perforated plastic wiffle balls and solid paddles."
      },
      {
        "word": "PLAYGROUND",
        "category": "Recreational Court",
        "hint": "Outdoor community recreational area equipped with basketball courts and blacktop.",
        "extraHint": "Where generations of athletes first learn fundamentals and love for sports."
      },
      {
        "word": "PLAYMAKER",
        "category": "Offensive Creator",
        "hint": "Player whose creative vision, passing, and intelligence controls team tempo.",
        "extraHint": "Wears the prestigious number 10 jersey in soccer; unlocks stubborn defenses with assists."
      },
      {
        "word": "POINTGUARD",
        "category": "Floor General",
        "hint": "Basketball guard who dribbles the ball upcourt and orchestrates offensive plays.",
        "extraHint": "Possesses exceptional ball-handling, passing vision, and basketball IQ."
      },
      {
        "word": "POLEVAULT",
        "category": "Vertical Jump",
        "hint": "Track and field event where athletes vault over a high crossbar using a flexible pole.",
        "extraHint": "Poles made of carbon fiber and fiberglass flex to propel athletes over 20 feet high."
      },
      {
        "word": "POWERLIFTING",
        "category": "Heavy Barbell Sport",
        "hint": "Strength sport consisting of three attempts at maximal weight on three lifts.",
        "extraHint": "Competitors perform the squat, bench press, and deadlift in weight categories."
      },
      {
        "word": "QUARTERBACK",
        "category": "Offensive Field General",
        "hint": "Player directing offensive play in football, taking snaps and passing downfield.",
        "extraHint": "Calls audibles at the line of scrimmage, reads defenses, and throws touchdown passes."
      },
      {
        "word": "QUARTERBACKS",
        "category": "Pass Callers",
        "hint": "The leaders of American football offenses who handle snaps on every play.",
        "extraHint": "Must read complex coverages in fractions of a second under heavy pass rushes."
      },
      {
        "word": "RESISTANCE",
        "category": "Muscular Training",
        "hint": "Form of physical training using opposing force to build muscular strength.",
        "extraHint": "Utilizes barbells, elastic bands, or bodyweight to stimulate muscle hypertrophy."
      },
      {
        "word": "RIGHTFIELD",
        "category": "Deep Outfield",
        "hint": "Outfielder stationed in right field who requires a powerful throwing arm.",
        "extraHint": "Must make long, accurate throws to third base to prevent runners from advancing."
      },
      {
        "word": "ROLLERDERBY",
        "category": "Oval Track Contact",
        "hint": "Contact sport played by two teams of roller skaters circling an oval track.",
        "extraHint": "Jammers score points by lapping opposing blockers while teammates clear paths."
      },
      {
        "word": "ROLLERHOCKEY",
        "category": "Quad Skate Hockey",
        "hint": "Variant of hockey played on dry, smooth pavement or wood using roller skates.",
        "extraHint": "Popular in Europe and South America, played with quad skates and a curved stick."
      },
      {
        "word": "ROUNDHOUSE",
        "category": "Spinning Kick",
        "hint": "Kicking strike where the leg moves in an arc with the hip, striking with shin.",
        "extraHint": "The signature power kick in Muay Thai and kickboxing that can break ribs."
      },
      {
        "word": "SCOREBOARD",
        "category": "Digital Display",
        "hint": "Large board in a stadium showing the score of a game, remaining time, and stats.",
        "extraHint": "Modern stadium jumbotrons display instant high-definition video replays to fans."
      },
      {
        "word": "SCORECARDS",
        "category": "Official Records",
        "hint": "Documents or digital logs recording hole scores and stats during golf or cricket.",
        "extraHint": "Golfers sign scorecards after rounds to verify stroke counts with playing partners."
      },
      {
        "word": "SECONDBASE",
        "category": "Middle Infield",
        "hint": "Infielder stationed between first and second base, coordinating double plays.",
        "extraHint": "Feeds throws to the shortstop stepping across the second base bag."
      },
      {
        "word": "SHINGUARD",
        "category": "Shin Armor",
        "hint": "Protective equipment worn across shins to shield the tibia from kicking cleats.",
        "extraHint": "Worn beneath tall soccer socks to protect players from painful shin impacts."
      },
      {
        "word": "SHORTSTOP",
        "category": "Infield Anchor",
        "hint": "Defensive baseball position between second and third base requiring agility.",
        "extraHint": "Anchors double plays and fields ground balls hit into the critical infield hole."
      },
      {
        "word": "SHUTTLECOCK",
        "category": "Birdie Projectile",
        "hint": "High-drag projectile used in badminton consisting of feathers in a cork base.",
        "extraHint": "Features sixteen overlapping goose feathers forming an aerodynamic cone."
      },
      {
        "word": "SKATEBOARD",
        "category": "Four-Wheeled Deck",
        "hint": "Riding and performing tricks on a wooden deck mounted atop four polyurethane wheels.",
        "extraHint": "Pioneered street tricks like ollies, kickflips, grinds, and halfpipe aerials."
      },
      {
        "word": "SKATEBOARDING",
        "category": "Street and Park Deck",
        "hint": "Riding and performing tricks on a wooden deck mounted on four urethane wheels.",
        "extraHint": "Debuted as an Olympic sport featuring street course stairs and park bowl contests."
      },
      {
        "word": "SKATEPARK",
        "category": "Skater Facility",
        "hint": "Dedicated recreational facility built with ramps, bowls, and rails for skating.",
        "extraHint": "Concrete bowls and street courses allow skateboarders to practice aerial tricks."
      },
      {
        "word": "SKIJORING",
        "category": "Horse-Drawn Skiing",
        "hint": "Winter sport where a skier is pulled across snow by a horse, dogs, or vehicle.",
        "extraHint": "Competitors navigate gates, berms, and jumps while holding a tow rope."
      },
      {
        "word": "SKYDIVING",
        "category": "Freefall Jumping",
        "hint": "Jumping from an aircraft at high altitude and executing maneuvers before deploying chute.",
        "extraHint": "Skydivers enjoy up to a minute of roaring 120 mph terminal velocity freefall."
      },
      {
        "word": "SLIDETACKLE",
        "category": "Sliding Challenge",
        "hint": "Defensive slide along the grass turf to dispossess the ball from a dribbler.",
        "extraHint": "Must make clean contact with the ball first to avoid conceding a foul card."
      },
      {
        "word": "SLOPESTYLE",
        "category": "Terrain Park Course",
        "hint": "Freestyle course featuring rails, boxes, and massive jumping kickers.",
        "extraHint": "Competitors link complex acrobatic rail slides and triple-cork spins."
      },
      {
        "word": "SNOWBOARD",
        "category": "Single-Deck Gliding",
        "hint": "Winter sport sliding down snow-covered slopes standing on a single attached board.",
        "extraHint": "Popularized by halfpipe aerial twists, terrain park rails, and deep powder carving."
      },
      {
        "word": "SNOWBOARDING",
        "category": "Winter Mountain Board",
        "hint": "Gliding down snow-covered slopes on a board strapped to both boots.",
        "extraHint": "Encompasses big air jumps, halfpipe aerials, slopestyle, and banked slalom."
      },
      {
        "word": "SNOWSHOEING",
        "category": "Deep Powder Trek",
        "hint": "Hiking across deep snow wearing webbed snowshoe footwear that distributes weight.",
        "extraHint": "Prevents sinking into waist-deep powder snow on backcountry mountain traverses."
      },
      {
        "word": "SPEARFISHING",
        "category": "Underwater Hunting",
        "hint": "Ancient method of fishing underwater using spearguns while holding breath.",
        "extraHint": "Demands extraordinary breath-holding endurance, stalking fish on ocean reefs."
      },
      {
        "word": "SPECTATORS",
        "category": "Stadium Crowd",
        "hint": "Fans and observers gathered inside an arena or stadium to watch a game.",
        "extraHint": "Create deafening home-field noise advantages that disrupt visiting teams."
      },
      {
        "word": "SPEEDSKATING",
        "category": "Ice Oval Racing",
        "hint": "Competitive racing on ice skates around an indoor 400-meter oval track.",
        "extraHint": "Long-track skaters wear klapskates whose blades detach at the heel for glide."
      },
      {
        "word": "SPORTSMANSHIP",
        "category": "Fair Play Honor",
        "hint": "Fair, generous, and polite behavior shown by athletes participating in a sport.",
        "extraHint": "Involves shaking hands with opponents after hard contests and respecting referee calls."
      },
      {
        "word": "STEEPLECHASE",
        "category": "Track Obstacle Race",
        "hint": "3,000-meter obstacle track race featuring heavy hurdles and water jump pits.",
        "extraHint": "Runners leap over solid wooden barriers and clear a 12-foot water basin."
      },
      {
        "word": "STOPWATCH",
        "category": "Precision Timer",
        "hint": "Handheld timer designed to measure the amount of time elapsed in races.",
        "extraHint": "Measures split times down to hundredths of a second for track and swim coaches."
      },
      {
        "word": "SUDDENDEATH",
        "category": "Overtime Rule",
        "hint": "Overtime period ending immediately when one competitor or team scores points.",
        "extraHint": "Creates high drama in hockey and soccer overtime where next goal wins match."
      },
      {
        "word": "SUPERCROSS",
        "category": "Stadium Motocross",
        "hint": "Indoor off-road motorcycle racing held on custom dirt tracks inside stadiums.",
        "extraHint": "Riders battle through rhythm sections, whoops, and triple jumps before packed crowds."
      },
      {
        "word": "SYNCHRONIZED",
        "category": "Artistic Swimming",
        "hint": "Hybrid form of swimming, dance, and gymnastics performed in water to music.",
        "extraHint": "Swimmers execute synchronized underwater leg routines holding breath with nose clips."
      },
      {
        "word": "TAEKWONDO",
        "category": "Korean Kicking Art",
        "hint": "Korean martial art characterized by head-height jumping spinning kicks and agility.",
        "extraHint": "An official Olympic medal sport; practitioners wear white dobok uniforms and belts."
      },
      {
        "word": "THIRDBASE",
        "category": "Hot Corner",
        "hint": "Infielder guarding third base, known as the 'hot corner' for blistering line drives.",
        "extraHint": "Requires lightning-fast reflexes and a strong throwing arm to throw out runners at first."
      },
      {
        "word": "TOUCHBACK",
        "category": "Safe Restart",
        "hint": "Play where the ball becomes dead behind a team's own goal line after kicks.",
        "extraHint": "Results in the receiving team taking possession at the 25-yard line on kickoffs."
      },
      {
        "word": "TOUCHDOWN",
        "category": "Six-Point Score",
        "hint": "Primary method of scoring in football worth six points when the ball crosses endzone.",
        "extraHint": "Celebrated by players with endzone spikes and choreographed team celebrations."
      },
      {
        "word": "TOURNAMENT",
        "category": "Bracket Contest",
        "hint": "Series of athletic contests in which competitors play until one winner remains.",
        "extraHint": "Single-elimination brackets create thrilling 'March Madness' buzzer-beater drama."
      },
      {
        "word": "TOURNAMENTS",
        "category": "Playoff Series",
        "hint": "Organized series of competitive games ending in a single champion team.",
        "extraHint": "Encompasses Wimbledon, the World Cup, March Madness, and the Super Bowl."
      },
      {
        "word": "TRIATHLETE",
        "category": "Endurance Competitor",
        "hint": "Athlete who trains and competes across swimming, cycling, and running events.",
        "extraHint": "Balances grueling multi-sport training regimens to master transition zones."
      },
      {
        "word": "TRIATHLON",
        "category": "Multi-Discipline Race",
        "hint": "Endurance multisport race consisting of swimming, cycling, and distance running.",
        "extraHint": "Competitors transition quickly between disciplines in continuous non-stop racing."
      },
      {
        "word": "TRIPLEJUMP",
        "category": "Hop Step and Jump",
        "hint": "Track and field athletics event consisting of a hop, a bound, and a jump into sand.",
        "extraHint": "Athletes must maintain horizontal speed through three distinct bounding phases."
      },
      {
        "word": "VOLLEYBALL",
        "category": "Net Team Sport",
        "hint": "Team sport where players use hands to hit a ball back and forth over a high net.",
        "extraHint": "Teams are allowed up to three touches (bump, set, spike) before returning the ball."
      },
      {
        "word": "WAKEBOARD",
        "category": "Towed Water Board",
        "hint": "Riding a buoyant board across a motorboat's wake while holding a tow handle.",
        "extraHint": "Riders carve against the wake to launch into the air for backflips and spins."
      },
      {
        "word": "WATERPOLO",
        "category": "Aquatic Team Sport",
        "hint": "Competitive water sport played in a deep pool where teams swim and throw a floating ball.",
        "extraHint": "Players tread water continuously using the eggbeater kick; no touching the pool floor."
      },
      {
        "word": "WEIGHTLIFTING",
        "category": "Olympic Strength",
        "hint": "Olympic athletic discipline where athletes attempt maximum single lifts on barbells.",
        "extraHint": "Consists of two contest lifts: the snatch and the clean and jerk."
      },
      {
        "word": "WHITEWATER",
        "category": "River Rapid Racing",
        "hint": "Navigating fast-flowing, frothing river rapids in kayaks, rafts, or canoes.",
        "extraHint": "Classified on a difficulty scale from Class I ripples to Class VI waterfalls."
      },
      {
        "word": "WICKETKEEPER",
        "category": "Cricket Gloveman",
        "hint": "Player standing directly behind the batsman's wicket wearing large padded gloves.",
        "extraHint": "Catches edged balls, effects stumpings, and catches throws to execute run-outs."
      },
      {
        "word": "WINDSURFING",
        "category": "Sailboard Sport",
        "hint": "Surface water sport combining elements of surfing and sailing on a board with sail.",
        "extraHint": "The free-rotating rig allows sailors to steer by tilting and trimming the mast."
      },
      {
        "word": "WRESTLING",
        "category": "Grappling Sport",
        "hint": "Ancient combat sport involving grappling maneuvers like clinches, throws, and pins.",
        "extraHint": "Olympic styles include Freestyle and Greco-Roman, where touching legs is forbidden."
      },
      {
        "word": "WRISTBAND",
        "category": "Sweat Absorber",
        "hint": "Elastic terrycloth band worn on wrists to absorb perspiration during play.",
        "extraHint": "Used by tennis players to wipe sweat from brows between intense baseline rallies."
      },
      {
        "word": "YELLOWCARD",
        "category": "Official Warning",
        "hint": "Card shown by a soccer referee to indicate a player has received a formal caution.",
        "extraHint": "Receiving two yellow cards in a single match results in a red card ejection."
      }
    ]
  },
  "general": {
    "easy": [
      {
        "word": "ABUJA",
        "category": "Planned Capital",
        "hint": "Centrally located planned capital of Nigeria founded in the 1980s.",
        "extraHint": "Dominated by the massive natural monolith Zuma Rock and the National Mosque."
      },
      {
        "word": "ACCRA",
        "category": "Ghanaian Capital",
        "hint": "Historic coastal capital of Ghana situated along the Gulf of Guinea.",
        "extraHint": "Home to bustling Makola Market, Kwame Nkrumah Memorial Park, and historic coastal castles."
      },
      {
        "word": "ACID",
        "category": "Chemical Donor",
        "hint": "Substance donating protons, turning blue litmus red, with pH under 7.",
        "extraHint": "Citric acid gives citrus fruits their characteristic tart taste."
      },
      {
        "word": "AGE",
        "category": "Historic Epoch",
        "hint": "Distinct historical epoch characterized by dominant technological cultures.",
        "extraHint": "Encompasses the Stone Age, Bronze Age, Iron Age, and Atomic Age."
      },
      {
        "word": "AIR",
        "category": "Atmosphere Gas",
        "hint": "Invisible mixture of nitrogen and oxygen enveloping planet Earth.",
        "extraHint": "Essential for breathing, flight, and atmospheric weather cycles."
      },
      {
        "word": "ARES",
        "category": "God of War",
        "hint": "Ancient Greek god of courage, physical battle, violence, and bloodshed in armed conflict.",
        "extraHint": "Represented the raw brutal physical aspects of combat, accompanied by Phobos and Deimos."
      },
      {
        "word": "ART",
        "category": "Creative Works",
        "hint": "Expression of human creative skill, imagination, and aesthetic beauty.",
        "extraHint": "Encompasses painting, sculpture, architecture, literature, and music."
      },
      {
        "word": "ASH",
        "category": "Hardwood Species",
        "hint": "Hardwood tree species belonging to the olive family with tough wood.",
        "extraHint": "Traditional wood for making tool handles, baseball bats, and bows."
      },
      {
        "word": "ATOLL",
        "category": "Ring-Shaped Reef",
        "hint": "Ring-shaped coral reef, island, or series of islets surrounding a central lagoon.",
        "extraHint": "Formed when an oceanic volcano slowly subsides into the sea, leaving coral fringes."
      },
      {
        "word": "BACH",
        "category": "Baroque Master",
        "hint": "German composer and organist of the Baroque era celebrated for intricate counterpoint.",
        "extraHint": "Masterpieces include the Brandenburg Concertos, Mass in B minor, and Well-Tempered Clavier."
      },
      {
        "word": "BAHT",
        "category": "Thai Currency",
        "hint": "Official currency of Thailand, subdivided into 100 satang.",
        "extraHint": "Issued by the Bank of Thailand, featuring portraits of the reigning Thai monarch."
      },
      {
        "word": "BASE",
        "category": "Chemical Acceptor",
        "hint": "Substance accepting protons, turning red litmus blue, with pH above 7.",
        "extraHint": "Neutralizes acids in chemical reactions; feels slippery to the touch."
      },
      {
        "word": "BAY",
        "category": "Recessed Coast",
        "hint": "Broad inlet of the sea where the land curves inward to create shelter.",
        "extraHint": "Provides natural deep-water harbors for maritime ports and fishing."
      },
      {
        "word": "BELL",
        "category": "Tolling Metal",
        "hint": "Hollow metal instrument ringing with clear musical tone when struck.",
        "extraHint": "Rung in church towers and civic belfries to mark hours and alerts."
      },
      {
        "word": "BONE",
        "category": "Skeletal Member",
        "hint": "Rigid organ forming the internal skeleton in vertebrate animals.",
        "extraHint": "Composed of collagen protein reinforced with calcium minerals."
      },
      {
        "word": "BOOK",
        "category": "Bound Volume",
        "hint": "Written or printed work consisting of pages bound together between covers.",
        "extraHint": "Gutenberg's movable type printing press in 1440 transformed education."
      },
      {
        "word": "BRAIN",
        "category": "Nervous Center",
        "hint": "Central organ controlling nervous systems, thoughts, memory, and organs.",
        "extraHint": "Contains roughly 86 billion interconnected neurons communicating via pulses."
      },
      {
        "word": "CAIRO",
        "category": "City of Minarets",
        "hint": "Sprawling capital of Egypt situated on the banks of the historic Nile River.",
        "extraHint": "Home to Tahrir Square, the Egyptian Museum, and adjacent Giza Pyramids."
      },
      {
        "word": "CAVE",
        "category": "Subterranean Hollow",
        "hint": "Natural hollow chamber in the earth or rock formed by natural erosion.",
        "extraHint": "Prehistoric humans painted cave art on walls in Lascaux and Altamira."
      },
      {
        "word": "CELL",
        "category": "Life Unit",
        "hint": "The basic structural and functional building block of living organisms.",
        "extraHint": "Surrounded by a cell membrane; contains DNA and cellular organelles."
      },
      {
        "word": "CELLO",
        "category": "Deep Bowed Instrument",
        "hint": "Large bowed four-string musical instrument of the violin family played between the performer's knees.",
        "extraHint": "Known for its rich, warm, and resonant bass tone spanning four full musical octaves."
      },
      {
        "word": "CITY",
        "category": "Urban Center",
        "hint": "Large permanent human settlement with dense buildings, roads, and services.",
        "extraHint": "Ancient examples like Ur, Babylon, and Athens founded civilization."
      },
      {
        "word": "COIN",
        "category": "Minted Currency",
        "hint": "Small stamped piece of metal authorized by governments as currency.",
        "extraHint": "First minted in electrum in ancient Lydia in the 7th century BC."
      },
      {
        "word": "COMET",
        "category": "Dirty Snowball",
        "hint": "Icy small Solar System body that displays a visible coma and long glowing tail when near Sun.",
        "extraHint": "Composed of water ice, frozen gases, and dust; originates from the Oort Cloud."
      },
      {
        "word": "CROWN",
        "category": "Monarch Regalia",
        "hint": "Ornamental circular metal headdress worn by sovereign monarchs.",
        "extraHint": "Crafted from solid gold and adorned with diamonds and rubies."
      },
      {
        "word": "CURIE",
        "category": "Pioneering Chemist",
        "hint": "Polish-French physicist and chemist who conducted pioneering research on radioactivity.",
        "extraHint": "The first woman to win a Nobel Prize and the only person to win in two different scientific fields."
      },
      {
        "word": "DAKAR",
        "category": "Senegalese Capital",
        "hint": "Vibrant Atlantic capital of Senegal and westernmost city on the African mainland.",
        "extraHint": "Famous for the historic Gorée Island slave house and vibrant mbalax music."
      },
      {
        "word": "DANTE",
        "category": "Supreme Italian Poet",
        "hint": "Italian poet of the late Middle Ages whose Divine Comedy is considered a masterpiece of world literature.",
        "extraHint": "Wrote in vernacular Italian rather than Latin, shaping the modern Italian literary language."
      },
      {
        "word": "DELTA",
        "category": "River Mouth Silt",
        "hint": "Fan-shaped wetland landform formed at the mouth of a river where sediment deposits.",
        "extraHint": "The fertile Nile Delta and Mississippi Delta support intensive agriculture and fisheries."
      },
      {
        "word": "DINAR",
        "category": "Middle Eastern Currency",
        "hint": "Principal currency unit in several Mediterranean and Middle Eastern nations including Kuwait.",
        "extraHint": "The Kuwaiti dinar ranks as the world's highest-valued currency unit by face value."
      },
      {
        "word": "DIRT",
        "category": "Soil Matter",
        "hint": "Loose surface soil or earth covering fields, forests, and garden beds.",
        "extraHint": "Teeming with beneficial microbes, decaying organic humus, and worms."
      },
      {
        "word": "DOHA",
        "category": "Gulf City",
        "hint": "Coastal capital of Qatar on the Persian Gulf celebrated for modern architecture.",
        "extraHint": "Home to the Museum of Islamic Art, futuristic skyline towers, and Souq Waqif."
      },
      {
        "word": "DONG",
        "category": "Vietnamese Currency",
        "hint": "Official currency of Vietnam since the reunification of North and South in 1978.",
        "extraHint": "Issued by the State Bank of Vietnam, known for high face denominations in thousands."
      },
      {
        "word": "DRUM",
        "category": "Percussion Tool",
        "hint": "Percussion instrument sounded by striking a stretched skin with sticks.",
        "extraHint": "One of the oldest instruments in the world, establishing musical rhythm."
      },
      {
        "word": "DUKE",
        "category": "Noble Peer",
        "hint": "High-ranking hereditary nobleman ranking directly below a royal prince.",
        "extraHint": "Historically governed sovereign duchies and commanded provincial armies."
      },
      {
        "word": "DUNE",
        "category": "Sand Mound",
        "hint": "Mound or ridge of sand formed by the wind on deserts or ocean shores.",
        "extraHint": "Shifting desert dunes can rise hundreds of feet high in the Sahara."
      },
      {
        "word": "EAR",
        "category": "Hearing Organ",
        "hint": "Organ of hearing and balance consisting of outer, middle, and inner sections.",
        "extraHint": "Fluid canals in the inner ear maintain bodily balance and equilibrium."
      },
      {
        "word": "EARL",
        "category": "British Peer",
        "hint": "British nobleman ranking above a viscount and below a marquess.",
        "extraHint": "The historic English counterpart of the European continental count."
      },
      {
        "word": "ELM",
        "category": "Deciduous Tree",
        "hint": "Tall shade tree with serrated leaves historically lining urban boulevards.",
        "extraHint": "Known for graceful arching canopies over classic European streets."
      },
      {
        "word": "EPIC",
        "category": "Grand Odyssey",
        "hint": "Lengthy narrative poem recounting grand heroic deeds and adventures.",
        "extraHint": "Famous examples include Gilgamesh, the Iliad, and the Odyssey."
      },
      {
        "word": "ETNA",
        "category": "Sicilian Volcano",
        "hint": "The highest active volcano in Europe, rising continuously on the island of Sicily.",
        "extraHint": "In Greek mythology, the deadly monster Typhon was trapped beneath Mount Etna by Zeus."
      },
      {
        "word": "EURO",
        "category": "European Single Currency",
        "hint": "Official currency of the Eurozone member states within the European Union.",
        "extraHint": "Represented by the euro symbol (€) and managed by the European Central Bank."
      },
      {
        "word": "EYE",
        "category": "Visual Organ",
        "hint": "Sensory organ focusing light onto retinas to provide visual sight.",
        "extraHint": "Features a cornea, pupil, adjustable lens, and retinal receptors."
      },
      {
        "word": "FJORD",
        "category": "Glacial Sea Inlet",
        "hint": "Long, deep, narrow sea inlet with steep cliffs created by ancient glacial erosion.",
        "extraHint": "World-famous in Norway, New Zealand, and Alaska for breathtaking sheer rock waterfalls."
      },
      {
        "word": "FLUTE",
        "category": "Woodwind Aerophone",
        "hint": "Woodwind instrument that produces sound from the flow of air across an embossed mouth hole.",
        "extraHint": "One of the earliest musical instruments known; made of metal, wood, or bamboo."
      },
      {
        "word": "FOG",
        "category": "Ground Cloud",
        "hint": "Thick cloud of tiny water droplets suspended in atmosphere near ground.",
        "extraHint": "Reduces maritime visibility, causing lighthouses to sound foghorns."
      },
      {
        "word": "FOOT",
        "category": "Lower Extremity",
        "hint": "Terminal part of the leg supporting body weight and facilitating walking.",
        "extraHint": "Contains 26 bones and dozens of joints providing shock absorption."
      },
      {
        "word": "FRANC",
        "category": "Swiss Currency",
        "hint": "Official currency and legal tender of Switzerland and Liechtenstein.",
        "extraHint": "Widely regarded as a global safe-haven currency issued by the Swiss National Bank."
      },
      {
        "word": "FUJI",
        "category": "Sacred Volcano",
        "hint": "Symmetrical snow-capped active stratovolcano and highest peak in Japan.",
        "extraHint": "Sacred Shinto pilgrimage site immortalized in Hokusai's woodblock print art."
      },
      {
        "word": "GENE",
        "category": "Heredity Unit",
        "hint": "Basic physical unit of heredity composed of sequential DNA instructions.",
        "extraHint": "Encodes instructions for building specific biological proteins."
      },
      {
        "word": "GOBI",
        "category": "Cold Asian Desert",
        "hint": "Vast cold desert and semidesert region spanning northern China and Mongolia.",
        "extraHint": "Site of the first discovered fossilized dinosaur eggs in the 1920s by scientists."
      },
      {
        "word": "GOD",
        "category": "Deity Entity",
        "hint": "Superhuman being worshiped as having power over nature and humanity.",
        "extraHint": "Revered across polytheistic and monotheistic world traditions."
      },
      {
        "word": "GOLD",
        "category": "Precious Metal",
        "hint": "Precious yellow metallic element with atomic number 79.",
        "extraHint": "Has symbolized wealth, purity, and beauty across cultures for millennia."
      },
      {
        "word": "GULF",
        "category": "Large Sea Inlet",
        "hint": "Deep, expansive ocean inlet partially enclosed by land, larger than a bay.",
        "extraHint": "The Gulf of Mexico is surrounded by North America and Cuba."
      },
      {
        "word": "HADES",
        "category": "Lord of the Underworld",
        "hint": "Ancient Greek god of the dead and king of the underworld, brother of Zeus and Poseidon.",
        "extraHint": "Guarded the realm of deceased souls with his three-headed watchdog Cerberus."
      },
      {
        "word": "HANOI",
        "category": "Vietnamese Capital",
        "hint": "Charming capital of Vietnam renowned for centuries-old architecture and lakes.",
        "extraHint": "Features the bustling Old Quarter, Hoan Kiem Lake, and French colonial avenues."
      },
      {
        "word": "HARP",
        "category": "Plucked Strings",
        "hint": "String instrument with vertical strings plucked with fingers in concertos.",
        "extraHint": "The national emblem of Ireland, associated with angelic melodies."
      },
      {
        "word": "HEAD",
        "category": "Cranial Portion",
        "hint": "Upper anatomical division of body housing brain, eyes, and sensory organs.",
        "extraHint": "Enclosed and shielded by the hard bony protective skull cranium."
      },
      {
        "word": "HEART",
        "category": "Muscular Pump",
        "hint": "Muscular organ pumping oxygenated blood throughout the circulatory system.",
        "extraHint": "Beats roughly 100,000 times each day to sustain human life."
      },
      {
        "word": "HERO",
        "category": "Noble Champion",
        "hint": "Person admired for extraordinary courage, achievements, and nobility.",
        "extraHint": "Mythological figures who triumph over trials for the greater good."
      },
      {
        "word": "HILL",
        "category": "Natural Elevation",
        "hint": "Naturally elevated area of land, smaller and less steep than a mountain.",
        "extraHint": "Rolling green hills dot countrysides across Ireland and Tuscany."
      },
      {
        "word": "HOMER",
        "category": "Epic Greek Poet",
        "hint": "Legendary author of the Iliad and the Odyssey, the two foundational epic poems of ancient Greece.",
        "extraHint": "Immortalized the Trojan War, the wrath of Achilles, and the wanderings of King Odysseus."
      },
      {
        "word": "HYDRA",
        "category": "Multi-Headed Water Serpent",
        "hint": "Serpentine water monster in Greek and Roman mythology with multiple heads that regenerated when cut.",
        "extraHint": "Slain by Hercules as his second labor, using burning torches to cauterize neck stumps."
      },
      {
        "word": "ICE",
        "category": "Frozen Water",
        "hint": "Solid crystalline state of water formed when temperature drops below 0°C.",
        "extraHint": "Floats on water because its crystalline lattice is less dense than liquid."
      },
      {
        "word": "ILIAD",
        "category": "Trojan War Epic",
        "hint": "Ancient Greek epic poem by Homer set during the final weeks of the Trojan War siege.",
        "extraHint": "Chronicles the quarrel between King Agamemnon and the invincible warrior hero Achilles."
      },
      {
        "word": "INK",
        "category": "Writing Fluid",
        "hint": "Colored fluid or paste containing pigments used for writing and printing.",
        "extraHint": "Ancient Egyptians and Chinese developed ink using soot and binders."
      },
      {
        "word": "IRON",
        "category": "Base Metal",
        "hint": "Strong metallic element that revolutionized ancient toolmaking and steel.",
        "extraHint": "The Iron Age brought mass manufacturing of plows, tools, and armor."
      },
      {
        "word": "ISLE",
        "category": "Small Island",
        "hint": "Island, especially one of small size, surrounded by open waters.",
        "extraHint": "Scenic rocky isles dot the coastlines of Scotland and Greece."
      },
      {
        "word": "KING",
        "category": "Male Sovereign",
        "hint": "Male monarch ruling over a kingdom, usually inheriting royal lineage.",
        "extraHint": "Governs state affairs from a throne, wearing a royal crown."
      },
      {
        "word": "KRONA",
        "category": "Swedish Currency",
        "hint": "Official currency of Sweden since the monetary union of 1873.",
        "extraHint": "Represented by the code SEK; subdivided historically into 100 öre."
      },
      {
        "word": "KRONE",
        "category": "Scandinavian Currency",
        "hint": "Official currency name of both Norway and Denmark.",
        "extraHint": "Derived from the Scandinavian word for crown; backed by respective central banks."
      },
      {
        "word": "LAGOS",
        "category": "Commercial Megacity",
        "hint": "The most populous metropolitan city in Nigeria and major financial hub of Africa.",
        "extraHint": "Renowned for Nollywood cinema industries, bustling markets, and tech start-ups."
      },
      {
        "word": "LAKE",
        "category": "Inland Water",
        "hint": "Large body of freshwater or saltwater completely surrounded by land.",
        "extraHint": "Lake Baikal in Siberia is the deepest freshwater lake on planet Earth."
      },
      {
        "word": "LAPAZ",
        "category": "Andean Seat",
        "hint": "The highest administrative capital in the world, sitting at 11,975 feet in Bolivia.",
        "extraHint": "Connected by an innovative network of aerial cable car transit lines called Mi Teleférico."
      },
      {
        "word": "LAVA",
        "category": "Molten Rock",
        "hint": "Hot molten or semi-fluid rock erupted from a volcano or fissure.",
        "extraHint": "Cools into dark igneous basalt rock upon contact with air or sea."
      },
      {
        "word": "LAW",
        "category": "Legal Order",
        "hint": "System of enforceable rules established by a governing authority.",
        "extraHint": "Codified in historic tablets like the ancient Code of Hammurabi."
      },
      {
        "word": "LEAD",
        "category": "Heavy Element",
        "hint": "Heavy, malleable, soft bluish-grey metal with atomic number 82.",
        "extraHint": "Historically used in Roman plumbing; absorbs ionizing radiation."
      },
      {
        "word": "LIMA",
        "category": "Gastronomic Capital",
        "hint": "Pacific coastal capital of Peru celebrated as the culinary capital of South America.",
        "extraHint": "Home to pre-Incan adobe pyramids, Spanish colonial cathedrals, and fresh ceviche."
      },
      {
        "word": "LIRA",
        "category": "Turkish Currency",
        "hint": "Official currency of Turkey and Northern Cyprus, issued by the Central Bank of Turkey.",
        "extraHint": "Subdivided into 100 kuruş; symbolized by the stylized currency sign ₺."
      },
      {
        "word": "LOKI",
        "category": "Norse Trickster God",
        "hint": "Trickster god in Norse mythology known for shapeshifting and cunning mischief.",
        "extraHint": "Father of the Fenrir wolf, Midgard serpent Jormungandr, and the eight-legged steed Sleipnir."
      },
      {
        "word": "LORD",
        "category": "Noble Title",
        "hint": "Title given to a peer of the realm, nobleman, or feudal landowner.",
        "extraHint": "Historically sat in the British parliamentary House of Lords."
      },
      {
        "word": "LUNG",
        "category": "Breathing Organ",
        "hint": "Pair of respiratory organs in chest that exchange oxygen with blood.",
        "extraHint": "Contains millions of microscopic alveoli sacs for gas exchange."
      },
      {
        "word": "LUTE",
        "category": "Fretted Strings",
        "hint": "Plucked string instrument with a pear-shaped back popular in Renaissance.",
        "extraHint": "Central instrument for domestic music-making across Europe for centuries."
      },
      {
        "word": "MAP",
        "category": "Cartography",
        "hint": "Visual diagram or representation of an area of land or sea showing features.",
        "extraHint": "Uses coordinates, compass roses, and scales to guide navigation."
      },
      {
        "word": "MARS",
        "category": "The Red Planet",
        "hint": "Fourth planet from the Sun known as the Red Planet due to oxidized iron dust on surface.",
        "extraHint": "Home to Olympus Mons, the largest volcano in the Solar System, and frozen polar ice caps."
      },
      {
        "word": "MIST",
        "category": "Fine Water Cloud",
        "hint": "Phenomenon of small water droplets suspended in air, lighter than fog.",
        "extraHint": "Drapes morning mountain valleys and surrounds thundering waterfalls."
      },
      {
        "word": "MOON",
        "category": "Natural Satellite",
        "hint": "The natural celestial body orbiting Earth, driving ocean tides.",
        "extraHint": "Its gravitational pull causes daily ocean high and low tides."
      },
      {
        "word": "MUD",
        "category": "Wet Earth",
        "hint": "Soft, sticky matter resulting from the mixing of earth and water.",
        "extraHint": "Ancient civilizations molded sun-dried mud bricks to build homes."
      },
      {
        "word": "MYTH",
        "category": "Ancient Lore",
        "hint": "Traditional sacred story concerning gods, supernatural heroes, and origins.",
        "extraHint": "Explains natural phenomena, cosmic creation, and societal customs."
      },
      {
        "word": "NILE",
        "category": "Historic African River",
        "hint": "Famous north-flowing river in northeastern Africa traditionally considered the longest.",
        "extraHint": "Its annual summer floodwaters deposited nutrient-rich silt that sustained ancient Egyptian civilization."
      },
      {
        "word": "NOSE",
        "category": "Olfactory Sense",
        "hint": "Facial organ housing nasal cavities for breathing and smelling.",
        "extraHint": "Detects thousands of distinct airborne chemical odor molecules."
      },
      {
        "word": "NOTE",
        "category": "Musical Tone",
        "hint": "Symbol representing a specific musical pitch and duration on a staff.",
        "extraHint": "Forms the building blocks of musical chords, scales, and melodies."
      },
      {
        "word": "NOVEL",
        "category": "Prose Fiction Book",
        "hint": "Fictitious prose narrative of substantial length and complexity depicting human experience.",
        "extraHint": "Examples include Don Quixote, Pride and Prejudice, War and Peace, and Moby-Dick."
      },
      {
        "word": "OAK",
        "category": "Hardwood Tree",
        "hint": "Stately deciduous tree species famous for durable timber and acorns.",
        "extraHint": "Historically utilized in ship construction and wine aging barrels."
      },
      {
        "word": "OASIS",
        "category": "Desert Spring",
        "hint": "Isolated fertile area in a desert providing fresh water that sustains vegetation.",
        "extraHint": "Fed by subterranean natural aquifers, allowing date palms and nomadic caravans to rest."
      },
      {
        "word": "ODIN",
        "category": "The Allfather",
        "hint": "Widely revered god in Germanic mythology and king of the Norse gods in Asgard.",
        "extraHint": "Sacrificed one eye at Mimir's well for universal wisdom; accompanied by ravens Huginn and Muninn."
      },
      {
        "word": "OPERA",
        "category": "Theatrical Music Drama",
        "hint": "Theatrical art form in which dramatic singers and musicians perform a dramatic work.",
        "extraHint": "Blends acting, scenery, costumes, and orchestral music; famous in Italian and German traditions."
      },
      {
        "word": "ORION",
        "category": "The Hunter",
        "hint": "Prominent winter constellation recognizable by the three bright stars of Orion's Belt.",
        "extraHint": "Contains the red supergiant star Betelgeuse and the brilliant blue supergiant Rigel."
      },
      {
        "word": "OSLO",
        "category": "Norwegian Capital",
        "hint": "Coastal capital of Norway surrounded by dense pine forests and scenic fjords.",
        "extraHint": "Home to the Nobel Peace Center, Vigeland Sculpture Park, and Viking Ship Museum."
      },
      {
        "word": "PAGE",
        "category": "Paper Leaf",
        "hint": "Single leaf of paper in a book, manuscript, or printed document.",
        "extraHint": "Numbered sequentially to organize written knowledge."
      },
      {
        "word": "PARIS",
        "category": "City of Light",
        "hint": "Capital of France celebrated for art, fashion, gastronomy, and the Eiffel Tower.",
        "extraHint": "Home to the Louvre Museum, Notre-Dame Cathedral, and the Champs-Élysées avenue."
      },
      {
        "word": "PAST",
        "category": "Elapsed Time",
        "hint": "Events and periods of time that occurred prior to the present moment.",
        "extraHint": "Studied through written historical accounts and archaeological finds."
      },
      {
        "word": "PEAK",
        "category": "Mountain Summit",
        "hint": "The pointed top of a mountain, or reaching the highest athletic state.",
        "extraHint": "Mountaineers strive to stand upon remote, snow-capped alpine peaks."
      },
      {
        "word": "PEN",
        "category": "Writing Tool",
        "hint": "Handheld instrument used to apply ink to paper for writing and drawing.",
        "extraHint": "Includes historic feather quills, fountain pens, and ballpoints."
      },
      {
        "word": "PESO",
        "category": "Latin American Currency",
        "hint": "Monetary unit of Mexico, Argentina, Colombia, Chile, and the Philippines.",
        "extraHint": "Originates from the historic Spanish silver dollar piece of eight (peso de ocho)."
      },
      {
        "word": "PETRA",
        "category": "Rose-Red City",
        "hint": "Historic archaeological city in southern Jordan famous for rock-cut architecture.",
        "extraHint": "Carved directly into red sandstone cliff faces by the Nabataean kingdom in 300 BC."
      },
      {
        "word": "PIANO",
        "category": "Acoustic Keyboard Instrument",
        "hint": "Acoustic stringed keyboard instrument where felt-covered hammers strike tuned metal strings.",
        "extraHint": "Invented in Italy by Bartolomeo Cristofori around the year 1700; features 88 keys."
      },
      {
        "word": "PLATO",
        "category": "Athenian Thinker",
        "hint": "Ancient Greek philosopher who founded the Academy in Athens, student of Socrates.",
        "extraHint": "Authored the Republic exploring justice, ideal state governance, and the Allegory of the Cave."
      },
      {
        "word": "PLUTO",
        "category": "Dwarf Planet",
        "hint": "Dwarf planet in the Kuiper belt discovered in 1930 and reclassified by IAU in 2006.",
        "extraHint": "Visited by NASA's New Horizons probe in 2015, revealing heart-shaped nitrogen glaciers."
      },
      {
        "word": "POEM",
        "category": "Verse Literature",
        "hint": "Literary work expressing feelings and ideas with rhythm, rhyme, and meter.",
        "extraHint": "Mastered by poets like Shakespeare, Frost, and Keats."
      },
      {
        "word": "POUND",
        "category": "British Sterling",
        "hint": "Official currency of the United Kingdom and oldest currency still in continuous active use.",
        "extraHint": "Represented by the pound sign (£) and issued by the Bank of England."
      },
      {
        "word": "QUITO",
        "category": "High-Altitude Capital",
        "hint": "Historic capital of Ecuador, the second-highest official capital city on Earth.",
        "extraHint": "Its remarkably preserved Spanish colonial historic center was the first UNESCO site."
      },
      {
        "word": "RABAT",
        "category": "Moroccan Capital",
        "hint": "Atlantic coastal capital city of Morocco famous for historic royal architecture.",
        "extraHint": "Features the 12th-century Hassan Tower and the picturesque Kasbah of the Udayas."
      },
      {
        "word": "RAND",
        "category": "South African Currency",
        "hint": "Official legal tender currency of South Africa, Namibia, Lesotho, and Eswatini.",
        "extraHint": "Introduced in 1961 upon the establishment of the Republic of South Africa."
      },
      {
        "word": "REAL",
        "category": "Brazilian Currency",
        "hint": "Official currency of Brazil introduced in 1994 as part of the Plano Real stabilization.",
        "extraHint": "Represented by R$ and subdivided into 100 centavos; features native Brazilian fauna."
      },
      {
        "word": "REALM",
        "category": "Kingdom Domain",
        "hint": "Territory or kingdom ruled by a sovereign monarch or sovereign government.",
        "extraHint": "Encompasses the lands, citizens, and laws of an empire."
      },
      {
        "word": "REEF",
        "category": "Coral Ridge",
        "hint": "Ridge of jagged rock, coral, or sand at or near the surface of the sea.",
        "extraHint": "The Great Barrier Reef in Australia is the largest living coral reef."
      },
      {
        "word": "RHINE",
        "category": "German River",
        "hint": "Major European river flowing from the Swiss Alps through Germany to the North Sea.",
        "extraHint": "Lined with medieval hilltop castles and terraced vineyards in the Rhine Gorge."
      },
      {
        "word": "ROAD",
        "category": "Paved Route",
        "hint": "Wide paved way leading between places for vehicular and foot transit.",
        "extraHint": "Roman military roads connected distant provinces across Europe."
      },
      {
        "word": "ROCK",
        "category": "Solid Mineral",
        "hint": "Naturally occurring solid aggregate of one or more minerals.",
        "extraHint": "Classified into igneous, sedimentary, and metamorphic rock types."
      },
      {
        "word": "ROME",
        "category": "The Eternal City",
        "hint": "Capital of Italy and historic center of the ancient Roman Empire.",
        "extraHint": "Encloses the Colosseum, Roman Forum, Trevi Fountain, and the independent Vatican City."
      },
      {
        "word": "RUBLE",
        "category": "Russian Currency",
        "hint": "Official currency of the Russian Federation and historically the Russian Empire.",
        "extraHint": "Subdivided into 100 kopecks; one of the oldest currencies in continuous European use."
      },
      {
        "word": "RUPEE",
        "category": "South Asian Currency",
        "hint": "Official monetary unit of India, Pakistan, Sri Lanka, Nepal, and Mauritius.",
        "extraHint": "The Indian rupee uses the currency sign ₹; subdivided historically into paise."
      },
      {
        "word": "SEA",
        "category": "Saline Ocean",
        "hint": "Vast body of salt water covering more than seventy percent of Earth.",
        "extraHint": "Encompasses interconnected oceans, seas, and gulfs globally."
      },
      {
        "word": "SEOUL",
        "category": "Dynamic Capital",
        "hint": "High-tech metropolis and capital of South Korea situated along the Han River.",
        "extraHint": "Blends Joseon dynasty royal palaces like Gyeongbokgung with cutting-edge tech."
      },
      {
        "word": "SKIN",
        "category": "Body Covering",
        "hint": "The largest organ of the human body, serving as a protective shield.",
        "extraHint": "Regulates body temperature and houses sensory tactile touch receptors."
      },
      {
        "word": "SKY",
        "category": "Atmosphere Vault",
        "hint": "The expanse of air over the Earth appearing blue during the daytime.",
        "extraHint": "Scatters short blue light wavelengths through Rayleigh scattering."
      },
      {
        "word": "SONG",
        "category": "Vocal Melody",
        "hint": "Musical piece composed of lyrics sung by voices, often with instruments.",
        "extraHint": "Conveys emotional feelings, storytelling, and cultural traditions."
      },
      {
        "word": "STAR",
        "category": "Luminous Sphere",
        "hint": "Luminous sphere of plasma held together by its own gravity in space.",
        "extraHint": "Undergoes continuous nuclear fusion in its core."
      },
      {
        "word": "SUEZ",
        "category": "Sea-Level Egyptian Canal",
        "hint": "Artificial sea-level waterway in Egypt connecting the Mediterranean Sea to the Red Sea.",
        "extraHint": "Opened in 1869; provides the shortest maritime shipping route between Europe and Asia."
      },
      {
        "word": "SUN",
        "category": "Central Star",
        "hint": "The yellow dwarf star at the gravitational center of our Solar System.",
        "extraHint": "Powers all life on Earth through light and heat."
      },
      {
        "word": "SUVA",
        "category": "Pacific Capital",
        "hint": "Bustling capital and largest metropolitan city of the island nation of Fiji.",
        "extraHint": "Major cultural and commercial hub of the South Pacific, situated on Viti Levu."
      },
      {
        "word": "TAHOE",
        "category": "Deep Alpine Lake",
        "hint": "Large freshwater lake in the Sierra Nevada mountains straddling California and Nevada.",
        "extraHint": "Renowned for crystal-clear cobalt blue waters and surrounding alpine ski peaks."
      },
      {
        "word": "TAIGA",
        "category": "Boreal Conifer Forest",
        "hint": "The world's largest land biome, consisting of vast subarctic coniferous pine forests.",
        "extraHint": "Spans northern Russia, Scandinavia, and Canada, acting as a colossal carbon sink."
      },
      {
        "word": "TALE",
        "category": "Narrative Story",
        "hint": "Story or narrative recounting events, adventures, or moral lessons.",
        "extraHint": "Passed down through oral traditions and bedtime storytelling."
      },
      {
        "word": "TESLA",
        "category": "Electrical Visionary",
        "hint": "Serbian-American inventor and electrical engineer who pioneered alternating current (AC).",
        "extraHint": "Invented the induction motor, Tesla coil, and envisioned wireless global electrical transmission."
      },
      {
        "word": "THOR",
        "category": "Norse God of Thunder",
        "hint": "Hammer-wielding Norse god associated with thunder, lightning, storms, strength, and sacred protection.",
        "extraHint": "Wielded the magical hammer Mjolnir, wore the strength belt Megingjord, and rode in a goat chariot."
      },
      {
        "word": "TIDE",
        "category": "Ocean Bulge",
        "hint": "Periodic rising and falling of ocean sea levels caused by the Moon.",
        "extraHint": "Tidal forces create high and low tides twice daily along coasts."
      },
      {
        "word": "TIME",
        "category": "Temporal Progress",
        "hint": "Continuous progress of existence from the past through present to future.",
        "extraHint": "Measured chronologically using solar cycles and atomic vibrations."
      },
      {
        "word": "TITAN",
        "category": "Atmospheric Moon",
        "hint": "The largest moon of Saturn and only natural satellite known to have a dense atmosphere.",
        "extraHint": "Features rivers, lakes, and seas of liquid methane and ethane across frozen ice bedrock."
      },
      {
        "word": "TOKYO",
        "category": "Vibrant Megacity",
        "hint": "High-tech capital of Japan and the world's most populous metropolitan area.",
        "extraHint": "Blends neon skyscrapers, historic Shinto shrines, and world-class sushi dining."
      },
      {
        "word": "TOWN",
        "category": "Urban Place",
        "hint": "Settlement larger than a village but smaller than a metropolis.",
        "extraHint": "Serves as local commercial market centers for surrounding farming areas."
      },
      {
        "word": "VEIN",
        "category": "Blood Channel",
        "hint": "Vessel carrying deoxygenated blood back toward the heart.",
        "extraHint": "Equipped with one-way valves that prevent retrograde blood flow."
      },
      {
        "word": "VENUS",
        "category": "Runaway Greenhouse",
        "hint": "Second planet from the Sun featuring crushing atmospheric pressure and sulfuric clouds.",
        "extraHint": "The hottest planet in the Solar System due to an intense runaway carbon dioxide greenhouse."
      },
      {
        "word": "VOLGA",
        "category": "Longest in Europe",
        "hint": "The longest river in Europe, flowing over 2,290 miles across western Russia to Caspian Sea.",
        "extraHint": "Regarded as the national river of Russia, known affectionately as Mother Volga."
      },
      {
        "word": "WAR",
        "category": "Armed Conflict",
        "hint": "Hostile armed conflict between nations, states, or major factions.",
        "extraHint": "Reshapes international borders, political treaties, and world history."
      },
      {
        "word": "WON",
        "category": "Korean Currency",
        "hint": "Official currency of South Korea, issued by the Bank of Korea in Seoul.",
        "extraHint": "Denominated in units from 1,000 to 50,000 won featuring King Sejong the Great."
      },
      {
        "word": "YEN",
        "category": "Japanese Currency",
        "hint": "Official currency of Japan, the third most traded currency in foreign exchange markets.",
        "extraHint": "Represented by the symbol (¥) with banknotes featuring prominent Japanese historical figures."
      },
      {
        "word": "YUAN",
        "category": "Chinese Renminbi",
        "hint": "Basic unit of the renminbi, the official currency of the People's Republic of China.",
        "extraHint": "Subdivided into 10 jiao or 100 fen; issued by the People's Bank of China."
      },
      {
        "word": "ZEUS",
        "category": "King of Olympian Gods",
        "hint": "Sky and thunder god in ancient Greek religion who ruled as king of the gods on Mount Olympus.",
        "extraHint": "Wielded lightning bolts as weapons and carried the aegis shield; symbol was the royal eagle."
      },
      {
        "word": "ZINC",
        "category": "Metal Element",
        "hint": "Bluish-white metallic element used to galvanize steel against corrosion.",
        "extraHint": "Essential trace dietary mineral vital for human immune health."
      }
    ],
    "medium": [
      {
        "word": "ABUDHABI",
        "category": "UAE Capital",
        "hint": "Oil-rich capital of the United Arab Emirates situated on an island in the Gulf.",
        "extraHint": "Features the white marble Sheikh Zayed Grand Mosque and Louvre Abu Dhabi."
      },
      {
        "word": "ACHILLES",
        "category": "Trojan War Champion",
        "hint": "Greatest Greek warrior of the Trojan War, invulnerable except for his single heel.",
        "extraHint": "Dipped in the River Styx by his mother Thetis, slain when a poisoned arrow struck his heel."
      },
      {
        "word": "ALGIERS",
        "category": "North African Capital",
        "hint": "Mediterranean coastal capital of Algeria featuring white-washed buildings.",
        "extraHint": "Home to the historic hillside Casbah fortress citadel overlooking the sea."
      },
      {
        "word": "ALHAMBRA",
        "category": "Moorish Palace Fortress",
        "hint": "Palace and fortress complex located in Granada, Andalusia, Spain, built by the Nasrid dynasty.",
        "extraHint": "Renowned for intricate Islamic geometric tilework, carved stucco, and peaceful courtyard fountains."
      },
      {
        "word": "AMAZON",
        "category": "Colossal River Basin",
        "hint": "The largest river in the world by water discharge, flowing through South America.",
        "extraHint": "Carries more water than the next seven largest rivers combined into the Atlantic Ocean."
      },
      {
        "word": "ANIMAL",
        "category": "Multicellular Life",
        "hint": "Living organism that feeds on organic matter, typically having senses.",
        "extraHint": "Possesses specialized sensory organs, nervous systems, and mobility."
      },
      {
        "word": "ANUBIS",
        "category": "Jackal-Headed God",
        "hint": "Ancient Egyptian jackal-headed god associated with mummification and the afterlife.",
        "extraHint": "Supervised the weighing of the deceased's heart against the feather of truth (Ma'at)."
      },
      {
        "word": "APOLLO",
        "category": "God of Sun and Music",
        "hint": "Olympian god of archery, music, dance, truth, prophecy, healing, and the brilliant Sun.",
        "extraHint": "Played the golden lyre crafted by Hermes and delivered prophecies through the Oracle at Delphi."
      },
      {
        "word": "ARCTIC",
        "category": "Northernmost Ocean",
        "hint": "Smallest and shallowest of the world's five major oceans, surrounding the geographic North Pole.",
        "extraHint": "Largely covered by sea ice throughout the year and surrounded by Eurasia and North America."
      },
      {
        "word": "ASTEROID",
        "category": "Rocky Minor Planet",
        "hint": "Rocky minor planet orbiting the Sun, mostly concentrated between Mars and Jupiter.",
        "extraHint": "Remnants from the early formation of the Solar System 4.6 billion years ago."
      },
      {
        "word": "ASUNCION",
        "category": "Paraguayan Capital",
        "hint": "Historic capital of Paraguay and one of the oldest continuously inhabited cities in South America.",
        "extraHint": "Founded in 1537, known as the 'Mother of Cities' for expeditions that founded others."
      },
      {
        "word": "ATACAMA",
        "category": "Driest Desert",
        "hint": "High-altitude desert plateau in northern Chile, the driest non-polar desert on Earth.",
        "extraHint": "Some weather stations have never recorded rain; hosts world-class space telescopes."
      },
      {
        "word": "ATHENA",
        "category": "Goddess of Wisdom",
        "hint": "Olympian goddess of wisdom, warfare strategy, mathematics, and craftsmanship.",
        "extraHint": "Sprang fully armed from the forehead of Zeus; her sacred symbols are the owl and olive tree."
      },
      {
        "word": "ATHENS",
        "category": "Cradle of Democracy",
        "hint": "Historic capital of Greece, celebrated as the birthplace of Western civilization.",
        "extraHint": "Dominated by the 5th-century BC Acropolis citadel and the Parthenon marble temple."
      },
      {
        "word": "ATLANTIC",
        "category": "Second Ocean",
        "hint": "Body of water separating the Americas from Europe and Africa across the equator.",
        "extraHint": "Bisected along its seafloor by the massive underwater Mid-Atlantic Ridge rift."
      },
      {
        "word": "ATOMIC",
        "category": "Nuclear Scale",
        "hint": "Relating to atoms, the basic structural units of chemical matter.",
        "extraHint": "Atomic clocks measure time with astonishing sub-nanosecond accuracy."
      },
      {
        "word": "AURORA",
        "category": "Northern Lights",
        "hint": "Natural light display in Earth's sky predominantly seen in high-latitude polar regions.",
        "extraHint": "Solar wind charged particles collide with atmospheric oxygen and nitrogen atoms, glowing neon."
      },
      {
        "word": "BAGHDAD",
        "category": "Historic River City",
        "hint": "Historic capital of Iraq situated along the Tigris River, cradle of Islamic Golden Age.",
        "extraHint": "Historically renowned for the legendary House of Wisdom library in the 8th century."
      },
      {
        "word": "BAGPIPES",
        "category": "Air-Reservoir Reed Pipes",
        "hint": "Wind instrument using enclosed reeds fed from a constant reservoir of air in a bag.",
        "extraHint": "Strongly associated with Scottish Highland heritage, Celtic ceremonies, and military marches."
      },
      {
        "word": "BAIKAL",
        "category": "Deepest Lake",
        "hint": "Vast rift lake in mountainous southern Siberia, the deepest and oldest lake in the world.",
        "extraHint": "Contains 20% of Earth's unfrozen surface fresh water; home to the freshwater Baikal seal."
      },
      {
        "word": "BALLOT",
        "category": "Voting Paper",
        "hint": "Device used to cast votes in an election, usually a paper slip or screen.",
        "extraHint": "Secret ballots allow citizens to vote freely without intimidation."
      },
      {
        "word": "BANGKOK",
        "category": "City of Angels",
        "hint": "Bustling capital of Thailand famous for ornate Buddhist shrines and street food.",
        "extraHint": "Home to the opulent Grand Palace, Wat Pho temple's Reclining Buddha, and canals."
      },
      {
        "word": "BEIJING",
        "category": "Imperial Capital",
        "hint": "Ancient capital of China blending historic dynasties with modern grandeur.",
        "extraHint": "Encloses the Forbidden City palace complex, Temple of Heaven, and nearby Great Wall."
      },
      {
        "word": "BEIRUT",
        "category": "Levant Port",
        "hint": "Mediterranean coastal capital of Lebanon, historic cultural hub of the Levant.",
        "extraHint": "Celebrated for rich culinary mezze culture, universities, and seaside corniche."
      },
      {
        "word": "BEOWULF",
        "category": "Old English Heroic Epic",
        "hint": "Old English epic poem consisting of 3,182 alliterative lines, set in ancient Scandinavia.",
        "extraHint": "Follows the hero Beowulf as he slays the monster Grendel, Grendel's mother, and a dragon."
      },
      {
        "word": "BERLIN",
        "category": "German Capital",
        "hint": "Capital of Germany known for 20th-century history and vibrant creative arts.",
        "extraHint": "Famous for the historic Brandenburg Gate and remnants of the Cold War Berlin Wall."
      },
      {
        "word": "BIGBEN",
        "category": "Great Westminster Bell",
        "hint": "The nickname for the Great Bell of the Great Clock of Westminster in London.",
        "extraHint": "Housed inside Elizabeth Tower, striking resonant hourly chimes across Parliament square."
      },
      {
        "word": "BLIZZARD",
        "category": "Severe Snowstorm",
        "hint": "Severe snowstorm characterized by sustained winds of at least 35 mph and low visibility.",
        "extraHint": "Can drop feet of snow and create life-threatening sub-zero wind chill conditions."
      },
      {
        "word": "BOGOTA",
        "category": "Andean Capital",
        "hint": "High-altitude capital of Colombia perched in the Andes mountains at 8,660 feet.",
        "extraHint": "Features the historic La Candelaria district and world-famous Gold Museum."
      },
      {
        "word": "BOTANY",
        "category": "Plant Science",
        "hint": "Branch of biological science dealing with the study of plant life.",
        "extraHint": "Explores plant physiology, genetics, ecology, and agricultural crops."
      },
      {
        "word": "BRASILIA",
        "category": "Futuristic Capital",
        "hint": "Planned federal capital of Brazil founded in 1960 in the interior highlands.",
        "extraHint": "Designed by urban planner Lúcio Costa and celebrated architect Oscar Niemeyer."
      },
      {
        "word": "BRIDGE",
        "category": "Spanning Link",
        "hint": "Structure carrying a road or path across a river, chasm, or obstacle.",
        "extraHint": "The Golden Gate Bridge spans the entrance to San Francisco Bay."
      },
      {
        "word": "BRUSSELS",
        "category": "Capital of Europe",
        "hint": "Capital of Belgium and administrative headquarters of the European Union.",
        "extraHint": "Famous for the ornate Grand Place square, the Atomium sculpture, and waffles."
      },
      {
        "word": "BUDAPEST",
        "category": "Pearl of the Danube",
        "hint": "Grand capital of Hungary bisected by the Danube River into Buda and Pest.",
        "extraHint": "Famous for natural thermal bath spas, Parliament building, and Chain Bridge."
      },
      {
        "word": "BUDDHA",
        "category": "The Enlightened One",
        "hint": "Ancient Indian spiritual teacher and philosopher who founded the world religion of Buddhism.",
        "extraHint": "Born Siddhartha Gautama; taught the Four Noble Truths and the Eightfold Path to nirvana."
      },
      {
        "word": "CANBERRA",
        "category": "Planned Australian Capital",
        "hint": "Planned federal capital of Australia situated between Sydney and Melbourne.",
        "extraHint": "Designed by Walter and Marion Griffin around artificial Lake Burley Griffin."
      },
      {
        "word": "CANYON",
        "category": "Carved Gorge",
        "hint": "Deep gorge carved through rock formations by flowing river waters.",
        "extraHint": "The Grand Canyon showcases billions of years of exposed rock strata."
      },
      {
        "word": "CAPETOWN",
        "category": "Legislative Capital",
        "hint": "Coastal legislative capital of South Africa nestled beneath flat Table Mountain.",
        "extraHint": "Renowned for dramatic coastal peninsulas, Cape Point, and Robben Island prison."
      },
      {
        "word": "CARACAS",
        "category": "Venezuelan Capital",
        "hint": "Capital city of Venezuela nestled in a high mountain valley beneath Mount Avila.",
        "extraHint": "Birthplace of South American liberator Simón Bolívar; home to modern art museums."
      },
      {
        "word": "CARBON",
        "category": "Basis of Life",
        "hint": "Chemical element with atomic number 6 forming the backbone of life.",
        "extraHint": "Capable of forming four stable covalent bonds in complex organic chains."
      },
      {
        "word": "CARNIVAL",
        "category": "Festive Pre-Lenten Celebration",
        "hint": "Vibrant festive season celebrated before Lent with parades, masquerades, and samba music.",
        "extraHint": "Rio de Janeiro and Venice host the most famous carnival celebrations in the world."
      },
      {
        "word": "CASPIAN",
        "category": "Largest Inland Water",
        "hint": "The world's largest inland body of water, often classified as the world's largest lake.",
        "extraHint": "Bounded by Kazakhstan, Russia, Azerbaijan, Iran, and Turkmenistan with no natural ocean outlet."
      },
      {
        "word": "CASTLE",
        "category": "Fortified Manor",
        "hint": "Fortified medieval stronghold built in Europe by feudal noble lords.",
        "extraHint": "Equipped with stone battlements, arrow slits, moats, and drawbridges."
      },
      {
        "word": "CATALYST",
        "category": "Reaction Accelerator",
        "hint": "Substance that increases the rate of a chemical reaction without undergoing permanent change.",
        "extraHint": "Lowers reaction activation energy, widely utilized in industrial chemistry and catalytic converters."
      },
      {
        "word": "CAVERN",
        "category": "Subterranean Cave",
        "hint": "Large, natural underground chamber or network of passages formed in limestone rock.",
        "extraHint": "Adorned with mineral stalactites hanging from ceilings and stalagmites rising from floors."
      },
      {
        "word": "CENTAUR",
        "category": "Half-Man Half-Horse",
        "hint": "Mythological creature with the upper body of a human and lower body and legs of a horse.",
        "extraHint": "Chiron was the wise centaur who tutored Greek heroes including Achilles and Jason."
      },
      {
        "word": "CERBERUS",
        "category": "Hound of the Underworld",
        "hint": "Multi-headed monstrous hound that guarded the gates of the Greek underworld to prevent dead from leaving.",
        "extraHint": "Usually depicted with three fierce snarling heads, a serpent for a tail, and snakes on his back."
      },
      {
        "word": "CHANNEL",
        "category": "Wide Waterway",
        "hint": "Wide waterway passing between two nearby landmasses, such as the English Channel.",
        "extraHint": "The English Channel separates southern England from northern France."
      },
      {
        "word": "CHARGE",
        "category": "Electric Property",
        "hint": "Physical property of matter that causes it to experience force in fields.",
        "extraHint": "Can be positive or negative; like charges repel and opposites attract."
      },
      {
        "word": "CHIMERA",
        "category": "Fire-Breathing Hybrid",
        "hint": "Monstrous fire-breathing hybrid creature of Lycia in Asia Minor composed of multiple animals.",
        "extraHint": "Typically depicted with the body of a lion, head of a goat on its back, and tail of a serpent."
      },
      {
        "word": "COLUMBUS",
        "category": "Genoese Navigator",
        "hint": "Italian explorer whose 1492 transatlantic voyage initiated permanent European contact with Americas.",
        "extraHint": "Sponsored by the Spanish Catholic Monarchs; sailed on the Santa María, Pinta, and Niña."
      },
      {
        "word": "COMEDY",
        "category": "Humorous Theatre",
        "hint": "Genre of dramatic literature intended to amuse audiences and conclude with cheerful harmony.",
        "extraHint": "Uses wit, irony, mistaken identity, and farce to critique societal human follies."
      },
      {
        "word": "COMPOUND",
        "category": "Chemical Bond",
        "hint": "Chemical substance composed of identical molecules containing atoms from two or more elements.",
        "extraHint": "Sodium chloride (table salt) is a chemical compound formed from sodium and chlorine."
      },
      {
        "word": "CONCERTO",
        "category": "Soloist with Orchestra",
        "hint": "Musical composition featuring a solo instrument accompanied by a full symphony orchestra.",
        "extraHint": "Showcases dazzling virtuoso technique by solo violinists, pianists, and cellists."
      },
      {
        "word": "COPPER",
        "category": "Reddish Metal",
        "hint": "Ductile reddish metallic element widely used for electrical wiring.",
        "extraHint": "One of the earliest metals smelted by humans, dating back 10,000 years."
      },
      {
        "word": "COSMOS",
        "category": "The Universe",
        "hint": "The universe regarded as a complex, orderly, and harmonious whole.",
        "extraHint": "From the Greek word for order; studied systematically via cosmology."
      },
      {
        "word": "CRATER",
        "category": "Impact Basin",
        "hint": "Bowl-shaped depression on a planetary surface caused by meteorite impact.",
        "extraHint": "The Moon's cratered surface preserves billions of years of impacts."
      },
      {
        "word": "CRUSADE",
        "category": "Medieval Religious Wars",
        "hint": "Series of religious wars initiated, supported, and directed by the Latin Church in the medieval period.",
        "extraHint": "Aimed to recover the Holy Land and Jerusalem from Islamic rule between 1095 and 1291."
      },
      {
        "word": "DAMASCUS",
        "category": "Ancient Pearl",
        "hint": "Ancient capital of Syria and one of the oldest continuously inhabited cities.",
        "extraHint": "Encloses the 8th-century Umayyad Mosque and historic ancient bazaar souks."
      },
      {
        "word": "DANUBE",
        "category": "European Waterway",
        "hint": "Europe's second-longest river, flowing through ten countries before emptying into Black Sea.",
        "extraHint": "Flows through four capital cities: Vienna, Bratislava, Budapest, and Belgrade."
      },
      {
        "word": "DARWIN",
        "category": "Evolution Pioneer",
        "hint": "English naturalist and biologist celebrated for proposing the theory of natural selection.",
        "extraHint": "Documented finches on the Galapagos Islands, authoring On the Origin of Species in 1859."
      },
      {
        "word": "DELTAS",
        "category": "Silt Landforms",
        "hint": "Fan-shaped silt deposits formed at the mouths of flowing rivers.",
        "extraHint": "Provide rich, fertile agricultural soils for rice and crop farming."
      },
      {
        "word": "DENALI",
        "category": "Highest in North America",
        "hint": "The highest mountain peak in North America, rising 20,310 feet in Alaska.",
        "extraHint": "Formerly known as Mount McKinley; features the largest base-to-peak rise on land."
      },
      {
        "word": "DENSITY",
        "category": "Mass per Volume",
        "hint": "Degree of compactness of a substance, quantified as mass divided by total volume.",
        "extraHint": "Water has a density of one gram per cubic centimeter; objects with lower density float."
      },
      {
        "word": "DESERT",
        "category": "Arid Wasteland",
        "hint": "Dry, barren area of land characterized by minimal annual rainfall.",
        "extraHint": "The Sahara Desert covers millions of square miles of North Africa."
      },
      {
        "word": "DIRHAM",
        "category": "Emirati Currency",
        "hint": "Official currency of the United Arab Emirates and Morocco.",
        "extraHint": "Abbreviated as AED in the UAE; subdivided into 100 fils."
      },
      {
        "word": "DIWALI",
        "category": "Festival of Lights",
        "hint": "Major religious festival celebrated by Hindus, Jains, and Sikhs symbolizing light over darkness.",
        "extraHint": "Celebrated by lighting clay oil lamps (diyas), bursting fireworks, and sharing sweets."
      },
      {
        "word": "DODOMA",
        "category": "Tanzanian Capital",
        "hint": "Designated national capital of Tanzania situated in the country's central interior.",
        "extraHint": "Designated to move government administration centrally away from coastal Dar es Salaam."
      },
      {
        "word": "DOLLAR",
        "category": "Global Currency",
        "hint": "Widely recognized currency used in the United States, Canada, Australia, and other nations.",
        "extraHint": "Represented by the dollar sign ($) and subdivided into 100 cents."
      },
      {
        "word": "DRAGON",
        "category": "Mythic Reptile",
        "hint": "Legendary winged reptilian monster breathing fire in world folklores.",
        "extraHint": "Eastern dragons represent water, rain, wisdom, and imperial sovereignty."
      },
      {
        "word": "DROUGHT",
        "category": "Prolonged Dry Period",
        "hint": "Prolonged period of abnormally low rainfall leading to a shortage of water across a region.",
        "extraHint": "Severely impairs agricultural crop yields, depletes reservoirs, and elevates wildfire risks."
      },
      {
        "word": "DUBLIN",
        "category": "Fair City",
        "hint": "Lively capital of Ireland situated at the mouth of the River Liffey.",
        "extraHint": "Celebrated for literary heritage, Trinity College's Book of Kells, and historic pubs."
      },
      {
        "word": "ECLIPSE",
        "category": "Celestial Shadow",
        "hint": "Astronomical event where one celestial body passes into the shadow of another body.",
        "extraHint": "Total solar eclipses occur when the Moon passes directly between the Sun and Earth."
      },
      {
        "word": "EDISON",
        "category": "Prolific Inventor",
        "hint": "American inventor and businessman who developed the phonograph and practical electric light.",
        "extraHint": "Held over 1,093 US patents, establishing the world's first industrial research lab in Menlo Park."
      },
      {
        "word": "EINSTEIN",
        "category": "Relativity Genius",
        "hint": "German-born theoretical physicist who developed the theories of special and general relativity.",
        "extraHint": "Won the 1921 Nobel Prize for explaining the photoelectric effect; formula E=mc²."
      },
      {
        "word": "ELEMENT",
        "category": "Pure Chemical Substance",
        "hint": "Pure substance consisting entirely of atoms that all have the identical atomic number.",
        "extraHint": "Organized systematically on the Periodic Table created by Dmitri Mendeleev in 1869."
      },
      {
        "word": "EMPIRE",
        "category": "Domain of Nations",
        "hint": "Extensive group of states or countries under a single supreme authority.",
        "extraHint": "The British Empire, Roman Empire, and Ottoman Empire spanned continents."
      },
      {
        "word": "ENERGY",
        "category": "Work Capacity",
        "hint": "Quantitative property that must be transferred to an object to perform work.",
        "extraHint": "Exists in kinetic, potential, thermal, chemical, and nuclear forms."
      },
      {
        "word": "ENZYME",
        "category": "Protein Catalyst",
        "hint": "Biological protein molecule that accelerates biochemical reactions in cells.",
        "extraHint": "Lowers activation energy, enabling rapid metabolic digestion of food."
      },
      {
        "word": "EQUINOX",
        "category": "Equal Day and Night",
        "hint": "Time of year when the Sun passes directly over Earth's equator, making day and night equal length.",
        "extraHint": "Occurs twice annually around March 20 (vernal equinox) and September 23 (autumnal equinox)."
      },
      {
        "word": "ESTUARY",
        "category": "Tidal River Mouth",
        "hint": "Partially enclosed coastal body of water where fresh river water mixes with salty sea.",
        "extraHint": "Serves as a productive marine nursery sheltering juvenile fish, crabs, and wading birds."
      },
      {
        "word": "EUROPA",
        "category": "Ocean Moon",
        "hint": "Smooth, ice-crusted moon of Jupiter harboring a vast global liquid saltwater ocean beneath.",
        "extraHint": "Heated by tidal flexing; regarded by astrobiologists as a prime candidate for life."
      },
      {
        "word": "EVEREST",
        "category": "Roof of the World",
        "hint": "The highest mountain above sea level on Earth, rising 29,031 feet in the Himalayas.",
        "extraHint": "Located on the border of Nepal and China; known as Sagarmatha and Chomolungma."
      },
      {
        "word": "FOREST",
        "category": "Woodland Biome",
        "hint": "Dense growth of trees and underbrush covering a large tract of land.",
        "extraHint": "The Amazon rainforest produces massive rainfall and oxygen cycles."
      },
      {
        "word": "FOSSIL",
        "category": "Ancient Trace",
        "hint": "Preserved remains or traces of ancient organisms petrified in rock strata.",
        "extraHint": "Reveals prehistoric evolutionary histories and extinct ancient lineages."
      },
      {
        "word": "FRESCO",
        "category": "Plaster Mural",
        "hint": "Mural painting technique executed rapidly upon freshly laid lime plaster.",
        "extraHint": "Michelangelo painted the Sistine Chapel ceiling using fresco pigments."
      },
      {
        "word": "FRICTION",
        "category": "Resistive Force",
        "hint": "Force resisting the relative motion of solid surfaces, fluid layers, and material elements.",
        "extraHint": "Converts kinetic mechanical energy into thermal waste heat when surfaces rub together."
      },
      {
        "word": "GABORONE",
        "category": "Botswana Capital",
        "hint": "Capital and largest city of Botswana situated near the South African border.",
        "extraHint": "Serves as the administrative center for one of the world's leading diamond nations."
      },
      {
        "word": "GALAXY",
        "category": "Cosmic Island",
        "hint": "System of billions of stars, gas, and dark matter bound by gravity.",
        "extraHint": "Our Solar System resides inside the barred spiral Milky Way galaxy."
      },
      {
        "word": "GALILEO",
        "category": "Father of Modern Science",
        "hint": "Italian astronomer who pioneered telescopic observation, discovering four moons of Jupiter.",
        "extraHint": "Championed Copernican heliocentrism, earning house arrest by the Roman Inquisition in 1633."
      },
      {
        "word": "GANDHI",
        "category": "Father of India",
        "hint": "Indian lawyer and anti-colonial nationalist who employed nonviolent resistance for freedom.",
        "extraHint": "Led the Salt March in 1930; inspired civil rights and freedom movements across the globe."
      },
      {
        "word": "GANGES",
        "category": "Sacred River",
        "hint": "Trans-boundary river sacred to millions of Hindus flowing across northern India to Bengal.",
        "extraHint": "Personified as the goddess Ganga; millions bathe in its waters at Varanasi and Haridwar."
      },
      {
        "word": "GENETICS",
        "category": "Heredity Science",
        "hint": "Biological study of genes, genetic variation, and heredity in living organisms.",
        "extraHint": "Pioneered in 1866 by Austrian monk Gregor Mendel crossbreeding garden pea plants."
      },
      {
        "word": "GENOME",
        "category": "Complete DNA Code",
        "hint": "The complete set of genes or genetic material present in an organism.",
        "extraHint": "The Human Genome Project mapped over three billion base pairs of DNA."
      },
      {
        "word": "GEYSER",
        "category": "Thermal Spout",
        "hint": "Hot spring that periodically boils and erupts a tall jet of water.",
        "extraHint": "Old Faithful in Yellowstone National Park erupts on predictable clocks."
      },
      {
        "word": "GLACIER",
        "category": "Moving Ice River",
        "hint": "Massive, persistent body of dense ice that moves slowly under its own immense weight.",
        "extraHint": "Carves characteristic U-shaped valleys, moraines, and fjords across mountain ranges."
      },
      {
        "word": "GRIFFIN",
        "category": "Legendary Beast",
        "hint": "Mythical creature with the head, wings, and forelegs of an eagle and the body of a lion.",
        "extraHint": "Regarded as the king of all beasts and birds; guarded gold treasures and sacred portals."
      },
      {
        "word": "GUITAR",
        "category": "Plucked Stringed Instrument",
        "hint": "Fretted stringed instrument typically having six strings, played by strumming or plucking.",
        "extraHint": "Features acoustic hollow-body models and solid-body electric guitars amplified through speakers."
      },
      {
        "word": "HAMLET",
        "category": "Tragedy of Denmark",
        "hint": "Shakespearean tragedy dramatizing Prince Hamlet's revenge against his uncle Claudius.",
        "extraHint": "Features famous soliloquies including 'To be, or not to be' and the gravedigger scene."
      },
      {
        "word": "HARARE",
        "category": "Zimbabwean Capital",
        "hint": "Sunny capital city of Zimbabwe famous for wide avenues lined with flowering jacarandas.",
        "extraHint": "Home to the National Gallery of Zimbabwe and balancing rock geological formations."
      },
      {
        "word": "HAVANA",
        "category": "Cuban Capital",
        "hint": "Historic Caribbean capital of Cuba famous for Spanish colonial plazas and vintage cars.",
        "extraHint": "Features the 16th-century Castillo de la Real Fuerza and vibrant Malecón sea drive."
      },
      {
        "word": "HELIUM",
        "category": "Inert Noble Gas",
        "hint": "Light, non-reactive noble gas that is the second most abundant in cosmos.",
        "extraHint": "Used to fill buoyant blimps and balloons; cools MRI magnets near zero."
      },
      {
        "word": "HELSINKI",
        "category": "Nordic Capital",
        "hint": "Seaside capital of Finland celebrated for modern Nordic design and sea forts.",
        "extraHint": "Home to the neoclassical Helsinki Cathedral and the sea fortress of Suomenlinna."
      },
      {
        "word": "HERCULES",
        "category": "Mythic Strongman",
        "hint": "Divine hero in Greek and Roman mythology renowned for superhuman strength and adventures.",
        "extraHint": "Son of Zeus who successfully completed the legendary Twelve Labors, slaying the Nemean Lion."
      },
      {
        "word": "HERMES",
        "category": "Messenger God",
        "hint": "Herald and messenger of the Greek gods, protector of travelers, merchants, and thieves.",
        "extraHint": "Depicted wearing winged sandals (talaria) and carrying the serpent-entwined caduceus wand."
      },
      {
        "word": "ICEBERG",
        "category": "Floating Freshwater",
        "hint": "Colossal chunk of freshwater ice that has calved from a glacier and floats in open sea.",
        "extraHint": "Roughly ninety percent of an iceberg's total volume remains submerged beneath the water."
      },
      {
        "word": "ICELAND",
        "category": "Land of Fire and Ice",
        "hint": "Nordic island country in the North Atlantic defined by its dramatic volcanic and glacial landscape.",
        "extraHint": "Features active geysers, hot geothermal springs, lava fields, and massive glaciers."
      },
      {
        "word": "IGUAZU",
        "category": "Thunder Cataracts",
        "hint": "Stunning chain of 275 waterfalls along the border of Argentina and Brazil.",
        "extraHint": "Features the semi-circular Devil's Throat cataract where thundering water plumes mist high."
      },
      {
        "word": "INERTIA",
        "category": "Resistance to Change",
        "hint": "Property of matter by which it continues in its existing state of rest or uniform motion.",
        "extraHint": "Newton's First Law of Motion states objects maintain velocity unless acted on by force."
      },
      {
        "word": "INFERNO",
        "category": "Nine Circles of Hell",
        "hint": "First part of Italian writer Dante Alighieri's 14th-century epic poem Divine Comedy.",
        "extraHint": "Follows Dante guided by the Roman poet Virgil through the nine circles of Hell."
      },
      {
        "word": "ISLAND",
        "category": "Surrounded Land",
        "hint": "Tract of land completely surrounded by water, smaller than a continent.",
        "extraHint": "Greenland is the largest non-continental island on planet Earth."
      },
      {
        "word": "ISOTOPE",
        "category": "Nuclear Variant",
        "hint": "Variants of a particular chemical element which differ in neutron number within nuclei.",
        "extraHint": "Carbon-14 is an unstable radioactive isotope used in archaeological radiocarbon dating."
      },
      {
        "word": "ISTHMUS",
        "category": "Narrow Land Bridge",
        "hint": "Narrow strip of land connecting two larger land masses, with water on both sides.",
        "extraHint": "The Isthmus of Panama connects North and South America, pierced by the Panama Canal."
      },
      {
        "word": "JAKARTA",
        "category": "Indonesian Capital",
        "hint": "Massive capital of Indonesia situated on the northwest coast of the island of Java.",
        "extraHint": "Historic melting pot of Malay, Javanese, Arab, Chinese, and European cultures."
      },
      {
        "word": "JUNGLE",
        "category": "Tropical Tangle",
        "hint": "Dense, tangled tropical rainforest with thick vegetation at ground level.",
        "extraHint": "Home to monkeys, jaguars, vibrant parrots, and towering emergent trees."
      },
      {
        "word": "JUPITER",
        "category": "Giant Gas Planet",
        "hint": "The largest planet in our Solar System, with mass more than twice all other planets combined.",
        "extraHint": "Famous for its swirling Great Red Spot storm and dozens of moons including Europa."
      },
      {
        "word": "KALAHARI",
        "category": "Southern Desert",
        "hint": "Large semi-arid sandy savannah basin covering parts of Botswana and Namibia.",
        "extraHint": "Home to the San Bushmen people, meerkats, and desert-adapted wildlife."
      },
      {
        "word": "KAMPALA",
        "category": "Ugandan Capital",
        "hint": "Hilly capital city of Uganda situated near the shores of vast Lake Victoria.",
        "extraHint": "Built across historic rolling hills; home to the UNESCO-listed Kasubi Tombs."
      },
      {
        "word": "KIGALI",
        "category": "Rwandan Capital",
        "hint": "Clean, hilly capital city of Rwanda known as the Singapore of Africa.",
        "extraHint": "Renowned for modern convention centers, tech innovation, and civic cleanliness."
      },
      {
        "word": "KINGSTON",
        "category": "Jamaican Capital",
        "hint": "Cultural and commercial capital of Jamaica situated beneath the Blue Mountains.",
        "extraHint": "The global birthplace of reggae music, ska, and dub; home to the Bob Marley Museum."
      },
      {
        "word": "KNIGHT",
        "category": "Medieval Armored Warrior",
        "hint": "Person granted an honorary title of knighthood by a monarch for military service, clad in armor.",
        "extraHint": "Followed the chivalric code of honor and fought with sword, lance, and shield on horseback."
      },
      {
        "word": "KRAKATOA",
        "category": "Explosive Caldera",
        "hint": "Indonesian volcanic island famous for a catastrophic explosion in 1883.",
        "extraHint": "The 1883 eruption produced the loudest sound recorded in human history, heard 3,000 miles away."
      },
      {
        "word": "KREMLIN",
        "category": "Russian Citadel",
        "hint": "Fortified historic complex at the heart of Moscow overlooking the Moskva River and Red Square.",
        "extraHint": "Serves as the official residence of the President of Russia and houses ancient cathedrals."
      },
      {
        "word": "LAGOON",
        "category": "Shallow Saltwater",
        "hint": "Shallow body of water separated from a larger sea by barrier islands or coral reefs.",
        "extraHint": "Features tranquil, calm turquoise waters sheltered from rough open ocean swells."
      },
      {
        "word": "LEGION",
        "category": "Roman Brigade",
        "hint": "Major unit of the ancient Roman army consisting of thousands of infantry.",
        "extraHint": "Roman legionaries conquered the Mediterranean using discipline and shields."
      },
      {
        "word": "LEONARDO",
        "category": "Renaissance Genius",
        "hint": "Italian Renaissance polymath celebrated for painting the Mona Lisa and visionary inventions.",
        "extraHint": "Designed conceptual flying machines, armored tanks, and dissected human cadavers for anatomy."
      },
      {
        "word": "LINCOLN",
        "category": "The Great Emancipator",
        "hint": "Sixteenth President of the United States who preserved the Union through the American Civil War.",
        "extraHint": "Issued the historic Emancipation Proclamation in 1863 and delivered the Gettysburg Address."
      },
      {
        "word": "LISBON",
        "category": "City of Seven Hills",
        "hint": "Coastal capital of Portugal famous for sun-drenched hills and historic trams.",
        "extraHint": "Features the 16th-century Belém Tower and Jerónimos Monastery on Tagus River."
      },
      {
        "word": "LONDON",
        "category": "Historic Capital",
        "hint": "Capital of the United Kingdom situated along the River Thames.",
        "extraHint": "Features Big Ben, the Tower of London, Buckingham Palace, and Westminster Abbey."
      },
      {
        "word": "LOUVRE",
        "category": "Grand Art Museum",
        "hint": "The world's most-visited art museum, housed in a historic royal palace in Paris.",
        "extraHint": "Displays Leonardo da Vinci's Mona Lisa, Venus de Milo, and Winged Victory of Samothrace."
      },
      {
        "word": "MACBETH",
        "category": "Scottish Play of Ambition",
        "hint": "Shakespearean tragedy recounting the bloody rise and fall of the ambitious Scottish general Macbeth.",
        "extraHint": "Prophesied by three witches and spurred by Lady Macbeth; features the haunting dagger vision."
      },
      {
        "word": "MADRID",
        "category": "Spanish Capital",
        "hint": "Central capital of Spain renowned for royal palaces and classical art museums.",
        "extraHint": "Home to the Prado Museum, expansive Retiro Park, and the grand Plaza Mayor."
      },
      {
        "word": "MAGELLAN",
        "category": "Circumnavigator",
        "hint": "Portuguese explorer whose Spanish expedition achieved the first recorded global circumnavigation.",
        "extraHint": "Discovered the Strait of Magellan at South America's tip; expedition led home by Juan Elcano."
      },
      {
        "word": "MAGNET",
        "category": "Field Source",
        "hint": "Material or object that produces an invisible magnetic field attracting iron.",
        "extraHint": "Possesses North and South poles; opposite magnetic poles attract."
      },
      {
        "word": "MANAGUA",
        "category": "Nicaraguan Capital",
        "hint": "Lakeside capital of Nicaragua situated on the southern shores of Lake Xolotlán.",
        "extraHint": "Surrounded by volcanic crater lagoons and rich revolutionary political history."
      },
      {
        "word": "MANDELA",
        "category": "Anti-Apartheid Leader",
        "hint": "South African anti-apartheid revolutionary and statesman who became country's first black president.",
        "extraHint": "Spent 27 years imprisoned on Robben Island before leading reconciliation and winning Nobel Peace Prize."
      },
      {
        "word": "MANGROVE",
        "category": "Tidal Wetland Forest",
        "hint": "Salt-tolerant coastal forest tree adapted to growing in brackish intertidal swamp water.",
        "extraHint": "Stilt prop roots trap sediments, buffering coastlines against catastrophic hurricanes."
      },
      {
        "word": "MANILA",
        "category": "Pearl of the Orient",
        "hint": "Bayside capital of the Philippines known for Spanish colonial architecture in Intramuros.",
        "extraHint": "Features historic Fort Santiago, San Agustin Church, and colorful passenger jeepneys."
      },
      {
        "word": "MAPUTO",
        "category": "Mozambican Capital",
        "hint": "Port capital of Mozambique situated on the calm waters of Maputo Bay.",
        "extraHint": "Renowned for wide avenues lined with acacia trees, Mediterranean architecture, and seafood."
      },
      {
        "word": "MEKONG",
        "category": "Southeast Asian River",
        "hint": "Trans-boundary river flowing through China, Myanmar, Laos, Thailand, Cambodia, and Vietnam.",
        "extraHint": "Supports one of the world's most productive inland freshwater fisheries and rice deltas."
      },
      {
        "word": "MERCURY",
        "category": "Innermost Planet",
        "hint": "The smallest planet in the Solar System and closest to the Sun.",
        "extraHint": "Has virtually no atmosphere; surface temperatures swing from 800°F by day to -290°F at night."
      },
      {
        "word": "MERMAID",
        "category": "Aquatic Mythic Maiden",
        "hint": "Mythical aquatic creature with the head and upper body of a woman and the tail of a fish.",
        "extraHint": "Appears across worldwide folklore, singing bewitching songs to sailors from ocean rocks."
      },
      {
        "word": "METEOR",
        "category": "Shooting Star",
        "hint": "Streak of glowing light produced when space debris burns in atmosphere.",
        "extraHint": "Annual meteor showers like the Perseids illuminate summer night skies."
      },
      {
        "word": "MEXICO",
        "category": "Historic Megacity",
        "hint": "Sprawling historic capital of Mexico built atop the ancient Aztec capital of Tenochtitlan.",
        "extraHint": "Home to the massive Zócalo plaza, the Metropolitan Cathedral, and Chapultepec Park."
      },
      {
        "word": "MILKYWAY",
        "category": "Home Galaxy",
        "hint": "Barred spiral galaxy containing our Solar System and hundreds of billions of stars.",
        "extraHint": "Appears across dark night skies as a hazy luminous band of glowing starlight."
      },
      {
        "word": "MINOTAUR",
        "category": "Labyrinth Monster",
        "hint": "Mythical monster with the head of a bull and body of a man trapped in the Cretan labyrinth.",
        "extraHint": "King Minos kept him inside Daedalus's maze until slain by the Athenian prince Theseus."
      },
      {
        "word": "MOJAVE",
        "category": "Joshua Tree Desert",
        "hint": "Arid desert region in the southwestern US characterized by iconic Joshua trees.",
        "extraHint": "Contains Death Valley, the lowest, driest, and hottest location in North America."
      },
      {
        "word": "MOMENTUM",
        "category": "Mass in Motion",
        "hint": "The quantity of motion of a moving body, measured as a product of its mass and velocity.",
        "extraHint": "A fundamental conserved quantity in physics that cannot be created or destroyed."
      },
      {
        "word": "MONSOON",
        "category": "Seasonal Wind Shift",
        "hint": "Seasonal reversing wind pattern accompanied by corresponding changes in precipitation.",
        "extraHint": "Brings essential annual rainy seasons to the Indian subcontinent and Southeast Asia."
      },
      {
        "word": "MOSAIC",
        "category": "Tiled Artwork",
        "hint": "Art picture produced by arranging small colored pieces of stone or glass.",
        "extraHint": "Ancient Roman villas featured intricate decorative mosaic tile floors."
      },
      {
        "word": "MOSCOW",
        "category": "Russian Capital",
        "hint": "Historic capital of Russia situated on the Moskva River in Eastern Europe.",
        "extraHint": "Famous for the fortified Kremlin complex, Red Square, and Saint Basil's Cathedral."
      },
      {
        "word": "MOZART",
        "category": "Musical Prodigy",
        "hint": "Prolific and influential Austrian classical composer who began composing at five years old.",
        "extraHint": "Composed over 600 masterworks including The Magic Flute, Don Giovanni, and his Requiem."
      },
      {
        "word": "MUSEUM",
        "category": "Cultural Vault",
        "hint": "Institution storing and exhibiting objects of historical and artistic value.",
        "extraHint": "The Louvre in Paris displays the Mona Lisa and classical antiquities."
      },
      {
        "word": "NAIROBI",
        "category": "Kenyan Capital",
        "hint": "Dynamic capital of Kenya known as the 'Green City in the Sun'.",
        "extraHint": "Features Nairobi National Park where wild lions roam before city skyscrapers."
      },
      {
        "word": "NAPOLEON",
        "category": "French Emperor",
        "hint": "French military commander and emperor who conquered much of continental Europe in 1800s.",
        "extraHint": "Established the Napoleonic Code legal system before final military defeat at the Battle of Waterloo."
      },
      {
        "word": "NASSAU",
        "category": "Bahamian Capital",
        "hint": "Vibrant island capital of the Bahamas situated on New Providence Island.",
        "extraHint": "Famous for historic pink colonial parliament buildings and crystal-clear turquoise waters."
      },
      {
        "word": "NEBULA",
        "category": "Star Nursery",
        "hint": "Interstellar cloud of gas and dust where new baby stars are born.",
        "extraHint": "The Orion Nebula is a vibrant star-forming region visible to naked eyes."
      },
      {
        "word": "NEPTUNE",
        "category": "Windswept Ice Giant",
        "hint": "The outermost planet in the Solar System, known for intense supersonic winds.",
        "extraHint": "Features deep azure blue color, a dynamic Great Dark Spot storm, and geyser moon Triton."
      },
      {
        "word": "NEWDELHI",
        "category": "Indian Capital",
        "hint": "Federal capital city of India renowned for grand Mughal and colonial monuments.",
        "extraHint": "Home to the Red Fort, India Gate war memorial, Humayun's Tomb, and Lotus Temple."
      },
      {
        "word": "NEWTON",
        "category": "Classical Physicist",
        "hint": "English mathematician and physicist who formulated the laws of motion and universal gravity.",
        "extraHint": "Invented calculus and the reflecting telescope; authored the landmark Principia Mathematica."
      },
      {
        "word": "NIAGARA",
        "category": "Mighty Cataracts",
        "hint": "Group of three massive waterfalls straddling the international border of the US and Canada.",
        "extraHint": "Composed of Horseshoe Falls, American Falls, and Bridal Veil Falls, powering huge turbines."
      },
      {
        "word": "NUCLEI",
        "category": "Atomic Centers",
        "hint": "Plural of nucleus; the dense central cores of atoms holding nucleons.",
        "extraHint": "Contain positively charged protons and electrically neutral neutrons."
      },
      {
        "word": "NUCLEUS",
        "category": "Atomic Core",
        "hint": "The dense, positively charged central core of an atom containing protons and neutrons.",
        "extraHint": "Discovered by Ernest Rutherford in 1911 through the gold foil alpha-particle experiment."
      },
      {
        "word": "OCEANS",
        "category": "Global Seas",
        "hint": "Vast bodies of salt water that cover seventy percent of the globe.",
        "extraHint": "Encompasses the Pacific, Atlantic, Indian, Southern, and Arctic oceans."
      },
      {
        "word": "ODYSSEY",
        "category": "Epic Voyage",
        "hint": "Ancient Greek epic poem attributed to Homer chronicling the ten-year journey home of Odysseus.",
        "extraHint": "Features encounters with the Cyclops Polyphemus, Circe the sorceress, and the Sirens."
      },
      {
        "word": "OPTICS",
        "category": "Light Physics",
        "hint": "Branch of physics studying the behavior, properties, and lenses of light.",
        "extraHint": "Underpins telescopes, microscopes, fiber-optic cables, and cameras."
      },
      {
        "word": "ORGANISM",
        "category": "Living Entity",
        "hint": "Individual animal, plant, bacterium, or single-celled life form capable of response.",
        "extraHint": "Undergoes biological metabolism, maintains internal homeostasis, and reproduces."
      },
      {
        "word": "OSIRIS",
        "category": "Egyptian Lord of Dead",
        "hint": "Ancient Egyptian god of the afterlife, death, resurrection, and vegetative fertility.",
        "extraHint": "Depicted as a green-skinned pharaoh wrapped in mummy linens holding the crook and flail."
      },
      {
        "word": "OTTAWA",
        "category": "Canadian Capital",
        "hint": "Bilingual capital city of Canada situated along the Ottawa River in Ontario.",
        "extraHint": "Home to Parliament Hill's Gothic towers and the UNESCO-listed Rideau Canal."
      },
      {
        "word": "OXYGEN",
        "category": "Breath of Life",
        "hint": "Chemical element with atomic number 8 essential for aerobic respiration.",
        "extraHint": "Makes up roughly 21% of Earth's atmosphere and 89% of water by mass."
      },
      {
        "word": "PACIFIC",
        "category": "Deepest Ocean",
        "hint": "The largest and deepest of Earth's oceanic divisions, covering over 63 million square miles.",
        "extraHint": "Contains the Mariana Trench and the geologically active volcano Ring of Fire."
      },
      {
        "word": "PALACE",
        "category": "Royal Residence",
        "hint": "Grand official residence of a sovereign monarch, ruler, or dignitary.",
        "extraHint": "The Palace of Versailles in France features opulent halls and gardens."
      },
      {
        "word": "PANAMA",
        "category": "Canal Capital",
        "hint": "Modern skyscraper capital of Panama situated at the Pacific entrance of the Panama Canal.",
        "extraHint": "Blends gleaming high-rise bank towers with the colonial cobbled streets of Casco Viejo."
      },
      {
        "word": "PAPYRUS",
        "category": "Ancient Writing Material",
        "hint": "Material prepared in ancient Egypt from the pithy stem of a water plant, used for writing documents.",
        "extraHint": "Strips were layered perpendicularly, pressed, and dried to form flexible scroll sheets."
      },
      {
        "word": "PEGASUS",
        "category": "Winged Stallion",
        "hint": "Pure white winged divine stallion in Greek mythology sired by Poseidon.",
        "extraHint": "Bellerophon rode Pegasus to slay the fire-breathing Chimera monster in Lycia."
      },
      {
        "word": "PHARAOH",
        "category": "Ancient Egyptian Monarch",
        "hint": "Title used for monarch rulers of ancient Egypt from the First Dynasty until Roman annexation.",
        "extraHint": "Regarded as divine intermediaries between the gods and humanity; buried in grand tombs."
      },
      {
        "word": "PHOENIX",
        "category": "Immortal Firebird",
        "hint": "Immortal mythical firebird that cyclically regenerates by rising anew from its own ashes.",
        "extraHint": "Associated with the sun; lives for centuries before peacefully bursting into fragrant flames."
      },
      {
        "word": "PHOTON",
        "category": "Light Particle",
        "hint": "Elementary particle representing a single quantum of light and radiation.",
        "extraHint": "Travels at 186,282 miles per second in vacuum, carrying energy."
      },
      {
        "word": "PLANET",
        "category": "Celestial Body",
        "hint": "Astronomical body orbiting a star massive enough to be rounded by gravity.",
        "extraHint": "The eight recognized planets in our Solar System orbit the Sun."
      },
      {
        "word": "PLANTS",
        "category": "Flora Kingdom",
        "hint": "Multicellular photosynthetic organisms characterized by cell walls.",
        "extraHint": "Produce life-sustaining oxygen and sugars while capturing sunlight."
      },
      {
        "word": "PLASMA",
        "category": "Fourth State",
        "hint": "Ionized gas consisting of equal numbers of positive ions and electrons.",
        "extraHint": "The most common state of ordinary matter in the universe, seen in stars."
      },
      {
        "word": "PLATEAU",
        "category": "Elevated Flatland",
        "hint": "Vast area of elevated, relatively flat land rising sharply above surrounding areas.",
        "extraHint": "The Tibetan Plateau is known as the 'Roof of the World', averaging 14,800 feet in height."
      },
      {
        "word": "POSEIDON",
        "category": "God of the Sea",
        "hint": "Olympian god of the sea, earthquakes, tsunamis, and horses in Greek mythology.",
        "extraHint": "Wields a powerful three-pronged trident capable of shattering rocks and raising tidal waves."
      },
      {
        "word": "PRAGUE",
        "category": "City of a Hundred Spires",
        "hint": "Capital of the Czech Republic renowned for bridges, castles, and Gothic towers.",
        "extraHint": "Features the 14th-century Charles Bridge, Prague Castle, and Astronomical Clock."
      },
      {
        "word": "PRESSURE",
        "category": "Force per Area",
        "hint": "Continuous physical force exerted on or against an object by something in contact with it.",
        "extraHint": "Measured in pascals, bars, or pounds per square inch (PSI) across fluid systems."
      },
      {
        "word": "PRETORIA",
        "category": "Executive Capital",
        "hint": "Administrative executive capital of South Africa known for purple jacaranda trees.",
        "extraHint": "Home to the historic Union Buildings and the giant bronze statue of Nelson Mandela."
      },
      {
        "word": "PROTEIN",
        "category": "Amino Acid Chain",
        "hint": "Large biomolecules consisting of one or more long chains of amino acid residues.",
        "extraHint": "Performs vital functions in bodies including structural tissue, enzyme catalysis, and immunity."
      },
      {
        "word": "PROTON",
        "category": "Positive Charge",
        "hint": "Stable subatomic particle with positive charge in atomic nuclei.",
        "extraHint": "The number of protons determines the atomic number of an element."
      },
      {
        "word": "PULSAR",
        "category": "Ticking Star",
        "hint": "Rapidly rotating neutron star emitting beams of electromagnetic pulses.",
        "extraHint": "Acts as an ultra-precise cosmic lighthouse ticking across space."
      },
      {
        "word": "PYRAMID",
        "category": "Ancient Monument",
        "hint": "Monumental stone structure with a square base and triangular sides meeting at an apex.",
        "extraHint": "The Great Pyramid of Giza was built as a tomb for Pharaoh Khufu over 4,500 years ago."
      },
      {
        "word": "QUARKS",
        "category": "Subatomic Units",
        "hint": "Elementary particles that combine to form protons and neutrons.",
        "extraHint": "Possess fractional electric charges and exist in six exotic flavors."
      },
      {
        "word": "QUASAR",
        "category": "Cosmic Powerhouse",
        "hint": "Extremely luminous active galactic nucleus powered by a black hole.",
        "extraHint": "Emits brilliant radiation thousands of times brighter than ordinary galaxies."
      },
      {
        "word": "RADIUM",
        "category": "Radioactive Metal",
        "hint": "Radioactive alkaline earth metal discovered by Marie and Pierre Curie.",
        "extraHint": "Historically glowed in the dark on luminous vintage watch dials."
      },
      {
        "word": "RIVERS",
        "category": "Flowing Streams",
        "hint": "Natural flowing watercourses heading toward an ocean, sea, or lake.",
        "extraHint": "Historic rivers like the Nile and Tigris nurtured human civilization."
      },
      {
        "word": "RIYADH",
        "category": "Desert Capital",
        "hint": "Booming desert capital of Saudi Arabia and financial powerhouse of the peninsula.",
        "extraHint": "Features modern skyscrapers like Kingdom Centre rising above historic mud-brick forts."
      },
      {
        "word": "ROSETTA",
        "category": "Ancient Deciphering Stone",
        "hint": "Granodiorite stele inscribed with three versions of a decree issued in Memphis, Egypt in 196 BC.",
        "extraHint": "Inscribed in Ancient Egyptian hieroglyphic, Demotic script, and Ancient Greek, unlocking ancient texts."
      },
      {
        "word": "SAHARA",
        "category": "Vast Desert",
        "hint": "The largest hot desert in the world, covering over 3.5 million square miles.",
        "extraHint": "Features shifting sand ergs, rocky plateaus, and subterranean desert oases."
      },
      {
        "word": "SAMURAI",
        "category": "Hereditary Japanese Warrior",
        "hint": "Hereditary military nobility and officer caste of medieval and early-modern Japan.",
        "extraHint": "Followed the strict Bushido moral warrior code and carried twin katana and wakizashi swords."
      },
      {
        "word": "SANJOSE",
        "category": "Costa Rican Capital",
        "hint": "Central valley capital of Costa Rica surrounded by cloud forests and volcanoes.",
        "extraHint": "Home to the ornate neoclassical National Theatre of Costa Rica and the Pre-Columbian Gold Museum."
      },
      {
        "word": "SANTIAGO",
        "category": "Chilean Capital",
        "hint": "Vibrant capital of Chile nestled in a central valley surrounded by towering snow Andes.",
        "extraHint": "Features the historic Plaza de Armas and the towering Gran Torre Santiago skyscraper."
      },
      {
        "word": "SATURN",
        "category": "Ringed Giant",
        "hint": "Sixth planet from the Sun celebrated for vast, brilliant icy rings.",
        "extraHint": "Features dozens of moons including methane-rich Titan and Enceladus."
      },
      {
        "word": "SAVANNA",
        "category": "Tropical Grassland",
        "hint": "Mixed woodland-grassland ecosystem characterized by widely spaced trees and dry seasons.",
        "extraHint": "Covers vast expanses of East Africa, supporting massive seasonal wildlife migrations."
      },
      {
        "word": "SENATE",
        "category": "Governing Council",
        "hint": "Deliberative assembly with political and legislative governing authority.",
        "extraHint": "The Roman Senate debated foreign treaties, laws, and public spending."
      },
      {
        "word": "SHEKEL",
        "category": "Israeli Currency",
        "hint": "Official currency of the State of Israel, also used in the Palestinian territories.",
        "extraHint": "Ancient biblical unit of weight revived as modern legal tender denominated as New Shekel."
      },
      {
        "word": "SHOGUN",
        "category": "Japanese Military Commander",
        "hint": "Hereditary military dictator of Japan from 1192 until the Meiji Restoration in 1868.",
        "extraHint": "Held de facto political and military power while the Emperor remained a symbolic figurehead."
      },
      {
        "word": "SILVER",
        "category": "Lustrous Metal",
        "hint": "Precious metallic element with atomic number 47 and highest conductivity.",
        "extraHint": "Historically minted into currency coins and used in fine silverware."
      },
      {
        "word": "SOCRATES",
        "category": "Classical Philosopher",
        "hint": "Foundational Greek philosopher of Athens renowned for the Socratic questioning method.",
        "extraHint": "Sentenced to drink hemlock in 399 BC for corrupting youth and defying state gods."
      },
      {
        "word": "SODIUM",
        "category": "Alkali Metal",
        "hint": "Soft, highly reactive silvery alkali metal with atomic number 11.",
        "extraHint": "Combines with chlorine gas to form common dietary table salt crystals."
      },
      {
        "word": "SOLSTICE",
        "category": "Extreme Sun Position",
        "hint": "Astronomical event when the Sun reaches its highest or lowest excursion relative to celestial equator.",
        "extraHint": "The summer solstice marks the longest day of the year; the winter solstice marks the shortest."
      },
      {
        "word": "SONATA",
        "category": "Solo Composition",
        "hint": "Musical composition for a solo instrument or small ensemble, usually in three or four movements.",
        "extraHint": "Classical piano sonatas feature exposition, development, and recapitulation structural phases."
      },
      {
        "word": "SPHINX",
        "category": "Mythic Beast",
        "hint": "Mythological monster with a lion's body and human head posing riddles.",
        "extraHint": "The Great Sphinx of Giza stands sentinel guard before the pyramids."
      },
      {
        "word": "STATUE",
        "category": "Carved Figure",
        "hint": "Three-dimensional carved or cast sculpture representing a person or animal.",
        "extraHint": "The Statue of Liberty in New York Harbor greeted millions of immigrants."
      },
      {
        "word": "STEPPE",
        "category": "Temperate Grassland",
        "hint": "Vast ecoregion of semiarid, unforested grass plains spanning across Eurasia.",
        "extraHint": "Historically traversed by nomadic horse cultures including the Mongols and Scythians."
      },
      {
        "word": "STRAIT",
        "category": "Narrow Sea Channel",
        "hint": "Naturally formed, narrow waterway connecting two larger navigable bodies of water.",
        "extraHint": "The Strait of Gibraltar connects the Atlantic Ocean to the Mediterranean Sea."
      },
      {
        "word": "SUPERIOR",
        "category": "Largest Great Lake",
        "hint": "The largest freshwater lake in the world by surface area, shared by the United States and Canada.",
        "extraHint": "The northernmost and westernmost of North America's five Great Lakes, holding immense water volume."
      },
      {
        "word": "SYMPHONY",
        "category": "Orchestral Masterwork",
        "hint": "Elaborate musical composition for full orchestra, typically in four distinct movements.",
        "extraHint": "Pioneered by Haydn, Mozart, and Beethoven with majestic brass, woodwinds, and strings."
      },
      {
        "word": "TAJMAHAL",
        "category": "Marble Mausoleum",
        "hint": "Ivory-white marble mausoleum on the Yamuna river in Agra, India.",
        "extraHint": "Commissioned in 1632 by Mughal emperor Shah Jahan to house the tomb of his wife Mumtaz."
      },
      {
        "word": "TASMANIA",
        "category": "Australian Island State",
        "hint": "Island state of Australia located 150 miles south of the mainland across Bass Strait.",
        "extraHint": "Known for vast rugged wilderness national parks and the native carnivorous Tasmanian devil."
      },
      {
        "word": "TEHRAN",
        "category": "Persian Capital",
        "hint": "Sprawling capital of Iran nestled beneath the dramatic snowy Alborz mountains.",
        "extraHint": "Home to the opulent Golestan Palace complex and the National Jewels Museum."
      },
      {
        "word": "TEMPLE",
        "category": "Sacred Shrine",
        "hint": "Building dedicated to religious ceremonies and the worship of deities.",
        "extraHint": "Ancient Greek, Roman, and Hindu temples feature majestic stone columns."
      },
      {
        "word": "THAMES",
        "category": "London River",
        "hint": "River flowing through southern England and the heart of downtown London into North Sea.",
        "extraHint": "Historically froze solid in winter during the Little Ice Age, hosting festive frost fairs."
      },
      {
        "word": "THEORY",
        "category": "Scientific Model",
        "hint": "Well-substantiated explanation of some aspect of the natural world.",
        "extraHint": "Supported by vast bodies of empirical facts, testing, and laws."
      },
      {
        "word": "TORNADO",
        "category": "Violent Rotating Funnel",
        "hint": "Violently rotating column of air extending from a thunderstorm to the ground in a condensation funnel.",
        "extraHint": "Capable of producing wind speeds exceeding 300 mph, destroying structures in minutes."
      },
      {
        "word": "TRAGEDY",
        "category": "Dramatic Genre",
        "hint": "Genre of dramatic theatre treating sorrowful, catastrophic events encountered by heroic figures.",
        "extraHint": "Classic examples include Sophocles' Oedipus Rex and Shakespeare's King Lear."
      },
      {
        "word": "TREATY",
        "category": "Peace Agreement",
        "hint": "Formally ratified peace agreement or alliance between sovereign nations.",
        "extraHint": "The Treaty of Versailles formally concluded World War I in 1919."
      },
      {
        "word": "TROMBONE",
        "category": "Telescoping Slide Brass",
        "hint": "Large brass musical instrument in which the sound is produced by a vibrating lip and sliding tube.",
        "extraHint": "Uses a telescoping slide mechanism rather than valves to smoothly alter the pitch."
      },
      {
        "word": "TRUMPET",
        "category": "Brass Wind Instrument",
        "hint": "Brass instrument with the highest register in the brass family, played through three piston valves.",
        "extraHint": "Produces bright, piercing fanfare calls across jazz, classical orchestras, and military bands."
      },
      {
        "word": "TSUNAMI",
        "category": "Harbor Ocean Wave",
        "hint": "Series of long ocean waves caused by the displacement of a large volume of water, typically by earthquakes.",
        "extraHint": "Can travel across entire oceans at jetliner speeds before surging destructively onto coasts."
      },
      {
        "word": "TUNDRA",
        "category": "Frozen Treeless Plain",
        "hint": "Vast, flat, treeless Arctic region where the subsoil is permanently frozen permafrost.",
        "extraHint": "Supports low lichens, mosses, and dwarf shrubs that burst into brief summer bloom."
      },
      {
        "word": "UNICORN",
        "category": "Horned White Beast",
        "hint": "Legendary creature depicted as a white horse with a single spiraling horn on its forehead.",
        "extraHint": "Symbol of purity, grace, and innocence whose magical horn was reputed to neutralize poisons."
      },
      {
        "word": "URANUS",
        "category": "Tilted Giant",
        "hint": "Ice giant planet that rotates on its side with a 98-degree axial tilt.",
        "extraHint": "Possesses a pale cyan hue caused by methane gas in its atmosphere."
      },
      {
        "word": "VALKYRIE",
        "category": "Maidens of Valhalla",
        "hint": "Host of female figures in Norse mythology who choose who lives and who dies in battle.",
        "extraHint": "Escorted the chosen slain warriors from mortal battlefields to Odin's great hall Valhalla."
      },
      {
        "word": "VALLEY",
        "category": "Low Land Area",
        "hint": "Low area of land between hills or mountains, typically with a river.",
        "extraHint": "Carved into V-shapes by rivers or broad U-shapes by ancient glaciers."
      },
      {
        "word": "VECTOR",
        "category": "Direction Quantity",
        "hint": "Quantity having both direction and magnitude, such as force or velocity.",
        "extraHint": "Represented geometrically by arrows pointing along coordinate axes."
      },
      {
        "word": "VELOCITY",
        "category": "Speed with Direction",
        "hint": "Vector physical quantity expressing the rate of change of an object's position with time.",
        "extraHint": "Combines both speed magnitude and spatial direction, measured in meters per second."
      },
      {
        "word": "VESUVIUS",
        "category": "Historic Volcano",
        "hint": "Active stratovolcano on the Gulf of Naples, Italy, that buried Pompeii in 79 AD.",
        "extraHint": "Only active volcano on European mainland to have erupted within the last century."
      },
      {
        "word": "VICTORIA",
        "category": "African Great Lake",
        "hint": "Africa's largest lake by area, divided among Tanzania, Uganda, and Kenya.",
        "extraHint": "Chief reservoir of the historic White Nile River and largest tropical lake in the world."
      },
      {
        "word": "VIENNA",
        "category": "City of Music",
        "hint": "Imperial capital of Austria renowned for classical music and grand coffeehouses.",
        "extraHint": "Home of Mozart, Beethoven, and Freud; features the grand Schönbrunn Palace."
      },
      {
        "word": "VIOLIN",
        "category": "Four-String Bowed Instrument",
        "hint": "Wooden chordophone instrument with four strings tuned in perfect fifths, played with a bow.",
        "extraHint": "Highest-pitched member of the violin family; celebrated by Antonio Stradivari."
      },
      {
        "word": "VOLCANO",
        "category": "Crust Vent",
        "hint": "Rupture in the crust of a planetary-mass object that allows hot lava and gases to escape.",
        "extraHint": "Can be classified as active, dormant, or extinct based on eruption histories."
      },
      {
        "word": "WARSAW",
        "category": "Phoenix City",
        "hint": "Resilient capital of Poland whose Old Town was meticulously rebuilt after WWII.",
        "extraHint": "Birthplace of Marie Curie and Frédéric Chopin; situated along the Vistula River."
      },
      {
        "word": "WINDHOEK",
        "category": "Namibian Capital",
        "hint": "High-altitude capital of Namibia situated in the Khomas Highland plateau.",
        "extraHint": "Blends German colonial architecture with modern African administrative centers."
      },
      {
        "word": "YANGTZE",
        "category": "Longest in Asia",
        "hint": "The longest river in Asia and third-longest in the world, flowing entirely within China.",
        "extraHint": "Home to the massive Three Gorges Dam, the world's largest hydroelectric power station."
      }
    ],
    "hard": [
      {
        "word": "ACCELERATION",
        "category": "Velocity Change",
        "hint": "Rate of change of the velocity of an object with respect to time.",
        "extraHint": "Produced whenever an object speeds up, slows down, or alters its direction of motion."
      },
      {
        "word": "ACCORDION",
        "category": "Bellows-Driven Instrument",
        "hint": "Box-shaped musical instrument of the bellows-driven free-reed aerophone family.",
        "extraHint": "Played by compressing or expanding the bellows while pressing keys or buttons."
      },
      {
        "word": "ACONCAGUA",
        "category": "Andean Giant Peak",
        "hint": "The highest mountain in both the Western and Southern Hemispheres at 22,838 feet.",
        "extraHint": "Located in the Mendoza province of Argentina; the highest peak outside Asia."
      },
      {
        "word": "ACROPOLIS",
        "category": "High Citadel",
        "hint": "Ancient citadel located on a rocky outcrop above the city of Athens containing temples.",
        "extraHint": "Symbol of the Golden Age of Athens, classical Greece, and ancient democratic philosophy."
      },
      {
        "word": "ALEXANDER",
        "category": "Macedonian Conqueror",
        "hint": "King of the ancient Greek kingdom of Macedon who created one of history's largest empires.",
        "extraHint": "Undefeated in battle, conquered the Persian Empire from Greece to northwestern India by age 30."
      },
      {
        "word": "AMSTERDAM",
        "category": "Canal City",
        "hint": "Picturesque capital of the Netherlands famous for ringed canals and bicycles.",
        "extraHint": "Encloses the Rijksmuseum, Van Gogh Museum, and the historic Anne Frank House."
      },
      {
        "word": "ANDROMEDA",
        "category": "Neighboring Spiral",
        "hint": "Nearest major spiral galaxy to the Milky Way, located 2.5 million light-years away.",
        "extraHint": "On a gravitational collision course to merge with our Milky Way in about 4.5 billion years."
      },
      {
        "word": "ANGKORWAT",
        "category": "Cambodian Temple Complex",
        "hint": "Vast religious temple complex located in northern Cambodia, the largest religious structure in the world.",
        "extraHint": "Originally constructed in the early 12th century as a Hindu temple for the Khmer Empire."
      },
      {
        "word": "ANTARCTICA",
        "category": "Frozen Continent",
        "hint": "The southernmost continent, a frozen polar desert surrounding the South Pole.",
        "extraHint": "Home to ninety percent of the world's ice and colonies of breeding emperor penguins."
      },
      {
        "word": "ANTHROPOLOGY",
        "category": "Human Culture Study",
        "hint": "The holistic scientific study of human societies, cultures, and biological development.",
        "extraHint": "Investigates language origins, religious rituals, and physical human evolution."
      },
      {
        "word": "APHRODITE",
        "category": "Goddess of Love and Beauty",
        "hint": "Ancient Greek Olympian goddess associated with love, beauty, passion, and procreation.",
        "extraHint": "Born from the sea foam near Cyprus; famously married to the smith god Hephaestus."
      },
      {
        "word": "ARCHAEOLOGY",
        "category": "Material History",
        "hint": "The study of human history and prehistory through excavating artifacts and sites.",
        "extraHint": "Unearths ancient pottery, buried stone temples, coins, and lost ancient cities."
      },
      {
        "word": "ARCHIMEDES",
        "category": "Ancient Greek Polymath",
        "hint": "Ancient Greek mathematician, physicist, and inventor from Syracuse who discovered buoyancy principles.",
        "extraHint": "Famously shouted 'Eureka!' upon discovering water displacement while bathing."
      },
      {
        "word": "ARCHIPELAGO",
        "category": "Extensive Islands",
        "hint": "Extensive group or chain of islands scattered across an ocean or sea.",
        "extraHint": "The Malay Archipelago contains over 25,000 tropical volcanic islands."
      },
      {
        "word": "ARCHITECTURE",
        "category": "Building Design",
        "hint": "The art or science of designing and constructing buildings and habitable spaces.",
        "extraHint": "Encompasses Gothic cathedrals, Renaissance domes, and modernist glass skyscrapers."
      },
      {
        "word": "ARISTOCRACY",
        "category": "Nobility Rule",
        "hint": "Form of government where power is held by a hereditary noble ruling class.",
        "extraHint": "Historically exercised political authority in feudal European kingdoms."
      },
      {
        "word": "ARISTOTLE",
        "category": "Ancient Polymath",
        "hint": "Ancient Greek philosopher and polymath who tutored Alexander the Great in Macedonia.",
        "extraHint": "Wrote foundational treatises spanning logic, physics, biology, ethics, and politics."
      },
      {
        "word": "ASTRONAUT",
        "category": "Space Traveler",
        "hint": "Person trained, equipped, and deployed by a human spaceflight program to travel in space.",
        "extraHint": "Undergoes extensive zero-gravity training, neutral buoyancy dives, and flight simulation."
      },
      {
        "word": "ASTRONOMY",
        "category": "Celestial Science",
        "hint": "Scientific study of stars, planets, galaxies, and the universe beyond.",
        "extraHint": "Uses ground-based optical mirrors and orbital space telescopes to map cosmos."
      },
      {
        "word": "ASTROPHYSICS",
        "category": "Cosmic Physics",
        "hint": "Branch of space science applying physical and chemical laws to celestial stars.",
        "extraHint": "Investigates stellar fusion, black holes, dark matter, and cosmic expansion."
      },
      {
        "word": "ATMOSPHERE",
        "category": "Air Envelope",
        "hint": "The envelope of gases surrounding the Earth or any other planetary celestial body.",
        "extraHint": "Protects life on Earth by providing breathable air and warming surface temperatures."
      },
      {
        "word": "AVALANCHE",
        "category": "Rapid Snow Slide",
        "hint": "Rapid flow of snow down an inclined slope, often triggered by skiers, weather, or natural weight.",
        "extraHint": "Can reach speeds over 80 mph, burying mountain terrain under millions of tons of compacted snow."
      },
      {
        "word": "BEETHOVEN",
        "category": "Deaf Master Composer",
        "hint": "German composer and pianist who continued creating transcendent symphonies after going deaf.",
        "extraHint": "Composed his triumphant Ninth Symphony with the 'Ode to Joy' chorus in complete deafness."
      },
      {
        "word": "BIODIVERSITY",
        "category": "Variety of Species",
        "hint": "The variety of plant and animal life across an ecosystem or planet Earth.",
        "extraHint": "Tropical coral reefs and rainforests support the richest biodiversity on Earth."
      },
      {
        "word": "BLACKHOLE",
        "category": "Gravitational Singularity",
        "hint": "Region of spacetime where gravity is so strong that nothing, not even light, can escape.",
        "extraHint": "Formed by the gravitational collapse of massive stars; bounded by an event horizon."
      },
      {
        "word": "BUENOSAIRES",
        "category": "Paris of South America",
        "hint": "Cosmopolitan capital of Argentina situated along the wide Río de la Plata estuary.",
        "extraHint": "The birthplace of tango dance, famous for grand European boulevards and steak culture."
      },
      {
        "word": "BUREAUCRACY",
        "category": "Administrative System",
        "hint": "System of government administration managed by non-elected departmental officials.",
        "extraHint": "Maintains standardized civil records, taxation, infrastructure, and public programs."
      },
      {
        "word": "CARIBBEAN",
        "category": "Tropical Sea",
        "hint": "Subtropical sea bounded by Central America, South America, and the West Indies islands.",
        "extraHint": "Renowned for warm turquoise waters, coral reefs, and golden trade winds."
      },
      {
        "word": "CENTURION",
        "category": "Roman Legion Officer",
        "hint": "Professional officer in the Roman army who commanded a century of around eighty Roman legionaries.",
        "extraHint": "Known for wearing transverse crested helmets and carrying a vine staff as a symbol of rank."
      },
      {
        "word": "CHLOROPHYLL",
        "category": "Green Plant Pigment",
        "hint": "Green pigment found in cyanobacteria and the chloroplasts of algae and green plants.",
        "extraHint": "Absorbs blue and red wavelengths of light while reflecting green light back to our eyes."
      },
      {
        "word": "CHROMOSOME",
        "category": "Gene Package",
        "hint": "Thread-like package of coiled DNA found within the cell nucleus of organisms.",
        "extraHint": "Humans typically possess 23 pairs of chromosomes, totaling 46 chromosomes."
      },
      {
        "word": "CHURCHILL",
        "category": "British Statesman",
        "hint": "British Prime Minister who led the United Kingdom to victory during the Second World War.",
        "extraHint": "Famous for stirring oratory speeches vowing: 'We shall fight on the beaches, we shall never surrender.'"
      },
      {
        "word": "CITIZENSHIP",
        "category": "National Membership",
        "hint": "Status of being a recognized legal citizen of a country with rights and duties.",
        "extraHint": "Entitles individuals to hold passports, vote in elections, and receive protection."
      },
      {
        "word": "CIVILIZATION",
        "category": "Advanced Society",
        "hint": "Stage of human social and cultural development and organization considered advanced.",
        "extraHint": "Characterized by urbanization, writing systems, agriculture, and government."
      },
      {
        "word": "CLEOPATRA",
        "category": "Last Egyptian Queen",
        "hint": "The last active ruler of the Ptolemaic Kingdom of Egypt, famous for intellect and charisma.",
        "extraHint": "Formed famous political alliances with Roman leaders Julius Caesar and Mark Antony."
      },
      {
        "word": "COLOSSEUM",
        "category": "Flavian Arena",
        "hint": "Oval amphitheatre in the centre of Rome, the largest ancient amphitheatre ever built.",
        "extraHint": "Could hold 50,000 spectators for gladiatorial combats and public spectacles."
      },
      {
        "word": "CONFUCIUS",
        "category": "Chinese Sage",
        "hint": "Chinese philosopher and teacher whose ethical teachings founded the tradition of Confucianism.",
        "extraHint": "Emphasized personal and governmental morality, correctness of social relationships, and justice."
      },
      {
        "word": "CONSTELLATION",
        "category": "Star Pattern",
        "hint": "Recognized grouping of stars forming a perceived visual celestial outline.",
        "extraHint": "Eighty-eight official constellations divide the night sky into celestial sectors."
      },
      {
        "word": "CONSTITUTION",
        "category": "Supreme Law",
        "hint": "Fundamental principles or established precedents according to which a state is governed.",
        "extraHint": "The United States Constitution was drafted in Philadelphia in 1787."
      },
      {
        "word": "CONTINENTAL",
        "category": "Landmass Scale",
        "hint": "Relating to or characteristic of a continent, such as continental tectonic drift.",
        "extraHint": "Alfred Wegener proposed the continental drift theory in 1912."
      },
      {
        "word": "COPENHAGEN",
        "category": "Danish Capital",
        "hint": "Bicycle-friendly capital of Denmark with colorful 17th-century harbor townhouses.",
        "extraHint": "Famous for the Little Mermaid statue, Tivoli Gardens, and royal palaces."
      },
      {
        "word": "COPERNICUS",
        "category": "Heliocentric Pioneer",
        "hint": "Renaissance astronomer who formulated a model of the universe placing the Sun at the center.",
        "extraHint": "Challenged Ptolemaic geocentrism with his groundbreaking 1543 treatise on celestial revolutions."
      },
      {
        "word": "CORONATION",
        "category": "Royal Crowning",
        "hint": "Ceremony of crowning a newly sovereign king or queen with royal regalia.",
        "extraHint": "Historic British coronations have occurred at Westminster Abbey since 1066."
      },
      {
        "word": "DECLARATION",
        "category": "Formal Statement",
        "hint": "Formal, explicit announcement of state intentions, rights, or sovereign status.",
        "extraHint": "The Declaration of Independence was signed on July 4, 1776, in Philadelphia."
      },
      {
        "word": "DEMOCRACY",
        "category": "Rule of the People",
        "hint": "System of government where whole populations or eligible citizens hold sovereign power.",
        "extraHint": "Originated in ancient classical Athens where free male citizens voted on legislation."
      },
      {
        "word": "DONQUIXOTE",
        "category": "Man of La Mancha",
        "hint": "Spanish epic novel by Miguel de Cervantes published in two parts in 1605 and 1615.",
        "extraHint": "Follows an idealistic nobleman who reads so many chivalric romances he sets out as a knight-errant."
      },
      {
        "word": "EARTHQUAKE",
        "category": "Seismic Shaking",
        "hint": "Sudden shaking of the surface of the Earth resulting from a sudden release of energy in the lithosphere.",
        "extraHint": "Measured in magnitude on the moment magnitude scale; triggers seismic waves across faults."
      },
      {
        "word": "ECOSYSTEM",
        "category": "Biological Community",
        "hint": "Biological community of interacting organisms and their physical environment functioning together.",
        "extraHint": "Encompasses both living biotic components like animals and abiotic elements like soil and water."
      },
      {
        "word": "EIFFELTOWER",
        "category": "Iron Lattice Spire",
        "hint": "Wrought-iron lattice tower on the Champ de Mars in Paris named after Gustave Eiffel.",
        "extraHint": "Constructed as the entrance arch for the 1889 World's Fair; stands 1,083 feet tall."
      },
      {
        "word": "ENLIGHTENMENT",
        "category": "Age of Reason",
        "hint": "European intellectual movement in the 17th and 18th centuries emphasizing reason.",
        "extraHint": "Promoted religious tolerance, scientific inquiry, individual liberty, and democracy."
      },
      {
        "word": "EQUATORIAL",
        "category": "Equator Zone",
        "hint": "Relating to the tropical regions situated immediately along the Earth's equator.",
        "extraHint": "Characterized by warm temperatures, dense rainforests, and heavy annual rains."
      },
      {
        "word": "EXOPLANET",
        "category": "Extrasolar World",
        "hint": "Planet located outside our solar system orbiting another distant star.",
        "extraHint": "Discovered by transit dips using space telescopes like Kepler and James Webb."
      },
      {
        "word": "GEORGETOWN",
        "category": "Guyanese Capital",
        "hint": "Coastal port capital of Guyana known for grand wooden British colonial architecture.",
        "extraHint": "Home to the soaring wooden St. George's Cathedral and the Caribbean Community (CARICOM)."
      },
      {
        "word": "GIBRALTAR",
        "category": "Pillar of Hercules",
        "hint": "Prominent monolithic limestone promontory on the southwestern tip of Europe.",
        "extraHint": "Guards the narrow maritime strait linking the Atlantic Ocean to the Mediterranean Sea."
      },
      {
        "word": "GILGAMESH",
        "category": "Oldest Known Epic",
        "hint": "Ancient Mesopotamian epic poem regarded as the earliest surviving great work of literature.",
        "extraHint": "Follows King Gilgamesh of Uruk and wild man Enkidu in search of the secret of eternal life."
      },
      {
        "word": "GLADIATOR",
        "category": "Armed Roman Combatant",
        "hint": "Armed combatant who entertained audiences in the Roman Republic and Roman Empire in violent confrontations.",
        "extraHint": "Trained in gladiatorial schools (ludi) to fight fellow gladiators, wild beasts, and criminals."
      },
      {
        "word": "GRAVITATION",
        "category": "Universal Attraction",
        "hint": "Fundamental physical interaction by which all masses in the universe attract.",
        "extraHint": "Sir Isaac Newton formulated the law of universal gravitation in 1687."
      },
      {
        "word": "GREENLAND",
        "category": "Largest Island",
        "hint": "The world's largest island, located between the Arctic and Atlantic Oceans, an autonomous Danish territory.",
        "extraHint": "Covered by a massive continental ice sheet that is second in size only to Antarctica."
      },
      {
        "word": "GUTENBERG",
        "category": "Printing Pioneer",
        "hint": "German inventor who introduced movable mechanical type printing to Europe around 1440.",
        "extraHint": "His printed Gutenberg Bibles sparked the European Renaissance and the Protestant Reformation."
      },
      {
        "word": "HAGIASOPHIA",
        "category": "Byzantine Masterpiece",
        "hint": "Historic religious monument in Istanbul, Turkey, famous for its massive soaring central dome.",
        "extraHint": "Built in 537 AD as the patriarchal cathedral of Constantinople under Emperor Justinian I."
      },
      {
        "word": "HALLOWEEN",
        "category": "All Hallows Eve",
        "hint": "Celebration observed on October 31 dedicated to remembering the dead and spirits.",
        "extraHint": "Celebrated with costume parties, trick-or-treating, carving pumpkin jack-o'-lanterns, and bonfires."
      },
      {
        "word": "HEMISPHERE",
        "category": "Half of the Globe",
        "hint": "Half of the Earth's terrestrial sphere, divided by the equator or prime meridian.",
        "extraHint": "The Northern and Southern Hemispheres experience reversed opposing seasons."
      },
      {
        "word": "HIEROGLYPH",
        "category": "Ancient Egyptian Script",
        "hint": "Character used in a system of pictorial writing, especially in ancient Egyptian monumental inscriptions.",
        "extraHint": "Consisted of phonetic glyphs and logograms deciphered in 1822 using the Rosetta Stone."
      },
      {
        "word": "HIEROGLYPHS",
        "category": "Sacred Picture Script",
        "hint": "Writing system using pictorial characters used in ancient Pharaonic Egypt.",
        "extraHint": "Deciphered by Jean-François Champollion in 1822 using the Rosetta Stone."
      },
      {
        "word": "HURRICANE",
        "category": "Tropical Cyclone",
        "hint": "Rapidly rotating storm system with a low-pressure center, strong winds, and heavy spiral rainbands.",
        "extraHint": "Categorized on the Saffir-Simpson wind scale from Category 1 up to Category 5."
      },
      {
        "word": "INDEPENDENCE",
        "category": "Self-Governance",
        "hint": "Condition of a nation establishing self-governance and freedom from colonial rule.",
        "extraHint": "Celebrated with national independence holidays, parades, and fireworks."
      },
      {
        "word": "INDUSTRIAL",
        "category": "Manufacturing Transformation",
        "hint": "Relating to the transformative historical revolution that replaced manual work with machine factories.",
        "extraHint": "Began in 18th-century Britain with steam engines, mechanized cotton mills, and iron smelting."
      },
      {
        "word": "INSCRIPTION",
        "category": "Carved Words",
        "hint": "Words, names, or decrees inscribed into monument stone, metal plates, or tablets.",
        "extraHint": "Provides durable historical records surviving thousands of years of weather."
      },
      {
        "word": "JERUSALEM",
        "category": "Holy City",
        "hint": "Historic city sacred to three Abrahamic faiths: Judaism, Christianity, and Islam.",
        "extraHint": "Encloses the Western Wall, Church of the Holy Sepulchre, and the Dome of the Rock."
      },
      {
        "word": "JURISDICTION",
        "category": "Legal Authority",
        "hint": "The official power and territorial boundary to make legal decisions and judgments.",
        "extraHint": "Defines the geographical and subject matter limits of courts and police authority."
      },
      {
        "word": "KILIMANJARO",
        "category": "African Roof Peak",
        "hint": "Dormant volcanic mountain in Tanzania, the highest peak in Africa at 19,341 feet.",
        "extraHint": "Features three volcanic cones: Kibo, Mawenzi, and Shira, crowned by alpine glaciers."
      },
      {
        "word": "MACHUPICCHU",
        "category": "Lost Inca City",
        "hint": "15th-century Inca citadel situated on an Andean mountain ridge in Peru above Urubamba.",
        "extraHint": "Built with polished dry-stone walls fit so tightly that a knife blade cannot fit between."
      },
      {
        "word": "MADAGASCAR",
        "category": "Biodiverse Island",
        "hint": "Large island country situated off the southeastern coast of Africa in the Indian Ocean.",
        "extraHint": "Famous for unique endemic wildlife, including dozens of lemur species and baobab trees."
      },
      {
        "word": "MAGNETISM",
        "category": "Magnetic Force",
        "hint": "Class of physical phenomena that are mediated by magnetic fields produced by currents.",
        "extraHint": "Opposite magnetic poles attract each other, while like magnetic poles repel each other."
      },
      {
        "word": "MATTERHORN",
        "category": "Pyramid Mountain",
        "hint": "Iconic pyramid-shaped peak straddling the border between Switzerland and Italy.",
        "extraHint": "Its four steep faces correspond to the four cardinal directions; famous alpine icon."
      },
      {
        "word": "MEDITERRANEAN",
        "category": "Inland Sea Basin",
        "hint": "Vast sea basin connecting Europe, Africa, and Asia through the Strait of Gibraltar.",
        "extraHint": "Cradle of maritime civilizations that pioneered philosophy, maritime trade, and wine."
      },
      {
        "word": "METEOROLOGY",
        "category": "Weather Science",
        "hint": "Branch of science concerned with the processes and phenomena of the atmosphere.",
        "extraHint": "Uses Doppler radar, satellite imaging, and supercomputers to forecast weather."
      },
      {
        "word": "METROPOLIS",
        "category": "Major Urban Hub",
        "hint": "Vast, populous, and bustling capital city or central economic urban hub.",
        "extraHint": "Global metropolises like Tokyo, London, and New York drive international commerce."
      },
      {
        "word": "MICHELANGELO",
        "category": "Master Sculptor",
        "hint": "Italian sculptor, painter, and architect of the High Renaissance who painted the Sistine Chapel.",
        "extraHint": "Sculpted the marble masterpieces of David and the Pietà; designed St. Peter's Basilica dome."
      },
      {
        "word": "MISSISSIPPI",
        "category": "Great American River",
        "hint": "Chief river of the second-largest drainage system on the North American continent.",
        "extraHint": "Flows 2,340 miles southward from Lake Itasca in Minnesota to the Gulf of Mexico."
      },
      {
        "word": "MITOCHONDRIA",
        "category": "Cellular Generator",
        "hint": "Membrane-bound cellular organelles generating chemical adenosine triphosphate.",
        "extraHint": "Known as the powerhouse of the cell, carrying its own circular DNA genome."
      },
      {
        "word": "MONTBLANC",
        "category": "Highest Alps Peak",
        "hint": "The highest mountain in the Alps and Western Europe, rising 15,777 feet.",
        "extraHint": "Snow-capped massif straddling France and Italy, popular for alpine mountaineering."
      },
      {
        "word": "MONTEVIDEO",
        "category": "Uruguayan Capital",
        "hint": "Coastal capital of Uruguay known for seaside promenades and colonial plazas.",
        "extraHint": "Features the 13-mile Rambla coastal walk along the Atlantic and rich soccer history."
      },
      {
        "word": "OCEANOGRAPHY",
        "category": "Marine Science",
        "hint": "The exploration and scientific study of physical, chemical, and biological ocean phenomena.",
        "extraHint": "Maps abyssal ocean trenches, global oceanic currents, and hydrothermal vent ecology."
      },
      {
        "word": "OKTOBERFEST",
        "category": "Bavarian Folk Festival",
        "hint": "World's largest folk festival held annually in Munich, Bavaria, celebrating German culture.",
        "extraHint": "Features massive beer tents, traditional brass music, lederhosen, dirndls, and pretzels."
      },
      {
        "word": "PALEONTOLOGY",
        "category": "Fossil Excavation",
        "hint": "Scientific study of prehistoric life through the examination of fossils.",
        "extraHint": "Reconstructs the anatomy, diet, and behavior of ancient extinct dinosaurs."
      },
      {
        "word": "PARAMARIBO",
        "category": "Surinamese Capital",
        "hint": "Historic wooden capital city of Suriname situated along the Suriname River.",
        "extraHint": "Its historic inner city features a unique fusion of Dutch architecture and indigenous timber."
      },
      {
        "word": "PARCHMENT",
        "category": "Animal Skin Writing Surface",
        "hint": "Writing material made from specially prepared untanned skins of sheep, calves, or goats.",
        "extraHint": "Used extensively throughout antiquity and the Middle Ages to create illuminated manuscripts."
      },
      {
        "word": "PARLIAMENT",
        "category": "Legislative Body",
        "hint": "Legislative assembly of elected representatives that debates and enacts laws.",
        "extraHint": "The British Parliament consists of the House of Commons and House of Lords."
      },
      {
        "word": "PARTHENON",
        "category": "Athenian Temple",
        "hint": "Former temple on the Athenian Acropolis dedicated to the Greek goddess Athena.",
        "extraHint": "Constructed in 447 BC; celebrated for its classical Doric marble architecture."
      },
      {
        "word": "PENINSULA",
        "category": "Surrounded Land",
        "hint": "Piece of land surrounded by water on three sides while connected to mainland.",
        "extraHint": "Prominent examples include the Iberian Peninsula, Florida, and the Italian boot."
      },
      {
        "word": "PHILOSOPHER",
        "category": "Wisdom Thinker",
        "hint": "Person who seeks wisdom and enlightenment through rigorous philosophical inquiry.",
        "extraHint": "Probes questions of morality, existence, logic, consciousness, and human knowledge."
      },
      {
        "word": "PHILOSOPHY",
        "category": "Love of Wisdom",
        "hint": "Systematic study of fundamental questions about existence, knowledge, values, and mind.",
        "extraHint": "Derived from the Greek words 'philo' (love) and 'sophia' (wisdom)."
      },
      {
        "word": "PHOTOSYNTHESIS",
        "category": "Solar Food Synthesis",
        "hint": "Process used by green plants to convert solar sunlight into chemical sugars.",
        "extraHint": "Releases life-sustaining oxygen as a byproduct while capturing atmospheric carbon."
      },
      {
        "word": "PROMETHEUS",
        "category": "Titan Fire Giver",
        "hint": "Titan who defied Zeus by stealing celestial fire from Mount Olympus to gift to humanity.",
        "extraHint": "Punished by being chained to a Caucasus mountain rock where an eagle daily ate his liver."
      },
      {
        "word": "PYTHAGORAS",
        "category": "Geometric Master",
        "hint": "Ancient Ionian Greek philosopher and mathematician famous for his right-triangle theorem.",
        "extraHint": "Proved that the square of the hypotenuse equals the sum of the squares of the other two sides."
      },
      {
        "word": "RADIATION",
        "category": "Energy Emission",
        "hint": "Emission or transmission of energy in the form of waves or particles through space.",
        "extraHint": "Encompasses harmless radio waves, visible rainbow light, and high-energy ionizing gamma rays."
      },
      {
        "word": "RELATIVITY",
        "category": "Einstein Spacetime",
        "hint": "Physical theory formulated by Albert Einstein describing gravity and spacetime.",
        "extraHint": "Special relativity establishes that nothing can travel faster than the speed of light."
      },
      {
        "word": "RENAISSANCE",
        "category": "Cultural Revival",
        "hint": "The fervent period of European cultural and artistic rebirth from 14th to 17th century.",
        "extraHint": "Witnessed groundbreaking advancements in perspective painting, anatomy, and science."
      },
      {
        "word": "REVOLUTION",
        "category": "Sudden Upheaval",
        "hint": "Fundamental, sudden change in political power or social organizational structures.",
        "extraHint": "The French Revolution of 1789 abolished the monarchy and established human rights."
      },
      {
        "word": "REYKJAVIK",
        "category": "Northernmost Capital",
        "hint": "The world's northernmost sovereign capital, coastal capital of Iceland.",
        "extraHint": "Powered entirely by clean geothermal energy; home to the futuristic Harpa Concert Hall."
      },
      {
        "word": "SAXOPHONE",
        "category": "Single-Reed Woodwind",
        "hint": "Woodwind musical instrument usually made of brass and played with a single-reed mouthpiece.",
        "extraHint": "Invented by Belgian instrument maker Adolphe Sax in 1840; central to jazz music."
      },
      {
        "word": "SEISMOLOGY",
        "category": "Earthquake Study",
        "hint": "Scientific study of earthquakes, tectonic movements, and propagation of elastic waves.",
        "extraHint": "Seismologists use sensitive seismographs to locate epicenters and predict tsunamis."
      },
      {
        "word": "SHAKESPEARE",
        "category": "The Bard of Avon",
        "hint": "English playwright, poet, and actor widely regarded as the greatest dramatist in history.",
        "extraHint": "Penned timeless theatrical masterpieces including Hamlet, Macbeth, Romeo and Juliet, and Othello."
      },
      {
        "word": "SINGAPORE",
        "category": "Lion City",
        "hint": "Prosperous sovereign island city-state in Southeast Asia renowned for futuristic gardens.",
        "extraHint": "Features Marina Bay Sands, Changi Airport's Jewel, and Gardens by the Bay."
      },
      {
        "word": "SOVEREIGNTY",
        "category": "Supreme Authority",
        "hint": "Supreme power or authority of an independent nation to govern its own affairs.",
        "extraHint": "Guarantees that independent nations control borders, laws, and foreign policy."
      },
      {
        "word": "STOCKHOLM",
        "category": "Venice of the North",
        "hint": "Capital of Sweden built across an archipelago of fourteen picturesque islands.",
        "extraHint": "Features the cobbled Old Town (Gamla Stan), royal palaces, and the 1628 Vasa ship museum."
      },
      {
        "word": "STONEHENGE",
        "category": "Standing Megaliths",
        "hint": "Prehistoric megalithic monument consisting of a ring of standing stones in Wiltshire, England.",
        "extraHint": "Aligned with the rising sun of the summer solstice and sunset of winter solstice."
      },
      {
        "word": "STRATOSPHERE",
        "category": "Upper Atmosphere",
        "hint": "The second major layer of Earth's atmosphere situated above the troposphere.",
        "extraHint": "Contains the protective ozone layer that filters out harmful solar ultraviolet radiation."
      },
      {
        "word": "SUPERNOVA",
        "category": "Stellar Explosion",
        "hint": "Powerful and luminous stellar explosion occurring during the last evolutionary stages of a star.",
        "extraHint": "Can briefly outshine an entire galaxy of stars while scattering heavy elements into space."
      },
      {
        "word": "SYMBIOSIS",
        "category": "Biological Partnership",
        "hint": "Close and long-term biological interaction between two different biological species.",
        "extraHint": "Mutualism benefits both species, like clownfish living protected among anemone tentacles."
      },
      {
        "word": "TEGUCIGALPA",
        "category": "Honduran Capital",
        "hint": "Mountainous capital city of Honduras situated in a high central valley.",
        "extraHint": "Historic silver-mining colonial town with winding hillside streets and pine forests."
      },
      {
        "word": "THANKSGIVING",
        "category": "Harvest Gratitude Holiday",
        "hint": "National holiday celebrated in the United States and Canada giving thanks for the harvest.",
        "extraHint": "Traditionally celebrated with family feasts featuring roast turkey, stuffing, and pumpkin pie."
      },
      {
        "word": "THERMODYNAMICS",
        "category": "Heat and Energy Laws",
        "hint": "Branch of physics dealing with heat, work, entropy, and energy transformation.",
        "extraHint": "Establishes that total energy is conserved and entropy continually increases."
      },
      {
        "word": "TROPOSPHERE",
        "category": "Lowest Atmospheric Layer",
        "hint": "The lowest layer of Earth's atmosphere, containing roughly 75% of the atmosphere's total mass.",
        "extraHint": "Location where virtually all everyday terrestrial weather phenomena and clouds occur."
      },
      {
        "word": "VOLCANOLOGY",
        "category": "Volcano Science",
        "hint": "The study of volcanoes, magma, lava flows, and related geological phenomena.",
        "extraHint": "Scientists monitor gas emissions and ground swell to forecast volcanic eruptions."
      },
      {
        "word": "WELLINGTON",
        "category": "Windy Capital",
        "hint": "The world's southernmost sovereign capital city, capital of New Zealand.",
        "extraHint": "Perched between a sparkling harbor and rugged green hills; famous for film visual effects."
      }
    ]
  }
};
