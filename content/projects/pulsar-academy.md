---
title: "Pulsar Academy"
date: 2022-07-15T13:41:48-04:00
draft: false

description: My friend Maxwell and I started a business to teach the fundamentals of programming to beginners. We built an online platform using Django that served content to dozens of students. 

author: "Eric Chen"
tags:
  - coding
  - teaching
  - business
image: /images/projects/pulsar1.png
toc: false

badges: 
  - "Django"
  - "Docker"
  - "AWS"

banner:
  include: true
  type: "danger"
  text: "The pulsar academy website has been temporarily shut down due to cost." 

links:
  - icon: "fab fa-github"
    url: "https://github.com/cloudui/pulsaracademy"
  - icon: "fa fa-file-edit"
    url: "https://github.com/pulsaracademy"
  - icon: "fa fa-external-link-square"
    url: "https://pulsaracademy.com"
---


This was the first large-scale coding project I ever did. It was the big finale of all the small projects I had started a few months before. Although I had taken Java classes in school before, I was blissfully unaware of what actually went on in the tech world. From an itching to do something big during COVID, my friend Maxwell and I decided to start a small online business to teach coding to beginners. He would teach C++ and competitive programming, and I would teach Python, Java, and Web Development.

How were we going to manage our registration and content? We could have easily went with a simple Google Forms - Google Sheets signup process, hosting all the content in a Google Drive for our students to use. Would've been fast and effective enough. But, it wasn't personable. It didn't radiate enthusiasm, class, or quality. Why would someone sign up for classes with little effort, mostly when the instructors were only in high school? Fortunately, through reading random books and following guides on YouTube, I learned how to make websites with Django. I was also studying this "revolutionary cloud platform" that my dad told me about, and I finally started to be able to use the black voodoo terminal in my start menu. What a great opportunity to put my skills into use!

I spent around a month making the website ready for use. I did my development using Django and PostgreSQL, containerized with docker and orchestrated with `docker-compose`. A gruelling but fulfilling project. I stayed up late every night, just trying to squeeze in a couple more hours of work. It was fun, having a website materialize in front of me. It was my own design. Some things I learned how do: 

- Registration and signup
- Payment integration with API requests
- Authentication to access certain pages

A month in, we had a functioning website with all of the bells and whistles. All of our content could be hosted and protected on our site. We were able to host the site reliably on AWS with a RDS backend. Our payment integration was successful. However, this was only one part of the story. Honestly, it might have been the easiest part. How were we going to get people to register? Nobody knew who we were. My high school friends were not in our target demographic. At last, the question of advertising and recruiting surfaced. 

What did we do? It wasn't glamorous, but it was something. We made fliers, printed them out, and distributed them around our respective neighborhoods. We did referral discounts. We reached out through our parents' contacts via WeChat, as we knew they had a large reach. We posted online. I had the idea of spending money on Facebook ads. Fifteen dollars gone with no progress. Ultimately, we were able to get a handful of students for each of our classes. Everything went smoothly then. We had a similar recruitment process a few times after, with similar levels of success.

Honestly, teaching was the most fun part. I spent hours upon hours writing notes for each class. It was nice to get a refresher on all things Java and Python, and the kids seemed to enjoy the lectures a lot. It was pretty difficult to get students to be motivated to do homework, and I would definitely take a different approach in the future, if I were ever to do this kind of thing again. I'm honestly pretty proud of how the Java notes turned out. I've linked it on the right. 

As I mentioned before, this project was a big first for me in many regards:
- First big and collaborative coding project
- First time I had to advertise something to an audience
- First time deploying an app to AWS
- First time running a business
- First time teaching coding to students

These skills would prove useful once I started working for Trailblazer Debate, where advertising was a very big deal. 

Since the beginning college, Pulsar Academy has been dormant, as Maxwell and I do not really have the time or resolve to continue teaching. The website has been temporarily shut down due to cost precautions, but we will find a permanent home for it some day. If anyone would like to pick up where we left off, please reach out to us; we'd be happy to negotiate a deal regarding the future of our company.

## The LinkedIn Version

- Initiated an online business to educate the youth about coding principles and fundamentals
- Programmed and designed a website with Django and JavaScript to manage registration, payment, and course content
- Containerized website with PostgreSQL database and SSL daemon using Docker compose
- Hosted website using AWS EC2 and RDS using a NGINX webserver
- Taught two successful sessions with 10 students each



 