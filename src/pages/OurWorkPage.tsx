import Section from '../components/Section'

interface Project {
  problem: string
  solution: string
  outcome: string
}

const projects: Project[] = [
  {
    problem: "A founder had an idea for a SaaS product but no technical team. They needed someone to build, deploy, and maintain the application from start to finish.",
    solution: "We built a full-stack application and set up production infrastructure. We configured CI/CD pipelines and handled the initial deployment. We continue to maintain and monitor the system.",
    outcome: "The product launched to real users within months. The application runs reliably in production, and we handle ongoing maintenance and updates."
  },
  {
    problem: "A startup had a working prototype but needed it deployed to production with proper infrastructure. They didn't have DevOps expertise and needed ongoing support.",
    solution: "We set up cloud infrastructure, configured automated deployments, and implemented monitoring. We also refactored critical parts for production reliability and continue to maintain the system.",
    outcome: "The application runs reliably in production with automated deployments. The team focuses on building features while we handle infrastructure and maintenance."
  },
  {
    problem: "A small team was building a new application but needed help with both development and infrastructure. They wanted one partner to handle everything.",
    solution: "We built new features, set up production infrastructure, and configured deployment pipelines. We also handle ongoing maintenance, monitoring, and updates as the product grows.",
    outcome: "The team has a reliable production system with automated deployments. We continue to maintain everything, allowing them to focus on product development."
  }
]

const OurWorkPage = () => {
  return (
    <>
      {/* Header */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Work</h1>
          <p className="text-xl text-gray-600">
            Examples of how we've helped founders and small teams turn ideas into production-ready software — 
            from first idea to real users.
          </p>
        </div>
      </Section>

      {/* Projects */}
      <Section className="bg-gray-50">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project {index + 1}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem</h3>
                    <p className="text-gray-700">{project.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                    <p className="text-gray-700">{project.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Outcome</h3>
                    <p className="text-gray-700">{project.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Note */}
      <Section className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-600 mb-4">
            These case studies represent typical engagements. Each project is tailored to the specific 
            needs and constraints of the client. We work as embedded partners, owning production environments 
            and taking responsibility for reliability.
          </p>
          <p className="text-gray-600">
            Contact us to discuss how we can help turn your idea into production-ready software.
          </p>
        </div>
      </Section>
    </>
  )
}

export default OurWorkPage

