const e=`<div class="modal-content">
                <span class="close" id="loginClose">&times;</span>
                <h2 class="modal-title">Login</h2>
                <form class="form">
                    <label for="loginEmail">Email:</label>
                    <input type="email" id="loginEmail" name="email" required>
                    <label for="loginPassword">Password:</label>
                    <input type="password" id="loginPassword" name="password" required>
                    <button type="submit">Login</button>
                </form>
            </div>`,s=`<div class="modal-content">
                <span class="close" id="registerClose">&times;</span>
                <h2 class="modal-title">Register</h2>
                <form class="form">
                    <label for="registerEmail">Email:</label>
                    <input type="email" id="registerEmail" name="email" required>
                    <label for="registerPassword">Password:</label>
                    <input type="password" id="registerPassword" name="password" required>
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required>
                    <button type="submit">Register</button>
                </form>
            </div>`,a=document.querySelectorAll(".js-btns"),l=document.querySelectorAll(".modal");function i(e){e.style.display="none",e.innerHTML=""}a.forEach((a,r)=>{let o=l[r];a.addEventListener("click",()=>{switch(o.style.display="block",r){case 0:o.insertAdjacentHTML("afterbegin",e);break;case 1:o.insertAdjacentHTML("afterbegin",s);break;default:console.dir(r)}o.querySelector(".close").addEventListener("click",()=>{i(o)}),a.addEventListener("keydown",e=>{"Escape"===e.code&&i(o)})})});
//# sourceMappingURL=index.aeba4979.js.map
