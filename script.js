document.getElementById('loadMore').addEventListener('click', function() {
  var projectsSection = document.getElementById('projects');
  projectsSection.innerHTML += '<div><h2>New Project</h2><p>Description of a new project</p></div>';
});
