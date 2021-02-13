// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "none") {
    return "";
    }
    else {
      license = license.replace(/\s/g , "_");
      return `![License](https://img.shields.io/static/v1?label=License&message=${license}&color=blueviolet)`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseInfo = [
    {
      name: "Apache License 2.0",
      url: "https://opensource.org/licenses/Apache-2.0"
    },
    {
      name: "GNU General Public License (GPL)",
      url: "https://opensource.org/licenses/gpl-license"
    },
    {
      name: "MIT license",
      url: "https://opensource.org/licenses/MIT"
    },
    {
      name: "Mozilla Public License 2.0",
      url: "https://opensource.org/licenses/MPL-2.0"
    },
  ]

  if (license === "none") {
    return "";
  }
  else {
    let licenseLink = licenseInfo.find(e => e.name === license);
    return licenseLink.url;
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = renderLicenseLink(license);
  if (license === "none") {
    return "No license for this project";
  }
  else {
    return `Notice: This application is covered under the ${license} license.\n\n <a href="${licenseLink}">${licenseLink}</a>`;
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseSection = renderLicenseSection(data.license);
  
  return `# ${data.title}
  ${licenseBadge}
  ## Table of Contents: 
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contributors](#contributors)
  [Testing](#testing)
  [License](#license)
  [Github](#github)
  [Email](#email)
  ## Description: 
  ${data.description} 
  ## Installation: 
  ${data.installation}
  ## Usage: 
  ${data.usage} 
  ## Contributors: 
  ${data.contributors} 
  ## Tests: 
  ${data.testing} 
  ### License: 
  ${license} 
  ### Github: 
  ${data.github} 
  ### Email: 
  ${data.email}
`;
}

module.exports = generateMarkdown;
