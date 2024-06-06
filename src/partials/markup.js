const markupModalLogin = `<div class="modal-content">
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

const markupModalReg = `<div class="modal-content">
                <span class="close" id="registerClose">&times;</span>
                <h2 class="modal-title">Register</h2>
                <form class="form">
                    <label for="registerEmail">Email:</label>
                    <input type="email" id="registerEmail" name="email" required>
                    <label for="registerPassword">Password:</label>
                    <input type="password" id="registerPassword" name="password" required>
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required>
                    <input type="checkbox" name="" id="idCheckBox">
                    <label for="avatarImg">Choose image (optional):</label>
                    <input disabled type="file" name="avatar" id="inputImg" accept="image/png">
                    <button type="submit">Register</button>
                </form>
            </div>`;

export { markupModalLogin, markupModalReg };
