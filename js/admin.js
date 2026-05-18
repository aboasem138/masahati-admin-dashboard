/* ================= WORKSPACES DATA ================= */

let activeWorkspaces = [

    {
        id: 1,
        name: "Focus Hub",
        desc: "Modern & quiet space",
        img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=200",
        ownerName: "Ahmad Owner",
        ownerEmail: "ahmad.owner@email.com",
        ownerImg: "https://i.pravatar.cc/100?img=11",
        city: "Al-Rimal, Gaza",
        status: "Pending",
        createdAt: "May 10, 2024",
        createTime: "10:30 AM"
    },

    {
        id: 2,
        name: "Creative Space",
        desc: "Think. Create. Inspire.",
        img: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=200",
        ownerName: "Sara Ali",
        ownerEmail: "sara.ali@email.com",
        ownerImg: "https://i.pravatar.cc/100?img=20",
        city: "Gaza City",
        status: "Pending",
        createdAt: "May 9, 2024",
        createTime: "3:45 PM"
    },

    {
        id: 3,
        name: "The Desk",
        desc: "Cozy and productive",
        img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=200",
        ownerName: "Omar Hassan",
        ownerEmail: "omar.hassan@email.com",
        ownerImg: "https://i.pravatar.cc/100?img=33",
        city: "Al-Nuseirat, Gaza",
        status: "Pending",
        createdAt: "May 9, 2024",
        createTime: "11:20 AM"
    },

    {
        id: 4,
        name: "Work Oasis",
        desc: "Spacious & comfortable",
        img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200",
        ownerName: "Lina Hamed",
        ownerEmail: "lina.hamed@email.com",
        ownerImg: "https://i.pravatar.cc/100?img=44",
        city: "Al-Maghazi, Gaza",
        status: "Pending",
        createdAt: "May 8, 2024",
        createTime: "9:15 PM"
    },

    {
        id: 5,
        name: "Study Corner",
        desc: "Perfect for students",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200",
        ownerName: "Yousef Baraka",
        ownerEmail: "yousef.baraka@email.com",
        ownerImg: "https://i.pravatar.cc/100?img=55",
        city: "Gaza City",
        status: "Pending",
        createdAt: "May 8, 2024",
        createTime: "2:10 PM"
    }
];

/* ================= WORKSPACES RENDER (MANAGE PAGE) ================= */

function renderManageWorkspaces() {

    const tbody = document.getElementById("workspacesTableBody");

    if (!tbody) return;

    let html = "";

    activeWorkspaces.forEach(w => {

        html += `
        <tr>

            <td>
                <div class="workspace-meta">
                    <img src="${w.img}" class="w-img">
                    <div>
                        <div class="w-name">${w.name}</div>
                        <div class="w-desc">${w.desc}</div>
                    </div>
                </div>
            </td>

            <td>
                <div class="user-profile">
                    <img src="${w.ownerImg}" class="u-img">
                    <div>
                        <div class="name">${w.ownerName}</div>
                        <div class="email">${w.ownerEmail}</div>
                    </div>
                </div>
            </td>

            <td>
                <div class="city">
                    <i class="fa-solid fa-location-dot"></i>
                    ${w.city}
                </div>
            </td>

            <td>
                <span class="status-badge status-pending">
                    <i class="fa-solid fa-circle"></i>
                    ${w.status}
                </span>
            </td>

            <td>
                <div class="date">${w.createdAt}</div>
                <div class="time">${w.createTime}</div>
            </td>

            
            <td>
                <div class="actions-cluster">
                    <i class="fa-solid fa-eye"></i>
                    <button class="btn view-btn">View</button>
                    <i class="fa-solid fa-trash"></i>
                    <button class="btn delete-btn">Delete</button>
                </div>
            </td>
            

        </tr>
        `;
    });

    tbody.innerHTML = html;
}

/* ================= PENDING (OPTIONAL PAGE) ================= */

