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
                Contact info: <a href="#">Detail here</a>
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
    return `<div class="profileContact">
                <div class="imgProfile">
                    <img src="https://cdn.season-of-mist.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/V/a/Various-Artists-In-Mordor-Where-The-Shadows-Are-Homage-To-Summoning-3CD-BOX-56809-1-1487319213.jpg" alt="">
                </div>
                <div class="profileDetails">
                    <button class="profileButton">
                        <svg class="cancelIcon" xmlns="http://www.w3.org/2000/svg" style="position: relative; float: right" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="butt" stroke-linejoin="bevel"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                    </button>
                    <h3 class="profileTitle">${name} ${surname}</h3>
                    <p class="profileInfo">
                        <ul class="profileList">
                            <li>ID: ${id}</li>
                            <li>Email: ${email}</li>
                            <li>Phone: ${phone}</li>
                            <li>Birthday: ${birthday}</li>
                            <li>Created: ${created_at}</li>
                            <li>Updated: ${updated_at}</li>
                        </ul>
                    </p>
                </div>
            </div>`;
}

export {
    markupModalLogin,
    markupModalReg,
    markupModalEvent,
    murkupContacts,
    marcupCard,
};
