'use client';

import { useState } from 'react';
import { NavBar } from '@/components/nav-bar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Law GenAI',
    description: 'Law GenAI is an advanced AI-powered legal assistant that processes court-related PDFs and provides detailed guidance, case references, and legal precedents using APIs like Kanoon and Groq. This end-to-end framework enhances legal research efficiency, accuracy, and accessibility for users.',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhdyUyMGJvdHxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['LangChain', 'LlamaIndex', 'FlaskAPI', 'Kanoon API','ChromaDB'],
    type: ['Gen AI'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Tiny tracks',
    description: 'Developed an end-to-end Android app to track and manage dental health for young children. The app monitors their food intake and provides AI-driven assistance for maintaining oral hygiene. Built using Unity for interactive features and Firebase for real-time data storage and management.',
    image: 'https://i.pinimg.com/474x/09/9f/86/099f8645806d31cf17b8c64dad70f31b.jpg',
    tags: ['Unity', 'Open AI', 'FlaskAPI', 'Firebase','Android Studio','Google ML kit'],
    type: ['Gen AI','Mobile','Data Analysis'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Credit Card Clients in Taiwan in 2005 - Analytical Visualization',
    description: 'The credit card clients dataset is full of irregularities and incorrect values. I replaced them with the right values and created box plots, count plots, and histograms to find trends in the dataset.',
    image: 'https://images.unsplash.com/photo-1532033375034-a29004ea9769?w=500&auto=format&fit=crop&q=60',
    tags: ['Pandas', 'Matplotlib', 'Seaborn', 'NumPy', 'Scikit-learn'],
    type: ['Data Analysis'],
    liveUrl: 'https://colab.research.google.com/drive/1WvZ-rHuvOM1ohRvGllfru2LWsC3Prjjw',
    githubUrl: 'https://github.com/your-repo-link',
  },
  {
    title: 'Spam detector for SyniVerse',
    description: ' Developed a spam detection system for SyniVerse using autoencoders and artificial neural networks (ANN). The model identifies and filters out spam content by analyzing patterns and anomalies in user messages, ensuring a secure and clean communication environment.',
    image: 'https://plus.unsplash.com/premium_photo-1682310098267-b89c6601aab8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhbXxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['Autoencoder(UTF-8LE)','ANN','TensorFlow','Keras','Pandas'],
    type: ['Machine Learning','Gen AI'],
    liveUrl: 'https://colab.research.google.com/drive/1WvZ-rHuvOM1ohRvGllfru2LWsC3Prjjw',
    githubUrl: 'https://github.com/your-repo-link',
  },
  {
    title: 'The Horizon Bank - Decentralized',
    description: 'Developed an end-to-end interactive bank application for Horizon Bank, handling customer churn prediction and storing customer data on blockchain.',
    image: 'https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?w=500&auto=format&fit=crop&q=60',
    tags: ['React', 'Node.js', 'Solidity', 'Web3.js', 'MongoDB', 'Scikit-learn'],
    type: ['Data Analysis', 'Blockchain'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'NexGov - Decentralized governing',
    description: 'We built a secure, end-to-end government portal using blockchain, enabling users to upload data that is seamlessly shared across all government bodies. This ensures transparency, data integrity, and efficient inter-department collaboration.',
    image: 'https://i.pinimg.com/236x/ef/17/13/ef17133f39a895ef9d04fbf96ad8320b.jpg',
    tags: ['React', 'Node.js', 'Solidity', 'Web3.js', 'MetaMask', 'IPFS', 'Truffle.js'],
    type: ['Blockchain'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'SwiftPass Guardian',
    description: 'Developed an ODD framework for HMVs, enabling safe and efficient overtaking using sensor fusion, computer vision, and AI-driven decision-making. It enhances safety through real-time risk assessment, V2X communication, and advanced path planning.',
    image: 'https://images.unsplash.com/photo-1726790942067-38d86192c5ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJ1c2VzJTIwb3ZlcnRha2luZ3xlbnwwfHwwfHx8MA%3D%3D',
    tags: ['SimLink','Unity','C# sharp'],
    type: ['Data Analysis','Machine Learning'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'TeraHeal-wellness ecosystem',
    description: 'TeraHeal is an innovative wellness platform that combines genetic testing and lifestyle coaching to combat hereditary health issues like hair loss and thyroid problems. Using deep learning and epigenetics, we provide personalized solutions to help individuals optimize their well-being and proactively manage their health.',
    image: 'https://plus.unsplash.com/premium_photo-1676143361236-5f1cfd04784f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdlbmV0aWNhbCUyMGRpc29yZGVyfGVufDB8fDB8fHww',
    tags: ['TensorFlow','23andMe','Epigenetic analysis','Pandas','AWS'],
    type: ['Gen AI'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Scramble for Autistic: ML-Powered Adaptive Vocabulary',
    description: 'Build a personalized vocabulary system for individuals with autism, leveraging machine learning to tailor word learning to unique cognitive patterns. Using NLP, reinforcement learning, and clustering techniques, the system adjusts word difficulty and presents definitions based on individual progress',
    image: 'https://images.unsplash.com/photo-1600120203738-3e66b02bf318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3Jvc3N3b3JkfGVufDB8fDB8fHww',
    tags: ['TensorFlow', 'NLTK', 'Scikit-Learn', 'keras', 'Pandas'],
    type: ['Machine Learning'],
    liveUrl: 'https://colab.research.google.com/drive/1nJFWwwuwgByRJOR9fhrpodiM_Js7zr_M#scrollTo=2i36Yv3-MPY5',
    githubUrl: 'https://github.com/your-repo-link',
  },
   {
    title: 'Video Game Market Entry Strategy',
    description: "As a data analyst, I’m analyzing the video game industry to identify top-selling game genres, popular platforms (e.g., PS4, Xbox, PC), and trends in buyer behavior. This will guide our company's decision on whether to develop games internally or fund independent developers, ensuring long-term profitability.",
    image: 'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBnYW1lfGVufDB8fDB8fHww',
    tags: ['Pandas', 'Matplotlib', 'SQL', 'PowerBI'],
    type: ['Data Analysis'],
    liveUrl: 'https://colab.research.google.com/drive/1nJFWwwuwgByRJOR9fhrpodiM_Js7zr_M#scrollTo=2i36Yv3-MPY5',
    githubUrl: 'https://github.com/your-repo-link',
  },
  {
    title: 'BMI Instances',
    description: "Implement multiple linear regression to create a predictive model capable of predicting the Body Mass Index using the Height, Weight and Gender of a person. The dataset contains data about 500 instances. Find out if there is multicollinearity in the dataset using Variance Inflation Factor.",
    image: 'https://i.pinimg.com/236x/c2/1f/b3/c21fb3af88be43c89e80924efa5d651d.jpg',
    tags: ['Pandas', 'statsmodels.api', 'SQL', 'VIF'],
    type: ['Data Analysis'],
    liveUrl: 'https://colab.research.google.com/drive/1Qb18vjegUSjqIbzbvUpomYN4QP2ja0VT#scrollTo=lN1iCMJ4Oy1N',
    githubUrl: 'https://colab.research.google.com/drive/1Qb18vjegUSjqIbzbvUpomYN4QP2ja0VT#scrollTo=lN1iCMJ4Oy1N',
  },
  {
    title: 'Tuning DataSet',
    description: "A huge dataset is analyzed using Support vector machines and Hyperplane",
    image: 'https://i.pinimg.com/236x/52/73/02/5273020c09e52c3fed520a90dd5eb03a.jpg',
    tags: ['Pandas', 'SVM', 'SQL', 'VIF'],
    type: ['Machine Learning','Data Analysis'],
    liveUrl: 'https://colab.research.google.com/drive/1rIFEnxDZCc0XMLHosH_TGh-TRNcpw-g2#scrollTo=bEyBzxYRhrLG',
    githubUrl: 'https://colab.research.google.com/drive/1rIFEnxDZCc0XMLHosH_TGh-TRNcpw-g2#scrollTo=bEyBzxYRhrLG',
  },
   {
    title: 'Admission Prediction',
    description: "Build a regression model to predict MS admission chances based on test scores and other factors. Use RFE and VIF to handle multicollinearity and identify key features, while evaluating model accuracy to guide students on the required scores and qualifications",
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWRtaXNzaW9ufGVufDB8fDB8fHww',
    tags: ['Multi-colinearity','Pandas', 'SVM', 'RFE', 'VIF'],
    type: ['Machine Learning','Data Analysis'],
    liveUrl: 'https://colab.research.google.com/drive/1xhq2lHjITnPsBiDmXRtcKQ5olecgJl5J#scrollTo=6cwOPR4kGBCl',
    githubUrl: 'https://colab.research.google.com/drive/1xhq2lHjITnPsBiDmXRtcKQ5olecgJl5J#scrollTo=6cwOPR4kGBCl',
  },
   {
    title: 'Insurance policy maker',
    description: "Developed a predictive model to assess and recommend personalized insurance policies based on user data, such as age, health, and financial status, to optimize coverage and pricing for clients.",
    image: 'https://i.pinimg.com/236x/5b/c2/88/5bc288496cc9b946b982daf21d8453cb.jpg',
    tags: ['Linear Regression','Univariate classification','sklearn_models','Pandas', 'SVM', 'RFE', 'VIF'],
    type: ['Machine Learning','Data Analysis'],
    liveUrl: 'https://colab.research.google.com/drive/1GpFOLJnIiPMJbUlmKlbrByw_OSbe61WN?usp=sharing',
    githubUrl: 'https://colab.research.google.com/drive/1GpFOLJnIiPMJbUlmKlbrByw_OSbe61WN?usp=sharing',
  },
  {
    title: 'Gender voice classification',
    description: "In this project, I have a dataset which contains some statistical information about the audio frequencies of different male and female voices. Based on the information provided, you have to find out which voice belongs to which gender using the RandomForestClassifier algorithm",
    image: 'https://plus.unsplash.com/premium_photo-1679814561282-2f735b0ce81f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dm9pY2UlMjBub3RlfGVufDB8fDB8fHww',
    tags: ['Random Forest classifier','Pandas', 'SVM', 'RFE', 'SMOTE'],
    type: ['Machine Learning','Data Analysis'],
    liveUrl: 'https://colab.research.google.com/drive/1T-qSuP4cJ6MI8B6bN3QST9ysSqnKqREe#scrollTo=1e2xVjjhcPJM',
    githubUrl: 'https://colab.research.google.com/drive/1T-qSuP4cJ6MI8B6bN3QST9ysSqnKqREe#scrollTo=1e2xVjjhcPJM',
  },
  {
  title: 'Hunting exo planets in space',
    description: "In this project, I used a dataset containing statistical information about audio frequencies from male and female voices. The task is to predict the gender of a voice based on these audio features using the Fast Fourier Transformation",
    image: 'https://i.pinimg.com/736x/78/1a/0d/781a0de277054c03876cacb669294129.jpg',
    tags: ['FFT','Pandas', 'SVM', 'RFE', 'SMOTE'],
    type: ['Machine Learning','Data Analysis'],
    liveUrl: 'https://colab.research.google.com/drive/14yGdUTGApVvrX_J4pYsjm-RbL8QhQttW',
    githubUrl: 'https://colab.research.google.com/drive/14yGdUTGApVvrX_J4pYsjm-RbL8QhQttW',
  },
  {
    title: 'Logistic Regression',
    description: 'The  dataset is full of irregularities and incorrect values. I replaced them with the right values and created box plots, count plots, and histograms to find trends in the dataset.',
    image: 'https://i.pinimg.com/236x/bd/c6/32/bdc632bba2185f8df76ec017fe870a50.jpg',
    tags: ['Pandas', 'Univariate classification','Multiclass classification','Decision Boundary'],
    type: ['Data Analysis','Machine Learning'],
    liveUrl: 'https://colab.research.google.com/drive/1WvZ-rHuvOM1ohRvGllfru2LWsC3Prjjw',
    githubUrl: 'https://github.com/your-repo-link',
  },
  {
    title: 'Polynomial Regression',
    description: 'The  dataset is full of irregularities and incorrect values. I replaced them with the right values and created box plots, count plots, and histograms to find trends in the dataset.',
    image: 'https://i.pinimg.com/236x/8b/37/1f/8b371f70fea4c47a0f9c743d6be0a283.jpg',
    tags: ['Underfitting', 'Overfitting', 'bias-varaiance'],
    type: ['Data Analysis','Machine Learning'],
    liveUrl: 'https://colab.research.google.com/drive/1WvZ-rHuvOM1ohRvGllfru2LWsC3Prjjw',
    githubUrl: 'https://github.com/your-repo-link',
  },
  {
    title: 'Pulse star predection',
    description: 'Pulsars are rapidly spinning neutron stars that emit periodic radio signals. Identifying them involves detecting these signals amidst heavy noise and Radio Frequency Interference (RFI).',
    image: 'https://student-datasets-bucket.s3.ap-south-1.amazonaws.com/images/lightcurve_pulsar.gif',
    tags: ['XGBoost Classifier', 'Matplotlib', 'Seaborn', 'NumPy', 'Scikit-learn'],
    type: ['Data Analysis','Machine Learning'],
    liveUrl: 'https://colab.research.google.com/drive/1uXNsISH141UzSMkxo1Gk-cxSQ6iOrA1p',
    githubUrl: 'https://github.com/your-repo-link',
  },
  {
    title: 'K-means clustering',
    description: 'The  dataset is full of irregularities and incorrect values. I replaced them with the right values and created box plots, count plots, and histograms to find trends in the dataset.',
    image: 'https://i.pinimg.com/236x/1a/0e/cf/1a0ecfb076e2d330edaabd9a34da5124.jpg',
    tags: ['k-means clustering','Elbow Score','Silhoutte Score'],
    type: ['Data Analysis','Machine Learning'],
    liveUrl: 'https://colab.research.google.com/drive/1Uw5j0G2jb6DnFzQpk8Cs2ZVaVSqWWR8m',
    githubUrl: 'https://github.com/your-repo-link',
  },
];


const categories = ['All', 'Data Analysis', 'Mobile', 'Machine Learning', 'Blockchain', 'Gen AI', 'Agentic AI'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.type.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground mt-2">A collection of my recent work and side projects.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
