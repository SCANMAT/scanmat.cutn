# Ravindran Research Group Website

This is a static lab website. It is organized so group members can update content without touching unrelated code.

## File Structure

- `index.html` contains the page content and section order.
- `css/styles.css` contains all layout, colors, spacing, and responsive design.
- `js/main.js` contains small interactive behavior for the mobile menu and active navigation links.

## Common Updates

### Add or Update a Research Area

Edit the cards inside:

```html
<section class="section" id="research">
```

Copy one existing `<article class="research-card">...</article>` block and change the icon, title, and paragraph.

### Add a Group Member

Edit the cards inside:

```html
<div class="people-grid" aria-label="Researchers and scholars">
```

Copy one existing `<article class="member-card">...</article>` block and update the name, role or topic, and email.

### Add a Publication

Edit the list inside:

```html
<div class="publication-list">
```

Copy one `<article class="publication-card">...</article>` block and update the journal, year, title, and authors.

### Change Colors or Spacing

Most site-wide design values are at the top of `css/styles.css` under `:root`. Change those variables first before editing individual components.

## Preview

Open `index.html` in a browser. No build step is required.
