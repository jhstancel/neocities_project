# HTML Quick Reference (Organized)

---

# 1. Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>

    <!-- Content goes here -->

</body>
</html>
```

**What each part does:**

* `<!DOCTYPE html>` → Tells browser this is HTML5
* `<html>` → Root element
* `<head>` → Metadata (not visible)
* `<body>` → Visible content

---

# 2. Head Section Essentials

## Page Title

```html
<title>My Website</title>
```

## Link CSS File

```html
<link rel="stylesheet" href="styles.css">
```

## Add Favicon

```html
<link rel="icon" href="favicon.ico">
```

## Meta Viewport (Mobile)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

# 3. Text Elements

## Headings

```html
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```

## Paragraph

```html
<p>This is a paragraph.</p>
```

## Line Break

```html
<br>
```

## Horizontal Line

```html
<hr>
```

## Bold / Strong

```html
<b>Bold</b>
<strong>Important</strong>
```

## Italic / Emphasis

```html
<i>Italic</i>
<em>Emphasis</em>
```

## Small Text

```html
<small>Fine print</small>
```

---

# 4. Links

## Basic Link

```html
<a href="https://example.com">Visit Site</a>
```

## Open in New Tab

```html
<a href="https://example.com" target="_blank">Open</a>
```

## Email Link

```html
<a href="mailto:someone@email.com">Email Me</a>
```

---

# 5. Images

## Basic Image

```html
<img src="image.jpg" alt="Description">
```

## Set Width

```html
<img src="image.jpg" alt="Description" width="300">
```

## Full Syntax Example

```html
<img src="images/profile.jpg" 
     alt="Profile Picture" 
     width="300" 
     height="200">
```

Important attributes:

* `src` → file path
* `alt` → accessibility text
* `width/height` → optional sizing

---

# 6. Lists

## Unordered List

```html
<ul>
    <li>Item One</li>
    <li>Item Two</li>
</ul>
```

## Ordered List

```html
<ol>
    <li>First</li>
    <li>Second</li>
</ol>
```

---

# 7. Divisions & Structure

## Div (Generic Container)

```html
<div>
    Content here
</div>
```

## Span (Inline Container)

```html
<span>Inline text</span>
```

---

# 8. Semantic Layout (Modern Structure)

```html
<header>Top Section</header>
<nav>Navigation Links</nav>
<main>Main Content</main>
<section>Section Block</section>
<article>Independent Content</article>
<footer>Bottom Area</footer>
```

Use these instead of only `<div>` for cleaner structure.

---

# 9. Forms

## Basic Form

```html
<form action="/submit" method="post">
    
    <label>Name:</label>
    <input type="text" name="username">

    <input type="submit" value="Submit">

</form>
```

## Input Types

```html
<input type="text">
<input type="password">
<input type="email">
<input type="number">
<input type="checkbox">
<input type="radio">
<input type="date">
<input type="file">
```

## Text Area

```html
<textarea rows="4" cols="50"></textarea>
```

## Dropdown

```html
<select>
    <option>Option 1</option>
    <option>Option 2</option>
</select>
```

---

# 10. Tables

```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>21</td>
    </tr>
</table>
```

* `<tr>` → row
* `<th>` → header cell
* `<td>` → data cell

---

# 11. Comments

```html
<!-- This is a comment -->
```

---

# 12. Embedding Media

## Video

```html
<video width="400" controls>
    <source src="movie.mp4" type="video/mp4">
</video>
```

## Audio

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
```

## YouTube Embed

```html
<iframe width="560" height="315"
src="https://www.youtube.com/embed/VIDEO_ID"
allowfullscreen>
</iframe>
```

---

# 13. Buttons

```html
<button>Click Me</button>
```

Or as input:

```html
<input type="button" value="Click Me">
```

---

# 14. IDs and Classes (For CSS & JS)

```html
<div id="main"></div>
<div class="card"></div>
```

* `id` → unique
* `class` → reusable

---

# 15. Linking JavaScript

```html
<script src="script.js"></script>
```

Usually placed before `</body>`.

---

# 16. Common Attributes

* `class`
* `id`
* `style`
* `href`
* `src`
* `alt`
* `target`
* `width`
* `height`
* `name`
* `value`
* `placeholder`
* `required`

---

# 17. File Structure Example

```
project-folder/
│
├── index.html
├── styles.css
├── script.js
└── images/
      └── photo.jpg
```

---

# 18. Minimal Starter Template (Clean)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Site</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <h1>Hello World</h1>

    <script src="script.js"></script>
</body>
</html>
```

