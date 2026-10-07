# akanyaani.github.io

Source for my personal site: <https://akanyaani.github.io/>

Plain HTML, CSS and a few lines of JavaScript. There is no build step: GitHub Pages serves the `main` branch as it is.

## Files

| File | What it is |
| --- | --- |
| `index.html` | All of the content. Each section is marked with a comment (`HERO`, `HIGHLIGHTS`, `RESEARCH`, ...). |
| `style.css` | Styles. Colours are variables at the top. The site is white by default, with an optional dark theme. |
| `script.js` | The light/dark theme toggle. |
| `favicon.svg` | Browser tab icon. |
| `og.png` | Preview image used when the link is shared (1200 x 630). |
| `404.html` | Page shown for unknown URLs. |
| `.nojekyll` | Tells GitHub Pages to serve the files without running Jekyll. |

## Editing

- **Add a paper:** copy one `<li class="pub">` block in the Research section of `index.html` and change the year, venue, title, authors, summary and links.
- **Add a project:** copy one `<li class="proj">` block in the Open source section. Star counts are written by hand; update the "as of" note below the grid when you change them.
- **Add a role:** copy one `<li class="job">` block in the Experience section.
- Update the "Last updated" line in the footer.

## Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
