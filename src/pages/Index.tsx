import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  User, 
  Code2, 
  Brain, 
  Database, 
  Award,
  GraduationCap,
  Trophy,
  ChevronDown,
  Download,
  MapPin
} from "lucide-react";
import heroBackground from "@/assets/hero-background-new.jpg";
import headshotPlaceholder from "@/assets/headshot-placeholder.jpg";
import projectChurnIcon from "@/assets/project-churn-icon.jpg";
import projectSentimentIcon from "@/assets/project-sentiment-icon.jpg";
import projectCNNIcon from "@/assets/project-cnn-icon.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    "Languages": ["Python", "R", "SQL", "Java", "C/C++", "JavaScript"],
    "Data Science & ML": ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    "Web & Databases": ["HTML/CSS", "MySQL", "PostgreSQL", "MongoDB", "REST APIs"],
    "Tools & Platforms": ["Git", "GitHub", "Docker", "Firebase", "Tableau", "Power BI", "Google Colab"]
  };

  const projects = [
    {
      title: "Customer Churn Prediction Model",
      description: "Built a predictive model using Logistic Regression and Random Forest to identify customers likely to churn.",
      problem: "Telecommunications company needed to identify at-risk customers to improve retention strategies.",
      role: "Lead Data Scientist - Developed end-to-end ML pipeline from data preprocessing to model deployment.",
      methodology: "Applied feature engineering, handled class imbalance with SMOTE, and optimized hyperparameters using GridSearchCV.",
      results: "Achieved 85% accuracy on telecom dataset, providing actionable insights for retention strategies that could potentially save $2M annually.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      image: projectChurnIcon,
      github: "https://github.com/singhuday26/customer-churn-prediction"
    },
    {
      title: "Real-Time Sentiment Analyzer",
      description: "Created a Python application using NLP techniques for real-time sentiment analysis of social media feeds.",
      problem: "Marketing teams needed real-time insights into public sentiment around brand mentions and campaigns.",
      role: "Full-Stack Developer - Built both the NLP backend and interactive dashboard frontend.",
      methodology: "Implemented TextBlob and NLTK for sentiment classification, created real-time data pipeline using Twitter API.",
      results: "Achieved 90% F1-score on live Twitter feeds, enabling real-time market sentiment monitoring for 5+ brands.",
      techStack: ["Python", "NLTK", "TextBlob", "Streamlit", "Twitter API"],
      image: projectSentimentIcon,
      github: "https://github.com/singhuday26/sentiment-analyzer"
    },
    {
      title: "Image Classification with CNN",
      description: "Trained a Convolutional Neural Network using TensorFlow/Keras with advanced optimization techniques.",
      problem: "Computer vision application required accurate classification of product images for e-commerce automation.",
      role: "ML Engineer - Designed CNN architecture, implemented data augmentation, and optimized training pipeline.",
      methodology: "Built custom CNN with data augmentation, dropout regularization, and transfer learning from pre-trained models.",
      results: "Achieved 93% accuracy on test dataset, demonstrating robust image recognition capabilities for production deployment.",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
      image: projectCNNIcon,
      github: "https://github.com/singhuday26/cnn-image-classification"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 42, 79, 0.8), rgba(37, 99, 108, 0.7)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="relative">
                <img 
                  src={headshotPlaceholder} 
                  alt="Uday Singh - Professional Placeholder (Upload your photo here)" 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-white/20 shadow-glow hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-xs text-white/80 bg-black/50 px-2 py-1 rounded">Upload Photo</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Uday Singh: <span className="text-accent-glow">Data-Driven Innovator</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Crafting Scalable Solutions with Machine Learning & Analytics for Real-World Impact
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="btn-hero-primary text-lg px-8 py-4"
              >
                Explore My Data Science Projects
              </Button>
              <Button 
                asChild
                className="btn-hero-secondary text-lg px-8 py-4"
              >
                <a href="https://linkedin.com/in/udaysingh2626" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
            
            <div className="animate-bounce">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('about')}
                className="text-white/70 hover:text-white"
              >
                <ChevronDown className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 section-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-heading">
              About Me: Passionate About Data & Impact
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a results-driven Computer Science student specializing in Data Analytics at VIT-AP University, 
                passionate about competitive problem-solving and building scalable, data-driven software solutions. 
                My academic excellence (9.02/10.0 CGPA) is complemented by a proven ability to excel in high-pressure 
                environments, as demonstrated in national-level hackathons.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in machine learning and data analytics, I am eager to tackle complex challenges 
                and innovate. I thrive in collaborative, fast-paced settings and am committed to leveraging data to 
                generate impactful insights and contribute meaningfully to the tech community. My goal is to grow as a 
                data-driven software engineer, making significant contributions to projects like those at MotorQ.
              </p>
            </div>
            
            <div className="grid gap-4">
              <Card className="hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy className="h-6 w-6 text-accent" />
                    <h3 className="font-semibold">Top 4% in Amazon HackOn (2025)</h3>
                  </div>
                  <p className="text-muted-foreground">Advanced to Round 3 among 50,000+ participants</p>
                </CardContent>
              </Card>
              
              <Card className="hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Code2 className="h-6 w-6 text-accent" />
                    <h3 className="font-semibold">Smart India Hackathon 2024</h3>
                  </div>
                  <p className="text-muted-foreground">Developed full-stack web app prototype in 36 hours</p>
                </CardContent>
              </Card>
              
              <Card className="hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="h-6 w-6 text-accent" />
                    <h3 className="font-semibold">Microsoft Learn Student Ambassador</h3>
                  </div>
                  <p className="text-muted-foreground">Conducted Python/Data Science workshops for 100+ students</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-heading">
              My Technical Toolkit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across the data science and software development stack
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="hover-glow h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {category === "Languages" && <Code2 className="h-5 w-5 text-accent" />}
                    {category === "Data Science & ML" && <Brain className="h-5 w-5 text-accent" />}
                    {category === "Web & Databases" && <Database className="h-5 w-5 text-accent" />}
                    {category === "Tools & Platforms" && <Award className="h-5 w-5 text-accent" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className={`skill-tag ${
                          ['Python', 'SQL', 'TensorFlow', 'Keras', 'Scikit-learn', 'Tableau'].includes(skill) 
                            ? 'bg-gradient-accent text-accent-foreground border-accent/40' 
                            : ''
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-heading">
              My Data Science Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth case studies demonstrating practical application of data science and machine learning
            </p>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.title} className="project-card overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6 lg:p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Problem Statement:</h4>
                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">My Role & Contribution:</h4>
                        <p className="text-sm text-muted-foreground">{project.role}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Methodology:</h4>
                        <p className="text-sm text-muted-foreground">{project.methodology}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Key Results & Impact:</h4>
                        <p className="text-sm text-success font-medium">{project.results}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild className="bg-gradient-primary hover:shadow-lg">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Achievements Section */}
      <section id="education" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-heading">
              Education, Achievements & Community
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <Card className="hover-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">VIT-AP University</h3>
                  <p className="text-sm text-muted-foreground">B.Tech Computer Science (Data Analytics)</p>
                  <p className="text-sm text-muted-foreground">2023-2027 | Amaravati, AP</p>
                  <p className="text-lg font-semibold text-success mt-1">CGPA: 9.02/10.0</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground">Class XII (ISC Board)</h3>
                  <p className="text-sm text-muted-foreground">Saharanpur Public School, 2022</p>
                  <p className="text-sm text-success font-medium">84.8% (Science Stream)</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground">Class X (ICSE Board)</h3>
                  <p className="text-sm text-muted-foreground">Saharanpur Public School, 2020</p>
                  <p className="text-sm text-success font-medium">97% - District 1st Rank</p>
                </div>
              </CardContent>
            </Card>

            {/* Competitive Programming */}
            <Card className="hover-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  Hackathons & Competitions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Amazon HackOn 2025</h3>
                  <p className="text-sm text-success font-medium">Top 4% (Top 2,000/50,000+)</p>
                  <p className="text-sm text-muted-foreground">Advanced to Round 3</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground">Smart India Hackathon 2024</h3>
                  <p className="text-sm text-muted-foreground">Ministry of Education Problem</p>
                  <p className="text-sm text-muted-foreground">Full-stack prototype in 36 hours</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground">LeetCode Profile</h3>
                  <p className="text-sm text-muted-foreground">Active competitive programmer</p>
                  <a 
                    href="https://leetcode.com/udaysingh2408" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    View Profile →
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Leadership */}
            <Card className="hover-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-accent" />
                  Leadership & Community
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Microsoft Learn Student Ambassador</h3>
                  <p className="text-sm text-muted-foreground">VIT-AP (Aug 2023-2024)</p>
                  <p className="text-sm text-muted-foreground">Technical Mentor & Event Coordinator</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground">Workshop Leadership</h3>
                  <p className="text-sm text-muted-foreground">Python & Data Science workshops</p>
                  <p className="text-sm text-success font-medium">100+ students mentored</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground">Hackathon Organization</h3>
                  <p className="text-sm text-muted-foreground">Co-led intra-university hackathon</p>
                  <p className="text-sm text-muted-foreground">Mentored junior teams</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-heading">
            Let's Connect
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Ready to collaborate on data-driven solutions? Let's discuss how we can create impact together.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <Card className="bg-white/10 border-white/20 text-center hover:bg-white/20 transition-colors w-full sm:w-auto sm:min-w-[200px] flex-1 sm:flex-none">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 mx-auto mb-3 text-accent-glow" />
                <h3 className="font-semibold mb-2 text-primary-foreground">Email</h3>
                <a 
                  href="mailto:uday.singh240818@gmail.com" 
                  className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline break-all"
                >
                  uday.singh240818@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center hover:bg-white/20 transition-colors w-full sm:w-auto sm:min-w-[200px] flex-1 sm:flex-none">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 mx-auto mb-3 text-accent-glow" />
                <h3 className="font-semibold mb-2 text-primary-foreground">Phone</h3>
                <a 
                  href="tel:+918126852998" 
                  className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline"
                >
                  +91-81268-52998
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center hover:bg-white/20 transition-colors w-full sm:w-auto sm:min-w-[200px] flex-1 sm:flex-none">
              <CardContent className="p-6">
                <Linkedin className="h-8 w-8 mx-auto mb-3 text-accent-glow" />
                <h3 className="font-semibold mb-2 text-primary-foreground">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/udaysingh2626" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline"
                >
                  udaysingh2626
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center hover:bg-white/20 transition-colors w-full sm:w-auto sm:min-w-[200px] flex-1 sm:flex-none">
              <CardContent className="p-6">
                <Github className="h-8 w-8 mx-auto mb-3 text-accent-glow" />
                <h3 className="font-semibold mb-2 text-primary-foreground">GitHub</h3>
                <a 
                  href="https://github.com/singhuday26" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline"
                >
                  singhuday26
                </a>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              className="bg-success text-success-foreground hover:bg-success/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <a href="mailto:uday.singh240818@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="border-white/40 text-primary-foreground hover:bg-white/20 hover:border-white/60 transition-all duration-300"
            >
              <a href="https://linkedin.com/in/udaysingh2626" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm">
            © 2025 Uday Singh. All Rights Reserved. | Built with passion for data science and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;