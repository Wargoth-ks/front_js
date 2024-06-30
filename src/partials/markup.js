const markupModalLogin = `<div class="modal-content login-form">
                <span class="close" id="loginClose">&times;</span>
                <h2 class="modal-title">Login</h2>
                
                <form class="form">
                    <label for="loginEmail">Email:</label>
                    <input type="email" id="loginEmail" name="email" required>
                    <label for="loginPassword">Password:</label>
                    <input type="password" id="loginPassword" name="password" required>
                    <button type="submit">Login</button>
                </form>
            </div>`;

const markupModalReg = `<div class="modal-content reg-form">
                <span class="close" id="registerClose">&times;</span>
                <h2 class="modal-title">Signup</h2>
                <form id="fileImg" enctype="multipart/form-data" class="form">
                    <label for="registerName">Name:</label>
                    <input type="username" id="registerName" name="username" required>
                    <label for="registerEmail">Email:</label>
                    <input type="email" id="registerEmail" name="email" required>
                    <label for="registerPassword">Password:</label>
                    <input type="password" id="registerPassword" name="password" required>
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
                    <img src="https://cdn.season-of-mist.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/V/a/Various-Artists-In-Mordor-Where-The-Shadows-Are-Homage-To-Summoning-3CD-BOX-56809-1-1487319213.jpg" alt="">
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
                    <label for="contactSurname">Surname:</label>
                    <input type="surname" id="contactSurname" name="surname" required value=${surname}>
                    <label for="contactEmail">Email:</label>
                    <input type="email" id="contactEmail" name="email" required value=${email}>
                    <label for="contactPhone">Phone:</label>
                    <input type="tel" id="contactPhone" name="phone" required value=${tel} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder="123-45-678-90-00">
                    <label for="contactBirthday">Birthday:</label>
                    <input type="date" id="contactBirthday" name="birthday" required value=${birthday}>
                    <label for="createdAt">Created at:</label>
                    <input disabled type="datetime-local" id="createdAt" name="created" required value=${cr_at}>
                    <label for="updatedAt">Updated at:</label>
                    <input disabled type="datetime-local" id="createdAt" name="updated" required value=${up_at}>
                    </label>
                    <button class="upd-btn" type="submit">Save</button>
                </form>
            </div>`;
}

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

function markupContact() {
    return `
        <div class="profile-content">
                <span class="close" id="registerClose">&times;</span>
                <h2 class="profile-title">Add Contact</h2>
                <form class="contact-form">
                    <label for="contactName">Name:</label>
                    <input type="name" id="contactName" name="name" required>
                    <label for="contactSurname">Surname:</label>
                    <input type="surname" id="contactSurname" name="surname" required>
                    <label for="contactEmail">Email:</label>
                    <input type="email" id="contactEmail" name="email" required>
                    <label for="contactPhone">Phone:</label>
                    <input type="tel" id="contactPhone" name="phone" required pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder="123-45-678-90-00">
                    <label for="contactBirthday">Birthday:</label>
                    <input type="date" id="contactBirthday" name="birthday" required>
                    </label>
                    <button class="upd-btn" type="submit">Submit</button>
                </form>
            </div>`
}

export {
    markupModalLogin,
    markupModalReg,
    markupModalEvent,
    murkupContacts,
    marcupCard,
    markupUpdateProfile,
    markupNavbarItems,
    markupContact
};
