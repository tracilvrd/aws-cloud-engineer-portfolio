import Section from "./Section";

function ServerlessArchitecture() {
  const projects = [
    {
      id: 1,
      title: "Static Cloud Portfolio Website (AWS S3 Hosting)",
      summary: "Deployed a static portfolio website on AWS S3 using secure public access configuration.",
      techStack: ["AWS S3", "HTML5 / CSS3", "React+Vite", "AWS IAM"],
      outcome: "Delivered a live cloud-hosted portfolio site accessible via a public endpoint.",
      demoLink: "https://github.com/tracilvrd/aws-cloud-engineer-portfolio",
    },
    {
      id: 2,
      title: "Serverless Task Management API (Lambda + API Gateway + DynamoDB)",
      summary: "Built a serverless REST API to create, retrieve, and delete tasks using AWS services.",
      techStack: ["AWS Lambda (Python)", "Amazon API Gateway", "Amazon DynamoDB", "AWS CloudWatch"],
      outcome: "Delivered a scalable backend system with zero server management and minimal cost.",
      demoLink: "https://github.com/tracilvrd/serverless-task-api",
    },
    {
      id: 3,
      title: "Automated CI/CD Pipeline for Serverless Deployment (GitHub Actions + AWS)",
      summary: "Implemented a GitHub Actions pipeline to build, test, and deploy a serverless application to AWS automatically.",
      techStack: ["GitHub Actions", "AWS Lambda", "AWS IAM", "AWS CLI"],
      outcome: "Enabled consistent, automated deployments with no manual intervention.",
      demoLink: "https://github.com/tracilvrd/aws-cloud-engineer-portfolio",
    },
    {
      id: 4,
      title: "Cloud Monitoring & Alerting System (CloudWatch + SNS)",
      summary: "Configured monitoring and alerting for a serverless application using AWS CloudWatch and SNS.",
      techStack: ["AWS CloudWatch", "Amazon SNS", "AWS Lambda"],
      outcome: "Established real-time error tracking with automated notifications for system issues.",
      demoLink: "https://github.com",
    },
    {
      id: 5,
      title: "Event-Driven Data Pipeline (S3 + Lambda + Athena)",
      summary: "Developed an event-driven pipeline to process and query data using AWS serverless services.",
      techStack: ["AWS S3", "AWS Lambda", "Amazon Athena", "AWS Glue Data Catalog"],
      outcome: "Enabled automated data processing and SQL-based analysis without dedicated infrastructure.",
      demoLink: "https://github.com",
    },
  ];

  return (
    <Section id="projects" title="">
      <p className="eyebrow mb-6">SERVERLESS CLOUD ARCHITECTURE SUITE</p>
      <p className="about-text">
        This portfolio represents a unified serverless cloud system designed to demonstrate end-to-end capabilities in modern cloud engineering, including frontend deployment, backend API design, automated delivery pipelines, system observability, and data processing.

Each component is independently functional but architected to work together as part of a cohesive, production-style environment built entirely on AWS using cost-efficient, serverless services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((project) => (
          <div key={project.id} className="panel p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-purple-light mb-4">
              {project.title}
            </h3>
            <p className="text-purple-pale mb-4 leading-relaxed">
              {project.summary}
            </p>
            <div className="tags mb-6">
              {project.techStack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-purple-light mb-6">
              <strong>Outcome:</strong> {project.outcome}
            </p>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-magenta font-semibold hover:text-purple-bright"
              >
                Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default ServerlessArchitecture;
