import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { ChevronUp, X } from "lucide-react";
import html2pdf from "html2pdf.js";
import { ResumeForm } from "./ResumeForm";
import { ResumePreview } from "./ResumePreview";

export default function ResumeMaker() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    portfolio: "",
  });

  const [education, setEducation] = useState([
    {
      course: "",
      startDate: "",
      endDate: "",
      college: "",
      gradeType: "CGPA",
      grade: "",
    },
  ]);

  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([
    { name: "Programming", skills: "" },
    { name: "Frameworks", skills: "" },
  ]);
  const [certificates, setCertificates] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [customSections, setCustomSections] = useState([]);

  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showCustomSections, setShowCustomSections] = useState(false);

  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const previewRef = useRef(null);

  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.style.width = "210mm";
      previewRef.current.style.minHeight = "297mm";
      previewRef.current.style.padding = "15mm";
    }
  }, []);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setEducation(newEducation);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        course: "",
        startDate: "",
        endDate: "",
        college: "",
        gradeType: "CGPA",
        grade: "",
      },
    ]);
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index] = { ...newExperiences[index], [field]: value };
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: "",
        completionDate: "",
        jobRole: "",
        locationType: "Remote",
        location: "",
      },
    ]);
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        name: "",
        completionDate: "",
        technologies: "",
        points: [""],
        websiteUrl: "",
        githubUrl: "",
      },
    ]);
  };

  const addProjectPoint = (projectIndex) => {
    const newProjects = [...projects];
    newProjects[projectIndex].points.push("");
    setProjects(newProjects);
  };

  const handleProjectPointChange = (projectIndex, pointIndex, value) => {
    const newProjects = [...projects];
    newProjects[projectIndex].points[pointIndex] = value;
    setProjects(newProjects);
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index].skills = value;
    setSkills(newSkills);
  };

  const addSkillCategory = () => {
    setSkills([...skills, { name: "", skills: "" }]);
  };

  const handleSkillCategoryNameChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index].name = value;
    setSkills(newSkills);
  };

  const handleCertificateChange = (index, field, value) => {
    const newCertificates = [...certificates];
    newCertificates[index] = { ...newCertificates[index], [field]: value };
    setCertificates(newCertificates);
  };

  const addCertificate = () => {
    setCertificates([...certificates, { name: "", url: "" }]);
  };

  const handleAchievementChange = (index, field, value) => {
    const newAchievements = [...achievements];
    newAchievements[index] = { ...newAchievements[index], [field]: value };
    setAchievements(newAchievements);
  };

  const addAchievement = () => {
    setAchievements([...achievements, { title: "", description: "" }]);
  };

  const handleCustomSectionChange = (index, field, value) => {
    const newCustomSections = [...customSections];
    newCustomSections[index] = { ...newCustomSections[index], [field]: value };
    setCustomSections(newCustomSections);
  };

  const addCustomSection = () => {
    setCustomSections([
      ...customSections,
      { heading: "", subheading: "", content: "", isLink: false, url: "" },
    ]);
  };

  const toggleMobilePreview = () => {
    setShowMobilePreview(!showMobilePreview);
  };

  const generatePDF = async () => {
    const element = previewRef.current;
    const opt = {
      margin: 10,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    if (element) {
      const worker = html2pdf().from(element).set(opt);

      // Get the PDF document
      const doc = await worker
        .toContainer()
        .toCanvas()
        .toPdf()
        .output("datauristring");

      // Create a temporary iframe to render the PDF
      const iframe = document.createElement("iframe");
      iframe.style.visibility = "hidden";
      document.body.appendChild(iframe);
      iframe.src = doc;

      iframe.onload = () => {
        // Get the number of pages
        const pages =
          iframe.contentWindow.document.body.getElementsByTagName("img").length;

        // Update the opt object with the correct number of pages
        opt.html2canvas.windowWidth = element.scrollWidth;
        opt.html2canvas.windowHeight = element.scrollHeight * pages;

        // Generate the final PDF
        html2pdf().set(opt).from(element).save();

        // Remove the temporary iframe
        document.body.removeChild(iframe);
      };
    }
  };

  const removeEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const removeExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const removeSkillCategory = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const removeCertificate = (index) => {
    setCertificates(certificates.filter((_, i) => i !== index));
  };

  const removeAchievement = (index) => {
    setAchievements(achievements.filter((_, i) => i !== index));
  };

  const removeCustomSection = (index) => {
    setCustomSections(customSections.filter((_, i) => i !== index));
  };

  return (
    <div className="w-screen flex flex-col lg:flex-row min-h-screen items-center justify-center lg:items-start lg:justify-start overflow-hidden">
      {/* Form Section */}
      <div className="w-full max-w-3xl lg:w-1/2 xl:w-[50%] p-4 overflow-auto mx-auto">
        <ResumeForm
          personalInfo={personalInfo}
          education={education}
          experiences={experiences}
          projects={projects}
          skills={skills}
          certificates={certificates}
          achievements={achievements}
          customSections={customSections}
          showExperience={showExperience}
          showProjects={showProjects}
          showSkills={showSkills}
          showCertificates={showCertificates}
          showAchievements={showAchievements}
          showCustomSections={showCustomSections}
          handlePersonalInfoChange={handlePersonalInfoChange}
          handleEducationChange={handleEducationChange}
          addEducation={addEducation}
          handleExperienceChange={handleExperienceChange}
          addExperience={addExperience}
          handleProjectChange={handleProjectChange}
          addProject={addProject}
          addProjectPoint={addProjectPoint}
          handleProjectPointChange={handleProjectPointChange}
          handleSkillChange={handleSkillChange}
          addSkillCategory={addSkillCategory}
          handleSkillCategoryNameChange={handleSkillCategoryNameChange}
          handleCertificateChange={handleCertificateChange}
          addCertificate={addCertificate}
          handleAchievementChange={handleAchievementChange}
          addAchievement={addAchievement}
          handleCustomSectionChange={handleCustomSectionChange}
          addCustomSection={addCustomSection}
          setShowExperience={setShowExperience}
          setShowProjects={setShowProjects}
          setShowSkills={setShowSkills}
          setShowCertificates={setShowCertificates}
          setShowAchievements={setShowAchievements}
          setShowCustomSections={setShowCustomSections}
          generatePDF={generatePDF}
          removeEducation={removeEducation}
          removeExperience={removeExperience}
          removeProject={removeProject}
          removeSkillCategory={removeSkillCategory}
          removeCertificate={removeCertificate}
          removeAchievement={removeAchievement}
          removeCustomSection={removeCustomSection}
        />
      </div>

      {/* Preview Section */}
      <div className="mainPreview hidden lg:block w-1/2 xl:w-[50%] p-4 bg-gray-100">
        <div
          ref={previewRef}
          className="resumeShowing w-[210mm] min-h-[297mm] bg-white shadow-lg mx-auto overflow-auto"
          style={{ padding: "15mm" }}
        >
          <ResumePreview
            personalInfo={personalInfo}
            education={education}
            experiences={experiences}
            projects={projects}
            skills={skills}
            certificates={certificates}
            achievements={achievements}
            customSections={customSections}
            showExperience={showExperience}
            showProjects={showProjects}
            showSkills={showSkills}
            showCertificates={showCertificates}
            showAchievements={showAchievements}
            showCustomSections={showCustomSections}
          />
        </div>
      </div>

      {/* Mobile/Tablet Preview Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-10">
        <Button
          onClick={toggleMobilePreview}
          className="rounded-full w-12 h-12 flex items-center justify-center"
        >
          {showMobilePreview ? <X className="h-6 w-6 " /> : "Preview"}
        </Button>
      </div>

      {/* Mobile/Tablet Preview Slide-up */}
      {showMobilePreview && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-auto">
          <div className="sticky top-0 bg-white p-4 flex justify-between items-center border-b">
            <h2 className="text-xl font-bold">Resume Preview</h2>
            <Button variant="ghost" className="outline-dashed" onClick={toggleMobilePreview}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="p-4">
            <ResumePreview
              personalInfo={personalInfo}
              education={education}
              experiences={experiences}
              projects={projects}
              skills={skills}
              certificates={certificates}
              achievements={achievements}
              customSections={customSections}
              showExperience={showExperience}
              showProjects={showProjects}
              showSkills={showSkills}
              showCertificates={showCertificates}
              showAchievements={showAchievements}
              showCustomSections={showCustomSections}
            />
          </div>
        </div>
      )}
    </div>
  );
}
