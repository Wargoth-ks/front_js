const LogReg = ['.jsLog', '.jsReg'];

export const cleanContent = () => {
    const listDivs = ['.listContacts', '.cardProfile', '.update-profile'];
    listDivs.forEach(div => {
        const divClean = document.querySelector(div);
        divClean.innerHTML = '';
        LogReg.forEach(item => {
            const unAuth = document.querySelector(item)
            unAuth.style.display = 'flex'
        })
    });
};

export const cleanIfAuthorized = () => {
    LogReg.forEach(item => {
        const logOrReg = document.querySelector(item);
        logOrReg.style.display = 'none';
    });
};
