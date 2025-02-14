fetch("models.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("gundam-list");
    
    data.forEach(model => {
      const modelCard = document.createElement("div");
      modelCard.classList.add("model-card");

      modelCard.innerHTML = `
        <img src="${model.image}" alt="${model.name}">
        <h2>${model.name}</h2>
        <p><strong>Grade:</strong> ${model.grade}</p>
        <p><strong>Release Year:</strong> ${model.release_year}</p>
      `;

      container.appendChild(modelCard);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));