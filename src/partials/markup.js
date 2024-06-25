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

    const tel = phone.replace( /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, 
        '$1-$2-$3-$4-$5' )
    
    const cr_at = created_at.split('.')[0]
    const up_at = updated_at.split('.')[0]

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
                            <li id="birthdayProfile"><span class="labelProfile">Birthday:</span> <span class="valueProfile">${birthday}</span></li>
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
    const {
        name,
        surname,
        email,
        phone,
        birthday,
        created_at,
        updated_at
    } = data;

    const tel = phone.replace( /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, 
        '$1-$2-$3-$4-$5' )
    
    const cr_at = created_at.split('.')[0]
    const up_at = updated_at.split('.')[0]
    
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
            </div>`
}

export {
    markupModalLogin,
    markupModalReg,
    markupModalEvent,
    murkupContacts,
    marcupCard,
    markupUpdateProfile
};
