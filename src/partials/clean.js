const LogReg = ['.jsLog', '.jsReg'];

export const cleanContent = () => {
    const parent = document.querySelector('.jsListItems');
    const childList = [...parent.children];

    const listDivs = ['.listContacts', '.cardProfile', '.update-profile'];

    listDivs.forEach(div => {
        const divClean = document.querySelector(div);
        divClean.innerHTML = '';
        LogReg.forEach(item => {
            const unAuth = document.querySelector(item);
            unAuth.style.display = 'flex';
        });
    });
    childList.forEach(child => {
        if (
            child.className == 'jsMenu' ||
            child.className == 'jsChat' ||
            child.className == 'jsInbox' ||
            child.className == 'jsAdd'
        ) {
            parent.removeChild(child);
        }
    });
};

export const cleanIfAuthorized = () => {
    LogReg.forEach(item => {
        const logOrReg = document.querySelector(item);
        logOrReg.style.display = 'none';
    });
};
