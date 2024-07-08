
function markupNavbarItems() {
    return `
        <li class="jsMenu">
            <form class="form-menu">
                <input id="form-search-input" class="form-input" autocomplete="off" placeholder="Search">
                <select id="form-search-select" type="text" placeholder="">
                    <option value="1">All</option>
                    <option value="2">Name</option>
                    <option value="3">Surname</option>
                    <option value="4">Email</option>
                    <option value="5">Phone</option>
                    <option value="6">Birthday</option>
                </select>
                <button type="submit" class="js-button-search">
                <svg style="height: 23px; display: block; float: left; margin-right: 7px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Magnifying-Glass--Streamline-Sharp-Remix" height="24" width="24"><desc>Magnifying Glass Streamline Icon: https://streamlinehq.com</desc><g id="Remix/Interface Essential/magnifying-glass--glass-search-magnifying"><path id="Union" fill="#ffffff" fill-rule="evenodd" d="M11 0C8.08262 0 5.28473 1.15893 3.22183 3.22183S0 8.08262 0 11c0 2.9174 1.15893 5.7153 3.22183 7.7782S8.08262 22 11 22c2.3275 0 4.579 -0.7377 6.4419 -2.0835L21.5254 24l2.4749 -2.4748 -4.0836 -4.0836C21.2624 15.5788 22 13.3274 22 11c0 -2.91738 -1.1589 -5.71527 -3.2218 -7.77817S13.9174 0 11 0ZM4.98959 4.98959C6.58365 3.39553 8.74566 2.5 11 2.5c2.2543 0 4.4163 0.89553 6.0104 2.48959C18.6045 6.58365 19.5 8.74566 19.5 11c0 2.2543 -0.8955 4.4163 -2.4896 6.0104C15.4163 18.6045 13.2543 19.5 11 19.5c-2.25434 0 -4.41635 -0.8955 -6.01041 -2.4896C3.39553 15.4163 2.5 13.2543 2.5 11c0 -2.25434 0.89553 -4.41635 2.48959 -6.01041Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
                    Go!
                </button>
            </form>
        </li>
        <li class="jsAdd">
            <a id="aAdd" href="/add_contact">
            <button>
            <svg style="height: 23px; display: block; float: left; margin-right: 7px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                Add
            </button>
            </a>
        </li>
        <li class="jsChat">
            <a id="aChat" href="/chat">
            <button>
            <svg style="height: 23px; display: block; float: left; margin-right: 7px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Chat
            </button>
            </a>
        </li>
    `;
}

const markupModalLogin = `<div class="modal-content login-form">
                <span class="close" id="loginClose">&times;</span>
                <h2 class="modal-title">Login</h2>
                
                <form class="form">
                    <label for="loginEmail">Email:</label>
                    <input type="email" id="loginEmail" name="email" required placeholder="Enter @mail">
                    <svg xmlns="http://www.w3.org/2000/svg" id="emailLogSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                    <label for="loginPassword">Password:</label>
                    <input type="password" id="loginPassword" name="password" required placeholder="Enter password">
                    <svg xmlns="http://www.w3.org/2000/svg" id="passwdLogSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <button type="submit">Login</button>
                </form>
            </div>`;

const markupModalReg = `<div class="modal-content reg-form">
                <span class="close" id="registerClose">&times;</span>
                <h2 class="modal-title">Signup</h2>
                <form id="fileImg" enctype="multipart/form-data" class="form">
                    <label for="registerName">Name:</label>
                    <input type="username" id="registerName" name="username" required placeholder="Enter name">
                    <svg xmlns="http://www.w3.org/2000/svg" id="nameRegSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
                    <label for="registerEmail">Email:</label>
                    <input type="email" id="registerEmail" name="email" required placeholder="Enter @mail">
                    <svg xmlns="http://www.w3.org/2000/svg" id="emailRegSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                    <label for="registerPassword">Password:</label>
                    <input type="password" id="registerPassword" name="password" required placeholder="Enter password">
                    <svg xmlns="http://www.w3.org/2000/svg" id="passwdRegSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <div class="checkbox-container">
                        <label for="avatarImg">Choose image (optional):</label>
                        <input type="checkbox" id="idCheckBox">
                    </div>
                    <label>
                    <input disabled type="file" name="avatar" id="inputImg" accept="image/png">
                    </label>
                    <button class="reg-btn" type="submit">Signup</button>
                </form>
            </div>`;