function renderPendingWorkspaces() {

    const tbody = document.getElementById("pendingTableBody");

    if (!tbody) return;

    let html = "";

    activeWorkspaces.forEach(w => {

        html += `
        <tr>

            <td>
                <div class="workspace-meta">
                    <img src="${w.img}" class="w-img">
                    <div>
                        <div class="w-name">${w.name}</div>
                        <div class="w-desc">${w.desc}</div>
                    </div>
                </div>
            </td>

            <td>
                <div class="user-profile">
                    <img src="${w.ownerImg}" class="u-img">
                    <div>
                        <div class="name">${w.ownerName}</div>
                        <div class="email">${w.ownerEmail}</div>
                    </div>
                </div>
            </td>

            <td>
                <div class="city">
                    <i class="fa-solid fa-location-dot"></i>
                    ${w.city}
                </div>
            </td>

            <td>
                <div class="date">${w.createdAt}</div>
                <div class="time">${w.createTime}</div>
            </td>

            <td>
                <span class="status-badge status-pending">
                    <i class="fa-solid fa-circle"></i>
                    PENDING
                </span>
            </td>

            <td>
                <div class="actions-cluster">
                    <i class="fa-solid fa-eye"></i>
                    <button class="btn view-btn">View</button>
                    <i class="fa-solid fa-check icon-accept"></i>
                    <button class="btn approve-btn">Approve</button>
                    <i class="fa-solid fa-xmark icon-reject"></i>
                    <button class="btn reject-btn">Reject</button>
                </div>
            </td>

        </tr>
        `;
    });

    tbody.innerHTML = html;
}

/* ================= REVIEWS ================= */

const reviews = [

    {
        id: 1,
        userName: "Omar Al-Masri",
        userEmail: "omer@gmail.com",
        userImg: "https://i.pravatar.cc/100?img=12",
        workspace: "Focus Hub",
        workspaceImg: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=200",
        city: "Al-Rimal, Gaza",
        rating: 5,
        review: "Amazing place!",
        date: "May 10, 2024",
        time: "10:30 AM"
    },

    {
        id: 2,
        userName: "Sara Abu Salim",
        userEmail: "sara@gmail.com",
        userImg: "https://i.pravatar.cc/100?img=20",
        workspace: "The Desk",
        workspaceImg: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=200",
        city: "Al-Nuseirat, Gaza",
        rating: 4.5,
        review: "Great space!",
        date: "May 9, 2024",
        time: "04:20 PM"
    }
];

/* ================= STARS ================= */

function generateStars(rating) {

    let stars = '';

    for (let i = 1; i <= 5; i++) {

        if (i <= Math.floor(rating)) {
            stars += `<i class="fa-solid fa-star"></i>`;
        } else if (rating % 1 !== 0 && i === Math.ceil(rating)) {
            stars += `<i class="fa-solid fa-star-half-stroke"></i>`;
        } else {
            stars += `<i class="fa-regular fa-star"></i>`;
        }
    }

    return stars;
}

/* ================= REVIEWS RENDER ================= */

function renderReviews() {

    const tbody = document.getElementById("reviewsTableBody");

    if (!tbody) return;

    let html = "";

    reviews.forEach(r => {

        html += `
        <tr>

            <td>
                <div class="user-profile">
                    <img src="${r.userImg}" class="u-img">
                    <div>
                        <div class="name">${r.userName}</div>
                        <div class="email">${r.userEmail}</div>
                    </div>
                </div>
            </td>

            <td>
                <div class="workspace-meta">
                    <img src="${r.workspaceImg}" class="w-img">
                    <div>
                        <div class="w-name">${r.workspace}</div>
                        <div class="city">
                            <i class="fa-solid fa-location-dot"></i>
                            ${r.city}
                        </div>
                    </div>
                </div>
            </td>

            <td>
                <div class="rating-box">
                    <div class="stars">${generateStars(r.rating)}</div>
                    <div class="rating-number">${r.rating}</div>
                </div>
            </td>

            <td>
                <div class="review-text">${r.review}</div>
            </td>

            <td>
                <div class="date">${r.date}</div>
                <div class="time">${r.time}</div>
            </td>

            <td>
                <div class="actions-cluster">
                    <i class="fa-solid fa-eye"></i>
                    <button class="btn view-btn">View</button>
                    <i class="fa-solid fa-trash"></i>
                    <button class="btn delete-btn">Delete</button>
                </div>
            </td>

        </tr>
        `;
    });

    tbody.innerHTML = html;
}

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {

    renderManageWorkspaces();
    renderPendingWorkspaces();
    renderReviews();

});