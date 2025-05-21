 function analysiereText() {
      const stopwords = ["der", "die", "das", "und", "ist", "zu", "mit", "auch", "ein", "eine", "ich", "in", "an", "den", "dem", "des", "wie", "so", "wir", "da", "nicht", "von", "auf", "für", "sich", "im", "er", "sie", "es", "du", "was", "doch"];
      const text = document.getElementById("textInput").value.toLowerCase();
      const gereinigt = text.replace(/[^a-zäöüß\s]/g, '');
      const woerter = gereinigt.split(/\s+/).filter(w => w && !stopwords.includes(w));

      const haeufigkeit = {};

      for (let wort of woerter) {
        haeufigkeit[wort] = (haeufigkeit[wort] || 0) + 1;
      }

      const sortiert = Object.entries(haeufigkeit)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

      let output = "<h2>Top 10 häufigste Wörter</h2><table><tr><th>Wort</th><th>Anzahl</th></tr>";
      for (let [wort, anzahl] of sortiert) {
        output += `<tr><td>${wort}</td><td>${anzahl}</td></tr>`;
      }
      output += "</table>";

      document.getElementById("ausgabe").innerHTML = output;
    }