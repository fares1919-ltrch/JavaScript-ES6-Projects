# Project Title: Famous Artists Showcase

### **Description:**

This project is a visually engaging showcase of famous music artists. It displays a grid of artist images with interactive hover effects, revealing artist names and captions when hovered over. It serves as a creative way to highlight artists and their iconic work.

### **Technologies Used:**

- **HTML:** Structure of the web page.
- **CSS:** Styling for layout, hover effects, animations, and responsiveness.

### **Features:**

- **Dynamic Grid Layout:** Arranges images of artists in a responsive grid format.
- **Hover Effects:**
    - Zooms into the artist's image when hovered.
    - Reveals artist names and descriptive captions with smooth transitions.
- **Responsive Design:** The layout adjusts to fit different screen sizes.

### **Installation:**

1. Clone the repository or download the project files.
2. Ensure all image files (e.g., `4.png`, `14.png`, etc.) are in the same directory as the HTML file.
3. Open the `index.html` file in a web browser to view the project.

### **Usage:**

- Hover over an artist's image to see their name and a caption describing their style or work.
- Enjoy the smooth animations and aesthetic layout.

### **File Structure:**

- `index.html`: Contains the HTML structure, including the grid of artist figures.
- `style.css` (embedded): Provides styles for the grid, hover effects, and overall layout.

### **Code Snippets:**

### **HTML Structure for an Artist:**

```html
html
CopyEdit
<figure style="--c: #fff5">
  <img src="4.png" alt="Artist 1" />
  <div class="name">METRO X FUTURE</div>
  <figcaption>FIREEEEE</figcaption>
</figure>

```

- The `figure` element contains an image, a hidden artist name, and a caption.
- The `-c` variable defines the hover background color.

### **CSS Hover Effect for Artist Cards:**

```css
css
CopyEdit
figure:hover figcaption {
  --_i: 0%;
}
figure:hover img {
  transform: scale(1.2);
}
figure:hover .name {
  opacity: 1;
}

```

- **Image Zoom:** Increases the scale of the image when hovered.
- **Caption Reveal:** Displays the artist's name and caption.

### **Customization:**

- **Add More Artists:** Add additional `figure` elements under the `#first3` or `#last3` divs, with appropriate image sources and descriptions.
- **Change Colors:** Modify the `-c` variable in each `figure` for unique hover colors.
- **Update Styles:** Adjust CSS for font styles, layout, or animation speed.

### **Contributing:**

Feel free to contribute by:

- Adding new artists.
- Improving the design.
- Suggesting new interactive features.

### **License:**

This project is open-source. Use, modify, and distribute it freely.