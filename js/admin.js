let pendingWorkspaces = [
    { id: 1, name: "Focus Hub", desc: "Modern & quiet space", owner: "Ahmad Owner", email: "ahmad@email.com", city: "Al-Rimal, Gaza", date: "May 18, 2026" },
    { id: 2, name: "Creative Space", desc: "Think. Create. Inspire.", owner: "Sara Ali", email: "sara@email.com", city: "Gaza City", date: "May 17, 2026" }
];

let activeWorkspaces = [
    { id: 101, name: "Work Oasis", desc: "Spacious & comfortable", img: "https://picsum.photos/100?random=11", ownerName: "Lina Hamed", ownerEmail: "lina@email.com", city: "Al-Maghazi, Gaza", indicators: ["High Internet", "24/7 Electricity"] },
    { id: 102, name: "Study Corner", desc: "Perfect for students", img: "https://picsum.photos/100?random=12", ownerName: "Yousef Baraka", ownerEmail: "yousef@email.com", city: "Gaza City", indicators: ["Medium Internet", "Solar Power"] }
];

let reviewsData = [
    { id: 201, userName: "Omar Al-Masri", userEmail: "omar@gmail.com", userImg: "https://i.pravatar.cc/100?img=68", workspaceName: "Focus Hub", workspaceLoc: "Al-Rimal, Gaza", workspaceImg: "https://picsum.photos/100?random=1", rating: "5.0", text: "Amazing place and high speed internet!", date: "May 18, 2026" },
    { id: 202, userName: "Sara Abu Salim", userEmail: "sara.s@gmail.com", userImg: "https://i.pravatar.cc/100?img=47", workspaceName: "Work Oasis", workspaceLoc: "Al-Maghazi, Gaza", workspaceImg: "https://picsum.photos/100?random=2", rating: "4.0", text: "Great space but a bit noisy.", date: "May 15, 2026" }
];


function renderPendingWorkspaces() {
    const tbody = document.getElementById("pendingTableBody");
    if (!tbody) return;

    let html = "";
    pendingWorkspaces.forEach(w => {
        html += `
      <tr>
        <td>
          <div class="workspace-meta">
            <img src="https://picsum.photos/100?random=${w.id}" alt="">
            <div><h4>${w.name}</h4><p>${w.desc}</p></div>
          </div>
        </td>
        <td><div class="user-profile"><div><div class="name">${w.owner}</div><div class="email">${w.email}</div></div></div></td>
        <td>${w.city}</td>
        <td>${w.date}</td>
        <td><span class="status-pending">• PENDING</span></td>
        <td>
          <div class="actions-cluster">
            <button class="btn view-btn" onclick="viewItem(${w.id})"><i class="fa-regular fa-eye"></i> View</button>
            <button class="btn approve-btn" onclick="handleAction(this, ${w.id}, 'approve')"><i class="fa-solid fa-check"></i> Approve</button>
            <button class="btn reject-btn" onclick="handleAction(this, ${w.id}, 'reject')"><i class="fa-solid fa-xmark"></i> Reject</button>
          </div>
        </td>
      </tr>
    `;
    });
    tbody.innerHTML = html || `<tr><td colspan="6" style="text-align:center;color:#999;padding:20px;">No pending requests.</td></tr>`;
}

function renderActiveWorkspaces() {
    const tbody = document.getElementById("workspacesTableBody");
    const countEl = document.getElementById("totalCount");
    if (!tbody) return;

    if (countEl) countEl.innerText = activeWorkspaces.length;

    let html = "";
    activeWorkspaces.forEach(w => {
        let tags = w.indicators.map(t => `<span class="feature-tag">${t}</span>`).join('');
        html += `
      <tr>
        <td>
          <div class="workspace-meta">
            <img src="${w.img}" alt="">
            <div><div class="w-name">${w.name}</div><div class="w-desc">${w.desc}</div></div>
          </div>
        </td>
        <td><div class="user-profile"><div><div class="name">${w.ownerName}</div><div class="email">${w.ownerEmail}</div></div></div></td>
        <td>${w.city}</td>
        <td><div class="features-list">${tags}</div></td>
        <td><span class="status-badge">• ACTIVE</span></td>
        <td>
          <div class="actions-cluster">
            <button class="btn view-btn" onclick="viewItem(${w.id})"><i class="fa-regular fa-eye"></i> View</button>
            <button class="btn delete-btn" onclick="handleAction(this, ${w.id}, 'deleteWorkspace')"><i class="fa-regular fa-trash-can"></i> Delete</button>
          </div>
        </td>
      </tr>
    `;
    });
    tbody.innerHTML = html || `<tr><td colspan="6" style="text-align:center;color:#999;padding:20px;">No active workspaces found.</td></tr>`;
}

function renderManageReviews() {
    const tbody = document.getElementById("reviewsTableBody");
    if (!tbody) return;

    let html = "";
    reviewsData.forEach(r => {
        html += `
      <tr>
        <td>
          <div class="user-profile">
            <img src="${r.userImg}" alt="">
            <div><div class="name">${r.userName}</div><div class="email">${r.userEmail}</div></div>
          </div>
        </td>
        <td>
          <div class="workspace-meta">
            <img src="${r.workspaceImg}" alt="">
            <div><div class="w-name">${r.workspaceName}</div><div class="w-loc">${r.workspaceLoc}</div></div>
          </div>
        </td>
        <td><div class="rating-container"><div class="stars"><i class="fa-solid fa-star"></i></div><span class="rating-num">${r.rating}</span></div></td>
        <td><div class="review-text" title="${r.text}">${r.text}</div></td>
        <td>${r.date}</td>
        <td>
          <div class="actions-cluster">
            <button class="btn view-btn" onclick="viewItem(${r.id})"><i class="fa-regular fa-eye"></i> View</button>
            <button class="btn delete-btn" onclick="handleAction(this, ${r.id}, 'deleteReview')"><i class="fa-regular fa-trash-can"></i> Delete</button>
          </div>
        </td>
      </tr>
    `;
    });
    tbody.innerHTML = html || `<tr><td colspan="6" style="text-align:center;color:#999;padding:20px;">No reviews found.</td></tr>`;
}

function handleAction(btn, id, type) {
    btn.disabled = true;
    const oldText = btn.innerHTML;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;

    setTimeout(() => {
        if (type === 'approve' || type === 'reject') {
            pendingWorkspaces = pendingWorkspaces.filter(x => x.id !== id);
            renderPendingWorkspaces();
        } else if (type === 'deleteWorkspace') {
            activeWorkspaces = activeWorkspaces.filter(x => x.id !== id);
            renderActiveWorkspaces();
        } else if (type === 'deleteReview') {
            reviewsData = reviewsData.filter(x => x.id !== id);
            renderManageReviews();
        }
        alert("Operation completed successfully!");
    }, 400);
}

function viewItem(id) {
    alert("Viewing details for ID: " + id);
}

document.addEventListener("DOMContentLoaded", () => {
    renderPendingWorkspaces();
    renderActiveWorkspaces();
    renderManageReviews();
});