import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import { X } from "lucide-react";

export function ResumeForm({
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
  handlePersonalInfoChange,
  handleEducationChange,
  addEducation,
  handleExperienceChange,
  addExperience,
  handleProjectChange,
  addProject,
  addProjectPoint,
  handleProjectPointChange,
  handleSkillChange,
  addSkillCategory,
  handleSkillCategoryNameChange,
  handleCertificateChange,
  addCertificate,
  handleAchievementChange,
  addAchievement,
  handleCustomSectionChange,
  addCustomSection,
  setShowExperience,
  setShowProjects,
  setShowSkills,
  setShowCertificates,
  setShowAchievements,
  setShowCustomSections,
  setEducation,
  setExperiences,
  setProjects,
  setSkills,
  setCertificates,
  setAchievements,
  setCustomSections,
  generatePDF,
}) {
  return (
    <Card className="bg-red-800">
      <CardHeader>
        <CardTitle>Resume Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          {/* Personal Information */}
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <Input
            placeholder="Name"
            name="name"
            value={personalInfo.name}
            onChange={handlePersonalInfoChange}
          />
          <Input
            placeholder="Location"
            name="location"
            value={personalInfo.location}
            onChange={handlePersonalInfoChange}
          />
          <Input
            placeholder="Phone"
            name="phone"
            value={personalInfo.phone}
            onChange={handlePersonalInfoChange}
          />
          <Input
            placeholder="Email"
            name="email"
            value={personalInfo.email}
            onChange={handlePersonalInfoChange}
          />
          <Input
            placeholder="LinkedIn"
            name="linkedin"
            value={personalInfo.linkedin}
            onChange={handlePersonalInfoChange}
          />
          <Input
            placeholder="GitHub"
            name="github"
            value={personalInfo.github}
            onChange={handlePersonalInfoChange}
          />
          <Input
            placeholder="Portfolio"
            name="portfolio"
            value={personalInfo.portfolio}
            onChange={handlePersonalInfoChange}
          />

          {/* Education Section */}
          <h2 className="text-xl font-semibold mt-6">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="space-y-2 relative">
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    const newEducation = [...education];
                    newEducation.splice(index, 1);
                    setEducation(newEducation);
                  }}
                  className="absolute top-0 right-0 p-1"
                  aria-label="Delete education entry"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <Input
                placeholder="Course"
                value={edu.course}
                onChange={(e) =>
                  handleEducationChange(index, "course", e.target.value)
                }
              />
              <Input
                placeholder="Start Date (e.g., January, 2024)"
                value={edu.startDate}
                onChange={(e) =>
                  handleEducationChange(index, "startDate", e.target.value)
                }
              />
              <Input
                placeholder="End Date (e.g., December, 2028)"
                value={edu.endDate}
                onChange={(e) =>
                  handleEducationChange(index, "endDate", e.target.value)
                }
              />
              <Input
                placeholder="College Name"
                value={edu.college}
                onChange={(e) =>
                  handleEducationChange(index, "college", e.target.value)
                }
              />
              <Select
                value={edu.gradeType}
                onValueChange={(value) =>
                  handleEducationChange(index, "gradeType", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select grade type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CGPA">CGPA </SelectItem>
                  <SelectItem value="Percentage">Percentage </SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Grade"
                value={edu.grade}
                onChange={(e) =>
                  handleEducationChange(index, "grade", e.target.value)
                }
              />
            </div>
          ))}
          <Button type="button" onClick={addEducation}>
            Add Education
          </Button>

          {/* Experience Section */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="showExperience"
              checked={showExperience}
              onCheckedChange={(checked) => setShowExperience(checked)}
            />
            <label htmlFor="showExperience">Include Experience Section</label>
          </div>

          {showExperience && (
            <>
              <h2 className="text-xl font-semibold mt-6">Experience</h2>
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-2 relative">
                  <button
                    type="button"
                    onClick={() => {
                      const newExperiences = [...experiences];
                      newExperiences.splice(index, 1);
                      setExperiences(newExperiences);
                    }}
                    className="absolute top-0 right-0 p-1"
                    aria-label="Delete experience entry"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <Input
                    placeholder="Company Name"
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, "company", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Completion Date (e.g., January, 2024)"
                    value={exp.completionDate}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        "completionDate",
                        e.target.value
                      )
                    }
                  />
                  <Input
                    placeholder="Job Role"
                    value={exp.jobRole}
                    onChange={(e) =>
                      handleExperienceChange(index, "jobRole", e.target.value)
                    }
                  />
                  <Select
                    value={exp.locationType}
                    onValueChange={(value) =>
                      handleExperienceChange(index, "locationType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select location type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Remote">Remote</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {exp.locationType === "Other" && (
                    <Input
                      placeholder="Location"
                      value={exp.location}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "location",
                          e.target.value
                        )
                      }
                    />
                  )}
                </div>
              ))}
              <Button type="button" onClick={addExperience}>
                Add Experience
              </Button>
            </>
          )}

          {/* Projects Section */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="showProjects"
              checked={showProjects}
              onCheckedChange={(checked) => setShowProjects(checked)}
            />
            <label htmlFor="showProjects">Include Projects Section</label>
          </div>

          {showProjects && (
            <>
              <h2 className="text-xl font-semibold mt-6">Projects</h2>
              {projects.map((project, projectIndex) => (
                <div key={projectIndex} className="space-y-2 relative">
                  <button
                    type="button"
                    onClick={() => {
                      const newProjects = [...projects];
                      newProjects.splice(projectIndex, 1);
                      setProjects(newProjects);
                    }}
                    className="absolute top-0 right-0 p-1"
                    aria-label="Delete project entry"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <Input
                    placeholder="Project Name"
                    value={project.name}
                    onChange={(e) =>
                      handleProjectChange(projectIndex, "name", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Completion Date (e.g., January, 2024)"
                    value={project.completionDate}
                    onChange={(e) =>
                      handleProjectChange(
                        projectIndex,
                        "completionDate",
                        e.target.value
                      )
                    }
                  />
                  <Input
                    placeholder="Technologies Used"
                    value={project.technologies}
                    onChange={(e) =>
                      handleProjectChange(
                        projectIndex,
                        "technologies",
                        e.target.value
                      )
                    }
                  />
                  {project.points.map((point, pointIndex) => (
                    <Input
                      key={pointIndex}
                      placeholder={`Point ${pointIndex + 1}`}
                      value={point}
                      onChange={(e) =>
                        handleProjectPointChange(
                          projectIndex,
                          pointIndex,
                          e.target.value
                        )
                      }
                    />
                  ))}
                  <Button
                    type="button"
                    onClick={() => addProjectPoint(projectIndex)}
                  >
                    Add Point
                  </Button>
                  <Input
                    placeholder="Website URL"
                    value={project.websiteUrl}
                    onChange={(e) =>
                      handleProjectChange(
                        projectIndex,
                        "websiteUrl",
                        e.target.value
                      )
                    }
                  />
                  <Input
                    placeholder="GitHub URL"
                    value={project.githubUrl}
                    onChange={(e) =>
                      handleProjectChange(
                        projectIndex,
                        "githubUrl",
                        e.target.value
                      )
                    }
                  />
                </div>
              ))}
              <Button type="button" onClick={addProject}>
                Add Project
              </Button>
            </>
          )}

          {/* Skills Section */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="showSkills"
              checked={showSkills}
              onCheckedChange={(checked) => setShowSkills(checked)}
            />
            <label htmlFor="showSkills">Include Technical Skills Section</label>
          </div>

          {showSkills && (
            <>
              <h2 className="text-xl font-semibold mt-6">Technical Skills</h2>
              {skills.map((category, index) => (
                <div key={index} className="space-y-2 relative">
                  {index > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        const newSkills = [...skills];
                        newSkills.splice(index, 1);
                        setSkills(newSkills);
                      }}
                      className="absolute top-0 right-0 p-1"
                      aria-label="Delete skill category"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                  <Input
                    placeholder="Skill Category"
                    value={category.name}
                    onChange={(e) =>
                      handleSkillCategoryNameChange(index, e.target.value)
                    }
                  />
                  <Input
                    placeholder="Skills (comma-separated)"
                    value={category.skills}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                  />
                </div>
              ))}
              <Button type="button" onClick={addSkillCategory}>
                Add Skill Category
              </Button>
            </>
          )}

          {/* Certificates Section */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="showCertificates"
              checked={showCertificates}
              onCheckedChange={(checked) => setShowCertificates(checked)}
            />
            <label htmlFor="showCertificates">
              Include Certificates Section
            </label>
          </div>

          {showCertificates && (
            <>
              <h2 className="text-xl font-semibold mt-6">Certificates</h2>
              {certificates.map((cert, index) => (
                <div key={index} className="space-y-2 relative">
                  <button
                    type="button"
                    onClick={() => {
                      const newCertificates = [...certificates];
                      newCertificates.splice(index, 1);
                      setCertificates(newCertificates);
                    }}
                    className="absolute top-0 right-0 p-1"
                    aria-label="Delete certificate entry"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <Input
                    placeholder="Certificate Name"
                    value={cert.name}
                    onChange={(e) =>
                      handleCertificateChange(index, "name", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Certificate URL (optional)"
                    value={cert.url}
                    onChange={(e) =>
                      handleCertificateChange(index, "url", e.target.value)
                    }
                  />
                </div>
              ))}
              <Button type="button" onClick={addCertificate}>
                Add Certificate
              </Button>
            </>
          )}

          {/* Achievements Section */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="showAchievements"
              checked={showAchievements}
              onCheckedChange={(checked) => setShowAchievements(checked)}
            />
            <label htmlFor="showAchievements">
              Include Achievements Section
            </label>
          </div>

          {showAchievements && (
            <>
              <h2 className="text-xl font-semibold mt-6">Achievements</h2>
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-2 relative">
                  <button
                    type="button"
                    onClick={() => {
                      const newAchievements = [...achievements];
                      newAchievements.splice(index, 1);
                      setAchievements(newAchievements);
                    }}
                    className="absolute top-0  right-0 p-1"
                    aria-label="Delete achievement entry"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <Input
                    placeholder="Achievement Title"
                    value={achievement.title}
                    onChange={(e) =>
                      handleAchievementChange(index, "title", e.target.value)
                    }
                  />
                  <Textarea
                    placeholder="Achievement Description"
                    value={achievement.description}
                    onChange={(e) =>
                      handleAchievementChange(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                  />
                </div>
              ))}
              <Button type="button" onClick={addAchievement}>
                Add Achievement
              </Button>
            </>
          )}

          {/* Custom Sections */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="showCustomSections"
              checked={showCustomSections}
              onCheckedChange={(checked) => setShowCustomSections(checked)}
            />
            <label htmlFor="showCustomSections">Include Custom Sections</label>
          </div>

          {showCustomSections && (
            <>
              <h2 className="text-xl font-semibold mt-6">Custom Sections</h2>
              {customSections.map((section, index) => (
                <div key={index} className="space-y-2 relative">
                  <button
                    type="button"
                    onClick={() => {
                      const newCustomSections = [...customSections];
                      newCustomSections.splice(index, 1);
                      setCustomSections(newCustomSections);
                    }}
                    className="absolute top-0 right-0 p-1"
                    aria-label="Delete custom section"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <Input
                    placeholder="Section Heading"
                    value={section.heading}
                    onChange={(e) =>
                      handleCustomSectionChange(
                        index,
                        "heading",
                        e.target.value
                      )
                    }
                  />
                  <Input
                    placeholder="Section Subheading (optional)"
                    value={section.subheading}
                    onChange={(e) =>
                      handleCustomSectionChange(
                        index,
                        "subheading",
                        e.target.value
                      )
                    }
                  />
                  <Textarea
                    placeholder="Section Content"
                    value={section.content}
                    onChange={(e) =>
                      handleCustomSectionChange(
                        index,
                        "content",
                        e.target.value
                      )
                    }
                  />
                  <div className="flex items-center space-x-2">
                    <Switch
                      id={`isLink-${index}`}
                      checked={section.isLink}
                      onCheckedChange={(checked) =>
                        handleCustomSectionChange(index, "isLink", checked)
                      }
                    />
                    <label htmlFor={`isLink-${index}`}>
                      Is this content a hyperlink?
                    </label>
                  </div>
                  {section.isLink && (
                    <Input
                      placeholder="URL"
                      value={section.url}
                      onChange={(e) =>
                        handleCustomSectionChange(index, "url", e.target.value)
                      }
                    />
                  )}
                </div>
              ))}
              <Button type="button" onClick={addCustomSection}>
                Add Custom Section
              </Button>
            </>
          )}

          <Button type="button" onClick={generatePDF} className="w-full">
            Save Resume
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