function markupModalEvent(name, text, color, addtext = '') {
    return `<div class="eSubModal">
                <h2 class="eTitle" style="color: ${color};">${name}</h2>
                    <p class="eText" style="color: ${color};">
                        ${text}
                    </p>
                    <p class="eText" style="color: ${color};">
                        ${addtext}
                    </p>
                    <button class="eBtn">OK</button>
            </div>`;
}

function murkupContacts(contacts) {
    return contacts
        .map(
            ({ name, surname }) =>
                `<li class="cardContact">
            <img class="imgContacts" src="https://cdn.season-of-mist.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/V/a/Various-Artists-In-Mordor-Where-The-Shadows-Are-Homage-To-Summoning-3CD-BOX-56809-1-1487319213.jpg" alt="">
            <h2 class="cardTitle">
                ${name} ${surname}
            </h2>
            <p class="cardInfo">
                Contact info: <a class="linkProfile" href="contact_info">Detail here</a>
            </p>
        </li>`
        )
        .join('');
}

function marcupCard(card) {
    const {
        id,
        name,
        surname,
        email,
        phone,
        birthday,
        created_at,
        updated_at,
    } = card;

    const tel = phone.replace(
        /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
        '$1-$2-$3-$4-$5'
    );

    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const bd = new Date(birthday).toLocaleDateString('UTC');
    const cr_at = new Date(created_at).toLocaleDateString('UTC', options);
    const up_at = new Date(updated_at).toLocaleDateString('UTC', options);

    return `<div class="profileContact">
                <div class="imgProfile">
                    <img src="https://cdn.season-of-mist.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/V/a/Various-Artists-In-Mordor-Where-The-Shadows-Are-Homage-To-Summoning-3CD-BOX-56809-1-1487319213.jpg" alt="" loading="lazy">
                </div>
                <div class="profileDetails">
                    <button class="cancelButton">
                        <svg class="cancelIcon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3.5" stroke-linecap="butt" stroke-linejoin="bevel"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                    </button>
                    <h3 class="profileTitle">${name} ${surname}</h3>
                    <p class="profileInfo">
                        <ul class="profileList">
                            <li id="idProfile"><span class="labelProfile">ID:</span> <span class="valueProfile">${id}</span></li>
                            <li id="emailProfile"><span class="labelProfile">Email:</span> <span class="valueProfile">${email}</span></li>
                            <li id="phoneProfile"><span class="labelProfile">Phone:</span> <span class="valueProfile">${tel}</span></li>
                            <li id="birthdayProfile"><span class="labelProfile">Birthday:</span> <span class="valueProfile">${bd}</span></li>
                            <li id="createdProfile"><span class="labelProfile">Created:</span> <span class="valueProfile">${cr_at}</span></li>
                            <li id="updatedProfile"><span class="labelProfile">Updated:</span> <span class="valueProfile">${up_at}</span></li>
                            <div class="profileBtns">
                                <button>Update</button>
                                <button>Delete</button>
                                <button>Message</button>
                            </div>
                        </ul>
                    </p>
                </div>
            </div>`;
}

