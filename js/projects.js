const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("name")) {
    const nameOfProject = urlParams.get("name");
    document.getElementById("linkToGitHub").href = `https://github.com/Its-Just-Nans/${nameOfProject}`;
    document.getElementById("frontTitle").innerHTML = nameOfProject;
    document.getElementById("linkToHTML").href = `${window.location.origin}/${nameOfProject}`;
    let url = `https://raw.githubusercontent.com/Its-Just-Nans/${nameOfProject}/master/README.md`;
    renderSpecialObject({ url: url, parse: false }, function (response) {
        let converter = new showdown.Converter();
        converter.setFlavor("github");
        let html = converter.makeHtml(response);
        document.getElementById("projects").innerHTML = html;
        document.querySelectorAll("pre code").forEach((block) => {
            hljs.highlightBlock(block);
        });
    });

    renderSpecialObject({ url: `https://api.github.com/repos/Its-Just-Nans/${nameOfProject}`, parse: false }, function (data) {
        if (!data["has_pages"]) {
            document.getElementById("linkToHTML").remove();
        }
    });
} else {
    document.getElementById("titleProject").innerHTML = "It looks like there are no readMe :(";
    document.getElementById("linkToHTML").remove();
    setTimeout(function () {
        window.location = "https://its-just-nans.github.io/";
    }, 5000);
}
