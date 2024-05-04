const toastContainer = document.createElement("div");
toastContainer.id = "toastContainer";
toastContainer.classList = "toast-container position-fixed bottom-0 end-0 p-3";
document.body.appendChild(toastContainer);

class Toast {
    constructor(title, body, color) {
        this.title = title;
        this.body = body;
        this.color = color;
        this.id = crypto.randomUUID();
        const toast = document.createElement("div");
        toast.classList = "toast";
        toast.id = this.id;
        toast.role = "alert";
        toast.setAttribute("aria-live", "assertive");
        toast.setAttribute("aria-atomic", "true");
        const date = new Date();
        toast.innerHTML = `
            <div class="toast-header">
                <span class="rounded me-2" style="aspect-ratio: 1/1; height: 1.2rem; background-color: ${this.color};"></span>
                <strong class="me-auto">${this.title}</strong>
                <small>${date.getHours()}:${(date.getMinutes() < 10 ? '0' : '')+date.getMinutes()}</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${this.body}
            </div>
        `
        toastContainer.appendChild(toast);
    }

    show(autohide=true) {
        const toast = document.getElementById(this.id);
        toast.setAttribute("data-bs-autohide", `${autohide}`);
        new bootstrap.Toast(toast).show();
    }

    hide() {
        const toast = document.getElementById(this.id);
        new bootstrap.Toast(toast).hide();
    }
}