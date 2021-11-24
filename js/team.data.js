/* ********************************************************** */
// Members Details Data Object
/* ********************************************************** */

// Lead Member Details
let leadMemberDetails = [
    {
        id: 1,
        name: 'Tống Nam Tuấn Vũ',
        avatar: '../assets/img/team/avatar_b.png',
        badges: `
                    <span class="red">GDSC Leader</span>
                `,
        cardBorderColor: 'red',

        socialGithubLink: '#',
        socialLinkedinLink: '#',
        socialTwitterLink: '#',
    },
];

// Core Members Details
let coreMemberDetails = [
    {
        id: 1,
        name: 'Nguyễn Quang Trường',
        avatar: '../assets/img/team/avatar_b.png',
        badges: `
                    <span class="yellow">Information Systems</span>
                    <span class="blue">Web</span>
                `,
        cardBorderColor: 'yellow',

        socialGithubLink: '#',
        socialLinkedinLink: '#',
        socialTwitterLink: '#',
    },
    {
        id: 2,
        name: 'Lê Nguyên Thuần Quốc',
        avatar: '../assets/img/team/avatar_b.png',
        badges: `
                    <span class="green">English Lead</span>
                `,
        cardBorderColor: 'blue',

        socialGithubLink: '#',
        socialLinkedinLink: '#',
        socialTwitterLink: '#',
    },
    {
        id: 3,
        name: 'Đặng Anh Khoa',
        avatar: '../assets/img/team/avatar_b.png',
        badges: `
                    <span class="yellow">Social Media Lead</span>
                `,
        cardBorderColor: 'green',

        socialGithubLink: '#',
        socialLinkedinLink: '#',
        socialTwitterLink: '#',
    },
    // {
    // id: 4,
    // name: 'Sample',
    // avatar: '../assets/img/team/avatar_b.png',
    // badges: `
    //             <span class="blue">Event Lead</span>
    //         `,
    // cardBorderColor: 'green',

    // socialGithubLink: '#',
    // socialLinkedinLink: '#',
    // socialTwitterLink: '#',
    // },
  
];

// Ex Core Members Details
let excoreMemberDetails = [
    {
        id: 1,
        name: 'Sample',
        avatar: '../assets/img/team/avatar_b.png',
        badges: `
                    <span class="green">Native Android</span>
                    <span class="yellow">Team</span>
                `,
        cardBorderColor: 'blue',

        socialGithubLink: '#',
        socialLinkedinLink: '#',
        socialTwitterLink: '#',
    },
    // {
    //     id: 2,
    //     name: 'Padmanabha Banerjee',
    //     avatar: '../assets/img/team/avatar_b.png',
    //     badges: `
    //                 <span class="yellow">AI</span>
    //                 <span class="green">ML</span>
    //                 <span class="red">Team</span>
    //             `,
    //     cardBorderColor: 'red',

    //     socialGithubLink: '#',
    //     socialLinkedinLink: '#',
    //     socialTwitterLink: '#',
    // },
  
];

/* ********************************************************** */
// Members Preview Mapping
/* ********************************************************** */

let leadMember = document.querySelector('#lead');
let coreMember = document.querySelector('#core');
let excoreMember = document.querySelector('#exCore');

// Lead Member
Object.values(leadMemberDetails).map((val) => {
    leadMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4 class="lg">${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialGithubLink}"><i class="bx bxl-github"></i></a>
                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>
                <a href="${val.socialTwitterLink}"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});

// Core Members
Object.values(coreMemberDetails).map((val) => {
    coreMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialGithubLink}"><i class="bx bxl-github"></i></a>
                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>
                <a href="${val.socialTwitterLink}"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});

// Ex Core Members
Object.values(excoreMemberDetails).map((val) => {
    excoreMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialGithubLink}"><i class="bx bxl-github"></i></a>
                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>
                <a href="${val.socialTwitterLink}"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});
