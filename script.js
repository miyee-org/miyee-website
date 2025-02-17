// Fetch the JSON data
fetch("models.json?nocache=" + new Date().getTime()) // Prevents GitHub Pages cache issues
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("✅ JSON Data Loaded:", data); // Debugging: Check if JSON is loaded

    const dropdown = document.getElementById("model-select");
    const displayArea = document.getElementById("model-container");

    // Ensure data is valid
    if (!Array.isArray(data) || data.length === 0) {
      console.error("❌ JSON data is not an array or is empty!");
      return;
    }

    // Function to display a model
    function displayModel(index) {
      const model = data[index];
      displayArea.innerHTML = `
        <div class="model-card">
          <img class="model-image" src="${model.image}" alt="${model.name}">
          <h2 class="model-name">${model.name}</h2>
          <p class="model-grade"><strong>Grade:</strong> ${model.grade}</p>
          <p class="model-year"><strong>Release Year:</strong> ${model.release_year}</p>
        </div>
      `;
      displayArea.style.display = "block";
      dropdown.value = index; // Update dropdown selection
    }

    // Populate dropdown menu with model names
    data.forEach((model, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = model.name;
      dropdown.appendChild(option);
    });

    // Display the first model by default
    displayModel(0);

    // Listen for dropdown selection change
    dropdown.addEventListener("change", function () {
      const selectedIndex = this.value;
      if (selectedIndex !== "") {
        displayModel(selectedIndex);
      }
    });
  })
  .catch(error => console.error("❌ Error loading JSON:", error));
