import Section from '../components/Section'
import apservaLogo from '../assets/apserva_logo.png'
import foodLoopLogo from '../assets/foodloop_logo.png'

interface Project {
  name: string
  logo?: string
  problem: string
  solution: string
  outcome: string
}

const projects: Project[] = [
  {
    name: "Apserva",
    logo: apservaLogo,
    problem: "Software teams needed to understand real user behavior in legacy applications to guide modernization decisions, but lacked visibility into how their systems were actually being used.",
    solution: "We architected and built a SaaS analytics platform from the ground up. The platform includes analytics pipelines that surface actionable insights, a scalable multi-tenant architecture supporting early pilots and long-term growth, and is deployed for rapid iteration. We handled the full development lifecycle from architecture to deployment.",
    outcome: "The platform helps software teams make data-driven decisions about product modernization. The multi-tenant architecture supports both early pilots and scales for long-term growth, enabling teams to understand real user behavior and prioritize modernization efforts effectively."
  },
  {
    name: "Food Loop",
    logo: foodLoopLogo,
    problem: "A startup was running on shared hosting that couldn't scale and lacked reliability. They needed to migrate to cloud infrastructure but didn't have the expertise to lead the transition or manage an engineering team through the migration.",
    solution: "We led a complete cloud migration from shared hosting to AWS. We designed and implemented secure cloud architecture, worked directly with founders to understand requirements, and led an offshore engineering team through the entire transition process.",
    outcome: "The migration significantly improved scalability and reliability. The application now runs on a secure, scalable cloud infrastructure that can grow with the business. The founders have a production-ready system without needing to hire a full DevOps team."
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
            Examples of how we've helped founders and small teams at different stages — 
            building new products, deploying to production, or maintaining existing systems.
          </p>
        </div>
      </Section>

      {/* Projects */}
      <Section className="bg-gray-50">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
              <div className="mb-8">
                <div className="flex justify-start mb-6">
                  {project.logo && (
                    <img 
                      src={project.logo} 
                      alt={`${project.name} logo`}
                      className="h-12 md:h-16 w-auto object-contain"
                    />
                  )}
                </div>
                
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
            These case studies represent typical engagements. We help at any stage — building, 
            deploying, or maintaining. Each project is tailored to the specific needs and constraints 
            of the client. We work as embedded partners, owning production environments and taking 
            responsibility for reliability.
          </p>
          <p className="text-gray-600">
            Contact us to discuss how we can help, whether you need assistance at one stage or across the full journey.
          </p>
        </div>
      </Section>
    </>
  )
}

export default OurWorkPage

