import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {
  
  projects = [
  {
    id: 1,
    name: 'Cartistry – Next-Gen E-commerce Platform',
    company: 'BitCot | USA',
    period: 'April 2024 – Present',
    summary: 'Developed a mobile-first e-commerce platform prioritizing seamless user experience, real-time product filtering, and a frictionless checkout.',
    description: 'Designed and implemented Cartistry using Angular 16, Python (Django), PostgreSQL, AWS, and Docker. Delivered dynamic inventory, one-page checkout, and real-time filtering. Created NovaUI, an Angular component library to standardize UI across projects. Developed RESTful APIs for catalog, users, and orders, integrated Celery for async tasks, and ensured secure sessions with JWT and RBAC. Deployed scalable microservices on AWS ECS with Docker, and led code reviews and mentoring initiatives.',
    technologies: ['Angular', 'Django', 'PostgreSQL', 'AWS', 'Docker', 'Celery', 'JWT'],
    projectLink: '', // Add your demo or repo link if available
    pictures: [],    // Add image URLs if you have them
    tags: [Tag.ANGULAR, Tag.PYTHON, Tag.DJANGO, Tag.POSTGRESQL, Tag.DOCKER, Tag.JWT, Tag.RESTAPI, Tag.CELERY],
    // tags: ['E-commerce', 'Full Stack', 'Cloud', 'Microservices']
  },
  {
    id: 2,
    name: 'SmartOps – Business Process Automation Suite',
    company: 'Tekbees | USA',
    period: 'Nov 2023 – Apr 2024',
    summary: 'Delivered a modular automation suite with dynamic dashboards and role-based access, enabling real-time operational insights.',
    description: 'Built modular dashboards using Angular 15, Python (Flask), MongoDB, Redis, and AWS Lambda. Engineered Flask microservices for workflow automation and audit logging. Utilized RxJS for efficient data handling, integrated WebSocket APIs for live updates, and automated CI/CD with GitHub Actions and Docker. Achieved 90% code coverage through comprehensive testing.',
    technologies: ['Angular', 'Flask', 'MongoDB', 'Redis', 'AWS Lambda', 'RxJS', 'Docker', 'GitHub Actions'],
    projectLink: '',
    pictures: [],
    tags: [Tag.ANGULAR, Tag.FLASK, Tag.PYTHON, Tag.MONGODB, Tag.REDIS, Tag.DOCKER, Tag.RESTAPI],
    // tags: ['Automation', 'Dashboards', 'Microservices']
  },
  {
    id: 3,
    name: 'FlexiBook – Online Booking Platform',
    company: 'Schedulicity | USA',
    period: 'Mar 2023 – Nov 2023',
    summary: 'Created an interactive scheduling platform with drag-and-drop and calendar sync, streamlining booking management and secure payment processing.',
    description: 'Developed scheduling UIs with Angular 14, Java (Spring Boot), MySQL, and AWS S3. Implemented RESTful APIs for booking, payment (Stripe), and user management. Enhanced security with OAuth2/JWT, optimized performance with Redis caching, and managed cloud storage and backups.',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'AWS S3', 'Stripe', 'Redis'],
    projectLink: '',
    pictures: [],
    tags: [Tag.ANGULAR, Tag.JAVA, Tag.SPRINGBOOT, Tag.POSTGRESQL, Tag.JWT, Tag.JUNIT, Tag.RESTAPI, Tag.DOCKER],
    // tags: ['Booking', 'Payments', 'Full Stack']
  },
  // {
  //   id: 4,
  //   name: 'SecureGate – Visitor Management System',
  //   company: 'InovarTech | Hyderabad, India',
  //   period: 'Jun 2020 – Dec 2022',
  //   summary: 'Built a scalable visitor management system with responsive Angular interfaces and secure backend APIs, supporting advanced search and reporting.',
  //   description: 'Designed guest check-in, QR badge, and notification features using Angular 12 and Spring Boot. Implemented REST APIs for visitor tracking and notifications, advanced PostgreSQL search, and Dockerized deployments. Ensured reliability with comprehensive testing and error monitoring.',
  //   technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker', 'JUnit'],
  //   projectLink: '',
  //   pictures: [],
  //   tags: [Tag.ANGULAR, Tag.SPRINGBOOT, Tag.POSTGRESQL, Tag.JUNIT, Tag.DOCKER, Tag.RESTAPI],
  //   // tags: ['Visitor Management', 'Security', 'Full Stack']
  // },
  {
    id: 4,
    name: 'BookHive – Digital Bookstore Platform',
    company: 'WebTek Labs | Contract, India',
    period: 'Apr 2019 – Jun 2020',
    summary: 'Developed a digital bookstore platform with reusable Angular components and secure Flask APIs, supporting high concurrency and accessibility compliance.',
    description: 'Created inventory and order management modules with Angular 10 and Flask. Implemented JWT authentication, role-based permissions, and scalable AWS EC2 infrastructure with auto-scaling. Conducted load testing for 500+ users and ensured accessibility standards.',
    technologies: ['Angular', 'Flask', 'AWS EC2', 'JWT', 'MySQL'],
    projectLink: '',
    pictures: [],
    tags: [Tag.ANGULAR, Tag.FLASK, Tag.PYTHON, Tag.JWT, Tag.POSTGRESQL, Tag.RESTAPI],
    // tags: ['Bookstore', 'E-commerce', 'Full Stack']
  },
  {
    id: 6,
    name: 'Portfolio Website',
    company: '',
    period: '',
    summary: 'Building a modern portfolio website with a focus on animations and a clean design.',
    description: 'Designed and developed a personal portfolio website using Angular, showcasing professional projects, skills, and experience with visually engaging animations and responsive layouts.',
    technologies: ['Angular', 'TypeScript', 'CSS', 'Animations'],
    projectLink: '', // Add your portfolio link if available
    pictures: [],
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
    // tags: ['Portfolio', 'Frontend', 'Animations']
  }
];


  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
