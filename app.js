(() => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const escapeHTML = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const profile = data.profile;
  const firstName = profile.name.split(" ").slice(0, 2).join(" ");

  document.querySelectorAll("[data-initials]").forEach((node) => {
    node.textContent = profile.initials;
  });
  document.querySelectorAll("[data-short-name]").forEach((node) => {
    node.textContent = firstName;
  });
  document.querySelectorAll("[data-full-name]").forEach((node) => {
    node.textContent = profile.name;
  });
  document.querySelectorAll("[data-eyebrow]").forEach((node) => {
    node.textContent = profile.eyebrow;
  });
  document.querySelectorAll("[data-headline]").forEach((node) => {
    node.textContent = profile.headline;
  });
  document.querySelectorAll("[data-introduction]").forEach((node) => {
    node.textContent = profile.introduction;
  });
  document.querySelectorAll("[data-location]").forEach((node) => {
    node.textContent = profile.location;
  });
  document.querySelectorAll("[data-email-link]").forEach((node) => {
    node.href = `mailto:${profile.email}`;
  });
  document.querySelectorAll("[data-email-text]").forEach((node) => {
    node.textContent = profile.email;
  });
  document.querySelectorAll("[data-resume-link]").forEach((node) => {
    node.href = profile.resume;
  });

  document.getElementById("metrics-grid").innerHTML = data.metrics
    .map(
      (metric, index) => `
        <article class="metric reveal" data-reveal-delay="${index % 4}">
          <strong>${escapeHTML(metric.value)}</strong>
          <span>${escapeHTML(metric.label)}</span>
        </article>
      `
    )
    .join("");

  document.getElementById("projects-grid").innerHTML = data.projects
    .map(
      (project, index) => `
        <article class="project-card ${index === 0 ? "project-card-featured" : ""} reveal" data-reveal-delay="${index % 2}">
          <div class="project-media">
            <img
              src="${escapeHTML(project.image)}"
              alt="${escapeHTML(project.imageAlt)}"
              loading="${index === 0 ? "eager" : "lazy"}"
              width="1586"
              height="992"
            />
            <span class="project-number" aria-hidden="true">${escapeHTML(project.number)}</span>
            <span class="media-note">${escapeHTML(project.mediaNote)}</span>
          </div>
          <div class="project-body">
            <div class="project-meta">
              <span>${escapeHTML(project.institution)}</span>
              <span>${escapeHTML(project.period)}</span>
            </div>
            <h3>${escapeHTML(project.title)}</h3>
            <p class="project-subtitle">${escapeHTML(project.subtitle)}</p>
            <p class="project-overview">${escapeHTML(project.overview)}</p>
            <ul class="tag-list" aria-label="Technologies">
              ${project.stack
                .slice(0, index === 0 ? 7 : 5)
                .map((item) => `<li>${escapeHTML(item)}</li>`)
                .join("")}
            </ul>
            <button class="text-button" type="button" data-project-id="${escapeHTML(project.id)}">
              Explore project
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </article>
      `
    )
    .join("");

  document.getElementById("experience-list").innerHTML = data.experience
    .map(
      (item, index) => `
        <article class="experience-item reveal" data-reveal-delay="${index % 2}">
          <div class="experience-period">${escapeHTML(item.period)}</div>
          <div class="experience-role">
            <h3>${escapeHTML(item.role)}</h3>
            <p>${escapeHTML(item.company)} · ${escapeHTML(item.location)}</p>
          </div>
          <div class="experience-detail">
            <p class="experience-summary">${escapeHTML(item.summary)}</p>
            <ul>
              ${item.highlights.map((highlight) => `<li>${escapeHTML(highlight)}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");

  document.getElementById("about-copy").innerHTML = data.about
    .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
    .join("");

  document.getElementById("about-links").innerHTML = data.profile.links
    .map(
      (link) => `
        <a href="${escapeHTML(link.url)}" target="_blank" rel="noreferrer">
          ${escapeHTML(link.label)} <span aria-hidden="true">↗</span>
        </a>
      `
    )
    .join("");

  document.getElementById("skills-list").innerHTML = data.skillGroups
    .map(
      (group, index) => `
        <div class="skill-group">
          <div class="skill-index">0${index + 1}</div>
          <div>
            <h3>${escapeHTML(group.title)}</h3>
            <p>${group.items.map(escapeHTML).join(" · ")}</p>
          </div>
        </div>
      `
    )
    .join("");

  document.getElementById("education-list").innerHTML = data.education
    .map(
      (item, index) => `
        <article class="education-item reveal" data-reveal-delay="${index}">
          <div class="education-logo">
            <img src="${escapeHTML(item.logo)}" alt="${escapeHTML(item.logoAlt)}" loading="lazy" />
          </div>
          <div class="education-copy">
            <p class="education-period">${escapeHTML(item.period)}</p>
            <h3>${escapeHTML(item.degree)}</h3>
            <p class="education-school">${escapeHTML(item.school)}</p>
            <p>${escapeHTML(item.focus)} · ${escapeHTML(item.location)}</p>
          </div>
        </article>
      `
    )
    .join("");

  document.getElementById("certification-list").innerHTML = data.certifications
    .map((item) => `<li>${escapeHTML(item)}</li>`)
    .join("");

  document.getElementById("current-year").textContent = new Date().getFullYear();

  const dialog = document.getElementById("project-dialog");
  const dialogContent = document.getElementById("dialog-content");
  let previousFocus = null;

  const renderGalleryItem = (item) => {
    if (item.type === "video") {
      return `
        <figure class="dialog-media-item">
          <video controls playsinline preload="metadata" aria-label="${escapeHTML(item.title)}">
            <source src="${escapeHTML(item.src)}" type="video/mp4" />
          </video>
          <figcaption>${escapeHTML(item.title)}</figcaption>
        </figure>
      `;
    }

    return `
      <figure class="dialog-media-item">
        <img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.alt)}" loading="lazy" />
      </figure>
    `;
  };

  const openProject = (project) => {
    previousFocus = document.activeElement;
    dialogContent.innerHTML = `
      <article class="dialog-project">
        <header class="dialog-hero">
          <div class="dialog-hero-copy">
            <p class="section-kicker">Project ${escapeHTML(project.number)} · ${escapeHTML(project.period)}</p>
            <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
            <p>${escapeHTML(project.subtitle)}</p>
            <div class="dialog-meta">${escapeHTML(project.institution)} · ${escapeHTML(project.mediaNote)}</div>
          </div>
          <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt)}" />
        </header>

        <div class="dialog-section dialog-overview">
          <p class="dialog-lead">${escapeHTML(project.overview)}</p>
          <div>
            <h3>The engineering challenge</h3>
            <p>${escapeHTML(project.challenge)}</p>
          </div>
        </div>

        <section class="dialog-section" aria-labelledby="architecture-title">
          <p class="dialog-label" id="architecture-title">System flow</p>
          <ol class="architecture-flow">
            ${project.architecture.map((step) => `<li>${escapeHTML(step)}</li>`).join("")}
          </ol>
        </section>

        <div class="dialog-section dialog-columns">
          <section>
            <p class="dialog-label">Outcomes</p>
            <ul class="detail-list">
              ${project.outcomes.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
            </ul>
          </section>
          <section>
            <p class="dialog-label">My contributions</p>
            <ul class="detail-list">
              ${project.contributions.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
            </ul>
          </section>
        </div>

        <section class="dialog-section">
          <p class="dialog-label">Tools & technologies</p>
          <ul class="tag-list dialog-tags">
            ${project.stack.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
          </ul>
        </section>

        <section class="dialog-section">
          <p class="dialog-label">Project media</p>
          <div class="dialog-gallery ${project.gallery.length === 1 ? "dialog-gallery-single" : ""}">
            ${project.gallery.map(renderGalleryItem).join("")}
          </div>
        </section>
      </article>
    `;
    dialog.showModal();
    dialog.querySelector(".dialog-close").focus();
  };

  document.querySelectorAll("[data-project-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = data.projects.find((item) => item.id === button.dataset.projectId);
      if (project) openProject(project);
    });
  });

  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;
    if (outside) dialog.close();
  });

  dialog.addEventListener("close", () => {
    dialog.querySelectorAll("video").forEach((video) => video.pause());
    if (previousFocus) previousFocus.focus();
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const navLinks = [...document.querySelectorAll(".main-nav a")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${visible.target.id}`;
          link.toggleAttribute("aria-current", active);
        });
      },
      { rootMargin: "-25% 0px -65%", threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((section) => sectionObserver.observe(section));
  }
})();