function markupUpdateProfile(data) {
    const { name, surname, email, phone, birthday, created_at, updated_at } =
        data;

    const tel = phone.replace(
        /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
        '$1-$2-$3-$4-$5'
    );

    const cr_at = created_at.split('.')[0];
    const up_at = updated_at.split('.')[0];

    return `<div class="profile-content">
                <span class="close" id="registerClose">&times;</span>
                <h2 class="profile-title">Update Contact</h2>
                <form class="contact-form">
                    <label for="contactName">Name:</label>
                    <input type="name" id="contactName" name="name" required value=${name}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactNameSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <label for="contactSurname">Surname:</label>
                    <input type="surname" id="contactSurname" name="surname" required value=${surname}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactSurnameSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <label for="contactEmail">Email:</label>
                    <input type="email" id="contactEmail" name="email" required value=${email}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactMailSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                    <label for="contactPhone">Phone:</label>
                    <input type="tel" id="contactPhone" name="phone" required value=${tel} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder="123-45-678-90-00">
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactPhoneSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <label for="contactBirthday">Birthday:</label>
                    <input type="date" id="contactBirthday" name="birthday" required value=${birthday}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.9 -0.9 28.8 28.8" id="Cake--Streamline-Sharp" height="28.8" width="28.8"><desc>Cake Streamline Icon: https://streamlinehq.com</desc><g id="cake--candle-birthday-event-special-sweet-cake-bake"><path id="Rectangle 33" stroke="#000000" d="M1.1930625 10.730925000000001H25.8069375V25.49925H1.1930625Z" stroke-width="1.8"></path><path id="Ellipse 595" stroke="#000000" d="M1.1930625 14.423062499999999C1.1930625 17.5811625 4.6118250000000005 19.554975000000002 7.3468125 17.975925C8.616150000000001 17.2431 9.398137499999999 15.8887125 9.398137499999999 14.423062499999999C9.403312499999998 17.5807125 12.8248875 19.5485625 15.5568375 17.9652375C16.820549999999997 17.23275 17.5995 15.88365 17.6018625 14.423062499999999C17.6018625 17.5811625 21.0207375 19.554975000000002 23.755724999999998 17.975925C25.025062499999997 17.2431 25.8069375 15.8887125 25.8069375 14.423062499999999" stroke-width="1.8"></path><path id="Vector" stroke="#000000" stroke-linecap="round" d="M5.814337500000001 6.7532625C7.0068375 6.7532625 7.9741124999999995 5.785987499999999 7.9741124999999995 4.5934875L5.814337500000001 1.5006375L3.65445 4.5934875C3.65445 5.787224999999999 4.621725 6.7532625 5.814337500000001 6.7532625Z" stroke-width="1.8"></path><path id="Vector_2" stroke="#000000" stroke-linecap="round" d="M13.5 6.7532625C14.6925 6.7532625 15.6598875 5.785987499999999 15.6598875 4.5934875L13.5 1.5006375L11.3401125 4.5934875C11.3401125 5.787224999999999 12.3075 6.7532625 13.5 6.7532625Z" stroke-width="1.8"></path><path id="Vector_3" stroke="#000000" stroke-linecap="round" d="M21.1980375 6.7532625C22.3905375 6.7532625 23.357924999999998 5.785987499999999 23.357924999999998 4.5934875L21.1980375 1.5006375L19.038149999999998 4.5934875C19.038149999999998 5.787224999999999 20.005425 6.7532625 21.1980375 6.7532625Z" stroke-width="1.8"></path></g></svg>
                    <label for="createdAt">Created at:</label>
                    <input disabled type="datetime-local" id="createdAt" name="created" required value=${cr_at}>
                    <label for="updatedAt">Updated at:</label>
                    <input disabled type="datetime-local" id="createdAt" name="updated" required value=${up_at}>
                    </label>
                    <button class="upd-btn" type="submit">Save</button>
                </form>
            </div>`;
}

