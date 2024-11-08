import React from "react";
import { Globe, Github, Phone, Mail, Linkedin } from "lucide-react";

export function ResumePreview({
  personalInfo,
  education,
  experiences,
  projects,
  skills,
  certificates,
  achievements,
  customSections,
  showExperience,
  showProjects,
  showSkills,
  showCertificates,
  showAchievements,
  showCustomSections,
}) {
  const hasContent = (obj) => {
    if (typeof obj === "string") return obj.trim() !== "";
    if (Array.isArray(obj)) return obj.some((item) => hasContent(item));
    if (typeof obj === "object")
      return Object.values(obj).some((value) => hasContent(value));
    return false;
  };

  const formatDate = (dateString) => {
    return dateString.trim();
  };

  return (
    <div className="font-sans text-sm leading-tight">
      {hasContent(personalInfo) && (
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold mb-1">{personalInfo.name}</h1>
          {personalInfo.location && (
            <p className="text-sm mb-1">{personalInfo.location}</p>
          )}
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {personalInfo.phone && (
              <span className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                {personalInfo.phone}
              </span>
            )}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center hover:underline text-black"
              >
                <Mail className="w-3 h-3 mr-1" />
                {personalInfo.email}
              </a>
            )}
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline text-black"
              >
                <Linkedin className="w-3 h-3 mr-1" />
                LinkedIn
              </a>
            )}
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline text-black"
              >
                <Github className="w-3 h-3 mr-1" />
                GitHub
              </a>
            )}
            {personalInfo.portfolio && (
              <a
                href={personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline text-black"
              >
                <Globe className="w-3 h-3 mr-1" />
                {personalInfo.portfolio.includes("http")
                  ? "Portfolio"
                  : personalInfo.portfolio}
              </a>
            )}
          </div>
        </div>
      )}

      {education.some(hasContent) && (
        <>
          <h2 className="text-lg font-bold mt-4 mb-2 border-b border-gray-300">
            Education
          </h2>
          {education.map(
            (edu, index) =>
              hasContent(edu) && (
                <div key={index} className="mb-2">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold">{edu.college}</span>
                    <span className="text-xs font-bold text-gray-600">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline mt-1">
                    <span className="text-sm">{edu.course}</span>
                    <span className="text-xs">
                      {edu.gradeType}: {edu.grade}
                      {edu.gradeType === "Percentage" ? "%" : ""}
                    </span>
                  </div>
                </div>
              )
          )}
        </>
      )}

      {showExperience && experiences.some(hasContent) && (
        <>
          <h2 className="text-lg font-bold mt-4 mb-2 border-b border-gray-300">
            Experience
          </h2>
          {experiences.map(
            (exp, index) =>
              hasContent(exp) && (
                <div key={index} className="mb-2">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold">{exp.company}</span>
                    <span className="text-xs font-bold text-gray-600">
                      {formatDate(exp.completionDate)}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline mt-1">
                    <span className="text-sm">{exp.jobRole}</span>
                    <span className="text-xs text-gray-600">
                      {exp.locationType === "Remote" ? "Remote" : exp.location}
                    </span>
                  </div>
                </div>
              )
          )}
        </>
      )}

      {showProjects && projects.some(hasContent) && (
        <>
          <h2 className="text-lg font-bold mt-4 mb-2 border-b border-gray-300">
            Projects
          </h2>
          {projects.map(
            (project, index) =>
              hasContent(project) && (
                <div key={index} className="mb-2">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold">{project.name}</span>
                    <span className="text-xs font-bold text-gray-600">
                      {formatDate(project.completionDate)}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline mt-1">
                    <span className="text-xs">
                      Technologies: {project.technologies}
                    </span>
                    <div className="flex space-x-2">
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-black hover:underline"
                        >
                          Website
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-black hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                  {project.points.some(hasContent) && (
                    <ul className="list-disc list-inside text-xs mt-1">
                      {project.points.map(
                        (point, pointIndex) =>
                          point.trim() !== "" && (
                            <li key={pointIndex}>{point}</li>
                          )
                      )}
                    </ul>
                  )}
                </div>
              )
          )}
        </>
      )}

      {showSkills && skills.some(hasContent) && (
        <>
          <h2 className="text-lg font-bold mt-4 mb-2 border-b border-gray-300">
            Technical Skills
          </h2>
          {skills.map(
            (category, index) =>
              hasContent(category) && (
                <div key={index} className="mb-2">
                  {category.name && category.skills && (
                    <p className="text-sm">
                      <span className="font-semibold">{category.name}:</span>{" "}
                      {category.skills}
                    </p>
                  )}
                </div>
              )
          )}
        </>
      )}

      {showCertificates && certificates.some(hasContent) && (
        <>
          <h2 className="text-lg font-bold mt-4 mb-2 border-b border-gray-300">
            Certificates
          </h2>
          <ul className="list-disc list-inside text-xs">
            {certificates.map(
              (cert, index) =>
                cert.name && (
                  <li key={index}>
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:underline"
                      >
                        {cert.name}
                      </a>
                    ) : (
                      cert.name
                    )}
                  </li>
                )
            )}
          </ul>
        </>
      )}

      {showAchievements && achievements.some(hasContent) && (
        <>
          <h2 className="text-lg font-bold mt-4 mb-2 border-b border-gray-300">
            Achievements
          </h2>
          {achievements.map(
            (achievement, index) =>
              hasContent(achievement) && (
                <div key={index} className="mb-2">
                  {achievement.title && (
                    <p className="text-sm font-semibold">{achievement.title}</p>
                  )}
                  {achievement.description && (
                    <p className="text-xs">{achievement.description}</p>
                  )}
                </div>
              )
          )}
        </>
      )}

      {showCustomSections && customSections.some(hasContent) && (
        <>
          {customSections.map(
            (section, index) =>
              hasContent(section) && (
                <div key={index} className="mt-4">
                  <h2 className="text-lg font-bold mb-2 border-b border-gray-300">
                    {section.heading}
                  </h2>
                  {section.subheading && (
                    <h3 className="text-sm font-semibold mb-1">
                      {section.subheading}
                    </h3>
                  )}
                  {section.isLink ? (
                    <a
                      href={section.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-black hover:underline"
                    >
                      {section.content}
                    </a>
                  ) : (
                    <p className="text-xs">{section.content}</p>
                  )}
                </div>
              )
          )}
        </>
      )}
    </div>
  );
}
