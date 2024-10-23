console.log("Publications script loaded.");

document.addEventListener('DOMContentLoaded', function() {
    // Define your publications
    const publications = {
        mostRecent: {
            title: "The effect of miniaturization on the evolution of sexual size dimorphism in geckos",
            link: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=The+effect+of+miniaturization+on+the+evolution+of+sexual+size+dimorphism+in+geckos&btnG=",
            description: "Most recent publication - Evolution, 2024"
        },
        mostCited: {
            title: "Interspecific allometry for sexual shape dimorphism: Macroevolution of multivariate sexual phenotypes",
            link: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Interspecific+allometry+for+sexual+shape+dimorphism&btnG=",
            description: "Most cited publication - Evolution, 2020"
        }
    };

    // Insert Most Recent Publication
    const recentPubDiv = document.getElementById('most-recent-publication');
    recentPubDiv.innerHTML = `
        <h4><a href="${publications.mostRecent.link}" target="_blank">${publications.mostRecent.title}</a></h4>
        <p>${publications.mostRecent.description}</p>
    `;

    // Insert Most Cited Publication
    const citedPubDiv = document.getElementById('most-cited-publication');
    citedPubDiv.innerHTML = `
        <h4><a href="${publications.mostCited.link}" target="_blank">${publications.mostCited.title}</a></h4>
        <p>${publications.mostCited.description}</p>
    `;
});
