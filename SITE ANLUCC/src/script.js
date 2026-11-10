const menuButton = document.querySelector(".menu-button")
const mobileMenu = document.querySelector("#mobile-menu")

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true"
  menuButton.setAttribute("aria-expanded", String(!isOpen))
  menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu")
  mobileMenu.hidden = isOpen
})

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false")
    menuButton.setAttribute("aria-label", "Abrir menu")
    mobileMenu.hidden = true
  })
})

const tabs = document.querySelectorAll(".tab")
const panels = {
  "pix-tab": document.querySelector("#pix-panel"),
  "volunteer-tab": document.querySelector("#volunteer-panel"),
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      const selected = item === tab
      item.classList.toggle("active", selected)
      item.setAttribute("aria-selected", String(selected))
      panels[item.id].hidden = !selected
    })
  })
})

const copyButton = document.querySelector("#copy-pix")
const pixKey = "anlucc@anlucc.org.br"

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pixKey)
  } catch {
    const temporaryInput = document.createElement("textarea")
    temporaryInput.value = pixKey
    temporaryInput.style.position = "fixed"
    temporaryInput.style.opacity = "0"
    document.body.appendChild(temporaryInput)
    temporaryInput.select()
    document.execCommand("copy")
    temporaryInput.remove()
  }

  copyButton.textContent = "✓ Chave copiada!"
  copyButton.classList.add("copied")
  window.setTimeout(() => {
    copyButton.textContent = "Copiar chave PIX"
    copyButton.classList.remove("copied")
  }, 2500)
})

const contactForm = document.querySelector("#contact-form")
const formSuccess = document.querySelector("#form-success")

contactForm.addEventListener("submit", (event) => {
  event.preventDefault()
  contactForm.hidden = true
  formSuccess.hidden = false
})
