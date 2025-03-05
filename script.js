
document.addEventListener("DOMContentLoaded", function () {
  // Fetch the JSON file
  fetch("models.json")
      .then(response => response.json())
      .then(models => {
          // Sort models alphabetically by name
          models.sort((a, b) => a.name.localeCompare(b.name));

          // Populate the dropdown menu
          const dropdown = document.getElementById("model-select");
          models.forEach((model, index) => {
              const option = document.createElement("option");
              option.value = index; // Use index as value to easily reference models
              option.textContent = model.name;
              dropdown.appendChild(option);
          });

          // Display the first model by default
          if (models.length > 0) {
              displayModel(models[0]); // Show the first model
              dropdown.selectedIndex = 1; // Set dropdown to first model
          }

          // Add event listener to change display when selecting a new model
          dropdown.addEventListener("change", function () {
              const selectedIndex = dropdown.value;
              if (selectedIndex !== "") {
                  displayModel(models[selectedIndex]);
              }
          });
      })
      .catch(error => console.error("Error loading JSON:", error));
});

// Function to display selected model's details
function displayModel(model) {
  const modelContainer = document.getElementById("model-container");
  modelContainer.innerHTML = `
      <h2>${model.name}</h2>
      <img src="${model.image}" alt="${model.name}">
      <p>Grade: ${model.grade}</p>
      <p>Release Year: ${model.release_year}</p>
  `;
}