function markupContact() {
    return `
        <div class="profile-content">
                <span class="close" id="registerClose">&times;</span>
                <h2 class="profile-title">Add Contact</h2>
                <form class="contact-form">
                    <label for="contactName">Name:</label>
                    <input type="name" id="contactName" name="name" required placeholder="Enter name">
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactNameSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <label for="contactSurname">Surname:</label>
                    <input type="surname" id="contactSurname" name="surname" required placeholder="Enter surname">
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactSurnameSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <label for="contactEmail">Email:</label>
                    <input type="email" id="contactEmail" name="email" required placeholder="Enter @mail">
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactMailSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                    <label for="contactPhone">Phone:</label>
                    <input type="tel" id="contactPhone" name="phone" required pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder="123-45-678-90-00">
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactPhoneSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <label for="contactBirthday">Birthday:</label>
                    <input type="date" id="contactBirthday" name="birthday" required>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.9 -0.9 28.8 28.8" id="Cake--Streamline-Sharp" height="28.8" width="28.8"><desc>Cake Streamline Icon: https://streamlinehq.com</desc><g id="cake--candle-birthday-event-special-sweet-cake-bake"><path id="Rectangle 33" stroke="#000000" d="M1.1930625 10.730925000000001H25.8069375V25.49925H1.1930625Z" stroke-width="1.8"></path><path id="Ellipse 595" stroke="#000000" d="M1.1930625 14.423062499999999C1.1930625 17.5811625 4.6118250000000005 19.554975000000002 7.3468125 17.975925C8.616150000000001 17.2431 9.398137499999999 15.8887125 9.398137499999999 14.423062499999999C9.403312499999998 17.5807125 12.8248875 19.5485625 15.5568375 17.9652375C16.820549999999997 17.23275 17.5995 15.88365 17.6018625 14.423062499999999C17.6018625 17.5811625 21.0207375 19.554975000000002 23.755724999999998 17.975925C25.025062499999997 17.2431 25.8069375 15.8887125 25.8069375 14.423062499999999" stroke-width="1.8"></path><path id="Vector" stroke="#000000" stroke-linecap="round" d="M5.814337500000001 6.7532625C7.0068375 6.7532625 7.9741124999999995 5.785987499999999 7.9741124999999995 4.5934875L5.814337500000001 1.5006375L3.65445 4.5934875C3.65445 5.787224999999999 4.621725 6.7532625 5.814337500000001 6.7532625Z" stroke-width="1.8"></path><path id="Vector_2" stroke="#000000" stroke-linecap="round" d="M13.5 6.7532625C14.6925 6.7532625 15.6598875 5.785987499999999 15.6598875 4.5934875L13.5 1.5006375L11.3401125 4.5934875C11.3401125 5.787224999999999 12.3075 6.7532625 13.5 6.7532625Z" stroke-width="1.8"></path><path id="Vector_3" stroke="#000000" stroke-linecap="round" d="M21.1980375 6.7532625C22.3905375 6.7532625 23.357924999999998 5.785987499999999 23.357924999999998 4.5934875L21.1980375 1.5006375L19.038149999999998 4.5934875C19.038149999999998 5.787224999999999 20.005425 6.7532625 21.1980375 6.7532625Z" stroke-width="1.8"></path></g></svg>
                    </label>
                    <button class="upd-btn" type="submit">Submit</button>
                </form>
            </div>`;
}

function markupUser(data) {
    const { avatar, username, email, updated_at, created_at } = data

    // const cr_at = new Date(created_at).toLocaleDateString('UTC');
    // const up_at = new Date(updated_at).toLocaleDateString('UTC');
    const name = username.charAt(0).toUpperCase() + username.slice(1)
    return  `
                <li>
                    <div id="menu-id">
                        <div class="menuAvatar">
                            <img id="menu-avatar" src="${avatar}" alt="" loading="lazy">
                        </div>
                        <div class="userProfieInfo">
                            <p id="userProfileName">${name}</p>
                            <p id="userProfileEmail">${email}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <a class="js-menu-items" href="/inbox">
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" style="margin-bottom: -10px" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Messages
                        </button>
                    </a>
                </li>
                <li>
                    <a class="js-menu-items settings-item" href="/settings">
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" style="margin-bottom: -10px" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        Settings
                        </button>
                    </a>
                </li>
                <li>
                    <a class="js-menu-items logout-item" href="/">
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" style="margin-bottom: -10px" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 17l5-5-5-5M19.8 12H9M13 22a10 10 0 1 1 0-20"/></svg>
                        Logout
                        </button>
                    </a>
                </li>
            `
}

function markupChat() {
    return `
        <div class="cont">
            <h1>Websocket Chat</h1>
            <div id="chat">
                <ul id="messages"></ul>
            </div>
            <div id="username-form">
                <button id="open-modal">Join</button>
            </div>
            <div id="message-input" style="display: none;">
                <input type="text" id="message" placeholder="Type your message">
                <button id="send">Send</button>
            </div>
        </div>
    
        <!-- Username Modal -->
        <div id="usernameModal">
            <div class="modal-con">
                <h2>Enter Your Username</h2>
                <input type="text" id="usernameInput" placeholder="Your username">
                <div>
                    <button type="button" id="close-modal">Close</button>
                    <button id="join">Join</button>
                </div>
            </div>
        </div>
    `
}

export {
    markupModalLogin,
    markupModalReg,
    markupModalEvent,
    murkupContacts,
    marcupCard,
    markupUpdateProfile,
    markupNavbarItems,
    markupContact,
    markupUser,
    markupChat
};
