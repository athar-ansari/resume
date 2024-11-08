import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
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
  generatePDF,
  removeEducation,
  removeExperience,
  removeProject,
  removeSkillCategory,
  removeCertificate,
  removeAchievement,
  removeCustomSection,
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={personalInfo.name}
              onChange={handlePersonalInfoChange}
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={personalInfo.location}
              onChange={handlePersonalInfoChange}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={personalInfo.phone}
              onChange={handlePersonalInfoChange}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={personalInfo.email}
              onChange={handlePersonalInfoChange}
            />
          </div>
          <div>
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input
              id="linkedin"
              name="linkedin"
              value={personalInfo.linkedin}
              onChange={handlePersonalInfoChange}
            />
          </div>
          <div>
            <Label htmlFor="github">GitHub</Label>
            <Input
              id="github"
              name="github"
              value={personalInfo.github}
              onChange={handlePersonalInfoChange}
            />
          </div>
          <div>
            <Label htmlFor="portfolio">Portfolio</Label>
            <Input
              id="portfolio"
              name="portfolio"
              value={personalInfo.portfolio}
              onChange={handlePersonalInfoChange}
            />
          </div>
        </div>
      </div>



      <div>
        <h2 className="text-lg font-semibold mb-2">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4 p-4 border rounded relative">
            <Button
              variant="ghost"
              size="mg"
              className="absolute -top-2 -right-1  rounded-full  outline-dashed"
              onClick={() => removeEducation(index)}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`course-${index}`}>Course</Label>
                <Input
                  id={`course-${index}`}
                  value={edu.course}
                  onChange={(e) =>
                    handleEducationChange(index, "course", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor={`college-${index}`}>College</Label>
                <Input
                  id={`college-${index}`}
                  value={edu.college}
                  onChange={(e) =>
                    handleEducationChange(index, "college", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                <Input
                  id={`startDate-${index}`}
                  value={edu.startDate}
                  onChange={(e) =>
                    handleEducationChange(index, "startDate", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor={`endDate-${index}`}>End Date</Label>
                <Input
                  id={`endDate-${index}`}
                  value={edu.endDate}
                  onChange={(e) =>
                    handleEducationChange(index, "endDate", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor={`gradeType-${index}`}>Grade Type</Label>
                <Input
                  id={`gradeType-${index}`}
                  value={edu.gradeType}
                  onChange={(e) =>
                    handleEducationChange(index, "gradeType", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor={`grade-${index}`}>Grade</Label>
                <Input
                  id={`grade-${index}`}
                  value={edu.grade}
                  onChange={(e) =>
                    handleEducationChange(index, "grade", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        ))}
        <Button onClick={addEducation}>Add More Education</Button>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="show-experience"
          checked={showExperience}
          onCheckedChange={setShowExperience}
        />
        <Label htmlFor="show-experience">Show Experience</Label>
      </div>

      {showExperience && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-4 p-4 border rounded relative">
              <Button
                variant="ghost"
                size="mg"
                className="absolute -top-2 -right-1  rounded-full  outline-dashed"
                onClick={() => removeExperience(index)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`company-${index}`}>Company</Label>
                  <Input
                    id={`company-${index}`}
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, "company", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor={`jobRole-${index}`}>Job Role</Label>
                  <Input
                    id={`jobRole-${index}`}
                    value={exp.jobRole}
                    onChange={(e) =>
                      handleExperienceChange(index, "jobRole", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor={`completionDate-${index}`}>
                    Completion Date
                  </Label>
                  <Input
                    id={`completionDate-${index}`}
                    value={exp.completionDate}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        "completionDate",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor={`locationType-${index}`}>Location Type</Label>
                  <Input
                    id={`locationType-${index}`}
                    value={exp.locationType}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        "locationType",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor={`location-${index}`}>Location</Label>
                  <Input
                    id={`location-${index}`}
                    value={exp.location}
                    onChange={(e) =>
                      handleExperienceChange(index, "location", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
          <Button onClick={addExperience}>Add Experience</Button>
        </div>
      )}

      <div className="flex items-center space-x-2">
        <Switch
          id="show-projects"
          checked={showProjects}
          onCheckedChange={setShowProjects}
        />
        <Label htmlFor="show-projects">Show Projects</Label>
      </div>

      {showProjects && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4 p-4 border rounded relative">
              <Button
                variant="ghost"
                size="mg"
                className="absolute -top-2 -right-1  rounded-full  outline-dashed"
                onClick={() => removeProject(index)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`projectName-${index}`}>Project Name</Label>
                  <Input
                    id={`projectName-${index}`}
                    value={project.name}
                    onChange={(e) =>
                      handleProjectChange(index, "name", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor={`projectCompletionDate-${index}`}>
                    Completion Date
                  </Label>
                  <Input
                    id={`projectCompletionDate-${index}`}
                    value={project.completionDate}
                    onChange={(e) =>
                      handleProjectChange(
                        index,
                        "completionDate",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor={`projectTechnologies-${index}`}>
                    Technologies
                  </Label>
                  <Input
                    id={`projectTechnologies-${index}`}
                    value={project.technologies}
                    onChange={(e) =>
                      handleProjectChange(index, "technologies", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor={`projectWebsiteUrl-${index}`}>
                    Website URL
                  </Label>
                  <Input
                    id={`projectWebsiteUrl-${index}`}
                    value={project.websiteUrl}
                    onChange={(e) =>
                      handleProjectChange(index, "websiteUrl", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor={`projectGithubUrl-${index}`}>
                    GitHub URL
                  </Label>
                  <Input
                    id={`projectGithubUrl-${index}`}
                    value={project.githubUrl}
                    onChange={(e) =>
                      handleProjectChange(index, "githubUrl", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="mt-2">
                <Label>Project Points</Label>
                {project.points.map((point, pointIndex) => (
                  <Input
                    key={pointIndex}
                    value={point}
                    onChange={(e) =>
                      handleProjectPointChange(
                        index,
                        pointIndex,
                        e.target.value
                      )
                    }
                    className="mt-2"
                  />
                ))}
                <Button onClick={() => addProjectPoint(index)} className="mt-2">
                  Add Point
                </Button>
              </div>
            </div>
          ))}
          <Button onClick={addProject}>Add Project</Button>
        </div>
      )}

      <div className="flex items-center space-x-2">
        <Switch
          id="show-skills"
          checked={showSkills}
          onCheckedChange={setShowSkills}
        />
        <Label htmlFor="show-skills">Show Skills</Label>
      </div>

      {showSkills && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          {skills.map((category, index) => (
            <div key={index} className="mb-4 relative">
              <Button
                variant="ghost"
                size="mg"
                className="absolute -top-2 -right-1  rounded-full  outline-dashed"
                onClick={() => removeSkillCategory(index)}
              >
                <X className="h-4 w-4" />
              </Button>
              <Label htmlFor={`skillCategory-${index}`}>Category</Label>
              <Input
                id={`skillCategory-${index}`}
                value={category.name}
                onChange={(e) =>
                  handleSkillCategoryNameChange(index, e.target.value)
                }
                className="mb-2"
              />
              <Label htmlFor={`skills-${index}`}>Skills</Label>
              <Textarea
                id={`skills-${index}`}
                value={category.skills}
                onChange={(e) => handleSkillChange(index, e.target.value)}
              />
            </div>
          ))}
          <Button onClick={addSkillCategory}>Add Skill Category</Button>
        </div>
      )}

      <div className="flex items-center space-x-2">
        <Switch
          id="show-certificates"
          checked={showCertificates}
          onCheckedChange={setShowCertificates}
        />
        <Label htmlFor="show-certificates">Show Certificates</Label>
      </div>

      {showCertificates && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Certificates</h2>
          {certificates.map((cert, index) => (
            <div key={index} className="mb-4 grid grid-cols-2 gap-4 relative">
              <Button
                variant="ghost"
                size="mg"
                className="absolute -top-2 -right-1  rounded-full  outline-dashed"
                onClick={() => removeCertificate(index)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div>
                <Label htmlFor={`certName-${index}`}>Certificate Name</Label>
                <Input
                  id={`certName-${index}`}
                  value={cert.name}
                  onChange={(e) =>
                    handleCertificateChange(index, "name", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor={`certUrl-${index}`}>URL</Label>
                <Input
                  id={`certUrl-${index}`}
                  value={cert.url}
                  onChange={(e) =>
                    handleCertificateChange(index, "url", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
          <Button onClick={addCertificate}>Add Certificate</Button>
        </div>
      )}

      <div className="flex items-center space-x-2">
        <Switch
          id="show-achievements"
          checked={showAchievements}
          onCheckedChange={setShowAchievements}
        />
        <Label htmlFor="show-achievements">Show Achievements</Label>
      </div>

      {showAchievements && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Achievements</h2>
          {achievements.map((achievement, index) => (
            <div key={index} className="mb-4 relative">
              <Button
                variant="ghost"
                size="mg"
                className="absolute -top-2 -right-1  rounded-full  outline-dashed"
                onClick={() => removeAchievement(index)}
              >
                <X className="h-4 w-4" />
              </Button>
              <Label htmlFor={`achievementTitle-${index}`}>Title</Label>
              <Input
                id={`achievementTitle-${index}`}
                value={achievement.title}
                onChange={(e) =>
                  handleAchievementChange(index, "title", e.target.value)
                }
                className="mb-2"
              />
              <Label htmlFor={`achievementDescription-${index}`}>
                Description
              </Label>
              <Textarea
                id={`achievementDescription-${index}`}
                value={achievement.description}
                onChange={(e) =>
                  handleAchievementChange(index, "description", e.target.value)
                }
              />
            </div>
          ))}
          <Button onClick={addAchievement}>Add Achievement</Button>
        </div>
      )}

      <div className="flex items-center space-x-2">
        <Switch
          id="show-custom-sections"
          checked={showCustomSections}
          onCheckedChange={setShowCustomSections}
        />
        <Label htmlFor="show-custom-sections">Show Custom Sections</Label>
      </div>

      {showCustomSections && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Custom Sections</h2>
          {customSections.map((section, index) => (
            <div key={index} className="mb-4 p-4 border rounded relative">
              <Button
                variant="ghost"
                size="mg"
                className="absolute -top-2 -right-1  rounded-full  outline-dashed"
                onClick={() => removeCustomSection(index)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`sectionHeading-${index}`}>Heading</Label>
                  <Input
                    id={`sectionHeading-${index}`}
                    value={section.heading}
                    onChange={(e) =>
                      handleCustomSectionChange(
                        index,
                        "heading",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor={`sectionSubheading-${index}`}>
                    Subheading
                  </Label>
                  <Input
                    id={`sectionSubheading-${index}`}
                    value={section.subheading}
                    onChange={(e) =>
                      handleCustomSectionChange(
                        index,
                        "subheading",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
              <div className="mt-2">
                <Label htmlFor={`sectionContent-${index}`}>Content</Label>
                <Textarea
                  id={`sectionContent-${index}`}
                  value={section.content}
                  onChange={(e) =>
                    handleCustomSectionChange(index, "content", e.target.value)
                  }
                />
              </div>
              <div className="mt-2 flex items-center">
                <Switch
                  id={`sectionIsLink-${index}`}
                  checked={section.isLink}
                  onCheckedChange={(checked) =>
                    handleCustomSectionChange(index, "isLink", checked)
                  }
                />
                <Label htmlFor={`sectionIsLink-${index}`} className="ml-2">
                  Is Link
                </Label>
              </div>
              {section.isLink && (
                <div className="mt-2">
                  <Label htmlFor={`sectionUrl-${index}`}>URL</Label>
                  <Input
                    id={`sectionUrl-${index}`}
                    value={section.url}
                    onChange={(e) =>
                      handleCustomSectionChange(index, "url", e.target.value)
                    }
                  />
                </div>
              )}
            </div>
          ))}
          <Button onClick={addCustomSection}>Add Custom Section</Button>
        </div>
      )}

      <Button onClick={generatePDF}>Generate PDF</Button>
    </div>
  );
}
