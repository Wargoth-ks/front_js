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
                    <input type="email" id="loginEmail" name="email" required placeholder="example@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24" id="Sign-At--Streamline-Plump" height="24" width="24"><desc>Sign At Streamline Icon: https://streamlinehq.com</desc><g id="sign-at--mail-email-at-sign-read-address"><path id="Union" fill="#000000" fill-rule="evenodd" d="M11.994835416666666 0.71875C5.871995833333334 0.71875 0.71875 5.474479166666667 0.71875 11.815866666666667 0.71875 17.466056249999998 4.887404166666666 22.28125 10.596435416666667 22.28125c1.29504375 0 2.20469375 -0.168475 2.7565979166666668 -0.5415541666666668 0.46924791666666665 -0.30173125 0.7100291666666667 -0.7259854166666666 0.7750520833333333 -1.18579375 0.06392083333333333 -0.45228541666666666 -0.04322083333333333 -0.9254145833333334 -0.23934375000000002 -1.3441104166666666 -0.13258541666666668 -0.28304375000000004 -0.4349875 -0.40896875000000005 -0.7130479166666667 -0.3700125 -0.78185625 0.10944166666666667 -1.5419104166666668 0.20139375 -2.3210833333333336 0.20139375 -4.103008333333333 0 -6.895778541666667 -3.5922645833333333 -6.895778541666667 -7.225306250000001 0 -4.139664583333333 3.6561327083333333 -7.878549375 8.036003541666668 -7.878549375 2.203879166666667 0 3.9641937499999997 0.69991875 5.1712625 1.823080625 1.2066375000000003 1.1227833333333332 1.875075 2.6816083333333336 1.875075 4.431045833333334 0 1.2405145833333335 -0.3762416666666667 2.3261624999999997 -0.9588125 2.97045 -0.28917708333333336 0.31984375 -0.6239229166666667 0.5258375 -0.98598125 0.5996770833333334 -0.31907708333333334 0.06502291666666667 -0.6764395833333333 0.031002083333333333 -1.0658104166666666 -0.1411625l0.6322125 -4.110339583333333c0.16210208333333334 -0.8595291666666667 -0.22616666666666665 -1.6986458333333334 -0.9129083333333333 -2.1972666666666667l-0.00186875 -0.0012937500000000002c-1.0979625 -0.7813291666666667 -2.3967916666666667 -1.1047666666666667 -3.7101875000000004 -1.1047666666666667 -3.2992541666666666 0 -5.682485416666667 2.5047 -5.682485416666667 5.767058333333334 0 1.3512979166666668 0.4669479166666667 2.5247770833333334 1.2871854166666667 3.3613541666666666 0.8207645833333334 0.8371041666666668 1.9814020833333337 1.3227395833333333 3.3411333333333335 1.3227395833333333 0.9085 0 1.8641500000000002 -0.17388958333333335 2.6850583333333335 -0.6361895833333334 0.8544020833333333 0.5171166666666667 1.8659229166666667 0.7489854166666666 2.84395 0.7489854166666666 1.9198291666666667 0 3.37251875 -0.7482666666666667 4.33995625 -1.9597916666666666C21.81454166666667 13.606225000000002 22.28125 11.963833333333334 22.28125 10.191443750000001 22.28125 4.438563958333334 17.2698375 0.71875 11.994835416666666 0.71875Zm-1.059725 9.530864583333333c0.30431875 -0.38563333333333333 0.6610583333333333 -0.56306875 1.0812395833333333 -0.56306875 0.26426041666666666 0 0.5286166666666666 0.028941666666666668 0.7366708333333334 0.12079791666666667l-0.29818541666666665 3.2518645833333335c-0.2377625 0.15275833333333333 -0.5174520833333334 0.231725 -0.8472625 0.231725 -0.405375 0 -0.6776375 -0.14758333333333334 -0.8543541666666666 -0.37020416666666667 -0.18289791666666666 -0.23043125 -0.2829479166666667 -0.5668541666666667 -0.2829479166666667 -0.9694979166666666 0 -0.7831979166666667 0.16660625 -1.3366833333333334 0.46225208333333334 -1.6984062500000001l0.0025875000000000004 -0.003210416666666667Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
                    <label for="loginPassword">Password:</label>
                    <input type="password" id="loginPassword" name="password" required placeholder="password">
                    <svg xmlns="http://www.w3.org/2000/svg" id="passwdLogSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <button type="submit">Login</button>
                </form>
            </div>`;

const markupModalReg = `<div class="modal-content reg-form">
                <span class="close" id="registerClose">&times;</span>
                <h2 class="modal-title">Signup</h2>
                <form id="fileImg" enctype="multipart/form-data" class="form">
                    <label for="registerName">Name:</label>
                    <input type="username" id="registerName" name="username" required placeholder="username">
                    <svg xmlns="http://www.w3.org/2000/svg" id="nameRegSvg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
                    <label for="registerEmail">Email:</label>
                    <input type="email" id="registerEmail" name="email" required placeholder="example@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" id="emailRegSvg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                    <label for="registerPassword">Password:</label>
                    <input type="password" id="registerPassword" name="password" required placeholder="password">
                    <svg xmlns="http://www.w3.org/2000/svg" id="passwdRegSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactNameSvg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <label for="contactSurname">Surname:</label>
                    <input type="surname" id="contactSurname" name="surname" required value=${surname}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 22 22" id="User-Large--Streamline-Font-Awesome" height="22" width="22"><desc>User Large Streamline Icon: https://streamlinehq.com</desc><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc.--><path d="M10.5 11.8125a5.90625 5.90625 0 1 0 0 -11.8125 5.90625 5.90625 0 1 0 0 11.8125zm-3.8841796875 1.3125C2.961328125 13.125 0 16.086328124999998 0 19.740820312500002c0 0.697265625 0.566015625 1.2591796874999999 1.2591796874999999 1.2591796874999999h18.481640625c0.697265625 0 1.2591796874999999 -0.566015625 1.2591796874999999 -1.2591796874999999 0 -3.6544921875 -2.961328125 -6.6158203125 -6.6158203125 -6.6158203125H6.6158203125z" stroke-width="1"></path></svg>
                    <label for="contactEmail">Email:</label>
                    <input type="email" id="contactEmail" name="email" required value=${email}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactMailSvg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                    <label for="contactPhone">Phone:</label>
                    <input type="tel" id="contactPhone" name="phone" required value=${tel} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder="123-45-678-90-00">
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactPhoneSvg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
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
                    <input type="name" id="contactName" name="name" required placeholder="name">
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactNameSvg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <label for="contactSurname">Surname:</label>
                    <input type="surname" id="contactSurname" name="surname" required placeholder="surname">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 22 22" id="User-Large--Streamline-Font-Awesome" height="22" width="22"><desc>User Large Streamline Icon: https://streamlinehq.com</desc><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc.--><path d="M10.5 11.8125a5.90625 5.90625 0 1 0 0 -11.8125 5.90625 5.90625 0 1 0 0 11.8125zm-3.8841796875 1.3125C2.961328125 13.125 0 16.086328124999998 0 19.740820312500002c0 0.697265625 0.566015625 1.2591796874999999 1.2591796874999999 1.2591796874999999h18.481640625c0.697265625 0 1.2591796874999999 -0.566015625 1.2591796874999999 -1.2591796874999999 0 -3.6544921875 -2.961328125 -6.6158203125 -6.6158203125 -6.6158203125H6.6158203125z" stroke-width="1"></path></svg>
                    <label for="contactEmail">Email:</label>
                    <input type="email" id="contactEmail" name="email" required placeholder="example@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactMailSvg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                    <label for="contactPhone">Phone:</label>
                    <input type="tel" id="contactPhone" name="phone" required pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder="123-45-678-90-00">
                    <svg xmlns="http://www.w3.org/2000/svg" id="contactPhoneSvg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
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
                            <p style="font-size: 1.5vw" id="userProfileName">${name}</p>
                            <p id="userProfileEmail">${email}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <a class="js-menu-items" href="/inbox">
                        <button>
                        <svg style="display: block; float: left; margin-right: 7px;"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"
                            id="Mail-Send-Envelope--Streamline-Sharp" height="32" width="32">
                            <desc>Mail Send Envelope Streamline Icon: https://streamlinehq.com</desc>
                            <g id="mail-send-envelope--envelope-email-message-unopened-sealed-close">
                            <path id="Rectangle 846" fill="#0000001f" d="M1.0605 3.2484H22.9395V20.7516H1.0605Z"
                                stroke-width="1.5"></path>
                            <path id="Rectangle 847" stroke="#ffffff" d="M1.0605 3.2484H22.9395V20.7516H1.0605Z"
                                stroke-width="1.5"></path>
                            <path id="Vector 2539" stroke="#ffffff" d="M1.0605 6.5302L12 13.0939L22.9395 6.5302"
                                stroke-width="1.5"></path>
                            </g>
                        </svg>
                        Messages
                        </button>
                    </a>
                </li>
                <li>
                    <a class="js-menu-items settings-item" href="/settings">
                        <button>
                        <svg style="display: block; float: left; margin-right: 7px;" 
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"
                            id="Settings-5-Fill--Streamline-Mingcute-Fill" height="32" width="32">
                            <desc>Settings 5 Fill Streamline Icon: https://streamlinehq.com</desc>
                            <g fill="none" fill-rule="nonzero">
                            <path
                                d="M32 0v32H0V0h32ZM16.790666666666667 31.010666666666665l-0.014666666666666665 0.0026666666666666666 -0.09466666666666665 0.04666666666666667 -0.026666666666666665 0.005333333333333333 -0.018666666666666665 -0.005333333333333333 -0.09466666666666665 -0.04666666666666667c-0.013333333333333332 -0.005333333333333333 -0.025333333333333333 -0.0013333333333333333 -0.032 0.006666666666666666l-0.005333333333333333 0.013333333333333332 -0.02266666666666667 0.5706666666666667 0.006666666666666666 0.026666666666666665 0.013333333333333332 0.017333333333333333 0.13866666666666666 0.09866666666666665 0.019999999999999997 0.005333333333333333 0.016 -0.005333333333333333 0.13866666666666666 -0.09866666666666665 0.016 -0.021333333333333333 0.005333333333333333 -0.02266666666666667 -0.02266666666666667 -0.5693333333333332c-0.0026666666666666666 -0.013333333333333332 -0.011999999999999999 -0.02266666666666667 -0.02266666666666667 -0.023999999999999997Zm0.35333333333333333 -0.15066666666666667 -0.017333333333333333 0.0026666666666666666 -0.24666666666666665 0.124 -0.013333333333333332 0.013333333333333332 -0.004 0.014666666666666665 0.023999999999999997 0.5733333333333333 0.006666666666666666 0.016 0.010666666666666666 0.009333333333333332 0.268 0.124c0.016 0.005333333333333333 0.030666666666666665 0 0.03866666666666667 -0.010666666666666666l0.005333333333333333 -0.018666666666666665 -0.04533333333333334 -0.8186666666666667c-0.004 -0.016 -0.013333333333333332 -0.026666666666666665 -0.026666666666666665 -0.02933333333333333Zm-0.9533333333333333 0.0026666666666666666a0.030666666666666665 0.030666666666666665 0 0 0 -0.036 0.008l-0.008 0.018666666666666665 -0.04533333333333334 0.8186666666666667c0 0.016 0.009333333333333332 0.026666666666666665 0.02266666666666667 0.032l0.019999999999999997 -0.0026666666666666666 0.268 -0.124 0.013333333333333332 -0.010666666666666666 0.005333333333333333 -0.014666666666666665 0.02266666666666667 -0.5733333333333333 -0.004 -0.016 -0.013333333333333332 -0.013333333333333332 -0.24533333333333332 -0.12266666666666666Z"
                                stroke-width="1"></path>
                            <path fill="#ffffff"
                                d="M19.21333333333333 3.0573333333333332a13.262666666666664 13.262666666666664 0 0 1 3.6666666666666665 1.5199999999999998 1.3333333333333333 1.3333333333333333 0 0 1 0.6266666666666666 1.3586666666666665c-0.15066666666666667 0.9186666666666665 0.07733333333333334 1.6213333333333333 0.5066666666666666 2.0506666666666664 0.42933333333333334 0.42933333333333334 1.1333333333333333 0.6573333333333333 2.0506666666666664 0.5066666666666666a1.3333333333333333 1.3333333333333333 0 0 1 1.3586666666666665 0.6266666666666666 13.26 13.26 0 0 1 1.5199999999999998 3.6666666666666665 1.3333333333333333 1.3333333333333333 0 0 1 -0.5173333333333333 1.4053333333333333c-0.7559999999999999 0.5426666666666666 -1.0933333333333333 1.2 -1.0933333333333333 1.808 0 0.608 0.3373333333333333 1.2666666666666666 1.0933333333333333 1.8093333333333332a1.3333333333333333 1.3333333333333333 0 0 1 0.5173333333333333 1.404 13.262666666666664 13.262666666666664 0 0 1 -1.5199999999999998 3.6666666666666665 1.3333333333333333 1.3333333333333333 0 0 1 -1.3586666666666665 0.6266666666666666c-0.9186666666666665 -0.15066666666666667 -1.6213333333333333 0.07866666666666666 -2.0506666666666664 0.5066666666666666 -0.42933333333333334 0.42933333333333334 -0.6573333333333333 1.1333333333333333 -0.5066666666666666 2.0506666666666664a1.3333333333333333 1.3333333333333333 0 0 1 -0.6266666666666666 1.3599999999999999 13.264 13.264 0 0 1 -3.6666666666666665 1.5199999999999998 1.3333333333333333 1.3333333333333333 0 0 1 -1.4053333333333333 -0.5173333333333333c-0.5426666666666666 -0.7573333333333332 -1.2 -1.0933333333333333 -1.808 -1.0933333333333333 -0.608 0 -1.2666666666666666 0.33599999999999997 -1.8093333333333332 1.0933333333333333a1.3333333333333333 1.3333333333333333 0 0 1 -1.404 0.5173333333333333 13.264 13.264 0 0 1 -3.6666666666666665 -1.5199999999999998 1.3333333333333333 1.3333333333333333 0 0 1 -0.6266666666666666 -1.3599999999999999c0.15066666666666667 -0.9173333333333332 -0.07866666666666666 -1.62 -0.5066666666666666 -2.0493333333333332 -0.43066666666666664 -0.42933333333333334 -1.1333333333333333 -0.6586666666666666 -2.0506666666666664 -0.5066666666666666a1.3333333333333333 1.3333333333333333 0 0 1 -1.3599999999999999 -0.6266666666666666 13.264 13.264 0 0 1 -1.5199999999999998 -3.669333333333333 1.3333333333333333 1.3333333333333333 0 0 1 0.5173333333333333 -1.404c0.7573333333333332 -0.5413333333333333 1.0933333333333333 -1.2 1.0933333333333333 -1.808 0 -0.6066666666666667 -0.33599999999999997 -1.2666666666666666 -1.0933333333333333 -1.808a1.3333333333333333 1.3333333333333333 0 0 1 -0.5173333333333333 -1.404 13.262666666666664 13.262666666666664 0 0 1 1.5199999999999998 -3.6679999999999997 1.3333333333333333 1.3333333333333333 0 0 1 1.3599999999999999 -0.6266666666666666c0.9173333333333332 0.15066666666666667 1.62 -0.07733333333333334 2.0493333333333332 -0.5066666666666666 0.42933333333333334 -0.42933333333333334 0.6586666666666666 -1.1333333333333333 0.5066666666666666 -2.0506666666666664a1.3333333333333333 1.3333333333333333 0 0 1 0.6266666666666666 -1.3586666666666665 13.261333333333333 13.261333333333333 0 0 1 3.6679999999999997 -1.5199999999999998 1.3333333333333333 1.3333333333333333 0 0 1 1.404 0.5173333333333333c0.5426666666666666 0.7559999999999999 1.2013333333333334 1.0933333333333333 1.8093333333333332 1.0933333333333333 0.6066666666666667 0 1.2666666666666666 -0.3373333333333333 1.808 -1.0933333333333333a1.3333333333333333 1.3333333333333333 0 0 1 1.404 -0.5173333333333333ZM16 9.333333333333332a6.666666666666666 6.666666666666666 0 1 0 0 13.333333333333332 6.666666666666666 6.666666666666666 0 0 0 0 -13.333333333333332Zm0 2.6666666666666665a4 4 0 1 1 0 8 4 4 0 0 1 0 -8Z"
                                stroke-width="1"></path>
                            </g>
                        </svg>
                        Settings
                        </button>
                    </a>
                </li>
                <li>
                    <a class="js-menu-items logout-item" href="/">
                        <button>
                        <svg style="display: block; float: left; margin-right: 7px;"  
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" id="Logout-1--Streamline-Core"
                            height="32" width="32">
                            <desc>Logout 1 Streamline Icon: https://streamlinehq.com</desc>
                            <g id="logout-1--arrow-exit-frame-leave-logout-rectangle-right">
                            <path id="Union" fill="#ffffff" fill-rule="evenodd"
                                d="M0 3.4285714285714284C0 1.535024 1.535024 0 3.4285714285714284 0h16c1.8935542857142855 0 3.4285714285714284 1.535024 3.4285714285714284 3.4285714285714284v4.431154285714285c-0.9203199999999999 0.7368914285714285 -1.529302857142857 1.8100571428571428 -1.6785599999999998 2.9973714285714284H13.142857142857142c-2.8403199999999997 0 -5.142857142857142 2.3025142857142855 -5.142857142857142 5.142857142857142 0 2.8403199999999997 2.3025371428571426 5.142857142857142 5.142857142857142 5.142857142857142h8.035725714285713c0.14921142857142858 1.1873371428571429 0.7582171428571428 2.260617142857143 1.6785599999999998 2.9975314285714285V28.57142857142857c0 1.8934857142857142 -1.5350171428571429 3.4285714285714284 -3.4285714285714284 3.4285714285714284h-16C1.535024 32 0 30.464914285714286 0 28.57142857142857v-25.142857142857142Zm25.05828571428571 6.416251428571429c-0.6406857142857142 0.26534857142857143 -1.0582857142857143 0.8904457142857143 -1.0582857142857143 1.5837942857142857v2.2857142857142856H13.142857142857142c-1.2623542857142855 0 -2.2857142857142856 1.02336 -2.2857142857142856 2.2857142857142856 0 1.2623771428571426 1.02336 2.2857142857142856 2.2857142857142856 2.2857142857142856h10.857142857142856v2.2857142857142856c0 0.6933714285714285 0.41759999999999997 1.3184685714285713 1.0582857142857143 1.5837942857142857 0.6404571428571428 0.26534857142857143 1.3778285714285714 0.1186742857142857 1.8681142857142856 -0.37161142857142854l4.571428571428571 -4.571428571428571c0.6694857142857142 -0.669462857142857 0.6694857142857142 -1.7549028571428569 0 -2.424365714285714l-4.571428571428571 -4.571428571428571c-0.49028571428571427 -0.49028571428571427 -1.2276571428571428 -0.6369371428571429 -1.8681142857142856 -0.37161142857142854Z"
                                clip-rule="evenodd" stroke-width="1"></path>
                            </g>
                        </svg>
                        Logout
                        </button>
                    </a>
                </li>
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
};
