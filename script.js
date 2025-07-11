
document.getElementById('grxForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    gamertag: form.gamertag.value,
    platform: form.platform.value,
    preference: form.preference.value,
    age: form.age.value,
    timezone: form.timezone.value,
    why: form.why.value,
    discord: form.discord.value
  };

  const content = `**New GRX Application:**\n\n` +
    `**Gamertag:** ${data.gamertag}\n` +
    `**Platform:** ${data.platform}\n` +
    `**Game Preference:** ${data.preference}\n` +
    `**Age:** ${data.age}\n` +
    `**Timezone:** ${data.timezone}\n` +
    `**Why Join:** ${data.why}\n` +
    `**Discord Tag:** ${data.discord}`;

  await fetch("https://discord.com/api/webhooks/1393343315730108507/UsNl3zkW_WDuHt29ItLNI9GzWpZd85VBMoSCacOeQsNjiIfH92EL7oC8WFBfwnkTR3au", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content
    })
  });

  alert("Application submitted! Welcome to the shadows.");
  form.reset();
});
