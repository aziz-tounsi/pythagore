# Image Map — Lycée Pythagore Website

All placeholder images currently use Google `lh3.googleusercontent.com` URLs.
Replace each with a real photo placed in `src/assets/` (or `public/images/`), then update the `src` attribute in the corresponding file(s).

---

## 5 Unique Scene Photos

### IMAGE A — "hero-classroom.jpg"
- **Description:** Bright, modern school building exterior OR a classroom with large windows, students at desks, natural light, possibly greenish-tinted walls with student artwork.
- **Suggested replacement:** A wide-angle photo of the real Lycée Pythagore building façade or a flagship classroom.
- **Used in:**
  - [Home.tsx](src/pages/Home.tsx#L37) — Full-width hero background
  - [About.tsx](src/pages/About.tsx#L36) — Hero section school photo
  - [Admissions.tsx](src/pages/Admissions.tsx#L45) — Hero illustration

### IMAGE B — "science-lab.jpg"
- **Description:** Students in a science laboratory, wearing lab coats, doing experiments with beakers/microscopes. Bright, well-lit space.
- **Suggested replacement:** Photo of Pythagore's real science lab with students.
- **Used in:**
  - [Home.tsx](src/pages/Home.tsx#L231) — Gallery large feature (2-col, 2-row)
  - [About.tsx](src/pages/About.tsx#L160) — "Un Cadre Inspirant" large photo

### IMAGE C — "library-cdi.jpg"
- **Description:** Interior of school library/CDI — bookshelves, reading tables, warm lighting, students reading or studying.
- **Suggested replacement:** Photo of the real CDI/library at Pythagore.
- **Used in:**
  - [Home.tsx](src/pages/Home.tsx#L247) — Gallery cell
  - [About.tsx](src/pages/About.tsx#L174) — Side column small photo
  - [StudentLife.tsx](src/pages/StudentLife.tsx#L169) — "Le CDI Digital" facility photo

### IMAGE D — "sports-field.jpg"
- **Description:** Students playing sports on an outdoor field — football, athletics, bright daylight, green grass, possibly wearing school PE uniforms.
- **Suggested replacement:** Photo of Pythagore's sports field or students doing PE.
- **Used in:**
  - [Home.tsx](src/pages/Home.tsx#L260) — Gallery cell
  - [StudentLife.tsx](src/pages/StudentLife.tsx#L46) — Hero grid sports photo
  - [StudentLife.tsx](src/pages/StudentLife.tsx#L181) — "Complexe Sportif" facility photo

### IMAGE E — "group-collaboration.jpg"
- **Description:** Group of students collaborating / doing group work around a table — textbooks open, discussion, diverse students.
- **Suggested replacement:** Photo of students working together in a classroom or study area.
- **Used in:**
  - [Home.tsx](src/pages/Home.tsx#L273) — Gallery 2-column cell
  - [About.tsx](src/pages/About.tsx#L75) — Founding team / history photo
  - [StudentLife.tsx](src/pages/StudentLife.tsx#L35) — Hero main image (col-span-2)
  - [StudentLife.tsx](src/pages/StudentLife.tsx#L53) — Hero grid "Music club" photo
  - [StudentLife.tsx](src/pages/StudentLife.tsx#L216) — Theater section photo

---

## 3 Portrait / Avatar Photos

### IMAGE F — "parent-1.jpg" (Mme. Ben Salem)
- **Description:** Portrait of a middle-aged woman, professional headshot style, warm smile.
- **Suggested replacement:** Stock portrait or real testimonial photo (with consent).
- **Used in:**
  - [Home.tsx](src/pages/Home.tsx) — Testimonial avatar (inside `.map()` array, first item)

### IMAGE G — "parent-2.jpg" (Mr. Trabelsi)
- **Description:** Portrait of a middle-aged man, professional headshot style.
- **Suggested replacement:** Stock portrait or real testimonial photo.
- **Used in:**
  - [Home.tsx](src/pages/Home.tsx) — Testimonial avatar (inside `.map()` array, second item)

### IMAGE H — "parent-3.jpg" (Dr. Gharbi)
- **Description:** Portrait of a woman, professional headshot style.
- **Suggested replacement:** Stock portrait or real testimonial photo.
- **Used in:**
  - [Home.tsx](src/pages/Home.tsx) — Testimonial avatar (inside `.map()` array, third item)

---

## How to Replace

1. Place your real images in `public/images/` (e.g. `public/images/hero-classroom.jpg`)
2. Find-and-replace the long `https://lh3.googleusercontent.com/aida-public/...` URL with `/images/hero-classroom.jpg`
3. Each unique URL ending is listed above — search for the URL suffix to find all occurrences

### Quick URL → Image ID mapping:
| URL contains | Image ID | Filename suggestion |
|---|---|---|
| `AB6AXuCd85vJhWn4ZUrU` | A | hero-classroom.jpg |
| `AB6AXuCh9KfocDnK7zWk` | B | science-lab.jpg |
| `AB6AXuDa2tlpo19Fr-WG` | C | library-cdi.jpg |
| `AB6AXuDY7yKZcmwettG5` | D | sports-field.jpg |
| `AB6AXuCsmY8y4qiUWnXS` | E | group-collaboration.jpg |
| `AB6AXuDy_it01JW0coHj` | F | parent-1.jpg |
| `AB6AXuBrXvlyw1VrRV9F` | G | parent-2.jpg |
| `AB6AXuDiMcMMr-4nf6T6` | H | parent-3.jpg |
