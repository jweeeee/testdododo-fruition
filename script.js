const MY_DOMAIN = "testdododo.vercel.app";
const START_PATH = "1d73522a3fc880ddaf80d37c4d91523b";

function removeNotionBranding() {
  document.querySelectorAll('a.notion-brand-link').forEach(el => el.remove());
  document.querySelectorAll('div.notion-footer').forEach(el => el.remove());
}

window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  if (!hash) {
    history.replaceState(null, "", "/" + START_PATH);
  }
  removeNotionBranding();
});
