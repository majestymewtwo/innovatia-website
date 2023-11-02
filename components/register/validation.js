export const validateTeamName = (teamName, handleErrorToast) => {
  if (!teamName) {
    handleErrorToast("Team Name", "Please enter a team name");
    return false;
  }

  if (teamName.length < 3 || teamName.length > 50) {
    handleErrorToast(
      "Team Name",
      "Team name should be between 3 and 50 characters long"
    );
    return false;
  }

  return true;
};

export const validateTeamMembers = (
  teamMembers,
  minMembers,
  handleErrorToast
) => {

  const length = teamMembers.length;

  if (length < minMembers-1)
  {
    handleErrorToast(
      "Team Members",
      `Team should have at least ${minMembers} members including captain`
    );
      return false;
  }

  for (let ind=0; ind<length; ind++) {
    if (!validateMemberDetails(teamMembers[ind], handleErrorToast, ind+1))
      return false;
  }

  return true;
};

const validateMemberDetails = (member, handleErrorToast, memberId) => {
  const fields = [
    { name: "name", message: "Please enter a name"},
    { name: "email", message: "Please enter email address" },
    { name: "gender", message: "Please fill gender details" },
    { name: "phone", message: "Please enter phone number", length: 10 },
    { name: "dept", message: "Please enter department name" },
    { name: "college", message: "Please enter college name" },
    { name: "collegeId", message: "Please enter college ID" },
    { name: "year", message: "Please fill your year of study" },
  ];

  for (const field of fields) {
    const value = member[field.name].trim();
    console.log(memberId);
    if (!value) {
      handleErrorToast(`Co - Astronaut - ${memberId}`, field.message);
      return false;
    }
    if (field.length && value.length !== field.length) {
      handleErrorToast(
        `Co - Astronaut - ${memberId}`,
        "Please enter a valid " + field.name
      );
      return false;
    }
  }

  return true;
};

export const validateCaptainDetails = (team, handleErrorToast) => {
  const fields = [
    { name: "captainName", displayName:"name", message: "Please enter your name" },
    { name: "captainEmail", displayName:"email", message: "Please enter email address" },
    { name: "captainGender", displayName:"gender", message: "Please fill gender details" },
    { name: "captainPhone", displayName:"phone", message: "Please enter phone number", length: 10 },
    { name: "captainDept", displayName:"dept", message: "Please enter department name" },
    { name: "captainCollege", displayName:"college", message: "Please enter college name" },
    { name: "captainCollegeId", displayName:"college id", message: "Please enter college ID" },
    { name: "captainYear", displayName:"year", message: "Please fill your year of study" },

  ];

  for (const field of fields) {
    const value = team[field.name].trim();
    if (!value) {
      handleErrorToast(`Captain`, field.message);
      return false;
    }
    if (field.length && value.length !== field.length) {
      handleErrorToast(
        `Captain`,
        "Please enter a valid " + field.displayName
      );
      return false;
    }
  }

  return true;
};
