/* js/admin.js */

/* ================= WORKSPACES ================= */

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

/* ================= RENDER PENDING WORKSPACES ================= */

function renderActiveWorkspaces() {

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

                        <div class="w-name">
                            ${w.name}
                        </div>

                        <div class="w-desc">
                            ${w.desc}
                        </div>

                    </div>

                </div>

            </td>

            <td>

                <div class="user-profile">

                    <img src="${w.ownerImg}" class="u-img">

                    <div>

                        <div class="name">
                            ${w.ownerName}
                        </div>

                        <div class="email">
                            ${w.ownerEmail}
                        </div>

                    </div>

                </div>

            </td>

            <td>

                <div class="city">

                    <i class="fa-solid fa-location-dot"></i>

                    ${w.city.replace(",", ",<br>")}

                </div>

            </td>

            <td>

                <div class="date">
                    ${w.createdAt}
                </div>

                <div class="time">
                    ${w.createTime}
                </div>

            </td>

            <td>

                <span class="status-badge status-pending">

                    <i class="fa-solid fa-circle"></i>

                    PENDING

                </span>

            </td>

            <td>

                <div class="actions-cluster">

                    <button class="btn view-btn">
                        <i class="fa-regular fa-eye"></i>
                        View
                    </button>

                    <button class="btn approve-btn">
                        <i class="fa-solid fa-check"></i>
                        Approve
                    </button>

                    <button class="btn reject-btn">
                        <i class="fa-solid fa-xmark"></i>
                        Reject
                    </button>

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
        review: "Amazing place!...",

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
        review: "Great space and good...",

        date: "May 9, 2024",
        time: "04:20 PM"
    },

    {
        id: 3,
        userName: "Yousef Baraka",
        userEmail: "yousef@gmail.com",
        userImg: "https://i.pravatar.cc/100?img=33",

        workspace: "Creative Space",
        workspaceImg: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200",

        city: "Gaza City",

        rating: 4,
        review: "Very nice coworking...",

        date: "May 8, 2024",
        time: "09:45 AM"
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

/* ================= RENDER REVIEWS ================= */

function renderReviews() {

    const tbody = document.getElementById("reviewsTableBody");

    if (!tbody) return;

    let html = '';

    reviews.forEach(review => {

        html += `
        <tr>

            <td>

                <div class="user-profile">

                    <img src="${review.userImg}" class="u-img">

                    <div>

                        <div class="name">
                            ${review.userName}
                        </div>

                        <div class="email">
                            ${review.userEmail}
                        </div>

                    </div>

                </div>

            </td>

            <td>

                <div class="workspace-meta">

                    <img src="${review.workspaceImg}" class="w-img">

                    <div>

                        <div class="w-name">
                            ${review.workspace}
                        </div>

                        <div class="city">
                            <i class="fa-solid fa-location-dot"></i>
                            ${review.city}
                        </div>

                    </div>

                </div>

            </td>

            <td>

                <div class="rating-box">

                    <div class="stars">
                        ${generateStars(review.rating)}
                    </div>

                    <div class="rating-number">
                        ${review.rating}
                    </div>

                </div>

            </td>

            <td>

                <div class="review-text">
                    ${review.review}
                </div>

            </td>

            <td>

                <div class="date">
                    ${review.date}
                </div>

                <div class="time">
                    ${review.time}
                </div>

            </td>

            <td>

                <div class="actions-cluster">

                    <button class="btn view-btn">

                        <i class="fa-regular fa-eye"></i>
                        View

                    </button>

                    <button class="btn delete-btn">

                        <i class="fa-regular fa-trash-can"></i>
                        Delete

                    </button>

                </div>

            </td>

        </tr>
        `;
    });

    tbody.innerHTML = html;
}

/* ================= LOAD ================= */

document.addEventListener("DOMContentLoaded", () => {

    renderActiveWorkspaces();
    renderReviews();

});